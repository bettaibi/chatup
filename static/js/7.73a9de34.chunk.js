(this.webpackJsonpchatup=this.webpackJsonpchatup||[]).push([[7],{235:function(e,t,n){},269:function(e,t,n){"use strict";n.r(t);var c=n(0),a=n.n(c),i=n(268),s=n(98),r=n(91),l=n(281),o=n(10),j=n(1),b=n(276),u=n(277),d=n(278),x=n(279),f=n(280),h=n(3),O=[{icon:Object(h.jsx)(b.a,{}),title:"Home",path:"/chatup",route:""},{icon:Object(h.jsx)(u.a,{}),title:"My Profile",path:"/chatup/profile",route:"profile"},{icon:Object(h.jsx)(d.a,{}),title:"Messages",path:"/chatup/chat",route:"chat"},{icon:Object(h.jsx)(x.a,{}),title:"Notifications",path:"/chatup/notifications",route:"notifications"},{icon:Object(h.jsx)(f.a,{}),title:"Settings",path:"/chatup/settings",route:"settings"}],_=(n(235),function(e){var t=e.item,n=Object(j.g)()["*"];return Object(h.jsx)("li",{className:n===t.route?"active":"",children:Object(h.jsx)(s.a,{title:t.title,children:Object(h.jsx)(o.b,{to:t.path,className:"w__100",children:Object(h.jsx)("span",{children:t.icon})})})})}),p=function(){return Object(h.jsx)("ul",{children:O.map((function(e,t){return Object(h.jsx)(_,{item:e},t)}))})},m=n(5),g=n(236),v=n.n(g);var y=function(){var e=a.a.useState(""),t=Object(m.a)(e,2),n=t[0],c=t[1];a.a.useEffect((function(){return window.addEventListener("resize",i),function(){window.removeEventListener("resize",i)}}),[]),a.a.useEffect((function(){var e=s(window.innerWidth);c(e)}),[]);var i=v()((function(){var e=s(window.innerWidth);c(e)}),200);function s(e){switch(!0){case e<576:return"xs";case e>=576&&e<=720:return"sm";case e>720&&e<1024:return"md";case e>=1024:return"lg";default:return""}}return{breakpoint:n}},w=n(237),N=n(282),z=n(271),k=n(262),E=function(){return Object(h.jsx)(h.Fragment,{})},C=192,M={type:"spring",damping:10,stiffness:100},P=function(){var e=Object(w.a)(C),t=Object(N.a)(),n=[C,0],c=Object(z.a)(e,n,[0,1]),i=Object(z.a)(e,n,[-2,88888]),s=Object(z.a)(e,n,["#1DA57A","rgba(255, 255, 255, 0.6)"]);return Object(h.jsxs)(a.a.Fragment,{children:[Object(h.jsx)(k.a.div,{className:"mobile__sidebar bg__gredient",style:{opacity:c,zIndex:i},onTap:function(){0===e.get()&&t.start({x:C})}}),Object(h.jsxs)(k.a.div,{className:"draggable",style:{x:e},transition:{spring:M,duration:.44},animate:t,children:[Object(h.jsx)(k.a.div,{className:"handler",drag:"y",dragConstraints:{top:-150,bottom:150},dragElastic:.2,dragMomentum:!1,style:{backgroundColor:s},whileTap:{scale:1.12},onPan:function(t,n){return function(t,n){if(t.stopPropagation(),n.offset.x<0){var c=C-Math.abs(n.offset.x);if(e.get()<=0)return void e.set(0);e.set(c)}if(n.offset.x>0){var a=n.offset.x-C;if(e.get()>=182)return;if(a<0)return void e.set(C+a);a>0&&a<C&&e.set(a)}}(t,n)},onPanEnd:function(n,c){e.get()>100?t.start({x:C}):t.start({x:0})}}),Object(h.jsx)("div",{className:"mobile__sidebar__content",children:Object(h.jsx)(E,{})})]})]})},S=function(){var e=y().breakpoint;return console.log("sidebar compoent"),Object(h.jsx)(h.Fragment,{children:"md"===e||"lg"===e?Object(h.jsx)("div",{className:"sidebar",style:{backgroundColor:"transparent",width:"80px"},children:Object(h.jsxs)("div",{className:"d__flex flex__column justify__content__between h__100",children:[Object(h.jsxs)("div",{style:{marginTop:"0.4rem"},children:[Object(h.jsx)("div",{className:"mb__16 d__flex flex__column align__item__center",children:Object(h.jsx)("img",{src:"/chatup/img/58.png",alt:"chatup_logo"})}),Object(h.jsx)(p,{})]}),Object(h.jsx)("div",{className:"mb__16 d__flex flex__column align__item__center",children:Object(h.jsx)(s.a,{title:"Sign out",children:Object(h.jsx)(r.a,{type:"primary",shape:"circle",icon:Object(h.jsx)(l.a,{}),size:"large"})})})]})}):Object(h.jsx)(P,{})})},F=Object(c.lazy)((function(){return n.e(12).then(n.bind(null,257))})),T=Object(c.lazy)((function(){return n.e(15).then(n.bind(null,258))})),A=Object(c.lazy)((function(){return n.e(11).then(n.bind(null,259))})),J=Object(c.lazy)((function(){return n.e(13).then(n.bind(null,260))})),L=Object(c.lazy)((function(){return n.e(14).then(n.bind(null,261))})),W=i.a.Content;t.default=function(){return Object(h.jsx)("div",{className:"bg__gredient p__sm__16",children:Object(h.jsxs)(i.a,{className:"glass__blur responsive_layout d__flex flex__row",style:{overflow:"hidden"},children:[Object(h.jsx)(S,{}),Object(h.jsx)(W,{className:"main__content p__16",children:Object(h.jsx)(c.Suspense,{fallback:Object(h.jsx)("span",{children:"inner loading..."}),children:Object(h.jsxs)(j.c,{children:[Object(h.jsx)(j.a,{path:"/",element:Object(h.jsx)(F,{})}),Object(h.jsx)(j.a,{path:"/settings",element:Object(h.jsx)(T,{})}),Object(h.jsx)(j.a,{path:"/chat",element:Object(h.jsx)(A,{})}),Object(h.jsx)(j.a,{path:"/notifications",element:Object(h.jsx)(J,{})}),Object(h.jsx)(j.a,{path:"/profile",element:Object(h.jsx)(L,{})})]})})})]})})}}}]);
//# sourceMappingURL=7.73a9de34.chunk.js.map