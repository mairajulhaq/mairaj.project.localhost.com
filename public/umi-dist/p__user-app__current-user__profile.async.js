"use strict";(self.webpackChunkant_design_pro=self.webpackChunkant_design_pro||[]).push([[25],{50335:function(de,O,e){e.d(O,{Z:function(){return K}});var p=e(1413),D=e(91),v=e(67294),P=e(66758),_=e(68256),n=e(85893),A=["proFieldProps","fieldProps"],m="date",x=v.forwardRef(function(t,g){var E=t.proFieldProps,f=t.fieldProps,l=(0,D.Z)(t,A),u=(0,v.useContext)(P.Z);return(0,n.jsx)(_.Z,(0,p.Z)({ref:g,valueType:m,fieldProps:(0,p.Z)({getPopupContainer:u.getPopupContainer},f),proFieldProps:E,filedConfig:{valueType:m,customLightMode:!0}},l))}),M=x,Y=["proFieldProps","fieldProps"],L="dateMonth",F=v.forwardRef(function(t,g){var E=t.proFieldProps,f=t.fieldProps,l=(0,D.Z)(t,Y),u=(0,v.useContext)(P.Z);return(0,n.jsx)(_.Z,(0,p.Z)({ref:g,valueType:L,fieldProps:(0,p.Z)({getPopupContainer:u.getPopupContainer},f),proFieldProps:E,filedConfig:{valueType:L,customLightMode:!0}},l))}),G=F,z=["fieldProps"],I="dateQuarter",Q=v.forwardRef(function(t,g){var E=t.fieldProps,f=(0,D.Z)(t,z),l=(0,v.useContext)(P.Z);return(0,n.jsx)(_.Z,(0,p.Z)({ref:g,valueType:I,fieldProps:(0,p.Z)({getPopupContainer:l.getPopupContainer},E),filedConfig:{valueType:I,customLightMode:!0}},f))}),N=Q,T=["proFieldProps","fieldProps"],B="dateWeek",H=v.forwardRef(function(t,g){var E=t.proFieldProps,f=t.fieldProps,l=(0,D.Z)(t,T),u=(0,v.useContext)(P.Z);return(0,n.jsx)(_.Z,(0,p.Z)({ref:g,valueType:B,fieldProps:(0,p.Z)({getPopupContainer:u.getPopupContainer},f),proFieldProps:E,filedConfig:{valueType:B,customLightMode:!0}},l))}),V=H,w=["proFieldProps","fieldProps"],j="dateYear",C=v.forwardRef(function(t,g){var E=t.proFieldProps,f=t.fieldProps,l=(0,D.Z)(t,w),u=(0,v.useContext)(P.Z);return(0,n.jsx)(_.Z,(0,p.Z)({ref:g,valueType:j,fieldProps:(0,p.Z)({getPopupContainer:u.getPopupContainer},f),proFieldProps:E,filedConfig:{valueType:j,customLightMode:!0}},l))}),J=C,o=M;o.Week=V,o.Month=G,o.Quarter=N,o.Year=J,o.displayName="ProFormComponent";var K=o},58547:function(de,O,e){e.d(O,{h:function(){return D}});var p=e(67294),D=function(_){return Array.isArray(_)?_:_&&_.fileList},v=function(_){return new Promise(function(n,A){var m=new FileReader;m.readAsDataURL(_.file.originFileObj),m.onload=function(){var x=m.result;n(x)},m.onerror=function(x){return A(x)}})}},66392:function(de,O,e){e.r(O);var p=e(97857),D=e.n(p),v=e(5574),P=e.n(v),_=e(15009),n=e.n(_),A=e(99289),m=e.n(A),x=e(6110),M=e(34994),Y=e(2236),L=e(38345),F=e(5966),G=e(50335),z=e(90672),I=e(2453),Q=e(8232),N=e(71230),T=e(15746),B=e(95715),H=e(66476),V=e(83622),w=e(88484),j=e(76772),C=e(67294),J=e(58547),o=e(85893),K=function(){var l=arguments.length>0&&arguments[0]!==void 0?arguments[0]:100;return new Promise(function(u){setTimeout(function(){u(!0)},l)})},t={image_url:"",name:"",email:"",date_of_birth:"",mobile_no:"",bio_data:""},g=function(){var f=m()(n()().mark(function l(u,X,s){var q;return n()().wrap(function(c){for(;;)switch(c.prev=c.next){case 0:return console.log("onFinishHandlerForm"),console.log("Received values of form: ",s),c.prev=2,q={image_url:X,name:s==null?void 0:s.name,email:s==null?void 0:s.email,date_of_birth:s==null?void 0:s.date_of_birth,mobile_no:s==null?void 0:s.mobile_no,bio_data:s==null?void 0:s.bio_data},c.next=6,(0,j.request)("/api/users/"+u,{method:"PUT",data:q}).then(function(){var b=m()(n()().mark(function Z(y){var R;return n()().wrap(function(W){for(;;)switch(W.prev=W.next){case 0:console.log("api_response"),console.log(y),(y==null||(R=y.data)===null||R===void 0?void 0:R.id)>0&&I.ZP.success("Updated successfully");case 3:case"end":return W.stop()}},Z)}));return function(Z){return b.apply(this,arguments)}}()).catch(function(b){console.log(b)});case 6:return c.abrupt("return",c.sent);case 9:c.prev=9,c.t0=c.catch(2),console.log("api_response - error"),console.log(c.t0);case 13:return c.abrupt("return",!0);case 14:case"end":return c.stop()}},l,null,[[2,9]])}));return function(u,X,s){return f.apply(this,arguments)}}(),E=function(){var l=(0,j.useModel)("@@initialState"),u=l.initialState,X=l.loading,s=l.refresh,q=l.setInitialState,ve=(0,j.useParams)(),c=(0,C.useState)(0),b=P()(c,2),Z=b[0],y=b[1],R=Q.Z.useForm(),ue=P()(R,1),W=ue[0],Pe=(0,C.useState)(""),_e=P()(Pe,2),ee=_e[0],fe=_e[1],he=(0,C.useState)(ee),me=P()(he,2),re=me[0],ce=me[1],ge=(0,C.useState)(""),pe=P()(ge,2),Ee=pe[0],De=pe[1];return(0,C.useEffect)(function(){var h;y(u==null||(h=u.currentUser)===null||h===void 0?void 0:h.id)},[]),(0,o.jsx)(x._z,{children:(0,o.jsx)(M.A,{layout:"vertical",grid:!0,form:W,initialValues:t,params:{user_id:Z},request:m()(n()().mark(function h(){var r,i=arguments;return n()().wrap(function(d){for(;;)switch(d.prev=d.next){case 0:if(r=i.length>0&&i[0]!==void 0?i[0]:{},console.log("proform-params"),console.log(r),(r==null?void 0:r.user_id)!=0){d.next=5;break}return d.abrupt("return");case 5:return console.log("params?.user_id"),console.log(r==null?void 0:r.user_id),d.next=9,K(2e3);case 9:return d.next=11,(0,j.request)("/api/users/"+(r==null?void 0:r.user_id),{method:"GET"}).then(function(){var $=m()(n()().mark(function U(a){var oe,ae,te,ne,le,ie,se;return n()().wrap(function(k){for(;;)switch(k.prev=k.next){case 0:return console.log("api_response"),console.log(a),fe(a==null||(oe=a.data)===null||oe===void 0?void 0:oe.image_url),k.abrupt("return",D()(D()({},t),{},{image_url:a==null||(ae=a.data)===null||ae===void 0?void 0:ae.image_url,name:a==null||(te=a.data)===null||te===void 0?void 0:te.name,email:a==null||(ne=a.data)===null||ne===void 0?void 0:ne.email,date_of_birth:a==null||(le=a.data)===null||le===void 0?void 0:le.date_of_birth,mobile_no:a==null||(ie=a.data)===null||ie===void 0?void 0:ie.mobile_no,bio_data:a==null||(se=a.data)===null||se===void 0?void 0:se.bio_data}));case 4:case"end":return k.stop()}},U)}));return function(U){return $.apply(this,arguments)}}()).catch(function($){console.log($)});case 11:return d.abrupt("return",d.sent);case 12:case"end":return d.stop()}},h)})),onFinish:function(){var h=m()(n()().mark(function r(i){return n()().wrap(function(d){for(;;)switch(d.prev=d.next){case 0:return console.log(i),d.next=3,K(1e3);case 3:return i.user_id=Z,i.image_url=re,d.next=7,g(Z,re,i);case 7:case"end":return d.stop()}},r)}));return function(r){return h.apply(this,arguments)}}(),formProps:{validateMessages:{required:"This is required"}},submitter:{render:function(r,i){return(0,o.jsx)(Y.S,{children:i})}},children:(0,o.jsx)(L.Z,{title:"Account Details",bordered:!0,headerBordered:!0,collapsible:!0,size:"default",type:"inner",style:{marginBlockEnd:15,minWidth:800,maxWidth:"100%"},onCollapse:function(r){return console.log(r)},children:(0,o.jsxs)(N.Z,{gutter:{xs:8,sm:16,md:24,lg:32},children:[(0,o.jsx)(T.Z,{span:6,children:(0,o.jsxs)(M.A.Group,{size:24,children:[(0,o.jsx)(T.Z,{span:24,children:(0,o.jsx)(B.Z,{width:"100%",height:200,src:re,fallback:ee!==""?ee:"http://mairaj.project.localhost.com/images/default/user-profile-image.png"})}),(0,o.jsx)(T.Z,{span:24,style:{textAlign:"center"},children:(0,o.jsx)(M.A.Item,{name:"image_url",getValueFromEvent:J.h,children:(0,o.jsx)(H.Z,{name:"file",onChange:function(r){if(console.log("file - onChange - info"),console.log(r),r.file.status!=="uploading"){if(r.file.status=="removed"&&ce(""),r.file.status==="done"){var i;ce(r==null||(i=r.file)===null||i===void 0||(i=i.response)===null||i===void 0?void 0:i.url)}r.file.status==="error"&&I.ZP.error("".concat(r.file.name," file upload failed."))}},maxCount:1,action:"/api/file-manager/upload",data:{directory:"users"},onRemove:function(r){console.log("file is removed"),console.log(r),(0,j.request)("/api/file-manager/delete",{method:"DELETE",data:{filename:r==null?void 0:r.name,directory:"users"}}).then(function(){var i=m()(n()().mark(function S(d){return n()().wrap(function(U){for(;;)switch(U.prev=U.next){case 0:console.log("api_response"),console.log(d);case 2:case"end":return U.stop()}},S)}));return function(S){return i.apply(this,arguments)}}())},children:(0,o.jsx)(V.ZP,{type:"primary",icon:(0,o.jsx)(w.Z,{}),style:{margin:"10px 0px 0px 0px"},onClick:function(r){},children:"Change Image"})})})})]})}),(0,o.jsxs)(T.Z,{span:18,children:[(0,o.jsxs)(M.A.Group,{size:24,children:[(0,o.jsx)(F.Z,{name:"name",label:"Name",placeholder:"Type Your Name",colProps:{xs:24,sm:24,md:12,lg:12,xl:12}}),(0,o.jsx)(F.Z,{label:"Email",name:"email",placeholder:"info@example.com etc.",rules:[{required:!0}],disabled:!0,colProps:{xs:24,sm:24,md:12,lg:12,xl:12}})]}),(0,o.jsxs)(M.A.Group,{size:24,children:[(0,o.jsx)(G.Z,{label:"Date of Birth",name:"date_of_birth",colProps:{xs:24,sm:24,md:12,lg:12,xl:12}}),(0,o.jsx)(F.Z,{name:"mobile_no",label:"Mobile No",placeholder:"Type Your Mobile No",colProps:{xs:24,sm:24,md:12,lg:12,xl:12}})]}),(0,o.jsx)(M.A.Group,{size:24,children:(0,o.jsx)(z.Z,{name:"bio_data",label:"Biographical Info",placeholder:"Share a little biographical information to fill out your profile. This may be shown publicly. ",colProps:{xs:24,sm:24,md:24,lg:24,xl:24}})})]})]})})})})};O.default=E}}]);
