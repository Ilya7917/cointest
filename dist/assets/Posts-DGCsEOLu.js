import{d as I,l as A,u as M,g as c,h as z,c as o,a as e,t as u,b as D,m as r,F as h,p as x,v as w,G as N,H as B,o as n,x as L,n as j,y as T,z as V,_ as F}from"./index-DCHr9vTN.js";const U="data:image/svg+xml,%3c?xml%20version='1.0'%20encoding='utf-8'?%3e%3c!--%20Uploaded%20to:%20SVG%20Repo,%20www.svgrepo.com,%20Generator:%20SVG%20Repo%20Mixer%20Tools%20--%3e%3csvg%20width='80px'%20height='80px'%20viewBox='0%200%2024%2024'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M15%2012L12%2012M12%2012L9%2012M12%2012L12%209M12%2012L12%2015'%20stroke='%23878787'%20stroke-width='1.5'%20stroke-linecap='round'/%3e%3cpath%20d='M7%203.33782C8.47087%202.48697%2010.1786%202%2012%202C17.5228%202%2022%206.47715%2022%2012C22%2017.5228%2017.5228%2022%2012%2022C6.47715%2022%202%2017.5228%202%2012C2%2010.1786%202.48697%208.47087%203.33782%207'%20stroke='%23878787'%20stroke-width='1.5'%20stroke-linecap='round'/%3e%3c/svg%3e",d=g=>(T("data-v-39b35596"),g=g(),V(),g),G=d(()=>e("div",{class:"Bg"},null,-1)),W={class:"navMenu"},R=["src"],$={key:0,class:"createPostMenu"},E={id:"progressbar"},H={class:"createForm"},J={key:0,style:{display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center"}},O=d(()=>e("span",{style:{fontWeight:"bold",marginTop:"15px"}},"⚠️ Добавить можно только 1 изображение",-1)),Y={key:1,style:{display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center"}},q=d(()=>e("label",{for:"fname"},"Описание(не обязательно)",-1)),K={key:2,style:{display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center"}},Q={style:{display:"flex",alignItems:"center"}},X=d(()=>e("span",{style:{fontSize:"15px",fontWeight:"bold"}},"Платный пост (не обязательно)",-1)),Z={class:"checkbox-wrapper-7",style:{marginLeft:"20px"}},ee=d(()=>e("label",{class:"tgl-btn",for:"cb2-7"},null,-1)),te={key:0,style:{marginTop:"50px",textAlign:"center"}},se=d(()=>e("span",{style:{fontSize:"15px",fontWeight:"bold"}},"Цена за разблокировку:",-1)),oe={key:0,style:{display:"flex",justifyContent:"center"}},ne={key:1,class:"boosts"},ie={class:"post"},ae={class:"ownerData"},le=["src"],ce={style:{fontSize:"30px",marginLeft:"15px"}},re={class:"postDescription",style:{height:"50px",alignItems:"center",display:"flex"}},de={style:{fontSize:"25px"}},pe={key:0,class:"unlock",style:{height:"70px",display:"flex",alignItems:"center",justifyContent:"space-between",padding:"15px"}},ue={style:{fontSize:"25px"}},ge=d(()=>e("button",{class:"boost-purchase-button"},"Unlock",-1)),ve={class:"donations",style:{height:"70px",display:"flex",alignItems:"center",justifyContent:"space-between",padding:"15px"}},me={style:{fontSize:"25px"}},he=d(()=>e("button",{class:"boost-purchase-button"},"Donate",-1)),_e=I({__name:"Posts",setup(g){A();const _=M();_.getBoosts(),c(!1),c(!1);const l=c("posts"),v=c(!1),m=c(!1),s=c({image:null,isPrivate:!1,description:"",price:0}),p=c(0),f=[{id:0,isActive:!0,text:"Add image"},{id:1,isActive:!1,text:"Write description"},{id:2,isActive:!1,text:"Choose Details"}];z(()=>{l.value="posts",console.log(l.value)}),c({id:0,price:1e3});const b=[{id:0,ownerName:"Jack",ownerAvatar:"https://www.pinclipart.com/picdir/big/165-1653686_female-user-icon-png-download-user-colorful-icon.png",image:"https://goombastomp.com/wp-content/uploads/2022/07/image-34.png",description:"Cat from stray",donation:5e3,isPrivate:!1},{id:1,ownerName:"Ashley",ownerAvatar:"https://www.pinclipart.com/picdir/big/165-1653686_female-user-icon-png-download-user-colorful-icon.png",image:"https://goombastomp.com/wp-content/uploads/2022/07/image-34.png",description:"Cat from stray",donation:1582,isPrivate:!0},{id:2,ownerName:"Miki115",ownerAvatar:"https://www.pinclipart.com/picdir/big/165-1653686_female-user-icon-png-download-user-colorful-icon.png",image:"https://goombastomp.com/wp-content/uploads/2022/07/image-34.png",description:"Cat from stray",donation:113,isPrivate:!0}];c({id:0});const y=i=>{i!=l.value&&(l.value=i,console.log(i))},k=i=>{const t=i.target.files;t&&t.length>0&&(s.value.image=t[0],m.value=!0),console.log(s)},C=i=>{console.log(1);const t=i.target.value;t&&(s.value.description=t),console.log(s)},P=()=>{p.value!==0&&(m.value=!1),p.value++,f[p.value].isActive=!0},S=()=>{if(s.value.isPrivate=v.value,s.value.image){const i={image:s.value.image,isPrivate:s.value.isPrivate,description:s.value.description,price:s.value.price};_.createPost(i)}else console.error("No file selected")};return(i,a)=>(n(),o(h,null,[G,e("div",W,[e("button",{class:"mypost-button",onClick:a[0]||(a[0]=t=>y(l.value=="create"?"posts":"myposts"))},u(l.value=="create"?"Posts":"My posts"),1),l.value!=="create"?(n(),o("img",{key:0,src:D(U),alt:"Your Icon",style:{height:"50px"},onClick:a[1]||(a[1]=t=>y("create"))},null,8,R)):r("",!0)]),l.value==="create"?(n(),o("div",$,[e("div",null,[e("ul",E,[(n(),o(h,null,x(f,t=>e("li",{class:L(t.isActive?"active":"")},u(t.text),3)),64))])]),e("div",H,[p.value===0?(n(),o("div",J,[e("input",{class:"addFile",type:"file",onChange:k},null,32),O])):r("",!0),p.value===1?(n(),o("div",Y,[q,e("input",{type:"text",id:"fname",onChange:C,name:"fname"},null,32)])):r("",!0),p.value===2?(n(),o("div",K,[e("div",Q,[X,e("div",Z,[w(e("input",{class:"tgl tgl-ios",id:"cb2-7",type:"checkbox","onUpdate:modelValue":a[2]||(a[2]=t=>v.value=t)},null,512),[[N,v.value]]),ee])]),v.value?(n(),o("div",te,[se,w(e("input",{type:"number","onUpdate:modelValue":a[3]||(a[3]=t=>s.value.price=t)},null,512),[[B,s.value.price]])])):r("",!0),e("div",null,[e("button",{class:"mypost-button",style:{marginTop:"30px"},onClick:S},"Создать")])])):r("",!0)]),m.value?(n(),o("div",oe,[e("button",{class:"mypost-button",style:{marginTop:"30px"},onClick:P},"Дальше")])):r("",!0)])):r("",!0),l.value==="posts"?(n(),o("div",ne,[(n(),o(h,null,x(b,t=>e("div",{key:t.id,style:{width:"100%"}},[e("div",ie,[e("div",ae,[e("img",{src:t.ownerAvatar,style:{width:"60px",height:"60px",padding:"5px"}},null,8,le),e("span",ce,u(t.ownerName),1)]),e("div",{class:"postImage",style:j({height:"250px",width:"100%",position:"relative",backgroundImage:`url(${t.image}`,backgroundRepeat:"no-repeat",backgroundSize:"cover",filter:t.isPrivate?"blur(25px)":"blur(0px)"})},null,4),e("div",re,[e("span",de,u(t.description),1)]),t.isPrivate?(n(),o("div",pe,[e("span",ue,"🍆"+u(t.donation),1),ge])):r("",!0),e("div",ve,[e("span",me,"🍆"+u(t.donation),1),he])])])),64))])):r("",!0)],64))}}),ye=F(_e,[["__scopeId","data-v-39b35596"]]);export{ye as default};
