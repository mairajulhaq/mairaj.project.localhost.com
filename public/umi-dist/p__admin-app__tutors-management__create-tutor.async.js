"use strict";(self.webpackChunkant_design_pro=self.webpackChunkant_design_pro||[]).push([[351],{59184:function(ie,I,r){r.r(I);var Z=r(5574),D=r.n(Z),F=r(15009),l=r.n(F),S=r(99289),d=r.n(S),w=r(6110),g=r(38020),z=r(2236),G=r(38345),u=r(34994),h=r(5966),Y=r(50335),$=r(90672),A=r(2453),H=r(8232),B=r(42119),N=r(71230),f=r(15746),V=r(95715),Q=r(66476),J=r(83622),X=r(88484),P=r(67294),M=r(76772),k=r(27484),q=r.n(k),ee=r(77181),re=r(60352),ne=r(58547),n=r(85893),x=function(){var m=arguments.length>0&&arguments[0]!==void 0?arguments[0]:100;return new Promise(function(c){setTimeout(function(){c(!0)},m)})},oe=function(){var O=d()(l()().mark(function m(c,v){return l()().wrap(function(E){for(;;)switch(E.prev=E.next){case 0:console.log("onFinishHandlerStepsForm"),console.log("Received values of form: ",c),A.ZP.success("Submitted successfully"),M.history.push("/admin-app/tutors/edit/"+v);case 4:case"end":return E.stop()}},m)}));return function(c,v){return O.apply(this,arguments)}}(),se=function(){var m=H.Z.useForm(),c=D()(m,1),v=c[0],L=(0,P.useRef)(),E=(0,P.useRef)(),ae=(0,P.useState)("http://mairaj.project.localhost.com/images/default/user-profile-image.png"),y=D()(ae,2),U=y[0],W=y[1],te=(0,P.useState)({}),K=D()(te,2),j=K[0],le=K[1];return(0,n.jsx)(w._z,{children:(0,n.jsxs)(g.L0,{onFinish:function(){var t=d()(l()().mark(function o(e){return l()().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,x(1e3);case 2:return a.next=4,oe(e,j);case 4:return a.abrupt("return",a.sent);case 5:case"end":return a.stop()}},o)}));return function(o){return t.apply(this,arguments)}}(),formProps:{validateMessages:{required:"This is required"}},submitter:{render:function(o,e){return(0,n.jsx)(z.S,{children:e})}},stepsRender:function(o,e){var s;return(0,n.jsx)(B.Z,{current:e==null||(s=e.props)===null||s===void 0||(s=s.children)===null||s===void 0||(s=s.props)===null||s===void 0?void 0:s.current,children:[{key:"personal_details",title:"Personal Details"},{key:"qualification_and_experience_details",title:"Qualification & Experience Details"}].map(function(a){return(0,n.jsx)(B.Z.Step,{title:a.title},a.key)})})},children:[(0,n.jsx)(g.L0.StepForm,{name:"personal_details",title:"Personal Details",onFinish:function(){var t=d()(l()().mark(function o(e){var s;return l()().wrap(function(p){for(;;)switch(p.prev=p.next){case 0:return p.next=2,x(2e3);case 2:return s={image_url:U,name:e==null?void 0:e.name,email:e==null?void 0:e.email,role:"tutor",mobile_no:e==null?void 0:e.mobile_no,date_of_birth:q()(new Date(e==null?void 0:e.date_of_birth)).format("YYYY-MM-DD"),bio_data:e==null?void 0:e.bio_data,password:e==null?void 0:e.password},console.log("request_data"),console.log(s),(0,M.request)("/api/users",{method:"POST",data:s}).then(function(){var i=d()(l()().mark(function b(_){var T,C;return l()().wrap(function(R){for(;;)switch(R.prev=R.next){case 0:console.log("api_response"),console.log(_),(_==null||(T=_.data)===null||T===void 0?void 0:T.id)>0&&le(_==null||(C=_.data)===null||C===void 0?void 0:C.id);case 3:case"end":return R.stop()}},b)}));return function(b){return i.apply(this,arguments)}}()).catch(function(i){console.log(i)}),p.abrupt("return",!0);case 7:case"end":return p.stop()}},o)}));return function(o){return t.apply(this,arguments)}}(),layout:"vertical",grid:!0,form:v,children:(0,n.jsx)(G.Z,{title:"BIO Details",bordered:!0,headerBordered:!0,collapsible:!0,size:"default",type:"inner",style:{marginBlockEnd:15,minWidth:800,maxWidth:"100%"},onCollapse:function(o){return console.log(o)},children:(0,n.jsxs)(N.Z,{gutter:{xs:8,sm:16,md:24,lg:32},children:[(0,n.jsx)(f.Z,{span:6,children:(0,n.jsxs)(u.A.Group,{size:24,children:[(0,n.jsx)(f.Z,{span:24,children:(0,n.jsx)(V.Z,{width:"100%",height:200,src:U})}),(0,n.jsx)(f.Z,{span:24,style:{textAlign:"center"},children:(0,n.jsx)(u.A.Item,{name:"image_url",getValueFromEvent:ne.h,children:(0,n.jsx)(Q.Z,{name:"file",onChange:function(o){if(console.log("file - onChange - info"),console.log(o),o.file.status!=="uploading"){if(o.file.status=="removed"&&W(""),o.file.status==="done"){var e;W(o==null||(e=o.file)===null||e===void 0||(e=e.response)===null||e===void 0?void 0:e.url)}o.file.status==="error"&&A.ZP.error("".concat(o.file.name," file upload failed."))}},maxCount:1,action:"/api/file-manager/upload",data:{directory:"users"},onRemove:function(o){console.log("file is removed"),console.log(o),(0,M.request)("/api/file-manager/delete",{method:"DELETE",data:{filename:o==null?void 0:o.name,directory:"users"}}).then(function(){var e=d()(l()().mark(function s(a){return l()().wrap(function(i){for(;;)switch(i.prev=i.next){case 0:console.log("api_response"),console.log(a);case 2:case"end":return i.stop()}},s)}));return function(s){return e.apply(this,arguments)}}())},children:(0,n.jsx)(J.ZP,{type:"primary",icon:(0,n.jsx)(X.Z,{}),style:{margin:"10px 0px 0px 0px"},onClick:function(o){},children:"Change Image"})})})})]})}),(0,n.jsxs)(f.Z,{span:18,children:[(0,n.jsxs)(u.A.Group,{size:24,children:[(0,n.jsx)(h.Z,{name:"name",label:"Name",placeholder:"Type Your Name",colProps:{xs:24,sm:24,md:12,lg:12,xl:12}}),(0,n.jsx)(h.Z,{label:"Email",name:"email",placeholder:"info@example.com etc.",rules:[{required:!0}],colProps:{xs:24,sm:24,md:12,lg:12,xl:12}})]}),(0,n.jsxs)(u.A.Group,{size:24,children:[(0,n.jsx)(Y.Z,{label:"Date of Birth",name:"date_of_birth",colProps:{xs:24,sm:24,md:12,lg:12,xl:12}}),(0,n.jsx)(h.Z,{name:"mobile_no",label:"Mobile No",placeholder:"Type Your Mobile No",colProps:{xs:24,sm:24,md:12,lg:12,xl:12}})]}),(0,n.jsx)(u.A.Group,{size:24,children:(0,n.jsx)($.Z,{name:"bio_data",label:"Biographical Info",fieldProps:{rows:6},placeholder:"Share a little biographical information to fill out your profile. This may be shown publicly. ",colProps:{xs:24,sm:24,md:24,lg:24,xl:24}})}),(0,n.jsxs)(u.A.Group,{size:24,children:[(0,n.jsx)(h.Z.Password,{name:"password",label:"Password",placeholder:"Please type a password",rules:[{required:!0}],colProps:{xs:24,sm:24,md:12,lg:12,xl:12}}),(0,n.jsx)(h.Z.Password,{name:"password_confirmation",label:"Confirm Password",dependencies:["password"],placeholder:"Please type a confirm password",rules:[{required:!0,message:"Please confirm your password!"},function(t){var o=t.getFieldValue;return{validator:function(s,a){return!a||o("password")===a?Promise.resolve():Promise.reject(new Error("The new password that you entered do not match!"))}}}],colProps:{xs:24,sm:24,md:12,lg:12,xl:12}})]})]})]})})}),(0,n.jsxs)(g.L0.StepForm,{name:"qualification_and_experience_details",title:"Qualification & Experience Details",onFinish:d()(l()().mark(function t(){return l()().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,x(2e3);case 2:return e.abrupt("return",!0);case 3:case"end":return e.stop()}},t)})),layout:"vertical",grid:!0,children:[(0,n.jsx)(ee.Z,{qualificationsTableRef:L,tutorID:j}),",",(0,n.jsx)(re.Z,{experiencesTableRef:E,tutorID:j})]})]})})};I.default=se}}]);
