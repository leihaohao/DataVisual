import Vue from 'vue';
import {debounce} from '@/libs/event'
Vue.directive('drag', {
  bind(el, binding) {
    if(binding.value.unactive)
      return 
    el.onmousedown = (e) => {
      let disX = e.clientX - el.offsetLeft
      let disY = e.clientY - el.offsetTop

      document.onmousemove = (e) => {
        let l = e.clientX - disX;
        let t = e.clientY - disY;
        let obj = {x: l,y: t};
        el.style.left = l + 'px';
        el.style.top = t + 'px';
        //console.log(l,t);
        if(932<t+el.clientHeight){
          el.style.top = (932-el.clientHeight)+'px';
          obj.y = (932-el.clientHeight);
        }
        if(t<0){
            el.style.top = 0+'px';
            obj.y = 0;
        }
        if(l<0){
            el.style.left = 0+'px';
            obj.x = 0;
        }
        if(l>1440){
          el.style.left = 1440+'px';
          obj.x = 1440;
        }

        binding.value.callback(obj);
      }
      document.onmouseup = (e) => {
        document.onmousemove = null
        document.onmouseup = null
      }
    }
  }
})
Vue.directive('operate', {
  bind(el, binding) {
    if(binding.value.unactive)
      return 
    let elHtml = el.innerHTML;
    el.onmouseenter  = (e) =>{
      el.classList.add('f-pr');
      var tips = `<button class="ele-delete ivu-btn ivu-btn-primary ivu-btn-circle ivu-btn-small" type="button"><span>隐藏</span></button>`;
      if(!el.querySelector('.ele-operate')){
        el.innerHTML += tips;
        el.querySelector('.ele-delete').onclick = (e) =>{
          
          if(e.target.classList.toString().indexOf('opacity')!=-1){
            el.querySelector('.ele-delete span').innerText = '显示';
            e.target.classList.remove('opacity');
            binding.value.callback('show',binding.value.type,binding.value.index);
          }else{
            el.querySelector('.ele-delete span').innerText = '隐藏';
            e.target.classList.add('opacity');
            binding.value.callback('hide',binding.value.type,binding.value.index);
          }
          
        }
      }
    }
    el.onmouseleave = (e) =>{
      el.innerHTML = elHtml;
    }
  }
})