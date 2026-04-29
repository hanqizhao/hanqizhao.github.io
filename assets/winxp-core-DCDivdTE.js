const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/DesktopShell-CoPqDl94.js","assets/react-vendor-DbC8iAKZ.js","assets/rolldown-runtime-BVbofQct.js","assets/winxp-shell-CRqVcIZz.js","assets/InternetExplorer-CSHHKyux.js","assets/Minesweeper-sIlZIa-m.js","assets/ErrorBox-DpkmV2g3.js","assets/MyComputer-C6uAEra-.js","assets/MyShowcase-BlmkSBwv.js","assets/winxp-myshowcase-CpYha3Xq.js","assets/Notepad-CC7Z1ERi.js","assets/Winamp-Bk8Y4tqW.js","assets/webamp-vendor-BB6YeldL.js","assets/winxp-winamp-03PNtiIZ.js","assets/Paint-Y203zhwQ.js"])))=>i.map(i=>d[i]);
import{n as e,t}from"./rolldown-runtime-BVbofQct.js";import{a as n,c as r,i,o as a,s as o,t as s}from"./react-vendor-DbC8iAKZ.js";function c(){let e=Number(window.navigator.deviceMemory||0),t=Number(window.navigator.hardwareConcurrency||0),n=window.matchMedia?.(`(prefers-reduced-motion: reduce)`).matches??!1,r=window.matchMedia?.(`(pointer: coarse)`).matches??!1,i=/Android|iPhone|iPad|iPod|Mobile/i.test(window.navigator.userAgent||``),a=0;e>0&&e<=6&&(a+=1),t>0&&t<=6&&(a+=1),n&&(a+=1),(r||i)&&(a+=1);let o=a>=2;return{lowTierDetected:o,shouldDefaultPostFxOff:o,preferredBloomEnabled:!o,preferredMsaaSamples:o?0:e>=12||t>=12?4:2,deviceMemory:e,hardwareConcurrency:t,prefersReducedMotion:n,coarsePointer:r,isLikelyMobile:i}}var l=Symbol.for(`outerWebsite.winxp.runtimeBridge`),u={SET_MUTED:`outer-website:set-global-audio-muted`,SET_VOLUME:`outer-website:set-global-audio-volume`},d={focused:!1,animating:!1,settled:!1},f={focused:!0,animating:!1,settled:!0};function p(e){window.setTimeout(()=>{throw e},0)}function m(e,t){e.forEach(e=>{try{e(t)}catch(e){p(e)}})}function h(){return window[l]||(window[l]={outerFocusState:null,desktopPresentationState:null,desktopPresentationProfile:null,listeners:{outerFocusState:new Set,desktopPresentationState:new Set,audioControl:new Set,desktopPresentationProfile:new Set}}),window[l]}function g(e,t,n,r={}){return e.add(t),r.invokeImmediately&&t(n),()=>{e.delete(t)}}function _(e=d){return h().outerFocusState??e}function v(e,t={}){let n=h(),r=e??d;return n.outerFocusState=r,m(n.listeners.outerFocusState,r),r}function y(e,t={}){let n=h(),r=t.fallbackValue??d;return g(n.listeners.outerFocusState,e,n.outerFocusState??r,t)}function b(e=null){return h().desktopPresentationState??e}function ee(e,t={}){let n=h(),r=e??null;return n.desktopPresentationState=r,m(n.listeners.desktopPresentationState,r),r}function x(e,t={}){let n=h();return g(n.listeners.desktopPresentationState,e,n.desktopPresentationState??null,t)}function S(e){let t=h(),n=e??null;return t.desktopPresentationProfile=n,m(t.listeners.desktopPresentationProfile,n),n}function C(e=null){return h().desktopPresentationProfile??e}function w(e){return e?.type?(m(h().listeners.audioControl,e),e):null}function T(e){return g(h().listeners.audioControl,e,null,{invokeImmediately:!1})}var E=`modulepreload`,D=function(e){return`/`+e},O={},k=function(e,t,n){let r=Promise.resolve();if(t&&t.length>0){let e=document.getElementsByTagName(`link`),i=document.querySelector(`meta[property=csp-nonce]`),a=i?.nonce||i?.getAttribute(`nonce`);function o(e){return Promise.all(e.map(e=>Promise.resolve(e).then(e=>({status:`fulfilled`,value:e}),e=>({status:`rejected`,reason:e}))))}r=o(t.map(t=>{if(t=D(t,n),t in O)return;O[t]=!0;let r=t.endsWith(`.css`),i=r?`[rel="stylesheet"]`:``;if(n)for(let n=e.length-1;n>=0;n--){let i=e[n];if(i.href===t&&(!r||i.rel===`stylesheet`))return}else if(document.querySelector(`link[href="${t}"]${i}`))return;let o=document.createElement(`link`);if(o.rel=r?`stylesheet`:E,r||(o.as=`script`),o.crossOrigin=``,o.href=t,a&&o.setAttribute(`nonce`,a),document.head.appendChild(o),r)return new Promise((e,n)=>{o.addEventListener(`load`,e),o.addEventListener(`error`,()=>n(Error(`Unable to preload CSS for ${t}`)))})}))}function i(e){let t=new Event(`vite:preloadError`,{cancelable:!0});if(t.payload=e,window.dispatchEvent(t),!t.defaultPrevented)throw e}return r.then(t=>{for(let e of t||[])e.status===`rejected`&&i(e.reason);return e().catch(i)})},te=.25,A=80;function j(e){return Math.max(0,Math.min(1,Number.isFinite(e)?e:1))}function M(e){return!!e?.__outerWebsiteIgnoreGlobalAudio}function ne(){let e=new Set,t=window.Audio,n=document.createElement.bind(document),r=window.HTMLMediaElement.prototype.play,i=Object.getOwnPropertyDescriptor(window.HTMLMediaElement.prototype,`volume`),a={isMuted:!1,volume:1},o=e=>{if(!(e instanceof window.HTMLMediaElement)||!i?.set||M(e))return;let t=j(typeof e.__outerWebsiteBaseVolume==`number`?e.__outerWebsiteBaseVolume:i.get.call(e));e.__outerWebsiteApplyingVolume=!0,i.set.call(e,j(t*a.volume)),e.__outerWebsiteApplyingVolume=!1},s=e=>{!(e instanceof window.HTMLMediaElement)||M(e)||(e.muted=a.isMuted||e.__outerWebsiteTempMuted===!0)},c=t=>!(t instanceof window.HTMLMediaElement)||e.has(t)||M(t)?t:(e.add(t),i?.get&&(t.__outerWebsiteBaseVolume=j(i.get.call(t))),s(t),o(t),t.addEventListener(`emptied`,()=>{t.__outerWebsiteTempMuted=!1,s(t),o(t)},{passive:!0}),t),l=e=>{window.setTimeout(()=>{e.currentTime<te&&(e.currentTime=0),e.__outerWebsiteTempMuted=!1,s(e)},A)},d=function(...e){if(M(this))return r.apply(this,e);let t=c(this),n=r.apply(t,e);return!n||typeof n.catch!=`function`?n:n.catch(async n=>{if(n?.name!==`NotAllowedError`)throw n;t.__outerWebsiteTempMuted=!0,s(t);try{let n=r.apply(t,e);return n&&typeof n.then==`function`&&await n,l(t),n}catch(e){throw t.__outerWebsiteTempMuted=!1,s(t),e}})};function f(...e){return c(new t(...e))}f.prototype=t.prototype,Object.setPrototypeOf(f,t),document.createElement=function(e,t){let r=n(e,t),i=String(e).toLowerCase();return(i===`audio`||i===`video`)&&c(r),r},window.Audio=f,window.HTMLMediaElement.prototype.play=d,i?.get&&i?.set&&Object.defineProperty(window.HTMLMediaElement.prototype,`volume`,{configurable:!0,enumerable:i.enumerable,get(){return i.get.call(this)},set(e){let t=j(e);if(M(this)){i.set.call(this,t);return}if(this.__outerWebsiteApplyingVolume){i.set.call(this,t);return}this.__outerWebsiteBaseVolume=t,o(this)}});let p=t=>{a.isMuted=!!t,e.forEach(s)},m=t=>{a.volume=j(t),e.forEach(o)},h=()=>{e.forEach(e=>{if(e instanceof window.HTMLMediaElement)try{e.pause()}catch{}})},g=T(e=>{if(e?.type===u.SET_MUTED){p(e.muted);return}e?.type===u.SET_VOLUME&&m(e.volume)});return document.querySelectorAll(`audio, video`).forEach(c),{getMuted:()=>a.isMuted,getVolume:()=>a.volume,pauseAll:h,registerMediaElement:c,setMuted:p,setVolume:m,dispose(){g()}}}function re(){return window.__outerWebsiteAudioRuntime||(window.__outerWebsiteAudioRuntime=ne()),window.__outerWebsiteAudioRuntime}function N(e,t=1){let n=new Audio(e);return n.preload=`auto`,n.volume=t,n.play().catch(()=>{}),n}function P(){return re().pauseAll()}var ie=`/winxp`;function F(e=``){return e?/^(https?:)?\/\//i.test(e)||e.startsWith(`data:`)?e:e.startsWith(`/`)?`${ie}${e}`:`${ie}/${e}`:ie}var ae={WINDOW:`WINDOW`,ICON:`ICON`,DESKTOP:`DESKTOP`},I={START:`START`,LOG_OFF:`LOG_OFF`,TURN_OFF:`TURN_OFF`,BOOTING:`BOOTING`,SHUTTING_DOWN:`SHUTTING_DOWN`,RESTARTING:`RESTARTING`,OFF:`OFF`},L=e(r(),1),R=s();function oe({powerState:e,bootStage:t,welcomeTransitionPhase:n,logoffText:r,welcomeFadeToBlackDuration:i,welcomeFadeToDesktopDuration:a}){return(0,R.jsxs)(R.Fragment,{children:[e===I.BOOTING&&(t===`dos`?(0,R.jsx)(z,{}):t===`boot`?(0,R.jsx)(se,{}):(0,R.jsx)(ce,{})),(e===I.SHUTTING_DOWN||e===I.RESTARTING)&&(0,R.jsx)(le,{message:r}),e===I.OFF&&(0,R.jsx)(ue,{}),(0,R.jsx)(fe,{phase:n,fadeToBlackDuration:i,fadeToDesktopDuration:a})]})}var z=()=>(0,R.jsx)(pe,{children:(0,R.jsxs)(`div`,{className:`dos-content`,children:[(0,R.jsx)(`div`,{className:`dos-line`,children:`Microsoft(R) Windows XP (TM)`}),(0,R.jsx)(`div`,{className:`dos-line`,children:`Copyright (C) Microsoft Corporation`}),(0,R.jsx)(`div`,{className:`dos-line`,children:`BIOS Version 6.00, 03/12/2001`}),(0,R.jsx)(`div`,{className:`dos-line`,children:`Starting Windows...`}),(0,R.jsx)(`div`,{className:`dos-line`,children:`Initializing devices...`}),(0,R.jsx)(`div`,{className:`dos-line`,children:`Loading system files...`}),(0,R.jsx)(`div`,{className:`dos-line`,children:`Detecting IDE drives...`}),(0,R.jsx)(`div`,{className:`dos-line`,children:`Press F18 for advanced options`}),(0,R.jsx)(`div`,{className:`dos-cursor`,children:`_`})]})}),se=()=>(0,R.jsx)(de,{children:(0,R.jsx)(`img`,{src:F(`/images/starting_screen.gif`),alt:`Windows starting screen`,className:`boot-image`})}),ce=()=>(0,R.jsxs)(he,{children:[(0,R.jsx)(`div`,{className:`xp-spacer`}),(0,R.jsx)(`main`,{className:`xp-main-area`,children:(0,R.jsx)(`h1`,{className:`welcome-title`,children:`Welcome`})}),(0,R.jsx)(`div`,{className:`xp-spacer`})]}),le=({message:e})=>(0,R.jsxs)(he,{children:[(0,R.jsx)(`div`,{className:`xp-spacer`}),(0,R.jsx)(`main`,{className:`xp-main-area`,children:(0,R.jsxs)(`div`,{className:`logoff-box`,children:[(0,R.jsx)(`img`,{src:F(`/react-xp/logo__windows_xp.png`),alt:`Windows XP`,className:`logoff-logo`}),(0,R.jsx)(`h3`,{className:`logoff-title`,children:e})]})}),(0,R.jsx)(`div`,{className:`xp-spacer`})]}),ue=()=>(0,R.jsx)(me,{children:(0,R.jsx)(`div`,{className:`off-screen__text`})}),de=a.div`
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
`,fe=a.div`
  position: absolute;
  inset: 0;
  z-index: 10000;
  background: #000;
  pointer-events: none;
  opacity: ${({phase:e})=>e===`fade-to-black`||e===`hold-black`?1:0};
  visibility: ${({phase:e})=>e===`idle`?`hidden`:`visible`};
  transition: opacity
    ${({phase:e,fadeToBlackDuration:t,fadeToDesktopDuration:n})=>e===`fade-to-desktop`?n:t}ms linear;
`,pe=a.div`
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
`,me=a.div`
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
`,he=a.div`
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
`,ge=1500,_e=8e3,ve=6e3,ye=600,be=700,B=1200,xe=Math.max(ve,ye),Se=ge+_e+xe,Ce=1e4,V=12e3,H=9e3,we=2e3,Te=2e3,Ee=.3,De=.3,Oe={DEVELOPMENT:`development`,DISPLAY:`display`},ke=Oe.DISPLAY===Oe.DISPLAY?I.BOOTING:I.START,Ae=null;function U(e,t={}){window.__outerWebsiteRecordStartupTiming?.(`winxp.${e}`,t)}function je(){return Ae?U(`desktopShell.import.reuse`):(U(`desktopShell.import.start`),Ae=k(()=>import(`./DesktopShell-CoPqDl94.js`).then(e=>(U(`desktopShell.import.end`),e),e=>{throw U(`desktopShell.import.error`,{message:e?.message??String(e)}),e}),__vite__mapDeps([0,1,2,3]))),Ae}var Me=(0,L.lazy)(je);function Ne(){let e=(0,L.useMemo)(()=>c(),[]),[t,n]=(0,L.useState)(ke),[r,i]=(0,L.useState)(`dos`),[a,o]=(0,L.useState)(`idle`),[s,l]=(0,L.useState)(`Logging off...`),[u,d]=(0,L.useState)(()=>_(f)),[p,m]=(0,L.useState)(ke===I.START),[h,g]=(0,L.useState)(null),v=(0,L.useRef)(t),b=(0,L.useRef)(a),x=(0,L.useRef)(null),C=t===I.START,w=C&&(!u.focused||u.animating||!u.settled),T=C&&!w,E=t===I.START&&a===`idle`,D=[I.BOOTING,I.START,I.LOG_OFF,I.TURN_OFF].includes(t)&&p,O=(0,L.useCallback)(e=>{x.current=e,g(e??null),U(`desktopStage.ready`,{present:!!e})},[]),k=(0,L.useCallback)(()=>{U(`desktopShell.request`,{powerState:t}),je().catch(e=>{console.warn(`Failed to preload WinXP desktop shell.`,e)}),(0,L.startTransition)(()=>{m(!0)})},[t]);return(0,L.useEffect)(()=>(U(`component.mounted`,{initialPowerState:ke,currentPowerState:t}),()=>{U(`component.unmounted`)}),[]),(0,L.useEffect)(()=>{S(e)},[e]),(0,L.useEffect)(()=>{let e=!!x.current&&[I.START,I.LOG_OFF,I.TURN_OFF].includes(t),n=e&&(!u.focused||u.animating||!u.settled),r={powerState:t,desktopVisible:e,desktopFrozen:n,desktopInteractive:e&&!n};ee(r),U(`presentation.publish`,r)},[h,u.animating,u.focused,u.settled,t]),(0,L.useEffect)(()=>y(e=>{U(`outerFocus.received`,e??{}),d(e??_(f))},{invokeImmediately:!0,fallbackValue:f}),[]),(0,L.useEffect)(()=>{let e=v.current;U(`powerState.effect`,{prevState:e,powerState:t}),[I.SHUTTING_DOWN,I.RESTARTING].includes(t)&&![I.SHUTTING_DOWN,I.RESTARTING,I.OFF].includes(e)&&(P(),m(!1)),e===I.BOOTING&&t===I.START&&(N(F(`/sounds/startup.mp3`),Ee),U(`powerState.bootToStart`),k()),v.current=t},[t,k]),(0,L.useEffect)(()=>{[I.START,I.LOG_OFF,I.TURN_OFF].includes(t)&&k()},[t,k]),(0,L.useEffect)(()=>{let e;return t===I.BOOTING&&(U(`powerTimer.schedule`,{powerState:t,delayMs:Se}),e=setTimeout(()=>{U(`powerTimer.fire`,{from:I.BOOTING,to:I.START}),n(I.START)},Se)),t===I.SHUTTING_DOWN&&(N(F(`/sounds/shutdown.mp3`),De),U(`powerTimer.schedule`,{powerState:t,delayMs:Ce}),e=setTimeout(()=>{U(`powerTimer.fire`,{from:I.SHUTTING_DOWN,to:I.OFF}),n(I.OFF)},Ce)),t===I.RESTARTING&&(N(F(`/sounds/shutdown.mp3`),De),U(`powerTimer.schedule`,{powerState:t,delayMs:V}),e=setTimeout(()=>{U(`powerTimer.fire`,{from:I.RESTARTING,to:I.BOOTING}),n(I.BOOTING)},V)),t===I.OFF&&(U(`powerTimer.schedule`,{powerState:t,delayMs:H}),e=setTimeout(()=>{U(`powerTimer.fire`,{from:I.OFF,to:I.BOOTING}),n(I.BOOTING)},H)),()=>clearTimeout(e)},[t]),(0,L.useEffect)(()=>{if(U(`bootStage.effect`,{powerState:t,bootStage:r}),t!==I.BOOTING){i(`dos`);return}i(`dos`);let e=setTimeout(()=>{U(`bootStage.timer.fire`,{to:`boot`}),i(`boot`)},ge),n=setTimeout(()=>{U(`bootStage.timer.fire`,{to:`welcome`}),i(`welcome`)},ge+_e);return()=>{clearTimeout(e),clearTimeout(n)}},[t]),(0,L.useEffect)(()=>{U(`welcomeTransition.phase`,{powerState:t,bootStage:r,phase:a}),b.current=a},[r,t,a]),(0,L.useEffect)(()=>{if(t===I.BOOTING&&r===`welcome`){let e=Math.max(0,xe-ye);o(`idle`);let t=setTimeout(()=>{U(`welcomeTransition.timer.fire`,{to:`fade-to-black`}),o(`fade-to-black`)},e);return()=>clearTimeout(t)}t!==I.START&&o(`idle`)},[r,t]),(0,L.useEffect)(()=>{if(t!==I.START||b.current!==`fade-to-black`)return;o(`hold-black`);let e=setTimeout(()=>{U(`welcomeTransition.timer.fire`,{to:`fade-to-desktop`}),o(`fade-to-desktop`)},be),n=setTimeout(()=>{U(`welcomeTransition.timer.fire`,{to:`idle`}),o(`idle`)},be+B);return()=>{clearTimeout(e),clearTimeout(n)}},[t]),(0,L.useEffect)(()=>{if(![I.SHUTTING_DOWN,I.RESTARTING,I.OFF].includes(t)){l(`Logging off...`);return}l(`Logging off...`);let e=setTimeout(()=>{l(t===I.RESTARTING?`Windows is restarting.`:`Windows is shutting down...`)},t===I.RESTARTING?Te:we);return()=>clearTimeout(e)},[t]),(0,R.jsxs)(Pe,{children:[(0,R.jsx)(Fe,{children:D&&(0,R.jsx)(L.Suspense,{fallback:null,children:(0,R.jsx)(Me,{powerState:t,outerFocusSettled:!!u.settled,desktopVisible:C,desktopFrozen:w,desktopInteractive:T,startupHydrationReady:E,onRequestPowerStateChange:n,onStageReady:O})})}),(0,R.jsx)(oe,{powerState:t,bootStage:r,welcomeTransitionPhase:a,logoffText:s,welcomeFadeToBlackDuration:ye,welcomeFadeToDesktopDuration:B})]})}var Pe=a.div`
  font-family: Tahoma, 'Microsoft JhengHei UI', 'Microsoft JhengHei', 'Segoe UI', sans-serif;
  height: 100%;
  overflow: hidden;
  position: relative;
  background: #000;
  *:not(input):not(textarea) {
    user-select: none;
  }
`,Fe=a.div`
  position: absolute;
  inset: 0;
  display: block;
`,Ie=()=>(0,R.jsx)(Ne,{});re();function Le(e){return(0,R.jsx)(n,{disableCSSOMInjection:!0,children:(0,R.jsx)(Ie,{...e})})}function Re({className:e,style:t,...n}){return(0,R.jsx)(`div`,{className:e,style:{position:`relative`,width:`100%`,height:`100%`,overflow:`hidden`,...t},"data-winxp-host":`true`,children:(0,R.jsx)(Le,{...n})})}var ze=o();function W(e,t={}){window.__outerWebsiteRecordStartupTiming?.(`winxpHost.${e}`,t)}function Be(e,t={}){if(!e)throw Error(`WinXP host container is required.`);W(`mount.start`);let n=(0,ze.createRoot)(e),r=t,i=0,a=()=>{i+=1,i<=3&&W(`render.start`,{renderCount:i}),n.render((0,R.jsx)(Re,{...r})),i<=3&&W(`render.end`,{renderCount:i})};return a(),W(`mount.end`),{update(e={}){r=e,a()},dispose(){W(`dispose`),n.unmount()}}}var Ve=`ADD_APP`,He=`DEL_APP`,Ue=`FOCUS_APP`,We=`MINIMIZE_APP`,Ge=`TOGGLE_MAXIMIZE_APP`,G=`FOCUS_ICON`,K=`SELECT_ICONS`,Ke=`FOCUS_DESKTOP`,qe=`START_SELECT`,Je=`END_SELECT`,Ye=`RESET_DESKTOP_SESSION`,q=`SET_APP_COMPONENT`,Xe={x:80,y:10},Ze={width:910,height:685},Qe=8,J=116,$e=275,Y={x:Xe.x+Ze.width+Qe,y:Xe.y},et={width:$e,height:J*3},tt={main:{position:{x:0,y:0}},equalizer:{position:{x:0,y:J}},playlist:{position:{x:0,y:J*2}}};Y.x,Y.y,Y.x,Y.y+J,Y.x,Y.y+J*2;var X=`data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAA8UlEQVR42pWSsQ2DMBBFrYiNbhZqqngFWlfs4G0YwHVWQKIKZZTC8b/kHHMYSCx9YYHf88dgTDH6vo/DMJzG7A0Izob3PrZtG48Fz/tuIMC1KtECYwOnFAAkohylcBkqYbIxLsvC8xACt8BmqoWLNj3waQHRO4ljicC4zvOcJYXApRtY7leVITHhKwGMTNONJVnA7x48V9WvICnhlQBwSLtTWiQCaSDVAWIOcNOg6zqub+jdABnHkcNnwVK/38A58zk0m4EyGq6eAcDL9RGbpuEAktTgjUAk8iPpz6bhqkC+huxYAho+FODBr6kKcPOfvACzZogqWb89XgAAAABJRU5ErkJggg==`,nt=`data:image/png;base64,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`,rt=`data:image/png;base64,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`,it=`data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAAFiUAABYlAUlSJPAAAALfSURBVDhPhZJbSBRhGIb/2dlZ151dvMkjlCSJWopgCXuRGEpioIVrZBcl2RraRXYQ9ToQ7EIKNQqLLJCIUMsy8pBEKEIqVMZSiiKU583V3DRNd/ft3VEqKOiDh5n55n+f75/hF9/0ssayWRWrgUaxpqqWtfCwzPV9e6/7bLbuDau10RMScrI/wLAjVvyjfglUk1gLNO7yJCQ88dnt31FVBdTWAuXlQG4uvsbHvy8PDDyxFftdmkDWiRWL+YA3OXkaJSVATQ1QVwdUVm4KioqAnBxsJCZ6S02mK4xJm2mWm2G3osRt7N4945+0WFyMH3l5gNUKb3Q0EBcHD++/pKUBSUmYi4zEMYOhcisuxJxeb54PDn7sf+my2dDT1oaBigo4hcA8mSXP2G9tacGn7Gy4wsLwKChoxSLEIU0wYTAcnIyIcG9ERWEuNRVTY2NY8HrRV1qKj7KMVm79w8QEfACmCgowajRiICgIOXr9U03gUNW64W3b4AwNxZKqYjQ9Hc7JSaxQ4ujqwqzTCfh8mLLbNeFbkwm95LyifNYEvara3W82Y9hiwRgFH7jlNyn74Vpc4EzAS0aPH8cA+4MU9BkM6CAX9folTdBlDGh6wW29DgjAkKLgNRc+5890ud2awEP6y8rwkv1eSUIHJc2kSJbdmqBHls+2Koq3k80eLnqQlYWR6WkmPZhuaMDy3CyWKOmk5AknN1FyT6dDjk5yaYJqSYq6I8sjTQw3xsbi/fi49s2OwkK0sfcqIwPzMzNYpaQ9Px+32KuiYLskhjSBQk5K0oVGmhv4KY76erzjWWjmwkfkIenIzMREezvux8Sgms82rmXsqibwl14InV2S7t/gy5vkNrlL7pE7W71rhEcQp4kqRD9jcZvpreLZVA9L0l0eMVCt4Q/5J/qDl8lRTmZ4kMtTNlN/l7xTiBKKHKeEWD/DEK84Qvbw0HIINyR4+/8KJ9nkHLlEComVGMgfJcRP2tib7vMtW+8AAAAASUVORK5CYII=`,at=`data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAAFiUAABYlAUlSJPAAAALCSURBVDhPdZNvSFNRGMZvOEOIogLLjYS+2BfrSyZtU8Iiw4piEZouLDOJJkmWhAPT/JOZYcxi6rbKTVEnohvOqc106p1py6XOv4my6azcaJioBAn1dKYXhjAfeHm4557fw8t7zqF8SSqt3Ftaqjyt1fRktLdbCg3vR2mdbmReqezHPZFCcJiK2sls3Sqj0ai1WseXTSYLTCYrmppoVKl7oGwZxDt6FqUdNlw6+7j1oB8v3GfI8PAoJKpmvDKMoHpkAcbVPzD/Beh1oGkZKP8GXL1YNMr2554PpKICGMyrrs7+j4qhn3hhAyqdgIZA+lVAS1zlAkrswLW4smkOixdPOtjFYF6p6wzP1RYnsqY2N8u+A28XN/3lHJBN1pPFBhebxUs5RPF2M5hXudlvYloGFiAaAjLHgdxpoGAGyCMungBSyXpiTt8yCRAHUuH7GMwrz2A0GgtiTcAtM3D3yybk8eTPQFwfcL1sASTgWTAVsZ/BtqpePdgfq13CBSMg6CVDI2Ee93xfbv+D1OKvJIAvCwrgHmCQrZLL6PIbaieO6wBuK8BvA9I711BcP4eM+83usBARzWHxS7YNKMxvS7hT8wMnm/8hh/6NWo0NaWkfEB1djRNHhDRpP4vjxz+17WVq0VlfS2TD0OtnUVtrRUWFmcDyjUpMkDqPBV8R+jwBj+rqPiUtLS1hfv4XVlZWiDtI0ARSUmohEMiRl9eKzIc1FrZ/RAg5sx0M5lVDQ99Tl8u1AbvdbthsdtD0FCSSDgiFchQUtCInq9FJZpDEoaL2MJhXottynsUyvuZwOGC3z2FycgZG4xhUqm4yhyoS1IWYyHQLx5+f7vMehFKhrHORD+KL8lVjWo1pXa83kwc1AIWiG+KMykX+0Zu9ZIjSbd+CR54fHD8el0z6EdlcQ0pHqoVUI5vFfRLkzzvDocKY9inqP+OethPzSizLAAAAAElFTkSuQmCC`,ot=`data:image/png;base64,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`,st=`data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAAFiUAABYlAUlSJPAAAALrSURBVDhPrdBvSNN5HMDxZWjXwUWUF3V0dRURUWGQ9yjIlVe6yv5nFFR0J2KeYN5FUJmP1ErT0sqsXLq0Ule5hrXltLY0a7b5Z7qSbTY3hxN1XmYU/cH3/eD3g7Ke9obvky+fF3y/H9l3Ke3Edb+u7C/ys09QqUwg72Q2N87Hk3+qAHVRCkWXDOQc3vDyh2DZXImMLetiFxWqC9RY3Rh0xdQ8c1FeUYLa4ueesY5K+xuSj+cPB4eEyCUytuxb3eh9r6kf+oC+9w0qbx/nXH0Uukc43fWWVNsIu270fwyds3inRMaWoXZw1h2g2O2nwDVIut1LWruPo61+Upp7iWvsJ84wyrJNCYUSGVuxzkZ6e4AznQEy24c4YOkmscnH3+b/2Ns4QEytny26UXaevu8QxmeI6ou0JgsZ9h4OWgb51zLM7gYv200eYo2DbHwwhLzaj+KmsAf98KfQ2Qu3S+xzugYLV9zd7DG9Yk9DgHV1XqJqfKzT97Pmrp8ItYdoZS8HjaP8vi25SCBBopS6W29BO9DGDsMAWwwBVlU7iNS4WF/VQ5TayQqVHcU5Jwe0w2zN0NgF8osope4IX2h5ZyPxYS9rb3v5o7KdVddbUJQ9R3HVTkShFcXJVhKvuEgodbyf8uv8GImKaUxWbB/MZDZ7WHvNxcqSJ6xWNqG4bCW64CkRpx4RnVrP/pxn/FPeR9iGuLMSFdMYrTg+tlHqfsGmq52szKtDnmsgKqeRyJzHyLOa2JxlJ7nESdK1LsJi4u4L7EdRC902Wmh9Z8YU6GCfxisszEysuo2kWidHmp2kPe8gfF+mc2bY8txJ02cljQsKihRYsKiFquuFF9CC+e1jNP0vyPM9RDnwhNIeF4UdnaRqO5k6J0orjP4kiq9S6W1UeZwom16SXtVGfG7tyJqEy54l8hTTtHnrVRMnLzo2LmiCQhgdL4qvWrr8z4rfwuNv/jwvuiBk0oJDMtmEjcJ1uHBChfP5qd8kk/0PrH7NAleFCPMAAAAASUVORK5CYII=`,ct=`data:image/png;base64,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`,lt=`data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAAYdEVYdFNvZnR3YXJlAHBhaW50Lm5ldCA0LjEuNWRHWFIAAAGuSURBVFhHrZRRloMgDAB7yb3k/u2PB/MCLAMEAySIUt+bGkLIxNrXTwjhNfGKN3vPgzP6XLP5BJocx9E0m0Fdqv35wgClQTjPc2mIvP+X5OF3c4ByOMkFbwhyOX/JtwYoBxu5NQT3FCOcyFOtXswoB025UIfQ4okcmoXHipyaQV7EnhyGRM+qvMoeyMFMCndy9nfkYCZhRa5FnvzVADN5bapEnpz6u/+JMZGL18Q3yJl6tnNBu8hF2+KG+M1w3v2zqkHeHORDQ77unr4GeCXltdCHftYQ+cOQmwNIU2EmV2sZAPohuFg0YiHtqUYNllwG6/L00X31EHy6Q7gDePI+F+nlggwRq+a/gZ5BPnlq0P2E4RsQStI8lPcMuV4XPDEMvwEJasIYYpC/eGro5VCDJpmL0qEcF7kjhpkYLDk0Cw3Fg7yTgtRZUsGTw5AQqnzjqWEmBzup5Y74G3IYExP5qhhW5NAubuRclqxnVQ5XQGi8b/LSrNxNqfBEDldAqMQil/2mLl7fkMMVqAGIZ43K3rYcroDQeWqLUrclhyuI4dMmpf61HMzkE3bkIYTPP7z0VJ1idtq7AAAAAElFTkSuQmCC`,ut=`data:image/png;base64,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`,dt=`data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAAFiUAABYlAUlSJPAAAANiSURBVDhPY4CBP1vTu64W6/79t680DipEGjieJP1wo6fo/ysl2r+MjKwmWJvbO7pZuYkZGxtzOTg4cKzesN+yecLeL3JajtrSKg4yUkBxoDYmiG4gaLOWXD9ZV+D/VFvFf4pqZgtyY3yyfh/2eqVvZqOmY+ome/HigwMz5pz47xU98ZG0qoOPlLaNnIqKJztUOwT0lvb8SY2t+yulaLZyamPBjK/nlv3TMrAJ1TZ2sNl14MLSWQuv/XeNm/ZaUtWhWkLN3lRU24EHqhUCJu999il40r0/EkoWa2f3Ba+/uSrgv6a+TY2uiUvknb2brx+au+qvup7bdqALWmRUHc3V1a15oVohoGPB0RvR0+79C08suHJqk9zdPX28/5OK6/c0Z8TN/RMj9X+7nc5TXU2bdUoqNlmK6tbqCgoOHFCtDAzhyeVSk5aeeppUc/1/R9+yv9/PCfxZ1K72v3/3oz+vVtX+/mHG8L9VTuWhpor5Qm0V8xBjTVtJBwYHFqh2Bob9Jy8EtW3ec96zY9J/3/yo/x8Psv2f26L3v2DVk//Pavz/P9Hj/t+fkvNGW8Vijqm6pYeZhpkwA0MDIhY6piww2vXy0BvP3Zb/FdNY/99axvC/t9rqf1TXhf/3Yq3+PyuL/19U3flcW9t+qoWJi4OLSyg/igGRScVyB89d3DL7wtL/cYuz/5/c6/V/9drS/8v3n/7/vsbp/4f1M/7besZc1zJyb7WyDzJ1CA0FxsB/Rqh2CNh+4PjkBcdX/PebEvJ/8xyJ/xs2Zfy/tb39/998xf83z576J6lmd1DV2DPXzDlczSEhARSAqAZ0zFwZO+nAkf/+04L+T2oT+z9rQcb/B33B/x/mu/6fsWrHDyl1+43Khh4RhtYRUg4ODYgAhIHooh6r2vX7PobNjv1f2aD8f+PskP8/yrT+r2ru+Z/XMv29ooHbAm1LPw9L92QhhgYk/8OAW0SRfPPCDfMi52f+T+q2+39gbtb/T5nq/+ct3f7X3C3qipa5X5uxY6y5tV8SL8N/NP/DQFpZe0DBrIZr1TtW/d937Pb/4/Pn/IvKbniioOu6Ut8mJNHKM03Z0zMXNQ8gAzO3WEUNa78gGW2HdmEliyWCchYrxVXtZqoae+UZO0aY23hnCoaGrmKGqGZgAAAFjGphxzjy1wAAAABJRU5ErkJggg==`,ft=`data:image/png;base64,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`,pt=`data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAAFiUAABYlAUlSJPAAAAGSSURBVDhPlZPfK0NhGMfPktRSSklJaSUy0uJG7vwVbqRcmJYfLVJ+NKHWSvOzkaOllYSwJmYa2hJJm1JcKSVXshshotbX+zxnm43tNE99Op3zfr/f87zPeY/0u/ocp8hEiw8QEp1Ay+I0pTHPBJGpKCAW0iBIDQnL9Qgt1qHLfoSvKLB3mwo9M6xFEwjLTwiZ42Wy+fDyibSEHhVII2wjAl2SWWbax3bw9P63gzi0Rhphdgj0ErWNj1ngbYpps2zj4RWqkEaY5wXV0sWCAYhYQZ0QrYMb8Pj3VSHN7mgJhTRJ545a4H6IzVR3kWe+qhVpVsxaZQ5nczXATU8sQMZh4JIFbrHfdNAaaVzdecocTqargLCRP2FygBqkWe7MVeYQnKzkAO7kHwFOU44ScDxRzgEBe0UiIBuWOjRKgN+m44ADaxkH0Dyutpozcu1qZJ1slJQZiNJ5x0v5s3gsxXAPF2FzoBDr/QVY7c3nadPAaM9O0Ta9OWb2Cug08nmmc003dDiyhfTk46IQ+k31/0DoJe03D2xqsdaJ3cEAAAAASUVORK5CYII=`,Z={INTERNET_EXPLORER:`internet-explorer`,MINESWEEPER:`minesweeper`,ERROR:`error-box`,MY_COMPUTER:`my-computer`,MY_SHOWCASE:`my-showcase`,NOTEPAD:`notepad`,WINAMP:`winamp`,PAINT:`paint`},mt={[Z.INTERNET_EXPLORER]:()=>k(()=>import(`./InternetExplorer-CSHHKyux.js`),__vite__mapDeps([4,1,2])),[Z.MINESWEEPER]:()=>k(()=>import(`./Minesweeper-sIlZIa-m.js`),__vite__mapDeps([5,1,2])),[Z.ERROR]:()=>k(()=>import(`./ErrorBox-DpkmV2g3.js`),__vite__mapDeps([6,1,2])),[Z.MY_COMPUTER]:()=>k(()=>import(`./MyComputer-C6uAEra-.js`),__vite__mapDeps([7,1,2])),[Z.MY_SHOWCASE]:()=>k(()=>import(`./MyShowcase-BlmkSBwv.js`),__vite__mapDeps([8,1,2,9])),[Z.NOTEPAD]:()=>k(()=>import(`./Notepad-CC7Z1ERi.js`),__vite__mapDeps([10,1,2])),[Z.WINAMP]:()=>k(()=>import(`./Winamp-Bk8Y4tqW.js`),__vite__mapDeps([11,1,2,12,13])),[Z.PAINT]:()=>k(()=>import(`./Paint-Y203zhwQ.js`),__vite__mapDeps([14,1,2]))},ht=new Map;function gt(e){return e?.default??e}function _t(e){return ht.get(e)?.component??null}function vt(e){let t=ht.get(e);if(t?.component)return Promise.resolve(t.component);if(t?.promise)return t.promise;let n=mt[e];if(!n)return Promise.reject(Error(`Unknown WinXP app key: ${e}`));let r=n().then(gt).then(t=>(ht.set(e,{component:t,promise:null}),t)).catch(t=>{throw ht.delete(e),t});return ht.set(e,{component:null,promise:r}),r}function Q(e){return{...e,component:_t(e.appKey)}}var yt=()=>{let e=-1;return()=>(e+=1,e)},bt=yt(),xt=yt(),St={width:660,height:500},Ct={width:910,height:685},wt={x:80,y:10},Tt={...Y},Et=[Q({appKey:Z.WINAMP,header:{title:`Winamp`,icon:lt,invisible:!0},defaultSize:{width:0,height:0},defaultOffset:{x:Tt.x,y:Tt.y},resizable:!1,minimized:!1,maximized:!1,multiInstance:!1,id:bt(),zIndex:xt()}),Q({appKey:Z.MY_SHOWCASE,header:{title:`My Showcase`,icon:pt},defaultSize:{width:Ct.width,height:Ct.height},defaultOffset:{x:wt.x,y:wt.y},resizable:!1,minimized:!1,maximized:!1,multiInstance:!1,id:bt(),zIndex:xt()})],Dt=[{id:0,icon:nt,title:`Internet Explorer`,appKey:Z.INTERNET_EXPLORER,isFocus:!1},{id:1,icon:rt,title:`Minesweeper`,appKey:Z.MINESWEEPER,isFocus:!1},{id:2,icon:ot,title:`My Computer`,appKey:Z.MY_COMPUTER,isFocus:!1},{id:3,icon:ct,title:`Notepad`,appKey:Z.NOTEPAD,isFocus:!1},{id:4,icon:lt,title:`Winamp`,appKey:Z.WINAMP,isFocus:!1},{id:5,icon:ut,title:`Paint`,appKey:Z.PAINT,isFocus:!1},{id:6,icon:ft,title:`My Showcase`,appKey:Z.MY_SHOWCASE,isFocus:!1}],Ot={"Internet Explorer":Q({appKey:Z.INTERNET_EXPLORER,header:{icon:X,title:`InternetExplorer`},defaultSize:{width:700,height:500},defaultOffset:{x:140,y:30},resizable:!0,minimized:!1,maximized:window.innerWidth<800,multiInstance:!0}),Minesweeper:Q({appKey:Z.MINESWEEPER,header:{icon:rt,title:`Minesweeper`},defaultSize:{width:0,height:0},defaultOffset:{x:190,y:180},resizable:!1,minimized:!1,maximized:!1,multiInstance:!0}),Error:Q({appKey:Z.ERROR,header:{icon:it,title:`C:\\`,buttons:[`close`],noFooterWindow:!0},defaultSize:{width:380,height:0},defaultOffset:{x:window.innerWidth/2-190,y:window.innerHeight/2-60},resizable:!1,minimized:!1,maximized:!1,multiInstance:!0}),"My Computer":Q({appKey:Z.MY_COMPUTER,header:{icon:at,title:`My Computer`},defaultSize:St,defaultOffset:{x:260,y:50},resizable:!0,minimized:!1,maximized:window.innerWidth<800,multiInstance:!1}),"My Showcase":Q({appKey:Z.MY_SHOWCASE,header:{icon:pt,title:`My Showcase`},defaultSize:{width:Ct.width,height:Ct.height},defaultOffset:{x:wt.x,y:wt.y},resizable:!1,minimized:!1,maximized:!1,multiInstance:!1}),Notepad:Q({appKey:Z.NOTEPAD,header:{icon:st,title:`Untitled - Notepad`},defaultSize:{width:660,height:500},defaultOffset:{x:270,y:60},resizable:!0,minimized:!1,maximized:window.innerWidth<800,multiInstance:!0}),Winamp:Q({appKey:Z.WINAMP,header:{icon:lt,title:`Winamp`,invisible:!0},defaultSize:{width:0,height:0},defaultOffset:{x:Tt.x,y:Tt.y},resizable:!1,minimized:!1,maximized:!1,multiInstance:!1}),Paint:Q({appKey:Z.PAINT,header:{icon:dt,title:`Untitled - Paint`},defaultSize:{width:660,height:500},defaultOffset:{x:280,y:70},resizable:!0,minimized:!1,maximized:window.innerWidth<800,multiInstance:!0})},kt=`/assets/windows-off-UnECWoRH.png`,At=`data:image/png;base64,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`,jt=`data:image/png;base64,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`,Mt=`/assets/restart-CiWjLok5.ico`,Nt=`data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAOCAYAAAAfSC3RAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsQAAA7EAZUrDhsAAAJPSURBVDhPjZHbS9phHMZ/RVIUJZ1VLDErsJNGVHbCMpQOYlQSVBQdCIsCuxg127K20U3URazWgcpSy85mx0Eb7Krb3Y3tr/ksf7qLXW0feK/e7/M83/d5hdDPEDNPMzhuHfRf9mM/tdMR6KDN30b7UTsWnwXjgZG6/TrKt8rRrGhYflpGmH2aZe/7HivPK7i+uJj+PM3E3QRjN2OMXI8wcDVAz3kPtoCNpsMmdOs65LNyhMn7SVafV1n8tojz0YnjxsHQ1RB3v+4IYz2y0upvFUW1e7XoN/TkzuUiDAYHmfs6JyaNXo/Sd95H13GXKPpDxXYF+m09+i29mKiZ1yB0n3Yz9TDF+N04g5eD2E/sWH1WTB5TVBZBu6mleKuY0o1SNO4XYbiI0dAow8Fhes976TzupMXbgtFjpGq3KiqLULhdSNFmEWq3GsHsNdN30Re9+jcFOwXkLOQghJ3D6/4vqn0VsncyhMqdSvG/uk66RAPbiY3WwEuLJ00YzgzR8QjyCzkyr4y092kIJZ9KMB2YxNrD77UGrFgCFhrPGqPjERS3CjKCGUh9UpIWkxDy1vIw7Bpo9jbT4m/BfGTGdPx3o+p7NbIHGSmhFBJ8CUjcEgT5qpxwavVuNQ2eBuo99dQc1uD74RNF+cF8lCEl6TfpJF4mEueJI9YVi5D6IRXVioqitSJ0H3WUrZeJRtodLZp9DUqfkkx/Jsn+ZCQeCTFrMQhOAWHpcQmpU0rWqywUMwrxyF7LyHZlkz6fTvJCMonuROLfxhP75iVpWmDheoHfNvbnLyE6SFEAAAAASUVORK5CYII=`;function Pt({className:e,data:t,style:n,onClick:r}){let[i,a]=(0,L.useState)(-1);return(0,R.jsx)(`div`,{style:{...n},className:e,children:t.map((t,n)=>(0,R.jsx)(Ft,{onClick:r,onHover:a,hover:i===n,item:t,index:n,className:e},n))})}var Ft=({index:e,item:t,className:n,hover:r,onHover:i,onClick:a})=>{function o(){i(e)}function s(){a(t.text)}switch(t.type){case`item`:return(0,R.jsxs)(`div`,{onClick:s,onMouseEnter:o,className:`${n}-item`,children:[(0,R.jsx)(`img`,{className:`${n}-img`,src:t.icon,alt:``}),(0,R.jsx)(`div`,{className:`${n}-text`,children:t.text})]});case`separator`:return(0,R.jsx)(`div`,{className:`${n}-separator`});case`menu`:return(0,R.jsxs)(`div`,{onMouseEnter:o,className:`${n}-item ${r?`hover`:``}`,children:[(0,R.jsx)(`img`,{className:`${n}-img`,src:t.icon,alt:``}),(0,R.jsx)(`div`,{className:`${n}-text`,children:t.text}),(0,R.jsx)(`div`,{className:`${n}-arrow`,children:r&&(0,R.jsx)(It,{data:t.items,bottom:t.bottom,onClick:a})})]});default:return null}},It=a(Pt)`
  position: absolute;
  z-index: 1;
  left: ${({left:e})=>e||`100%`};
  bottom: ${({bottom:e})=>e||`-1px`};
  background-color: white;
  padding-left: 1px;
  box-shadow: inset 0 0 0 1px #72ade9, 2px 3px 3px rgb(0, 0, 0, 0.5);
  &-separator {
    padding: 0 5px;
    height: 2px;
    box-shadow: inset 3px 0 #4081ff;
    background: linear-gradient(
      to right,
      rgba(0, 0, 0, 0) 0%,
      rgba(0, 0, 0, 0.1) 50%,
      rgba(0, 0, 0, 0) 100%
    );
  }
  &-item {
    height: 25px;
    display: flex;
    align-items: center;
    padding: 0 10px;
    box-shadow: inset 3px 0 #4081ff;
    position: relative;
    padding-right: 22px;
    color: black;
  }
  &-item.hover {
    background-color: #1b65cc;
    color: white;
  }
  &-item:hover {
    background-color: #1b65cc;
    color: white;
    &-arrow:before {
      border-left-color: #fff;
    }
  }
  &-item:hover,
  &-item.hover > &-arrow:before {
    border-left-color: #fff;
  }
  &-img {
    margin-right: 6px;
    width: 16px;
    height: 16px;
  }
  &-text {
    font-size: 11px;
    white-space: nowrap;
  }
  &-arrow {
    position: absolute;
    right: 0;
    height: 100%;
    width: 10px;
    &:before {
      top: 9px;
      right: 6px;
      content: '';
      display: block;
      border: 4px solid transparent;
      border-right: 0;
      border-left-color: #000;
      position: absolute;
    }
  }
`,Lt=`data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAABmJLR0QA/wD/AP+gvaeTAAAACXBIWXMAABYlAAAWJQFJUiTwAAAHh0lEQVRYw+2X7Y9cVR3HP/fOnYed2Z3d2dmZ3WUL2+LCtgsrApWKCNjWhIAQU6IviBElomiQ+MJITDD8AxITIxrf4EvbBBMVI6UUtoKUx5YubaFP26d9mqedp537OPeec3wxd+iC0BKCr/RMzptz5+b7Od/zu7/f78D/+tA+4f8SgBHOSPieAiQggACw/xsAvUAPkIzH49loNJrXNC2taVoUkEopKwiCFdd1y0opK4RofhYAPUAKSA8NDX1xdHT0nv7+/ptisVhe07SUpmkRQCml3CAIGqZpHqtUKs8VCoW9vu+XgRZgflqAXqA/mUxOTk5OPjyay9513Ug2fvPUpLZ5/WX0JZMUxnqYz3g4zQLFM4ucOrjAyXdborJiv3f69NxvS6XyjFKqBtQvBRD5CPFMPp//6vT09BNbN2645dFvf9P41r07tI1XX01fKkkMSatXUM+ATBlEx9IMXz/MxBcSekq5wwSZ7ZFIVDUajTmllACcTwrQA2Sy2eyW66695onv37Z5/Y9/8gijGybQfA/MJrQa0GpQTtgU+jwcaeIJG0+5+EmN9FQfY7l21C8ZNwTC8Gu12nHAB7xPApBJJBKT09PTv7pvy3UTD/zwR0Tj8Y5wswaNCtQr0KiwlLSYH3BxRAtHmLjSoi1d2rRRozFGB9tGcyF5vWXZZ03TPBd+Jf7FAPqAoYmJiYc2b1h3x6MPfleLJXpC8ZWOcLUEtRLUK8z3O5zNejjCwpUWnnRoSxdfeQSyjcwZpJtW1G0NTiwvL++VUprdz3RoQza//Qdb76gX6q7dsN0uwEBPT8/VU1Obfvnw1i29V22aQrPNzs7rZagWOzMEOJP1mBsJcIWFJ+3O7pVHoNoEyifQBMmspPWuNmia/kKz2TwOBH253qGf/+FnT961485fyKQcOPT8O68bQBJI5XK528bTqdzmqY1orSbYLWjVoVaGWgUaZWhWwVzFs1KYQRqhfKSSKCQKtebT0vCHNMYmfW1peeTr8/Pzf4/EIvKhXz/4+OXT63a8sLTHP3LksAUkutmtJ5fLfemafIbeeBRW6xfsr5bCs1+B1RrYJr4rcIWOUKIjrtT7wmga3V/vJkHqzdREMpkcv/m+m752zS1T39lT/Ad7n5zZXdnVeA4wDSAKJBKJxPjGbLpjvWN1dh8GHY1K5zisJjg2om3Qlolw9+oDSUVDfx8gOhZgGMnez9145a33PrLj/v3Vl6Mzz+x7q7yrvouAY0BZDwMxahjGQLwb9a16R3C1fsENu9UB8xykaBOoAEGAVN0pEAiEChBKIJTATGoQ0aLf+Ok99y/q54deeuel5dJT9T8RcDiTyRQJ7dcAXdO0yD9HbuXE+K1YbUnTFdRtQc0JaDoCqy1xfIkvFN/b8CSPqz+G9WjNUB0P0DRAx9N1Hv/83Xp6U+/QM4t7/Pmnlp+RJXUAWKrX624XgDCvt0tKx9WztCJQN6Aag6qEhgZmFBwBvgQ3lmYE5z8BwkNAaQilccrKM33vFAdW3+Dos8cOea+LF4AzwGr3Db1bUoMgqPl2GdMHK5yOAC8UDRQIBZ14UyilEAKE6Kx117vPvLbidPJGyokib5882GzudPagmAMKa5H1MEu1Lcs6a58/ju23sQNwQ/F2KC5DEQVICQ03whH/KpZWE5hO53l3CKmY94eZS0/zxsprcnFX8U1ZUu98WLwL4ANOsVjc7xXOSbd+/n0AX3R2LdUFAQX4QrEzWM9fB3awf/AhTpRTmHYHTCmF6enMpm7nsHOekwdOrTj7gldC6ysfBRAAdrVanW2tVOfF8efxhMQXH7Z9bbDB2OoSs8UXmY3CocydnK9EcDzwAzgpxjkayzG7clA1dlkHcTgGlD6uFgSAIaXUlVJGTndvEhuujbSMPJ7suOCrC04oYHvfDHfHX8IqrrBHX0UMXIFsQs4r4RPhudQ2XnXPc2zmxMrq085O4C1g+aMK0tpqqJum2UglesaHguX11uXXa7bqw1cQyPAY6Lixvf9Ftg28wpiUnKrUeV1v4vZfQe/iCkvGMP9Kj/L28qGg9Lv687KiXgBOAI2LVcMA0JVSqtlsLGRixlTeOZX38uO09DyyexRhDGxLz3Bbej/xGIzakn32KqcMG1uNMB+/nPdYVGdfnD/t7A7+huTN0P7gUv2AC+D7gV0pV44lA394XeXAZeloNdJODeJFUghloICtfTN8pW8/kQgkjQhaNcFuGqz0abjJKOcqZ73a762/qCozwMmL9YcfbskkEARBYJVKpSOu7TQGW6WxdaXXeoebs9qgWiDhFBl3j6I3axwoXMnLJ67k1dfGKYlWUM9XdTMwacyYh9t71Z9RzALFT9MVDwIZIBuPx9fncrkbRkZGtqTT6fXRaDSj63pMKSWEEKZt28vFQuFocWDZ1R/zHlBtJezH+I08w9PAccC6GIDxMes1oA2YnufVFxcX5xYXF58N+8Zo6JwKo9oFXBKk+wqRLwcLoinP8SqwcCnxiwEQnlu3laoDsXAaa5wTIUQbj7g4xM5gjlUkJ9bm+8/iarb2iqZ/MCWtabvj5BBECWiFl5P/j0uOfwP94lB6E5MQwwAAACV0RVh0ZGF0ZTpjcmVhdGUAMjAxOS0wNC0wMVQxMzo1NTo1NSswMDowMD5xSgEAAAAldEVYdGRhdGU6bW9kaWZ5ADIwMTktMDQtMDFUMTM6NTU6NTUrMDA6MDBPLPK9AAAAAElFTkSuQmCC`,Rt=`data:image/png;base64,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`,zt=`data:image/png;base64,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`,Bt=`data:image/png;base64,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`,Vt=`data:image/png;base64,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`,Ht=`data:image/png;base64,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`,Ut=`data:image/png;base64,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`,Wt=`data:image/png;base64,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`,Gt=`data:image/png;base64,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`,Kt=`data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAAFiUAABYlAUlSJPAAAAhoSURBVFhHxVd7UFTnFQetJaO0jU2j8dmx6DhpQiZ9UScaTKtJUyca/6lmRh3r2FFHK+AkGBBQNIoixhig4hstr/KUh+7yEFiEhWV5LMsCuzyW5/J+unoBef16zrcjSIKoM5nJmfnNvd+d/c7vd853zrl3rX50UwVY2ZRF2oe0l/qj0/AfdOoDLDBcQkuBh5TxtbUP/WyO5deTbffuoFe2bvV7Y88eP1taWluevqRpw94Me2zWAcgGxmIIsRYgBg0N+UiOOIOgc67p14Mzr8tkhf9TqSoTUlI0pVptnS4vr9JI62a6r9u//9xucveKxetLWEdF4DAexwO9JwinJ2D2gUnvB422FqMkZ4QwTBgam7jycwZbmd40/PFqu4PkkrPx4tZe8bWE7m+ANm+g/Sugla6txyzXbk+oUv1R3/4YfYNAz8Cz8YiUuLheM5LL9wg/Ec5fxNrKTklo8QXqvgQq/g3o6WrwIngCVZ54WOQOebIa7STAZH422knEnYzyob17DgWT2zcs3l/AWnXHJNR5Y6R4D0ZqgwHpPtCfNo6xR3Ko8hUoaXiM2j7A2DM16h4AhUYJuorSYZ1Oe5dcz7MwPMdatEckGA7jUe5BjI0WUAEG0MEGTQAXoS+/hAxNJyq6AV371CjroCtBkZ8LVW6OiVz/k/BzQTKdNZe4SqOa/ejN/YIqLRUY8CN8O4Ghb9HZeBZyZRnUzYDa9GwUk4C4jFr4+Z2rJNeHCXMFyXRm0jhJ5uzP0F18jlIeQtVP9WCm+6chnUGCXIZ7NRRh/dTIImQ3AdE5bVi3bmM+ud5BmHJ+TLKmor1SW8rf0GMIB/qIrIdasOfMZJhPISvtKpIqATmJYCQbLZAT7lYDSVVAIiFWNwL7d/6iJtcfE2wEyXTWULBTqo5zhLkmDOigNmyjefA0Wgld3qhSncQNpRkxBiCK5lZ4MRBCJRNRBMTTWk7PZRXDSK/sR0ysfPCjD9edJve/sLBMY8bcrZL+9t/RXx0INB8FmqgFn0azB1pLT6GkIAU5OgkyNUWqHKX7EWQXd0JZVA+lugKqAg20JRrodRrU13Md+HUdOXIkxMPD47NNmzbNJ6qpR7Uh7VNJH78FQ1UnqZfcgNrvoNEVHVoftLR2YGR4BNJDCYnxCYiOikRCfCySZUm4l5aCzMwMqFQqaLVaVFdXQ6/Xi/v8/HxER0f3urm5+S5btuxXRDlZSOntD6XymH9QM1P0VZ8TqBsY1Z9jxOCCtnwXZMa4Iyc7C4bKSrS2tuL27dvsFHfv3iXiTGg0GtTW1qKlpQVtbW0CPT096O7uRkdHB8rLy3H//n14enpmE+USwoQIbbij1JBEAqop2nIngjNNQ2d05DpDmR5BG7NRUFBIKECxphi5ubkoLi6mNNcLkocPH8JsNuPBgwfo7e0VpF1dXWhvbxdgAbzmTMhkMmzbti2OaBda2MmKrr812Jm6mcbwIaD0IE2Ugxgq2Iu8tBAY61tQSVGXlpZCp9OhqamJ3pANKCwsFI4HBgbGifv6+sYFcAZMJpPYy4LT09NFBjhTcXFxAwsXLvwXUf9MCEg8ZtOn9Lcb095YNVYa7DBWdtNhTBloP2YoUaDR1Aqj0SjOk0UwMQvgiLKzswWRJElCBBNWVFSI7CiVSty7d09c+RkfD9eFwWCAQqHAihUrbhH1rwnWVq4brTa+t9Iq+o92Voo/Ef68wkrxu+WzcuRyeX9Pbx8aGxtRU1MjNrOIoqIiNDc3C3BkvM7JyUFeXp6459/U1dUJcUxcUlIihGRkZCA1JRVhoWFYtGhREpG/SZhJsPop4Q+ENU8wa9asD06f8W1ix0zOZ8nOnohgp52dnUIc1wIfBxcg33PEvC85ORl37txBREQErly5gqCgIHh/dRQnfU5gwYIF/LJ6iyAEsLGIcbz77u/n3bhxw5iVlYXw8HBR8VzJHBmnkkXw+fJR8PEwIWUMMTExCAsLQ0hICAICAnD27FlcuHABly9fRmxULHxlh3Ah3huLFy35noBJ5uj4/qvx8fE1o6OjIjrugJs3b4po+AyZnIlDQ0MFGUfIhEzm4+MjiIODg0W7sjAOJD9fjRh5OCLiQ7B06dLpBaxevfpV2iwEcItxhTPUarVwStlBYmLiOKGvr6+4ZyGcBW631NRUUSMsmAuSBcplyVBkKrgG7hDNbwlTC1i1atVcckIvX3pB9veLKueeZ3BG+Jz5jJmUxfAxsbCkpCSkpKQIcl7z84sXL8Ld3R1btmxBYGAgEhISMGfOHM7AswU4ODjY7Nq161pVFb3eyIaGhkQmngjgguN2jIyMFOComTw2Nhb+/v6gsQsnJyccOHAAXl5e4tmTWuLfHj16tGvDhg2uRDXbwvh941E5187Ozo/GZwcXGxtPPRbBXcFDKSoqajzlbm5fYv369di8eTO2b98OZ2dnHD9+HOfPn8etW7fE3OBOoq4au3Tp0qO1a9eGEsf7gu0ZxiJes7a2Xu/o6CijournyTc4OCgmHvc5TTVQsYq0Hz58HJ98shE7d+4Q5Bw5tx53CLcr1cPovn372lauXFlIfqMIJwjTCnhi3JpLbG1t99JrVUuRjPCRcF1w2tPSUsXV2/viqLd3OF39cfXqNTGUeG6QiH6qqVran0p++Iv5C8I6wmLC8z9YnjKe3W8vXrzYjyI08dDh9NN5D65Zs6Z+/vx5ecuXv63etcurTyZTwMXFpcfe3r5s5syZCbTvG8JOwjuEXxJeivhpm0F4jZx+QM5DaaLl2tjY8FgNJOwlfDR7tu2O11+fd33GjBn/pfUxwqeE3xA4AN7/gxgfC79S1xL+SlhB4E9wfs6VzenlQcN/UHg99dfQD2CcSv5D+l0CXvPfs+cQW1n9H8BtE+xXPQvuAAAAAElFTkSuQmCC`,qt=`data:image/png;base64,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`,Jt=`data:image/png;base64,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`,Yt=`data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAAFiUAABYlAUlSJPAAAANoSURBVFhH7ZVrSFNhGMff2QXbOTPTIspdMzJYboNCnUdhJhGVkX2SvvglIhDKUEu3qUVll1W2MLqCuGiRRheLQEuyhqPQZvPyoTVIIaM5iRNMZSH6dN63KcuOszb7lD/4c97B9vyf9/887KB55pnnj1AVJgjUpnsC9TmHQH22S6A62y1QnQlLSH1+cOXmqxCVfOJWtFwnDzjMgvrCG7SjEdaUdMK6si5gLvRFJHSgBxanXgOhPHMXcnn9bOfHIba99yNr73CyrTYb29z0lL1ZXaUj5hqzBqXVAipy/bWuvwVYUdIz9YTCTeSJG0C6OyCUZRqQxXoHyo9WgrHCCAajHvSGI1BaVgzVJ/XHsL9AddoSv+8VJFl8cyZsHr1mt5tWMFXkkqFYnl034XC+A9b7fk7k/tBN4heJU+yUjCkJ2MyAxpwbv7mWt1C4OnmtBRYlFYyIJKkPKbl2D7cD31nHhy+s3dFD5v+s6Ymbi59sJ7e1jXvPPCI/9Ax0Q+MjS1jqdbZONaDIsXDLt62flmgv0zImi9sB64SxsgIM5Xoo0x+GoqKDeP4a3EBw/LhQaemhvxY2x+Aa0+OnpYwS+/AzLf7JBjAmkwm8Xi9RKCbNR32DpAaJf33BMC1Oe0BLmLwlYm1CwO13guMf6O+camBsbAzy8/OJud/vJwZ8jI+PTzXwbchN6vwSvzxDFyvXxSLnpxGwO13w/MVL6O1yuAP+vPFjLLet0NDQQM6h8Hr6Z49frF2CzpvN3PwNZP4Xq02jxD1E/Njc4/GQcyiw+bCPJWdcgz9+3ULiN53g+L8OukixcPTT3EXq8MaPUNRPx2kExx8puMaM8XN3Rd19Q9Dy0gaWK+dyifu/+vOZKX6b3T5hvlQN9+utnfgzjv9UXTNvoXAVFH/NrPEjzUWf9XEbvO5wzImaX7WT+Glxio2SpBf/Ej8f3NuvLSr5+OcFGyp8C5RGP6fvEcofnZjXT0nSakXyzFzuFbxqxu3HCBMzNlKyjCJamn6DkqbfpaTa+ogk0VqFMqZGKGf2U4pMFVLqaM6GN34BUioXU4rslUIp14SC2cJ1u4M750QkGbMdz51em6WMEW+NQ7oQt+cgTaAkRrRUmrFMlJAdH6lixNo4snSrdwoD5vyzDwJ/AQvHNJea1Xie/xGEfgA5zX5WeH/3AwAAAABJRU5ErkJggg==`,Xt=`/assets/user-CqWks3AC.png`,Zt=`data:image/x-icon;base64,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`,Qt=`data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAAC0lEQVR42mNgAAIAAAUAAen63NgAAAAASUVORK5CYII=`,$t=`data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAAFiUAABYlAUlSJPAAAALjSURBVDhPddF/SBNxFADwI4igP4rAnJjl3FLLbaKNzDJtOjdno5/iH0aWoY3MCZOmicw1t5z5A8o0aymFubKw0LGWrU2P+YM2GMaiGNO2SC0ZEkkLrLX22t3pDf/wwePu4N7nvff9IqvBZrOpGo2GAwAcvV6v8Pv9CovFMmi1utDq6sHPYrH25sqva0Mu7/8hldqhp8cAo6OjZNpsNvB4PPh7UdETEAjVv+OYwqdUhvAgiyXcgiCKDTjQ2oqCSGSHiopGGBsbA6/XCwsLC7C4uIgDJpMJB/j5qj/R8dyXMQm8jBhGXhhobiYAsVgNKIriiNFohND4MDIygicG8ARKP4XGeRVFyz28Yw93Kwk0NRFAZaUaL5qYmACz2Yyv4Ha7YXJykgQiaZxhCo2buQZobCQAkUgNc3NzMD4+DlrtALS0aEEmewZW6zTodF/WB1QqAigo6MA7lZQY8W/siaLTsDzQDXr9t/WBhgYCwIpLS7tALr8LbW0d+DpYMbARcLl+Qt9jy78HfUMzNvuH23e6+3eRgFxOAGVl18HpnIfe3ilwOBxE8Qk6kZpr4ZydgWAwuBQIBE/hgExGAFVVLdDZ+RYyM/vIzusmhhKRgtTVEUB5uQqUSgMIhbrwBOmbwlOs5iqiLMWAh0htLQEUF9dAff1Q6CzQ0KnrwOfzkWs4nd+h99HrwAud2f03EPBB7naAwiQMQJGaGgIQiRSh+/8EBsMsPgGGOBzvcWT4DeqPoB56FxWffd8+9VHu97jsJCCVEsDZc1eh6153UKG6EZBI6/wXLlUvRVDTXcrmLo/4itKWuE/QvpPBy7osaaDBvOcruYJKdUt/5rxkuaxc6oukZ7hiErOssUlHTDQW9znzgLAtjsE5eazwoiA+mc+k7+dTjBYbZaU7Fin4TcQycnT0ZF7/XnZ+exwr9zSdmZOdkJqXxkw7mpScxo/enZq/LTHj+GYGo3Cj1/uLEiqUhLIEQRDkP5DJQP1Wl1JyAAAAAElFTkSuQmCC`,en=`data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAAFiUAABYlAUlSJPAAAAFtSURBVDhPYxgkIPP8f5IwA4MyEHOD9bI2P1/LWvPgK3PV/R8slXd/MQMxMo2MmSvu/GKruPaRyb1mFlCrFhCzMBgt+fQ1Yc/v/yAcvfP3/7hdSDQQx+4GYiAdA8RJe/78d1n3/b909sLzQM2eQMzLYLfyw1uQZhCYeOkfmJ4Eoy9D6JlXIfTSW/+Bhv38L5c25RJQczQQizFYL4cYQAqWSZ50Bag5EYglGGxWIFzQefYvKn0OQvddgNBd5/79D9v2879MCtiABLABMC8k7v2D1TZ0HLDl53/5VCQDbKEGxAEDqOHU3/8b70FsQwYTL/79nwy0IGnv3/+BQAPkkF1gu+rjB3Rb8OGgrUAXpE1FGGC66PVj+5Ufftkuff0bhG2WvP5tDcQwGsyGytktf/PHavmHv3KJvReBmuPBBgCBPBAnAXEHEHcRgbuBuAqI3YBYEIgZuIAYZIgOEOsSgfWAWAOIxYCYFYgHFDAwAAALwaEMFJ9u8QAAAABJRU5ErkJggg==`,tn=`data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAAFiUAABYlAUlSJPAAAAFYSURBVDhPY6AYMFmlM8l4TeVV8J7FJ+89EyeW85oBxvJAdZLeM3kZFR2YwQbwunYt18vc/s4we/drg6xdr3Bhs/y9r0zz9r4yL9j32jp7wxsJz9aNnGruWgzCZTffivd8+C/e9RYnFut8+z9686///mt//4/f/OP/tL7F/y1jFv5nVPCYyOBSuuCtYVTBf+PYMrzYMr7svwUQg2jHuJz/WgEt/9lVfVYwOHjFvQX65D+pWEQz8D+vTvAyBlvPeLABHh4e/2EAxEZWDALIfBAW1gAaoA00wMo1GmwACIA0wgyCiSHLwTSDMFYDkBUgY2RDYRhuAMwLIIDLBcjyMD6GATCNIICsEIaRDQZhDANIxXADHL0TyTJAVDMIZMByBmP/+lcKpqH/lS2iiMYqFhH/5e1K/nOp+yxlYNfwC+FT96/lVfOvJh4H1PCqetZyqrp4A11DCWBgAACHC2g8GJ3JyAAAAABJRU5ErkJggg==`,nn=`data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAAFiUAABYlAUlSJPAAAAMQSURBVDhPbZPtT5NXGIe7RROmcx+Mf8I++Mk457Jl/8C+qMuSqUs0ijpdNsxe6pjMyABtJHUIBqHWFmhphUlH35CWFtGHKlhQqcJslYJA6UYoxsImAkrd5f2URJe4J7lynpffuc6575xHA2jkerPGXLPa2Tno84UfhFyhobirazTd2D0+W3kxiis2TXtygZvPocoZSUt+vbBGWK5OfkNYZjzf2y0yxhZhRMY/1ft/ISljfAHa+h/TNQZXBtJPJb9LWCusELKCHL2hI5yUWV0yo9g6xu6TCXaWjrPl6AhbC++zWTfHp4XD1LdGn0u+QPhAeEfIClaWG9uV5AQ4+56wRZdmmwF2nIX9FjjYANomGc/N0ByMqYIS4WPhlaDMELgcly26bs5RUDfJaQX0LRmKbAlKrA/QO1KYlVlaOgcXJP+64NRZ/+U7cegcBYvyN2dcCeqVqexzeEre375LVyQmJQzOS75I+Eh4Jfi1qlXpvSvNugf+yAz1wWECAxm84WHMoXlSjn08tBVQG0jOSr5Q+FB4KVhRXdvmCN2CdtmFxR2jLw266uv4B6SU5mn6v1lLMP8Tfrs2NC35I4LaxFXCkuCcxW8K9kDHMOQVd5B37AZe2dEXeefxRsHgG8LaD3ZP5JHkDwsbhZeCt8z1/ipvKINPSnCEJnCEkzg6H5N4BqbWBJ7wHMaLE5gv9MxIXhW8L7wtLAkqjB6vR1mkRVap88RRRuH74wH09oeU2sf44UQPBdUj1P7eq57E1wWVJnfTheAzgtKDg7qrfHnkGpfGIfeQlbb70HR1HJuSotp2/f8FBnNLg803j/sONIcm8fZNUm6LIRWgqxnA6puixDKBsSGs9iBf2CD8V+C217j/yZZQ2RCl7gocN0XJ/ekSpz0Zfiy/x97iGPoq71+S/1ZYJ6wUlgRnTK7GOjl5HfIn5VdE0JbFKXMusv9ogFytPfNzkSH1dV5+v2RLhe3Cu0KOkBXkON3tJz/ba0Sr72aPtnHx8C+VqQNffffHpk2bW+V7haAeX3Xlz4X3hNUajWbZC9AyJK8m7y1mAAAAAElFTkSuQmCC`,rn=`data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAAFiUAABYlAUlSJPAAAAI/SURBVDhPpZFfSFNxFMfvQ0EU9mKuEKQoCNLXQIIgKJAoY9AtGVn5IAXZm1ASyaa4FVYQBkZFPoQZRX+21mhEzqhY6qZz3W3VvNvc7v7WZHNUuOXWt3Pvxh2VRtQPPvfcc37nfO6P+2P+e6087Q5uuBBBlS6CNT1hVBIKbUSiSkt5dxgVXQIqNCGsv5hA9aUUGs5PYJvG+pXGFQyjMoJhH4I5QOx/AObg/eK7WGt6VIws1am2usWEZUfN2KK6jro2PUhwjVH3DSOW9MEnTIMXeIp++CMhzMSDCHyKQkhEKRfAh3h88HvhnfEikIxAnCOBURIACSAbL4JZKXfxfrAsC49zlPIUUKB6TuyJSj0lwZOiIB+WBcGX9/CdO4yo4MDWeiX0A7uQm9iJUCxT/kgh/qtAkDdnX/dgwcEim+GhbOqA4fJmzL2ohWdch+yXgNy36AlSriuYn2oBfG1Ih59DdaQDQydqkDRthDDEwOUwLCFYKJ5gWNsOq7oeyHQh721F2taMwvt9+Dy5HYO7q6E3WP8sEPG/UoM7V4t3V3fQv2yF5eQmxG6uwG3jXTiThaUEQXnD2X8WmuM63OrthP1UJc5oH2OAbcSgYRKFb+Xb+lkAupp8iKLIHNL0zAXHcKe3H1xqnrKsPCiBj2VB5w0rLDYPzG/eEhyejXIYGXfCMsXD5IrDPObGiJ2DhWpPSz0Wu7csWF7X3s2sVdoYxR73b6xbpCbR6JYFtFYRe4lDRHMp/g3HiD5CWqLkH2AUPwBuP1gUTSfQUgAAAABJRU5ErkJggg==`,an=`data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAAFiUAABYlAUlSJPAAAAHrSURBVDhPldNPSJNxHMfxX5cu4Qg6SFelw0AWNJCBFOEtiKDLQPDUAg8dQpmoIclIRCR1MJ258NHN/dVcbrLGdLMUmwmOsR6mdmjdJoKePHj89Hkeex4Y9dR64HV52PN+vvs+zyMaG21PHA4v6tXf/wJCiGa6RkKYzXaMji5jcTGJpaUNrK3tIZP5imSyDKdzBvH4DkqlKg4Pq6hUqlrgGSmRy8DISEwNjI+/UaXTeaysyLBarYy4UCjIKBZlyHJFC0zSbT0wPBxCIBBBLreH7e0SslkZHR2JGm53wTjgcvnVgDaBx7OqXhSNftDVFfD7VxGLrWNhIaMG7Ha37r8mSKW2MD//Ud9BPn+A4+Nz48DQkMQlvoMkLSMSSXOBnxAOf9EDc3NxLnbHODA46KuZYHMzXxMol09xdHTKR3ny58DAgFcN+Hxh/v84QqEUgsHP9U+gBbQJEokNLnRLD+zvV7G7q/hHYHpawtSUxEki3EfutwkMA319HjWgXPQ3hoHe3kmMjU3wBXqL2dkgvN4An8xr9PS8vHA4np/ZbPe/WSytRf58naLUTbdICJOp+VF7++PvbW13f7S0WA54KkvvaYYm6BU56SnZ6QEpdzeRelyne9RFylfWSQ9/nbtDZmqim3SDGugqXRFCiJ/hNPonOcVT7wAAAABJRU5ErkJggg==`,on=`data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAAFiUAABYlAUlSJPAAAAMQSURBVDhPvZP7S1NhGMfP8laWSoFWhKnbNHU6d8nrVI6ydvVuR8Qlij+sMKTCICW1WVkzQc3AcE5EpWleQvKGimTec1aSbcO5SlNTvIXgT/3ydM6rCf4DPfDlvLzw/TyX8z7Y/w+CsMIw1THyRNu/OAgAoE3rDQlv3r5X1DV2Z3X1TOtaWkdaNXUD7bn5L3MkibfCWfwYDwZb5EKnC52YTKkdpkKg/TBbVjSDg4tgNm/D5OQqyNRfAVPOIN14NgtVVZ+gWN0Nt/MaR4OjFdE+3CQ3tij9JDLv/N47odXOQkmKGlSqCdDpTCRoB8bGVqC93QxtbfPoTCVYWtqF0fHPRk+ePIkTkuCOAFN6w73HqhGo8ImCwsJxpN7e7zAz8wv6+y3Q1TUPzc1zSC0tc2A0boIXT1LmGySPoLJbI1P+O6j0CkdmqoqpqVUYGVlCBsooq0+HC7UMwGowspqfkJCWM+TFlaRiG5u7eGVuEzynB0G5vxgBysr0YDBswvDw4iEgt7EKrGtswEFzGvr6FqC0om7RkyO9Sw5vDS8q2i/7aUwe+mq1X8Bk2iIBPxCgUfcRGSte9QC/DoeODiOsr+8BkyOsxCY/mGl38rSjCBBfiNTZuQAWyw45tG/IfFbjCtkNT47MwWTaBL/QuHY0RG4kEZeS8aiP6v3Bgwmy92XyL2zBwIAFPLXsI2ZKZFIwGJfhvGd4CwL4hyfT6QGyGG7EterS0mnQ69fISW9AT48Zlf3PVN/U+yfjesF2pCRj4aJv9KAzQ1CCAHx+rD0jMN7VjSWO8ubF33+o1s5W175eV5fX78iv3lzyC46bdfYQDLkwBJ2uPlEN5GssYwSIctxZQjECUG+bKZXaMdiJLm5sMY/OESm8+fJiVlDMC1ZgbMUlrqzAw1+oJLMSDJ5Y4h+WGMrHk71ZgbJzBwAUND5facMMVjhy8FT3IDz1cpgoLTLkikIQiBMcqk3KwAoVnxEIshzwzMzjOK6yPvAeBk1FLghBqGxxIvuUkFA6SaUKx9hYpT1BELakrA4WiNpEUhj2F8dUwHG0tLqZAAAAAElFTkSuQmCC`,sn=`data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAAFiUAABYlAUlSJPAAAANpSURBVDhPlZB/UBJmHMa57drOOQS1nPEjRQEJpEQoEzGpcImh0qHTi626nU7gzK2denXrmF06mkvF2qERCIg5wrgMRq7Bhu6cd263uTwdty69ea2yc7u2bre7VvGMGP90t91tz9371/f5fN73/RL+V4qbyamVeu8zYq02hVFBTN1Q/Vx88h8ShbWuVbAOTYO4UXUxKVspJjKVL8an/x5W3fFaWuXRV5/ATN1kJJWn+oJELT4VFeQnMqoS47V/Totp9OMnoMq6gvyTi+A2fY6kTdV3SNmKKjJDnkZkKF+IV58OZjqlvwRPPFwa08DYP4AdRz/F2rdmITDcgLp7PvqFagM5S56enKN6WoBZY97PU8ap31wv40YXB3PGYkw2v4RwRy4WTpfig852rOeU3SRTJS5ydmUekb47IY4SCH96NQLMnwYm9+HRVRVuecpw05SPn84I8MPJHFzvkYCXK/k9mVJ4lZ5boU/LkiWnclXPx2Ch8I1nv+tWSFYsssitU2zc+XAT7nsVuDtWjvuXyvHAr8R0Jx8ptG3TGezCjzbkSDnU3B3JmzeXrokJvvn6qyPhhYX5T3xjDxpeO4C9ZXvgf2cjAm1kfNvHw91+AXZKK7C3puGxbci1pH/3RCudW5K+LnNLIuHiqPv28vIyVldXYyccDsNpPQfDcT1eV++DYqcM8l1y1NRq4By0YG7uewwPj6KrqyuSxijIJJwd6L/n8/ng9XoxMzODxcVFzF27hkAgANfICN6LinSNjWh58xBsg3a0tbWjru4A+vrcWJtZ4CFYLeduW61WOJ1O+P1+uN1uXLjgQjAYxMj58xi/cgVW6yCampqhadSgp7sHFstnGB//EUlUUZDwtq4+86zZcs/hcCAUCsFms8FsNsPj8WBoaAiv1NRCrVZHb26FwWCAyWSGw/ElOjrPPCTRRIHYEgXb5FUK1cHhY/qOld7e3sjExES0aILRaMT+/Y0QCoWQy5XQ6Y5EDrcc+0O0vXKJTNsyxcqT2WMCYWH5OragNIPJLxHzt+7uUB/UXo8u6ZHdbkdr6/uor2963KA9/CuZJppNZ4onsnjbB2isgj00joT+t0BYsYazdVcCmy8jZfBLKBR2EYfOLtAxeNLL0WeGSFRRiMIS+xjcovb1TDGXxiykU3KKUihsacJfy+Kkfi5sY78AAAAASUVORK5CYII=`,cn=`data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAAFiUAABYlAUlSJPAAAAM8SURBVDhPbZN/TIxxHMfPj81mzu52d1N3Vy6d7soInSd06lFEpR/HWoo1/rBh8wfLTCMmlhm2kJF+KFpFOj/DJjMrJU1FdV1djvIodSXsrkjePs8T2sxne+959nw/79f38/l8n6+Ij9sXDpmrS8JReTLCfu1kBHKPH/h090zSWM7RFFRkaZG+PwN1xWu7heT/xYWLjbh8OgXNtVdQeCoNHdaPKD5mQF+fEy/v7ERlRRU4yy3INYYK/dJNaUofVi/XBYlFovgpAqDgajO6eziMABgj/RuuURcGRwahPFLuXJhaNiybG7xe4b1GqwyIni4Acgoa0Py5E60kK8lG4pycYPqj/GoHjKft2LKvaFRj2Jgn04WGqvQm2V/AKzLxEMtvyB9A79d+JF5qBXPiDdy2nh0Lid3rkHmH5M/SrYpVzIt0EwB5hU3opGQrmVrI3EbqILUMdMB0qBbbUqoQl1aP5F3nRmVzjC/cfUIz3P3WrPCcHyUVAPk0gx7qlaNe3xGI42FD72E80Qav1NcIP9iI1OIuyL1W2BXewQVK37AEzcK1Gq02YpoAyKUK2sjURYABAn2k556ybrjvbULkGRt2l35ALWeFRM1Uy72CUtS6sAWKeewMkejwZAGQTTN4TiW3DvfDRqD8Z28F8/rzdqSae1H9rg+dtD5TZbg3U80kydTLVCKWnSqY+eABNZRQR3o5ZEP29TYkZlqQ/qAfT7kR/KCq+IGKlQE3xe6LTTPcFinINr47H5eohUZKeP7FjqzSeuzIrMfhhxwed7cL8+glOcYBZlIcSU62CUAODdFCuzQ4HciqsiG3qRmPetvRSBXZqa0PZP5O62Qs/y8gmyqooyQrJbWP/UALvb+iI20gQBOJ/z966JvUkymVei6JFqsY/geaAJgf1gy/HehCz2cHBl1ODA27wPU7fj6pqf9WXH7flXnx6qfk7fssan1IpkoXslKjYSVkmwAsZeMT1PrgDKkHU/S7TLPEgzG7zTXe8PIPL/ELXJfnbzQdX2Q0JQewG/QB43dg0ribYjEbr6UbZpTOZqLESkMs36dEExjroVsZ48vERAWGJa4Ojtq8PMyU7MPGbZGwf49QJPoFyUEkZjPl41kAAAAASUVORK5CYII=`,ln=`data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAAFiUAABYlAUlSJPAAAAJXSURBVDhPrZJbSNNRHMfPSIIuEGRldykLCUrs+mBv0QLxISPqJaKgt4KISFJDcyu7rTlrSzLMIpmupmbLy6xVK1nbcuYFJTfmECpRp10XWY2+fc9mZEJS0A8+D/+z8/2e777niP82nuK1aL68Bu6iZDgNSeDS3OgvfzFSPH6e6FZIk+Tojgnml7h4HMCDc8tw7/QSNJxcjDr1QtzNm4+anLjf08nY+HwBCBUgNFgI66NGVLUEcdPTB6ujB15vf8Ts51Qfmy0NdCRqIv8zgvn40HkQBo0a9f1h1A8D9nf0paDdH0StLh22swmw5sejVrUgkuTq/hikJIrlQhaG3mx0mZUwOgJoo8j9hR2EyAAN6NLUOiZFXx4GApm4tE/xjeeXC8fFlQi3H4icYOl4iT7ukdu9xMokD8n9DvkV7WbEsQeuyi04mq4YooFFyLZf3UlD+7WNsLh8CHMbA6CX2JmigSlantdEeyJvbTtRkT0L6xNEMw00wq5NxFP9KnxsPQW304PXb0IYpFie2fSJZ9b54XMUMnpupKvWkg0wswOKq0mqkNFlCoQpGbqNblcRHnueod7pgLWxChajHm363bzT7YDvCCqzYnF8h+I9xTdIvJB33HNrMzDSBbzIAngbYxl258J0xoDu82ksYxvKD02FMkl0UnyCxIqyjHmqsY9E3rM5cyZMGTNgPDwdZRSUZqbguqoAfm0qAiXrEDOJ5QmxlUwhYhrZRa6Qij+RvHqTrTRH89Wk3vt9dG0pUZDISBP5siZiEVES+Qq1o2v/PJPJHBIX+RJC/AANB+NF2YUEvgAAAABJRU5ErkJggg==`,un=`data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAAFiUAABYlAUlSJPAAAAOjSURBVDhPY6AqWLFyaVRKXsja3v7OsmfPnkn+/PmTDSQOoufMmppXXx21duaMKXmvXr0S/fXrFytYEwj8/v2bZev2zT4pjfpXcpZw/o+oknhbXlXcc+/ePUWQ5tWrlkVPa9d8dmaj4P/WCrXnLc1NDY8ePZL98+cPM9iA6XP7CrOnyr7ovcL3O3Wi+Pumw/y/Mufy/Whsqm/YsG5NyPblSu+fnBP8Oa9D9MPl3fx/ZnZIfe7p7ip/+vSpFNiAkulm5yfe4f7vkyb/xNvbe4udu97lKQ/5/nuGWR+rKo5d9v+twP+UKM0bPj4+m0N8Ve7cOcn7vyjT8ejevXudwAbkTTC5OOku9/+AYuGPrq6uu2wdLI9HdvH917KQf+LpqHljw3SO/4Zaki/8fX021xXqXnl0lu9/QpTJ5Tlz5iSDDWhqq2pL7Bf6Ou8jz/+y9by/CxZw/q1dwvG/cwH33znzuf6uWcjxf9lcjv9r5vP++vqA7//8bolv7u5uu+EG3L9/X6GktGBCUJHky5LVHL+rN3L8bV/P9X/KGo5/y1dx/tu6gvP/jhVAejn/n7J82ffWVqZn8vLyJu7Zs8cZbMCPHz/Y79y5ozxlypTs+ITEhSaWZjeDyqL+q+qpf3DWF3l3o4X3v52O8HtDA/2LoHCoqKhoX7duXSA8EL99+8a5YePmwNiMyUcCkje8DYlb+T0racr/4rCiv81emn/eVHH973UT+jPFW+JbrY/m3bqqyvbr169rfP/+nQNswNTp8/K945a+SW37/d89atEXZ9+OPxGB7f8T3JP+VDoo/3mdw/O/wZb/X4uzyM+v+cL/Z3uLf544ob8AlNjABsRmzjmbWPfyv4NP1TNHR8d9mtr6N53j1v6XVLF+46Yl9vJLqfB/CyWRd6ampqeiLZUfPkgX+p/lb3cEHo1RGXMvJ9Y+/2/qVPg+ICBgvW9Q2qHklv//9c19b/pb6138XyLyP85M+mV4ePiKLA/T8/eBBiQ7G1yeO3duEtiAxuaeVtewWR+Tmz79D8w48zux/s0/j7hVP52d3fcmJ8QvWBUk+uNLgcj/U5Eiv19lC/+f7i3+yd3VBRGNoNCsqKzptPUsfQoMg2/WHlVvLSztTuXm5k5as2ZNcGVJUV+dq/yLRX6i3wpspV852lofLSoq6oV7AZRhQGlh0aJFselp6TMTEhLmV1VVtYI0P3jwQB6EQc5NSkycl5SUNLe+vr5h06ZNvk+fPpUCAEbM2Uz2jsB8AAAAAElFTkSuQmCC`,dn=`data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAAFiUAABYlAUlSJPAAAAPCSURBVDhPfZF7TJMHFMW/bYZlmcs2RII6XAu14IBWUiFYcNSJoLMMqkFkGxuLTsOytSJEpdtQHk15+gBEKAhDKPJYm8IolVBehVJQHJYi0gqlZZvECIgbczx79ons353kJje5Ob97ci/xn7oWF3wkk6aSVJNM+2VfhTasXXWdrYTf2vj/JbM+/C7NmP9X7oQU1/4owjcDH8C9JhhviWeW7QWNjY67Puds8Y3cSvOOeJcVFLGeERz9BocTY8fhcF4jepbnWCfuRP0TbziE+mdt6F4Yhnj0AgLrL+KzGyPIkqlRKO2bvlbUqk5Krik8m1gWH3M8PWxvyEl3BptnTwj7p6/TKvYgdoCFDHMiyibFJGARudppmB5OY9w6C7OFLPMMrGRvNE5BJjfOxyfUm2jMUDbhXzBrXCe6jN0tdgjXUBGplSOgGbja9Qz6wUn03/kdul4rdDorenomkJWlR1xcN2Jj65ec3YMLCPcf7z8l+LfxdhEPmyv3gV7aBUbBUxQqDdB0jJPGiVWzRmOGssmIc+eakZGhhuBU1bIDxV9JeHzfP0Ic6QFbqIOwrAFlym7UaEbJBI+R2DyFavkItFoLOjvNUKmMSE5WIiWlEXxB5YoDha0m/K+OlROBN5Fa0omyR0toW7BBMQekWoCo20BS8QO0t4+ho2MMTaphiEQq5OXpkHBG+gLQSnBUi75vhitWPuX/jPzxRRQ/AfJ/A84MAVwtcFQyAXndINraRskEI8jJUSElWQGBoOQl4IUcvlU0+kTW2TK1T3BqGOAPAkd6AWYLsKP8T6Rn69DWOoqmpgdIS6tFZo4UoisSG3kD9UuAX/SHm7iXWs7/ZMB+cmtwyxL2Vc/io8tWRCbdQ3xCM7IutqO2zoDyG78gPbPEFhjy9exGl4CGVcA77GObNnge3nPstGzqvHQcP+TqkZHVB0leH+oqf4Vcfh9V0kEyvg6i9FZEHxfPb3YLNNCYH4tXAe/tint9o0eEs3dQyiWhsNVWW6lHY8MQaRyCVGqApHgAxcV63LplwU2ZCdyo7L/p3qGybTtCD6wCCOLCqy4uEeud6FwPr91xFSf5sjk5+b67dx9Df28GCoUFouzOlZBDqc+pjMhHjjSOlurFvULz5jHXAATBYp1YR6bY4OR2cCed9YWIn1AxUVXTO3/6rOS5T8BX007b9hq3uAVp3vcMLXX2CBNs3R7uR2dyHdfsq3qFRjtgRyEhFEaoF5URdtR9J6/UlbG/nsY4WO3K4KZRPbgRLl5hvq4MnivV8xN7CiXG7l+NGjNSJoTWUQAAAABJRU5ErkJggg==`,fn=`data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAAFiUAABYlAUlSJPAAAAJiSURBVDhPjZM9SORQFIVf+QqLFBYpbB5YGLCYwBQGbAxYbGAL0xmwkDCFBIshWEiwWQYLCRZDmGIIUwzEYiAWC5liIDZCLBZiIaTMFlukTJny7I2GVVkX98CF/J0v5937HvtIfE1T7JOR51wE0Pcdl54o3avPpHCxbXreRdRE4wT5U4nROIZ9EtaSpDjdR39LkjRV3jId89jPo1mC8tKEfxogWubwZjpGtxa8ywTajptK65rNuBCd9UXWwC+TaYRy6qJZaMBMRjT0EMxjBI8Mox8M7krAvXHhXSdQto1EbJlqZ2fMOY+q+twEzjgwFcC1QDEwkMwV+E8EeGBw7hmMWwZv7kHbtfN3AHsYVvWQAIcEOJWBAdUXCemMzATwyGzfEWBOSWYe1L6VEcDq7IwZR0FenjlAnwF7BGmrxxFPyExLcMhsrRj0Md1PfYhNI30HEH07SK9C1D0JdV9+qW3qw4S/AhaU4IoSjUPwNRESwOjs7dyF6U9zmOcF9GH+XOqgQLLS0PxiaKiJ1ZKhWKpwL0KoO3oL0Dp7Ky45w6CyxjXYYQHpqAQ7KBG3E6EENcUvKUFxN4K279T6nhEQ4P0oxaYehLcV+F4GtpOC9TIkNwINxS9uqBYC0SIF53JkfLVf1/9GivctbEaTEupuArYeI6KRlmTOqJnFYwzjwG3kDeFYx+7rCN9KWle8ZEW777J4hsTUxHzKUT5F8Glr01JDbdf48O9/pGzpcfZQIF5WqH6mzxVMkrbzmdrT6WB9Li5vqFEwiRB/z2Adue26U7Wn/Zf5jbjJ1+SQLly1r//jJDL2G8KCb16DevYDAAAAAElFTkSuQmCC`,pn=`data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAAFiUAABYlAUlSJPAAAAJ6SURBVDhPtZJ9SBNhAMbfu/kx18wluOlsbLprid9ppUNNSklMDMk+pYgIl+ZmMNDMjEpBSknJGJhbUqbOEpGmiZUiGWkr05T+UEokQvsjhDApitzT3XkQRuE/9YOHg3uf3wPvceR/IHNzc9N5enpu9fDwiKVpWiW8Xx0fH5/07fq4vsqC3AVLedHSuSumH8cMmR/CwkJs7Fi4UPszgUql8VpZ8ZfFV8OAsw/zj5vQNduA1neXUDeQj+xDydMSiSRBqK9EKpWmVpsLPrveTABDvYD9Kuaai3F9+jRqp06iavI4Kp0HkZoWN0ZR1HrOSdqVqORllnWxkRHtH3vagP4OoLESKDuMmYo0nH+9D6UTu1EykcGn0JLiksvluUFRmvi68Zq5DQlMDjegNu7NfO/qvgVYK4AzB4CcTZgy6XBqLBnG0UQ+haPbUDSQiOjN0Z1kVg9tvqpLJBIFcQMbTYa8xaF7D9FrbYX9Yg2shWdhvXAEbSMa2EfUbDRoexmMO88ZcLK+PuYtcSfxnMyhy8ozz58YBNLuA4wd8G4Edtr74HpBfmWExszTQH7APZg2Cy6PKiEl1bmnZxFxnUDgbcDLBuxoeYTu4WiM9wfh+zPChuJlf4PvMOuELKsCAQEBJenVHUvhdwFFEyAWBm44ZLw05vDmnykO/TdaShkFbQW6mHj9gy0WJ/zYbylhB7grLAxSMLSv4WUu3tnifq67rPwG+8tGhYaFtiSZyr/qqp4go8GOyR5/1NcyUDavdamb/D4RL7JfqP8VtVgszlSpVJcZhrmp1WptCoWi1OuoqN09izSz537LtdXxZaNgI2cjo5UkgpKRSO7gH0PIT8UnMNRSYdOLAAAAAElFTkSuQmCC`,mn=`data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAAFiUAABYlAUlSJPAAAAH3SURBVDhPYyAWaPXKyQHxw5n/0/5DhQiD6q3RbCJlPB9AmjrOJzIBMZdss/B/og0BaQLRUE2XgFhXqEyUOAOgmv4hscEGsGeKE2dAflo/MxBzgthkuSApqo4FiNWFq+1RNBAMA5VuUabm5j1MNWUzGYGYBSoMBsBYwNRcXraoZ+nibTdWrtzwf+nS7f9Xrtz1f9GiXf8nTNh5qbp6XQnQMEGoUjAAWQBlQsCJU/f/w8C/f6//P3hw8f+tmyf/371/+f/Fi1f+b9586v/sObs/LFmydwvQMDaoNgSobVz///jZJ/+fPvsKNQYEvv1//vTG/yuXjv2/devk/6cg9pVb/xcvPvp/y5bz/zs6NkdCtTMwaGoWG9o75Z4pKl/5f9GyU/+Pn3z0/9nz71CD/v//+fPd/zOnL//fvfvE/8mTt/4HuuJ/Z+eO/56eeSVQI8BAkoWFN1hJOXh/fNrsvx19O/6v2nDh/6277/7fufP5f17etv/Tpm3639q66H929oL/YWGL/9vbLcUaE6xA7CCn4LDMwa3mSVXzpv+r1pz7HxLU83/KlI3/z5x58v/ihdv/k5M7/kdFJRBMC5pCIhZ9UVEdj9PSmp4oKJgvV1V1XDpz5sZHHR0l/6Oj0+dB1REESkDsAMQmQKwBxKpAbAbEMkBMKWBgAAAG3ztPvnZq1QAAAABJRU5ErkJggg==`,hn=`data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAAFiUAABYlAUlSJPAAAAL9SURBVDhPddF9SBNxGAfwU4Ny22nqRHyb3toyV1nzcm663IVmGb1ZDIPyBSsxSnEYpL1alL0XZIvS0MBKK1MMw0jNkeQQscRWmu9/5FoGmhqCkH3bnW5a1ANfftzxez73PBwRnVEzSWc2YWNuHfaeuID0jETsP7ATm7PLoDliRExuC6J0BmiS7iO3oOE88XeRifXwzG7Ay0IPDLTdhLFchqtnNPYzq7AY4rwP0OTWgkhoAE8afdE5OGYlsVzLs7Y7EDlXHgKdwcC3fZgeT0ZVWSoiU8q55qkOCSabCIx9rsHocBcH8IPWF5GyDXJ3SRzfCjgSJTdooFuBafMujH41wdhZg8hSBdpNdRgyhGDK6ISh1xvtgP7yntbJjkzzgEEZxwGV1+X4ORiDcXMVDN2VoIpF9kxYnsLSGICf7SI78P5F1LCpNqFozKQ/zgHV+QLuSz0DnVyTxTxzsg1sfvTrMPLKGd+/NHNASpL6TdNj9aXpTvUABxzO2g52jfO37oKulnFN86foGTRhvC8TEy1S1OvFQK8OPQ1by11FahcOYFXdwXxuzNOFJgwPfeQQy5cu5Lw+xCFt3TPTsHdJ//DnLoEq1R/A29Y6pKWV4FBmI8orurhJ2LCIbRUbwKfUpXyxWrE4kCHtgC0p6Xc45EbRR5zTz72fHwEVdZukNHO/kS3Sh26cjcGaJhYpq+zDg7LWX+4B6hFXP0W3i2+YkfQPq+KLmaN8cZTEx2fLImurgw1gbBH4yGNJX3o3i9x7+AmPnpimvSUb9B5URKo7pVzvKmZkAslaN4KmF8wHFtvCC6CFfL9QKemr2Mwi1wraUVs3COmK5LPeknUqr6Uxvl4hsc4EkTcz/myxD7NhnITCIJ7AW0m5iSI2scixU0ZUVPeCiT5eumR13CqJXOtG02nsBP8tR09PhucRqAoUiiPjIpQn+1lom/bEO2lofMYyRbzIT6VdaL03s8K/K8/RcznDE1KRAV5LmNgQua45eM2OZ7JwbbZUGU+ptCxAOPwG3lW/oZdrJFUAAAAASUVORK5CYII=`,gn=`data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAAFiUAABYlAUlSJPAAAAM8SURBVDhPbZN9TMxxHMc/V43FycU8bsRGdp7WEFvy/DAaUqziDmEj81DOIQ9FDzgPy5UsFdFNruuKW0+XLHNRaqs7t6Gb54sjle3qkD+yt8/vjBne2+uP336f12ffh8+X/swlu31L7tvr91Of38JqkxHraxPfBRXWFE9U5ATyb29G5C78O/ecTt+M11prems8bnRewNU2FRJtEQirlWLElVQMONuOgYryVC4dwni5pV8R5H2PTlp3WuYhy5GAmp4qlHbfhNqegqi6KRiuUYGSPkCUHAEKV55mZSTj6ZaFZDx1pgSUzMCmxuk48WIz8tpykO1IwvX2eqyra8GgqyaIzu0HJRNIue4bKysZiVsWsvCKvVV8xoCF1WMRzU12WeYjzhqF/Y/fI9gIeGU1gdJYTiCIdktA07boWZMyP7ciPWWDxyELxmhHY0bZSMyt8sOcqgZMMQD+l7sQUmCGotyAOF0Rhu6Wou8cmYW1ZYzY3WDcYTNohwUeieXwviiH5Now9MsLxCh1B26ZP0LX/AmGl70oeORC7n07VsRmvGZtIyMcqIgmHGzspsga0PZmkMLGe90DOksIUsfg+A0bCps6UfWsG81OoK4DuP32O0JjVKUsT2C8KCClsYSW6EFhRpDMBNpaAoonLFAp3Q3Sqx0otLpQZnMh3fgOycWtmL5Idpvl5cwA8t+TNdM3suKLKFgDWlwEWnYT3jG+8IyQI1Cej7TKVmiau5Gkewl9UwcaHF8RuimunuXVjPs2vMVLDmwYLrvbM2yRDkOWZmP8eiXEwfnwmZ2HQFkF0io+IElvh/xAtiPXaO562NaLjcq0y+z6CQ2E8ZTQtAiZ35p8a8C2Bizedger+ExmR9djalhJj8Q/3NrfZ3Ax16UzRwsevHHm1H4UZiKUcceDEZYzi9lB40KKaNSCSvIZq5fODCmbHBSqlR/MKow9X6nJrW4xlT7rRUrRk3auPcz8jrAS4cGMYCZH7VUn8BV+rngF6CwuaM0uaBo6vyRqn7SsjVUbxJKhF7luF/NPhEae2Xffd2XWuhCpyDTxt4o5yhxh4pmdTDgziflvhCbCSqKZY4wwOMKTFkZ4PDOaGUREfX4A1q6mMfxGxbUAAAAASUVORK5CYII=`,_n=`data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAAFiUAABYlAUlSJPAAAALISURBVDhPjZN5SFRRGMU/dXQsGlewHLAiMzTU1FyCDG0yDIfIJZfIXMLRrKTVzLXMNSQdU2lMQjKyQCMxFxKMRImEQG1TkAi1xBKSyLHUfKfvvUEK/acDPy73vXPOve/BR8uayXWz/lGj3vc51S6Yt2sYE+nF/2gmlqyFdCUEXQjmUizQ6EcDuyPpFL+yYmSX2oy8xJUxZlZLf9w0QijygKANwFS0KQqC6NehNMLFFuPZO9/NkdVlNMI2Z0YhBVZKn7LuvlClgpC/Ha+DCNFqmjuSSyh8JUO9Xo6wHNu3bEtkNkqBlbp6oXOitPIjNJkjsyd8kubUGrOlpJuEqnE5dNMyuJTIYJ/VAsXjT4Nst2PMpKAo34SfKk0xoH0IHMvUIzS0bOmedj1u6eRo77JG6wM5NsfLQXkwoB2d4tg2Ri4VBCTPVWfrgKJ6IDj+K06nhuNJjQJjnZYQBpXQFSul0+kmh8uZawQ6r+vlqCMjIw/VUK2zZ0OHg9ONIWf/N0JtqSu6b5vgW58SGLBAeLK74WS+IVUTTjZzwZldixwOZWwYsmX2MglrD1dywB/1FSboadqA6utWhtP7DAVSuIxJCwH7MxjxFtIPEUuUNiVLoIgXoMQYUIKlwdw8D2rgggoZqMBQYK0pFAvKGDfmr6yu6AUKGwed40D+b1AdB2qYvB7Q2bugZG/Yp0Vha1yTWFDOuEvBZdnXzY+R30tQ8Ago5gt/ayAomwtiORz0DhTYhv1pjyD3a9SzvYBxkYLLssmp9iH18AK5doN29oHi4kCevQZ2PIclF3tFDQtkuqmV7UmMUgr+I3PKf3rZKmNxwSFqCr6aDtiGjMIpchKq1AW4RE4skcXBfvblMN6Sf4WMGEvGn462P1PEDE0ahX+Yd4zon6Ytue/5uY5JZ/Yw4qCJ/lUSJ04cGnF4DjDiDIiTKa7ifnmo2Ef0Bw2oR/24s5E4AAAAAElFTkSuQmCC`,vn=`data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAAFiUAABYlAUlSJPAAAAMkSURBVDhPbZN/TIxxHMe/da06NFHZhFgYtrbDkl8ziX8aY37/ZmJzaDIRKnFIWivNj7guGlN+J1eY4Y6p7tRK7txJt3J17Sq567i7WM/p7fM8m1+t9/b649nzfr2/e/Y8D+ufJxaLuORz95JzJmNKSl1dXpyqJmtVqUYadaZ8Ct32I7yE4kCpcLkjC62Vlcca7iKzKQfJxm3YUCXB1AcLMSav7UvoUfVRqgUTPoLwb1477TNSDZdsh97vwNWOEpR9q4fcegPxbyWYrowBSzdDlPYJol1XC6k+mvg7UvX16/ATDVcMsepRSPu4GkX2h1D1vILKVY9EfTYkymvwza0ASz0Pljb7J4tOkJE2kvAWBopa3JtDcu9gzqMpkFZH4YL+MjKMUhR0qLFfB4y9BbCcJ2Cn5oEleYFtlDaTtpAYIgzsfd5ZOOzgB2wtOIzcp8l4WfsYpVU3Ia1opNNJziMy6fQTfmD7/OGzZX4PrxGjeN9r+W1L9azkVyguuYeUu+k4WJ6AGo0W18tUSH/WgvHZJrDji8EOB8B7xzQM37qGI+80MUEYWFrYWCXaqEZI4jvsvl4Jj4dDfb0RR5IU6GhuRvmLhwhNDQWLZwjaORrhmxL4gRxikjAQm6+Xs1gl2FoVFKUa2D53oLa2Dvn5Suh0BjS+1yPzSjH81q+HRLock5fJXORl/xlYIH+zctCKMrAFRVDceoof393g09fHweVywuHohrmpFasTLyI6LguBkr0t5B0nwvkBNlQSHRiWqnnpGyXHvfIKQeY4Dk6nEzabDVarFS5nN5SPNZi4KP8H8x9ZRtp2YoQwQBENnrtWIt6pNl57oCXdA7vdjq6uLrS3t8NsNuN7jxvGD019weNj3lI/g4gi/Hn5d/y9w6bNTLtY3OB22NDW1gaLxYLW1lZhhI/BYPAEBQXdp+4agv+k//sv+ItB8Xt2xet0enR2dtKzO9Db2yvIHo8HcrncIRKJLlAvkvDlpf7xEovFw2Qy2U2tVttDJ3P0GJzJZOIUCoUjIiJCRZ0DxDi+ywsDRUTwP8s64iTBv++zRBaRSMwlAggKY78AKyzOwbFhtv8AAAAASUVORK5CYII=`,yn=`data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAAFiUAABYlAUlSJPAAAAKUSURBVDhPjZJrSJNhFMffDxlu6sxCRGdbm0Mr7DLf0eVDloqal6APZWVkl4GUSkjLXHkt1MpLS5HajIIiDMSGeCkNl2aMWbrKmjI3zVlWoIaIXT7+6zkage6DB/5w/u9znt97nuc83L/oN/Do00fg1a2tsNRuxsLn5QXbvDh6dBvgE8Qf8w1UbhSuVfovlC6N/5sNiwSYyhV4dlWGpyUStF0JRktxEJoKAiAK5sMJqlCs5Fjb+F0N/LixVG7CmOcPURCv9xIrtxGEnRlTpcDXYphrwt2quyoMnddD0F4qRetlMXXCxCAcuzC4LqGxTIVVGUZwafVuFZDZiNjSdlKxVoNsNQ/vv51w7A+wnYWhKBrqB0PIbR5xq7zWUZR0jKGy6xPqms04nnkQPmJVG8duG/3p0BdGwdJnRVIdhwqLFjOTdsw1lsN08gRm7S/IPzI04P5tE+VVRUfYlJ5z7HwMUHtxFwFyjBz05iwqmn5cA1t2GmYHO8m/a0rHTV0v5ZWFhxmgi2OjYgBdzg4CvOy2YtRuo6Kh9wOwvh7A5PgAebY2aBukvKLg0DyAzZkByrN5Avzq08AxXE9FY99cSH/ihPOzk/y4/hqmG6rnAfkpEIlVJnpM7JGUZW0hQIahFh/e6qiox+5ApHU/LCMfySvTjZip1lC+N1Xz00+yvYMAokBVqkAeb2aAiV41ppz3qKjlzTDOtH6B3eUgP5GvxmTLXcoTj+bMSTbFPySAV/BOhUdYygUGYIvLUXKa9rtMmXiHANzqBC/P0GTeI/SATiBP6PWUxzkEsrgxgSzW5U5CefyIKCTaLI/YVzIP4PgV3ooEP8G6KJVQGnVKKNl9TiiNzBVIIrXu5C3dc943JOb0mvVJMX8AhexLz8UlK5AAAAAASUVORK5CYII=`,bn=`data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAAFiUAABYlAUlSJPAAAAGDSURBVDhPlZJPKINxGMd/caNIKXJdMaVEs5LbJCe1ciIOxAHFYSUHy+KCi7SScZDadYflYk1ykFb+lcNQpN7isDSslLfU4/s87/bufXlb861Pb3t+z/f7/bX3VU4aSnZ3Tl17qSVWT/jpAtVyUI6WtIFxi7nBmP5DFnMPKL+ZNZnyBH4F1MhBKT2dLfq0pJ/6j1wmHMDwvABWnf8LPiSKgohpZOLaHGZ7Ms8HzAAOsUsC9LAJm6PpEdKzq7YbWIGteBsekBYUrEv6xxXaH8AFUe4Az1fhOFxrv40EpOfFZBjYeALiIGaQ28XzRnbyAUHQbAZIYzZF9L3lzPs6AhKyB8s+GAR17DcD6Ouc6G3NmZeQ7Pg6VAqWEGgDleyXgNwdWjLbRM+hPxQK8le3t7P4UM+cEt0H6PNyVCgYFobVY5dbJbC2AzbBLGgFRjvL2jDtV7detzrEOALYsAImQB/wAMePiYf8WjbAMhgDvYAN3NYEqkAFcBQnckg7cINGUNJQlFI/lBFteiHMZ9UAAAAASUVORK5CYII=`,xn=`data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAAFiUAABYlAUlSJPAAAAJpSURBVDhPtZBtSNNRFMbP0tSQXLlh9LJyK2OEmFFBRKBUjGhBSwyCCc36UOQScZSBfYhQlr2TGbKgoVhqL2aE5YeScmS5PuQi58psbXO+NLKFW6Tonu79O8x/Bn3qgQfuvec8P865NFP9ThO4o1eRbItarV6zM+Q775pdHztTAu6hAAHQMkjxJMYVosZ6aurEFoADRJDe4lyETxYKgKA1CyPdhIlwLDjA+2oeegtpuvkOtTyHCvic8zEyDflkMGDwwFF0G3IxkrUTIakS3io2ySAhdJtEAK7H1GZHEtB4uXXq/f3uPQjuOoJRbQGGsvVolq+BZwcDdBD856YAUihFkLwYU0X0SPRuYxaCq3XwqLfDePcwKofbceOJEX2N84WwSi+3ccDeh4f6ohGxHMvS8V2yCe7EdaAJQjwWIwM5WOLcjOZjcthq20FX6aYMMmia9vmjsd96w3b+Rmr4mKkzDjTKdh5irk7CwHUH4IL/dcsHxFUovyadShWtIqgrmQNS0U8bQGU+UIMZVJMOKlegMvsZJrZ5gdMR1KgtPrI4UXTPjuSSeossz1IlABwyFQOsgIdYqAigs8wm5gs9IJcHBZouNt19lNH+Hg6gSVb7wczPXG65AqNsAh+psGBtEKRlRQ2zNQB68BT5+n52+YJLVDoshGaa61GGDu6EVawpBQFaiePxZkhiI6CLP0H2t8g3hlkNqKVrY0Lgb+KQcun6ttDcFNY8BwOUhoNbT7D/eIFSfYcAaJI0zv7AP8VBV6SZL8dj5CyUCMfCpaiTLR+pi6sGd7Tt3+KghvjMHrcyAbrUtFvR5/8hol/FiooK4CqNgQAAAABJRU5ErkJggg==`,Sn=`data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAAFiUAABYlAUlSJPAAAAJoSURBVDhPzdJbSFNxHAfwf4Wma2Vm9ZIpRiNpFSlSE51K0O1hmEZYZkOFEEJ6MBXyUl5QBhrYnGaFTVNcVppRapmmCV5QiRTNtIVlWnNGQyt9Sb99j7OnXnqKfvB5+F++3wPnHPFPZn5+3mt82pb4YtCcwuV6clg6+JsZsXzVN3y7B01vMMKbonA+PTuR2+60aulCQsWkr6lpoP1xWWVnbYGxW683lV648fQ4j+S1I+b2pMmzOPNjDwIGPbCxdg1ya0pHeXaQ1kp5oYx6ktP6wAjECiCIQgUsOjWMDW3mE88yoep3R+TsbhyzeEPVrYBhwAQfVUAWo9tohRDeF9VplWYgyR6GmlhmvhOPuEf1UDx3Q9gHH7RYQ4GOvfhZ5oLi6rrXDIeQjIRMc6nvc19FBj6lhGAiOhgz0R6Yu+yJK2027Kzbh4kBDTDG4k66KzDWWQQf/8B0Zj2lgpU7wiuL0toBkU+pgFP6IsIMLSjtGUZ9VQ5Qz+AQvaFGAVvrOWTpr3cxq5YK2KP1S67+Atk1FmRTEhUAhzoWoKvqBSrsT5+1pGLm+zTKm98jOKZkiskoe4EQzmGZfW/97wNuBkCRtwhX3QLkJqCoy4aPJUq8e1WM2y1mhMQWWh23a0fEOmUNc1p7nG9TEXorN944hRjDODQZ/YjMH8LJKisKB+eQaRpFTFqZVThvaeTdQkqmU+RLy+MV6ytXXe0RWyM6hKtfs3BwKRcb9j88Eqd7GajNG+aNm5RAB0hBm2npK/weJ9pFEXSaDlMQHV1eh5OSpBC//58jbUqHUvMmktNqkv44ae1GjvRfjRC/AKLbNP163NbRAAAAAElFTkSuQmCC`,Cn=`data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAAFiUAABYlAUlSJPAAAAMBSURBVDhPfZBtLBRwHMf/R1hT0TIVstp50Ru8aG3R0wvVVjn0cNKa1XqYh9updkXdMpUjpCNTch7ycFdyzkVxzcPlkG4SriRhKa10V0JKWPn203lTqe/2efX/fn6////P/pXHgIPc1Jaf3FcyGP38IvY27ZtcVZLSy800xVs4ui2Yqc0eA6Yc4nvkzTEvolA6XAvFBxXC2rhYVhgBFv0JlqJiHdWcze1Zcq7LkOGtcUF0zwEohzWoHNEgsqMaTopWMEkm2JkVYLzTCqouMRszKVOrXJ5298ZIKp8Ni1RJSL4jhaQ8CVFP87GjEbCRjYMlrgGLZGCBPCMpQWZzJkU31Nvzag3Iq2xFTfsA7r4ag7jiNbiKCdhmg+RGsLO24AjtYMvnjZIiZTpdnV9T/cPUstvaskyZujNb+RBX7nYiq/k9FGOAoLqZxBgSP4KJ48BElrALdYDrbsEXGlDAqqp12mv13ZC1voG6fwgVw5PIHQCia0w41gkEqBrBEdOVIwRge+th4S/B6pCDcNpwwkQD8tnNm5rUuPZvSHgDZBmBayTHvwSExQMILP6MNZJSWO3ngm2WgnkXYfEmJbz3FP6wsPfQ0wAJuyDJ2iauNk6FGICoDtBvA0eIQ9nv4M+vghsvHdyANLhuKseq3VVYzb/33drFr4vkLMKHBe0KtRMWPjf63Af8GgDfB4QOCL76FudjHmD94Ypx953KUc8dRSPOa2MHOPaeTSTKCD5hRzBOREJdzUoVsLl8EvwcI04mtqFE2Qr59ftTyz22PmGWNgXM0voydROICGId8UtmqSm6+WkZeu0ljRHZ+R04Hq7HUUEVhMIEk6fHxhaq5BC+hCvhSNgTVoQ5paUt6RPjY/g6NIiWR13IzTEgJaUJIpFskI6nN/oQ09s4M/weqVQt6et7/b2/vx8GQw+0WgPk8gaEhFw02djMjaXKUnPz35nn5cUTBweH68PCTnUFBQk63d036OfMsb5FZ9PvXUT8vfmPLCSmPyaYCCcOElsIJ+I/MmM/AYA4okjPKIzQAAAAAElFTkSuQmCC`,wn=`data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAAFiUAABYlAUlSJPAAAAMmSURBVDhPbVN9TMxxHP4eFhmLeWltGGb8IdbG2BiLGWuWYuPK7pwsZ0VvtKaRt0mjobz0Qi5654jdKceO8ladi9JcRdNcSgspleLu3OP53dls+GzPvr/f7/s8z/f5fPb9ib/raolh3G1d9bri/Af7stNvF55J0XUmRGXFc2u0m/FX3b1rCK15/CTLqDNUlubrhi5nlCI9VYu0NB3OXTUhzdgC5eqYalIDiH9Nak01n3LztEjN1eNsuQnaV60wDQyiHkA1UWgDlPuLPi1POZMzMcmyecSShLGUydxq1o284oupT6xI+gxc+Q6UU1ThBKq4Hn8NBNcCyyqBRVmAzylgVrbTLgtrPECpO40m/dKWHGMTdrUAJ61Adidw/RvFbwART+x0YNh2xrADMQUOiHAHZPE2iIACDeUThSJEPano5jMoXgB7m4HkViCDaWYm90Mof0CovxM/kKT/Cb9kCsP5Hsc18iPEqPFqKYSsWGNsD660QUmTOAsQ1eAksRsigsQIO+o7nOhne0tTpQR2GnCN7oGYqzRLBiL35M2i4FvdWMHGNz0DNlSSpPpAEomRdnjGsgXW/CN8V9B090/ufYXw29XiMrhwtCRGfqUdUw2ALzGfQxM7aRDlTiB2cACsMdF8DuU3aTYR3J++pt5loAza7aM43QShBRaWAftKP2JB5Ev2PsQETszjyVK5Emxhe9Gcg8Jso/SByyAv59GMPYeqsDfPCqO2DpmJFQgLuQcPRSMH2YeyJmCIXXzlHEbGSsN9BTFt5XNKC8Thw4aFX7p70NHai773XRjsbYPhzkscTNRCHqLCKtUJTAoth1fgU4jgZoi1Jb3CZ7F0My8QASIz08jg7iE5HEPo6mqDydQMvc6Ca/lmbFVtxyZ5KAKD1tuEbPh1KTAhXaRlxGihVmdsa2vjDcIAenq6YLW+g9n8BhbLOzx8WIvCgiocScjqI7not2gKMYEYQbhqlL9/+DGNRtfX0NCMxsa3qKtrhV5fh/Pn70MuT+z08PAsI086dbJL8Z8aR2z08vK+Nnv2knpfX3+Lt/cs6ZJUEOXEfmIO8ecncpUQvwBvtxuddnElDwAAAABJRU5ErkJggg==`,Tn=`data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAAFiUAABYlAUlSJPAAAAM+SURBVDhPjVNtTFNJFH10XTWoJVapKK1QWgmlrRqn7XvFAqNlK+1ajST9sz+MGDUYTYyJ3yb6zOoPEwzRjVGiYvxA3M0SUMMGCdFd1EgTNquCMQbqB8YPoKCCaEHa40x5Yf96kpvJ3HvOyZ2ZO8J3ICkYDP7g8/mmeL3eaYFAIHkTIT/yfKIqy4JKpnQST1K2yrKsUorjBEFW3a/cOAf3DuBV48FfKf1pscfjy2WGqdxU6KkKSmu8Xi0T6xwOmuZyrdBQGpzOixZLcPLQw+syOv4AN0DLBviLiw8RJy2T3MtESlfOFnDSkSh21Fc2PL525saiJUUriOQVT5f6aDx8H3h2BxOoL0HzxSM9WWZ3jXlx/gZJKrIKI2eXIzygEDjCbUDTOTxtvo7n/VHE4kqe41E14rVrkJYltRty3cdtxLM6YdAQeom3Q8A7FiNjwOveIVS3DiD0juU+AcOjisHYCHDOhaqjez7PNUp/LbAW7BV667bWcpPB6DjxE+N8HonhUksf6rrieMVMx2KKAcedcuDPX6A1ONsN5vwa4cH5zYWjJwrR+iKK7kEm/grEWdttXYOobB1GWw/wRcklMNwPHF+EkqLCfr1JCgkBQpJ5BzzaI0Anuw9uws++43wYdZ1xPGH5j6zDiU7OBlBe5o+mG51dAmHvH7mw/tiHQxQ3n7P7C4/iv4EY3gzHcbUlglOhKP7pBt5/UcRX9gM3DsJgzovoTcxAFgRVqHqnDYdF/H6rk50baHwRQ2skjsd9Mcj1Edx8CfTyFmr2o3zbujGN3tGnzRT/zTRJTXzUktgQTX1TveU3/JyKiTjsRNXtAew6chsN9XcT+5X+YJSJu+caXX9nmZdW5OQu3Z4YVj7rHo9nlkio22TO2122yttYUVrSyY24AV/V6eS1ep69IzVDrDXk5u9buIQWE+KxJgwY+IeZTNko22xukpEt+ucbnWtNOeIeQ7Z0QpvhuJyis19Rp9srUjPF0mxLvtPh8KcRsilZ0SeQxC/UYqHTc3Kcs6zWAj0hBTazOa8gzWj3zdTZ/TPmEbdWT4xZpCiFc7lmXPo/lF8oqziBPzFbU3Q6l0bNQqMR1YLJNIXXx3mC8A3acf+vowSAHwAAAABJRU5ErkJggg==`,En=`data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAAFiUAABYlAUlSJPAAAAMFSURBVDhPfZJdSFNhHIcP0a11EV1kCZkStbO1zW0m86u0FsGQMCkvugn6gK5SCKKxNC1zYrk1SivS2rJiOXNbOecmtmUz3ebHBmqrkR+Vplt+gDnN/PV6krIGXTz8ec85PDwv/0O1nI+XOYt5rnGvtic48NQbHKj7L6G3db2X5Xk5GRkH47KysqIogyIJd05TaLoeDZs6BtYbMbCtgjmT56vRFR1oS03NzJFIJLGUsZQFYwGF0EcfsLSEpR9z+LE4TZggjJHzKIAR8uoDme8J/dApcqcShOKCPcnJQsqk4MB0aQ2+EoHb7YXF0omap22oej2M0REfFsJ+IgoQuZ/QR0S9qC05OsvhCNViET+Nel7Og/lqFEIjvSjvC+NxCDDNAJVBoNPegK9jdoRnu7C40ENEXaTIhYeXj8yxWPyq3QLuXqqxQgirchOCw91Qds9B3g8UvwPOkhlZZMPCvIMR0PSKwKxKQmtVPCMoNbyH1A5kO4CDrYgscmgwOa6HtjhnWXA7MWFXBtWkTsGr+zwi8ODhcy+yWwBlhQcXzpZGFOkbNPgcuAdt0eEwh82/wwgst9LhfJKCieE2JnlyMoiyshacPFmLK/qBv4pqNLUY7FNBsyIQJxJBc1UmOuslpMDKCIxGF4NMVg91tel3kSy/BN7WfCK4RgTZfwTW2/vgNkjJFkyYn3VhfFCHIa8a/o4rEUWOF2UIfqpcuQLvrnj5CozAKEWvNR+L3z1E4sDstBkzQX1EUZe9EF+GVNAW7Jtn0fxqIY+3nxEE3KdgUNDkR1nes5Ps+yW+hy34NlOHsYAKQ75CDHrlGH1XgqmJm3BoJNifnm5ks7mHfgu0eWvQpObCfINL5i4Gs4qNRiWNFxU7fqHciUYVTb6h8ehi2jRNC05QzXK+099+HB2Va+GsjkX7/Ti8ebAdHY+4cOsS4NEnoduQhh7TXnjNB+BrlsJ298zcsUMZLi4nMY/atk0kio5NOLchRlCzfrNQHxUtePYv61axfougfuNW0eN41u5yoVCc+xO1p6zVvik+igAAAABJRU5ErkJggg==`,Dn=`data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAAFiUAABYlAUlSJPAAAANiSURBVDhPZZN7TJNXGIc/L9O4tCAFtdLy9QItFNav0HuhGRS1hUJppyiCqKiEGGOiAw24RFzc/jBbCjMY0RjnADOFGS8zgPECRVenhApB0AhK8K5tBli8FHT81uJnDOOXnL/O+zw573vOIf6frgKt9Ea+NvXSKq24LlMbnidNays2pu6L5VPRutCkeWEzQ2fQpdNzOT9R5sqlnjhXSN43ZYhf1afy3E1JYjwrs/q4pLxASKrC5s5hzqTLp8a1SZfemx//xGXlw5nJRYtpERoNwTitInAmW/l+Man4ieSrBLFscq7fMPUU3uIk/cP10n96s0X4JGg1LkTzUhYetzvgOlaBPQqhh4pSWJWR1EJtBGcOjX7M2xKdoz9tAXqzxei0CfC3JQJXUpjw3LuNIR/wwOPDxV/2olBC3ZUKKaOGJw+j4qSzaZwgXu61FPWVLMfdLO6k4JofHu67jeG3ExjwjKHr8Riu9g7h9/LtiBbID1F8jUpGyRg0ThAPm2szD92ZwKVdW9CeHo6R/h64R//FfbcPXY98ONMxjGNtHpRVnvAt4GvaBDHJJpEoMYjGCaLD/c4SEATWgW7g1TiQd3QQO4/04KTLCyKjZVJQWlk/JkxIPx6rsSYZluUwaZwgrg8MyZs6B57X9Izit04v3N4PiCrtRvqOVtTe9AvMFyYFJfv/eCdSWX6VLVujNq0p+NxCIGUVdT+evDE4Xn19xN+zD86+12ju9sLe/AKzTadhK3cgp7hyRKS2HlRkrE8wmTZ+SaMfE5+aK/j25+O19R3uiba+N3Dce4N65yC2VzsnWCnlPrF+3bNItc0Rl5yzTZO1KXKJsXDqVaqNhYyvUlZKt9kbzn1nr3tq21A6aly5FSKFeVgoMznY0YY9ApVltTR5LWXM2xrEJdunvkih3jBLlrFuvlhji4/RfVNszi5qKf1hP3iSxAGeJPkIKfnaIEowc6VLsphhRau/oLHpoVYVMf0Tivh+V251VU0jzGn6/sVR6qpFMTp9SISGzWIJGURcXEAw/VPtq6jCqctX0XD+PB605mD8xWHcOpWGE2f/ROO1v7Aidy0Y7AQhk6MOJgjF55f4KSHhCjaDI98czFHuDiFV9lCeqiaUp2xgkcqa+VylPYgj3x3YD9QR/BT/EIkZ/wEgeoPIfViqKAAAAABJRU5ErkJggg==`,On=`data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAAFiUAABYlAUlSJPAAAAHCSURBVDhPYyAEgoIC3sfHhu23szYpmDF1kk1YsP/8xvr6/ZrKMglQJfhBd2fL/48ff/4/fvzi//T07P8nTtz9/+jR///q6tpXoUrwA1Vl5WAtPZOTHR0T/j9//v+/j6/fO2kF7XNi8obbwApiEjL+48MRMan/3X3D/9fWNv4/evTuf1snv/9RiXlgOSFZ4zVgA/CBnz9//X/z9v3/xsb2/wcO3P3vHRgDFg+OSPzPJ228Gm4Ak9kGnBgEQAbs3n33v39IPJgfFp3yn0/KeC3RBtQ3tP/ftu3u/8CwBDA/HGgALykG1NW3/9+0CcmAGBINqK1t+79uHQUG1NS0/V+5EsMAwrEAAxUVzf+XLr373807DMyHGrAcnBZAJhHCuXnVv+bPv/tfXF7vDZC/ml/aeC2QngEzQAEfFpfV1quu7vgxf/6j/yqaJjcllUzKheVMTAXljOTABuADvl6+F3NyeoHOf/d/9WqQV9b/DwtL/6+qpFglqWQmClWGG4SEhP+fMuUiUOOsf0XFdV8LCub97+i4+19RSe2itLJRKlQZbqCipBgkJqu7RkDGZKWkis0qOQ3LRRJyOvtFZfXXSysblQMAiwjB24ShYAUAAAAASUVORK5CYII=`,kn=`data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAAFiUAABYlAUlSJPAAAAJ9SURBVDhPjZJfaFJRHMdt9BQ9uDAiCUJ8GQSmoiCsRGiboG5MHURsttFKMoXc5nBCW5E0bUIXQWy73JgPSetO0NhwcBlsOVAcMowRBCOIxVZ72KKCpPXw63cO3ig2aF/4cLm/c77f8zt/JIdJrVY3ajSaKyqVyqxQKM5i6ThyjA7+T1qtNqzX68FoNILNZoPOzs7vGDSKQ6cREnRQsdhL6O9/+FWrNW0ZDAYwm83gcDigp6cH+vr6wOfzgVQqvYlTzyD/dqLR3HDG4y+gXC4DMbe3t4PX6wWn00m/Y2NjEIlEwGq1ruP0y8gJahTV1TU6X6v9BIvFAh0dHUBUKpVgcHAQPJ47kEwmIZFI0C5w+m3kHDWK6u19XBSEKjQ3N0M4HKZmlmUxIEC7yOVykE6nxYBx5AI1ijKZ7gqh0FNobW0Fv98PExMTEAwGIRB4QgNIYCaTEQMY5CI1ilIq29p0Ouem3W6HlhYHDAw8gpERFlwuFywsLECxWIR8Pg/RaPTwANRJuVzeS1Zzuz00hDA5+QwqlQpdneM4UCqV5BAfIE2x2OprYpyb+7ZMvg3IKexgJxQKwezsLG2b3Eo2m4WlpSVx9efINUTGsps7mO2fmtrewH+qBnw8XjIxlUoBz/PUXCgURPMccg+RxePLwtBQ9RUGrAWDbzliFtWo0+kYYiAHRsBr3cI6j9xHZIKw9ymR2Kyh+fzMzO4vYvpb5JmSO7YjZK/kwMaRW4isu3v+eiazW3O7K1dXVva3h4fXs1g/IBIiQ5oQctrkzuUM8+Ydx32sEnOhsL/BMB/+7P3IwrYji4u1H9Ho+7V66eji+b0v09Of17CDS/VSXRLJb3mhSY8ZnaUBAAAAAElFTkSuQmCC`,An=`data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAAFiUAABYlAUlSJPAAAAKgSURBVDhPlZBdSFNxGMaPVEQSVEIEEQyhD4KIygulq8CrAunCutCLgkAr0tCy6MthkkbLjzOZ1mqolBOt+VHTnAM/zuaUucPcyW3tzM0yzWZKkhU5C5/ec45JFyX1wO/if877/P7nvMzfYjQaT3EcZyfGLRbLOJ2tuRR6tZFYLQ/9KSzLburv7xfC4TDa+obRMxRGp4PHE6sDJpMJarV6WKVSJdDoOiJGLv2WGKkcGBkFH5pB9AeACRcQ6oZ7AWh8OQG9oRpZWVkjNLufkCRKeH0CuqtPQLpZKv/Kd+I90fxKxJFjaTDY/NBoNEhMTKyn2o7lspRgMAjroKjcTPlIjBIdoojkwylgO0Xwn4DCuyzS00+OUfXochnQw+XqgcPlAcLdiNKTMFHT0oLU1FQcz7gI9gWP0SEPGitY5ObemCZBNuO6fwD4pgW+lKHP1o42PoDXHwgqC4S2qQU5xVUoNfPQcZOYmp5FXZMZeXm3ZkhwlXFW7QOmi4DJAnQZ0v6ZmvxDIEEBM6DbC7y5BkfFHkQiEfj9fnin5vB2HhA/AwH6Zx8tIzhLC12kc6AePl8EZRlxkqCckYrwnoeyCz28Xh1490MI4x14N89jdsyEr6E6zC/yCEw8h/NZKQYHK1CbvVYSVDK28t0Anwl5FyRYmGPhdt6BgysDx2nh9jfAIzyCzX4PPqEVvbVnEI1WofrcGkXQW7pLFshfQgJ5H8SYoIbHdhPegRL4nFoI9mKIzsuYNKfIc4azqxRBl2a7LOgp2akIaB8rEWpMlucenI5RBNbb8bLAUqRSBLSPlRiuPSjP6TMZSaAjmPj2wm0wF2xFa/4WNF/fjKdX4tBwaQOMF9bjcU6svDDpn6XPlm5eKrcTakkQSyQtHSr/A5pnkn4C2HlyUHU/5asAAAAASUVORK5CYII=`,jn=`data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAAFiUAABYlAUlSJPAAAAMVSURBVDhPbZJrSFNxGMYPFUF0FetDBVkZkUlWiyJC6kOsm9ltJmLTYpSV3SQoJCqKIKmktDRCKiv8oIjYhayVQtqcbu5mLncxt7OjqJlzO7u1nNvTe2aUSC/84Jy9z/Oc9/3vz0wsvdVd1/6Nh6HLhXaBby565tGk5Z5Se+aY6j9FImkHGXsH/AiPhjG+wqFRsH1efOnmcfbC9a0knzLm+lMaqzur0+6OikOE0gtUdkfwSD+KYhVQZQSCEaE7CqOdh3jngb1kmzrmpjLaeKEL3Xcg7zVQUDsEOzcEn/sH2F4e+RUBpBZGoLYJqjBN4gbZNhCThJ0bXXwAXYPAztuAtEBQDdMaETyX99PzCCK/vEg+z2J9Xh+GaTq23yesUkcBcX+/nvvIj5U5HM7caUXPoBv7r5rArGnA1cemaP9YoRVzJe24WMYhEo6gXmnhKSCNMbE8+pwhiHK7sO5EB1Zkq7EkQ4X5aSrMSWmE0sBFA7bkGbA4U4uNuTqE6FA7bK4IBZQwFocHarMXSw9pIcrRY/VRDRKPaBB3UIHKt/qo+dJjFgskLfS7FgnZSjh5P77a3UJADWN2eNFp82BRejMF6LD2mAZLMjU4ebMpai6uGcDsXQqskmmw4nAbErM/g/eQh/UIAa9oBS9CI0GIZM1YLlVj3XEd4g+14eQtNez9P7HxlAHxmWoK1mKh5DP25bfQAQeh0LJBCqhl9JZhx6+RERRVmjFzRwOSZDQmjbrpVBtO3DXTyOro1xOy6Ey2y9GgYjHgDOBaQamVAp4wN++Vi0x0DnRVkHGlBTPEHxG7R4nSirEVzt230AqNmC5+j2tluqiOxhfuQSWRQzCT3zQYqrhBPzV9JNJj3u53SD4qR1mtBfEZn7AsXY7y2q/U/wkL58O2FEkr+QqJpUKAULOfVdV/MPf4oufBcb148UqPh9VGfFR2w80PweMNoJMmzZKd1pG+hBAT/64z1fw9EullhdbhMdE/Y6EwK2HmvBDeq98qnXNiYl+TrohIJWYJpokVQ2wmHhAviTfjqCFuEEnENIKKYX4DQ0trndBB45gAAAAASUVORK5CYII=`,Mn=`data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAAFiUAABYlAUlSJPAAAALmSURBVDhPjZJtTFtVHMYvLAbjiGji4mKWzMnUL+gWl33YgiFAFtQPfJJE1BD8YHQxA6TbIEN5i4Ut0UWjaMIgEXxhCQGM8rJKuxa2rhttV6B0pb2FtrTdCO8rlMnk9ucpuTq+yS95cs79n/M85/7vPVKC1Mo7a89pI6TVhuJpNRFld3VIeao2ojxZN6OkVIWVpMqg8nT9PSVNO6fsbwjxZoOVpKyzLVvmBHtP6XlRY+DgGSPpGuPW+O88oQPlBg7XmMmoucHRz/WcrO8gNe/cvGqXpCbzLPztITrrJDo3wapQTOjhfTfEZFjzoERl8ezjQdRHgteLtT7VLkkXTXMQdRHyWolM2ZkNOlgIObCZTXRf/g19r55R8zDr8y42708J+yaZ79XJql2SzhtmiS+MM3nHguyx4nVZ0A2Y+POakx5XmM7JZX4xh/jhUh8B9/WtNzj+Ts2jgEb9PeIrE/i8dmYCDowmC8MjMuvRBXSBRdpciwwsrtFqm+fiV23CHiOrsHpbwOBdWB5n2jtC0H2LTsMYhvBdOu3TXHb50fkD6IMhrHGFukuDyE4zeUXbWmg0iIAlB1MeCxO2IbquTfLTbZkfLW50Pg83A14cYT/O9WVar47S19XBW0XbWjhvTATYmHKb8Ywa6bgyJk4O8asIMQen8QT9RCIzzMX/4ruuq/R3t5Nf/NmjgNbxVdFXBJQwG+sz6AZt/Gxd4vqDGPbVFfyrS+I3r7Ehdp2p+AIl5ubtD+v9ql2Sckp6ySvtJ/vkH/Ex3ZdY+pvRfmPgirgeC4lPLngoVFXbzvOvfUBZk5MDmaUrqj3BriN7diUfaSl/1cTvr2Bv+IiDLxwaevyxZysys983FLxbNpb+0rF+sfFToROSlJIvxryE8z8YzqnEmIl8oQTNJ98jQnPVpf+HoTe+pTcLp7YMTWkrUtITRerSzuhr1iB/XcHpkhak5NSP1fLOeWbfywUZh3N7pOTdhWpph0jSP8WhFfEZmqGcAAAAAElFTkSuQmCC`,Nn=`data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAAFiUAABYlAUlSJPAAAAM2SURBVDhPhZJ9LNRxHMe/0aW21nI9OnfbSYvOKi4SKi5ybjkZtehBDydXUulKnZYe1B/thFpbDyMPSzuyHtCWtEmhM8pDTaEykrk7nDIPd9G9+/qh1dbWe3v99f28X9+HfclkADiadJ35/ZkqY3fcVvRsdUHSXRucfOCIy3nhKHqqfllVWes9Mf53aNnDWFn8ZXCnO0z+HIwGLoJJaoerTwliSwkiswi2q6Yj8Vqk6X5+wfGJ2njMAM9YXdo2LLWHOdwZiAsBTu/AYHwYchtW4GLjTCieEOxLJ5DGEyjObx5RqVJkE3VChgw9GQN718Ictowpfy/IxscaDZqamvGB8u5TOe7URiAmj2B3Mgt+UQSnEmK/eHv7ODICQ97NfqOYA8RuxODDDBi/6xAdHY2KV6+g03XD0D2APv0wsiqiEJM2B0GKqdi0eynCw3aqaJ1FvinokSVUoAhEe00lIxD7ixmJUqmERqMB6D11hnacyHZCxHlbeITMQIDE/xEV8P8WfGr5LZBKpeDz+bCysoJMJoNWq8etx5txVOWAgHAWfPyci6jAhWw4UwfBhVaIc3Ro69L/FnA4HFhaWsLW1hZ1dXVoa+tAb6McrWXueJPLQliw05jAlUjO1mNBXDv4yX140TrACLhcHthsNtRqNVMe/QmMDndAXyNBV+Uq1OdOg2itcOwKrkSZ+rx/3vZa8I61IDRdB33fN1xLuYQXZaUwmUboFxmPoekkOjViaMs4UCex4Sz0ukEFQlJc8vy2Q0gxONtqwN1Xjy2praj+PIQhE305swk/+t+i970CnVX+6Cj3RMtDgv27fDqsrdmHqMCOfGxq4CnPZXZZez4GN/Allu+pgtuBWgTHN6D39XqGTo0EXys8oH02BYlHuCMi34ArtBxKYVEIuZ+fI5JFJ3XbCHMwe0UhlqwvgVtQCXo0AgZt2Xw0050TDvJ+eHqJsmklksJlypOJORjlLpcf1qzxTRyxWXwV83jXUX13GkNa4gLzlmD3FgdHQRId3UsZ/4X/yCyRyEvu5+dzx2O1qHCdl7DIxdnl3iJ7wWULCws5XZdSFjKT/8lcioCycoLlFA5lCuWPEPILoBb6ocrgoAQAAAAASUVORK5CYII=`,Pn=`data:image/png;base64,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`,Fn=`data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAAFiUAABYlAUlSJPAAAAIsSURBVDhPfZNtSFNhGIbfYBSliKYo1I9A+1NQq0GIBVtEZUSFhVCNZWYDKxn9EXQVtTJSZDHC2imCSZqkliBlRB/ahxEmQ/oUshDKkkZZ7HCCBnnunuc9bWwe7YaL9/Ce577OGXuPmCkbDg9k7bmqgcl0KA9E9uqltD2XmCUH/hd3cHQdF+9PAN1jQGl9GMLq/0S3bMQ8OTQ1WQGAlrzarjEvl9tHgIZeFdby23A4b8FePYScopODNLOcmMMdmTOdH8CwgFcuH+sHNoW+w1bWjXOhpya8xzv4YQVEmvC1vAaHBbt7dKzoALKDMdg8D+V+7M8kJnU9QURDXFAlJUeU53KQBcwq9wQyNvfhpxpLKQ4r5Rjtqk8WBAirqPb3SQEXGUfZCLbv78cJ/5MUQcOOYgz6DpkFnlM9UsCJRlWEw2ETL94M4/03DW+/qmZBZU0ndCpPR/ytkjEJ9nmaE4Wpb/BoYAj5QRXL2gFL0MAkcLmVlKfGufHuF3Iv6MgI0b9zBzj9bAbBLlcA49HfKcTLlov0M64bZZZMKyjd2YiSkjpsufQZ8+siOBh4haJWDelngdxmoOIe4PS2/eAZFvDKJAQUPlFVInOhIrY2vUzzRlBQA6SfBwpbNKxx+j7S/Vai0Vl7k4vXiMuyY3TpOBoXK4m1FvvRKzmuu18WV7aNL1hif0x7TUQFUUisJ/YSxYRxlJPCnyl/JPnENsJDHCA2EouI2QQX8v6tFCH+AiRpEMtmxrv8AAAAAElFTkSuQmCC`,In=`data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAAFiUAABYlAUlSJPAAAAOGSURBVDhPY8AFXCLbBYrrFu8H0VAh0kBl8/L1bfPO/U/Om/RCTss1QlbbWUPe2FZYTtebV8Taj0vGMpSdwcGBGaocFWRXzCuYuPzy/9bZJ/43TVjxf0GJxceasqArgc2151jatk5Xze/MkHCIkJCzieKFakGABe1xDlOXHvy/b7Hn/329LP/LCh3+q4d0/hdM7P4kElpwVNLIfbpKaEqLa17eXAWHYDmoNgh4uik879ACs/9nZjL8725z+m+YtOy/YsTG/z41h/+Hpfb9kzcJui5oFdIibhXiJBDX3KlkHxgK1crA8GRTRP7bHb7/d08R/B9Ysey/V972/7ENB/+ntx76H1W9979v4Y7/XlFNP2UN/XvEDH3tuGPaGvick13Amm+vzc97cDLq/8Ruj//ZPYf/p7Yc+l83/fT/gt5j/xMbD/wPKdv936dgBxhbexc+Edd0i2JPmZTK45zuxHC6XlnhwAK//7Hldf8L+0/8n7b66v+GmWf+V0w++T+r/fD/mNp9//2LdsINALlM3Lv4pLCenzu3HdAFV3ZNvG2V1/XfO3/7/6MXX/yfs+HG//oZp/8X9R37n9x08H94xR645siqPf8jKvf8N3bJeCGk798iZBqizZDW2vhfr331ny1bT//ffuzx/3mbbv6vnnrqf27Xkf9x9fv/B5bsAmsOAtLZnUf+hwEN1LNLfC2p7T5dTMdbm0Fo5pH3gjquBwqrZv5csuzA/8krLv8vm3gCHA7RwMDzyNkGNsAPGIggzX6xbX9FFG2vSWu5d0hpeaoyMEw/1c+v7nBc3MC3184n766jX/5rU6fkD84BRd9Bzg3KWfhP3Tz8h6Fjyjcjp9RPIop2N0SUbDZKqbl6KGm7iDEU7nhwgMsifJWAUUCIpK5XlLye9xRjx8TDfsCAA2GfvC3/VUxCnkmqu+yU0nRdK63pNkVSw9lLUtVFXl3dmouh5eBtG07n1BLmgoUTWQoW9YYXzLjQ0LX6f1rx7P9haRPBODR1wn+v2I4fEipOkRJqTuYy2u7SIkDNoaGhTOB0wO6a5cLhnO7O7ZzqKmgdGyil7dkhpGC1REDWbDufjNleflmzbfyy5ouFFaxaJFQcFYRUzLkYGKCaQYDTM1eU0yFFlNMuS4zXLFxGRMdLXVjZylBQ3syCV8rEik/azEJA2txQUMZciVfKgZ/B2JgFqI2RgYGBAQBiAowFiN+QwQAAAABJRU5ErkJggg==`,Ln=`data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAAFiUAABYlAUlSJPAAAAPLSURBVDhPTZNrTJNnGIa/TfHAOBcotECBtrTsA8JaocAKfOXUlpNELEyoUA6WcfIH6HBTGExYwckCkzPq5gCVSVGCkkFhgYYiCwch6Ei2KRljYjKzZHNmU7fdK5/b3JNcyZs3ue7n/fHexP/mJbFYu13werJlxfsjyQVVhqbyk6OtiYf6joviq2VckZzNDYizo0hqt4okt6tUqpe3nOeq+aBUllocazCob0ysbgx+sYYrhrvQfXwLNV3zKGmYRm5++3xJalixJj5YFhJCuQQHR9uIxUk7aZmnVFp09N0sWVhax/rmI5qpue/Q01mLvvpEtFQnQlNWBlaqHl7FYxBknZkWqmsP+0gTXAmKqt6Wc+Ka9MGPv+DJ0z+wcW8FNwfewmCdGEfe0cImdxRWBwzYkzMMWcEwAlPO/ebqFzvg9oZu2js8ZT8RGqra2X9jeRTm+XVjCDOtNnj7eD69yTHfCH7GEAIzBiDNG4JIrYdYPQiPoIK79umnrrHCVTmEv3+CtWFyBU/X63B/mEDl6QIkVxjBTbkMYWo/0o4ZkHliAtGF12l5C56s7pFLVPmQQ1hmLkEqWyLn+9LxeMYChS1nQFWY4L33Ejr0X+Fo8yxyaiaRXDYKSfbV/wL4CV3PmCG5M7aS9DeJtpLXyo/qNEhpHEVE+SQUpSMwLT/At9//DOOtTew7MkY//195C4G8+RmDLzPZilKzicPa5FVJzRSSqkzQVE/CuHgfM+YA4+Imxr/cwIXrXyM468X2LbjUe7878mTjDqQ8gvAuOo+A4uHH2lojuq+uYmDiHk2/+R/0jnyDLvNdTfcCgg6+CGAFZj9k+kT1M1+NFRFO+fp5T9GBqcr2OTT2LuOjy7dpmi+t4INPl1B7dgHvdsyh7MMZ7DGH+Ma3/2nnLrntKoytZJNyLuGUp//czk9+Lijp5HjpqWm0fnYHTRdXaPE5izjds4zqznnIsvr/YvAVGwyv8GFnbmS4uyCWQTDVfYVOKfU9jqHZh9wSdLMH60yoMm9su3KHpuHCEorqpyFNbXzi4BW55ugtHWMJojJceNEcZkDcLmIXpXGxjszb55TxyUVmWncXwz++jUnuXyBlFT8Eyqt+4ocVPXT0UazZeUhm2b4xvSxh9F62j4zrGUhZEXShJJmWu6VaZ6vwAs4rERqZbVBanL2AinERxhR7+CmaOKSi051U6Ni+cZks3xixGyln83hKS4qitm31iKBTKM0OB2WppTWltbUUqxn2ZJKzq18MxywKOf6JJCdAznf3U7JY4iRbT0/NDrP0T5UJ4m9kC+Koz6M8tgAAAABJRU5ErkJggg==`,Rn=`data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAAFiUAABYlAUlSJPAAAAOGSURBVDhPrZPtT1sFFMbvYJ1rR6FQXudKCxa7QUuB297b9ra0hRZaxga0VFJWoC9QXsQgLmzqmAO2LE6dliVoFgsLsugS4iqyLVsCG19Qp2iWGRdfEzEEIsYwMp3GtDzSxsA/4JOcj7/z5JznHOJ/kVVsZU3piipu6ktOTjJFXZSEytIUanhWMc0ZZ8j8G4y8f5qRD7ym06gZCcPfLA5Jkjs30R2xBj97DPdXjrqx3mrG7z4TFh2qx+1ysvZznezDX7TyjVWFAOs0D0uN5biokJ/JF6vzpNLyZJHBsIuY18u1f18eBt4PAC86AL8ecJVgsbViY8G2DwsHWVjQEbhuKcawzYuj1bYNqbXnXoL9fMuTtC2NWPIZQ+GrQeDaOHDCCXSZsDaQjU/OxWPshUR4vF7U1w2hv8KLZacOaxo+MkWqGaHl+EIK7dQQD+zq4KORQWBqDBsv1yN8IxG/zbDQO3QW3T3XMFLVhmWKD1A7gWYK6+RuJAuoL1jO4EepirojsRFWzvYhMh3E9xN7cC8kwMWrs3j3+CXcNakQNmcADBtQxgGVWbhTnBfmC6j5XQ1vjyUxTY7YEu/3qH74LvA0ggE9Jud+wqevB7DmUAD2/YBlL1DKBRRxeEjxIM1RLAqYllmO48IZrsFjiTWY6j3wqOdkBy6FvsFttxvhThPQQgOOAuBgNmBIxreybBTkKFbEucoZ7jMXJjKZxnJuWaeKuPKWr6F7sAc7umYit4dORf4ZeQXorQZ8WsApBw7n4keVOAr/ugnf4TqGL4tKqqgkfZuBbWhNIxrPj84lud6L8OXVd9Mkhs++emPwj3C/ayvOP20yOPPJh1n0ka8T6wMfCIssdJLRU5oShRkvh+B3TM4lmE48SC0wf5xZaG7N2V/asHT6+Ug0TrRQOKUk/0o0HVsWmLtHhbStJsXgNcacmWMcwjAQT+zpmw0lqt23eEpHfyp5WJVTWFn4koLqe9xpwa3mqo0EU99qUYH2nb10bVu6zkVvOUfh2Cl33xSyXKPz8c0ToTjPlXPxvsnTTzSPv3m9Rr9aK6W+zJMw0/vIQ8+KyJoDQp2Ln1HRtHsb/k+csnaGY2y3s43+anZ5h5Gvd1sFKnsTKdO/Skt1dmmxWfKUpo4ntj7HIgYGouA2HBWn0s9nm/zpsSrtSueV+TJE6kPZMpkpVykzZclkWi5J+re/b0sE8S8JgoZ7unfVtAAAAABJRU5ErkJggg==`,zn=`data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAAFiUAABYlAUlSJPAAAAOgSURBVDhPrZPZU5NnGMVjq52xFEiCbAnBgCFkIziEGgpBvpBFgoFCmbAI2ABukGExULZoo9G4DGOiRJYAxaWIsQjUtq4wIBUhYLioCLWL0xmddjrTdqztTG90evrla/+Evlfve3F+73nO8zy0//OskclkayWaVlae6dyHFe1XF0rNHl9BzcdL6rLu4bhUk5aVoI2OkagY8Wm5b/J0unU0g+G1/7S0NWKxYa26vEtvOzv54szlZZgd8yhun8TO1lHUWS+ivaUeOVW7ZyUlNUeDlRYVS2EIY6gNAf/KCeL1nKpehXNwBm1nF6HcPQrnyR3wXoiEvV6AzLoOJFUOIHbf5+C+6/olMb/sSojB5ohIK+FS+lAxsd7eM/XMeekh9Hvd8Pasw+qnDDjH7sI8+B1Kj3nR6JxH5r4voDGex0Z5+TJD+cGFsK3FFRQgUXcy95OJJ6hpOICnl4rgOnUcHUMrKGiewH7HHOo67uPcZ4/R2rmAfNNlSLUH/gxWmEcZirIqClBp8ZwevujGcBMTO5oceN/qQ07DLbKcBeTsv4XmM14cGVhC3/jXqD5+DynvOV4yZUZvkLykmgK4T1R0XbEEIP3QNMZmf0Je421KNP3gR3SPrKBvbBWeO99jr/1LDF57jMzy8wjhEXPBSQVGCnCtf7tPTIrTmucocc/VFVTaZjAy+QT+jjSdnoehZQIDpIPe0VUk64+9pEenzDL5hJL2wLmJntxohdQ2Ba3pOvSk9fHpH6h7Vu0N6m3t9cHStYgp0pE/DxFh/iuMR9wM5SvlfgARqLQ/Kqx1/97S6UVx2yTKDk6hsHWCDPEOak7MUr8f7lvCV9/+Bh0JDeVpnkbGqz8Ki1dK/AAuR9Vwk7059161dfzVIbcPnZ5ltLkWYOtfgsvzCCNkh27PP0MuGWhM8s4/SPv3WXxNKVugiqIy2KC2uQKJtuv0DMuNlF1DryoP30U7OVD++k8NPcSuIzMgSvv+5iQWP6dz5D6WQG1n8dUJUeJtgRRAoNjOp79TtCdIXtjIkOodEeK8RWFG/c+C9LrngvTaFzFvG38Nid36DZObOs0Sag+G8zVJnHhNiH/8KQB7S35QcGoRi74lfxM9IVvK5BEZEQK1iS3UdLNFmkG2cFs/W5R1NIKv0ofHaYVccTaTxyOXidwhCuDfBRphfCOUMKynb857awNJj5SoN0aJtEKOUCuNFmclsES6uEhhdnisTB0gk+3x/0yKabR/APA6rI5qA0ICAAAAAElFTkSuQmCC`,Bn=`data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAAFiUAABYlAUlSJPAAAAOLSURBVDhPjZNtbFNVGMfv2lWYXaADZ8fo6F7ba7vbl7W9vbe31Nv1bWMBQbjOlTmEjaIgm7SMTaFZ9+IcY5Ayt8nIUBBj4iARvohhAbOoZCFCxFiDw2RRGCwGzZCkH6bhb3s1xC8mPsn/w0nO7/c85+Qc4r/qS6pIkQr/z/L/12XGEJzetvHMjz37Md3XiZmh3oULe02nhzrWDbG7eramYk7vo5w1Ur0gSEUo1alwet/O0dmB2KOH/a2YP9qMiXYSw00ytIUoeFsH0NR1eo6rj37KNLSfrG8NnyO9QrGGr1sqCu6NDV7B1AT+PNGNm0fNmBqWoCUSwuq2iwjGLiExeAS/HmxHT6j5J+3qTYdXVbXE8gKR3nx3fYEo+LkzcnV28l3c/ywTdy7noLH/Q3TGL2Fm5AgwGnucZN/rqDMwHyu9bRGVd/sHCk9IIwqubNZc//oYgVPvPYfmwa9wPnoIv8U7/gZHDgBtAlCtQtIuR02J6ebT7vDFPOfmSI6vKZc4Hw2wZ7vX4KVoF94e/hwLMz8gfRy8tQMQdIBNClgIfKtfjhuWArj5539RcU2fKLmgcaWnQU4cP3FoUt98Bud638F87x7c6u8GXqtCQp2B8cUEYM0AeAXmA8W47SPB2/z3S/WVYyr2hex814sZxJ6hk3izcwTXa2uA+F78Ho8CgRW4p8vELdPyFJwDrC8TJ0j4K+AtMt4ldc/GSVPVEyS9QUpsGfjojx0G+sHc7lqgu1GUwJOLRKEEZ5fIgI0k0OjEg22V+M5dDn+x8bZZyxywU85FPM/LCNfWN2bVJn8iZmVuJMOpy0pLfEp8Ty3DVUaLZNArJj1BWsAVmaZtWjrM6WxZAsvKiCW1o9c07rrjJfZ1hw/amElRkuqasORjfFk27m5ixByz2hbWaixzK9TWCYakgzzJyAW9PpPI8bVsyV7TdSrXu+99RVVfXwfvm3pYaxWhCyUFj6KGiiSlNt9RFlivGUlmnKMcu+hyWuukqEUCIUiIpYFXF6ciV1Ruz8t1NaxX2TeEu0yWyZ0684xylfWblWrrFxUkO1ahoV82aex2xzMOtYem093T/yBDfEhyT4s0q/IVidIZzCtl1pYZDC6Hk3K0czp2P1lGeyiSNVq1nMphcDzpNxikqcuTPIbFsoQkRPVuiYoVpKX2ahln5rJ5in3KVc4obOW2LN7EZ/KFvCQFpqF/gQTxF55IlxRE96ymAAAAAElFTkSuQmCC`,Vn=`data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAAFiUAABYlAUlSJPAAAANXSURBVDhPbZJ7TFNnGIcPNYwW6bAHA70JCBZwxluNRoSINdrYwSJqagVHrYI13pgLUoOXBtcxxYgW1JWxUZ1rbbQxBoNIFNkIQUmwNgQTwSpUbBhuM8SY/aHL9vM9nyPLEn/Jk5Pv5H3evN+Fm8xn64qjDIY1krz8XYkVNrvvXOP3v7lc3w5tNBVdjJ/Gz6CSmPeVH4hpU/G2xqbmbo/HE6o6UhPxXGzG2XPfYWDgAV5N/A6zZdv9xCR5DpXGElFMmsyq/KJP29pvvQalvb0dXs9PqDr0DRatPMp4+cc4Y/mK1QEqn09ImDiZPftsHkEeGRlBZmYmzGYzfD4fKqvqYT0GmEr2Izw8BK/vyp+Zs+dcj4uL05L233bs1V8/PnL4MDo7O2EwGKDX69Hb24uxsTHYKnbg5JcfM0JPnmFpju6RTCarJE1JTJlsMK5duAAOhwM9PT1wuVzo7+/HxMQE/N6TTO6/HMO+DQ2N4wqF4jppiwjhPDjOUXN8tKHeCbfbDZvNhq6uLhQWFsJoNKL33l0mjt6Ws7Xd/tWoRqO5RdpqgmcNyrbv9AeDD9DX18em6OjogMlkglwuR1tbG8q/KMTV09Nw5mopa0L/O6Ojo42kJrIGazcU1Z6orUVBQQE7yFAohJaWFlitVgQCAayvSYLtFw7N4STWQK1WBaTSuF2kKggRp1u1Zl3F/sq3aTNnsmusq6uD0+nE8PAwBgcHUWCLwt5LYjS9EWHPsWX/pKfPHVKplGdJ1hAfEdzUTcWbu9zn3QiHw7BYLOw6hfGDwSCyizk2xd6ds3DPuhTdh/Kh12WHFOqU3WKxWJiCm6LJyMp21jeMC+/B7/cjIyMDXq+XrvYO1ubMg+cTBV4vkQKWNKAmD29+3AhXuQ5arfaS0IDjeV66LDe3pLr66ItIJIILF86jtbUVZWXb3zp4GX5N4vDXPA4wxAPlc/D0YA70i2e9UihVLtaAIrxvmVKlMubl6X7+vGRLZIVuZUjGJ9zMSkmO/CDh8FDJoTsrCnbt9L81qcnPY8SSa+QcYPa/EREyqVSaGxsbW0r7qxSJRKV8QsJudQI/sCA1+UVKatqgRBp/g+pOEVZiMfG/CJMIL0w4nDRCTcgJoXArsY8wE8uJFI7jJO8A3UyfiavcoX0AAAAASUVORK5CYII=`,Hn=`data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAAFiUAABYlAUlSJPAAAAO4SURBVDhPYyAW6DZv43fr2mIfse3h1sj1t2eZFC8Ih0qhAqmQKkalhFYD/cJpQWrZM0ulEqdUGnTv3Rd64OWOhJ1PLgfN2rPYund7qP/yyxtN82fZQ7VBgFZ2r0HezovrW259uNTw8tf/rJe//7uc+fLf6/yP/y7rbr+3KZ65Tz2m2ROkNnTDnQ02lQt9wBpBwLR8hkXXhYebu25//dBx9dOllMvPfrtd/PbfcPvH/1pr3v7XX/vuv+nSF/9kYietVEyaWOBQu9TAtHiWAFQ7A0PWxtP91YcfPQ7fccM+6cyb7ZYbH/5Tqt/6R7nv7D+NBU//q8958l93wav/Fktf/hN1K1khbJNiANUKdM6cPWtaT758BmKHnHndbLr2/k8J55S3AmoO94TNwm8olG35pTnj2X+d6c//Wyz5+F8ldd4nEeuUDGHLOGEG9dgWMb+J23aDNHvvebje8djX/8oN234KW8W/AYmBgERg8xLd5v3/dae9+G8y+91/k85zf4SMo/YKGwbbMyiG1yuAFDmuuFLmdOTLf901b/6rzQc6edq9/xpTH/zXmnT/j2bvrfe6k5//N5z68r/lrA//HRe+/S+iH3JLxCgqFmyDclKTm+2eL/90V7/9rzb36X/t+gsEsYiOz10xm4wOBunAbC6jeTf2mW758l9rwYv/qlMf/ZdNXfyXX8XpvaCe/3VBvcDzopapNyU9G55L+TS+kgvpeK0T3fpMxCz2qLhTfiODafPeOJut3/4br/n8Xw8YylrTnv7X6Lr1X8K98iXYeUCgkr012bDtyn/rFV/+5178879g/eXnYrbxh8Sdst0YrOfcPK8z4+5f1cqdP82WffpvOPv1fz2gf/UnPP+vmrPpn1rBjl8GU5/9d9z45X/2ld//J9/48k/ZMeGpqFX0ZnHHFCsGo+Uv78knzrouYBD2UK146x+zGcComv3hv9n09//NZr3/b7P80//Avd//l1359b/z1Kt/+iEFnwTVHK7J+OUkSTkkSDHoLHn9QDasq0DENk1bxC57spRXw1vDmkN/rKfc+++24tX/4C0f/idvuv/Pp2X5T1mrsLdCms7X5QIymiTtI+SlfNO4GHwW3bkpEzd1DtS7DNqlmw4ohPVeELNMfixiEvFC1Dj0ubCW+0NBTZdrUk7R24Ga46QcIuUUvBJ4VDw9WRhU0hb62k2+dNdx6qXPjv1nLihnLC2QDmxTFrPPcRWzzcgUtU/PFHNKT5B0SbIWtwxRlHSJFQXFnHZoAzMDAwMjAE+jz+ViAp3xAAAAAElFTkSuQmCC`,Un=`data:image/png;base64,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`,Wn=`data:image/png;base64,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`,Gn=`data:image/png;base64,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`,Kn=`data:image/png;base64,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`,qn=`data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAABmJLR0QA/wD/AP+gvaeTAAAEpElEQVRYw+2XXYhVVRTHf/ucM9866uio0yiTzFRSZpDRx0OCREFhHyhaEknYQ2EPQkUkEvMiSQ/2EJoZREWhgQhGJESlPvSB2JSYjTKojaPOOHe848z1zr3nnr33Wj1ca2ZMmJnmRi+up/Owzjr/81///9prw434n8OMJ2nT7pNvL2yqe24wDy0zlWlVUfFlA6rDtYxBy0JTBipHzl7pOdvZ9fCWdUv7JoXwzQ8P3PXJj2lt63b6VXtWLwwkakXUeq9xqkdjl2jivVoRTeK8JoVYC85q35W8bvyo7YOx6gdjJYjXmurKsr//VkTxTnCpbnTNIqTrNCKK9RbZsw239XUkcUShwRudMmkA16Z7MYh4+Pgtostp4ldW4sVAz0XCdzcR7d2BpFN4Nah3Y7Y4mpBgArAoloDk6Q3U7t+F2X4AC/j6Ruzm3djaaZTVN6JO8eOoGY3dAm+GFRvgRXEEhHNbyHzaTlA3C7SoSPvgE2AMTg3WK4gw6RaYqtkrey9nOd41wMV0BtEQ5wOsBkj9HJyA8+C94DXAS4iTAAkDZs2Y0bRk589l/8qGra2tQaF5xebFt83f2NJYg6rSezHN7c1zqAiDUciDjsOUt/9K/skXMcaAAcEzMOTY+/35nlTq/K3vvbwsOyEGbPPKL2bMqXvDh0ImZzl6fIDXtnxDwXkSVWJVYoRBFWZuWkHt1vVw9ABOFIeScxAaeOSeuQ2N02funJAGWj/bX5t2lcuJE0h7vj7UyZenlJrKOtR6XBAWuTPAQCcunSYXTCU1FHC87RwdXf08++giPj94oi+bGVgzqzw6NiEA7eXZofmZ7vVXclFFKn3uiX1nGpZl65uoGuwl7wIOtZ3hYBek88KFfkvqgR9wQQXu2wq0ooKaS5al9+aQqOaXd166+7sJu2DP6tUe2AGw/IVtv7lwwTKsoAreGDo6L7F3cDGgUAVUm6ITrna1Mgxwqpgg8pOfA2XqiR14ixFInKIEULCM+OpoXTuHFUMxsRSDSB1YAVUcxUdsAbiezxVVjxcIjJGSADBWICkQSEwsgopAnL++iQ0Y63GiWNESMWATCGJCDbFOsKIQZ4ddbEZ0wziMtSTeYARfGgCJAAWceLwLi4dCLgeE1w5uwIO1JAJqfGkYEJeARkUAanCqMDQ0ogUjKfB4W8ALCKGWhgEn4BMIwKqiohDHI+aoDgNRh3qLiKJKaY5j4xw4xVRYrAcRcx0RXmVBPRiLE4OqlmgfsFdtGArurzkwioFR5zdhmWA1IJCxV85xMmChEKFViteguIjaGEz4jxmAeggFj6KhGVMD41vJrEISY1CsCgua51FbrVBIIImLYGwMSczUipBVz9zP1NoaMGbyLqiMwKgD5xGJUA25+Za5bHh1OUcOd9DT3U8UhlRVlXPHnU20tDQwZVo1+bzFJwU3aQANRn9asjDZ13YifMqoQ1RwPqThpjoee/w+4oLDxjlsfogkN+AunTv9R8+p3MnA5U+Wa7KrJBeT1tbWqL237v1jF2rWrX7+IW8T21/IZtKaS/VVaeb3wMZHakzm8LzZ08+uXbt26D+8SK0Kt29vncKNKGH8CVWGqQariNvGAAAAJXRFWHRkYXRlOmNyZWF0ZQAyMDE5LTA0LTAxVDEzOjU1OjU1KzAwOjAwPnFKAQAAACV0RVh0ZGF0ZTptb2RpZnkAMjAxOS0wNC0wMVQxMzo1NTo1NSswMDowME8s8r0AAAAASUVORK5CYII=`,Jn=`/assets/narrator-CkHsFh3u.ico`,Yn=`data:image/png;base64,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`,Xn=`data:image/x-icon;base64,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`,Zn=`data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAAFiUAABYlAUlSJPAAAALnSURBVDhPjY8LLNVxFMeP3ZvrTjWReYV7FUrZPEZCWaRVXhW3mjTmWV2PipK8RzZKKI0bLbpNniMmy+OixzwqZmkRm8dadWVJ6WXWt7/5b6VZ9dnOdnbO+Zzz+9HSWG4WR1x5HBqfDe8jqT1MwXih/g8uZVW6aeseSjgZVY7q2id42v0aKanNcD+c911puenR+T47uhiuks0mjXXeGfNiTcwtjIpikX6+DvXZlRhQNUN52h2EJ3XBxDqtja+yO5BojS6rLuAblDPZl92AD1kSIDIEn0/EoyZWCtm5bMzQMgyROpqcxahIL0FaTi8MTET3hRs8rFmd6HRcyaeBwGR8PR6N7wFRmHX0w0dLEeSq5nhL2nihoI4O4qKdr4aCvEZY2EcM6Qi3O7I6UUCEVD544AzmDF0wt94d/bJW9AnM8EFBC/Vu7pgoLEQLrULDSm1kZlTAyNz/ucDYNZjViXbuL3z4TBQOkAFmOYZ41dmJsf5+1Hn7YHxiAu9kMtyl5agVmCMhpRSaApcOA5N9vqxOpGFwrLjPKxRyWo1xrh4GOIqYGB3FPN+YRb0KPFQzX6gwtUdEYhmIKyxau9FrD6sTOTiK0zpOZ2KQlNDH0UKZ6CDeT09jprsbky8H0RQWhioi3AlJxsHgfNjYOhcyC2xZnShIfNXTT1wx1WXjinZSxcjICOQSCVp11mAsKQlvmpshXaUNaXE7bJ0ivzg67ctiFghZfQE1Ha/c+VdUM5eqmCVlTEhJBQW0AheYmiwmAxl5LeDydKr27g/wYbXf4QpPxTX+qPHwhoQRJKSMy8RHCpPftLJDe+cQXD0ToadvHOLrH2XJSovhKVvGNbTJIQ2MRjwjnmXi2hY7DL8cwcVcGYj4RVu3uS91/Rf6Rm71j3qmcS89F+Un4vDq7RTyb3SBxxf0WlnvOMaO/RWeuoZVad51GRrbhuHjlwwFjuYDcwuHU2z/f1EScRQ1bzNJ1BbbXQELtT8h+gm9undzpD1ygQAAAABJRU5ErkJggg==`;function Qn({startAfter:e=3e3,duration:t=15e3}){let[n,r]=(0,L.useState)(!0),[i,a]=(0,L.useState)(!1);function o(){let e=new Audio(F(`/sounds/Windows%20XP%20Balloon.mp3`));e.volume=.8,e.play().catch(()=>{})}return(0,L.useEffect)(()=>{let n=setTimeout(()=>{a(!0),o()},e),i=setTimeout(()=>r(!1),e+t),s=setTimeout(()=>a(!1),e+t+1e3);return()=>{clearTimeout(n),clearTimeout(i),clearTimeout(s)}},[e,t]),i&&(0,R.jsx)(tr,{show:n,children:(0,R.jsxs)(`div`,{className:`balloon__container`,children:[(0,R.jsx)(`button`,{onClick:()=>r(!1),className:`balloon__close`}),(0,R.jsxs)(`div`,{className:`balloon__header`,children:[(0,R.jsx)(`img`,{className:`balloon__header__img`,src:`data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAAFiUAABYlAUlSJPAAAALnSURBVDhPjY8LLNVxFMeP3ZvrTjWReYV7FUrZPEZCWaRVXhW3mjTmWV2PipK8RzZKKI0bLbpNniMmy+OixzwqZmkRm8dadWVJ6WXWt7/5b6VZ9dnOdnbO+Zzz+9HSWG4WR1x5HBqfDe8jqT1MwXih/g8uZVW6aeseSjgZVY7q2id42v0aKanNcD+c911puenR+T47uhiuks0mjXXeGfNiTcwtjIpikX6+DvXZlRhQNUN52h2EJ3XBxDqtja+yO5BojS6rLuAblDPZl92AD1kSIDIEn0/EoyZWCtm5bMzQMgyROpqcxahIL0FaTi8MTET3hRs8rFmd6HRcyaeBwGR8PR6N7wFRmHX0w0dLEeSq5nhL2nihoI4O4qKdr4aCvEZY2EcM6Qi3O7I6UUCEVD544AzmDF0wt94d/bJW9AnM8EFBC/Vu7pgoLEQLrULDSm1kZlTAyNz/ucDYNZjViXbuL3z4TBQOkAFmOYZ41dmJsf5+1Hn7YHxiAu9kMtyl5agVmCMhpRSaApcOA5N9vqxOpGFwrLjPKxRyWo1xrh4GOIqYGB3FPN+YRb0KPFQzX6gwtUdEYhmIKyxau9FrD6sTOTiK0zpOZ2KQlNDH0UKZ6CDeT09jprsbky8H0RQWhioi3AlJxsHgfNjYOhcyC2xZnShIfNXTT1wx1WXjinZSxcjICOQSCVp11mAsKQlvmpshXaUNaXE7bJ0ivzg67ctiFghZfQE1Ha/c+VdUM5eqmCVlTEhJBQW0AheYmiwmAxl5LeDydKr27g/wYbXf4QpPxTX+qPHwhoQRJKSMy8RHCpPftLJDe+cQXD0ToadvHOLrH2XJSovhKVvGNbTJIQ2MRjwjnmXi2hY7DL8cwcVcGYj4RVu3uS91/Rf6Rm71j3qmcS89F+Un4vDq7RTyb3SBxxf0WlnvOMaO/RWeuoZVad51GRrbhuHjlwwFjuYDcwuHU2z/f1EScRQ1bzNJ1BbbXQELtT8h+gm9undzpD1ygQAAAABJRU5ErkJggg==`,alt:`risk`}),(0,R.jsx)(`span`,{className:`balloon__header__text`,children:`Your computer might be at risk`})]}),(0,R.jsx)(`p`,{className:`balloon__text__first`,children:`Antivirus software might not be installed`}),(0,R.jsx)(`p`,{className:`balloon__text__second`,children:`Click this balloon to fix this problem.`})]})})}var $n=i`
  0% { 
    display: block;
    opacity: 0;
  }
  100% {
    display: block;
    opacity: 1;
  }
`,er=i`
  0% { 
    display: block;
    opacity: 1;
  }
  99% {
    display: block;
    opacity: 0;
  }
  100% {
    display: none;
    opacity: 0;
  }
`,tr=a.div`
  position: absolute;
  display: block;
  opacity: 0;
  animation: ${({show:e})=>e?$n:er} 1s forwards;
  filter: drop-shadow(2px 2px 1px rgba(0, 0, 0, 0.4));
  .balloon__container {
    position: absolute;
    right: -4px;
    bottom: 19px;
    border: 1px solid black;
    border-radius: 7px;
    padding: 6px 28px 10px 10px;
    background-color: #ffffe1;
    font-size: 11px;
    white-space: nowrap;
    &:before {
      content: '';
      position: absolute;
      display: block;
      bottom: -19px;
      right: 14px;
      width: 0;
      height: 0;
      border-style: solid;
      border-width: 0 19px 19px 0;
      border-color: transparent black transparent transparent;
    }
    &:after {
      content: '';
      position: absolute;
      display: block;
      bottom: -17px;
      right: 15px;
      width: 0;
      height: 0;
      border-style: solid;
      border-width: 0 18px 18px 0;
      border-color: transparent #ffffe1 transparent transparent;
    }
  }
  .balloon__close:hover {
    background-color: #ffa90c;
    border-color: white;
    box-shadow: 1px 1px rgba(0, 0, 0, 0.1);
    &:before,
    &:after {
      background-color: white;
    }
  }
  .balloon__close {
    outline: none;
    position: absolute;
    right: 4px;
    top: 4px;
    width: 14px;
    height: 14px;
    border: 1px solid rgba(0, 0, 0, 0.1);
    border-radius: 3px;
    background-color: transparent;
    &:before {
      content: '';
      position: absolute;
      left: 5px;
      top: 2px;
      transform: rotate(45deg);
      height: 8px;
      width: 2px;
      background-color: rgba(170, 170, 170);
    }
    &:after {
      content: '';
      position: absolute;
      left: 5px;
      top: 2px;
      transform: rotate(-45deg);
      height: 8px;
      width: 2px;
      background-color: rgba(170, 170, 170);
    }
  }
  .balloon__header {
    display: flex;
    align-items: center;
    font-weight: 700;
  }
  .balloon__header__img {
    width: 14px;
    height: 14px;
    margin-right: 8px;
  }
  .balloon__text__first {
    margin: 5px 0 10px;
  }
`,nr=`/assets/start-ElBR6pVC.png`,rr=`data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAAFiUAABYlAUlSJPAAAAJ7SURBVDhPfZNvSFNhFMbfcOqm1lrbNIkQrIa6FWZ3VCNIJJgydiv/oClR6lbSpG30IUp0LTZBPwwUL05XVJrSmlRoE8aIjFWypA8FfqoIidWXIIIIwg9P517Q/JcP/Ni5Z8/hnPfe97Bl2dgIM7MDFGURW6RcCytjPNNSJFvO/U96QQt5k+wOhQbWyKrk12QJRV86WBMLUq6AyBR9G6uVVVindCgb3Pk735nzSj+SC/3jXOSPb4W8I/0HOWqJXMm7oVpY98W3h3H+dSnqEiWofLYXxqe7UPxIC1W/AqyY3SWXgUiT/GtV6NNMdyxUov39UdjmylD9ogjHJwug9mQtsmPsA1n8BEdkiP51Kh8r/nnz20lc/2yGfc6IQ0L+YkZF2kf6a4zoJqTxVSrVQfrJJla/0Jz2zHhd3AjvVx5XP53A9npFitIhYvncNtsAHI4b7ygUJ1FIyTVq2tGW/eVUtBSnn3CgZ6nYar0AlyuAYHASnZ0R1NScuU/pfYT4addreGoY+z06XA44UVt7DhZLK6qr3RgYeIiurgeIRJ7/KSrSXyKr2GD93Zifn0dPTw84zkhdb8FsbgTPt0EQIpidfYOJiQk0N7ckyHqEWH0Unud/xWIxxONx6mxBQ8NZ9Pb2Y2YmIeXC4TDsdntKo9HcI3sloZQKl6TT6QZdLheSySSGhoYQCoWkwmg0CqfTmdJqtdNk6yNshHgvVk0gc7vd9SaTacHn82F0dJxGnoXf70/l5eUtFYpnLyfEq/1vZ1Yom+O4215vLwIB4bvBYHhJOYFwEJsWLilNrVaXKJVKsZOHuEJUEYXEpoUrJW7dbkJc7T3ENmLjHWCM/QWIROiXfEWyEQAAAABJRU5ErkJggg==`;function ir(e,t){let{defaultOffset:n,defaultSize:r,boundary:i,resizable:a=!0,resizeThreshold:o=10,constraintSize:s=200}=t,[c,l]=(0,L.useState)(n),[u,d]=(0,L.useState)(r),f=cr(e,o,a);return(0,L.useEffect)(()=>{let n=e.current;if(!n)return;let r=t.dragRef&&t.dragRef.current,o=document.createElement(`div`);o.style.position=`fixed`,o.style.top=0,o.style.left=0,o.style.right=0,o.style.bottom=0;let p={...c},m={...u},h,g,_,v=!1;function y(e){v&&!document.body.contains(o)&&document.body.appendChild(o);let{pageX:t,pageY:n}=$(e,h);l({x:t-g+p.x,y:n-_+p.y})}function b(e){o.remove(),v=!1;let{pageX:t,pageY:n}=$(e,h);p.x+=t-g,p.y+=n-_,window.removeEventListener(`mousemove`,y),window.removeEventListener(`mouseup`,b)}function ee(e){window.addEventListener(`mousemove`,y),window.addEventListener(`mouseup`,b)}function x(e){let{pageY:t}=$(e,h),{x:n}=p;l({x:n,y:t-_+p.y})}function S(e){let{pageY:t}=$(e,h);p.y+=t-_,window.removeEventListener(`mousemove`,x),window.removeEventListener(`mouseup`,S)}function C(e){window.addEventListener(`mousemove`,x),window.addEventListener(`mouseup`,S)}function w(e){let{pageX:t}=$(e,h),n=t-g+p.x,{y:r}=p;l({x:n,y:r})}function T(e){let{pageX:t}=$(e,h);p.x+=t-g,window.removeEventListener(`mousemove`,w),window.removeEventListener(`mouseup`,T)}function E(e){window.addEventListener(`mousemove`,w),window.addEventListener(`mouseup`,T)}function D(e){let{pageX:t}=$(e,h),n=t-g+m.width,{height:r}=m;d({width:n,height:r})}function O(e){let{pageX:t}=$(e,h);m.width+=t-g,window.removeEventListener(`mousemove`,D),window.removeEventListener(`mouseup`,O)}function k(e){window.addEventListener(`mousemove`,D),window.addEventListener(`mouseup`,O)}function te(e){let{pageY:t}=$(e,h),{width:n}=m;d({width:n,height:t-_+m.height})}function A(e){let{pageY:t}=$(e,h);m.height+=t-_,window.removeEventListener(`mousemove`,te),window.removeEventListener(`mouseup`,A)}function j(e){window.addEventListener(`mousemove`,te),window.addEventListener(`mouseup`,A)}function M(e){let{pageX:t}=$(e,h),n=-t+g+m.width,{height:r}=m;d({width:n,height:r})}function ne(e){let{pageX:t}=$(e,h);m.width+=-t+g,window.removeEventListener(`mousemove`,M),window.removeEventListener(`mouseup`,ne)}function re(e){window.addEventListener(`mousemove`,M),window.addEventListener(`mouseup`,ne)}function N(e){let{pageY:t}=$(e,h),n=-t+_+m.height,{width:r}=m;d({width:r,height:n})}function P(e){let{pageY:t}=$(e,h);m.height+=-t+_,window.removeEventListener(`mousemove`,N),window.removeEventListener(`mouseup`,P)}function ie(e){window.addEventListener(`mousemove`,N),window.addEventListener(`mouseup`,P)}function F(e){let{pageX:t,pageY:n}=$(e,h);d({width:-t+g+m.width,height:-n+_+m.height})}function ae(e){let{pageX:t,pageY:n}=$(e,h);m.width+=-t+g,m.height+=-n+_,window.removeEventListener(`mousemove`,F),window.removeEventListener(`mouseup`,ae)}function I(e){window.addEventListener(`mousemove`,F),window.addEventListener(`mouseup`,ae)}function L(e){let{pageX:t,pageY:n}=$(e,h);d({width:t-g+m.width,height:-n+_+m.height})}function R(e){let{pageX:t,pageY:n}=$(e,h);m.width+=t-g,m.height+=-n+_,window.removeEventListener(`mousemove`,L),window.removeEventListener(`mouseup`,R)}function oe(e){window.addEventListener(`mousemove`,L),window.addEventListener(`mouseup`,R)}function z(e){let{pageX:t,pageY:n}=$(e,h);d({width:-t+g+m.width,height:n-_+m.height})}function se(e){let{pageX:t,pageY:n}=$(e,h);m.width+=-t+g,m.height+=n-_,window.removeEventListener(`mousemove`,z),window.removeEventListener(`mouseup`,se)}function ce(e){window.addEventListener(`mousemove`,z),window.addEventListener(`mouseup`,se)}function le(e){let{pageX:t,pageY:n}=$(e,h);d({width:t-g+m.width,height:n-_+m.height})}function ue(e){let{pageX:t,pageY:n}=$(e,h);m.width+=t-g,m.height+=n-_,window.removeEventListener(`mousemove`,le),window.removeEventListener(`mouseup`,ue)}function de(e){window.addEventListener(`mousemove`,le),window.addEventListener(`mouseup`,ue)}function fe(e){if(g=e.pageX,_=e.pageY,h={...i},r&&e.target===r)return v=!0,ee(e);if(!(e.target!==n||!a))switch(f){case`topLeft`:h.right=g+m.width-s,h.bottom=_+m.height-s,I(e),ee(e);break;case`left`:h.right=g+m.width-s,re(e),E(e);break;case`bottomLeft`:h.right=g+m.width-s,h.top=_-m.height+s,ce(e),E(e);break;case`top`:h.bottom=_+m.height-s,ie(e),C(e);break;case`topRight`:h.bottom=_+m.height-s,h.left=g-m.width+s,C(e),oe(e);break;case`right`:h.left=g-m.width+s,k(e);break;case`bottomRight`:h.top=_-m.height+s,h.left=g-m.width+s,de(e);break;case`bottom`:h.top=_-m.height+s,j(e);break;default:}}return n.addEventListener(`mousedown`,fe),()=>{n.removeEventListener(`mousedown`,fe),window.removeEventListener(`mousemove`,w),window.removeEventListener(`mousemove`,x),window.removeEventListener(`mousemove`,y),window.removeEventListener(`mouseup`,S),window.removeEventListener(`mouseup`,T),window.removeEventListener(`mouseup`,b),window.removeEventListener(`mousemove`,N),window.removeEventListener(`mousemove`,D),window.removeEventListener(`mousemove`,te),window.removeEventListener(`mousemove`,M),window.removeEventListener(`mousemove`,z),window.removeEventListener(`mousemove`,F),window.removeEventListener(`mousemove`,L),window.removeEventListener(`mousemove`,le),window.removeEventListener(`mouseup`,P),window.removeEventListener(`mouseup`,O),window.removeEventListener(`mouseup`,A),window.removeEventListener(`mouseup`,ne),window.removeEventListener(`mouseup`,se),window.removeEventListener(`mouseup`,ae),window.removeEventListener(`mouseup`,R),window.removeEventListener(`mouseup`,ue),o.remove()}},[i.top,i.right,i.bottom,i.left,f]),(0,L.useEffect)(()=>{let t=e.current;if(!t||!c||!i)return;let n=or(c,ar(t,u),i);(n.x!==c.x||n.y!==c.y)&&l(n)},[i.top,i.right,i.bottom,i.left,u?.width,u?.height]),{offset:c,size:u}}function ar(e,t){let n=e?.getBoundingClientRect?.();return{width:Math.max(t?.width??0,n?.width??0),height:Math.max(t?.height??0,n?.height??0)}}function or(e,t,n){if(!e||!n)return e;let r=Math.min(64,Math.max(24,t?.width??0)),i=Math.min(30,Math.max(24,t?.height??0)),a=n.left-Math.max(0,(t?.width??0)-r),o=n.right-r,s=n.top,c=n.bottom-i;return{x:sr(e.x,a,Math.max(a,o)),y:sr(e.y,s,Math.max(s,c))}}function sr(e,t,n){return Math.min(Math.max(e,t),n)}function cr(e,t,n){let[r,i]=(0,L.useState)(``);return(0,L.useEffect)(()=>{let r=e.current;if(!r||!n)return;let a=document.createElement(`div`);a.style.position=`fixed`,a.style.top=0,a.style.left=0,a.style.right=0,a.style.bottom=0;let o=!1;function s(e){i(e),r.style.cursor=lr(e),a.style.cursor=lr(e)}function c(e){e.target===r&&(d(e),o=!0,document.body.appendChild(a),window.addEventListener(`mouseup`,l))}function l(e){o=!1,a.remove(),window.removeEventListener(`mouseup`,l)}function u(e){o||s(``)}function d(e){if(o)return;if(e.target!==r)return s(``);let{offsetX:n,offsetY:i}=e,{width:a,height:c}=r.getBoundingClientRect();n<t?i<t?s(`topLeft`):c-i<t?s(`bottomLeft`):s(`left`):i<t?a-n<t?s(`topRight`):s(`top`):a-n<t?c-i<t?s(`bottomRight`):s(`right`):c-i<t?s(`bottom`):s(``)}return r.addEventListener(`mouseleave`,u),r.addEventListener(`mousemove`,d),r.addEventListener(`mousedown`,c),()=>{a.remove(),r.removeEventListener(`mouseleave`,u),r.removeEventListener(`mousemove`,d),r.removeEventListener(`mousedown`,c),window.removeEventListener(`mouseup`,l)}},[]),r}function $(e,t){let{pageX:n,pageY:r}=e;if(!t)return{pageX:n,pageY:r};let{top:i,right:a,bottom:o,left:s}=t;return n<=s?n=s:n>=a&&(n=a),r<=i?r=i:r>=o&&(r=o),{pageX:n,pageY:r}}function lr(e){switch(e){case`top`:return`n-resize`;case`topRight`:return`ne-resize`;case`right`:return`e-resize`;case`bottomRight`:return`se-resize`;case`bottom`:return`s-resize`;case`bottomLeft`:return`sw-resize`;case`left`:return`w-resize`;case`topLeft`:return`nw-resize`;default:return`auto`}}function ur(){return typeof window>`u`?{width:0,height:0}:{width:window.innerWidth,height:window.innerHeight}}function dr(){let[e,t]=(0,L.useState)(ur);return(0,L.useEffect)(()=>{function e(){t(ur())}return window.addEventListener(`resize`,e),()=>{window.removeEventListener(`resize`,e)}},[]),e}var fr=`data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAAFiUAABYlAUlSJPAAAAJoSURBVDhPzdJbSFNxHAfwf4Wma2Vm9ZIpRiNpFSlSE51K0O1hmEZYZkOFEEJ6MBXyUl5QBhrYnGaFTVNcVppRapmmCV5QiRTNtIVlWnNGQyt9Sb99j7OnXnqKfvB5+F++3wPnHPFPZn5+3mt82pb4YtCcwuV6clg6+JsZsXzVN3y7B01vMMKbonA+PTuR2+60aulCQsWkr6lpoP1xWWVnbYGxW683lV648fQ4j+S1I+b2pMmzOPNjDwIGPbCxdg1ya0pHeXaQ1kp5oYx6ktP6wAjECiCIQgUsOjWMDW3mE88yoep3R+TsbhyzeEPVrYBhwAQfVUAWo9tohRDeF9VplWYgyR6GmlhmvhOPuEf1UDx3Q9gHH7RYQ4GOvfhZ5oLi6rrXDIeQjIRMc6nvc19FBj6lhGAiOhgz0R6Yu+yJK2027Kzbh4kBDTDG4k66KzDWWQQf/8B0Zj2lgpU7wiuL0toBkU+pgFP6IsIMLSjtGUZ9VQ5Qz+AQvaFGAVvrOWTpr3cxq5YK2KP1S67+Atk1FmRTEhUAhzoWoKvqBSrsT5+1pGLm+zTKm98jOKZkiskoe4EQzmGZfW/97wNuBkCRtwhX3QLkJqCoy4aPJUq8e1WM2y1mhMQWWh23a0fEOmUNc1p7nG9TEXorN944hRjDODQZ/YjMH8LJKisKB+eQaRpFTFqZVThvaeTdQkqmU+RLy+MV6ytXXe0RWyM6hKtfs3BwKRcb9j88Eqd7GajNG+aNm5RAB0hBm2npK/weJ9pFEXSaDlMQHV1eh5OSpBC//58jbUqHUvMmktNqkv44ae1GjvRfjRC/AKLbNP163NbRAAAAAElFTkSuQmCC`,pr=`data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAcAAAAHCAYAAADEUlfTAAAAI0lEQVR42mNgwA3+45P4j03Ff3TJ/9gk0AX+Y7MLpwRO1wEA1lcU7C7/FKUAAAAASUVORK5CYII=`,mr=`data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAAFiUAABYlAUlSJPAAAAFzSURBVDhPrZJPKERRFMbvm5dkUkpJIRpEJInNZGtta2s3kkhqSkRDJpE/0ZCRNCVFSmpMpBGpSTI7lhZWs7GwUew+9zs3jd5Mz0w59fV6753zu+d856r/DsuhwiMd7cHjTjcetrtwH+mE/uTT8srPv4LFzrhbbyPEr0WIs7Nsd9niqEPA9XIzrhZ9uFioR2K+DvFQDc5mqn+6KxMA28bnBvCxlqs8cTpdBdu2g7q0UctSnBlvYSATQmqzI69uV1uRXGrCZbgB53O10gmlAT5Fw/A6JYkFhT6IcTDuNZ1I4fMYjBdOH3L1lRqUZ2y0lICIottIB2SFkkQ/XPSeHJC8/ZESArYU5yPAjKAB9MNFmXi/5O0N2wbAVRFws9JiANoPN70c90ne7pBlANwzAXRYANoPNz3FeiUvGlDGA67i9yXhnk8mK3EUrMDhRLm4TcM4M9vmySz2eDwJDZglgFfVzxe2VIRYzKsuQQivZ3sR0vnK+w1PJ+slDj8IHAAAAABJRU5ErkJggg==`;function hr({items:e,position:t={},onClick:n}){let[r,i]=(0,L.useState)(``);return(0,R.jsx)(_r,{...t,children:(0,R.jsx)(`div`,{className:`drop-down__menu`,children:e.map((e,t)=>{switch(e.type){case`item`:return(0,R.jsxs)(`div`,{className:`drop-down__row${e.disable?`--disable`:``}`,onMouseEnter:()=>i(e.text),onClick:()=>n(e.text),children:[(0,R.jsx)(`div`,{className:`drop-down__check`,children:(0,R.jsx)(gr,{type:e.symbol})}),(0,R.jsx)(`div`,{className:`drop-down__text`,children:e.text}),(0,R.jsx)(`span`,{className:`drop-down__hot-key`,children:e.hotkey||``}),(0,R.jsx)(`div`,{className:`drop-down__arrow--disable`})]},e.text);case`menu`:return(0,R.jsxs)(`div`,{className:`drop-down__row${r===e.text?`--active`:``}`,onMouseEnter:()=>i(e.text),children:[(0,R.jsx)(`div`,{className:`drop-down__check`,children:(0,R.jsx)(gr,{type:e.symbol})}),(0,R.jsx)(`div`,{className:`drop-down__text`,children:e.text}),(0,R.jsx)(`span`,{className:`drop-down__hot-key`,children:e.hotkey||``}),(0,R.jsx)(`div`,{className:`drop-down__arrow`}),(0,R.jsx)(`div`,{style:{position:`relative`},children:r===e.text&&(0,R.jsx)(hr,{position:e.position,items:e.items,onClick:n})})]},e.text);case`separator`:return(0,R.jsx)(`div`,{className:`drop-down__separator`},t);default:return null}})})})}function gr({type:e}){switch(e){case`ie-paper`:return(0,R.jsx)(`img`,{className:`drop-down__icon`,src:X,alt:``});case`ie-book`:return(0,R.jsx)(`img`,{className:`drop-down__icon`,src:fr,alt:``});case`folder`:return(0,R.jsx)(`img`,{className:`drop-down__icon`,src:mr,alt:``});case`check`:return(0,R.jsx)(`img`,{src:pr,alt:``});case`circle`:return(0,R.jsx)(`div`,{style:{width:`6px`,height:`6px`,borderRadius:`50%`,backgroundColor:`#000`}});default:return null}}var _r=a.div`
  left: ${({left:e})=>e||`initial`};
  top: ${({top:e})=>e||`initial`};
  right: ${({right:e})=>e||`initial`};
  bottom: ${({bottom:e})=>e||`initial`};
  position: absolute;
  display: flex;
  font-size: 11px;
  border-bottom: 1px solid transparent;
  .drop-down__row {
    position: relative;
    display: contents;
    &:hover > *:not(:nth-child(5)) {
      background: #e99f17;
      filter: invert(100%);
    }
    &:hover > .drop-down__check > .drop-down__icon {
      filter: invert(100%);
    }
  }
  .drop-down__row--active {
    position: relative;
    display: contents;
    & > .drop-down__check > .drop-down__icon {
      filter: invert(100%);
    }
    & > *:not(:nth-child(5)) {
      background: #e99f17;
      filter: invert(100%);
    }
  }
  .drop-down__row--disable {
    display: contents;
    color: #8c8c8cb5;
    &:hover > * {
      background: #e99f17;
      filter: invert(100%);
    }
  }
  .drop-down__title {
    padding: 0 7px;
    height: 100%;
    line-height: 20px;
    color: white;
    background-color: #1660e8;
  }
  .drop-down__menu {
    background-color: #fff;
    z-index: 1;
    padding: 2px;
    line-height: 18px;
    display: grid;
    background-color: #fff;
    position: absolute;
    box-shadow: 2px 2px 1px rgb(100, 100, 100);
    border: 1px solid gray;
    grid-template-columns: 16px auto auto 15px 0px;
  }
  .drop-down__separator {
    grid-column: 1 / 5;
    height: 7px;
    padding: 3px 1px;
    background-color: rgba(0, 0, 0, 0.2);
    background-clip: content-box;
  }
  .drop-down__check {
    grid-column: 1;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .drop-down__icon {
    max-width: 13px;
    max-height: 13px;
    transform: translateX(-2px);
  }
  .drop-down__text {
    white-space: nowrap;
    padding-right: 8px;
    grid-column: 2;
  }
  .drop-down__hot-key {
    white-space: nowrap;
    grid-column: 3;
    padding-right: 2px;
  }
  .drop-down__arrow {
    position: relative;
    grid-column: 4;
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    &:before {
      width: 0;
      height: 0;
      border-style: solid;
      border-width: 3px 0 3px 3px;
      border-color: transparent transparent transparent #000;
      content: '';
      display: block;
    }
  }
  .drop-down__arrow--disable {
    grid-column: 4;
    width: 100%;
    height: 100%;
  }
`;function vr({items:e,onClickItem:t,className:n,height:r=20}){let i=(0,L.useRef)(null),[a,o]=(0,L.useState)(``);function s(e){a&&o(e)}function c(e){o(``),t(e)}function l(e){i.current.contains(e.target)||o(``)}return(0,L.useEffect)(()=>(window.addEventListener(`mouseup`,l),()=>{window.removeEventListener(`mouseup`,l)}),[]),(0,R.jsx)(`div`,{className:n,ref:i,children:Object.keys(e).map(t=>(0,R.jsxs)(`div`,{className:`drop-down`,children:[(0,R.jsx)(`div`,{onMouseDown:()=>{o(t)},onMouseEnter:()=>s(t),className:`drop-down__label ${a===t?`drop-down__label--active`:``}`,children:t},t),a===t&&(0,R.jsx)(hr,{onClick:c,items:e[t],position:{top:`${r}px`,left:`0`}})]},t))})}var yr=a(vr)`
  display: inline-flex;
  height: ${({height:e})=>e||20}px;
  line-height: ${({height:e})=>e||20}px;
  position: relative;
  .drop-down {
    font-size: 11px;
    height: 100%;
    position: relative;
  }
  .drop-down__label--active {
    background-color: #1660e8;
    color: #fff;
  }
  .drop-down__label {
    padding: 0 7px;
    &:hover {
      background-color: #1660e8;
      color: #fff;
    }
  }
`,br=`data:image/svg+xml,%3csvg%20focusable='false'%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%2024%2024'%3e%3cpath%20fill='%234285f4'%20d='M15.5%2014h-.79l-.28-.27A6.471%206.471%200%200%200%2016%209.5%206.5%206.5%200%201%200%209.5%2016c1.61%200%203.09-.59%204.23-1.57l.27.28v.79l5%204.99L20.49%2019l-4.99-5zm-6%200C7.01%2014%205%2011.99%205%209.5S7.01%205%209.5%205%2014%207.01%2014%209.5%2011.99%2014%209.5%2014z'%3e%3c/path%3e%3c/svg%3e`,xr=`data:image/svg+xml,%3c?xml%20version='1.0'%20encoding='iso-8859-1'?%3e%3c!--%20Generator:%20Adobe%20Illustrator%2016.0.0,%20SVG%20Export%20Plug-In%20.%20SVG%20Version:%206.00%20Build%200)%20--%3e%3c!DOCTYPE%20svg%20PUBLIC%20'-//W3C//DTD%20SVG%201.1//EN'%20'http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd'%3e%3csvg%20version='1.1'%20id='Capa_1'%20xmlns='http://www.w3.org/2000/svg'%20xmlns:xlink='http://www.w3.org/1999/xlink'%20x='0px'%20y='0px'%20width='106.059px'%20height='106.059px'%20viewBox='0%200%20106.059%20106.059'%20style='enable-background:new%200%200%20106.059%20106.059;'%20xml:space='preserve'%3e%3cg%3e%3cpath%20d='M90.546,15.518C69.858-5.172,36.199-5.172,15.515,15.513C-5.173,36.198-5.171,69.858,15.517,90.547%20c20.682,20.684,54.341,20.684,75.027-0.004C111.23,69.858,111.229,36.2,90.546,15.518z%20M84.757,84.758%20c-17.494,17.494-45.96,17.496-63.455,0.002c-17.498-17.497-17.496-45.966,0-63.46C38.796,3.807,67.261,3.805,84.759,21.302%20C102.253,38.796,102.251,67.265,84.757,84.758z%20M33.24,38.671c0-3.424,2.777-6.201,6.201-6.201c3.423,0,6.2,2.776,6.2,6.201%20c0,3.426-2.777,6.202-6.2,6.202C36.017,44.873,33.24,42.097,33.24,38.671z%20M61.357,38.671c0-3.424,2.779-6.201,6.203-6.201%20c3.423,0,6.2,2.776,6.2,6.201c0,3.426-2.776,6.202-6.2,6.202S61.357,42.097,61.357,38.671z%20M76.017,64.068%20c-3.843,8.887-12.843,14.629-22.927,14.629c-10.301,0-19.354-5.771-23.064-14.703c-0.636-1.529,0.089-3.285,1.62-3.921%20c0.376-0.155,0.766-0.229,1.15-0.229c1.176,0,2.292,0.695,2.771,1.85c2.777,6.686,9.655,11.004,17.523,11.004%20c7.69,0,14.528-4.321,17.42-11.011c0.658-1.521,2.424-2.222,3.944-1.563S76.675,62.548,76.017,64.068z'/%3e%3c/g%3e%3cg%3e%3c/g%3e%3cg%3e%3c/g%3e%3cg%3e%3c/g%3e%3cg%3e%3c/g%3e%3cg%3e%3c/g%3e%3cg%3e%3c/g%3e%3cg%3e%3c/g%3e%3cg%3e%3c/g%3e%3cg%3e%3c/g%3e%3cg%3e%3c/g%3e%3cg%3e%3c/g%3e%3cg%3e%3c/g%3e%3cg%3e%3c/g%3e%3cg%3e%3c/g%3e%3cg%3e%3c/g%3e%3c/svg%3e`;function Sr({className:e,goMain:t,onSearch:n,query:r}){let[i,a]=(0,L.useState)(r),[o,s]=(0,L.useState)(`All`);function c(e){a(e.target.value)}function l(){n(i)}function u(e){e.key===`Enter`&&n(i)}function d(){return`All,Maps,Images,News,Videos,More`.split(`,`).map(e=>(0,R.jsx)(`div`,{onClick:()=>s(e),className:`tag ${e===o?`active`:``}`,children:e},e))}return(0,R.jsxs)(`div`,{className:e,children:[(0,R.jsxs)(`section`,{className:`top-bars`,children:[(0,R.jsxs)(`div`,{className:`top-bar`,children:[(0,R.jsxs)(`div`,{className:`bar-items left`,children:[(0,R.jsx)(`img`,{onClick:t,className:`logo`,src:`https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_92x30dp.png`,alt:`Google`}),(0,R.jsxs)(`div`,{className:`search-bar`,children:[(0,R.jsx)(`input`,{id:`search`,type:`text`,name:`search`,value:i,onChange:c,onKeyDown:u}),(0,R.jsx)(`div`,{className:`icon`,children:(0,R.jsx)(`img`,{src:`https://www.gstatic.com/images/branding/googlemic/2x/googlemic_color_24dp.png`,alt:`microphone`})}),(0,R.jsx)(`div`,{className:`icon`,onClick:l,children:(0,R.jsx)(`img`,{src:br,alt:`find`})})]})]}),(0,R.jsx)(`div`,{className:`bar-items right`,children:(0,R.jsx)(`div`,{className:`functions`,children:(0,R.jsx)(`img`,{src:xr,alt:`smile`})})})]}),(0,R.jsxs)(`div`,{className:`app-bar`,children:[(0,R.jsx)(`div`,{className:`tags left`,children:d()}),(0,R.jsxs)(`div`,{className:`tags right`,children:[(0,R.jsx)(`div`,{className:`tag`,children:`Settings`}),(0,R.jsx)(`div`,{className:`tag`,children:`Tools`})]})]})]}),(0,R.jsxs)(`section`,{className:`content`,children:[(0,R.jsxs)(`p`,{children:[`Your search - `,(0,R.jsx)(`span`,{id:`search-in-content`,children:r}),` - did not match any documents.`]}),(0,R.jsx)(`p`,{children:`Suggestions`}),(0,R.jsxs)(`ul`,{children:[(0,R.jsx)(`li`,{children:`Make sure that all words are spelled correctly.`}),(0,R.jsx)(`li`,{children:`Try different keywords.`}),(0,R.jsx)(`li`,{children:`Try more general keywords.`})]})]}),(0,R.jsxs)(`footer`,{children:[(0,R.jsx)(`section`,{className:`upper`,children:(0,R.jsx)(`div`,{className:`footer-items left`,children:(0,R.jsx)(`div`,{className:`item`,children:`Taiwan`})})}),(0,R.jsx)(`section`,{className:`lower`,children:(0,R.jsxs)(`div`,{className:`footer-items left`,children:[(0,R.jsx)(`div`,{className:`item`,children:`Help`}),(0,R.jsx)(`div`,{className:`item`,children:`Send feedback`}),(0,R.jsx)(`div`,{className:`item`,children:`Privacy`}),(0,R.jsx)(`div`,{className:`item`,children:`Terms`})]})})]})]})}var Cr=a(Sr)`
  height: 100%;
  background: white;
  padding-top: 22px;
  position: relative;
  .top-bars {
    border-bottom: 1px rgb(235, 235, 235) solid;
  }
  .top-bar {
    height: 44px;
  }
  .app-bar {
    height: 58px;
    margin-left: 154px;
    position: relative;
    width: 584px;
  }
  .bar-items {
    display: flex;
    align-items: center;
    position: relative;
    height: 44px;
  }
  .left {
    position: absolute;
    left: 0;
  }
  .right {
    position: absolute;
    right: 4px;
  }
  .logo {
    width: 150px;
    height: 34px;
    padding: 4px 28px 0 30px;
    cursor: pointer;
  }
  .search-bar {
    display: flex;
    align-items: center;
    border-radius: 22px;
    width: 586px;
    height: 46px;
    border: 1px rgb(223, 225, 229) solid;
    padding: 5px 0 0 20px;
    input {
      outline: 0;
      border: 0;
      flex: 1;
      width: 30px;
      font-size: 16px;
    }
    img {
      width: 24px;
      height: 24px;
    }
    .icon {
      width: 40px;
    }
    .icon:nth-of-type(1) {
      cursor: pointer;
    }
    .icon:nth-of-type(2) {
      fill: rgb(66, 133, 244);
      color: rgb(66, 133, 244);
    }
  }
  .functions {
    display: flex;
    align-items: center;
    height: 100%;
    padding-right: 14px;
    img {
      margin: 8px;
      width: 24px;
      cursor: pointer;
      height: 24px;
    }
  }
  .tags {
    height: 100%;
    display: flex;
    font-size: 13px;
    align-items: center;
    color: rgb(119, 119, 119);
  }
  .tag.active {
    color: rgb(26, 115, 232);
    border-bottom: 3px rgb(26, 115, 232) solid;
    font-weight: 700;
  }
  .tag {
    height: 100%;
    cursor: pointer;
    padding: 28px 16px 0;
    &:hover:not(.active) {
      color: rgb(34, 34, 34);
    }
  }

  .content {
    color: rgb(34, 34, 34);
    padding: 55px 0 0 170px;
    p {
      margin: 16px 0;
    }
  }
  #search-in-content {
    font-weight: 700;
  }
  footer {
    position: absolute;
    bottom: 0;
    width: 100%;
    height: 83px;
    border-top: 1px solid rgba(0, 0, 0, 0.07);
    background-color: rgba(0, 0, 0, 0.05);
    .upper {
      position: relative;
      color: rgba(0, 0, 0, 0.54);
      width: 100%;
      font-size: 15px;
      padding-bottom: 2px;
      height: 50%;
    }
    .lower {
      position: relative;
      border-top: 1px solid rgba(0, 0, 0, 0.07);
      height: 50%;
      color: rgb(95, 99, 104);
      font-size: 13px;
      width: 100%;
      .item {
        cursor: pointer;
      }
      .item:hover {
        text-decoration: underline;
      }
    }
    .footer-items {
      height: 100%;
      display: flex;
      align-items: center;
      padding-left: 150px;
      position: relative;
    }
    .left .item {
      margin-right: 27px;
    }
  }
  @media (max-width: 800px) {
    .top-bar {
      height: auto;
    }
    .bar-items.left {
      display: flex;
      flex-direction: column;
      align-items: center;
      width: 100%;
      height: auto;
      position: relative;
    }
    .bar-items.right {
      display: none;
    }
    .search-bar {
      margin-top: 15px;
      width: 90%;
      height: 40px;
      border-radius: 3px;
      padding: 0px 5px 0 10px;
      .icon {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 30px;
      }
    }
    .app-bar {
      margin: 0 15px;
      width: calc(100% - 30px);
      height: 40px;
    }
    .tags {
      display: flex;
      width: 100%;
    }
    .tags.right {
      display: none;
    }
    .tag {
      text-align: center;
      padding: 16px 0 0 0;
      flex: 1;
    }
    .content {
      padding: 10px 40px;
    }
    .footer-items.left {
      padding-left: 25px;
    }
    footer .left .item {
      margin-right: 15px;
    }
  }
`;function wr({onSearch:e,className:t}){let[n,r]=(0,L.useState)(``);function i(e){r(e.target.value)}function a(){e(n)}function o(t){t.key===`Enter`&&e(n)}return(0,R.jsxs)(`div`,{className:t,children:[(0,R.jsxs)(`header`,{children:[(0,R.jsx)(`div`,{className:`text`,children:`Gmail`}),(0,R.jsx)(`div`,{className:`text`,children:`Images`}),(0,R.jsx)(`img`,{src:xr,alt:`avatar`})]}),(0,R.jsxs)(`section`,{className:`content`,children:[(0,R.jsx)(`img`,{className:`logo`,alt:`Google`,src:`https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png`}),(0,R.jsxs)(`div`,{className:`search-bar`,children:[(0,R.jsx)(`input`,{id:`search`,type:`text`,name:`search`,onChange:i,value:n,onKeyDown:o}),(0,R.jsx)(`div`,{className:`icon`,children:(0,R.jsx)(`img`,{src:`https://www.gstatic.com/images/branding/googlemic/2x/googlemic_color_24dp.png`,alt:`microphone`})})]}),(0,R.jsxs)(`div`,{className:`buttons`,children:[(0,R.jsx)(`button`,{onClick:a,id:`enter`,children:`Google Search`}),(0,R.jsx)(`button`,{children:`I'm Feeling Lucky`})]})]}),(0,R.jsxs)(`footer`,{children:[(0,R.jsx)(`section`,{className:`upper`,children:(0,R.jsx)(`div`,{className:`items left`,children:(0,R.jsx)(`div`,{className:`item`,children:`Taiwan`})})}),(0,R.jsxs)(`section`,{className:`lower`,children:[(0,R.jsxs)(`div`,{className:`items left`,children:[(0,R.jsx)(`div`,{className:`item`,children:`Advertising`}),(0,R.jsx)(`div`,{className:`item`,children:`Business`}),(0,R.jsx)(`div`,{className:`item`,children:`About`})]}),(0,R.jsxs)(`div`,{className:`items right`,children:[(0,R.jsx)(`div`,{className:`item`,children:`Privacy`}),(0,R.jsx)(`div`,{className:`item`,children:`Terms`}),(0,R.jsx)(`div`,{className:`item`,children:`Settings`})]})]})]})]})}var Tr=a(wr)`
  height: 100%;
  background: white;
  position: relative;
  header {
    position: absolute;
    top: 0;
    width: 100%;
    height: 60px;
    padding: 0 15px;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    font-size: 13px;
    color: rgb(80, 80, 80);
    * {
      padding-right: 15px;
      cursor: pointer;
    }
    .text:hover {
      text-decoration: underline;
    }
    img {
      width: 48px;
    }
  }
  .content {
    display: flex;
    flex-direction: column;
    align-items: center;
    .logo {
      height: 92px;
      width: 272px;
      margin-top: 198px;
    }
    .search-bar {
      margin-left: 11px;
      margin-top: 26px;
      width: 586px;
      height: 46px;
      border: 1px solid rgba(0, 0, 0, 0.1);
      box-shadow: 0 2px 2px -1px rgba(0, 0, 0, 0.2);
      border-radius: 2px;
      display: flex;
      align-items: center;
      padding: 0 8px 0 16px;
      &:hover {
        box-shadow: 0 2px 8px -1px rgba(0, 0, 0, 0.3);
      }
      input {
        border: none;
        color: rgba(0, 0, 0, 0.87);
        height: 100%;
        flex: 1;
        height: 34px;
        margin-top: 5px;
        font-size: 16px;
        border: 0;
        outline: 0;
      }

      .icon {
        width: 40px;
        padding: 0 8px;
        height: 44px;
        cursor: pointer;
        display: flex;
        align-items: center;
        img {
          height: 24px;
          width: 24px;
        }
      }
    }
    .buttons {
      width: 100%;
      height: 36px;
      margin-top: 31px;
      display: flex;
      align-items: center;
      justify-content: center;
      button {
        padding: 0 16px;
        height: 36px;
        margin: 0 6px;
        border: 0;
        font-weight: 700;
        font-size: 13px;
        color: rgb(120, 120, 120);
        border: 1px transparent solid;
        background: rgb(242, 242, 242);
      }
      button:hover {
        border-radius: 2px;
        color: rgb(34, 34, 34);
        background: rgb(248, 248, 248);
        border: 1px rgb(198, 198, 198) solid;
        box-shadow: 0 2px 2px -1px rgba(0, 0, 0, 0.1);
      }
    }
  }
  footer {
    position: absolute;
    bottom: 0;
    width: 100%;
    height: 83px;
    border-top: 1px solid rgba(0, 0, 0, 0.07);
    background-color: rgba(0, 0, 0, 0.05);
    .upper {
      position: relative;
      color: rgba(0, 0, 0, 0.54);
      width: 100%;
      font-size: 15px;
      padding-bottom: 2px;
      height: 50%;
    }
    .lower {
      position: relative;
      border-top: 1px solid rgba(0, 0, 0, 0.07);
      height: 50%;
      color: rgb(95, 99, 104);
      font-size: 13px;
      width: 100%;
      .item {
        cursor: pointer;
      }
      .item:hover {
        text-decoration: underline;
      }
    }
    .items {
      position: absolute;
      height: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
    }
    .left {
      left: 3px;
    }
    .right {
      right: 3px;
    }
    .left .item {
      padding-left: 27px;
    }
    .right .item {
      padding-right: 27px;
    }
  }

  @media (max-width: 768px) {
    header {
      img {
        width: 36px;
      }
    }
    .content .search-bar {
      width: 90%;
      margin-left: 0;
    }
    .logo {
      width: 204px;
      height: 69px;
    }
    footer {
      .left .item {
        padding-left: 14px;
      }
      .right .item {
        padding-right: 14px;
      }
      .lower {
        .item {
          display: none;
        }
      }
    }
  }
`;function Er({route:e=`main`,query:t=``,onSearch:n,goMain:r}){return e===`main`?(0,R.jsx)(Tr,{onSearch:n}):(0,R.jsx)(Cr,{goMain:r,onSearch:n,query:t})}function Dr({mouse:e,startPos:t}){function n(){return{x:Math.min(t.x,e.docX),y:Math.min(t.y,e.docY),w:Math.abs(t.x-e.docX),h:Math.abs(t.y-e.docY)}}if(t){let{x:e,y:t,w:r,h:i}=n();return(0,R.jsx)(`div`,{style:{transform:`translate(${e}px,${t}px)`,width:r,height:i,position:`absolute`,border:`1px dotted gray`}})}return null}var Or=`/assets/error-NW2jLHJX.wav`,kr=`data:image/png;base64,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`,Ar=.26;function jr(e){return e.split(`
`).map((e,t)=>(0,R.jsx)(`p`,{className:`error__message`,children:e},t))}function Mr({onClose:e,message:t=`Something's wrong!`}){return(0,L.useEffect)(()=>{try{N(Or,Ar)}catch(e){console.log(e)}},[]),(0,R.jsxs)(Nr,{children:[(0,R.jsxs)(`div`,{className:`error__top`,children:[(0,R.jsx)(`img`,{src:kr,alt:`error`,className:`error__img`}),(0,R.jsx)(`div`,{className:`error__messages`,children:jr(t)})]}),(0,R.jsx)(`div`,{className:`error__bottom`,children:(0,R.jsx)(`div`,{onClick:e,className:`error__button`,children:(0,R.jsx)(`span`,{className:`error__confirm`,children:`OK`})})})]})}var Nr=a.div`
  background-color: #f5f5f5;
  width: 100%;
  height: 100%;
  font-size: 11px;
  padding: 12px;
  display: flex;
  flex-direction: column;
  .error__top {
    display: flex;
    flex: 1;
  }
  .error__img {
    width: 30px;
    height: 30px;
  }
  .error__messages {
    padding: 2px 20px 12px;
  }
  .error__message {
    line-height: 16px;
  }
  .error__bottom {
    display: flex;
    width: 100%;
    justify-content: center;
  }
  .error__button {
    width: 80px;
    height: 22px;
    display: flex;
    border: 1px solid black;
    justify-content: center;
    align-items: center;
    box-shadow: inset -1px -1px 1px black;
    &:hover:active {
      box-shadow: inset 1px 1px 1px black;
      & > * {
        transform: translate(1px, 1px);
      }
    }
  }
  .error__confirm {
    line-height: 11px;
  }
`,Pr={File:[{type:`menu`,text:`New`,position:{left:`calc(100% - 4px)`,top:`-3px`},items:[{type:`item`,text:`Window`,hotkey:`Ctrl+N`},{type:`separator`},{type:`item`,text:`Message`},{type:`item`,text:`Post`},{type:`item`,text:`Contact`},{type:`item`,text:`Internet Call`}]},{type:`item`,text:`Open...`,hotkey:`Ctrl+O`},{type:`item`,text:`Edit`,disable:!0},{type:`item`,disable:!0,text:`Save`,hotkey:`Ctrl+S`},{type:`item`,text:`Save As...`},{type:`separator`},{type:`item`,text:`Page Setup...`},{type:`item`,text:`Print...`,hotkey:`Ctrl+P`},{type:`item`,text:`Print Preview...`},{type:`separator`},{type:`menu`,text:`Send`,position:{left:`calc(100% - 4px)`,top:`-3px`},items:[{type:`item`,text:`Page by E-mail...`},{type:`item`,text:`Link by E-mail...`},{type:`item`,text:`Shortcut to Desktop`}]},{type:`item`,text:`Import and Export...`},{type:`separator`},{type:`item`,text:`Properties`},{type:`item`,text:`Work Offline`},{type:`item`,text:`Close`}],Edit:[{type:`item`,disable:!0,text:`Cut`,hotkey:`Ctrl+X`},{type:`item`,disable:!0,text:`Copy`,hotkey:`Ctrl+C`},{type:`item`,disable:!0,text:`Paste`,hotkey:`Ctrl+V`},{type:`separator`},{type:`item`,text:`Select All`,hotkey:`Ctrl+A`},{type:`separator`},{type:`item`,text:`Find (on This Page)...`,hotkey:`Ctrl+F`}],View:[{type:`menu`,position:{left:`calc(100% - 4px)`,top:`-3px`},text:`Toolbars`,items:[{type:`item`,symbol:`check`,text:`Standard Buttons`},{type:`item`,symbol:`check`,text:`Address Bar`},{type:`item`,symbol:`check`,text:`Links`},{type:`separator`},{type:`item`,symbol:`check`,text:`Lock the Toolbars`},{type:`item`,text:`Customize...`}]},{type:`item`,symbol:`check`,text:`Status Bar`},{type:`menu`,position:{left:`calc(100% - 4px)`,top:`-3px`},text:`Explorer Bar`,items:[{type:`item`,text:`Search`,hotkey:`Ctrl+E`},{type:`item`,text:`Favorites`,hotkey:`Ctrl+I`},{type:`item`,text:`History`,hotkey:`Ctrl+H`},{type:`item`,text:`Folders`},{type:`separator`},{type:`item`,text:`Tip of the Day`}]},{type:`separator`},{type:`menu`,position:{left:`calc(100% - 4px)`,top:`-3px`},text:`Go to`,items:[{type:`item`,disable:!0,text:`Back`,hotkey:`Alt+Left Arrow`},{type:`item`,disable:!0,text:`Forward`,hotkey:`Alt+Right Arrow`},{type:`separator`},{type:`item`,text:`Home Page`,hotkey:`Alt+Home`},{type:`separator`},{type:`item`,text:`Cannot find server`,symbol:`check`}]},{type:`item`,text:`Stop`,hotkey:`Esc`},{type:`item`,text:`Refresh`,hotkey:`F5`},{type:`separator`},{type:`menu`,position:{left:`calc(100% - 4px)`,top:`-3px`},text:`Text Size`,items:[{type:`item`,text:`Largest`},{type:`item`,text:`Larger`},{type:`item`,text:`Medium`,symbol:`circle`},{type:`item`,text:`Smaller`},{type:`item`,text:`Smallest`}]},{type:`menu`,position:{left:`calc(100% - 4px)`,top:`-3px`},text:`Encoding`,items:[{type:`item`,text:`Auto-Select`},{type:`separator`},{type:`item`,text:`Western European (Windows)`,symbol:`circle`},{type:`menu`,position:{left:`calc(100% - 4px)`,top:`-3px`},text:`More`,items:[{type:`item`,text:`Arabic(ASMO 708)`},{type:`separator`},{type:`item`,text:`Chinese Traditional`}]}]},{type:`separator`},{type:`item`,text:`Source`},{type:`item`,disable:!0,text:`Privacy Report...`},{type:`item`,text:`Full Screen`,hotkey:`F11`}],Favorites:[{type:`item`,text:`Add to Favorites...`},{type:`item`,text:`Organize Favorites...`},{type:`separator`},{type:`menu`,symbol:`folder`,position:{left:`calc(100% - 4px)`,top:`-3px`},text:`Links`,items:[{type:`item`,text:`Customize Links`,symbol:`ie-paper`},{type:`item`,text:`Free Hotmail`,symbol:`ie-paper`},{type:`item`,text:`Windows`,symbol:`ie-paper`},{type:`item`,text:`Windows Marketplace`,symbol:`ie-book`},{type:`item`,text:`Windows Media`,symbol:`ie-paper`}]},{type:`item`,text:`MSN.com`,symbol:`ie-paper`},{type:`item`,text:`Radio Station Guide`,symbol:`ie-paper`}],Tools:[{type:`menu`,position:{left:`calc(100% - 4px)`,top:`-3px`},text:`Mail and News`,items:[{type:`item`,text:`Read Mail`},{type:`item`,text:`New Message...`},{type:`item`,text:`Send a Link...`},{type:`item`,text:`Send Page...`},{type:`separator`},{type:`item`,text:`Read News`}]},{type:`menu`,position:{left:`calc(100% - 4px)`,top:`-3px`},text:`Pop-up Blocker`,items:[{type:`item`,text:`Turn Off Pop-up Blocker`},{type:`item`,text:`Pop-up Blocker Settings...`}]},{type:`item`,text:`Manage Add-ons...`},{type:`item`,text:`Synchronize...`},{type:`item`,text:`Windows Update`},{type:`separator`},{type:`item`,text:`Windows Messenger`},{type:`item`,text:`Diagnose Connection Problems...`},{type:`separator`},{type:`item`,text:`Internet Options...`}],Help:[{type:`item`,text:`Contents and Index`},{type:`item`,text:`Tip of the Day`},{type:`item`,text:`For Netscape Users`},{type:`item`,text:`Online Support`},{type:`item`,text:`Send Feedback`},{type:`separator`},{type:`item`,text:`About Internet Explorer`}]},Fr=`data:image/png;base64,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`,Ir=`data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAFCAYAAAB4ka1VAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAAZdEVYdFNvZnR3YXJlAHBhaW50Lm5ldCA0LjAuMTM0A1t6AAAAJklEQVQYV2MAgv8gDAQgApOPVRCJDxZAF0Tm45WEsnFL/v//nwEAkHRPsfhCgVMAAAAASUVORK5CYII=`,Lr=`data:image/png;base64,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`,Rr=`data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAEeUlEQVR42u2Wa1CUZRiG/WBjOe32sdvuYoIrxzzkLkxYWYlmkYcWLEJL2BIHsgTSmSJhlvAAjofSNMR2B0aGQ7LBJAeXPbCcAl0FFFqmXUPlJEtFNUym1o/8cffuGo4cZ0X8UcM988x8/+7rfr7ned931qwZzei/JvOQGbJLMoQaQkGraVCVFBxOUQjSiRHREA75JQUsvw/goRhL26Vg17AhaVmL5I5EZJp3QN65ExnGOMSffRErtb7gf+0KjyIaaS2y6YMo7leCrqUR/d1G6H5WQWNRoqTnC+R2foJDHfHYfWEdPjQsRVKT2FaR1f7g57kiSCnGwIN2Q96jAFvPhrw3GzU/lqG8Lxf5VzKQZdqGzLYNSG1+6a7x6FpYyEFwIYEYmiKEYdAAqopCTncWVP2FKO46BMUPKThojMXOVgn2XIhA82Al1NfkE0PkcRBatGxqAKJ6Eba0SfFN75fIu7wHR77fioyLUUg2PI/9JP1ft29gWEc74iaEEBx2hdJYfH8Q8qty8NVcFF3dj+Pmj7CvPQay5jBsOxM8xtyqXa1rxjV/r/FJrK0QgpNBwzJksR9CXC3C5nOSMUM2nnnR5fQxxglNIsQ1LsKmbxdgY30gOHuZUJyV2wdguT4AhxIKstaIEUNmj3kiqS0kdSwxljY8gQ11/ois88XiXA7W5YTbB6Dp00BQ6o7tZ0ImNbfc6rQN4L1V2ZdNNiUbp3qzsKs9GhG187Ba742ni/kI2ieyH8C7hDWpuT0q6v4crxDzFdWPI6SMB0YSZSdADwEofnCAfLK2y3Sz8ZxOAHEFB4x4ewG6CUABa8S/HQ+i7bdalPUeQyk5Fa0n48nuI7bUBV2HcaLrMyS1RmKJlocgNQd++Sxw36ftAzD9YobDMWrMZI+G+JN872gNtw3ZqzVCrCLtXlk9By/oPPGsVoBgDRciYj6/6lEIjjpjefp9HEg+uUK8pQscAbCVrNbui5E242Hduv0HEs+vRpje6992eyJEw4OYGC+qouGncoePyg2sVAbSClLsB0jSJWDhCc7d1YonO21drZiGQHxMUluNh3WTfEc1LsEzWj6CyeG1WO2BgCo2fIm512lX8EuZYLxOwdRttB/A9FMHOJ/SWK8OwGZi/E7DfLxZH4A36vwQXjMPCST1zXsg5FcO2FIvIO22phaedoNnpTN4FUy4pTji7YPR938fyPSpeOyAC9br/RFFjF+r9cEa/VyyWl5YTlYr1vAybvx93Vax5yXwV7FIu90xp9IFfGLMKX8ELmSWOBE0TF3GqV1IUmUMuBlMrNJ4jxiypaOGzNruuaTdAmLMq3ACq8wRLgoKjmEUlNVfTf1N0P9rHyJyJPBId8JTpbwJh2w2abc1NV3OgBt5ojHT75gryo5Pz8sorTwV3GQa/ExnBJ5kjxgya2puuRPclQ5gZlJgSCj4RAlhMDZN79vQdK0DHxQkwHe7EE5SB7gmOcL5XVLxjmBEk8QryON0k2j6Uk+mc+YmaFtU0DbfKY1Bhf7BvodvPKP/nf4B4+9ZYa2mEQAAAAAASUVORK5CYII=`,zr=`data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAgklEQVR42s2TQQ6AIAwE+/R9Gj9bLQLaUqskHixpSKwzmA2K/LYA0PcSqFVKoejCpSURKTigvgzMJriR1M/sL/MCGVh3YQzXId2JtPCYOYkRTH3MTCZrgiDQUDACczJEgfoc9ofzKS6TVNAkVgDbKdwFSATnHchuJZ5Avv0dGPT3tQGt6vGOoDIgSwAAAABJRU5ErkJggg==`,Br=`data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAACF0lEQVR42u2W30/TUBTH+Sv863z3SRNfFE0EjDFGUR8wJqjEyWAd3QZbJw50CDjUjRnYpgyGFN1vtrXdxja2vX3tPYmkGlja4owxPcknN2nT8/2ec27u7cCAFVZY8S9GMhk+73FPY26WM8Sshl+eexwQfE7oNuDkbDADp+Gk96HVgD4TPG+HILhU138WzmHTb6DbPUS3Y5z2UQ1HrSpaTQXNhozGoYR6rUzoNsBaaNZAp13/zwx8ir7XTXR97Zj1SIiIhN8RilzsXwd6VV1VDkhclgrmDCwFX52JxQUB90dv497dWxgZvgZRTJz7ax3gZ+yYePYYN0euq4cRR+u8n0PfO+Dz8vC4HdhOxrD1ZQPDQ4N4Mj5Gq2EDemEHDatycyOMWrVEmzIRj1InHj64g0sXL2Dw6mWdI3A8V5PWiaXgfE/WQkG14hmkduLqhisSlXIWu6kEXtjGwe6U5bcBiHtbYHn1bUKNgdNgF4x98il2tmPqzCskXC5l8DkRxZvXfiwEvIhthlE6SKOQ3yfOZKDTZkesAqmSo+SCj4fbNUWJ8zkRHz8s46XfjdWVReyLSRLWiueye+YNaMWHblzBo7FRqnJ6akLd6ZPwzjmp8mLhG3XhJPFs5qs5Az/FW00ZmfQuXOpFFY9FaOYMNgJZytPce4mzbw0b0Io3GxLNul4rEWzmilzQLZ7+njJmoF9Y/5tWWPF7/AB229Zv11UWLgAAAABJRU5ErkJggg==`,Vr=`data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAEqElEQVR42u2WeUzbZRjH94NKuYqlbGWL0woMcDDa4tS5TPFCExA6HB6TsUyF6caxSyIIsgN0mzqUXbaBjADVVojjWCmUGwqdHIGBoxMcBUZR8EA3sxHdIl/fX6EFEtSC7A8NT/KkTZv8Pp/neZ/f+75LlizGYvzXQjuqReKlRPhp/MBWskEVU7A4S0GoEkBUGwzxJQn0vwzhtoDD28PhUOmAoOZAxHVGI1X7FsTd+5HSEYHIxifwZJkruJ/bwlHKRlJz4sJJyAblYFexEXbhZaiGFSjVy5HXdxyZ3e/gWGckDrZuxD7NesSoBYbcVL4K3CxbCOUCDP3bboj7JHCocIC4/xQqvy1A4UAmsr9JwfGLsdjX+DASmp5CatuLJvj09MrlwDeXSIzOU0IzogFVQiFDdwKKwVzIeo9B8nU8jl7YZoArr4jRNFKMQ60i7G8Jml0iiwM/6aPzE+DX8PF6Wzi+6P8EWT2H8PHFnQQWaoCnd0bAGGO3fsUR0oU4zYZZJZzTbCHvkM1NQnxZDK7SCdLLR3Ba+yYOt2/B21/6I1YtJALrcKAlANPDKLGrwXcG/I36NQgs4oGTwoZ+VG++hKCcj1fPB5mGbC+pmn4gXX2segIi7UmeVYL+b2e9D16p88LW2vuwudodnHeZkDSKzRPQXx2CRR6FxBaRYciM1dBwowDdiX+SCKi8B89W8hBS5QKfTA42ZgSbJ1A6UArnfHvsbnjA8KAD7WE423+CvAGnUEySHr7pqb/e/ZcSfqoV8FfdhYdkXAgP880XuDuPZapcqvsIcw1a4mBrCEKr3bChzBlrC5aCEUOZKdBHBGRTAtnk9ZtLjI+PY+hGP4JrvLFG6QihkgN+kSMYkeYK6IhAzpRATMsmnOn9EDm9acglKSVCMl0a8nTpKOg/ibYfq2YI0PCQWh94lzjCo8SBfLLhls2C0w62eQJd32thcZKa9Z2ennsb1hmG8gZptzFGxvQIrRUaKncncE+StIRzujUeS57DhuSSycNmlccMYLSaj+j6iaTfgj0ND+L6rWumto+MDSG0bgpOg90U9nBR2IGVwEBSTrz5AjGqKHid4UyCBdhBNpSoSTj92y71/fjpt2FT5cOkclEtH97kiKbhdLoS+MpztuDmM8F4jkKXrsN8ga7vOsH5gI0XlO7YXudtqnxikxHgva/24OYfNyfXfADPVK/GarLWniV3YpWChXvP2WF5sTWWFTFhF2+Jre+Hzf08SKxIwNKjNnip0h2vkV0tgmRolSu8CMi/RoCea1pc/f1nBJLvNNjT0HIWVhbbgEvAnMI7YENmiSNio6u3Y34HUrh8C5xSmAgoJbtaBQ+PlC0na2pvWFsa6EMm3bjmdMtXFNFVW4FVYAkbCQXLpynIyz+d/51g8IcBiDKC4JhshbX5y7CebCq+5JCiwfRwGYfMWDW7kAE7ckVjJk/AJQWnF+ZmlFSYAKc4Nrip1vD4bOaQOROwU6EV7OUWYKZSYARRcHmeB02HemHvhl1XOhGbEwXX3TxYhVvANsYS1ttJRlqCEUYqfpxcTrfxF67qv4vzWjXKmhUoa5rIUo0CgyMDtx+8GP+7+BOtKFbTGHQVFwAAAABJRU5ErkJggg==`,Hr=`data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAFD0lEQVR42u2WeUzTZxjHNTNz06lzkG2M4VBnlmXJiIrXos6SJcZkMWFGt+FfmxoyotnMNBvGI4whRYpFrtJxFORGkKOc5SgIghwCAlXaIQU6igc6xTEPXD57+ytT/xMU/1jCk3z/aNPk833e99vneadNm6qp+r+WdcCEobOJmjPlnKnWcb65BnNPBy8c3NZaT1FRAVVVVXR3d2MwGOjo6KCpqQmdTkdaWiqVFUWTb6Sv10BxcSFGo5HR0VEsFgsNDQ3o9XoJXFRURE1NDW1tbdJ3sbExtLbUMmnwkpJijFYjezP24ubnxvyDr+J4aDbz9zmyXO7JjvhjxFV0Enkyk8zMTMrLy9FoNNTXVT6fiQGLkfz8PJTlShx9HXAKm8PKgnfZkO/K0hgnnP3mMnPPDKZ7T2eJ31ISjGZOnjUSHhVNdnY2arWas7Xlz26iqDAfL7UXs4+8zILk13HXOrMgeB4yhQxNnQbzkBmudfEQ8Befw9v1FFiGyegYJEhxnOTkZEJCFPSZOyduwmRswyfKR4K7ptvhTgFzpNN4su4IXRJqFkq/YGTdBhnBec2kt/QQHBxMZGQkKcmaiRtIzI5jxvcv4ZI8j2X577A29z2pc1vdF7olZBUyCrUL5YiArpfJ8NrjR243lF6D8NQsVKpoAgLkXLGaJmbC46AHDspZuOU58VnZYj5WvyUduw0+MKbLYwbynoAnGaD2BrQNQ8q5TkJDo4iIiOVc/QQCae7pxOUHl0fwbTUf4a52Rm/US53/IdQjVGu1kiT+djb4Rk8v0oQbrXCmtcCNf6DkOqL7Y6SkFJObkzF+A8auVuYeeIVPS1zZUv0hu5qWs+I3ZyqFgV4BNo11vsvbG6VSibu7Ozt8FfwcqsYvUUu6+MGI1czVPZ6EK5Tk5NSRczr96Qa2q7exLmgNq/zdcTg06xF894U1fFWxjIUHFvKJyMEqIVvqv/TywsfHB9nGzWz28pb0zU8Kki7CXWFgeKcMVUS0GGIGTmenPd2AqiyE13xnsl507jkG/65lJftNHhyxfE7g0FZ+7NrEB/5L0Y/8yakuK4c0eqLqhsnth3xxN2mi+6oBe1Bb/4bDhwPEYOohOyt1fFfgk7ST94+/wbeNyyT4PqNMggdc20LA9W286SvC2N1K9V+gF0ErE4ErsNrh6b9Dqrgb020QEaBkYIiwsBSyspqoKC8YfwbWydfgkbZYdLuBg32bJHjIne24/OIgjj6Hylt2cOGgPXR5lsfwMosdPvgA1FqtOH6TyEkC5stt4zfQN9DOCrkbuxrW8uvVLyT46rgl7M5X2lM+pjzRdbbZDv4Pfk/Q7wvV3x4R01BNXd0doiLVEx9ENZ2FuB55G/+rW9mqW40s9GvKhqBRdF8qjjyj+zG4qNd+7LaRbIO33BN/v7BIsSn7xT7Q0nK++tn2QUqtGscDc1m0fxH+ikCyDFZKrkCHuP/rAnRXn8NDb5kUuFGhmw/snSti4yksNFFa2k/Sydjn24jxFeHII+TSYgkKCuJEciba3pvSkGlubKX/6F6abYEcGiG1rg7/wBNS5zZ4YGDg5LwJztbqJLhKpRLLJUpsuDDkynAU6jiOhkcRqk4UsEhOnWqU7lyjKScxIZ7BgUuT9zrqM7cTrYpALg8mJiZJwCqlCWcbMjqdSbyKTCQk6MToDRJvgNIX9z60GSkpPo06OkIYiiZBk4wiWC4GTQoXO8+9+IfpVE3VZNa/HE6IlWNvkEoAAAAASUVORK5CYII=`,Ur=`data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAEKklEQVR42u3W/U9aVxgH8PZ/2V+wrM2WLVuWRde9dFuzZenruqzbTLfEZk2Wdo1zM9ZlYpu2THRqR31BphTQKlhaqwgDUbFQAa9gFQERUQF5FajId+dw1erYMrG6Hxaf5ISbQPL53uc853L37durvdqhMnd1QHzpAuTlZbBq+7BrUMJ4C3FGkgX0E7xm/36M5D8HT+np3QmwIjoCtLwB3HkX6P4YKwPnkJxsxNKMGroL53Y3QKrjExbvfC+DQ3Ma0H8JDH0BKI8DXUfg47yIuW+e39kAMZceqU6C3c4HZO8DPUcB7afAcAEw+DnQewyQf8B+3/AK0r++gHneGewQPoR069uA+E0WoZjuMxannzQM7QjtDP8l8rvjiChKMVH6Ktwa8bOFiLmHkRa9A0jfYnHa5oEzLE47QLeBzsIGPJ0II5ZMwfr7z7hfeAjWnrbthYhSXHwYaCcBFB8CfSfYvaY43fs1XPg6UHcQy6ITWImzeGjpCeZDCahrruD210fBqLuxPZwC9z4CVCfZYaOLXtNAtCuC1zJ4ouVkFu5ZjMPhi0FRXQXhd5dg0em2HiJhagI6DrN3qT71dNLXcMkhFq89gCXhKdL2CBJPVhCOL2MhnMRsMA4nwSfno7A4fRBz+aj/iQ/TsGXrIZq69GyracvXjtlfJj1UlYdUyPOP+NhsGCPuEIYmfGiuU6Cusg+PH09vLQRfMQUaIt7/FTv59PiJ8oD6l5GqPoBFgi/Pjf8r/tAVhG4qAJVtHlyuCgzj2nqAdiYA/uAsHJ3frk/6MsH9lfk54ZpJP3pIgPJy6da3gAZoGw1A7k3i5sMwVK03kOAdhPtaHuRKI5ZTaUQI7o8k4SVD5/IvYdDshkzJgC/U4pebSgw4CG73o3d8Afet2wggsfjR5opD6oijwRxBxQM/OGRJLJEs3L4QRUFBzfr64bJ0Ey4b9eYeQPTIl8FbxmMQjEVRb4rgN2OYbE00C7eStm8MUEwCbMTbzLMkgCS3AC0GXwZvtsbW8Rp9CCJTGHOr+NRCLINbZkKbAnxfKkG3jcXbCd76yJNbAIZxgIYQ2ghuforz+oNoMYYwHSA4GTqbN4JRTxgGMnAbAxSRAHLGizsWL+mkB0LjTG4BaBkME6gWMet41UAQ3D8W0aQPZuFDzsUMfPZsHQoL61HCkW/C64fduQegZbc7wWswgKfxZ/CrygBuDSxm4VoycOfPC3DxoghFRVJU8PoyOF85jgqBDsUcGXkOdGzvj8lud6BWoMeVu57MKajTBMCs4vpVXEWediUlnSgrU4DD6cHV6ypc4z5Ac7MaarURTufUs78fVFYrcVnsQHWfH8bpIIYJflfvRKuCgUAyitpaLWSyERiNk7v3QkrvqJSnRQX3Hop/bEVjYy8GB8d2D/y7MplspKWO/xbdq/91/QnS1BOVFYdQygAAAABJRU5ErkJggg==`,Wr=`data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAADpElEQVR42u2W31MaVxzF8yen733pQ186nU4ba+JVAVEIBIjGEAyoYVtEBOSXoMgCsoqCJiGabLQpCc3p2burQzOZZrKJPmS8M+cB7t75nHu+93t3b9y4HtfjC8be7g4a9SYaahNXDg4EShAi9x8pyhauBO5y5RF+qKB3MA3oY8CzO1DTAbgcGXg8RZnK5cC1loQr8RhwRvAr6ug2cEA1RtGvjCEWWLycNC7gy4SfEnx8BzgkeI+qjwKbvwOFESA/Ai3mhmsy/fXS2NWaJnyJ8NeE9wjvEKwRrFJlC567BaR+BpI/QY/9gvC0lUb8C9IoFlSset3oRkcwWP8O7zI38bb0PdAkuEaVRkz4+q8S3o2NQ5sfRy7gR8wdvjigtuHG4nJ0DsOjv5/Bm8YSXqbHoOecaEV/Q9L9Izy3nHCMRuSasCuKsGPBvoFspiYXhgIJ6FmBj4/31BvqlHpJPYPeVfCiGURn+Qf4xiJwuIqYuVv+fAPD/b2/Hv8I/C11Rr2metQR1aFa6J8WEfIlJLzSO0MwrNo34HJmsL1mGOhb4AH1l7XrE+opdUjtUjuEFxDym/Ac4dv812/XQFU7QVTRzJqGU+h22hb4lYwbf6fR1VIoZ6LIrSxBLUQu4FnCK3yqRN21a2C7q8v9bVsxypZaTkHvrSKlxJjOmvzPyxrPcd5FsPF7hc/nuO5ctg0UaMAIVqOa1CoTcRMmS0PYhtrDcX8g8zimGgQ7+X+IqaVYsRVWStGB6VmbBjI0YNSwSm1RRqSx8lOzNWnmuVV94+i1LaMJmjLmfU/aiHDyASecQZsGkjRg1LBgRZngDie5w8VUG3tDyaiWScNg0TBpmZj6owf3JjDhs2lAoQEDnP0HMtKZUBVe6kOg8UxmYD6TYGc+4ZUQXDOTEpEjiJmqPQPRlo44C7z0gq0Ub8vdJ60D9iFwkVfBY57Y+QPgPg9OYAdwPDA7SEwU7Bm4X9FlDf3ZE7MVK73/BXprkJE7Nxg76yboUvgb9q5iWcM1HVP5PsYdRXgWNCzwspvf/wSQR19En0MEWxDTW/bfBXLh8oms34S3Cn9tAA9bYoqFd5SGgH+eQjw6hKAjwclzYOBeia/hTVQ3VXT3mzYNuNjzk0VMJM8wnnsPkX4HwUMhHnYgfHUIbv0cODdbwmpyC3W1/nW+hC5eRveaELN7EMzbOEzmJZRH5NEGsukq6rX65Xz/Db8NjU+rxVgFxXwNu6361X6CX49vfvwLcKFAAY3A3OMAAAAASUVORK5CYII=`,Gr=`data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAADaUlEQVR42u2WS09TQRiG5QeY6A9w4UYXrnDtJezcsjJRYlAjiRolNYgXDHpC8IaCeIvgpVY0FQWRW6GKgFqlBaTQ1haKbVPbUgotB4rYFoTXmTlQW0Aug3HFl7yZtGfxPHPm+yZnzZrVWq0F6kb9AC6Vflt2Mi5UQWfuw4oFClRe0JqamsLk5CQmJiYQiUQQDocRCoUwNjaG0dFRjASDCAwNY8A/xEIFcp9aoDW6ViaRX+1m8MUq8gsITwDBiBQqIJS7kSM3oKXLyS9x/bWT7XqpcDEkhQqk1ANHSpwQir+gqdXGJ3Gt3I7x8fE5UPpSKDREHo2EgQCB+n4AfaPSSgVic/J0CZ/A1RdWdt7zCfSIDhzXyLCjMgnbSXLaC9AdEJFQlIDyZi+KlX0ofORB3j03MjKf8AlcUVpYo82G37fIGWh2NjzdyFazC2hsBCoqAIUCOHFSwSdwucTIujwW3urTzwuPjdUPmHyAoR+oewfIMuR8Ahcf6xEkIxZ77jurkhgks0VAu88BndeBXTXJcQIz8HYP0PwZSJc95BPIfdAGURSjcF2/Huvk69Hs0UebzjQoYktpYpxAb0CCt7kBrR44ln6fTyCnSAt/IMDgP0nHn9UJqHQ0ReHfhzHvEVB4K4F/+k5WA3D0WDGfgHBHA9/AIBu3YTIMp7VCHJxG7/0TCtaSBtRNwz84ye8u4PDRe5wChc3w9vviZn0pAjRqm4h3dkkg7fAdPoHz+Q1wefrY7TYD/lvnz8ApeJMyEZVWEW9sQEsncCjtFp9Adp4aTpdnwTPP0BTEwbe+TMK2imSovwGqXkngwMGbfALnLtfC7nTBOw13iHMFNpPdpjUK2K2WYe2j9ey/K21NDF5tJb1ApiB1fwGfQFZuFax2ZxROx2uxSyhZJWPw193kJrRIAvtS8/kEzgivYLHao3DLIKKvffblEwunO6fwMjPwsQNI2XeNU+BCGUw9NgY3E7jRJwnMdPrtziakNgg4pZFDYXLE7ZzCnxunBVLy+AROZZfCYOlFt1+Cd05fr7FzTkeNdvvsnVN4CRnB91+APXuv8glkZinRYepZFvzl1z/wx50rFTjzDPWNXpIR1DWIUt4OsajeBKBS+1lq6wdRWzfAUqPyoaa2n6W6xou7JNwC9EvmX4RbYLVW63/Ub3EOTEPapeYyAAAAAElFTkSuQmCC`,Kr=`data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAADBElEQVR42u2Wa0/SYRiH7SP0Udr6AH2KXpRzUsvNnHM2NE1nMmeZmmTNpnZApUbmAaeCaB6wk5ohBiiKguN8kINCBEj4639A9A9m+dh6xb39xvbw4rq47+d+Rk5OtrJ1Qj1SeHC/d/PU4dcOY2HVgTMLCOVO0LW/v49EIoF4PI5YLIZoNIpIJIJwOIxQKITdYBA+/w48Xj8TWqD+lR7zOtvZJFpGbAz8TxX7CUTjQDDGhhYQDNhQJ9JgTmMhl3g4ZGZ+9d/CAxE2tECuArgpNkPQqcLMoolMonnAhL29vRPhEerr3SgLdn9nQwscTVmFmEyg8a2BmXd60VM5Du4KsRlQOtEpcaD1pR1N7Tbwy3vIBB5I9MxFS4fTLT8ObtkBzAFg1QpMTwNSKdDdDdwq6yYTaBBrmVueDo+tqDPgjvUtBr7hAwxeQOcGNC5gbAoo5YvIBO51qRGkVuwoPD4kAi6eQ6yGd9h2lRqJS+cRvMPjwL/aAeVnoKT0BZlA/fNFBAKBFDxq2WLgB/lRzUvBD84cHcIUfNEGzKuB4pJnZAJ1HfPw+nycmYcHRRyJo4lcvgCdMcDAv1DwTxbqUwMUFXeSCQjaPsLt2c64cDt9ohPhC0n4ezPVgW9AYVE7oUCrEk6XO+PCeWZnOG2n46/gZcCnTKxAQWEbmcDdlklY7Q4O3Nf7+xFsl/M48AkjMLcM3Ch4QiZQ0zQOs9XOWbX0ttvbhZyzNZEoBZdvsALXrj8mE6hukMFktsKZfGS2qD13S0QpuHaTnbmxhz1z8Hkc+IiBGge1Bfk8IZlAVf0wDCZzCk4/MmvUnpuHpCn4wcxVSnUGXKpnBfLyW8gEKgWD0BtMHLiWemSWk3uefuHS4f2rwIclIDevmVCgth+6dSMx/I02KZDbRCZwu6YXGv0GMVxMreCsCrhytZFMoLxKgiXd+qngfSuH8K7lswpUvoZi2kllF2OTATbv/EzkEz7Ix71MZIptyMY8TEblbozKXExGRp14SoVYgP4n8y9CLJCtbP2P+gUzjaOPiriIJAAAAABJRU5ErkJggg==`,qr=`data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACcAAAAWCAYAAABDhYU9AAAD40lEQVR42s3X+U8UZxzHcf+PAmoJIq5gTyDai9ZWbcB6VLCnbSKVSkooBMolQgso1MoNatMotAWxkIIstpxyXwK7gFwKLlc4dwE5ZNnr3Yel5R9oBniSSeanyWu+n8/MM7ONLby2/d8LGPQGtOpJtAsLWwNnMpl4lneVlewADAlHIM4Fo/de1P5ujMmz0GtXNg+nezqDKfYdSHCBtMMC9zac38Oyx06euD7HYGYio9MjGAyGjcetKEoF7N01XPr7EHkAztoy/+F2VAKnbqjg21+O43P9GCWKPKbmplhe0TO1ME7zWCE1AwUS4nJjIOU9SBLTSxO4oFcwnbFBfcKKvqM7GZ8c5lTcbk7H78IzQ8Z3JS8R2eBIjMKJS+1OlPb8Lg3OaDSiS3SH5IOQKoCJh8DXAcMn1ox/YMlAoDtV3XJOxtrwadpuvslzIKLekeg2ZzMsqtUR1VS/NDjd+CBcERNLEj274bp2/vVa34aPWjCWlUJSUTCnftzFFz/b4X/vBX5odlqfWmyDq+iiURqctvkuxkwP5pKOockNR3PTj3lvR5bcd4i+WTDb3Y5n6ht4rEaaKSO4/GWiW8XUlGu4rPYI6R4IlWqClpo2ChRz3Kqf4WbFEHXKYaYrChkI/RzVeB8nRKQfJ9tyPsee8NpXifk30tWj8clf0uAWtUa8cibwK9ETUmUSkS1xMl6JS6Ac9/AC2h9PMij6dC7dhTM37PAt2Mf3TauROnO5Q/TtwX7U89PS4JoHFgkoXiag3MSFWvDOVeN2uZE3/fNxOvcrRXX9tMtjGHxYRXlHAWnVfsTXfUZyw1lyWq/Q0ltpfoFLgrtVpzFPLPC+wNWY+DJjiCORlbzm8wfOX2UwOjbJ3xetqY6yYiD7MEud0SyrUtGqLrDScwhNzzVpXsJGccdhcjVBVRBcDSEVOk6n9XAwtJj93tl8dDGfid4y7oVY0BRnhfq2NTTJ4OFe6JVh6tmDZkQhDW5iTodv4ZyYGuZI/YsWOf5TK28FFOLs9Rvxt5voLAynOMyC9oTtLN21AYWAdYujT8ZsoyN6vUEaXHn3PKFVOsLqxObQZSS4eA63Sw287puHo2cG9R2jVF51oTzCkkfXdqAvtYUOe+iRmXFqpY90e2tZp5r0qkHu1KuoVo5Q0TZMSn4nrkF/csArE83kEPIQS2qiLBnNeB5TrZ2I1N4MM+MeZW/899yKzkCtYogRZQFFwWt9m7kj+vZAth6prlPG0+nBjcetI7XP6Cq7TnOyMwtyEWnXixj7HNA07uNxpZfYk02bh/tv6XU6xvpbGO4sZKT7PvOzms37TN/S/xBSrn8AV1g6y44WVc0AAAAASUVORK5CYII=`,Jr=`data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA8AAAASCAYAAACEnoQPAAABeUlEQVR42q2TUU7CQBCGezGP4qkkBAJWBQyiwahRiQQpiEABUVGDGh9MPMJcYPz/DotbNL7ow5d2m/1mdnamwfxDtP0s2rgVPR6J7g+NWl+0ciVa6oKOsR2Jbl6K5sH4TTSgeP8uGmPRnVughEfR1kz0/E70dGocTUQPkaDKwAgUMCPF4ato9GSCk854GggnsUGxNlzIOFXAo7qMzZkJS8a2ebefhvJe768yL4f1NR8W9U3ScHPl2ij1vt4TmbfKjC7r2npumZkiBcLvO976m8wNDl/2v6dk9jHJNDX8jQdxer2FEl325LbZfL/GVcEXl6DmMpIGYdt6uYovVrEmTg4HmLbfZBfAiT/Khcgmh6PnU0eP6zeoD+TiNHnUHKLcIHthg8AAhIIP5XBi5BEwg6xZ1FyM/kPmxDBAPbano7qQwpHBI1PeQL1F3FWQaaB3WJQHNrM+pYG1Jdc3WCvFLOot4J8Oxi8QW8jesX80RccuxsGjMiPFGN4nW0p3ESpgWoUAAAAASUVORK5CYII=`;function Yr({onClose:e}){let[t,n]=(0,L.useState)({route:`main`,query:``});function r(e){e.length&&n({route:`search`,query:e})}function i(){n({route:`main`,query:``})}function a(t){switch(t){case`Close`:e();break;case`Home Page`:case`Back`:i();break;default:}}return(0,R.jsxs)(Xr,{children:[(0,R.jsxs)(`section`,{className:`ie__toolbar`,children:[(0,R.jsx)(`div`,{className:`ie__options`,children:(0,R.jsx)(yr,{items:Pr,onClickItem:a,height:21})}),(0,R.jsx)(`img`,{className:`ie__windows-logo`,src:qr,alt:`windows`})]}),(0,R.jsxs)(`section`,{className:`ie__function_bar`,children:[(0,R.jsxs)(`div`,{onClick:i,className:`ie__function_bar__button${t.route===`main`?`--disable`:``}`,children:[(0,R.jsx)(`img`,{className:`ie__function_bar__icon`,src:Rr,alt:``}),(0,R.jsx)(`span`,{className:`ie__function_bar__text`,children:`Back`}),(0,R.jsx)(`div`,{className:`ie__function_bar__arrow`})]}),(0,R.jsxs)(`div`,{className:`ie__function_bar__button--disable`,children:[(0,R.jsx)(`img`,{className:`ie__function_bar__icon`,src:Vr,alt:``}),(0,R.jsx)(`div`,{className:`ie__function_bar__arrow`})]}),(0,R.jsx)(`div`,{className:`ie__function_bar__button`,children:(0,R.jsx)(`img`,{className:`ie__function_bar__icon--margin-1`,src:Kr,alt:``})}),(0,R.jsx)(`div`,{className:`ie__function_bar__button`,children:(0,R.jsx)(`img`,{className:`ie__function_bar__icon--margin-1`,src:Gr,alt:``})}),(0,R.jsx)(`div`,{className:`ie__function_bar__button`,onClick:i,children:(0,R.jsx)(`img`,{className:`ie__function_bar__icon--margin-1`,src:Ur,alt:``})}),(0,R.jsx)(`div`,{className:`ie__function_bar__separate`}),(0,R.jsxs)(`div`,{className:`ie__function_bar__button`,children:[(0,R.jsx)(`img`,{className:`ie__function_bar__icon--normalize `,src:Jt,alt:``}),(0,R.jsx)(`span`,{className:`ie__function_bar__text`,children:`Search`})]}),(0,R.jsxs)(`div`,{className:`ie__function_bar__button`,children:[(0,R.jsx)(`img`,{className:`ie__function_bar__icon--normalize`,src:Lr,alt:``}),(0,R.jsx)(`span`,{className:`ie__function_bar__text`,children:`Favorites`})]}),(0,R.jsx)(`div`,{className:`ie__function_bar__button`,children:(0,R.jsx)(`img`,{className:`ie__function_bar__icon`,src:Hr,alt:``})}),(0,R.jsx)(`div`,{className:`ie__function_bar__separate`}),(0,R.jsxs)(`div`,{className:`ie__function_bar__button`,children:[(0,R.jsx)(`img`,{className:`ie__function_bar__icon--margin-1`,src:Wr,alt:``}),(0,R.jsx)(`div`,{className:`ie__function_bar__arrow--margin-11`})]}),(0,R.jsx)(`div`,{className:`ie__function_bar__button`,children:(0,R.jsx)(`img`,{className:`ie__function_bar__icon--margin12`,src:Fr,alt:``})}),(0,R.jsx)(`div`,{className:`ie__function_bar__button--disable`,children:(0,R.jsx)(`img`,{className:`ie__function_bar__icon`,src:Br,alt:``})}),(0,R.jsx)(`div`,{className:`ie__function_bar__button`,children:(0,R.jsx)(`img`,{className:`ie__function_bar__icon--margin12`,src:Bt,alt:``})})]}),(0,R.jsxs)(`section`,{className:`ie__address_bar`,children:[(0,R.jsx)(`div`,{className:`ie__address_bar__title`,children:`Address`}),(0,R.jsxs)(`div`,{className:`ie__address_bar__content`,children:[(0,R.jsx)(`img`,{src:X,alt:`ie`,className:`ie__address_bar__content__img`}),(0,R.jsx)(`div`,{className:`ie__address_bar__content__text`,children:`https://www.google.com.tw${t.route===`search`?`/search?q=${encodeURIComponent(t.query)}`:``}`}),(0,R.jsx)(`img`,{src:Jr,alt:`dropdown`,className:`ie__address_bar__content__img`})]}),(0,R.jsxs)(`div`,{className:`ie__address_bar__go`,children:[(0,R.jsx)(`img`,{className:`ie__address_bar__go__img`,src:Nt,alt:`go`}),(0,R.jsx)(`span`,{className:`ie__address_bar__go__text`,children:`Go`})]}),(0,R.jsx)(`div`,{className:`ie__address_bar__separate`}),(0,R.jsxs)(`div`,{className:`ie__address_bar__links`,children:[(0,R.jsx)(`span`,{className:`ie__address_bar__links__text`,children:`Links`}),(0,R.jsx)(`img`,{className:`ie__address_bar__links__img`,src:Ir,alt:`links`})]})]}),(0,R.jsx)(`div`,{className:`ie__content`,children:(0,R.jsx)(`div`,{className:`ie__content__inner`,children:(0,R.jsx)(Er,{route:t.route,query:t.query,onSearch:r,goMain:i})})}),(0,R.jsxs)(`footer`,{className:`ie__footer`,children:[(0,R.jsxs)(`div`,{className:`ie__footer__status`,children:[(0,R.jsx)(`img`,{className:`ie__footer__status__img`,src:X,alt:``}),(0,R.jsx)(`span`,{className:`ie__footer__status__text`,children:`Done`})]}),(0,R.jsx)(`div`,{className:`ie__footer__block`}),(0,R.jsx)(`div`,{className:`ie__footer__block`}),(0,R.jsx)(`div`,{className:`ie__footer__block`}),(0,R.jsx)(`div`,{className:`ie__footer__block`}),(0,R.jsxs)(`div`,{className:`ie__footer__right`,children:[(0,R.jsx)(`img`,{className:`ie__footer__right__img`,src:zr,alt:``}),(0,R.jsx)(`span`,{className:`ie__footer__right__text`,children:`Internet`}),(0,R.jsx)(`div`,{className:`ie__footer__right__dots`})]})]})]})}var Xr=a.div`
  height: 100%;
  width: 100%;
  position: absolute;
  display: flex;
  overflow: hidden;
  flex-direction: column;
  background: linear-gradient(to right, #edede5 0%, #ede8cd 100%);

  .ie__toolbar {
    position: relative;
    display: flex;
    align-items: center;
    line-height: 100%;
    height: 24px;
    border-bottom: 1px solid rgba(255, 255, 255, 0.7);
    flex-shrink: 0;
  }
  .ie__options {
    height: 23px;
    border-bottom: 1px solid rgba(0, 0, 0, 0.15);
    border-right: 1px solid rgba(0, 0, 0, 0.15);
    padding-left: 2px;
    flex: 1;
  }
  .ie__windows-logo {
    height: 100%;
    border-left: 1px solid white;
    border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  }
  .ie__function_bar {
    height: 36px;
    display: flex;
    align-items: center;
    font-size: 11px;
    padding: 1px 3px 0;
    border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  }
  .ie__function_bar__button {
    display: flex;
    height: 100%;
    align-items: center;
    border: 1px solid rgba(0, 0, 0, 0);
    border-radius: 3px;
    &:hover {
      border: 1px solid rgba(0, 0, 0, 0.1);
      box-shadow: inset 0 -1px 1px rgba(0, 0, 0, 0.1);
    }
    &:hover:active {
      border: 1px solid rgb(185, 185, 185);
      background-color: #dedede;
      box-shadow: inset 0 -1px 1px rgba(255, 255, 255, 0.7);
      color: rgba(255, 255, 255, 0.7);
      & > * {
        transform: translate(1px, 1px);
      }
    }
  }
  .ie__function_bar__button--disable {
    filter: grayscale(1);
    opacity: 0.7;
    display: flex;
    height: 100%;
    align-items: center;
    border: 1px solid rgba(0, 0, 0, 0);
  }
  .ie__function_bar__text {
    margin-right: 4px;
  }
  .ie__function_bar__icon {
    height: 30px;
    width: 30px;
    &--normalize {
      height: 22px;
      width: 22px;
      margin: 0 4px 0 1px;
    }
    &--margin12 {
      height: 22px;
      width: 22px;
      margin: 0 1px 0 2px;
    }
    &--margin-1 {
      margin: 0 -1px;
      height: 30px;
      width: 30px;
    }
  }
  .ie__function_bar__separate {
    height: 90%;
    width: 1px;
    background-color: rgba(0, 0, 0, 0.2);
    margin: 0 2px;
  }
  .ie__function_bar__arrow {
    height: 100%;
    display: flex;
    align-items: center;
    margin: 0 4px;
    &:before {
      content: '';
      display: block;
      border-width: 3px 3px 0;
      border-color: #000 transparent;
      border-style: solid;
    }
  }
  .ie__function_bar__arrow--margin-11 {
    height: 100%;
    display: flex;
    align-items: center;
    margin: 0 1px 0 -1px;
    &:before {
      content: '';
      display: block;
      border-width: 3px 3px 0;
      border-color: #000 transparent;
      border-style: solid;
    }
  }
  .ie__address_bar {
    border-top: 1px solid rgba(255, 255, 255, 0.7);
    height: 22px;
    font-size: 11px;
    display: flex;
    align-items: center;
    padding: 0 2px 2px;
    box-shadow: inset 0 -2px 3px -1px #2d2d2d;
  }
  .ie__address_bar__title {
    line-height: 100%;
    color: rgba(0, 0, 0, 0.5);
    padding: 5px;
  }
  .ie__address_bar__content {
    border: rgba(122, 122, 255, 0.6) 1px solid;
    height: 100%;
    display: flex;
    flex: 1;
    align-items: center;
    background-color: white;
    position: relative;
    &__img {
      width: 14px;
      height: 14px;
    }
    &__img:last-child {
      width: 15px;
      height: 15px;
      right: 1px;
      position: absolute;
    }
    &__img:last-child:hover {
      filter: brightness(1.1);
    }
    &__text {
      position: absolute;
      white-space: nowrap;
      left: 16px;
      right: 17px;
      overflow: hidden;
    }
  }
  .ie__address_bar__go {
    display: flex;
    align-items: center;
    padding: 0 18px 0 5px;
    height: 100%;
    position: relative;
    &__img {
      height: 95%;
      border: 1px solid rgba(255, 255, 255, 0.2);
      margin-right: 3px;
    }
  }
  .ie__address_bar__links {
    display: flex;
    align-items: center;
    padding: 0 18px 0 5px;
    height: 100%;
    position: relative;
    &__img {
      position: absolute;
      right: 2px;
      top: 3px;
      height: 5px;
      width: 8px;
    }
    &__text {
      color: rgba(0, 0, 0, 0.5);
    }
  }
  .ie__address_bar__separate {
    height: 100%;
    width: 1px;
    background-color: rgba(0, 0, 0, 0.1);
    box-shadow: 1px 0 rgba(255, 255, 255, 0.7);
  }
  .ie__content {
    flex: 1;
    overflow: auto;
    padding-left: 1px;
    border-left: 1px solid #6f6f6f;
    background-color: #f1f1f1;
    position: relative;
  }
  .ie__content__inner {
    position: relative;
    min-height: 800px;
    min-width: 800px;
    width: 100%;
    height: 100%;
  }
  .ie__footer {
    height: 20px;
    border-top: 1px solid transparent;
    box-shadow: inset 0 1px 3px rgba(50, 50, 50, 0.8);
    background-color: rgb(236, 233, 216);
    display: flex;
    align-items: center;
    padding-top: 2px;
  }
  .ie__footer__status {
    flex: 1;
    height: 100%;
    display: flex;
    align-items: center;
    padding-left: 2px;
    &__text {
      font-size: 11px;
    }
    &__img {
      height: 14px;
      width: 14px;
      margin-right: 3px;
    }
  }
  .ie__footer__block {
    height: 85%;
    width: 22px;
    border-left: 1px solid rgba(0, 0, 0, 0.15);
    box-shadow: inset 1px 0 rgba(255, 255, 255, 0.7);
  }
  .ie__footer__right {
    display: flex;
    align-items: center;
    width: 150px;
    height: 80%;
    border-left: 1px solid rgba(0, 0, 0, 0.11);
    box-shadow: inset 1px 0 rgba(255, 255, 255, 0.7);
    padding-left: 5px;
    position: relative;
    &__text {
      font-size: 11px;
    }
    &__img {
      height: 14px;
      width: 14px;
      margin-right: 3px;
    }
    &__dots {
      position: absolute;
      right: 11px;
      bottom: -1px;
      width: 2px;
      height: 2px;
      box-shadow: 2px 0px rgba(0, 0, 0, 0.25), 5.5px 0px rgba(0, 0, 0, 0.25),
        9px 0px rgba(0, 0, 0, 0.25), 5.5px -3.5px rgba(0, 0, 0, 0.25),
        9px -3.5px rgba(0, 0, 0, 0.25), 9px -7px rgba(0, 0, 0, 0.25),
        3px 1px rgba(255, 255, 255, 1), 6.5px 1px rgba(255, 255, 255, 1),
        10px 1px rgba(255, 255, 255, 1), 10px -2.5px rgba(255, 255, 255, 1),
        10px -6px rgba(255, 255, 255, 1);
    }
  }
`,Zr=t(((e,t)=>{var n=1/0,r=9007199254740991,i=17976931348623157e292,a=NaN,o=`[object Arguments]`,s=`[object Function]`,c=`[object GeneratorFunction]`,l=`[object Map]`,u=`[object Object]`,d=`[object Promise]`,f=`[object Set]`,p=`[object String]`,m=`[object Symbol]`,h=`[object WeakMap]`,g=`[object DataView]`,_=/[\\^$.*+?()[\]{}|]/g,v=/^\s+|\s+$/g,y=/^[-+]0x[0-9a-f]+$/i,b=/^0b[01]+$/i,ee=/^\[object .+?Constructor\]$/,x=/^0o[0-7]+$/i,S=/^(?:0|[1-9]\d*)$/,C=`\\ud800-\\udfff`,w=`\\u0300-\\u036f\\ufe20-\\ufe23`,T=`\\u20d0-\\u20f0`,E=`\\ufe0e\\ufe0f`,D=`[`+C+`]`,O=`[`+w+T+`]`,k=`\\ud83c[\\udffb-\\udfff]`,te=`(?:`+O+`|`+k+`)`,A=`[^`+C+`]`,j=`(?:\\ud83c[\\udde6-\\uddff]){2}`,M=`[\\ud800-\\udbff][\\udc00-\\udfff]`,ne=`\\u200d`,re=te+`?`,N=`[`+E+`]?`,P=`(?:`+ne+`(?:`+[A,j,M].join(`|`)+`)`+N+re+`)*`,ie=N+re+P,F=`(?:`+[A+O+`?`,O,j,M,D].join(`|`)+`)`,ae=RegExp(k+`(?=`+k+`)|`+F+ie,`g`),I=RegExp(`[`+ne+C+w+T+E+`]`),L=parseInt,R=typeof global==`object`&&global&&global.Object===Object&&global,oe=typeof self==`object`&&self&&self.Object===Object&&self,z=R||oe||Function(`return this`)();function se(e,t){for(var n=-1,r=e?e.length:0,i=Array(r);++n<r;)i[n]=t(e[n],n,e);return i}function ce(e){return e.split(``)}function le(e,t){for(var n=-1,r=Array(e);++n<e;)r[n]=t(n);return r}function ue(e,t){return se(t,function(t){return e[t]})}function de(e,t){return e?.[t]}function fe(e){return I.test(e)}function pe(e){var t=!1;if(e!=null&&typeof e.toString!=`function`)try{t=!!(e+``)}catch{}return t}function me(e){for(var t,n=[];!(t=e.next()).done;)n.push(t.value);return n}function he(e){var t=-1,n=Array(e.size);return e.forEach(function(e,r){n[++t]=[r,e]}),n}function ge(e,t){return function(n){return e(t(n))}}function _e(e){var t=-1,n=Array(e.size);return e.forEach(function(e){n[++t]=e}),n}function ve(e){return fe(e)?ye(e):ce(e)}function ye(e){return e.match(ae)||[]}var be=Function.prototype,B=Object.prototype,xe=z[`__core-js_shared__`],Se=function(){var e=/[^.]+$/.exec(xe&&xe.keys&&xe.keys.IE_PROTO||``);return e?`Symbol(src)_1.`+e:``}(),Ce=be.toString,V=B.hasOwnProperty,H=B.toString,we=RegExp(`^`+Ce.call(V).replace(_,`\\$&`).replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,`$1.*?`)+`$`),Te=z.Symbol,Ee=Te?Te.iterator:void 0,De=B.propertyIsEnumerable,Oe=Math.floor,ke=ge(Object.keys,Object),Ae=Math.random,U=G(z,`DataView`),je=G(z,`Map`),Me=G(z,`Promise`),Ne=G(z,`Set`),Pe=G(z,`WeakMap`),Fe=q(U),Ie=q(je),Le=q(Me),Re=q(Ne),ze=q(Pe);function W(e,t){var n=J(e)||Qe(e)?le(e.length,String):[],r=n.length,i=!!r;for(var a in e)(t||V.call(e,a))&&!(i&&(a==`length`||Ke(a,r)))&&n.push(a);return n}function Be(e,t,n){return e===e&&(n!==void 0&&(e=e<=n?e:n),t!==void 0&&(e=e>=t?e:t)),e}function Ve(e){return H.call(e)}function He(e){return!X(e)||Je(e)?!1:(et(e)||pe(e)?we:ee).test(q(e))}function Ue(e){if(!Ye(e))return ke(e);var t=[];for(var n in Object(e))V.call(e,n)&&n!=`constructor`&&t.push(n);return t}function We(e,t){return e+Oe(Ae()*(t-e+1))}function Ge(e,t){var n=-1,r=e.length;for(t||=Array(r);++n<r;)t[n]=e[n];return t}function G(e,t){var n=de(e,t);return He(n)?n:void 0}var K=Ve;(U&&K(new U(new ArrayBuffer(1)))!=g||je&&K(new je)!=l||Me&&K(Me.resolve())!=d||Ne&&K(new Ne)!=f||Pe&&K(new Pe)!=h)&&(K=function(e){var t=H.call(e),n=t==u?e.constructor:void 0,r=n?q(n):void 0;if(r)switch(r){case Fe:return g;case Ie:return l;case Le:return d;case Re:return f;case ze:return h}return t});function Ke(e,t){return t??=r,!!t&&(typeof e==`number`||S.test(e))&&e>-1&&e%1==0&&e<t}function qe(e,t,n){if(!X(n))return!1;var r=typeof t;return(r==`number`?$e(n)&&Ke(t,n.length):r==`string`&&t in n)?Ze(n[t],e):!1}function Je(e){return!!Se&&Se in e}function Ye(e){var t=e&&e.constructor;return e===(typeof t==`function`&&t.prototype||B)}function q(e){if(e!=null){try{return Ce.call(e)}catch{}try{return e+``}catch{}}return``}function Xe(e,t,n){var r=-1,i=at(e),a=i.length,o=a-1;for(t=(n?qe(e,t,n):t===void 0)?1:Be(st(t),0,a);++r<t;){var s=We(r,o),c=i[s];i[s]=i[r],i[r]=c}return i.length=t,i}function Ze(e,t){return e===t||e!==e&&t!==t}function Qe(e){return Y(e)&&V.call(e,`callee`)&&(!De.call(e,`callee`)||H.call(e)==o)}var J=Array.isArray;function $e(e){return e!=null&&tt(e.length)&&!et(e)}function Y(e){return nt(e)&&$e(e)}function et(e){var t=X(e)?H.call(e):``;return t==s||t==c}function tt(e){return typeof e==`number`&&e>-1&&e%1==0&&e<=r}function X(e){var t=typeof e;return!!e&&(t==`object`||t==`function`)}function nt(e){return!!e&&typeof e==`object`}function rt(e){return typeof e==`string`||!J(e)&&nt(e)&&H.call(e)==p}function it(e){return typeof e==`symbol`||nt(e)&&H.call(e)==m}function at(e){if(!e)return[];if($e(e))return rt(e)?ve(e):Ge(e);if(Ee&&e[Ee])return me(e[Ee]());var t=K(e);return(t==l?he:t==f?_e:ut)(e)}function ot(e){return e?(e=ct(e),e===n||e===-n?(e<0?-1:1)*i:e===e?e:0):e===0?e:0}function st(e){var t=ot(e),n=t%1;return t===t?n?t-n:t:0}function ct(e){if(typeof e==`number`)return e;if(it(e))return a;if(X(e)){var t=typeof e.valueOf==`function`?e.valueOf():e;e=X(t)?t+``:t}if(typeof e!=`string`)return e===0?e:+e;e=e.replace(v,``);var n=b.test(e);return n||x.test(e)?L(e.slice(2),n?2:8):y.test(e)?a:+e}function lt(e){return $e(e)?W(e):Ue(e)}function ut(e){return e?ue(e,lt(e)):[]}t.exports=Xe})),Qr={Beginner:{rows:9,columns:9,ceils:81,mines:10},Intermediate:{rows:16,columns:16,ceils:256,mines:40},Expert:{rows:16,columns:30,ceils:480,mines:99}},$r={Game:[{type:`item`,text:`New`,hotkey:`F2`},{type:`separator`},{type:`item`,text:`Beginner`},{type:`item`,text:`Intermediate`},{type:`item`,text:`Expert`},{type:`item`,text:`Custom...`},{type:`separator`},{type:`item`,text:`Marks (?)`,symbol:`check`},{type:`item`,text:`Color`,symbol:`check`},{type:`item`,text:`Sound`},{type:`separator`},{type:`item`,text:`Best Times...`},{type:`separator`},{type:`item`,text:`Exit`}],Help:[{type:`item`,text:`Contents`,hotkey:`F1`},{type:`item`,text:`Search for Help on...`},{type:`item`,text:`Using Help`},{type:`separator`},{type:`item`,text:`About Minesweeper`}]},ei=`data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABEAAAARCAYAAAA7bUf6AAAAWklEQVR42mNgwA3+Y8FEA7CG//8xMbGGYdWMwzDyDcBnEIokMo1PHN0grBqw2Y7LNQRtJCROcljgCptBbgi2FEsoqimOHazpBJ/ziUpwdEn6RGVCSnMxWeUJAHw0FwbXaXdOAAAAAElFTkSuQmCC`,ti=`data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABEAAAARCAYAAAA7bUf6AAAAVElEQVR42mNgwA3+Y8FEA7CG//8xMbGGYdWMwzDyDcBnEEkG4DIIq9+JFMPuCmINQTaILK8MEUMIGUp04OJLsURHMVoSJxgzVE2xVMs7VMvFZJUnADl0GwKMOgB1AAAAAElFTkSuQmCC`,ni=`data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABEAAAARCAYAAAA7bUf6AAAAZ0lEQVR42q2U0Q4AEAhF+28fn/FgmXuT0taD7B5SEeGmwMM2BaqnR2FQTGB5gAd6AjAQyps6grgAL25Ba4EEXmyDWHJr52kWNPZRyVOPCtOpQgRdnQlCJb5V6mvDlVs/NITVKU79Jx0lUucVtHPCpwAAAABJRU5ErkJggg==`,ri=`data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABEAAAARCAYAAAA7bUf6AAAAbklEQVR42rWUgQ7AEAxEfbo/77ItXcTuziEkjWj14ahSeAtgdnsSIv7mwmAyga0DFOgL1vpOuPs2Cfl7EDo30wNChisqf4KmtGDanIUwfWxIapATey2G4mZQjeUVz+xEPjhHk+2nbxXhbhUv/ScXq9MFJP/q1DsAAAAASUVORK5CYII=`,ii=`data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAK0lEQVR42mNgGAng/38IpkgzWQYgaybZAHTNA+OFIW4AtkAkySCKDRhKAAB8jU+x6ZwbNAAAAABJRU5ErkJggg==`,ai=`data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAL0lEQVR42mNgGIagmuE/XkyRZoKG4FNEtCvIMZwkb1EUmLTVSJFzaRKNZCemIQcA2OFf+6sS8JAAAAAASUVORK5CYII=`,oi=`data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAK0lEQVR42mNgGF7gPxARwhQbQNAQYgynjwEUO5+q/qdfGFAcjTRLA4MbAACQL3uF13XmMAAAAABJRU5ErkJggg==`,si=`data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAJ0lEQVR42mNgGK6g+j8CY+PT1gBsiulnALJCfJh2BpDirZFmwGAGAE2EUrFtzr/cAAAAAElFTkSuQmCC`,ci=`data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAJklEQVR42mNgGF6gmoHhPzGYPgZQ7AWahQFtA5Fu3hvYdMAw/AAAgjlnXUQq77YAAAAASUVORK5CYII=`,li=`data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAKklEQVR42mNgGIaguvo/XkyRZpIMoNj5NPE/VcIAryH4FNHfAJqFw/ADANeOjOlonwSHAAAAAElFTkSuQmCC`,ui=`data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAHklEQVR42mNgGHbgP5GYdgYQazj9DRi1fSCjbggAADl0K9Xj0B5TAAAAAElFTkSuQmCC`,di=`data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAALElEQVR42mNgGH6gurr6Pz5MkWaChuBTRB8DKA4DqgbiwIQBxdFIlUAcegAAKVC5Qc8U50QAAAAASUVORK5CYII=`,fi=`data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAL0lEQVR42mNgGN7gPxD9B1NkaiTLAHTN9HcBVcIA05wBMuA/GiZbI8kGUWzAEAMA9m03yW7foZAAAAAASUVORK5CYII=`,pi=`data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAN0lEQVR42mNgGArgP90N+I9Eo2OiDfyPBxOnGQbIMYRsA/6Tgck2iOwA/E+3WKA4HQxsUiYJAAAf1lyk4ulhiwAAAABJRU5ErkJggg==`,mi=`data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAQ0lEQVR42mNgoAb4D0TkYoIGMNDdAAYkGh1jMxCrCxjwYKJcAFYIBYQMoZ4BDGRgvC4gNhyobwBVYoHidDCwSZlUDABNhnuTt8N6swAAAABJRU5ErkJggg==`,hi=`data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAVklEQVR42tVSQQ4AIAjy/5+mdfBQoTJbh9g8BaSi2Q+AygI4GTJ3ewCp7KPD5KhS7B5OnCBiKEtbBKSrWMhajkYqjRKDNyOkSagJ3MUYENC5wt4pdzAAjVmTbVcYf78AAAAASUVORK5CYII=`,gi=`data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAALElEQVR42mNgGNbgPxomSzMuPu0NIGTgENFMFQOolhYGuxf27t37f2A0AwEAQr8eVaRMnxsAAAAASUVORK5CYII=`,_i=`data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA0AAAAXCAYAAADQpsWBAAAAT0lEQVR42mNgYGD4TwaGMP4TgVE0/SdCIwOqRkwJXBqwavqPww//R5omfBGKVRNMshoHjRFPhDRUY0tGZNlEtp9GUwQl+YnknEtWGUEqBgCfOaw1/D0TFAAAAABJRU5ErkJggg==`,vi=`data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA0AAAAXCAYAAADQpsWBAAAASUlEQVR42mNgYGD4TwZGcKoJ0CiaqonQCML/0W3CpxGm4T82m6px+OE/Nk34NODUNMRtwht6JMfTwKQIkvw0miIoyU+0TxGkYgAPeGy3U1240gAAAABJRU5ErkJggg==`,yi=`data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA0AAAAXCAYAAADQpsWBAAAAWklEQVR42t2SMQ7AIAwD/W8/3h0YKii4SZhgsJTldEpiAFAhbVAgHcQAiB5sgwPxtb0AFztoBjlgCR1ustdL/yndCAVNHCH97MSZyYF0Jl1oQuzcG38qNSKbB3/NoALNu9QgAAAAAElFTkSuQmCC`,bi=`data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA0AAAAXCAYAAADQpsWBAAAASUlEQVR42mNgYGD4TwaGMP4TgVE0VROhkQFVI4SBTyMDpm0IDdU4/PAfmyZ8GnBqGuI24Q09kuOJ/imCZD+NpghK8hPtUwSpGACCn6ACoxe3NgAAAABJRU5ErkJggg==`,xi=`data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA0AAAAXCAYAAADQpsWBAAAAW0lEQVR42uWUOw4AIAhDuXcPXwcHIkF+ow6NwfBsUFBEhANpgGQ9IBZAk7eDCHRydIOXGvgbFD2oC9kT6TjQdgQLOjoCUyd0a0ICureXOfEBp9I8YTK5oz+iqwUjhY35eHHgggAAAABJRU5ErkJggg==`,Si=`data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA0AAAAXCAYAAADQpsWBAAAAWklEQVR42tWSSQrAMAwD9W89fkrpKab1EnrJQWAIw6DYksRGnoFGFogGeL87QhkYgBXio4MzE0n5U02amsZ72roIN01Ek4tORMgFyBtUmTjclH03v+xpfBHTXH/NoALFMh2nAAAAAElFTkSuQmCC`,Ci=`data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA0AAAAXCAYAAADQpsWBAAAAUklEQVR42uWSwQoAIAhD9999/IvolJBm0SE6DAR5jDkliQ31gQUNEAtg2xcLeaABRohJhuI54YR/1UlZp3RPVz+CbCZmEAHwDaTg3Bz3tPURWVX6Rq8pbI7sgQAAAABJRU5ErkJggg==`,wi=`data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA0AAAAXCAYAAADQpsWBAAAAU0lEQVR42mNgYGD4TwaGMP4TgVE0VROhkQFVI4SBTyMDpm0IDdU4/PAfmyZ8GnBqGuI24Q09bLZWo2lEsQmfhmpsyYhsm8j202iKIBDsA5wiSMUAOd99T+GP8TIAAAAASUVORK5CYII=`,Ti=`data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA0AAAAXCAYAAADQpsWBAAAAQklEQVR42mNgYGD4TwaGMP4TgVE0/SdCIwOqRkwJXBqwavqPww//R5omfBGKVRPJ8TQwKYIkP42mCEryE31SBKkYANgvvlDAiYGMAAAAAElFTkSuQmCC`,Ei=`data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA0AAAAXCAYAAADQpsWBAAAAUUlEQVR42mNgYGD4TwaGMP4TgVE0/SdCIwOqRkwJXBqwavqPww//R5omfBGKVRPJ8URWiqgm16ZqUv1UTUAj1tAjZNP/IW4T0fmpmm4pglQMAF22ryk/sMoKAAAAAElFTkSuQmCC`,Di=`data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA0AAAAXCAYAAADQpsWBAAAASElEQVR42mNgYGD4TwZGcKoJ0CiaqonQiMbGLYlDA6pN1Tj8UE2MTfg0jgib/uPBWG36TwSmjk2j8UQtm0jKTyTnXJLLCFIxAO0rYITcR7oGAAAAAElFTkSuQmCC`,Oi=[_i,vi,yi,bi,xi,Si,Ci,wi,Ti,Ei];function ki(e){let t;if(e<0){let n=-e%100;return t=n===0?`00`:n<10?`0`+n:String(n),(0,R.jsxs)(R.Fragment,{children:[(0,R.jsx)(`img`,{src:Di,alt:`-`}),t.split(``).map((e,t)=>(0,R.jsx)(`img`,{src:Oi[e],alt:e},t))]})}return t=e<999?String(e):`999`,e<10?t=`00`+t:e<100&&(t=`0`+t),t.split(``).map((e,t)=>(0,R.jsx)(`img`,{src:Oi[e],alt:e},t))}function Ai(e){let t=[...$r.Game];return t[2].symbol=e===`Beginner`&&`check`,t[3].symbol=e===`Intermediate`&&`check`,t[4].symbol=e===`Expert`&&`check`,{Game:t,Help:$r.Help}}function ji({ceils:e,className:t,changeCeilState:n,onReset:r,openCeil:i,openCeils:a,mines:o,status:s,seconds:c,onClose:l,difficulty:u,openingCeil:d,openingCeils:f}){let p=(0,L.useRef)(null),[m,h]=(0,L.useState)(!1),[g,_]=(0,L.useState)({index:-1,behavior:``});function v(){return o-e.filter(e=>e.state===`flag`||e.state===`misflagged`).length}function y(){if(m)return(0,R.jsx)(`img`,{alt:`ohh`,src:ri});switch(s){case`died`:return(0,R.jsx)(`img`,{alt:`dead`,src:ei});case`won`:return(0,R.jsx)(`img`,{alt:`win`,src:ni});default:return(0,R.jsx)(`img`,{alt:`smile`,src:ti})}}function b(e){e.button===0&&(p.current.contains(e.target)||s===`won`||s===`died`||h(!0))}(0,L.useEffect)(()=>{let{index:e,behavior:t}=g;switch(t){case`single`:return d(e);case`multi`:return f(e);default:d(-1)}},[g.index,g.behavior]);function ee(e){let t=Array.prototype.indexOf.call(e.currentTarget.children,e.target.closest(`.mine__ceil`));e.button===2&&e.buttons===2&&t!==-1?n(t):e.button===0&&e.buttons===1?_({index:t,behavior:`single`}):e.buttons===3&&_({index:t,behavior:`multi`})}function x(e){_({index:Array.prototype.indexOf.call(e.currentTarget.children,e.target.closest(`.mine__ceil`)),behavior:g.behavior})}function S(){let{behavior:e,index:t}=g;t!==-1&&(e===`single`?i(t):e===`multi`&&a(t))}function C(e){switch(e){case`Exit`:l();break;case`Beginner`:case`Intermediate`:case`Expert`:r(e);break;case`New`:r();break;default:}}(0,L.useEffect)(()=>(window.addEventListener(`mouseup`,w),()=>{window.removeEventListener(`mouseup`,w)}),[]);function w(e){_({index:-1,behavior:``}),h(!1)}return(0,L.useEffect)(()=>(window.addEventListener(`mouseup`,w),()=>{window.removeEventListener(`mouseup`,w)}),[]),(0,R.jsxs)(`div`,{className:t,onContextMenu:e=>e.preventDefault(),children:[(0,R.jsx)(`div`,{className:`mine__options`,children:(0,R.jsx)(yr,{items:Ai(u),onClickItem:C})}),(0,R.jsxs)(`section`,{className:`mine__content`,onMouseDown:b,children:[(0,R.jsxs)(`div`,{className:`mine__score-bar`,children:[(0,R.jsx)(`div`,{className:`mine__digits__outer`,children:ki(v())}),(0,R.jsx)(`div`,{className:`mine__face__outer`,children:(0,R.jsxs)(`button`,{ref:p,className:`mine__face`,onClick:()=>r(),children:[y(),(0,R.jsx)(`img`,{alt:`smile`,src:ti})]})}),(0,R.jsx)(`div`,{className:`mine__digits__outer`,children:ki(c)})]}),(0,R.jsx)(`div`,{className:`mine__content__inner`,onMouseDown:ee,onMouseOver:x,onMouseUp:S,children:(0,R.jsx)(Ni,{ceils:e})})]})]})}function Mi(e){return[Qt,ii,ai,oi,si,ci,li,ui,di][e]}function Ni({ceils:e}){function t(e){let{state:t,minesAround:n,opening:r}=e;switch(t){case`open`:return(0,R.jsx)(Li,{mines:n});case`flag`:return(0,R.jsx)(Ii,{});case`misflagged`:return(0,R.jsx)(Fi,{});case`mine`:return(0,R.jsx)(Bi,{});case`die`:return(0,R.jsx)(Pi,{});case`unknown`:return r?(0,R.jsx)(zi,{}):(0,R.jsx)(Ri,{});default:return r?(0,R.jsx)(Hi,{}):(0,R.jsx)(Vi,{})}}return e.map((e,n)=>(0,R.jsx)(`div`,{className:`mine__ceil`,children:t(e)},n))}var Pi=()=>(0,R.jsxs)(R.Fragment,{children:[(0,R.jsx)(Hi,{}),(0,R.jsx)(`img`,{alt:`death`,src:mi})]}),Fi=()=>(0,R.jsxs)(R.Fragment,{children:[(0,R.jsx)(Hi,{}),(0,R.jsx)(`img`,{alt:`misFlagged`,src:hi})]}),Ii=()=>(0,R.jsxs)(R.Fragment,{children:[(0,R.jsx)(Vi,{}),(0,R.jsx)(`img`,{alt:`flag`,src:fi})]}),Li=({mines:e})=>(0,R.jsxs)(R.Fragment,{children:[(0,R.jsx)(Hi,{}),(0,R.jsx)(`img`,{alt:`mines-around`,src:Mi(e)})]}),Ri=()=>(0,R.jsxs)(R.Fragment,{children:[(0,R.jsx)(Vi,{}),(0,R.jsx)(`img`,{alt:`question`,src:gi})]}),zi=()=>(0,R.jsxs)(R.Fragment,{children:[(0,R.jsx)(Hi,{}),(0,R.jsx)(`img`,{alt:`question`,src:gi})]}),Bi=()=>(0,R.jsxs)(R.Fragment,{children:[(0,R.jsx)(Hi,{}),(0,R.jsx)(`img`,{alt:`mine`,src:pi})]}),Vi=a.div`
  position: absolute;
  width: 16px;
  height: 16px;
  border-left: rgb(245, 245, 245) solid 2px;
  border-top: rgb(245, 245, 245) solid 2px;
  border-right: rgb(128, 128, 128) solid 2px;
  border-bottom: rgb(128, 128, 128) solid 2px;
`,Hi=a.div`
  position: absolute;
  width: 16px;
  height: 16px;
  border-left: rgb(128, 128, 128) solid 1px;
  border-top: rgb(128, 128, 128) solid 1px;
`,Ui=a(ji)`
  img {
    pointer-events: none;
  }
  .mine__options {
    height: 20px;
    background: rgb(236, 233, 216);
  }
  .mine__content {
    border-left: rgb(245, 245, 245) solid 3px;
    border-top: rgb(245, 245, 245) solid 3px;
    background-color: rgb(192, 192, 192);
    padding: 5px;
  }
  .mine__score-bar {
    height: 34px;
    border-radius: 1px;
    border-top: rgb(128, 128, 128) solid 2px;
    border-left: rgb(128, 128, 128) solid 2px;
    border-right: rgb(245, 245, 245) solid 2px;
    border-bottom: rgb(245, 245, 245) solid 2px;
    margin-bottom: 5px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 3px 7px 3px 4px;
  }
  .mine__digits__outer {
    width: 40px;
    height: 24px;
    border-width: 0 1px 1px 0;
    border-style: solid;
    border-color: #fff;
    text-align: right;
  }
  .mine__face__outer {
    width: 24px;
    height: 24px;
    border-top: 1px solid rgb(128, 128, 128);
    border-left: 1px solid rgb(128, 128, 128);
    border-radius: 2px;
    transform: translateX(1px);
  }
  .mine__face {
    border-radius: 2px;
    height: 100%;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: rgb(192, 192, 192);
    border-width: 2px;
    border-style: solid;
    border-color: rgb(245, 245, 245) rgb(128, 128, 128) rgb(128, 128, 128)
      rgb(245, 245, 245);
    outline: none;
    &:active:hover {
      border-width: 1px;
      border-color: rgb(128, 128, 128);
      img {
        transform: translate(1px, 1px);
      }
      img:nth-child(1) {
        display: none;
      }
      img:nth-child(2) {
        display: block;
      }
    }
    img:nth-child(2) {
      display: none;
    }
  }
  .mine__content__inner {
    display: grid;
    grid-template-columns: repeat(${({columns:e})=>e}, 16px);
    grid-template-rows: repeat(${({rows:e})=>e}, 16px);
    border-top: rgb(128, 128, 128) solid 3px;
    border-left: rgb(128, 128, 128) solid 3px;
    border-right: rgb(245, 245, 245) solid 3px;
    border-bottom: rgb(245, 245, 245) solid 3px;
  }
  .mine__ceil {
    position: relative;
    img {
      position: absolute;
      width: 16px;
      height: 16px;
    }
  }
`,Wi=e(Zr(),1);function Gi(e=`Beginner`){return{difficulty:e,status:`new`,...Ji(Qr[e])}}function Ki(e,t={}){switch(t.type){case`CLEAR_MAP`:return Gi(t.payload||e.difficulty);case`START_GAME`:let n=t.payload;return{...e,...Yi({...Qr[e.difficulty],exclude:n},e.ceils),status:`started`};case`OPEN_CEIL`:{let n=Xi(e,t.payload),r=[...e.ceils];return n.forEach(e=>{r[e]={...r[e],state:`open`}}),{...e,ceils:r}}case`CHANGE_CEIL_STATE`:{let n=t.payload,r=[...e.ceils],i=e.ceils[n],a;switch(i.state){case`cover`:a=`flag`;break;case`flag`:a=`unknown`;break;case`unknown`:a=`cover`;break;default:throw Error(`Unknown ceil state ${i.state}`)}return r[n]={...i,state:a},{...e,ceils:r}}case`GAME_OVER`:{let n=e.ceils.map(e=>e.minesAround<0&&e.state!==`flag`?{...e,state:`mine`}:e.state===`flag`&&e.minesAround>=0?{...e,state:`misflagged`}:{...e,opening:!1});return n[t.payload].state=`die`,{...e,status:`died`,ceils:n}}case`WON`:{let t=e.ceils.map(e=>e.minesAround>=0?{...e,state:`open`}:{...e,state:`flag`});return{...e,status:`won`,ceils:t}}case`OPENING_CEIL`:{let n=e.ceils[t.payload],r=e.ceils.map(e=>({...e,opening:!1}));return r[t.payload]={...n,opening:!0},{...e,ceils:r}}case`OPENING_CEILS`:{let n=Zi(t.payload,e.rows,e.columns),r=e.ceils.map(e=>({...e,opening:!1}));return[...n,t.payload].forEach(e=>{let t={...r[e]};t.opening=!0,r[e]=t}),{...e,ceils:r}}default:return e}}function qi({defaultDifficulty:e,onClose:t,desktopFrozen:n=!1}){let[r,i]=(0,L.useReducer)(Ki,Gi(e)),a=Qi(r.status,n);function o(e){n||r.ceils[e].state===`open`||[`won`,`died`].includes(r.status)||i({type:`CHANGE_CEIL_STATE`,payload:e})}function s(e){if(!n)switch(r.status){case`new`:i({type:`START_GAME`,payload:e}),i({type:`OPEN_CEIL`,payload:e});break;case`started`:let t=r.ceils[e];if([`flag`,`open`].includes(t.state))break;t.minesAround<0?i({type:`GAME_OVER`,payload:e}):i({type:`OPEN_CEIL`,payload:e});break;default:}}function c(e){if(n)return;let t=r.ceils[e];if(t.state!==`open`||t.minesAround<=0||r.status!==`started`)return;let a=Zi(e,r.rows,r.columns);if(a.map(e=>r.ceils[e]).filter(e=>e.state===`flag`).length!==t.minesAround)return;let o=a.find(e=>r.ceils[e].minesAround<0&&r.ceils[e].state!==`flag`);o?i({type:`GAME_OVER`,payload:o}):a.forEach(e=>i({type:`OPEN_CEIL`,payload:e}))}(0,L.useEffect)(()=>{r.status===`started`&&u()===0&&i({type:`WON`})});function l(e){i({type:`CLEAR_MAP`,payload:e})}function u(){return r.ceils.filter(e=>e.state!==`open`).filter(e=>e.minesAround>=0).length}function d(e){n||[`died`,`won`].includes(r.status)||i({type:`OPENING_CEIL`,payload:e})}function f(e){n||[`died`,`won`].includes(r.status)||i({type:`OPENING_CEILS`,payload:e})}return(0,R.jsx)(Ui,{...r,onClose:t,changeCeilState:o,openCeil:s,openCeils:c,onReset:l,seconds:a,openingCeil:d,openingCeils:f})}function Ji(e){let{rows:t,columns:n,mines:r}=e;return{rows:t,columns:n,ceils:Array(t*n).fill().map(e=>({state:`cover`,minesAround:0,opening:!1})),mines:r}}function Yi(e,t){let{rows:n,columns:r,mines:i,exclude:a}=e,o=t.map(e=>({...e}));if(n*r!==o.length)throw Error(`rows and columns not equal to ceils`);return(0,Wi.default)([...Array(n*r).keys()].filter(e=>e!==a),i).forEach(e=>{o[e].minesAround=-10,Zi(e,n,r).forEach(e=>{o[e].minesAround+=1})}),{rows:n,columns:r,ceils:o,mines:i}}function Xi(e,t){let{rows:n,columns:r}=e,i=e.ceils.map(e=>({...e,walked:!1}));return a(t);function a(e){let t=i[e];return t.walked||t.minesAround<0||t.state===`flag`?[]:(t.walked=!0,t.minesAround>0?[e]:[e,...Zi(e,n,r).reduce((e,t)=>[...e,...a(t)],[])])}}function Zi(e,t,n){if(e<0||e>=t*n)return[];let r=Math.floor(e/n),i=e%n;return[e-n-1,e-n,e-n+1,e-1,e+1,e+n-1,e+n,e+n+1].filter((e,a)=>!(r===0&&a<3||r===t-1&&a>4||i===0&&[0,3,5].includes(a)||i===n-1&&[2,4,7].includes(a)))}function Qi(e,t){let[n,r]=(0,L.useState)(0);function i(){r(e=>e+1)}return(0,L.useEffect)(()=>{let n;switch(e){case`started`:t||(n=setInterval(i,1e3));break;case`new`:r(0);break;default:break}return()=>clearInterval(n)},[t,e]),n}var $i={File:[{type:`item`,text:`Create Shortcut`,disable:!0},{type:`item`,text:`Delete`,disable:!0},{type:`item`,text:`Rename`,disable:!0},{type:`item`,disable:!0,text:`Properties`},{type:`separator`},{type:`item`,text:`Close`}],Edit:[{type:`item`,disable:!0,text:`Undo`,hotkey:`Ctrl+Z`},{type:`separator`},{type:`item`,disable:!0,text:`Cut`,hotkey:`Ctrl+X`},{type:`item`,disable:!0,text:`Copy`,hotkey:`Ctrl+C`},{type:`item`,disable:!0,text:`Paste`,hotkey:`Ctrl+V`},{type:`item`,disable:!0,text:`Paste Shortcut`},{type:`separator`},{type:`item`,text:`Copy To Folder...`,disable:!0},{type:`item`,text:`Move To Folder...`,disable:!0},{type:`separator`},{type:`item`,text:`Select All`,hotkey:`Ctrl+A`},{type:`item`,text:`Invert Selection`}],View:[{type:`menu`,position:{left:`calc(100% - 4px)`,top:`-3px`},text:`Toolbars`,items:[{type:`item`,symbol:`check`,text:`Standard Buttons`},{type:`item`,symbol:`check`,text:`Address Bar`},{type:`item`,symbol:`check`,text:`Links`},{type:`separator`},{type:`item`,symbol:`check`,text:`Lock the Toolbars`},{type:`item`,text:`Customize...`}]},{type:`item`,symbol:`check`,text:`Status Bar`},{type:`menu`,position:{left:`calc(100% - 4px)`,top:`-3px`},text:`Explorer Bar`,items:[{type:`item`,text:`Search`,hotkey:`Ctrl+E`},{type:`item`,text:`Favorites`,hotkey:`Ctrl+I`},{type:`item`,text:`History`,hotkey:`Ctrl+H`},{type:`item`,text:`Folders`},{type:`separator`},{type:`item`,text:`Tip of the Day`}]},{type:`separator`},{type:`item`,text:`Thumbnails`},{type:`item`,text:`Tiles`,symbol:`circle`},{type:`item`,text:`Icons`},{type:`item`,text:`List`},{type:`item`,text:`Details`},{type:`separator`},{type:`menu`,position:{left:`calc(100% - 4px)`,top:`-3px`},text:`Arrange Icons by`,items:[{type:`item`,text:`Name`},{type:`item`,text:`Type`,symbol:`circle`},{type:`item`,text:`Total Size`},{type:`item`,text:`Free Space`},{type:`item`,text:`Comments`},{type:`separator`},{type:`item`,text:`Show in Groups`,symbol:`check`},{type:`item`,text:`Auto Arrange`},{type:`item`,text:`Align to Grid`}]},{type:`separator`},{type:`item`,text:`Choose Details...`},{type:`menu`,position:{left:`calc(100% - 4px)`,top:`-3px`},text:`Go to`,items:[{type:`item`,disable:!0,text:`Back`,hotkey:`Alt+Left Arrow`},{type:`item`,disable:!0,text:`Forward`,hotkey:`Alt+Right Arrow`},{type:`item`,text:`Up One Level`},{type:`separator`},{type:`item`,text:`Home Page`,hotkey:`Alt+Home`},{type:`separator`},{type:`item`,text:`My Computer`,symbol:`check`}]},{type:`item`,text:`Refresh`}],Favorites:[{type:`item`,text:`Add to Favorites...`},{type:`item`,text:`Organize Favorites...`},{type:`separator`},{type:`menu`,symbol:`folder`,position:{left:`calc(100% - 4px)`,top:`-3px`},text:`Links`,items:[{type:`item`,text:`Customize Links`,symbol:`ie-paper`},{type:`item`,text:`Free Hotmail`,symbol:`ie-paper`},{type:`item`,text:`Windows`,symbol:`ie-paper`},{type:`item`,text:`Windows Marketplace`,symbol:`ie-book`},{type:`item`,text:`Windows Media`,symbol:`ie-paper`}]},{type:`item`,text:`MSN.com`,symbol:`ie-paper`},{type:`item`,text:`Radio Station Guide`,symbol:`ie-paper`}],Tools:[{type:`item`,text:`Map Network Drive...`},{type:`item`,text:`Disconnect Network Drive...`},{type:`item`,text:`Synchronize...`},{type:`separator`},{type:`item`,text:`Folder Options...`}],Help:[{type:`item`,text:`Help and Support Center`},{type:`separator`},{type:`item`,text:`Is this copy of Windows legal?`},{type:`item`,text:`About Windows`}]},ea=`data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABoAAAAaCAYAAACpSkzOAAAEwElEQVR42tWVe0zVdRiHrdZqy2U4aWJeADcZKoiAQ7JNVhKCCpShoPBHpqkT81ZaIiBOBT0mKghCipCEIBOKg0cOh4tcBA6XuESAwDmHw+FyRAVFEbmdp5/mbKzEa1t9t+ff99n7fj9731Gj/qvPK2olZvtnIpIe5F+T7Ez+lnf2jGZMyBuMCxiDQ4j9y5eFZYZicXQm+hFvYZSgh1nSeExO6WOwUx/f5F0vT+h2+lPGBQuSeD3Mfx7P3NSJfCydir3YGOtwQ+aJbPgxL0b5QpKNcd5MCTbAMPZPie2FSTjIpuKSbYJX4Sw8c8xZlGSKbegMNsavf77uQjNCsA6xYPIPesxIfBfr5Al8lGaE60PJ6mJL3NKnYx3xHob79JjsY8CycDfE5WK7EQu3yn24T8tDPjlkjb7PWKYdMsQmbBaWYdOYGzsRzwJz1pRY8aXABzHGhOYfJK44uj06/yRJxecCRpS0FPnQJt9OV/1xbjZGclMRTGzGDvbHuxOa+h0x+afZkrAO88Nj8cg2Y22pNd6VtliGT3m2cTWlOdJzTcLQQAY6XQ4gob83ixuN0bRXHKO9KhyxbBNuJ01xFps+kGytnf/sIk2mCwzKBEHEX+jiudeVQGfdLq6WraChYhVRRStxSjZlW50dOxoXYHXCkMKSYLS1cXH3ebIoywmGooTiJ4YzdFrgFLqhMPp7ROTWrMJRSNl9iV/zIqxPGJErcUWT5Ulr3jrUBdvQ1id99VhRs8we7oUJHPsbQ71H6OvaK/zfBi6kObDw/HT8NYsJaHMREmdEZX0idzqK6bujoblgC8r8rY8fp0piBx3HBfYypA1goM2XgdZdD7ir2EJHyXKuVflRpE5mScosAtpdONC1XBidMVc6KoRR3+W2Ng9llheqIr9/Ft1Up+opU2zQNR1Ap9xJV8kK1NL3UUmsHmLJ9ep9QlCqKG4LwkU8W5C4I7rlgZXIhCtXc4QAtaDKWoZa7j9yOBqTLNDV+NIj90RT4E1vl5zBvjKBHAGpIBELxZIfiYI63fn88nx2/OREW2e68H85KGQLURfvf7yI0ojX6xNMGCzfSqt4Dt2t6Qz2JwrjOCMQIyAEglM0dQRxJOszXFNns0e7HLPvJ1FWupl7d6WoLrkK3fg+Oeq1cYb0lnijTJlH3+0idP3RMHB8GNLfvFkab8X2BmcWn7dk9y9OdCn8GOw5S7N8LdorSWtGlID/q7/HGtBdtJ6Wwq8ZvC2BnnCB4EeoW/wRyVyZF2XCslQbYUvMR6n2YUC9G02uI5rywCd3I8zllcpoPa7letGtSWOoMxI6RQJBj0iXr8ZF2NC2h40JFC+krMob3Y1ABhq2UXN2AprqpzgTcO618qjRaGTODHTXoGsLhNbdw8jI82JTpCWiM3Mov+TM9ZKltF92pDXTnsZ0t6dfQ79GvU1Tpjt05YHSj6GGb+ir3UhP5RfcKvWgSvoh2Uk2KDIcUGcsoTFtMfVSNxoubQBV9ptPLao4MwFtpYie2r3cknvQmeeMNtuJZpkjCskC6sR21ElcUORtRlMRSltjiuNzHbnK2Ml01ESiuriAWiFR1YkW1F1ciqrQl9bqFzzTwzuaSGWcCc3lR9EqLpiN+j++PwBbsefO+2FUcAAAAABJRU5ErkJggg==`,ta=`data:image/x-icon;base64,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xP8QPfn/ADP//xA9+f8AM///r5++///Rov//0KH//9PA/11BQe0AAACDAAAAEgAAAAAAAAAAcnJy//fo2v+/rcH/IEby/6+lyv/fwLX/ED35/yBG8v/vyKr//9Gi///Uwv9fRETtAAAAgwAAABIAAAAAAAAAAHJycv/4693//9au///WrP//1av//9Sq/4CD1P8AM///gILR///RpP//1cX/YUVF7QAAAIMAAAASAAAAAAAAAABycnL/+e3i///Xr///1q7//9as///Vq///1Kr/IEby/wAz///fv7L//9fI/2NISO0AAACDAAAAEgAAAAAAAAAAcnJy//rw5///2LH//9ev///Wrv//1qz//9Wr/7+sv/8AM///n5bG///Xyv9mSkrtAAAAgwAAABIAAAAAAAAAAHJycv/77uL//8yZ///Mmf//zJn//8yZ///Mmf//zJn/z6+s///Mmf//z8P/Z0xM7QAAAIkAAAASAAAAAAAAAABycnL//Pz8//////////////z5///58f//9u3///Ln//3u4P/759P//8Sz/2pOTu8AAACJAAAAGAAAAAAAAAAAcnJy//39/f///////////////////Pn///nx///27f/RmVz/0Zlc/9GZXP+6cg3/AAAAMAAAAAAAAAAAAAAAAHJycv/+/v7////////////////////////8+f//+fH/0Zlc/9GZXP+6cg3/AAAAMAAAAAAAAAAAAAAAAAAAAABycnL///////z8/P/5+fn/9/f3//X19f/y8vL/8O7s/9GZXP+6cg3/AAAAMAAAAAAAAAAAAAAAAAAAAAAAAAAAioB2/5KFef+Pg3j/jYB2/4t/df+JfHT/hnlz/4R3cf+6cg3/AAAAGAAAAAAAAAAAAAAAAAAAAADAAAAAwAAAAMAAAADAAAAAwAAAAMAAAADAAAAAwAAAAMAAAADAAAAAwAAAAMAAAADAAQAAwAMAAMAHAADADwAA`,na=`data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAAFiUAABYlAUlSJPAAAAOLSURBVDhPNdJrTFt1GAbwM53xiyaaCAlJV7dummic8YYfNLpkSuo3dSOxM45hKtqMViCb4JybRIyUbAzDksnQ0hu0A9YB6YABtuta2lLKoOtgo+MyWgqsXalwCm1HL49vu/gmvy/nnOc557z5M7VS6bNnGv98q0HWyW9o1h5quKA4elHZe0LVbm7QXjJeqamRCuVyuUiv11c2NTUVFhQUvMAwzHbyeNSaS380jkTi5+yJtHIsjfZxoIcMuQD7JNChcwRn7oXS6TRgMpm8HA7nI4o9T7ZlC1RKZWWY3cD5m0mcsaYgG45DYWCh7g+hrXsFpuEQgkEgHE7jwIGD1ynyHeGSJzJ5pqysLH9+Znrr2vA0jlf3orpGj/r6IchbrOjQOuEa8yC+HkTA74NEIvbk5uaKKZZHHn+BWCzec9vtjt1fWoXdtYi1BwEEAiF4lwLw+JZxdXIF1QNelPcsoPibijkul1dFsR3kyWxBVVXVbuM/A1HbrWlU2IFfnQn8OLwF0fUkPuuO4fDFKTT1+XDZuILGxkG2qKjWwePl8yn6DNnGnDrxA+83rTUq7V9EpRkoGgBEJtKXRG2rG0H/Q0RZYG4GGKfl9tH18vIrvp073/g4W3KqsoL3rXoi+nknC40b+MsRhdo8hxaNE+HAKjKztga4ncBVPaBSA3J5khZ6MrPQ15my7yW8Qaszqr8XRZd7E5u6r5G48B4sSi3YTSCRoIYIMGtk4byRQosc0FORVGqKUcERprRUzHOOWKPBYBj62Qh6Fw5jVPMurrXZcHMCmJ8D7k/50awexJhzFU7a0ahzC21t40kqqGFEIhHPYjZHff4QjN4ISpcP4rUeLmS6EYw5gFFyy76Mrm47/Avr2NiMg92Io1VjSlDBOaakpIRnMBiiXt8DOJbWsd/yJp5WMDguk8PQDyiUwGAP4BpKIka/8v8UF/+0SAW1jFAo3N3d1fVoYmIStx+u4SXdLuzqeAXC5r/RKqMCBXBZBxiMyJ7IzFgsU6m8vJeHqEDECASCHSqVcn1y6i7YFHCH9cEbeQTZjTBO/25Ld7bHYLMBHg8QCqUpfCe1d+9+F4XryQdMTk7OU3w+/8u6urpZrbb939M//7IkEBy6+/Y7+Vbui3v69n341YhIdHb+2LHz/sJCiYfDeTXz5rPkU5JLsmf6ObKPSMhJUk6OkMxDn5AvyFGSuV9E3icUZrb/B8LtcGMJbZn4AAAAAElFTkSuQmCC`,ra=`data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAAFiUAABYlAUlSJPAAAAMkSURBVDhPZdJ9TMxxHAfw33WVaDt3pFjs2LCO3EJZrY4UucplOSF5OsXZPC2V0zLyLKO5yzNrZiNDzeOxOKE6nBPHzWWFHlWXWq7c1ZXePpdltT7b64/f9n5/fr99f1+mf+aGhrgsiY0aHTh7xqxoSYR0ZaJMIZVvvyZNyyr1F4XvowiPOPeFB86CyOiEjXsO3ko8dL5Mll3QLM1+2rXw5Fv4HfwIbooJzls+gx+wWOeIEm5faeDsUOZ9FWbVwVVuAJOgAyMtARNbBO6a5xBnvEbQbj08hVHVFJWTcYTl6P2fZemXDNwkHYKTi7H5tAHn7lfiRVkjqpps6O4FcgqbwBVE1FE0mYwngxeI5VmvF+19D3unHf1DPfw0G9FYX4zj6jbwBBENFN1Jhi5YsH7/s7A979Hd3dNXtnRSuQuo/HQDVTV65Gg6MEYQaaZoKpkQHK8Yr+KPSsp0YvzpeRgTsmLnw0BFGdosXbD9AZqtQK2lB0bdGXxttUL52Axnn1Vm1qTwHKGi5Orpc9dbDPF+UI12VtOCaUxQ7OZ8322vUGu2otVqQx0t+FJjgqEoFbpmYNfNGkiOaHvOatuh0nYiUVnYsSnAv8zH3f0CLZAwc6JluVPkxTDVd6KyJAWfTU9h/JAHXaECBy7dQKbajJw3dgTvK21jByu0TryJuVQ8SpKIHzN74XIVX6ZB6RcrvjeU490dCQy3RcjTFCJNqcSGi0aMDM1oZ1zc71DhMFlJAog3GcHMnBdzwHv1Y6jftaCiHdCb9NAVxOBuhR0JL4F09W94+6/9xWKxTlFhLvEgw8i/vyEULVJ4xD3A9ReNMP4ESmqBokoLNNXAEQOwJr8bXkHJNlcXlxMUn0qc+or94xsi3s6JycflJ/Uo7wC0DcC9CiDr0S9IMnXwicvt9RaEmdlsp2MU9yGDF0wPDNvgFnUTiivfcPzuDyzJKMa0pRd6vYTxllFjJ5dzOBwNlR0n7ji0oRdJ4DdH7BG6t9ZTKPvB44tqeF6TjVR6wmazHaedSdaRUDKJuJEhM5w4btU2kk62kngynzg+2ZOMIGwy+O0Mw/wFjSehlD+JWOoAAAAASUVORK5CYII=`,ia=`data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAAFiUAABYlAUlSJPAAAANoSURBVDhPZZN9TBRkHMcfA3T9wSabLe/UutnrxtyU1oJDiMw5GeofRJgXahouwzemrrOUlZLV5DiQt07ohZdjHEKEB3Ei43hHuDtAU8Dj8HgrKk4Q2KjNNT89R7c11nf77vdsz77P7+37CC8csLLg1+bCbyavzKa6stjXtZ9NpryOF77s36USUcuNxrqohvq+RKt1MLuy0tZmMDTNJu7PfDNYBAcsio/1nriVMZbM9YUqiqZyye1LocRu5cebozQ22jGbOykubeLr0mbyGwZIr7nHtvBks9Jf/Zo41t5RuKPpRVJd+zB6crg6Uc7w8AgZpXXk1tkwOu5zY3IG+2NofQQ/PISc+4+IjU51KQJCY0VIztjsc0WHiW/fwIc9ESTf/o6Ou+N8ZpsmcwxKpsA8D5YFqJ6Dwj9ANwJv70wblxUcFy9fHGT5hXJUZc8QXPU8ytJRPq+fRNfl4bwTLstHCibh+98hX0b9KKQMwoGPfnqo8Av7VKhOdSMO2RFnenlCt41l+mfZml1FXttvHL8FZwcgdQguuuCCjB/3w9E+0Jy0zCr8wwxCdbTZImKuIfY0IZLOIrSCoKTDFFvH0XRCoh2O9P4rSpLxoA12t0NC7gSyhRIRkv5zZGB0xV9+kUYCYr4iMGELy+S5sMTG1gbY2QRvtUJcG8TKuMMK26//TeIlF7KCNuHd5eotGQfWv9s4v3lvJaF7qgnXNPPFZTuRZXO8WgPqOtgs+UHDn5w3jaM9bVl4/ZVPhhT+6vpFIz0lop5U+IW+sTL4VEWQ6lBn0Jr3ut6Ju+SKLnpA6LXHpHUskH/VjVbbjUbTyKb1u+/I7Nmr/UP3Lj7ghbeStSvC1sqLsBBVfMy3V6w3CowD1NS4KCu7TVZWH8nJjkUmxKf/smHNroNPC3WQT/4fvNatrektnpubw+l8wMzMDENDbunGfvT6HnQ6BxkZLWhPGnuUAREv+WRLYTbbZqenp5mfn8fj8UhnumltvUdt7R1MJgd5eS2cO1M+rfRTn/NJliJTX61zOoeZmJjA7R6hv99FS8sAg4PDsp1mDIY2aeWUMaWcg0+yFLKNwNjt2hx9mmnKYrHJOXRTWXlTZm7k9ImCmYiN79+VG6iQPjjik/wf60T4KmWAOs7rNu++Jbt9bJHM9H6kdSJ81T9StzGUlLxGXgAAAABJRU5ErkJggg==`,aa=`data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAAFiUAABYlAUlSJPAAAAFzSURBVDhPrZJPKERRFMbvm5dkUkpJIRpEJInNZGtta2s3kkhqSkRDJpE/0ZCRNCVFSmpMpBGpSTI7lhZWs7GwUew+9zs3jd5Mz0w59fV6753zu+d856r/DsuhwiMd7cHjTjcetrtwH+mE/uTT8srPv4LFzrhbbyPEr0WIs7Nsd9niqEPA9XIzrhZ9uFioR2K+DvFQDc5mqn+6KxMA28bnBvCxlqs8cTpdBdu2g7q0UctSnBlvYSATQmqzI69uV1uRXGrCZbgB53O10gmlAT5Fw/A6JYkFhT6IcTDuNZ1I4fMYjBdOH3L1lRqUZ2y0lICIottIB2SFkkQ/XPSeHJC8/ZESArYU5yPAjKAB9MNFmXi/5O0N2wbAVRFws9JiANoPN70c90ne7pBlANwzAXRYANoPNz3FeiUvGlDGA67i9yXhnk8mK3EUrMDhRLm4TcM4M9vmySz2eDwJDZglgFfVzxe2VIRYzKsuQQivZ3sR0vnK+w1PJ+slDj8IHAAAAABJRU5ErkJggg==`,oa=`data:image/png;base64,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`,sa=`data:image/png;base64,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`,ca=`data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAAFiUAABYlAUlSJPAAAAUxSURBVFhH7Zd5bFRVFMbviMoiAbQKqCghFsKiBNCIsbFBdgygoGJqZJEgkCAIsskiQZTKUirIUkVpQJAitGWpLS2LQ5kutrQs0zKdqUMbh+GZ0RFkoDTDTPn8zmuBdmhLGUPiH3zJLy957879zj333nPvqHv6P8pwnax1qsOR1ap/6go1aNlE1Zbv7q/6dneUG6O2WJJHZlqT+l10ZE2HlrcYF0p3w6MZkb4h5DibdCRN9ca160bw1WiYONq+2rEFQIWb/A5cyyUmAHv5PA2PMw1zI9Q2NpUg9ExkrFW9folWA0xfq8j0NSrGHB+Wad034KwjYwrMO19wss3TpAm5vfJjHz3qv3yWhtvIt7fic6Akc6E368fBFlvqW04tdx5cJ5fB40iG9/xxwG8npxh8FgPeA3taGNjtVCJB1J8JmWstZzZN8mo3F65t5feiSvzMTEUq3yXyW+ytbYktqZMEsIZ0JvUHwIX2tqdkJzuNr7WzYKgKYD3pRm4s6K3z9YAelHekUinL1GDPme3A1R0c3Yag8V9ZxbUyA27rWJi3hyDhy4e1EwlD7NcXtCzmw9FKFrME0Uw3FyVFqiGe3zYDl7cAZV81mDLnbNj3d4d27AOUGsfV2DU3dY1UED/8XjdiZqgiWr5PHieVWZAMuHJmAe4Y4K+lDaLMPhWOzMm6BaMhl8jf5A9yDrB9weflGrjMyxH6pEqh5QTSmtwMQDNN4G/XA85FdVJmmYQL+e9AM/aBI0PM/cRGuPoDsX3Gp6sGu5a3P0+7GBJOatSTplr6OMCxEShmJqpwm15DadJz0DLG3EixpNfrKWWHPnKMHKkd20I+WU+qcNtWYcQrKpdec0kHUmNnNNLSRwMla4GCqTpaSm+mjHOt6x/CtMJCcoiYJNWPbR6f0r6So7FdyumzmQwjLcW0ugyaMQKwRgF5E3Ucxvf4Q5nXBMIacKfYWFfAAkU82ncYM1Cdos8S0oVIJa0hgy2+GyosS+H7dSw8xmFVozeT2vf5bbHN5FNKuQkF+8J9IS3ULvqMIo/ojgEyFO3s6qmwrkR5xig49/aonGcf68LVdcFh/ZjmB9nPVsyJUHZ6rCQ9yQNiGCiDOa5njr9ouT76M0nh3L4XgSurg8cynQHs5eLtK1svmR7jSRvxEsNAGQp39Mj2FSzGn/vD9NUObwHX3orgOf0RC88mrJnR/Bz7X0deJnWejIb82DbZ3lPzULIrFGXuE4CH54I7MngKp3Egr6NfL2Vi/9PIU+IjZrVJzvbsqyfnojixBytnOaAxC/8Br3UK4pY0k8KzkQwkzcWoLhkORqnv/cyAHBy4wr3rYCG5A/wls3AhbxQcB3rDEtcWiUvUpZHhKpt9zyGhpJEY1SXDgSgV5T48VD9M4PoJsM+pF2/hZLgzKiul+YeW2LZAnf/kXVXc/3llZH9ScNYSqXp9yC2FJ1CGQ6vUSsfPYVy5VDGvZrKNqlGWPxquw6/CnhCKzA1NfBtnKteHI1Thi51VKn+/icjlYz4ZRwaQ7qQ9EfN6Ry8y8G63wmGaxEOrWC/Fnsw3oe3vDduOdjgU3bg8eopyjh2k8ju2U3vYXuZV9vVMEkFklM8SMXyMPETEtM5FFyg9AHvaGyhNG6bP3+fjVSnnMKtTO7Wb378hkUTueCOJbCm5VMjKDiFyst1HxLDBptVliPtUDZ88XC1q3Uq/Rsm+XUwmkqHkJdKJPEFakcYkaLO6JFekriSMSMl8hsifkRbkrhgGSlIolUrSef0f0F01vCellPoXiVdrMa6zZZsAAAAASUVORK5CYII=`,la=`data:image/png;base64,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`,ua=`data:image/png;base64,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`,da=`data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABMAAAATCAYAAAByUDbMAAABTUlEQVR42r1US07DMBDNdVixZMMBcgyOwTV6CBbZoYLUqojSuKUIFj1AVSmlrUBKk9KGEOfnGE9So4Cd2giJkUaxo8zze28mNoz/iA5anP0ZpLcHQQ/OF9h6E1quF5b7x8nqWI+N7ZzzdYRTKgtCCloeOpgiLVAoUMV2h+mNPbMOAmU5EQqN0wspIJNeKmnfzkWW4IsMiGc9CkaeFJVkIfqjmZWkuRTo55qDgQpe3x275jfAJiDZO2CVZIS6fmhK2TWZLfMsZ02KmRI+MtrmN0n8iDPa2ElvEyIdz0AisAqilCpmrDr5kGfg1TsD8t6i1vDJET3rDJ5bdbk8gQVP2OOkYuTtMNL+R6MkKz2BJ18DGz/AwXqLhcnvjn1TCeoH8RQSmIAs2TeX/eWJNsshuykg72o3ya9YXdkLS3UIMBImXxXX9suR0LD7V4HlJ2GeRKYqB6UhAAAAAElFTkSuQmCC`,fa=.95;function pa({onClose:e}){let[t,n]=(0,L.useState)(``);function r(){N(F(`/sounds/Windows%20Navigation%20Start.mp3`),fa)}function i(e){n(e)}function a(e){n(e),r()}function o(t){switch(t){case`Close`:e();break;default:}}return(0,R.jsxs)(ma,{children:[(0,R.jsxs)(`section`,{className:`com__toolbar`,children:[(0,R.jsx)(`div`,{className:`com__options`,children:(0,R.jsx)(yr,{items:$i,onClickItem:o})}),(0,R.jsx)(`img`,{className:`com__windows-logo`,src:qr,alt:`windows`})]}),(0,R.jsxs)(`section`,{className:`com__function_bar`,children:[(0,R.jsxs)(`div`,{className:`com__function_bar__button--disable`,children:[(0,R.jsx)(`img`,{className:`com__function_bar__icon`,src:Rr,alt:``}),(0,R.jsx)(`span`,{className:`com__function_bar__text`,children:`Back`}),(0,R.jsx)(`div`,{className:`com__function_bar__arrow`})]}),(0,R.jsxs)(`div`,{className:`com__function_bar__button--disable`,children:[(0,R.jsx)(`img`,{className:`com__function_bar__icon`,src:Vr,alt:``}),(0,R.jsx)(`div`,{className:`com__function_bar__arrow`})]}),(0,R.jsx)(`div`,{className:`com__function_bar__button`,children:(0,R.jsx)(`img`,{className:`com__function_bar__icon--normalize`,src:ea,alt:``})}),(0,R.jsx)(`div`,{className:`com__function_bar__separate`}),(0,R.jsxs)(`div`,{className:`com__function_bar__button`,children:[(0,R.jsx)(`img`,{className:`com__function_bar__icon--normalize `,src:Jt,alt:``}),(0,R.jsx)(`span`,{className:`com__function_bar__text`,children:`Search`})]}),(0,R.jsxs)(`div`,{className:`com__function_bar__button`,children:[(0,R.jsx)(`img`,{className:`com__function_bar__icon--normalize`,src:ca,alt:``}),(0,R.jsx)(`span`,{className:`com__function_bar__text`,children:`Folders`})]}),(0,R.jsx)(`div`,{className:`com__function_bar__separate`}),(0,R.jsxs)(`div`,{className:`com__function_bar__button`,children:[(0,R.jsx)(`img`,{className:`com__function_bar__icon--margin12`,src:oa,alt:``}),(0,R.jsx)(`div`,{className:`com__function_bar__arrow`})]})]}),(0,R.jsxs)(`section`,{className:`com__address_bar`,children:[(0,R.jsx)(`div`,{className:`com__address_bar__title`,children:`Address`}),(0,R.jsxs)(`div`,{className:`com__address_bar__content`,children:[(0,R.jsx)(`img`,{src:at,alt:`ie`,className:`com__address_bar__content__img`}),(0,R.jsx)(`div`,{className:`com__address_bar__content__text`,children:`My Computer`}),(0,R.jsx)(`img`,{src:Jr,alt:`dropdown`,className:`com__address_bar__content__img`})]}),(0,R.jsxs)(`div`,{className:`com__address_bar__go`,children:[(0,R.jsx)(`img`,{className:`com__address_bar__go__img`,src:Nt,alt:`go`}),(0,R.jsx)(`span`,{className:`com__address_bar__go__text`,children:`Go`})]})]}),(0,R.jsx)(`div`,{className:`com__content`,children:(0,R.jsxs)(`div`,{className:`com__content__inner`,children:[(0,R.jsxs)(`div`,{className:`com__content__left`,children:[(0,R.jsxs)(`div`,{className:`com__content__left__card`,children:[(0,R.jsxs)(`div`,{className:`com__content__left__card__header`,children:[(0,R.jsx)(`div`,{className:`com__content__left__card__header__text`,children:`System Tasks`}),(0,R.jsx)(`img`,{src:da,alt:``,className:`com__content__left__card__header__img`})]}),(0,R.jsxs)(`div`,{className:`com__content__left__card__content`,children:[(0,R.jsxs)(`div`,{className:`com__content__left__card__row`,children:[(0,R.jsx)(`img`,{className:`com__content__left__card__img`,src:ta,alt:`view`}),(0,R.jsx)(`div`,{className:`com__content__left__card__text link`,children:`View system information`})]}),(0,R.jsxs)(`div`,{className:`com__content__left__card__row`,children:[(0,R.jsx)(`img`,{className:`com__content__left__card__img`,src:na,alt:`remove`}),(0,R.jsx)(`div`,{className:`com__content__left__card__text link`,children:`Add or remove programs`})]}),(0,R.jsxs)(`div`,{className:`com__content__left__card__row`,children:[(0,R.jsx)(`img`,{className:`com__content__left__card__img`,src:ra,alt:`control`}),(0,R.jsx)(`div`,{className:`com__content__left__card__text link`,children:`Change a setting`})]})]})]}),(0,R.jsxs)(`div`,{className:`com__content__left__card`,children:[(0,R.jsxs)(`div`,{className:`com__content__left__card__header`,children:[(0,R.jsx)(`div`,{className:`com__content__left__card__header__text`,children:`Other Places`}),(0,R.jsx)(`img`,{src:da,alt:``,className:`com__content__left__card__header__img`})]}),(0,R.jsxs)(`div`,{className:`com__content__left__card__content`,children:[(0,R.jsxs)(`div`,{className:`com__content__left__card__row`,children:[(0,R.jsx)(`img`,{className:`com__content__left__card__img`,src:ia,alt:`network`}),(0,R.jsx)(`div`,{className:`com__content__left__card__text link`,children:`My Network Places`})]}),(0,R.jsxs)(`div`,{className:`com__content__left__card__row`,children:[(0,R.jsx)(`img`,{className:`com__content__left__card__img`,src:pt,alt:`document`}),(0,R.jsx)(`div`,{className:`com__content__left__card__text link`,children:`My Documents`})]}),(0,R.jsxs)(`div`,{className:`com__content__left__card__row`,children:[(0,R.jsx)(`img`,{className:`com__content__left__card__img`,src:aa,alt:`folder`}),(0,R.jsx)(`div`,{className:`com__content__left__card__text link`,children:`Shared Documents`})]}),(0,R.jsxs)(`div`,{className:`com__content__left__card__row`,children:[(0,R.jsx)(`img`,{className:`com__content__left__card__img`,src:ra,alt:`control`}),(0,R.jsx)(`div`,{className:`com__content__left__card__text link`,children:`Control Panel`})]})]})]}),(0,R.jsx)(`div`,{className:`com__content__left__card`,children:(0,R.jsxs)(`div`,{className:`com__content__left__card__header`,children:[(0,R.jsx)(`div`,{className:`com__content__left__card__header__text`,children:`Details`}),(0,R.jsx)(`img`,{src:da,alt:``,className:`com__content__left__card__header__img`})]})})]}),(0,R.jsxs)(`div`,{className:`com__content__right`,children:[(0,R.jsxs)(`div`,{className:`com__content__right__card`,children:[(0,R.jsx)(`div`,{className:`com__content__right__card__header`,children:`Files Stored on This Computer`}),(0,R.jsxs)(`div`,{className:`com__content__right__card__content`,children:[(0,R.jsxs)(`div`,{className:`com__content__right__card__item ${t===`shared-documents`?`is-selected`:``}`,onMouseDown:()=>i(`shared-documents`),onDoubleClick:()=>a(`shared-documents`),children:[(0,R.jsx)(`img`,{src:sa,alt:`folder`,className:`com__content__right__card__img`}),(0,R.jsx)(`div`,{className:`com__content__right__card__img-container`,children:(0,R.jsx)(`div`,{className:`com__content__right__card__text`,children:`Shared Documents`})})]}),(0,R.jsxs)(`div`,{className:`com__content__right__card__item ${t===`user-documents`?`is-selected`:``}`,onMouseDown:()=>i(`user-documents`),onDoubleClick:()=>a(`user-documents`),children:[(0,R.jsx)(`img`,{src:sa,alt:`folder`,className:`com__content__right__card__img`}),(0,R.jsx)(`div`,{className:`com__content__right__card__img-container`,children:(0,R.jsx)(`div`,{className:`com__content__right__card__text`,children:`User's Documents`})})]})]})]}),(0,R.jsxs)(`div`,{className:`com__content__right__card`,children:[(0,R.jsx)(`div`,{className:`com__content__right__card__header`,children:`Hard Disk Drives`}),(0,R.jsx)(`div`,{className:`com__content__right__card__content`,children:(0,R.jsxs)(`div`,{className:`com__content__right__card__item ${t===`local-disk`?`is-selected`:``}`,onMouseDown:()=>i(`local-disk`),onDoubleClick:()=>a(`local-disk`),children:[(0,R.jsx)(`img`,{src:la,alt:`disk`,className:`com__content__right__card__img`}),(0,R.jsx)(`div`,{className:`com__content__right__card__img-container`,children:(0,R.jsx)(`div`,{className:`com__content__right__card__text`,children:`Local Disk (C:)`})})]})})]}),(0,R.jsxs)(`div`,{className:`com__content__right__card`,children:[(0,R.jsx)(`div`,{className:`com__content__right__card__header`,children:`Devices with Removable Storage`}),(0,R.jsx)(`div`,{className:`com__content__right__card__content`,children:(0,R.jsxs)(`div`,{className:`com__content__right__card__item ${t===`cd-drive`?`is-selected`:``}`,onMouseDown:()=>i(`cd-drive`),onDoubleClick:()=>a(`cd-drive`),children:[(0,R.jsx)(`div`,{className:`com__content__right__card__img-container`,children:(0,R.jsx)(`img`,{src:ua,alt:`cd`,className:`com__content__right__card__img`})}),(0,R.jsx)(`div`,{className:`com__content__right__card__text`,children:`CD Drive (D:)`})]})})]})]})]})})]})}var ma=a.div`
  height: 100%;
  width: 100%;
  position: absolute;
  display: flex;
  overflow: hidden;
  flex-direction: column;
  background: linear-gradient(to right, #edede5 0%, #ede8cd 100%);
  .com__toolbar {
    position: relative;
    display: flex;
    align-items: center;
    line-height: 100%;
    height: 24px;
    border-bottom: 1px solid rgba(255, 255, 255, 0.7);
    flex-shrink: 0;
  }
  .com__options {
    height: 23px;
    border-bottom: 1px solid rgba(0, 0, 0, 0.1);
    border-right: 1px solid rgba(0, 0, 0, 0.1);
    padding: 1px 0 1px 2px;
    border-left: 0;
    flex: 1;
  }
  .com__windows-logo {
    height: 100%;
    border-left: 1px solid white;
    border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  }
  .com__function_bar {
    height: 36px;
    display: flex;
    align-items: center;
    font-size: 11px;
    padding: 1px 3px 0;
    border-bottom: 1px solid rgba(0, 0, 0, 0.1);
    flex-shrink: 0;
  }
  .com__function_bar__button {
    display: flex;
    height: 100%;
    align-items: center;
    border: 1px solid rgba(0, 0, 0, 0);
    border-radius: 3px;
    &:hover {
      border: 1px solid rgba(0, 0, 0, 0.1);
      box-shadow: inset 0 -1px 1px rgba(0, 0, 0, 0.1);
    }
    &:hover:active {
      border: 1px solid rgb(185, 185, 185);
      background-color: #dedede;
      box-shadow: inset 0 -1px 1px rgba(255, 255, 255, 0.7);
      color: rgba(255, 255, 255, 0.7);
      & > * {
        transform: translate(1px, 1px);
      }
    }
  }
  .com__function_bar__button--disable {
    filter: grayscale(1);
    opacity: 0.7;
    display: flex;
    height: 100%;
    align-items: center;
    border: 1px solid rgba(0, 0, 0, 0);
  }
  .com__function_bar__text {
    margin-right: 4px;
  }
  .com__function_bar__icon {
    height: 30px;
    width: 30px;
    &--normalize {
      height: 22px;
      width: 22px;
      margin: 0 4px 0 1px;
    }
    &--margin12 {
      height: 22px;
      width: 22px;
      margin: 0 1px 0 2px;
    }
    &--margin-1 {
      margin: 0 -1px;
      height: 30px;
      width: 30px;
    }
  }
  .com__function_bar__separate {
    height: 90%;
    width: 1px;
    background-color: rgba(0, 0, 0, 0.2);
    margin: 0 2px;
  }
  .com__function_bar__arrow {
    height: 100%;
    display: flex;
    align-items: center;
    margin: 0 4px;
    &:before {
      content: '';
      display: block;
      border-width: 3px 3px 0;
      border-color: #000 transparent;
      border-style: solid;
    }
  }
  .com__function_bar__arrow--margin-11 {
    height: 100%;
    display: flex;
    align-items: center;
    margin: 0 1px 0 -1px;
    &:before {
      content: '';
      display: block;
      border-width: 3px 3px 0;
      border-color: #000 transparent;
      border-style: solid;
    }
  }
  .com__address_bar {
    flex-shrink: 0;
    border-top: 1px solid rgba(255, 255, 255, 0.7);
    height: 20px;
    font-size: 11px;
    display: flex;
    align-items: center;
    padding: 0 2px;
    box-shadow: inset 0 -2px 3px -1px #b0b0b0;
  }
  .com__address_bar__title {
    line-height: 100%;
    color: rgba(0, 0, 0, 0.5);
    padding: 5px;
  }
  .com__address_bar__content {
    border: rgba(122, 122, 255, 0.6) 1px solid;
    height: 100%;
    display: flex;
    flex: 1;
    align-items: center;
    background-color: white;
    position: relative;
    &__img {
      width: 14px;
      height: 14px;
    }
    &__img:last-child {
      width: 15px;
      height: 15px;
      right: 1px;
      position: absolute;
    }
    &__img:last-child:hover {
      filter: brightness(1.1);
    }
    &__text {
      white-space: nowrap;
      position: absolute;
      white-space: nowrap;
      left: 16px;
      right: 17px;
    }
  }

  .com__address_bar__go {
    display: flex;
    align-items: center;
    padding: 0 18px 0 5px;
    height: 100%;
    position: relative;
    &__img {
      height: 95%;
      border: 1px solid rgba(255, 255, 255, 0.2);
      margin-right: 3px;
    }
  }
  .com__address_bar__links {
    display: flex;
    align-items: center;
    padding: 0 18px 0 5px;
    height: 100%;
    position: relative;
    &__img {
      position: absolute;
      right: 2px;
      top: 3px;
      height: 5px;
      width: 8px;
    }
    &__text {
      color: rgba(0, 0, 0, 0.5);
    }
  }
  .com__address_bar__separate {
    height: 100%;
    width: 1px;
    background-color: rgba(0, 0, 0, 0.1);
    box-shadow: 1px 0 rgba(255, 255, 255, 0.7);
  }
  .com__content {
    flex: 1;
    border: 1px solid rgba(0, 0, 0, 0.4);
    border-top-width: 0;
    background-color: #f1f1f1;
    overflow: auto;
    font-size: 11px;
    position: relative;
  }
  .com__content__inner {
    display: flex;
    height: 100%;
    overflow: auto;
  }
  .com__content__left {
    width: 180px;
    height: 100%;
    background: linear-gradient(to bottom, #748aff 0%, #4057d3 100%);
    overflow: auto;
    padding: 10px;
  }

  .com__content__left__card {
    border-top-left-radius: 3px;
    border-top-right-radius: 3px;
    width: 100%;
    overflow: hidden;
  }
  .com__content__left__card:not(:last-child) {
    margin-bottom: 12px;
  }
  .com__content__left__card__header {
    display: flex;
    align-items: center;
    height: 23px;
    padding-left: 11px;
    padding-right: 2px;
    cursor: pointer;
    background: linear-gradient(
      to right,
      rgb(240, 240, 255) 0,
      rgb(240, 240, 255) 30%,
      rgb(168, 188, 255) 100%
    );
  }
  .com__content__left__card__header:hover {
    & .com__content__left__card__header__text {
      color: #1c68ff;
    }
  }
  .com__content__left__card__header__text {
    font-weight: 700;
    color: #0c327d;
    flex: 1;
  }
  .com__content__left__card__header__img {
    width: 18px;
    height: 18px;
    filter: drop-shadow(1px 1px 3px rgba(0, 0, 0, 0.3));
  }
  .com__content__left__card__content {
    padding: 5px 10px;
    background: linear-gradient(
      to right,
      rgb(180, 200, 251) 0%,
      rgb(164, 185, 251) 50%,
      rgb(180, 200, 251) 100%
    );
    background-color: rgba(198, 211, 255, 0.87);
  }
  .com__content__left__card__row {
    display: flex;
    margin-bottom: 2px;
  }

  .com__content__left__card__img {
    width: 14px;
    height: 14px;
    margin-right: 5px;
  }
  .com__content__left__card__text {
    font-size: 10px;
    line-height: 14px;
    color: #0c327d;
    &.black {
      color: #000;
    }
    &.bold {
      font-weight: bold;
    }

    &.link:hover {
      cursor: pointer;
      color: #2b72ff;
      text-decoration: underline;
    }
  }
  .com__content__right {
    height: 100%;
    overflow: auto;
    background-color: #fff;
    flex: 1;
  }
  .com__content__right__card__header {
    width: 300px;
    font-weight: 700;
    padding: 2px 0 3px 12px;
    position: relative;
    &:after {
      content: '';
      display: block;
      background: linear-gradient(to right, #70bfff 0, #fff 100%);
      position: absolute;
      bottom: 0;
      left: -12px;
      height: 1px;
      width: 100%;
    }
  }
  .com__content__right__card__content {
    display: flex;
    align-items: center;
    padding-right: 0;
    flex-wrap: wrap;
    padding: 15px 15px 0;
  }
  .com__content__right__card__item {
    display: flex;
    align-items: center;
    width: 200px;
    margin-bottom: 15px;
    height: auto;
    cursor: default;
    user-select: none;
  }
  .com__content__right__card__img {
    width: 45px;
    height: 45px;
    margin-right: 5px;
  }
  .com__content__right__card__text {
    white-space: nowrap;
    height: 100%;
    padding: 0 3px 2px;
  }
  .com__content__right__card__item.is-selected
    .com__content__right__card__text {
    background-color: #0b61ff;
    color: #fff;
  }
  .com__content__right__card__item.is-selected
    .com__content__right__card__img {
    opacity: 0.5;
    filter: drop-shadow(0 0 blue);
  }
  .com__content__right__card--me {
    .com__content__right__card__header:after,
    .com__content__right__card__header {
      transition: 0.4s;
    }
    &:hover {
      .com__content__right__card__header:after {
        width: 0;
      }
      .com__content__right__card__header {
        transform: scale(1.2) translate(20px, 5px);
      }
    }
  }
  .com__content__right__card__item--me {
    display: flex;
    align-items: center;
    width: 200px;
    margin-bottom: 15px;
    height: auto;
    & > * {
      transition: transform 0.2s;
    }
    &:hover .com__content__right__card__img {
      transform: rotate(-10deg) scale(0.9);
    }
    &:hover .com__content__right__card__text {
      transform: scale(1.2);
      transition-timing-function: cubic-bezier(0.23, 1.93, 0.59, -0.15);
    }
  }
`,ha={File:[{type:`item`,disable:!0,text:`New`},{type:`item`,disable:!0,text:`Open...`},{type:`item`,disable:!0,text:`Save`},{type:`item`,disable:!0,text:`Save As...`},{type:`separator`},{type:`item`,disable:!0,text:`Page Setup...`},{type:`item`,disable:!0,text:`Print...`},{type:`separator`},{type:`item`,text:`Exit`}],Edit:[{type:`item`,disable:!0,text:`Undo...`},{type:`separator`},{type:`item`,disable:!0,text:`Cut`},{type:`item`,disable:!0,text:`Copy`},{type:`item`,disable:!0,text:`Paste`},{type:`item`,disable:!0,text:`Delete`},{type:`separator`},{type:`item`,disable:!0,text:`Find...`},{type:`item`,disable:!0,text:`Find Next`},{type:`item`,disable:!0,text:`Replace...`},{type:`item`,disable:!0,text:`Go To...`},{type:`separator`},{type:`item`,disable:!0,text:`Select All`},{type:`item`,text:`Time/Date`}],Format:[{type:`item`,text:`Word Wrap`},{type:`item`,disable:!0,text:`Font...`}],View:[{type:`item`,disable:!0,text:`Status Bar`}],Help:[{type:`item`,disable:!0,text:`Help Topics`},{type:`item`,disable:!0,text:`About Notepad`}]};function ga({onClose:e}){let[t,n]=(0,L.useState)(``),[r,i]=(0,L.useState)(!1);function a(a){switch(a){case`Exit`:e();break;case`Word Wrap`:i(!r);break;case`Time/Date`:let a=new Date;n(`${t}${a.toLocaleTimeString()} ${a.toLocaleDateString()}`);break;default:}}function o(e){if(e.which===9){e.preventDefault(),e.persist();var r=e.target.selectionStart,i=e.target.selectionEnd;n(`${t.substring(0,r)}\t${t.substring(i)}`),requestAnimationFrame(()=>{e.target.selectionStart=r+1,e.target.selectionEnd=r+1})}}return(0,R.jsxs)(_a,{children:[(0,R.jsx)(`section`,{className:`np__toolbar`,children:(0,R.jsx)(yr,{items:ha,onClickItem:a})}),(0,R.jsx)(va,{wordWrap:r,value:t,onChange:e=>n(e.target.value),onKeyDown:o,spellCheck:!1})]})}var _a=a.div`
  height: 100%;
  background: linear-gradient(to right, #edede5 0%, #ede8cd 100%);
  display: flex;
  flex-direction: column;
  align-items: stretch;
  .np__toolbar {
    position: relative;
    height: 21px;
    flex-shrink: 0;
    border-bottom: 1px solid white;
  }
`,va=a.textarea`
  flex: auto;
  outline: none;
  font-family: 'Lucida Console', monospace;
  font-size: 13px;
  line-height: 14px;
  resize: none;
  padding: 2px;
  ${e=>e.wordWrap?``:`white-space: nowrap; overflow-x: scroll;`}
  overflow-y: scroll;
  border: 1px solid #96abff;
`,ya=`https://jspaint.app`;function ba(e){try{return new URL(e,window.location.href).origin!==window.location.origin}catch{return/^(https?:)?\/\//i.test(e)}}function xa({isFocus:e,desktopFrozen:t=!1,desktopInteractive:n=!0}){let r=ya,i=ba(r),a=t&&i;return(0,R.jsxs)(`div`,{style:{width:`100%`,height:`100%`,position:`relative`,backgroundColor:`rgb(192,192,192)`},children:[(0,R.jsx)(`iframe`,{src:r,frameBorder:`0`,loading:`lazy`,title:`paint`,style:{display:a?`none`:`block`,width:`100%`,height:`100%`,backgroundColor:`rgb(192,192,192)`}}),a&&(0,R.jsxs)(`div`,{style:{position:`absolute`,inset:0,display:`flex`,flexDirection:`column`,alignItems:`center`,justifyContent:`center`,gap:`8px`,padding:`16px`,textAlign:`center`,backgroundColor:`rgb(192,192,192)`,color:`rgb(0,0,0)`,fontFamily:`Tahoma, sans-serif`,fontSize:`11px`,lineHeight:1.4},children:[(0,R.jsx)(`img`,{src:`data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAAFiUAABYlAUlSJPAAAAnvSURBVFhHtZd5WFR1F8cvZqVp5YYsgrLOsM4wjAMMA8ywjYwwAyijCKKIAkYhgSiZKIMJAi4sIQEGiUQEiCwKISggkAqobIqaYojIEoqIZVk43/cOom+9ldvzvJ/nuf/dOef7O+d8z/0N8WfQmaY1UhvvdWkr87djS9Sk33trSi8FUdETQZM+ylvFmnjt/4Jcmp/fmzlxGyjlySGftW8zeXTYURWlzmq4GKSNzo+p+NTFrIduaBbOY5kb8fm0abLf/M/zJ8RvKCjQpm2Ia4bQPcJFWZOvSqPxp0kkkkkTL/ydfLH4jeC14lnHEwKCy8McbmZyFZFhroITYhWULVFHgDWjz1CXFWPBNDMVcTjv8ni8yeQzRUWFPZVgMt8kQ4wLEZNxqFTOu7sTqxAeXQo1Q6dAZQrPjkoVKTOZfk/f+zsSgpgUIBZPP7LVZel3O72q0jjyiNafj3STOci1V4WnqfGALpWZYEIztnS0sJh5Oc+Wi+8doE5dSFXUYsgT+vpvyZLn5Z8w7L452PvD1QFs3F4InmhLi6KWdYCqLt9AVgWy0f8sgEQuUCB4O9nfnlEQ5pIRz52OcAoFUXQ97DMzhJe59aiWFiuFpm9iE+Lppn6rdNE+mQAtPZbnAl0zYw0N5vukgLf2JecaDw6O3i0r68KWLfVw9kmHLmfdMWUde74iQyBPELzJE/n+joQs6wqRrcLmoK1hzY3diIw8Mx5k48ZaOHpF/ayhZ/eNjgHP6VCkL/9+17lLv3bkY5Wbc4aWnrkzg8FRFgqF70TFpZv19Q/3HsrukIaHN0DWillqnHwFTZ67sgFflXjShn9G1gaBQPCe55oIz5y82iv7U9sQGHgSPj4VcF639+ECA0GxJp2/vCxxU+CvD+5g9EwWtq8VNusbWQRwONZUkcjnXVIA+8oPNy80NfWPJ1eni7pnLWBnzNHgOc01sFV4bgVI5Nhs8dQ1H8TZh23PLC4p70J41nXE5v0It01noaBtU6xG46++cDj4wHB3OepzArB7vd1NOp2zg2vOZbnaus7+Okli19h88WRdXS/Wrw67o6RlUaOoYRE2T5tnJK/Pm07m+HcnkMjJJpVj76PsuCxsfVvbAJb6VWN5/BWI/E9hjhrnmCbdyu9aw7QTD+sJnP6cQIKvwR063TTZ3MTchnSFytA6u18eXKh41JWRguhFtn3aOtwcqj7PjcGwV5Y5ZyLPvyPzKocsJdPSi5lbcLonPLwerqFnIVxbDVWDRfWK2uzQzuPvnBmuIlAVQyAiyHWUbS064uDk5k0x4rKwQRXwV8ew/SwkmbPuGlA5qSw9S1sLQ4uZZPjnnv4pckxyKbF4vmoBoanZFZU3sFhcRlagFp+fGsAvNxOAqwSeCnAJPiQ9dX3gcffwCJAlBj7WBpbMRLMiAW912m0DdVYih2JiaUe6RBb7SYoXQfqZyVsxx9M/PqmlpR/LV5ZD6FcLv0NtuN8SAFwmcLfyiQC3sFzU3RjClY7TuP/lGox9SMVjGwIXTPVAV2F06KoydpjON2by5PVl/X85ATyeZHJZbaPN5rTjdSkNg+MCZMPosPgIqhvCgTYCPUUEisIJ2G7+HqnnR1Ha3I5bST4Y/ZCFYWsCOfq6Y8oqzGqKKjOArWKsJdDSensi/AuR43l7T7lw9foOybdN2P3dj3BwPDL+aC5bhq+zVv5FADekHrtPDaGk7DvcCzHFH6LZOKdEQOIX9PMCDbNCfS1TN5YaS5H3Avv9F0CO7xU6rba5JSK/5TpihvyxooYDtZ0KIPwIRIfpQtpKoLuQQOGnTwR8UtSHyuRduPURF2NsAhVz38aObbEjOobWB42N7Rax2YtmkeP9UgP4TEDGtyXustMfuZM3LoC6R2lcgJ+3Cn5vJHAxi0DceqVxAb6ZN5C6NwNjju9jwGgqahOipalpmSNGLEG6lY2rjYuL9wzSXi8pYKIFHIeV1IEHo+MtiLsWB4uvjMYFcL1mY6hq8l8EBO2tRfa2HShIPYjcwmpklZxFRGTcoDFHlGzD97ASi/3eB3mwifgvRjaEdBvxvI4b3Z0/jdzBsfYyJDTlIv3ySWS2VuBG7z60tkag4Oge5HeNoOLWIJo6m/BVeTN6Ny7G0OUWcPgenUbmwiiugydLLA6Y/koCZOWS2bChpaN4cPQeStuLYZXIhlW8Ofz3WaM1n4LRGgLlaRQkt/2CkZpP8DjSCNK1ShjeuhzX+vqlShTLUzpMQaCF7XKKQBD40g54AimAR/btaHV97I93R3C0k1zHmW6gxeogOpGBimRV9B0lkJokQPTpEYylWJH+1wDcZqAnbj3yy078Nk+HW0IxFixncNxfbgX/BbJcsrKlZBWsPNczhION7dhZthO6uzQQGa2HbyLlcbuUwOa4D5FU3QWkm+KxnwoeuqmjvrENUUlf3tcw4mcbmrkITGxXzX6VAXwKOYiSKWz+Cp0TV/tx4Nwf2FO5Z1yAdQIXO4K1xvdASEwAjmfvhTTGAGM+89D+gRilF29jqffHPXqmwkQTW3dLsvzvvY6AJ4PIFs/7oqq1c2NeL1JPpYKXYAnWbiP4rqHhRgGBUFJAU/pHQJQOxtzJK1zUYZR13oaOieN5PRPHTy0dVtGEQr93yHCvMIDPkEyiMIVzIvPqijeVXMH+6hw47XeEzi41eASzcSWHQOIXW/DzQWdgszp+XzwD7ok/4GDV2TElilWl1kKBjxnPXU1fLHlrIuCrIplkxPOesSv3eOyu6mtIbaiThhbFgR6rC1HYQtQlvYkNewqAFGNgnSJ6Q90RX9eF/TlFD+fr2xRQTJxcaXyvubIP20TAVwVyPHIQN3+WtLj5FrkLLvcjpjILC/cwYEwOYtmXVjh68iQQqwcsm4mi/NNoujkA35DIQQpTkM6wdrOVOenlV/A/IPMvU7Bas+b8pTMlbf2/f15TAucUF+jFaGNPQw/y60kHhKljzGkm0s4BJ9uvSxfyxG36bOdIC74HU7bSn3cNfyGye76lYI18Yua3m7qHhscauy5LE04cgE9uCLJbe1B0GTjecBUFp39CXfc9RMYfGFWn2ZfQLdzWWAnXqYslr93/Z4x/mHwCt5sdKiw/XFXX1Fdz/sajxuvD0o5B4FwfcLoHqGm99njb7rQHBmznswZsUTTbfgV3kXjtLNkBJuK8PrLr2WJxgKL72lDHsM8SDqRnF3Zk5ZX2Z35TPPxFVsG96MSMO64rN1yjc1wqaRzX3eTucLFZsnbBxPp9/fI/g1wiYnHwVPGqoPmOywKs7Zf4+XMdV0Wx7T2SjblL0xiWS1OYVm4xJnYeH1kJV/Mdl36gIavac/+IviqyYN4SyRTX9aFzxT5BVCePQBOBqy/XRrjGhufkzbMTrjOzc12nK1oRpCAODp768skJ4j/KaC1jg81BegAAAABJRU5ErkJggg==`,alt:``,width:`32`,height:`32`}),(0,R.jsx)(`div`,{children:`Paint surface suspended while the desktop is frozen.`}),(0,R.jsx)(`div`,{children:`Host JS Paint on the same origin via VITE_WINXP_PAINT_SRC for full freeze control.`})]}),!a&&(!e||!n)&&(0,R.jsx)(`div`,{style:{width:`100%`,height:`100%`,position:`absolute`,left:0,top:0}})]})}export{dn as $,Ue as $t,Pn as A,jt as At,wn as B,dt as Bt,Vn as C,x as Cn,Bt as Ct,Ln as D,It as Dt,Rn as E,Lt as Et,kn as F,Et as Ft,yn as G,ot as Gt,Sn as H,lt as Ht,On as I,Dt as It,gn as J,tt as Jt,vn as K,rt as Kt,Dn as L,_t as Lt,Mn as M,kt as Mt,jn as N,Z as Nt,In as O,Nt as Ot,An as P,Ot as Pt,fn as Q,Je as Qt,En as R,vt as Rt,Hn as S,S as Sn,Vt as St,zn as T,c as Tn,Rt as Tt,xn as U,ct as Ut,Cn as V,ut as Vt,bn as W,st as Wt,mn as X,Ve as Xt,hn as Y,et as Yt,pn as Z,He as Zt,qn as _,C as _n,Kt as _t,Yr as a,q as an,an as at,Wn as b,w as bn,Ut as bt,dr as c,Be as cn,tn as ct,nr as d,F as dn,Qt as dt,Ke as en,un as et,Qn as f,P as fn,Zt as ft,Jn as g,u as gn,qt as gt,Yn as h,d as hn,Jt as ht,qi as i,K as in,on as it,Nn as j,At as jt,Fn as k,Mt as kt,ir as l,ae as ln,en as lt,Xn as m,k as mn,Yt as mt,ga as n,We as nn,cn as nt,Mr as o,qe as on,rn as ot,Zn as p,N as pn,Xt as pt,_n as q,nt as qt,pa as r,Ye as rn,sn as rt,Dr as s,Ge as sn,nn as st,xa as t,G as tn,ln as tt,rr as u,I as un,$t as ut,Kn as v,b as vn,Gt as vt,Bn as w,y as wn,zt as wt,Un as x,v as xn,Ht as xt,Gn as y,_ as yn,Wt as yt,Tn as z,ft as zt};