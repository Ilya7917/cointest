import{B as U}from"./Balance-jyUf31h0.js";import{d as E,u as B,r as V,o as b,c as k,a as t,b as i,w as d,n as D,e as M,t as m,F as I,f as _,_ as N,g as C,h as P,i as Z,Z as L,s as S}from"./index-BJdHOvBe.js";const O={class:"energy-section"},j={style:{right:"15px",position:"fixed",bottom:"110px"}},q={class:"energy"},A={class:"energy-progress-bar"},G={class:"energy-info"},H={class:"energy-value"},J={class:"bottom-menu"},K={class:"menu-items"},Q=E({__name:"BottomMenu",setup(R){const s=B();return(l,a)=>{var r,v,g;const o=V("router-link");return b(),k(I,null,[t("div",O,[t("div",j,[i(o,{class:"menu-item",style:{fontSize:"35px"},to:"/skins",tag:"button"},{default:d(()=>[_(" 🍆 "),t("span",null,m(l.$t("bottomMenu.skins")),1)]),_:1})]),t("div",q,[t("div",A,[t("div",{class:"energy-progress",style:D({width:(((r=M(s).user)==null?void 0:r.energy)??0)/(1e3+(((v=M(s).user)==null?void 0:v.max_energy_level)??0)*500)*100+"%"})},null,4)]),t("div",G,[t("span",H,"⚡"+m((g=M(s).user)==null?void 0:g.energy),1)])])]),t("div",J,[t("div",K,[i(o,{class:"menu-item",to:"/leaderboard",tag:"button"},{default:d(()=>[_(" 🏆 "),t("span",null,m(l.$t("bottomMenu.top")),1)]),_:1}),i(o,{class:"menu-item",to:"/channels",tag:"button"},{default:d(()=>[_(" 💰 "),t("span",null,m(l.$t("bottomMenu.earn")),1)]),_:1}),i(o,{class:"menu-item",to:"/market",tag:"button"},{default:d(()=>[_(" 🛒 "),t("span",null,m(l.$t("bottomMenu.market")),1)]),_:1}),i(o,{class:"menu-item",to:"/slots",tag:"button"},{default:d(()=>[_(" 🎰 "),t("span",null,m(l.$t("slots.bottom")),1)]),_:1}),i(o,{class:"menu-item",to:"/posts",tag:"button"},{default:d(()=>[_(" 🌐 "),t("span",null,m(l.$t("bottomMenu.posts")),1)]),_:1}),i(o,{class:"menu-item",to:"/boosts",tag:"button"},{default:d(()=>[_(" 🚀 "),t("span",null,m(l.$t("bottomMenu.boosts")),1)]),_:1})])])],64)}}}),W=N(Q,[["__scopeId","data-v-13e936d7"]]),ee=["src"],te=["src"],se=E({__name:"Miner",setup(R){const s=B(),{getCurrentSkin:l}=s,a=C(null),o=C(0);let r;const v=()=>{console.log(`Кількість натискань: ${o.value}`),s.sendMineCoins(o.value),o.value=0},g=()=>{o.value+=1,r&&clearTimeout(r),r=setTimeout(v,300)};P(()=>{window.scrollTo(0,0)}),Z(()=>{r&&clearTimeout(r)});const T=C(null),X=()=>"ontouchstart"in window||navigator.maxTouchPoints>0,Y=(n,u,c)=>{var h;const e=document.createElement("div");e.textContent=n.toString(),e.style.position="absolute",e.style.left=`${u}px`,e.style.top=`${c}px`,s.user&&s.user.is_premium?e.style.color="#ff9900":e.style.color="white",e.style.userSelect="none",e.style.pointerEvents="none",e.style.fontSize="40px",e.style.transform="translate(-50%, -50%)",e.classList.add("flying-number"),(h=T.value)==null||h.appendChild(e),setTimeout(()=>{e.remove()},1e3)};function z(n){return window.TouchEvent!==void 0?n instanceof TouchEvent:n.touches!==void 0}const y=n=>{var x;if(!s.user||!a.value||n.type==="mousedown"&&X())return;let u,c;if(z(n)){const p=n;u=p.touches[0].clientX,c=p.touches[0].clientY}else{const p=n;u=p.clientX,c=p.clientY}const e=(x=T.value)==null?void 0:x.getBoundingClientRect(),h=u-((e==null?void 0:e.left)??0),F=c-((e==null?void 0:e.top)??0);if(s.user.energy>s.user.mine_level){s.mineCoins();var w=1;s.user.is_premium&&(w=2),Y(s.user.mine_level*w,h,F),L().impactOccurred("light"),g()}a.value.style.transform="scale(0.98)"},f=()=>{a.value&&(a.value.style.transform="",a.value.style.transform="scale(1)")},$=()=>{let n=S.findIndex(u=>u.id==l);return console.log(`Index is : ${n}`),S[n].skin};return(n,u)=>{var c;return b(),k(I,null,[t("main",null,[i(U),t("div",{class:"coin-container numbers-container",ref_key:"numbersContainerRef",ref:T},[(c=M(s).user)!=null&&c.is_premium?(b(),k("img",{key:0,src:$(),alt:"Premium Coin",class:"coin",ref_key:"coinRef",ref:a,onMousedown:y,onTouchstart:y,onMouseup:f,onMouseleave:f,onTouchend:f},null,40,ee)):(b(),k("img",{key:1,src:$(),class:"coin",alt:"Regular Coin",ref_key:"coinRef",ref:a,onMousedown:y,onTouchstart:y,onMouseup:f,onMouseleave:f,onTouchend:f},null,40,te))],512)]),i(W)],64)}}}),le=N(se,[["__scopeId","data-v-a4115ee5"]]);export{le as default};