"use strict";(self.webpackChunkant_design_pro=self.webpackChunkant_design_pro||[]).push([[524],{82061:function(Z,m,e){var l=e(1413),r=e(67294),g=e(47046),n=e(91146),E=function(P,p){return r.createElement(n.Z,(0,l.Z)((0,l.Z)({},P),{},{ref:p,icon:g.Z}))},s=r.forwardRef(E);m.Z=s},47389:function(Z,m,e){var l=e(1413),r=e(67294),g=e(27363),n=e(91146),E=function(P,p){return r.createElement(n.Z,(0,l.Z)((0,l.Z)({},P),{},{ref:p,icon:g.Z}))},s=r.forwardRef(E);m.Z=s},51042:function(Z,m,e){var l=e(1413),r=e(67294),g=e(42110),n=e(91146),E=function(P,p){return r.createElement(n.Z,(0,l.Z)((0,l.Z)({},P),{},{ref:p,icon:g.Z}))},s=r.forwardRef(E);m.Z=s},38345:function(Z,m,e){var l=e(1413),r=e(53911),g=e(44962),n=e(13286),E=e(85893),s=function(p){return(0,E.jsx)(r.Z,(0,l.Z)({bodyStyle:{padding:0}},p))},f=r.Z;f.isProCard=!0,f.Divider=g.Z,f.TabPane=n.Z,f.Group=s,m.Z=f},27956:function(Z,m,e){e.r(m),e.d(m,{default:function(){return H},waitTime:function(){return L},waitTimePromise:function(){return S}});var l=e(97857),r=e.n(l),g=e(15009),n=e.n(g),E=e(99289),s=e.n(E),f=e(47389),P=e(51042),p=e(6110),W=e(91319),Y=e(68997),R=e(83622),U=e(2453),I=e(76772),w=e(27484),A=e.n(w),F=e(67294),z=e(86738),G=e(63783),N=e(82061),a=e(85893),$=function(o){var D=o.rowId,i=o.onFinish;return(0,a.jsx)(z.Z,{title:"Delete the User",description:"Are you sure you want to delete this user?",icon:(0,a.jsx)(G.Z,{style:{color:"red"}}),placement:"left",onConfirm:s()(n()().mark(function T(){return n()().wrap(function(d){for(;;)switch(d.prev=d.next){case 0:return d.next=2,(0,I.request)("/api/users/"+D,{method:"DELETE"}).then(function(x){x.status===!0?i({status:!0,text_message:"User deleted successfully"}):i({status:!1,text_message:"Failed to delete User: Invalid response"})});case 2:return d.abrupt("return",d.sent);case 3:case"end":return d.stop()}},T)})),okText:"Yes",cancelText:"No",children:(0,a.jsx)(R.ZP,{danger:!0,children:(0,a.jsx)(N.Z,{})},"deletable")})},b=$,S=function(){var M=s()(n()().mark(function o(){var D,i=arguments;return n()().wrap(function(u){for(;;)switch(u.prev=u.next){case 0:return D=i.length>0&&i[0]!==void 0?i[0]:100,u.abrupt("return",new Promise(function(d){setTimeout(function(){d(!0)},D)}));case 2:case"end":return u.stop()}},o)}));return function(){return M.apply(this,arguments)}}(),L=function(){var M=s()(n()().mark(function o(){var D,i=arguments;return n()().wrap(function(u){for(;;)switch(u.prev=u.next){case 0:return D=i.length>0&&i[0]!==void 0?i[0]:100,u.next=3,S(D);case 3:case"end":return u.stop()}},o)}));return function(){return M.apply(this,arguments)}}(),Q=function(){var o=(0,I.useModel)("@@initialState"),D=o.initialState,i=o.loading,T=o.refresh,u=o.setInitialState;console.log("initialState"),console.log(D),console.log("loading"),console.log(i);var d=(0,F.useRef)(),x=[{title:"ID",dataIndex:"id",key:"table-column-id",hideInSearch:!0,sorter:!0,defaultSortOrder:"descend"},{title:"Name",key:"table-column-name",copyable:!0,hideInSearch:!0,render:function(c,t){return(0,a.jsxs)("div",{children:[(0,a.jsx)(Y.Z,{size:"large",src:(t==null?void 0:t.image_url)!==null?t==null?void 0:t.image_url:"http://mairaj.project.localhost.com/images/default/user-profile-image.png"}),(0,a.jsx)("span",{style:{margin:"0px 0px 0px 10px"},children:t==null?void 0:t.name})]})}},{title:"Email",dataIndex:"email",key:"table-column-email",hideInSearch:!0},{title:"Created Date",dataIndex:"created_at",key:"table-column-created-date",sorter:!0,hideInForm:!0,hideInSearch:!0,render:function(c){return(0,a.jsx)("p",{children:A()(new Date(c)).format("DD-MM-YYYY")})}},{title:"Updated Date",dataIndex:"updated_at",key:"table-column-updated-date",sorter:!0,hideInForm:!0,hideInSearch:!0,render:function(c){return(0,a.jsx)("p",{children:A()(new Date(c)).format("DD-MM-YYYY")})}},{title:"Actions",valueType:"option",key:"table-column-actions",render:function(c,t,j,B){return[(0,a.jsx)(R.ZP,{onClick:function(){I.history.push("/admin-app/users/edit/"+t.id)},children:(0,a.jsx)(f.Z,{})},"editable"),(0,a.jsx)(b,{rowId:t==null?void 0:t.id,onFinish:function(v){var _=v.status,C=v.text_message;if(_){var h;U.ZP.success(C),(h=d.current)===null||h===void 0||h.reload()}else U.ZP.error(C)}})]}}];return(0,a.jsx)(p._z,{children:(0,a.jsx)(W.Z,{actionRef:d,rowKey:"id",search:!1,pagination:{defaultPageSize:10,showSizeChanger:!0,pageSizeOptions:[10,20,50,100],onChange:function(c){return console.log(c)}},toolBarRender:function(){return[(0,a.jsxs)(R.ZP,{type:"primary",onClick:function(){I.history.push("/admin-app/users/new")},children:[(0,a.jsx)(P.Z,{})," New"]},"new")]},request:function(){var O=s()(n()().mark(function c(t,j,B){return n()().wrap(function(v){for(;;)switch(v.prev=v.next){case 0:return console.log("params"),console.log(t),console.log("params - sort"),console.log(j),console.log("params - filter"),console.log(B),v.next=8,L(2e3);case 8:return v.next=10,(0,I.request)("/api/users",{params:{sort:r()({},j),pagination:r()({},t),role:"user"}}).then(function(){var _=s()(n()().mark(function C(h){return n()().wrap(function(y){for(;;)switch(y.prev=y.next){case 0:return console.log("api_response"),console.log(h),console.log("api_response.data"),console.log(h.data),console.log("api_response.data.data"),console.log(h.data.data),y.abrupt("return",{data:h.data.data,total:h.data.total,current_page:h.data.current_page});case 7:case"end":return y.stop()}},C)}));return function(C){return _.apply(this,arguments)}}()).catch(function(_){console.log(_)});case 10:return v.abrupt("return",v.sent);case 11:case"end":return v.stop()}},c)}));return function(c,t,j){return O.apply(this,arguments)}}(),columns:x})})},H=Q}}]);
