(this["webpackJsonpmental-health-app-web"]=this["webpackJsonpmental-health-app-web"]||[]).push([[0],{157:function(e,t,n){},158:function(e,t,n){"use strict";n.r(t);var c=n(0),r=n.n(c),a=n(40),s=n.n(a),i=n(25),o=n(9),l=n(5),u=n(46),j=n(53),d=n(37);n(159),n(135),n(160);d.a.initializeApp({apiKey:"AIzaSyBvuhOtC73r5cFvVralc_K4JQNOOsoV40Q",authDomain:"mental-health-app-e2112.firebaseapp.com",projectId:"mental-health-app-e2112",storageBucket:"mental-health-app-e2112.appspot.com",messagingSenderId:"853014821948",appId:"1:853014821948:web:824fe17da40b19646bd739",measurementId:"G-K4WSJ64G2Y"});var b=d.a.auth(),h=d.a.storage(),p=d.a.firestore(),O=n(109),x=n(110),g=n.n(x),f=n(22),m=n.n(f),v=n(62),w=n(44),y=n(181),S=n(4),A=r.a.createContext();function k(){return Object(c.useContext)(A)}function C(e){var t=e.children,n=Object(c.useState)(),r=Object(l.a)(n,2),a=r[0],s=r[1],i=Object(c.useState)(!0),o=Object(l.a)(i,2),u=o[0],j=o[1],h=Object(c.useRef)(""),O=Object(y.a)();function x(){return(x=Object(w.a)(m.a.mark((function e(){var t;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,b.signOut();case 2:t="signout-succ",O.isActive(t)||O({id:t,title:"Signed out successfully",status:"success",isClosable:!0,position:"top-right"});case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}Object(c.useEffect)((function(){var e=p.collection("users");return b.onAuthStateChanged(function(){var t=Object(w.a)(m.a.mark((function t(n){var c,r,a,i;return m.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(n){t.next=4;break}return s(null),j(!1),t.abrupt("return");case 4:return c={},t.next=7,e.doc(n.uid).get();case 7:if((r=t.sent).exists){t.next=16;break}return console.log("Inside",h),a={email:n.email,name:n.displayName||h.current,contentCreator:!1,photoURL:n.photoURL,admin:!1},t.next=13,e.doc(n.uid).set(a);case 13:c=Object(v.a)(Object(v.a)({},a),{},{uid:n.uid}),t.next=17;break;case 16:c=Object(v.a)(Object(v.a)({},r.data()),{},{uid:n.uid});case 17:h.current="",s(c),j(!1),i="".concat(c.uid,"-signin-succ"),O.isActive(i)||O({id:i,title:"Signed in as ".concat(c.name),status:"success",isClosable:!0,position:"top-right"});case 22:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}())}),[]);var g={currentUser:a,loginWithEmailAndPassword:function(e,t){return b.signInWithEmailAndPassword(e,t)},signUpWithEmailAndPassword:function(e,t,n){return h.current=e,console.log(e),b.createUserWithEmailAndPassword(t,n)},signInWithGoogle:function(){var e=new d.a.auth.GoogleAuthProvider;return b.signInWithPopup(e)},logout:function(){return x.apply(this,arguments)},resetPassword:function(e){return b.sendPasswordResetEmail(e)}};return Object(S.jsx)(A.Provider,{value:g,children:!u&&t})}var U=n(180),I=n(56),R=n(171),P=n(172),T=n(173),E=n(182),W=(n(157),function(){function e(t){Object(u.a)(this,e),this.loader=t}return Object(j.a)(e,[{key:"upload",value:function(){return this.loader.file.then((function(e){return new Promise((function(t,n){var c=h.ref().child(e.name).put(e);c.on(d.a.storage.TaskEvent.STATE_CHANGED,(function(e){var t=e.bytesTransferred/e.totalBytes*100;switch(console.log("Upload is "+t+"% done"),e.state){case d.a.storage.TaskState.PAUSED:console.log("Upload is paused");break;case d.a.storage.TaskState.RUNNING:console.log("Upload is running")}}),(function(e){switch(e.code){case"storage/unauthorized":n(" User doesn't have permission to access the object");break;case"storage/canceled":n("User canceled the upload");break;case"storage/unknown":n("Unknown error occurred, inspect error.serverResponse")}}),(function(){c.snapshot.ref.getDownloadURL().then((function(e){t({default:e})}))}))}))}))}}]),e}());function D(){var e=p.collection("posts"),t=Object(c.useRef)(null),n=Object(c.useState)(!0),r=Object(l.a)(n,2),a=r[0],s=r[1],i=Object(c.useState)(""),u=Object(l.a)(i,2),j=u[0],d=u[1],b=Object(c.useState)(""),h=Object(l.a)(b,2),x=h[0],f=h[1],m=k().currentUser,v=Object(y.a)(),w=Object(o.g)(),A=function(){s(!1)};return m?m.contentCreator||m.admin?Object(S.jsxs)(S.Fragment,{children:[Object(S.jsxs)(U.a,{isOpen:a,onClose:A,children:[Object(S.jsx)(U.f,{}),Object(S.jsxs)(U.c,{children:[Object(S.jsx)(U.e,{children:"New Blog"}),Object(S.jsxs)(U.b,{children:[Object(S.jsxs)(I.a,{isRequired:!0,children:[Object(S.jsx)(R.a,{children:"Title"}),Object(S.jsx)(P.a,{type:"text",placeholder:"Blog title",size:"lg",onChange:function(e){return d(e.currentTarget.value)}})]}),Object(S.jsxs)(I.a,{mt:4,isRequired:!0,children:[Object(S.jsx)(R.a,{children:"Description"}),Object(S.jsx)(T.a,{placeholder:"Here is a sample placeholder",size:"lg",resize:"horizontal",onChange:function(e){return f(e.currentTarget.value)}})]})]}),Object(S.jsx)(U.d,{children:Object(S.jsx)(E.a,{isDisabled:!j||!x,colorScheme:"blue",mr:3,onClick:A,children:"Start editing"})})]})]}),Object(S.jsxs)("div",{className:"main",children:[Object(S.jsx)(E.a,{colorScheme:"blue",onClick:function(){var n=t.current.getData(),c={createdAt:(new Date).toISOString(),authorID:m.uid,authorName:m.name,content:n,title:j,description:x,type:"blog"};e.add(c).then((function(){var e="publish-success";v.isActive(e)||v({id:e,title:"Blog published successfully",status:"success",isClosable:!0,position:"top-right"}),w("/")})).catch((function(e){console.error(e);var t="publish-fail";v.isActive(t)||v({id:t,title:"Unable publish blog",status:"error",isClosable:!0,position:"top-right"})}))},children:"Publish!"}),Object(S.jsx)(E.a,{ml:2,colorScheme:"blue",onClick:function(){return console.log(t.current.getData())},children:"Log the content!"}),Object(S.jsx)(O.CKEditor,{editor:g.a,data:"<h1>".concat(j,"</h1>"),onReady:function(e){t.current=e,e.plugins.get("FileRepository").createUploadAdapter=function(e){return new W(e)}}})]})]}):Object(S.jsx)("p",{children:"You need to be a content creator to be able to write blogs..."}):Object(S.jsx)("p",{children:"Please sign in to write a blog.."})}function z(){return Object(S.jsx)("div",{children:Object(S.jsx)("p",{children:"Here you will be able to add a image type post"})})}function N(){return Object(S.jsx)("div",{children:Object(S.jsxs)(o.c,{children:[Object(S.jsx)(o.a,{path:"/",element:Object(S.jsx)(G,{})}),Object(S.jsx)(o.a,{path:"blog",element:Object(S.jsx)(D,{})}),Object(S.jsx)(o.a,{path:"image",element:Object(S.jsx)(z,{})})]})})}function G(){return Object(S.jsxs)("div",{children:[Object(S.jsx)(i.b,{to:"/new/image",children:"Image type"}),Object(S.jsx)(i.b,{to:"/new/blog",children:"Blog type"})]})}function B(){return Object(S.jsxs)("div",{children:[Object(S.jsx)("h1",{children:"Hi!"}),Object(S.jsx)("p",{children:"This is the home page but hasn't been implemented yet :/"}),Object(S.jsxs)("p",{children:["meanwhile, you can try creating a blog type input ",Object(S.jsx)(i.b,{to:"/new/blog",children:"here"})]})]})}var _=n(174),q=n(175),L=n(176),H=n(177),F=n(185),J=n(178),K=n(79);function Y(){var e=Object(c.useState)(""),t=Object(l.a)(e,2),n=t[0],r=t[1],a=Object(c.useState)(""),s=Object(l.a)(a,2),u=s[0],j=s[1],d=Object(c.useState)(!1),b=Object(l.a)(d,2),h=b[0],p=b[1],O=k(),x=O.loginWithEmailAndPassword,g=O.signInWithGoogle,f=Object(y.a)(),v=Object(o.g)(),A=function(){var e=Object(w.a)(m.a.mark((function e(t){var c;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),e.prev=1,p(!0),e.next=5,x(n,u);case 5:e.next=11;break;case 7:e.prev=7,e.t0=e.catch(1),c="signin-fail",f.isActive(c)||f({id:c,title:"Unable to sign in",description:"Please check the email and password",status:"error",isClosable:!0,position:"top-right"});case 11:p(!1),v("/");case 13:case"end":return e.stop()}}),e,null,[[1,7]])})));return function(t){return e.apply(this,arguments)}}(),C=function(){var e=Object(w.a)(m.a.mark((function e(){return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return p(!0),e.next=3,g();case 3:p(!1),v("/");case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(S.jsx)(_.a,{width:"full",align:"center",justifyContent:"center",children:Object(S.jsxs)(q.a,{p:8,maxWidth:"500px",borderWidth:1,borderRadius:8,boxShadow:"lg",children:[Object(S.jsx)(q.a,{textAlign:"center",children:Object(S.jsx)(L.a,{children:"Login"})}),Object(S.jsxs)(q.a,{my:4,textAlign:"left",children:[Object(S.jsxs)("form",{onSubmit:A,children:[Object(S.jsxs)(I.a,{isRequired:!0,children:[Object(S.jsx)(R.a,{children:"Email"}),Object(S.jsx)(P.a,{type:"email",placeholder:"your@example.com",size:"lg",onChange:function(e){return r(e.currentTarget.value)}})]}),Object(S.jsxs)(I.a,{mt:4,isRequired:!0,children:[Object(S.jsx)(R.a,{children:"Password"}),Object(S.jsx)(P.a,{type:"password",placeholder:"*******",size:"lg",onChange:function(e){return j(e.currentTarget.value)}})]}),Object(S.jsx)(E.a,{isLoading:h,loadingText:"Submitting",width:"full",mt:4,type:"submit",children:"Sign In"})]}),Object(S.jsx)(q.a,{textAlign:"center",mt:"4",mb:"2",children:Object(S.jsx)(H.a,{color:"gray.500",children:"Or, sign in with"})}),Object(S.jsx)(F.a,{children:Object(S.jsx)(E.a,{width:"full",leftIcon:Object(S.jsx)(K.a,{}),onClick:C,children:"Google"})}),Object(S.jsx)(q.a,{textAlign:"center",mt:"5",children:Object(S.jsxs)(H.a,{color:"gray.500",children:["Don't have an account?"," ",Object(S.jsx)(J.a,{as:i.b,to:"/sign_up",color:"blue.400",children:"Register"})]})})]})]})})}function M(){var e=Object(c.useState)(""),t=Object(l.a)(e,2),n=t[0],r=t[1],a=Object(c.useState)(""),s=Object(l.a)(a,2),u=s[0],j=s[1],d=Object(c.useState)(""),b=Object(l.a)(d,2),h=b[0],p=b[1],O=Object(c.useState)(!1),x=Object(l.a)(O,2),g=x[0],f=x[1],v=k(),A=v.signUpWithEmailAndPassword,C=v.signInWithGoogle,U=Object(y.a)(),T=Object(o.g)(),W=function(){var e=Object(w.a)(m.a.mark((function e(t){var c,r;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),e.prev=1,f(!0),e.next=5,A(n,u,h);case 5:c="signin-succ",U.isActive(c)||U({id:c,title:"Account created successfully",status:"success",isClosable:!0,position:"top-right"}),e.next=13;break;case 9:e.prev=9,e.t0=e.catch(1),r="signup-fail",U.isActive(r)||U({id:r,title:"Unable to create an account",description:"Please check the email and password",status:"error",isClosable:!0,position:"top-right"});case 13:f(!1),T("/");case 15:case"end":return e.stop()}}),e,null,[[1,9]])})));return function(t){return e.apply(this,arguments)}}(),D=function(){var e=Object(w.a)(m.a.mark((function e(){return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return f(!0),e.next=3,C();case 3:f(!1),T("/");case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(S.jsx)(_.a,{width:"full",align:"center",justifyContent:"center",children:Object(S.jsxs)(q.a,{p:8,maxWidth:"500px",borderWidth:1,borderRadius:8,boxShadow:"lg",children:[Object(S.jsx)(q.a,{textAlign:"center",children:Object(S.jsx)(L.a,{children:"Sign Up"})}),Object(S.jsxs)(q.a,{my:4,textAlign:"left",children:[Object(S.jsxs)("form",{onSubmit:W,children:[Object(S.jsxs)(I.a,{isRequired:!0,children:[Object(S.jsx)(R.a,{children:"Name"}),Object(S.jsx)(P.a,{type:"text",placeholder:"Your name",size:"lg",onChange:function(e){return r(e.currentTarget.value)}})]}),Object(S.jsxs)(I.a,{mt:4,isRequired:!0,children:[Object(S.jsx)(R.a,{children:"Email"}),Object(S.jsx)(P.a,{type:"email",placeholder:"your@example.com",size:"lg",onChange:function(e){return j(e.currentTarget.value)}})]}),Object(S.jsxs)(I.a,{mt:4,isRequired:!0,children:[Object(S.jsx)(R.a,{children:"Password"}),Object(S.jsx)(P.a,{type:"password",placeholder:"*******",size:"lg",onChange:function(e){return p(e.currentTarget.value)}})]}),Object(S.jsx)(E.a,{isLoading:g,loadingText:"Submitting",width:"full",mt:4,type:"submit",children:"Sign Up"})]}),Object(S.jsx)(q.a,{textAlign:"center",mt:"4",mb:"2",children:Object(S.jsx)(H.a,{color:"gray.500",children:"Or, sign in with"})}),Object(S.jsx)(F.a,{children:Object(S.jsx)(E.a,{width:"full",leftIcon:Object(S.jsx)(K.a,{}),onClick:D,children:"Google"})}),Object(S.jsx)(q.a,{textAlign:"center",mt:"5",children:Object(S.jsxs)(H.a,{color:"gray.500",children:["Already have an account?"," ",Object(S.jsx)(J.a,{as:i.b,to:"/sign_in",color:"blue.400",children:"Sign In"})]})})]})]})})}function Q(){var e=k(),t=e.currentUser,n=e.logout;return Object(S.jsxs)("nav",{children:[Object(S.jsx)("h1",{children:"Mental Health App"}),t?Object(S.jsx)("p",{onClick:n,children:"Sign Out"}):Object(S.jsxs)(S.Fragment,{children:[Object(S.jsx)(i.b,{to:"sign_in",children:"Sign In"})," ",Object(S.jsx)(i.b,{to:"sign_up",children:"Sign Up"})]})]})}var V=function(){return Object(S.jsx)("div",{className:"App",children:Object(S.jsx)(C,{children:Object(S.jsxs)(i.a,{children:[Object(S.jsx)(Q,{}),Object(S.jsxs)(o.c,{children:[Object(S.jsx)(o.a,{path:"/",element:Object(S.jsx)(B,{})}),Object(S.jsx)(o.a,{path:"/sign_in",element:Object(S.jsx)(Y,{})}),Object(S.jsx)(o.a,{path:"/sign_up",element:Object(S.jsx)(M,{})}),Object(S.jsx)(o.a,{path:"new/*",element:Object(S.jsx)(N,{})})]})]})})})},X=n(184);s.a.render(Object(S.jsx)(r.a.StrictMode,{children:Object(S.jsx)(X.a,{children:Object(S.jsx)(V,{})})}),document.getElementById("root"))}},[[158,1,2]]]);
//# sourceMappingURL=main.8ddeb4ff.chunk.js.map