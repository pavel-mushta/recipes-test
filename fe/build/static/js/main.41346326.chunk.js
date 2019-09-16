(window.webpackJsonpprojects=window.webpackJsonpprojects||[]).push([[0],{46:function(e,t,r){e.exports=r(76)},72:function(e,t,r){},74:function(e,t,r){},75:function(e,t,r){},76:function(e,t,r){"use strict";r.r(t);var n=r(0),a=r.n(n),o=r(23),c=r(21),i=r(6),s=r(27),l=r.n(s),u=r(22),p="https://test-task-server.herokuapp.com/api/v1/",m=l.a.mark(g),d=l.a.mark(h),E={API_ALL_CATEGORIES:p+"category/all",API_ARTICLES_BY_CATEGORY:p+"article/byCategory/",API_RECIPES_BY_CATEGORY:p+"recipe/byCategory/",API_ARTICLE:p+"article/item/",API_RECIPE:p+"recipe/item/"};function g(e){var t,r,n,a,o=arguments;return l.a.wrap(function(c){for(;;)switch(c.prev=c.next){case 0:return t=o.length>1&&void 0!==o[1]?o[1]:"",c.prev=1,r={headers:{"Content-Type":"application/json"}},c.next=5,fetch(E["API_"+e]+t,r);case 5:return n=c.sent,c.next=8,n.json();case 8:return a=c.sent,c.next=11,Object(u.b)({type:e+"_RECEIVED",ok:n.ok,json:a,urlSuffix:t});case 11:c.next=17;break;case 13:return c.prev=13,c.t0=c.catch(1),c.next=17,Object(u.b)({type:"SERVER_ERROR",err:c.t0});case 17:case"end":return c.stop()}},m,null,[[1,13]])}function h(){return l.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(u.a)([Object(u.c)("GET_ALL_CATEGORIES",function(){return g("ALL_CATEGORIES")}),Object(u.c)("GET_ITEMS_BY_CATEGORY",function(e){return g(e.source.toUpperCase()+"S_BY_CATEGORY",e._id)}),Object(u.c)("GET_ITEM",function(e){return g(e.source.toUpperCase(),e._id)})]);case 2:case"end":return e.stop()}},d)}var b=r(45),f=r(33);function _(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),r.push.apply(r,n)}return r}function O(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?_(r,!0).forEach(function(t){Object(f.a)(e,t,r[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):_(r).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}var y=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"GET_ALL_CATEGORIES":return O({},e,{categories:void 0,loading:(parseInt(e.loading)||0)+1});case"ALL_CATEGORIES_RECEIVED":return O({},e,{categories:t.json,loading:e.loading-1,errorGlobal:!1});case"GET_ITEMS_BY_CATEGORY":return O({},e,{items:O({},e.items,Object(f.a)({},t.source,void 0)),loading:(parseInt(e.loading)||0)+1});case"ARTICLES_BY_CATEGORY_RECEIVED":return O({},e,{items:O({},e.items,{article:t.json}),loading:e.loading-1,errorGlobal:!1});case"RECIPES_BY_CATEGORY_RECEIVED":return O({},e,{items:O({},e.items,{recipe:t.json}),loading:e.loading-1,errorGlobal:!1});case"GET_ITEM":return O({},e,{item:void 0,loading:(parseInt(e.loading)||0)+1});case"ARTICLE_RECEIVED":case"RECIPE_RECEIVED":return O({},e,{item:!!t.ok&&t.json,loading:e.loading-1,errorGlobal:!1});case"SERVER_ERROR":return O({},e,{loading:e.loading-1,errorGlobal:!0,errorGlobalMsg:t.err.toString()});case"SET_CURRENT_CATEGORY_ID":return O({},e,{currentCategoryId:t._id});default:return e}},C=r(11),j=r(12),v=r(14),I=r(13),R=r(15),T=r(18),G=r(19),A=r(30),k=r.n(A),x=Object(i.b)(function(e){return{errorGlobalMsg:e.errorGlobalMsg}},null)(function(e){var t=e.errorGlobalMsg;return a.a.createElement(k.a,{variant:"danger"},"Something gone wrong: ",t)}),P=(r(72),function(e){function t(){return Object(C.a)(this,t),Object(v.a)(this,Object(I.a)(t).apply(this,arguments))}return Object(R.a)(t,e),Object(j.a)(t,[{key:"render",value:function(){var e=this;return void 0!==this.props.categories&&a.a.createElement(a.a.Fragment,null,a.a.createElement("ul",{className:"categories-tree pl-2"},this.props.categories.filter(function(t){return t.parentId===e.props.parentId}).sort(function(e,t){return e.title.localeCompare(t.title)}).map(function(r){return a.a.createElement("li",{key:r._id},a.a.createElement(T.b,{to:"/category/"+r._id,className:"category-url"},r.title),a.a.createElement(t,{key:"sub_"+r._id,parentId:r._id,categories:e.props.categories}))})))}}]),t}(n.Component));P.defaultProps={parentId:null};var S=Object(i.b)(function(e){return{categories:e.categories}},null)(P),w=function(e){function t(){return Object(C.a)(this,t),Object(v.a)(this,Object(I.a)(t).apply(this,arguments))}return Object(R.a)(t,e),Object(j.a)(t,[{key:"getParentCategories",value:function(e){var t=e,r=[],n={};this.props.categories.map(function(e,t){return n[e._id]=t,!0});do{var a=this.props.categories[n[t]];void 0!==a&&(t=a.parentId,r.push({to:"/category/"+a._id,exact:!0,text:a.title}))}while(null!=t);return r.reverse()}},{key:"render",value:function(){var e=!0,t=[{to:"/",exact:!0,text:"Home"}];if(void 0===this.props.categories)return null;switch(this.props.path){case"/category/:_id":t=t.concat(this.getParentCategories(this.props.currentCategoryId));break;case"/article/:_id":if(void 0===this.props.item)return null;(t=t.concat(this.getParentCategories(this.props.item.categoryId))).push({to:"/article/"+this.props.item._id,exact:!0,text:this.props.item.title});break;case"/recipe/:_id":if(void 0===this.props.item)return null;(t=t.concat(this.getParentCategories(this.props.item.categoryId))).push({to:"/recipe/"+this.props.item._id,exact:!0,text:this.props.item.title});break;case"/not_found":t.push({to:"/not_found",exact:!0,text:"Page not found"})}return a.a.createElement(a.a.Fragment,null,t.map(function(t){var r=a.a.createElement("span",{key:"bc_url_to_"+t.to},!e&&a.a.createElement("span",null," :: ")," ",a.a.createElement(T.b,{className:"pl-0 pr-0 pt-0",exact:t.exact,to:t.to,activeClassName:"active"},t.text));return e=!1,r}),a.a.createElement("hr",null))}}]),t}(n.Component),N=Object(i.b)(function(e){return{categories:e.categories,currentCategoryId:e.currentCategoryId,loading:e.loading,item:e.item}},null)(w),Y=function(e){return a.a.createElement(a.a.Fragment,null,a.a.createElement(N,e.match),a.a.createElement(k.a,{variant:"danger"},"Page not found!"))};var L=function(e){function t(){return Object(C.a)(this,t),Object(v.a)(this,Object(I.a)(t).apply(this,arguments))}return Object(R.a)(t,e),Object(j.a)(t,[{key:"componentDidMount",value:function(){this.props.getItemsByCategory(this.props.currentCategoryId,this.props.source)}},{key:"componentDidUpdate",value:function(e){e.currentCategoryId!==this.props.currentCategoryId&&this.props.getItemsByCategory(this.props.currentCategoryId,this.props.source)}},{key:"render",value:function(){var e,t=this;return void 0===this.props.items||void 0===this.props.items[this.props.source]?null:a.a.createElement(a.a.Fragment,null,a.a.createElement("h6",{className:"mt-3"},(e=this.props.source).charAt(0).toUpperCase()+e.slice(1),"s"),0===this.props.items[this.props.source].length&&a.a.createElement("div",null,"No ",this.props.source,"s for current category"),this.props.items[this.props.source].sort(function(e,t){return e.title.localeCompare(t.title)}).map(function(e){return a.a.createElement("div",{className:"mt-1",key:e._id},a.a.createElement("p",{className:"mb-0"},a.a.createElement(T.b,{to:"/"+t.props.source+"/"+e._id},e.title)),void 0!==e.description&&a.a.createElement("p",{className:"mb-0"},a.a.createElement("small",null,a.a.createElement("i",null,e.description))))}))}}]),t}(n.Component),D=Object(i.b)(function(e){return{categories:e.categories,items:e.items}},{getItemsByCategory:function(e,t){return{type:"GET_ITEMS_BY_CATEGORY",_id:e,source:t}}})(L),M=function(e){function t(){return Object(C.a)(this,t),Object(v.a)(this,Object(I.a)(t).apply(this,arguments))}return Object(R.a)(t,e),Object(j.a)(t,[{key:"render",value:function(){if(this.loading>0||void 0===this.props.categories)return null;var e=this.props.match.params._id,t=this.props.categories.find(function(t){return t._id===e});return void 0===t?a.a.createElement(G.a,{to:"/not_found"}):(this.props.setCurrentCategoryId(e),a.a.createElement(a.a.Fragment,null,a.a.createElement(N,this.props.match),a.a.createElement("h5",{className:"mt-2"},"Category: ",t.title),a.a.createElement("hr",null),a.a.createElement(D,{source:"recipe",currentCategoryId:e}),a.a.createElement("hr",null),a.a.createElement(D,{source:"article",currentCategoryId:e})))}}]),t}(n.Component),B=Object(i.b)(function(e){return{categories:e.categories,loading:e.loading}},{setCurrentCategoryId:function(e){return{type:"SET_CURRENT_CATEGORY_ID",_id:e}}})(M),V=function(e){function t(){return Object(C.a)(this,t),Object(v.a)(this,Object(I.a)(t).apply(this,arguments))}return Object(R.a)(t,e),Object(j.a)(t,[{key:"componentDidMount",value:function(){this.props.getItem(this.props.match.params._id,this.props.source)}},{key:"render",value:function(){return void 0!==this.props.item&&(!1===this.props.item?a.a.createElement(G.a,{to:"/not_found"}):a.a.createElement(a.a.Fragment,null,a.a.createElement(N,this.props.match),a.a.createElement("h5",{className:"mt-2"},"Article: ",this.props.item.title),a.a.createElement("hr",null),void 0!==this.props.item.description&&a.a.createElement("p",null,a.a.createElement("small",null,a.a.createElement("i",null,this.props.item.description))),a.a.createElement("p",null,this.props.item.text)))}}]),t}(n.Component),F=Object(i.b)(function(e){return{item:e.item}},{getItem:function(e,t){return{type:"GET_ITEM",_id:e,source:t}}})(V),U=(r(74),function(){return a.a.createElement("div",{className:"loader"},"Loading...")}),J=(r(75),function(e){function t(){return Object(C.a)(this,t),Object(v.a)(this,Object(I.a)(t).apply(this,arguments))}return Object(R.a)(t,e),Object(j.a)(t,[{key:"componentDidMount",value:function(){this.props.getAllCategories()}},{key:"render",value:function(){return a.a.createElement(T.a,null,this.props.errorGlobal&&a.a.createElement(x,null),a.a.createElement("div",{className:"container mt-3 h-100"},a.a.createElement("div",{className:"row"},a.a.createElement("div",{className:"col-md-4 p-0"},a.a.createElement("div",{className:"border border-secondary bg-light p-3 h-100"},a.a.createElement(S,null))),a.a.createElement("div",{className:"col-md-8 p-0"},a.a.createElement("div",{className:"border border-secondary bg-light p-3 ml-1 h-100"},this.props.loading>0&&a.a.createElement(U,null),a.a.createElement("div",{className:this.props.loading>0?"d-none":""},a.a.createElement(G.d,null,a.a.createElement(G.b,{path:"/",exact:!0,render:function(e){return a.a.createElement(a.a.Fragment,null,a.a.createElement(N,e.match),a.a.createElement("h3",null,"Welcome to recipes frontend"))}}),a.a.createElement(G.b,{path:"/category/:_id",component:B}),a.a.createElement(G.b,{path:"/article/:_id",render:function(e){return a.a.createElement(F,Object.assign({},e,{source:"article"}))}}),a.a.createElement(G.b,{path:"/recipe/:_id",render:function(e){return a.a.createElement(F,Object.assign({},e,{source:"recipe"}))}}),a.a.createElement(G.b,{path:"/not_found",component:Y}),a.a.createElement(G.b,{path:"*",render:function(){return a.a.createElement(G.a,{to:"/not_found"})}}))))))))}}]),t}(n.Component)),H=Object(i.b)(function(e){return{errorGlobal:e.errorGlobal,loading:e.loading}},{getAllCategories:function(){return{type:"GET_ALL_CATEGORIES"}}})(J),W=Object(b.a)(),q=Object(c.d)(y,Object(c.a)(W));W.run(h),Object(o.render)(a.a.createElement(i.a,{store:q},a.a.createElement(H,null)),document.getElementById("root"))}},[[46,1,2]]]);
//# sourceMappingURL=main.41346326.chunk.js.map