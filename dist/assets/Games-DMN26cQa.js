import{d as y,r as s,o as $,b as m,c as p,e,y as x,K as B,n as C,x as U,A as I,B as D,_ as F,F as S,p as L,t as N,g as A}from"./index-CcOXexdZ.js";const E="/assets/FlappyDickIcon-DNwds_MM.png",g=o=>(I("data-v-ddd183b1"),o=o(),D(),o),R=["width","height"],G={id:"unity-loading-bar"},M=g(()=>e("div",{id:"unity-logo"},null,-1)),P={id:"unity-progress-bar-empty"},T=g(()=>e("div",{id:"unity-webgl-logo"},null,-1)),W=g(()=>e("div",{id:"unity-build-title"},"FlappyDick",-1)),u="./Build",j=y({__name:"Game",setup(o){const r=s("unity-desktop"),c=s(960),v=s(600),l=s("0%"),a=s(!0),h=s(null),_=s(null),d=s(null),f=new URL(`${u}/buildes.loader.js`,import.meta.url).href,w={dataUrl:new URL(`${u}/buildes.data`,import.meta.url).href,frameworkUrl:new URL(`${u}/buildes.framework.js`,import.meta.url).href,codeUrl:new URL(`${u}/buildes.wasm`,import.meta.url).href,streamingAssetsUrl:"StreamingAssets",companyName:"DefaultCompany",productName:"FlappyDick",productVersion:"0.1",showBanner:(t,n)=>{if(d.value){const i=document.createElement("div");i.innerHTML=t,d.value.appendChild(i),n==="error"?i.style.background="red":n==="warning"&&(i.style.background="yellow"),i.style.padding="10px",setTimeout(()=>{d.value&&d.value.removeChild(i)},5e3)}}},b=t=>{l.value=`${100*t}%`},k=()=>{var t;(t=_.value)==null||t.SetFullscreen(1)};return $(async()=>{if(/iPhone|iPad|iPod|Android/i.test(navigator.userAgent)){const n=document.createElement("meta");n.name="viewport",n.content="width=device-width, height=device-height, initial-scale=1.0, user-scalable=no, shrink-to-fit=yes",document.getElementsByTagName("head")[0].appendChild(n),r.value="unity-mobile",c.value=window.innerWidth,v.value=window.innerHeight}a.value=!0;const t=document.createElement("script");t.src=f,t.onload=async()=>{try{_.value=await createUnityInstance(h.value,w,b),a.value=!1}catch(n){alert(n)}},document.body.appendChild(t)}),(t,n)=>(m(),p("div",{id:"unity-container",class:U(r.value)},[e("canvas",{id:"unity-canvas",ref_key:"canvas",ref:h,width:c.value,height:v.value,tabindex:"-1"},null,8,R),x(e("div",G,[M,e("div",P,[e("div",{id:"unity-progress-bar-full",style:C({width:l.value})},null,4)])],512),[[B,a.value]]),e("div",{id:"unity-warning",ref_key:"warningBanner",ref:d},null,512),e("div",{id:"unity-footer"},[T,e("div",{id:"unity-fullscreen-button",onClick:k}),W])],2))}}),H=F(j,[["__scopeId","data-v-ddd183b1"]]),V={class:"bg"},z={class:"post"},K={class:"postImage"},q=["src"],J={class:"postDescription",style:{display:"flex",alignItems:"center",justifyContent:"center"}},O={key:1},X=y({__name:"Games",setup(o){const r=s(!1),c=[{name:"FlappyDick",img:E}];return(v,l)=>(m(),p("div",V,[r.value?(m(),p("div",O,[A(H)])):(m(),p(S,{key:0},L(c,(a,h)=>e("div",{onClick:l[0]||(l[0]=_=>r.value=!0),style:{width:"60%",margin:"0 auto",marginTop:"30px"}},[e("div",z,[e("div",K,[e("img",{src:a.img,style:{maxWidth:"100%",height:"auto",width:"100%",borderRadius:"20px"}},null,8,q)]),e("div",J,[e("span",null,N(a.name),1)])])])),64))]))}});export{X as default};
