import{d as y,r as s,o as $,b as p,c as m,e,y as x,K as B,n as C,x as D,A as I,B as F,_ as S,F as U,p as A,t as E,g as N}from"./index-DFhcN5qi.js";const g=o=>(I("data-v-888f2500"),o=o(),F(),o),G=["width","height"],P={id:"unity-loading-bar"},T=g(()=>e("div",{id:"unity-logo"},null,-1)),W={id:"unity-progress-bar-empty"},j=g(()=>e("div",{id:"unity-webgl-logo"},null,-1)),H=g(()=>e("div",{id:"unity-build-title"},"FlappyDick",-1)),u="src/components/games/DickBird/Build",V=y({__name:"Game",setup(o){const l=s("unity-desktop"),c=s(960),v=s(600),r=s("0%"),a=s(!0),h=s(null),_=s(null),d=s(null),f=`${u}/buildes.loader.js`,w={dataUrl:`${u}/buildes.data`,frameworkUrl:`${u}/buildes.framework.js`,codeUrl:`${u}/buildes.wasm`,streamingAssetsUrl:"StreamingAssets",companyName:"DefaultCompany",productName:"FlappyDick",productVersion:"0.1",showBanner:(t,n)=>{if(d.value){const i=document.createElement("div");i.innerHTML=t,d.value.appendChild(i),n==="error"?i.style.background="red":n==="warning"&&(i.style.background="yellow"),i.style.padding="10px",setTimeout(()=>{d.value&&d.value.removeChild(i)},5e3)}}},b=t=>{r.value=`${100*t}%`},k=()=>{var t;(t=_.value)==null||t.SetFullscreen(1)};return $(async()=>{if(/iPhone|iPad|iPod|Android/i.test(navigator.userAgent)){const n=document.createElement("meta");n.name="viewport",n.content="width=device-width, height=device-height, initial-scale=1.0, user-scalable=no, shrink-to-fit=yes",document.getElementsByTagName("head")[0].appendChild(n),l.value="unity-mobile",c.value=window.innerWidth,v.value=window.innerHeight}a.value=!0;const t=document.createElement("script");t.src=f,t.onload=async()=>{try{_.value=await createUnityInstance(h.value,w,b),a.value=!1}catch(n){alert(n)}},document.body.appendChild(t)}),(t,n)=>(p(),m("div",{id:"unity-container",class:D(l.value)},[e("canvas",{id:"unity-canvas",ref_key:"canvas",ref:h,width:c.value,height:v.value,tabindex:"-1"},null,8,G),x(e("div",P,[T,e("div",W,[e("div",{id:"unity-progress-bar-full",style:C({width:r.value})},null,4)])],512),[[B,a.value]]),e("div",{id:"unity-warning",ref_key:"warningBanner",ref:d},null,512),e("div",{id:"unity-footer"},[j,e("div",{id:"unity-fullscreen-button",onClick:k}),H])],2))}}),z=S(V,[["__scopeId","data-v-888f2500"]]),L={class:"bg"},M={class:"post"},K={class:"postImage"},R=["src"],q={class:"postDescription",style:{display:"flex",alignItems:"center",justifyContent:"center"}},J={key:1},Q=y({__name:"Games",setup(o){const l=s(!1),c=[{name:"FlappyDick",img:"src/assets/images/flappybird/FlappyDickIcon.png"}];return(v,r)=>(p(),m("div",L,[l.value?(p(),m("div",J,[N(z)])):(p(),m(U,{key:0},A(c,(a,h)=>e("div",{onClick:r[0]||(r[0]=_=>l.value=!0),style:{width:"60%",margin:"0 auto",marginTop:"30px"}},[e("div",M,[e("div",K,[e("img",{src:a.img,style:{maxWidth:"100%",height:"auto",width:"100%",borderRadius:"20px"}},null,8,R)]),e("div",q,[e("span",null,E(a.name),1)])])])),64))]))}});export{Q as default};