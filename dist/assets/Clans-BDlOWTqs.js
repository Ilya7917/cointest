import{u as ie,j as me,k as U,d as q,b as n,c as s,e as t,x as $,m as u,f as P,A as H,B as E,_ as W,p as z,t as g,F as A,r as h,o as ce,D as fe,n as se,l as ge,G as Ce,g as N,y as ae,H as le,z as xe}from"./index-DYJA-vg8.js";import{u as be}from"./marketstore-CMwnAxfo.js";import{B as ke}from"./back-icon-BbM4sjQV.js";import{_ as _e}from"./sprite-D2SurNu7.js";const w=ie(),we=me("clan",{state:()=>({clans:null,clanMembers:null}),getters:{},actions:{async getClans(){const e=await U.get("https://taptaptap.testcoin.uk/getAllClans",{headers:{"x-api-key":w.getAccessToken}});console.log(e),this.clans=e.data},async createClan(e){if(!w.getAccessToken)return;const a=new FormData;e.image!=null&&a.append("image",e.image),a.append("description",e.description),a.append("clanname",e.name);const c=await(await fetch("https://taptaptap.testcoin.uk/createClan",{method:"POST",body:a,headers:{"x-api-key":w.getAccessToken}})).json();return console.log(c),!!c.sucess},async createClanMember(e){const a=await U.post("https://taptaptap.testcoin.uk/createClanMemberRequest",{clan_id:e},{headers:{"x-api-key":w.getAccessToken}});return console.log(a),!!a.data.sucess},async getClanMembers(e){const a=await U.get("https://taptaptap.testcoin.uk/getClanMembers",{headers:{"x-api-key":w.getAccessToken,id:e}});return console.log(a),this.clanMembers=a.data,a.data},async acceptUserToClan(e,a){console.log(a);const i=await U.post("https://taptaptap.testcoin.uk/acceptUserToClan",{clan_id:e,user_id:a},{headers:{"x-api-key":w.getAccessToken}});return console.log(i),!!i.data.sucess},async declineUserToClan(e,a){console.log(a);const i=await U.post("https://taptaptap.testcoin.uk/declineUserToClan",{clan_id:e,user_id:a},{headers:{"x-api-key":w.getAccessToken}});return console.log(i),!!i.data.sucess},async removeUserFrom(e,a){console.log(a);const i=await U.post("https://taptaptap.testcoin.uk/removeUserFromClan",{clan_id:e,user_id:a},{headers:{"x-api-key":w.getAccessToken}});return console.log(i),!!i.data.sucess},async changeUserRole(e,a,i){console.log(a);const c=await U.post("https://taptaptap.testcoin.uk/changeMemberRole",{clan_id:e,user_id:a,role:i},{headers:{"x-api-key":w.getAccessToken}});return console.log(c),!!c.data.sucess},async leaveClan(e){const a=await U.post("https://taptaptap.testcoin.uk/leaveClan",{clan_id:e},{headers:{"x-api-key":w.getAccessToken}});return console.log(a),!!a.data.sucess}}}),G=e=>(H("data-v-8d979741"),e=e(),E(),e),$e={class:"navMenu"},Ie={class:"nav-btn__wrapper"},Se=G(()=>t("span",{style:{fontSize:"20px"}},"🏰",-1)),Ue=[Se],De=G(()=>t("span",{style:{fontSize:"20px"}},"✍🏼",-1)),je=[De],Te=G(()=>t("span",{style:{fontSize:"20px"}},"🕌",-1)),Le=[Te],Me=["src"],Pe={class:"nav-btn__text"},Ae=q({__name:"NavMenu",props:{pageState:{},hasClan:{type:Boolean}},emits:["change-page-state"],setup(e,{emit:a}){const i=e,c=a,C=y=>{y!==i.pageState&&c("change-page-state",y)};return(y,o)=>(n(),s("div",$e,[t("div",Ie,[y.pageState!="claninfo"?(n(),s("button",{key:0,class:$(["post-component__nav-btn feed",{active:i.pageState==="clans"}]),style:{display:"flex",justifyContent:"center",alignItems:"center"},onClick:o[0]||(o[0]=m=>C("clans"))},Ue,2)):u("",!0),!y.hasClan&&y.pageState!="claninfo"?(n(),s("button",{key:1,class:$(["post-component__nav-btn compose",{active:i.pageState==="create"}]),style:{display:"flex",justifyContent:"center",alignItems:"center"},onClick:o[1]||(o[1]=m=>C("create"))},je,2)):u("",!0),y.pageState!="claninfo"?(n(),s("button",{key:2,class:$(["post-component__nav-btn mywhales",{active:i.pageState==="myClan"}]),style:{display:"flex",justifyContent:"center",alignItems:"center"},onClick:o[2]||(o[2]=m=>C("myClan"))},Le,2)):u("",!0),y.pageState=="claninfo"?(n(),s("button",{key:3,class:"post-component__nav-btn profile",onClick:o[3]||(o[3]=m=>C("clans"))},[t("img",{src:P(ke)},null,8,Me)])):u("",!0)]),t("div",Pe,[y.pageState!="claninfo"?(n(),s("span",{key:0,class:$(["nav-btn__text-item",{active:i.pageState==="whales"}])},"Clans",2)):u("",!0),!y.hasClan&&y.pageState!="claninfo"?(n(),s("span",{key:1,class:$(["nav-btn__text-item",{active:i.pageState==="create"}])},"Create",2)):u("",!0),y.pageState!="claninfo"?(n(),s("span",{key:2,class:$(["nav-btn__text-item",{active:i.pageState==="mywhales"}])},"My Clan",2)):u("",!0),y.pageState=="claninfo"?(n(),s("span",{key:3,class:$(["nav-btn__text-item",{active:i.pageState==="mywhales"}])},"Back",2)):u("",!0)])]))}}),Oe=W(Ae,[["__scopeId","data-v-8d979741"]]),X=e=>(H("data-v-668abb9a"),e=e(),E(),e),Re=_e+"#chevron-right",Ne={key:0,style:{height:"85vh",display:"flex",alignItems:"center",justifyContent:"center"}},ze=X(()=>t("span",{style:{fontSize:"25px"}},"Здесь пока ещё нету кланов",-1)),Be=[ze],Fe=["onClick"],Ve=["src"],qe={key:1,style:{height:"30px",width:"30px",borderRadius:"100px",background:"gray",justifyContent:"center",alignItems:"center",display:"flex"}},He={class:"name",style:{marginLeft:"10px",fontSize:"18px"}},Ee={key:2,style:{marginLeft:"10px"}},We=X(()=>t("span",null,"👑",-1)),Ge=[We],Xe={style:{display:"flex",flexDirection:"column"}},Je={style:{fontSize:"17px"}},Ke=X(()=>t("div",null,[t("svg",{class:"arrow"},[t("use",{"xlink:href":Re})])],-1)),Qe={__name:"ClanItem",props:{clans:{type:Array,required:!0},myUserId:{type:Number,required:!0},changePageState:{type:Function,required:!0}},setup(e){return(a,i)=>e.clans.length==0?(n(),s("div",Ne,Be)):(n(!0),s(A,{key:1},z(e.clans,c=>(n(),s("div",{id:"MyOrders",key:c.ID,onClick:i[0]||(i[0]=()=>{}),class:"channel"},[t("div",{onClick:C=>e.changePageState("claninfo",c),class:"channel-info",style:{display:"flex",flexDirection:"row",justifyContent:"center",alignItems:"center"}},[c.ClanPicture!=null&&c.ClanPicture!=""?(n(),s("img",{key:0,src:c.ClanPicture,style:{height:"30px",borderRadius:"100px"}},null,8,Ve)):(n(),s("div",qe,"🏰")),t("span",He,g(c.ClanName),1),c.OwnerID==e.myUserId?(n(),s("div",Ee,Ge)):u("",!0)],8,Fe),t("div",null,[t("div",Xe,[t("span",Je,g(c.MemberCount)+"👤",1)])]),Ke]))),128))}},Ye=W(Qe,[["__scopeId","data-v-668abb9a"]]),Ze={style:{display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center",marginTop:"25px",gap:"15px"}},et=["src"],tt={key:1,style:{height:"30px",width:"30px",borderRadius:"100px",background:"gray",justifyContent:"center",alignItems:"center",display:"flex"}},nt={style:{fontSize:"25px",fontWeight:"bold"}},st={style:{fontSize:"15px",fontWeight:"bold"}},at={key:2,style:{textAlign:"center",width:"70%"}},lt={key:1},ot={key:3,style:{textAlign:"center",width:"70%"}},it={key:0,style:{display:"flex",justifyContent:"space-between",margin:"15px"}},ct={key:1},rt={class:"channel-info",style:{display:"flex",flexDirection:"row",justifyContent:"center",alignItems:"center"}},ut=["src"],dt={key:1,style:{height:"30px",width:"30px",borderRadius:"100px",background:"gray",justifyContent:"center",alignItems:"center",display:"flex"}},pt={class:"name",style:{marginLeft:"10px",fontSize:"18px"}},vt={key:2,style:{marginLeft:"10px"}},yt=t("span",null,"👑",-1),ht=[yt],mt=t("div",{style:{marginRight:"15px"}},[t("span",null," основатель ")],-1),ft=["onClick"],gt={class:"channel-info",style:{display:"flex",flexDirection:"row",justifyContent:"center",alignItems:"center"}},Ct=["src"],xt={key:1,style:{height:"30px",width:"30px",borderRadius:"100px",background:"gray",justifyContent:"center",alignItems:"center",display:"flex"}},bt={class:"name",style:{marginLeft:"10px",fontSize:"18px"}},kt={style:{marginRight:"15px"}},_t={key:2},wt=["onClick"],$t={class:"channel-info",style:{display:"flex",flexDirection:"row",justifyContent:"center",alignItems:"center"}},It=["src"],St={key:1,style:{height:"30px",width:"30px",borderRadius:"100px",background:"gray",justifyContent:"center",alignItems:"center",display:"flex"}},Ut={class:"name",style:{marginLeft:"10px",fontSize:"18px"}},oe=q({__name:"ClanData",props:{clan:{type:Object,required:!0},myUserId:{type:Number,required:!0},clansStore:{type:Object,required:!0},onOpenUserData:{type:Function,reuired:!0},needUpdate:{type:Boolean,required:!0},myClan:{type:Object,reuired:!0},leaveClan:{type:Function,reuired:!0}},setup(e){const a=h("members"),i=h(!1),c=h(!1),C=h([]),y=x=>{m.clansStore.createClanMember(x).then(p=>{p&&o()})},o=()=>{m.clansStore.getClanMembers(m.clan.ID).then(x=>{if(C.value=x,x.length>0)if(x.findIndex(p=>p.UserID==m.myUserId)!=-1){let p=x.findIndex(I=>I.UserID==m.myUserId);x[p].Status=="member"?(c.value=!1,i.value=!1):(i.value=!0,c.value=!1)}else i.value=!0,c.value=!0;else i.value=!0,c.value=!0})};ce(()=>{o()});const m=e;return fe(()=>m.needUpdate,(x,p)=>{o()}),(x,p)=>{var I;return n(),s(A,null,[t("div",Ze,[e.clan.ClanPicture!=null&&e.clan.ClanPicture!=""?(n(),s("img",{key:0,src:e.clan.ClanPicture,style:{height:"100px",borderRadius:"100%"}},null,8,et)):(n(),s("div",tt,"🏰")),t("span",nt,g(e.clan.ClanName),1),t("span",st,g(e.clan.Description),1),t("span",null,"Участников: "+g(e.clan.MemberCount)+"👤",1),i.value&&e.clan.OwnerID!=e.myUserId?(n(),s("div",at,[c.value?(n(),s("button",{key:0,class:"boost-purchase-button",style:{backgroundColor:"#3f8b1e"},onClick:p[0]||(p[0]=r=>y(e.clan.ID))},"Подать заявку на вступление")):(n(),s("span",lt,"Заявка на вступление в "+g(e.clan.ClanName)+" успешно отправлена",1))])):u("",!0),e.clan.ID==((I=e.myClan)==null?void 0:I.ID)&&e.clan.OwnerID!=e.myUserId?(n(),s("div",ot,[c.value?(n(),s("button",{key:0,class:"boost-purchase-button",style:{backgroundColor:"#3f8b1e"},onClick:p[1]||(p[1]=r=>{var b;return(b=e.leaveClan)==null?void 0:b.call(e,e.clan.ID)})},"Покинуть клан")):u("",!0)])):u("",!0)]),e.clan.OwnerID==e.myUserId?(n(),s("div",it,[t("button",{class:"boost-purchase-button",style:se({width:"auto",marginLeft:"20px",background:`${a.value=="members"?"gray":"none"}`,border:"1px solid gray"}),onClick:p[2]||(p[2]=r=>a.value="members")},"Участники",4),t("button",{class:"boost-purchase-button",style:se({width:"auto",marginRight:"20px",background:`${a.value=="members"?"none":"gray"}`,border:"1px solid gray"}),onClick:p[3]||(p[3]=r=>a.value="invites")},"Заявки",4)])):u("",!0),a.value=="members"?(n(),s("div",ct,[t("div",{onClick:p[4]||(p[4]=()=>{}),class:"channel"},[t("div",rt,[e.clan.OwnerPicture!=null&&e.clan.OwnerPicture!=""?(n(),s("img",{key:0,src:e.clan.OwnerPicture,style:{height:"30px",borderRadius:"100px"}},null,8,ut)):(n(),s("div",dt,"👤")),t("span",pt,g(e.clan.OwnerID==e.myUserId?"Вы":e.clan.OwnerName),1),e.clan.OwnerID==e.myUserId?(n(),s("div",vt,ht)):u("",!0)]),mt]),(n(!0),s(A,null,z(C.value.filter(r=>r.Status=="member"),r=>(n(),s("div",{onClick:b=>{var S;return e.clan.OwnerID==e.myUserId?(S=e.onOpenUserData)==null?void 0:S.call(e,"memberData",r):null},class:"channel"},[t("div",gt,[r.UserPicture!=null&&r.UserPicture!=""?(n(),s("img",{key:0,src:r.UserPicture,style:{height:"30px",borderRadius:"100px"}},null,8,Ct)):(n(),s("div",xt,"👤")),t("span",bt,g(r.UserID==e.myUserId?"Вы":r.UserName),1)]),t("div",kt,[t("span",null,g(r.Role),1)])],8,ft))),256))])):u("",!0),a.value=="invites"?(n(),s("div",_t,[(n(!0),s(A,null,z(C.value.filter(r=>r.Status=="request"),r=>(n(),s("div",{onClick:b=>{var S;return(S=e.onOpenUserData)==null?void 0:S.call(e,"invite",r)},class:"channel"},[t("div",$t,[r.UserPicture!=null&&r.UserPicture!=""?(n(),s("img",{key:0,src:r.UserPicture,style:{height:"30px",borderRadius:"100px"}},null,8,It)):(n(),s("div",St,"👤")),t("span",Ut,g(r.UserName),1)])],8,wt))),256))])):u("",!0)],64)}}}),O=e=>(H("data-v-9c4622e8"),e=e(),E(),e),Dt={class:"telegram-channels"},jt={key:0},Tt={key:1,class:"createPostMenu",style:{marginTop:"15px"}},Lt={style:{marginTop:"20px"}},Mt={id:"progressbar"},Pt={class:"createForm"},At={key:0,style:{display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center"}},Ot=O(()=>t("label",{for:"fname"},"Название клана",-1)),Rt={key:1,style:{display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center"}},Nt=O(()=>t("label",{for:"fname",style:{fontSize:"18px"}},"Аватар клана (Не обязательно)",-1)),zt={key:2,style:{display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center"}},Bt=O(()=>t("label",{for:"fname"},"Описание клана (Не обязательно)",-1)),Ft={key:0},Vt={key:0,style:{display:"flex",justifyContent:"center"}},qt={key:2,style:{display:"flex",flexDirection:"column",justifyContent:"space-between"}},Ht={style:{height:"100%"}},Et={key:0,class:"channels-list"},Wt={key:3},Gt={key:4},Xt={key:0,class:"popup-content"},Jt={class:"popup-header"},Kt=O(()=>t("svg",{class:"close-icon",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 30 30",width:"16px",height:"16px"},[t("path",{d:"M 7 4 C 6.744125 4 6.4879687 4.0974687 6.2929688 4.2929688 L 4.2929688 6.2929688 C 3.9019687 6.6839688 3.9019687 7.3170313 4.2929688 7.7070312 L 11.585938 15 L 4.2929688 22.292969 C 3.9019687 22.683969 3.9019687 23.317031 4.2929688 23.707031 L 6.2929688 25.707031 C 6.6839688 26.098031 7.3170313 26.098031 7.7070312 25.707031 L 15 18.414062 L 22.292969 25.707031 C 22.682969 26.098031 23.317031 26.098031 23.707031 25.707031 L 25.707031 23.707031 C 26.098031 23.316031 26.098031 22.682969 25.707031 22.292969 L 18.414062 15 L 25.707031 7.7070312 C 26.098031 7.3170312 26.098031 6.6829688 25.707031 6.2929688 L 23.707031 4.2929688 C 23.316031 3.9019687 22.682969 3.9019687 22.292969 4.2929688 L 15 11.585938 L 7.7070312 4.2929688 C 7.5115312 4.0974687 7.255875 4 7 4 z"})],-1)),Qt=[Kt],Yt={style:{display:"flex",justifyContent:"center",marginTop:"20px"}},Zt={style:{display:"flex",justifyContent:"center",marginTop:"20px"}},en={key:1,class:"popup-content"},tn={class:"popup-header"},nn=O(()=>t("svg",{class:"close-icon",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 30 30",width:"16px",height:"16px"},[t("path",{d:"M 7 4 C 6.744125 4 6.4879687 4.0974687 6.2929688 4.2929688 L 4.2929688 6.2929688 C 3.9019687 6.6839688 3.9019687 7.3170313 4.2929688 7.7070312 L 11.585938 15 L 4.2929688 22.292969 C 3.9019687 22.683969 3.9019687 23.317031 4.2929688 23.707031 L 6.2929688 25.707031 C 6.6839688 26.098031 7.3170313 26.098031 7.7070312 25.707031 L 15 18.414062 L 22.292969 25.707031 C 22.682969 26.098031 23.317031 26.098031 23.707031 25.707031 L 25.707031 23.707031 C 26.098031 23.316031 26.098031 22.682969 25.707031 22.292969 L 18.414062 15 L 25.707031 7.7070312 C 26.098031 7.3170312 26.098031 6.6829688 25.707031 6.2929688 L 23.707031 4.2929688 C 23.316031 3.9019687 22.682969 3.9019687 22.292969 4.2929688 L 15 11.585938 L 7.7070312 4.2929688 C 7.5115312 4.0974687 7.255875 4 7 4 z"})],-1)),sn=[nn],an={key:0},ln={style:{display:"flex",justifyContent:"center",marginTop:"20px"}},on={style:{display:"flex",justifyContent:"center",marginTop:"20px"}},cn={key:1},rn={style:{display:"flex",justifyContent:"center",marginTop:"20px"}},un={style:{display:"flex",justifyContent:"center",marginTop:"20px"}},dn={style:{display:"flex",justifyContent:"center",marginTop:"20px"}},pn=q({__name:"Clans",setup(e){ge(),Ce();const a=h(!1),i=h("member"),c=h("view"),C=h(!1),y=ie(),o=we();be();const m=h(0),x=h(!1),p=h(null),I=()=>{o.getClans().then(()=>{var v,l,d;((v=y.user)==null?void 0:v.clan_id)!=null?p.value=o.clans!=null?o.clans[(l=o.clans)==null?void 0:l.findIndex(_=>{var L;return _.ID==((L=y.user)==null?void 0:L.clan_id)})]:null:((d=o.clans)==null?void 0:d.findIndex(_=>_.OwnerID==m.value))!=-1&&(x.value=!0),C.value=!0})};ce(()=>{var v,l;I(),((v=y.user)==null?void 0:v.id)!=null&&(m.value=(l=y.user)==null?void 0:l.id)});const r=h("clans"),b=h(0),S=(v,l)=>{r.value=v,l!=null&&(B.value=l)},J=h(!0),K=[{id:0,isActive:!0,text:"Add name"},{id:1,isActive:!1,text:"Add avatar"},{id:2,isActive:!1,text:"Description"}],re=()=>{switch(b.value){case 0:if(D.value.name.trim()===""){xe().showAlert("❌ Название канала не может быть пустым ❌");return}break}b.value++,K[b.value].isActive=!0},D=h({name:"",image:null,description:""}),k=h(!1),B=h(null),ue=v=>{const d=v.target.files;if(d&&d.length>0){const _=d[0],L=new FileReader;L.onload=he=>{var ee;const M=new Image;M.onload=()=>{const R=document.createElement("canvas"),te=R.getContext("2d"),F=1024,V=1024;let j=M.width,T=M.height;j>T?j>F&&(T*=F/j,j=F):T>V&&(j*=V/T,T=V),R.width=j,R.height=T,te!=null&&te.drawImage(M,0,0,j,T),R.toBlob(ne=>{ne&&(D.value.image=new File([ne],_.name,{type:_.type}),J.value=!0)},_.type,.8)},M.src=(ee=he.target)==null?void 0:ee.result},L.readAsDataURL(_)}},de=()=>{o.createClan(D.value).then(v=>{console.log(v),v&&(r.value="clans",I())})},f=h(null),Q=(v,l)=>{a.value=!0,i.value=v,f.value=l,c.value="view"},pe=()=>{o.acceptUserToClan(f.value.ClanID,f.value.UserID).then(v=>{var l;if(v){let d=(l=o.clans)==null?void 0:l.findIndex(_=>_.ID==f.value.ClanID);o.clans!=null&&o.clans[d??-1].MemberCount++,a.value=!1,k.value=!k.value}})},ve=()=>{o.declineUserToClan(f.value.ClanID,f.value.UserID).then(v=>{v&&(a.value=!1,k.value=!k.value)})},ye=()=>{o.removeUserFrom(f.value.ClanID,f.value.UserID).then(v=>{var l;if(v){let d=(l=o.clans)==null?void 0:l.findIndex(_=>_.ID==f.value.ClanID);o.clans!=null&&o.clans[d??-1].MemberCount--,a.value=!1,k.value=!k.value,c.value="view"}})},Y=v=>{o.changeUserRole(f.value.ClanID,f.value.UserID,v).then(l=>{l&&(a.value=!1,k.value=!k.value,c.value="view")})},Z=v=>{o.leaveClan(v).then(l=>{l&&(I(),r.value="clans",k.value=!k.value)})};return h(),h(!1),(v,l)=>(n(),s("div",Dt,[C.value?(n(),s("div",jt,[N(Oe,{"page-state":r.value,onChangePageState:S,hasClan:x.value},null,8,["page-state","hasClan"])])):u("",!0),r.value==="create"?(n(),s("div",Tt,[t("div",Lt,[t("ul",Mt,[(n(),s(A,null,z(K,d=>t("li",{class:$(d.isActive?"active":"")},g(d.text),3)),64))])]),t("div",Pt,[b.value===0?(n(),s("div",At,[Ot,ae(t("input",{type:"text",id:"fname",style:{width:"70%",color:"white"},name:"fname","onUpdate:modelValue":l[0]||(l[0]=d=>D.value.name=d)},null,512),[[le,D.value.name]])])):u("",!0),b.value===1?(n(),s("div",Rt,[Nt,t("input",{class:"addFile",type:"file",onChange:ue,style:{marginTop:"30px"}},null,32)])):u("",!0),b.value===2?(n(),s("div",zt,[Bt,ae(t("input",{type:"text",id:"fname",style:{width:"70%",color:"white"},name:"fname","onUpdate:modelValue":l[1]||(l[1]=d=>D.value.description=d)},null,512),[[le,D.value.description]]),J.value?(n(),s("div",Ft,[t("button",{class:"mypost-button",style:{marginTop:"30px"},onClick:l[2]||(l[2]=d=>de())},"Создать")])):u("",!0)])):u("",!0)]),b.value<2?(n(),s("div",Vt,[t("button",{class:"mypost-button",style:{marginTop:"30px"},onClick:re},"Дальше")])):u("",!0)])):u("",!0),r.value=="clans"?(n(),s("div",qt,[t("div",Ht,[C.value?(n(),s("div",Et,[N(Ye,{changePageState:S,clans:P(o).clans!=null?P(o).clans:[],myUserId:m.value,isPopupVisible:a.value},null,8,["clans","myUserId","isPopupVisible"])])):u("",!0)])])):u("",!0),r.value=="claninfo"?(n(),s("div",Wt,[N(oe,{clan:B.value!=null?B.value:new Object,myUserId:m.value,clansStore:P(o),onOpenUserData:Q,needUpdate:k.value,myClan:p.value!=null?p.value:new Object,leaveClan:Z},null,8,["clan","myUserId","clansStore","needUpdate","myClan"])])):u("",!0),r.value=="myClan"&&p.value!=null?(n(),s("div",Gt,[N(oe,{clan:p.value!=null?p.value:new Object,myUserId:m.value,clansStore:P(o),onOpenUserData:Q,needUpdate:k.value,myClan:p.value!=null?p.value:new Object,leaveClan:Z},null,8,["clan","myUserId","clansStore","needUpdate","myClan"])])):u("",!0),a.value?(n(),s("div",{key:5,class:$(["boost-purchase-popup",{visible:a.value}])},[i.value=="invite"?(n(),s("div",Xt,[t("div",Jt,[t("span",null,"Пользователь "+g(f.value.UserName)+" хочет вступить к вам в клан",1),t("button",{class:"close-button",onClick:l[3]||(l[3]=d=>{a.value=!1})},Qt)]),t("div",Yt,[t("button",{class:"boost-purchase-button",style:{width:"60%"},onClick:l[4]||(l[4]=d=>pe())},"Принять")]),t("div",Zt,[t("button",{class:"boost-purchase-button",style:{width:"60%"},onClick:l[5]||(l[5]=d=>ve())},"Отклонить")])])):u("",!0),i.value=="memberData"?(n(),s("div",en,[t("div",tn,[t("span",null,"Пользователь "+g(f.value.UserName)+" состоит в вашем клане",1),t("button",{class:"close-button",onClick:l[6]||(l[6]=d=>{a.value=!1})},sn)]),t("span",null,"Роль: "+g(f.value.Role),1),c.value=="view"?(n(),s("div",an,[t("div",ln,[t("button",{class:"boost-purchase-button",style:{width:"60%"},onClick:l[7]||(l[7]=d=>c.value="edit")},"Изменить роль")]),t("div",on,[t("button",{class:"boost-purchase-button",style:{width:"60%"},onClick:l[8]||(l[8]=d=>ye())},"Выгнать")])])):(n(),s("div",cn,[t("div",rn,[t("button",{class:"boost-purchase-button",style:{width:"60%"},onClick:l[9]||(l[9]=d=>Y("заместитель"))},"Сделать заместителем")]),t("div",un,[t("button",{class:"boost-purchase-button",style:{width:"60%"},onClick:l[10]||(l[10]=d=>Y("участник"))},"Сделать участником")]),t("div",dn,[t("button",{class:"boost-purchase-button",style:{width:"60%"},onClick:l[11]||(l[11]=d=>c.value="view")},"Назад")])]))])):u("",!0)],2)):u("",!0)]))}}),fn=W(pn,[["__scopeId","data-v-9c4622e8"]]);export{fn as default};
