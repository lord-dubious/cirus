import{r as m,j as t,A as ue,m as W,c as xe,aX as ne,aY as Re,aK as Ee,aZ as Te,a as ge,f as _e,l as Ne,ab as U,af as he,a_ as Oe,d as h,ay as Ae,a$ as Be,ac as Y,T as k,g as Pe,b0 as ze,$ as Me,F as E,b1 as P,k as M,b2 as Fe,aw as He,ax as je,B as C,S as $e,b3 as Ge,b4 as Le,b5 as Ve,b6 as We,aU as Ue,b7 as Ye,Z as Xe,b8 as qe,b9 as Ze,ba as Ke,ah as Qe,aQ as Je,bb as et,bc as tt,bd as j,h as oe,be as nt,bf as ot,aE as at,N as it,bg as st,bh as rt,aD as ae,bi as ie,bj as lt,bk as se,ad as ct,V as re,bl as pt,bm as le,bn as dt,bo as ut,bp as xt}from"./index.html.c436c693.js";import{d as gt,g as L,w as ce,b as ht,u as ft,a as mt,M as bt,c as yt}from"./chunk-PVJ72NKC.12510af1.js";import"./storage.e1425d82.js";var pe={exit:{duration:.15,ease:gt.easeInOut},enter:{type:"spring",damping:25,stiffness:180}},vt={exit:({direction:e,transition:n,transitionEnd:a,delay:o})=>{var s;const{exit:r}=L({direction:e});return{...r,transition:(s=n==null?void 0:n.exit)!=null?s:ce.exit(pe.exit,o),transitionEnd:a==null?void 0:a.exit}},enter:({direction:e,transitionEnd:n,transition:a,delay:o})=>{var s;const{enter:r}=L({direction:e});return{...r,transition:(s=a==null?void 0:a.enter)!=null?s:ce.enter(pe.enter,o),transitionEnd:n==null?void 0:n.enter}}},fe=m.exports.forwardRef(function(n,a){const{direction:o="right",style:s,unmountOnExit:r,in:d,className:l,transition:c,transitionEnd:p,delay:f,motionProps:w,...b}=n,y=L({direction:o}),I=Object.assign({position:"fixed"},y.position,s),u=r?d&&r:!0,_=d||r?"enter":"exit",i={transitionEnd:p,transition:c,direction:o,delay:f};return t(ue,{custom:i,children:u&&t(W.div,{...b,ref:a,initial:"exit",className:xe("chakra-slide",l),animate:_,exit:"exit",custom:i,variants:vt,style:I,...w})})});fe.displayName="Slide";function wt(e,n){const a=m.exports.useId();return m.exports.useMemo(()=>e||[n,a].filter(Boolean).join("-"),[e,n,a])}function St(e,n){const a=e!==void 0;return[a,a&&typeof e<"u"?e:n]}function Ct(e={}){const{onClose:n,onOpen:a,isOpen:o,id:s}=e,r=ne(a),d=ne(n),[l,c]=m.exports.useState(e.defaultIsOpen||!1),[p,f]=St(o,l),w=wt(s,"disclosure"),b=m.exports.useCallback(()=>{p||c(!1),d==null||d()},[p,d]),y=m.exports.useCallback(()=>{p||c(!0),r==null||r()},[p,r]),I=m.exports.useCallback(()=>{(f?b:y)()},[f,y,b]);return{isOpen:!!f,onOpen:y,onClose:b,onToggle:I,isControlled:p,getButtonProps:(u={})=>({...u,"aria-expanded":f,"aria-controls":w,onClick:Re(u.onClick,I)}),getDisclosureProps:(u={})=>({...u,hidden:!f,id:w})}}var[kt,It]=Ee(),Dt={start:{ltr:"left",rtl:"right"},end:{ltr:"right",rtl:"left"}};function Rt(e,n){var a,o;if(!!e)return(o=(a=Dt[e])==null?void 0:a[n])!=null?o:e}function Et(e){var n;const{isOpen:a,onClose:o,placement:s="right",children:r,...d}=e,l=Te(),c=(n=l.components)==null?void 0:n.Drawer,p=Rt(s,l.direction);return t(kt,{value:{placement:p},children:t(ht,{isOpen:a,onClose:o,styleConfig:c,...d,children:r})})}var Tt=ge(fe),me=_e((e,n)=>{const{className:a,children:o,motionProps:s,containerProps:r,...d}=e,{getDialogProps:l,getDialogContainerProps:c,isOpen:p}=ft(),f=l(d,n),w=c(r),b=xe("chakra-modal__content",a),y=mt(),I={display:"flex",flexDirection:"column",position:"relative",width:"100%",outline:0,...y.dialog},u={display:"flex",width:"100vw",height:"$100vh",position:"fixed",left:0,top:0,...y.dialogContainer},{placement:_}=It();return t(bt,{children:t(ge.div,{...w,className:"chakra-modal__content-container",__css:u,children:t(Tt,{motionProps:s,direction:_,in:p,className:b,...f,__css:I,children:o})})})});me.displayName="DrawerContent";const _t="/assets/register_brand_icon.b833a0ed.png";function Nt(){const{logout:e}=Ne(),n=U(),[,a]=he(Oe,!1),o=()=>{a(!1),e({removeFromStorage:!0}),n("/auth/register")};return h(Ae,{w:326,height:88,borderRadius:"28px !important",backdropFilter:"blur(8px)",className:Be.registerWrapper,fontFamily:"Barlow",fontWeight:400,letterSpacing:"0.005em",borderWidth:"1px",position:"relative",borderColor:"rgba(255,255,255,0.16)",padding:"0px 24px 0px 12px",flexDirection:"row",color:"#FFFFFF",alignItems:"center",gap:"8px",cursor:"pointer",onClick:()=>o(),children:[t(Y,{src:_t,width:"89px",height:"72px"}),t(k,{maxW:137,fontSize:14,children:"Register to enable full functionality"}),t(Pe,{style:{position:"absolute",right:"24px"}})]})}const Ot="/assets/score_star.9ff00218.png",At=W(yt);function Bt({handleClose:e,isOpen:n,score:a=0}){return t(Et,{isOpen:n,onClose:e,placement:"bottom",children:h(me,{children:[h(At,{animate:"large",variants:{large:{maxHeight:510},small:{maxHeight:370}},transition:{duration:.2},maxW:358,margin:"0 auto",borderRadius:"36px",bgColor:"white",padding:"30px 48px 90px",position:"relative",sx:{"::-webkit-scrollbar":{display:"none"}},children:[h(ze,{justifyContent:"space-between",children:[h(Me,{alignItems:"flex-start",children:[t(k,{margin:"0 !important",fontSize:16,opacity:.5,children:"Cirus Score"}),t(k,{margin:"0 !important",fontSize:36,color:"darkBlue.base",children:`000${a}`.slice(-3)})]}),t(Y,{src:Ot,w:148,marginRight:"-26px !important",mt:"-15px"})]}),t(k,{color:"darkBlue.base",fontSize:16,children:"Your Cirus Score"}),t(k,{marginTop:"8px",color:"grey",children:"Your Cirus score represents you and your digital persona! It\u2019s a unique key powered by your online behaviour that gives you unbiased access to the new world of finance that you can unlock with the power of your data."}),t(k,{color:"darkBlue.base",fontSize:16,marginTop:"40px",children:"Higher Data Score = Greater Access"}),t(k,{marginTop:"8px",color:"grey",children:"The higher your Cirus score is, the more cool products and services you will be able to unlock within the Cirus ecosystem!"})]}),t(E,{width:"100%",height:"109px",position:"absolute",bottom:"0",left:"0",background:"linear-gradient(180deg, rgba(246, 247, 253, 0) 10%, #F6F7FD 50%);"})]})})}function $({currency:e,showCurrency:n,setShowCurrency:a}){return t(M,{variant:"glass",size:"md",margin:"0 4px",fontSize:"14px",padding:"10px 14px",bg:"rgba(154, 173, 241, 0.05)",boxShadow:n!==e?"none":`
                inset 0px 3px 5px rgba(255,255,255, 0.5),
                inset 0px 5px 10px rgba(108, 91, 225, 0.1),
                0px 10px 18px rgba(108, 91, 225, 0.1)
              `,borderColor:n!==e?"white":"rgba(158, 171, 208, 0.15)",textColor:n!==e?"grey.base":"black",onClick:()=>a(e),"data-testid":"currencyButton",children:e})}function Pt({showCurrency:e,setShowCurrency:n}){return h(E,{fontSize:"14px",justifyContent:"center",children:[t($,{currency:P.USD,showCurrency:e,setShowCurrency:n}),t($,{currency:P.EUR,showCurrency:e,setShowCurrency:n}),t($,{currency:P.CIRUS,showCurrency:e,setShowCurrency:n})]})}function zt({timeframe:e,showTimeframe:n,setTimeframe:a,name:o}){return t(M,{variant:"glass",size:"md",fontSize:"14px",padding:"10px 14px",bg:"rgba(154, 173, 241, 0.05)",boxShadow:n!==e?"none":`
                inset 0px 3px 5px rgba(255,255,255, 0.5),
                inset 0px 5px 10px rgba(108, 91, 225, 0.1),
                0px 10px 18px rgba(108, 91, 225, 0.1)
              `,borderColor:n!==e?"white":"rgba(158, 171, 208, 0.15)",textColor:n!==e?"grey.base":"black",onClick:()=>a(e),"data-testid":"showTimeframeButton",children:o})}function Mt({showTimeframe:e,setTimeframe:n}){const a=Fe.map(o=>o==="1H"?{filterName:"1H",name:"1 Hour"}:o==="24H"?{filterName:"24H",name:"Today"}:o==="1W"?{filterName:"1W",name:"1 Week"}:o==="1M"?{filterName:"1M",name:"1 Month"}:o==="3M"?{filterName:"3M",name:"3 Months"}:null);return t(E,{fontSize:"14px",justifyContent:"center",flexWrap:"wrap",rowGap:"16px",columnGap:"8px",children:a.map(o=>(o==null?void 0:o.filterName)&&(o==null?void 0:o.name)?t(zt,{timeframe:o.filterName,showTimeframe:e,setTimeframe:n,name:o.name},Math.random()):null)})}let N=document.getElementById("wallet-actions");if(!N){const e=document.body;N=document.createElement("div"),N.setAttribute("id","powallet-actionspup"),e.appendChild(N)}const G=W(E);function Ft({isOpen:e,setIsOpen:n,showCurrency:a,setShowCurrency:o,...s}){const{timeframe:r,setTimeframe:d,isTimeframeLoading:l}=He(),c=U();return je.createPortal(t(C,{...s,children:h(ue,{children:[e&&t(G,{initial:{opacity:0,scale:.9,y:"100%"},animate:{opacity:1,scale:1,y:"0%"},exit:{opacity:0,scale:.9,y:"100%"},transition:{duration:.3},w:"full",h:"full",bg:"transparent",alignItems:"flex-end",position:"fixed",zIndex:"10",bottom:"0",left:"0",onClick:()=>n(!1),children:t(E,{w:"full",position:"relative",bg:"transparent",justifyContent:"center",boxShadow:"DataVaultShadows.base",_before:{content:'""',position:"absolute",zIndex:"-1",bottom:"0",left:"-10px",width:"calc(100% + 20px)",height:"calc(100% - 20px)",background:"#f8f9ff"},onClick:p=>p.stopPropagation(),children:h(E,{w:"342px",flexDirection:"column",bg:"white",borderRadius:"28px",justifyContent:"center",textAlign:"center",padding:"36px 24px 36px",marginBottom:"120px",boxShadow:"0px 12px 40px rgba(59, 52, 110, 0.06)",children:[t(k,{textColor:"grey.base",marginBottom:"20px",children:"Display Wallet Balance in:"}),t(Pt,{showCurrency:a,setShowCurrency:o}),t(k,{textColor:"grey.base",marginBottom:"20px",marginTop:"36px",children:h(k,{as:"span",position:"relative",children:["Token Price Chart Range:",l&&t($e,{color:"activeBlue.base",size:"xs",thickness:"2px",position:"absolute",top:"25%",left:"105%"})]})}),t(Mt,{showTimeframe:r,setTimeframe:d})]})})},"modal"),e&&t(G,{initial:{opacity:0,scale:.9},animate:{opacity:1,scale:1},exit:{opacity:0,scale:.9},transition:{duration:.3},justifyContent:"center",w:"100%",position:"fixed",bottom:"20px",zIndex:"10",children:t(M,{variant:"glass",size:"lg",width:"auto",onClick:()=>n(!1),"data-testid":"closeButton",children:t(Y,{src:Ge})})},"button"),!e&&t(G,{initial:{opacity:0,scale:.9,y:"50%"},animate:{opacity:1,scale:1,y:"0%"},exit:{opacity:0,scale:.9,y:"50%"},transition:{duration:.3},disflay:"flex",justifyContent:"center",position:"fixed",zIndex:"10",w:"full",bottom:"0",pb:"4",_before:{content:'""',position:"absolute",bottom:"0",left:"50%",width:"345px",height:"calc(100%)",transform:"translateX(-50%)",backgroundColor:"#f8f9ff",borderTopRightRadius:"28px",borderTopLeftRadius:"28px"},children:t(C,{className:"wallet-joyride",w:"345px",children:t(Le,{inline:!0,onSendClick:()=>c("/app/wallet/send-coins"),onReceiveClick:()=>c("/app/wallet/receive-coins"),onSwapClick:()=>c("/app/wallet/swap-coins/CIRUS"),onMoreClick:()=>n(!0)})})},"actions")]})}),N)}const z=144,V=8,Ht=172;let O=document.getElementById("header-display");if(!O){const e=document.body;O=document.createElement("div"),O.setAttribute("id","header-display"),e.appendChild(O)}const jt={opacity:{value:1}},$t={opacity:{value:0}},R={opacity:{value:1},transform:{perspective:{value:150,unit:"px"},rotateX:{value:0,unit:"deg"},translateY:{value:0,unit:"px"}},zIndex:{value:1}},be={opacity:{value:0},transform:{perspective:{value:190,unit:"px"},rotateX:{value:-30,unit:"deg"},translateY:{value:250,unit:"px"}},zIndex:{value:1}},ye=(e,n,a)=>{const o=e-n,s=Math.ceil(o*a*100)/100;return e+s},Gt=e=>{const n=z*e,a=(Math.max(1,e)-1)*V;return n+a+Ht},Lt=({pct:e,reset:n})=>Object.entries(be.transform).reduce((a,[o,s])=>{var c,p,f,w;const{value:r,unit:d=""}=s,l=n?(p=(c=R==null?void 0:R.transform)==null?void 0:c[o])==null?void 0:p.value:ye((w=(f=R==null?void 0:R.transform)==null?void 0:f[o])==null?void 0:w.value,r,e);return`${a} ${o}(${l}${d})`},""),de=({endAnimation:e,elem:n,pct:a,reset:o,startAnimation:s})=>{!n||Object.entries(e).forEach(([r,{value:d,unit:l=""}])=>{const c=s[r];if(r==="transform"){const p=Lt({pct:a,reset:o});n.style.transform=p}else n.style[r]=`${ye(c==null?void 0:c.value,d,a)}${l}`;n.style.transformOrigin=o?"center center":"top center"})};function Vt(){var q,Z,K,Q;const e=m.exports.useRef(null),{setShowCircles:n,setLargeRingSize:a,setSmallRingSize:o}=Ve(),s=We(),r=Ue(),d=U(),{currentRoute:l,setLeftIcon:c,setCurrentRoute:p,setPreviousRoute:f}=Ye(),w=Xe({userId:"me"}),{currencies:b,walletBalance:y,rewardedUsdAmount:I}=m.exports.useContext(qe),[u,_]=he(Ze,P.USD),[i,ve]=m.exports.useState(r.pathname==="/app/wallet"),[we,Se]=m.exports.useState(!1),{isOpen:T,onOpen:Ce,onClose:ke}=Ct(),{totalToDate:Ie}=Ke(),F=()=>{var x;const g=document.documentElement.scrollTop,S=(x=e==null?void 0:e.current)==null?void 0:x.querySelectorAll(":scope > div");S==null||S.forEach((v,D)=>{const H=Gt(D)-(g+172),ee=z*1.25,te=H>=0,De=v.querySelector(":scope > div> div");de({elem:v,endAnimation:be,pct:Math.min(1,H/ee),reset:te,startAnimation:R}),de({elem:De,endAnimation:$t,pct:Math.min(1,H/(ee/3)),reset:te,startAnimation:jt}),v.parentNode&&(v.parentNode.style.zIndex=`${D+1}`),v.style.zIndex=`${D+1}`,v.style.transformStyle="preserve-3d",v.style.perspective="400px"})},A=g=>{var S,x;ve(g==="/app/wallet"),p(g),f(g==="/app/wallet"?"/app":"/app/wallet"),window.scrollTo(0,0),F(),g==="/app"&&((x=(S=e==null?void 0:e.current)==null?void 0:S.querySelectorAll(":scope > div"))!=null?x:[]).forEach((D,J)=>{D.style.zIndex=`${15-J}`})},B=((q=w.data)==null?void 0:q.role)===Qe.GUEST,X=i?b.length*z+b.length*V:z+10;return m.exports.useEffect(()=>{c(i?Je:null)},[i]),m.exports.useEffect(()=>{var g,S;if(l){const x=document.querySelector(".orb-container");if(x)return Object.entries((S=(g=et)==null?void 0:g[l])!=null?S:{}).forEach(([v,D])=>{x.style[v]=D}),l==="/app/wallet"&&(x.style.transitionDelay="0.2s",x.style.position="fixed"),n(l==="/app"),a(l==="/app"?tt:j-40+20),o(l==="/app"?j:j-70),()=>{x.setAttribute("style","")}}},[l]),m.exports.useEffect(()=>{if(e.current&&i)return document.addEventListener("scroll",F),()=>{document.removeEventListener("scroll",F)}},[i]),h(oe,{children:[t(nt,{styles:ot`
          ${!i&&`
          html, body {
            height: ${at};
            overflow: hidden;
          }
        `}
        `}),h(it,{onLeftIconClick:()=>A("/app"),rightIcon:st,children:[t(C,{minHeight:"90px",width:"100%",pt:"50px",position:"relative",children:rt.exports.createPortal(h(oe,{children:[t(C,{position:"fixed",zIndex:"10",top:"25px",width:ae,transform:i?"scale(0.95)":"",transition:"all 0.3s ease-out",transformOrigin:"50% 50%",transitionDelay:i?"0":"0.2s",opacity:i||T?0:1,pointerEvents:i?"none":"auto",children:t(ie,{className:"joyride-cirus-score",score:(Z=s.data)==null?void 0:Z.dataScore,rewardPercent:0,rewardsGained:0,totalRewards:0,onScoreClick:Ce})}),t(C,{position:"fixed",zIndex:"10",top:"25px",width:ae,transform:i?"":"scale(0.95) ",transformOrigin:"center center",transition:"all 0.3s ease-out",transitionDelay:i?"0.3s":"0",opacity:i?1:0,pointerEvents:i?"auto":"none",children:t(ie,{rewardPercent:parseFloat(y.percentOfdifference.toFixed(2)),rewardsGained:lt(y,u),score:0,totalRewards:se(y,u),showRewards:!0,showCurrency:u})}),t(C,{position:"fixed",zIndex:"99",top:"25px",left:"50%",transform:T?"translateX(-50%)":"scale(0.95) translateX(-50%)",transition:"all 0.3s ease-out",transformOrigin:"center center",transitionDelay:T?"0.2s":"0",opacity:T?1:0,pointerEvents:T?"auto":"none",children:h(E,{alignItems:"center",gap:"8px",children:[t(ct,{}),h(k,{color:"grey",children:["Level ",(K=s.data)==null?void 0:K.user_level]})]})})]}),O)}),t(C,{position:"absolute",width:"100%",height:"60px",backgroundColor:"transparent",top:"100px",left:"0",pointerEvents:i?"auto":"none",onClick:()=>A("/app")}),h(re,{maxW:342,margin:"0 auto",justifyContent:"flex-end",flex:1,transition:"opacity 0.3s ease-out",opacity:i?0:1,pointerEvents:i?"none":"auto",children:[t(C,{as:"button",flex:"1",width:"100%",onClick:()=>pt("/app/web3"),"data-testid":"web3Button"}),t(M,{variant:"glass",size:"sm",fontSize:"14px",color:"grey",disabled:B,pl:"12px",pr:"12px",onClick:()=>A("/app/wallet"),"data-testid":"walletButton",children:"Wallet"})]}),h(re,{ref:e,mt:"auto",transition:"height 0.5s",transitionTimingFunction:i?"ease-in":"ease-out",gap:`${V}px`,height:X,maxHeight:i?X:448,children:[t(C,{className:"joyride-usd-card",display:"block",width:"100%",onClick:B?void 0:()=>i?d("/app/wallet/swap-coins/USD"):A("/app/wallet"),position:"relative",zIndex:"12",children:t(le,{title:"Data Earnings",acronym:"USD",topLeftFirstValue:1,topRightFirstValue:se(I,u),topRightSecondValue:I.usd,showCurrency:u,totalToDateValue:Math.round(Ie),isGuest:B})}),b.map((g,S)=>{const x=S+1,v={transform:i?"none":`translateY(-${x*100}%) scale(${1-.05*x}) rotateX(20deg)`,opacity:i?1:x>3?0:1-x*.3,backfaceVisibility:"hidden",filter:i?"none":"blur(1px)",boxShadow:"none",transformStyle:"preserve-3d",transformOrigin:"bottom center"};return t(C,{pb:x===b.length?100:0,width:"100%",zIndex:10-x,position:"relative",boxShadow:"0px 4px 8px rgba(59, 52, 110, 0.1)",borderRadius:"28px",children:t(C,{position:"relative",width:"100%",...v,zIndex:10-x,transition:"all 0.4s ease-out",background:"#ffffff",borderRadius:"28px",transitionDelay:i?"0":"0.2s",children:t(le,{acronym:g.currencyId,onClick:()=>d(`/app/wallet/${g.currencyId}`),opacity:i?1:0,showCurrency:u,title:dt(g.currency),topLeftFirstValue:ut(g,u),topRightFirstValue:xt(g,u),topRightSecondValue:Number(g.totalBalance),transitionDelay:i?"0s":"0.2s"},g.currencyId)})})})]}),t(Ft,{isOpen:we,setIsOpen:Se,showCurrency:u,setShowCurrency:_,transition:"all 0.3s ease-out",transform:i?"none":"translateY(100px)",transitionDelay:i?"0.2s":"0.1s",position:"relative",zIndex:"99"}),t(Bt,{handleClose:ke,isOpen:T,score:(Q=s.data)==null?void 0:Q.dataScore}),B?t(Nt,{}):null]})]})}function Xt(){return t(Vt,{})}export{Xt as DashboardHome};
