const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/outer-screen-overlay-B28WwniR.js","assets/winxp-core-CBk7ns0J.js","assets/rolldown-runtime-BVbofQct.js","assets/react-vendor-DbC8iAKZ.js","assets/winxp-core-BSxTm-g0.css"])))=>i.map(i=>d[i]);
import"./modulepreload-polyfill-Cf3xff8G.js";import{A as e,C as t,D as n,E as r,O as i,S as a,T as o,_ as s,a as c,b as l,c as u,d,f as ee,g as f,h as te,i as ne,j as p,k as m,l as re,m as ie,n as ae,o as oe,p as h,r as se,s as ce,t as le,u as ue,v as de,w as fe,x as pe,y as me}from"./three-vendor-ezp25pWM.js";import{Sn as he,Tn as ge,_n as _e,gn as ve,hn as ye,mn as be,vn as xe,xn as Se,yn as Ce}from"./winxp-core-CBk7ns0J.js";var we=`slim`,Te=`outer-website:quality-mode`,Ee=`outer-website:quality-profile-v1`,De=1,Oe=336*60*60*1e3,ke=`high`,Ae=`low`;function je(){try{return new URLSearchParams(window.location.search)}catch{return new URLSearchParams}}var Me=je();function Ne(e){let t=Me.get(e);return t===``||t===`1`||t===`true`}function Pe(e){return e===Ae?Ae:ke}function Fe(){try{window.localStorage.removeItem(Te),window.localStorage.removeItem(Ee)}catch{}}(Ne(`clearQualityProfile`)||Ne(`resetQualityProfile`))&&Fe();function Ie(){if(Ne(`ignoreQualityProfile`))return null;try{let e=window.localStorage.getItem(Te);if(!e)return null;let t=JSON.parse(e);return t?.mode===Ae||t===Ae?Ae:ke}catch{return null}}function Le(){if(Ne(`ignoreQualityProfile`))return null;try{let e=window.localStorage.getItem(Ee);if(!e)return null;let t=JSON.parse(e),n=Date.now()-Number(t?.createdAt??0);return t?.version!==De||!Number.isFinite(n)||n<0||n>Oe?null:t}catch{return null}}function Re(){try{let e=document.createElement(`canvas`),t=e.getContext(`webgl2`,{powerPreference:`high-performance`})||e.getContext(`webgl`,{powerPreference:`high-performance`});if(!t)return{available:!1};let n=t.getExtension(`WEBGL_debug_renderer_info`),r=n?t.getParameter(n.UNMASKED_RENDERER_WEBGL):``,i=n?t.getParameter(n.UNMASKED_VENDOR_WEBGL):``,a=t.getParameter(t.MAX_SAMPLES)??0,o=t.getParameter(t.MAX_TEXTURE_SIZE)??0,s=t.getParameter(t.MAX_RENDERBUFFER_SIZE)??0,c=`${i} ${r}`.toLowerCase();return{available:!0,renderer:r,vendor:i,maxSamples:a,maxTextureSize:o,maxRenderBufferSize:s,integratedHint:/intel|uhd|hd graphics|iris|radeon graphics|adreno|mali|apple gpu/i.test(c),softwareHint:/swiftshader|llvmpipe|basic render|software|warp/i.test(c)}}catch{return{available:!1}}}function ze(e=5){let t=performance.now(),n=0,r=0;for(;n<14e4&&performance.now()-t<e;)r=(r+Math.sqrt(n%97+1))%1e3,n+=1;let i=Math.max(.001,performance.now()-t);return{durationMs:Number(i.toFixed(3)),iterations:n,iterationsPerMs:Number((n/i).toFixed(1)),checksum:Number(r.toFixed(3))}}function Be(e){let t=Re(),n=ze(),r=Math.round((window.screen?.width??window.innerWidth)*(window.screen?.height??window.innerHeight)*(window.devicePixelRatio||1)**2),i=0;e.prefersReducedMotion&&(i+=3),(e.coarsePointer||e.isLikelyMobile)&&(i+=2),e.deviceMemory>0&&e.deviceMemory<=4?i+=2:e.deviceMemory>0&&e.deviceMemory<=8&&(i+=1),e.hardwareConcurrency>0&&e.hardwareConcurrency<=4?i+=2:e.hardwareConcurrency>0&&e.hardwareConcurrency<=8&&(i+=1),r>=5e6&&(e.deviceMemory<=8||e.hardwareConcurrency<=8)&&(i+=1),!t.available||t.softwareHint?i+=4:t.integratedHint&&(i+=2),t.maxRenderBufferSize>0&&t.maxRenderBufferSize<=8192&&(i+=1),t.maxSamples===0&&(i+=1),n.iterationsPerMs<9e3?i+=2:n.iterationsPerMs<16e3&&(i+=1);let a=i>=3?Ae:ke;return{version:De,createdAt:Date.now(),mode:a,lowTierScore:i,device:{deviceMemory:e.deviceMemory,hardwareConcurrency:e.hardwareConcurrency,prefersReducedMotion:e.prefersReducedMotion,coarsePointer:e.coarsePointer,isLikelyMobile:e.isLikelyMobile,devicePixelRatio:window.devicePixelRatio||1,screenPixelCount:r},webgl:t,cpuProbe:n}}function Ve(e){if(!Ne(`ignoreQualityProfile`))try{window.localStorage.setItem(Ee,JSON.stringify(e))}catch{}}function He(e){let t=Ie(),n=Me.get(`quality`),r=Le(),i=r??Be(e);return r||Ve(i),{profile:i,mode:Pe(t??n??i.mode),source:t?`manual`:n?`query`:r?`cached`:`measured`}}var g=ge(),Ue=He(g),We=Ue.mode,Ge=Ue.source;function _(){return We===Ae}function Ke(){g.qualityMode=We,g.qualitySelectionSource=Ge,g.qualityProfile=Ue.profile,g.lowTierDetected=_(),g.shouldDefaultPostFxOff=_(),g.preferredBloomEnabled=!_(),g.preferredMsaaSamples=_()?0:g.preferredMsaaSamples||2}Ke(),he(g);var qe={current:{visualSkyLdr:new URL(`/assets/new_sky_ldr-yZ_KpEae.jpg`,``+import.meta.url).href,lightingLdr:new URL(`/assets/room_ldr-DOcZ7og-.jpg`,``+import.meta.url).href,room:new URL(`/assets/room%20baked-KoBuYlPf.ktx2`,``+import.meta.url).href,table:new URL(`/assets/table%20baked-DFp0K4D2.ktx2`,``+import.meta.url).href,chairBack:new URL(`/assets/chair%20back%20final-sbWclMz4.ktx2`,``+import.meta.url).href,chairLeft:new URL(`/assets/chair%20left%20final-BjZ_O-yh.ktx2`,``+import.meta.url).href,chairRight:new URL(`/assets/chair%20right%20final-BtcJ8_ie.ktx2`,``+import.meta.url).href,computer:new URL(`/assets/computer%20shadow-D5HsGwbv.ktx2`,``+import.meta.url).href}},v={label:`Slim`,visualSky:{kind:`ldr`,path:qe.current.visualSkyLdr,flipY:!0},lightingEnvironment:{kind:`ldr`,path:qe.current.lightingLdr,flipY:!0,intensity:1.2},bakedSurfacePaths:{room:qe.current.room,table:qe.current.table,chairBack:qe.current.chairBack,chairLeft:qe.current.chairLeft,chairRight:qe.current.chairRight},lightMapPaths:{computer:qe.current.computer}},Je=!0,y=!1,Ye=!1,b=!1,x=!1,Xe=null,Ze=null,Qe=null,$e=null,S=null,et=null,tt=null,nt=null,rt=null,C=null,it=null,at=null,ot=null,st=null,ct=null,lt=null,w=!1,ut=null,dt=!1,ft=null,pt=null,mt=`outer-website:postfx-settings`,ht=2200,gt=10,_t=12,vt=220,yt=2,bt=2,xt=1.25,St=1,Ct=.62,wt=.7,Tt=.55,Et=1800,Dt=18,Ot=8,kt=1e3/10,At=1200,jt=1600,Mt=.25,Nt=32,Pt=40,Ft=1e-4,It=.01,Lt=.015,Rt=.01,zt=150,Bt=9999,Vt=`outer-website:shockwave-v1`,Ht=[4,2,0],Ut=!0,Wt=800,Gt=`outer-website:`;function Kt(){return _()?xt:bt}function qt(){return _()?Ct:St}function Jt(){return _()?Tt:wt}function Yt(){return _()?Ot:Dt}function Xt(){return 1e3/Yt()}function Zt(){return _()?jt:At}function Qt(){return _()?Pt:Nt}function $t(){return _()?Lt:It}var T=window.__outerWebsiteStartupTiming??{createdAt:Date.now(),timeOrigin:performance.timeOrigin??Date.now()-performance.now(),events:[]};window.__outerWebsiteStartupTiming=T;function en(){try{return new URLSearchParams(window.location.search).has(`startupTimingLog`)}catch{return!1}}var tn=en();function nn(e){if(typeof e!=`object`||!e)return e??{};try{return JSON.parse(JSON.stringify(e,(e,t)=>{if(typeof t==`number`)return Number.isFinite(t)?Number(t.toFixed(3)):String(t);if(typeof t!=`function`)return t}))}catch{return{unserializable:!0}}}function E(e,t={}){let n=performance.now(),r={index:T.events.length,name:e,at:Number(n.toFixed(3)),detail:nn(t)};if(T.events.push(r),T.events.length>Wt&&T.events.splice(0,T.events.length-Wt),tn)try{performance.mark(`${Gt}${e}`)}catch{}return tn&&console.debug(`[startup-timing]`,JSON.stringify(r)),r}function rn(){return{createdAt:T.createdAt,timeOrigin:T.timeOrigin,now:Number(performance.now().toFixed(3)),eventCount:T.events.length,events:T.events.slice()}}function an(){T.events.length=0,E(`debug.timeline.cleared`)}if(window.__outerWebsiteRecordStartupTiming=E,tn&&typeof PerformanceObserver<`u`)try{T.longTaskObserver?.disconnect?.(),T.longTaskObserver=new PerformanceObserver(e=>{e.getEntries().forEach(e=>{E(`performance.longtask`,{startTime:e.startTime,duration:e.duration,name:e.name})})}),T.longTaskObserver.observe({type:`longtask`,buffered:!0})}catch{}E(`main.module.loaded`,{assetProfile:we});var on=new e,sn=new e,cn=[],ln=!1,un=new e(0,0,0),dn=null,D={lastRenderMs:0,avgRenderMs:0,avgFrameMs:0,fps:0,lastUiUpdate:0,lastFrameNow:0},fn=4/3,pn=21/9;function mn(e){return Math.min(Math.max(e,fn),pn)}function hn(e=window.innerWidth,t=window.innerHeight){let n=Math.max(1,Math.floor(e)),r=Math.max(1,Math.floor(t)),i=n/r,a=mn(i),o=n,s=r;return i>a?o=Math.max(1,Math.round(r*a)):i<a&&(s=Math.max(1,Math.round(n/a))),{windowWidth:n,windowHeight:r,width:o,height:s,left:Math.round((n-o)/2),top:Math.round((r-s)/2),aspect:o/s,isClamped:Math.abs(i-a)>.001}}var O=hn();function gn(){Object.assign(O,hn())}function _n(e,t){let n=e-O.left,r=t-O.top,i=f.clamp(n,0,O.width),a=f.clamp(r,0,O.height);return{x:i/O.width*2-1,y:-(a/O.height)*2+1,inside:n>=0&&n<=O.width&&r>=0&&r<=O.height}}function k(e,t=yt){if(e===!0)return yt;if(e===!1||e==null)return t;let n=Number(e);return n>=4?4:n>=2?2:0}function vn(e){return e>=4?`4x`:e>=2?`2x`:`Off`}function yn(){let e={bloomEnabled:!_(),msaaSamples:k(_()?0:g.preferredMsaaSamples,_()?0:yt)};try{let t=window.localStorage.getItem(mt);if(!t)return e;let n=JSON.parse(t);return{bloomEnabled:n?.bloomEnabled!==!1,msaaSamples:k(n?.msaaSamples??n?.msaaEnabled,e.msaaSamples)}}catch{return e}}var A=yn();function bn(){try{window.localStorage.setItem(mt,JSON.stringify(A))}catch{}}var j={url:`/embedded-winxp.html`,width:1280,height:820,rotationX:-Math.PI*15.5/180,rotationY:Math.PI/2,rotationZ:0,flipNormal:!1,scaleMultiplier:1,scaleX:.99,scaleY:1.01,offsetX:0,offsetY:6e-4,offsetZ:0},xn={localCorners:[new e(-j.width/2,j.height/2,0),new e(j.width/2,j.height/2,0),new e(j.width/2,-j.height/2,0),new e(-j.width/2,-j.height/2,0)],worldCorners:[new e,new e,new e,new e],quad:[{x:0,y:0},{x:0,y:0},{x:0,y:0},{x:0,y:0}],cameraSpacePoint:new e,projectedPoint:new e},M={loader:{bgColor:`#d9d9d9`,minLoadTime:1500,fadeTime:1,cameraPush:{startTime:1.5,duration:1,distance:.5},shockwave:{startTime:.5,duration:5.5,startRadius:0,endRadius:20,edgeWidth:.2,edgeIntensity:3,centerOffset:new e(-4,-1,0)},skyFade:{startTime:.5,duration:1},screenFade:{startTime:2.5,duration:6.5},controlsUnlockTime:2.5},intro:{startPos:new e(4.3,-1.8,0),startTarget:new e(0,-1.4,0)},focus:{duration:2e3,easing:`easeInOutCubic`,distance:.18,yOffset:0,maxTriggerAngle:60,targetOffsetX:0,targetOffsetY:0,targetOffsetZ:0,hitboxScale:1.8},unfocus:{preDelay:0,duration:1800,easing:`easeOutCubic`,endPos:new e(4.5,-1.8,0),endTarget:new e(0,-1.4,0)},shield:{maxClickDistance:1.2,dimOpacity:.8,fadeDistance:.55,opacityLerp:.14},sky:{rotationSpeed:3e-5},parallax:{maxAngle:6,unlockThreshold:.12,springAccel:.0065,springFriction:.095,catchupSpeed:.055,idleTimeout:2200},walk:{chargeTime:80,releaseGrace:50,maxDist:1e3,speed:.011,acceleration:.6,deceleration:.6,dirLerp:1,dampingZone:.8,bounds:{minX:2,maxX:5,minY:-2,maxY:1.5,minZ:-3.5,maxZ:3.5}}};document.body.style.backgroundColor=M.loader.bgColor,document.body.style.margin=`0`,document.body.style.overflow=`hidden`;var Sn=`/font/Controller%20W01%20Two%20Oblique.ttf`,Cn=`/font/Controller%20W01%20Five%20Oblique.ttf`,wn=`"Controller W01 Two Oblique", 'Courier New', Courier, monospace`,Tn=`"Controller W01 Five Oblique", 'Courier New', Courier, monospace`,En=document.createElement(`style`);En.textContent=`
  @font-face {
    font-family: 'Controller W01 Two Oblique';
    src: url('${Sn}') format('truetype');
    font-weight: 400;
    font-style: normal;
    font-display: swap;
  }
  @font-face {
    font-family: 'Controller W01 Five Oblique';
    src: url('${Cn}') format('truetype');
    font-weight: 400;
    font-style: normal;
    font-display: swap;
  }
  #hud-loader-root {
    position: fixed; top: 0; left: 0; width: 100vw; height: 100vh;
    background-color: #ffffff;
    z-index: 9999; display: flex; justify-content: center; align-items: center;
    font-family: ${wn};
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
`,document.head.appendChild(En);var N=document.createElement(`div`);N.id=`hud-loader-root`,N.innerHTML=`
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
  </div>`,document.body.appendChild(N);var Dn,On=new Promise(e=>{Dn=e});(function(){let e=N.querySelector(`#hud-bar`),t=N.querySelector(`#hud-hex`),n=N.querySelector(`#hud-status`);for(let t=0;t<18;t++){let t=document.createElement(`div`);t.className=`hud-block`,e.appendChild(t)}let r=e.querySelectorAll(`.hud-block`),i=0;function a(){i+=Math.random()*2+1,i>100&&(i=100);let e=Math.round(i/100*18);r.forEach((t,n)=>t.classList.toggle(`lit`,n<e)),t.textContent=`0x`+Math.floor(Math.random()*65535).toString(16).toUpperCase(),i<100?setTimeout(a,Math.random()*100+20):(n.textContent=`Boot sequence complete.`,setTimeout(Dn,800))}setTimeout(a,1e3)})();function kn(){return E(`loader.prompt.wait.start`),new Promise(e=>{let t=N.querySelector(`.hud-core`);if(!t){E(`loader.prompt.missing`),pt=null,e();return}let n=!1,r=t=>{if(n)return;let r=performance.now();if(E(`loader.gesture.finish.start`,{reason:t}),n=!0,pt=null,N.removeEventListener(`pointerdown`,i,!0),N.removeEventListener(`keydown`,a,!0),typeof Y?.releaseQueuedPlayback==`function`){let e=performance.now();Y.releaseQueuedPlayback(t),E(`loader.gesture.audioRelease.called`,{reason:t,elapsedMs:performance.now()-e})}E(`loader.gesture.finish.end`,{reason:t,elapsedMs:performance.now()-r}),e()},i=e=>{E(`loader.gesture.pointerdown`,{button:e.button,pointerType:e.pointerType}),e.preventDefault(),r(`loader-start-pointer`)},a=e=>{e.key!==`Enter`&&e.key!==` `||(E(`loader.gesture.keydown`,{key:e.key}),e.preventDefault(),r(`loader-start-keyboard`))};t.classList.add(`is-awaiting-start`),pt=()=>{E(`loader.gesture.debugTrigger`),r(`loader-start-debug`)},N.tabIndex=0,N.focus({preventScroll:!0}),N.addEventListener(`pointerdown`,i,!0),N.addEventListener(`keydown`,a,!0),E(`loader.prompt.awaiting`,{activeElementId:document.activeElement?.id??``})})}var An=document.getElementById(`app`),jn=new o,Mn={fov:65,near:.1,far:1e3},P={exposure:1.1,saturation:1.25,highlights:.95,washout:0,lift:0,gamma:1,colorBalance:new e(1,1,1),bloomOffCompensation:{exposure:1.26,saturation:1.55,highlights:.95,washout:0,lift:0,gamma:1,colorBalance:new e(1.003,1.006,1.026)},repeatX:2,repeatY:1.2,offsetY:0,rotationY:-3*Math.PI/4},F={exposure:.9,bloom:{strength:.01,radius:0,threshold:0,transitionDurationMs:220},unfocus:{bloomResumeProgress:.5}},Nn={appearAt:3,fadeDuration:1},Pn={sources:[`/audio/outer-bgm.ogg`,`/audio/outer-bgm.m4a`],loop:!0,initialVolume:.56,defaultWantsToPlay:!0},Fn={minVolumeRatio:.2,volumeSyncEpsilon:.003},I=new l(Mn.fov,O.aspect,Mn.near,Mn.far),In=new e().subVectors(M.intro.startTarget,M.intro.startPos).normalize(),Ln=M.intro.startPos.clone().addScaledVector(In,-M.loader.cameraPush.distance);I.position.copy(Ln);var L=new ue({antialias:!0,alpha:!1,powerPreference:`high-performance`});function Rn(){L.domElement.style.left=`${O.left}px`,L.domElement.style.top=`${O.top}px`}function zn(e=Yn,t=Un()){return _()||!e?t:Vn()}function Bn(e=Un()){let t=zn(Yn,e);L.setPixelRatio(t),L.setSize(O.width,O.height),Jn=e,R?.setPixelRatio&&R.setPixelRatio(e),R?.setSize&&R.setSize(O.width,O.height),z?.setSize&&z.setSize(Math.max(1,Math.floor(O.width*e*.5)),Math.max(1,Math.floor(O.height*e*.5)))}function Vn(){return Math.min(window.devicePixelRatio||1,Kt())}function Hn(){return qt()}function Un(){let e=Vn();return f.clamp(e*Hn(),Jt(),e)}L.setPixelRatio(Vn()),L.setSize(O.width,O.height),L.setClearColor(0,1),L.outputColorSpace=fe,L.useLegacyLights=!1,L.toneMapping=4,L.toneMappingExposure=F.exposure,An.style.position=`relative`,An.style.backgroundColor=`#000000`,L.domElement.style.position=`absolute`,L.domElement.style.zIndex=`1`,L.domElement.style.pointerEvents=`auto`,L.domElement.style.display=`block`,Rn(),An.appendChild(L.domElement);var Wn=null,R=null,Gn=null,z=null,Kn=null,qn=0,Jn=0,Yn=!1,B={currentStrength:A.bloomEnabled&&!_()?F.bloom.strength:0,fromStrength:A.bloomEnabled&&!_()?F.bloom.strength:0,targetStrength:A.bloomEnabled&&!_()?F.bloom.strength:0,transitionStartedAt:performance.now()},Xn={hidden:!1};function Zn(){return A.bloomEnabled&&!jr()?F.bloom.strength:0}function Qn(e=performance.now()){let t=Zn();Math.abs(t-B.targetStrength)<1e-4||(B.fromStrength=B.currentStrength,B.targetStrength=t,B.transitionStartedAt=e)}function $n(){return Math.abs(B.currentStrength-B.targetStrength)>1e-4}function er(){return B.currentStrength>1e-4||B.targetStrength>1e-4}function tr(e=performance.now()){Qn(e);let t=Math.max(0,F.bloom.transitionDurationMs??0);if(t<=0)B.currentStrength=B.targetStrength,B.fromStrength=B.targetStrength;else{let n=f.clamp((e-B.transitionStartedAt)/t,0,1),r=n<.5?4*n*n*n:1-(-2*n+2)**3/2;B.currentStrength=f.lerp(B.fromStrength,B.targetStrength,r),n>=1&&(B.currentStrength=B.targetStrength,B.fromStrength=B.targetStrength)}z&&(z.enabled=er(),z.strength=B.currentStrength,z.radius=F.bloom.radius,z.threshold=F.bloom.threshold)}function nr(){return Mr()?0:A.msaaSamples}function rr(e=performance.now()){return Qn(e),Ut}function ir(e=nr()){let t=k(e,0);if(t<=0)return 0;let n=L.capabilities.maxSamples??0;return n>=t?t:n>=4?4:n>=2?2:0}function ar(){R?.dispose&&R.dispose(),z?.dispose&&z.dispose(),Kn?.dispose&&Kn.dispose(),Wn&&Wn.dispose(),R=null,Gn=null,z=null,Kn=null,Wn=null,Yn=!1}function or({pixelRatio:e=Un(),msaaSamples:t=ir(nr()),useComposer:n=rr()}={}){ar();let r=Math.max(1,Math.floor(O.width*e)),i=Math.max(1,Math.floor(O.height*e)),a=zn(n,e);L.setPixelRatio(a),L.setSize(O.width,O.height),Rn(),Jn=e,qn=n?t:0,Yn=n,n&&(Wn=new p(r,i,{samples:t,type:te}),R=new ne(L,Wn),R?.setPixelRatio&&R.setPixelRatio(e),Gn=new se(jn,I),R.addPass(Gn),z=new ae(new m(Math.max(1,Math.floor(O.width*e*.5)),Math.max(1,Math.floor(O.height*e*.5))),B.currentStrength,F.bloom.radius,F.bloom.threshold),tr(performance.now()),R.addPass(z),Kn=new le,R.addPass(Kn),R?.setSize&&R.setSize(O.width,O.height))}function sr({forceRebuild:e=!1}={}){let t=performance.now();Qn(t);let n=Un(),r=ir(nr()),i=rr(t);if(e||Math.abs(n-Jn)>.001||r!==qn||i!==Yn){or({pixelRatio:n,msaaSamples:r,useComposer:i}),q.projectionInvalidated=!0,J();return}if(Math.abs(n-Jn)>.001){Bn(n),q.projectionInvalidated=!0,J();return}tr(t)}or();function cr(){let e=Un();return{scale:Number(Hn().toFixed(3)),pixelRatio:e,width:Math.max(1,Math.floor(O.width*e)),height:Math.max(1,Math.floor(O.height*e))}}function lr(){let e=performance.memory;if(!e)return null;let t=e=>Number((e/(1024*1024)).toFixed(2));return{usedMB:t(e.usedJSHeapSize),totalMB:t(e.totalJSHeapSize),limitMB:t(e.jsHeapSizeLimit)}}function ur(){let e=Hi(),t=cr(),n=k(A.msaaSamples,0),r=k(nr(),0),i=ir(nr()),a=$?.velocity?.lengthSq?.()??0,o=Z?.velocity?.lengthSq?.()??0,s=Z?.currentMouse?.distanceToSquared?.(Z.targetMouse)??0,c=Math.abs((W?.current??0)-(W?.target??0)),l=G?.lastUpdateAt?performance.now()-G.lastUpdateAt:null;return{ready:!Je,isAnimating:x,physicsUnlocked:y,focused:b,benchmarkMode:!1,externalTextureOverridesEnabled:!0,assetProfile:we,assetProfileLabel:v.label,performanceProfile:{qualityMode:We,qualitySelectionSource:Ge,qualityLowTierScore:Ue.profile?.lowTierScore??null,lowPowerOuterMode:_(),maxDevicePixelRatio:Kt(),renderScale:Number(Hn().toFixed(3)),skyOnlyTargetFps:Yt()},bloomEnabled:e.bloomEnabled,bloomStrength:Number(B.currentStrength.toFixed(4)),savedBloomEnabled:A.bloomEnabled,requestedMsaaSamples:r,savedMsaaSamples:n,effectiveMsaaSamples:i,msaaLabel:vn(i),avgRenderMs:Number(D.avgRenderMs.toFixed(3)),avgFrameMs:Number(D.avgFrameMs.toFixed(3)),fps:Number(D.fps.toFixed(2)),resolution:t,viewport:{width:O.width,height:O.height,left:O.left,top:O.top,aspect:Number(O.aspect.toFixed(3)),clamped:O.isClamped},rendererInfo:{calls:L.info.render.calls,triangles:L.info.render.triangles,lines:L.info.render.lines,points:L.info.render.points,frame:L.info.render.frame,geometries:L.info.memory.geometries,textures:L.info.memory.textures},jsHeap:lr(),internals:{outerScenePaused:Or(),effectiveRenderPath:Lr()?`renderer`:`composer`,composerActive:Yn,outerCanvasVisible:!Xn.hidden,screenContentMode:wr,screenAppReadyForProjection:Ci(),renderRequested:q.renderRequested,projectionInvalidated:q.projectionInvalidated,hasActiveSceneAnimation:qr(performance.now()),hasSkyAnimation:Br(),transitionSettleRemainingMs:Math.max(0,Number((q.transitionSettleUntil-performance.now()).toFixed(3))),walkVelocitySq:Number(a.toFixed(8)),parallaxVelocitySq:Number(o.toFixed(8)),parallaxDeltaSq:Number(s.toFixed(8)),screenOpacityDelta:Number(c.toFixed(8)),screenProjectionAgeMs:l==null?null:Number(l.toFixed(3))}}}function dr(e=2e4){return new Promise((t,n)=>{let r=performance.now();function i(){if(!Je){t(ur());return}if(performance.now()-r>=e){n(Error(`Timed out waiting for outer scene readiness`));return}window.requestAnimationFrame(i)}i()})}function fr(e=3e4){return new Promise((t,n)=>{let r=performance.now();function i(){if(!Je&&!x&&y){t(ur());return}if(performance.now()-r>=e){n(Error(`Timed out waiting for benchmark-stable scene state`));return}window.requestAnimationFrame(i)}i()})}function pr(e=2e4){return new Promise((t,n)=>{let r=performance.now();function i(){if(typeof pt==`function`){t(!0);return}if(performance.now()-r>=e){n(Error(`Timed out waiting for loader start prompt`));return}window.requestAnimationFrame(i)}i()})}function mr(e=3e3){return new Promise((t,n)=>{let r=Math.max(250,Number(e)||3e3),i=performance.now(),a=[],o=[],s=[],c=0;function l(){let e=ur(),n=e=>e.length?Number((e.reduce((e,t)=>e+t,0)/e.length).toFixed(3)):0,i=o.map(e=>e>0?1e3/e:0);t({...e,sampleDurationMs:r,sampleCount:a.length,windowAvgRenderMs:n(a),windowAvgFrameMs:n(o),windowAvgFps:n(i),windowMinFps:i.length?Number(Math.min(...i).toFixed(3)):0,windowMaxFps:i.length?Number(Math.max(...i).toFixed(3)):0,windowAvgHeapMB:n(s)})}function u(e){let t=ur();if(a.push(D.lastRenderMs||t.avgRenderMs),t.jsHeap?.usedMB!=null&&s.push(t.jsHeap.usedMB),c>0){let t=e-c;t>0&&t<250&&o.push(t)}if(c=e,performance.now()-i>=r){l();return}window.requestAnimationFrame(u)}dr().then(()=>u()).catch(n)})}window.__outerWebsiteDebug={getMetrics:ur,getWinXPRuntimeState:()=>({focusState:Ce(),presentationState:xe(),presentationProfile:_e()}),waitForReady:dr,waitForBenchmarkStable:fr,waitForStartPrompt:pr,getStartupTimeline:rn,clearStartupTimeline:an,getQualityProfile:()=>({mode:We,selectionSource:Ge,profile:Ue.profile,storageKeys:{mode:Te,profile:Ee}}),setQualityMode:e=>(Yi(Pe(e)),ur()),clearQualityProfile:()=>(Fe(),!0),startExperience:()=>typeof pt==`function`?(pt(),!0):!1,sampleMetrics:mr};var hr=new re(I,L.domElement);hr.enabled=!1,hr.target.copy(M.intro.startTarget);var gr=new i,_r=new ce,vr=new oe,yr=new c,br=new u;yr.setTranscoderPath(`/basis/`),yr.detectSupport(L),br.setDecoderPath(`/draco/`),br.preload(),_r.setKTX2Loader(yr),_r.setDRACOLoader(br);var xr=null,V=null,H=null,Sr=null,Cr=null,wr=`live`,Tr=[],Er=null,U=null,W={runtimeEnabled:!1,current:0,target:0,pointerEvents:`none`},G={quad:null,lastUpdateAt:0,lastMissStartedAt:0},K={currentGain:1,fullVolumeDistance:0,minimumVolumeDistance:0,lastSyncedVolume:null},q={frameId:null,renderRequested:!0,projectionInvalidated:!0,skyFrameTimeoutId:null,transitionSettleUntil:0},Dr={mode:`idle`,startedAt:0,duration:0,easingName:`easeInOutCubic`};function Or(){return b&&!x}function kr(e,t,n,r=performance.now()){Dr.mode=e,Dr.startedAt=r,Dr.duration=Math.max(1,t),Dr.easingName=n}function Ar(){Dr.mode=`idle`,Dr.startedAt=0,Dr.duration=0,Dr.easingName=`easeInOutCubic`}function jr(e=performance.now()){return _()}function Mr(){return _()}function Nr(){return!1}function Pr(){let e=Nr();Xn.hidden!==e&&(Xn.hidden=e,L.domElement.style.display=`block`,L.domElement.style.visibility=e?`hidden`:`visible`,L.domElement.style.opacity=e?`0`:`1`,L.domElement.style.pointerEvents=e?`none`:`auto`)}function Fr(){let e={focused:b,animating:x,settled:Or()};sr(),Pr(),Ki(),Se(e)}Se(ye);function Ir(e){b!==e&&(b=e,Ii(),sr(),Pr(),Ki(),J())}function Lr(){return!Yn}function Rr(e,t){if(!e||!t)return;let n=t.getBoundingClientRect(),r=ft?.getBoundingClientRect()??n,i=e.offsetWidth||e.getBoundingClientRect().width||0,a=f.clamp(r.right-i,_t,window.innerWidth-_t-i);e.style.left=`${a}px`,e.style.top=`${n.bottom+gt}px`}function zr(){Rr(S,nt),Rr(C,lt)}function Br(){return!!U&&!Or()&&!_()}function Vr(e,t=$t()){return e.lengthSq()<=t*t}function Hr(e,t=Ft){return e.lengthSq()<=t*t}function Ur(){return W.runtimeEnabled&&Math.abs(W.current-W.target)>Rt}function Wr(){q.skyFrameTimeoutId!==null&&(window.clearTimeout(q.skyFrameTimeoutId),q.skyFrameTimeoutId=null)}function J(){q.renderRequested=!0,Wr(),Pr(),q.frameId===null&&(q.frameId=window.requestAnimationFrame(ba))}function Gr(e=Xt()){q.renderRequested||q.frameId!==null||q.skyFrameTimeoutId!==null||(q.skyFrameTimeoutId=window.setTimeout(()=>{q.skyFrameTimeoutId=null,q.frameId===null&&(q.frameId=window.requestAnimationFrame(ba))},Math.max(0,e)))}function Kr(){q.projectionInvalidated=!0,J()}function qr(e){return!!(Je||x||$n()||e<q.transitionSettleUntil||Q.w||Q.a||Q.s||Q.d||Q[` `]||Q.control||$.active||$.velocity.lengthSq()>1e-6||Z.velocity.lengthSq()>1e-6||!Vr(Z.currentMouse)||Z.currentMouse.distanceToSquared(Z.targetMouse)>1e-6||Ur())}function Jr(e=Et){q.transitionSettleUntil=Math.max(q.transitionSettleUntil,performance.now()+e),J()}function Yr(e=performance.now(),t=!1,n=!1){return q.projectionInvalidated?!0:t?!1:b?!!(x||Je):x||Je||n||q.renderRequested?!0:e-G.lastUpdateAt>=kt}function Xr(e=performance.now(),{skyOnly:t=!1,sceneAnimationActive:n=!1}={}){let r=performance.now(),i=$n();tr(e),Yn&&!rr(e)&&sr({forceRebuild:!0}),ui();let a=$n();(i||a)&&!x&&Ki(),t||ji(),!Yn||!R?L.render(jn,I):R.render(),t||ya(),Yr(e,t,n)&&(ai(),q.projectionInvalidated=!1,G.lastUpdateAt=e),$i(performance.now()-r,e)}function Zr(e){let t=f.clamp(e,0,1);Math.abs(W.current-t)<.001||(W.current=t,H?.setVisualState({brightness:t}),Pr())}function Qr(e){W.pointerEvents!==e&&(W.pointerEvents=e,H?.setVisualState({pointerEvents:e}))}function $r(e,t){if(xn.cameraSpacePoint.copy(e).applyMatrix4(I.matrixWorldInverse).z>=-.001)return null;let n=xn.projectedPoint.copy(e).project(I);return!Number.isFinite(n.x)||!Number.isFinite(n.y)?null:(t.x=O.left+(n.x*.5+.5)*O.width,t.y=O.top+(-n.y*.5+.5)*O.height,t)}function ei(){if(!V)return null;V.updateMatrixWorld(!0);for(let e=0;e<xn.localCorners.length;e+=1)if(!$r(xn.worldCorners[e].copy(xn.localCorners[e]).applyMatrix4(V.matrixWorld),xn.quad[e]))return null;return xn.quad}function ti(e){return e.map(e=>({x:e.x,y:e.y}))}function ni(e,t){for(let n=0;n<t.length;n+=1)e[n].x=t[n].x,e[n].y=t[n].y}function ri(e,t,n=Mt){if(!e||!t||e.length!==t.length)return!1;for(let r=0;r<e.length;r+=1)if(Math.abs(e[r].x-t[r].x)>n||Math.abs(e[r].y-t[r].y)>n)return!1;return!0}function ii(){if(G.quad&&H?.isMounted?.()){G.lastMissStartedAt=0,H.setVisualState({pointerEvents:`none`,visible:!0}),Pr();return}G.quad=null,G.lastMissStartedAt=0,H?.setVisualState({pointerEvents:`none`,visible:!1}),Pr()}function ai(){if(!V){ii();return}let e=performance.now(),t=ei();if(!t){if(G.quad&&(G.lastMissStartedAt===0&&(G.lastMissStartedAt=e),e-G.lastMissStartedAt<Zt())){H?.setVisualState({visible:!0}),Pr();return}ii();return}if(G.lastMissStartedAt=0,!G.quad)G.quad=ti(t);else if(!ri(G.quad,t))ni(G.quad,t);else{H&&H.setVisualState({visible:!0}),Pr();return}H&&(H.syncProjection(G.quad),H.setVisualState({visible:!0})),Pr()}function oi(e,t){if(!G.quad||G.quad.length!==4)return!1;let n=0;for(let r=0;r<G.quad.length;r+=1){let i=G.quad[r],a=G.quad[(r+1)%G.quad.length],o=(a.x-i.x)*(t-i.y)-(a.y-i.y)*(e-i.x);if(Math.abs(o)<=.5)continue;let s=Math.sign(o);if(n===0){n=s;continue}if(n!==s)return!1}return!0}function si(e){ln=!1,e.traverse(e=>{e.isMesh&&(e.name.toLowerCase().includes(`screen_plane`)||e.name.toLowerCase().includes(`hitbox`)||(Array.isArray(e.material)?e.material:[e.material]).forEach(e=>{if(!e||cn.includes(e))return;cn.push(e);let t=e.onBeforeCompile,n=Object.prototype.hasOwnProperty.call(e,`customProgramCacheKey`),r=e.customProgramCacheKey;e.userData.outerWebsiteShockwaveMaterial={originalOnBeforeCompile:t,hadOwnCustomProgramCacheKey:n,originalCustomProgramCacheKey:r},e.onBeforeCompile=(n,r)=>{typeof t==`function`&&t.call(e,n,r),e.userData.shader=n,n.uniforms.uShockwaveRadius={value:0},n.uniforms.uShockwaveCenter={value:un},n.uniforms.uEdgeIntensity={value:M.loader.shockwave.edgeIntensity},n.vertexShader=`
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
          `)},e.customProgramCacheKey=()=>`${typeof r==`function`?r.call(e):``}|${Vt}`,e.needsUpdate=!0}))})}function ci(){ln||(ln=!0,cn.forEach(e=>{let t=e?.userData?.outerWebsiteShockwaveMaterial;t&&(e.onBeforeCompile=t.originalOnBeforeCompile,t.hadOwnCustomProgramCacheKey?e.customProgramCacheKey=t.originalCustomProgramCacheKey:delete e.customProgramCacheKey,delete e.userData.shader,delete e.userData.outerWebsiteShockwaveMaterial,e.needsUpdate=!0)}),J())}function li(e,n={}){return e.wrapS=t,e.wrapT=ie,new r({transparent:!0,uniforms:{tSky:{value:e},uExposure:{value:P.exposure},uSaturation:{value:P.saturation},uHighlights:{value:P.highlights},uWashout:{value:n.washout??P.washout},uLift:{value:n.lift??P.lift},uGamma:{value:n.gamma??P.gamma},uColorBalance:{value:P.colorBalance.clone()},uRepeat:{value:new m(n.repeatX??P.repeatX,n.repeatY??P.repeatY)},uOffsetY:{value:n.offsetY??P.offsetY},uSkyOpacity:{value:0}},vertexShader:`varying vec2 vUv; void main() { vUv = uv; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }`,fragmentShader:`
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
    `,side:0,toneMapped:!1})}function ui(){let e=U?.material?.uniforms;if(!e)return;let t=Math.max(1e-4,F.bloom.strength??1e-4),n=f.clamp(B.currentStrength/t,0,1),r=P.bloomOffCompensation;e.uExposure.value=f.lerp(r.exposure,P.exposure,n),e.uSaturation.value=f.lerp(r.saturation,P.saturation,n),e.uHighlights.value=f.lerp(r.highlights,P.highlights,n),e.uWashout.value=f.lerp(r.washout,P.washout,n),e.uLift.value=f.lerp(r.lift,P.lift,n),e.uGamma.value=f.lerp(r.gamma,P.gamma,n),e.uColorBalance.value.lerpVectors(r.colorBalance,P.colorBalance,n)}var di={computer:{path:v.lightMapPaths.computer}},fi={room:{path:v.bakedSurfacePaths.room},table:{path:v.bakedSurfacePaths.table},chairBack:{path:v.bakedSurfacePaths.chairBack},chairLeft:{path:v.bakedSurfacePaths.chairLeft},chairRight:{path:v.bakedSurfacePaths.chairRight}},pi=new Set([`room`,`table`]),mi={computer:{envMapIntensity:10.95,roughnessMin:.8}};function hi(e){e.map&&(e.map.colorSpace=fe),e.emissiveMap&&(e.emissiveMap.colorSpace=fe)}function gi(e){let t=e.getAttribute(`uv`);if(!t)return;let n=new Float32Array(t.array.length);n.set(t.array),e.setAttribute(`uv1`,new h(n,t.itemSize))}function _i(e){return e.includes(`room`)||e.includes(`wall`)||e.includes(`floor`)||e.includes(`ceiling`)?`room`:(e.includes(`table`)||e.includes(`desk`))&&!e.includes(`portable`)?`table`:e.includes(`chair_back`)||e.includes(`chair`)&&e.includes(`back`)?`chairBack`:e.includes(`chair_left`)||e.includes(`chair`)&&e.includes(`left`)?`chairLeft`:e.includes(`chair_right`)||e.includes(`chair`)&&e.includes(`right`)?`chairRight`:null}function vi(e){return e.includes(`computer`)||e.includes(`pc`)||e.includes(`monitor`)||e.includes(`portable`)||e.includes(`bm86`)?`computer`:null}function yi(e){return pi.has(e)}async function bi(e,t={}){let n=await gr.loadAsync(e);return n.flipY=t.flipY??!1,t.colorSpace&&(n.colorSpace=t.colorSpace),n}async function xi(e,t={}){if(e.toLowerCase().endsWith(`.ktx2`)){let n=await yr.loadAsync(e);return t.colorSpace&&(n.colorSpace=t.colorSpace),n}return bi(e,t)}function Si(e){H?.setVisualState({transition:e})}function Ci(){return!!H?.isMounted()}function wi(e=`preload`){return Sr?(E(`screenOverlay.import.reuse`,{reason:e}),Sr):(E(`screenOverlay.import.start`,{reason:e}),Sr=be(()=>import(`./outer-screen-overlay-B28WwniR.js`).then(t=>(E(`screenOverlay.import.end`,{reason:e}),t),t=>{throw Sr=null,E(`screenOverlay.import.error`,{reason:e,message:t?.message??String(t)}),t}),__vite__mapDeps([0,1,2,3,4])),Sr)}async function Ti(){let e=performance.now();return E(`screenOverlay.ensure.start`,{hasOverlay:!!H,hasPendingModulePromise:!!Sr,hasPendingOverlayPromise:!!Cr}),H?(E(`screenOverlay.ensure.end`,{branch:`cached`,elapsedMs:performance.now()-e}),H):(Cr||=wi(`ensure`).then(({createScreenHtmlOverlay:e})=>(H=e({width:j.width,height:j.height}),K.lastSyncedVolume=null,H.setVisualState({opacity:W.current,brightness:1,pointerEvents:`none`,transition:``,visible:!1}),Pr(),Mi(Y.getState().isMuted),Ni(Y.getState().volume),Kr(),H)),Cr.then(t=>(E(`screenOverlay.ensure.end`,{branch:`promise`,elapsedMs:performance.now()-e,mounted:t?.isMounted?.()??!1}),t)))}function Ei(t){if(!t||V)return;V=new me,jn.add(V),t.updateWorldMatrix(!0,!1),t.geometry.computeBoundingBox();let n=t.geometry.boundingBox,r=new e;n.getCenter(r);let i=r.applyMatrix4(t.matrixWorld);V.position.copy(i),V.rotation.set(j.rotationX,j.rotationY,j.rotationZ,`YXZ`),V.translateZ(j.offsetZ),V.translateX(j.offsetX),V.translateY(j.offsetY);let a=new e;n.getSize(a);let o=[a.x,a.y,a.z].sort((e,t)=>t-e),s=o[0]/j.width*j.scaleMultiplier*j.scaleX,c=o[1]/j.height*j.scaleMultiplier*j.scaleY;V.scale.set(s,c,1),V.updateMatrixWorld(!0);let l=new e(0,0,1).applyQuaternion(V.quaternion).normalize();on.copy(V.position).addScaledVector(l,M.focus.distance),on.y+=M.focus.yOffset,sn.copy(V.position),sn.x+=M.focus.targetOffsetX,sn.y+=M.focus.targetOffsetY,sn.z+=M.focus.targetOffsetZ,K.fullVolumeDistance=on.distanceTo(V.position),K.minimumVolumeDistance=Math.max(K.fullVolumeDistance+1e-4,Ln.distanceTo(V.position),M.intro.startPos.distanceTo(V.position),M.unfocus.endPos.distanceTo(V.position)),K.currentGain=Oi(I.position.distanceTo(V.position)),Kr()}function Di(e){return f.clamp(e,0,1)}function Oi(e){let t=K.fullVolumeDistance,n=Math.max(K.minimumVolumeDistance,t+1e-4);if(!(t>0)||!(n>t)||e<=t)return 1;if(e>=n)return Fn.minVolumeRatio;let r=(e-t)/(n-t),i=r*r*(3-2*r);return f.lerp(1,Fn.minVolumeRatio,i)}function ki(e){wr=`live`}function Ai(e){return Di(e*K.currentGain)}function ji(){if(!V||!Y||!Ci())return;let e=Oi(I.position.distanceTo(V.position));Math.abs(e-K.currentGain)<.001||(K.currentGain=e,Ni(Y.getState().volume))}function Mi(e){if(H?.syncAudioControl){H.syncAudioControl({type:ve.SET_MUTED,muted:!!e});return}let t=window.__outerWebsiteAudioRuntime;t&&t.setMuted(!!e)}function Ni(e){let t=Ai(e);if(K.lastSyncedVolume!==null&&Math.abs(K.lastSyncedVolume-t)<Fn.volumeSyncEpsilon)return;if(K.lastSyncedVolume=t,H?.syncAudioControl){H.syncAudioControl({type:ve.SET_VOLUME,volume:t});return}let n=window.__outerWebsiteAudioRuntime;n&&n.setVolume(t)}function Pi(){let e=(Array.isArray(Pn.sources)?Pn.sources:[Pn.src]).filter(Boolean),t=new Audio;t.__outerWebsiteIgnoreGlobalAudio=!0,t.preload=`auto`,t.loop=Pn.loop,t.volume=Pn.initialVolume,t.playsInline=!0;let n=!1,r=!0,i=0,a=null,o=0,s=null,c=0,l=null,u=null,d={hasSource:e.length>0,hasError:!1,isMuted:!1,isPlaying:!1,needsUserGesture:!1,unlockArmed:!1,volume:Pn.initialVolume,wantsToPlay:Pn.defaultWantsToPlay},ee=()=>e[o]||``,te=()=>{let e=ee();return e?(t.getAttribute(`src`)!==e&&(t.src=e),!0):(t.removeAttribute(`src`),!1)},ne=()=>o>=e.length-1?!1:(o+=1,n=!1,te()),p=()=>{typeof l==`function`&&l({...d,currentSource:ee()})},m=()=>{a!==null&&(window.clearTimeout(a),a=null)},re=()=>{i=0,m()},ie=(e,n=240)=>!d.wantsToPlay||d.needsUserGesture?!1:a===null?i>=12?!1:(a=window.setTimeout(()=>{a=null,i+=1,t.readyState===0&&!d.hasError&&t.load(),he(`${e}-retry-${i}`)},n),!0):!0,ae=({restoreVolume:e=!1}={})=>{c+=1,s!==null&&(window.cancelAnimationFrame(s),s=null),e&&(t.volume=Di(d.volume))},oe=e=>{if(t.paused||t.muted||r||t.volume<=.001){e();return}ae();let n=c,i=t.volume,a=performance.now(),o=r=>{if(n!==c)return;let l=Math.min((r-a)/vt,1);if(t.volume=f.lerp(i,0,l),l<1){s=window.requestAnimationFrame(o);return}s=null,e()};s=window.requestAnimationFrame(o)},h=(e=!1)=>{t.muted=e||d.isMuted||r,t.volume=Di(d.volume)},se=async()=>{if(!d.hasSource||n)return!1;h(!0);try{return await t.play(),re(),n=!0,d.hasError=!1,d.isPlaying=!0,d.needsUserGesture=!1,pe(),p(),!0}catch{return h(),ie(`prime-muted-autoplay`),!1}},ce=()=>!n||t.paused?!1:(ae({restoreVolume:!0}),t.currentTime=0,h(),re(),d.hasError=!1,d.isPlaying=!0,d.needsUserGesture=!1,pe(),p(),!0),le=()=>{if(!n||t.paused)return!1;t.pause();try{t.currentTime=0}catch{return!1}return d.isPlaying=!1,!0},ue=(e=`timeline-sync`)=>{let i=performance.now();if(E(`audio.releaseQueuedPlayback.start`,{reason:e,holdAudibleStart:r,wantsToPlay:d.wantsToPlay,isPlaying:d.isPlaying,hasPrimedMutedAutoplay:n,paused:t.paused}),!r){d.wantsToPlay&&!d.isPlaying?he(e):(h(),p()),E(`audio.releaseQueuedPlayback.end`,{reason:e,branch:`already-released`,elapsedMs:performance.now()-i});return}if(r=!1,d.needsUserGesture=!1,d.hasError=!1,re(),pe(),h(),!d.wantsToPlay){p(),E(`audio.releaseQueuedPlayback.end`,{reason:e,branch:`not-wanted`,elapsedMs:performance.now()-i});return}let a=le();he(a?`${e}-restart-from-zero`:e),E(`audio.releaseQueuedPlayback.end`,{reason:e,branch:a?`primed-restart`:`play`,elapsedMs:performance.now()-i})},de=()=>{window.setTimeout(()=>{t.currentTime<.25&&(t.currentTime=0),h(),p()},80)},fe=async()=>{h(!0);try{return await t.play(),re(),d.hasError=!1,d.isPlaying=!0,d.needsUserGesture=!1,pe(),de(),p(),!0}catch{return h(),!1}},pe=()=>{!d.unlockArmed||!u||([`pointerdown`,`keydown`,`touchstart`].forEach(e=>{window.removeEventListener(e,u,!0)}),u=null,d.unlockArmed=!1)},me=()=>{d.unlockArmed||=(u=()=>{pe(),d.wantsToPlay&&he(`user-gesture`)},[`pointerdown`,`keydown`,`touchstart`].forEach(e=>{window.addEventListener(e,u,!0)}),!0)},he=async(e=`manual`)=>{if(d.wantsToPlay=!0,ae({restoreVolume:!0}),!d.hasSource)return p(),!1;if(ce())return!0;d.hasError&&=(t.load(),!1),h();try{return await t.play(),re(),d.hasError=!1,d.isPlaying=!0,d.needsUserGesture=!1,pe(),p(),!0}catch(n){return d.isPlaying=!t.paused,n?.name===`NotAllowedError`?await fe()||(d.hasError=!1,ie(`autoplay-blocked`)||(d.needsUserGesture=!0,me())):n?.name===`AbortError`||n?.name===`NotSupportedError`?(d.hasError=!1,ie(n.name===`AbortError`?`media-aborted`:`media-not-ready`)||(d.hasError=!0)):(d.hasError=!0,console.warn(`[BGM] Unable to play audio (${e}).`,n)),p(),!1}},ge=()=>{d.wantsToPlay=!1,d.needsUserGesture=!1,re(),pe(),oe(()=>{t.pause(),ae({restoreVolume:!0}),d.isPlaying=!1,p()})},_e=()=>{if(d.isPlaying||d.wantsToPlay){ge();return}he(`toggle`)},ve=e=>{let t=()=>{d.isMuted=e,h(),Mi(d.isMuted),p()};if(e!==d.isMuted){if(e){oe(t);return}ae({restoreVolume:!0}),t()}};return t.addEventListener(`play`,()=>{d.isPlaying=!0,p()}),t.addEventListener(`pause`,()=>{d.isPlaying=!1,p()}),t.addEventListener(`ended`,()=>{d.isPlaying=!1,p()}),t.addEventListener(`canplay`,()=>{d.wantsToPlay&&!d.isPlaying&&!d.needsUserGesture&&ie(`canplay`,0)}),t.addEventListener(`error`,()=>{let e=t.error?.code??null;if(e===1||e===null){ie(`media-load-aborted`);return}if(e===4){if(ne()){re(),d.hasError=!1,d.isPlaying=!1,t.load(),d.wantsToPlay&&(r?se():he(`media-source-fallback`)),p();return}if(ie(`media-source-error`,320))return}d.hasError=!0,d.isPlaying=!1,console.warn(`[BGM] Audio source could not be loaded: ${ee()}`),p()}),h(),d.hasSource&&te()&&(t.load(),d.wantsToPlay&&se()),{getState(){return{...d,currentSource:ee()}},pause:ge,play:he,releaseQueuedPlayback:ue,setVolume:e=>{ae(),d.volume=Di(e),d.volume>0&&d.isMuted&&(d.isMuted=!1),h(),Ni(d.volume),Mi(d.isMuted),p()},setOnChange(e){l=e,p()},toggleMute:()=>{ve(!d.isMuted)},togglePlay:_e}}var Y=Pi(),X={soundOn:`<svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#ff7b00" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"/><path d="M15.54 8.46a5 5 0 0 1 0 7.07"/><path d="M19.07 4.93a10 10 0 0 1 0 14.14"/></svg>`,soundOff:`<svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#ff7b00" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"/><line x1="23" y1="9" x2="17" y2="15"/><line x1="17" y1="9" x2="23" y2="15"/></svg>`,play:`<svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#ff7b00" stroke-width="2.3" stroke-linecap="round" stroke-linejoin="round"><polygon points="8 5 19 12 8 19 8 5"/></svg>`,pause:`<svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#ff7b00" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><line x1="9" y1="5" x2="9" y2="19"/><line x1="15" y1="5" x2="15" y2="19"/></svg>`,volumeLow:`<svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#ff7b00" stroke-width="2.3" stroke-linecap="round" stroke-linejoin="round"><polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"/><path d="M15 12a3 3 0 0 0 0-0.01"/></svg>`,volumeMid:`<svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#ff7b00" stroke-width="2.3" stroke-linecap="round" stroke-linejoin="round"><polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"/><path d="M15.5 9.5a4 4 0 0 1 0 5"/></svg>`,volumeHigh:`<svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#ff7b00" stroke-width="2.3" stroke-linecap="round" stroke-linejoin="round"><polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"/><path d="M15.5 8.5a5.5 5.5 0 0 1 0 7"/><path d="M18.8 6a9 9 0 0 1 0 12"/></svg>`,camUnfocused:`<svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#ff7b00" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z"/><circle cx="12" cy="13" r="4"/></svg>`,camFocused:`<svg width="13" height="13" viewBox="0 0 24 24" fill="#ff7b00" stroke="#ff7b00" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z"/><circle cx="12" cy="13" r="4"/></svg>`,fx:`<svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#ff7b00" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 7h8"/><path d="M4 17h14"/><path d="M14 7h6"/><path d="M10 17h4"/><circle cx="12" cy="7" r="2"/><circle cx="8" cy="17" r="2"/></svg>`},Fi={wasd:`<svg width="46" height="30" viewBox="0 0 46 30" fill="none" xmlns="http://www.w3.org/2000/svg">
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
  </svg>`};function Ii(){Xe&&(b?Xe.innerHTML=X.camFocused:Xe.innerHTML=X.camUnfocused)}function Li(e){return e>=.75?X.volumeHigh:e>=.4?X.volumeMid:X.volumeLow}function Ri(e){return e.isMuted?`Muted`:`${Math.round(e.volume*100)}%`}function zi(){ut!==null&&(window.clearTimeout(ut),ut=null)}function Bi(){zi(),w&&(ut=window.setTimeout(()=>{Vi(!1)},ht))}function Vi(e){e&&dt&&qi(!1),w=e,S&&S.classList.toggle(`is-open`,w),w?(Rr(S,nt),Bi()):zi()}function Hi(){let e=k(nr(),0),t=ir(e);return{bloomEnabled:er(),bloomLabel:er()?`On`:`Off`,requestedMsaaSamples:e,effectiveMsaaSamples:t,msaaEnabled:t>0,msaaLabel:vn(t)}}function Ui(e=We){return e===Ae?`Low`:`High`}function Wi(){let e=Hi();return`Quality ${Ui()} | Bloom ${e.bloomLabel} | MSAA ${e.msaaLabel}`}function Gi(e,t,n,r=`On`,i=`Off`){e&&(e.classList.toggle(`is-active`,n),e.innerHTML=`<span>${t}</span><strong>${n?r:i}</strong>`)}function Ki(){let e=Hi();if(rt&&(rt.classList.toggle(`is-active`,dt),rt.title=Wi()),C&&(C.classList.toggle(`is-open`,dt),dt&&Rr(C,lt)),it&&(it.textContent=`${v.label} / ${Ui()}`),Gi(ot,`Bloom`,e.bloomEnabled,`On`,`Off`),Gi(st,`MSAA`,e.msaaEnabled,e.msaaLabel,`Off`),Gi(ct,`Quality`,We===ke,`High`,`Low`),ot&&(ot.title=`Toggle Bloom`),st&&(st.title=`Cycle MSAA: 4x, 2x, Off`),ct&&(ct.title=`Toggle quality: High keeps full visual quality; Low saves GPU with downsampling, Bloom off, and static sky`),at){let{width:e,height:t}=cr(),n=D.avgRenderMs>0?D.avgRenderMs.toFixed(1):`0.0`,r=performance.now()-D.lastFrameNow>500?0:Math.round(D.fps);at.textContent=`avg: ${n} ms    fps: ${r}    resolution: ${e}x${t}`}}function qi(e){e&&w&&Vi(!1),dt=e,Ki(),J()}function Ji(e){try{window.localStorage.setItem(Te,JSON.stringify({mode:Pe(e),updatedAt:Date.now()}))}catch{}}function Yi(e,{persistOverride:t=!0,applyModeDefaults:n=!0}={}){let r=Pe(e),i=We,a=k(nr(),0),o=Un();We=r,t&&(Ge=`manual`),Ke(),he(g),n&&(_()?(A.bloomEnabled=!1,A.msaaSamples=0):(A.bloomEnabled=!0,k(A.msaaSamples,0)<=0&&(A.msaaSamples=yt)),bn()),t&&Ji(We);let s=k(nr(),0),c=Un();sr({forceRebuild:i!==We||s!==a||Math.abs(c-o)>.001}),Ki(),Jr(900),J()}function Xi(){Yi(_()?ke:Ae)}function Zi(e){_()&&Yi(ke,{applyModeDefaults:!1});let t=k(A.msaaSamples,0);A.bloomEnabled=!!e.bloomEnabled,A.msaaSamples=k(e.msaaSamples,A.msaaSamples);let n=k(A.msaaSamples,0);bn(),sr({forceRebuild:n!==t}),Ki(),Jr(600),J()}function Qi(e){if(e===`msaaSamples`){let e=k(A.msaaSamples,0),t=Ht.indexOf(e),n=Ht[t===-1?0:(t+1)%Ht.length];Zi({...A,msaaSamples:n});return}Zi({...A,[e]:!A[e]})}function $i(e,t=performance.now()){if(D.lastRenderMs=e,D.avgRenderMs=D.avgRenderMs===0?e:f.lerp(D.avgRenderMs,e,.18),D.lastFrameNow>0){let e=t-D.lastFrameNow;e>0&&e<250&&(D.avgFrameMs=D.avgFrameMs===0?e:f.lerp(D.avgFrameMs,e,.2),D.fps=D.avgFrameMs>0?1e3/D.avgFrameMs:0)}D.lastFrameNow=t,!(x||t-D.lastUiUpdate<250)&&(D.lastUiUpdate=t,Ki())}function ea(e=Y.getState()){Ze&&(Ze.innerHTML=e.isMuted?X.soundOff:X.soundOn,Ze.title=e.isMuted?`Unmute all audio`:`Mute all audio`),Qe&&(Qe.innerHTML=e.isPlaying||e.wantsToPlay?X.pause:X.play,e.hasError?Qe.title=`BGM unavailable (${e.currentSource||`no source`})`:e.needsUserGesture&&!e.isPlaying?Qe.title=`Click to start music`:e.wantsToPlay&&!e.isPlaying?Qe.title=`Music queued to start`:Qe.title=e.isPlaying?`Pause music`:`Play music`),$e&&($e.innerHTML=Li(e.volume),$e.title=`Adjust volume (${Math.round(e.volume*100)}%)`),et&&(et.value=`${Math.round(e.volume*100)}`),tt&&(tt.textContent=Ri(e))}Y.setOnChange(ea);function ta(){let e=document.createElement(`style`);e.textContent=`
    :root {
      --hud-glass-bg: rgba(80, 80, 80, 0.35);
      --hud-glass-border: rgba(255, 255, 255, 0.08);
      --hud-glass-shadow: none;
      --hud-glass-blur: blur(20px);
      --hud-font-main: ${wn};
      --hud-font-accent: ${Tn};
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
      opacity: 0; transition: opacity ${Nn.fadeDuration}s ease;
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
      opacity: 0; transition: opacity ${Nn.fadeDuration}s ease;
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
      opacity: 0; transition: opacity ${Nn.fadeDuration}s ease;
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
  `,document.head.appendChild(e);let t=document.createElement(`div`);t.id=`ui-tl`,ft=t;let n=document.createElement(`span`);n.id=`ui-name`,n.textContent=`Hanqi Zhao`,Qe=document.createElement(`button`),Qe.className=`ui-btn`,Qe.addEventListener(`click`,()=>{Y.togglePlay()});let r=document.createElement(`div`);nt=r,r.className=`ui-volume-control`,$e=document.createElement(`button`),$e.className=`ui-btn`,$e.addEventListener(`click`,()=>{Vi(!w)}),S=document.createElement(`div`),S.className=`ui-volume-panel`;let i=document.createElement(`div`);i.className=`ui-volume-title`,i.innerHTML=`<span>Volume</span>`,tt=document.createElement(`span`),tt.className=`ui-volume-value`,i.appendChild(tt),et=document.createElement(`input`),et.className=`ui-volume-slider`,et.type=`range`,et.min=`0`,et.max=`100`,et.step=`1`,et.addEventListener(`input`,e=>{Y.setVolume(Number(e.target.value)/100),Bi()}),S.appendChild(i),S.appendChild(et),r.appendChild($e);let a=document.createElement(`div`);lt=a,a.className=`ui-postfx-control`,rt=document.createElement(`button`),rt.className=`ui-btn`,rt.innerHTML=X.fx,rt.addEventListener(`click`,()=>{qi(!dt)}),C=document.createElement(`div`),C.className=`ui-postfx-panel`;let o=document.createElement(`div`);o.className=`ui-postfx-header`,o.innerHTML=`<span>Render FX</span>`,it=document.createElement(`span`),it.className=`ui-postfx-summary`,it.textContent=v.label,o.appendChild(it);let s=document.createElement(`div`);s.className=`ui-postfx-toggles`,ot=document.createElement(`button`),ot.className=`ui-postfx-toggle`,ot.type=`button`,ot.addEventListener(`click`,()=>{Qi(`bloomEnabled`)}),st=document.createElement(`button`),st.className=`ui-postfx-toggle`,st.type=`button`,st.addEventListener(`click`,()=>{Qi(`msaaSamples`)}),ct=document.createElement(`button`),ct.className=`ui-postfx-toggle`,ct.type=`button`,ct.addEventListener(`click`,()=>{Xi()}),s.appendChild(ot),s.appendChild(st),s.appendChild(ct),C.appendChild(o),C.appendChild(s),a.appendChild(rt),Ze=document.createElement(`button`),Ze.className=`ui-btn`,Ze.addEventListener(`click`,()=>{Y.toggleMute()}),Xe=document.createElement(`button`),Xe.className=`ui-btn`,Xe.innerHTML=X.camUnfocused,Xe.title=`Toggle focus`,Xe.addEventListener(`click`,()=>{x||!y||(b?ga():ha())}),t.appendChild(n),t.appendChild(Xe),t.appendChild(Qe),t.appendChild(Ze),t.appendChild(r),t.appendChild(a),document.body.appendChild(t),document.body.appendChild(S),document.body.appendChild(C),zr(),document.addEventListener(`pointerdown`,e=>{let t=nt?.contains(e.target)||S?.contains(e.target),n=lt?.contains(e.target)||C?.contains(e.target);w&&t?Bi():w&&Vi(!1),dt&&!n&&qi(!1)}),document.addEventListener(`pointermove`,()=>{w&&Bi()}),document.addEventListener(`wheel`,()=>{w&&Bi()},{passive:!0}),document.addEventListener(`keydown`,e=>{if(e.key===`Escape`){Vi(!1),qi(!1);return}w&&Bi()}),ea(),Ki();let c=document.createElement(`div`);c.id=`ui-bl`;let l=document.createElement(`div`);l.className=`ui-hint-row`,l.innerHTML=`
    <div class="ui-hint">${Fi.wasd}<span>: move</span></div>
    <div class="ui-hint">${Fi.space}<span>: up</span></div>
    <div class="ui-hint">${Fi.ctrl}<span>: down</span></div>
  `,at=document.createElement(`div`),at.className=`ui-hud-stats`,c.appendChild(l),c.appendChild(at),document.body.appendChild(c);let u=document.createElement(`div`);return u.id=`ui-br`,u.innerHTML=`<div class="ui-copy">© Copyright 2026 Hanqi Zhao.</div>`,document.body.appendChild(u),Ki(),{tl:t,bl:c,br:u}}async function na(){try{let t=Promise.all(Object.entries(fi).map(async([e,t])=>[e,await xi(t.path,{colorSpace:fe})])),r=Promise.all(Object.entries(di).map(async([e,t])=>{let n=await xi(t.path,{colorSpace:``});return n.channel=1,[e,n]})),[i,a,o,c,l]=await Promise.all([v.visualSky.kind===`hdr`?vr.loadAsync(v.visualSky.path):bi(v.visualSky.path,{colorSpace:fe,flipY:v.visualSky.flipY??!1}),v.lightingEnvironment.kind===`hdr`?vr.loadAsync(v.lightingEnvironment.path):bi(v.lightingEnvironment.path,{colorSpace:fe,flipY:v.lightingEnvironment.flipY??!1}),_r.loadAsync(`/models/room_all.glb`),t,r]),u=Object.fromEntries(c),te=Object.fromEntries(l),ne=new n(200,32,20);ne.scale(-1,1,1),U=new s(ne,li(i,v.visualSky)),U.position.y=-100,U.rotation.y=P.rotationY,jn.add(U),a.mapping=303,jn.environment=a,jn.environmentIntensity=v.lightingEnvironment.intensity??1.2;let p=o.scene;if(p.traverse(e=>{if(!e.isMesh)return;let t=(e.name??``).toLowerCase();(t.includes(`computer`)||t.includes(`screen`)||t.includes(`monitor`))&&Tr.push(e),t.includes(`screen_plane`)&&(xr=e,un.setFromMatrixPosition(e.matrixWorld),un.add(M.loader.shockwave.centerOffset),xr.material=new de({colorWrite:!1,depthWrite:!0}),xr.renderOrder=-1)}),si(p),p.traverse(e=>{if(!e.isMesh)return;let t=(e.name??``).toLowerCase();t.includes(`screen_plane`)||(Array.isArray(e.material)?e.material:[e.material]).forEach(n=>{if(!n)return;hi(n);let r=_i(t),i=vi(t);if(r&&u[r]){n.map=u[r],n.dithering=yi(r),n.needsUpdate=!0;return}n.isMeshStandardMaterial&&i&&te[i]&&(gi(e.geometry),n.lightMap=te[i],mi[i]&&(n.envMapIntensity=mi[i].envMapIntensity,n.roughness<mi[i].roughnessMin&&(n.roughness=mi[i].roughnessMin)),n.needsUpdate=!0)})}),jn.add(p),Tr.length>0){let t=new d;Tr.forEach(e=>{e.updateMatrixWorld(!0),t.union(new d().setFromObject(e))});let n=new e;t.getCenter(n);let r=new e;t.getSize(r),Er=new s(new ee(r.x,r.y,r.z),new de({colorWrite:!1,depthWrite:!1,transparent:!0,opacity:0})),Er.position.copy(n),Er.scale.setScalar(M.focus.hitboxScale),jn.add(Er),xr||(un.copy(n),un.add(M.loader.shockwave.centerOffset))}xr&&Ei(xr),await Promise.all([On,new Promise(e=>setTimeout(e,M.loader.minLoadTime))]),E(`startup.assets.readyForGesture`),wi(`start-prompt`).catch(()=>{}),await kn(),E(`loader.gesture.await.end`),E(`loader.fade.start`,{fadeTimeMs:M.loader.fadeTime*1e3}),N.style.opacity=`0`,await new Promise(e=>setTimeout(e,M.loader.fadeTime*1e3)),E(`loader.fade.end`),N.remove(),E(`loader.removed`),await Ti(),E(`screenOverlay.ready`);let m=ta();E(`outerHud.overlay.created`);{let e=performance.now();E(`loadingTimeline.start`);let t=!1,n=e=>e===1?1:1-2**(-10*e),r=e=>e<.5?4*e*e*e:1-(-2*e+2)**3/2;function i(){let a=(performance.now()-e)/1e3;if(!y){let e=M.loader.cameraPush,t=0;a>=e.startTime&&(t=Math.min((a-e.startTime)/e.duration,1)),I.position.lerpVectors(Ln,M.intro.startPos,r(t)),I.lookAt(hr.target)}let o=M.loader.shockwave,s=0;if(a>=o.startTime&&(s=Math.min((a-o.startTime)/o.duration,1)),!ln){let e=s>=1?Bt:f.lerp(o.startRadius,o.endRadius,n(s));cn.forEach(t=>{t.userData.shader&&(t.userData.shader.uniforms.uShockwaveRadius.value=e)}),s>=1&&ci()}let c=M.loader.skyFade,l=0;a>=c.startTime&&(l=Math.min((a-c.startTime)/c.duration,1)),U&&U.material&&(U.material.uniforms.uSkyOpacity.value=l),!y&&a>=M.loader.controlsUnlockTime&&(y=!0,E(`loadingTimeline.physicsUnlocked`,{elapsedSec:a}),Z.locked=!0,Z.targetMouse.set(0,0),Z.currentMouse.set(0,0),Z.lockBaseMouse.copy(ra),ca());let u=M.loader.screenFade;a>=u.startTime&&!Ye&&(Ye=!0,E(`loadingTimeline.screenFade.start`,{elapsedSec:a,durationSec:u.duration}),W.runtimeEnabled=!1,V&&H&&(Si(`opacity ${u.duration}s ease-in-out`),requestAnimationFrame(()=>{E(`loadingTimeline.screenFade.visibleFrame`),H.setVisualState({opacity:1,visible:!0}),setTimeout(()=>{V&&H&&(Si(``),W.runtimeEnabled=!0,W.target=1,Zr(1),E(`loadingTimeline.screenFade.runtimeEnabled`))},u.duration*1e3+100)}))),!t&&a>=Nn.appearAt&&(t=!0,m.tl.style.opacity=`1`,m.bl.style.opacity=`1`,m.br.style.opacity=`1`,E(`outerHud.overlay.visible`,{elapsedSec:a})),a<Math.max(M.loader.cameraPush.startTime+M.loader.cameraPush.duration,o.startTime+o.duration,c.startTime+c.duration,u.startTime+u.duration,M.loader.controlsUnlockTime)?requestAnimationFrame(i):(Je=!1,E(`loadingTimeline.complete`,{elapsedSec:a}))}i()}}catch(e){console.error(e)}}var ra=new m,Z={locked:!0,lockBaseMouse:new m,targetMouse:new m,currentMouse:new m,velocity:new m},ia={lastIdleSampleAt:0},aa={forward:new e,right:new e,up:new e(0,1,0),rawDir:new e,targetVel:new e,actualVel:new e,nextPos:new e,delta:new e,originalQuat:new pe,zeroMouse:new m(0,0),parallaxDiff:new m},oa={normal:new e,toCamera:new e},Q={w:!1,a:!1,s:!1,d:!1," ":!1,control:!1},sa=performance.now();function ca(){sa=performance.now()}window.addEventListener(`pointermove`,e=>{let t=_n(e.clientX,e.clientY);if(ra.x=t.x,ra.y=t.y,b&&!x||!y)return;let n=performance.now(),r=!x&&!b&&Z.locked;r&&n-ia.lastIdleSampleAt<Qt()||(r&&(ia.lastIdleSampleAt=n),ca(),!x&&!b&&Z.locked&&ra.distanceTo(Z.lockBaseMouse)>M.parallax.unlockThreshold&&(Z.locked=!1),J())}),window.addEventListener(`keydown`,e=>{if(b&&!x||!y)return;ca();let t=e.key.toLowerCase();t===` `&&e.preventDefault(),Q[t]!==void 0&&(Q[t]=!0),J()},{passive:!1}),window.addEventListener(`keyup`,e=>{if(b&&!x||!y)return;ca();let t=e.key.toLowerCase();Q[t]!==void 0&&(Q[t]=!1),J()}),window.addEventListener(`wheel`,()=>{b&&!x||y&&(ca(),J())}),L.domElement.addEventListener(`contextmenu`,e=>e.preventDefault());var la={linear:e=>e,easeOutCubic:e=>1-(1-e)**3,easeInOutCubic:e=>e<.5?4*e*e*e:1-(-2*e+2)**3/2},ua=null,da=!1;function fa(){ua!==null&&(window.clearTimeout(ua),ua=null)}function pa(){!da||x||!b||!y||(da=!1,window.requestAnimationFrame(()=>{!x&&b&&y&&ga()}))}function ma(e,t,n,r,i,a,o,{emitStartState:s=!0}={}){s&&(x=!0,Fr());let c=performance.now();kr(b?`focus`:`unfocus`,i,a,c);let l=Dr.mode;E(`focus.cameraTween.start`,{mode:l,durationMs:i,easingName:a});let u=la[a]||la.easeInOutCubic;J();function d(){let a=performance.now(),s=(a-c)/i;s>1&&(s=1);let ee=u(s);I.position.lerpVectors(e,n,ee),hr.target.lerpVectors(t,r,ee),I.lookAt(hr.target),J(),s<1?requestAnimationFrame(d):(Ar(),x=!1,Jr(),Fr(),$.velocity.set(0,0,0),Z.locked=!0,Z.lockBaseMouse.copy(ra),Z.targetMouse.set(0,0),Z.currentMouse.set(0,0),Z.velocity.set(0,0),ca(),o&&o(),pa(),E(`focus.cameraTween.end`,{mode:l,elapsedMs:a-c}),J())}d()}function ha(){if(x||b||!y){E(`focus.transition.blocked`,{target:`focus`,isAnimating:x,isFocused:b,isPhysicsUnlocked:y});return}E(`focus.transition.start`,{target:`focus`}),fa(),da=!1,x=!0,Ir(!0),Fr(),J(),ma(I.position.clone(),hr.target.clone(),on,sn,M.focus.duration,M.focus.easing,null,{emitStartState:!1})}async function ga(){if(x||!b||!y){E(`focus.transition.blocked`,{target:`unfocus`,isAnimating:x,isFocused:b,isPhysicsUnlocked:y});return}E(`focus.transition.start`,{target:`unfocus`}),fa(),da=!1,x=!0,Fr(),Ir(!1),!(!x||b)&&(Fr(),J(),ua=window.setTimeout(()=>{ua=null,ma(I.position.clone(),hr.target.clone(),M.unfocus.endPos,M.unfocus.endTarget,M.unfocus.duration,M.unfocus.easing,null,{emitStartState:!1})},Math.max(0,M.unfocus.preDelay??0)))}var _a=new a;L.domElement.addEventListener(`pointerdown`,t=>{if(!y||t.button!==0)return;let n=Ci()?oi(t.clientX,t.clientY):!1;if(E(`focus.pointerdown.canvas`,{button:t.button,pointerType:t.pointerType,isPhysicsUnlocked:y,isAnimating:x,isFocused:b,pointerInsideScreen:n}),x){b&&!n&&(da=!0,E(`focus.unfocus.queued`,{source:`canvas-pointerdown`}));return}ca();let r=_n(t.clientX,t.clientY);if(ra.x=r.x,ra.y=r.y,J(),b){if(n){E(`focus.pointerdown.insideFocusedScreen`);return}E(`focus.pointerdown.requestUnfocus`,{source:`canvas`}),ga();return}if(n){E(`focus.pointerdown.requestFocus`,{source:`screen-bounds`}),ha();return}_a.setFromCamera(ra,I);let i=Er?[Er]:Tr;if(_a.intersectObjects(i,!0).length>0&&V){let t=new e(0,0,1).applyQuaternion(V.quaternion).normalize(),n=new e().subVectors(I.position,V.position).normalize(),r=t.angleTo(n)*(180/Math.PI);E(`focus.pointerdown.hitboxIntersect`,{angleDegree:r,maxTriggerAngle:M.focus.maxTriggerAngle}),r<=M.focus.maxTriggerAngle&&(E(`focus.pointerdown.requestFocus`,{source:`computer-hitbox`}),ha())}J()});function va(e){return!!(ft?.contains(e)||S?.contains(e)||C?.contains(e))}document.addEventListener(`pointerdown`,e=>{if(!y||e.button!==0)return;let t=va(e.target),n=Ci()?oi(e.clientX,e.clientY):!1;if(E(`focus.pointerdown.document`,{button:e.button,pointerType:e.pointerType,isPhysicsUnlocked:y,isAnimating:x,isFocused:b,pointerInsideUi:t,clickedInsideScreen:n}),!t){if(!b){!x&&n&&(E(`focus.pointerdown.requestFocus`,{source:`document-screen-bounds`}),ha());return}if(!n){if(x){da=!0,E(`focus.unfocus.queued`,{source:`document-pointerdown`});return}E(`focus.pointerdown.requestUnfocus`,{source:`document`}),ga()}}},!0);function ya(){if(!xr||!V)return;let e=b&&!x&&Ci();if(ki(`live`),!Ye){Qr(e?`auto`:`none`);return}if(!W.runtimeEnabled){Qr(e?`auto`:`none`);return}let t=oa.normal.set(0,0,1).applyQuaternion(V.quaternion).normalize(),n=oa.toCamera.subVectors(I.position,V.position).normalize(),r=I.position.distanceTo(V.position),i=t.dot(n)>=0,a=0,o=`none`;if(e)a=1,o=`auto`;else if(i){let e=M.shield.maxClickDistance+M.shield.fadeDistance;if(r<=M.shield.maxClickDistance)a=1;else if(r>=e)a=M.shield.dimOpacity;else{let e=1-(r-M.shield.maxClickDistance)/M.shield.fadeDistance;a=f.lerp(M.shield.dimOpacity,1,e)}}W.target=a;let s=f.lerp(W.current,W.target,M.shield.opacityLerp),c=Math.abs(s-W.target)<.002?W.target:s;Zr(Math.abs(c-W.target)<=Rt?W.target:c),Qr(o)}var $={active:!1,chargeStart:0,releaseStart:0,dist:0,currentDir:new e,velocity:new e};function ba(e){q.frameId=null;let t=Br(),n=q.renderRequested,r=qr(e),i=r||t;if(!i&&!n)return;if(U&&t&&(U.rotation.y+=M.sky.rotationSpeed),!y){Xr(e,{skyOnly:!1,sceneAnimationActive:!0}),q.renderRequested=!1,i&&J();return}if(!r&&t&&!n){Xr(e,{skyOnly:!0,sceneAnimationActive:!1}),q.renderRequested=!1,Gr();return}let a=e-sa>M.parallax.idleTimeout;if(!b&&!x){let t=aa.forward;I.getWorldDirection(t),t.y=0,t.normalize();let n=aa.right.crossVectors(t,I.up).normalize(),r=aa.up,i=aa.rawDir.set(0,0,0);Q.w&&i.add(t),Q.s&&i.sub(t),Q.a&&i.sub(n),Q.d&&i.add(n),Q[` `]&&i.add(r),Q.control&&i.sub(r),i.lengthSq()>0?($.releaseStart=0,$.active?$.currentDir.lerp(i.normalize(),M.walk.dirLerp).normalize():($.chargeStart===0&&($.chargeStart=e),e-$.chargeStart>M.walk.chargeTime&&($.active=!0,$.dist=0,$.currentDir.copy(i.normalize())))):($.chargeStart=0,$.active&&($.releaseStart===0&&($.releaseStart=e),e-$.releaseStart>M.walk.releaseGrace&&($.active=!1)),a&&($.active=!1,$.releaseStart=0,$.currentDir.set(0,0,0),$.velocity.set(0,0,0))),$.active&&$.dist>=M.walk.maxDist&&($.active=!1);let o=aa.targetVel.set(0,0,0);if($.active?(o.copy($.currentDir).multiplyScalar(M.walk.speed),$.velocity.lerp(o,M.walk.acceleration)):($.velocity.lerp(o,M.walk.deceleration),Hr($.velocity)&&$.velocity.set(0,0,0)),$.velocity.lengthSq()>1e-6){$.dist+=$.velocity.length();let e=aa.actualVel.copy($.velocity),t=M.walk.bounds,n=M.walk.dampingZone;e.x<0&&I.position.x-t.minX<n?e.x*=Math.max(0,(I.position.x-t.minX)/n):e.x>0&&t.maxX-I.position.x<n&&(e.x*=Math.max(0,(t.maxX-I.position.x)/n)),e.y<0&&I.position.y-t.minY<n?e.y*=Math.max(0,(I.position.y-t.minY)/n):e.y>0&&t.maxY-I.position.y<n&&(e.y*=Math.max(0,(t.maxY-I.position.y)/n)),e.z<0&&I.position.z-t.minZ<n?e.z*=Math.max(0,(I.position.z-t.minZ)/n):e.z>0&&t.maxZ-I.position.z<n&&(e.z*=Math.max(0,(t.maxZ-I.position.z)/n));let r=aa.nextPos.copy(I.position).add(e);r.x<=t.minX?(r.x=t.minX,$.velocity.x=0):r.x>=t.maxX&&(r.x=t.maxX,$.velocity.x=0),r.y<=t.minY?(r.y=t.minY,$.velocity.y=0):r.y>=t.maxY&&(r.y=t.maxY,$.velocity.y=0),r.z<=t.minZ?(r.z=t.minZ,$.velocity.z=0):r.z>=t.maxZ&&(r.z=t.maxZ,$.velocity.z=0);let i=aa.delta.subVectors(r,I.position);I.position.copy(r),hr.target.add(i)}}I.lookAt(hr.target);let o=aa.originalQuat.copy(I.quaternion);b||x||a||Z.locked?Z.targetMouse.lerp(aa.zeroMouse,M.parallax.catchupSpeed):Z.targetMouse.lerp(ra,M.parallax.catchupSpeed);let s=aa.parallaxDiff.subVectors(Z.targetMouse,Z.currentMouse);Z.velocity.add(s.multiplyScalar(M.parallax.springAccel)),Z.velocity.multiplyScalar(1-M.parallax.springFriction),Z.currentMouse.add(Z.velocity),a&&(Vr(Z.targetMouse)&&Z.targetMouse.set(0,0),Vr(Z.velocity)&&Z.velocity.set(0,0),Vr(Z.currentMouse)&&Vr(Z.targetMouse)&&Vr(Z.velocity)&&Z.currentMouse.set(0,0));let c=Z.currentMouse.y*f.degToRad(M.parallax.maxAngle),l=-Z.currentMouse.x*f.degToRad(M.parallax.maxAngle);I.rotateX(c),I.rotateY(l),Xr(e,{skyOnly:t&&!r&&!n,sceneAnimationActive:r}),I.quaternion.copy(o),q.renderRequested=!1,r?J():t&&Gr()}window.addEventListener(`resize`,()=>{gn(),Rn(),Bn(),I.aspect=O.aspect,I.updateProjectionMatrix(),dn!==null&&window.clearTimeout(dn),dn=window.setTimeout(()=>{dn=null,sr({forceRebuild:!0}),Ki(),J()},zt),zr(),Kr()}),na(),J();