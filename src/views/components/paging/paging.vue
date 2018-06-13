<style>
	.mo-paging {
	    display: inline-block;
	    padding: 0;
	    margin: 0;
	    font-size: 12px;
	    list-style: none;
	    user-select: none;
	}

	.mo-paging > .paging-item {
	    display: inline-block;
	    width: auto;
	    margin-left: 10px;
	    border: 1px solid rgb(15, 112, 208);
	    background-color: rgba(32, 54, 178, 0.2);
	    opacity: 0.96;
	    text-align: center;
	    color: #08a8b1;
	    padding: 8px 12px;
	    cursor: pointer;
	}

	.mo-paging > .paging-item:first-child {
	    margin-left: 0;
	}

	.mo-paging > .paging-item:hover {
	    background-color: #5691f0;
	    color: #CCCCCC;
	}

	.mo-paging > .paging-item.paging-item--disabled, .mo-paging > .paging-item.paging-item--more {
	    background-color: rgba(168, 168, 168, 0.8);
	    color: #FFFFFF;
	}

	.mo-paging > .paging-item.paging-item--disabled {
	    cursor: not-allowed;
	    opacity: .75;
	}

	.mo-paging > .paging-item.paging-item--more, .mo-paging > .paging-item.paging-item--current {
	    cursor: default;
	}

	.mo-paging > .paging-item.paging-item--current {
	    background-color: #0275d8;
	    color: #fff;
	    position: relative;
	    z-index: 1;
	    border-color: #0275d8;
	}
</style>
<template>
	<ul class="mo-paging">
		<!-- first -->
		<li :class="['paging-item', 'paging-item--first', {'paging-item--disabled' : index === 1}]" @click="first">首页</li>
		<!-- prev -->
		<li :class="['paging-item', 'paging-item--prev', {'paging-item--disabled' : index === 1}]" @click="prev">上一页</li>
		<li :class="['paging-item', 'paging-item--more']" v-if="showPrevMore">...</li>
		<li :class="['paging-item', {'paging-item--current' : index === pager}]" v-for="pager in pagers" @click="go(pager)">{{pager}}</li>
		<li :class="['paging-item', 'paging-item--more']" v-if="showNextMore">...</li>
		<!-- next -->
		<li :class="['paging-item', 'paging-item--next', {'paging-item--disabled' : index === pages}]" @click="next">下一页</li>
		<!-- last -->
		<li :class="['paging-item', 'paging-item--last', {'paging-item--disabled' : index === pages}]" @click="last">末页</li>
    </ul>
</template>

<script>
	export default {
	    name: 'paging',
	    components: {
	    },
	    computed : {
			//计算总页码
			pages:function(){
				return Math.ceil(this.size / this.limit)
			},
			//计算页码，当count等变化时自动计算
			pagers:function() {
				const array = []
				const perPages = this.perPages
				const pageCount = this.pages
				let current = this.index
				const _offset = (perPages - 1) / 2
				
				const offset = {
					start : current - _offset,
					end   : current + _offset
				}

				//-1, 3
				if (offset.start < 1) {
					offset.end = offset.end + (1 - offset.start)
					offset.start = 1
				}
				if (offset.end > pageCount) {
					offset.start = offset.start - (offset.end - pageCount)
					offset.end = pageCount
				}
				if (offset.start < 1) offset.start = 1

				this.showPrevMore = (offset.start > 1)
				this.showNextMore = (offset.end < pageCount)

				for (let i = offset.start; i <= offset.end; i++) {
					array.push(i)
				}

				return array
			}
		},
		data:function() {
			return {
				index : this.pageIndex, //当前页码
				limit : this.pageSize, //每页显示条数
				size : this.total || 1, //总记录数
				showPrevMore : false,
				showNextMore : false
			}
		},
		watch : {
			pageIndex(val) {
				this.index = val || 1
			},
			pageSize(val) {
				this.limit = val || 10
			},
			total(val) {
				this.size = val || 1
			}
		},
	    props : {
			//页面中的可见页码，其他的以...替代, 必须是奇数
			perPages : { 
				type : Number,
				default : 5 
			},
			//当前页码
			pageIndex : {
				type : Number,
				default : 1
			},
			//每页显示条数
			pageSize : {
				type : Number,
				default : 10
			},
			//总记录数
			total : {
				type : Number,
				default : 1
			},
		},
	    methods: {
	        prev:function(){
				if (this.index > 1) {
					this.go(this.index - 1)
				}
			},
			next:function(){
				if (this.index < this.pages) {
					this.go(this.index + 1)
				}
			},
			first:function(){
				if (this.index !== 1) {
					this.go(1)
				}
			},
			last:function(){
				if (this.index != this.pages) {
					this.go(this.pages)
				}
			},
			go:function(page) {
				if (this.index !== page) {
					this.index = page
					//父组件通过change方法来接受当前的页码
					this.$emit('change', this.index)
				}
			}
	    }
	};
</script>