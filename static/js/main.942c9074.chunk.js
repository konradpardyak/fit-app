(this["webpackJsonpfit-app"]=this["webpackJsonpfit-app"]||[]).push([[0],{91:function(e,t,n){"use strict";n.r(t);var c=n(2),r=n(0),a=n.n(r),s=n(8),i=n.n(s),d=n(20),o=n(16),j=n(44),l=n(63),u="set_progress",x=function(e){return{type:u,progress:e}},b={progress:3},p={plan:{days:[{dayId:1,todayPlan:[{exId:1,reps:10},{exId:2,reps:15}]},{dayId:2,todayPlan:[{exId:2,reps:14},{exId:3,reps:20}]},{dayId:3,todayPlan:[{exId:2,reps:14},{exId:3,reps:20}]},{dayId:4,todayPlan:[{exId:2,reps:14},{exId:3,reps:20}]},{dayId:5,todayPlan:[{exId:2,reps:14},{exId:3,reps:20}]},{dayId:6,todayPlan:[{exId:2,reps:14},{exId:3,reps:20}]},{dayId:7,todayPlan:[{exId:2,reps:14},{exId:3,reps:20}]},{dayId:8,todayPlan:[{exId:2,reps:14},{exId:3,reps:20}]},{dayId:9,todayPlan:[{exId:2,reps:14},{exId:3,reps:20}]},{dayId:10,todayPlan:[{exId:2,reps:14},{exId:3,reps:20}]},{dayId:11,todayPlan:[{exId:1,reps:10},{exId:2,reps:15}]},{dayId:12,todayPlan:[{exId:2,reps:14},{exId:3,reps:20}]},{dayId:13,todayPlan:[{exId:2,reps:14},{exId:3,reps:20}]},{dayId:14,todayPlan:[{exId:2,reps:14},{exId:3,reps:20}]},{dayId:15,todayPlan:[{exId:2,reps:14},{exId:3,reps:20}]},{dayId:16,todayPlan:[{exId:2,reps:14},{exId:3,reps:20}]},{dayId:17,todayPlan:[{exId:2,reps:14},{exId:3,reps:20}]},{dayId:18,todayPlan:[{exId:2,reps:14},{exId:3,reps:20}]},{dayId:19,todayPlan:[{exId:2,reps:14},{exId:3,reps:20}]},{dayId:20,todayPlan:[{exId:2,reps:14},{exId:3,reps:20}]}],exercisesList:[{exId:1,name:"PushUps",desc:"some exercise description"},{exId:2,name:"PullUps",desc:"some exercise description"},{exId:3,name:"Jumps",desc:"some exercise description"},{exId:4,name:"Squats",desc:"some exercise description"}]}},O=Object(j.b)({progress:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:b,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case u:return Object(l.a)(Object(l.a)({},e),{},{progress:t.progress});default:return e}},plan:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:p,t=arguments.length>1?arguments[1]:void 0;return t.type,e}}),h=Object(j.c)(O),y=n(11),f=n(18),m=n(118),I=n(120),g=n(47),v=n(121),k=n(134),S=n(123),P=n(124),C=n(71),T=n.n(C),B=n(116),D=Object(B.a)({headerStyle:{flex:1}}),N=function(){var e=Object(o.c)((function(e){return e.progress.progress})),t=Object(y.f)(),n=Object(r.useState)(null),a=Object(f.a)(n,2),s=a[0],i=a[1],d=D();return Object(c.jsxs)(m.a,{position:"static",children:[Object(c.jsxs)(I.a,{id:"back-to-top-anchor",children:[Object(c.jsxs)(g.a,{className:d.headerStyle,children:["Fit App - Current progress: ",e,"/30"]}),Object(c.jsx)(v.a,{"aria-label":"menu",color:"inherit","aria-haspopup":"true",onClick:function(e){i(e.currentTarget)},children:Object(c.jsx)(T.a,{})}),Object(c.jsx)(k.a,{id:"simple-menu",anchorEl:s,keepMounted:!0,open:Boolean(s),onClose:function(){i(null)},children:Object(c.jsx)(S.a,{onClick:function(){return t.push("/settings")},children:"Settings"})})]}),Object(c.jsx)(P.a,{color:"secondary",variant:"determinate",value:Math.round(e/30*100)})]})},E=n(125),F=function(e){var t=e.id,n=e.isFinished,r=Object(y.f)();return Object(c.jsx)(E.a,{variant:"outlined",color:n?"secondary":"default",fullWidth:!0,onClick:function(){return r.push("/day/".concat(t))},children:Object(c.jsxs)(g.a,{children:["Day ",t]})})},w=n(126),J=Object(B.a)((function(e){return{contentStyle:{paddingTop:e.spacing(2),paddingBottom:e.spacing(9)}}})),L=function(){var e=Object(o.c)((function(e){return e.plan.plan})),t=Object(o.c)((function(e){return e.progress.progress})),n=J();return Object(c.jsx)(w.a,{container:!0,className:n.contentStyle,direction:"column",justify:"space-evenly",spacing:2,children:e.days.map((function(e){return Object(c.jsx)(w.a,{item:!0,children:Object(c.jsx)(F,{id:e.dayId,isFinished:e.dayId<=t},e.dayId)},e.dayId)}))})},M=n(127),R=n(72),q=n.n(R),A=Object(B.a)((function(e){return{root:{position:"fixed",bottom:e.spacing(2),right:e.spacing(2)}}})),U=function(){var e=A();return Object(c.jsxs)(w.a,{container:!0,direction:"column",children:[Object(c.jsx)(w.a,{item:!0,children:Object(c.jsx)(N,{})}),Object(c.jsx)(w.a,{item:!0,container:!0,justify:"center",children:Object(c.jsx)(w.a,{item:!0,xs:10,sm:6,md:4,children:Object(c.jsx)(L,{})})}),Object(c.jsx)(M.a,{color:"secondary",size:"medium",className:e.root,onClick:function(e){var t=(e.target.ownerDocument||document).querySelector("#back-to-top-anchor");t&&t.scrollIntoView({behavior:"smooth",block:"center"})},children:Object(c.jsx)(q.a,{})})]})},z=n(94),G=n(128),V=n(135),W=n(129),X=n(130),_=n(73),H=n.n(_),K=Object(B.a)((function(e){return{root:function(t){return{margin:0,padding:e.spacing(2)}},closeButton:function(t){return{position:"absolute",right:e.spacing(1),top:e.spacing(1),color:e.palette.grey[500]}}}})),Q=function(e){var t=e.name,n=e.desc,a=e.reps,s=K(e),i=Object(r.useState)(!1),d=Object(f.a)(i,2),o=d[0],j=d[1],l=function(){j(!1)};return Object(c.jsxs)(c.Fragment,{children:[Object(c.jsx)(z.a,{button:!0,onClick:function(){j(!0)},children:Object(c.jsx)(G.a,{primary:t,secondary:"Reps x".concat(a)})}),Object(c.jsxs)(V.a,{onClose:l,open:o,children:[Object(c.jsxs)(W.a,{disableTypography:!0,className:s.root,children:[Object(c.jsx)(g.a,{variant:"h6",children:t}),Object(c.jsx)(v.a,{"aria-label":"close",className:s.closeButton,onClick:l,children:Object(c.jsx)(H.a,{})})]}),Object(c.jsx)(X.a,{dividers:!0,children:Object(c.jsx)(g.a,{gutterBottom:!0,children:n})})]})]})},Y=n(122),Z=Object(B.a)({contentStyle:{padding:"8px 0 8px 0"}}),$=function(){var e=Object(y.g)().id,t=Object(o.c)((function(e){return e.plan.plan})),n=Z();return Object(c.jsx)(w.a,{container:!0,className:n.contentStyle,direction:"column",children:Object(c.jsx)(Y.a,{children:t.days[e-1].todayPlan.map((function(e){var n=t.exercisesList.find((function(t){return t.exId===e.exId}));return Object(c.jsx)(Q,{name:n.name,desc:n.desc,reps:e.reps},e.exId)}))})})},ee=n(54),te=n.n(ee),ne=Object(B.a)((function(e){return{headerStyle:{flex:1},buttonStyle:{position:"fixed",bottom:e.spacing(4),left:"50%",transform:"translateX(-50%)"}}})),ce=function(){var e=Object(y.g)().id,t=Object(y.f)(),n=ne();return Object(c.jsxs)(w.a,{container:!0,direction:"column",children:[Object(c.jsx)(w.a,{item:!0,children:Object(c.jsx)(m.a,{position:"static",children:Object(c.jsxs)(I.a,{children:[Object(c.jsxs)(g.a,{className:n.headerStyle,children:["Training - Day ",e]}),Object(c.jsx)(v.a,{"aria-label":"go-back",color:"inherit",onClick:function(){return t.goBack()},children:Object(c.jsx)(te.a,{})})]})})}),Object(c.jsx)(w.a,{item:!0,container:!0,justify:"center",children:Object(c.jsx)(w.a,{item:!0,xs:12,sm:6,children:Object(c.jsx)($,{})})}),Object(c.jsx)(M.a,{className:n.buttonStyle,variant:"extended",color:"secondary",onClick:function(){return t.push("/training/".concat(e))},children:"Start training"})]})},re=function(e){var t=e.setCurrent,n=e.id,a=e.todayTraining[0],s=a.name,i=a.desc,d=Object(r.useState)(5),o=Object(f.a)(d,2),j=o[0],l=o[1];Object(r.useEffect)((function(){var e=setTimeout((function(){return l(j-1)}),1e3);return 0===j&&u(),function(){return clearTimeout(e)}}),[j]);var u=function(){t(0)};return Object(c.jsxs)("div",{children:[Object(c.jsxs)("h1",{children:["Day ",n]}),Object(c.jsxs)("p",{children:["Ready? ",j," "]}),Object(c.jsx)("button",{onClick:u,children:"Start!"}),Object(c.jsxs)("p",{children:["Get ready for exercise 1 - ",s]}),Object(c.jsx)("p",{children:i})]})},ae=function(e){var t=e.current,n=e.setCurrent,a=e.setDoBreak,s=e.id,i=e.todayTraining,d=i[t],j=d.name,l=d.desc,u=d.reps,b=Object(r.useState)(15),p=Object(f.a)(b,2),O=p[0],h=p[1],m=Object(o.b)(),I=Object(y.f)(),g=function(){console.log(t),t<i.length-1?(n(t+1),a(!0)):(m(x(s)),I.goBack())};return Object(r.useEffect)((function(){var e=setTimeout((function(){return h(O-1)}),1e3);return 0===O&&g(),function(){return clearTimeout(e)}}),[O]),Object(c.jsxs)("div",{children:[Object(c.jsxs)("h1",{children:["Day ",s]}),Object(c.jsxs)("p",{children:["Do! ",O," "]}),Object(c.jsx)("button",{onClick:g,children:"Finished"}),Object(c.jsxs)("p",{children:["Exercise ",t+1," - ",j]}),Object(c.jsxs)("p",{children:["Reps x ",u]}),Object(c.jsx)("p",{children:l})]})},se=function(e){var t=e.current,n=e.setDoBreak,a=e.id,s=e.todayTraining[t],i=s.name,d=s.desc,o=Object(r.useState)(30),j=Object(f.a)(o,2),l=j[0],u=j[1],x=function(){n(!1)};return Object(r.useEffect)((function(){var e=setTimeout((function(){return u(l-1)}),1e3);return 0===l&&x(),function(){return clearTimeout(e)}}),[l]),Object(c.jsxs)("div",{children:[Object(c.jsxs)("h1",{children:["Day ",a]}),Object(c.jsxs)("p",{children:["Break ",l," "]}),Object(c.jsx)("button",{onClick:x,children:"Next"}),Object(c.jsxs)("p",{children:["Next exercise ",t+1," - ",i]}),Object(c.jsx)("p",{children:d})]})},ie=function(){var e=Object(y.g)().id,t=Object(r.useState)(null),n=Object(f.a)(t,2),a=n[0],s=n[1],i=Object(r.useState)(!1),d=Object(f.a)(i,2),j=d[0],l=d[1],u=Object(o.c)((function(e){return e.plan.plan})),x=u.days[e-1].todayPlan.map((function(e){var t=u.exercisesList.find((function(t){return t.exId===e.exId}));return{name:t.name,desc:t.desc,reps:e.reps}}));return Object(r.useEffect)((function(){return function(){s(null)}}),[]),Object(c.jsx)("div",{children:null==a?Object(c.jsx)(re,{setCurrent:s,id:e,todayTraining:x}):j?Object(c.jsx)(se,{current:a,setDoBreak:l,id:e,todayTraining:x}):Object(c.jsx)(ae,{current:a,setCurrent:s,setDoBreak:l,id:e,todayTraining:x})})},de=n(131),oe=n(132),je=n(74),le=n.n(je),ue=Object(B.a)({headerStyle:{flex:1}}),xe=function(){var e=Object(o.b)(),t=Object(y.f)(),n=ue();return Object(c.jsxs)(w.a,{container:!0,direction:"column",children:[Object(c.jsx)(w.a,{item:!0,children:Object(c.jsx)(m.a,{position:"static",children:Object(c.jsxs)(I.a,{children:[Object(c.jsx)(g.a,{className:n.headerStyle,children:"Fit App"}),Object(c.jsx)(v.a,{"aria-label":"go-back",color:"inherit",onClick:function(){return t.goBack()},children:Object(c.jsx)(te.a,{})})]})})}),Object(c.jsx)(w.a,{item:!0,container:!0,justify:"center",children:Object(c.jsx)(w.a,{item:!0,xs:12,md:10,lg:6,children:Object(c.jsx)(Y.a,{subheader:Object(c.jsx)(de.a,{children:"Settings"}),children:Object(c.jsxs)(z.a,{button:!0,onClick:function(){e(x(0))},children:[Object(c.jsx)(oe.a,{children:Object(c.jsx)(le.a,{})}),Object(c.jsx)(G.a,{primary:"Delete progress"})]})})})})]})},be=function(){return Object(c.jsx)("div",{children:Object(c.jsx)(d.a,{basename:"/fit-app",children:Object(c.jsxs)(y.c,{children:[Object(c.jsx)(y.a,{exact:!0,path:"/",children:Object(c.jsx)(U,{})}),Object(c.jsx)(y.a,{path:"/day/:id",children:Object(c.jsx)(ce,{})}),Object(c.jsx)(y.a,{path:"/training/:id/",children:Object(c.jsx)(ie,{})}),Object(c.jsx)(y.a,{path:"/settings",children:Object(c.jsx)(xe,{})})]})})})};i.a.render(Object(c.jsx)(a.a.StrictMode,{children:Object(c.jsx)(d.a,{children:Object(c.jsx)(o.a,{store:h,children:Object(c.jsx)(be,{})})})}),document.getElementById("root"))}},[[91,1,2]]]);
//# sourceMappingURL=main.942c9074.chunk.js.map