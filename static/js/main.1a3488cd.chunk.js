(this["webpackJsonpignat-incubator"]=this["webpackJsonpignat-incubator"]||[]).push([[0],{11:function(e,n,t){e.exports={groupInput:"SuperInputText_groupInput__i3cfN",superInput:"SuperInputText_superInput__3XH9u",label:"SuperInputText_label__3f5ky",bar:"SuperInputText_bar__2KFL0",errorInput:"SuperInputText_errorInput__3ei0N",error:"SuperInputText_error__2J82S"}},14:function(e,n,t){e.exports={supperButton:"SuperButton_supperButton__jSPYs",default:"SuperButton_default__-BXUG",red:"SuperButton_red__1kaz_"}},15:function(e,n,t){e.exports={body:"Error404_body__2bz1W",rocket:"Error404_rocket__3b3xA",hgroup:"Error404_hgroup__3MMfc"}},16:function(e,n,t){e.exports={label:"SuperCheckbox_label__kF06l",checkbox:"SuperCheckbox_checkbox__Imn1x",spanClassName:"SuperCheckbox_spanClassName__1K9ch"}},19:function(e,n,t){e.exports={blue:"HW4_blue__2RJeg",column:"HW4_column__2ZS4I",testSpanError:"HW4_testSpanError___Mj8X"}},25:function(e,n,t){e.exports={App:"App_App__1Sc4o"}},31:function(e,n,t){},38:function(e,n,t){"use strict";t.r(n);var a=t(1),r=t.n(a),c=t(24),s=t.n(c),o=(t(31),t(25)),i=t.n(o),l=t(8),j=t(7),u=t.n(j),b=t(2),d=t(15),h=t.n(d),x=t(0);var _=function(){return Object(x.jsxs)("div",{className:h.a.body,children:[Object(x.jsx)("div",{className:h.a.rocket}),Object(x.jsxs)("div",{className:h.a.hgroup,children:[Object(x.jsx)("h1",{children:"Page Not Found"}),Object(x.jsx)("h2",{children:"We couldn't find what you were looking for."})]})]})},p=t(22),O=t(9),m=t(12),v=t(11),N=t.n(v),g=function(e){e.type;var n=e.onChange,t=e.onChangeText,a=e.onKeyPress,r=e.onEnter,c=e.error,s=e.className,o=e.spanClassName,i=e.label,l=Object(m.a)(e,["type","onChange","onChangeText","onKeyPress","onEnter","error","className","spanClassName","label"]),j="".concat(N.a.error," ").concat(o||""),u=c?"".concat(N.a.errorInput," ").concat(s):"".concat(N.a.superInput," ").concat(s," ");return Object(x.jsxs)("div",{className:N.a.groupInput,children:[Object(x.jsx)("input",Object(O.a)({type:"text",onChange:function(e){n&&n(e),t&&t(e.currentTarget.value)},onKeyPress:function(e){a&&a(e),r&&"Enter"===e.key&&r()},className:u},l)),Object(x.jsx)("span",{className:N.a.bar}),Object(x.jsx)("div",{className:N.a.label,children:i}),c&&Object(x.jsx)("span",{className:j,children:c})]})},f=t(19),k=t.n(f),C=t(14),y=t.n(C),I=function(e){var n=e.red,t=(e.className,e.children),a=Object(m.a)(e,["red","className","children"]),r=" ".concat(y.a.supperButton," ").concat(n?y.a.default+" "+y.a.red:y.a.default);return Object(x.jsx)("button",Object(O.a)(Object(O.a)({className:r},a),{},{children:Object(x.jsx)("span",{children:t})}))},S=t(16),T=t.n(S),w=function(e){e.type;var n=e.onChange,t=e.onChangeChecked,a=e.className,r=(e.spanClassName,e.children),c=Object(m.a)(e,["type","onChange","onChangeChecked","className","spanClassName","children"]),s="".concat(T.a.checkbox," ").concat(a||"");return Object(x.jsxs)("label",{className:T.a.label,children:[Object(x.jsx)("input",Object(O.a)({type:"checkbox",onChange:function(e){var a=e.currentTarget.checked;n&&n(e),t&&t(a)},className:s},c)),r&&Object(x.jsx)("span",{className:T.a.spanClassName,children:r})]})};var H=function(){var e=Object(a.useState)(""),n=Object(p.a)(e,2),t=n[0],r=n[1],c=t?"":"error",s=function(){c?alert("\u0432\u0432\u0435\u0434\u0438\u0442\u0435 \u0442\u0435\u043a\u0441\u0442..."):alert(t)},o=Object(a.useState)(!1),i=Object(p.a)(o,2),l=i[0],j=i[1];return Object(x.jsxs)("div",{children:[Object(x.jsx)("hr",{}),"homeworks 4",Object(x.jsxs)("div",{className:k.a.column,children:[Object(x.jsx)(g,{value:t,onChangeText:r,onEnter:s,error:c,label:"Name"}),Object(x.jsx)(g,{value:t,onChangeText:r,label:"Password",className:k.a.blue}),Object(x.jsx)(I,{children:"default"}),Object(x.jsx)(I,{red:!0,onClick:s,children:"delete "}),Object(x.jsx)(I,{disabled:!0,children:"disabled"}),Object(x.jsx)(w,{checked:l,onChangeChecked:j,children:"some text "}),Object(x.jsx)(w,{checked:l,onChange:function(e){return j(e.currentTarget.checked)}})]}),Object(x.jsx)("hr",{}),Object(x.jsx)("hr",{})]})};var M=function(){return Object(x.jsx)("div",{children:Object(x.jsx)(H,{})})},B=function(){return Object(x.jsx)("div",{children:"Junior"})},E=function(){return Object(x.jsx)("div",{children:"JuniorPlus"})},P="/pre-junior",J="/junior",L="/junior_plus";var W=function(){return Object(x.jsx)(x.Fragment,{children:Object(x.jsxs)(b.d,{children:[Object(x.jsx)(b.b,{path:"/",exact:!0,render:function(){return Object(x.jsx)(b.a,{to:P})}}),Object(x.jsx)(b.b,{path:P,render:function(){return Object(x.jsx)(M,{})}}),Object(x.jsx)(b.b,{path:J,render:function(){return Object(x.jsx)(B,{})}}),Object(x.jsx)(b.b,{path:L,render:function(){return Object(x.jsx)(E,{})}}),Object(x.jsx)(b.b,{render:function(){return Object(x.jsx)(_,{})}})]})})};var A=function(){return Object(x.jsxs)("div",{className:u.a.header,children:[Object(x.jsx)("div",{className:u.a.logo,children:"IT-INCUBATOR"}),Object(x.jsxs)("div",{className:u.a.navigation,children:[Object(x.jsxs)("div",{className:u.a.arrow,children:["\xab ",Object(x.jsx)("span",{children:" Menu"})]}),Object(x.jsx)("nav",{className:u.a.nav,children:Object(x.jsxs)("ul",{className:u.a.list,children:[Object(x.jsx)("li",{children:Object(x.jsx)(l.b,{to:P,activeClassName:u.a.activeLink,children:"PreJunior"})}),Object(x.jsx)("li",{children:Object(x.jsx)(l.b,{to:J,activeClassName:u.a.activeLink,children:"Junior"})}),Object(x.jsx)("li",{children:Object(x.jsx)(l.b,{to:L,activeClassName:u.a.activeLink,children:"JuniorPlus"})})]})})]})]})};var F=function(){return Object(x.jsx)(x.Fragment,{children:Object(x.jsxs)(l.a,{children:[Object(x.jsx)(A,{}),Object(x.jsx)(W,{})]})})};var K=function(){return Object(x.jsx)("div",{className:i.a.App,children:Object(x.jsx)(F,{})})};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(Object(x.jsx)(r.a.StrictMode,{children:Object(x.jsx)(K,{})}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},7:function(e,n,t){e.exports={header:"Header_header__2TTZF",logo:"Header_logo__27wDg",navigation:"Header_navigation__mqEx_",arrow:"Header_arrow__3hjmT",mymove:"Header_mymove__icZxM",nav:"Header_nav__TGtIq",myMoveNav:"Header_myMoveNav__1xbLZ",myNotMove:"Header_myNotMove__1giBg",myNotMoveNav:"Header_myNotMoveNav__wrXPp",list:"Header_list__i6P3Y",activeLink:"Header_activeLink__1XN2-"}}},[[38,1,2]]]);
//# sourceMappingURL=main.1a3488cd.chunk.js.map