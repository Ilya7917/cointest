import{B as L}from"./Balance-DqJ7_jsx.js";import{d as z,u as N,r as v,o as X,a as P,b as T,c as S,e,f as r,w as f,n as U,g as R,t as c,F as Y,h as y,p as V,i as D,_ as F,j as H,Z,s as j}from"./index-DOTc9hJS.js";const O=h=>(V("data-v-d6ec8de2"),h=h(),D(),h),q={class:"energy-section"},A=O(()=>e("span",null,"Доступный баланс на вывод: 0🍆",-1)),G=[A],J={style:{right:"15px",top:"25px",position:"fixed",display:"flex",justifyContent:"space-between"}},K={class:"energy-progress-bar"},Q={class:"energy-info"},W={class:"energy-value"},ee={class:"bottom-menu"},te={class:"menu-items"},ne=z({__name:"BottomMenu",setup(h){const n=N(),b=v(null),i=v(null),d=v(null),_=()=>{if(b.value&&i.value&&d.value){const s=b.value.getBoundingClientRect();i.value.style.bottom=`${window.innerHeight-s.top+20}px`,d.value.style.bottom=`${window.innerHeight-s.top+20}px`}};return X(async()=>{_()}),(s,B)=>{var x,C,M;const l=P("router-link");return T(),S(Y,null,[e("div",q,[e("div",{ref_key:"withdrawalBalanceRef",ref:d,style:{left:"15px",position:"fixed",display:"flex",justifyContent:"space-between"}},G,512),e("div",J,[r(l,{class:"menu-item",style:{fontSize:"35px"},to:"/tasks",tag:"button"},{default:f(()=>[y(" 📋 "),e("span",null,c(s.$t("bottomMenu.tasks")),1)]),_:1})]),e("div",{ref_key:"skinsRef",ref:i,style:{right:"15px",position:"fixed",display:"flex",justifyContent:"space-between"}},[r(l,{class:"menu-item",style:{fontSize:"35px"},to:"/skins",tag:"button"},{default:f(()=>[y(" 🍆 "),e("span",null,c(s.$t("bottomMenu.skins")),1)]),_:1})],512),e("div",{ref_key:"energyRef",ref:b,class:"energy"},[e("div",K,[e("div",{class:"energy-progress",style:U({width:(((x=R(n).user)==null?void 0:x.energy)??0)/(1e3+(((C=R(n).user)==null?void 0:C.max_energy_level)??0)*500)*100+"%"})},null,4)]),e("div",Q,[e("span",W,"⚡"+c((M=R(n).user)==null?void 0:M.energy),1)])],512)]),e("div",ee,[e("div",te,[r(l,{class:"menu-item",to:"/leaderboard",tag:"button"},{default:f(()=>[y(" 🏆 "),e("span",null,c(s.$t("bottomMenu.top")),1)]),_:1}),r(l,{class:"menu-item",to:"/channels",tag:"button"},{default:f(()=>[y(" 💰 "),e("span",null,c(s.$t("bottomMenu.earn")),1)]),_:1}),r(l,{class:"menu-item",to:"/market",tag:"button"},{default:f(()=>[y(" 🛒 "),e("span",null,c(s.$t("bottomMenu.market")),1)]),_:1}),r(l,{class:"menu-item",to:"/slots",tag:"button"},{default:f(()=>[y(" 🎰 "),e("span",null,c(s.$t("slots.bottom")),1)]),_:1}),r(l,{class:"menu-item",to:"/posts",tag:"button"},{default:f(()=>[y(" 🌐 "),e("span",null,c(s.$t("bottomMenu.posts")),1)]),_:1}),r(l,{class:"menu-item",to:"/boosts",tag:"button"},{default:f(()=>[y(" 🚀 "),e("span",null,c(s.$t("bottomMenu.boosts")),1)]),_:1})])])],64)}}}),se=F(ne,[["__scopeId","data-v-d6ec8de2"]]),oe=["src"],le=["src"],ie=z({__name:"Miner",setup(h){const n=N(),{getCurrentSkin:b}=n,i=v(null),d=v(0);let _;const s=()=>{console.log(`Кількість натискань: ${d.value}`),n.sendMineCoins(d.value),d.value=0},B=()=>{d.value+=1,_&&clearTimeout(_),_=setTimeout(s,300)};X(()=>{window.scrollTo(0,0)}),H(()=>{_&&clearTimeout(_)});const l=v(null),x=()=>"ontouchstart"in window||navigator.maxTouchPoints>0,C=(o,m,p)=>{var k;const t=document.createElement("div");t.style.position="absolute",t.style.left=`${m}px`,t.style.top=`${p}px`,t.style.display="flex",t.style.alignItems="center",t.style.justifyContent="center",t.style.transform="translate(-50%, -50%)";const a=document.createElement("div");a.textContent=o.toString(),n.user&&n.user.is_premium?a.style.color="#ff9900":a.style.color="white",a.style.userSelect="none",a.style.pointerEvents="none",a.style.fontSize="40px",a.classList.add("flying-number");const u=document.createElement("img");u.src=E(),u.style.width="35px",u.style.height="35px",u.style.marginLeft="50px",u.style.marginRight="8px",u.classList.add("flying-number"),t.appendChild(u),t.appendChild(a),(k=l.value)==null||k.appendChild(t),setTimeout(()=>{t.remove()},1e3)};function M(o){return window.TouchEvent!==void 0?o instanceof TouchEvent:o.touches!==void 0}const $=o=>{var I;if(!n.user||!i.value||o.type==="mousedown"&&x())return;let m,p;if(M(o)){const w=o;m=w.touches[0].clientX,p=w.touches[0].clientY}else{const w=o;m=w.clientX,p=w.clientY}const t=(I=l.value)==null?void 0:I.getBoundingClientRect(),a=m-((t==null?void 0:t.left)??0),u=p-((t==null?void 0:t.top)??0);if(n.user.energy>n.user.mine_level){n.mineCoins();var k=1;n.user.is_premium&&(k=2),C(n.user.mine_level*k,a,u),Z().impactOccurred("light"),B()}i.value.style.transform="scale(0.98)"},g=()=>{i.value&&(i.value.style.transform="",i.value.style.transform="scale(1)")},E=()=>{let o=j.findIndex(m=>m.id==b);return console.log(`Index is : ${o}`),j[o].skin};return(o,m)=>{var p;return T(),S(Y,null,[e("main",null,[r(L),e("div",{class:"coin-container numbers-container",ref_key:"numbersContainerRef",ref:l},[(p=R(n).user)!=null&&p.is_premium?(T(),S("img",{key:0,src:E(),alt:"Premium Coin",class:"coin",ref_key:"coinRef",ref:i,onMousedown:$,onTouchstart:$,onMouseup:g,onMouseleave:g,onTouchend:g},null,40,oe)):(T(),S("img",{key:1,src:E(),class:"coin",alt:"Regular Coin",ref_key:"coinRef",ref:i,onMousedown:$,onTouchstart:$,onMouseup:g,onMouseleave:g,onTouchend:g},null,40,le))],512)]),r(se)],64)}}}),ue=F(ie,[["__scopeId","data-v-eedbf224"]]);export{ue as default};
