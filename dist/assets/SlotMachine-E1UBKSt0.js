import{k as A,u as p,l as b,_ as C,A as I,b as d,c as u,e as i,t as m,n as L,F as S,v as B,z,I as W,q as w}from"./index-qEhbwDn3.js";const T=A("slotmachinestore",{state:()=>({reels:[],winLines:[],isSpinning:!1,isAutoSpinOn:!1,showPayLines:!1,credits:100,bet:1}),actions:{async spin(s){const t=p(),n=await b.post("https://taptaptap.testcoin.uk/spin",{bet:s},{headers:{"x-api-key":t.getAccessToken}});return n.data.sucess&&t.user!=null&&(t.user.balance-=s),n.data},async setWin(s,t){const n=p(),o=await b.post("https://taptaptap.testcoin.uk/reward",{win_amount:s,number:t},{headers:{"x-api-key":n.getAccessToken}});return console.log(o),o.data.sucess&&n.user!=null&&(n.user.withdrawal_balance+=s),o.data}}}),R="/assets/RotateEffect-CVAmP2t-.png",c=12,M=150/1.5,x=T(),v=p(),P={data(){return{xray:!1,perspective:!0,mode:"single",showSpinButtons:!0,showWinScreen:!1,bet:100,winAmount:0,showLines:!1,symbols:["🍒","🍔","🍕","🍌","🥑","🍍","🍉","🍇","🍓","🍑","🍈","🍋"],currentAngles:[0,0,0,0,0],visibleSlots:[],lastWinningPattern:null,lines:[[[1,4,7,10,13],[0,3,6,9,12],[2,5,8,11,14]],[[1,3,8,9,13],[2,3,7,9,14]],[[1,4,6,10,13],[2,5,6,11,14]],[[2,3,6,9,14],[1,3,6,9,13]],[[0,3,7,9,12],[0,3,8,9,12]]],colors:[[{color:"yellow"},{color:"blue"},{color:"purple"}],[{color:"brown"},{color:"orange"}]],printingLines:[],numberInRandoms:5,ringIds:["ring1","ring2","ring3","ring4","ring5"],allSlots:[],winColors:["lightgreen","blue","lightgreen","orange","purple"],winPercents:[10,20,25,30]}},mounted(){for(let s=0;s<this.ringIds.length;s++)this.createSlots(document.getElementById(this.ringIds[s]),s+1);this.highlightVisibleSlots()},methods:{createShowLine(s,t,n,o){console.log(s,t);const e=document.createElement("div");return e.className="myLine",e.style.position="absolute",e.style.top=n=="horizontal"?"65%":"50%",e.style.left="0%",e.style.width="100%",e.style.height="2px",e.style.backgroundColor=this.colors[s][t].color,e.style.transform="translateY(-50%)",n=="zigZag"&&(t==0?e.style.transform=o<=2?"rotate(45deg)":"rotate(-45deg)":e.style.transform=o<=2?"rotate(-45deg)":"rotate(45deg)"),e},showWinningLines(s){console.log(this.printingLines),s?this.lines.forEach((t,n)=>{n>1||t.forEach((o,e)=>{o.forEach((r,l)=>{let a="";n==0&&(a="horizontal"),n==1&&(a="zigZag");let g=this.createShowLine(n,e,a,l);const h=document.getElementById(this.visibleSlots[r].id);h.style.backgroundColor="gray",h.appendChild(g),this.printingLines.push(g)})})}):(this.printingLines.forEach(t=>t.remove()),this.printingLines=[],this.lines.forEach(t=>{t.forEach(n=>{n.forEach(o=>{const e=document.getElementById(this.visibleSlots[o].id);e.style.backgroundColor="white"})})})),console.log(this.printingLines)},createSlots(s,t){const n=360/c,o=this.getSeed(t);for(let e=0;e<c;e++){const r=document.createElement("div");r.className="slot",r.id=`ring${t}-slot-${e}`;const l=`rotateX(${n*e}deg) translateZ(${M}px)`;r.style.transform=l,r.innerHTML=`<p>${this.symbols[(o+e)%c]}</p>`,this.allSlots.push(r),s.appendChild(r)}},getRandom(){return Math.floor(Math.random()*this.numberInRandoms)+1},getSeed(s){return this.getRandom()},startSpinning(s){if(v.user!=null){if(v.user.balance<this.bet){I().showAlert("У вас недостаточно 🍆 чтобы крутить слоты"),this.mode="single",this.showSpinButtons=!0;return}x.spin(this.bet).then(t=>{if(t.sucess){this.mode=s,this.numberInRandoms=t.number,console.log(`Number in randoms: ${this.numberInRandoms}`),this.allSlots.forEach(o=>o.remove());for(let o=0;o<this.ringIds.length;o++)this.createSlots(document.getElementById(this.ringIds[o]),o+1);this.showSpinButtons=!1,this.clearHighlight(),this.resetAnimation(),this.currentAngles=[0,0,0,0,0],this.visibleSlots=[];const n=2;for(let o=1;o<=5;o++){const e=this.getSeed(o);console.log(e);const r=-360*3+e*(360/c);this.currentAngles[o-1]=r;const l=document.getElementById("ring"+o);l.style.transition=`transform ${n+o*.5}s ease-out`,l.style.transform=`rotateX(${r}deg)`}setTimeout(()=>{this.highlightVisibleSlots(),this.ensureWinningCombination()},(n+5*.5)*1e3)}})}},resetAnimation(){for(let s=1;s<=5;s++){const t=document.getElementById("ring"+s);t.style.transition="none",t.style.transform="rotateX(0deg)",t.offsetHeight,t.style.transition=""}},clearHighlight(){this.showLines=!1,document.querySelectorAll(".slot").forEach(s=>{s.style.backgroundColor="#fff"});try{this.printingLines.forEach(s=>s.remove()),this.printingLines=[]}catch{console.error("lines array`s empty")}},highlightVisibleSlots(){const s=360/c;for(let t=1;t<=5;t++){const n=this.currentAngles[t-1],o=Math.round(-n/s)%c;[(o+c)%c,(o+1+c)%c,(o-1+c)%c].forEach(r=>{const l=document.getElementById(`ring${t}-slot-${r}`);l&&(l.style.backgroundColor="gray",this.visibleSlots.push({id:l.id,symbol:l.textContent.trim(),ring:t,position:r}))})}},ensureWinningCombination(){console.log(this.visibleSlots);let s=[];for(let t=0;t<this.lines.length;t++)this.lines[t].forEach((n,o)=>{var r,l;let e=[];for(let a=0;a<=n.length-3;a++){const g=this.visibleSlots[n[a]].symbol,h=(r=this.visibleSlots[n[a+1]])==null?void 0:r.symbol,f=(l=this.visibleSlots[n[a+2]])==null?void 0:l.symbol;if(h!==void 0&&f!==void 0&&g===h&&h===f){const _=document.getElementById(this.visibleSlots[n[a]].id),E=document.getElementById(this.visibleSlots[n[a+1]].id),k=document.getElementById(this.visibleSlots[n[a+2]].id);[_,E,k].forEach(y=>{e.includes(y)||e.push(y)})}}e.length>0&&s.push(e)});if(s.forEach((t,n)=>{t.length>=3&&t.forEach(o=>{o.style.backgroundColor=this.winColors[n]})}),s.length>0){if(this.showWinScreen=!0,this.numberInRandoms!=1){let t=this.bet/100*this.winPercents[Math.floor(Math.random()*this.winPercents.length)];if(s.length<2)this.winAmount=this.bet-t;else{const n=[20,25,30,35,40];t=this.bet/100*n[Math.floor(Math.random()*n.length)],this.winAmount=this.bet+t}}else this.winAmount=this.bet*100;return}this.mode=="auto"?this.startSpinning(this.mode):this.showSpinButtons=!0},closeWinningScreen(){x.setWin(this.winAmount,this.numberInRandoms).then(s=>{if(s.sucess)if(this.showWinScreen=!1,this.mode=="single"){this.showSpinButtons=!0;return}else this.startSpinning(this.mode)})}}},D=i("div",{class:"bg"},null,-1),V=i("img",{class:"rotateImg",src:R,style:{width:"100vh",opacity:"0.5"}},null,-1),N={style:{position:"absolute",marginTop:"-35px",display:"flex",flexDirection:"column",textAlign:"center"}},H=i("span",{style:{fontSize:"35px"}},"Вы выиграли:",-1),O={style:{fontSize:"50px"}},j=i("div",{style:{position:"absolute",width:"100%",bottom:"100px",textAlign:"center"}},[i("span",{style:{fontSize:"25px"}},"Нажмите чтобы продолжить")],-1),U={class:"HeadText",style:{width:"100%",display:"flex",justifyContent:"center",marginTop:"20px"}},$={class:"animated-text",style:{fontSize:"35px",fontWeight:"bold"}},X=i("div",{class:"machineContainer"},[i("line",{stroke:"#000","stroke-width":"2"}),i("div",{id:"stage",class:"perspective-on"},[i("div",{id:"rotate"},[i("div",{id:"ring1",class:"ring"}),i("div",{id:"ring2",class:"ring"}),i("div",{id:"ring3",class:"ring"}),i("div",{id:"ring4",class:"ring"}),i("div",{id:"ring5",class:"ring"})])])],-1),Z={key:0,class:"ButtonsSection",style:{zIndex:"100",bottom:"5%",position:"absolute",width:"100%",display:"flex",justifyContent:"center",flexDirection:"column",alignItems:"center"}},q={style:{display:"flex",alignItems:"center"}},F=i("span",{style:{fontSize:"15px",fontWeight:"bold"}},"Показать победные линии: ",-1),Y={class:"checkbox-wrapper-7",style:{marginLeft:"5px"}},G=i("label",{class:"tgl-btn",for:"cb2-7"},null,-1),J={style:{marginTop:"20px",display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center"}},K=i("span",{style:{fontSize:"30px",fontWeight:"bold"}},"СТАВКА:",-1),Q={style:{display:"flex",alignItems:"center"}},tt=i("p",{style:{fontSize:"50px",marginTop:"-5px"}},"-",-1),et=[tt],st={style:{fontSize:"25px",fontWeight:"bold"}},nt={key:1,class:"ButtonsSection",style:{zIndex:"100",bottom:"5%",position:"absolute",width:"100%",display:"flex",justifyContent:"center",flexDirection:"column",alignItems:"center"}};function it(s,t,n,o,e,r){return d(),u(S,null,[D,i("div",{class:"WinScreen",style:L({display:e.showWinScreen?"flex":"none"}),onClick:t[0]||(t[0]=(...l)=>r.closeWinningScreen&&r.closeWinningScreen(...l))},[V,i("div",N,[H,i("span",O,m(this.winAmount)+"🍆",1)]),j],4),i("div",U,[i("span",$,[(d(),u(S,null,B("SLOTS",(l,a)=>i("span",{key:a},m(l),1)),64))])]),X,e.showSpinButtons?(d(),u("div",Z,[i("div",q,[F,i("div",Y,[z(i("input",{class:"tgl tgl-ios",id:"cb2-7",type:"checkbox","onUpdate:modelValue":t[1]||(t[1]=l=>e.showLines=l),onChange:t[2]||(t[2]=l=>r.showWinningLines(l.target.checked))},null,544),[[W,e.showLines]]),G])]),i("div",J,[K,i("div",Q,[i("button",{class:"glow-on-hover",onClick:t[3]||(t[3]=()=>{e.bet-100>=100&&(e.bet-=100)}),style:{textAlign:"center",width:"80px",marginRight:"30px"}},et),i("span",st,m(e.bet)+"🍆",1),i("button",{class:"glow-on-hover",onClick:t[4]||(t[4]=()=>e.bet+=100),style:{fontSize:"35px",textAlign:"center",width:"80px",marginLeft:"30px"}},"+")])]),i("button",{class:"glow-on-hover",onClick:t[5]||(t[5]=l=>r.startSpinning("single")),style:{fontSize:"23px",textAlign:"center",marginTop:"30px"}},"SPIN 🎰"),i("button",{class:"glow-on-hover",onClick:t[6]||(t[6]=l=>r.startSpinning("auto")),style:{fontSize:"23px",textAlign:"center",marginTop:"30px"}},"AUTO 🎲")])):w("",!0),e.mode=="auto"?(d(),u("div",nt,[i("button",{class:"glow-on-hover",onClick:t[7]||(t[7]=l=>e.mode="single"),style:{fontSize:"23px",textAlign:"center",marginTop:"30px"}},"STOP 🎰")])):w("",!0)],64)}const lt=C(P,[["render",it]]);export{lt as default};
