const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/DesktopShell-rBe2efXF.js","assets/rolldown-runtime-BVbofQct.js","assets/react-vendor-aHYhdYD6.js","assets/DesktopPreparationContext-BlSP-Nga.js","assets/DesktopViewportContext-CSe3oa11.js","assets/LifecycleContext-2Z-YSJzB.js","assets/layout-WSN_-xMS.js","assets/apps-D_FWQsI3.js","assets/preload-helper-DWTEM3RW.js","assets/308(16x16)-DiRqAJS3.js","assets/680(32x32)-BeMVStdx.js","assets/ie-paper-iYPnjREO.js","assets/components-BKF0gUfj.js","assets/globalAudio-DIT2W2K_.js","assets/runtimeBridge-BbQNkrZH.js","assets/publicPath-SdK1OGf5.js","assets/299(32x32)-BXpryR4E.js","assets/msn-B4cPml9P.js"])))=>i.map(i=>d[i]);
import{n as e}from"./rolldown-runtime-BVbofQct.js";import{t}from"./desktopPresentationProfile-CxyoU_8r.js";import{c as n,o as r,p as i,r as a,u as o}from"./runtimeBridge-BbQNkrZH.js";import{t as s}from"./preload-helper-DWTEM3RW.js";import{a as c,c as l,i as u,o as d,s as f,t as p}from"./react-vendor-aHYhdYD6.js";import{i as m,n as ee,r as h,t as te}from"./globalAudio-DIT2W2K_.js";import{t as g}from"./publicPath-SdK1OGf5.js";import{t as ne}from"./DesktopPreparationContext-BlSP-Nga.js";import{a as _,t as re}from"./DesktopViewportContext-CSe3oa11.js";var v;function y(){return v||=Promise.all([s(()=>import(`./DesktopShell-rBe2efXF.js`),__vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17])),s(async()=>{let{preloadAppComponent:e,APP_KEYS:t}=await import(`./apps-D_FWQsI3.js`);return{preloadAppComponent:e,APP_KEYS:t}},__vite__mapDeps([7,8,6,9,10,11])).then(({preloadAppComponent:e,APP_KEYS:t})=>Promise.all([e(t.MY_SHOWCASE),e(t.WINAMP)])),new Promise((e,t)=>{let n=new Image;n.onload=()=>n.decode().then(e,t),n.onerror=t,n.src=`/winxp/images/xp-wallpaper.jpg`}),document.fonts?.ready]).then(()=>{window.__outerWebsiteRecordStartupTiming?.(`winxp.preparation.ready`)}).catch(e=>{throw v=null,e}),v}var b=e(l(),1),x=p(),ie=class extends b.Component{state={failed:!1};static getDerivedStateFromError(){return{failed:!0}}render(){return this.state.failed?(0,x.jsxs)(`div`,{ref:this.props.onStageReady,role:`alert`,style:{position:`absolute`,inset:0,display:`grid`,placeContent:`center`,gap:12,background:`#245edb`,color:`white`,textAlign:`center`},children:[(0,x.jsx)(`p`,{children:`The desktop could not load.`}),(0,x.jsx)(`button`,{onClick:()=>window.location.reload(),children:`Retry loading`})]}):this.props.children}};function ae({onWelcomeOpaque:e,powerState:t,bootStage:n,welcomeTransitionPhase:r,logoffText:i,welcomeFadeToBlackDuration:a,welcomeFadeToDesktopDuration:o}){return(0,x.jsxs)(x.Fragment,{children:[t===_.BOOTING&&(n===`dos`?(0,x.jsx)(S,{}):n===`boot`?(0,x.jsx)(C,{}):(0,x.jsx)(w,{onOpaque:e})),(t===_.SHUTTING_DOWN||t===_.RESTARTING)&&(0,x.jsx)(T,{message:i}),t===_.OFF&&(0,x.jsx)(E,{}),(0,x.jsx)(k,{"data-xp-boot-transition":r,phase:r,fadeToBlackDuration:a,fadeToDesktopDuration:o})]})}var S=()=>(0,x.jsx)(A,{children:(0,x.jsxs)(`div`,{className:`dos-content`,children:[(0,x.jsx)(`div`,{className:`dos-line`,children:`Microsoft(R) Windows XP (TM)`}),(0,x.jsx)(`div`,{className:`dos-line`,children:`Copyright (C) Microsoft Corporation`}),(0,x.jsx)(`div`,{className:`dos-line`,children:`BIOS Version 6.00, 03/12/2001`}),(0,x.jsx)(`div`,{className:`dos-line`,children:`Starting Windows...`}),(0,x.jsx)(`div`,{className:`dos-line`,children:`Initializing devices...`}),(0,x.jsx)(`div`,{className:`dos-line`,children:`Loading system files...`}),(0,x.jsx)(`div`,{className:`dos-line`,children:`Detecting IDE drives...`}),(0,x.jsx)(`div`,{className:`dos-line`,children:`Press F18 for advanced options`}),(0,x.jsx)(`div`,{className:`dos-cursor`,children:`_`})]})}),C=()=>(0,x.jsx)(oe,{children:(0,x.jsx)(`img`,{src:g(`/images/starting_screen.gif`),alt:`Windows starting screen`,className:`boot-image`})}),w=({onOpaque:e})=>(0,x.jsxs)(M,{onAnimationEnd:t=>{t.target===t.currentTarget&&t.animationName===`fadeIn`&&e?.()},children:[(0,x.jsx)(`div`,{className:`xp-spacer`}),(0,x.jsx)(`main`,{className:`xp-main-area`,children:(0,x.jsx)(`h1`,{className:`welcome-title`,children:`Welcome`})}),(0,x.jsx)(`div`,{className:`xp-spacer`})]}),T=({message:e})=>(0,x.jsxs)(M,{children:[(0,x.jsx)(`div`,{className:`xp-spacer`}),(0,x.jsx)(`main`,{className:`xp-main-area`,children:(0,x.jsxs)(`div`,{className:`logoff-box`,children:[(0,x.jsx)(`img`,{src:g(`/react-xp/logo__windows_xp.png`),alt:`Windows XP`,className:`logoff-logo`}),(0,x.jsx)(`h3`,{className:`logoff-title`,children:e})]})}),(0,x.jsx)(`div`,{className:`xp-spacer`})]}),E=()=>(0,x.jsx)(j,{children:(0,x.jsx)(`div`,{className:`off-screen__text`})}),oe=d.div`
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
`,D=u`
  from { opacity: 0; }
  to { opacity: 1; }
`,O=u`
  from { opacity: 1; }
  to { opacity: 0; }
`,k=d.div`
  position: absolute;
  inset: 0;
  z-index: 10000;
  background: #000;
  pointer-events: none;
  opacity: ${({phase:e})=>e===`fade-to-black`||e===`hold-black`?1:0};
  visibility: ${({phase:e})=>e===`idle`?`hidden`:`visible`};
  animation-name: ${({phase:e})=>e===`fade-to-black`?D:e===`fade-to-desktop`?O:`none`};
  animation-duration:
    ${({phase:e,fadeToBlackDuration:t,fadeToDesktopDuration:n})=>e===`fade-to-desktop`?n:t}ms;
  animation-timing-function: linear;
  animation-fill-mode: forwards;
`,A=d.div`
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
`,j=d.div`
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
`,M=d.div`
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
`;function N(e,t){let n=t,r=0,i=null,a=!1,o=()=>{a=!0,clearTimeout(i),document.removeEventListener(`visibilitychange`,c)};function s(){a||document.hidden||(r=performance.now(),i=setTimeout(()=>{o(),e()},Math.max(0,n)))}function c(){document.hidden?(clearTimeout(i),r&&(n-=performance.now()-r),r=0):s()}return document.addEventListener(`visibilitychange`,c),s(),o}function P(e){e?.()}var F=1500,I=8e3,L=6e3,R=600,z=700,B=1200,V=Math.max(L,R),H=F+I+V,U=1e4,W=12e3,G=9e3,se=2e3,ce=2e3,le=.3,K=.3,q={DEVELOPMENT:`development`,DISPLAY:`display`},J=q.DISPLAY===q.DISPLAY?_.BOOTING:_.START,Y=null;function X(e,t={}){window.__outerWebsiteRecordStartupTiming?.(`winxp.${e}`,t)}function ue(){return Y?X(`desktopShell.import.reuse`):(X(`desktopShell.import.start`),Y=s(()=>import(`./DesktopShell-rBe2efXF.js`).then(e=>(X(`desktopShell.import.end`),e),e=>{throw X(`desktopShell.import.error`,{message:e?.message??String(e)}),e}),__vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17]))),Y}var de=(0,b.lazy)(ue);function fe(){let e=(0,b.useMemo)(()=>t(),[]),[s,c]=(0,b.useState)(J),[l,u]=(0,b.useState)(`dos`),[d,f]=(0,b.useState)(`idle`),[p,m]=(0,b.useState)(!1),te=(0,b.useCallback)(()=>m(!0),[]),[re,v]=(0,b.useState)(`Logging off...`),[S,C]=(0,b.useState)(()=>r(a)),[w,T]=(0,b.useState)(J===_.START),[E,oe]=(0,b.useState)(null),D=(0,b.useRef)(s),O=(0,b.useRef)(d),k=(0,b.useRef)(null),A=s===_.START,[j,M]=(0,b.useState)(document.hidden);(0,b.useEffect)(()=>{let e=()=>M(document.hidden);return document.addEventListener(`visibilitychange`,e),()=>document.removeEventListener(`visibilitychange`,e)},[]);let L=!A||j||d!==`idle`||!S.focused||S.animating||!S.settled,q=A&&!L,Y=[_.BOOTING,_.START].includes(s),fe=[_.BOOTING,_.START,_.LOG_OFF,_.TURN_OFF].includes(s)&&w,Z=(0,b.useCallback)(e=>{k.current=e,oe(e??null),X(`desktopStage.ready`,{present:!!e})},[]),Q=(0,b.useCallback)(()=>{X(`desktopShell.request`,{powerState:s}),ue().catch(e=>{console.warn(`Failed to preload WinXP desktop shell.`,e)}),(0,b.startTransition)(()=>{T(!0)})},[s]);return(0,b.useEffect)(()=>{s===_.BOOTING&&(m(!1),y().catch(e=>console.warn(`Desktop preload failed.`,e)),Q())},[s,Q]),(0,b.useEffect)(()=>(X(`component.mounted`,{initialPowerState:J,currentPowerState:s}),()=>{X(`component.unmounted`)}),[]),(0,b.useEffect)(()=>{o(e)},[e]),(0,b.useEffect)(()=>{let e=!!k.current&&[_.START,_.LOG_OFF,_.TURN_OFF].includes(s),t=!e||j||d!==`idle`||!S.focused||S.animating||!S.settled,r={powerState:s,desktopVisible:e,desktopFrozen:t,desktopInteractive:e&&!t};n(r),X(`presentation.publish`,r)},[E,S.animating,S.focused,S.settled,s,j,d]),(0,b.useEffect)(()=>i(e=>{X(`outerFocus.received`,e??{}),C(e??r(a))},{invokeImmediately:!0,fallbackValue:a}),[]),(0,b.useEffect)(()=>{let e=D.current;X(`powerState.effect`,{prevState:e,powerState:s}),[_.SHUTTING_DOWN,_.RESTARTING].includes(s)&&![_.SHUTTING_DOWN,_.RESTARTING,_.OFF].includes(e)&&(ee(),T(!1)),e===_.BOOTING&&s===_.START&&(h(g(`/sounds/startup.mp3`),le),X(`powerState.bootToStart`),Q()),D.current=s},[s,Q]),(0,b.useEffect)(()=>{[_.START,_.LOG_OFF,_.TURN_OFF].includes(s)&&Q()},[s,Q]),(0,b.useEffect)(()=>{let e;return s===_.BOOTING&&(X(`powerTimer.schedule`,{powerState:s,delayMs:H}),e=N(()=>{X(`powerTimer.fire`,{from:_.BOOTING,to:_.START}),c(_.START)},H)),s===_.SHUTTING_DOWN&&(h(g(`/sounds/shutdown.mp3`),K),X(`powerTimer.schedule`,{powerState:s,delayMs:U}),e=N(()=>{X(`powerTimer.fire`,{from:_.SHUTTING_DOWN,to:_.OFF}),c(_.OFF)},U)),s===_.RESTARTING&&(h(g(`/sounds/shutdown.mp3`),K),X(`powerTimer.schedule`,{powerState:s,delayMs:W}),e=N(()=>{X(`powerTimer.fire`,{from:_.RESTARTING,to:_.BOOTING}),c(_.BOOTING)},W)),s===_.OFF&&(X(`powerTimer.schedule`,{powerState:s,delayMs:G}),e=N(()=>{X(`powerTimer.fire`,{from:_.OFF,to:_.BOOTING}),c(_.BOOTING)},G)),()=>P(e)},[s]),(0,b.useEffect)(()=>{if(X(`bootStage.effect`,{powerState:s,bootStage:l}),s!==_.BOOTING){u(`dos`);return}u(`dos`);let e=N(()=>{X(`bootStage.timer.fire`,{to:`boot`}),u(`boot`)},F),t=N(()=>{X(`bootStage.timer.fire`,{to:`welcome`}),u(`welcome`)},F+I);return()=>{P(e),P(t)}},[s]),(0,b.useEffect)(()=>{X(`welcomeTransition.phase`,{powerState:s,bootStage:l,phase:d}),O.current=d},[l,s,d]),(0,b.useEffect)(()=>{if(s===_.BOOTING&&l===`welcome`){let e=Math.max(0,V-R);f(`idle`);let t=N(()=>{X(`welcomeTransition.timer.fire`,{to:`fade-to-black`}),f(`fade-to-black`)},e);return()=>P(t)}s!==_.START&&f(`idle`)},[l,s]),(0,b.useEffect)(()=>{if(s!==_.START||O.current!==`fade-to-black`)return;f(`hold-black`);let e=N(()=>{X(`welcomeTransition.timer.fire`,{to:`fade-to-desktop`}),f(`fade-to-desktop`)},z),t=N(()=>{X(`welcomeTransition.timer.fire`,{to:`idle`}),f(`idle`)},z+B);return()=>{P(e),P(t)}},[s]),(0,b.useEffect)(()=>{if(![_.SHUTTING_DOWN,_.RESTARTING,_.OFF].includes(s)){v(`Logging off...`);return}v(`Logging off...`);let e=N(()=>{v(s===_.RESTARTING?`Windows is restarting.`:`Windows is shutting down...`)},s===_.RESTARTING?ce:se);return()=>P(e)},[s]),(0,x.jsxs)(pe,{"data-page-hidden":j?`true`:`false`,children:[(0,x.jsx)(me,{children:(0,x.jsx)(ne,{covered:p&&s===_.BOOTING,children:fe&&(0,x.jsx)(ie,{onStageReady:Z,children:(0,x.jsx)(b.Suspense,{fallback:null,children:(0,x.jsx)(de,{powerState:s,outerFocusSettled:!!S.settled,desktopVisible:A,desktopFrozen:L,desktopInteractive:q,startupHydrationReady:Y,onRequestPowerStateChange:c,onStageReady:Z})})})})}),(0,x.jsx)(ae,{onWelcomeOpaque:te,powerState:s,bootStage:l,welcomeTransitionPhase:d,logoffText:re,welcomeFadeToBlackDuration:R,welcomeFadeToDesktopDuration:B})]})}var pe=d.div`
  &[data-page-hidden='true'] * { animation-play-state: paused !important; }
  font-family: Tahoma, 'Microsoft JhengHei UI', 'Microsoft JhengHei', 'Segoe UI', sans-serif;
  height: 100%;
  overflow: hidden;
  position: relative;
  background: #000;
  *:not(input):not(textarea) {
    user-select: none;
  }
`,me=d.div`
  position: absolute;
  inset: 0;
  display: block;
`,Z=()=>(0,x.jsx)(fe,{});m();function Q(e){return(0,x.jsx)(c,{children:(0,x.jsx)(Z,{...e})})}function he({className:e,style:t,...n}){return(0,x.jsx)(`div`,{className:e,style:{position:`relative`,width:`100%`,height:`100%`,overflow:`hidden`,...t},"data-winxp-host":`true`,children:(0,x.jsx)(Q,{...n})})}var ge=f();function $(e,t={}){window.__outerWebsiteRecordStartupTiming?.(`winxpHost.${e}`,t)}function _e(e,t={}){if(!e)throw Error(`WinXP host container is required.`);$(`mount.start`);let n=(0,ge.createRoot)(e),r=t,i=0,a=()=>{i+=1,i<=3&&$(`render.start`,{renderCount:i}),n.render((0,x.jsx)(re,{children:(0,x.jsx)(he,{...r})})),i<=3&&$(`render.end`,{renderCount:i})};return a(),$(`mount.end`),{update(e={}){r=e,a()},dispose(){$(`dispose`),n.unmount(),te()}}}export{y as n,_e as t};