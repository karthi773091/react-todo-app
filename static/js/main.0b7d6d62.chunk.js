(this["webpackJsonpreact-todo-app"]=this["webpackJsonpreact-todo-app"]||[]).push([[0],{15:function(t,e,n){},17:function(t,e,n){"use strict";n.r(e);var o=n(2),c=n.n(o),i=n(8),a=n.n(i),r=(n(15),n(7)),d=n(3),s=n(1);var u=function(t){var e=Object(o.useState)(t.edit?t.edit.value:""),n=Object(d.a)(e,2),c=n[0],i=n[1],a=Object(o.useRef)(null);Object(o.useEffect)((function(){a.current.focus()}));var r=function(t){i(t.target.value)},u=function(e){e.preventDefault(),t.onSubmit({id:Math.floor(1e4*Math.random()),text:c}),i("")};return Object(s.jsx)("form",{onSubmit:u,className:"todo-form",children:t.edit?Object(s.jsxs)(s.Fragment,{children:[Object(s.jsx)("input",{placeholder:"Update your item",value:c,onChange:r,name:"text",ref:a,className:"todo-input edit"}),Object(s.jsx)("button",{onClick:u,className:"todo-button edit",children:"Update"})]}):Object(s.jsxs)(s.Fragment,{children:[Object(s.jsx)("input",{placeholder:"Add a todo",value:c,onChange:r,name:"text",className:"todo-input",ref:a}),Object(s.jsx)("button",{onClick:u,className:"todo-button",children:"Add todo"})]})})},l=n(9),j=n(10),b=function(t){var e=t.todos,n=t.completeTodo,c=t.removeTodo,i=t.updateTodo,a=Object(o.useState)({id:null,value:""}),r=Object(d.a)(a,2),b=r[0],m=r[1];return b.id?Object(s.jsx)(u,{edit:b,onSubmit:function(t){i(b.id,t),m({id:null,value:""})}}):e.map((function(t,e){return Object(s.jsxs)("div",{className:t.isComplete?"todo-row complete":"todo-row",children:[Object(s.jsx)("div",{onClick:function(){return n(t.id)},children:t.text},t.id),Object(s.jsxs)("div",{className:"icons",children:[Object(s.jsx)(l.a,{onClick:function(){return c(t.id)},className:"delete-icon"}),Object(s.jsx)(j.a,{onClick:function(){return m({id:t.id,value:t.text})},className:"edit-icon"})]})]},e)}))};var m=function(){var t=Object(o.useState)([]),e=Object(d.a)(t,2),n=e[0],c=e[1];return Object(s.jsxs)("div",{children:[Object(s.jsx)("h1",{children:"List your Todos!!"}),Object(s.jsx)(u,{onSubmit:function(t){if(t.text&&!/^\s*$/.test(t.text)){var e=[t].concat(Object(r.a)(n));c(e)}}}),Object(s.jsx)(b,{todos:n,CompleteTodo:function(t){var e=n.map((function(e){return e.id===t&&(e.isComplete=!e.isComplete),e}));c(e)},removeTodo:function(t){var e=Object(r.a)(n).filter((function(e){return e.id!==t}));c(e)},updateTodo:function(t,e){e.text&&!/^\s*$/.test(e.text)&&c((function(n){return n.map((function(n){return n.id===t?e:n}))}))}})]})};var f=function(){return Object(s.jsx)("div",{className:"ToDo-App",children:Object(s.jsx)(m,{})})};a.a.render(Object(s.jsx)(c.a.StrictMode,{children:Object(s.jsx)(f,{})}),document.getElementById("root"))}},[[17,1,2]]]);
//# sourceMappingURL=main.0b7d6d62.chunk.js.map