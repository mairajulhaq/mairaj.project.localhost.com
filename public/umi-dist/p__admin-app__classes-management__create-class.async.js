"use strict";(self.webpackChunkant_design_pro=self.webpackChunkant_design_pro||[]).push([[581],{58547:function(z,A,e){e.d(A,{h:function(){return S}});var I=e(67294),S=function(f){return Array.isArray(f)?f:f&&f.fileList},O=function(f){return new Promise(function(y,Z){var s=new FileReader;s.readAsDataURL(f.file.originFileObj),s.onload=function(){var C=s.result;y(C)},s.onerror=function(C){return Z(C)}})}},38125:function(z,A,e){e.r(A),e.d(A,{default:function(){return de}});var I=e(5574),S=e.n(I),O=e(15009),p=e.n(O),f=e(99289),y=e.n(f),Z=e(6110),s=e(34994),C=e(2236),E=e(38345),B=e(5966),L=e(90672),j=e(1413),G=e(91),h=e(67294),H=e(68256),n=e(85893),V=["fieldProps","request","params","proFieldProps"],N=function(l,r){var t=l.fieldProps,u=l.request,x=l.params,a=l.proFieldProps,g=(0,G.Z)(l,V);return(0,n.jsx)(H.Z,(0,j.Z)({valueType:"segmented",fieldProps:t,ref:r,request:u,params:x,filedConfig:{customLightMode:!0},proFieldProps:a},g))},W=h.forwardRef(N),M=W,K=e(87462),J={icon:{tag:"svg",attrs:{viewBox:"0 0 1024 1024",focusable:"false"},children:[{tag:"path",attrs:{d:"M885.2 446.3l-.2-.8-112.2-285.1c-5-16.1-19.9-27.2-36.8-27.2H281.2c-17 0-32.1 11.3-36.9 27.6L139.4 443l-.3.7-.2.8c-1.3 4.9-1.7 9.9-1 14.8-.1 1.6-.2 3.2-.2 4.8V830a60.9 60.9 0 0060.8 60.8h627.2c33.5 0 60.8-27.3 60.9-60.8V464.1c0-1.3 0-2.6-.1-3.7.4-4.9 0-9.6-1.3-14.1zm-295.8-43l-.3 15.7c-.8 44.9-31.8 75.1-77.1 75.1-22.1 0-41.1-7.1-54.8-20.6S436 441.2 435.6 419l-.3-15.7H229.5L309 210h399.2l81.7 193.3H589.4zm-375 76.8h157.3c24.3 57.1 76 90.8 140.4 90.8 33.7 0 65-9.4 90.3-27.2 22.2-15.6 39.5-37.4 50.7-63.6h156.5V814H214.4V480.1z"}}]},name:"inbox",theme:"outlined"},Q=J,X=e(57080),Y=function(l,r){return h.createElement(X.Z,(0,K.Z)({},l,{ref:r,icon:Q}))},b=h.forwardRef(Y),w=b,k=e(21532),q=e(66476),_=e(9105),ee=e(90789),re=h.forwardRef(function(o,l){var r,t=o.fieldProps,u=o.title,x=u===void 0?"\u5355\u51FB\u6216\u62D6\u52A8\u6587\u4EF6\u5230\u6B64\u533A\u57DF\u8FDB\u884C\u4E0A\u4F20":u,a=o.icon,g=a===void 0?(0,n.jsx)(w,{}):a,c=o.description,i=c===void 0?"\u652F\u6301\u5355\u6B21\u6216\u6279\u91CF\u4E0A\u4F20":c,v=o.action,P=o.accept,d=o.onChange,m=o.value,$=o.children,D=o.max,F=o.proFieldProps,ue=(0,h.useContext)(k.ZP.ConfigContext),ce=(0,h.useContext)(_.A),ve=(F==null?void 0:F.mode)||ce.mode||"edit",T=ue.getPrefixCls("upload"),me=(D===void 0||!m||(m==null?void 0:m.length)<D)&&ve!=="read"&&(F==null?void 0:F.readonly)!==!0;return(0,n.jsxs)(q.Z.Dragger,(0,j.Z)((0,j.Z)({ref:l,name:"files",action:v,accept:P,fileList:m},t),{},{onChange:function(U){d==null||d(U),t!=null&&t.onChange&&(t==null||t.onChange(U))},style:(0,j.Z)((0,j.Z)({flexDirection:"column",alignItems:"center"},t==null?void 0:t.style),{},{display:me?(t==null||(r=t.style)===null||r===void 0?void 0:r.display)||"flex":"none"}),children:[(0,n.jsx)("p",{className:"".concat(T,"-drag-icon"),children:g}),(0,n.jsx)("p",{className:"".concat(T,"-text"),children:x}),(0,n.jsx)("p",{className:"".concat(T,"-hint"),children:i}),$?(0,n.jsx)("div",{className:"".concat(T,"-extra"),style:{padding:16},children:$}):null]}))}),ne=(0,ee.G)(re,{getValueFromEvent:function(l){return l.fileList}}),te=ne,ae=e(2453),oe=e(8232),R=e(76772),pe=e(58547),le=function(){var l=arguments.length>0&&arguments[0]!==void 0?arguments[0]:100;return new Promise(function(r){setTimeout(function(){r(!0)},l)})},ie=function(){var o=y()(p()().mark(function l(r,t){var u;return p()().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return console.log("onFinishHandlerForm"),console.log("Received values of form: ",r),a.prev=2,u={title:r==null?void 0:r.title,description:r==null?void 0:r.description,status:r==null?void 0:r.status,author_id:1,category_id:2},a.next=6,(0,R.request)("/api/classes",{method:"POST",data:u}).then(function(){var g=y()(p()().mark(function c(i){var v,P;return p()().wrap(function(m){for(;;)switch(m.prev=m.next){case 0:(i==null||(v=i.data)===null||v===void 0?void 0:v.id)>0&&(ae.ZP.success("Submitted successfully"),R.history.push("/admin-app/classes/edit/"+(i==null||(P=i.data)===null||P===void 0?void 0:P.id)));case 1:case"end":return m.stop()}},c)}));return function(c){return g.apply(this,arguments)}}()).catch(function(g){console.log(g)});case 6:return a.abrupt("return",a.sent);case 9:a.prev=9,a.t0=a.catch(2),console.log("api_response - error"),console.log(a.t0);case 13:return a.abrupt("return",!0);case 14:case"end":return a.stop()}},l,null,[[2,9]])}));return function(r,t){return o.apply(this,arguments)}}(),se=function(){var l=oe.Z.useForm(),r=S()(l,1),t=r[0],u=(0,h.useState)("http://mairaj.project.localhost.com/images/default/placeholder.jpg"),x=S()(u,2),a=x[0],g=x[1];return(0,n.jsx)(Z._z,{children:(0,n.jsx)(s.A,{onFinish:function(){var c=y()(p()().mark(function i(v){return p()().wrap(function(d){for(;;)switch(d.prev=d.next){case 0:return d.next=2,le(2e3);case 2:return d.next=4,ie(v,a);case 4:case"end":return d.stop()}},i)}));return function(i){return c.apply(this,arguments)}}(),layout:"vertical",grid:!0,form:t,submitter:{render:function(i,v){return(0,n.jsx)(C.S,{children:v})}},children:(0,n.jsxs)(E.Z,{title:"Class Details",bordered:!0,headerBordered:!0,collapsible:!0,size:"default",type:"inner",style:{marginBlockEnd:15,minWidth:800,maxWidth:"100%"},onCollapse:function(i){return console.log(i)},children:[(0,n.jsx)(s.A.Group,{size:24,children:(0,n.jsx)(B.Z,{name:"title",label:"Title",placeholder:"Type Class Title",rules:[{required:!0}],colProps:{xs:24,sm:24,md:24,lg:24,xl:24}})}),(0,n.jsx)(s.A.Group,{size:24,children:(0,n.jsx)(L.Z,{name:"description",label:"Description",fieldProps:{rows:6},placeholder:"Share a little description to fill out your class.",colProps:{xs:24,sm:24,md:24,lg:24,xl:24}})}),(0,n.jsx)(s.A.Group,{size:24,children:(0,n.jsx)(M,{name:"status",label:"Status",initialValue:"in-active",valueEnum:{"in-active":"In-Active",active:"Active"},colProps:{xs:24,sm:24,md:6,lg:6,xl:6}})}),(0,n.jsx)(s.A.Group,{size:24,children:(0,n.jsx)(te,{name:"paymen_proof_image_url",label:"Upload Payment Proof",max:1,title:"Click or drag files into this area to upload",description:"Supported extension: .jpg .png .docx",accept:".jpg, .png, .docx",rules:[{required:!0,message:"Please upload payment proof image"}],colProps:{xs:24,sm:24,md:24,lg:24,xl:24}})})]})})})},de=se}}]);
