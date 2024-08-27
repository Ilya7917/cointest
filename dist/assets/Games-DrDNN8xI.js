import{d as y,r as D,K as P,o as W,b as d,c as m,f as k,_ as X,F as R,p as F,e as o,t as q,g as U}from"./index-DtfPuSzW.js";const Z="data:image/png;base64,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",H="/assets/toppipe-CONL2PM-.png",V="/assets/bottompipe-ujlCikwR.png",z=["width","height"],j=34,L=24,G=64,c=512,K=0,$=.4,x=1500,AA=y({__name:"Bird",props:{changeOpenGame:{type:Function,required:!0}},setup(w){const s=w,n=window.innerWidth,g=window.innerHeight,E=n/8,r=g/2,B=n,a=D(null);let t=null;const f=new Image;f.src=Z;const p=new Image;p.src=H;const u=new Image;u.src=V;const A=P({bird:{x:E,y:r,width:j,height:L},pipes:[],velocityX:-2,velocityY:0,gameOver:!1,score:0});let I,h;W(()=>{a.value&&(t=a.value.getContext("2d"),b(),a.value.addEventListener("click",function(e){var S;if(a.value==null)return;const i=n-50,C=45,Q=30,N=30,M=a.value.getBoundingClientRect(),Y=e.clientX-M.left,J=e.clientY-M.top;Y>=i&&Y<=i+Q&&J>=C-N&&J<=C&&((S=s.changeOpenGame)==null||S.call(s,!1))}))});function b(){document.addEventListener("click",T),h=window.setInterval(v,x),requestAnimationFrame(l)}function l(){t&&(I=requestAnimationFrame(l),!A.gameOver&&(t.clearRect(0,0,n,g),A.velocityY+=$,A.bird.y=Math.max(A.bird.y+A.velocityY,0),t.drawImage(f,A.bird.x,A.bird.y,A.bird.width,A.bird.height),A.bird.y+A.bird.height>=g&&(A.gameOver=!0),A.pipes.forEach(e=>{e.x+=A.velocityX,t==null||t.drawImage(e.img,e.x,e.y,e.width,e.height),!e.passed&&A.bird.x>e.x+e.width&&(A.score+=.5,e.passed=!0),O(A.bird,e)&&(A.gameOver=!0)}),A.pipes=A.pipes.filter(e=>e.x+e.width>0),t.fillStyle="white",t.font="45px sans-serif",t.fillText(`${Math.floor(A.score)}`,5,45),t.fillText("❌",n-60,45),A.gameOver&&(t.fillText("GAME OVER",50,g/2),cancelAnimationFrame(I),clearInterval(h))))}function v(){if(A.gameOver)return;const e=K-c/4-Math.random()*(c/2),i=g/4,C={img:p,x:B,y:e,width:G,height:c,passed:!1},Q={img:u,x:B,y:e+c+i,width:G,height:c,passed:!1};A.pipes.push(C,Q)}function T(e){A.velocityY=-6,A.gameOver&&_()}function _(){A.bird.y=r,A.pipes=[],A.score=0,A.velocityY=0,A.gameOver=!1,I=requestAnimationFrame(l),h=window.setInterval(v,x)}function O(e,i){return e.x<i.x+i.width&&e.x+e.width>i.x&&e.y<i.y+i.height&&e.y+e.height>i.y}return(e,i)=>(d(),m("canvas",{ref_key:"board",ref:a,width:k(n),height:k(g)},null,8,z))}}),eA=X(AA,[["__scopeId","data-v-aa9e88c6"]]),tA="/assets/duckBird-Bpszv8sD.png",iA={class:"bg"},nA={class:"post"},gA={class:"postImage"},sA=["src"],aA={class:"postDescription",style:{display:"flex",alignItems:"center",justifyContent:"center"}},oA={key:1},BA=y({__name:"Games",setup(w){const s=D(!1),n=E=>{s.value=E},g=[{name:"DickBird",img:tA}];return(E,r)=>(d(),m("div",iA,[s.value?(d(),m("div",oA,[U(eA,{changeOpenGame:n})])):(d(),m(R,{key:0},F(g,(B,a)=>o("div",{onClick:r[0]||(r[0]=t=>s.value=!0),style:{width:"60%",margin:"0 auto",marginTop:"30px"}},[o("div",nA,[o("div",gA,[o("img",{src:B.img,style:{maxWidth:"100%",height:"auto",width:"100%",borderRadius:"20px"}},null,8,sA)]),o("div",aA,[o("span",null,q(B.name),1)])])])),64))]))}});export{BA as default};
