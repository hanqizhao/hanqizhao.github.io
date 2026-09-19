const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/DesktopShell-fdMVX-uE.js","assets/rolldown-runtime-BVbofQct.js","assets/preload-helper-DWTEM3RW.js","assets/react-vendor-aHYhdYD6.js","assets/layout-C1WKUDE7.js","assets/constants-Y9cTM2If.js","assets/empty-CAapIO_G.js","assets/308(16x16)-Bmr2L2Sf.js","assets/components-SugFWhYH.js","assets/publicPath-SdK1OGf5.js","assets/299(32x32)-riOVcqFD.js","assets/680(32x32)-GpCvm8Ta.js","assets/msn-B4-5yCKE.js","assets/runtimeBridge-BbQNkrZH.js","assets/globalAudio-DVfpRfMe.js"])))=>i.map(i=>d[i]);
import{n as e}from"./rolldown-runtime-BVbofQct.js";import{t}from"./desktopPresentationProfile-CxyoU_8r.js";import{c as n,o as r,p as i,r as a,u as ee}from"./runtimeBridge-BbQNkrZH.js";import{t as o}from"./preload-helper-DWTEM3RW.js";import{a as s,c,o as l,s as u,t as d}from"./react-vendor-aHYhdYD6.js";import{n as f,r as p,t as m}from"./globalAudio-DVfpRfMe.js";import{t as h}from"./publicPath-SdK1OGf5.js";import{n as g}from"./constants-Y9cTM2If.js";var _=e(c(),1),v=d();function te({powerState:e,bootStage:t,welcomeTransitionPhase:n,logoffText:r,welcomeFadeToBlackDuration:i,welcomeFadeToDesktopDuration:a}){return(0,v.jsxs)(v.Fragment,{children:[e===g.BOOTING&&(t===`dos`?(0,v.jsx)(y,{}):t===`boot`?(0,v.jsx)(b,{}):(0,v.jsx)(x,{})),(e===g.SHUTTING_DOWN||e===g.RESTARTING)&&(0,v.jsx)(S,{message:r}),e===g.OFF&&(0,v.jsx)(C,{}),(0,v.jsx)(T,{phase:n,fadeToBlackDuration:i,fadeToDesktopDuration:a})]})}var y=()=>(0,v.jsx)(E,{children:(0,v.jsxs)(`div`,{className:`dos-content`,children:[(0,v.jsx)(`div`,{className:`dos-line`,children:`Microsoft(R) Windows XP (TM)`}),(0,v.jsx)(`div`,{className:`dos-line`,children:`Copyright (C) Microsoft Corporation`}),(0,v.jsx)(`div`,{className:`dos-line`,children:`BIOS Version 6.00, 03/12/2001`}),(0,v.jsx)(`div`,{className:`dos-line`,children:`Starting Windows...`}),(0,v.jsx)(`div`,{className:`dos-line`,children:`Initializing devices...`}),(0,v.jsx)(`div`,{className:`dos-line`,children:`Loading system files...`}),(0,v.jsx)(`div`,{className:`dos-line`,children:`Detecting IDE drives...`}),(0,v.jsx)(`div`,{className:`dos-line`,children:`Press F18 for advanced options`}),(0,v.jsx)(`div`,{className:`dos-cursor`,children:`_`})]})}),b=()=>(0,v.jsx)(w,{children:(0,v.jsx)(`img`,{src:h(`/images/starting_screen.gif`),alt:`Windows starting screen`,className:`boot-image`})}),x=()=>(0,v.jsxs)(O,{children:[(0,v.jsx)(`div`,{className:`xp-spacer`}),(0,v.jsx)(`main`,{className:`xp-main-area`,children:(0,v.jsx)(`h1`,{className:`welcome-title`,children:`Welcome`})}),(0,v.jsx)(`div`,{className:`xp-spacer`})]}),S=({message:e})=>(0,v.jsxs)(O,{children:[(0,v.jsx)(`div`,{className:`xp-spacer`}),(0,v.jsx)(`main`,{className:`xp-main-area`,children:(0,v.jsxs)(`div`,{className:`logoff-box`,children:[(0,v.jsx)(`img`,{src:h(`/react-xp/logo__windows_xp.png`),alt:`Windows XP`,className:`logoff-logo`}),(0,v.jsx)(`h3`,{className:`logoff-title`,children:e})]})}),(0,v.jsx)(`div`,{className:`xp-spacer`})]}),C=()=>(0,v.jsx)(D,{children:(0,v.jsx)(`div`,{className:`off-screen__text`})}),w=l.div`
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
`,T=l.div`
  position: absolute;
  inset: 0;
  z-index: 10000;
  background: #000;
  pointer-events: none;
  opacity: ${({phase:e})=>e===`fade-to-black`||e===`hold-black`?1:0};
  visibility: ${({phase:e})=>e===`idle`?`hidden`:`visible`};
  transition: opacity
    ${({phase:e,fadeToBlackDuration:t,fadeToDesktopDuration:n})=>e===`fade-to-desktop`?n:t}ms linear;
`,E=l.div`
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
`,D=l.div`
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
`,O=l.div`
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
`,k=1500,A=8e3,j=6e3,M=600,N=700,P=1200,F=Math.max(j,M),I=k+A+F,L=1e4,R=12e3,z=9e3,B=2e3,V=2e3,H=.3,U=.3,W={DEVELOPMENT:`development`,DISPLAY:`display`},G=W.DISPLAY===W.DISPLAY?g.BOOTING:g.START,K=null;function q(e,t={}){window.__outerWebsiteRecordStartupTiming?.(`winxp.${e}`,t)}function J(){return K?q(`desktopShell.import.reuse`):(q(`desktopShell.import.start`),K=o(()=>import(`./DesktopShell-fdMVX-uE.js`).then(e=>(q(`desktopShell.import.end`),e),e=>{throw q(`desktopShell.import.error`,{message:e?.message??String(e)}),e}),__vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14]))),K}var ne=(0,_.lazy)(J);function Y(){let e=(0,_.useMemo)(()=>t(),[]),[o,s]=(0,_.useState)(G),[c,l]=(0,_.useState)(`dos`),[u,d]=(0,_.useState)(`idle`),[p,y]=(0,_.useState)(`Logging off...`),[b,x]=(0,_.useState)(()=>r(a)),[S,C]=(0,_.useState)(G===g.START),[w,T]=(0,_.useState)(null),E=(0,_.useRef)(o),D=(0,_.useRef)(u),O=(0,_.useRef)(null),j=o===g.START,W=j&&(!b.focused||b.animating||!b.settled),K=j&&!W,Y=o===g.START&&u===`idle`,X=[g.BOOTING,g.START,g.LOG_OFF,g.TURN_OFF].includes(o)&&S,Z=(0,_.useCallback)(e=>{O.current=e,T(e??null),q(`desktopStage.ready`,{present:!!e})},[]),Q=(0,_.useCallback)(()=>{q(`desktopShell.request`,{powerState:o}),J().catch(e=>{console.warn(`Failed to preload WinXP desktop shell.`,e)}),(0,_.startTransition)(()=>{C(!0)})},[o]);return(0,_.useEffect)(()=>(q(`component.mounted`,{initialPowerState:G,currentPowerState:o}),()=>{q(`component.unmounted`)}),[]),(0,_.useEffect)(()=>{ee(e)},[e]),(0,_.useEffect)(()=>{let e=!!O.current&&[g.START,g.LOG_OFF,g.TURN_OFF].includes(o),t=e&&(!b.focused||b.animating||!b.settled),r={powerState:o,desktopVisible:e,desktopFrozen:t,desktopInteractive:e&&!t};n(r),q(`presentation.publish`,r)},[w,b.animating,b.focused,b.settled,o]),(0,_.useEffect)(()=>i(e=>{q(`outerFocus.received`,e??{}),x(e??r(a))},{invokeImmediately:!0,fallbackValue:a}),[]),(0,_.useEffect)(()=>{let e=E.current;q(`powerState.effect`,{prevState:e,powerState:o}),[g.SHUTTING_DOWN,g.RESTARTING].includes(o)&&![g.SHUTTING_DOWN,g.RESTARTING,g.OFF].includes(e)&&(m(),C(!1)),e===g.BOOTING&&o===g.START&&(f(h(`/sounds/startup.mp3`),H),q(`powerState.bootToStart`),Q()),E.current=o},[o,Q]),(0,_.useEffect)(()=>{[g.START,g.LOG_OFF,g.TURN_OFF].includes(o)&&Q()},[o,Q]),(0,_.useEffect)(()=>{let e;return o===g.BOOTING&&(q(`powerTimer.schedule`,{powerState:o,delayMs:I}),e=setTimeout(()=>{q(`powerTimer.fire`,{from:g.BOOTING,to:g.START}),s(g.START)},I)),o===g.SHUTTING_DOWN&&(f(h(`/sounds/shutdown.mp3`),U),q(`powerTimer.schedule`,{powerState:o,delayMs:L}),e=setTimeout(()=>{q(`powerTimer.fire`,{from:g.SHUTTING_DOWN,to:g.OFF}),s(g.OFF)},L)),o===g.RESTARTING&&(f(h(`/sounds/shutdown.mp3`),U),q(`powerTimer.schedule`,{powerState:o,delayMs:R}),e=setTimeout(()=>{q(`powerTimer.fire`,{from:g.RESTARTING,to:g.BOOTING}),s(g.BOOTING)},R)),o===g.OFF&&(q(`powerTimer.schedule`,{powerState:o,delayMs:z}),e=setTimeout(()=>{q(`powerTimer.fire`,{from:g.OFF,to:g.BOOTING}),s(g.BOOTING)},z)),()=>clearTimeout(e)},[o]),(0,_.useEffect)(()=>{if(q(`bootStage.effect`,{powerState:o,bootStage:c}),o!==g.BOOTING){l(`dos`);return}l(`dos`);let e=setTimeout(()=>{q(`bootStage.timer.fire`,{to:`boot`}),l(`boot`)},k),t=setTimeout(()=>{q(`bootStage.timer.fire`,{to:`welcome`}),l(`welcome`)},k+A);return()=>{clearTimeout(e),clearTimeout(t)}},[o]),(0,_.useEffect)(()=>{q(`welcomeTransition.phase`,{powerState:o,bootStage:c,phase:u}),D.current=u},[c,o,u]),(0,_.useEffect)(()=>{if(o===g.BOOTING&&c===`welcome`){let e=Math.max(0,F-M);d(`idle`);let t=setTimeout(()=>{q(`welcomeTransition.timer.fire`,{to:`fade-to-black`}),d(`fade-to-black`)},e);return()=>clearTimeout(t)}o!==g.START&&d(`idle`)},[c,o]),(0,_.useEffect)(()=>{if(o!==g.START||D.current!==`fade-to-black`)return;d(`hold-black`);let e=setTimeout(()=>{q(`welcomeTransition.timer.fire`,{to:`fade-to-desktop`}),d(`fade-to-desktop`)},N),t=setTimeout(()=>{q(`welcomeTransition.timer.fire`,{to:`idle`}),d(`idle`)},N+P);return()=>{clearTimeout(e),clearTimeout(t)}},[o]),(0,_.useEffect)(()=>{if(![g.SHUTTING_DOWN,g.RESTARTING,g.OFF].includes(o)){y(`Logging off...`);return}y(`Logging off...`);let e=setTimeout(()=>{y(o===g.RESTARTING?`Windows is restarting.`:`Windows is shutting down...`)},o===g.RESTARTING?V:B);return()=>clearTimeout(e)},[o]),(0,v.jsxs)(re,{children:[(0,v.jsx)(ie,{children:X&&(0,v.jsx)(_.Suspense,{fallback:null,children:(0,v.jsx)(ne,{powerState:o,outerFocusSettled:!!b.settled,desktopVisible:j,desktopFrozen:W,desktopInteractive:K,startupHydrationReady:Y,onRequestPowerStateChange:s,onStageReady:Z})})}),(0,v.jsx)(te,{powerState:o,bootStage:c,welcomeTransitionPhase:u,logoffText:p,welcomeFadeToBlackDuration:M,welcomeFadeToDesktopDuration:P})]})}var re=l.div`
  font-family: Tahoma, 'Microsoft JhengHei UI', 'Microsoft JhengHei', 'Segoe UI', sans-serif;
  height: 100%;
  overflow: hidden;
  position: relative;
  background: #000;
  *:not(input):not(textarea) {
    user-select: none;
  }
`,ie=l.div`
  position: absolute;
  inset: 0;
  display: block;
`,X=()=>(0,v.jsx)(Y,{});p();function Z(e){return(0,v.jsx)(s,{children:(0,v.jsx)(X,{...e})})}function Q({className:e,style:t,...n}){return(0,v.jsx)(`div`,{className:e,style:{position:`relative`,width:`100%`,height:`100%`,overflow:`hidden`,...t},"data-winxp-host":`true`,children:(0,v.jsx)(Z,{...n})})}var ae=u();function $(e,t={}){window.__outerWebsiteRecordStartupTiming?.(`winxpHost.${e}`,t)}function oe(e,t={}){if(!e)throw Error(`WinXP host container is required.`);$(`mount.start`);let n=(0,ae.createRoot)(e),r=t,i=0,a=()=>{i+=1,i<=3&&$(`render.start`,{renderCount:i}),n.render((0,v.jsx)(Q,{...r})),i<=3&&$(`render.end`,{renderCount:i})};return a(),$(`mount.end`),{update(e={}){r=e,a()},dispose(){$(`dispose`),n.unmount()}}}export{oe as t};