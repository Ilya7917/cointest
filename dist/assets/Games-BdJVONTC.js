import{d as f,r as i,o as U,K as F,b as h,c as y,e as n,y as x,L as A,n as I,x as S,A as E,B as H,_ as P,F as M,p as j,t as J,q as b,m as k}from"./index-BgN4YnN6.js";const L="/assets/FlappyDickIcon-DNwds_MM.png",R="/assets/DickleJump-CeQozLm6.png",V="/assets/AngryBirds-D-uAwMfF.jpg",Q="/assets/HillClimp-CjW4DEEc.png",N=l=>(E("data-v-70f8b75f"),l=l(),H(),l),z=["width","height"],q={id:"unity-loading-bar"},K=N(()=>n("div",{id:"unity-logo"},null,-1)),O={id:"unity-progress-bar-empty"},Y=N(()=>n("div",{id:"unity-webgl-logo"},null,-1)),X=N(()=>n("div",{id:"unity-build-title"},"FlappyDick",-1)),$="/Build",Z=f({__name:"Game",setup(l){const r=i("unity-desktop"),c=i(960),v=i(600),m=i("0%"),d=i(!0),u=i(null),a=i(null),o=i(null),p=`${$}/buildes.loader.js`,g={dataUrl:`${$}/buildes.data`,frameworkUrl:`${$}/buildes.framework.js`,codeUrl:`${$}/buildes.wasm`,streamingAssetsUrl:"StreamingAssets",companyName:"DefaultCompany",productName:"FlappyDick",productVersion:"0.1",showBanner:(e,t)=>{if(o.value){const s=document.createElement("div");s.innerHTML=e,o.value.appendChild(s),t==="error"?s.style.background="red":t==="warning"&&(s.style.background="yellow"),s.style.padding="10px",setTimeout(()=>{o.value&&o.value.removeChild(s)},5e3)}}},_=e=>{m.value=`${100*e}%`},w=()=>{var e;(e=a.value)==null||e.SetFullscreen(1)};return U(async()=>{if(/iPhone|iPad|iPod|Android/i.test(navigator.userAgent)){const t=document.createElement("meta");t.name="viewport",t.content="width=device-width, height=device-height, initial-scale=1.0, user-scalable=no, shrink-to-fit=yes",document.getElementsByTagName("head")[0].appendChild(t),r.value="unity-mobile",c.value=window.innerWidth,v.value=window.innerHeight}d.value=!0;const e=document.createElement("script");e.src=p,e.onload=async()=>{try{a.value=await createUnityInstance(u.value,g,_),d.value=!1}catch(t){alert(t)}},document.body.appendChild(e)}),F(()=>{a.value&&a.value.Quit().then(()=>{a.value=null})}),(e,t)=>(h(),y("div",{id:"unity-container",class:S(r.value)},[n("canvas",{id:"unity-canvas",ref_key:"canvas",ref:u,width:c.value,height:v.value,tabindex:"-1"},null,8,z),x(n("div",q,[K,n("div",O,[n("div",{id:"unity-progress-bar-full",style:I({width:m.value})},null,4)])],512),[[A,d.value]]),n("div",{id:"unity-warning",ref_key:"warningBanner",ref:o},null,512),n("div",{id:"unity-footer"},[Y,n("div",{id:"unity-fullscreen-button",onClick:w}),X])],2))}}),ee=P(Z,[["__scopeId","data-v-70f8b75f"]]),T=l=>(E("data-v-839af45b"),l=l(),H(),l),ne=["width","height"],te={id:"unity-loading-bar"},ie=T(()=>n("div",{id:"unity-logo"},null,-1)),ae={id:"unity-progress-bar-empty"},se=T(()=>n("div",{id:"unity-webgl-logo"},null,-1)),oe=T(()=>n("div",{id:"unity-build-title"},"FlappyDick",-1)),C="/BuildJump",le=f({__name:"GameJump",setup(l){window.MyJSFunction=function(e){console.log(e)};const r=i("unity-desktop"),c=i(960),v=i(600),m=i("0%"),d=i(!0),u=i(null),a=i(null),o=i(null),p=`${C}/buildes.loader.js`,g={dataUrl:`${C}/buildes.data`,frameworkUrl:`${C}/buildes.framework.js`,codeUrl:`${C}/buildes.wasm`,streamingAssetsUrl:"StreamingAssets",companyName:"DefaultCompany",productName:"FlappyDick",productVersion:"0.1",showBanner:(e,t)=>{if(o.value){const s=document.createElement("div");s.innerHTML=e,o.value.appendChild(s),t==="error"?s.style.background="red":t==="warning"&&(s.style.background="yellow"),s.style.padding="10px",setTimeout(()=>{o.value&&o.value.removeChild(s)},5e3)}}},_=e=>{m.value=`${100*e}%`},w=()=>{var e;(e=a.value)==null||e.SetFullscreen(1)};return U(async()=>{if(/iPhone|iPad|iPod|Android/i.test(navigator.userAgent)){const t=document.createElement("meta");t.name="viewport",t.content="width=device-width, height=device-height, initial-scale=1.0, user-scalable=no, shrink-to-fit=yes",document.getElementsByTagName("head")[0].appendChild(t),r.value="unity-mobile",c.value=window.innerWidth,v.value=window.innerHeight}d.value=!0;const e=document.createElement("script");e.src=p,e.onload=async()=>{try{a.value=await createUnityInstance(u.value,g,_),d.value=!1}catch(t){alert(t)}},document.body.appendChild(e)}),F(()=>{a.value&&a.value.Quit().then(()=>{a.value=null})}),(e,t)=>(h(),y("div",{id:"unity-container",class:S(r.value)},[n("canvas",{id:"unity-canvas",ref_key:"canvas",ref:u,width:c.value,height:v.value,tabindex:"-1"},null,8,ne),x(n("div",te,[ie,n("div",ae,[n("div",{id:"unity-progress-bar-full",style:I({width:m.value})},null,4)])],512),[[A,d.value]]),n("div",{id:"unity-warning",ref_key:"warningBanner",ref:o},null,512),n("div",{id:"unity-footer"},[se,n("div",{id:"unity-fullscreen-button",onClick:w}),oe])],2))}}),de=P(le,[["__scopeId","data-v-839af45b"]]),W=l=>(E("data-v-da5c7648"),l=l(),H(),l),ce=["width","height"],re={id:"unity-loading-bar"},ue=W(()=>n("div",{id:"unity-logo"},null,-1)),ve={id:"unity-progress-bar-empty"},me=W(()=>n("div",{id:"unity-webgl-logo"},null,-1)),he=W(()=>n("div",{id:"unity-build-title"},"FlappyDick",-1)),B="/BuildRace",pe=f({__name:"GameRace",setup(l){window.MyJSFunction=function(e){console.log(e)};const r=i("unity-desktop"),c=i(960),v=i(600),m=i("0%"),d=i(!0),u=i(null),a=i(null),o=i(null),p=`${B}/buildes.loader.js`,g={dataUrl:`${B}/buildes.data`,frameworkUrl:`${B}/buildes.framework.js`,codeUrl:`${B}/buildes.wasm`,streamingAssetsUrl:"StreamingAssets",companyName:"DefaultCompany",productName:"FlappyDick",productVersion:"0.1",showBanner:(e,t)=>{if(o.value){const s=document.createElement("div");s.innerHTML=e,o.value.appendChild(s),t==="error"?s.style.background="red":t==="warning"&&(s.style.background="yellow"),s.style.padding="10px",setTimeout(()=>{o.value&&o.value.removeChild(s)},5e3)}}},_=e=>{m.value=`${100*e}%`},w=()=>{var e;(e=a.value)==null||e.SetFullscreen(1)};return U(async()=>{if(/iPhone|iPad|iPod|Android/i.test(navigator.userAgent)){const t=document.createElement("meta");t.name="viewport",t.content="width=device-width, height=device-height, initial-scale=1.0, user-scalable=no, shrink-to-fit=yes",document.getElementsByTagName("head")[0].appendChild(t),r.value="unity-mobile",c.value=window.innerWidth,v.value=window.innerHeight}d.value=!0;const e=document.createElement("script");e.src=p,e.onload=async()=>{try{a.value=await createUnityInstance(u.value,g,_),d.value=!1}catch(t){alert(t)}},document.body.appendChild(e)}),F(()=>{a.value&&a.value.Quit().then(()=>{a.value=null})}),(e,t)=>(h(),y("div",{id:"unity-container",class:S(r.value)},[n("canvas",{id:"unity-canvas",ref_key:"canvas",ref:u,width:c.value,height:v.value,tabindex:"-1"},null,8,ce),x(n("div",re,[ue,n("div",ve,[n("div",{id:"unity-progress-bar-full",style:I({width:m.value})},null,4)])],512),[[A,d.value]]),n("div",{id:"unity-warning",ref_key:"warningBanner",ref:o},null,512),n("div",{id:"unity-footer"},[me,n("div",{id:"unity-fullscreen-button",onClick:w}),he])],2))}}),ye=P(pe,[["__scopeId","data-v-da5c7648"]]),G=l=>(E("data-v-cdb81207"),l=l(),H(),l),ge=["width","height"],_e={id:"unity-loading-bar"},we=G(()=>n("div",{id:"unity-logo"},null,-1)),fe={id:"unity-progress-bar-empty"},be=G(()=>n("div",{id:"unity-webgl-logo"},null,-1)),ke=G(()=>n("div",{id:"unity-build-title"},"FlappyDick",-1)),D="/BuildBirds",$e=f({__name:"GameBird",setup(l){window.MyJSFunction=function(e){console.log(e)};const r=i("unity-desktop"),c=i(960),v=i(600),m=i("0%"),d=i(!0),u=i(null),a=i(null),o=i(null),p=`${D}/buildes.loader.js`,g={dataUrl:`${D}/buildes.data`,frameworkUrl:`${D}/buildes.framework.js`,codeUrl:`${D}/buildes.wasm`,streamingAssetsUrl:"StreamingAssets",companyName:"DefaultCompany",productName:"FlappyDick",productVersion:"0.1",showBanner:(e,t)=>{if(o.value){const s=document.createElement("div");s.innerHTML=e,o.value.appendChild(s),t==="error"?s.style.background="red":t==="warning"&&(s.style.background="yellow"),s.style.padding="10px",setTimeout(()=>{o.value&&o.value.removeChild(s)},5e3)}}},_=e=>{m.value=`${100*e}%`},w=()=>{var e;(e=a.value)==null||e.SetFullscreen(1)};return U(async()=>{if(/iPhone|iPad|iPod|Android/i.test(navigator.userAgent)){const t=document.createElement("meta");t.name="viewport",t.content="width=device-width, height=device-height, initial-scale=1.0, user-scalable=no, shrink-to-fit=yes",document.getElementsByTagName("head")[0].appendChild(t),r.value="unity-mobile",c.value=window.innerWidth,v.value=window.innerHeight}d.value=!0;const e=document.createElement("script");e.src=p,e.onload=async()=>{try{a.value=await createUnityInstance(u.value,g,_),d.value=!1}catch(t){alert(t)}},document.body.appendChild(e)}),F(()=>{a.value&&a.value.Quit().then(()=>{a.value=null})}),(e,t)=>(h(),y("div",{id:"unity-container",class:S(r.value)},[n("canvas",{id:"unity-canvas",ref_key:"canvas",ref:u,width:c.value,height:v.value,tabindex:"-1"},null,8,ge),x(n("div",_e,[we,n("div",fe,[n("div",{id:"unity-progress-bar-full",style:I({width:m.value})},null,4)])],512),[[A,d.value]]),n("div",{id:"unity-warning",ref_key:"warningBanner",ref:o},null,512),n("div",{id:"unity-footer"},[be,n("div",{id:"unity-fullscreen-button",onClick:w}),ke])],2))}}),Ce=P($e,[["__scopeId","data-v-cdb81207"]]),Be={class:"bg"},De={key:0,style:{overflowY:"auto",display:"flex",flexDirection:"column",gap:"30px",marginTop:"20px",marginBottom:"20px"}},Ue=["onClick"],Fe={class:"post"},xe={class:"postImage"},Ae=["src"],Ie={class:"postDescription",style:{display:"flex",alignItems:"center",justifyContent:"center"}},Se={key:1},He=f({__name:"Games",setup(l){const r=i(!1),c=i("");window.MyJSFunction=function(d){console.log(d)};const v=(d,u)=>{window.scrollTo(0,0),c.value=u,r.value=d},m=[{name:"FlappyDick",img:L},{name:"DickleJump",img:R},{name:"HillDickRace",img:Q},{name:"AngryDick",img:V}];return(d,u)=>(h(),y("div",Be,[r.value?(h(),y("div",Se,[c.value=="FlappyDick"?(h(),b(ee,{key:0})):k("",!0),c.value=="DickleJump"?(h(),b(de,{key:1})):k("",!0),c.value=="HillDickRace"?(h(),b(ye,{key:2})):k("",!0),c.value=="AngryDick"?(h(),b(Ce,{key:3})):k("",!0)])):(h(),y("div",De,[(h(),y(M,null,j(m,(a,o)=>n("div",{onClick:p=>v(!0,a.name),style:{width:"60%",margin:"0 auto"}},[n("div",Fe,[n("div",xe,[n("img",{src:a.img,style:{maxWidth:"100%",height:"auto",width:"100%",borderRadius:"20px"}},null,8,Ae)]),n("div",Ie,[n("span",null,J(a.name),1)])])],8,Ue)),64))]))]))}});export{He as default};
