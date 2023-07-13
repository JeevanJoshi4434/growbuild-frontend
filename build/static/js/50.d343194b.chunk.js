(this["webpackJsonpvuexy-react-admin-dashboard"]=this["webpackJsonpvuexy-react-admin-dashboard"]||[]).push([[50],{2135:function(e,a,t){e.exports=t.p+"static/media/register.23d1bae7.jpg"},2260:function(e,a,t){"use strict";t.r(a);var n=t(12),r=t(13),s=t(17),l=t(16),c=t(0),o=t.n(c),i=t(1097),u=t(1098),m=t(1099),p=t(1100),d=t(1101),f=t(747),b=t(730),h=t(731),g=t(1102),v=t(743),E=t(744),y=t(6),j=t.n(y),N=t(773),O=t(752),T=t(745),C=t(757),w=t(174),x=t(741),k=t(263),P=t(36),M=t(46),R=t(27),z=(t(546),t(547),t(28)),I=t(204);M.apps.length||M.initializeApp(I.a);var S=M.auth(),W=function(e){Object(s.a)(t,e);var a=Object(l.a)(t);function t(){var e;Object(n.a)(this,t);for(var r=arguments.length,s=new Array(r),l=0;l<r;l++)s[l]=arguments[l];return(e=a.call.apply(a,[this].concat(s))).state={email:"",password:"",name:"",confirmPass:""},e.handleRegister=function(a){a.preventDefault(),e.props.signupWithFirebase(e.state.email,e.state.password,e.state.name)},e}return Object(r.a)(t,[{key:"render",value:function(){var e=this;return o.a.createElement(N.a,{onSubmit:this.handleRegister},o.a.createElement(O.a,{className:"form-label-group"},o.a.createElement(T.a,{type:"text",placeholder:"Name",required:!0,value:this.state.name,onChange:function(a){return e.setState({name:a.target.value})}}),o.a.createElement(C.a,null,"Name")),o.a.createElement(O.a,{className:"form-label-group"},o.a.createElement(T.a,{type:"text",placeholder:"Email",required:!0,value:this.state.email,onChange:function(a){return e.setState({email:a.target.value})}}),o.a.createElement(C.a,null,"Email")),o.a.createElement(O.a,{className:"form-label-group"},o.a.createElement(T.a,{type:"password",placeholder:"Password",required:!0,value:this.state.password,onChange:function(a){return e.setState({password:a.target.value})}}),o.a.createElement(C.a,null,"Password")),o.a.createElement(O.a,{className:"form-label-group"},o.a.createElement(T.a,{type:"password",placeholder:"Confirm Password",required:!0,value:this.state.confirmPass,onChange:function(a){return e.setState({confirmPass:a.target.value})}}),o.a.createElement(C.a,null,"Confirm Password")),o.a.createElement(O.a,null,o.a.createElement(x.a,{color:"primary",icon:o.a.createElement(k.a,{className:"vx-icon",size:16}),label:" I accept the terms & conditions.",defaultChecked:!0})),o.a.createElement("div",{className:"d-flex justify-content-between"},o.a.createElement(w.a.Ripple,{onClick:function(){return R.a.push("/pages/login")},color:"primary",outline:!0},"Login"),o.a.createElement(w.a.Ripple,{color:"primary",type:"submit"},"Register")))}}]),t}(o.a.Component),A=Object(P.b)((function(e){return{values:e.auth.register}}),{signupWithFirebase:function(e,a,t){return function(n){var r=null;S.createUserWithEmailAndPassword(e,a).then((function(e){S.onAuthStateChanged((function(a){e.user.updateProfile({displayName:t}),a&&(r=a.email,n({type:"SIGNUP_WITH_EMAIL",payload:{email:r,name:t,isSignedIn:!0}}),n({type:"LOGIN_WITH_EMAIL",payload:{email:r,name:t}}))})),R.a.push("/")})).catch((function(e){console.log(e.message)}))}}})(W),q=t(68),F=function(e){var a=Object(q.b)(),t=a.isAuthenticated,n=a.loginWithRedirect;return o.a.createElement(o.a.Fragment,null,o.a.createElement(g.a,{className:"pt-1 pb-3"},o.a.createElement(w.a.Ripple,{color:"primary",className:"mt-1",onClick:function(e){e.preventDefault(),t?console.log("Already Logged In"):n()}},"Register With Auth0")))},L=function(e){Object(s.a)(t,e);var a=Object(l.a)(t);function t(){var e;Object(n.a)(this,t);for(var r=arguments.length,s=new Array(r),l=0;l<r;l++)s[l]=arguments[l];return(e=a.call.apply(a,[this].concat(s))).state={email:"",password:"",name:"",confirmPass:""},e.handleRegister=function(a){a.preventDefault(),e.props.signupWithJWT(e.state.email,e.state.password,e.state.name)},e}return Object(r.a)(t,[{key:"render",value:function(){var e=this;return o.a.createElement(N.a,{action:"/",onSubmit:this.handleRegister},o.a.createElement(O.a,{className:"form-label-group"},o.a.createElement(T.a,{type:"text",placeholder:"Name",required:!0,value:this.state.name,onChange:function(a){return e.setState({name:a.target.value})}}),o.a.createElement(C.a,null,"Name")),o.a.createElement(O.a,{className:"form-label-group"},o.a.createElement(T.a,{type:"email",placeholder:"Email",required:!0,value:this.state.email,onChange:function(a){return e.setState({email:a.target.value})}}),o.a.createElement(C.a,null,"Email")),o.a.createElement(O.a,{className:"form-label-group"},o.a.createElement(T.a,{type:"password",placeholder:"Password",required:!0,value:this.state.password,onChange:function(a){return e.setState({password:a.target.value})}}),o.a.createElement(C.a,null,"Password")),o.a.createElement(O.a,{className:"form-label-group"},o.a.createElement(T.a,{type:"password",placeholder:"Confirm Password",required:!0,value:this.state.confirmPass,onChange:function(a){return e.setState({confirmPass:a.target.value})}}),o.a.createElement(C.a,null,"Confirm Password")),o.a.createElement(O.a,null,o.a.createElement(x.a,{color:"primary",icon:o.a.createElement(k.a,{className:"vx-icon",size:16}),label:" I accept the terms & conditions.",defaultChecked:!0})),o.a.createElement("div",{className:"d-flex justify-content-between"},o.a.createElement(w.a.Ripple,{color:"primary",outline:!0,onClick:function(){R.a.push("/pages/login")}},"Login"),o.a.createElement(w.a.Ripple,{color:"primary",type:"submit"},"Register")))}}]),t}(o.a.Component),J=Object(P.b)((function(e){return{values:e.auth.register}}),{signupWithJWT:function(e,a,t){return function(n){z.a.post("/api/authenticate/register/user",{email:e,password:a,name:t}).then((function(e){var a;e.data&&(a=e.data.user,localStorage.setItem("token",e.data.token),n({type:"LOGIN_WITH_JWT",payload:{loggedInUser:a,loggedInWith:"jwt"}}),R.a.push("/"))})).catch((function(e){return console.log(e)}))}}})(L),_=t(2135),D=t.n(_),G=(t(882),function(e){Object(s.a)(t,e);var a=Object(l.a)(t);function t(){var e;Object(n.a)(this,t);for(var r=arguments.length,s=new Array(r),l=0;l<r;l++)s[l]=arguments[l];return(e=a.call.apply(a,[this].concat(s))).state={activeTab:"1"},e.toggle=function(a){e.state.activeTab!==a&&e.setState({activeTab:a})},e}return Object(r.a)(t,[{key:"render",value:function(){var e=this;return o.a.createElement(i.a,{className:"m-0 justify-content-center"},o.a.createElement(u.a,{sm:"8",xl:"7",lg:"10",md:"8",className:"d-flex justify-content-center"},o.a.createElement(m.a,{className:"bg-authentication rounded-0 mb-0 w-100"},o.a.createElement(i.a,{className:"m-0"},o.a.createElement(u.a,{lg:"6",className:"d-lg-block d-none text-center align-self-center px-1 py-0"},o.a.createElement("img",{className:"mr-1",src:D.a,alt:"registerImg"})),o.a.createElement(u.a,{lg:"6",md:"12",className:"p-0"},o.a.createElement(m.a,{className:"rounded-0 mb-0 p-2"},o.a.createElement(p.a,{className:"pb-1 pt-50"},o.a.createElement(d.a,null,o.a.createElement("h4",{className:"mb-0"},"Create Account"))),o.a.createElement("p",{className:"px-2 auth-title mb-0"},"Fill the below form to create a new account."),o.a.createElement(f.a,{tabs:!0,className:"px-2"},o.a.createElement(b.a,null,o.a.createElement(h.a,{className:j()({active:"1"===this.state.activeTab}),onClick:function(){e.toggle("1")}},"JWT")),o.a.createElement(b.a,null,o.a.createElement(h.a,{className:j()({active:"2"===this.state.activeTab}),onClick:function(){e.toggle("2")}},"Firebase")),o.a.createElement(b.a,null,o.a.createElement(h.a,{className:j()({active:"3"===this.state.activeTab}),onClick:function(){e.toggle("3")}},"Auth0"))),o.a.createElement(g.a,{className:"pt-1 pb-50"},o.a.createElement(v.a,{activeTab:this.state.activeTab},o.a.createElement(E.a,{tabId:"1"},o.a.createElement(J,null)),o.a.createElement(E.a,{tabId:"2"},o.a.createElement(A,null)),o.a.createElement(E.a,{tabId:"3"},o.a.createElement(F,null))))))))))}}]),t}(o.a.Component));a.default=G},737:function(e,a,t){"use strict";t.d(a,"a",(function(){return r}));var n=t(0),r=t.n(n).a.createContext({})},741:function(e,a,t){"use strict";var n=t(12),r=t(13),s=t(17),l=t(16),c=t(0),o=t.n(c),i=function(e){Object(s.a)(t,e);var a=Object(l.a)(t);function t(){return Object(n.a)(this,t),a.apply(this,arguments)}return Object(r.a)(t,[{key:"render",value:function(){return o.a.createElement("div",{className:"vx-checkbox-con ".concat(this.props.className?this.props.className:""," vx-checkbox-").concat(this.props.color)},o.a.createElement("input",{type:"checkbox",defaultChecked:this.props.defaultChecked,checked:this.props.checked,value:this.props.value,disabled:this.props.disabled,onClick:this.props.onClick?this.props.onClick:null,onChange:this.props.onChange?this.props.onChange:null}),o.a.createElement("span",{className:"vx-checkbox vx-checkbox-".concat(this.props.size?this.props.size:"md")},o.a.createElement("span",{className:"vx-checkbox--check"},this.props.icon)),o.a.createElement("span",null,this.props.label))}}]),t}(o.a.Component);a.a=i},743:function(e,a,t){"use strict";var n=t(7),r=t(19),s=t(0),l=t.n(s),c=t(2),o=t.n(c),i=t(18),u=t.n(i),m=t(737),p=t(5),d={tag:p.tagPropType,activeTab:o.a.any,className:o.a.string,cssModule:o.a.object},f=function(e){function a(a){var t;return(t=e.call(this,a)||this).state={activeTab:t.props.activeTab},t}return Object(r.a)(a,e),a.getDerivedStateFromProps=function(e,a){return a.activeTab!==e.activeTab?{activeTab:e.activeTab}:null},a.prototype.render=function(){var e=this.props,a=e.className,t=e.cssModule,r=e.tag,s=Object(p.omit)(this.props,Object.keys(d)),c=Object(p.mapToCssModules)(u()("tab-content",a),t);return l.a.createElement(m.a.Provider,{value:{activeTabId:this.state.activeTab}},l.a.createElement(r,Object(n.a)({},s,{className:c})))},a}(s.Component);a.a=f,f.propTypes=d,f.defaultProps={tag:"div"}},744:function(e,a,t){"use strict";t.d(a,"a",(function(){return b}));var n=t(7),r=t(14),s=t(0),l=t.n(s),c=t(2),o=t.n(c),i=t(18),u=t.n(i),m=t(737),p=t(5),d=["className","cssModule","tabId","tag"],f={tag:p.tagPropType,className:o.a.string,cssModule:o.a.object,tabId:o.a.any};function b(e){var a=e.className,t=e.cssModule,s=e.tabId,c=e.tag,o=Object(r.a)(e,d),i=function(e){return Object(p.mapToCssModules)(u()("tab-pane",a,{active:s===e}),t)};return l.a.createElement(m.a.Consumer,null,(function(e){var a=e.activeTabId;return l.a.createElement(c,Object(n.a)({},o,{className:i(a)}))}))}b.propTypes=f,b.defaultProps={tag:"div"}},745:function(e,a,t){"use strict";var n=t(7),r=t(14),s=t(26),l=t(19),c=t(0),o=t.n(c),i=t(2),u=t.n(i),m=t(18),p=t.n(m),d=t(5),f=["className","cssModule","type","bsSize","valid","invalid","tag","addon","plaintext","innerRef"],b={children:u.a.node,type:u.a.string,size:u.a.oneOfType([u.a.number,u.a.string]),bsSize:u.a.string,valid:u.a.bool,invalid:u.a.bool,tag:d.tagPropType,innerRef:u.a.oneOfType([u.a.object,u.a.func,u.a.string]),plaintext:u.a.bool,addon:u.a.bool,className:u.a.string,cssModule:u.a.object},h=function(e){function a(a){var t;return(t=e.call(this,a)||this).getRef=t.getRef.bind(Object(s.a)(t)),t.focus=t.focus.bind(Object(s.a)(t)),t}Object(l.a)(a,e);var t=a.prototype;return t.getRef=function(e){this.props.innerRef&&this.props.innerRef(e),this.ref=e},t.focus=function(){this.ref&&this.ref.focus()},t.render=function(){var e=this.props,a=e.className,t=e.cssModule,s=e.type,l=e.bsSize,c=e.valid,i=e.invalid,u=e.tag,m=e.addon,b=e.plaintext,h=e.innerRef,g=Object(r.a)(e,f),v=["radio","checkbox"].indexOf(s)>-1,E=new RegExp("\\D","g"),y=u||("select"===s||"textarea"===s?s:"input"),j="form-control";b?(j+="-plaintext",y=u||"input"):"file"===s?j+="-file":"range"===s?j+="-range":v&&(j=m?null:"form-check-input"),g.size&&E.test(g.size)&&(Object(d.warnOnce)('Please use the prop "bsSize" instead of the "size" to bootstrap\'s input sizing.'),l=g.size,delete g.size);var N=Object(d.mapToCssModules)(p()(a,i&&"is-invalid",c&&"is-valid",!!l&&"form-control-"+l,j),t);return("input"===y||u&&"function"===typeof u)&&(g.type=s),g.children&&!b&&"select"!==s&&"string"===typeof y&&"select"!==y&&(Object(d.warnOnce)('Input with a type of "'+s+'" cannot have children. Please use "value"/"defaultValue" instead.'),delete g.children),o.a.createElement(y,Object(n.a)({},g,{ref:h,className:N,"aria-invalid":i}))},a}(o.a.Component);h.propTypes=b,h.defaultProps={type:"text"},a.a=h},747:function(e,a,t){"use strict";var n=t(7),r=t(14),s=t(0),l=t.n(s),c=t(2),o=t.n(c),i=t(18),u=t.n(i),m=t(5),p=["className","cssModule","tabs","pills","vertical","horizontal","justified","fill","navbar","card","tag"],d={tabs:o.a.bool,pills:o.a.bool,vertical:o.a.oneOfType([o.a.bool,o.a.string]),horizontal:o.a.string,justified:o.a.bool,fill:o.a.bool,navbar:o.a.bool,card:o.a.bool,tag:m.tagPropType,className:o.a.string,cssModule:o.a.object},f=function(e){var a=e.className,t=e.cssModule,s=e.tabs,c=e.pills,o=e.vertical,i=e.horizontal,d=e.justified,f=e.fill,b=e.navbar,h=e.card,g=e.tag,v=Object(r.a)(e,p),E=Object(m.mapToCssModules)(u()(a,b?"navbar-nav":"nav",!!i&&"justify-content-"+i,function(e){return!1!==e&&(!0===e||"xs"===e?"flex-column":"flex-"+e+"-column")}(o),{"nav-tabs":s,"card-header-tabs":h&&s,"nav-pills":c,"card-header-pills":h&&c,"nav-justified":d,"nav-fill":f}),t);return l.a.createElement(g,Object(n.a)({},v,{className:E}))};f.propTypes=d,f.defaultProps={tag:"ul",vertical:!1},a.a=f},752:function(e,a,t){"use strict";var n=t(7),r=t(14),s=t(0),l=t.n(s),c=t(2),o=t.n(c),i=t(18),u=t.n(i),m=t(5),p=["className","cssModule","row","disabled","check","inline","tag"],d={children:o.a.node,row:o.a.bool,check:o.a.bool,inline:o.a.bool,disabled:o.a.bool,tag:m.tagPropType,className:o.a.string,cssModule:o.a.object},f=function(e){var a=e.className,t=e.cssModule,s=e.row,c=e.disabled,o=e.check,i=e.inline,d=e.tag,f=Object(r.a)(e,p),b=Object(m.mapToCssModules)(u()(a,!!s&&"row",o?"form-check":"form-group",!(!o||!i)&&"form-check-inline",!(!o||!c)&&"disabled"),t);return"fieldset"===d&&(f.disabled=c),l.a.createElement(d,Object(n.a)({},f,{className:b}))};f.propTypes=d,f.defaultProps={tag:"div"},a.a=f},757:function(e,a,t){"use strict";var n=t(7),r=t(14),s=t(0),l=t.n(s),c=t(2),o=t.n(c),i=t(18),u=t.n(i),m=t(5),p=["className","cssModule","hidden","widths","tag","check","size","for"],d=o.a.oneOfType([o.a.number,o.a.string]),f=o.a.oneOfType([o.a.bool,o.a.string,o.a.number,o.a.shape({size:d,order:d,offset:d})]),b={children:o.a.node,hidden:o.a.bool,check:o.a.bool,size:o.a.string,for:o.a.string,tag:m.tagPropType,className:o.a.string,cssModule:o.a.object,xs:f,sm:f,md:f,lg:f,xl:f,widths:o.a.array},h={tag:"label",widths:["xs","sm","md","lg","xl"]},g=function(e,a,t){return!0===t||""===t?e?"col":"col-"+a:"auto"===t?e?"col-auto":"col-"+a+"-auto":e?"col-"+t:"col-"+a+"-"+t},v=function(e){var a=e.className,t=e.cssModule,s=e.hidden,c=e.widths,o=e.tag,i=e.check,d=e.size,f=e.for,b=Object(r.a)(e,p),h=[];c.forEach((function(a,n){var r=e[a];if(delete b[a],r||""===r){var s,l=!n;if(Object(m.isObject)(r)){var c,o=l?"-":"-"+a+"-";s=g(l,a,r.size),h.push(Object(m.mapToCssModules)(u()(((c={})[s]=r.size||""===r.size,c["order"+o+r.order]=r.order||0===r.order,c["offset"+o+r.offset]=r.offset||0===r.offset,c))),t)}else s=g(l,a,r),h.push(s)}}));var v=Object(m.mapToCssModules)(u()(a,!!s&&"sr-only",!!i&&"form-check-label",!!d&&"col-form-label-"+d,h,!!h.length&&"col-form-label"),t);return l.a.createElement(o,Object(n.a)({htmlFor:f},b,{className:v}))};v.propTypes=b,v.defaultProps=h,a.a=v},773:function(e,a,t){"use strict";var n=t(7),r=t(14),s=t(26),l=t(19),c=t(0),o=t.n(c),i=t(2),u=t.n(i),m=t(18),p=t.n(m),d=t(5),f=["className","cssModule","inline","tag","innerRef"],b={children:u.a.node,inline:u.a.bool,tag:d.tagPropType,innerRef:u.a.oneOfType([u.a.object,u.a.func,u.a.string]),className:u.a.string,cssModule:u.a.object},h=function(e){function a(a){var t;return(t=e.call(this,a)||this).getRef=t.getRef.bind(Object(s.a)(t)),t.submit=t.submit.bind(Object(s.a)(t)),t}Object(l.a)(a,e);var t=a.prototype;return t.getRef=function(e){this.props.innerRef&&this.props.innerRef(e),this.ref=e},t.submit=function(){this.ref&&this.ref.submit()},t.render=function(){var e=this.props,a=e.className,t=e.cssModule,s=e.inline,l=e.tag,c=e.innerRef,i=Object(r.a)(e,f),u=Object(d.mapToCssModules)(p()(a,!!s&&"form-inline"),t);return o.a.createElement(l,Object(n.a)({},i,{ref:c,className:u}))},a}(c.Component);h.propTypes=b,h.defaultProps={tag:"form"},a.a=h},882:function(e,a,t){}}]);
//# sourceMappingURL=50.d343194b.chunk.js.map