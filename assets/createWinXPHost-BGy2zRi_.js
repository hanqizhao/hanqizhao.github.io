const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/DesktopShell-_SD5LWpl.js","assets/rolldown-runtime-BVbofQct.js","assets/preload-helper-DWTEM3RW.js","assets/react-vendor-aHYhdYD6.js","assets/DesktopPreparationContext-Bgx_rmu8.js","assets/runtimeBridge-DiqJiUi9.js","assets/DesktopViewportContext-BvIqTV0r.js","assets/LifecycleContext-CVfvOU73.js","assets/layout-C3iG-kT-.js","assets/apps-tOdFU4nE.js","assets/mine-icon-FNNA13VC.js","assets/308(16x16)-0CzZiw4Z.js","assets/308(32x32)-SqTQKXZR.js","assets/680(32x32)-BHjIH8ml.js","assets/ie-paper-DGebiufV.js","assets/DashedBox-BdZXZJhS.js","assets/globalAudio-DDKx6bqK.js","assets/publicPath-SdK1OGf5.js","assets/visibleTimeout-DctrY-yE.js","assets/290-agx6iTvT.js","assets/690(16x16)-tS56rh3m.js"])))=>i.map(i=>d[i]);
import{n as e}from"./rolldown-runtime-BVbofQct.js";import{t}from"./desktopPresentationProfile-CVnTUj2M.js";import{d as n,h as r,l as i,o as a,r as o}from"./runtimeBridge-DiqJiUi9.js";import{t as s}from"./preload-helper-DWTEM3RW.js";import{a as c,c as l,i as u,o as d,s as f,t as p}from"./react-vendor-aHYhdYD6.js";import{a as ee,i as m,n as te,r as h,t as ne}from"./globalAudio-DDKx6bqK.js";import{t as g}from"./publicPath-SdK1OGf5.js";import{r as re,t as ie}from"./DesktopPreparationContext-Bgx_rmu8.js";import{a as _,t as v}from"./DesktopViewportContext-BvIqTV0r.js";import{n as y,t as b}from"./visibleTimeout-DctrY-yE.js";var x=g(`/sounds/startup.mp3`),S,C;function ae(){return C||=(m(x),new Promise((e,t)=>{let n=new Image;n.onload=()=>n.decode().then(e,t),n.onerror=t,n.src=g(`/images/xp-wallpaper.jpg`)}).then(()=>{window.__outerWebsiteRecordStartupTiming?.(`winxp.media.ready`)}).catch(e=>{C=null,console.warn(`Desktop media preload failed.`,e)})),C}function w(){if(!S){let e=Promise.all([s(()=>import(`./DesktopShell-_SD5LWpl.js`),__vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20])),s(async()=>{let{preloadAppComponent:e,APP_KEYS:t}=await import(`./apps-tOdFU4nE.js`);return{preloadAppComponent:e,APP_KEYS:t}},__vite__mapDeps([9,2,8,10,11,12,13,14])).then(({preloadAppComponent:e,APP_KEYS:t})=>Promise.all([e(t.MY_SHOWCASE),e(t.WINAMP)]))]),t=()=>{ae()};e.then(t,t),S=Promise.all([e,document.fonts?.ready]).then(()=>{window.__outerWebsiteRecordStartupTiming?.(`winxp.preparation.ready`)}).catch(e=>{throw S=null,e})}return S}var T=e(l(),1),E=p(),oe=class extends T.Component{state={failed:!1};static getDerivedStateFromError(){return{failed:!0}}render(){return this.state.failed?(0,E.jsxs)(`div`,{ref:this.props.onStageReady,role:`alert`,style:{position:`absolute`,inset:0,display:`grid`,placeContent:`center`,gap:12,background:`#245edb`,color:`white`,textAlign:`center`},children:[(0,E.jsx)(`p`,{children:`The desktop could not load.`}),(0,E.jsx)(`button`,{onClick:()=>window.location.reload(),children:`Retry loading`})]}):this.props.children}};function se({onWelcomeOpaque:e,powerState:t,bootStage:n,welcomeTransitionPhase:r,logoffText:i,welcomeFadeToBlackDuration:a,welcomeFadeToDesktopDuration:o}){return(0,E.jsxs)(E.Fragment,{children:[t===_.BOOTING&&(n===`dos`?(0,E.jsx)(D,{}):n===`boot`?(0,E.jsx)(O,{}):(0,E.jsx)(ce,{onOpaque:e})),(t===_.SHUTTING_DOWN||t===_.RESTARTING)&&(0,E.jsx)(le,{message:i}),t===_.OFF&&(0,E.jsx)(k,{}),(0,E.jsx)(N,{"data-xp-boot-transition":r,phase:r,fadeToBlackDuration:a,fadeToDesktopDuration:o})]})}var D=()=>(0,E.jsx)(P,{children:(0,E.jsxs)(`div`,{className:`dos-content`,children:[(0,E.jsx)(`div`,{className:`dos-line`,children:`Microsoft(R) Windows XP (TM)`}),(0,E.jsx)(`div`,{className:`dos-line`,children:`Copyright (C) Microsoft Corporation`}),(0,E.jsx)(`div`,{className:`dos-line`,children:`BIOS Version 6.00, 03/12/2001`}),(0,E.jsx)(`div`,{className:`dos-line`,children:`Starting Windows...`}),(0,E.jsx)(`div`,{className:`dos-line`,children:`Initializing devices...`}),(0,E.jsx)(`div`,{className:`dos-line`,children:`Loading system files...`}),(0,E.jsx)(`div`,{className:`dos-line`,children:`Detecting IDE drives...`}),(0,E.jsx)(`div`,{className:`dos-line`,children:`Press F18 for advanced options`}),(0,E.jsx)(`div`,{className:`dos-cursor`,children:`_`})]})}),O=()=>(0,E.jsx)(A,{children:(0,E.jsx)(`img`,{src:g(`/images/starting_screen.gif`),alt:`Windows starting screen`,className:`boot-image`})}),ce=({onOpaque:e})=>(0,E.jsxs)(I,{onAnimationEnd:t=>{t.target===t.currentTarget&&t.animationName===`fadeIn`&&e?.()},children:[(0,E.jsx)(`div`,{className:`xp-spacer`}),(0,E.jsx)(`main`,{className:`xp-main-area`,children:(0,E.jsx)(`h1`,{className:`welcome-title`,children:`Welcome`})}),(0,E.jsx)(`div`,{className:`xp-spacer`})]}),le=({message:e})=>(0,E.jsxs)(I,{children:[(0,E.jsx)(`div`,{className:`xp-spacer`}),(0,E.jsx)(`main`,{className:`xp-main-area`,children:(0,E.jsxs)(`div`,{className:`logoff-box`,children:[(0,E.jsx)(`img`,{src:g(`/react-xp/logo__windows_xp.png`),alt:`Windows XP`,className:`logoff-logo`}),(0,E.jsx)(`h3`,{className:`logoff-title`,children:e})]})}),(0,E.jsx)(`div`,{className:`xp-spacer`})]}),k=()=>(0,E.jsx)(F,{children:(0,E.jsx)(`div`,{className:`off-screen__text`})}),A=d.div`
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
`,j=u`
  from { opacity: 0; }
  to { opacity: 1; }
`,M=u`
  from { opacity: 1; }
  to { opacity: 0; }
`,N=d.div`
  position: absolute;
  inset: 0;
  z-index: 10000;
  background: #000;
  pointer-events: none;
  opacity: ${({phase:e})=>e===`fade-to-black`||e===`hold-black`?1:0};
  visibility: ${({phase:e})=>e===`idle`?`hidden`:`visible`};
  animation-name: ${({phase:e})=>e===`fade-to-black`?j:e===`fade-to-desktop`?M:`none`};
  animation-duration:
    ${({phase:e,fadeToBlackDuration:t,fadeToDesktopDuration:n})=>e===`fade-to-desktop`?n:t}ms;
  animation-timing-function: linear;
  animation-fill-mode: forwards;
`,P=d.div`
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
`,F=d.div`
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
`,I=d.div`
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
`,L=1500,R=8e3,z=6e3,B=600,V=700,H=1200,U=Math.max(z,B),W=L+R+U,ue=3500,de=2500,G=1e4,K=12e3,fe=9e3,pe=2e3,me=2e3,he=.3,ge=.3,q={DEVELOPMENT:`development`,DISPLAY:`display`},J=q.DISPLAY===q.DISPLAY?_.BOOTING:_.START,Y=null;function X(e,t={}){window.__outerWebsiteRecordStartupTiming?.(`winxp.${e}`,t)}function _e(){return Y?X(`desktopShell.import.reuse`):(X(`desktopShell.import.start`),Y=s(()=>import(`./DesktopShell-_SD5LWpl.js`).then(e=>(X(`desktopShell.import.end`),e),e=>{throw X(`desktopShell.import.error`,{message:e?.message??String(e)}),e}),__vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20]))),Y}var ve=(0,T.lazy)(_e);function ye({standby:e=!1}){let s=(0,T.useMemo)(()=>t(),[]),[c,l]=(0,T.useState)(e?_.STANDBY:J),[u,d]=(0,T.useState)(`dos`),[f,p]=(0,T.useState)(`idle`),[ee,m]=(0,T.useState)(!1),ne=(0,T.useCallback)(()=>m(!0),[]),[v,S]=(0,T.useState)(`Logging off...`),[C,ae]=(0,T.useState)(()=>a(o)),[D,O]=(0,T.useState)(J===_.START),[ce,le]=(0,T.useState)(null),[k,A]=(0,T.useState)(1/0),[j,M]=(0,T.useState)(!e&&J===_.START),N=(0,T.useRef)(c),P=(0,T.useRef)(f),F=(0,T.useRef)(null),I=c===_.START,[z,q]=(0,T.useState)(document.hidden);(0,T.useEffect)(()=>{let e=()=>q(document.hidden);return document.addEventListener(`visibilitychange`,e),()=>document.removeEventListener(`visibilitychange`,e)},[]);let Y=!I||z||f!==`idle`||!C.focused||C.animating||!C.settled,ye=I&&!Y,Se=[_.STANDBY,_.BOOTING,_.START].includes(c),Ce=[_.STANDBY,_.BOOTING,_.START,_.LOG_OFF,_.TURN_OFF].includes(c)&&D&&j,Z=(0,T.useCallback)(e=>{F.current=e,le(e??null),X(`desktopStage.ready`,{present:!!e})},[]),Q=(0,T.useCallback)(()=>{X(`desktopShell.request`,{powerState:c}),_e().catch(e=>{console.warn(`Failed to preload WinXP desktop shell.`,e)}),(0,T.startTransition)(()=>{O(!0)})},[c]);return(0,T.useEffect)(()=>{c!==_.BOOTING&&c!==_.STANDBY||(m(!1),w().catch(e=>console.warn(`Desktop preload failed.`,e)),Q())},[c,Q]),(0,T.useEffect)(()=>{c===_.BOOTING&&A(performance.now()+W)},[c]),(0,T.useEffect)(()=>{if(j)return;if(c!==_.STANDBY&&c!==_.BOOTING){M(!0);return}let e=!1,t=()=>{},n=({forced:e})=>{X(`desktopShell.mountAllowed`,{powerState:c,forced:e}),M(!0)},r=()=>{e||(t=re(n,c===_.STANDBY?{dwellMs:0}:{deadlineAt:k-ue}))};return w().then(r,r),()=>{e=!0,t()}},[c,k,j]),(0,T.useEffect)(()=>{!e&&c===_.STANDBY&&(X(`standby.powerOn`),l(_.BOOTING))},[e,c]),(0,T.useEffect)(()=>(X(`component.mounted`,{initialPowerState:J,currentPowerState:c}),()=>{X(`component.unmounted`)}),[]),(0,T.useEffect)(()=>{n(s)},[s]),(0,T.useEffect)(()=>{let e=!!F.current&&[_.START,_.LOG_OFF,_.TURN_OFF].includes(c),t=!e||z||f!==`idle`||!C.focused||C.animating||!C.settled,n={powerState:c,desktopVisible:e,desktopFrozen:t,desktopInteractive:e&&!t};i(n),X(`presentation.publish`,n)},[ce,C.animating,C.focused,C.settled,c,z,f]),(0,T.useEffect)(()=>r(e=>{X(`outerFocus.received`,e??{}),ae(e??a(o))},{invokeImmediately:!0,fallbackValue:o}),[]),(0,T.useEffect)(()=>{let e=N.current;X(`powerState.effect`,{prevState:e,powerState:c}),[_.SHUTTING_DOWN,_.RESTARTING].includes(c)&&![_.SHUTTING_DOWN,_.RESTARTING,_.OFF].includes(e)&&(te(),O(!1)),e===_.BOOTING&&c===_.START&&(h(x,he),X(`powerState.bootToStart`),Q()),N.current=c},[c,Q]),(0,T.useEffect)(()=>{[_.START,_.LOG_OFF,_.TURN_OFF].includes(c)&&Q()},[c,Q]),(0,T.useEffect)(()=>{let e;return c===_.BOOTING&&(X(`powerTimer.schedule`,{powerState:c,delayMs:W}),e=y(()=>{X(`powerTimer.fire`,{from:_.BOOTING,to:_.START}),l(_.START)},W)),c===_.SHUTTING_DOWN&&(h(g(`/sounds/shutdown.mp3`),ge),X(`powerTimer.schedule`,{powerState:c,delayMs:G}),e=y(()=>{X(`powerTimer.fire`,{from:_.SHUTTING_DOWN,to:_.OFF}),l(_.OFF)},G)),c===_.RESTARTING&&(h(g(`/sounds/shutdown.mp3`),ge),X(`powerTimer.schedule`,{powerState:c,delayMs:K}),e=y(()=>{X(`powerTimer.fire`,{from:_.RESTARTING,to:_.BOOTING}),l(_.BOOTING)},K)),c===_.OFF&&(X(`powerTimer.schedule`,{powerState:c,delayMs:fe}),e=y(()=>{X(`powerTimer.fire`,{from:_.OFF,to:_.BOOTING}),l(_.BOOTING)},fe)),()=>b(e)},[c]),(0,T.useEffect)(()=>{if(X(`bootStage.effect`,{powerState:c,bootStage:u}),c!==_.BOOTING){d(`dos`);return}d(`dos`);let e=y(()=>{X(`bootStage.timer.fire`,{to:`boot`}),d(`boot`)},L),t=y(()=>{X(`bootStage.timer.fire`,{to:`welcome`}),d(`welcome`)},L+R);return()=>{b(e),b(t)}},[c]),(0,T.useEffect)(()=>{X(`welcomeTransition.phase`,{powerState:c,bootStage:u,phase:f}),P.current=f},[u,c,f]),(0,T.useEffect)(()=>{if(c===_.BOOTING&&u===`welcome`){let e=Math.max(0,U-B);p(`idle`);let t=y(()=>{X(`welcomeTransition.timer.fire`,{to:`fade-to-black`}),p(`fade-to-black`)},e);return()=>b(t)}c!==_.START&&p(`idle`)},[u,c]),(0,T.useEffect)(()=>{if(c!==_.START||P.current!==`fade-to-black`)return;p(`hold-black`);let e=y(()=>{X(`welcomeTransition.timer.fire`,{to:`fade-to-desktop`}),p(`fade-to-desktop`)},V),t=y(()=>{X(`welcomeTransition.timer.fire`,{to:`idle`}),p(`idle`)},V+H);return()=>{b(e),b(t)}},[c]),(0,T.useEffect)(()=>{if(![_.SHUTTING_DOWN,_.RESTARTING,_.OFF].includes(c)){S(`Logging off...`);return}S(`Logging off...`);let e=y(()=>{S(c===_.RESTARTING?`Windows is restarting.`:`Windows is shutting down...`)},c===_.RESTARTING?me:pe);return()=>b(e)},[c]),(0,E.jsxs)(be,{"data-page-hidden":z?`true`:`false`,children:[(0,E.jsx)(xe,{children:(0,E.jsx)(ie,{covered:ee&&c===_.BOOTING,deferred:!!C.animating,deadlineAt:k-de,children:Ce&&(0,E.jsx)(oe,{onStageReady:Z,children:(0,E.jsx)(T.Suspense,{fallback:null,children:(0,E.jsx)(ve,{powerState:c,outerFocusSettled:!!C.settled,desktopVisible:I,desktopFrozen:Y,desktopInteractive:ye,startupHydrationReady:Se,onRequestPowerStateChange:l,onStageReady:Z})})})})}),(0,E.jsx)(se,{onWelcomeOpaque:ne,powerState:c,bootStage:u,welcomeTransitionPhase:f,logoffText:v,welcomeFadeToBlackDuration:B,welcomeFadeToDesktopDuration:H})]})}var be=d.div`
  &[data-page-hidden='true'] * { animation-play-state: paused !important; }
  font-family: Tahoma, 'Microsoft JhengHei UI', 'Microsoft JhengHei', 'Segoe UI', sans-serif;
  height: 100%;
  overflow: hidden;
  position: relative;
  background: #000;
  *:not(input):not(textarea) {
    user-select: none;
  }
`,xe=d.div`
  position: absolute;
  inset: 0;
  display: block;
`,Se=e=>(0,E.jsx)(ye,{...e});ee();function Ce(e){return(0,E.jsx)(c,{children:(0,E.jsx)(Se,{...e})})}function Z({className:e,style:t,...n}){return(0,E.jsx)(`div`,{className:e,style:{position:`relative`,width:`100%`,height:`100%`,overflow:`hidden`,...t},"data-winxp-host":`true`,children:(0,E.jsx)(Ce,{...n})})}var Q=f();function $(e,t={}){window.__outerWebsiteRecordStartupTiming?.(`winxpHost.${e}`,t)}function we(e,t={}){if(!e)throw Error(`WinXP host container is required.`);$(`mount.start`);let n=(0,Q.createRoot)(e),r=t,i=0,a=()=>{i+=1,i<=3&&$(`render.start`,{renderCount:i}),n.render((0,E.jsx)(v,{children:(0,E.jsx)(Z,{...r})})),i<=3&&$(`render.end`,{renderCount:i})};return a(),$(`mount.end`),{update(e={}){r=e,a()},dispose(){$(`dispose`),n.unmount(),ne()}}}export{w as n,we as t};