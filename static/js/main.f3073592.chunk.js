(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{120:function(e,t,a){e.exports=a(200)},125:function(e,t,a){},200:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(6),l=a.n(o),c=(a(125),a(118)),i=a(68),s=(a(53),a(204)),m=a(9),u=s.a.Text;var d=function(e){return r.a.createElement("div",{className:"footer"},r.a.createElement("a",{href:"https://github.com/jordanliu/todos",rel:"noopener noreferrer",target:"_blank"},r.a.createElement(u,null," View code on GitHub ")," ",r.a.createElement(m.a,{type:"github",style:{fontSize:14}})))},f=a(202),E=function(e){var t=e.todos,a=e.deleteTodo;return r.a.createElement("div",{className:"todo-wrapper"},r.a.createElement(f.a,null,t.length>0&&t.map(function(e,t){return r.a.createElement(f.a.Item,{key:t.toString(),className:"list-item",actions:[r.a.createElement(m.a,{type:"check-circle",theme:"filled",className:"circle check"}),r.a.createElement(m.a,{type:"close-circle",theme:"filled",className:"circle closed",onClick:function(){a(t)}})]},e)})))},h=a(205),p=a(206),g=a(90),v=function(e){var t=e.saveTodo,a=Object(n.useState)(""),o=Object(i.a)(a,2),l=o[0],c=o[1],s=function(e){""===l.toString()&&h.a.error("Enter a to-do item!"),e.preventDefault(),t(l),c("")};return r.a.createElement("div",{className:"field-input"},r.a.createElement("form",{onSubmit:s},r.a.createElement(p.a,{className:"global-search",maxLength:36,size:"large",style:{width:"100%"},placeholder:"Enter a to do list item",value:l,onChange:function(e){return c(e.target.value)},suffix:r.a.createElement(g.a,{className:"search-btn",style:{marginRight:-12},size:"large",type:"primary",onClick:s},r.a.createElement(m.a,{type:"plus"}))})))},w=a(207),b=a(203),y=s.a.Title,N=w.a.Header,k=w.a.Content;var S=function(){var e=Object(n.useState)(function(){return JSON.parse(localStorage.getItem("todoData"))||[]}),t=Object(i.a)(e,2),a=t[0],o=t[1];return r.a.useEffect(function(){localStorage.setItem("todoData",JSON.stringify(a))},[a]),r.a.createElement("div",{className:"App"},r.a.createElement(w.a,null,r.a.createElement(N,null,r.a.createElement(y,null,"todos")),r.a.createElement(k,null,r.a.createElement(b.a,null,r.a.createElement(v,{saveTodo:function(e){var t=e.trim();t.length>0&&o([].concat(Object(c.a)(a),[t]))}})),r.a.createElement(E,{todos:a,deleteTodo:function(e){var t=a.filter(function(t,a){return a!==e});o(t)}})),r.a.createElement(d,null)))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(r.a.createElement(S,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},53:function(e,t,a){}},[[120,1,2]]]);
//# sourceMappingURL=main.f3073592.chunk.js.map