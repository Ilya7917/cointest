import{d as b,r as i,o as x,b as p,c as h,e,y as F,K as I,n as U,x as S,A,B as E,_ as J,F as N,p as P,t as G,q as B,m as D}from"./index-Du0zeMay.js";const M="/assets/FlappyDickIcon-DNwds_MM.png",T="/assets/dickJump-D4YsgmPI.png",$=l=>(A("data-v-31fe3355"),l=l(),E(),l),W=["width","height"],H={id:"unity-loading-bar"},j=$(()=>e("div",{id:"unity-logo"},null,-1)),V={id:"unity-progress-bar-empty"},L=$(()=>e("div",{id:"unity-webgl-logo"},null,-1)),z=$(()=>e("div",{id:"unity-build-title"},"FlappyDick",-1)),g="/Build",q=b({__name:"Game",setup(l){const r=i("unity-desktop"),c=i(960),v=i(600),m=i("0%"),s=i(!0),u=i(null),d=i(null),o=i(null),y=`${g}/buildes.loader.js`,w={dataUrl:`${g}/buildes.data`,frameworkUrl:`${g}/buildes.framework.js`,codeUrl:`${g}/buildes.wasm`,streamingAssetsUrl:"StreamingAssets",companyName:"DefaultCompany",productName:"FlappyDick",productVersion:"0.1",showBanner:(t,n)=>{if(o.value){const a=document.createElement("div");a.innerHTML=t,o.value.appendChild(a),n==="error"?a.style.background="red":n==="warning"&&(a.style.background="yellow"),a.style.padding="10px",setTimeout(()=>{o.value&&o.value.removeChild(a)},5e3)}}},f=t=>{m.value=`${100*t}%`},k=()=>{var t;(t=d.value)==null||t.SetFullscreen(1)};return x(async()=>{if(/iPhone|iPad|iPod|Android/i.test(navigator.userAgent)){const n=document.createElement("meta");n.name="viewport",n.content="width=device-width, height=device-height, initial-scale=1.0, user-scalable=no, shrink-to-fit=yes",document.getElementsByTagName("head")[0].appendChild(n),r.value="unity-mobile",c.value=window.innerWidth,v.value=window.innerHeight}s.value=!0;const t=document.createElement("script");t.src=y,t.onload=async()=>{try{d.value=await createUnityInstance(u.value,w,f),s.value=!1}catch(n){alert(n)}},document.body.appendChild(t)}),(t,n)=>(p(),h("div",{id:"unity-container",class:S(r.value)},[e("canvas",{id:"unity-canvas",ref_key:"canvas",ref:u,width:c.value,height:v.value,tabindex:"-1"},null,8,W),F(e("div",H,[j,e("div",V,[e("div",{id:"unity-progress-bar-full",style:U({width:m.value})},null,4)])],512),[[I,s.value]]),e("div",{id:"unity-warning",ref_key:"warningBanner",ref:o},null,512),e("div",{id:"unity-footer"},[L,e("div",{id:"unity-fullscreen-button",onClick:k}),z])],2))}}),K=J(q,[["__scopeId","data-v-31fe3355"]]),C=l=>(A("data-v-3005970c"),l=l(),E(),l),O=["width","height"],R={id:"unity-loading-bar"},Y=C(()=>e("div",{id:"unity-logo"},null,-1)),Q={id:"unity-progress-bar-empty"},X=C(()=>e("div",{id:"unity-webgl-logo"},null,-1)),Z=C(()=>e("div",{id:"unity-build-title"},"FlappyDick",-1)),_="/BuildJump",ee=b({__name:"GameJump",setup(l){window.MyJSFunction=function(t){console.log(t)};const r=i("unity-desktop"),c=i(960),v=i(600),m=i("0%"),s=i(!0),u=i(null),d=i(null),o=i(null),y=`${_}/buildes.loader.js`,w={dataUrl:`${_}/buildes.data`,frameworkUrl:`${_}/buildes.framework.js`,codeUrl:`${_}/buildes.wasm`,streamingAssetsUrl:"StreamingAssets",companyName:"DefaultCompany",productName:"FlappyDick",productVersion:"0.1",showBanner:(t,n)=>{if(o.value){const a=document.createElement("div");a.innerHTML=t,o.value.appendChild(a),n==="error"?a.style.background="red":n==="warning"&&(a.style.background="yellow"),a.style.padding="10px",setTimeout(()=>{o.value&&o.value.removeChild(a)},5e3)}}},f=t=>{m.value=`${100*t}%`},k=()=>{var t;(t=d.value)==null||t.SetFullscreen(1)};return x(async()=>{if(/iPhone|iPad|iPod|Android/i.test(navigator.userAgent)){const n=document.createElement("meta");n.name="viewport",n.content="width=device-width, height=device-height, initial-scale=1.0, user-scalable=no, shrink-to-fit=yes",document.getElementsByTagName("head")[0].appendChild(n),r.value="unity-mobile",c.value=window.innerWidth,v.value=window.innerHeight}s.value=!0;const t=document.createElement("script");t.src=y,t.onload=async()=>{try{d.value=await createUnityInstance(u.value,w,f),s.value=!1}catch(n){alert(n)}},document.body.appendChild(t)}),(t,n)=>(p(),h("div",{id:"unity-container",class:S(r.value)},[e("canvas",{id:"unity-canvas",ref_key:"canvas",ref:u,width:c.value,height:v.value,tabindex:"-1"},null,8,O),F(e("div",R,[Y,e("div",Q,[e("div",{id:"unity-progress-bar-full",style:U({width:m.value})},null,4)])],512),[[I,s.value]]),e("div",{id:"unity-warning",ref_key:"warningBanner",ref:o},null,512),e("div",{id:"unity-footer"},[X,e("div",{id:"unity-fullscreen-button",onClick:k}),Z])],2))}}),te=J(ee,[["__scopeId","data-v-3005970c"]]),ne={class:"bg"},ie=["onClick"],ae={class:"post"},se={class:"postImage"},oe=["src"],le={class:"postDescription",style:{display:"flex",alignItems:"center",justifyContent:"center"}},ce={key:1},re=b({__name:"Games",setup(l){const r=i(!1),c=i("");window.MyJSFunction=function(s){console.log(s)};const v=(s,u)=>{c.value=u,r.value=s},m=[{name:"FlappyDick",img:M},{name:"DickJump",img:T}];return(s,u)=>(p(),h("div",ne,[r.value?(p(),h("div",ce,[c.value=="FlappyDick"?(p(),B(K,{key:0})):D("",!0),c.value=="DickJump"?(p(),B(te,{key:1})):D("",!0)])):(p(),h(N,{key:0},P(m,(d,o)=>e("div",{onClick:y=>v(!0,d.name),style:{width:"60%",margin:"0 auto",marginTop:"30px"}},[e("div",ae,[e("div",se,[e("img",{src:d.img,style:{maxWidth:"100%",height:"auto",width:"100%",borderRadius:"20px"}},null,8,oe)]),e("div",le,[e("span",null,G(d.name),1)])])],8,ie)),64))]))}});export{re as default};
