import{d as P,g as s,C as $,h as F,c as g,n as T,o as x,l as V,u as z,m as k,a as v,e as I,I as A,A as D,y as H,z as R,_ as E}from"./index-DJJlVKTf.js";const w=188,b=P({__name:"Spinner",props:{timer:{},canSpin:{type:Boolean}},emits:["finish"],setup(c,{expose:r,emit:m}){const t=c,i=m,a=s(0),d=s(t.timer),f=Math.floor(Math.random()*3+1);let l;console.log(t.canSpin);const u=()=>Math.floor(Math.random()*9)*w*-1;let n=u();const S=w*f,h=()=>{a.value-=S,d.value-=100},p=()=>{const C=w*8*-1,N=t.timer/100*f;let _=n;for(let B=0;B<N;B++)_-=w,_<C&&(_=0);console.log(_),i("finish",_)},e=()=>{d.value<=0?(clearInterval(l),p()):h()},o=()=>{l&&clearInterval(l),n=u(),a.value=n,d.value=t.timer,console.log(`Position: ${a.value}`),l=setInterval(e,100)};return r({reset:o}),$(()=>t.canSpin,y=>{console.log(y),o()}),F(()=>{}),(y,C)=>(x(),g("div",{style:T({backgroundPosition:"0px "+a.value+"px"}),class:"icons"},null,4))}}),M=c=>(H("data-v-2232dc80"),c=c(),R(),c),U={id:"slots"},j={key:0,autoplay:"true",class:"player",preload:"false"},q=M(()=>v("source",{src:"https://andyhoffman.codes/random-assets/img/slots/winning_slot.wav"},null,-1)),G=[q],J=A('<div style="display:flex;flex-direction:column;align-items:center;margin-top:25%;" data-v-2232dc80><span style="font-size:30px;font-weight:bold;" data-v-2232dc80>Награды: </span><div style="display:flex;flex-direction:column;align-items:center;margin-top:10px;" data-v-2232dc80><div style="display:flex;" data-v-2232dc80><div class="rewardIcon" data-v-2232dc80><span data-v-2232dc80>🍌 3k🍆</span></div><div class="rewardIcon" data-v-2232dc80><span data-v-2232dc80>🥑 10k🍆</span></div><div class="rewardIcon" data-v-2232dc80><span data-v-2232dc80>🍔 25k🍆</span></div></div><div class="rewardIcon" style="margin-top:15px;" data-v-2232dc80><span data-v-2232dc80>🍕 50k🍆</span></div></div></div>',1),K={class:"spinner-container"},L=M(()=>v("div",{class:"gradient-fade"},null,-1)),O={key:1,style:{display:"flex",width:"100%",flexDirection:"column",alignItems:"center",bottom:"15%",position:"fixed"}},Q={key:2,style:{display:"flex",width:"100%",flexDirection:"column",alignItems:"center",bottom:"15%",position:"fixed"}},W=P({__name:"Casino",setup(c){V();const r=z(),m=s(!0),t=s("single"),i=s(!1),a=s(!1),d=s(null),f=s(null),l=s(null),u=p=>{if(r.user){if(r.user.balance<1e3){D().showAlert("Недостаточно средств");return}t.value=p,m.value=!1,r.spinSlot().then(e=>{e&&(a.value=null,d.value=null,f.value=null,l.value=null,n.value=[],i.value=!i.value)})}},n=s([]),S=s([-188,0,-752,-1128]),h=p=>{if(n.value.push(p),console.log(n.value),n.value.length===3){const e=n.value[0];if(a.value=n.value.every(o=>o===e),t.value=="single"&&(m.value=!0),a.value){let o=S.value.findIndex(y=>y==n.value[0]);o!=-1&&r.getReward(S.value[o])}t.value=="auto"&&u("auto")}};return(p,e)=>(x(),g("div",U,[a.value?(x(),g("audio",j,G)):k("",!0),J,v("div",K,[I(b,{onFinish:h,timer:1e3,canSpin:i.value,ref_key:"spinner1",ref:d},null,8,["canSpin"]),I(b,{onFinish:h,timer:1400,canSpin:i.value,ref_key:"spinner2",ref:f},null,8,["canSpin"]),I(b,{onFinish:h,timer:2200,canSpin:i.value,ref_key:"spinner3",ref:l},null,8,["canSpin"]),L]),m.value?(x(),g("div",O,[v("button",{class:"mypost-button",style:{marginTop:"30px",width:"60%"},onClick:e[0]||(e[0]=o=>u("single"))},"Крутить(1000🍆) 🎲"),v("button",{class:"mypost-button",style:{marginTop:"30px",width:"60%"},onClick:e[1]||(e[1]=o=>u("auto"))},"Авто(1000🍆) 🎰")])):k("",!0),t.value=="auto"?(x(),g("div",Q,[v("button",{class:"mypost-button",style:{marginTop:"30px",width:"60%"},onClick:e[2]||(e[2]=o=>t.value="single")},"Стоп")])):k("",!0)]))}}),Y=E(W,[["__scopeId","data-v-2232dc80"]]);export{Y as default};
