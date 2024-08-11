import{u as O,k as Te,l as T,d as fe,c as t,e,z as $,g as i,q as h,b as s,_ as Q,v as L,t as c,F as U,p as ge,i as xe,m as Le,E as Ue,r as w,o as Ne,f as E,y as ye,G as me,h as W,A as j}from"./index-kApHQQB3.js";import{_ as ke}from"./sprite-D2SurNu7.js";import{A as Pe,P as je}from"./profile-icon-Cs9u1iak.js";O();const ze=Te("marketStore",{state:()=>({orders:null,myOrders:null}),getters:{},actions:{async createNewOrder(l){console.log(l);const v=O(),a=await T.post("https://taptaptap.testcoin.uk/createOrder",{amount:l.amount,paymentMethods:l.paymentMethods,price:l.price},{headers:{"x-api-key":v.getAccessToken}});return console.log(a),!0},async fetchAllActiveOrders(){const l=O(),v=await T.get("https://taptaptap.testcoin.uk/orders",{headers:{"x-api-key":l.getAccessToken}});console.log(v);for(let a=0;a<v.data.orders.length;a++){const y=v.data.orders[a].PaymentMethods.split(",").map(g=>g.trim());v.data.orders[a].PaymentMethods=y,console.log(y)}return this.orders=v.data.orders,console.log(this.orders),!0},async createOrderMember(l,v){const a=O(),u=await T.post("https://taptaptap.testcoin.uk/createOrderMember",{id:l,owner_id:v},{headers:{"x-api-key":a.getAccessToken}});return console.log(u),!0},async fetchOrderMembers(l){const v=O(),a=await T.get("https://taptaptap.testcoin.uk/getOrderMembers",{headers:{"x-api-key":v.getAccessToken,id:l}});return console.log(a),a.data.members},async deleteMyOrder(l){const v=O(),a=await T.post("https://taptaptap.testcoin.uk/deleteOrder",{id:l},{headers:{"x-api-key":v.getAccessToken}});return console.log(a),!!a.data.sucess},async startOrder(l,v){const a=O(),u=await T.post("https://taptaptap.testcoin.uk/startOrder",{id:l,member_id:v},{headers:{"x-api-key":a.getAccessToken}});return console.log(u),!!u.data.sucess},async finishOrder(l){const v=O(),a=await T.post("https://taptaptap.testcoin.uk/finishOrder",{id:l},{headers:{"x-api-key":v.getAccessToken}});return console.log(a),!!a.data.sucess}}}),Ve="data:image/svg+xml,%3csvg%20class='w-6%20h-6%20text-gray-800%20dark:text-white'%20aria-hidden='true'%20xmlns='http://www.w3.org/2000/svg'%20width='24'%20height='24'%20fill='none'%20viewBox='0%200%2024%2024'%3e%3cpath%20stroke='currentColor'%20stroke-linecap='round'%20fill='%231C274C'%20stroke-linejoin='round'%20stroke-width='2'%20d='m15%209-6%206m0-6%206%206m6-3a9%209%200%201%201-18%200%209%209%200%200%201%2018%200Z'/%3e%3c/svg%3e",Be="data:image/svg+xml,%3csvg%20class='w-6%20h-6%20text-gray-800%20dark:text-white'%20aria-hidden='true'%20xmlns='http://www.w3.org/2000/svg'%20width='24'%20height='24'%20fill='none'%20viewBox='0%200%2024%2024'%3e%3cpath%20stroke='currentColor'%20stroke-linecap='round'%20fill='%231C274C'%20stroke-linejoin='round'%20stroke-width='2'%20d='M15%204h3a1%201%200%200%201%201%201v15a1%201%200%200%201-1%201H6a1%201%200%200%201-1-1V5a1%201%200%200%201%201-1h3m0%203h6m-3%205h3m-6%200h.01M12%2016h3m-6%200h.01M10%203v4h4V3h-4Z'/%3e%3c/svg%3e",Re={class:"navMenu"},qe={class:"nav-btn__wrapper"},Fe=["src"],Ee=["src"],We=["src"],Qe=["src"],Ze={class:"nav-btn__text"},Ge={key:3,class:"nav-btn__text-item"},He=fe({__name:"NavMenu",props:{pageState:{}},emits:["change-page-state"],setup(l,{emit:v}){const a=l,u=v,y=g=>{g!==a.pageState&&u("change-page-state",g)};return(g,p)=>(s(),t("div",Re,[e("div",qe,[a.pageState!="visible"?(s(),t("button",{key:0,class:$(["post-component__nav-btn feed",{active:a.pageState==="market"}]),onClick:p[0]||(p[0]=f=>y("market"))},[e("img",{src:i(Be)},null,8,Fe)],2)):h("",!0),a.pageState!="visible"?(s(),t("button",{key:1,class:$(["post-component__nav-btn compose",{active:a.pageState==="create"}]),onClick:p[1]||(p[1]=f=>y("create"))},[e("img",{src:i(Pe)},null,8,Ee)],2)):h("",!0),a.pageState!="visible"?(s(),t("button",{key:2,class:$(["post-component__nav-btn profile",{active:a.pageState==="myorders"}]),onClick:p[2]||(p[2]=f=>y("myorders"))},[e("img",{src:i(je)},null,8,We)],2)):(s(),t("button",{key:3,class:"post-component__nav-btn profile",onClick:p[3]||(p[3]=f=>y("market"))},[e("img",{src:i(Ve)},null,8,Qe)]))]),e("div",Ze,[a.pageState!="visible"?(s(),t("span",{key:0,class:$(["nav-btn__text-item",{active:a.pageState==="posts"}])},"Orders",2)):h("",!0),a.pageState!="visible"?(s(),t("span",{key:1,class:$(["nav-btn__text-item",{active:a.pageState==="create"}])},"Create",2)):h("",!0),a.pageState!="visible"?(s(),t("span",{key:2,class:$(["nav-btn__text-item",{active:a.pageState==="myorders"}])},"My Orders",2)):(s(),t("span",Ge,"Back"))])]))}}),Je=Q(He,[["__scopeId","data-v-ae39ea53"]]),we=l=>(ge("data-v-26462ff4"),l=l(),xe(),l),Ke=ke+"#chevron-right",Xe={key:0,style:{height:"85vh",display:"flex",alignItems:"center",justifyContent:"center"}},Ye=we(()=>e("span",{style:{fontSize:"25px"}},"Здесь пока ещё нету сделок",-1)),et=[Ye],tt={class:"channel-info",style:{display:"flex",flexDirection:"row",justifyContent:"center",alignItems:"center"}},st=["src"],nt={key:1,style:{height:"30px",width:"30px",borderRadius:"100px",background:"gray",justifyContent:"center",alignItems:"center",display:"flex"}},ot={class:"name",style:{marginLeft:"10px",fontSize:"18px"}},at=["onClick"],it={key:0,style:{display:"flex",flexDirection:"column"}},rt={key:0,style:{fontSize:"17px"}},lt={key:1},dt={key:0},ct={key:1},ut={key:2,style:{display:"flex",flexDirection:"column"}},pt={style:{border:"3.5px solid gray",width:"170px",textAlign:"center",marginTop:"7px"}},vt={key:1,style:{fontSize:"20px"}},ht=we(()=>e("div",null,[e("svg",{class:"arrow"},[e("use",{"xlink:href":Ke})])],-1)),yt={__name:"MarketItem",props:{orders:{type:Array,required:!0},myUserId:{type:Number,required:!0},changeVisibleState:{type:Function,required:!0},getPaymentMethodNameBySuffix:{type:Function,required:!0}},setup(l){return(v,a)=>l.orders.length==0?(s(),t("div",Xe,et)):(s(!0),t(U,{key:1},L(l.orders,u=>(s(),t("div",{id:"MyOrders",key:u.ID,onClick:a[0]||(a[0]=()=>{}),class:"channel"},[e("div",tt,[u.OwnerAvatar!=null&&u.OwnerAvatar!=""?(s(),t("img",{key:0,src:u.OwnerAvatar,style:{height:"30px",borderRadius:"100px"}},null,8,st)):(s(),t("div",nt,"👤")),e("span",ot,c(u.OwnerName),1)]),e("div",{onClick:y=>u.OwnerID!==l.myUserId?l.changeVisibleState("order",u):l.changeVisibleState("me",u)},[u.OwnerID!==l.myUserId?(s(),t("div",it,[u.Status=="active"?(s(),t("span",rt,"хочет купить "+c(u.Amount)+"🍆 за "+c(u.Price)+"💲",1)):(s(),t("div",lt,[u.Status=="progress"?(s(),t("span",dt,"сделка в процессе ⏳")):(s(),t("span",ct,"сделка закрыта ✅"))])),u.Status!="closed"?(s(),t("div",ut,[(s(!0),t(U,null,L(u.PaymentMethods,y=>(s(),t("div",pt,[e("span",null,c(l.getPaymentMethodNameBySuffix(y)),1)]))),256))])):h("",!0)])):(s(),t("span",vt,c(u.Status=="active"||u.Status=="progress"?`ваша сделка 👑 ${u.Status=="progress"?"⏳":""}`:"сделка закрыта ✅"),1))],8,at),ht]))),128))}},_e=Q(yt,[["__scopeId","data-v-26462ff4"]]),_=l=>(ge("data-v-a81bf702"),l=l(),xe(),l),mt=ke+"#chevron-right",_t={class:"telegram-channels"},ft={key:0,class:"createPostMenu",style:{marginTop:"15px"}},gt={style:{marginTop:"20px"}},xt={id:"progressbar"},kt={class:"createForm"},wt={key:0,style:{display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center"}},bt=_(()=>e("label",{for:"fname"},"Количество коинов, которое вы планируете купить",-1)),St={key:1,style:{display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center"}},Ct=_(()=>e("label",{for:"fname",style:{fontSize:"18px"}},"Способ оплаты, который будет удобен вам",-1)),It={class:"sec-center",style:{marginTop:"20px"}},Ot=_(()=>e("input",{class:"dropdown",type:"checkbox",id:"dropdown",name:"dropdown"},null,-1)),Mt=_(()=>e("label",{class:"for-dropdown",for:"dropdown"},"Добавить способ оплаты",-1)),$t={class:"section-dropdown"},At=_(()=>e("i",{class:"uil uil-arrow-right"},"💳",-1)),Dt=_(()=>e("i",{class:"uil uil-arrow-right"},"💱",-1)),Tt=_(()=>e("i",{class:"uil uil-arrow-right"},"💵",-1)),Lt={key:0,style:{marginTop:"25px"}},Ut={style:{display:"flex"}},Nt={style:{width:"200px",height:"50px",border:"3.5px solid gray",textAlign:"center",justifyContent:"center",alignItems:"center",display:"flex"}},Pt=["onClick"],jt=_(()=>e("span",null,"❌",-1)),zt=[jt],Vt={key:2,style:{display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center"}},Bt=_(()=>e("label",{for:"fname"},"За сколько вы хотите приобрести коины? (в USD)",-1)),Rt={key:0},qt={key:0,style:{display:"flex",justifyContent:"center"}},Ft={key:1,style:{display:"flex",flexDirection:"column",justifyContent:"space-between"}},Et={style:{height:"100%"}},Wt={key:0,class:"channels-list"},Qt={key:2},Zt={style:{height:"100%"}},Gt={key:0,class:"channels-list"},Ht={key:3},Jt={style:{display:"flex",justifyContent:"center"}},Kt={style:{fontSize:"30px",fontWeight:"bold"}},Xt={key:0},Yt={style:{display:"flex",flexDirection:"column",marginLeft:"5%",marginTop:"20px"}},es={style:{display:"flex"}},ts={style:{fontSize:"23px"}},ss=["src"],ns={key:1,style:{height:"30px",width:"30px",borderRadius:"100px",background:"gray",justifyContent:"center",alignItems:"center",display:"flex"}},os={style:{fontSize:"23px"}},as={style:{fontSize:"23px"}},is={style:{border:"3.5px solid gray",width:"170px",textAlign:"center",marginTop:"7px"}},rs={key:0,style:{display:"flex",justifyContent:"center",marginTop:"40px"}},ls={key:1},ds={key:0,style:{display:"flex",justifyContent:"center",alignItems:"center",textAlign:"center",marginTop:"30px"}},cs={key:0},us={key:1},ps={style:{fontSize:"19px"}},vs={key:2},hs={style:{display:"flex",justifyContent:"center",marginTop:"20px"}},ys={style:{fontSize:"23px"}},ms={key:1},_s={style:{display:"flex",flexDirection:"column",marginLeft:"5%",marginTop:"20px"}},fs={style:{display:"flex"}},gs={style:{fontSize:"23px"}},xs=["src"],ks={key:1,style:{height:"30px",width:"30px",borderRadius:"100px",background:"gray",justifyContent:"center",alignItems:"center",display:"flex"}},ws={style:{fontSize:"23px"}},bs=_(()=>e("span",{style:{fontSize:"23px"}},"Ваши сопсобы оплаты:",-1)),Ss={style:{border:"3.5px solid gray",width:"170px",textAlign:"center",marginTop:"7px"}},Cs={key:0,class:"orderSettingButtons",style:{display:"flex",justifyContent:"center",marginTop:"20px"}},Is={key:1},Os={key:0,style:{textAlign:"center",marginTop:"20px"}},Ms={key:0},$s=_(()=>e("span",{style:{fontSize:"19px"}}," Желающие купить коины: ",-1)),As=["onClick"],Ds={class:"channel-info",style:{display:"flex",flexDirection:"row",justifyContent:"center",alignItems:"center"}},Ts=["src"],Ls={key:1,style:{height:"30px",width:"30px",borderRadius:"100px",background:"gray",justifyContent:"center",alignItems:"center",display:"flex"}},Us={class:"name",style:{marginLeft:"10px",fontSize:"18px"}},Ns=_(()=>e("div",{class:"channel-action"},[e("svg",{class:"arrow"},[e("use",{"xlink:href":mt})])],-1)),Ps={key:1},js={style:{fontSize:"23px"}},zs={key:1,style:{textAlign:"center",marginTop:"20px"}},Vs=_(()=>e("span",{style:{fontSize:"19px",marginLeft:"-15px"}},"ⓘ Запросов на сделку ещё не поступало ⓘ",-1)),Bs=[Vs],Rs={key:2},qs={style:{display:"flex",justifyContent:"center",marginTop:"20px"}},Fs={style:{fontSize:"23px"}},Es={key:0,class:"popup-content"},Ws={class:"popup-header"},Qs=_(()=>e("svg",{class:"close-icon",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 30 30",width:"16px",height:"16px"},[e("path",{d:"M 7 4 C 6.744125 4 6.4879687 4.0974687 6.2929688 4.2929688 L 4.2929688 6.2929688 C 3.9019687 6.6839688 3.9019687 7.3170313 4.2929688 7.7070312 L 11.585938 15 L 4.2929688 22.292969 C 3.9019687 22.683969 3.9019687 23.317031 4.2929688 23.707031 L 6.2929688 25.707031 C 6.6839688 26.098031 7.3170313 26.098031 7.7070312 25.707031 L 15 18.414062 L 22.292969 25.707031 C 22.682969 26.098031 23.317031 26.098031 23.707031 25.707031 L 25.707031 23.707031 C 26.098031 23.316031 26.098031 22.682969 25.707031 22.292969 L 18.414062 15 L 25.707031 7.7070312 C 26.098031 7.3170312 26.098031 6.6829688 25.707031 6.2929688 L 23.707031 4.2929688 C 23.316031 3.9019687 22.682969 3.9019687 22.292969 4.2929688 L 15 11.585938 L 7.7070312 4.2929688 C 7.5115312 4.0974687 7.255875 4 7 4 z"})],-1)),Zs=[Qs],Gs={style:{display:"flex",justifyContent:"center",marginTop:"20px"}},Hs={key:1,class:"popup-content"},Js={class:"popup-header"},Ks=_(()=>e("svg",{class:"close-icon",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 30 30",width:"16px",height:"16px"},[e("path",{d:"M 7 4 C 6.744125 4 6.4879687 4.0974687 6.2929688 4.2929688 L 4.2929688 6.2929688 C 3.9019687 6.6839688 3.9019687 7.3170313 4.2929688 7.7070312 L 11.585938 15 L 4.2929688 22.292969 C 3.9019687 22.683969 3.9019687 23.317031 4.2929688 23.707031 L 6.2929688 25.707031 C 6.6839688 26.098031 7.3170313 26.098031 7.7070312 25.707031 L 15 18.414062 L 22.292969 25.707031 C 22.682969 26.098031 23.317031 26.098031 23.707031 25.707031 L 25.707031 23.707031 C 26.098031 23.316031 26.098031 22.682969 25.707031 22.292969 L 18.414062 15 L 25.707031 7.7070312 C 26.098031 7.3170312 26.098031 6.6829688 25.707031 6.2929688 L 23.707031 4.2929688 C 23.316031 3.9019687 22.682969 3.9019687 22.292969 4.2929688 L 15 11.585938 L 7.7070312 4.2929688 C 7.5115312 4.0974687 7.255875 4 7 4 z"})],-1)),Xs=[Ks],Ys={style:{display:"flex",justifyContent:"center",marginTop:"20px"}},en=fe({__name:"Market",setup(l){Le();const v=Ue(),a=w(!1),u=w("member"),y=w(!1),g=O(),p=ze(),f=w(5879286931),N=()=>{p.fetchAllActiveOrders().then(d=>{if(d){if(p.orders&&f){const[n,m]=p.orders.reduce(([b,S],M)=>{const V=M.OwnerID==f.value,B=M.CloseWithUserID==f.value;return V||B?S.push(M):M.Status=="active"&&b.push(M),[b,S]},[[],[]]);p.orders=n,p.myOrders=m}y.value=!0}})},R=d=>{p.fetchOrderMembers(d).then(n=>{var m;n&&(k.value=n,((m=k.value)==null?void 0:m.findIndex(S=>S.UserID==f.value))==-1?z.value=!0:z.value=!1)})};Ne(()=>{var d,n;N(),((d=g.user)==null?void 0:d.id)!=null&&(f.value=(n=g.user)==null?void 0:n.id)});const C=w("market"),A=w(0),Z=d=>{C.value=d},be=w(!0),q=[{id:0,isActive:!0,text:"Add amount"},{id:1,isActive:!1,text:"Payment methods"},{id:2,isActive:!1,text:"Add price"}],Se=()=>{A.value++,q[A.value].isActive=!0},x=w({amount:0,paymentMethods:[],price:0}),k=w();let o=w(void 0);const Ce=w("order"),z=w(!1),F=d=>{if(x.value.paymentMethods.findIndex(n=>n==d)==-1)x.value.paymentMethods.push(d);else{j().showAlert("❌ Вы уже добавили этот метод оплаты ❌");return}},Ie=d=>{x.value.paymentMethods.splice(x.value.paymentMethods.findIndex(n=>n==d),1)},P=d=>{switch(d){case"vm":return"Visa/MasterCard 💳";case"ton":return"TON wallet 💱";case"qiwi":return"Qiwi wallet 💵"}},Oe=()=>{var d;if(x.value.amount<=0&&j().showAlert("❌ Ошибка. Нельзя создать сделку с 0 количеством коинов"),x.value.paymentMethods.length==0&&j().showAlert("❌ Ошибка. Нужно добавить хотя бы 1 метод оплаты"),((d=g.user)==null?void 0:d.username)==null||g.user.username==null||g.user.username.trim()===""){j().showAlert(`❌ Ошибка. У вас отсутствует ссылка на профиль, перейдите в настройки telegram и в поле 'имя пользователя' впишите своё имя пользователя. Иначе участники маркета не смогут с вами связаться.❌ 
 ⚠️ Обязательно перезапустите кликер ⚠️`);return}p.createNewOrder(x.value).then(()=>{N(),C.value="market",A.value=0,q.forEach(n=>{n.id!=0&&(n.isActive=!1)})})},G=(d,n)=>{C.value="visible",Ce.value=d,o.value=n,console.log(o),R(n.ID)},Me=()=>{var d,n,m;if(g.user!=null){if(((d=o.value)==null?void 0:d.Amount)!=null&&g.user.balance<o.value.Amount){j().showAlert(`⚠️ У вас недостаточно 🍆 чтобы продать их ${o.value.OwnerName} ⚠️`);return}o!=null&&((n=o.value)==null?void 0:n.ID)!=null&&(z.value=!1,p.createOrderMember((m=o.value)==null?void 0:m.ID,o.value.OwnerID).then(b=>{var S;b&&R(((S=o.value)==null?void 0:S.ID)!==void 0?o.value.ID:0)}))}},$e=d=>{p.deleteMyOrder(d).then(n=>{n&&(N(),y.value=!1,Z("market"))})},I=w({ID:0,Username:"",MemberId:0}),H=(d,n,m,b)=>{I.value.ID=d,I.value.Username=n,I.value.MemberId=m,a.value=!0,u.value=b},Ae=()=>{p.startOrder(I.value.ID,I.value.MemberId).then(d=>{var n,m;d&&(a.value=!1,N(),R(((n=o.value)==null?void 0:n.ID)!=null?(m=o.value)==null?void 0:m.ID:0),o.value&&(o.value.Status="progress"))})},De=()=>{o.value!=null&&p.finishOrder(o.value.ID).then(d=>{d&&(a.value=!1,C.value="market",N())})};return(d,n)=>{var m,b,S,M,V,B,J,K,X,Y,ee,te,se,ne,oe,ae,ie,re,le,de,ce,ue,pe,ve,he;return s(),t("div",_t,[E(Je,{"page-state":C.value,onChangePageState:Z},null,8,["page-state"]),C.value==="create"?(s(),t("div",ft,[e("div",gt,[e("ul",xt,[(s(),t(U,null,L(q,r=>e("li",{class:$(r.isActive?"active":"")},c(r.text),3)),64))])]),e("div",kt,[A.value===0?(s(),t("div",wt,[bt,ye(e("input",{type:"number",id:"fname",style:{width:"70%",color:"white"},name:"fname","onUpdate:modelValue":n[0]||(n[0]=r=>x.value.amount=r)},null,512),[[me,x.value.amount]])])):h("",!0),A.value===1?(s(),t("div",St,[Ct,e("div",It,[Ot,Mt,e("div",$t,[e("a",{onClick:n[1]||(n[1]=r=>F("vm"))},[W("Visa/MasterCard "),At]),e("a",{onClick:n[2]||(n[2]=r=>F("ton"))},[W("TON wallet "),Dt]),e("a",{onClick:n[3]||(n[3]=r=>F("qiwi"))},[W("Qiwi wallet"),Tt])]),x.value.paymentMethods.length>0?(s(),t("div",Lt,[(s(!0),t(U,null,L(x.value.paymentMethods,r=>(s(),t("div",Ut,[e("div",Nt,[e("span",null,c(P(r)),1)]),e("div",{style:{height:"50px",border:"3.5px solid white",width:"50px",display:"flex",justifyContent:"center",alignItems:"center"},onClick:D=>Ie(r)},zt,8,Pt)]))),256))])):h("",!0)])])):h("",!0),A.value===2?(s(),t("div",Vt,[Bt,ye(e("input",{type:"number",id:"fname",style:{width:"70%",color:"white"},name:"fname","onUpdate:modelValue":n[4]||(n[4]=r=>x.value.price=r)},null,512),[[me,x.value.price]]),be.value?(s(),t("div",Rt,[e("button",{class:"mypost-button",style:{marginTop:"30px"},onClick:n[5]||(n[5]=r=>Oe())},"Создать")])):h("",!0)])):h("",!0)]),A.value<2?(s(),t("div",qt,[e("button",{class:"mypost-button",style:{marginTop:"30px"},onClick:Se},"Дальше")])):h("",!0)])):h("",!0),C.value=="market"?(s(),t("div",Ft,[e("div",Et,[y.value?(s(),t("div",Wt,[E(_e,{orders:i(p).orders!=null?i(p).orders:[],myUserId:f.value,changeVisibleState:G,getPaymentMethodNameBySuffix:P},null,8,["orders","myUserId"])])):h("",!0)])])):h("",!0),C.value=="myorders"?(s(),t("div",Qt,[e("div",Zt,[y.value?(s(),t("div",Gt,[E(_e,{orders:i(p).myOrders!=null?i(p).myOrders:[],myUserId:f.value,changeVisibleState:G,getPaymentMethodNameBySuffix:P},null,8,["orders","myUserId"])])):h("",!0)])])):h("",!0),C.value=="visible"?(s(),t("div",Ht,[e("div",Jt,[e("span",Kt,c(((m=i(o))==null?void 0:m.OwnerID)!==f.value?"":"Ваш ")+" Ордер №"+c((b=i(o))==null?void 0:b.ID),1)]),((S=i(o))==null?void 0:S.OwnerID)!==f.value?(s(),t("div",Xt,[e("div",Yt,[e("div",es,[e("span",ts,"Пользователь: "+c((M=i(o))==null?void 0:M.OwnerName),1),((V=i(o))==null?void 0:V.OwnerAvatar)!=null?(s(),t("img",{key:0,src:i(o).OwnerAvatar,style:{height:"30px",borderRadius:"100px"}},null,8,ss)):(s(),t("div",ns,"👤"))]),e("div",null,[e("span",os,"Хочет купить "+c((B=i(o))==null?void 0:B.Amount)+"🍆 за "+c((J=i(o))==null?void 0:J.Price)+"💲",1)]),e("div",null,[e("span",as,"Предпочтительные способы оплаты для "+c((K=i(o))==null?void 0:K.OwnerName)+":",1),e("div",null,[(s(!0),t(U,null,L((X=i(o))==null?void 0:X.PaymentMethods,r=>(s(),t("div",is,[e("span",null,c(P(r)),1)]))),256))])])]),z.value&&((Y=i(o))==null?void 0:Y.Status)=="active"?(s(),t("div",rs,[e("button",{class:"boost-purchase-button",style:{width:"70%",backgroundColor:"#3f8b1e"},onClick:n[6]||(n[6]=r=>Me())},"Продать 🍆 "+c((ee=i(o))==null?void 0:ee.OwnerName)+"`y",1)])):h("",!0),((te=i(o))==null?void 0:te.Status)!="closed"?(s(),t("div",ls,[k.value!=null&&((se=k.value)==null?void 0:se.findIndex(r=>r.UserID==f.value))!=-1&&((ne=k.value)==null?void 0:ne.length)>0?(s(),t("div",ds,[((oe=i(o))==null?void 0:oe.Status)=="active"?(s(),t("span",cs,"Ваш запрос успешно создан, вы начнёте сделку, когда пользователь "+c((ae=i(o))==null?void 0:ae.OwnerName)+" примет ваш запрос",1)):(s(),t("div",us,[e("span",ps,c((ie=i(o))==null?void 0:ie.OwnerName)+" принял ваш запрос на сделку",1),e("button",{class:"boost-purchase-button",style:{width:"70%",marginTop:"30px"},onClick:n[7]||(n[7]=r=>{var D;return i(v).openTelegramLink(`https://t.me/${(D=i(o))==null?void 0:D.OwnerName}`)})},"Связаться с "+c((re=i(o))==null?void 0:re.OwnerName),1),e("button",{class:"boost-purchase-button",style:{width:"70%",marginTop:"30px"},onClick:n[8]||(n[8]=r=>{var D;return i(o)!=null?H((D=i(o))==null?void 0:D.ID,i(o).OwnerName,i(o).OwnerID,"confirm"):null})},"Отпустить коины")]))])):h("",!0)])):(s(),t("div",vs,[e("div",hs,[e("span",ys,"Вы закрыли сделку с: "+c((le=i(o))==null?void 0:le.OwnerName),1)])]))])):(s(),t("div",ms,[e("div",_s,[e("div",fs,[e("span",gs,c((de=i(o))==null?void 0:de.OwnerName),1),((ce=i(o))==null?void 0:ce.OwnerAvatar)!=null?(s(),t("img",{key:0,src:i(o).OwnerAvatar,style:{height:"30px",borderRadius:"100px"}},null,8,xs)):(s(),t("div",ks,"👤"))]),e("div",null,[e("span",ws,"Собираетесь купить "+c((ue=i(o))==null?void 0:ue.Amount)+"🍆 за "+c((pe=i(o))==null?void 0:pe.Price)+"💲",1)]),e("div",null,[bs,e("div",null,[(s(!0),t(U,null,L((ve=i(o))==null?void 0:ve.PaymentMethods,r=>(s(),t("div",Ss,[e("span",null,c(P(r)),1)]))),256))])]),i(o).Status=="active"?(s(),t("div",Cs,[e("button",{class:"boost-purchase-button",style:{width:"60%"},onClick:n[9]||(n[9]=r=>$e(i(o).ID))},"Удалить сделку")])):h("",!0),i(o).Status!="closed"?(s(),t("div",Is,[k.value!=null&&((he=k.value)==null?void 0:he.length)>0?(s(),t("div",Os,[i(o).Status=="active"?(s(),t("div",Ms,[$s,(s(!0),t(U,null,L(k.value,r=>(s(),t("div",{key:r.ID,onClick:D=>H(r.OrderID,r.Username,r.UserID,"member"),class:"channel",style:{marginLeft:"-10px"}},[e("div",Ds,[r.UserAvatar!=null&&r.UserAvatar!==""?(s(),t("img",{key:0,src:r.UserAvatar,style:{height:"30px",borderRadius:"100px"}},null,8,Ts)):(s(),t("div",Ls,"👤")),e("span",Us,c(r.Username),1)]),Ns],8,As))),128))])):(s(),t("div",Ps,[e("span",js,"Вы торгуете с: "+c(k.value[0].Username),1),e("button",{class:"boost-purchase-button",style:{width:"80%",marginTop:"30px"},onClick:n[10]||(n[10]=r=>i(v).openTelegramLink(`https://t.me/${k.value[0].Username}`))},"Связаться с "+c(k.value[0].Username),1)]))])):(s(),t("div",zs,Bs))])):(s(),t("div",Rs,[e("div",qs,[e("span",Fs,"Вы закрыли сделку с: "+c(k.value!=null?k.value[0].Username:""),1)])]))])]))])):h("",!0),a.value?(s(),t("div",{key:4,class:$(["boost-purchase-popup",{visible:a.value}])},[u.value=="member"?(s(),t("div",Es,[e("div",Ws,[e("h2",null,c(I.value.Username),1),e("button",{class:"close-button",onClick:n[11]||(n[11]=r=>{a.value=!1})},Zs)]),e("div",null,[e("span",null,"Отправил вам запрос на сделку, хотите торговать с "+c(I.value.Username)+"?",1)]),e("div",Gs,[e("button",{class:"boost-purchase-button",style:{width:"60%"},onClick:n[12]||(n[12]=r=>Ae())},"Начать сделку")])])):(s(),t("div",Hs,[e("div",Js,[e("h2",null,"Сделка с "+c(I.value.Username),1),e("button",{class:"close-button",onClick:n[13]||(n[13]=r=>{a.value=!1})},Xs)]),e("div",null,[e("span",null,"Нажимая кнопку ниже вы подтверждаете, что получили платёж от "+c(I.value.Username),1)]),e("div",Ys,[e("button",{class:"boost-purchase-button",style:{width:"60%"},onClick:n[14]||(n[14]=r=>De())},"Отпустить коины")])]))],2)):h("",!0)])}}}),on=Q(en,[["__scopeId","data-v-a81bf702"]]);export{on as default};