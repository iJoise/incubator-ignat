(this["webpackJsonpignat-incubator"]=this["webpackJsonpignat-incubator"]||[]).push([[0],[,,,,,,,,function(e,n,t){e.exports={header:"Header_header__2TTZF",logo:"Header_logo__27wDg",navigation:"Header_navigation__mqEx_",arrow:"Header_arrow__3hjmT",mymove:"Header_mymove__icZxM",nav:"Header_nav__TGtIq",myMoveNav:"Header_myMoveNav__1xbLZ",myNotMove:"Header_myNotMove__1giBg",myNotMoveNav:"Header_myNotMoveNav__wrXPp",list:"Header_list__i6P3Y",activeLink:"Header_activeLink__1XN2-"}},,,,,function(e,n,t){e.exports={groupInput:"SuperInputText_groupInput__i3cfN",superInput:"SuperInputText_superInput__3XH9u",label:"SuperInputText_label__3f5ky",bar:"SuperInputText_bar__2KFL0",errorInput:"SuperInputText_errorInput__3ei0N",error:"SuperInputText_error__2J82S"}},,function(e,n,t){e.exports={supperButton:"SuperButton_supperButton__jSPYs",default:"SuperButton_default__-BXUG",red:"SuperButton_red__1kaz_"}},function(e,n,t){e.exports={body:"Error404_body__2bz1W",rocket:"Error404_rocket__3b3xA",hgroup:"Error404_hgroup__3MMfc"}},function(e,n,t){e.exports={label:"SuperCheckbox_label__kF06l",checkbox:"SuperCheckbox_checkbox__Imn1x",spanClassName:"SuperCheckbox_spanClassName__1K9ch"}},,,function(e,n,t){e.exports={blue:"HW4_blue__2RJeg",column:"HW4_column__2ZS4I",testSpanError:"HW4_testSpanError___Mj8X"}},,,,,function(e,n,t){e.exports={App:"App_App__1Sc4o"}},function(e,n,t){e.exports={supperSpan:"SuperEditableSpan_supperSpan__2WT1e"}},function(e,n,t){e.exports={container:"PreJunior_container__28htv"}},,,,,,function(e,n,t){},,,,,,,function(e,n,t){"use strict";t.r(n);var a=t(1),c=t.n(a),r=t(24),s=t.n(r),o=(t(33),t(25)),i=t.n(o),l=t(10),j=t(8),u=t.n(j),b=t(2),d=t(16),h=t.n(d),x=t(0);var p=function(){return Object(x.jsxs)("div",{className:h.a.body,children:[Object(x.jsx)("div",{className:h.a.rocket}),Object(x.jsxs)("div",{className:h.a.hgroup,children:[Object(x.jsx)("h1",{children:"Page Not Found"}),Object(x.jsx)("h2",{children:"We couldn't find what you were looking for."})]})]})},O=t(11),_=t(7),v=t(9),m=t(13),N=t.n(m),f=function(e){e.type;var n=e.onChange,t=e.onChangeText,a=e.onKeyPress,c=e.onEnter,r=e.error,s=e.className,o=e.spanClassName,i=e.label,l=Object(v.a)(e,["type","onChange","onChangeText","onKeyPress","onEnter","error","className","spanClassName","label"]),j="".concat(N.a.error," ").concat(o||""),u=r?"".concat(N.a.errorInput," ").concat(s):"".concat(N.a.superInput," ").concat(s," ");return Object(x.jsxs)("div",{className:N.a.groupInput,children:[Object(x.jsx)("input",Object(_.a)({type:"text",onChange:function(e){n&&n(e),t&&t(e.currentTarget.value)},onKeyPress:function(e){a&&a(e),c&&"Enter"===e.key&&c()},className:u},l)),Object(x.jsx)("span",{className:N.a.bar}),i&&Object(x.jsx)("div",{className:N.a.label,children:i}),r&&Object(x.jsx)("span",{className:j,children:r})]})},g=t(20),k=t.n(g),C=t(15),S=t.n(C),y=function(e){var n=e.red,t=(e.className,e.children),a=Object(v.a)(e,["red","className","children"]),c=" ".concat(S.a.supperButton," ").concat(n?S.a.default+" "+S.a.red:S.a.default);return Object(x.jsx)("button",Object(_.a)(Object(_.a)({className:c},a),{},{children:Object(x.jsx)("span",{children:t})}))},I=t(17),T=t.n(I),w=function(e){e.type;var n=e.onChange,t=e.onChangeChecked,a=e.className,c=(e.spanClassName,e.children),r=Object(v.a)(e,["type","onChange","onChangeChecked","className","spanClassName","children"]),s="".concat(T.a.checkbox," ").concat(a||"");return Object(x.jsxs)("label",{className:T.a.label,children:[Object(x.jsx)("input",Object(_.a)({type:"checkbox",onChange:function(e){var a=e.currentTarget.checked;n&&n(e),t&&t(a)},className:s},r)),c&&Object(x.jsx)("span",{className:T.a.spanClassName,children:c})]})};var E=function(){var e=Object(a.useState)(""),n=Object(O.a)(e,2),t=n[0],c=n[1],r=t?"":"error",s=function(){r?alert("\u0432\u0432\u0435\u0434\u0438\u0442\u0435 \u0442\u0435\u043a\u0441\u0442..."):alert(t)},o=Object(a.useState)(!1),i=Object(O.a)(o,2),l=i[0],j=i[1];return Object(x.jsxs)("div",{children:[Object(x.jsx)("hr",{}),Object(x.jsx)("h3",{children:"homeworks 4"}),Object(x.jsxs)("div",{className:k.a.column,children:[Object(x.jsx)(f,{value:t,onChangeText:c,onEnter:s,error:r,label:"Name"}),Object(x.jsx)(f,{value:t,onChangeText:c,label:"Password",className:k.a.blue}),Object(x.jsx)(y,{children:"default"}),Object(x.jsx)(y,{red:!0,onClick:s,children:"delete "}),Object(x.jsx)(y,{disabled:!0,children:"disabled"}),Object(x.jsx)(w,{checked:l,onChangeChecked:j,children:"some text "}),Object(x.jsx)(w,{checked:l,onChange:function(e){return j(e.currentTarget.checked)}})]}),Object(x.jsx)("hr",{}),Object(x.jsx)("hr",{})]})},H=t(26),P=t.n(H),B=function(e){e.autoFocus;var n=e.onBlur,t=e.onEnter,c=e.spanProps,r=Object(v.a)(e,["autoFocus","onBlur","onEnter","spanProps"]),s=Object(a.useState)(!1),o=Object(O.a)(s,2),i=o[0],l=o[1],j=c||{},u=j.children,b=j.onDoubleClick,d=j.className,h=Object(v.a)(j,["children","onDoubleClick","className"]),p="".concat(P.a.supperSpan," ").concat(d);return Object(x.jsx)(x.Fragment,{children:i?Object(x.jsx)(f,Object(_.a)({autoFocus:!0,onBlur:function(e){l(!1),n&&n(e)},onEnter:function(){l(!1),t&&t()}},r)):Object(x.jsx)("span",Object(_.a)(Object(_.a)({onDoubleClick:function(e){l(!0),b&&b(e)},className:p},h),{},{children:u||r.value}))})};function J(e,n){var t=JSON.stringify(n);localStorage.setItem(e,t)}function M(e,n){var t=n,a=localStorage.getItem(e);return null!==a&&(t=JSON.parse(a)),t}J("test",{x:"A",y:1});M("test",{x:"",y:0});var F=function(){var e=Object(a.useState)(""),n=Object(O.a)(e,2),t=n[0],c=n[1];return Object(x.jsxs)("div",{children:[Object(x.jsx)("hr",{}),Object(x.jsx)("h3",{children:"homeworks 6"}),Object(x.jsx)("div",{children:Object(x.jsx)(B,{value:t,onChangeText:c,spanProps:{children:t?void 0:"enter text..."}})}),Object(x.jsx)(y,{onClick:function(){J("editable-span-value",t)},children:"save"}),Object(x.jsx)(y,{onClick:function(){var e=M("editable-span-value",t);c(e)},children:"restore"}),Object(x.jsx)("hr",{}),Object(x.jsx)("hr",{})]})},W=t(27),A=t.n(W);var L=function(){return Object(x.jsxs)("div",{className:A.a.container,children:[Object(x.jsx)(E,{}),Object(x.jsx)(F,{})]})},K=function(){return Object(x.jsx)("div",{children:"Junior"})},X=function(){return Object(x.jsx)("div",{children:"JuniorPlus"})},D="/pre-junior",Z="/junior",q="/junior_plus";var z=function(){return Object(x.jsx)(x.Fragment,{children:Object(x.jsxs)(b.d,{children:[Object(x.jsx)(b.b,{path:"/",exact:!0,render:function(){return Object(x.jsx)(b.a,{to:D})}}),Object(x.jsx)(b.b,{path:D,render:function(){return Object(x.jsx)(L,{})}}),Object(x.jsx)(b.b,{path:Z,render:function(){return Object(x.jsx)(K,{})}}),Object(x.jsx)(b.b,{path:q,render:function(){return Object(x.jsx)(X,{})}}),Object(x.jsx)(b.b,{render:function(){return Object(x.jsx)(p,{})}})]})})};var G=function(){return Object(x.jsxs)("div",{className:u.a.header,children:[Object(x.jsx)("div",{className:u.a.logo,children:"IT-INCUBATOR"}),Object(x.jsxs)("div",{className:u.a.navigation,children:[Object(x.jsxs)("div",{className:u.a.arrow,children:["\xab ",Object(x.jsx)("span",{children:" Menu"})]}),Object(x.jsx)("nav",{className:u.a.nav,children:Object(x.jsxs)("ul",{className:u.a.list,children:[Object(x.jsx)("li",{children:Object(x.jsx)(l.b,{to:D,activeClassName:u.a.activeLink,children:"PreJunior"})}),Object(x.jsx)("li",{children:Object(x.jsx)(l.b,{to:Z,activeClassName:u.a.activeLink,children:"Junior"})}),Object(x.jsx)("li",{children:Object(x.jsx)(l.b,{to:q,activeClassName:u.a.activeLink,children:"JuniorPlus"})})]})})]})]})};var R=function(){return Object(x.jsx)(x.Fragment,{children:Object(x.jsxs)(l.a,{children:[Object(x.jsx)(G,{}),Object(x.jsx)(z,{})]})})};var U=function(){return Object(x.jsx)("div",{className:i.a.App,children:Object(x.jsx)(R,{})})};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(Object(x.jsx)(c.a.StrictMode,{children:Object(x.jsx)(U,{})}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[40,1,2]]]);
//# sourceMappingURL=main.36ff138f.chunk.js.map