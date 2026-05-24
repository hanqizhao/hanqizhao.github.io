const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/outer-screen-overlay-B28WwniR.js","assets/winxp-core-CBk7ns0J.js","assets/rolldown-runtime-BVbofQct.js","assets/react-vendor-DbC8iAKZ.js","assets/winxp-core-BSxTm-g0.css"])))=>i.map(i=>d[i]);
import"./modulepreload-polyfill-Cf3xff8G.js";import{A as e,C as t,D as n,E as r,O as i,S as a,T as o,_ as s,a as c,b as l,c as u,d,f as ee,g as f,h as te,i as ne,j as p,k as m,l as re,m as ie,n as ae,o as oe,p as h,r as se,s as ce,t as le,u as ue,v as de,w as fe,x as pe,y as me}from"./three-vendor-ezp25pWM.js";import{Sn as he,Tn as ge,_n as _e,gn as ve,hn as ye,mn as be,vn as xe,xn as Se,yn as Ce}from"./winxp-core-CBk7ns0J.js";var we=`slim`,Te=`outer-website:quality-mode`,Ee=`outer-website:quality-profile-v1`,De=1,Oe=336*60*60*1e3,ke=`high`,Ae=`low`;function je(){try{return new URLSearchParams(window.location.search)}catch{return new URLSearchParams}}var Me=je();function Ne(e){let t=Me.get(e);return t===``||t===`1`||t===`true`}function Pe(e){return e===Ae?Ae:ke}function Fe(){try{window.localStorage.removeItem(Te),window.localStorage.removeItem(Ee)}catch{}}(Ne(`clearQualityProfile`)||Ne(`resetQualityProfile`))&&Fe();function Ie(){if(Ne(`ignoreQualityProfile`))return null;try{let e=window.localStorage.getItem(Te);if(!e)return null;let t=JSON.parse(e);return t?.mode===Ae||t===Ae?Ae:ke}catch{return null}}function Le(){if(Ne(`ignoreQualityProfile`))return null;try{let e=window.localStorage.getItem(Ee);if(!e)return null;let t=JSON.parse(e),n=Date.now()-Number(t?.createdAt??0);return t?.version!==De||!Number.isFinite(n)||n<0||n>Oe?null:t}catch{return null}}function Re(){try{let e=document.createElement(`canvas`),t=e.getContext(`webgl2`,{powerPreference:`high-performance`})||e.getContext(`webgl`,{powerPreference:`high-performance`});if(!t)return{available:!1};let n=t.getExtension(`WEBGL_debug_renderer_info`),r=n?t.getParameter(n.UNMASKED_RENDERER_WEBGL):``,i=n?t.getParameter(n.UNMASKED_VENDOR_WEBGL):``,a=t.getParameter(t.MAX_SAMPLES)??0,o=t.getParameter(t.MAX_TEXTURE_SIZE)??0,s=t.getParameter(t.MAX_RENDERBUFFER_SIZE)??0,c=`${i} ${r}`.toLowerCase();return{available:!0,renderer:r,vendor:i,maxSamples:a,maxTextureSize:o,maxRenderBufferSize:s,integratedHint:/intel|uhd|hd graphics|iris|radeon graphics|adreno|mali|apple gpu/i.test(c),softwareHint:/swiftshader|llvmpipe|basic render|software|warp/i.test(c)}}catch{return{available:!1}}}function ze(e=5){let t=performance.now(),n=0,r=0;for(;n<14e4&&performance.now()-t<e;)r=(r+Math.sqrt(n%97+1))%1e3,n+=1;let i=Math.max(.001,performance.now()-t);return{durationMs:Number(i.toFixed(3)),iterations:n,iterationsPerMs:Number((n/i).toFixed(1)),checksum:Number(r.toFixed(3))}}function Be(e){let t=Re(),n=ze(),r=Math.round((window.screen?.width??window.innerWidth)*(window.screen?.height??window.innerHeight)*(window.devicePixelRatio||1)**2),i=0;e.prefersReducedMotion&&(i+=3),(e.coarsePointer||e.isLikelyMobile)&&(i+=2),e.deviceMemory>0&&e.deviceMemory<=4?i+=2:e.deviceMemory>0&&e.deviceMemory<=8&&(i+=1),e.hardwareConcurrency>0&&e.hardwareConcurrency<=4?i+=2:e.hardwareConcurrency>0&&e.hardwareConcurrency<=8&&(i+=1),r>=5e6&&(e.deviceMemory<=8||e.hardwareConcurrency<=8)&&(i+=1),!t.available||t.softwareHint?i+=4:t.integratedHint&&(i+=2),t.maxRenderBufferSize>0&&t.maxRenderBufferSize<=8192&&(i+=1),t.maxSamples===0&&(i+=1),n.iterationsPerMs<9e3?i+=2:n.iterationsPerMs<16e3&&(i+=1);let a=i>=3?Ae:ke;return{version:De,createdAt:Date.now(),mode:a,lowTierScore:i,device:{deviceMemory:e.deviceMemory,hardwareConcurrency:e.hardwareConcurrency,prefersReducedMotion:e.prefersReducedMotion,coarsePointer:e.coarsePointer,isLikelyMobile:e.isLikelyMobile,devicePixelRatio:window.devicePixelRatio||1,screenPixelCount:r},webgl:t,cpuProbe:n}}function Ve(e){if(!Ne(`ignoreQualityProfile`))try{window.localStorage.setItem(Ee,JSON.stringify(e))}catch{}}function He(e){let t=Ie(),n=Me.get(`quality`),r=Le(),i=r??Be(e);return r||Ve(i),{profile:i,mode:Pe(t??n??i.mode),source:t?`manual`:n?`query`:r?`cached`:`measured`}}var g=ge(),Ue=He(g),We=Ue.mode,Ge=Ue.source;function _(){return We===Ae}function Ke(){g.qualityMode=We,g.qualitySelectionSource=Ge,g.qualityProfile=Ue.profile,g.lowTierDetected=_(),g.shouldDefaultPostFxOff=_(),g.preferredBloomEnabled=!_(),g.preferredMsaaSamples=_()?0:g.preferredMsaaSamples||2}Ke(),he(g);var qe={current:{visualSkyLdr:new URL(`/assets/new_sky_ldr-yZ_KpEae.jpg`,``+import.meta.url).href,lightingLdr:new URL(`/assets/room_ldr-DOcZ7og-.jpg`,``+import.meta.url).href,room:new URL(`/assets/room%20baked-KoBuYlPf.ktx2`,``+import.meta.url).href,table:new URL(`/assets/table%20baked-DFp0K4D2.ktx2`,``+import.meta.url).href,chairBack:new URL(`/assets/chair%20back%20final-sbWclMz4.ktx2`,``+import.meta.url).href,chairLeft:new URL(`/assets/chair%20left%20final-BjZ_O-yh.ktx2`,``+import.meta.url).href,chairRight:new URL(`/assets/chair%20right%20final-BtcJ8_ie.ktx2`,``+import.meta.url).href,computer:new URL(`/assets/computer%20shadow-D5HsGwbv.ktx2`,``+import.meta.url).href}},v={label:`Slim`,visualSky:{kind:`ldr`,path:qe.current.visualSkyLdr,flipY:!0},lightingEnvironment:{kind:`ldr`,path:qe.current.lightingLdr,flipY:!0,intensity:1.2},bakedSurfacePaths:{room:qe.current.room,table:qe.current.table,chairBack:qe.current.chairBack,chairLeft:qe.current.chairLeft,chairRight:qe.current.chairRight},lightMapPaths:{computer:qe.current.computer}},Je=!0,y=!1,Ye=!1,b=!1,x=!1,Xe=null,Ze=null,Qe=null,$e=null,S=null,et=null,tt=null,nt=null,rt=null,it=null,at=null,ot=null,st=null,ct=null,lt=null,ut=null,C=!1,dt=null,ft=!1,pt=null,mt=null,ht=`outer-website:postfx-settings`,gt=2200,_t=10,vt=12,yt=220,bt=2,xt=2,St=1.25,Ct=1,wt=.62,Tt=.7,Et=.55,Dt=1800,Ot=18,kt=8,At=1e3/10,jt=1200,Mt=1600,Nt=.25,Pt=32,Ft=40,It=1e-4,Lt=.01,Rt=.015,zt=.01,Bt=150,Vt=9999,Ht=`outer-website:shockwave-v1`,Ut=[4,2,0],Wt=!0,Gt=1e3/180,Kt=1e3/30,qt=250,Jt=800,Yt=`outer-website:`;function Xt(){return _()?St:xt}function Zt(){return _()?wt:Ct}function Qt(){return _()?Et:Tt}function $t(){return _()?kt:Ot}function en(){return 1e3/$t()}function tn(){return _()?Mt:jt}function nn(){return _()?Ft:Pt}function rn(){return _()?Rt:Lt}function an(e,t=Kt){return(Number.isFinite(e)&&e>0?Math.min(e,t):Gt)/Gt}function on(e,t){let n=f.clamp(e,0,1);return n<=0?0:n>=1?1:1-(1-n)**Math.max(0,t)}var w=window.__outerWebsiteStartupTiming??{createdAt:Date.now(),timeOrigin:performance.timeOrigin??Date.now()-performance.now(),events:[]};window.__outerWebsiteStartupTiming=w;function sn(){try{return new URLSearchParams(window.location.search).has(`startupTimingLog`)}catch{return!1}}var cn=sn();function ln(e){if(typeof e!=`object`||!e)return e??{};try{return JSON.parse(JSON.stringify(e,(e,t)=>{if(typeof t==`number`)return Number.isFinite(t)?Number(t.toFixed(3)):String(t);if(typeof t!=`function`)return t}))}catch{return{unserializable:!0}}}function T(e,t={}){let n=performance.now(),r={index:w.events.length,name:e,at:Number(n.toFixed(3)),detail:ln(t)};if(w.events.push(r),w.events.length>Jt&&w.events.splice(0,w.events.length-Jt),cn)try{performance.mark(`${Yt}${e}`)}catch{}return cn&&console.debug(`[startup-timing]`,JSON.stringify(r)),r}function un(){return{createdAt:w.createdAt,timeOrigin:w.timeOrigin,now:Number(performance.now().toFixed(3)),eventCount:w.events.length,events:w.events.slice()}}function dn(){w.events.length=0,T(`debug.timeline.cleared`)}if(window.__outerWebsiteRecordStartupTiming=T,cn&&typeof PerformanceObserver<`u`)try{w.longTaskObserver?.disconnect?.(),w.longTaskObserver=new PerformanceObserver(e=>{e.getEntries().forEach(e=>{T(`performance.longtask`,{startTime:e.startTime,duration:e.duration,name:e.name})})}),w.longTaskObserver.observe({type:`longtask`,buffered:!0})}catch{}T(`main.module.loaded`,{assetProfile:we});var fn=new e,pn=new e,mn=[],hn=!1,gn=new e(0,0,0),_n=null,E={lastRenderMs:0,avgRenderMs:0,avgFrameMs:0,fps:0,lastUiUpdate:0,lastFrameNow:0},vn=4/3,yn=21/9;function bn(e){return Math.min(Math.max(e,vn),yn)}function xn(e=window.innerWidth,t=window.innerHeight){let n=Math.max(1,Math.floor(e)),r=Math.max(1,Math.floor(t)),i=n/r,a=bn(i),o=n,s=r;return i>a?o=Math.max(1,Math.round(r*a)):i<a&&(s=Math.max(1,Math.round(n/a))),{windowWidth:n,windowHeight:r,width:o,height:s,left:Math.round((n-o)/2),top:Math.round((r-s)/2),aspect:o/s,isClamped:Math.abs(i-a)>.001}}var D=xn();function Sn(){Object.assign(D,xn())}function Cn(e,t){let n=e-D.left,r=t-D.top,i=f.clamp(n,0,D.width),a=f.clamp(r,0,D.height);return{x:i/D.width*2-1,y:-(a/D.height)*2+1,inside:n>=0&&n<=D.width&&r>=0&&r<=D.height}}function O(e,t=bt){if(e===!0)return bt;if(e===!1||e==null)return t;let n=Number(e);return n>=4?4:n>=2?2:0}function wn(e){return e>=4?`4x`:e>=2?`2x`:`Off`}function Tn(){let e={bloomEnabled:!_(),msaaSamples:O(_()?0:g.preferredMsaaSamples,_()?0:bt)};try{let t=window.localStorage.getItem(ht);if(!t)return e;let n=JSON.parse(t);return{bloomEnabled:n?.bloomEnabled!==!1,msaaSamples:O(n?.msaaSamples??n?.msaaEnabled,e.msaaSamples)}}catch{return e}}var k=Tn();function En(){try{window.localStorage.setItem(ht,JSON.stringify(k))}catch{}}var A={url:`/embedded-winxp.html`,width:1280,height:820,rotationX:-Math.PI*15.5/180,rotationY:Math.PI/2,rotationZ:0,flipNormal:!1,scaleMultiplier:1,scaleX:.99,scaleY:1.01,offsetX:0,offsetY:6e-4,offsetZ:0},Dn={localCorners:[new e(-A.width/2,A.height/2,0),new e(A.width/2,A.height/2,0),new e(A.width/2,-A.height/2,0),new e(-A.width/2,-A.height/2,0)],worldCorners:[new e,new e,new e,new e],quad:[{x:0,y:0},{x:0,y:0},{x:0,y:0},{x:0,y:0}],cameraSpacePoint:new e,projectedPoint:new e},j={loader:{bgColor:`#d9d9d9`,minLoadTime:1500,fadeTime:1,cameraPush:{startTime:1.5,duration:1,distance:.5},shockwave:{startTime:.5,duration:5.5,startRadius:0,endRadius:20,edgeWidth:.2,edgeIntensity:3,centerOffset:new e(-4,-1,0)},skyFade:{startTime:.5,duration:1},screenFade:{startTime:2.5,duration:6.5},controlsUnlockTime:2.5},intro:{startPos:new e(4.3,-1.8,0),startTarget:new e(0,-1.4,0)},focus:{duration:2e3,easing:`easeInOutCubic`,distance:.18,yOffset:0,maxTriggerAngle:60,targetOffsetX:0,targetOffsetY:0,targetOffsetZ:0,hitboxScale:1.8},unfocus:{preDelay:0,duration:1800,easing:`easeOutCubic`,endPos:new e(4.5,-1.8,0),endTarget:new e(0,-1.4,0)},shield:{maxClickDistance:1.2,dimOpacity:.8,fadeDistance:.55,opacityLerp:.14},sky:{rotationSpeed:3e-5},parallax:{maxAngle:6,unlockThreshold:.12,springAccel:.0065,springFriction:.095,catchupSpeed:.055,idleTimeout:2200},walk:{chargeTime:80,releaseGrace:50,maxDist:1e3,speed:.011,acceleration:.6,deceleration:.6,dirLerp:1,dampingZone:.8,bounds:{minX:2,maxX:5,minY:-2,maxY:1.5,minZ:-3.5,maxZ:3.5}}};document.body.style.backgroundColor=j.loader.bgColor,document.body.style.margin=`0`,document.body.style.overflow=`hidden`;var On=`/font/Controller%20W01%20Two%20Oblique.ttf`,kn=`/font/Controller%20W01%20Five%20Oblique.ttf`,An=`"Controller W01 Two Oblique", 'Courier New', Courier, monospace`,jn=`"Controller W01 Five Oblique", 'Courier New', Courier, monospace`,Mn=document.createElement(`style`);Mn.textContent=`
  @font-face {
    font-family: 'Controller W01 Two Oblique';
    src: url('${On}') format('truetype');
    font-weight: 400;
    font-style: normal;
    font-display: swap;
  }
  @font-face {
    font-family: 'Controller W01 Five Oblique';
    src: url('${kn}') format('truetype');
    font-weight: 400;
    font-style: normal;
    font-display: swap;
  }
  #hud-loader-root {
    position: fixed; top: 0; left: 0; width: 100vw; height: 100vh;
    background-color: #ffffff;
    z-index: 9999; display: flex; justify-content: center; align-items: center;
    font-family: ${An};
    color: #ff7b00;
    filter: drop-shadow(0 0 2px rgba(255,102,0,0.9)) drop-shadow(0 0 6px rgba(255,102,0,0.5));
    -webkit-user-select: none; user-select: none;
    transition: opacity ${j.loader.fadeTime}s ease-in-out;
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
`,document.head.appendChild(Mn);var M=document.createElement(`div`);M.id=`hud-loader-root`,M.innerHTML=`
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
  </div>`,document.body.appendChild(M);var Nn,Pn=new Promise(e=>{Nn=e});(function(){let e=M.querySelector(`#hud-bar`),t=M.querySelector(`#hud-hex`),n=M.querySelector(`#hud-status`);for(let t=0;t<18;t++){let t=document.createElement(`div`);t.className=`hud-block`,e.appendChild(t)}let r=e.querySelectorAll(`.hud-block`),i=0;function a(){i+=Math.random()*2+1,i>100&&(i=100);let e=Math.round(i/100*18);r.forEach((t,n)=>t.classList.toggle(`lit`,n<e)),t.textContent=`0x`+Math.floor(Math.random()*65535).toString(16).toUpperCase(),i<100?setTimeout(a,Math.random()*100+20):(n.textContent=`Boot sequence complete.`,setTimeout(Nn,800))}setTimeout(a,1e3)})();function Fn(){return T(`loader.prompt.wait.start`),new Promise(e=>{let t=M.querySelector(`.hud-core`);if(!t){T(`loader.prompt.missing`),mt=null,e();return}let n=!1,r=t=>{if(n)return;let r=performance.now();if(T(`loader.gesture.finish.start`,{reason:t}),n=!0,mt=null,M.removeEventListener(`pointerdown`,i,!0),M.removeEventListener(`keydown`,a,!0),typeof J?.releaseQueuedPlayback==`function`){let e=performance.now();J.releaseQueuedPlayback(t),T(`loader.gesture.audioRelease.called`,{reason:t,elapsedMs:performance.now()-e})}T(`loader.gesture.finish.end`,{reason:t,elapsedMs:performance.now()-r}),e()},i=e=>{T(`loader.gesture.pointerdown`,{button:e.button,pointerType:e.pointerType}),e.preventDefault(),r(`loader-start-pointer`)},a=e=>{e.key!==`Enter`&&e.key!==` `||(T(`loader.gesture.keydown`,{key:e.key}),e.preventDefault(),r(`loader-start-keyboard`))};t.classList.add(`is-awaiting-start`),mt=()=>{T(`loader.gesture.debugTrigger`),r(`loader-start-debug`)},M.tabIndex=0,M.focus({preventScroll:!0}),M.addEventListener(`pointerdown`,i,!0),M.addEventListener(`keydown`,a,!0),T(`loader.prompt.awaiting`,{activeElementId:document.activeElement?.id??``})})}var In=document.getElementById(`app`),Ln=new o,Rn={fov:65,near:.1,far:1e3},N={exposure:1.1,saturation:1.25,highlights:.95,washout:0,lift:0,gamma:1,colorBalance:new e(1,1,1),bloomOffCompensation:{exposure:1.26,saturation:1.55,highlights:.95,washout:0,lift:0,gamma:1,colorBalance:new e(1.003,1.006,1.026)},repeatX:2,repeatY:1.2,offsetY:0,rotationY:-3*Math.PI/4},P={exposure:.9,bloom:{strength:.01,radius:0,threshold:0,transitionDurationMs:220},unfocus:{bloomResumeProgress:.5}},zn={appearAt:3,fadeDuration:1},Bn={sources:[`/audio/outer-bgm.ogg`,`/audio/outer-bgm.m4a`],loop:!0,initialVolume:.56,defaultWantsToPlay:!0},Vn={minVolumeRatio:.2,volumeSyncEpsilon:.003},F=new l(Rn.fov,D.aspect,Rn.near,Rn.far),Hn=new e().subVectors(j.intro.startTarget,j.intro.startPos).normalize(),Un=j.intro.startPos.clone().addScaledVector(Hn,-j.loader.cameraPush.distance);F.position.copy(Un);var I=new ue({antialias:!0,alpha:!1,powerPreference:`high-performance`});function Wn(){I.domElement.style.left=`${D.left}px`,I.domElement.style.top=`${D.top}px`}function Gn(e=tr,t=Yn()){return _()||!e?t:qn()}function Kn(e=Yn()){let t=Gn(tr,e);I.setPixelRatio(t),I.setSize(D.width,D.height),er=e,L?.setPixelRatio&&L.setPixelRatio(e),L?.setSize&&L.setSize(D.width,D.height),R?.setSize&&R.setSize(Math.max(1,Math.floor(D.width*e*.5)),Math.max(1,Math.floor(D.height*e*.5)))}function qn(){return Math.min(window.devicePixelRatio||1,Xt())}function Jn(){return Zt()}function Yn(){let e=qn();return f.clamp(e*Jn(),Qt(),e)}I.setPixelRatio(qn()),I.setSize(D.width,D.height),I.setClearColor(0,1),I.outputColorSpace=fe,I.useLegacyLights=!1,I.toneMapping=4,I.toneMappingExposure=P.exposure,In.style.position=`relative`,In.style.backgroundColor=`#000000`,I.domElement.style.position=`absolute`,I.domElement.style.zIndex=`1`,I.domElement.style.pointerEvents=`auto`,I.domElement.style.display=`block`,Wn(),In.appendChild(I.domElement);var Xn=null,L=null,Zn=null,R=null,Qn=null,$n=0,er=0,tr=!1,z={currentStrength:k.bloomEnabled&&!_()?P.bloom.strength:0,fromStrength:k.bloomEnabled&&!_()?P.bloom.strength:0,targetStrength:k.bloomEnabled&&!_()?P.bloom.strength:0,transitionStartedAt:performance.now()},nr={hidden:!1};function rr(){return k.bloomEnabled&&!Lr()?P.bloom.strength:0}function ir(e=performance.now()){let t=rr();Math.abs(t-z.targetStrength)<1e-4||(z.fromStrength=z.currentStrength,z.targetStrength=t,z.transitionStartedAt=e)}function ar(){return Math.abs(z.currentStrength-z.targetStrength)>1e-4}function or(){return z.currentStrength>1e-4||z.targetStrength>1e-4}function sr(e=performance.now()){ir(e);let t=Math.max(0,P.bloom.transitionDurationMs??0);if(t<=0)z.currentStrength=z.targetStrength,z.fromStrength=z.targetStrength;else{let n=f.clamp((e-z.transitionStartedAt)/t,0,1),r=n<.5?4*n*n*n:1-(-2*n+2)**3/2;z.currentStrength=f.lerp(z.fromStrength,z.targetStrength,r),n>=1&&(z.currentStrength=z.targetStrength,z.fromStrength=z.targetStrength)}R&&(R.enabled=or(),R.strength=z.currentStrength,R.radius=P.bloom.radius,R.threshold=P.bloom.threshold)}function cr(){return Rr()?0:k.msaaSamples}function lr(e=performance.now()){return ir(e),Wt}function ur(e=cr()){let t=O(e,0);if(t<=0)return 0;let n=I.capabilities.maxSamples??0;return n>=t?t:n>=4?4:n>=2?2:0}function dr(){L?.dispose&&L.dispose(),R?.dispose&&R.dispose(),Qn?.dispose&&Qn.dispose(),Xn&&Xn.dispose(),L=null,Zn=null,R=null,Qn=null,Xn=null,tr=!1}function fr({pixelRatio:e=Yn(),msaaSamples:t=ur(cr()),useComposer:n=lr()}={}){dr();let r=Math.max(1,Math.floor(D.width*e)),i=Math.max(1,Math.floor(D.height*e)),a=Gn(n,e);I.setPixelRatio(a),I.setSize(D.width,D.height),Wn(),er=e,$n=n?t:0,tr=n,n&&(Xn=new p(r,i,{samples:t,type:te}),L=new ne(I,Xn),L?.setPixelRatio&&L.setPixelRatio(e),Zn=new se(Ln,F),L.addPass(Zn),R=new ae(new m(Math.max(1,Math.floor(D.width*e*.5)),Math.max(1,Math.floor(D.height*e*.5))),z.currentStrength,P.bloom.radius,P.bloom.threshold),sr(performance.now()),L.addPass(R),Qn=new le,L.addPass(Qn),L?.setSize&&L.setSize(D.width,D.height))}function pr({forceRebuild:e=!1}={}){let t=performance.now();ir(t);let n=Yn(),r=ur(cr()),i=lr(t);if(e||Math.abs(n-er)>.001||r!==$n||i!==tr){fr({pixelRatio:n,msaaSamples:r,useComposer:i}),K.projectionInvalidated=!0,q();return}if(Math.abs(n-er)>.001){Kn(n),K.projectionInvalidated=!0,q();return}sr(t)}fr();function mr(){let e=Yn();return{scale:Number(Jn().toFixed(3)),pixelRatio:e,width:Math.max(1,Math.floor(D.width*e)),height:Math.max(1,Math.floor(D.height*e))}}function hr(){let e=performance.memory;if(!e)return null;let t=e=>Number((e/(1024*1024)).toFixed(2));return{usedMB:t(e.usedJSHeapSize),totalMB:t(e.totalJSHeapSize),limitMB:t(e.jsHeapSizeLimit)}}function gr(){let e=Ji(),t=mr(),n=O(k.msaaSamples,0),r=O(cr(),0),i=ur(cr()),a=$?.velocity?.lengthSq?.()??0,o=X?.velocity?.lengthSq?.()??0,s=X?.currentMouse?.distanceToSquared?.(X.targetMouse)??0,c=Math.abs((U?.current??0)-(U?.target??0)),l=W?.lastUpdateAt?performance.now()-W.lastUpdateAt:null;return{ready:!Je,isAnimating:x,physicsUnlocked:y,focused:b,benchmarkMode:!1,externalTextureOverridesEnabled:!0,assetProfile:we,assetProfileLabel:v.label,performanceProfile:{qualityMode:We,qualitySelectionSource:Ge,qualityLowTierScore:Ue.profile?.lowTierScore??null,lowPowerOuterMode:_(),maxDevicePixelRatio:Xt(),renderScale:Number(Jn().toFixed(3)),skyOnlyTargetFps:$t()},bloomEnabled:e.bloomEnabled,bloomStrength:Number(z.currentStrength.toFixed(4)),savedBloomEnabled:k.bloomEnabled,requestedMsaaSamples:r,savedMsaaSamples:n,effectiveMsaaSamples:i,msaaLabel:wn(i),avgRenderMs:Number(E.avgRenderMs.toFixed(3)),avgFrameMs:Number(E.avgFrameMs.toFixed(3)),fps:Number(E.fps.toFixed(2)),resolution:t,viewport:{width:D.width,height:D.height,left:D.left,top:D.top,aspect:Number(D.aspect.toFixed(3)),clamped:D.isClamped},rendererInfo:{calls:I.info.render.calls,triangles:I.info.render.triangles,lines:I.info.render.lines,points:I.info.render.points,frame:I.info.render.frame,geometries:I.info.memory.geometries,textures:I.info.memory.textures},jsHeap:hr(),internals:{outerScenePaused:Pr(),effectiveRenderPath:Ur()?`renderer`:`composer`,composerActive:tr,outerCanvasVisible:!nr.hidden,screenContentMode:Ar,screenAppReadyForProjection:ki(),renderRequested:K.renderRequested,projectionInvalidated:K.projectionInvalidated,hasActiveSceneAnimation:$r(performance.now()),hasSkyAnimation:Kr(),transitionSettleRemainingMs:Math.max(0,Number((K.transitionSettleUntil-performance.now()).toFixed(3))),walkVelocitySq:Number(a.toFixed(8)),parallaxVelocitySq:Number(o.toFixed(8)),parallaxDeltaSq:Number(s.toFixed(8)),screenOpacityDelta:Number(c.toFixed(8)),screenProjectionAgeMs:l==null?null:Number(l.toFixed(3))}}}function _r(e=2e4){return new Promise((t,n)=>{let r=performance.now();function i(){if(!Je){t(gr());return}if(performance.now()-r>=e){n(Error(`Timed out waiting for outer scene readiness`));return}window.requestAnimationFrame(i)}i()})}function vr(e=3e4){return new Promise((t,n)=>{let r=performance.now();function i(){if(!Je&&!x&&y){t(gr());return}if(performance.now()-r>=e){n(Error(`Timed out waiting for benchmark-stable scene state`));return}window.requestAnimationFrame(i)}i()})}function yr(e=2e4){return new Promise((t,n)=>{let r=performance.now();function i(){if(typeof mt==`function`){t(!0);return}if(performance.now()-r>=e){n(Error(`Timed out waiting for loader start prompt`));return}window.requestAnimationFrame(i)}i()})}function br(e=3e3){return new Promise((t,n)=>{let r=Math.max(250,Number(e)||3e3),i=performance.now(),a=[],o=[],s=[],c=0;function l(){let e=gr(),n=e=>e.length?Number((e.reduce((e,t)=>e+t,0)/e.length).toFixed(3)):0,i=o.map(e=>e>0?1e3/e:0);t({...e,sampleDurationMs:r,sampleCount:a.length,windowAvgRenderMs:n(a),windowAvgFrameMs:n(o),windowAvgFps:n(i),windowMinFps:i.length?Number(Math.min(...i).toFixed(3)):0,windowMaxFps:i.length?Number(Math.max(...i).toFixed(3)):0,windowAvgHeapMB:n(s)})}function u(e){let t=gr();if(a.push(E.lastRenderMs||t.avgRenderMs),t.jsHeap?.usedMB!=null&&s.push(t.jsHeap.usedMB),c>0){let t=e-c;t>0&&t<250&&o.push(t)}if(c=e,performance.now()-i>=r){l();return}window.requestAnimationFrame(u)}_r().then(()=>u()).catch(n)})}window.__outerWebsiteDebug={getMetrics:gr,getWinXPRuntimeState:()=>({focusState:Ce(),presentationState:xe(),presentationProfile:_e()}),waitForReady:_r,waitForBenchmarkStable:vr,waitForStartPrompt:yr,getStartupTimeline:un,clearStartupTimeline:dn,getQualityProfile:()=>({mode:We,selectionSource:Ge,profile:Ue.profile,storageKeys:{mode:Te,profile:Ee}}),setQualityMode:e=>(ta(Pe(e)),gr()),clearQualityProfile:()=>(Fe(),!0),startExperience:()=>typeof mt==`function`?(mt(),!0):!1,sampleMetrics:br};var xr=new re(F,I.domElement);xr.enabled=!1,xr.target.copy(j.intro.startTarget);var Sr=new i,Cr=new ce,wr=new oe,Tr=new c,Er=new u;Tr.setTranscoderPath(`/basis/`),Tr.detectSupport(I),Er.setDecoderPath(`/draco/`),Er.preload(),Cr.setKTX2Loader(Tr),Cr.setDRACOLoader(Er);var Dr=null,B=null,V=null,Or=null,kr=null,Ar=`live`,jr=[],Mr=null,H=null,U={runtimeEnabled:!1,current:0,target:0,pointerEvents:`none`},W={quad:null,lastUpdateAt:0,lastMissStartedAt:0},G={currentGain:1,fullVolumeDistance:0,minimumVolumeDistance:0,lastSyncedVolume:null},K={frameId:null,renderRequested:!0,projectionInvalidated:!0,skyFrameTimeoutId:null,transitionSettleUntil:0},Nr={mode:`idle`,startedAt:0,duration:0,easingName:`easeInOutCubic`};function Pr(){return b&&!x}function Fr(e,t,n,r=performance.now()){Nr.mode=e,Nr.startedAt=r,Nr.duration=Math.max(1,t),Nr.easingName=n}function Ir(){Nr.mode=`idle`,Nr.startedAt=0,Nr.duration=0,Nr.easingName=`easeInOutCubic`}function Lr(e=performance.now()){return _()}function Rr(){return _()}function zr(){return!1}function Br(){let e=zr();nr.hidden!==e&&(nr.hidden=e,I.domElement.style.display=`block`,I.domElement.style.visibility=e?`hidden`:`visible`,I.domElement.style.opacity=e?`0`:`1`,I.domElement.style.pointerEvents=e?`none`:`auto`)}function Vr(){let e={focused:b,animating:x,settled:Pr()};pr(),Br(),Qi(),Se(e)}Se(ye);function Hr(e){b!==e&&(b=e,Hi(),pr(),Br(),Qi(),q())}function Ur(){return!tr}function Wr(e,t){if(!e||!t)return;let n=t.getBoundingClientRect(),r=pt?.getBoundingClientRect()??n,i=e.offsetWidth||e.getBoundingClientRect().width||0,a=f.clamp(r.right-i,vt,window.innerWidth-vt-i);e.style.left=`${a}px`,e.style.top=`${n.bottom+_t}px`}function Gr(){Wr(S,nt),Wr(it,ut)}function Kr(){return!!H&&!Pr()&&!_()}function qr(e,t=rn()){return e.lengthSq()<=t*t}function Jr(e,t=It){return e.lengthSq()<=t*t}function Yr(){return U.runtimeEnabled&&Math.abs(U.current-U.target)>zt}function Xr(){K.skyFrameTimeoutId!==null&&(window.clearTimeout(K.skyFrameTimeoutId),K.skyFrameTimeoutId=null)}function q(){K.renderRequested=!0,Xr(),Br(),K.frameId===null&&(K.frameId=window.requestAnimationFrame(Da))}function Zr(e=en()){K.renderRequested||K.frameId!==null||K.skyFrameTimeoutId!==null||(K.skyFrameTimeoutId=window.setTimeout(()=>{K.skyFrameTimeoutId=null,K.frameId===null&&(K.frameId=window.requestAnimationFrame(Da))},Math.max(0,e)))}function Qr(){K.projectionInvalidated=!0,q()}function $r(e){return!!(Je||x||ar()||e<K.transitionSettleUntil||Q.w||Q.a||Q.s||Q.d||Q[` `]||Q.control||$.active||$.velocity.lengthSq()>1e-6||X.velocity.lengthSq()>1e-6||!qr(X.currentMouse)||X.currentMouse.distanceToSquared(X.targetMouse)>1e-6||Yr())}function ei(e=Dt){K.transitionSettleUntil=Math.max(K.transitionSettleUntil,performance.now()+e),q()}function ti(e=performance.now(),t=!1,n=!1){return K.projectionInvalidated?!0:t?!1:b?!!(x||Je):x||Je||n||K.renderRequested?!0:e-W.lastUpdateAt>=At}function ni(e=performance.now(),{skyOnly:t=!1,sceneAnimationActive:n=!1,frameScale:r=1}={}){let i=performance.now(),a=ar();sr(e),tr&&!lr(e)&&pr({forceRebuild:!0}),gi();let o=ar();(a||o)&&!x&&Qi(),t||Li(),!tr||!L?I.render(Ln,F):L.render(),t||Ta(r),ti(e,t,n)&&(di(),K.projectionInvalidated=!1,W.lastUpdateAt=e),aa(performance.now()-i,e)}function ri(e){let t=f.clamp(e,0,1);Math.abs(U.current-t)<.001||(U.current=t,V?.setVisualState({brightness:t}),Br())}function ii(e){U.pointerEvents!==e&&(U.pointerEvents=e,V?.setVisualState({pointerEvents:e}))}function ai(e,t){if(Dn.cameraSpacePoint.copy(e).applyMatrix4(F.matrixWorldInverse).z>=-.001)return null;let n=Dn.projectedPoint.copy(e).project(F);return!Number.isFinite(n.x)||!Number.isFinite(n.y)?null:(t.x=D.left+(n.x*.5+.5)*D.width,t.y=D.top+(-n.y*.5+.5)*D.height,t)}function oi(){if(!B)return null;B.updateMatrixWorld(!0);for(let e=0;e<Dn.localCorners.length;e+=1)if(!ai(Dn.worldCorners[e].copy(Dn.localCorners[e]).applyMatrix4(B.matrixWorld),Dn.quad[e]))return null;return Dn.quad}function si(e){return e.map(e=>({x:e.x,y:e.y}))}function ci(e,t){for(let n=0;n<t.length;n+=1)e[n].x=t[n].x,e[n].y=t[n].y}function li(e,t,n=Nt){if(!e||!t||e.length!==t.length)return!1;for(let r=0;r<e.length;r+=1)if(Math.abs(e[r].x-t[r].x)>n||Math.abs(e[r].y-t[r].y)>n)return!1;return!0}function ui(){if(W.quad&&V?.isMounted?.()){W.lastMissStartedAt=0,V.setVisualState({pointerEvents:`none`,visible:!0}),Br();return}W.quad=null,W.lastMissStartedAt=0,V?.setVisualState({pointerEvents:`none`,visible:!1}),Br()}function di(){if(!B){ui();return}let e=performance.now(),t=oi();if(!t){if(W.quad&&(W.lastMissStartedAt===0&&(W.lastMissStartedAt=e),e-W.lastMissStartedAt<tn())){V?.setVisualState({visible:!0}),Br();return}ui();return}if(W.lastMissStartedAt=0,!W.quad)W.quad=si(t);else if(!li(W.quad,t))ci(W.quad,t);else{V&&V.setVisualState({visible:!0}),Br();return}V&&(V.syncProjection(W.quad),V.setVisualState({visible:!0})),Br()}function fi(e,t){if(!W.quad||W.quad.length!==4)return!1;let n=0;for(let r=0;r<W.quad.length;r+=1){let i=W.quad[r],a=W.quad[(r+1)%W.quad.length],o=(a.x-i.x)*(t-i.y)-(a.y-i.y)*(e-i.x);if(Math.abs(o)<=.5)continue;let s=Math.sign(o);if(n===0){n=s;continue}if(n!==s)return!1}return!0}function pi(e){hn=!1,e.traverse(e=>{e.isMesh&&(e.name.toLowerCase().includes(`screen_plane`)||e.name.toLowerCase().includes(`hitbox`)||(Array.isArray(e.material)?e.material:[e.material]).forEach(e=>{if(!e||mn.includes(e))return;mn.push(e);let t=e.onBeforeCompile,n=Object.prototype.hasOwnProperty.call(e,`customProgramCacheKey`),r=e.customProgramCacheKey;e.userData.outerWebsiteShockwaveMaterial={originalOnBeforeCompile:t,hadOwnCustomProgramCacheKey:n,originalCustomProgramCacheKey:r},e.onBeforeCompile=(n,r)=>{typeof t==`function`&&t.call(e,n,r),e.userData.shader=n,n.uniforms.uShockwaveRadius={value:0},n.uniforms.uShockwaveCenter={value:gn},n.uniforms.uEdgeIntensity={value:j.loader.shockwave.edgeIntensity},n.vertexShader=`
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
          float edgeWidth = ${j.loader.shockwave.edgeWidth.toFixed(2)};
          if (uShockwaveRadius > 0.01 && dist > uShockwaveRadius - edgeWidth) {
             float glow = (dist - (uShockwaveRadius - edgeWidth)) / edgeWidth;
             gl_FragColor.rgb += vec3(glow * 0.2, glow * 0.8, glow * 1.5) * uEdgeIntensity;
          }
          `)},e.customProgramCacheKey=()=>`${typeof r==`function`?r.call(e):``}|${Ht}`,e.needsUpdate=!0}))})}function mi(){hn||(hn=!0,mn.forEach(e=>{let t=e?.userData?.outerWebsiteShockwaveMaterial;t&&(e.onBeforeCompile=t.originalOnBeforeCompile,t.hadOwnCustomProgramCacheKey?e.customProgramCacheKey=t.originalCustomProgramCacheKey:delete e.customProgramCacheKey,delete e.userData.shader,delete e.userData.outerWebsiteShockwaveMaterial,e.needsUpdate=!0)}),q())}function hi(e,n={}){return e.wrapS=t,e.wrapT=ie,new r({transparent:!0,uniforms:{tSky:{value:e},uExposure:{value:N.exposure},uSaturation:{value:N.saturation},uHighlights:{value:N.highlights},uWashout:{value:n.washout??N.washout},uLift:{value:n.lift??N.lift},uGamma:{value:n.gamma??N.gamma},uColorBalance:{value:N.colorBalance.clone()},uRepeat:{value:new m(n.repeatX??N.repeatX,n.repeatY??N.repeatY)},uOffsetY:{value:n.offsetY??N.offsetY},uSkyOpacity:{value:0}},vertexShader:`varying vec2 vUv; void main() { vUv = uv; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }`,fragmentShader:`
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
    `,side:0,toneMapped:!1})}function gi(){let e=H?.material?.uniforms;if(!e)return;let t=Math.max(1e-4,P.bloom.strength??1e-4),n=f.clamp(z.currentStrength/t,0,1),r=N.bloomOffCompensation;e.uExposure.value=f.lerp(r.exposure,N.exposure,n),e.uSaturation.value=f.lerp(r.saturation,N.saturation,n),e.uHighlights.value=f.lerp(r.highlights,N.highlights,n),e.uWashout.value=f.lerp(r.washout,N.washout,n),e.uLift.value=f.lerp(r.lift,N.lift,n),e.uGamma.value=f.lerp(r.gamma,N.gamma,n),e.uColorBalance.value.lerpVectors(r.colorBalance,N.colorBalance,n)}var _i={computer:{path:v.lightMapPaths.computer}},vi={room:{path:v.bakedSurfacePaths.room},table:{path:v.bakedSurfacePaths.table},chairBack:{path:v.bakedSurfacePaths.chairBack},chairLeft:{path:v.bakedSurfacePaths.chairLeft},chairRight:{path:v.bakedSurfacePaths.chairRight}},yi=new Set([`room`,`table`]),bi={computer:{envMapIntensity:10.95,roughnessMin:.8}};function xi(e){e.map&&(e.map.colorSpace=fe),e.emissiveMap&&(e.emissiveMap.colorSpace=fe)}function Si(e){let t=e.getAttribute(`uv`);if(!t)return;let n=new Float32Array(t.array.length);n.set(t.array),e.setAttribute(`uv1`,new h(n,t.itemSize))}function Ci(e){return e.includes(`room`)||e.includes(`wall`)||e.includes(`floor`)||e.includes(`ceiling`)?`room`:(e.includes(`table`)||e.includes(`desk`))&&!e.includes(`portable`)?`table`:e.includes(`chair_back`)||e.includes(`chair`)&&e.includes(`back`)?`chairBack`:e.includes(`chair_left`)||e.includes(`chair`)&&e.includes(`left`)?`chairLeft`:e.includes(`chair_right`)||e.includes(`chair`)&&e.includes(`right`)?`chairRight`:null}function wi(e){return e.includes(`computer`)||e.includes(`pc`)||e.includes(`monitor`)||e.includes(`portable`)||e.includes(`bm86`)?`computer`:null}function Ti(e){return yi.has(e)}async function Ei(e,t={}){let n=await Sr.loadAsync(e);return n.flipY=t.flipY??!1,t.colorSpace&&(n.colorSpace=t.colorSpace),n}async function Di(e,t={}){if(e.toLowerCase().endsWith(`.ktx2`)){let n=await Tr.loadAsync(e);return t.colorSpace&&(n.colorSpace=t.colorSpace),n}return Ei(e,t)}function Oi(e){V?.setVisualState({transition:e})}function ki(){return!!V?.isMounted()}function Ai(e=`preload`){return Or?(T(`screenOverlay.import.reuse`,{reason:e}),Or):(T(`screenOverlay.import.start`,{reason:e}),Or=be(()=>import(`./outer-screen-overlay-B28WwniR.js`).then(t=>(T(`screenOverlay.import.end`,{reason:e}),t),t=>{throw Or=null,T(`screenOverlay.import.error`,{reason:e,message:t?.message??String(t)}),t}),__vite__mapDeps([0,1,2,3,4])),Or)}async function ji(){let e=performance.now();return T(`screenOverlay.ensure.start`,{hasOverlay:!!V,hasPendingModulePromise:!!Or,hasPendingOverlayPromise:!!kr}),V?(T(`screenOverlay.ensure.end`,{branch:`cached`,elapsedMs:performance.now()-e}),V):(kr||=Ai(`ensure`).then(({createScreenHtmlOverlay:e})=>(V=e({width:A.width,height:A.height}),G.lastSyncedVolume=null,V.setVisualState({opacity:U.current,brightness:1,pointerEvents:`none`,transition:``,visible:!1}),Br(),Ri(J.getState().isMuted),zi(J.getState().volume),Qr(),V)),kr.then(t=>(T(`screenOverlay.ensure.end`,{branch:`promise`,elapsedMs:performance.now()-e,mounted:t?.isMounted?.()??!1}),t)))}function Mi(t){if(!t||B)return;B=new me,Ln.add(B),t.updateWorldMatrix(!0,!1),t.geometry.computeBoundingBox();let n=t.geometry.boundingBox,r=new e;n.getCenter(r);let i=r.applyMatrix4(t.matrixWorld);B.position.copy(i),B.rotation.set(A.rotationX,A.rotationY,A.rotationZ,`YXZ`),B.translateZ(A.offsetZ),B.translateX(A.offsetX),B.translateY(A.offsetY);let a=new e;n.getSize(a);let o=[a.x,a.y,a.z].sort((e,t)=>t-e),s=o[0]/A.width*A.scaleMultiplier*A.scaleX,c=o[1]/A.height*A.scaleMultiplier*A.scaleY;B.scale.set(s,c,1),B.updateMatrixWorld(!0);let l=new e(0,0,1).applyQuaternion(B.quaternion).normalize();fn.copy(B.position).addScaledVector(l,j.focus.distance),fn.y+=j.focus.yOffset,pn.copy(B.position),pn.x+=j.focus.targetOffsetX,pn.y+=j.focus.targetOffsetY,pn.z+=j.focus.targetOffsetZ,G.fullVolumeDistance=fn.distanceTo(B.position),G.minimumVolumeDistance=Math.max(G.fullVolumeDistance+1e-4,Un.distanceTo(B.position),j.intro.startPos.distanceTo(B.position),j.unfocus.endPos.distanceTo(B.position)),G.currentGain=Pi(F.position.distanceTo(B.position)),Qr()}function Ni(e){return f.clamp(e,0,1)}function Pi(e){let t=G.fullVolumeDistance,n=Math.max(G.minimumVolumeDistance,t+1e-4);if(!(t>0)||!(n>t)||e<=t)return 1;if(e>=n)return Vn.minVolumeRatio;let r=(e-t)/(n-t),i=r*r*(3-2*r);return f.lerp(1,Vn.minVolumeRatio,i)}function Fi(e){Ar=`live`}function Ii(e){return Ni(e*G.currentGain)}function Li(){if(!B||!J||!ki())return;let e=Pi(F.position.distanceTo(B.position));Math.abs(e-G.currentGain)<.001||(G.currentGain=e,zi(J.getState().volume))}function Ri(e){if(V?.syncAudioControl){V.syncAudioControl({type:ve.SET_MUTED,muted:!!e});return}let t=window.__outerWebsiteAudioRuntime;t&&t.setMuted(!!e)}function zi(e){let t=Ii(e);if(G.lastSyncedVolume!==null&&Math.abs(G.lastSyncedVolume-t)<Vn.volumeSyncEpsilon)return;if(G.lastSyncedVolume=t,V?.syncAudioControl){V.syncAudioControl({type:ve.SET_VOLUME,volume:t});return}let n=window.__outerWebsiteAudioRuntime;n&&n.setVolume(t)}function Bi(){let e=(Array.isArray(Bn.sources)?Bn.sources:[Bn.src]).filter(Boolean),t=new Audio;t.__outerWebsiteIgnoreGlobalAudio=!0,t.preload=`auto`,t.loop=Bn.loop,t.volume=Bn.initialVolume,t.playsInline=!0;let n=!1,r=!0,i=0,a=null,o=0,s=null,c=0,l=null,u=null,d={hasSource:e.length>0,hasError:!1,isMuted:!1,isPlaying:!1,needsUserGesture:!1,unlockArmed:!1,volume:Bn.initialVolume,wantsToPlay:Bn.defaultWantsToPlay},ee=()=>e[o]||``,te=()=>{let e=ee();return e?(t.getAttribute(`src`)!==e&&(t.src=e),!0):(t.removeAttribute(`src`),!1)},ne=()=>o>=e.length-1?!1:(o+=1,n=!1,te()),p=()=>{typeof l==`function`&&l({...d,currentSource:ee()})},m=()=>{a!==null&&(window.clearTimeout(a),a=null)},re=()=>{i=0,m()},ie=(e,n=240)=>!d.wantsToPlay||d.needsUserGesture?!1:a===null?i>=12?!1:(a=window.setTimeout(()=>{a=null,i+=1,t.readyState===0&&!d.hasError&&t.load(),he(`${e}-retry-${i}`)},n),!0):!0,ae=({restoreVolume:e=!1}={})=>{c+=1,s!==null&&(window.cancelAnimationFrame(s),s=null),e&&(t.volume=Ni(d.volume))},oe=e=>{if(t.paused||t.muted||r||t.volume<=.001){e();return}ae();let n=c,i=t.volume,a=performance.now(),o=r=>{if(n!==c)return;let l=Math.min((r-a)/yt,1);if(t.volume=f.lerp(i,0,l),l<1){s=window.requestAnimationFrame(o);return}s=null,e()};s=window.requestAnimationFrame(o)},h=(e=!1)=>{t.muted=e||d.isMuted||r,t.volume=Ni(d.volume)},se=async()=>{if(!d.hasSource||n)return!1;h(!0);try{return await t.play(),re(),n=!0,d.hasError=!1,d.isPlaying=!0,d.needsUserGesture=!1,pe(),p(),!0}catch{return h(),ie(`prime-muted-autoplay`),!1}},ce=()=>!n||t.paused?!1:(ae({restoreVolume:!0}),t.currentTime=0,h(),re(),d.hasError=!1,d.isPlaying=!0,d.needsUserGesture=!1,pe(),p(),!0),le=()=>{if(!n||t.paused)return!1;t.pause();try{t.currentTime=0}catch{return!1}return d.isPlaying=!1,!0},ue=(e=`timeline-sync`)=>{let i=performance.now();if(T(`audio.releaseQueuedPlayback.start`,{reason:e,holdAudibleStart:r,wantsToPlay:d.wantsToPlay,isPlaying:d.isPlaying,hasPrimedMutedAutoplay:n,paused:t.paused}),!r){d.wantsToPlay&&!d.isPlaying?he(e):(h(),p()),T(`audio.releaseQueuedPlayback.end`,{reason:e,branch:`already-released`,elapsedMs:performance.now()-i});return}if(r=!1,d.needsUserGesture=!1,d.hasError=!1,re(),pe(),h(),!d.wantsToPlay){p(),T(`audio.releaseQueuedPlayback.end`,{reason:e,branch:`not-wanted`,elapsedMs:performance.now()-i});return}let a=le();he(a?`${e}-restart-from-zero`:e),T(`audio.releaseQueuedPlayback.end`,{reason:e,branch:a?`primed-restart`:`play`,elapsedMs:performance.now()-i})},de=()=>{window.setTimeout(()=>{t.currentTime<.25&&(t.currentTime=0),h(),p()},80)},fe=async()=>{h(!0);try{return await t.play(),re(),d.hasError=!1,d.isPlaying=!0,d.needsUserGesture=!1,pe(),de(),p(),!0}catch{return h(),!1}},pe=()=>{!d.unlockArmed||!u||([`pointerdown`,`keydown`,`touchstart`].forEach(e=>{window.removeEventListener(e,u,!0)}),u=null,d.unlockArmed=!1)},me=()=>{d.unlockArmed||=(u=()=>{pe(),d.wantsToPlay&&he(`user-gesture`)},[`pointerdown`,`keydown`,`touchstart`].forEach(e=>{window.addEventListener(e,u,!0)}),!0)},he=async(e=`manual`)=>{if(d.wantsToPlay=!0,ae({restoreVolume:!0}),!d.hasSource)return p(),!1;if(ce())return!0;d.hasError&&=(t.load(),!1),h();try{return await t.play(),re(),d.hasError=!1,d.isPlaying=!0,d.needsUserGesture=!1,pe(),p(),!0}catch(n){return d.isPlaying=!t.paused,n?.name===`NotAllowedError`?await fe()||(d.hasError=!1,ie(`autoplay-blocked`)||(d.needsUserGesture=!0,me())):n?.name===`AbortError`||n?.name===`NotSupportedError`?(d.hasError=!1,ie(n.name===`AbortError`?`media-aborted`:`media-not-ready`)||(d.hasError=!0)):(d.hasError=!0,console.warn(`[BGM] Unable to play audio (${e}).`,n)),p(),!1}},ge=()=>{d.wantsToPlay=!1,d.needsUserGesture=!1,re(),pe(),oe(()=>{t.pause(),ae({restoreVolume:!0}),d.isPlaying=!1,p()})},_e=()=>{if(d.isPlaying||d.wantsToPlay){ge();return}he(`toggle`)},ve=e=>{let t=()=>{d.isMuted=e,h(),Ri(d.isMuted),p()};if(e!==d.isMuted){if(e){oe(t);return}ae({restoreVolume:!0}),t()}};return t.addEventListener(`play`,()=>{d.isPlaying=!0,p()}),t.addEventListener(`pause`,()=>{d.isPlaying=!1,p()}),t.addEventListener(`ended`,()=>{d.isPlaying=!1,p()}),t.addEventListener(`canplay`,()=>{d.wantsToPlay&&!d.isPlaying&&!d.needsUserGesture&&ie(`canplay`,0)}),t.addEventListener(`error`,()=>{let e=t.error?.code??null;if(e===1||e===null){ie(`media-load-aborted`);return}if(e===4){if(ne()){re(),d.hasError=!1,d.isPlaying=!1,t.load(),d.wantsToPlay&&(r?se():he(`media-source-fallback`)),p();return}if(ie(`media-source-error`,320))return}d.hasError=!0,d.isPlaying=!1,console.warn(`[BGM] Audio source could not be loaded: ${ee()}`),p()}),h(),d.hasSource&&te()&&(t.load(),d.wantsToPlay&&se()),{getState(){return{...d,currentSource:ee()}},pause:ge,play:he,releaseQueuedPlayback:ue,setVolume:e=>{ae(),d.volume=Ni(e),d.volume>0&&d.isMuted&&(d.isMuted=!1),h(),zi(d.volume),Ri(d.isMuted),p()},setOnChange(e){l=e,p()},toggleMute:()=>{ve(!d.isMuted)},togglePlay:_e}}var J=Bi(),Y={soundOn:`<svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#ff7b00" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"/><path d="M15.54 8.46a5 5 0 0 1 0 7.07"/><path d="M19.07 4.93a10 10 0 0 1 0 14.14"/></svg>`,soundOff:`<svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#ff7b00" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"/><line x1="23" y1="9" x2="17" y2="15"/><line x1="17" y1="9" x2="23" y2="15"/></svg>`,play:`<svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#ff7b00" stroke-width="2.3" stroke-linecap="round" stroke-linejoin="round"><polygon points="8 5 19 12 8 19 8 5"/></svg>`,pause:`<svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#ff7b00" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><line x1="9" y1="5" x2="9" y2="19"/><line x1="15" y1="5" x2="15" y2="19"/></svg>`,volumeLow:`<svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#ff7b00" stroke-width="2.3" stroke-linecap="round" stroke-linejoin="round"><polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"/><path d="M15 12a3 3 0 0 0 0-0.01"/></svg>`,volumeMid:`<svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#ff7b00" stroke-width="2.3" stroke-linecap="round" stroke-linejoin="round"><polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"/><path d="M15.5 9.5a4 4 0 0 1 0 5"/></svg>`,volumeHigh:`<svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#ff7b00" stroke-width="2.3" stroke-linecap="round" stroke-linejoin="round"><polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"/><path d="M15.5 8.5a5.5 5.5 0 0 1 0 7"/><path d="M18.8 6a9 9 0 0 1 0 12"/></svg>`,camUnfocused:`<svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#ff7b00" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z"/><circle cx="12" cy="13" r="4"/></svg>`,camFocused:`<svg width="13" height="13" viewBox="0 0 24 24" fill="#ff7b00" stroke="#ff7b00" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z"/><circle cx="12" cy="13" r="4"/></svg>`,fx:`<svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#ff7b00" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 7h8"/><path d="M4 17h14"/><path d="M14 7h6"/><path d="M10 17h4"/><circle cx="12" cy="7" r="2"/><circle cx="8" cy="17" r="2"/></svg>`},Vi={wasd:`<svg width="46" height="30" viewBox="0 0 46 30" fill="none" xmlns="http://www.w3.org/2000/svg">
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
  </svg>`};function Hi(){Xe&&(b?Xe.innerHTML=Y.camFocused:Xe.innerHTML=Y.camUnfocused)}function Ui(e){return e>=.75?Y.volumeHigh:e>=.4?Y.volumeMid:Y.volumeLow}function Wi(e){return e.isMuted?`Muted`:`${Math.round(e.volume*100)}%`}function Gi(){dt!==null&&(window.clearTimeout(dt),dt=null)}function Ki(){Gi(),C&&(dt=window.setTimeout(()=>{qi(!1)},gt))}function qi(e){e&&ft&&$i(!1),C=e,S&&S.classList.toggle(`is-open`,C),C?(Wr(S,nt),Ki()):Gi()}function Ji(){let e=O(cr(),0),t=ur(e);return{bloomEnabled:or(),bloomLabel:or()?`On`:`Off`,requestedMsaaSamples:e,effectiveMsaaSamples:t,msaaEnabled:t>0,msaaLabel:wn(t)}}function Yi(e=We){return e===Ae?`Low`:`High`}function Xi(){let e=Ji();return`Quality ${Yi()} | Bloom ${e.bloomLabel} | MSAA ${e.msaaLabel}`}function Zi(e,t,n,r=`On`,i=`Off`){e&&(e.classList.toggle(`is-active`,n),e.innerHTML=`<span>${t}</span><strong>${n?r:i}</strong>`)}function Qi(){let e=Ji();if(rt&&(rt.classList.toggle(`is-active`,ft),rt.title=Xi()),it&&(it.classList.toggle(`is-open`,ft),ft&&Wr(it,ut)),at&&(at.textContent=`${v.label} / ${Yi()}`),Zi(st,`Bloom`,e.bloomEnabled,`On`,`Off`),Zi(ct,`MSAA`,e.msaaEnabled,e.msaaLabel,`Off`),Zi(lt,`Quality`,We===ke,`High`,`Low`),st&&(st.title=`Toggle Bloom`),ct&&(ct.title=`Cycle MSAA: 4x, 2x, Off`),lt&&(lt.title=`Toggle quality: High keeps full visual quality; Low saves GPU with downsampling, Bloom off, and static sky`),ot){let{width:e,height:t}=mr(),n=E.avgRenderMs>0?E.avgRenderMs.toFixed(1):`0.0`,r=performance.now()-E.lastFrameNow>500?0:Math.round(E.fps);ot.textContent=`avg: ${n} ms    fps: ${r}    resolution: ${e}x${t}`}}function $i(e){e&&C&&qi(!1),ft=e,Qi(),q()}function ea(e){try{window.localStorage.setItem(Te,JSON.stringify({mode:Pe(e),updatedAt:Date.now()}))}catch{}}function ta(e,{persistOverride:t=!0,applyModeDefaults:n=!0}={}){let r=Pe(e),i=We,a=O(cr(),0),o=Yn();We=r,t&&(Ge=`manual`),Ke(),he(g),n&&(_()?(k.bloomEnabled=!1,k.msaaSamples=0):(k.bloomEnabled=!0,O(k.msaaSamples,0)<=0&&(k.msaaSamples=bt)),En()),t&&ea(We);let s=O(cr(),0),c=Yn();pr({forceRebuild:i!==We||s!==a||Math.abs(c-o)>.001}),Qi(),ei(900),q()}function na(){ta(_()?ke:Ae)}function ra(e){_()&&ta(ke,{applyModeDefaults:!1});let t=O(k.msaaSamples,0);k.bloomEnabled=!!e.bloomEnabled,k.msaaSamples=O(e.msaaSamples,k.msaaSamples);let n=O(k.msaaSamples,0);En(),pr({forceRebuild:n!==t}),Qi(),ei(600),q()}function ia(e){if(e===`msaaSamples`){let e=O(k.msaaSamples,0),t=Ut.indexOf(e),n=Ut[t===-1?0:(t+1)%Ut.length];ra({...k,msaaSamples:n});return}ra({...k,[e]:!k[e]})}function aa(e,t=performance.now()){if(E.lastRenderMs=e,E.avgRenderMs=E.avgRenderMs===0?e:f.lerp(E.avgRenderMs,e,.18),E.lastFrameNow>0){let e=t-E.lastFrameNow;e>0&&e<250&&(E.avgFrameMs=E.avgFrameMs===0?e:f.lerp(E.avgFrameMs,e,.2),E.fps=E.avgFrameMs>0?1e3/E.avgFrameMs:0)}E.lastFrameNow=t,!(x||t-E.lastUiUpdate<250)&&(E.lastUiUpdate=t,Qi())}function oa(e=J.getState()){Ze&&(Ze.innerHTML=e.isMuted?Y.soundOff:Y.soundOn,Ze.title=e.isMuted?`Unmute all audio`:`Mute all audio`),Qe&&(Qe.innerHTML=e.isPlaying||e.wantsToPlay?Y.pause:Y.play,e.hasError?Qe.title=`BGM unavailable (${e.currentSource||`no source`})`:e.needsUserGesture&&!e.isPlaying?Qe.title=`Click to start music`:e.wantsToPlay&&!e.isPlaying?Qe.title=`Music queued to start`:Qe.title=e.isPlaying?`Pause music`:`Play music`),$e&&($e.innerHTML=Ui(e.volume),$e.title=`Adjust volume (${Math.round(e.volume*100)}%)`),et&&(et.value=`${Math.round(e.volume*100)}`),tt&&(tt.textContent=Wi(e))}J.setOnChange(oa);function sa(){let e=document.createElement(`style`);e.textContent=`
    :root {
      --hud-glass-bg: rgba(80, 80, 80, 0.35);
      --hud-glass-border: rgba(255, 255, 255, 0.08);
      --hud-glass-shadow: none;
      --hud-glass-blur: blur(20px);
      --hud-font-main: ${An};
      --hud-font-accent: ${jn};
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
      opacity: 0; transition: opacity ${zn.fadeDuration}s ease;
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
      opacity: 0; transition: opacity ${zn.fadeDuration}s ease;
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
      opacity: 0; transition: opacity ${zn.fadeDuration}s ease;
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
  `,document.head.appendChild(e);let t=document.createElement(`div`);t.id=`ui-tl`,pt=t;let n=document.createElement(`span`);n.id=`ui-name`,n.textContent=`Hanqi Zhao`,Qe=document.createElement(`button`),Qe.className=`ui-btn`,Qe.addEventListener(`click`,()=>{J.togglePlay()});let r=document.createElement(`div`);nt=r,r.className=`ui-volume-control`,$e=document.createElement(`button`),$e.className=`ui-btn`,$e.addEventListener(`click`,()=>{qi(!C)}),S=document.createElement(`div`),S.className=`ui-volume-panel`;let i=document.createElement(`div`);i.className=`ui-volume-title`,i.innerHTML=`<span>Volume</span>`,tt=document.createElement(`span`),tt.className=`ui-volume-value`,i.appendChild(tt),et=document.createElement(`input`),et.className=`ui-volume-slider`,et.type=`range`,et.min=`0`,et.max=`100`,et.step=`1`,et.addEventListener(`input`,e=>{J.setVolume(Number(e.target.value)/100),Ki()}),S.appendChild(i),S.appendChild(et),r.appendChild($e);let a=document.createElement(`div`);ut=a,a.className=`ui-postfx-control`,rt=document.createElement(`button`),rt.className=`ui-btn`,rt.innerHTML=Y.fx,rt.addEventListener(`click`,()=>{$i(!ft)}),it=document.createElement(`div`),it.className=`ui-postfx-panel`;let o=document.createElement(`div`);o.className=`ui-postfx-header`,o.innerHTML=`<span>Render FX</span>`,at=document.createElement(`span`),at.className=`ui-postfx-summary`,at.textContent=v.label,o.appendChild(at);let s=document.createElement(`div`);s.className=`ui-postfx-toggles`,st=document.createElement(`button`),st.className=`ui-postfx-toggle`,st.type=`button`,st.addEventListener(`click`,()=>{ia(`bloomEnabled`)}),ct=document.createElement(`button`),ct.className=`ui-postfx-toggle`,ct.type=`button`,ct.addEventListener(`click`,()=>{ia(`msaaSamples`)}),lt=document.createElement(`button`),lt.className=`ui-postfx-toggle`,lt.type=`button`,lt.addEventListener(`click`,()=>{na()}),s.appendChild(st),s.appendChild(ct),s.appendChild(lt),it.appendChild(o),it.appendChild(s),a.appendChild(rt),Ze=document.createElement(`button`),Ze.className=`ui-btn`,Ze.addEventListener(`click`,()=>{J.toggleMute()}),Xe=document.createElement(`button`),Xe.className=`ui-btn`,Xe.innerHTML=Y.camUnfocused,Xe.title=`Toggle focus`,Xe.addEventListener(`click`,()=>{x||!y||(b?Sa():xa())}),t.appendChild(n),t.appendChild(Xe),t.appendChild(Qe),t.appendChild(Ze),t.appendChild(r),t.appendChild(a),document.body.appendChild(t),document.body.appendChild(S),document.body.appendChild(it),Gr(),document.addEventListener(`pointerdown`,e=>{let t=nt?.contains(e.target)||S?.contains(e.target),n=ut?.contains(e.target)||it?.contains(e.target);C&&t?Ki():C&&qi(!1),ft&&!n&&$i(!1)}),document.addEventListener(`pointermove`,()=>{C&&Ki()}),document.addEventListener(`wheel`,()=>{C&&Ki()},{passive:!0}),document.addEventListener(`keydown`,e=>{if(e.key===`Escape`){qi(!1),$i(!1);return}C&&Ki()}),oa(),Qi();let c=document.createElement(`div`);c.id=`ui-bl`;let l=document.createElement(`div`);l.className=`ui-hint-row`,l.innerHTML=`
    <div class="ui-hint">${Vi.wasd}<span>: move</span></div>
    <div class="ui-hint">${Vi.space}<span>: up</span></div>
    <div class="ui-hint">${Vi.ctrl}<span>: down</span></div>
  `,ot=document.createElement(`div`),ot.className=`ui-hud-stats`,c.appendChild(l),c.appendChild(ot),document.body.appendChild(c);let u=document.createElement(`div`);return u.id=`ui-br`,u.innerHTML=`<div class="ui-copy">© Copyright 2026 Hanqi Zhao.</div>`,document.body.appendChild(u),Qi(),{tl:t,bl:c,br:u}}async function ca(){try{let t=Promise.all(Object.entries(vi).map(async([e,t])=>[e,await Di(t.path,{colorSpace:fe})])),r=Promise.all(Object.entries(_i).map(async([e,t])=>{let n=await Di(t.path,{colorSpace:``});return n.channel=1,[e,n]})),[i,a,o,c,l]=await Promise.all([v.visualSky.kind===`hdr`?wr.loadAsync(v.visualSky.path):Ei(v.visualSky.path,{colorSpace:fe,flipY:v.visualSky.flipY??!1}),v.lightingEnvironment.kind===`hdr`?wr.loadAsync(v.lightingEnvironment.path):Ei(v.lightingEnvironment.path,{colorSpace:fe,flipY:v.lightingEnvironment.flipY??!1}),Cr.loadAsync(`/models/room_all.glb`),t,r]),u=Object.fromEntries(c),te=Object.fromEntries(l),ne=new n(200,32,20);ne.scale(-1,1,1),H=new s(ne,hi(i,v.visualSky)),H.position.y=-100,H.rotation.y=N.rotationY,Ln.add(H),a.mapping=303,Ln.environment=a,Ln.environmentIntensity=v.lightingEnvironment.intensity??1.2;let p=o.scene;if(p.traverse(e=>{if(!e.isMesh)return;let t=(e.name??``).toLowerCase();(t.includes(`computer`)||t.includes(`screen`)||t.includes(`monitor`))&&jr.push(e),t.includes(`screen_plane`)&&(Dr=e,gn.setFromMatrixPosition(e.matrixWorld),gn.add(j.loader.shockwave.centerOffset),Dr.material=new de({colorWrite:!1,depthWrite:!0}),Dr.renderOrder=-1)}),pi(p),p.traverse(e=>{if(!e.isMesh)return;let t=(e.name??``).toLowerCase();t.includes(`screen_plane`)||(Array.isArray(e.material)?e.material:[e.material]).forEach(n=>{if(!n)return;xi(n);let r=Ci(t),i=wi(t);if(r&&u[r]){n.map=u[r],n.dithering=Ti(r),n.needsUpdate=!0;return}n.isMeshStandardMaterial&&i&&te[i]&&(Si(e.geometry),n.lightMap=te[i],bi[i]&&(n.envMapIntensity=bi[i].envMapIntensity,n.roughness<bi[i].roughnessMin&&(n.roughness=bi[i].roughnessMin)),n.needsUpdate=!0)})}),Ln.add(p),jr.length>0){let t=new d;jr.forEach(e=>{e.updateMatrixWorld(!0),t.union(new d().setFromObject(e))});let n=new e;t.getCenter(n);let r=new e;t.getSize(r),Mr=new s(new ee(r.x,r.y,r.z),new de({colorWrite:!1,depthWrite:!1,transparent:!0,opacity:0})),Mr.position.copy(n),Mr.scale.setScalar(j.focus.hitboxScale),Ln.add(Mr),Dr||(gn.copy(n),gn.add(j.loader.shockwave.centerOffset))}Dr&&Mi(Dr),await Promise.all([Pn,new Promise(e=>setTimeout(e,j.loader.minLoadTime))]),T(`startup.assets.readyForGesture`),Ai(`start-prompt`).catch(()=>{}),await Fn(),T(`loader.gesture.await.end`),T(`loader.fade.start`,{fadeTimeMs:j.loader.fadeTime*1e3}),M.style.opacity=`0`,await new Promise(e=>setTimeout(e,j.loader.fadeTime*1e3)),T(`loader.fade.end`),M.remove(),T(`loader.removed`),await ji(),T(`screenOverlay.ready`);let m=sa();T(`outerHud.overlay.created`);{let e=performance.now();T(`loadingTimeline.start`);let t=!1,n=e=>e===1?1:1-2**(-10*e),r=e=>e<.5?4*e*e*e:1-(-2*e+2)**3/2;function i(){let a=(performance.now()-e)/1e3;if(!y){let e=j.loader.cameraPush,t=0;a>=e.startTime&&(t=Math.min((a-e.startTime)/e.duration,1)),F.position.lerpVectors(Un,j.intro.startPos,r(t)),F.lookAt(xr.target)}let o=j.loader.shockwave,s=0;if(a>=o.startTime&&(s=Math.min((a-o.startTime)/o.duration,1)),!hn){let e=s>=1?Vt:f.lerp(o.startRadius,o.endRadius,n(s));mn.forEach(t=>{t.userData.shader&&(t.userData.shader.uniforms.uShockwaveRadius.value=e)}),s>=1&&mi()}let c=j.loader.skyFade,l=0;a>=c.startTime&&(l=Math.min((a-c.startTime)/c.duration,1)),H&&H.material&&(H.material.uniforms.uSkyOpacity.value=l),!y&&a>=j.loader.controlsUnlockTime&&(y=!0,T(`loadingTimeline.physicsUnlocked`,{elapsedSec:a}),X.locked=!0,X.targetMouse.set(0,0),X.currentMouse.set(0,0),X.lockBaseMouse.copy(la),ma());let u=j.loader.screenFade;a>=u.startTime&&!Ye&&(Ye=!0,T(`loadingTimeline.screenFade.start`,{elapsedSec:a,durationSec:u.duration}),U.runtimeEnabled=!1,B&&V&&(Oi(`opacity ${u.duration}s ease-in-out`),requestAnimationFrame(()=>{T(`loadingTimeline.screenFade.visibleFrame`),V.setVisualState({opacity:1,visible:!0}),setTimeout(()=>{B&&V&&(Oi(``),U.runtimeEnabled=!0,U.target=1,ri(1),T(`loadingTimeline.screenFade.runtimeEnabled`))},u.duration*1e3+100)}))),!t&&a>=zn.appearAt&&(t=!0,m.tl.style.opacity=`1`,m.bl.style.opacity=`1`,m.br.style.opacity=`1`,T(`outerHud.overlay.visible`,{elapsedSec:a})),a<Math.max(j.loader.cameraPush.startTime+j.loader.cameraPush.duration,o.startTime+o.duration,c.startTime+c.duration,u.startTime+u.duration,j.loader.controlsUnlockTime)?requestAnimationFrame(i):(Je=!1,T(`loadingTimeline.complete`,{elapsedSec:a}))}i()}}catch(e){console.error(e)}}var la=new m,X={locked:!0,lockBaseMouse:new m,targetMouse:new m,currentMouse:new m,velocity:new m},ua={lastIdleSampleAt:0},da={lastFrameNow:0},Z={forward:new e,right:new e,up:new e(0,1,0),rawDir:new e,targetVel:new e,actualVel:new e,nextPos:new e,delta:new e,originalQuat:new pe,zeroMouse:new m(0,0),parallaxDiff:new m},fa={normal:new e,toCamera:new e},Q={w:!1,a:!1,s:!1,d:!1," ":!1,control:!1},pa=performance.now();function ma(){pa=performance.now()}window.addEventListener(`pointermove`,e=>{let t=Cn(e.clientX,e.clientY);if(la.x=t.x,la.y=t.y,b&&!x||!y)return;let n=performance.now(),r=!x&&!b&&X.locked;r&&n-ua.lastIdleSampleAt<nn()||(r&&(ua.lastIdleSampleAt=n),ma(),!x&&!b&&X.locked&&la.distanceTo(X.lockBaseMouse)>j.parallax.unlockThreshold&&(X.locked=!1),q())}),window.addEventListener(`keydown`,e=>{if(b&&!x||!y)return;ma();let t=e.key.toLowerCase();t===` `&&e.preventDefault(),Q[t]!==void 0&&(Q[t]=!0),q()},{passive:!1}),window.addEventListener(`keyup`,e=>{if(b&&!x||!y)return;ma();let t=e.key.toLowerCase();Q[t]!==void 0&&(Q[t]=!1),q()}),window.addEventListener(`wheel`,()=>{b&&!x||y&&(ma(),q())}),I.domElement.addEventListener(`contextmenu`,e=>e.preventDefault());var ha={linear:e=>e,easeOutCubic:e=>1-(1-e)**3,easeInOutCubic:e=>e<.5?4*e*e*e:1-(-2*e+2)**3/2},ga=null,_a=!1;function va(){ga!==null&&(window.clearTimeout(ga),ga=null)}function ya(){!_a||x||!b||!y||(_a=!1,window.requestAnimationFrame(()=>{!x&&b&&y&&Sa()}))}function ba(e,t,n,r,i,a,o,{emitStartState:s=!0}={}){s&&(x=!0,Vr());let c=performance.now();Fr(b?`focus`:`unfocus`,i,a,c);let l=Nr.mode;T(`focus.cameraTween.start`,{mode:l,durationMs:i,easingName:a});let u=ha[a]||ha.easeInOutCubic;q();function d(){let a=performance.now(),s=(a-c)/i;s>1&&(s=1);let ee=u(s);F.position.lerpVectors(e,n,ee),xr.target.lerpVectors(t,r,ee),F.lookAt(xr.target),q(),s<1?requestAnimationFrame(d):(Ir(),x=!1,ei(),Vr(),$.velocity.set(0,0,0),X.locked=!0,X.lockBaseMouse.copy(la),X.targetMouse.set(0,0),X.currentMouse.set(0,0),X.velocity.set(0,0),ma(),o&&o(),ya(),T(`focus.cameraTween.end`,{mode:l,elapsedMs:a-c}),q())}d()}function xa(){if(x||b||!y){T(`focus.transition.blocked`,{target:`focus`,isAnimating:x,isFocused:b,isPhysicsUnlocked:y});return}T(`focus.transition.start`,{target:`focus`}),va(),_a=!1,x=!0,Hr(!0),Vr(),q(),ba(F.position.clone(),xr.target.clone(),fn,pn,j.focus.duration,j.focus.easing,null,{emitStartState:!1})}async function Sa(){if(x||!b||!y){T(`focus.transition.blocked`,{target:`unfocus`,isAnimating:x,isFocused:b,isPhysicsUnlocked:y});return}T(`focus.transition.start`,{target:`unfocus`}),va(),_a=!1,x=!0,Vr(),Hr(!1),!(!x||b)&&(Vr(),q(),ga=window.setTimeout(()=>{ga=null,ba(F.position.clone(),xr.target.clone(),j.unfocus.endPos,j.unfocus.endTarget,j.unfocus.duration,j.unfocus.easing,null,{emitStartState:!1})},Math.max(0,j.unfocus.preDelay??0)))}var Ca=new a;I.domElement.addEventListener(`pointerdown`,t=>{if(!y||t.button!==0)return;let n=ki()?fi(t.clientX,t.clientY):!1;if(T(`focus.pointerdown.canvas`,{button:t.button,pointerType:t.pointerType,isPhysicsUnlocked:y,isAnimating:x,isFocused:b,pointerInsideScreen:n}),x){b&&!n&&(_a=!0,T(`focus.unfocus.queued`,{source:`canvas-pointerdown`}));return}ma();let r=Cn(t.clientX,t.clientY);if(la.x=r.x,la.y=r.y,q(),b){if(n){T(`focus.pointerdown.insideFocusedScreen`);return}T(`focus.pointerdown.requestUnfocus`,{source:`canvas`}),Sa();return}if(n){T(`focus.pointerdown.requestFocus`,{source:`screen-bounds`}),xa();return}Ca.setFromCamera(la,F);let i=Mr?[Mr]:jr;if(Ca.intersectObjects(i,!0).length>0&&B){let t=new e(0,0,1).applyQuaternion(B.quaternion).normalize(),n=new e().subVectors(F.position,B.position).normalize(),r=t.angleTo(n)*(180/Math.PI);T(`focus.pointerdown.hitboxIntersect`,{angleDegree:r,maxTriggerAngle:j.focus.maxTriggerAngle}),r<=j.focus.maxTriggerAngle&&(T(`focus.pointerdown.requestFocus`,{source:`computer-hitbox`}),xa())}q()});function wa(e){return!!(pt?.contains(e)||S?.contains(e)||it?.contains(e))}document.addEventListener(`pointerdown`,e=>{if(!y||e.button!==0)return;let t=wa(e.target),n=ki()?fi(e.clientX,e.clientY):!1;if(T(`focus.pointerdown.document`,{button:e.button,pointerType:e.pointerType,isPhysicsUnlocked:y,isAnimating:x,isFocused:b,pointerInsideUi:t,clickedInsideScreen:n}),!t){if(!b){!x&&n&&(T(`focus.pointerdown.requestFocus`,{source:`document-screen-bounds`}),xa());return}if(!n){if(x){_a=!0,T(`focus.unfocus.queued`,{source:`document-pointerdown`});return}T(`focus.pointerdown.requestUnfocus`,{source:`document`}),Sa()}}},!0);function Ta(e=1){if(!Dr||!B)return;let t=b&&!x&&ki();if(Fi(`live`),!Ye){ii(t?`auto`:`none`);return}if(!U.runtimeEnabled){ii(t?`auto`:`none`);return}let n=fa.normal.set(0,0,1).applyQuaternion(B.quaternion).normalize(),r=fa.toCamera.subVectors(F.position,B.position).normalize(),i=F.position.distanceTo(B.position),a=n.dot(r)>=0,o=0,s=`none`;if(t)o=1,s=`auto`;else if(a){let e=j.shield.maxClickDistance+j.shield.fadeDistance;if(i<=j.shield.maxClickDistance)o=1;else if(i>=e)o=j.shield.dimOpacity;else{let e=1-(i-j.shield.maxClickDistance)/j.shield.fadeDistance;o=f.lerp(j.shield.dimOpacity,1,e)}}U.target=o;let c=f.lerp(U.current,U.target,on(j.shield.opacityLerp,e)),l=Math.abs(c-U.target)<.002?U.target:c;ri(Math.abs(l-U.target)<=zt?U.target:l),ii(s)}var $={active:!1,chargeStart:0,releaseStart:0,dist:0,currentDir:new e,velocity:new e};function Ea(e){let t=Math.max(1,Math.min(8,Math.ceil(e))),n=e/t,r=(1-f.clamp(j.parallax.springFriction,0,1))**n;for(let e=0;e<t;e+=1){let e=Z.parallaxDiff.subVectors(X.targetMouse,X.currentMouse);X.velocity.add(e.multiplyScalar(j.parallax.springAccel*n)),X.velocity.multiplyScalar(r),X.currentMouse.addScaledVector(X.velocity,n)}}function Da(e){K.frameId=null;let t=da.lastFrameNow||e-Gt,n=Math.max(0,e-t),r=an(n),i=an(n,qt);da.lastFrameNow=e;let a=Kr(),o=K.renderRequested,s=$r(e),c=s||a;if(!c&&!o)return;if(H&&a&&(H.rotation.y+=j.sky.rotationSpeed*i),!y){ni(e,{skyOnly:!1,sceneAnimationActive:!0,frameScale:r}),K.renderRequested=!1,c&&q();return}if(!s&&a&&!o){ni(e,{skyOnly:!0,sceneAnimationActive:!1,frameScale:r}),K.renderRequested=!1,Zr();return}let l=e-pa>j.parallax.idleTimeout;if(!b&&!x){let t=Z.forward;F.getWorldDirection(t),t.y=0,t.normalize();let n=Z.right.crossVectors(t,F.up).normalize(),i=Z.up,a=Z.rawDir.set(0,0,0);Q.w&&a.add(t),Q.s&&a.sub(t),Q.a&&a.sub(n),Q.d&&a.add(n),Q[` `]&&a.add(i),Q.control&&a.sub(i),a.lengthSq()>0?($.releaseStart=0,$.active?$.currentDir.lerp(a.normalize(),on(j.walk.dirLerp,r)).normalize():($.chargeStart===0&&($.chargeStart=e),e-$.chargeStart>j.walk.chargeTime&&($.active=!0,$.dist=0,$.currentDir.copy(a.normalize())))):($.chargeStart=0,$.active&&($.releaseStart===0&&($.releaseStart=e),e-$.releaseStart>j.walk.releaseGrace&&($.active=!1)),l&&($.active=!1,$.releaseStart=0,$.currentDir.set(0,0,0),$.velocity.set(0,0,0))),$.active&&$.dist>=j.walk.maxDist&&($.active=!1);let o=Z.targetVel.set(0,0,0);if($.active?(o.copy($.currentDir).multiplyScalar(j.walk.speed),$.velocity.lerp(o,on(j.walk.acceleration,r))):($.velocity.lerp(o,on(j.walk.deceleration,r)),Jr($.velocity)&&$.velocity.set(0,0,0)),$.velocity.lengthSq()>1e-6){$.dist+=$.velocity.length()*r;let e=Z.actualVel.copy($.velocity),t=j.walk.bounds,n=j.walk.dampingZone;e.x<0&&F.position.x-t.minX<n?e.x*=Math.max(0,(F.position.x-t.minX)/n):e.x>0&&t.maxX-F.position.x<n&&(e.x*=Math.max(0,(t.maxX-F.position.x)/n)),e.y<0&&F.position.y-t.minY<n?e.y*=Math.max(0,(F.position.y-t.minY)/n):e.y>0&&t.maxY-F.position.y<n&&(e.y*=Math.max(0,(t.maxY-F.position.y)/n)),e.z<0&&F.position.z-t.minZ<n?e.z*=Math.max(0,(F.position.z-t.minZ)/n):e.z>0&&t.maxZ-F.position.z<n&&(e.z*=Math.max(0,(t.maxZ-F.position.z)/n));let i=Z.nextPos.copy(F.position).addScaledVector(e,r);i.x<=t.minX?(i.x=t.minX,$.velocity.x=0):i.x>=t.maxX&&(i.x=t.maxX,$.velocity.x=0),i.y<=t.minY?(i.y=t.minY,$.velocity.y=0):i.y>=t.maxY&&(i.y=t.maxY,$.velocity.y=0),i.z<=t.minZ?(i.z=t.minZ,$.velocity.z=0):i.z>=t.maxZ&&(i.z=t.maxZ,$.velocity.z=0);let a=Z.delta.subVectors(i,F.position);F.position.copy(i),xr.target.add(a)}}F.lookAt(xr.target);let u=Z.originalQuat.copy(F.quaternion),d=on(j.parallax.catchupSpeed,r);b||x||l||X.locked?X.targetMouse.lerp(Z.zeroMouse,d):X.targetMouse.lerp(la,d),Ea(r),l&&(qr(X.targetMouse)&&X.targetMouse.set(0,0),qr(X.velocity)&&X.velocity.set(0,0),qr(X.currentMouse)&&qr(X.targetMouse)&&qr(X.velocity)&&X.currentMouse.set(0,0));let ee=X.currentMouse.y*f.degToRad(j.parallax.maxAngle),te=-X.currentMouse.x*f.degToRad(j.parallax.maxAngle);F.rotateX(ee),F.rotateY(te),ni(e,{skyOnly:a&&!s&&!o,sceneAnimationActive:s,frameScale:r}),F.quaternion.copy(u),K.renderRequested=!1,s?q():a&&Zr()}window.addEventListener(`resize`,()=>{Sn(),Wn(),Kn(),F.aspect=D.aspect,F.updateProjectionMatrix(),_n!==null&&window.clearTimeout(_n),_n=window.setTimeout(()=>{_n=null,pr({forceRebuild:!0}),Qi(),q()},Bt),Gr(),Qr()}),ca(),q();