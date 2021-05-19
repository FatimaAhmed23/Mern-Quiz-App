(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[0],{77:function(e,t,c){"use strict";c.r(t);var n=c(11),s=c(0),a=c.n(s),r=c(19),i=c.n(r),o=c(5),l=c(8),u=(c(50),c(4)),j=c.n(u),b=c(7),d=c(20),O=c(21),p=c(42),h=c.n(p).a.create({baseURL:"https://mern-quiz-app-project.herokuapp.com/",headers:{"Content-type":"application/json"}}),m=new(function(){function e(){Object(d.a)(this,e)}return Object(O.a)(e,[{key:"CheckLogin",value:function(){var e=Object(b.a)(j.a.mark((function e(t){return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,h.post("/user/login",{email:t.email,password:t.password});case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},{key:"CheckRegister",value:function(){var e=Object(b.a)(j.a.mark((function e(t){return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,h.post("/user/signup",{email:t.email,password:t.password});case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},{key:"GetProfile",value:function(){var e=Object(b.a)(j.a.mark((function e(t){return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,h.get("/user/auth/profile?access_token="+t);case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},{key:"submitScore",value:function(){var e=Object(b.a)(j.a.mark((function e(t,c,n,s){return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,h.post("/user/enterscore?access_token="+s,{type:t,email:c,score:n});case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(t,c,n,s){return e.apply(this,arguments)}}()},{key:"GetUsers",value:function(){var e=Object(b.a)(j.a.mark((function e(t){return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,h.get("/user/getusers?access_token="+t);case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()}]),e}()),x=new(function(){function e(){Object(d.a)(this,e)}return Object(O.a)(e,[{key:"get",value:function(){var e=Object(b.a)(j.a.mark((function e(t){return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,h.get("/system/?access_token="+t);case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},{key:"getqtypes",value:function(){var e=Object(b.a)(j.a.mark((function e(t){return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,h.get("/system/choosequiz/?access_token="+t);case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},{key:"find",value:function(e,t,c){return h.get("/system/?".concat(t,"=").concat(e,"&access_token=").concat(c))}},{key:"getQuestion",value:function(){var e=Object(b.a)(j.a.mark((function e(t,c){return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,h.post("/system/getquestionbyid?access_token="+c,{id:t});case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(t,c){return e.apply(this,arguments)}}()},{key:"updateQuestion",value:function(){var e=Object(b.a)(j.a.mark((function e(t,c){return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,h.post("/system/updatequestion?access_token="+c,{data:t});case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(t,c){return e.apply(this,arguments)}}()},{key:"deleteQuestionById",value:function(){var e=Object(b.a)(j.a.mark((function e(t,c){return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,h.post("/system/deletequestion?access_token="+c,{id:t});case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(t,c){return e.apply(this,arguments)}}()}]),e}()),f=c(1),v=function(e){var t=Object(s.useState)([]),c=Object(o.a)(t,2),n=c[0],a=c[1],r=Object(s.useState)(0),i=Object(o.a)(r,2),u=i[0],j=i[1],b=Object(s.useState)(!1),d=Object(o.a)(b,2),O=d[0],p=d[1],h=Object(s.useState)(0),v=Object(o.a)(h,2),g=v[0],y=v[1],N=Object(s.useState)([]),w=Object(o.a)(N,2),k=w[0],S=(w[1],new URLSearchParams(Object(l.g)().search)),q=Object(s.useState)(S.get("access_token")),_=Object(o.a)(q,2),C=_[0];_[1];Object(s.useEffect)((function(){T()}),[]);var L,T=function(){x.find(S.get("type"),"type",C).then((function(e){a(e.data.questions)})).catch((function(e){console.log(e)}))};return L=u==n.length-1?Object(f.jsx)("a",{className:"btn btn-primary",onClick:function(){return y(k.filter((function(e){return 1==e})).length),void m.submitScore(S.get("type"),e.user.email,k.filter((function(e){return 1==e})).length,C).then((function(e){p(!0)})).catch((function(e){console.log(e)}))},children:"Submit"}):Object(f.jsx)("a",{className:"btn btn-primary",onClick:function(){return function(){var e=u+1;e<n.length&&j(e)}()},children:"Next"}),0==n.length?Object(f.jsx)("div",{children:"Loading"}):Object(f.jsx)("div",{className:"app",children:O?Object(f.jsxs)("div",{style:{textAlign:"center"},children:[Object(f.jsxs)("div",{className:"alert alert-primary text-center",role:"alert",children:["You scored ",g," out of ",n.length]}),Object(f.jsx)("a",{className:"btn btn-primary",style:{marginRight:5},href:"javascript:location.reload();",children:"Re Attempt"}),Object(f.jsx)("a",{className:"btn btn-primary",href:"/quiz?access_token="+e.token,children:"Go Back"})]}):Object(f.jsx)(f.Fragment,{children:Object(f.jsx)("div",{className:"container",children:Object(f.jsx)("div",{className:"row",children:Object(f.jsx)("div",{className:"col",children:Object(f.jsxs)("div",{className:"card ",children:[Object(f.jsxs)("div",{className:"card-header",children:[Object(f.jsxs)("span",{children:["Question No : ",u+1]}),"/",n.length]}),Object(f.jsxs)("div",{className:"card-body",children:[Object(f.jsxs)("h5",{className:"card-title",children:["Domain : ",n[u].type]}),Object(f.jsxs)("p",{className:"card-text",children:[n[u].questionText,"."]}),n[u].answerOptions.map((function(e,t){return Object(f.jsxs)("div",{className:"form-check",children:[Object(f.jsx)("input",{className:"form-check-input",type:"radio",name:u,defaultChecked:0===t,onClick:function(){return function(e,t,c){null==k[e]?k.splice(e,0,t):k.splice(e,1,t)}(u,e.isCorrect)}},t),Object(f.jsx)("label",{className:"form-check-label",children:e.answerText})]})})),L]})]})})})})})})},g=function(e){var t=new URLSearchParams(Object(l.g)().search),c=Object(s.useState)([]),n=Object(o.a)(c,2),a=n[0],r=n[1],i=Object(s.useState)(t.get("access_token")),u=Object(o.a)(i,2),j=u[0],b=(u[1],Object(s.useState)({})),d=Object(o.a)(b,2),O=(d[0],d[1]);Object(s.useEffect)((function(){p(),h()}),[]);var p=function(){j&&x.getqtypes(j).then((function(e){r(e.data.quiz_types)})).catch((function(e){console.log(e)}))},h=function(){j&&m.GetProfile(j).then((function(e){var t=Object.assign({},e.data);O(t)})).catch((function(e){console.log(e)}))};return 0===a.length?Object(f.jsx)("div",{children:"Loading"}):Object(f.jsxs)("div",{className:"row",children:[Object(f.jsx)("h1",{children:"Practice Quizzes"}),a.map((function(e,t){return Object(f.jsx)("div",{className:"col-sm-6",children:Object(f.jsx)("div",{className:"card",style:{margin:20},children:Object(f.jsxs)("div",{className:"card-body",children:[Object(f.jsx)("h5",{className:"card-title",children:e}),Object(f.jsx)("p",{className:"card-text",children:"This is a small quiz and you can re-attempt it to improve your score"}),Object(f.jsx)("a",{href:"/test?type=".concat(e,"&access_token=").concat(j),className:"btn btn-primary",children:"Start Quiz"})]})})},t)}))]})},y=function(e){var t=new URLSearchParams(Object(l.g)().search),c=Object(s.useState)(t.get("access_token")),n=Object(o.a)(c,2),a=n[0],r=(n[1],Object(s.useState)(!1)),i=Object(o.a)(r,2),u=i[0],j=i[1];Object(s.useEffect)((function(){b()}),[]);var b=function(){m.GetUsers(a).then((function(e){j(e.data)})).catch((function(e){console.log(e)}))};return Object(f.jsx)("div",{className:"App",children:Object(f.jsxs)("table",{className:"table table-striped",children:[Object(f.jsx)("thead",{children:Object(f.jsxs)("tr",{children:[Object(f.jsx)("th",{scope:"col",children:"#"}),Object(f.jsx)("th",{scope:"col",children:"Email"}),Object(f.jsx)("th",{scope:"col",children:"Test Scores"})]})}),Object(f.jsx)("tbody",{children:u?u.map((function(e,t){return Object(f.jsxs)("tr",{children:[Object(f.jsx)("th",{scope:"row",children:t+1}),Object(f.jsx)("td",{children:e.email}),Object(f.jsx)("td",{children:Object(f.jsx)("ul",{className:"list-group",children:Object.entries(e.test_results).map((function(e){var t=Object(o.a)(e,2),c=t[0],n=t[1];return Object(f.jsxs)("li",{className:"list-group-item d-flex justify-content-between align-items-center",children:[c,Object(f.jsx)("span",{className:"badge badge-primary badge-pill",children:n})]})}))})})]})})):""})]})})},N=c(26),w=c(12);var k=function(){var e=Object(w.e)(),t=Object(s.useState)(!1),c=Object(o.a)(t,2),a=(c[0],c[1]),r=Object(s.useState)(!1),i=Object(o.a)(r,2),u=i[0],j=i[1],b=Object(s.useState)(null),d=Object(o.a)(b,2),O=d[0],p=d[1],h=Object(N.a)({defaultValues:{password:"",email:""}}),x=h.register,v=h.handleSubmit,g=function(t){m.CheckLogin(t).then((function(t){t.data.error?e.show(t.data.error):t.data.token&&(p(t.data.role),a(t.data),j(t.data.token))})).catch((function(e){console.log(e)}))},y=function(){return Object(f.jsx)("div",{className:"container",children:Object(f.jsxs)("div",{className:"row",children:[Object(f.jsx)("div",{className:"col-sm"}),Object(f.jsx)("div",{className:"col-sm",children:Object(f.jsxs)("div",{className:"card bg-light mb-3",style:{maxWidth:500},children:[Object(f.jsx)("div",{className:"card-header text-center",children:"Online Quiz"}),Object(f.jsxs)("div",{className:"card-body",children:[Object(f.jsx)("h5",{className:"card-title text-center",children:"Login"}),Object(f.jsxs)("form",{name:"contactform",onSubmit:v(g),children:[Object(f.jsxs)("div",{className:"form-group",children:[Object(f.jsx)("label",{children:"Email address"}),Object(f.jsx)("input",Object(n.a)(Object(n.a)({type:"email",className:"form-control",name:"email","aria-describedby":"emailHelp",placeholder:"Enter email"},x("email")),{},{required:!0})),Object(f.jsx)("small",{id:"emailHelp",className:"form-text text-muted"})]}),Object(f.jsx)("br",{}),Object(f.jsxs)("div",{className:"form-group",children:[Object(f.jsx)("label",{for:"exampleInputPassword1",children:"Password"}),Object(f.jsx)("input",Object(n.a)(Object(n.a)({type:"password",className:"form-control",name:"password",placeholder:"Password"},x("password")),{},{required:!0}))]}),Object(f.jsx)("br",{}),Object(f.jsx)("button",{type:"submit",className:"btn btn-primary",id:"submit",value:"Submit",children:"Submit"}),Object(f.jsx)("a",{type:"submit",className:"btn btn-primary",href:"/register",style:{marginLeft:10},children:"Register here"})]}),Object(f.jsx)("p",{className:"card-text"})]})]})}),Object(f.jsx)("div",{className:"col-sm"})]})})};return u?"Student"==O?Object(f.jsx)(l.a,{to:"/quiz?access_token="+u}):Object(f.jsx)(l.a,{to:"/admin/questions?access_token="+u}):Object(f.jsx)(y,{})};var S=function(){var e=Object(w.e)(),t=Object(s.useState)(!1),c=Object(o.a)(t,2),a=c[0],r=(c[1],Object(N.a)({defaultValues:{password:"",email:""}})),i=r.register,u=r.handleSubmit,j=function(t){m.CheckRegister(t).then((function(t){t.data.error?e.show(t.data.error):t.data.email&&e.show("Success! Login now")})).catch((function(e){console.log(e)}))},b=function(){return Object(f.jsx)("div",{class:"container",children:Object(f.jsxs)("div",{class:"row",children:[Object(f.jsx)("div",{class:"col-sm"}),Object(f.jsx)("div",{class:"col-sm",children:Object(f.jsxs)("div",{className:"card bg-light mb-3",style:{maxWidth:500},children:[Object(f.jsx)("div",{className:"card-header text-center",children:"Online Quiz"}),Object(f.jsxs)("div",{className:"card-body",children:[Object(f.jsx)("h5",{className:"card-title text-center",children:"Register as a New Student"}),Object(f.jsx)("br",{}),Object(f.jsxs)("form",{name:"contactform",onSubmit:u(j),children:[Object(f.jsx)("br",{}),Object(f.jsxs)("div",{className:"form-group",children:[Object(f.jsx)("label",{children:"Email address"}),Object(f.jsx)("input",Object(n.a)(Object(n.a)({type:"email",className:"form-control",name:"email","aria-describedby":"emailHelp",placeholder:"Enter email"},i("email")),{},{required:!0})),Object(f.jsx)("small",{id:"emailHelp",className:"form-text text-muted"})]}),Object(f.jsx)("br",{}),Object(f.jsxs)("div",{className:"form-group",children:[Object(f.jsx)("label",{children:"Password"}),Object(f.jsx)("input",Object(n.a)(Object(n.a)({type:"password",className:"form-control",name:"password",placeholder:"Password"},i("password")),{},{required:!0}))]}),Object(f.jsx)("br",{}),Object(f.jsx)("button",{type:"submit",className:"btn btn-primary",id:"submit",value:"Submit",children:"Submit"}),Object(f.jsx)("a",{type:"submit",className:"btn btn-primary",href:"/login",style:{marginLeft:10},children:"Login Here"})]}),Object(f.jsx)("p",{className:"card-text"})]})]})}),Object(f.jsx)("div",{class:"col-sm"})]})})};return a?Object(f.jsx)(l.a,{to:"/quiz"}):Object(f.jsx)(b,{})},q=c(81),_=c(82),C=function(e){var t=Object(w.e)(),c=new URLSearchParams(Object(l.g)().search),n=Object(s.useState)([]),a=Object(o.a)(n,2),r=a[0],i=a[1],u=Object(s.useState)(!1),d=Object(o.a)(u,2),O=d[0],p=d[1],h=Object(s.useState)(!1),m=Object(o.a)(h,2),v=(m[0],m[1],Object(s.useState)(!1)),g=Object(o.a)(v,2),y=g[0],N=g[1],k=Object(s.useState)(c.get("access_token")),S=Object(o.a)(k,2),C=S[0],L=(S[1],function(e){var t=e.target.value.split(",");null==y.answerOptions[e.target.id]?y.answerOptions.splice(e.target.id,0,{answerText:t[0],isCorrect:t[1]}):y.answerOptions.splice(e.target.id,1,{answerText:t[0],isCorrect:t[1]})});Object(s.useEffect)((function(){z()}),[]);var T=function(){p(!1===O)},z=function(){C&&x.get(C).then((function(e){i(e.data.questions)})).catch((function(e){console.log(e)}))},Q=function(){z()},E=function(){var e=Object(b.a)(j.a.mark((function e(t){return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:x.getQuestion(t,C).then((function(e){N(e.data.questionObject),null!=y&&p(!1===O)})).catch((function(e){console.log(e)}));case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),P=function(){var e=Object(b.a)(j.a.mark((function e(c){return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:x.deleteQuestionById(c,C).then((function(e){t.show(e.data),Q()})).catch((function(e){console.log(e)}));case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(f.jsxs)("div",{class:"App",children:[Object(f.jsx)("button",{type:"button",className:"btn btn-primary",style:{margin:10},onClick:function(){return N({questionText:"Question",type:"Type",answerOptions:[]}),void T()},children:"Add New Question"}),Object(f.jsxs)("table",{className:"table",children:[Object(f.jsx)("thead",{className:"thead-dark",children:Object(f.jsxs)("tr",{children:[Object(f.jsx)("th",{scope:"col",children:"#"}),Object(f.jsx)("th",{scope:"col",children:"Question"}),Object(f.jsx)("th",{scope:"col",children:"Type"}),Object(f.jsx)("th",{scope:"col"}),Object(f.jsx)("th",{scope:"col"})]})}),Object(f.jsx)("tbody",{children:r.map((function(e,t){return Object(f.jsxs)("tr",{children:[Object(f.jsx)("th",{scope:"row",children:t+1}),Object(f.jsxs)("td",{children:[Object(f.jsx)("b",{children:"Question:"})," ",e.questionText,Object(f.jsx)("br",{}),Object(f.jsx)("br",{}),Object(f.jsx)("b",{children:"Options:"})," \xa0",e.answerOptions.map((function(e,t){return e.isCorrect?Object(f.jsx)("button",{type:"button",className:"btn btn-success",style:{margin:10},children:e.answerText}):Object(f.jsx)("button",{type:"button",className:"btn btn-danger",style:{margin:10},children:e.answerText})}))]}),Object(f.jsx)("td",{children:e.type}),Object(f.jsxs)("td",{children:[" ",Object(f.jsx)("button",{type:"button",className:"btn btn-primary",style:{margin:10},onClick:function(){return E(e._id)},children:"Edit"})]}),Object(f.jsxs)("td",{children:[" ",Object(f.jsx)("button",{type:"button",className:"btn btn-primary",style:{margin:10},onClick:function(){return P(e._id)},children:"Delete"})]})]})}))})]}),Object(f.jsx)("div",{className:"col",children:Object(f.jsxs)(q.a,{show:O,children:[Object(f.jsx)(q.a.Header,{children:Object(f.jsx)(q.a.Title,{children:"Edit Question"})}),Object(f.jsx)(q.a.Body,{children:Object(f.jsx)(f.Fragment,{children:y?Object(f.jsxs)("div",{children:[Object(f.jsxs)("form",{children:[Object(f.jsxs)("div",{className:"form-group",children:[Object(f.jsx)("div",{style:{margin:10},children:Object(f.jsx)("label",{children:"Question"})}),Object(f.jsx)("textarea",{className:"form-control",id:"question_updatefield",rows:"3",defaultValue:y?y.questionText:"Loading"})]}),Object(f.jsx)("br",{}),Object(f.jsxs)("div",{className:"input-group mb-3",children:[Object(f.jsx)("div",{className:"input-group-prepend",children:Object(f.jsx)("span",{className:"input-group-text",id:"inputGroup-sizing-default",children:"Type"})}),Object(f.jsx)("input",{type:"text",className:"form-control",id:"type_updatefield",defaultValue:y.type})]}),Object(f.jsx)("br",{}),Object(f.jsx)("div",{id:"Optionlist",children:y.answerOptions.map((function(e,t){return Object(f.jsxs)("div",{className:"input-group",id:t,children:[Object(f.jsx)("div",{className:"input-group-prepend",children:Object(f.jsxs)("span",{className:"input-group-text",id:"",children:["Answer ",t+1," | Is Correct?"]})}),Object(f.jsx)("input",{type:"text",className:"form-control",name:"",defaultValue:e.answerText+","+e.isCorrect,id:t,onBlur:L}),Object(f.jsx)("div",{className:"input-group-append",children:Object(f.jsx)("button",{className:"btn btn-outline-secondary",type:"button",id:t,onClick:function(){return function(e){y.answerOptions.splice(e,1);var t=Object.assign({},y);N(t)}(t)},children:"x"})})]})}))})]}),Object(f.jsx)("button",{type:"button",className:"btn btn-primary",style:{margin:10},onClick:function(){return function(e){y.answerOptions.splice(e,0,{answerText:"New option",isCorrect:!1});var t=Object.assign({},y);N(t)}(y.answerOptions.length)},children:"+ Option"})]}):"Loading..."})}),Object(f.jsxs)(q.a.Footer,{children:[Object(f.jsx)(_.a,{variant:"secondary",onClick:function(){y.questionText=document.querySelector("#question_updatefield").value,y.type=document.querySelector("#type_updatefield").value,x.updateQuestion(y,C).then((function(e){Q()})).catch((function(e){console.log(e)}))},children:"Save"}),Object(f.jsx)(_.a,{variant:"secondary",onClick:T,children:"Close Modal"})]})]})})]})},L=function(e){var t=new URLSearchParams(Object(l.g)().search),c=a.a.useState(!1),n=Object(o.a)(c,2),r=n[0],i=n[1],u=Object(s.useState)(t.get("access_token")),j=Object(o.a)(u,2),b=j[0];j[1];Object(s.useEffect)((function(){d()}),[]);var d=function(){b&&m.GetProfile(b).then((function(e){var t=Object.assign({},e.data.user);i(t)})).catch((function(e){console.log(e)}))};return Object(f.jsxs)("nav",{className:"navbar navbar-expand-lg navbar-light bg-light",children:[Object(f.jsx)("a",{className:"navbar-brand",href:"#",children:Object(f.jsx)("div",{className:"alert alert-primary",role:"alert",style:{fontSize:15,marginLeft:10,marginTop:10},children:r?"Hello "+r.email:"Loading..."})}),Object(f.jsx)("button",{className:"navbar-toggler",type:"button","data-toggle":"collapse","data-target":"#navbarNav","aria-controls":"navbarNav","aria-expanded":"false","aria-label":"Toggle navigation",children:Object(f.jsx)("span",{className:"navbar-toggler-icon"})}),Object(f.jsx)("div",{className:"collapse navbar-collapse",id:"navbarNav",children:Object(f.jsxs)("ul",{className:"navbar-nav",children:["Student"==r.role?Object(f.jsx)("li",{className:"nav-item",children:Object(f.jsx)("a",{className:"nav-link",href:"/quiz?access_token="+b,children:"Quiz"})}):"","Admin"==r.role?Object(f.jsxs)(f.Fragment,{children:[Object(f.jsx)("li",{className:"nav-item",children:Object(f.jsx)("a",{className:"nav-link",href:"/admin/questions?access_token="+b,children:"Manage Questions"})}),Object(f.jsx)("li",{className:"nav-item",children:Object(f.jsx)("a",{className:"nav-link",href:"/admin/testusers?access_token="+b,children:"Users"})})]}):"",Object(f.jsx)("li",{className:"nav-item",children:Object(f.jsx)("a",{className:"nav-link",href:"/login",children:"Logout"})})]})})]})};var T=function(){Object(w.e)();var e=new URLSearchParams(Object(l.g)().search),t=a.a.useState(!1),c=Object(o.a)(t,2),r=c[0],i=c[1],u=Object(s.useState)(e.get("access_token")),j=Object(o.a)(u,2),b=j[0];j[1],Object(s.useEffect)((function(){d()}),[]);var d=function(){b&&m.GetProfile(b).then((function(e){var t=Object.assign({},e.data.user);i(t)})).catch((function(e){console.log(e)}))};return Object(f.jsxs)("div",{className:"App",children:[Object(f.jsx)(l.b,{path:["/admin/questions","/quiz","/test","/admin/testusers"],render:function(e){return Object(f.jsx)(L,Object(n.a)({user:r,token:b},e))}}),Object(f.jsx)("div",{className:"container mt-3",children:Object(f.jsxs)(l.d,{children:[Object(f.jsx)(l.b,{exact:!0,path:["/"],render:function(){return r?"Student"==r.role?Object(f.jsx)(l.a,{to:"/quiz?access_token="+b}):Object(f.jsx)(l.a,{to:"/admin/questions?access_token="+b}):Object(f.jsx)(l.a,{to:"/login"})}}),Object(f.jsx)(l.b,{exact:!0,path:["/login"],component:k}),Object(f.jsx)(l.b,{exact:!0,path:["/admin/testusers"],component:y}),Object(f.jsx)(l.b,{exact:!0,path:["/register"],component:S}),Object(f.jsx)(l.b,{exact:!0,path:["/quiz"],component:g}),Object(f.jsx)(l.b,{exact:!0,path:["/test"],render:function(e){return Object(f.jsx)(v,Object(n.a)({user:r,token:b},e))}}),Object(f.jsx)(l.b,{exact:!0,path:["/admin/questions"],component:C})]})})]})},z=c(45),Q=c(14),E={position:w.b.TOP_CENTER,timeout:5e3,offset:"100px",type:w.d.SUCCESS,transition:w.c.SCALE};i.a.render(Object(f.jsx)(Q.a,{children:Object(f.jsx)(w.a,Object(n.a)(Object(n.a)({template:z.a},E),{},{children:Object(f.jsx)(T,{})}))}),document.getElementById("root"))}},[[77,1,2]]]);
//# sourceMappingURL=main.28c35fc9.chunk.js.map