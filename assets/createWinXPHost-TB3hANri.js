const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/DesktopShell-BMwGJMhl.js","assets/rolldown-runtime-BVbofQct.js","assets/preload-helper-DWTEM3RW.js","assets/react-vendor-aHYhdYD6.js","assets/DesktopPreparationContext-BSY2MTtZ.js","assets/DesktopViewportContext-BvIqTV0r.js","assets/LifecycleContext-CVfvOU73.js","assets/layout-C3iG-kT-.js","assets/apps-BdyM-T8S.js","assets/mine-icon-FNNA13VC.js","assets/308(16x16)-0CzZiw4Z.js","assets/308(32x32)-SqTQKXZR.js","assets/680(32x32)-BHjIH8ml.js","assets/ie-paper-DGebiufV.js","assets/DashedBox-Ch76RbAF.js","assets/globalAudio-BLDl5KfZ.js","assets/runtimeBridge-BbQNkrZH.js","assets/publicPath-SdK1OGf5.js","assets/visibleTimeout-DctrY-yE.js","assets/290-agx6iTvT.js","assets/690(16x16)-tS56rh3m.js"])))=>i.map(i=>d[i]);
import{n as e}from"./rolldown-runtime-BVbofQct.js";import{t}from"./desktopPresentationProfile-CVnTUj2M.js";import{c as n,o as r,p as i,r as a,u as ee}from"./runtimeBridge-BbQNkrZH.js";import{t as o}from"./preload-helper-DWTEM3RW.js";import{a as s,c,i as l,o as u,s as d,t as f}from"./react-vendor-aHYhdYD6.js";import{a as te,i as p,n as ne,r as m,t as h}from"./globalAudio-BLDl5KfZ.js";import{t as g}from"./publicPath-SdK1OGf5.js";import{t as re}from"./DesktopPreparationContext-BSY2MTtZ.js";import{a as _,t as ie}from"./DesktopViewportContext-BvIqTV0r.js";import{n as v,t as y}from"./visibleTimeout-DctrY-yE.js";var ae=g(`/sounds/startup.mp3`),b;function oe(){return b||=(p(ae),Promise.all([o(()=>import(`./DesktopShell-BMwGJMhl.js`),__vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20])),o(async()=>{let{preloadAppComponent:e,APP_KEYS:t}=await import(`./apps-BdyM-T8S.js`);return{preloadAppComponent:e,APP_KEYS:t}},__vite__mapDeps([8,2,7,9,10,11,12,13])).then(({preloadAppComponent:e,APP_KEYS:t})=>Promise.all([e(t.MY_SHOWCASE),e(t.WINAMP)])),new Promise((e,t)=>{let n=new Image;n.onload=()=>n.decode().then(e,t),n.onerror=t,n.src=g(`/images/xp-wallpaper.jpg`)}),document.fonts?.ready]).then(()=>{window.__outerWebsiteRecordStartupTiming?.(`winxp.preparation.ready`)}).catch(e=>{throw b=null,e})),b}var x=e(c(),1),S=f(),se=class extends x.Component{state={failed:!1};static getDerivedStateFromError(){return{failed:!0}}render(){return this.state.failed?(0,S.jsxs)(`div`,{ref:this.props.onStageReady,role:`alert`,style:{position:`absolute`,inset:0,display:`grid`,placeContent:`center`,gap:12,background:`#245edb`,color:`white`,textAlign:`center`},children:[(0,S.jsx)(`p`,{children:`The desktop could not load.`}),(0,S.jsx)(`button`,{onClick:()=>window.location.reload(),children:`Retry loading`})]}):this.props.children}};function ce({onWelcomeOpaque:e,powerState:t,bootStage:n,welcomeTransitionPhase:r,logoffText:i,welcomeFadeToBlackDuration:a,welcomeFadeToDesktopDuration:ee}){return(0,S.jsxs)(S.Fragment,{children:[t===_.BOOTING&&(n===`dos`?(0,S.jsx)(C,{}):n===`boot`?(0,S.jsx)(w,{}):(0,S.jsx)(T,{onOpaque:e})),(t===_.SHUTTING_DOWN||t===_.RESTARTING)&&(0,S.jsx)(E,{message:i}),t===_.OFF&&(0,S.jsx)(D,{}),(0,S.jsx)(j,{"data-xp-boot-transition":r,phase:r,fadeToBlackDuration:a,fadeToDesktopDuration:ee})]})}var C=()=>(0,S.jsx)(M,{children:(0,S.jsxs)(`div`,{className:`dos-content`,children:[(0,S.jsx)(`div`,{className:`dos-line`,children:`Microsoft(R) Windows XP (TM)`}),(0,S.jsx)(`div`,{className:`dos-line`,children:`Copyright (C) Microsoft Corporation`}),(0,S.jsx)(`div`,{className:`dos-line`,children:`BIOS Version 6.00, 03/12/2001`}),(0,S.jsx)(`div`,{className:`dos-line`,children:`Starting Windows...`}),(0,S.jsx)(`div`,{className:`dos-line`,children:`Initializing devices...`}),(0,S.jsx)(`div`,{className:`dos-line`,children:`Loading system files...`}),(0,S.jsx)(`div`,{className:`dos-line`,children:`Detecting IDE drives...`}),(0,S.jsx)(`div`,{className:`dos-line`,children:`Press F18 for advanced options`}),(0,S.jsx)(`div`,{className:`dos-cursor`,children:`_`})]})}),w=()=>(0,S.jsx)(O,{children:(0,S.jsx)(`img`,{src:g(`/images/starting_screen.gif`),alt:`Windows starting screen`,className:`boot-image`})}),T=({onOpaque:e})=>(0,S.jsxs)(P,{onAnimationEnd:t=>{t.target===t.currentTarget&&t.animationName===`fadeIn`&&e?.()},children:[(0,S.jsx)(`div`,{className:`xp-spacer`}),(0,S.jsx)(`main`,{className:`xp-main-area`,children:(0,S.jsx)(`h1`,{className:`welcome-title`,children:`Welcome`})}),(0,S.jsx)(`div`,{className:`xp-spacer`})]}),E=({message:e})=>(0,S.jsxs)(P,{children:[(0,S.jsx)(`div`,{className:`xp-spacer`}),(0,S.jsx)(`main`,{className:`xp-main-area`,children:(0,S.jsxs)(`div`,{className:`logoff-box`,children:[(0,S.jsx)(`img`,{src:g(`/react-xp/logo__windows_xp.png`),alt:`Windows XP`,className:`logoff-logo`}),(0,S.jsx)(`h3`,{className:`logoff-title`,children:e})]})}),(0,S.jsx)(`div`,{className:`xp-spacer`})]}),D=()=>(0,S.jsx)(N,{children:(0,S.jsx)(`div`,{className:`off-screen__text`})}),O=u.div`
  position: absolute;
  inset: 0;
  z-index: 9999;
  background: black;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  animation: fadeIn 1s ease-in-out;

  @keyframes fadeIn {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }

  .boot-image {
    height: 100%;
    width: auto;
    max-width: none;
    flex: 0 0 auto;
    display: block;
  }
`,k=l`
  from { opacity: 0; }
  to { opacity: 1; }
`,A=l`
  from { opacity: 1; }
  to { opacity: 0; }
`,j=u.div`
  position: absolute;
  inset: 0;
  z-index: 10000;
  background: #000;
  pointer-events: none;
  opacity: ${({phase:e})=>e===`fade-to-black`||e===`hold-black`?1:0};
  visibility: ${({phase:e})=>e===`idle`?`hidden`:`visible`};
  animation-name: ${({phase:e})=>e===`fade-to-black`?k:e===`fade-to-desktop`?A:`none`};
  animation-duration:
    ${({phase:e,fadeToBlackDuration:t,fadeToDesktopDuration:n})=>e===`fade-to-desktop`?n:t}ms;
  animation-timing-function: linear;
  animation-fill-mode: forwards;
`,M=u.div`
  position: absolute;
  inset: 0;
  z-index: 9999;
  background: #000;
  color: #d0d0d0;
  font-family: 'Lucida Console', 'Courier New', monospace;
  font-size: 14px;
  padding: 20px;
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  animation: fadeIn 0.5s ease-in-out;

  @keyframes fadeIn {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }

  .dos-content {
    display: flex;
    flex-direction: column;
    gap: 6px;
  }

  .dos-cursor {
    font-size: 16px;
    line-height: 16px;
    animation: blink 0.8s step-end infinite;
  }

  @keyframes blink {
    0%,
    50% {
      opacity: 1;
    }
    51%,
    100% {
      opacity: 0;
    }
  }
`,N=u.div`
  position: absolute;
  inset: 0;
  z-index: 9999;
  background: #000;
  display: flex;
  align-items: center;
  justify-content: center;

  .off-screen__text {
    color: rgba(255, 255, 255, 0.2);
    font-size: 14px;
    letter-spacing: 2px;
    text-transform: uppercase;
  }
`,P=u.div`
  position: absolute;
  inset: 0;
  z-index: 9999;
  background-color: #24319f;
  display: flex;
  flex-direction: column;
  animation: fadeIn 1s ease-in-out;

  @keyframes fadeIn {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }

  .xp-spacer {
    height: 14%;
    flex-grow: 1;
  }

  .xp-main-area {
    height: 72%;
    background-color: #627dd5;
    position: relative;
    background-image: radial-gradient(circle at 12% 12%, #9ab2ea, transparent 55%);
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .xp-main-area::before {
    content: '';
    height: 0.2rem;
    background-image: linear-gradient(
      to right,
      transparent,
      #bbcdf5 40%,
      transparent
    );
    position: absolute;
    inset: 0 0 auto 0;
  }

  .xp-main-area::after {
    content: '';
    height: 0.2rem;
    background-image: linear-gradient(
      to right,
      transparent,
      #ea9b4c 20%,
      transparent
    );
    position: absolute;
    bottom: -0.2rem;
    left: 0;
    right: 0;
  }

  .welcome-title {
    font-size: 2.5rem;
    text-shadow: 0.25rem 0.25rem 0 #3850af;
    font-style: italic;
    font-weight: bold;
    color: white;
    letter-spacing: 2px;
  }

  .logoff-box {
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    justify-content: center;
    width: 400px;
  }

  .logoff-logo {
    width: 112px;
  }

  .logoff-title {
    font-size: 1.25rem;
    color: white;
    text-shadow: 0.1rem 0.1rem 0 #3850af;
    margin-top: 1rem;
    transition: opacity 0.3s ease-in-out;
  }
`,F=1500,I=8e3,L=6e3,R=600,z=700,B=1200,V=Math.max(L,R),H=F+I+V,U=1e4,W=12e3,G=9e3,le=2e3,ue=2e3,de=.3,K=.3,q={DEVELOPMENT:`development`,DISPLAY:`display`},J=q.DISPLAY===q.DISPLAY?_.BOOTING:_.START,Y=null;function X(e,t={}){window.__outerWebsiteRecordStartupTiming?.(`winxp.${e}`,t)}function fe(){return Y?X(`desktopShell.import.reuse`):(X(`desktopShell.import.start`),Y=o(()=>import(`./DesktopShell-BMwGJMhl.js`).then(e=>(X(`desktopShell.import.end`),e),e=>{throw X(`desktopShell.import.error`,{message:e?.message??String(e)}),e}),__vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20]))),Y}var pe=(0,x.lazy)(fe);function me({standby:e=!1}){let o=(0,x.useMemo)(()=>t(),[]),[s,c]=(0,x.useState)(e?_.STANDBY:J),[l,u]=(0,x.useState)(`dos`),[d,f]=(0,x.useState)(`idle`),[te,p]=(0,x.useState)(!1),h=(0,x.useCallback)(()=>p(!0),[]),[ie,b]=(0,x.useState)(`Logging off...`),[C,w]=(0,x.useState)(()=>r(a)),[T,E]=(0,x.useState)(J===_.START),[D,O]=(0,x.useState)(null),k=(0,x.useRef)(s),A=(0,x.useRef)(d),j=(0,x.useRef)(null),M=s===_.START,[N,P]=(0,x.useState)(document.hidden);(0,x.useEffect)(()=>{let e=()=>P(document.hidden);return document.addEventListener(`visibilitychange`,e),()=>document.removeEventListener(`visibilitychange`,e)},[]);let L=!M||N||d!==`idle`||!C.focused||C.animating||!C.settled,q=M&&!L,Y=[_.STANDBY,_.BOOTING,_.START].includes(s),me=[_.STANDBY,_.BOOTING,_.START,_.LOG_OFF,_.TURN_OFF].includes(s)&&T,Z=(0,x.useCallback)(e=>{j.current=e,O(e??null),X(`desktopStage.ready`,{present:!!e})},[]),Q=(0,x.useCallback)(()=>{X(`desktopShell.request`,{powerState:s}),fe().catch(e=>{console.warn(`Failed to preload WinXP desktop shell.`,e)}),(0,x.startTransition)(()=>{E(!0)})},[s]);return(0,x.useEffect)(()=>{s!==_.BOOTING&&s!==_.STANDBY||(p(!1),oe().catch(e=>console.warn(`Desktop preload failed.`,e)),Q())},[s,Q]),(0,x.useEffect)(()=>{!e&&s===_.STANDBY&&(X(`standby.powerOn`),c(_.BOOTING))},[e,s]),(0,x.useEffect)(()=>(X(`component.mounted`,{initialPowerState:J,currentPowerState:s}),()=>{X(`component.unmounted`)}),[]),(0,x.useEffect)(()=>{ee(o)},[o]),(0,x.useEffect)(()=>{let e=!!j.current&&[_.START,_.LOG_OFF,_.TURN_OFF].includes(s),t=!e||N||d!==`idle`||!C.focused||C.animating||!C.settled,r={powerState:s,desktopVisible:e,desktopFrozen:t,desktopInteractive:e&&!t};n(r),X(`presentation.publish`,r)},[D,C.animating,C.focused,C.settled,s,N,d]),(0,x.useEffect)(()=>i(e=>{X(`outerFocus.received`,e??{}),w(e??r(a))},{invokeImmediately:!0,fallbackValue:a}),[]),(0,x.useEffect)(()=>{let e=k.current;X(`powerState.effect`,{prevState:e,powerState:s}),[_.SHUTTING_DOWN,_.RESTARTING].includes(s)&&![_.SHUTTING_DOWN,_.RESTARTING,_.OFF].includes(e)&&(ne(),E(!1)),e===_.BOOTING&&s===_.START&&(m(ae,de),X(`powerState.bootToStart`),Q()),k.current=s},[s,Q]),(0,x.useEffect)(()=>{[_.START,_.LOG_OFF,_.TURN_OFF].includes(s)&&Q()},[s,Q]),(0,x.useEffect)(()=>{let e;return s===_.BOOTING&&(X(`powerTimer.schedule`,{powerState:s,delayMs:H}),e=v(()=>{X(`powerTimer.fire`,{from:_.BOOTING,to:_.START}),c(_.START)},H)),s===_.SHUTTING_DOWN&&(m(g(`/sounds/shutdown.mp3`),K),X(`powerTimer.schedule`,{powerState:s,delayMs:U}),e=v(()=>{X(`powerTimer.fire`,{from:_.SHUTTING_DOWN,to:_.OFF}),c(_.OFF)},U)),s===_.RESTARTING&&(m(g(`/sounds/shutdown.mp3`),K),X(`powerTimer.schedule`,{powerState:s,delayMs:W}),e=v(()=>{X(`powerTimer.fire`,{from:_.RESTARTING,to:_.BOOTING}),c(_.BOOTING)},W)),s===_.OFF&&(X(`powerTimer.schedule`,{powerState:s,delayMs:G}),e=v(()=>{X(`powerTimer.fire`,{from:_.OFF,to:_.BOOTING}),c(_.BOOTING)},G)),()=>y(e)},[s]),(0,x.useEffect)(()=>{if(X(`bootStage.effect`,{powerState:s,bootStage:l}),s!==_.BOOTING){u(`dos`);return}u(`dos`);let e=v(()=>{X(`bootStage.timer.fire`,{to:`boot`}),u(`boot`)},F),t=v(()=>{X(`bootStage.timer.fire`,{to:`welcome`}),u(`welcome`)},F+I);return()=>{y(e),y(t)}},[s]),(0,x.useEffect)(()=>{X(`welcomeTransition.phase`,{powerState:s,bootStage:l,phase:d}),A.current=d},[l,s,d]),(0,x.useEffect)(()=>{if(s===_.BOOTING&&l===`welcome`){let e=Math.max(0,V-R);f(`idle`);let t=v(()=>{X(`welcomeTransition.timer.fire`,{to:`fade-to-black`}),f(`fade-to-black`)},e);return()=>y(t)}s!==_.START&&f(`idle`)},[l,s]),(0,x.useEffect)(()=>{if(s!==_.START||A.current!==`fade-to-black`)return;f(`hold-black`);let e=v(()=>{X(`welcomeTransition.timer.fire`,{to:`fade-to-desktop`}),f(`fade-to-desktop`)},z),t=v(()=>{X(`welcomeTransition.timer.fire`,{to:`idle`}),f(`idle`)},z+B);return()=>{y(e),y(t)}},[s]),(0,x.useEffect)(()=>{if(![_.SHUTTING_DOWN,_.RESTARTING,_.OFF].includes(s)){b(`Logging off...`);return}b(`Logging off...`);let e=v(()=>{b(s===_.RESTARTING?`Windows is restarting.`:`Windows is shutting down...`)},s===_.RESTARTING?ue:le);return()=>y(e)},[s]),(0,S.jsxs)(he,{"data-page-hidden":N?`true`:`false`,children:[(0,S.jsx)(ge,{children:(0,S.jsx)(re,{covered:te&&s===_.BOOTING,deferred:!!C.animating,children:me&&(0,S.jsx)(se,{onStageReady:Z,children:(0,S.jsx)(x.Suspense,{fallback:null,children:(0,S.jsx)(pe,{powerState:s,outerFocusSettled:!!C.settled,desktopVisible:M,desktopFrozen:L,desktopInteractive:q,startupHydrationReady:Y,onRequestPowerStateChange:c,onStageReady:Z})})})})}),(0,S.jsx)(ce,{onWelcomeOpaque:h,powerState:s,bootStage:l,welcomeTransitionPhase:d,logoffText:ie,welcomeFadeToBlackDuration:R,welcomeFadeToDesktopDuration:B})]})}var he=u.div`
  &[data-page-hidden='true'] * { animation-play-state: paused !important; }
  font-family: Tahoma, 'Microsoft JhengHei UI', 'Microsoft JhengHei', 'Segoe UI', sans-serif;
  height: 100%;
  overflow: hidden;
  position: relative;
  background: #000;
  *:not(input):not(textarea) {
    user-select: none;
  }
`,ge=u.div`
  position: absolute;
  inset: 0;
  display: block;
`,Z=e=>(0,S.jsx)(me,{...e});te();function Q(e){return(0,S.jsx)(s,{children:(0,S.jsx)(Z,{...e})})}function _e({className:e,style:t,...n}){return(0,S.jsx)(`div`,{className:e,style:{position:`relative`,width:`100%`,height:`100%`,overflow:`hidden`,...t},"data-winxp-host":`true`,children:(0,S.jsx)(Q,{...n})})}var ve=d();function $(e,t={}){window.__outerWebsiteRecordStartupTiming?.(`winxpHost.${e}`,t)}function ye(e,t={}){if(!e)throw Error(`WinXP host container is required.`);$(`mount.start`);let n=(0,ve.createRoot)(e),r=t,i=0,a=()=>{i+=1,i<=3&&$(`render.start`,{renderCount:i}),n.render((0,S.jsx)(ie,{children:(0,S.jsx)(_e,{...r})})),i<=3&&$(`render.end`,{renderCount:i})};return a(),$(`mount.end`),{update(e={}){r=e,a()},dispose(){$(`dispose`),n.unmount(),h()}}}export{oe as n,ye as t};