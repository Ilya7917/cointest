import{j as se,u as b,k as v,d as oe,o as re,l as ne,r as de,c as s,e as t,t as r,g as n,m as _,F as p,p as k,b as o,_ as ie}from"./index-go_Yl2k0.js";const le=se("leaderboard",{state:()=>({leaderboard:null,lastFetch:0,dailyLeaderboard:null,dailyLastFetch:0,monthlyLeaderboard:null,monthlyLastFetch:0}),actions:{async fetchLeaderboard(){const d=Date.now();if(!(d-this.lastFetch<60*1e3&&this.leaderboard))try{const e=b(),l=await v.get("https://taptaptap.testcoin.uk/leaderboard",{headers:{"x-api-key":e.getAccessToken}});this.leaderboard=l.data,this.lastFetch=d}catch(e){console.error("Error fetching data:",e)}},async fetchDailyLeaderboard(){const d=Date.now();if(!(d-this.dailyLastFetch<60*1e3&&this.dailyLeaderboard))try{const e=b(),l=await v.get("https://taptaptap.testcoin.uk/leaderboard/daily",{headers:{"x-api-key":e.getAccessToken}});this.dailyLeaderboard=l.data,this.dailyLastFetch=d}catch(e){console.error("Error fetching data:",e)}},async fetchMonthlyLeaderboard(){const d=Date.now();if(!(d-this.monthlyLastFetch<60*1e3&&this.monthlyLeaderboard))try{const e=b(),l=await v.get("https://taptaptap.testcoin.uk/leaderboard/monthly",{headers:{"x-api-key":e.getAccessToken}});this.monthlyLeaderboard=l.data,this.monthlyLastFetch=d}catch(e){console.error("Error fetching data:",e)}}}}),ce={class:"tabs"},_e={key:0,class:"leaderboard"},he={class:"leaderboard-title"},ye={class:"leaderboard-list"},ue={key:0,class:"player you"},pe={class:"avatar"},be=["src","alt"],me={key:1,class:"initials"},ve={class:"player-info"},ke={class:"name"},Le={class:"player-score"},ge={class:"rank"},fe={class:"avatar"},Se=["src","alt"],$e={key:1,class:"initials"},Ce={class:"player-info"},Fe={key:0,class:"name"},we={key:1},De={class:"player-score"},Ue={key:1,class:"leaderboard"},Be={class:"leaderboard-title"},Me={class:"leaderboard-list"},Te={key:0,class:"player you"},Ae={class:"avatar"},Ee=["src","alt"],Pe={key:1,class:"initials"},Ie={class:"player-info"},Ne={class:"name"},Ve={class:"player-score"},je={class:"rank"},xe={class:"avatar"},qe=["src","alt"],ze={key:1,class:"initials"},Ge={class:"player-info"},He={key:0,class:"name"},Je={key:1},Ke={class:"player-score"},Oe={key:2,class:"leaderboard"},Qe={class:"leaderboard-title"},Re={class:"leaderboard-list"},We={key:0,class:"player you"},Xe={class:"avatar"},Ye=["src","alt"],Ze={key:1,class:"initials"},et={class:"player-info"},tt={class:"name"},at={class:"player-score"},st={class:"rank"},ot={class:"avatar"},rt=["src","alt"],nt={key:1,class:"initials"},dt={class:"player-info"},it={key:0,class:"name"},lt={key:1},ct={class:"player-score"},_t=oe({__name:"Leaderboard",setup(d){const e=le(),ae=b().user;re(()=>{e.fetchDailyLeaderboard(),e.fetchMonthlyLeaderboard(),e.fetchLeaderboard()});const{t:y}=ne();y("top.yourPlace",{place:123});const u=de("Day"),m=i=>{u.value=i};return(i,c)=>{var L,g,f,S,$,C,F,w,D,U,B,M,T,A,E,P,I,N,V,j,x,q,z,G,H,J,K,O,Q,R,W,X,Y,Z,ee,te;return o(),s(p,null,[t("div",ce,[t("button",{onClick:c[0]||(c[0]=a=>m("Day")),class:"tab"},r(i.$t("top.day")),1),t("button",{onClick:c[1]||(c[1]=a=>m("Month")),class:"tab"},r(i.$t("top.month")),1),t("button",{onClick:c[2]||(c[2]=a=>m("Balance")),class:"tab"},r(i.$t("top.balance")),1)]),u.value==="Day"?(o(),s("div",_e,[t("div",he," 🏆 "+r(i.$t("top.topToday")),1),t("div",ye,[((L=n(e).dailyLeaderboard)==null?void 0:L.me)!=null?(o(),s("div",ue,[t("span",pe,[(g=n(e).dailyLeaderboard)!=null&&g.me.avatar_url?(o(),s("img",{key:0,src:(f=n(e).dailyLeaderboard)==null?void 0:f.me.avatar_url,alt:(S=n(e).dailyLeaderboard)==null?void 0:S.me.identity},null,8,be)):(o(),s("div",me,r((F=(C=($=n(e).dailyLeaderboard)==null?void 0:$.me)==null?void 0:C.identity)==null?void 0:F.substring(0,2).toUpperCase()),1))]),t("div",ve,[t("span",ke,r(n(y)("top.yourPlace",{place:(D=(w=n(e).dailyLeaderboard)==null?void 0:w.me)==null?void 0:D.position})),1),t("span",Le,"🍆 +"+r((B=(U=n(e).dailyLeaderboard)==null?void 0:U.me)==null?void 0:B.score.toLocaleString()),1)])])):_("",!0),(o(!0),s(p,null,k((M=n(e).dailyLeaderboard)==null?void 0:M.players,(a,h)=>(o(),s("div",{key:a.id,class:"player"},[t("span",ge,r(h+1)+".",1),t("span",fe,[a.avatar_url?(o(),s("img",{key:0,src:a.avatar_url,alt:a.identity},null,8,Se)):(o(),s("div",$e,r(a.identity.substring(0,2).toUpperCase()),1))]),t("div",Ce,[a.is_premium?(o(),s("span",Fe,r(a.identity),1)):(o(),s("span",we,r(a.identity),1)),t("span",De,"🍆 +"+r(a.score.toLocaleString()),1)])]))),128))])])):_("",!0),u.value==="Month"?(o(),s("div",Ue,[t("div",Be," 🏆 "+r(i.$t("top.topMonth")),1),t("div",Me,[((T=n(e).monthlyLeaderboard)==null?void 0:T.me)!=null?(o(),s("div",Te,[t("span",Ae,[(A=n(e).monthlyLeaderboard)!=null&&A.me.avatar_url?(o(),s("img",{key:0,src:(E=n(e).monthlyLeaderboard)==null?void 0:E.me.avatar_url,alt:(P=n(e).monthlyLeaderboard)==null?void 0:P.me.identity},null,8,Ee)):(o(),s("div",Pe,r((V=(N=(I=n(e).monthlyLeaderboard)==null?void 0:I.me)==null?void 0:N.identity)==null?void 0:V.substring(0,2).toUpperCase()),1))]),t("div",Ie,[t("span",Ne,r(n(y)("top.yourPlace",{place:(x=(j=n(e).monthlyLeaderboard)==null?void 0:j.me)==null?void 0:x.position})),1),t("span",Ve,"🍆 +"+r((z=(q=n(e).monthlyLeaderboard)==null?void 0:q.me)==null?void 0:z.score.toLocaleString()),1)])])):_("",!0),(o(!0),s(p,null,k((G=n(e).monthlyLeaderboard)==null?void 0:G.players,(a,h)=>(o(),s("div",{key:a.id,class:"player"},[t("span",je,r(h+1)+".",1),t("span",xe,[a.avatar_url?(o(),s("img",{key:0,src:a.avatar_url,alt:a.identity},null,8,qe)):(o(),s("div",ze,r(a.identity.substring(0,2).toUpperCase()),1))]),t("div",Ge,[a.is_premium?(o(),s("span",He,r(a.identity),1)):(o(),s("span",Je,r(a.identity),1)),t("span",Ke,"🍆 +"+r(a.score.toLocaleString()),1)])]))),128))])])):_("",!0),u.value==="Balance"?(o(),s("div",Oe,[t("div",Qe," 🏆 "+r(i.$t("top.topBalance")),1),t("div",Re,[((H=n(e).monthlyLeaderboard)==null?void 0:H.me)!=null?(o(),s("div",We,[t("span",Xe,[(K=(J=n(e).leaderboard)==null?void 0:J.me)!=null&&K.avatar_url?(o(),s("img",{key:0,src:(O=n(e).leaderboard)==null?void 0:O.me.avatar_url,alt:(Q=n(e).leaderboard)==null?void 0:Q.me.identity},null,8,Ye)):(o(),s("div",Ze,r((X=(W=(R=n(e).leaderboard)==null?void 0:R.me)==null?void 0:W.identity)==null?void 0:X.substring(0,2).toUpperCase()),1))]),t("div",et,[t("span",tt,r(n(y)("top.yourPlace",{place:(Z=(Y=n(e).leaderboard)==null?void 0:Y.me)==null?void 0:Z.position})),1),t("span",at,"🍆 "+r((ee=n(ae))==null?void 0:ee.balance.toLocaleString()),1)])])):_("",!0),(o(!0),s(p,null,k((te=n(e).leaderboard)==null?void 0:te.players,(a,h)=>(o(),s("div",{key:a.id,class:"player"},[t("span",st,r(h+1)+".",1),t("span",ot,[a.avatar_url?(o(),s("img",{key:0,src:a.avatar_url,alt:a.identity},null,8,rt)):(o(),s("div",nt,r(a.identity.substring(0,2).toUpperCase()),1))]),t("div",dt,[a.is_premium?(o(),s("span",it,r(a.identity),1)):(o(),s("span",lt,r(a.identity),1)),t("span",ct,"🍆 "+r(a.score.toLocaleString()),1)])]))),128))])])):_("",!0)],64)}}}),yt=ie(_t,[["__scopeId","data-v-fd4a1ef7"]]);export{yt as default};
