"use strict";(self.webpackChunkant_design_pro=self.webpackChunkant_design_pro||[]).push([[815],{70646:function(fe,A,n){n.r(A),n.d(A,{default:function(){return ge},waitTime:function(){return M},waitTimePromise:function(){return K}});var L=n(97857),F=n.n(L),J=n(5574),b=n.n(J),Q=n(15009),d=n.n(Q),U=n(99289),f=n.n(U),X=n(40110),k=n(55287),q=n(88641),_=n(14079),ee=n(80638),te=n(42525),N=n(4393),z=n(71230),w=n(15746),ne=n(55102),re=n(83062),ae=n(83622),W=n(76772),P=n(67294),ie=n(37476),O=n(38345),D=n(34994),G=n(5966),le=n(90672),H=n(91319),se=n(95715),e=n(85893),oe=function(i){var u,s,j=i.visible,o=i.onVisiblityChange,r=i.viewModelData,S=i.waitTime,V=[{title:"ID",dataIndex:"id",key:"table-column-id",hideInSearch:!0,sorter:!0,defaultSortOrder:"descend"},{title:"University/Institution",dataIndex:"institute",key:"table-column-university-institution",hideInSearch:!0},{title:"Degree",dataIndex:"degree",key:"table-column-degree",hideInSearch:!0},{title:"Board",dataIndex:"board",key:"table-column-board",hideInSearch:!0},{title:"Year of Completion",dataIndex:"completion_date",key:"table-column-completion_date",hideInForm:!0,hideInSearch:!0}],B=[{title:"ID",dataIndex:"id",key:"table-column-id",hideInSearch:!0,sorter:!0,defaultSortOrder:"descend"},{title:"Job Title",dataIndex:"title",key:"table-column-job-title",hideInSearch:!0},{title:"Institution/Organization",dataIndex:"organization",key:"table-column-institution-organization",hideInSearch:!0},{title:"Start Date",dataIndex:"start_date",key:"table-column-start-date",hideInForm:!0,hideInSearch:!0},{title:"End Date",dataIndex:"end_date",key:"table-column-end-date",hideInForm:!0,hideInSearch:!0}];return(0,e.jsxs)(ie.Y,{open:j,onOpenChange:function(l){l||o(l)},modalProps:{destroyOnClose:!0,getContainer:function(){document.body},width:1200},submitter:{resetButtonProps:{style:{display:"none"}},submitButtonProps:{style:{display:"none"}}},grid:!0,preserve:!1,submitTimeout:2e3,onFinish:function(){var c=f()(d()().mark(function l(I){return d()().wrap(function(h){for(;;)switch(h.prev=h.next){case 0:return h.next=2,S(2e3);case 2:return h.abrupt("return",!0);case 3:case"end":return h.stop()}},l)}));return function(l){return c.apply(this,arguments)}}(),children:[(0,e.jsx)(O.Z,{title:"BIO Details",bordered:!0,headerBordered:!0,size:"default",type:"inner",style:{marginBlockEnd:15,minWidth:800,maxWidth:"100%"},children:(0,e.jsxs)(z.Z,{gutter:{xs:8,sm:16,md:24,lg:32},children:[(0,e.jsx)(w.Z,{span:6,children:(0,e.jsx)(D.A.Group,{size:24,children:(0,e.jsx)(w.Z,{span:24,children:(0,e.jsx)(se.Z,{width:"100%",height:200,src:r==null?void 0:r.image_url})})})}),(0,e.jsxs)(w.Z,{span:18,children:[(0,e.jsxs)(D.A.Group,{size:24,children:[(0,e.jsx)(G.Z,{name:"name",label:"Name",initialValue:r==null?void 0:r.name,fieldProps:{readOnly:!0},placeholder:"Type Your Name",colProps:{xs:24,sm:24,md:12,lg:12,xl:12}}),(0,e.jsx)(G.Z,{label:"Email",name:"email",initialValue:r==null?void 0:r.email,placeholder:"info@example.com etc.",rules:[{required:!0}],fieldProps:{readOnly:!0},colProps:{xs:24,sm:24,md:12,lg:12,xl:12}})]}),(0,e.jsx)(D.A.Group,{size:24,children:(0,e.jsx)(le.Z,{name:"biographical_info",label:"Biographical Info",initialValue:r==null?void 0:r.bio_data,fieldProps:{rows:6,readOnly:!0},placeholder:"Share a little biographical information to fill out your profile. This may be shown publicly. ",colProps:{xs:24,sm:24,md:24,lg:24,xl:24}})})]})]})}),(0,e.jsx)(O.Z,{title:"Qualification Details",bordered:!0,headerBordered:!0,size:"default",type:"inner",style:{marginBlockEnd:15,minWidth:800,maxWidth:"100%"},children:(0,e.jsx)(H.Z,{rowKey:"id",search:!1,pagination:{defaultPageSize:10,showSizeChanger:!0,pageSizeOptions:[10,20,50,100],onChange:function(l){return console.log(l)}},request:f()(d()().mark(function c(){var l,I,m,h,a=arguments;return d()().wrap(function(g){for(;;)switch(g.prev=g.next){case 0:return l=a.length>0&&a[0]!==void 0?a[0]:{},I=a.length>1?a[1]:void 0,m=a.length>2?a[2]:void 0,h=a.length>3?a[3]:void 0,g.next=6,S(2e3);case 6:case"end":return g.stop()}},c)})),dataSource:r!=null&&(u=r.qualifications)!==null&&u!==void 0&&u.length?r.qualifications:[],columns:V})}),(0,e.jsx)(O.Z,{title:"Experience Details",bordered:!0,headerBordered:!0,size:"default",type:"inner",style:{marginBlockEnd:15,minWidth:800,maxWidth:"100%"},children:(0,e.jsx)(H.Z,{rowKey:"id",search:!1,pagination:{defaultPageSize:10,showSizeChanger:!0,pageSizeOptions:[10,20,50,100],onChange:function(l){return console.log(l)}},request:f()(d()().mark(function c(){var l,I,m,h,a=arguments;return d()().wrap(function(g){for(;;)switch(g.prev=g.next){case 0:return l=a.length>0&&a[0]!==void 0?a[0]:{},I=a.length>1?a[1]:void 0,m=a.length>2?a[2]:void 0,h=a.length>3?a[3]:void 0,g.next=6,S(2e3);case 6:case"end":return g.stop()}},c)})),dataSource:r!=null&&(s=r.experiences)!==null&&s!==void 0&&s.length?r.experiences:[],columns:B})})]})},de=oe,ue=function(i,u){var s=/(<([^>]+)>)/gi,j=i.replace(s," ").trim(),o=j.split(" ");return o.length>u?o.slice(0,u).join(" ")+" ...":i},K=function(){var y=f()(d()().mark(function i(){var u,s=arguments;return d()().wrap(function(o){for(;;)switch(o.prev=o.next){case 0:return u=s.length>0&&s[0]!==void 0?s[0]:100,o.abrupt("return",new Promise(function(r){setTimeout(function(){r(!0)},u)}));case 2:case"end":return o.stop()}},i)}));return function(){return y.apply(this,arguments)}}(),M=function(){var y=f()(d()().mark(function i(){var u,s=arguments;return d()().wrap(function(o){for(;;)switch(o.prev=o.next){case 0:return u=s.length>0&&s[0]!==void 0?s[0]:100,o.next=3,K(u);case 3:case"end":return o.stop()}},i)}));return function(){return y.apply(this,arguments)}}(),ce=N.Z.Meta,he=function(){var i=(0,W.useModel)("@@initialState"),u=i.initialState,s=i.loading,j=i.refresh,o=i.setInitialState;console.log("initialState"),console.log(u),console.log("loading"),console.log(s);var r=(0,P.useState)(""),S=b()(r,2),V=S[0],B=S[1],c=(0,P.useState)(!1),l=b()(c,2),I=l[0],m=l[1],h=(0,P.useState)({}),a=b()(h,2),$=a[0],g=a[1];return(0,e.jsxs)("div",{children:[(0,e.jsxs)("div",{className:"page-banner-wrapper",children:[(0,e.jsx)(z.Z,{children:(0,e.jsx)(w.Z,{xs:24,sm:24,md:24,lg:24,xl:24,children:(0,e.jsx)("div",{className:"page-banner-content",children:(0,e.jsx)("h1",{children:"Tutor Hiring"})})})}),(0,e.jsx)(z.Z,{justify:"center",children:(0,e.jsx)(w.Z,{xs:20,sm:20,md:20,lg:20,xl:20,children:(0,e.jsx)("div",{className:"tutors-grid-filters",style:{marginBlockEnd:"20px"},children:(0,e.jsx)("div",{className:"tutor-search-field",children:(0,e.jsx)(ne.Z,{size:"large",placeholder:"Search by Name or Email of Tutors",prefix:(0,e.jsx)(X.Z,{}),onChange:function(v){console.log("test search input"),console.log(v.target.value),B(v.target.value)}})})})})})]}),(0,e.jsx)(te.Rs,{pagination:{defaultPageSize:6,showSizeChanger:!0,pageSizeOptions:[6,9,10,20,50,100]},showActions:"hover",grid:{gutter:16,column:3},itemCardProps:{prefixCls:"tutors-grid"},params:{searchInput:V},request:function(){var C=f()(d()().mark(function v(t,p,T){return d()().wrap(function(x){for(;;)switch(x.prev=x.next){case 0:return console.log("tutors-hiring - params"),console.log(t),console.log("tutors-hiring - params - sort"),console.log(p),console.log("tutors-hiring - params - filter"),console.log(T),x.next=8,M(2e3);case 8:return x.next=10,(0,W.request)("/api/users",{params:{sort:F()({},p),pagination:F()({},t),role:"tutor",search:t==null?void 0:t.searchInput}}).then(function(){var R=f()(d()().mark(function Y(E){return d()().wrap(function(Z){for(;;)switch(Z.prev=Z.next){case 0:return Z.abrupt("return",{data:E.data.data,total:E.data.total,current_page:E.data.current_page});case 1:case"end":return Z.stop()}},Y)}));return function(Y){return R.apply(this,arguments)}}()).catch(function(R){});case 10:return x.abrupt("return",x.sent);case 11:case"end":return x.stop()}},v)}));return function(v,t,p){return C.apply(this,arguments)}}(),metas:{content:{render:function(v,t){var p,T;return(0,e.jsxs)(N.Z,{style:{width:"100%",height:"630px"},actions:[(0,e.jsx)(re.Z,{title:"Thank you for visiting! Explore the details of this Tutor.",children:(0,e.jsx)(ae.ZP,{type:"primary",icon:(0,e.jsx)(k.Z,{}),size:"large",onClick:function(){g(t),m(!0)},children:"View Details"},"preview")})],cover:(0,e.jsx)("img",{alt:"example",src:t==null?void 0:t.image_url,style:{height:"300px"}}),children:[(0,e.jsx)("h2",{children:t==null?void 0:t.name}),(0,e.jsx)(ce,{description:(0,e.jsxs)(e.Fragment,{children:[(0,e.jsx)("p",{children:t!=null&&t.bio_data?ue(t==null?void 0:t.bio_data,18):""}),(0,e.jsxs)("p",{children:[(0,e.jsx)(q.Z,{})," ",t==null?void 0:t.email]}),(0,e.jsxs)("p",{children:[(0,e.jsx)(_.Z,{})," ",(t==null||(p=t.qualifications)===null||p===void 0?void 0:p.length)>0?t.qualifications[0].degree:"-"]}),(0,e.jsxs)("p",{children:[(0,e.jsx)(ee.Z,{})," ",(t==null||(T=t.qualifications)===null||T===void 0?void 0:T.length)>0?t.qualifications[0].institute:"-"]})]})})]})}}}}),(0,e.jsx)(de,{visible:I,onVisiblityChange:function(v){var t=v.VisiblityStatus;m(t)},viewModelData:$,waitTime:M})]})},ge=he}}]);
