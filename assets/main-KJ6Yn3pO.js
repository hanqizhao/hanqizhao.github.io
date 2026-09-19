const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/outer-screen-overlay-IrWsP7h0.js","assets/createWinXPHost-C_bv3xFW.js","assets/rolldown-runtime-BVbofQct.js","assets/preload-helper-DWTEM3RW.js","assets/react-vendor-aHYhdYD6.js","assets/constants-Y9cTM2If.js","assets/desktopPresentationProfile-CxyoU_8r.js","assets/runtimeBridge-BbQNkrZH.js","assets/globalAudio-DVfpRfMe.js","assets/publicPath-SdK1OGf5.js","assets/createWinXPHost-BSxTm-g0.css"])))=>i.map(i=>d[i]);
import"./modulepreload-polyfill-Cf3xff8G.js";import{A as e,C as t,D as n,E as r,M as i,O as a,S as o,T as s,_ as c,a as l,b as u,c as d,d as ee,f as te,g as f,h as ne,i as p,j as m,k as re,l as ie,m as ae,n as oe,o as h,p as se,r as ce,s as le,t as ue,u as de,v as fe,w as g,x as pe,y as me}from"./three-vendor-46HZT5qf.js";import{t as he}from"./desktopPresentationProfile-CxyoU_8r.js";import{a as ge,i as _e,l as ve,n as ye,o as be,t as xe,u as Se}from"./runtimeBridge-BbQNkrZH.js";import{t as Ce}from"./preload-helper-DWTEM3RW.js";var we=`slim`,Te=`outer-website:quality-mode`,Ee=`outer-website:quality-profile-v1`,De=1,Oe=336*60*60*1e3,ke=`high`,Ae=`low`;function je(){try{return new URLSearchParams(window.location.search)}catch{return new URLSearchParams}}var Me=je();function Ne(e){let t=Me.get(e);return t===``||t===`1`||t===`true`}function Pe(e){return e===Ae?Ae:ke}function Fe(){try{window.localStorage.removeItem(Te),window.localStorage.removeItem(Ee)}catch{}}(Ne(`clearQualityProfile`)||Ne(`resetQualityProfile`))&&Fe();function Ie(){if(Ne(`ignoreQualityProfile`))return null;try{let e=window.localStorage.getItem(Te);if(!e)return null;let t=JSON.parse(e);return t?.mode===Ae||t===Ae?Ae:ke}catch{return null}}function Le(){if(Ne(`ignoreQualityProfile`))return null;try{let e=window.localStorage.getItem(Ee);if(!e)return null;let t=JSON.parse(e),n=Date.now()-Number(t?.createdAt??0);return t?.version!==De||!Number.isFinite(n)||n<0||n>Oe?null:t}catch{return null}}function Re(){try{let e=document.createElement(`canvas`),t=e.getContext(`webgl2`,{powerPreference:`high-performance`})||e.getContext(`webgl`,{powerPreference:`high-performance`});if(!t)return{available:!1};let n=t.getExtension(`WEBGL_debug_renderer_info`),r=n?t.getParameter(n.UNMASKED_RENDERER_WEBGL):``,i=n?t.getParameter(n.UNMASKED_VENDOR_WEBGL):``,a=t.getParameter(t.MAX_SAMPLES)??0,o=t.getParameter(t.MAX_TEXTURE_SIZE)??0,s=t.getParameter(t.MAX_RENDERBUFFER_SIZE)??0,c=`${i} ${r}`.toLowerCase();return{available:!0,renderer:r,vendor:i,maxSamples:a,maxTextureSize:o,maxRenderBufferSize:s,integratedHint:/intel|uhd|hd graphics|iris|radeon graphics|adreno|mali|apple gpu/i.test(c),softwareHint:/swiftshader|llvmpipe|basic render|software|warp/i.test(c)}}catch{return{available:!1}}}function ze(e=5){let t=performance.now(),n=0,r=0;for(;n<14e4&&performance.now()-t<e;)r=(r+Math.sqrt(n%97+1))%1e3,n+=1;let i=Math.max(.001,performance.now()-t);return{durationMs:Number(i.toFixed(3)),iterations:n,iterationsPerMs:Number((n/i).toFixed(1)),checksum:Number(r.toFixed(3))}}function Be(e){let t=Re(),n=ze(),r=Math.round((window.screen?.width??window.innerWidth)*(window.screen?.height??window.innerHeight)*(window.devicePixelRatio||1)**2),i=0;e.prefersReducedMotion&&(i+=3),(e.coarsePointer||e.isLikelyMobile)&&(i+=2),e.deviceMemory>0&&e.deviceMemory<=4?i+=2:e.deviceMemory>0&&e.deviceMemory<=8&&(i+=1),e.hardwareConcurrency>0&&e.hardwareConcurrency<=4?i+=2:e.hardwareConcurrency>0&&e.hardwareConcurrency<=8&&(i+=1),r>=5e6&&(e.deviceMemory<=8||e.hardwareConcurrency<=8)&&(i+=1),!t.available||t.softwareHint?i+=4:t.integratedHint&&(i+=2),t.maxRenderBufferSize>0&&t.maxRenderBufferSize<=8192&&(i+=1),t.maxSamples===0&&(i+=1),n.iterationsPerMs<9e3?i+=2:n.iterationsPerMs<16e3&&(i+=1);let a=i>=3?Ae:ke;return{version:De,createdAt:Date.now(),mode:a,lowTierScore:i,device:{deviceMemory:e.deviceMemory,hardwareConcurrency:e.hardwareConcurrency,prefersReducedMotion:e.prefersReducedMotion,coarsePointer:e.coarsePointer,isLikelyMobile:e.isLikelyMobile,devicePixelRatio:window.devicePixelRatio||1,screenPixelCount:r},webgl:t,cpuProbe:n}}function Ve(e){if(!Ne(`ignoreQualityProfile`))try{window.localStorage.setItem(Ee,JSON.stringify(e))}catch{}}function He(e){let t=Ie(),n=Me.get(`quality`),r=Le(),i=r??Be(e);return r||Ve(i),{profile:i,mode:Pe(t??n??i.mode),source:t?`manual`:n?`query`:r?`cached`:`measured`}}var _=he(),Ue=He(_),We=Ue.mode,Ge=Ue.source;function v(){return We===Ae}function Ke(){_.qualityMode=We,_.qualitySelectionSource=Ge,_.qualityProfile=Ue.profile,_.lowTierDetected=v(),_.shouldDefaultPostFxOff=v(),_.preferredBloomEnabled=!v(),_.preferredMsaaSamples=v()?0:_.preferredMsaaSamples||2}Ke(),Se(_);var qe={current:{visualSkyLdr:new URL(`/assets/new_sky_ldr-yZ_KpEae.jpg`,``+import.meta.url).href,lightingLdr:new URL(`/assets/room_ldr-DOcZ7og-.jpg`,``+import.meta.url).href,room:new URL(`/assets/room%20baked-KoBuYlPf.ktx2`,``+import.meta.url).href,table:new URL(`/assets/table%20baked-DFp0K4D2.ktx2`,``+import.meta.url).href,chairBack:new URL(`/assets/chair%20back%20final-sbWclMz4.ktx2`,``+import.meta.url).href,chairLeft:new URL(`/assets/chair%20left%20final-BjZ_O-yh.ktx2`,``+import.meta.url).href,chairRight:new URL(`/assets/chair%20right%20final-BtcJ8_ie.ktx2`,``+import.meta.url).href,computer:new URL(`/assets/computer%20shadow-D5HsGwbv.ktx2`,``+import.meta.url).href}},y={label:`Slim`,visualSky:{kind:`ldr`,path:qe.current.visualSkyLdr,flipY:!0},lightingEnvironment:{kind:`ldr`,path:qe.current.lightingLdr,flipY:!0,intensity:1.2},bakedSurfacePaths:{room:qe.current.room,table:qe.current.table,chairBack:qe.current.chairBack,chairLeft:qe.current.chairLeft,chairRight:qe.current.chairRight},lightMapPaths:{computer:qe.current.computer}},Je=!0,Ye=!1,b=!1,Xe=!1,x=!1,S=!1,Ze=null,Qe=null,$e=null,et=null,C=null,tt=null,nt=null,rt=null,it=null,w=null,at=null,ot=null,st=null,ct=null,lt=null,ut=null,dt=!1,ft=null,pt=!1,mt=null,ht=null,gt=`outer-website:postfx-settings`,_t=2200,vt=10,yt=12,bt=220,xt=2,St=2,Ct=1.25,wt=1,Tt=.62,Et=.7,Dt=.55,Ot=1800,kt=18,At=8,jt=1e3/10,Mt=1200,Nt=1600,Pt=.25,Ft=32,It=40,Lt=1e-4,Rt=.01,zt=.015,Bt=.01,Vt=150,Ht=9999,Ut=`outer-website:shockwave-v1`,Wt=[4,2,0],Gt=!0,Kt=1e3/180,qt=1e3/30,Jt=250,Yt=800,Xt=`outer-website:`;function Zt(){return v()?Ct:St}function Qt(){return v()?Tt:wt}function $t(){return v()?Dt:Et}function en(){return v()?At:kt}function tn(){return 1e3/en()}function nn(){return v()?Nt:Mt}function rn(){return v()?It:Ft}function an(){return v()?zt:Rt}function on(e,t=qt){return(Number.isFinite(e)&&e>0?Math.min(e,t):Kt)/Kt}function sn(e,t){let n=f.clamp(e,0,1);return n<=0?0:n>=1?1:1-(1-n)**Math.max(0,t)}var T=window.__outerWebsiteStartupTiming??{createdAt:Date.now(),timeOrigin:performance.timeOrigin??Date.now()-performance.now(),events:[]};window.__outerWebsiteStartupTiming=T;function cn(){try{return new URLSearchParams(window.location.search).has(`startupTimingLog`)}catch{return!1}}var ln=cn();function un(e){if(typeof e!=`object`||!e)return e??{};try{return JSON.parse(JSON.stringify(e,(e,t)=>{if(typeof t==`number`)return Number.isFinite(t)?Number(t.toFixed(3)):String(t);if(typeof t!=`function`)return t}))}catch{return{unserializable:!0}}}function E(e,t={}){let n=performance.now(),r={index:T.events.length,name:e,at:Number(n.toFixed(3)),detail:un(t)};if(T.events.push(r),T.events.length>Yt&&T.events.splice(0,T.events.length-Yt),ln)try{performance.mark(`${Xt}${e}`)}catch{}return ln&&console.debug(`[startup-timing]`,JSON.stringify(r)),r}function dn(){return{createdAt:T.createdAt,timeOrigin:T.timeOrigin,now:Number(performance.now().toFixed(3)),eventCount:T.events.length,events:T.events.slice()}}function fn(){T.events.length=0,E(`debug.timeline.cleared`)}if(window.__outerWebsiteRecordStartupTiming=E,ln&&typeof PerformanceObserver<`u`)try{T.longTaskObserver?.disconnect?.(),T.longTaskObserver=new PerformanceObserver(e=>{e.getEntries().forEach(e=>{E(`performance.longtask`,{startTime:e.startTime,duration:e.duration,name:e.name})})}),T.longTaskObserver.observe({type:`longtask`,buffered:!0})}catch{}E(`main.module.loaded`,{assetProfile:we});var pn=new m,mn=new m,hn=[],gn=!1,_n=new m(0,0,0),vn=null,D={lastRenderMs:0,avgRenderMs:0,avgFrameMs:0,fps:0,lastUiUpdate:0,lastFrameNow:0},yn=4/3,bn=21/9;function xn(e){return Math.min(Math.max(e,yn),bn)}function Sn(e=window.innerWidth,t=window.innerHeight){let n=Math.max(1,Math.floor(e)),r=Math.max(1,Math.floor(t)),i=n/r,a=xn(i),o=n,s=r;return i>a?o=Math.max(1,Math.round(r*a)):i<a&&(s=Math.max(1,Math.round(n/a))),{windowWidth:n,windowHeight:r,width:o,height:s,left:Math.round((n-o)/2),top:Math.round((r-s)/2),aspect:o/s,isClamped:Math.abs(i-a)>.001}}var O=Sn();function Cn(){Object.assign(O,Sn())}function wn(e,t){let n=e-O.left,r=t-O.top,i=f.clamp(n,0,O.width),a=f.clamp(r,0,O.height);return{x:i/O.width*2-1,y:-(a/O.height)*2+1,inside:n>=0&&n<=O.width&&r>=0&&r<=O.height}}function k(e,t=xt){if(e===!0)return xt;if(e===!1||e==null)return t;let n=Number(e);return n>=4?4:n>=2?2:0}function Tn(e){return e>=4?`4x`:e>=2?`2x`:`Off`}function En(){let e={bloomEnabled:!v(),msaaSamples:k(v()?0:_.preferredMsaaSamples,v()?0:xt)};try{let t=window.localStorage.getItem(gt);if(!t)return e;let n=JSON.parse(t);return{bloomEnabled:n?.bloomEnabled!==!1,msaaSamples:k(n?.msaaSamples??n?.msaaEnabled,e.msaaSamples)}}catch{return e}}var A=En();function Dn(){try{window.localStorage.setItem(gt,JSON.stringify(A))}catch{}}var j={url:`/embedded-winxp.html`,width:1280,height:820,rotationX:-Math.PI*15.5/180,rotationY:Math.PI/2,rotationZ:0,flipNormal:!1,scaleMultiplier:1,scaleX:.99,scaleY:1.01,offsetX:0,offsetY:6e-4,offsetZ:0},On={localCorners:[new m(-j.width/2,j.height/2,0),new m(j.width/2,j.height/2,0),new m(j.width/2,-j.height/2,0),new m(-j.width/2,-j.height/2,0)],worldCorners:[new m,new m,new m,new m],quad:[{x:0,y:0},{x:0,y:0},{x:0,y:0},{x:0,y:0}],cameraSpacePoint:new m,projectedPoint:new m},M={loader:{bgColor:`#d9d9d9`,minLoadTime:1500,fadeTime:1,cameraPush:{startTime:1.5,duration:1,distance:.5},shockwave:{startTime:.5,duration:5.5,startRadius:0,endRadius:20,edgeWidth:.2,edgeIntensity:3,centerOffset:new m(-4,-1,0)},skyFade:{startTime:.5,duration:1},screenFade:{startTime:2.5,duration:6.5},controlsUnlockTime:2.5},intro:{startPos:new m(4.3,-1.8,0),startTarget:new m(0,-1.4,0)},focus:{duration:2e3,easing:`easeInOutCubic`,distance:.18,yOffset:0,maxTriggerAngle:60,targetOffsetX:0,targetOffsetY:0,targetOffsetZ:0,hitboxScale:1.8},unfocus:{preDelay:0,duration:1800,easing:`easeOutCubic`,endPos:new m(4.5,-1.8,0),endTarget:new m(0,-1.4,0)},shield:{maxClickDistance:1.2,dimOpacity:.8,fadeDistance:.55,opacityLerp:.14},sky:{rotationSpeed:3e-5},parallax:{maxAngle:6,unlockThreshold:.12,springAccel:.0065,springFriction:.095,catchupSpeed:.055,idleTimeout:2200},walk:{chargeTime:80,releaseGrace:50,maxDist:1e3,speed:.011,acceleration:.6,deceleration:.6,dirLerp:1,dampingZone:.8,bounds:{minX:2,maxX:5,minY:-2,maxY:1.5,minZ:-3.5,maxZ:3.5}}};document.body.style.backgroundColor=M.loader.bgColor,document.body.style.margin=`0`,document.body.style.overflow=`hidden`;var kn=`/font/Controller%20W01%20Two%20Oblique.ttf`,An=`/font/Controller%20W01%20Five%20Oblique.ttf`,jn=`"Controller W01 Two Oblique", 'Courier New', Courier, monospace`,Mn=`"Controller W01 Five Oblique", 'Courier New', Courier, monospace`,Nn=document.createElement(`style`);Nn.textContent=`
  @font-face {
    font-family: 'Controller W01 Two Oblique';
    src: url('${kn}') format('truetype');
    font-weight: 400;
    font-style: normal;
    font-display: swap;
  }
  @font-face {
    font-family: 'Controller W01 Five Oblique';
    src: url('${An}') format('truetype');
    font-weight: 400;
    font-style: normal;
    font-display: swap;
  }
  #hud-loader-root {
    position: fixed; top: 0; left: 0; width: 100vw; height: 100vh;
    background-color: #ffffff;
    z-index: 9999; display: flex; justify-content: center; align-items: center;
    font-family: ${jn};
    color: #ff7b00;
    filter: drop-shadow(0 0 2px rgba(255,102,0,0.9)) drop-shadow(0 0 6px rgba(255,102,0,0.5));
    -webkit-user-select: none; user-select: none;
    transition: opacity ${M.loader.fadeTime}s ease-in-out;
  }
  .hud-laser {
    position: absolute; background-color: #ff7b00;
    // box-shadow: 0 0 1px rgba(255,102,0,0.9), 0 0 1px rgba(255,102,0,0.5);
  }
  .hud-line-top {
    top: 10%; left: 50%; height: 1px; width: 0; transform: translateX(-50%);
    animation: hudExtendX 1s cubic-bezier(0.19,1,0.22,1) 0.5s forwards;
  }
  .hud-line-bottom {
    bottom: 10%; left: 50%; height: 1px; width: 0; transform: translateX(-50%);
    animation: hudExtendX 1s cubic-bezier(0.19,1,0.22,1) 0.5s forwards;
  }
  .hud-line-scan {
    top: 0; left: 0; width: 2px; height: 100vh; opacity: 0;
    animation: hudScanSweep 1.5s cubic-bezier(0.7,0,0.3,1) 0.2s forwards;
  }
  .hud-corner {
    position: absolute; width: 40px; height: 40px;
    opacity: 0; animation: hudAppear 0.5s cubic-bezier(0.19,1,0.22,1) 0.8s forwards;
  }
  .hud-corner-tl { top:10%; left:10%; border-top:2px solid #ff7b00; border-left:2px solid #ff7b00; }
  .hud-corner-tr { top:10%; right:10%; border-top:2px solid #ff7b00; border-right:2px solid #ff7b00; }
  .hud-corner-bl { bottom:10%; left:10%; border-bottom:2px solid #ff7b00; border-left:2px solid #ff7b00; }
  .hud-corner-br { bottom:10%; right:10%; border-bottom:2px solid #ff7b00; border-right:2px solid #ff7b00; }
  .hud-greeble {
    position: absolute; font-size: 10px; text-transform: uppercase;
    letter-spacing: 1.1px; opacity: 0.8; animation: hudBlink 0.2s linear infinite;
  }
  .hud-core {
    position: relative; width: 100%; max-width: 800px; min-height: 58px; text-align: center;
    opacity: 0; animation: hudAppear 0.6s cubic-bezier(0.19,1,0.22,1) 0.95s forwards;
  }
  .hud-status { font-size: 12px; margin-bottom: 20px; letter-spacing: 2px; }
  .hud-bar { display: flex; justify-content: center; gap: 3px; }
  .hud-status,
  .hud-bar,
  .hud-start-prompt {
    transition: opacity 0.45s ease, transform 0.45s ease;
  }
  .hud-start-prompt {
    position: absolute;
    top: 50%;
    left: 50%;
    font-size: 12px;
    letter-spacing: 2px;
    white-space: nowrap;
    opacity: 0;
    pointer-events: none;
    transform: translate(-50%, -50%) scale(0.98);
  }
  .hud-core.is-awaiting-start .hud-status,
  .hud-core.is-awaiting-start .hud-bar {
    opacity: 0;
    transform: translateY(-10px);
  }
  .hud-core.is-awaiting-start .hud-start-prompt {
    opacity: 1;
    transform: translate(-50%, -50%) scale(1);
  }
  .hud-block {
    flex-shrink: 0; width: 20px; height: 4px; border-radius: 1px; transform: skewX(-10deg);
    background-color: rgba(205, 65, 0, 0.1); border: 1px solid rgba(255,204,0,0.2);
    transition: background-color 0.05s ease, box-shadow 0.05s ease;
  }
  .hud-block.lit {
    background-color: #ff7b00;
    box-shadow: 0 0 3px rgba(255,102,0,0.9);
    border: 1px solid #ff7b00;
  }
  @keyframes hudExtendX  { 0%{width:0;opacity:0} 10%{opacity:1} 100%{width:80%;opacity:1} }
  @keyframes hudScanSweep { 0%{transform:translateX(0);opacity:0} 10%{opacity:1} 90%{opacity:1} 100%{transform:translateX(100vw);opacity:0} }
  @keyframes hudAppear   { 0%{transform:scale(1.3);opacity:0} 100%{transform:scale(1);opacity:1} }
  @keyframes hudBlink    { 0%,100%{opacity:0.8} 50%{opacity:0.5} 70%{opacity:1} }
`,document.head.appendChild(Nn);var N=document.createElement(`div`);N.id=`hud-loader-root`,N.innerHTML=`
  <div class="hud-laser hud-line-top"></div>
  <div class="hud-laser hud-line-bottom"></div>
  <div class="hud-laser hud-line-scan"></div>
  <div class="hud-corner hud-corner-tl"></div>
  <div class="hud-corner hud-corner-tr"></div>
  <div class="hud-corner hud-corner-bl"></div>
  <div class="hud-corner hud-corner-br"></div>
  <div class="hud-greeble" style="top:11%;left:13%;">SYS.INIT[2A_CORE]</div>
  <div class="hud-greeble" style="top:11%;right:13%;" id="hud-hex">0xFF3A</div>
  <div class="hud-greeble" style="bottom:11%;left:13%;">AABB.BOUNDS[ENABLE]</div>
  <div class="hud-greeble" style="bottom:11%;right:13%;">MEM_STREAM::ONLINE</div>
  <div class="hud-core">
    <div class="hud-status" id="hud-status">System initializing...</div>
    <div class="hud-bar" id="hud-bar"></div>
    <div class="hud-start-prompt" id="hud-start-prompt">Click anywhere to start</div>
  </div>`,document.body.appendChild(N);var Pn,Fn=new Promise(e=>{Pn=e});(function(){let e=N.querySelector(`#hud-bar`),t=N.querySelector(`#hud-hex`),n=N.querySelector(`#hud-status`);for(let t=0;t<18;t++){let t=document.createElement(`div`);t.className=`hud-block`,e.appendChild(t)}let r=e.querySelectorAll(`.hud-block`),i=0;function a(){i+=Math.random()*2+1,i>100&&(i=100);let e=Math.round(i/100*18);r.forEach((t,n)=>t.classList.toggle(`lit`,n<e)),t.textContent=`0x`+Math.floor(Math.random()*65535).toString(16).toUpperCase(),i<100?setTimeout(a,Math.random()*100+20):(n.textContent=`Boot sequence complete.`,setTimeout(Pn,800))}setTimeout(a,1e3)})();function In(){return E(`loader.prompt.wait.start`),new Promise(e=>{let t=N.querySelector(`.hud-core`);if(!t){E(`loader.prompt.missing`),ht=null,e();return}let n=!1,r=t=>{if(n)return;let r=performance.now();if(E(`loader.gesture.finish.start`,{reason:t}),n=!0,Ye=!1,J(),ht=null,N.removeEventListener(`pointerdown`,i,!0),N.removeEventListener(`keydown`,a,!0),typeof Y?.releaseQueuedPlayback==`function`){let e=performance.now();Y.releaseQueuedPlayback(t),E(`loader.gesture.audioRelease.called`,{reason:t,elapsedMs:performance.now()-e})}E(`loader.gesture.finish.end`,{reason:t,elapsedMs:performance.now()-r}),e()},i=e=>{E(`loader.gesture.pointerdown`,{button:e.button,pointerType:e.pointerType}),e.preventDefault(),r(`loader-start-pointer`)},a=e=>{e.key!==`Enter`&&e.key!==` `||(E(`loader.gesture.keydown`,{key:e.key}),e.preventDefault(),r(`loader-start-keyboard`))};t.classList.add(`is-awaiting-start`),ht=()=>{E(`loader.gesture.debugTrigger`),r(`loader-start-debug`)},N.tabIndex=0,N.focus({preventScroll:!0}),N.addEventListener(`pointerdown`,i,!0),N.addEventListener(`keydown`,a,!0),E(`loader.prompt.awaiting`,{activeElementId:document.activeElement?.id??``})})}var Ln=document.getElementById(`app`),Rn=new s,zn={fov:65,near:.1,far:1e3},P={exposure:1.1,saturation:1.25,highlights:.95,washout:0,lift:0,gamma:1,colorBalance:new m(1,1,1),bloomOffCompensation:{exposure:1.26,saturation:1.55,highlights:.95,washout:0,lift:0,gamma:1,colorBalance:new m(1.003,1.006,1.026)},repeatX:2,repeatY:1.2,offsetY:0,rotationY:-3*Math.PI/4},F={exposure:.9,bloom:{strength:.01,radius:0,threshold:0,transitionDurationMs:220},unfocus:{bloomResumeProgress:.5}},Bn={appearAt:3,fadeDuration:1},Vn={sources:[`/audio/outer-bgm.ogg`,`/audio/outer-bgm.m4a`],loop:!0,initialVolume:.56,defaultWantsToPlay:!0},Hn={minVolumeRatio:.2,volumeSyncEpsilon:.003},I=new u(zn.fov,O.aspect,zn.near,zn.far),Un=new m().subVectors(M.intro.startTarget,M.intro.startPos).normalize(),Wn=M.intro.startPos.clone().addScaledVector(Un,-M.loader.cameraPush.distance);I.position.copy(Wn);var L=new de({antialias:!0,alpha:!1,powerPreference:`high-performance`});function Gn(){L.domElement.style.left=`${O.left}px`,L.domElement.style.top=`${O.top}px`}function Kn(e=nr,t=Xn()){return v()||!e?t:Jn()}function qn(e=Xn()){let t=Kn(nr,e);L.setPixelRatio(t),L.setSize(O.width,O.height),tr=e,R?.setPixelRatio&&R.setPixelRatio(e),R?.setSize&&R.setSize(O.width,O.height),z?.setSize&&z.setSize(Math.max(1,Math.floor(O.width*e*.5)),Math.max(1,Math.floor(O.height*e*.5)))}function Jn(){return Math.min(window.devicePixelRatio||1,Zt())}function Yn(){return Qt()}function Xn(){let e=Jn();return f.clamp(e*Yn(),$t(),e)}L.setPixelRatio(Jn()),L.setSize(O.width,O.height),L.setClearColor(0,1),L.outputColorSpace=g,L.useLegacyLights=!1,L.toneMapping=4,L.toneMappingExposure=F.exposure,Ln.style.position=`relative`,Ln.style.backgroundColor=`#000000`,L.domElement.style.position=`absolute`,L.domElement.style.zIndex=`1`,L.domElement.style.pointerEvents=`auto`,L.domElement.style.display=`block`,Gn(),Ln.appendChild(L.domElement);var Zn=null,R=null,Qn=null,z=null,$n=null,er=0,tr=0,nr=!1,B={currentStrength:A.bloomEnabled&&!v()?F.bloom.strength:0,fromStrength:A.bloomEnabled&&!v()?F.bloom.strength:0,targetStrength:A.bloomEnabled&&!v()?F.bloom.strength:0,transitionStartedAt:performance.now()},rr={hidden:!1};function ir(){return A.bloomEnabled&&!Rr()?F.bloom.strength:0}function ar(e=performance.now()){let t=ir();Math.abs(t-B.targetStrength)<1e-4||(B.fromStrength=B.currentStrength,B.targetStrength=t,B.transitionStartedAt=e)}function or(){return Math.abs(B.currentStrength-B.targetStrength)>1e-4}function sr(){return B.currentStrength>1e-4||B.targetStrength>1e-4}function cr(e=performance.now()){ar(e);let t=Math.max(0,F.bloom.transitionDurationMs??0);if(t<=0)B.currentStrength=B.targetStrength,B.fromStrength=B.targetStrength;else{let n=f.clamp((e-B.transitionStartedAt)/t,0,1),r=n<.5?4*n*n*n:1-(-2*n+2)**3/2;B.currentStrength=f.lerp(B.fromStrength,B.targetStrength,r),n>=1&&(B.currentStrength=B.targetStrength,B.fromStrength=B.targetStrength)}z&&(z.enabled=sr(),z.strength=B.currentStrength,z.radius=F.bloom.radius,z.threshold=F.bloom.threshold)}function lr(){return zr()?0:A.msaaSamples}function ur(e=performance.now()){return ar(e),Gt}function dr(e=lr()){let t=k(e,0);if(t<=0)return 0;let n=L.capabilities.maxSamples??0;return n>=t?t:n>=4?4:n>=2?2:0}function fr(){R?.dispose&&R.dispose(),z?.dispose&&z.dispose(),$n?.dispose&&$n.dispose(),Zn&&Zn.dispose(),R=null,Qn=null,z=null,$n=null,Zn=null,nr=!1}function pr({pixelRatio:t=Xn(),msaaSamples:n=dr(lr()),useComposer:r=ur()}={}){fr();let a=Math.max(1,Math.floor(O.width*t)),o=Math.max(1,Math.floor(O.height*t)),s=Kn(r,t);L.setPixelRatio(s),L.setSize(O.width,O.height),Gn(),tr=t,er=r?n:0,nr=r,r&&(Zn=new i(a,o,{samples:n,type:v()?re:ne}),R=new p(L,Zn),R?.setPixelRatio&&R.setPixelRatio(t),Qn=new ce(Rn,I),R.addPass(Qn),z=new oe(new e(Math.max(1,Math.floor(O.width*t*.5)),Math.max(1,Math.floor(O.height*t*.5))),B.currentStrength,F.bloom.radius,F.bloom.threshold),cr(performance.now()),R.addPass(z),$n=new ue,R.addPass($n),R?.setSize&&R.setSize(O.width,O.height))}function mr({forceRebuild:e=!1}={}){let t=performance.now();ar(t);let n=Xn(),r=dr(lr()),i=ur(t);if(e||Math.abs(n-tr)>.001||r!==er||i!==nr){pr({pixelRatio:n,msaaSamples:r,useComposer:i}),q.projectionInvalidated=!0,J();return}if(Math.abs(n-tr)>.001){qn(n),q.projectionInvalidated=!0,J();return}cr(t)}pr();function hr(){let e=Xn();return{scale:Number(Yn().toFixed(3)),pixelRatio:e,width:Math.max(1,Math.floor(O.width*e)),height:Math.max(1,Math.floor(O.height*e))}}function gr(){let e=performance.memory;if(!e)return null;let t=e=>Number((e/(1024*1024)).toFixed(2));return{usedMB:t(e.usedJSHeapSize),totalMB:t(e.totalJSHeapSize),limitMB:t(e.jsHeapSizeLimit)}}function _r(){let e=Yi(),t=hr(),n=k(A.msaaSamples,0),r=k(lr(),0),i=dr(lr()),a=$?.velocity?.lengthSq?.()??0,o=Z?.velocity?.lengthSq?.()??0,s=Z?.currentMouse?.distanceToSquared?.(Z.targetMouse)??0,c=Math.abs((W?.current??0)-(W?.target??0)),l=G?.lastUpdateAt?performance.now()-G.lastUpdateAt:null;return{ready:!Je,isAnimating:S,physicsUnlocked:b,focused:x,benchmarkMode:!1,externalTextureOverridesEnabled:!0,assetProfile:we,assetProfileLabel:y.label,performanceProfile:{qualityMode:We,qualitySelectionSource:Ge,qualityLowTierScore:Ue.profile?.lowTierScore??null,lowPowerOuterMode:v(),maxDevicePixelRatio:Zt(),renderScale:Number(Yn().toFixed(3)),skyOnlyTargetFps:en()},bloomEnabled:e.bloomEnabled,bloomStrength:Number(B.currentStrength.toFixed(4)),savedBloomEnabled:A.bloomEnabled,requestedMsaaSamples:r,savedMsaaSamples:n,effectiveMsaaSamples:i,msaaLabel:Tn(i),avgRenderMs:Number(D.avgRenderMs.toFixed(3)),avgFrameMs:Number(D.avgFrameMs.toFixed(3)),fps:Number(D.fps.toFixed(2)),resolution:t,viewport:{width:O.width,height:O.height,left:O.left,top:O.top,aspect:Number(O.aspect.toFixed(3)),clamped:O.isClamped},rendererInfo:{calls:L.info.render.calls,triangles:L.info.render.triangles,lines:L.info.render.lines,points:L.info.render.points,frame:L.info.render.frame,geometries:L.info.memory.geometries,textures:L.info.memory.textures},jsHeap:gr(),internals:{outerScenePaused:Fr(),effectiveRenderPath:Wr()?`renderer`:`composer`,composerActive:nr,outerCanvasVisible:!rr.hidden,screenContentMode:jr,screenAppReadyForProjection:Ai(),renderRequested:q.renderRequested,projectionInvalidated:q.projectionInvalidated,hasActiveSceneAnimation:ei(performance.now()),hasSkyAnimation:!Ye&&qr(),transitionSettleRemainingMs:Math.max(0,Number((q.transitionSettleUntil-performance.now()).toFixed(3))),walkVelocitySq:Number(a.toFixed(8)),parallaxVelocitySq:Number(o.toFixed(8)),parallaxDeltaSq:Number(s.toFixed(8)),screenOpacityDelta:Number(c.toFixed(8)),screenProjectionAgeMs:l==null?null:Number(l.toFixed(3))}}}function vr(e=2e4){return new Promise((t,n)=>{let r=performance.now();function i(){if(!Je){t(_r());return}if(performance.now()-r>=e){n(Error(`Timed out waiting for outer scene readiness`));return}window.requestAnimationFrame(i)}i()})}function yr(e=3e4){return new Promise((t,n)=>{let r=performance.now();function i(){if(!Je&&!S&&b){t(_r());return}if(performance.now()-r>=e){n(Error(`Timed out waiting for benchmark-stable scene state`));return}window.requestAnimationFrame(i)}i()})}function br(e=2e4){return new Promise((t,n)=>{let r=performance.now();function i(){if(typeof ht==`function`){t(!0);return}if(performance.now()-r>=e){n(Error(`Timed out waiting for loader start prompt`));return}window.requestAnimationFrame(i)}i()})}function xr(e=3e3){return new Promise((t,n)=>{let r=Math.max(250,Number(e)||3e3),i=performance.now(),a=[],o=[],s=[],c=0;function l(){let e=_r(),n=e=>e.length?Number((e.reduce((e,t)=>e+t,0)/e.length).toFixed(3)):0,i=o.map(e=>e>0?1e3/e:0);t({...e,sampleDurationMs:r,sampleCount:a.length,windowAvgRenderMs:n(a),windowAvgFrameMs:n(o),windowAvgFps:n(i),windowMinFps:i.length?Number(Math.min(...i).toFixed(3)):0,windowMaxFps:i.length?Number(Math.max(...i).toFixed(3)):0,windowAvgHeapMB:n(s)})}function u(e){let t=_r();if(a.push(D.lastRenderMs||t.avgRenderMs),t.jsHeap?.usedMB!=null&&s.push(t.jsHeap.usedMB),c>0){let t=e-c;t>0&&t<250&&o.push(t)}if(c=e,performance.now()-i>=r){l();return}window.requestAnimationFrame(u)}vr().then(()=>u()).catch(n)})}window.__outerWebsiteDebug={getMetrics:_r,getWinXPRuntimeState:()=>({focusState:be(),presentationState:ge(),presentationProfile:_e()}),waitForReady:vr,waitForBenchmarkStable:yr,waitForStartPrompt:br,getStartupTimeline:dn,clearStartupTimeline:fn,getQualityProfile:()=>({mode:We,selectionSource:Ge,profile:Ue.profile,storageKeys:{mode:Te,profile:Ee}}),setQualityMode:e=>(na(Pe(e)),_r()),clearQualityProfile:()=>(Fe(),!0),startExperience:()=>typeof ht==`function`?(ht(),!0):!1,sampleMetrics:xr};var Sr=new ie(I,L.domElement);Sr.enabled=!1,Sr.target.copy(M.intro.startTarget);var Cr=new a,wr=new le,Tr=new h,Er=new l,Dr=new d;Er.setTranscoderPath(`/basis/`),Er.detectSupport(L),Dr.setDecoderPath(`/draco/`),Dr.preload(),wr.setKTX2Loader(Er),wr.setDRACOLoader(Dr);var Or=null,V=null,H=null,kr=null,Ar=null,jr=`live`,Mr=[],Nr=null,U=null,W={runtimeEnabled:!1,current:0,target:0,pointerEvents:`none`},G={quad:null,lastUpdateAt:0,lastMissStartedAt:0},K={currentGain:1,fullVolumeDistance:0,minimumVolumeDistance:0,lastSyncedVolume:null},q={frameId:null,renderRequested:!0,projectionInvalidated:!0,skyFrameTimeoutId:null,transitionSettleUntil:0},Pr={mode:`idle`,startedAt:0,duration:0,easingName:`easeInOutCubic`};function Fr(){return x&&!S}function Ir(e,t,n,r=performance.now()){Pr.mode=e,Pr.startedAt=r,Pr.duration=Math.max(1,t),Pr.easingName=n}function Lr(){Pr.mode=`idle`,Pr.startedAt=0,Pr.duration=0,Pr.easingName=`easeInOutCubic`}function Rr(e=performance.now()){return v()}function zr(){return v()}function Br(){return!1}function Vr(){let e=Br();rr.hidden!==e&&(rr.hidden=e,L.domElement.style.display=`block`,L.domElement.style.visibility=e?`hidden`:`visible`,L.domElement.style.opacity=e?`0`:`1`,L.domElement.style.pointerEvents=e?`none`:`auto`)}function Hr(){let e={focused:x,animating:S,settled:Fr()};mr(),Vr(),$i(),ve(e)}ve(xe);function Ur(e){x!==e&&(x=e,Ui(),mr(),Vr(),$i(),J())}function Wr(){return!nr}function Gr(e,t){if(!e||!t)return;let n=t.getBoundingClientRect(),r=mt?.getBoundingClientRect()??n,i=e.offsetWidth||e.getBoundingClientRect().width||0,a=f.clamp(r.right-i,yt,window.innerWidth-yt-i);e.style.left=`${a}px`,e.style.top=`${n.bottom+vt}px`}function Kr(){Gr(C,rt),Gr(w,ut)}function qr(){return!!U&&!Fr()&&!v()}function Jr(e,t=an()){return e.lengthSq()<=t*t}function Yr(e,t=Lt){return e.lengthSq()<=t*t}function Xr(){return W.runtimeEnabled&&Math.abs(W.current-W.target)>Bt}function Zr(){q.skyFrameTimeoutId!==null&&(window.clearTimeout(q.skyFrameTimeoutId),q.skyFrameTimeoutId=null)}function J(){q.renderRequested=!0,Zr(),Vr(),q.frameId===null&&(q.frameId=window.requestAnimationFrame(ka))}function Qr(e=tn()){q.renderRequested||q.frameId!==null||q.skyFrameTimeoutId!==null||(q.skyFrameTimeoutId=window.setTimeout(()=>{q.skyFrameTimeoutId=null,q.frameId===null&&(q.frameId=window.requestAnimationFrame(ka))},Math.max(0,e)))}function $r(){q.projectionInvalidated=!0,J()}function ei(e){return!!(Je&&!Ye||S||or()||e<q.transitionSettleUntil||Q.w||Q.a||Q.s||Q.d||Q[` `]||Q.control||$.active||$.velocity.lengthSq()>1e-6||Z.velocity.lengthSq()>1e-6||!Jr(Z.currentMouse)||Z.currentMouse.distanceToSquared(Z.targetMouse)>1e-6||Xr())}function ti(e=Ot){q.transitionSettleUntil=Math.max(q.transitionSettleUntil,performance.now()+e),J()}function ni(e=performance.now(),t=!1,n=!1){return q.projectionInvalidated?!0:t?!1:x?!!(S||Je):S||Je||n||q.renderRequested?!0:e-G.lastUpdateAt>=jt}function ri(e=performance.now(),{skyOnly:t=!1,sceneAnimationActive:n=!1,frameScale:r=1}={}){let i=performance.now(),a=or();cr(e),nr&&!ur(e)&&mr({forceRebuild:!0}),_i();let o=or();(a||o)&&!S&&$i(),t||Ri(),!nr||!R?L.render(Rn,I):R.render(),t||Da(r),ni(e,t,n)&&(fi(),q.projectionInvalidated=!1,G.lastUpdateAt=e),oa(performance.now()-i,e)}function ii(e){let t=f.clamp(e,0,1);Math.abs(W.current-t)<.001||(W.current=t,H?.setVisualState({brightness:t}),Vr())}function ai(e){W.pointerEvents!==e&&(W.pointerEvents=e,H?.setVisualState({pointerEvents:e}))}function oi(e,t){if(On.cameraSpacePoint.copy(e).applyMatrix4(I.matrixWorldInverse).z>=-.001)return null;let n=On.projectedPoint.copy(e).project(I);return!Number.isFinite(n.x)||!Number.isFinite(n.y)?null:(t.x=O.left+(n.x*.5+.5)*O.width,t.y=O.top+(-n.y*.5+.5)*O.height,t)}function si(){if(!V)return null;V.updateMatrixWorld(!0);for(let e=0;e<On.localCorners.length;e+=1)if(!oi(On.worldCorners[e].copy(On.localCorners[e]).applyMatrix4(V.matrixWorld),On.quad[e]))return null;return On.quad}function ci(e){return e.map(e=>({x:e.x,y:e.y}))}function li(e,t){for(let n=0;n<t.length;n+=1)e[n].x=t[n].x,e[n].y=t[n].y}function ui(e,t,n=Pt){if(!e||!t||e.length!==t.length)return!1;for(let r=0;r<e.length;r+=1)if(Math.abs(e[r].x-t[r].x)>n||Math.abs(e[r].y-t[r].y)>n)return!1;return!0}function di(){if(G.quad&&H?.isMounted?.()){G.lastMissStartedAt=0,H.setVisualState({pointerEvents:`none`,visible:!0}),Vr();return}G.quad=null,G.lastMissStartedAt=0,H?.setVisualState({pointerEvents:`none`,visible:!1}),Vr()}function fi(){if(!V){di();return}let e=performance.now(),t=si();if(!t){if(G.quad&&(G.lastMissStartedAt===0&&(G.lastMissStartedAt=e),e-G.lastMissStartedAt<nn())){H?.setVisualState({visible:!0}),Vr();return}di();return}if(G.lastMissStartedAt=0,!G.quad)G.quad=ci(t);else if(!ui(G.quad,t))li(G.quad,t);else{H&&H.setVisualState({visible:!0}),Vr();return}H&&(H.syncProjection(G.quad),H.setVisualState({visible:!0})),Vr()}function pi(e,t){if(!G.quad||G.quad.length!==4)return!1;let n=0;for(let r=0;r<G.quad.length;r+=1){let i=G.quad[r],a=G.quad[(r+1)%G.quad.length],o=(a.x-i.x)*(t-i.y)-(a.y-i.y)*(e-i.x);if(Math.abs(o)<=.5)continue;let s=Math.sign(o);if(n===0){n=s;continue}if(n!==s)return!1}return!0}function mi(e){gn=!1,e.traverse(e=>{e.isMesh&&(e.name.toLowerCase().includes(`screen_plane`)||e.name.toLowerCase().includes(`hitbox`)||(Array.isArray(e.material)?e.material:[e.material]).forEach(e=>{if(!e||hn.includes(e))return;hn.push(e);let t=e.onBeforeCompile,n=Object.prototype.hasOwnProperty.call(e,`customProgramCacheKey`),r=e.customProgramCacheKey;e.userData.outerWebsiteShockwaveMaterial={originalOnBeforeCompile:t,hadOwnCustomProgramCacheKey:n,originalCustomProgramCacheKey:r},e.onBeforeCompile=(n,r)=>{typeof t==`function`&&t.call(e,n,r),e.userData.shader=n,n.uniforms.uShockwaveRadius={value:0},n.uniforms.uShockwaveCenter={value:_n},n.uniforms.uEdgeIntensity={value:M.loader.shockwave.edgeIntensity},n.vertexShader=`
          varying vec3 vGlobalPos;
          ${n.vertexShader}
        `.replace(`#include <worldpos_vertex>`,`
          #include <worldpos_vertex>
          vGlobalPos = (modelMatrix * vec4(position, 1.0)).xyz;
          `),n.fragmentShader=`
          uniform float uShockwaveRadius;
          uniform vec3 uShockwaveCenter;
          uniform float uEdgeIntensity;
          varying vec3 vGlobalPos;
          ${n.fragmentShader}
        `.replace(`#include <dithering_fragment>`,`
          #include <dithering_fragment>
          float dist = distance(vGlobalPos, uShockwaveCenter);
          if (uShockwaveRadius < 0.01 || dist > uShockwaveRadius) {
            discard; 
          }
          float edgeWidth = ${M.loader.shockwave.edgeWidth.toFixed(2)};
          if (uShockwaveRadius > 0.01 && dist > uShockwaveRadius - edgeWidth) {
             float glow = (dist - (uShockwaveRadius - edgeWidth)) / edgeWidth;
             gl_FragColor.rgb += vec3(glow * 0.2, glow * 0.8, glow * 1.5) * uEdgeIntensity;
          }
          `)},e.customProgramCacheKey=()=>`${typeof r==`function`?r.call(e):``}|${Ut}`,e.needsUpdate=!0}))})}function hi(){gn||(gn=!0,hn.forEach(e=>{let t=e?.userData?.outerWebsiteShockwaveMaterial;t&&(e.onBeforeCompile=t.originalOnBeforeCompile,t.hadOwnCustomProgramCacheKey?e.customProgramCacheKey=t.originalCustomProgramCacheKey:delete e.customProgramCacheKey,delete e.userData.shader,delete e.userData.outerWebsiteShockwaveMaterial,e.needsUpdate=!0)}),J())}function gi(n,i={}){return n.wrapS=t,n.wrapT=ae,new r({transparent:!0,uniforms:{tSky:{value:n},uExposure:{value:P.exposure},uSaturation:{value:P.saturation},uHighlights:{value:P.highlights},uWashout:{value:i.washout??P.washout},uLift:{value:i.lift??P.lift},uGamma:{value:i.gamma??P.gamma},uColorBalance:{value:P.colorBalance.clone()},uRepeat:{value:new e(i.repeatX??P.repeatX,i.repeatY??P.repeatY)},uOffsetY:{value:i.offsetY??P.offsetY},uSkyOpacity:{value:0}},vertexShader:`varying vec2 vUv; void main() { vUv = uv; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }`,fragmentShader:`
      uniform sampler2D tSky; uniform float uExposure; uniform float uSaturation; uniform float uHighlights; uniform float uWashout; uniform float uLift; uniform float uGamma; uniform vec3 uColorBalance; uniform vec2 uRepeat; uniform float uOffsetY;
      uniform float uSkyOpacity;
      varying vec2 vUv;
      void main() {
        if (uSkyOpacity < 0.01) discard; 
        vec2 uv = vec2(vUv.x * uRepeat.x, vUv.y * uRepeat.y + uOffsetY);
        vec3 color = texture2D(tSky, uv).rgb * uExposure;
        float luma = dot(color, vec3(0.2126, 0.7152, 0.0722));
        float highlight = smoothstep(0.38, 0.96, luma);
        color = mix(vec3(luma), color, uSaturation);
        color = mix(color, vec3(1.0), uWashout * (0.35 + highlight * 0.65));
        color = mix(color, color * uHighlights, highlight * 0.25);
        color = mix(color, vec3(1.0), uLift);
        color *= uColorBalance;
        color = pow(clamp(color, vec3(0.0), vec3(1.0)), vec3(uGamma));
        gl_FragColor = vec4(color, uSkyOpacity);
      }
    `,side:0,toneMapped:!1})}function _i(){let e=U?.material?.uniforms;if(!e)return;let t=Math.max(1e-4,F.bloom.strength??1e-4),n=f.clamp(B.currentStrength/t,0,1),r=P.bloomOffCompensation;e.uExposure.value=f.lerp(r.exposure,P.exposure,n),e.uSaturation.value=f.lerp(r.saturation,P.saturation,n),e.uHighlights.value=f.lerp(r.highlights,P.highlights,n),e.uWashout.value=f.lerp(r.washout,P.washout,n),e.uLift.value=f.lerp(r.lift,P.lift,n),e.uGamma.value=f.lerp(r.gamma,P.gamma,n),e.uColorBalance.value.lerpVectors(r.colorBalance,P.colorBalance,n)}var vi={computer:{path:y.lightMapPaths.computer}},yi={room:{path:y.bakedSurfacePaths.room},table:{path:y.bakedSurfacePaths.table},chairBack:{path:y.bakedSurfacePaths.chairBack},chairLeft:{path:y.bakedSurfacePaths.chairLeft},chairRight:{path:y.bakedSurfacePaths.chairRight}},bi=new Set([`room`,`table`]),xi={computer:{envMapIntensity:10.95,roughnessMin:.8}};function Si(e){e.map&&(e.map.colorSpace=g),e.emissiveMap&&(e.emissiveMap.colorSpace=g)}function Ci(e){let t=e.getAttribute(`uv`);if(!t)return;let n=new Float32Array(t.array.length);n.set(t.array),e.setAttribute(`uv1`,new se(n,t.itemSize))}function wi(e){return e.includes(`room`)||e.includes(`wall`)||e.includes(`floor`)||e.includes(`ceiling`)?`room`:(e.includes(`table`)||e.includes(`desk`))&&!e.includes(`portable`)?`table`:e.includes(`chair_back`)||e.includes(`chair`)&&e.includes(`back`)?`chairBack`:e.includes(`chair_left`)||e.includes(`chair`)&&e.includes(`left`)?`chairLeft`:e.includes(`chair_right`)||e.includes(`chair`)&&e.includes(`right`)?`chairRight`:null}function Ti(e){return e.includes(`computer`)||e.includes(`pc`)||e.includes(`monitor`)||e.includes(`portable`)||e.includes(`bm86`)?`computer`:null}function Ei(e){return bi.has(e)}async function Di(e,t={}){let n=await Cr.loadAsync(e);return n.flipY=t.flipY??!1,t.colorSpace&&(n.colorSpace=t.colorSpace),n}async function Oi(e,t={}){if(e.toLowerCase().endsWith(`.ktx2`)){let n=await Er.loadAsync(e);return t.colorSpace&&(n.colorSpace=t.colorSpace),n}return Di(e,t)}function ki(e){H?.setVisualState({transition:e})}function Ai(){return!!H?.isMounted()}function ji(e=`preload`){return kr?(E(`screenOverlay.import.reuse`,{reason:e}),kr):(E(`screenOverlay.import.start`,{reason:e}),kr=Ce(()=>import(`./outer-screen-overlay-IrWsP7h0.js`).then(t=>(E(`screenOverlay.import.end`,{reason:e}),t),t=>{throw kr=null,E(`screenOverlay.import.error`,{reason:e,message:t?.message??String(t)}),t}),__vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10])),kr)}async function Mi(){let e=performance.now();return E(`screenOverlay.ensure.start`,{hasOverlay:!!H,hasPendingModulePromise:!!kr,hasPendingOverlayPromise:!!Ar}),H?(E(`screenOverlay.ensure.end`,{branch:`cached`,elapsedMs:performance.now()-e}),H):(Ar||=ji(`ensure`).then(({createScreenHtmlOverlay:e})=>(H=e({width:j.width,height:j.height}),K.lastSyncedVolume=null,H.setVisualState({opacity:W.current,brightness:1,pointerEvents:`none`,transition:``,visible:!1}),Vr(),zi(Y.getState().isMuted),Bi(Y.getState().volume),$r(),H)),Ar.then(t=>(E(`screenOverlay.ensure.end`,{branch:`promise`,elapsedMs:performance.now()-e,mounted:t?.isMounted?.()??!1}),t)))}function Ni(e){if(!e||V)return;V=new me,Rn.add(V),e.updateWorldMatrix(!0,!1),e.geometry.computeBoundingBox();let t=e.geometry.boundingBox,n=new m;t.getCenter(n);let r=n.applyMatrix4(e.matrixWorld);V.position.copy(r),V.rotation.set(j.rotationX,j.rotationY,j.rotationZ,`YXZ`),V.translateZ(j.offsetZ),V.translateX(j.offsetX),V.translateY(j.offsetY);let i=new m;t.getSize(i);let a=[i.x,i.y,i.z].sort((e,t)=>t-e),o=a[0]/j.width*j.scaleMultiplier*j.scaleX,s=a[1]/j.height*j.scaleMultiplier*j.scaleY;V.scale.set(o,s,1),V.updateMatrixWorld(!0);let c=new m(0,0,1).applyQuaternion(V.quaternion).normalize();pn.copy(V.position).addScaledVector(c,M.focus.distance),pn.y+=M.focus.yOffset,mn.copy(V.position),mn.x+=M.focus.targetOffsetX,mn.y+=M.focus.targetOffsetY,mn.z+=M.focus.targetOffsetZ,K.fullVolumeDistance=pn.distanceTo(V.position),K.minimumVolumeDistance=Math.max(K.fullVolumeDistance+1e-4,Wn.distanceTo(V.position),M.intro.startPos.distanceTo(V.position),M.unfocus.endPos.distanceTo(V.position)),K.currentGain=Fi(I.position.distanceTo(V.position)),$r()}function Pi(e){return f.clamp(e,0,1)}function Fi(e){let t=K.fullVolumeDistance,n=Math.max(K.minimumVolumeDistance,t+1e-4);if(!(t>0)||!(n>t)||e<=t)return 1;if(e>=n)return Hn.minVolumeRatio;let r=(e-t)/(n-t),i=r*r*(3-2*r);return f.lerp(1,Hn.minVolumeRatio,i)}function Ii(e){jr=`live`}function Li(e){return Pi(e*K.currentGain)}function Ri(){if(!V||!Y||!Ai())return;let e=Fi(I.position.distanceTo(V.position));Math.abs(e-K.currentGain)<.001||(K.currentGain=e,Bi(Y.getState().volume))}function zi(e){if(H?.syncAudioControl){H.syncAudioControl({type:ye.SET_MUTED,muted:!!e});return}let t=window.__outerWebsiteAudioRuntime;t&&t.setMuted(!!e)}function Bi(e){let t=Li(e);if(K.lastSyncedVolume!==null&&Math.abs(K.lastSyncedVolume-t)<Hn.volumeSyncEpsilon)return;if(K.lastSyncedVolume=t,H?.syncAudioControl){H.syncAudioControl({type:ye.SET_VOLUME,volume:t});return}let n=window.__outerWebsiteAudioRuntime;n&&n.setVolume(t)}function Vi(){let e=(Array.isArray(Vn.sources)?Vn.sources:[Vn.src]).filter(Boolean),t=new Audio;t.__outerWebsiteIgnoreGlobalAudio=!0,t.preload=`auto`,t.loop=Vn.loop,t.volume=Vn.initialVolume,t.playsInline=!0;let n=!1,r=!0,i=0,a=null,o=0,s=null,c=0,l=null,u=null,d={hasSource:e.length>0,hasError:!1,isMuted:!1,isPlaying:!1,needsUserGesture:!1,unlockArmed:!1,volume:Vn.initialVolume,wantsToPlay:Vn.defaultWantsToPlay},ee=()=>e[o]||``,te=()=>{let e=ee();return e?(t.getAttribute(`src`)!==e&&(t.src=e),!0):(t.removeAttribute(`src`),!1)},ne=()=>o>=e.length-1?!1:(o+=1,n=!1,te()),p=()=>{typeof l==`function`&&l({...d,currentSource:ee()})},m=()=>{a!==null&&(window.clearTimeout(a),a=null)},re=()=>{i=0,m()},ie=(e,n=240)=>!d.wantsToPlay||d.needsUserGesture?!1:a===null?i>=12?!1:(a=window.setTimeout(()=>{a=null,i+=1,t.readyState===0&&!d.hasError&&t.load(),me(`${e}-retry-${i}`)},n),!0):!0,ae=({restoreVolume:e=!1}={})=>{c+=1,s!==null&&(window.cancelAnimationFrame(s),s=null),e&&(t.volume=Pi(d.volume))},oe=e=>{if(t.paused||t.muted||r||t.volume<=.001){e();return}ae();let n=c,i=t.volume,a=performance.now(),o=r=>{if(n!==c)return;let l=Math.min((r-a)/bt,1);if(t.volume=f.lerp(i,0,l),l<1){s=window.requestAnimationFrame(o);return}s=null,e()};s=window.requestAnimationFrame(o)},h=(e=!1)=>{t.muted=e||d.isMuted||r,t.volume=Pi(d.volume)},se=async()=>{if(!d.hasSource||n)return!1;h(!0);try{return await t.play(),re(),n=!0,d.hasError=!1,d.isPlaying=!0,d.needsUserGesture=!1,g(),p(),!0}catch{return h(),ie(`prime-muted-autoplay`),!1}},ce=()=>!n||t.paused?!1:(ae({restoreVolume:!0}),t.currentTime=0,h(),re(),d.hasError=!1,d.isPlaying=!0,d.needsUserGesture=!1,g(),p(),!0),le=()=>{if(!n||t.paused)return!1;t.pause();try{t.currentTime=0}catch{return!1}return d.isPlaying=!1,!0},ue=(e=`timeline-sync`)=>{let i=performance.now();if(E(`audio.releaseQueuedPlayback.start`,{reason:e,holdAudibleStart:r,wantsToPlay:d.wantsToPlay,isPlaying:d.isPlaying,hasPrimedMutedAutoplay:n,paused:t.paused}),!r){d.wantsToPlay&&!d.isPlaying?me(e):(h(),p()),E(`audio.releaseQueuedPlayback.end`,{reason:e,branch:`already-released`,elapsedMs:performance.now()-i});return}if(r=!1,d.needsUserGesture=!1,d.hasError=!1,re(),g(),h(),!d.wantsToPlay){p(),E(`audio.releaseQueuedPlayback.end`,{reason:e,branch:`not-wanted`,elapsedMs:performance.now()-i});return}let a=le();me(a?`${e}-restart-from-zero`:e),E(`audio.releaseQueuedPlayback.end`,{reason:e,branch:a?`primed-restart`:`play`,elapsedMs:performance.now()-i})},de=()=>{window.setTimeout(()=>{t.currentTime<.25&&(t.currentTime=0),h(),p()},80)},fe=async()=>{h(!0);try{return await t.play(),re(),d.hasError=!1,d.isPlaying=!0,d.needsUserGesture=!1,g(),de(),p(),!0}catch{return h(),!1}},g=()=>{!d.unlockArmed||!u||([`pointerdown`,`keydown`,`touchstart`].forEach(e=>{window.removeEventListener(e,u,!0)}),u=null,d.unlockArmed=!1)},pe=()=>{d.unlockArmed||=(u=()=>{g(),d.wantsToPlay&&me(`user-gesture`)},[`pointerdown`,`keydown`,`touchstart`].forEach(e=>{window.addEventListener(e,u,!0)}),!0)},me=async(e=`manual`)=>{if(d.wantsToPlay=!0,ae({restoreVolume:!0}),!d.hasSource)return p(),!1;if(ce())return!0;d.hasError&&=(t.load(),!1),h();try{return await t.play(),re(),d.hasError=!1,d.isPlaying=!0,d.needsUserGesture=!1,g(),p(),!0}catch(n){return d.isPlaying=!t.paused,n?.name===`NotAllowedError`?await fe()||(d.hasError=!1,ie(`autoplay-blocked`)||(d.needsUserGesture=!0,pe())):n?.name===`AbortError`||n?.name===`NotSupportedError`?(d.hasError=!1,ie(n.name===`AbortError`?`media-aborted`:`media-not-ready`)||(d.hasError=!0)):(d.hasError=!0,console.warn(`[BGM] Unable to play audio (${e}).`,n)),p(),!1}},he=()=>{d.wantsToPlay=!1,d.needsUserGesture=!1,re(),g(),oe(()=>{t.pause(),ae({restoreVolume:!0}),d.isPlaying=!1,p()})},ge=()=>{if(d.isPlaying||d.wantsToPlay){he();return}me(`toggle`)},_e=e=>{let t=()=>{d.isMuted=e,h(),zi(d.isMuted),p()};if(e!==d.isMuted){if(e){oe(t);return}ae({restoreVolume:!0}),t()}};return t.addEventListener(`play`,()=>{d.isPlaying=!0,p()}),t.addEventListener(`pause`,()=>{d.isPlaying=!1,p()}),t.addEventListener(`ended`,()=>{d.isPlaying=!1,p()}),t.addEventListener(`canplay`,()=>{d.wantsToPlay&&!d.isPlaying&&!d.needsUserGesture&&ie(`canplay`,0)}),t.addEventListener(`error`,()=>{let e=t.error?.code??null;if(e===1||e===null){ie(`media-load-aborted`);return}if(e===4){if(ne()){re(),d.hasError=!1,d.isPlaying=!1,t.load(),d.wantsToPlay&&(r?se():me(`media-source-fallback`)),p();return}if(ie(`media-source-error`,320))return}d.hasError=!0,d.isPlaying=!1,console.warn(`[BGM] Audio source could not be loaded: ${ee()}`),p()}),h(),d.hasSource&&te()&&(t.load(),d.wantsToPlay&&se()),{getState(){return{...d,currentSource:ee()}},pause:he,play:me,releaseQueuedPlayback:ue,setVolume:e=>{ae(),d.volume=Pi(e),d.volume>0&&d.isMuted&&(d.isMuted=!1),h(),Bi(d.volume),zi(d.isMuted),p()},setOnChange(e){l=e,p()},toggleMute:()=>{_e(!d.isMuted)},togglePlay:ge}}var Y=Vi(),X={soundOn:`<svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#ff7b00" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"/><path d="M15.54 8.46a5 5 0 0 1 0 7.07"/><path d="M19.07 4.93a10 10 0 0 1 0 14.14"/></svg>`,soundOff:`<svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#ff7b00" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"/><line x1="23" y1="9" x2="17" y2="15"/><line x1="17" y1="9" x2="23" y2="15"/></svg>`,play:`<svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#ff7b00" stroke-width="2.3" stroke-linecap="round" stroke-linejoin="round"><polygon points="8 5 19 12 8 19 8 5"/></svg>`,pause:`<svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#ff7b00" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><line x1="9" y1="5" x2="9" y2="19"/><line x1="15" y1="5" x2="15" y2="19"/></svg>`,volumeLow:`<svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#ff7b00" stroke-width="2.3" stroke-linecap="round" stroke-linejoin="round"><polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"/><path d="M15 12a3 3 0 0 0 0-0.01"/></svg>`,volumeMid:`<svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#ff7b00" stroke-width="2.3" stroke-linecap="round" stroke-linejoin="round"><polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"/><path d="M15.5 9.5a4 4 0 0 1 0 5"/></svg>`,volumeHigh:`<svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#ff7b00" stroke-width="2.3" stroke-linecap="round" stroke-linejoin="round"><polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"/><path d="M15.5 8.5a5.5 5.5 0 0 1 0 7"/><path d="M18.8 6a9 9 0 0 1 0 12"/></svg>`,camUnfocused:`<svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#ff7b00" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z"/><circle cx="12" cy="13" r="4"/></svg>`,camFocused:`<svg width="13" height="13" viewBox="0 0 24 24" fill="#ff7b00" stroke="#ff7b00" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z"/><circle cx="12" cy="13" r="4"/></svg>`,fx:`<svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#ff7b00" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 7h8"/><path d="M4 17h14"/><path d="M14 7h6"/><path d="M10 17h4"/><circle cx="12" cy="7" r="2"/><circle cx="8" cy="17" r="2"/></svg>`},Hi={wasd:`<svg width="46" height="30" viewBox="0 0 46 30" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="16.5" y="0.5"  width="13" height="13" rx="2" stroke="#ff7b00" stroke-width="1.3"/>
    <text x="23"   y="7"  text-anchor="middle" dominant-baseline="central" font-size="12" fill="#ff7b00" style="font-family:'Courier New',monospace;">W</text>
    <rect x="0.5"  y="16.5" width="13" height="13" rx="2" stroke="#ff7b00" stroke-width="1.3"/>
    <text x="7"    y="23" text-anchor="middle" dominant-baseline="central" font-size="12" fill="#ff7b00" style="font-family:'Courier New',monospace;">A</text>
    <rect x="16.5" y="16.5" width="13" height="13" rx="2" stroke="#ff7b00" stroke-width="1.3"/>
    <text x="23"   y="23" text-anchor="middle" dominant-baseline="central" font-size="12" fill="#ff7b00" style="font-family:'Courier New',monospace;">S</text>
    <rect x="32.5" y="16.5" width="13" height="13" rx="2" stroke="#ff7b00" stroke-width="1.3"/>
    <text x="39"   y="23" text-anchor="middle" dominant-baseline="central" font-size="12" fill="#ff7b00" style="font-family:'Courier New',monospace;">D</text>
  </svg>`,space:`<svg width="80" height="14" viewBox="0 0 80 14" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="0.5" y="0.5" width="79" height="13" rx="2" stroke="#ff7b00" stroke-width="1.3"/>
    <polyline points="20,5 20,8 60,8 60,5" stroke="#ff7b00" stroke-width="1.8" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
  </svg>`,ctrl:`<svg width="50" height="14" viewBox="0 0 50 14" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="0.5" y="0.5" width="49" height="13" rx="2" stroke="#ff7b00" stroke-width="1.3"/>
    <text x="25" y="7" text-anchor="middle" dominant-baseline="central" font-size="12" fill="#ff7b00" style="font-family:'Courier New',monospace;">CTRL</text>
  </svg>`};function Ui(){Ze&&(x?Ze.innerHTML=X.camFocused:Ze.innerHTML=X.camUnfocused)}function Wi(e){return e>=.75?X.volumeHigh:e>=.4?X.volumeMid:X.volumeLow}function Gi(e){return e.isMuted?`Muted`:`${Math.round(e.volume*100)}%`}function Ki(){ft!==null&&(window.clearTimeout(ft),ft=null)}function qi(){Ki(),dt&&(ft=window.setTimeout(()=>{Ji(!1)},_t))}function Ji(e){e&&pt&&ea(!1),dt=e,C&&C.classList.toggle(`is-open`,dt),dt?(Gr(C,rt),qi()):Ki()}function Yi(){let e=k(lr(),0),t=dr(e);return{bloomEnabled:sr(),bloomLabel:sr()?`On`:`Off`,requestedMsaaSamples:e,effectiveMsaaSamples:t,msaaEnabled:t>0,msaaLabel:Tn(t)}}function Xi(e=We){return e===Ae?`Low`:`High`}function Zi(){let e=Yi();return`Quality ${Xi()} | Bloom ${e.bloomLabel} | MSAA ${e.msaaLabel}`}function Qi(e,t,n,r=`On`,i=`Off`){e&&(e.classList.toggle(`is-active`,n),e.innerHTML=`<span>${t}</span><strong>${n?r:i}</strong>`)}function $i(){let e=Yi();if(it&&(it.classList.toggle(`is-active`,pt),it.title=Zi()),w&&(w.classList.toggle(`is-open`,pt),pt&&Gr(w,ut)),at&&(at.textContent=`${y.label} / ${Xi()}`),Qi(st,`Bloom`,e.bloomEnabled,`On`,`Off`),Qi(ct,`MSAA`,e.msaaEnabled,e.msaaLabel,`Off`),Qi(lt,`Quality`,We===ke,`High`,`Low`),st&&(st.title=`Toggle Bloom`),ct&&(ct.title=`Cycle MSAA: 4x, 2x, Off`),lt&&(lt.title=`Toggle quality: High keeps full visual quality; Low saves GPU with downsampling, Bloom off, and static sky`),ot){let{width:e,height:t}=hr(),n=D.avgRenderMs>0?D.avgRenderMs.toFixed(1):`0.0`,r=performance.now()-D.lastFrameNow>500?0:Math.round(D.fps);ot.textContent=`avg: ${n} ms    fps: ${r}    resolution: ${e}x${t}`}}function ea(e){e&&dt&&Ji(!1),pt=e,$i(),J()}function ta(e){try{window.localStorage.setItem(Te,JSON.stringify({mode:Pe(e),updatedAt:Date.now()}))}catch{}}function na(e,{persistOverride:t=!0,applyModeDefaults:n=!0}={}){let r=Pe(e),i=We,a=k(lr(),0),o=Xn();We=r,t&&(Ge=`manual`),Ke(),Se(_),n&&(v()?(A.bloomEnabled=!1,A.msaaSamples=0):(A.bloomEnabled=!0,k(A.msaaSamples,0)<=0&&(A.msaaSamples=xt)),Dn()),t&&ta(We);let s=k(lr(),0),c=Xn();mr({forceRebuild:i!==We||s!==a||Math.abs(c-o)>.001}),$i(),ti(900),J()}function ra(){na(v()?ke:Ae)}function ia(e){v()&&na(ke,{applyModeDefaults:!1});let t=k(A.msaaSamples,0);A.bloomEnabled=!!e.bloomEnabled,A.msaaSamples=k(e.msaaSamples,A.msaaSamples);let n=k(A.msaaSamples,0);Dn(),mr({forceRebuild:n!==t}),$i(),ti(600),J()}function aa(e){if(e===`msaaSamples`){let e=k(A.msaaSamples,0),t=Wt.indexOf(e),n=Wt[t===-1?0:(t+1)%Wt.length];ia({...A,msaaSamples:n});return}ia({...A,[e]:!A[e]})}function oa(e,t=performance.now()){if(D.lastRenderMs=e,D.avgRenderMs=D.avgRenderMs===0?e:f.lerp(D.avgRenderMs,e,.18),D.lastFrameNow>0){let e=t-D.lastFrameNow;e>0&&e<250&&(D.avgFrameMs=D.avgFrameMs===0?e:f.lerp(D.avgFrameMs,e,.2),D.fps=D.avgFrameMs>0?1e3/D.avgFrameMs:0)}D.lastFrameNow=t,!(S||t-D.lastUiUpdate<250)&&(D.lastUiUpdate=t,$i())}function sa(e=Y.getState()){Qe&&(Qe.innerHTML=e.isMuted?X.soundOff:X.soundOn,Qe.title=e.isMuted?`Unmute all audio`:`Mute all audio`),$e&&($e.innerHTML=e.isPlaying||e.wantsToPlay?X.pause:X.play,e.hasError?$e.title=`BGM unavailable (${e.currentSource||`no source`})`:e.needsUserGesture&&!e.isPlaying?$e.title=`Click to start music`:e.wantsToPlay&&!e.isPlaying?$e.title=`Music queued to start`:$e.title=e.isPlaying?`Pause music`:`Play music`),et&&(et.innerHTML=Wi(e.volume),et.title=`Adjust volume (${Math.round(e.volume*100)}%)`),tt&&(tt.value=`${Math.round(e.volume*100)}`),nt&&(nt.textContent=Gi(e))}Y.setOnChange(sa);function ca(){let e=document.createElement(`style`);e.textContent=`
    :root {
      --hud-glass-bg: rgba(80, 80, 80, 0.35);
      --hud-glass-border: rgba(255, 255, 255, 0.08);
      --hud-glass-shadow: none;
      --hud-glass-blur: blur(20px);
      --hud-font-main: ${jn};
      --hud-font-accent: ${Mn};
    }
    #ui-tl,
    .ui-volume-panel,
    .ui-postfx-panel {
      background: var(--hud-glass-bg);
      border: 1px solid var(--hud-glass-border);
      box-shadow: var(--hud-glass-shadow);
      backdrop-filter: var(--hud-glass-blur);
      -webkit-backdrop-filter: var(--hud-glass-blur);
      border-radius: 6px;
      overflow: hidden;
      isolation: isolate;
      background-clip: padding-box;
      font-family: var(--hud-font-main);
    }
    #ui-tl {
      position: fixed; top: 18px; left: 18px; z-index: 100;
      display: flex; align-items: center; gap: 10px;
      opacity: 0; transition: opacity ${Bn.fadeDuration}s ease;
      padding: 6px 10px;
    }
    #ui-name {
      font-size: 14px; color: #ff7b00;
      letter-spacing: 0.5px; white-space: nowrap;
      font-family: var(--hud-font-accent);
      font-style: italic;
    }
    .ui-btn {
      width: 22px; height: 22px; padding: 0;
      border: 1px solid #ff7b00; border-radius: 4px;
      background: transparent; cursor: pointer; outline: none;
      display: flex; align-items: center; justify-content: center;
      box-shadow: 0 0 3px rgba(255,123,0,0.55);
      transition: background 0.15s ease, border-color 0.15s ease;
      flex-shrink: 0;
    }
    .ui-btn:hover { background: #ff7b00; border-color: transparent; }
    .ui-btn.is-active {
      background: rgba(255, 123, 0, 0.2);
      border-color: rgba(255, 176, 111, 0.9);
    }
    .ui-btn:hover svg,
    .ui-btn.is-active svg,
    .ui-btn:hover svg * { stroke: rgba(10,10,10,0.85) !important; fill: none !important; }
    .ui-btn.is-active svg * { stroke: #ffb06f !important; fill: none !important; }
    .ui-volume-control {
      position: relative;
      display: flex;
      align-items: center;
      justify-content: center;
    }
    .ui-volume-panel {
      position: fixed;
      top: 0;
      left: 0;
      z-index: 115;
      transform: translateY(-8px);
      min-width: 170px;
      padding: 6px 8px;
      opacity: 0;
      visibility: hidden;
      pointer-events: none;
      transition: opacity 0.16s ease, transform 0.16s ease, visibility 0.16s ease;
    }
    .ui-volume-panel.is-open {
      opacity: 1;
      visibility: visible;
      pointer-events: auto;
      transform: translateY(0);
    }
    .ui-postfx-control {
      position: relative;
      display: flex;
      align-items: center;
      justify-content: center;
    }
    .ui-postfx-panel {
      position: fixed;
      top: 0;
      left: 0;
      z-index: 115;
      transform: translateY(-8px);
      width: 228px;
      padding: 8px;
      opacity: 0;
      visibility: hidden;
      pointer-events: none;
      transition: opacity 0.16s ease, transform 0.16s ease, visibility 0.16s ease;
    }
    .ui-postfx-panel.is-open {
      opacity: 1;
      visibility: visible;
      pointer-events: auto;
      transform: translateY(0);
    }
    .ui-postfx-header {
      display: flex;
      align-items: baseline;
      justify-content: space-between;
      gap: 10px;
      margin-bottom: 6px;
      color: #ff7b00;
      font-size: 9px;
      letter-spacing: 0.7px;
      text-transform: uppercase;
    }
    .ui-postfx-summary {
      color: rgba(255, 176, 111, 0.92);
      text-transform: none;
      letter-spacing: 0;
      font-size: 9px;
    }
    .ui-postfx-toggles {
      display: grid;
      grid-template-columns: repeat(3, minmax(0, 1fr));
      gap: 4px;
    }
    .ui-postfx-toggle {
      border: 1px solid rgba(255, 123, 0, 0.35);
      border-radius: 6px;
      background: rgba(255, 123, 0, 0.08);
      color: #ffd1aa;
      cursor: pointer;
      font-family: var(--hud-font-main);
      font-size: 9px;
      line-height: 1.2;
      transition: background 0.15s ease, border-color 0.15s ease, color 0.15s ease;
    }
    .ui-postfx-toggle {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      gap: 2px;
      min-height: 40px;
      padding: 6px 5px;
      text-align: left;
    }
    .ui-postfx-toggle strong {
      color: #ff7b00;
      font-size: 10px;
      font-weight: 600;
    }
    .ui-postfx-toggle.is-active {
      background: rgba(255, 123, 0, 0.18);
      border-color: rgba(255, 176, 111, 0.65);
      color: #fff2e3;
    }
    .ui-postfx-toggle:hover {
      background: rgba(255, 123, 0, 0.18);
      border-color: rgba(255, 176, 111, 0.65);
      color: #fff2e3;
    }
    .ui-volume-title {
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 12px;
      margin-bottom: -6px;
      font-size: 9px;
      letter-spacing: 0.6px;
      color: #ff7b00;
      text-transform: uppercase;
    }
    .ui-volume-value {
      color: #ff7b00;
      text-transform: none;
      letter-spacing: 0;
    }
    .ui-volume-slider {
      width: 100%;
      accent-color: #ff7b00;
      cursor: pointer;
      height: 4px;
      font-family: var(--hud-font-main);
      -webkit-appearance: none;
      appearance: none;
      background: transparent;
    }
    .ui-volume-slider::-webkit-slider-runnable-track {
      height: 4px;
      border-radius: 999px;
      background: rgba(255, 123, 0, 0.35);
      transition: background 0.15s ease;
    }
    .ui-volume-slider:hover::-webkit-slider-runnable-track,
    .ui-volume-slider:active::-webkit-slider-runnable-track {
      background: rgba(255, 176, 111, 0.55);
    }
    .ui-volume-slider::-webkit-slider-thumb {
      -webkit-appearance: none;
      width: 10px;
      height: 10px;
      margin-top: -3px;
      border: 1px solid rgba(255, 176, 111, 0.8);
      border-radius: 999px;
      background: #ff7b00;
      box-shadow: 0 0 4px rgba(255, 123, 0, 0.45);
      transition: background 0.15s ease, border-color 0.15s ease, box-shadow 0.15s ease;
    }
    .ui-volume-slider:hover::-webkit-slider-thumb,
    .ui-volume-slider:active::-webkit-slider-thumb {
      background: #ffb06f;
      border-color: rgba(255, 207, 159, 0.92);
      box-shadow: 0 0 6px rgba(255, 176, 111, 0.55);
    }
    .ui-volume-slider::-moz-range-track {
      height: 4px;
      border: 0;
      border-radius: 999px;
      background: rgba(255, 123, 0, 0.35);
      transition: background 0.15s ease;
    }
    .ui-volume-slider:hover::-moz-range-track,
    .ui-volume-slider:active::-moz-range-track {
      background: rgba(255, 176, 111, 0.55);
    }
    .ui-volume-slider::-moz-range-thumb {
      width: 10px;
      height: 10px;
      border: 1px solid rgba(255, 176, 111, 0.8);
      border-radius: 999px;
      background: #ff7b00;
      box-shadow: 0 0 4px rgba(255, 123, 0, 0.45);
      transition: background 0.15s ease, border-color 0.15s ease, box-shadow 0.15s ease;
    }
    .ui-volume-slider:hover::-moz-range-thumb,
    .ui-volume-slider:active::-moz-range-thumb {
      background: #ffb06f;
      border-color: rgba(255, 207, 159, 0.92);
      box-shadow: 0 0 6px rgba(255, 176, 111, 0.55);
    }
    #ui-bl {
      position: fixed; bottom: 18px; left: 18px; z-index: 100;
      display: flex; flex-direction: column; align-items: flex-start; gap: 6px;
      opacity: 0; transition: opacity ${Bn.fadeDuration}s ease;
      font-family: var(--hud-font-main);
      font-size: 11px; color: #ff7b00;
      pointer-events: none;
    }
    .ui-hint-row {
      display: flex;
      align-items: flex-end;
      gap: 15px;
    }
    #ui-bl svg text {
      font-family: "Courier New", Courier, monospace !important;
    }
    #ui-br {
      position: fixed; bottom: 18px; right: 18px; z-index: 100;
      display: flex; align-items: center; justify-content: flex-end;
      opacity: 0; transition: opacity ${Bn.fadeDuration}s ease;
      font-family: var(--hud-font-main);
      font-size: 11px; color: #ff7b00;
      pointer-events: none;
      text-align: right;
      white-space: nowrap;
    }
    .ui-hint { display: flex; align-items: flex-end; gap: 5px; white-space: nowrap; }
    .ui-hint span,
    .ui-hud-stats,
    .ui-copy {
      font-size: 11px;
      line-height: 1;
      text-shadow: 0 1px 1px rgba(255, 255, 255, 0.35);
    }
    .ui-hint svg  { filter: drop-shadow(0 1px 1px rgba(255, 255, 255, 0.35)); }
    .ui-hud-stats {
      color: #ff7b00;
      min-height: 11px;
      white-space: pre;
    }
    .ui-copy { color: #ff7b00; }
  `,document.head.appendChild(e);let t=document.createElement(`div`);t.id=`ui-tl`,mt=t;let n=document.createElement(`span`);n.id=`ui-name`,n.textContent=`Hanqi Zhao`,$e=document.createElement(`button`),$e.className=`ui-btn`,$e.addEventListener(`click`,()=>{Y.togglePlay()});let r=document.createElement(`div`);rt=r,r.className=`ui-volume-control`,et=document.createElement(`button`),et.className=`ui-btn`,et.addEventListener(`click`,()=>{Ji(!dt)}),C=document.createElement(`div`),C.className=`ui-volume-panel`;let i=document.createElement(`div`);i.className=`ui-volume-title`,i.innerHTML=`<span>Volume</span>`,nt=document.createElement(`span`),nt.className=`ui-volume-value`,i.appendChild(nt),tt=document.createElement(`input`),tt.className=`ui-volume-slider`,tt.type=`range`,tt.min=`0`,tt.max=`100`,tt.step=`1`,tt.addEventListener(`input`,e=>{Y.setVolume(Number(e.target.value)/100),qi()}),C.appendChild(i),C.appendChild(tt),r.appendChild(et);let a=document.createElement(`div`);ut=a,a.className=`ui-postfx-control`,it=document.createElement(`button`),it.className=`ui-btn`,it.innerHTML=X.fx,it.addEventListener(`click`,()=>{ea(!pt)}),w=document.createElement(`div`),w.className=`ui-postfx-panel`;let o=document.createElement(`div`);o.className=`ui-postfx-header`,o.innerHTML=`<span>Render FX</span>`,at=document.createElement(`span`),at.className=`ui-postfx-summary`,at.textContent=y.label,o.appendChild(at);let s=document.createElement(`div`);s.className=`ui-postfx-toggles`,st=document.createElement(`button`),st.className=`ui-postfx-toggle`,st.type=`button`,st.addEventListener(`click`,()=>{aa(`bloomEnabled`)}),ct=document.createElement(`button`),ct.className=`ui-postfx-toggle`,ct.type=`button`,ct.addEventListener(`click`,()=>{aa(`msaaSamples`)}),lt=document.createElement(`button`),lt.className=`ui-postfx-toggle`,lt.type=`button`,lt.addEventListener(`click`,()=>{ra()}),s.appendChild(st),s.appendChild(ct),s.appendChild(lt),w.appendChild(o),w.appendChild(s),a.appendChild(it),Qe=document.createElement(`button`),Qe.className=`ui-btn`,Qe.addEventListener(`click`,()=>{Y.toggleMute()}),Ze=document.createElement(`button`),Ze.className=`ui-btn`,Ze.innerHTML=X.camUnfocused,Ze.title=`Toggle focus`,Ze.addEventListener(`click`,()=>{S||!b||(x?wa():Ca())}),t.appendChild(n),t.appendChild(Ze),t.appendChild($e),t.appendChild(Qe),t.appendChild(r),t.appendChild(a),document.body.appendChild(t),document.body.appendChild(C),document.body.appendChild(w),Kr(),document.addEventListener(`pointerdown`,e=>{let t=rt?.contains(e.target)||C?.contains(e.target),n=ut?.contains(e.target)||w?.contains(e.target);dt&&t?qi():dt&&Ji(!1),pt&&!n&&ea(!1)}),document.addEventListener(`pointermove`,()=>{dt&&qi()},{passive:!0}),document.addEventListener(`wheel`,()=>{dt&&qi()},{passive:!0}),document.addEventListener(`keydown`,e=>{if(e.key===`Escape`){Ji(!1),ea(!1);return}dt&&qi()}),sa(),$i();let c=document.createElement(`div`);c.id=`ui-bl`;let l=document.createElement(`div`);l.className=`ui-hint-row`,l.innerHTML=`
    <div class="ui-hint">${Hi.wasd}<span>: move</span></div>
    <div class="ui-hint">${Hi.space}<span>: up</span></div>
    <div class="ui-hint">${Hi.ctrl}<span>: down</span></div>
  `,ot=document.createElement(`div`),ot.className=`ui-hud-stats`,c.appendChild(l),c.appendChild(ot),document.body.appendChild(c);let u=document.createElement(`div`);return u.id=`ui-br`,u.innerHTML=`<div class="ui-copy">© Copyright 2026 Hanqi Zhao.</div>`,document.body.appendChild(u),$i(),{tl:t,bl:c,br:u}}async function la(){try{let e=Promise.all(Object.entries(yi).map(async([e,t])=>[e,await Oi(t.path,{colorSpace:g})])),t=Promise.all(Object.entries(vi).map(async([e,t])=>{let n=await Oi(t.path,{colorSpace:``});return n.channel=1,[e,n]})),[r,i,a,o,s]=await Promise.all([y.visualSky.kind===`hdr`?Tr.loadAsync(y.visualSky.path):Di(y.visualSky.path,{colorSpace:g,flipY:y.visualSky.flipY??!1}),y.lightingEnvironment.kind===`hdr`?Tr.loadAsync(y.lightingEnvironment.path):Di(y.lightingEnvironment.path,{colorSpace:g,flipY:y.lightingEnvironment.flipY??!1}),wr.loadAsync(`/models/room_all.glb`),e,t]),l=Object.fromEntries(o),u=Object.fromEntries(s),d=new n(200,32,20);d.scale(-1,1,1),U=new c(d,gi(r,y.visualSky)),U.position.y=-100,U.rotation.y=P.rotationY,Rn.add(U),i.mapping=303,Rn.environment=i,Rn.environmentIntensity=y.lightingEnvironment.intensity??1.2;let ne=a.scene;if(ne.traverse(e=>{if(!e.isMesh)return;let t=(e.name??``).toLowerCase();(t.includes(`computer`)||t.includes(`screen`)||t.includes(`monitor`))&&Mr.push(e),t.includes(`screen_plane`)&&(Or=e,_n.setFromMatrixPosition(e.matrixWorld),_n.add(M.loader.shockwave.centerOffset),Or.material=new fe({colorWrite:!1,depthWrite:!0}),Or.renderOrder=-1)}),mi(ne),ne.traverse(e=>{if(!e.isMesh)return;let t=(e.name??``).toLowerCase();t.includes(`screen_plane`)||(Array.isArray(e.material)?e.material:[e.material]).forEach(n=>{if(!n)return;Si(n);let r=wi(t),i=Ti(t);if(r&&l[r]){n.map=l[r],n.dithering=Ei(r),n.needsUpdate=!0;return}n.isMeshStandardMaterial&&i&&u[i]&&(Ci(e.geometry),n.lightMap=u[i],xi[i]&&(n.envMapIntensity=xi[i].envMapIntensity,n.roughness<xi[i].roughnessMin&&(n.roughness=xi[i].roughnessMin)),n.needsUpdate=!0)})}),Rn.add(ne),Mr.length>0){let e=new ee;Mr.forEach(t=>{t.updateMatrixWorld(!0),e.union(new ee().setFromObject(t))});let t=new m;e.getCenter(t);let n=new m;e.getSize(n),Nr=new c(new te(n.x,n.y,n.z),new fe({colorWrite:!1,depthWrite:!1,transparent:!0,opacity:0})),Nr.position.copy(t),Nr.scale.setScalar(M.focus.hitboxScale),Rn.add(Nr),Or||(_n.copy(t),_n.add(M.loader.shockwave.centerOffset))}Or&&Ni(Or),await Promise.all([Fn,new Promise(e=>setTimeout(e,M.loader.minLoadTime))]),E(`startup.assets.readyForGesture`),ji(`start-prompt`).catch(()=>{}),Ye=!0,J(),await In(),Ye=!1,E(`loader.gesture.await.end`),E(`loader.fade.start`,{fadeTimeMs:M.loader.fadeTime*1e3}),N.style.opacity=`0`,await new Promise(e=>setTimeout(e,M.loader.fadeTime*1e3)),E(`loader.fade.end`),N.remove(),E(`loader.removed`),await Mi(),E(`screenOverlay.ready`);let p=ca();E(`outerHud.overlay.created`);{let e=performance.now();E(`loadingTimeline.start`);let t=!1,n=e=>e===1?1:1-2**(-10*e),r=e=>e<.5?4*e*e*e:1-(-2*e+2)**3/2;function i(){let a=(performance.now()-e)/1e3;if(!b){let e=M.loader.cameraPush,t=0;a>=e.startTime&&(t=Math.min((a-e.startTime)/e.duration,1)),I.position.lerpVectors(Wn,M.intro.startPos,r(t)),I.lookAt(Sr.target)}let o=M.loader.shockwave,s=0;if(a>=o.startTime&&(s=Math.min((a-o.startTime)/o.duration,1)),!gn){let e=s>=1?Ht:f.lerp(o.startRadius,o.endRadius,n(s));hn.forEach(t=>{t.userData.shader&&(t.userData.shader.uniforms.uShockwaveRadius.value=e)}),s>=1&&hi()}let c=M.loader.skyFade,l=0;a>=c.startTime&&(l=Math.min((a-c.startTime)/c.duration,1)),U&&U.material&&(U.material.uniforms.uSkyOpacity.value=l),!b&&a>=M.loader.controlsUnlockTime&&(b=!0,E(`loadingTimeline.physicsUnlocked`,{elapsedSec:a}),Z.locked=!0,Z.targetMouse.set(0,0),Z.currentMouse.set(0,0),Z.lockBaseMouse.copy(ua),ga());let u=M.loader.screenFade;a>=u.startTime&&!Xe&&(Xe=!0,E(`loadingTimeline.screenFade.start`,{elapsedSec:a,durationSec:u.duration}),W.runtimeEnabled=!1,V&&H&&(ki(`opacity ${u.duration}s ease-in-out`),requestAnimationFrame(()=>{E(`loadingTimeline.screenFade.visibleFrame`),H.setVisualState({opacity:1,visible:!0}),setTimeout(()=>{V&&H&&(ki(``),W.runtimeEnabled=!0,W.target=1,ii(1),E(`loadingTimeline.screenFade.runtimeEnabled`))},u.duration*1e3+100)}))),!t&&a>=Bn.appearAt&&(t=!0,p.tl.style.opacity=`1`,p.bl.style.opacity=`1`,p.br.style.opacity=`1`,E(`outerHud.overlay.visible`,{elapsedSec:a})),a<Math.max(M.loader.cameraPush.startTime+M.loader.cameraPush.duration,o.startTime+o.duration,c.startTime+c.duration,u.startTime+u.duration,M.loader.controlsUnlockTime)?requestAnimationFrame(i):(Je=!1,E(`loadingTimeline.complete`,{elapsedSec:a}))}i()}}catch(e){console.error(e)}}var ua=new e,Z={locked:!0,lockBaseMouse:new e,targetMouse:new e,currentMouse:new e,velocity:new e},da={lastIdleSampleAt:0},fa={lastFrameNow:0},pa={forward:new m,right:new m,up:new m(0,1,0),rawDir:new m,targetVel:new m,actualVel:new m,nextPos:new m,delta:new m,originalQuat:new pe,zeroMouse:new e(0,0),parallaxDiff:new e},ma={normal:new m,toCamera:new m},Q={w:!1,a:!1,s:!1,d:!1," ":!1,control:!1},ha=performance.now();function ga(){ha=performance.now()}window.addEventListener(`pointermove`,e=>{let t=wn(e.clientX,e.clientY);if(ua.x=t.x,ua.y=t.y,x&&!S||!b)return;let n=performance.now(),r=!S&&!x&&Z.locked;r&&n-da.lastIdleSampleAt<rn()||(r&&(da.lastIdleSampleAt=n),ga(),!S&&!x&&Z.locked&&ua.distanceTo(Z.lockBaseMouse)>M.parallax.unlockThreshold&&(Z.locked=!1),J())},{passive:!0}),window.addEventListener(`keydown`,e=>{if(x&&!S||!b)return;ga();let t=e.key.toLowerCase();t===` `&&e.preventDefault(),Q[t]!==void 0&&(Q[t]=!0),J()},{passive:!1}),window.addEventListener(`keyup`,e=>{if(x&&!S||!b)return;ga();let t=e.key.toLowerCase();Q[t]!==void 0&&(Q[t]=!1),J()}),window.addEventListener(`wheel`,()=>{x&&!S||b&&(ga(),J())},{passive:!0}),L.domElement.addEventListener(`contextmenu`,e=>e.preventDefault());var _a={linear:e=>e,easeOutCubic:e=>1-(1-e)**3,easeInOutCubic:e=>e<.5?4*e*e*e:1-(-2*e+2)**3/2},va=null,ya=!1;function ba(){va!==null&&(window.clearTimeout(va),va=null)}function xa(){!ya||S||!x||!b||(ya=!1,window.requestAnimationFrame(()=>{!S&&x&&b&&wa()}))}function Sa(e,t,n,r,i,a,o,{emitStartState:s=!0}={}){s&&(S=!0,Hr());let c=performance.now();Ir(x?`focus`:`unfocus`,i,a,c);let l=Pr.mode;E(`focus.cameraTween.start`,{mode:l,durationMs:i,easingName:a});let u=_a[a]||_a.easeInOutCubic;J();function d(){let a=performance.now(),s=(a-c)/i;s>1&&(s=1);let ee=u(s);I.position.lerpVectors(e,n,ee),Sr.target.lerpVectors(t,r,ee),I.lookAt(Sr.target),J(),s<1?requestAnimationFrame(d):(Lr(),S=!1,ti(),Hr(),$.velocity.set(0,0,0),Z.locked=!0,Z.lockBaseMouse.copy(ua),Z.targetMouse.set(0,0),Z.currentMouse.set(0,0),Z.velocity.set(0,0),ga(),o&&o(),xa(),E(`focus.cameraTween.end`,{mode:l,elapsedMs:a-c}),J())}d()}function Ca(){if(S||x||!b){E(`focus.transition.blocked`,{target:`focus`,isAnimating:S,isFocused:x,isPhysicsUnlocked:b});return}E(`focus.transition.start`,{target:`focus`}),ba(),ya=!1,S=!0,Ur(!0),Hr(),J(),Sa(I.position.clone(),Sr.target.clone(),pn,mn,M.focus.duration,M.focus.easing,null,{emitStartState:!1})}async function wa(){if(S||!x||!b){E(`focus.transition.blocked`,{target:`unfocus`,isAnimating:S,isFocused:x,isPhysicsUnlocked:b});return}E(`focus.transition.start`,{target:`unfocus`}),ba(),ya=!1,S=!0,Hr(),Ur(!1),!(!S||x)&&(Hr(),J(),va=window.setTimeout(()=>{va=null,Sa(I.position.clone(),Sr.target.clone(),M.unfocus.endPos,M.unfocus.endTarget,M.unfocus.duration,M.unfocus.easing,null,{emitStartState:!1})},Math.max(0,M.unfocus.preDelay??0)))}var Ta=new o;L.domElement.addEventListener(`pointerdown`,e=>{if(!b||e.button!==0)return;let t=Ai()?pi(e.clientX,e.clientY):!1;if(E(`focus.pointerdown.canvas`,{button:e.button,pointerType:e.pointerType,isPhysicsUnlocked:b,isAnimating:S,isFocused:x,pointerInsideScreen:t}),S){x&&!t&&(ya=!0,E(`focus.unfocus.queued`,{source:`canvas-pointerdown`}));return}ga();let n=wn(e.clientX,e.clientY);if(ua.x=n.x,ua.y=n.y,J(),x){if(t){E(`focus.pointerdown.insideFocusedScreen`);return}E(`focus.pointerdown.requestUnfocus`,{source:`canvas`}),wa();return}if(t){E(`focus.pointerdown.requestFocus`,{source:`screen-bounds`}),Ca();return}Ta.setFromCamera(ua,I);let r=Nr?[Nr]:Mr;if(Ta.intersectObjects(r,!0).length>0&&V){let e=new m(0,0,1).applyQuaternion(V.quaternion).normalize(),t=new m().subVectors(I.position,V.position).normalize(),n=e.angleTo(t)*(180/Math.PI);E(`focus.pointerdown.hitboxIntersect`,{angleDegree:n,maxTriggerAngle:M.focus.maxTriggerAngle}),n<=M.focus.maxTriggerAngle&&(E(`focus.pointerdown.requestFocus`,{source:`computer-hitbox`}),Ca())}J()});function Ea(e){return!!(mt?.contains(e)||C?.contains(e)||w?.contains(e))}document.addEventListener(`pointerdown`,e=>{if(!b||e.button!==0)return;let t=Ea(e.target),n=Ai()?pi(e.clientX,e.clientY):!1;if(E(`focus.pointerdown.document`,{button:e.button,pointerType:e.pointerType,isPhysicsUnlocked:b,isAnimating:S,isFocused:x,pointerInsideUi:t,clickedInsideScreen:n}),!t){if(!x){!S&&n&&(E(`focus.pointerdown.requestFocus`,{source:`document-screen-bounds`}),Ca());return}if(!n){if(S){ya=!0,E(`focus.unfocus.queued`,{source:`document-pointerdown`});return}E(`focus.pointerdown.requestUnfocus`,{source:`document`}),wa()}}},!0);function Da(e=1){if(!Or||!V)return;let t=x&&!S&&Ai();if(Ii(`live`),!Xe){ai(t?`auto`:`none`);return}if(!W.runtimeEnabled){ai(t?`auto`:`none`);return}let n=ma.normal.set(0,0,1).applyQuaternion(V.quaternion).normalize(),r=ma.toCamera.subVectors(I.position,V.position).normalize(),i=I.position.distanceTo(V.position),a=n.dot(r)>=0,o=0,s=`none`;if(t)o=1,s=`auto`;else if(a){let e=M.shield.maxClickDistance+M.shield.fadeDistance;if(i<=M.shield.maxClickDistance)o=1;else if(i>=e)o=M.shield.dimOpacity;else{let e=1-(i-M.shield.maxClickDistance)/M.shield.fadeDistance;o=f.lerp(M.shield.dimOpacity,1,e)}}W.target=o;let c=f.lerp(W.current,W.target,sn(M.shield.opacityLerp,e)),l=Math.abs(c-W.target)<.002?W.target:c;ii(Math.abs(l-W.target)<=Bt?W.target:l),ai(s)}var $={active:!1,chargeStart:0,releaseStart:0,dist:0,currentDir:new m,velocity:new m};function Oa(e){let t=Math.max(1,Math.min(8,Math.ceil(e))),n=e/t,r=(1-f.clamp(M.parallax.springFriction,0,1))**n;for(let e=0;e<t;e+=1){let e=pa.parallaxDiff.subVectors(Z.targetMouse,Z.currentMouse);Z.velocity.add(e.multiplyScalar(M.parallax.springAccel*n)),Z.velocity.multiplyScalar(r),Z.currentMouse.addScaledVector(Z.velocity,n)}}function ka(e){q.frameId=null;let t=fa.lastFrameNow||e-Kt,n=Math.max(0,e-t),r=on(n),i=on(n,Jt);fa.lastFrameNow=e;let a=!Ye&&qr(),o=q.renderRequested,s=ei(e),c=s||a;if(!c&&!o)return;if(U&&a&&(U.rotation.y+=M.sky.rotationSpeed*i),!b){ri(e,{skyOnly:!1,sceneAnimationActive:!0,frameScale:r}),q.renderRequested=!1,c&&J();return}if(!s&&a&&!o){ri(e,{skyOnly:!0,sceneAnimationActive:!1,frameScale:r}),q.renderRequested=!1,Qr();return}let l=e-ha>M.parallax.idleTimeout;if(!x&&!S){let t=pa.forward;I.getWorldDirection(t),t.y=0,t.normalize();let n=pa.right.crossVectors(t,I.up).normalize(),i=pa.up,a=pa.rawDir.set(0,0,0);Q.w&&a.add(t),Q.s&&a.sub(t),Q.a&&a.sub(n),Q.d&&a.add(n),Q[` `]&&a.add(i),Q.control&&a.sub(i),a.lengthSq()>0?($.releaseStart=0,$.active?$.currentDir.lerp(a.normalize(),sn(M.walk.dirLerp,r)).normalize():($.chargeStart===0&&($.chargeStart=e),e-$.chargeStart>M.walk.chargeTime&&($.active=!0,$.dist=0,$.currentDir.copy(a.normalize())))):($.chargeStart=0,$.active&&($.releaseStart===0&&($.releaseStart=e),e-$.releaseStart>M.walk.releaseGrace&&($.active=!1)),l&&($.active=!1,$.releaseStart=0,$.currentDir.set(0,0,0),$.velocity.set(0,0,0))),$.active&&$.dist>=M.walk.maxDist&&($.active=!1);let o=pa.targetVel.set(0,0,0);if($.active?(o.copy($.currentDir).multiplyScalar(M.walk.speed),$.velocity.lerp(o,sn(M.walk.acceleration,r))):($.velocity.lerp(o,sn(M.walk.deceleration,r)),Yr($.velocity)&&$.velocity.set(0,0,0)),$.velocity.lengthSq()>1e-6){$.dist+=$.velocity.length()*r;let e=pa.actualVel.copy($.velocity),t=M.walk.bounds,n=M.walk.dampingZone;e.x<0&&I.position.x-t.minX<n?e.x*=Math.max(0,(I.position.x-t.minX)/n):e.x>0&&t.maxX-I.position.x<n&&(e.x*=Math.max(0,(t.maxX-I.position.x)/n)),e.y<0&&I.position.y-t.minY<n?e.y*=Math.max(0,(I.position.y-t.minY)/n):e.y>0&&t.maxY-I.position.y<n&&(e.y*=Math.max(0,(t.maxY-I.position.y)/n)),e.z<0&&I.position.z-t.minZ<n?e.z*=Math.max(0,(I.position.z-t.minZ)/n):e.z>0&&t.maxZ-I.position.z<n&&(e.z*=Math.max(0,(t.maxZ-I.position.z)/n));let i=pa.nextPos.copy(I.position).addScaledVector(e,r);i.x<=t.minX?(i.x=t.minX,$.velocity.x=0):i.x>=t.maxX&&(i.x=t.maxX,$.velocity.x=0),i.y<=t.minY?(i.y=t.minY,$.velocity.y=0):i.y>=t.maxY&&(i.y=t.maxY,$.velocity.y=0),i.z<=t.minZ?(i.z=t.minZ,$.velocity.z=0):i.z>=t.maxZ&&(i.z=t.maxZ,$.velocity.z=0);let a=pa.delta.subVectors(i,I.position);I.position.copy(i),Sr.target.add(a)}}I.lookAt(Sr.target);let u=pa.originalQuat.copy(I.quaternion),d=sn(M.parallax.catchupSpeed,r);x||S||l||Z.locked?Z.targetMouse.lerp(pa.zeroMouse,d):Z.targetMouse.lerp(ua,d),Oa(r),l&&(Jr(Z.targetMouse)&&Z.targetMouse.set(0,0),Jr(Z.velocity)&&Z.velocity.set(0,0),Jr(Z.currentMouse)&&Jr(Z.targetMouse)&&Jr(Z.velocity)&&Z.currentMouse.set(0,0));let ee=Z.currentMouse.y*f.degToRad(M.parallax.maxAngle),te=-Z.currentMouse.x*f.degToRad(M.parallax.maxAngle);I.rotateX(ee),I.rotateY(te),ri(e,{skyOnly:a&&!s&&!o,sceneAnimationActive:s,frameScale:r}),I.quaternion.copy(u),q.renderRequested=!1,s?J():a&&Qr()}window.addEventListener(`resize`,()=>{Cn(),Gn(),qn(),I.aspect=O.aspect,I.updateProjectionMatrix(),vn!==null&&window.clearTimeout(vn),vn=window.setTimeout(()=>{vn=null,mr({forceRebuild:!0}),$i(),J()},Vt),Kr(),$r()}),la(),J();