"use strict";(self.webpackChunkant_design_pro=self.webpackChunkant_design_pro||[]).push([[186],{51042:function(q,j,e){var c=e(1413),D=e(67294),x=e(42110),i=e(91146),m=function(u,M){return D.createElement(i.Z,(0,c.Z)((0,c.Z)({},u),{},{ref:M,icon:x.Z}))},a=D.forwardRef(m);j.Z=a},64317:function(q,j,e){var c=e(1413),D=e(91),x=e(22270),i=e(67294),m=e(66758),a=e(68256),T=e(85893),u=["fieldProps","children","params","proFieldProps","mode","valueEnum","request","showSearch","options"],M=["fieldProps","children","params","proFieldProps","mode","valueEnum","request","options"],g=function(_,I){var b=_.fieldProps,U=_.children,O=_.params,B=_.proFieldProps,F=_.mode,$=_.valueEnum,z=_.request,G=_.showSearch,E=_.options,P=(0,D.Z)(_,u),te=(0,i.useContext)(m.Z);return(0,T.jsx)(a.Z,(0,c.Z)((0,c.Z)({valueEnum:(0,x.h)($),request:z,params:O,valueType:"select",filedConfig:{customLightMode:!0},fieldProps:(0,c.Z)({options:E,mode:F,showSearch:G,getPopupContainer:te.getPopupContainer},b),ref:I,proFieldProps:B},P),{},{children:U}))},ee=i.forwardRef(function(p,_){var I=p.fieldProps,b=p.children,U=p.params,O=p.proFieldProps,B=p.mode,F=p.valueEnum,$=p.request,z=p.options,G=(0,D.Z)(p,M),E=(0,c.Z)({options:z,mode:B||"multiple",labelInValue:!0,showSearch:!0,suffixIcon:null,autoClearSearchValue:!0,optionLabelProp:"label"},I),P=(0,i.useContext)(m.Z);return(0,T.jsx)(a.Z,(0,c.Z)((0,c.Z)({valueEnum:(0,x.h)(F),request:$,params:U,valueType:"select",filedConfig:{customLightMode:!0},fieldProps:(0,c.Z)({getPopupContainer:P.getPopupContainer},E),ref:_,proFieldProps:O},G),{},{children:b}))}),Z=i.forwardRef(g),re=ee,K=Z;K.SearchSelect=re,K.displayName="ProFormComponent",j.Z=K},58547:function(q,j,e){e.d(j,{h:function(){return D}});var c=e(67294),D=function(m){return Array.isArray(m)?m:m&&m.fileList},x=function(m){return new Promise(function(a,T){var u=new FileReader;u.readAsDataURL(m.file.originFileObj),u.onload=function(){var M=u.result;a(M)},u.onerror=function(M){return T(M)}})}},11817:function(q,j,e){e.r(j);var c=e(97857),D=e.n(c),x=e(5574),i=e.n(x),m=e(15009),a=e.n(m),T=e(99289),u=e.n(T),M=e(6110),g=e(34994),ee=e(2236),Z=e(38345),re=e(5966),K=e(90672),p=e(5155),_=e(64317),I=e(2453),b=e(8232),U=e(71230),O=e(15746),B=e(83622),F=e(95715),$=e(66476),z=e(51042),G=e(88484),E=e(67294),P=e(76772),te=e(58547),t=e(85893),_e=function(){var y=arguments.length>0&&arguments[0]!==void 0?arguments[0]:100;return new Promise(function(n){setTimeout(function(){n(!0)},y)})},de={image_url:"",title:"",description:"",tutors:"",users:""},ve=function(){var oe=u()(a()().mark(function y(n,X){var w,V,H;return a()().wrap(function(d){for(;;)switch(d.prev=d.next){case 0:return console.log("onFinishHandlerForm"),console.log("Received values of form: ",n),d.prev=2,H={image_url:X,title:n==null?void 0:n.title,description:n==null?void 0:n.description,author_id:1,tutors:(n==null||(w=n.tutors)===null||w===void 0?void 0:w.map(function(v){return v==null?void 0:v.tutor}))||[],users:(n==null||(V=n.users)===null||V===void 0?void 0:V.map(function(v){return v==null?void 0:v.user}))||[]},d.next=6,(0,P.request)("/api/categories/"+(n==null?void 0:n.category_id),{method:"PUT",data:H}).then(function(){var v=u()(a()().mark(function N(C){var J,Q;return a()().wrap(function(f){for(;;)switch(f.prev=f.next){case 0:(C==null||(J=C.data)===null||J===void 0?void 0:J.id)>0&&(I.ZP.success("Submitted successfully"),P.history.push("/admin-app/categories/edit/"+(C==null||(Q=C.data)===null||Q===void 0?void 0:Q.id)));case 1:case"end":return f.stop()}},N)}));return function(N){return v.apply(this,arguments)}}()).catch(function(v){console.log(v)});case 6:return d.abrupt("return",d.sent);case 9:d.prev=9,d.t0=d.catch(2),console.log("api_response - error"),console.log(d.t0);case 13:return d.abrupt("return",!0);case 14:case"end":return d.stop()}},y,null,[[2,9]])}));return function(n,X){return oe.apply(this,arguments)}}(),he=function(){var y=(0,P.useParams)(),n=b.Z.useForm(),X=i()(n,1),w=X[0],V=(0,E.useState)(0),H=i()(V,2),ne=H[0],d=H[1],v=(0,E.useState)(""),N=i()(v,2),C=N[0],J=N[1],Q=(0,E.useState)(C),ae=i()(Q,2),f=ae[0],ce=ae[1],Ee=(0,E.useState)([]),me=i()(Ee,2),Pe=me[0],ge=me[1],fe=(0,E.useState)([]),pe=i()(fe,2),De=pe[0],Oe=pe[1];return(0,E.useEffect)(function(){d(y.id)},[]),(0,E.useEffect)(function(){return(0,P.request)("/api/users",{params:{role:"tutor",page:1,per_page:1e3}}).then(function(h){var r=h.data.data.map(function(o,R){return{value:o==null?void 0:o.id,label:o==null?void 0:o.name}});return ge(r),r})},[]),(0,E.useEffect)(function(){return(0,P.request)("/api/users",{params:{role:"user",page:1,per_page:1e3}}).then(function(h){var r=h.data.data.map(function(o,R){return{value:o==null?void 0:o.id,label:o==null?void 0:o.name}});return Oe(r),r})},[]),(0,t.jsxs)(M._z,{children:[(0,t.jsxs)(U.Z,{gutter:{xs:8,sm:16,md:24,lg:32},children:[(0,t.jsx)(O.Z,{flex:"auto"}),(0,t.jsx)(O.Z,{flex:"100px",children:(0,t.jsxs)(B.ZP,{type:"primary",onClick:function(){P.history.push("/admin-app/categories/new")},style:{marginBlockEnd:15},children:[(0,t.jsx)(z.Z,{})," New"]},"new")})]}),(0,t.jsxs)(g.A,{layout:"vertical",grid:!0,initialValues:de,form:w,params:{category_id:ne},request:u()(a()().mark(function h(){var r,o=arguments;return a()().wrap(function(s){for(;;)switch(s.prev=s.next){case 0:if(r=o.length>0&&o[0]!==void 0?o[0]:{},console.log("proform-params"),console.log(r),(r==null?void 0:r.category_id)!=0){s.next=5;break}return s.abrupt("return");case 5:return s.next=7,_e(2e3);case 7:return s.next=9,(0,P.request)("/api/categories/"+(r==null?void 0:r.category_id),{method:"GET"}).then(function(){var Y=u()(a()().mark(function W(l){var le,se,ie,ue,L,S;return a()().wrap(function(k){for(;;)switch(k.prev=k.next){case 0:return console.log("api_response"),console.log(l),J(l==null||(le=l.data)===null||le===void 0?void 0:le.image_url),k.abrupt("return",D()(D()({},de),{},{image_url:l==null||(se=l.data)===null||se===void 0?void 0:se.image_url,title:l==null||(ie=l.data)===null||ie===void 0?void 0:ie.title,description:l==null||(ue=l.data)===null||ue===void 0?void 0:ue.description,tutors:(l==null||(L=l.data)===null||L===void 0||(L=L.tutors)===null||L===void 0?void 0:L.map(function(A){return{tutor:A==null?void 0:A.id}}))||[],users:(l==null||(S=l.data)===null||S===void 0||(S=S.users)===null||S===void 0?void 0:S.map(function(A){return{user:A==null?void 0:A.id}}))||[]}));case 4:case"end":return k.stop()}},W)}));return function(W){return Y.apply(this,arguments)}}()).catch(function(Y){console.log(Y)});case 9:return s.abrupt("return",s.sent);case 10:case"end":return s.stop()}},h)})),onFinish:function(){var h=u()(a()().mark(function r(o){return a()().wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return s.next=2,_e(2e3);case 2:return o.category_id=ne,o.image_url=f,console.log("imageUrl"),console.log(f),console.log("Final payload values:",o),s.next=9,ve(o,f);case 9:case"end":return s.stop()}},r)}));return function(r){return h.apply(this,arguments)}}(),submitter:{render:function(r,o){return(0,t.jsx)(ee.S,{children:o})}},children:[(0,t.jsx)(Z.Z,{title:"Category Details",bordered:!0,headerBordered:!0,collapsible:!0,size:"default",type:"inner",style:{marginBlockEnd:15,minWidth:800,maxWidth:"100%"},onCollapse:function(r){return console.log(r)},children:(0,t.jsxs)(U.Z,{gutter:{xs:8,sm:16,md:24,lg:32},children:[(0,t.jsx)(O.Z,{span:6,children:(0,t.jsxs)(g.A.Group,{size:24,children:[(0,t.jsx)(O.Z,{span:24,children:(0,t.jsx)(F.Z,{width:"100%",height:200,src:f,fallback:f!==""||f===null?f:"http://mairaj.project.localhost.com/images/default/placeholder.jpg"})}),(0,t.jsx)(O.Z,{span:24,style:{textAlign:"center"},children:(0,t.jsx)(g.A.Item,{name:"image_url",getValueFromEvent:te.h,children:(0,t.jsx)($.Z,{name:"file",onChange:function(r){if(console.log("file - onChange - info"),console.log(r),r.file.status!=="uploading"){if(r.file.status=="removed"&&ce(""),r.file.status==="done"){var o;ce(r==null||(o=r.file)===null||o===void 0||(o=o.response)===null||o===void 0?void 0:o.url)}r.file.status==="error"&&I.ZP.error("".concat(r.file.name," file upload failed."))}},maxCount:1,action:"/api/file-manager/upload",data:{directory:"categories"},onRemove:function(r){console.log("file is removed"),console.log(r),(0,P.request)("/api/file-manager/delete",{method:"DELETE",data:{filename:r==null?void 0:r.name,directory:"categories"}}).then(function(){var o=u()(a()().mark(function R(s){return a()().wrap(function(W){for(;;)switch(W.prev=W.next){case 0:console.log("api_response"),console.log(s);case 2:case"end":return W.stop()}},R)}));return function(R){return o.apply(this,arguments)}}())},children:(0,t.jsx)(B.ZP,{type:"primary",icon:(0,t.jsx)(G.Z,{}),style:{margin:"10px 0px 0px 0px"},onClick:function(r){},children:"Change Image"})})})})]})}),(0,t.jsxs)(O.Z,{span:18,children:[(0,t.jsx)(g.A.Group,{size:24,children:(0,t.jsx)(re.Z,{name:"title",label:"Title",placeholder:"Type Category Title",colProps:{xs:24,sm:24,md:24,lg:24,xl:24}})}),(0,t.jsx)(g.A.Group,{size:24,children:(0,t.jsx)(K.Z,{name:"description",label:"Description",placeholder:"Share a little description to fill out your category.",colProps:{xs:24,sm:24,md:24,lg:24,xl:24}})})]})]})}),(0,t.jsx)(Z.Z,{title:"Assign Tutors",bordered:!0,headerBordered:!0,collapsible:!0,size:"default",type:"inner",style:{marginBlockEnd:15,minWidth:800,maxWidth:"100%"},children:(0,t.jsx)(g.A.Group,{size:24,children:(0,t.jsx)(p.u,{name:"tutors",min:1,copyIconProps:{tooltipText:"Copy this tutor"},deleteIconProps:{tooltipText:"Delete this tutor"},creatorButtonProps:{creatorButtonText:"Add New Tutor"},children:(0,t.jsx)(g.A.Group,{size:24,children:(0,t.jsx)(_.Z,{name:"tutor",label:"Tutor",showSearch:!0,options:Pe,debounceTime:300,placeholder:"Please Select a Tutor",rules:[{required:!0}],colProps:{xs:24,sm:24,md:24,lg:24,xl:24}})})})})}),(0,t.jsx)(Z.Z,{title:"Assign Users",bordered:!0,headerBordered:!0,collapsible:!0,size:"default",type:"inner",style:{marginBlockEnd:15,minWidth:800,maxWidth:"100%"},children:(0,t.jsx)(g.A.Group,{size:24,children:(0,t.jsx)(p.u,{name:"users",min:1,copyIconProps:{tooltipText:"Copy this user"},deleteIconProps:{tooltipText:"Delete this user"},creatorButtonProps:{creatorButtonText:"Add New User"},children:(0,t.jsx)(g.A.Group,{size:24,children:(0,t.jsx)(_.Z,{name:"user",label:"User",showSearch:!0,options:De,debounceTime:300,placeholder:"Please Select a User",rules:[{required:!0}],colProps:{xs:24,sm:24,md:24,lg:24,xl:24}})})})})})]})]})};j.default=he}}]);
