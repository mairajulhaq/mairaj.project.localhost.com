"use strict";(self.webpackChunkant_design_pro=self.webpackChunkant_design_pro||[]).push([[150],{38345:function(Y,f,e){var U=e(1413),h=e(53911),A=e(44962),m=e(13286),d=e(85893),_=function(E){return(0,d.jsx)(h.Z,(0,U.Z)({bodyStyle:{padding:0}},E))},c=h.Z;c.isProCard=!0,c.Divider=A.Z,c.TabPane=m.Z,c.Group=_,f.Z=c},58547:function(Y,f,e){e.d(f,{h:function(){return h}});var U=e(67294),h=function(d){return Array.isArray(d)?d:d&&d.fileList},A=function(d){return new Promise(function(_,c){var i=new FileReader;i.readAsDataURL(d.file.originFileObj),i.onload=function(){var E=i.result;_(E)},i.onerror=function(E){return c(E)}})}},87296:function(Y,f,e){e.r(f);var U=e(97857),h=e.n(U),A=e(5574),m=e.n(A),d=e(15009),_=e.n(d),c=e(99289),i=e.n(c),E=e(6110),g=e(34994),ae=e(2236),oe=e(38345),L=e(5966),ne=e(50335),le=e(90672),J=e(2453),te=e(8232),_e=e(71230),I=e(15746),se=e(95715),ie=e(66476),ue=e(83622),de=e(88484),j=e(76772),b=e(67294),me=e(58547),a=e(85893),Q=function(){var p=arguments.length>0&&arguments[0]!==void 0?arguments[0]:100;return new Promise(function(v){setTimeout(function(){v(!0)},p)})},X={image_url:"",name:"",email:"",date_of_birth:"",mobile_no:"",bio_data:""},ce=function(){var W=i()(_()().mark(function p(v,K,l){var y;return _()().wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return console.log("onFinishHandlerForm"),console.log("Received values of form: ",l),s.prev=2,y={image_url:K,name:l==null?void 0:l.name,email:l==null?void 0:l.email,date_of_birth:l==null?void 0:l.date_of_birth,mobile_no:l==null?void 0:l.mobile_no,bio_data:l==null?void 0:l.bio_data},s.next=6,(0,j.request)("/api/users/"+v,{method:"PUT",data:y}).then(function(){var P=i()(_()().mark(function D(M){var T;return _()().wrap(function(C){for(;;)switch(C.prev=C.next){case 0:console.log("api_response"),console.log(M),(M==null||(T=M.data)===null||T===void 0?void 0:T.id)>0&&J.ZP.success("Updated successfully");case 3:case"end":return C.stop()}},D)}));return function(D){return P.apply(this,arguments)}}()).catch(function(P){console.log(P)});case 6:return s.abrupt("return",s.sent);case 9:s.prev=9,s.t0=s.catch(2),console.log("api_response - error"),console.log(s.t0);case 13:return s.abrupt("return",!0);case 14:case"end":return s.stop()}},p,null,[[2,9]])}));return function(v,K,l){return W.apply(this,arguments)}}(),pe=function(){var p=(0,j.useModel)("@@initialState"),v=p.initialState,K=p.loading,l=p.refresh,y=p.setInitialState,ve=(0,j.useParams)(),s=(0,b.useState)(0),P=m()(s,2),D=P[0],M=P[1],T=te.Z.useForm(),w=m()(T,1),C=w[0],he=(0,b.useState)(""),k=m()(he,2),S=k[0],Ee=k[1],fe=(0,b.useState)(S),q=m()(fe,2),Z=q[0],ee=q[1],ge=(0,b.useState)(""),re=m()(ge,2),Pe=re[0],De=re[1];return(0,b.useEffect)(function(){var u;M(v==null||(u=v.currentUser)===null||u===void 0?void 0:u.id)},[]),(0,a.jsx)(E._z,{children:(0,a.jsx)(g.A,{layout:"vertical",grid:!0,form:C,initialValues:X,params:{user_id:D},request:i()(_()().mark(function u(){var r,n=arguments;return _()().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(r=n.length>0&&n[0]!==void 0?n[0]:{},console.log("proform-params"),console.log(r),(r==null?void 0:r.user_id)!=0){t.next=5;break}return t.abrupt("return");case 5:return console.log("params?.user_id"),console.log(r==null?void 0:r.user_id),t.next=9,Q(2e3);case 9:return t.next=11,(0,j.request)("/api/users/"+(r==null?void 0:r.user_id),{method:"GET"}).then(function(){var R=i()(_()().mark(function O(o){var F,$,G,z,H,N,V;return _()().wrap(function(B){for(;;)switch(B.prev=B.next){case 0:return console.log("api_response"),console.log(o),Ee(o==null||(F=o.data)===null||F===void 0?void 0:F.image_url),B.abrupt("return",h()(h()({},X),{},{image_url:o==null||($=o.data)===null||$===void 0?void 0:$.image_url,name:o==null||(G=o.data)===null||G===void 0?void 0:G.name,email:o==null||(z=o.data)===null||z===void 0?void 0:z.email,date_of_birth:o==null||(H=o.data)===null||H===void 0?void 0:H.date_of_birth,mobile_no:o==null||(N=o.data)===null||N===void 0?void 0:N.mobile_no,bio_data:o==null||(V=o.data)===null||V===void 0?void 0:V.bio_data}));case 4:case"end":return B.stop()}},O)}));return function(O){return R.apply(this,arguments)}}()).catch(function(R){console.log(R)});case 11:return t.abrupt("return",t.sent);case 12:case"end":return t.stop()}},u)})),onFinish:function(){var u=i()(_()().mark(function r(n){return _()().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return console.log(n),t.next=3,Q(1e3);case 3:return n.user_id=D,n.image_url=Z,t.next=7,ce(D,Z,n);case 7:case"end":return t.stop()}},r)}));return function(r){return u.apply(this,arguments)}}(),formProps:{validateMessages:{required:"This is required"}},submitter:{render:function(r,n){return(0,a.jsx)(ae.S,{children:n})}},children:(0,a.jsx)(oe.Z,{title:"Account Details",bordered:!0,headerBordered:!0,collapsible:!0,size:"default",type:"inner",style:{marginBlockEnd:15,minWidth:800,maxWidth:"100%"},onCollapse:function(r){return console.log(r)},children:(0,a.jsxs)(_e.Z,{gutter:{xs:8,sm:16,md:24,lg:32},children:[(0,a.jsx)(I.Z,{span:6,children:(0,a.jsxs)(g.A.Group,{size:24,children:[(0,a.jsx)(I.Z,{span:24,children:(0,a.jsx)(se.Z,{width:"100%",height:200,src:Z,fallback:S!==""?S:"http://mairaj.project.localhost.com/images/default/user-profile-image.png"})}),(0,a.jsx)(I.Z,{span:24,style:{textAlign:"center"},children:(0,a.jsx)(g.A.Item,{name:"image_url",getValueFromEvent:me.h,children:(0,a.jsx)(ie.Z,{name:"file",onChange:function(r){if(console.log("file - onChange - info"),console.log(r),r.file.status!=="uploading"){if(r.file.status=="removed"&&ee(""),r.file.status==="done"){var n;ee(r==null||(n=r.file)===null||n===void 0||(n=n.response)===null||n===void 0?void 0:n.url)}r.file.status==="error"&&J.ZP.error("".concat(r.file.name," file upload failed."))}},maxCount:1,action:"/api/file-manager/upload",data:{directory:"users"},onRemove:function(r){console.log("file is removed"),console.log(r),(0,j.request)("/api/file-manager/delete",{method:"DELETE",data:{filename:r==null?void 0:r.name,directory:"users"}}).then(function(){var n=i()(_()().mark(function x(t){return _()().wrap(function(O){for(;;)switch(O.prev=O.next){case 0:console.log("api_response"),console.log(t);case 2:case"end":return O.stop()}},x)}));return function(x){return n.apply(this,arguments)}}())},children:(0,a.jsx)(ue.ZP,{type:"primary",icon:(0,a.jsx)(de.Z,{}),style:{margin:"10px 0px 0px 0px"},onClick:function(r){},children:"Change Image"})})})})]})}),(0,a.jsxs)(I.Z,{span:18,children:[(0,a.jsxs)(g.A.Group,{size:24,children:[(0,a.jsx)(L.Z,{name:"name",label:"Name",placeholder:"Type Your Name",colProps:{xs:24,sm:24,md:12,lg:12,xl:12}}),(0,a.jsx)(L.Z,{label:"Email",name:"email",placeholder:"info@example.com etc.",rules:[{required:!0}],disabled:!0,colProps:{xs:24,sm:24,md:12,lg:12,xl:12}})]}),(0,a.jsxs)(g.A.Group,{size:24,children:[(0,a.jsx)(ne.Z,{label:"Date of Birth",name:"date_of_birth",colProps:{xs:24,sm:24,md:12,lg:12,xl:12}}),(0,a.jsx)(L.Z,{name:"mobile_no",label:"Mobile No",placeholder:"Type Your Mobile No",colProps:{xs:24,sm:24,md:12,lg:12,xl:12}})]}),(0,a.jsx)(g.A.Group,{size:24,children:(0,a.jsx)(le.Z,{name:"bio_data",label:"Biographical Info",placeholder:"Share a little biographical information to fill out your profile. This may be shown publicly. ",colProps:{xs:24,sm:24,md:24,lg:24,xl:24}})})]})]})})})})};f.default=pe}}]);
