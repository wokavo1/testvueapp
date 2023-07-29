(function(){"use strict";var t={1382:function(t,e,n){var a=n(9242),s=n(3396);const o={class:"app"};function r(t,e,n,a,r,i){const u=(0,s.up)("Navbar"),d=(0,s.up)("router-view"),l=(0,s.up)("MyDialog");return(0,s.wg)(),(0,s.iD)(s.HY,null,[(0,s.Wm)(u),(0,s._)("div",o,[(0,s.Wm)(d,{style:{"min-height":"100%"}})]),(0,s.Wm)(l,{show:r.dialogVisible,"onUpdate:show":e[0]||(e[0]=t=>r.dialogVisible=t),content_width:60},null,8,["show"])],64)}n(7658);var i=n(7139);const u={class:"navbar"},d={class:"navbar__btns"},l={key:0,class:"login__btns"},c={key:1,class:"login__btns"};function p(t,e,n,a,o,r){const p=(0,s.up)("MyButton");return(0,s.wg)(),(0,s.iD)("div",u,[(0,s._)("div",d,[(0,s.Wm)(p,{class:"btns",onClick:e[0]||(e[0]=e=>t.$router.push("/"))},{default:(0,s.w5)((()=>[(0,s.Uk)("Main Page")])),_:1}),(0,s.Wm)(p,{class:"btns",onClick:e[1]||(e[1]=e=>t.$router.push("/secondpage"))},{default:(0,s.w5)((()=>[(0,s.Uk)("Second Page")])),_:1}),t.isAuth?((0,s.wg)(),(0,s.iD)("div",l,[(0,s._)("h3",null,(0,i.zw)(t.username),1),(0,s.Wm)(p,{class:"btns",onClick:r.Logout},{default:(0,s.w5)((()=>[(0,s.Uk)("Выйти")])),_:1},8,["onClick"])])):((0,s.wg)(),(0,s.iD)("div",c,[(0,s.Wm)(p,{class:"btns",onClick:e[2]||(e[2]=e=>t.$router.push("/login"))},{default:(0,s.w5)((()=>[(0,s.Uk)("Войти")])),_:1})]))])])}var h=n(65),m={name:"Navbar",computed:{...(0,h.rn)({isAuth:t=>t.auth.isAuth,username:t=>t.auth.username})},methods:{...(0,h.OI)({Auth:"auth/Auth"}),Logout(){this.Auth({isAuth:!1,token:"",roles:[],username:""}),this.$router.push("/")}}},v=n(89);const g=(0,v.Z)(m,[["render",p],["__scopeId","data-v-21277c29"]]);var f=g,_={data(){return{dialogVisible:!1}},methods:{...(0,h.OI)({Auth:"auth/Auth",session_params_set:"session/session_params_set"}),onBasketClick(){this.dialogVisible=!0},hideDialog(){this.dialogVisible=!1}},mounted(){const t=localStorage.getItem("auth_params");this.Auth(JSON.parse(t));const e=localStorage.getItem("session_params");this.session_params_set(JSON.parse(e))},components:{Navbar:f}};const w=(0,v.Z)(_,[["render",r]]);var y=w;const b={class:"btn"};function k(t,e,n,a,o,r){return(0,s.wg)(),(0,s.iD)("button",b,[(0,s.WI)(t.$slots,"default",{},void 0,!0)])}var I={name:"MyButton"};const D=(0,v.Z)(I,[["render",k],["__scopeId","data-v-34f0ecf1"]]);var C=D;const x=["type","value"];function S(t,e,n,a,o,r){return(0,s.wg)(),(0,s.iD)("input",{type:n.type,value:n.value,onInput:e[0]||(e[0]=(...t)=>r.updateInput&&r.updateInput(...t)),class:"input"},null,40,x)}var A={name:"MyInput",props:{value:{type:[String,Number]},type:{type:String,default:"text"}},methods:{updateInput(t){this.$emit("update:value",t.target.value)}}};const M=(0,v.Z)(A,[["render",S],["__scopeId","data-v-f580bab2"]]);var O=M;function W(t,e,n,o,r,i){return n.show?((0,s.wg)(),(0,s.iD)("div",{key:0,class:"dialog",onClick:e[1]||(e[1]=(...t)=>i.hideDialog&&i.hideDialog(...t))},[(0,s._)("div",{onClick:e[0]||(e[0]=(0,a.iM)((()=>{}),["stop"])),class:"dialog__content"},[(0,s.WI)(t.$slots,"default",{},void 0,!0)])])):(0,s.kq)("",!0)}var B={props:{show:{type:Boolean,default:!1}},methods:{hideDialog(){this.$emit("update:show",!1)}},name:"MyDialog",mounted(){}};const L=(0,v.Z)(B,[["render",W],["__scopeId","data-v-64bfc52a"]]);var U=L;const $=t=>((0,s.dD)("data-v-c39ffeee"),t=t(),(0,s.Cn)(),t),N=["value"],Z=$((()=>(0,s._)("option",{disabled:"",value:""},"Выберите из списка",-1))),j=["value"];function J(t,e,n,a,o,r){return(0,s.wg)(),(0,s.iD)("select",{class:"select",value:n.value,onChange:e[0]||(e[0]=(...t)=>r.optionChanged&&r.optionChanged(...t))},[Z,((0,s.wg)(!0),(0,s.iD)(s.HY,null,(0,s.Ko)(n.options,(t=>((0,s.wg)(),(0,s.iD)("option",{key:t._id,value:t._id},(0,i.zw)(t.name),9,j)))),128))],40,N)}var P={name:"MySelect",props:{value:{type:String},options:{type:Array,default:()=>[]}},methods:{optionChanged(t){this.$emit("update:value",t.target.value)}}};const T=(0,v.Z)(P,[["render",J],["__scopeId","data-v-c39ffeee"]]);var z=T;const V=["type","value","rows"];function Y(t,e,n,a,o,r){return(0,s.wg)(),(0,s.iD)("textarea",{type:n.type,value:n.value,rows:n.rows,onInput:e[0]||(e[0]=(...t)=>r.updateInput&&r.updateInput(...t)),class:"input",style:{"margin-top":"15px"}},null,40,V)}var q={name:"MyTextarea",props:{value:{type:[String,Number]},type:{type:String,default:"text"},rows:{type:String,default:"4"}},methods:{updateInput(t){this.$emit("update:value",t.target.value)}}};const E=(0,v.Z)(q,[["render",Y],["__scopeId","data-v-6d2d6f6c"]]);var G=E,H=[C,O,U,z,G],R=n(2483);const F=t=>((0,s.dD)("data-v-0bdd66fa"),t=t(),(0,s.Cn)(),t),K={class:"flex-container"},Q=F((()=>(0,s._)("h1",{class:"flex-container-item"},"Main page",-1))),X={class:"flex-container-item"};function tt(t,e,n,a,o,r){const u=(0,s.up)("MyButton");return(0,s.wg)(),(0,s.iD)("div",K,[Q,(0,s.Wm)(u,{onClick:r.rand,class:"flex-container-item"},{default:(0,s.w5)((()=>[(0,s.Uk)("Get random number")])),_:1},8,["onClick"]),(0,s._)("div",X,"Your random number: "+(0,i.zw)(o.rndnum),1)])}var et={data(){return{rndnum:0}},methods:{rand(){this.rndnum=Math.random()}}};const nt=(0,v.Z)(et,[["render",tt],["__scopeId","data-v-0bdd66fa"]]);var at=nt;const st=t=>((0,s.dD)("data-v-6df7d0c8"),t=t(),(0,s.Cn)(),t),ot={class:"auth_form"},rt=st((()=>(0,s._)("h2",{style:{"margin-top":"20px"}},"Login",-1))),it=st((()=>(0,s._)("h2",{style:{"margin-top":"20px"}},"Password",-1))),ut=st((()=>(0,s._)("a",{style:{"align-self":"center","margin-top":"15px"},href:"/registration"}," Нет аккаунта? Создать аккаунт ",-1))),dt={key:0,class:"error"};function lt(t,e,n,a,o,r){const u=(0,s.up)("MyInput"),d=(0,s.up)("MyButton");return(0,s.wg)(),(0,s.iD)("div",ot,[rt,(0,s.Wm)(u,{value:o.username,"onUpdate:value":e[0]||(e[0]=t=>o.username=t)},null,8,["value"]),it,(0,s.Wm)(u,{type:"password",value:o.password,"onUpdate:value":e[1]||(e[1]=t=>o.password=t)},null,8,["value"]),(0,s.Wm)(d,{class:"button",onClick:r.Login},{default:(0,s.w5)((()=>[(0,s.Uk)(" Войти ")])),_:1},8,["onClick"]),ut,o.isBadLogin?((0,s.wg)(),(0,s.iD)("div",dt,[(0,s._)("text",null,(0,i.zw)(o.error),1)])):(0,s.kq)("",!0)])}var ct={data(){return{username:"",password:"",isBadLogin:!1,error:""}},methods:{...(0,h.OI)({Auth:"auth/Auth"}),async Login(){try{console.log(this.username,this.password);const t=await fetch("http://localhost:5000/auth/login",{method:"POST",cors:"no-cors",headers:{"Content-Type":"application/json"},body:JSON.stringify({username:this.username,password:this.password})}),e=await t.json();if(e.error)return this.error=e.error.message,void(this.isBadLogin=!0);this.Auth({isAuth:!0,token:e.token,username:this.username}),this.isBadLogin=!1,this.$router.push("/")}catch(t){console.error(t)}}},computed:{...(0,h.rn)({isAuth:t=>t.auth.isAuth})}};const pt=(0,v.Z)(ct,[["render",lt],["__scopeId","data-v-6df7d0c8"]]);var ht=pt;const mt=t=>((0,s.dD)("data-v-edb42c4e"),t=t(),(0,s.Cn)(),t),vt={class:"auth_form"},gt=mt((()=>(0,s._)("h2",{style:{"margin-top":"20px"}},"Login",-1))),ft=mt((()=>(0,s._)("h2",{style:{"margin-top":"20px"}},"Password",-1))),_t={key:0,class:"error"};function wt(t,e,n,a,o,r){const u=(0,s.up)("MyInput"),d=(0,s.up)("MyButton");return(0,s.wg)(),(0,s.iD)("div",vt,[gt,(0,s.Wm)(u,{value:o.username,"onUpdate:value":e[0]||(e[0]=t=>o.username=t)},null,8,["value"]),ft,(0,s.Wm)(u,{type:"password",value:o.password,"onUpdate:value":e[1]||(e[1]=t=>o.password=t)},null,8,["value"]),(0,s.Wm)(d,{class:"button",onClick:r.Registration},{default:(0,s.w5)((()=>[(0,s.Uk)(" Зарегистрироваться ")])),_:1},8,["onClick"]),o.isBadLogin?((0,s.wg)(),(0,s.iD)("div",_t,[(0,s._)("text",null,(0,i.zw)(o.error),1)])):(0,s.kq)("",!0)])}var yt={data(){return{username:"",password:"",isBadLogin:!1,error:""}},methods:{async Registration(){try{const t=await fetch("http://localhost:5000/auth/registration",{method:"POST",cors:"no-cors",headers:{"Content-Type":"application/json"},body:JSON.stringify({username:this.username,password:this.password})}),e=await t.json();if(e.error)return this.isBadLogin=!0,void(this.error=e.error.message);this.isBadLogin=!1,this.$router.push("/registration/success")}catch(t){console.log(t)}}},computed:{}};const bt=(0,v.Z)(yt,[["render",wt],["__scopeId","data-v-edb42c4e"]]);var kt=bt;const It=t=>((0,s.dD)("data-v-64a3a804"),t=t(),(0,s.Cn)(),t),Dt={class:"main"},Ct=It((()=>(0,s._)("h2",{style:{"align-self":"center"}},"Регистрация прошла успешно!",-1)));function xt(t,e,n,a,o,r){const i=(0,s.up)("MyButton");return(0,s.wg)(),(0,s.iD)("div",Dt,[Ct,(0,s.Wm)(i,{onClick:e[0]||(e[0]=e=>t.$router.push("/login"))},{default:(0,s.w5)((()=>[(0,s.Uk)(" Авторизироваться ")])),_:1})])}var St={};const At=(0,v.Z)(St,[["render",xt],["__scopeId","data-v-64a3a804"]]);var Mt=At;const Ot=t=>((0,s.dD)("data-v-31919250"),t=t(),(0,s.Cn)(),t),Wt={class:"flex-container"},Bt=Ot((()=>(0,s._)("h1",{class:"flex-container-item"},"Second page",-1))),Lt={class:"flex-container-item"};function Ut(t,e,n,a,o,r){const u=(0,s.up)("MyButton");return(0,s.wg)(),(0,s.iD)("div",Wt,[Bt,(0,s.Wm)(u,{onClick:r.rand,class:"flex-container-item"},{default:(0,s.w5)((()=>[(0,s.Uk)("Get random integer")])),_:1},8,["onClick"]),(0,s._)("div",Lt,"Your random integer (1-100): "+(0,i.zw)(o.rndnum),1)])}var $t={data(){return{rndnum:0}},methods:{rand(){this.rndnum=Math.floor(100*Math.random())}}};const Nt=(0,v.Z)($t,[["render",Ut],["__scopeId","data-v-31919250"]]);var Zt=Nt;const jt=[{path:"/",component:at},{path:"/login",component:ht},{path:"/registration",component:kt},{path:"/registration/success",component:Mt},{path:"/secondpage",component:Zt}],Jt=(0,R.p7)({history:(0,R.PO)("/"),routes:jt});var Pt=Jt;const Tt={state:()=>({isAuth:!1,token:"",username:""}),getters:{isAdmin(t){return!!t.roles.includes("ADMIN")}},mutations:{Auth(t,e){e&&(t.isAuth=e.isAuth,t.token=e.token,t.username=e.username,localStorage.setItem("auth_params",JSON.stringify(e)))}},actions:{},namespaced:!0},zt={state:()=>({isJoinedSession:!1,sessionID:""}),getters:{},mutations:{session_params_set(t,e){e&&(t.isJoinedSession=e.isJoinedSession,t.sessionID=e.sessionID,localStorage.setItem("session_params",JSON.stringify(e)))}},actions:{},namespaced:!0};var Vt=(0,h.MT)({state:{},getters:{},mutations:{},actions:{},modules:{auth:Tt,session:zt}});const Yt=(0,a.ri)(y);H.forEach((t=>{Yt.component(t.name,t)})),Yt.use(Vt).use(Pt).mount("#app")}},e={};function n(a){var s=e[a];if(void 0!==s)return s.exports;var o=e[a]={exports:{}};return t[a].call(o.exports,o,o.exports,n),o.exports}n.m=t,function(){var t=[];n.O=function(e,a,s,o){if(!a){var r=1/0;for(l=0;l<t.length;l++){a=t[l][0],s=t[l][1],o=t[l][2];for(var i=!0,u=0;u<a.length;u++)(!1&o||r>=o)&&Object.keys(n.O).every((function(t){return n.O[t](a[u])}))?a.splice(u--,1):(i=!1,o<r&&(r=o));if(i){t.splice(l--,1);var d=s();void 0!==d&&(e=d)}}return e}o=o||0;for(var l=t.length;l>0&&t[l-1][2]>o;l--)t[l]=t[l-1];t[l]=[a,s,o]}}(),function(){n.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return n.d(e,{a:e}),e}}(),function(){n.d=function(t,e){for(var a in e)n.o(e,a)&&!n.o(t,a)&&Object.defineProperty(t,a,{enumerable:!0,get:e[a]})}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)}}(),function(){var t={143:0};n.O.j=function(e){return 0===t[e]};var e=function(e,a){var s,o,r=a[0],i=a[1],u=a[2],d=0;if(r.some((function(e){return 0!==t[e]}))){for(s in i)n.o(i,s)&&(n.m[s]=i[s]);if(u)var l=u(n)}for(e&&e(a);d<r.length;d++)o=r[d],n.o(t,o)&&t[o]&&t[o][0](),t[o]=0;return n.O(l)},a=self["webpackChunkapp"]=self["webpackChunkapp"]||[];a.forEach(e.bind(null,0)),a.push=e.bind(null,a.push.bind(a))}();var a=n.O(void 0,[998],(function(){return n(1382)}));a=n.O(a)})();
//# sourceMappingURL=app.136f61b3.js.map