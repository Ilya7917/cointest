import{u as C,j as $,k as w,D as M,d as T,l as B,E as R,g as k,h as j,q as N,c as p,a as o,t as v,F as P,p as V,b as q,m as y,x as z,v as E,A as F,o as _,y as H,z as U,_ as G}from"./index-6Og09Hc8.js";const O="/assets/sprite-BbW-irAG.svg",W=C(),{setUser:J}=W,K=$("channels",{state:()=>({channels:null,myChannels:null}),getters:{getChannels:t=>t.myChannels},actions:{async fetchChannels(){const t=C(),s=await w.get("https://taptaptap.testcoin.uk/channels",{headers:{"x-api-key":t.getAccessToken}});this.channels=s.data,console.log(s.data)},async startChannel(t){const s=C(),e=await w.post("https://taptaptap.testcoin.uk/initUserChannel",{id:t.id},{headers:{"x-api-key":s.getAccessToken}});return this.myChannels=e.data.channels,!0},async getMyChannels(){const t=C(),s=await w.get("https://taptaptap.testcoin.uk/getMyChannels",{headers:{"x-api-key":t.getAccessToken}});this.myChannels=M(s.data.channels)},async rewardChannel(t){const s=C(),e=await w.post("https://taptaptap.testcoin.uk/getRewardFromChannel",{id:t.id},{headers:{"x-api-key":s.getAccessToken}});return console.log(e.data),J(e.data.user),this.myChannels=e.data.channels,!0}}});function x(t){const s=Object.prototype.toString.call(t);return t instanceof Date||typeof t=="object"&&s==="[object Date]"?new t.constructor(+t):typeof t=="number"||s==="[object Number]"||typeof t=="string"||s==="[object String]"?new Date(t):new Date(NaN)}const Q=36e5;function X(t){return s=>{const f=(t?Math[t]:Math.trunc)(s);return f===0?0:f}}function Y(t,s){return+x(t)-+x(s)}function Z(t,s,e){const f=Y(t,s)/Q;return X(e==null?void 0:e.roundingMethod)(f)}const m=t=>(H("data-v-8a8f7cfc"),t=t(),U(),t),ee=O+"#chevron-right",te={class:"telegram-channels"},ne={class:"earn-title"},se={class:"channels-title"},ae={key:0,class:"channels-list"},le=["onClick"],oe={class:"channel-info"},ie={class:"name"},ce={class:"channel-action"},re={key:0,class:"reward"},de=m(()=>o("svg",{class:"arrow"},[o("use",{"xlink:href":ee})],-1)),ue={class:"popup-content"},he=m(()=>o("h2",null,"Earn coins",-1)),pe=m(()=>o("svg",{class:"close-icon",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 30 30",width:"16px",height:"16px"},[o("path",{d:"M 7 4 C 6.744125 4 6.4879687 4.0974687 6.2929688 4.2929688 L 4.2929688 6.2929688 C 3.9019687 6.6839688 3.9019687 7.3170313 4.2929688 7.7070312 L 11.585938 15 L 4.2929688 22.292969 C 3.9019687 22.683969 3.9019687 23.317031 4.2929688 23.707031 L 6.2929688 25.707031 C 6.6839688 26.098031 7.3170313 26.098031 7.7070312 25.707031 L 15 18.414062 L 22.292969 25.707031 C 22.682969 26.098031 23.317031 26.098031 23.707031 25.707031 L 25.707031 23.707031 C 26.098031 23.316031 26.098031 22.682969 25.707031 22.292969 L 18.414062 15 L 25.707031 7.7070312 C 26.098031 7.3170312 26.098031 6.6829688 25.707031 6.2929688 L 23.707031 4.2929688 C 23.316031 3.9019687 22.682969 3.9019687 22.292969 4.2929688 L 15 11.585938 L 7.7070312 4.2929688 C 7.5115312 4.0974687 7.255875 4 7 4 z"})],-1)),ve=[pe],_e={class:"popup-body"},fe=T({__name:"Channels",setup(t){const{t:s}=B(),e=K(),f=R(),u=k(!1),b=k(!1),n=k({id:0,title:"",reward:0,invite_link:"",status:"",createdAt:""});j(()=>{e.fetchChannels().then(()=>{e.getMyChannels().then(()=>{var a,c,r;((a=e.myChannels)==null?void 0:a.length)!=null&&((c=e.myChannels)==null?void 0:c.length)>0&&((r=e.myChannels)==null||r.map(i=>{var l,h;if(console.log(i),i.Status=="init"){let d=(l=e.channels)==null?void 0:l.findIndex(g=>g.id==i.ChannelID);e.channels&&d!=null&&d!=-1&&(e.channels[d].is_available=!0,console.log(e.channels[d].is_available))}if(i.Status=="rewarded"){let d=(h=e.channels)==null?void 0:h.findIndex(g=>g.id==i.ChannelID);e.channels&&d!=null&&d!=-1&&(e.channels[d].is_available=!1,console.log(e.channels[d].is_available))}})),b.value=!0})})});const L=a=>{var c,r,i;if(((c=e.myChannels)==null?void 0:c.length)!=null&&((r=e.myChannels)==null?void 0:r.length)>0){let l=e.myChannels.findIndex(h=>h.ChannelID==a.id);l!=-1&&(n.value.status=e.myChannels[l].Status,n.value.createdAt=((i=e.myChannels[l].CreatedAt)==null?void 0:i.toLocaleString())||"")}n.value.id=a.id,n.value.reward=a.reward,n.value.title=a.title,n.value.invite_link=a.invite_link,u.value=!1,setTimeout(I,100),console.log(u)},D=()=>{const a={id:n.value.id,title:n.value.title,invite_link:n.value.invite_link,reward:0,is_available:!0};e.startChannel(a).then(c=>{c&&(u.value=!1,f.openTelegramLink(n.value.invite_link),e.getMyChannels())})},I=()=>{u.value=!0};function S(){u.value=!1}const A=()=>{console.log("check time: "+n.value.createdAt);const a=new Date(n.value.createdAt),r=Z(new Date,a);if(console.log("check time: "+n.value.createdAt),console.log("Hours since request: "+r),r>=1){const i={id:n.value.id,title:n.value.title,invite_link:n.value.invite_link,reward:0,is_available:!0};e.rewardChannel(i).then(()=>{if(console.log("request finished"),u.value=!1,e.channels){var l=e.channels.findIndex(h=>h.id==n.value.id);e.channels[l].is_available=!1}})}else F().showAlert(s("earn.waitRewardText"))};return(a,c)=>{var i;const r=N("click-outside");return _(),p("div",te,[o("div",ne," 🤑 "+v(a.$t("earn.name")),1),o("div",se," 📢 "+v(a.$t("earn.channels")),1),b.value?(_(),p("div",ae,[(_(!0),p(P,null,V((i=q(e).channels)==null?void 0:i.filter(l=>l.is_available),l=>(_(),p("div",{key:l.id,onClick:h=>L(l),class:"channel"},[o("div",oe,[o("span",ie,v(l.title),1)]),o("div",ce,[l.is_available?(_(),p("span",re,"🍆 "+v(l.reward.toLocaleString()),1)):y("",!0),de])],8,le))),128))])):y("",!0),u.value?(_(),p("div",{key:1,class:z(["boost-purchase-popup",{visible:u.value}])},[E((_(),p("div",ue,[o("div",{class:"popup-header"},[he,o("button",{class:"close-button",onClick:S},ve)]),o("div",_e,[o("p",null,v(n.value.status=="init"?a.$t("earn.waitRewardText"):a.$t("earn.selectedChannel")),1),o("p",null,"🍆"+v(n.value.reward),1),o("button",{class:"boost-purchase-button",onClick:c[0]||(c[0]=l=>n.value.status=="init"?A():D())},v(n.value.status=="init"?a.$t("earn.getRewardButton"):a.$t("earn.startRewardButton")),1)])])),[[r,S]])],2)):y("",!0)])}}}),we=G(fe,[["__scopeId","data-v-8a8f7cfc"]]);export{we as default};
