import{d as B,u as I,r as o,z as p,o as N,J as G,b as O,c as R,e as i,B as U,K as T,n as C,v as F,x as W,y as E,_ as A}from"./index-0A2JdoDv.js";import{u as x}from"./games-DUI4Nk5r.js";const g=u=>(W("data-v-44fc4bfc"),u=u(),E(),u),z=["width","height"],J={id:"unity-loading-bar"},$=g(()=>i("div",{id:"unity-logo"},null,-1)),H={id:"unity-progress-bar-empty"},P=g(()=>i("div",{id:"unity-webgl-logo"},null,-1)),V=g(()=>i("div",{id:"unity-build-title"},"FlappyDick",-1)),c="BuildTown",j=B({__name:"Town",setup(u){const r=x(),a=I(),v=o("unity-desktop"),w=o(960),h=o(600),y=o("0%"),f=o(!0),S=o(0),m=o(null),t=o(null),l=o(null),_=`${c}/buildes.loader.js`,b={dataUrl:`${c}/buildes.data.gz`,frameworkUrl:`${c}/buildes.framework.js.gz`,codeUrl:`${c}/buildes.wasm.gz`,streamingAssetsUrl:"",companyName:"DefaultCompany",productName:"FlappyDick",productVersion:"0.1.1",showBanner:(e,n)=>{if(l.value){const s=document.createElement("div");s.innerHTML=e,l.value.appendChild(s),n==="error"?s.style.background="red":n==="warning"&&(s.style.background="yellow"),s.style.padding="10px",setTimeout(()=>{l.value&&l.value.removeChild(s)},5e3)}}},k=e=>{y.value=`${100*e}%`,e==1&&console.log("load Finish")},M=()=>{var e;(e=t.value)==null||e.SetFullscreen(1)};return window.GetSkins=function(){t.value.SendMessage("GameManager","OnInitSkins",a.skins)},window.GetLastVisit=function(){t.value.SendMessage("FoodSlider","OnSetFoodSlider",JSON.stringify(a.town))},window.GetEnergy=function(){var e,n;t.value.SendMessage("EmojiSlider","OnSetTownEmoji",JSON.stringify({energy:(e=a.user)==null?void 0:e.energy,energy_level:(n=a.user)==null?void 0:n.energy_level}))},window.TryBuy=function(e){if(console.log(e),!!a.user){if(a.user.balance<e){p().showAlert("У вас недостаточно 🐥 для покупки данной постройки");return}r.tryBuy(e).then(n=>{if(n){if(!a.user)return;a.user.balance-=e,t.value.SendMessage("WebGLCallbackHandler","OnAccept")}})}},window.GetReferals=function(){r.getReferals().then(e=>{console.log(e);const n={referals:e};t.value.SendMessage("Referal_Window","OnSetReferals",JSON.stringify(n))})},window.SaveJSON=function(e){console.log(e),r.saveUserBuildings(e).then(n=>{n&&(console.log(n),a.getTown())})},window.CheckUserIsland=function(e){console.log(e),r.checkReferalIsland(Number(e)).then(n=>{n?t.value.SendMessage("Referal_Window","VisitIsland"):t.value.SendMessage("Referal_Window","ReferalWithoutIsland")})},window.GetReferalTown=function(e){r.getReferalIsland(Number(e)).then(n=>{t.value.SendMessage("GameManager","OnSetReferalTown",n)})},window.window.GetBuildings=function(){r.getUserBuildings().then(e=>{t.value.SendMessage("GameManager","OnSetMyTown",e)})},window.GetReferalSkins=function(e){r.getReferalSkins(Number(e)).then(n=>{t.value.SendMessage("GameManager","OnInitSkins",n)})},window.IncreaseFood=function(e){if(a.user){if(a.user.balance<Number(e)){p().showAlert("Недостаточно коинов 🐥");return}r.onSetFood(Number(e)).then(n=>{if(n){if(!a.user)return;a.user.balance-=Number(e),t.value.SendMessage("FoodSlider","OnAcceptFood")}})}},N(async()=>{var n,s;if(((n=a.user)==null?void 0:n.id)!=null&&(S.value=(s=a.user)==null?void 0:s.id),/iPhone|iPad|iPod|Android/i.test(navigator.userAgent)){const d=document.createElement("meta");d.name="viewport",d.content="width=device-width, height=device-height, initial-scale=1.0, user-scalable=no, shrink-to-fit=yes",document.getElementsByTagName("head")[0].appendChild(d),v.value="unity-mobile",w.value=window.innerWidth,h.value=window.innerHeight}f.value=!0;const e=document.createElement("script");e.src=_,e.onload=async()=>{try{t.value=await createUnityInstance(m.value,b,k),f.value=!1}catch(d){alert(d)}},document.body.appendChild(e)}),G(()=>{t.value&&t.value.Quit().then(()=>{t.value=null})}),(e,n)=>(O(),R("div",{id:"unity-container",class:F(v.value)},[i("canvas",{id:"unity-canvas",ref_key:"canvas",ref:m,width:w.value,height:h.value,tabindex:"-1"},null,8,z),U(i("div",J,[$,i("div",H,[i("div",{id:"unity-progress-bar-full",style:C({width:y.value})},null,4)])],512),[[T,f.value]]),i("div",{id:"unity-warning",ref_key:"warningBanner",ref:l},null,512),i("div",{id:"unity-footer"},[P,i("div",{id:"unity-fullscreen-button",onClick:M}),V])],2))}}),K=A(j,[["__scopeId","data-v-44fc4bfc"]]);export{K as default};
