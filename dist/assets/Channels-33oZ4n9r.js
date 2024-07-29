import{u as m,j as G,k,D as Y,d as K,l as O,E as Z,g as x,h as J,q as Q,c as u,a as s,t as h,F as M,p as R,b as T,m as y,x as X,v as S,G as ee,H as I,A as U,o as d,y as te,z as se,_ as ne}from"./index-zaPseq-d.js";import{A as ae}from"./addIcon-B-w5o2bP.js";const le="/assets/sprite-BbW-irAG.svg",oe=m(),{setUser:ie}=oe,re=G("channels",{state:()=>({channels:null,whales:null,myChannels:null}),getters:{getChannels:n=>n.myChannels},actions:{async fetchChannels(){const n=m(),o=await k.get("https://taptaptap.testcoin.uk/channels",{headers:{"x-api-key":n.getAccessToken}});this.channels=o.data},async fetchWhales(){const n=m(),o=await k.get("https://taptaptap.testcoin.uk/whales",{headers:{"x-api-key":n.getAccessToken}});this.whales=o.data,console.log(o.data)},async startChannel(n){const o=m(),e=await k.post("https://taptaptap.testcoin.uk/initUserChannel",{id:n.id},{headers:{"x-api-key":o.getAccessToken}});return this.myChannels=e.data.channels,!0},async createWhale(n,o,e){const w=m(),r=await k.post("https://taptaptap.testcoin.uk/createWhale",{title:n,link:o,rewarded:e},{headers:{"x-api-key":w.getAccessToken}});return console.log(r),!!r.data.sucess},async getMyChannels(){const n=m(),o=await k.get("https://taptaptap.testcoin.uk/getMyChannels",{headers:{"x-api-key":n.getAccessToken}});this.myChannels=Y(o.data.channels)},async rewardChannel(n){const o=m(),e=await k.post("https://taptaptap.testcoin.uk/getRewardFromChannel",{id:n.id},{headers:{"x-api-key":o.getAccessToken}});return console.log(e.data),ie(e.data.user),this.myChannels=e.data.channels,!0}}});function B(n){const o=Object.prototype.toString.call(n);return n instanceof Date||typeof n=="object"&&o==="[object Date]"?new n.constructor(+n):typeof n=="number"||o==="[object Number]"||typeof n=="string"||o==="[object String]"?new Date(n):new Date(NaN)}const ce=36e5;function ue(n){return o=>{const w=(n?Math[n]:Math.trunc)(o);return w===0?0:w}}function de(n,o){return+B(n)-+B(o)}function he(n,o,e){const w=de(n,o)/ce;return ue(e==null?void 0:e.roundingMethod)(w)}const b=n=>(te("data-v-d6a6cb04"),n=n(),se(),n),V=le+"#chevron-right",pe={class:"telegram-channels"},ve={class:"earn-title"},fe={style:{display:"flex",flexDirection:"column",justifyContent:"space-between",height:"100vh"}},_e={class:"channels-title"},we={key:0,class:"channels-list"},ye=["onClick"],me={class:"channel-info"},ge={class:"name"},Ce={class:"channel-action"},ke={key:0,class:"reward"},be=b(()=>s("svg",{class:"arrow"},[s("use",{"xlink:href":V})],-1)),xe={style:{display:"flex",justifyContent:"space-between"}},Se={class:"channels-title"},Ae=["src"],De={key:0,class:"channels-list",style:{height:"50vh",overflowY:"scroll"}},Te=["onClick"],Ie={class:"channel-info"},Le={class:"name"},$e={class:"channel-action"},je={key:0,class:"reward"},Me=b(()=>s("svg",{class:"arrow"},[s("use",{"xlink:href":V})],-1)),Re={class:"popup-content"},Ue={class:"popup-header"},Be=b(()=>s("svg",{class:"close-icon",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 30 30",width:"16px",height:"16px"},[s("path",{d:"M 7 4 C 6.744125 4 6.4879687 4.0974687 6.2929688 4.2929688 L 4.2929688 6.2929688 C 3.9019687 6.6839688 3.9019687 7.3170313 4.2929688 7.7070312 L 11.585938 15 L 4.2929688 22.292969 C 3.9019687 22.683969 3.9019687 23.317031 4.2929688 23.707031 L 6.2929688 25.707031 C 6.6839688 26.098031 7.3170313 26.098031 7.7070312 25.707031 L 15 18.414062 L 22.292969 25.707031 C 22.682969 26.098031 23.317031 26.098031 23.707031 25.707031 L 25.707031 23.707031 C 26.098031 23.316031 26.098031 22.682969 25.707031 22.292969 L 18.414062 15 L 25.707031 7.7070312 C 26.098031 7.3170312 26.098031 6.6829688 25.707031 6.2929688 L 23.707031 4.2929688 C 23.316031 3.9019687 22.682969 3.9019687 22.292969 4.2929688 L 15 11.585938 L 7.7070312 4.2929688 C 7.5115312 4.0974687 7.255875 4 7 4 z"})],-1)),Ve=[Be],We={key:0,class:"popup-body"},Ne={style:{display:"flex",flexDirection:"column",justifyContent:"center",marginTop:"30px"}},Ee=b(()=>s("label",{for:"fname"},"Название канала",-1)),Fe={style:{display:"flex",flexDirection:"column",justifyContent:"center",marginTop:"30px"}},ze=b(()=>s("label",{for:"fname"},"Ссылка на канал",-1)),He={style:{display:"flex",flexDirection:"column",justifyContent:"center",marginTop:"30px"}},Pe=b(()=>s("label",{for:"fname"},"Цена за переход",-1)),qe=K({__name:"Channels",setup(n){const{t:o}=O(),e=re(),w=Z(),r=x(!1),A=x(!1),l=x({id:0,title:"",reward:0,invite_link:"",status:"",createdAt:""}),L=()=>{e.fetchChannels().then(()=>{e.getMyChannels().then(()=>{var i,p,v,f;((i=e.myChannels)==null?void 0:i.length)!=null&&((p=e.myChannels)==null?void 0:p.length)>0&&((v=e.myChannels)==null||v.map(t=>{var C,j;if(console.log(t),t.Status=="init"){let _=(C=e.channels)==null?void 0:C.findIndex(D=>D.id==t.ChannelID);e.channels&&_!=null&&_!=-1&&(e.channels[_].is_available=!0,console.log(e.channels[_].is_available))}if(t.Status=="rewarded"){let _=(j=e.channels)==null?void 0:j.findIndex(D=>D.id==t.ChannelID);e.channels&&_!=null&&_!=-1&&(e.channels[_].is_available=!1,console.log(e.channels[_].is_available))}}));let a=[];(f=e.channels)==null||f.map(t=>{t.is_whale&&a.push(t)}),e.whales=a.length>0?a:[],console.log(e.whales),A.value=!0})})};J(()=>{L()});const $=(a,i)=>{var p,v,f;if(((p=e.myChannels)==null?void 0:p.length)!=null&&((v=e.myChannels)==null?void 0:v.length)>0){let t=e.myChannels.findIndex(C=>C.ChannelID==a.id);console.log(t),t!=-1?(l.value.status=e.myChannels[t].Status,l.value.createdAt=((f=e.myChannels[t].CreatedAt)==null?void 0:f.toLocaleString())||""):(l.value.status="",l.value.createdAt="")}console.log(l),l.value.id=a.id,l.value.reward=a.reward,l.value.title=a.title,l.value.invite_link=a.invite_link,r.value=!1,g.value=i,setTimeout(N,100),console.log(r)},W=()=>{const a={id:l.value.id,title:l.value.title,invite_link:l.value.invite_link,reward:0,is_available:!0,is_whale:!1};e.startChannel(a).then(i=>{if(i){r.value=!1,e.getMyChannels();try{w.openTelegramLink(l.value.invite_link)}catch{console.log("Err")}}})},N=()=>{r.value=!0};function E(){g.value!="create"&&(r.value=!1)}const F=()=>{console.log("check time: "+l.value.createdAt);const a=new Date(l.value.createdAt),p=he(new Date,a);if(console.log("check time: "+l.value.createdAt),console.log("Hours since request: "+p),p>=0){const v={id:l.value.id,title:l.value.title,invite_link:l.value.invite_link,reward:0,is_available:!0,is_whale:!1};e.rewardChannel(v).then(()=>{if(console.log("request finished"),r.value=!1,e.channels){var f=e.channels.findIndex(t=>t.id==l.value.id);e.channels[f].is_available=!1}l.value.status="",l.value.createdAt=""})}else U().showAlert(o("earn.waitRewardText"))},g=x("visible"),z=()=>{console.log(11111111),g.value="create",r.value=!0},c=x({title:"",link:"",rewared:0});function H(a){return/^(https?:\/\/)?(www\.)?t\.me\/[a-zA-Z0-9_]{5,}$/.test(a)}async function P(){if(!(c.value.title===""||c.value.link===""||c.value.rewared===0)){if(!H(c.value.link)){console.error("Invalid Telegram URL format"),U().showAlert(o("Invalid Telegram URL format"));return}e.createWhale(c.value.title,c.value.link,c.value.rewared).then(a=>{a&&(L(),r.value=!1)})}}const q=a=>{a.target.blur()};return(a,i)=>{var v,f;const p=Q("click-outside");return d(),u("div",pe,[s("div",ve," 🤑 "+h(a.$t("earn.name")),1),s("div",fe,[s("div",null,[s("div",_e," 📢 "+h(a.$t("earn.channels")),1),A.value?(d(),u("div",we,[(d(!0),u(M,null,R((v=T(e).channels)==null?void 0:v.filter(t=>t.is_available&&!t.is_whale),t=>(d(),u("div",{key:t.id,onClick:C=>$(t,"visible"),class:"channel"},[s("div",me,[s("span",ge,h(t.title),1)]),s("div",Ce,[t.is_available?(d(),u("span",ke,"🍆 "+h(t.reward.toLocaleString()),1)):y("",!0),be])],8,ye))),128))])):y("",!0)]),s("div",null,[s("div",xe,[s("div",Se," 🐳 "+h(a.$t("whales.channels")),1),s("div",{style:{display:"flex",alignItems:"center"},onClick:z},[s("img",{src:T(ae),alt:"Your Icon",style:{height:"45px",marginRight:"7px"}},null,8,Ae)])]),A.value?(d(),u("div",De,[(d(!0),u(M,null,R((f=T(e).whales)==null?void 0:f.filter(t=>t.is_available),t=>(d(),u("div",{key:t.id,onClick:C=>$(t,"visible"),class:"channel"},[s("div",Ie,[s("span",Le,h(t.title),1)]),s("div",$e,[t.is_available?(d(),u("span",je,"🍆 "+h(t.reward.toLocaleString()),1)):y("",!0),Me])],8,Te))),128))])):y("",!0)])]),r.value?(d(),u("div",{key:0,class:X(["boost-purchase-popup",{visible:r.value}])},[S((d(),u("div",Re,[s("div",Ue,[s("h2",null,h(g.value=="create"?"Create whale":"Earn coins"),1),s("button",{class:"close-button",onClick:i[0]||(i[0]=t=>{r.value=!1})},Ve)]),g.value=="visible"?(d(),u("div",We,[s("p",null,h(l.value.status=="init"?a.$t("earn.waitRewardText"):a.$t("earn.selectedChannel")),1),s("p",null,"🍆"+h(l.value.reward),1),s("button",{class:"boost-purchase-button",onClick:i[1]||(i[1]=t=>l.value.status=="init"?F():W())},h(l.value.status=="init"?a.$t("earn.getRewardButton"):a.$t("earn.startRewardButton")),1)])):y("",!0),g.value=="create"?(d(),u("div",{key:1,class:"popup-body",onKeydown:ee(q,["enter"]),style:{overflowY:"scroll"}},[s("div",Ne,[Ee,S(s("input",{type:"text",id:"fname",style:{width:"100%"},name:"fname","onUpdate:modelValue":i[2]||(i[2]=t=>c.value.title=t)},null,512),[[I,c.value.title]])]),s("div",Fe,[ze,S(s("input",{type:"text",id:"fname",style:{width:"100%"},name:"fname","onUpdate:modelValue":i[3]||(i[3]=t=>c.value.link=t)},null,512),[[I,c.value.link]])]),s("div",He,[Pe,S(s("input",{type:"number",id:"fname",style:{width:"100%"},name:"fname","onUpdate:modelValue":i[4]||(i[4]=t=>c.value.rewared=t)},null,512),[[I,c.value.rewared]])]),s("div",{style:{display:"flex",flexDirection:"column",justifyContent:"center",marginTop:"30px"}},[s("button",{class:"mypost-button",style:{marginTop:"30px",width:"100%"},onClick:P},"Создать")])],32)):y("",!0)])),[[p,E]])],2)):y("",!0)])}}}),Ke=ne(qe,[["__scopeId","data-v-d6a6cb04"]]);export{Ke as default};
