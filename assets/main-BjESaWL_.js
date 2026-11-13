const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/outer-screen-overlay-BpJLfdd7.js","assets/createWinXPHost-TB3hANri.js","assets/rolldown-runtime-BVbofQct.js","assets/preload-helper-DWTEM3RW.js","assets/react-vendor-aHYhdYD6.js","assets/DesktopPreparationContext-BSY2MTtZ.js","assets/DesktopViewportContext-BvIqTV0r.js","assets/desktopPresentationProfile-CVnTUj2M.js","assets/runtimeBridge-BbQNkrZH.js","assets/globalAudio-BLDl5KfZ.js","assets/publicPath-SdK1OGf5.js","assets/visibleTimeout-DctrY-yE.js","assets/createWinXPHost-BSxTm-g0.css"])))=>i.map(i=>d[i]);
import"./modulepreload-polyfill-Cf3xff8G.js";import{A as e,C as t,D as n,E as r,O as i,S as a,T as o,_ as s,a as c,b as l,c as u,d,f as ee,g as te,h as f,i as ne,k as p,l as re,m,n as ie,o as ae,p as oe,r as h,s as se,t as ce,u as le,v as ue,w as de,x as fe,y as pe}from"./three-vendor-DKD55Jen.js";import{t as me}from"./desktopPresentationProfile-CVnTUj2M.js";import{a as he,i as ge,l as _e,n as ve,o as ye,t as be,u as xe}from"./runtimeBridge-BbQNkrZH.js";import{t as Se}from"./preload-helper-DWTEM3RW.js";var Ce=`/models/room_all.glb`,we={current:{visualSkyLdr:new URL(`/assets/new_sky_ldr-yZ_KpEae.jpg`,``+import.meta.url).href,lightingLdr:new URL(`/assets/room_ldr-DOcZ7og-.jpg`,``+import.meta.url).href,room:new URL(`/assets/room%20baked-KoBuYlPf.ktx2`,``+import.meta.url).href,table:new URL(`/assets/table%20baked-DFp0K4D2.ktx2`,``+import.meta.url).href,chairBack:new URL(`/assets/chair%20back%20final-sbWclMz4.ktx2`,``+import.meta.url).href,chairLeft:new URL(`/assets/chair%20left%20final-BjZ_O-yh.ktx2`,``+import.meta.url).href,chairRight:new URL(`/assets/chair%20right%20final-BtcJ8_ie.ktx2`,``+import.meta.url).href,computer:new URL(`/assets/computer%20shadow-D5HsGwbv.ktx2`,``+import.meta.url).href}},g={label:`Slim`,visualSky:{kind:`ldr`,path:we.current.visualSkyLdr,flipY:!0},lightingEnvironment:{kind:`ldr`,path:we.current.lightingLdr,flipY:!0,intensity:1.2},bakedSurfacePaths:{room:we.current.room,table:we.current.table,chairBack:we.current.chairBack,chairLeft:we.current.chairLeft,chairRight:we.current.chairRight},lightMapPaths:{computer:we.current.computer}},Te=class{constructor(e,t=()=>{}){this.stages=new Map(e.map(e=>[e,!1])),this.onChange=t,this.state=`preparing`}ready(e){if(!this.stages.has(e))throw Error(`Unknown startup stage: ${e}`);this.stages.set(e,!0),this.onChange(this.snapshot())}transition(e){this.state=e,this.onChange(this.snapshot())}snapshot(){let e=[...this.stages.values()].filter(Boolean).length;return{state:this.state,completed:e,total:this.stages.size,pending:[...this.stages].filter(([,e])=>!e).map(([e])=>e)}}},Ee=class{constructor(e,{request:t=e=>window.requestAnimationFrame(e),cancel:n=e=>window.cancelAnimationFrame(e)}={}){this.frame=e,this.request=t,this.cancel=n,this.frameId=null,this.timer=null,this.suspended=!1,this.reasons=new Set,this.lastReasons=[],this.frameCount=0}invalidate(e=`scene`){this.reasons.add(e),clearTimeout(this.timer),this.timer=null,!(this.suspended||this.frameId!==null)&&(this.frameId=this.request(e=>{this.frameId=null,this.lastReasons=[...this.reasons],this.reasons.clear(),this.frameCount++,this.frame(e)}))}decorate(e){this.suspended||this.frameId!==null||this.timer!==null||(this.timer=setTimeout(()=>{this.timer=null,this.invalidate(`sky`)},e))}suspend(e){this.suspended=e,e?(this.frameId!==null&&this.cancel(this.frameId),clearTimeout(this.timer),this.frameId=null,this.timer=null):this.invalidate(`recovering`)}dispose(){this.suspend(!0),this.reasons.clear()}},De=class{constructor(){this.active=null}start({now:e,duration:t,update:n,complete:r}){this.active={startedAt:e,duration:Math.max(1,t),update:n,complete:r},this.tick(e)}tick(e){let t=this.active;if(!t)return!1;let n=Math.min(1,Math.max(0,(e-t.startedAt)/t.duration));return t.update(n),n===1&&this.active===t&&(this.active=null,t.complete?.()),!!this.active}shift(e,t=1/0){this.active&&(this.active.startedAt+=Math.min(e,Math.max(0,t-this.active.startedAt)))}cancel(){this.active=null}},Oe=new Set([`legacy`,`single-scene`,`compact`]),ke=new URLSearchParams(window.location.search).get(`postfxBuffers`),Ae=Oe.has(ke)?ke:`compact`;function je(e,t,n){if(Ae!==`legacy`){if(e.passes.at(-1)!==n||e.passes.slice(0,-1).some(e=>e.needsSwap))throw Error(`Compact postprocessing requires an in-place chain and final OutputPass.`);if(n.needsSwap=!1,Ae===`compact`)for(let e of[t.renderTargetBright,...t.renderTargetsHorizontal,...t.renderTargetsVertical])e.depthBuffer=!1,e.stencilBuffer=!1}}var Me=`slim`;xe(me());var Ne=!0,Pe=null,Fe=null,Ie=!0,Le=!1,_=!1,Re=!1,v=!1,y=!1,ze=null,Be=null,Ve=null,He=null,b=null,Ue=null,We=null,Ge=null,Ke=null,x=null,qe=null,Je=null,Ye=null,Xe=null,Ze=null,S=!1,Qe=null,$e=!1,et=null,tt=null,nt=2200,rt=10,it=12,at=220,ot=2,st=2,ct=1,lt=.7,ut=1800,dt=18,ft=1e3/10,pt=1200,mt=.25,ht=32,gt=1e-4,_t=.01,vt=.01,yt=150,bt=9999,xt=`outer-website:shockwave-v1`,St=[4,2,0],Ct=!0,wt=1e3/180,Tt=1e3/30,Et=250,Dt=800,Ot=`outer-website:`;function kt(){return st}function At(){return ct}function jt(){return lt}function Mt(){return dt}function Nt(){return 1e3/Mt()}function Pt(){return pt}function Ft(){return ht}function It(){return _t}function Lt(e,t=Tt){return(Number.isFinite(e)&&e>0?Math.min(e,t):wt)/wt}function Rt(e,t){let n=f.clamp(e,0,1);return n<=0?0:n>=1?1:1-(1-n)**Math.max(0,t)}var C=window.__outerWebsiteStartupTiming??{createdAt:Date.now(),timeOrigin:performance.timeOrigin??Date.now()-performance.now(),events:[]};window.__outerWebsiteStartupTiming=C;function zt(){try{return new URLSearchParams(window.location.search).has(`startupTimingLog`)}catch{return!1}}var Bt=zt();function Vt(e){if(typeof e!=`object`||!e)return e??{};try{return JSON.parse(JSON.stringify(e,(e,t)=>{if(typeof t==`number`)return Number.isFinite(t)?Number(t.toFixed(3)):String(t);if(typeof t!=`function`)return t}))}catch{return{unserializable:!0}}}function w(e,t={}){let n=performance.now(),r={index:C.events.length,name:e,at:Number(n.toFixed(3)),detail:Vt(t)};if(C.events.push(r),C.events.length>Dt&&C.events.splice(0,C.events.length-Dt),Bt)try{performance.mark(`${Ot}${e}`)}catch{}return Bt&&console.debug(`[startup-timing]`,JSON.stringify(r)),r}function Ht(){return{createdAt:C.createdAt,timeOrigin:C.timeOrigin,now:Number(performance.now().toFixed(3)),eventCount:C.events.length,events:C.events.slice()}}function Ut(){C.events.length=0,w(`debug.timeline.cleared`)}if(window.__outerWebsiteRecordStartupTiming=w,Bt&&typeof PerformanceObserver<`u`)try{C.longTaskObserver?.disconnect?.(),C.longTaskObserver=new PerformanceObserver(e=>{e.getEntries().forEach(e=>{w(`performance.longtask`,{startTime:e.startTime,duration:e.duration,name:e.name})})}),C.longTaskObserver.observe({type:`longtask`,buffered:!0})}catch{}w(`main.module.loaded`,{assetProfile:Me});var Wt=new p,Gt=new p,Kt=[],qt=!1,Jt=new p(0,0,0),Yt=null,T={lastRenderMs:0,avgRenderMs:0,avgFrameMs:0,fps:0,lastUiUpdate:0,lastFrameNow:0},Xt=4/3,Zt=21/9;function Qt(e){return Math.min(Math.max(e,Xt),Zt)}function $t(e=window.innerWidth,t=window.innerHeight){let n=Math.max(1,Math.floor(e)),r=Math.max(1,Math.floor(t)),i=n/r,a=Qt(i),o=n,s=r;return i>a?o=Math.max(1,Math.round(r*a)):i<a&&(s=Math.max(1,Math.round(n/a))),{windowWidth:n,windowHeight:r,width:o,height:s,left:Math.round((n-o)/2),top:Math.round((r-s)/2),aspect:o/s,isClamped:Math.abs(i-a)>.001}}var E=$t();function en(){Object.assign(E,$t())}function tn(e,t){let n=e-E.left,r=t-E.top,i=f.clamp(n,0,E.width),a=f.clamp(r,0,E.height);return{x:i/E.width*2-1,y:-(a/E.height)*2+1,inside:n>=0&&n<=E.width&&r>=0&&r<=E.height}}function nn(e,t=ot){if(e===!0)return ot;if(e===!1||e==null)return t;let n=Number(e);return n>=4?4:n>=2?2:0}function rn(e){return e>=4?`4x`:e>=2?`2x`:`Off`}var D={bloomEnabled:!1,msaaSamples:0},O={url:`/embedded-winxp.html`,width:1280,height:820,rotationX:-Math.PI*15.5/180,rotationY:Math.PI/2,rotationZ:0,flipNormal:!1,scaleMultiplier:1,scaleX:.99,scaleY:1.01,offsetX:0,offsetY:6e-4,offsetZ:0},an={localCorners:[new p(-O.width/2,O.height/2,0),new p(O.width/2,O.height/2,0),new p(O.width/2,-O.height/2,0),new p(-O.width/2,-O.height/2,0)],worldCorners:[new p,new p,new p,new p],quad:[{x:0,y:0},{x:0,y:0},{x:0,y:0},{x:0,y:0}],cameraSpacePoint:new p,projectedPoint:new p},k={loader:{bgColor:`#d9d9d9`,minLoadTime:1500,fadeTime:1,cameraPush:{startTime:1.5,duration:1,distance:.5},shockwave:{startTime:.5,duration:5.5,startRadius:0,endRadius:20,edgeWidth:.2,edgeIntensity:3,centerOffset:new p(-4,-1,0)},skyFade:{startTime:.5,duration:1},screenFade:{startTime:2.5,duration:6.5},controlsUnlockTime:2.5},intro:{startPos:new p(4.3,-1.8,0),startTarget:new p(0,-1.4,0)},focus:{duration:2e3,easing:`easeInOutCubic`,distance:.18,yOffset:0,maxTriggerAngle:60,targetOffsetX:0,targetOffsetY:0,targetOffsetZ:0,hitboxScale:1.8},unfocus:{preDelay:0,duration:1800,easing:`easeOutCubic`,endPos:new p(4.5,-1.8,0),endTarget:new p(0,-1.4,0)},shield:{maxClickDistance:1.2,dimOpacity:.8,fadeDistance:.55,opacityLerp:.14},sky:{rotationSpeed:3e-5},parallax:{maxAngle:6,unlockThreshold:.12,springAccel:.0065,springFriction:.095,catchupSpeed:.055,idleTimeout:2200},walk:{chargeTime:80,releaseGrace:50,maxDist:1e3,speed:.011,acceleration:.6,deceleration:.6,dirLerp:1,dampingZone:.8,bounds:{minX:2,maxX:5,minY:-2,maxY:1.5,minZ:-3.5,maxZ:3.5}}};document.body.style.backgroundColor=k.loader.bgColor,document.body.style.margin=`0`,document.body.style.overflow=`hidden`;var on=`/font/Controller%20W01%20Two%20Oblique.ttf`,sn=`/font/Controller%20W01%20Five%20Oblique.ttf`,cn=`/font/Controller%20W01%20Two%20Oblique.woff2`,ln=`/font/Controller%20W01%20Five%20Oblique.woff2`,un=(e,t)=>`url('${e}') format('woff2'), url('${t}') format('truetype')`,dn=`"Controller W01 Two Oblique", 'Courier New', Courier, monospace`,fn=`"Controller W01 Five Oblique", 'Courier New', Courier, monospace`,pn=document.createElement(`style`);pn.textContent=`
  @font-face {
    font-family: 'Controller W01 Two Oblique';
    src: ${un(cn,on)};
    font-weight: 400;
    font-style: normal;
    font-display: swap;
  }
  @font-face {
    font-family: 'Controller W01 Five Oblique';
    src: ${un(ln,sn)};
    font-weight: 400;
    font-style: normal;
    font-display: swap;
  }
  #hud-loader-root {
    position: fixed; top: 0; left: 0; width: 100vw; height: 100vh;
    background-color: #ffffff;
    z-index: 9999; display: flex; justify-content: center; align-items: center;
    font-family: ${dn};
    color: #ff7b00;
    filter: drop-shadow(0 0 2px rgba(255,102,0,0.9)) drop-shadow(0 0 6px rgba(255,102,0,0.5));
    -webkit-user-select: none; user-select: none;
    transition: opacity ${k.loader.fadeTime}s ease-in-out;
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
`,document.head.appendChild(pn);var A=document.createElement(`div`);A.id=`hud-loader-root`,A.innerHTML=`
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
  </div>`,document.body.appendChild(A);var mn=new Te([`textures`,`model`,`scene`,`gpu`],({completed:e,total:t,state:n})=>{A.querySelectorAll(`.hud-block`).forEach((n,r)=>n.classList.toggle(`lit`,r<e/t*18)),A.querySelector(`#hud-status`).textContent=n===`awaitingGesture`?`Ready to enter.`:`Preparing room (`+e+`/`+t+`)...`,A.querySelector(`#hud-hex`).textContent=e+`/`+t});(function(){let e=A.querySelector(`#hud-bar`);A.querySelector(`#hud-hex`),A.querySelector(`#hud-status`);for(let t=0;t<18;t++){let t=document.createElement(`div`);t.className=`hud-block`,e.appendChild(t)}mn.transition(`preparing`)})();function hn(){return w(`loader.prompt.wait.start`),new Promise(e=>{let t=A.querySelector(`.hud-core`);if(!t){w(`loader.prompt.missing`),tt=null,e();return}let n=!1,r=t=>{if(n)return;let r=performance.now();if(w(`loader.gesture.finish.start`,{reason:t}),n=!0,Le=!1,q(),tt=null,A.removeEventListener(`pointerdown`,i,!0),A.removeEventListener(`keydown`,a,!0),typeof J?.releaseQueuedPlayback==`function`){let e=performance.now();J.releaseQueuedPlayback(t),w(`loader.gesture.audioRelease.called`,{reason:t,elapsedMs:performance.now()-e})}w(`loader.gesture.finish.end`,{reason:t,elapsedMs:performance.now()-r}),e()},i=e=>{w(`loader.gesture.pointerdown`,{button:e.button,pointerType:e.pointerType}),e.preventDefault(),r(`loader-start-pointer`)},a=e=>{e.key!==`Enter`&&e.key!==` `||(w(`loader.gesture.keydown`,{key:e.key}),e.preventDefault(),r(`loader-start-keyboard`))};t.classList.add(`is-awaiting-start`),tt=()=>{w(`loader.gesture.debugTrigger`),r(`loader-start-debug`)},A.tabIndex=0,A.focus({preventScroll:!0}),A.addEventListener(`pointerdown`,i,!0),A.addEventListener(`keydown`,a,!0),w(`loader.prompt.awaiting`,{activeElementId:document.activeElement?.id??``})})}var gn=document.getElementById(`app`),j=new de,_n={fov:65,near:.1,far:1e3},M={exposure:1.1,saturation:1.25,highlights:.95,washout:0,lift:0,gamma:1,colorBalance:new p(1,1,1),bloomOffCompensation:{exposure:1.26,saturation:1.55,highlights:.95,washout:0,lift:0,gamma:1,colorBalance:new p(1.003,1.006,1.026)},repeatX:2,repeatY:1.2,offsetY:0,rotationY:-3*Math.PI/4},N={exposure:.9,bloom:{strength:.01,radius:0,threshold:0,transitionDurationMs:220},unfocus:{bloomResumeProgress:.5}},vn={appearAt:3,fadeDuration:1},yn={sources:[`/audio/outer-bgm.ogg`,`/audio/outer-bgm.m4a`],loop:!0,initialVolume:.56,defaultWantsToPlay:!0},bn={minVolumeRatio:.2,volumeSyncEpsilon:.003},P=new pe(_n.fov,E.aspect,_n.near,_n.far),xn=new p().subVectors(k.intro.startTarget,k.intro.startPos).normalize(),Sn=k.intro.startPos.clone().addScaledVector(xn,-k.loader.cameraPush.distance);P.position.copy(Sn);var F=new le({antialias:!1,depth:!1,stencil:!1,alpha:!1,powerPreference:`high-performance`});F.debug.checkShaderErrors=!1;function Cn(){F.domElement.style.left=`${E.left}px`,F.domElement.style.top=`${E.top}px`}function wn(e=Pn,t=On()){return e?En():t}function Tn(e=On()){let t=wn(Pn,e);Gn=!1,F.setPixelRatio(t),F.setSize(E.width,E.height),Nn=e,I?.setPixelRatio&&I.setPixelRatio(e),I?.setSize&&I.setSize(E.width,E.height),L?.setSize&&L.setSize(Math.max(1,Math.floor(E.width*e*.5)),Math.max(1,Math.floor(E.height*e*.5)))}function En(){return Math.min(window.devicePixelRatio||1,kt())}function Dn(){return At()}function On(){let e=En();return f.clamp(e*Dn(),jt(),e)}F.setPixelRatio(En()),F.setSize(E.width,E.height),F.setClearColor(0,1),F.outputColorSpace=t,F.useLegacyLights=!1,F.toneMapping=4,F.toneMappingExposure=N.exposure,gn.style.position=`relative`,gn.style.backgroundColor=`#000000`,F.domElement.style.position=`absolute`,F.domElement.style.zIndex=`1`,F.domElement.style.pointerEvents=`auto`,F.domElement.style.display=`block`,Cn(),gn.appendChild(F.domElement);var kn=null,I=null,An=null,L=null,jn=null,Mn=0,Nn=0,Pn=!1,R={currentStrength:D.bloomEnabled?N.bloom.strength:0,fromStrength:D.bloomEnabled?N.bloom.strength:0,targetStrength:D.bloomEnabled?N.bloom.strength:0,transitionStartedAt:performance.now()},Fn={hidden:!1};function In(){return D.bloomEnabled?N.bloom.strength:0}function Ln(e=performance.now()){let t=In();Math.abs(t-R.targetStrength)<1e-4||(R.fromStrength=R.currentStrength,R.targetStrength=t,R.transitionStartedAt=e)}function Rn(){return Math.abs(R.currentStrength-R.targetStrength)>1e-4}function zn(){return R.currentStrength>1e-4||R.targetStrength>1e-4}function Bn(e=performance.now()){Ln(e);let t=Math.max(0,N.bloom.transitionDurationMs??0);if(t<=0)R.currentStrength=R.targetStrength,R.fromStrength=R.targetStrength;else{let n=f.clamp((e-R.transitionStartedAt)/t,0,1),r=n<.5?4*n*n*n:1-(-2*n+2)**3/2;R.currentStrength=f.lerp(R.fromStrength,R.targetStrength,r),n>=1&&(R.currentStrength=R.targetStrength,R.fromStrength=R.targetStrength)}L&&(L.enabled=zn(),L.strength=R.currentStrength,L.radius=N.bloom.radius,L.threshold=N.bloom.threshold)}function Vn(){return D.msaaSamples}function Hn(e=performance.now()){return Ln(e),Ct}function Un(e=Vn()){let t=nn(e,0);if(t<=0)return 0;let n=F.capabilities.maxSamples??0;return n>=t?t:n>=4?4:n>=2?2:0}var Wn=1,Gn=!1;function Kn(){return!!(Pn&&I&&An&&V&&Gn&&Ae!==`legacy`&&Mn===0&&!L?.enabled&&!Rn())}function qn(){let e=F.getRenderTarget(),t=F.autoClear,n=P.layers.mask;try{F.setRenderTarget(I.readBuffer),F.autoClear=!1,P.layers.set(Wn),F.render(j,P)}finally{P.layers.mask=n,F.autoClear=t,F.setRenderTarget(e)}An.enabled=!1;try{I.render()}finally{An.enabled=!0}}function Jn(){I.render(),Gn=!0}function Yn(){if(!Kn())return{eligible:!1};let e=I.readBuffer,{width:t,height:n}=e,r=()=>{let r=new Uint16Array(t*n*4);return F.readRenderTargetPixels(e,0,0,t,n,r),r},i=V.rotation.y;try{Jn(),V.rotation.y=i+.05,qn();let e=r();Jn();let a=r(),o=0;for(let t=0;t<a.length;t+=1)a[t]!==e[t]&&(o+=1);return{eligible:!0,width:t,height:n,values:a.length,differing:o}}finally{V.rotation.y=i,Jn()}}function Xn(){Gn=!1,I?.dispose&&I.dispose(),L?.dispose&&L.dispose(),jn?.dispose&&jn.dispose(),kn&&kn.dispose(),I=null,An=null,L=null,jn=null,kn=null,Pn=!1}function Zn({pixelRatio:t=On(),msaaSamples:n=Un(Vn()),useComposer:r=Hn()}={}){Xn();let a=Math.max(1,Math.floor(E.width*t)),o=Math.max(1,Math.floor(E.height*t)),s=wn(r,t);F.setPixelRatio(s),F.setSize(E.width,E.height),Cn(),Nn=t,Mn=r?n:0,Pn=r,r&&(kn=new e(a,o,{samples:n,type:m}),I=new ne(F,kn),I?.setPixelRatio&&I.setPixelRatio(t),An=new h(j,P),I.addPass(An),L=new ie(new i(Math.max(1,Math.floor(E.width*t*.5)),Math.max(1,Math.floor(E.height*t*.5))),R.currentStrength,N.bloom.radius,N.bloom.threshold),Bn(performance.now()),I.addPass(L),jn=new ce,I.addPass(jn),je(I,L,jn),Tn(t))}function Qn({forceRebuild:e=!1}={}){let t=performance.now();Ln(t);let n=On(),r=Un(Vn()),i=Hn(t);if(e||Math.abs(n-Nn)>.001||r!==Mn||i!==Pn){Zn({pixelRatio:n,msaaSamples:r,useComposer:i}),G.projectionInvalidated=!0,q();return}if(Math.abs(n-Nn)>.001){Tn(n),G.projectionInvalidated=!0,q();return}Bn(t)}Zn();function $n(){let e=On();return{scale:Number(Dn().toFixed(3)),pixelRatio:e,width:Math.max(1,Math.floor(E.width*e)),height:Math.max(1,Math.floor(E.height*e))}}function er(){let e=performance.memory;if(!e)return null;let t=e=>Number((e/(1024*1024)).toFixed(2));return{usedMB:t(e.usedJSHeapSize),totalMB:t(e.totalJSHeapSize),limitMB:t(e.jsHeapSizeLimit)}}function tr(){let e=Pi(),t=$n(),n=nn(D.msaaSamples,0),r=nn(Vn(),0),i=Un(Vn()),a=$?.velocity?.lengthSq?.()??0,o=X?.velocity?.lengthSq?.()??0,s=X?.currentMouse?.distanceToSquared?.(X.targetMouse)??0,c=Math.abs((H?.current??0)-(H?.target??0)),l=U?.lastUpdateAt?performance.now()-U.lastUpdateAt:null;return{ready:!Ie,isAnimating:y,physicsUnlocked:_,focused:v,benchmarkMode:!1,postFxBufferMode:Ae,externalTextureOverridesEnabled:!0,assetProfile:Me,assetProfileLabel:g.label,performanceProfile:{qualityMode:`high`,qualitySelectionSource:`fixed`,qualityLowTierScore:null,lowPowerOuterMode:!1,maxDevicePixelRatio:kt(),renderScale:Number(Dn().toFixed(3)),skyOnlyTargetFps:Mt()},bloomEnabled:e.bloomEnabled,bloomStrength:Number(R.currentStrength.toFixed(4)),savedBloomEnabled:D.bloomEnabled,requestedMsaaSamples:r,savedMsaaSamples:n,effectiveMsaaSamples:i,msaaLabel:rn(i),avgRenderMs:Number(T.avgRenderMs.toFixed(3)),avgFrameMs:Number(T.avgFrameMs.toFixed(3)),fps:Number(T.fps.toFixed(2)),resolution:t,viewport:{width:E.width,height:E.height,left:E.left,top:E.top,aspect:Number(E.aspect.toFixed(3)),clamped:E.isClamped},rendererInfo:{calls:F.info.render.calls,triangles:F.info.render.triangles,lines:F.info.render.lines,points:F.info.render.points,frame:F.info.render.frame,geometries:F.info.memory.geometries,textures:F.info.memory.textures},jsHeap:er(),internals:{outerScenePaused:xr(),effectiveRenderPath:Or()?`renderer`:`composer`,composerActive:Pn,outerCanvasVisible:!Fn.hidden,screenContentMode:hr,screenAppReadyForProjection:hi(),renderRequested:G.renderRequested,projectionInvalidated:G.projectionInvalidated,hasActiveSceneAnimation:Rr(performance.now()),hasSkyAnimation:!Le&&jr(),transitionSettleRemainingMs:Math.max(0,Number((G.transitionSettleUntil-performance.now()).toFixed(3))),walkVelocitySq:Number(a.toFixed(8)),parallaxVelocitySq:Number(o.toFixed(8)),parallaxDeltaSq:Number(s.toFixed(8)),screenOpacityDelta:Number(c.toFixed(8)),screenProjectionAgeMs:l==null?null:Number(l.toFixed(3))}}}function nr(e=2e4){return new Promise((t,n)=>{let r=performance.now();function i(){if(!Ie){t(tr());return}if(performance.now()-r>=e){n(Error(`Timed out waiting for outer scene readiness`));return}window.requestAnimationFrame(i)}i()})}function rr(e=3e4){return new Promise((t,n)=>{let r=performance.now();function i(){if(!Ie&&!y&&_){t(tr());return}if(performance.now()-r>=e){n(Error(`Timed out waiting for benchmark-stable scene state`));return}window.requestAnimationFrame(i)}i()})}function ir(e=2e4){return new Promise((t,n)=>{let r=performance.now();function i(){if(typeof tt==`function`){t(!0);return}if(performance.now()-r>=e){n(Error(`Timed out waiting for loader start prompt`));return}window.requestAnimationFrame(i)}i()})}function ar(e=3e3){return new Promise((t,n)=>{let r=Math.max(250,Number(e)||3e3),i=performance.now(),a=[],o=[],s=[],c=0;function l(){let e=tr(),n=e=>e.length?Number((e.reduce((e,t)=>e+t,0)/e.length).toFixed(3)):0,i=o.map(e=>e>0?1e3/e:0);t({...e,sampleDurationMs:r,sampleCount:a.length,windowAvgRenderMs:n(a),windowAvgFrameMs:n(o),windowAvgFps:n(i),windowMinFps:i.length?Number(Math.min(...i).toFixed(3)):0,windowMaxFps:i.length?Number(Math.max(...i).toFixed(3)):0,windowAvgHeapMB:n(s)})}function u(e){let t=tr();if(a.push(T.lastRenderMs||t.avgRenderMs),t.jsHeap?.usedMB!=null&&s.push(t.jsHeap.usedMB),c>0){let t=e-c;t>0&&t<250&&o.push(t)}if(c=e,performance.now()-i>=r){l();return}window.requestAnimationFrame(u)}nr().then(()=>u()).catch(n)})}window.__outerWebsiteDebug={getMetrics:tr,getWinXPRuntimeState:()=>({focusState:ye(),presentationState:he(),presentationProfile:ge()}),waitForReady:nr,waitForBenchmarkStable:rr,waitForStartPrompt:ir,getStartupTimeline:Ht,clearStartupTimeline:Ut,getQualityProfile:()=>({mode:`high`,selectionSource:`fixed`}),startExperience:()=>typeof tt==`function`?(tt(),!0):!1,sampleMetrics:ar,compareSkyOnlyRedraw:Yn};var or=new re(P,F.domElement);or.enabled=!1,or.target.copy(k.intro.startTarget);var sr=new n,cr=new se,lr=new ae,ur=new c,dr=new u;ur.setTranscoderPath(`/basis/`),ur.detectSupport(F),dr.setDecoderPath(`/draco/`),dr.preload(),cr.setKTX2Loader(ur),cr.setDRACOLoader(dr);var fr=null,z=null,B=null,pr=null,mr=null,hr=`live`,gr=[],_r=null,V=null,H={runtimeEnabled:!1,current:0,target:0,pointerEvents:`none`},U={quad:null,lastUpdateAt:0,lastMissStartedAt:0},W={currentGain:1,fullVolumeDistance:0,minimumVolumeDistance:0,lastSyncedVolume:null},G={frameId:null,renderRequested:!0,projectionInvalidated:!0,skyFrameTimeoutId:null,transitionSettleUntil:0},K={mode:`idle`,startedAt:0,duration:0,easingName:`easeInOutCubic`},vr=new De,yr=new Ee(ua),br=null;document.addEventListener(`visibilitychange`,()=>{if(document.hidden)br=performance.now(),yr.suspend(!0),Yi();else{let e=performance.now(),t=br===null?0:e-br;br=null,vr.shift(t,e),K.mode!==`idle`&&(K.startedAt+=Math.min(t,Math.max(0,e-K.startedAt))),Fe?.(t,e),qi.lastFrameNow=performance.now(),G.projectionInvalidated=!0,yr.suspend(!1)}});function xr(){return document.hidden||v&&!y}function Sr(e,t,n,r=performance.now()){K.mode=e,K.startedAt=r,K.duration=Math.max(1,t),K.easingName=n}function Cr(){K.mode=`idle`,K.startedAt=0,K.duration=0,K.easingName=`easeInOutCubic`}function wr(){return!1}function Tr(){let e=wr();Fn.hidden!==e&&(Fn.hidden=e,F.domElement.style.display=`block`,F.domElement.style.visibility=e?`hidden`:`visible`,F.domElement.style.opacity=e?`0`:`1`,F.domElement.style.pointerEvents=e?`none`:`auto`)}function Er(){let e={focused:v,animating:y,settled:xr()};Qn(),Tr(),Li(),_e(e)}_e(be);function Dr(e){v!==e&&(v=e,e&&Yi(),Oi(),Qn(),Tr(),Li(),q())}function Or(){return!Pn}function kr(e,t){if(!e||!t)return;let n=t.getBoundingClientRect(),r=et?.getBoundingClientRect()??n,i=e.offsetWidth||e.getBoundingClientRect().width||0,a=f.clamp(r.right-i,it,window.innerWidth-it-i);e.style.left=`${a}px`,e.style.top=`${n.bottom+rt}px`}function Ar(){kr(b,Ge),kr(x,Ze)}function jr(){return!!V&&!xr()}function Mr(e,t=It()){return e.lengthSq()<=t*t}function Nr(e,t=gt){return e.lengthSq()<=t*t}function Pr(){return H.runtimeEnabled&&Math.abs(H.current-H.target)>vt}function Fr(){G.skyFrameTimeoutId!==null&&(window.clearTimeout(G.skyFrameTimeoutId),G.skyFrameTimeoutId=null)}function q(){G.renderRequested=!0,Fr(),Tr(),yr.invalidate(G.projectionInvalidated?`projection`:`scene`)}function Ir(e=Nt()){yr.decorate(Math.max(0,e))}function Lr(){G.projectionInvalidated=!0,q()}function Rr(e){return Ne||document.hidden?!1:!!(Ie&&!Le||y||Rn()||e<G.transitionSettleUntil||Q.w||Q.a||Q.s||Q.d||Q[` `]||Q.control||$.active||$.velocity.lengthSq()>1e-6||X.velocity.lengthSq()>1e-6||!Mr(X.currentMouse)||X.currentMouse.distanceToSquared(X.targetMouse)>1e-6||Pr())}function zr(e=ut){G.transitionSettleUntil=Math.max(G.transitionSettleUntil,performance.now()+e),q()}function Br(e=performance.now(),t=!1,n=!1){return G.projectionInvalidated?!0:t?!1:v?!!(y||Ie):y||Ie||n||G.renderRequested?!0:e-U.lastUpdateAt>=ft}function Vr(e=performance.now(),{skyOnly:t=!1,sceneAnimationActive:n=!1,frameScale:r=1}={}){let i=performance.now(),a=Rn();Bn(e),Pn&&!Hn(e)&&Qn({forceRebuild:!0}),ri();let o=Rn();(a||o)&&!y&&Li(),t||Ci(),!Pn||!I?F.render(j,P):t&&Kn()?qn():Jn(),t||ca(r),Br(e,t,n)&&(Xr(),G.projectionInvalidated=!1,U.lastUpdateAt=e),Vi(performance.now()-i,e)}function Hr(e){let t=f.clamp(e,0,1);Math.abs(H.current-t)<.001||(H.current=t,B?.setVisualState({brightness:t}),Tr())}function Ur(e){H.pointerEvents!==e&&(H.pointerEvents=e,B?.setVisualState({pointerEvents:e}))}function Wr(e,t){if(an.cameraSpacePoint.copy(e).applyMatrix4(P.matrixWorldInverse).z>=-.001)return null;let n=an.projectedPoint.copy(e).project(P);return!Number.isFinite(n.x)||!Number.isFinite(n.y)?null:(t.x=E.left+(n.x*.5+.5)*E.width,t.y=E.top+(-n.y*.5+.5)*E.height,t)}function Gr(){if(!z)return null;z.updateMatrixWorld(!0);for(let e=0;e<an.localCorners.length;e+=1)if(!Wr(an.worldCorners[e].copy(an.localCorners[e]).applyMatrix4(z.matrixWorld),an.quad[e]))return null;return an.quad}function Kr(e){return e.map(e=>({x:e.x,y:e.y}))}function qr(e,t){for(let n=0;n<t.length;n+=1)e[n].x=t[n].x,e[n].y=t[n].y}function Jr(e,t,n=mt){if(!e||!t||e.length!==t.length)return!1;for(let r=0;r<e.length;r+=1)if(Math.abs(e[r].x-t[r].x)>n||Math.abs(e[r].y-t[r].y)>n)return!1;return!0}function Yr(){if(U.quad&&B?.isMounted?.()){U.lastMissStartedAt=0,B.setVisualState({pointerEvents:`none`,visible:!0}),Tr();return}U.quad=null,U.lastMissStartedAt=0,B?.setVisualState({pointerEvents:`none`,visible:!1}),Tr()}function Xr(){if(!z){Yr();return}let e=performance.now(),t=Gr();if(!t){if(U.quad&&(U.lastMissStartedAt===0&&(U.lastMissStartedAt=e),e-U.lastMissStartedAt<Pt())){B?.setVisualState({visible:!0}),Tr();return}Yr();return}if(U.lastMissStartedAt=0,!U.quad)U.quad=Kr(t);else if(!Jr(U.quad,t))qr(U.quad,t);else{B&&B.setVisualState({visible:!0}),Tr();return}B&&(B.syncProjection(U.quad),B.setVisualState({visible:!0})),Tr()}function Zr(e,t){if(!U.quad||U.quad.length!==4)return!1;let n=0;for(let r=0;r<U.quad.length;r+=1){let i=U.quad[r],a=U.quad[(r+1)%U.quad.length],o=(a.x-i.x)*(t-i.y)-(a.y-i.y)*(e-i.x);if(Math.abs(o)<=.5)continue;let s=Math.sign(o);if(n===0){n=s;continue}if(n!==s)return!1}return!0}function Qr(e){qt=!1,e.traverse(e=>{e.isMesh&&(e.name.toLowerCase().includes(`screen_plane`)||e.name.toLowerCase().includes(`hitbox`)||(Array.isArray(e.material)?e.material:[e.material]).forEach(e=>{if(!e||Kt.includes(e))return;Kt.push(e);let t=e.onBeforeCompile,n=Object.prototype.hasOwnProperty.call(e,`customProgramCacheKey`),r=e.customProgramCacheKey;e.userData.outerWebsiteShockwaveMaterial={originalOnBeforeCompile:t,hadOwnCustomProgramCacheKey:n,originalCustomProgramCacheKey:r},e.onBeforeCompile=(n,r)=>{typeof t==`function`&&t.call(e,n,r),e.userData.shader=n,n.uniforms.uShockwaveRadius={value:0},n.uniforms.uShockwaveCenter={value:Jt},n.uniforms.uEdgeIntensity={value:k.loader.shockwave.edgeIntensity},n.vertexShader=`
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
          float edgeWidth = ${k.loader.shockwave.edgeWidth.toFixed(2)};
          if (uShockwaveRadius > 0.01 && dist > uShockwaveRadius - edgeWidth) {
             float glow = (dist - (uShockwaveRadius - edgeWidth)) / edgeWidth;
             gl_FragColor.rgb += vec3(glow * 0.2, glow * 0.8, glow * 1.5) * uEdgeIntensity;
          }
          `)},e.customProgramCacheKey=()=>`${typeof r==`function`?r.call(e):``}|${xt}`,e.needsUpdate=!0}))})}var $r=null;function ei(t){if($r||qt||!t)return $r;let n=new de;n.environment=j.environment,n.environmentIntensity=j.environmentIntensity;let r=[];t.traverse(e=>{if(!e.isMesh)return;let t=Array.isArray(e.material)?e.material:[e.material];if(!t.some(e=>Kt.includes(e)))return;let i=t.map(e=>{let t=e.clone();return t.userData={},r.push(t),t}),a=new te(e.geometry,Array.isArray(e.material)?i:i[0]);a.matrixAutoUpdate=!1,a.matrix.copy(e.matrixWorld),a.frustumCulled=!1,n.add(a)}),n.updateMatrixWorld(!0);let i=new e(1,1,{type:m});return $r=(async()=>{w(`shockwave.programWarmup.start`,{materials:r.length});let e=F.getRenderTarget();try{if(F.setRenderTarget(i),await F.compileAsync(n,P),qt)return;F.setRenderTarget(i),F.render(n,P),w(`shockwave.programWarmup.end`)}catch(e){console.warn(`Shockwave program warmup skipped.`,e)}finally{F.setRenderTarget(e)}})(),$r.dispose=()=>{i.dispose(),r.forEach(e=>e.dispose())},$r}function ti(){if(qt)return;qt=!0,Kt.forEach(e=>{let t=e?.userData?.outerWebsiteShockwaveMaterial;t&&(e.onBeforeCompile=t.originalOnBeforeCompile,t.hadOwnCustomProgramCacheKey?e.customProgramCacheKey=t.originalCustomProgramCacheKey:delete e.customProgramCacheKey,delete e.userData.shader,delete e.userData.outerWebsiteShockwaveMaterial,e.needsUpdate=!0)}),q();let e=$r;e?.dispose&&window.setTimeout(()=>e.dispose(),2e3)}function ni(e,t={}){return e.wrapS=a,e.wrapT=oe,new o({transparent:!0,uniforms:{tSky:{value:e},uExposure:{value:M.exposure},uSaturation:{value:M.saturation},uHighlights:{value:M.highlights},uWashout:{value:t.washout??M.washout},uLift:{value:t.lift??M.lift},uGamma:{value:t.gamma??M.gamma},uColorBalance:{value:M.colorBalance.clone()},uRepeat:{value:new i(t.repeatX??M.repeatX,t.repeatY??M.repeatY)},uOffsetY:{value:t.offsetY??M.offsetY},uSkyOpacity:{value:0}},vertexShader:`varying vec2 vUv; void main() { vUv = uv; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }`,fragmentShader:`
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
    `,side:0,toneMapped:!1,depthWrite:!1})}function ri(){let e=V?.material?.uniforms;if(!e)return;let t=Math.max(1e-4,N.bloom.strength??1e-4),n=f.clamp(R.currentStrength/t,0,1),r=M.bloomOffCompensation;e.uExposure.value=f.lerp(r.exposure,M.exposure,n),e.uSaturation.value=f.lerp(r.saturation,M.saturation,n),e.uHighlights.value=f.lerp(r.highlights,M.highlights,n),e.uWashout.value=f.lerp(r.washout,M.washout,n),e.uLift.value=f.lerp(r.lift,M.lift,n),e.uGamma.value=f.lerp(r.gamma,M.gamma,n),e.uColorBalance.value.lerpVectors(r.colorBalance,M.colorBalance,n)}var ii={computer:{path:g.lightMapPaths.computer}},ai={room:{path:g.bakedSurfacePaths.room},table:{path:g.bakedSurfacePaths.table},chairBack:{path:g.bakedSurfacePaths.chairBack},chairLeft:{path:g.bakedSurfacePaths.chairLeft},chairRight:{path:g.bakedSurfacePaths.chairRight}},oi=new Set([`room`,`table`]),si={computer:{envMapIntensity:10.95,roughnessMin:.8}};function ci(e){e.map&&(e.map.colorSpace=t),e.emissiveMap&&(e.emissiveMap.colorSpace=t)}function li(e){return e.includes(`room`)||e.includes(`wall`)||e.includes(`floor`)||e.includes(`ceiling`)?`room`:(e.includes(`table`)||e.includes(`desk`))&&!e.includes(`portable`)?`table`:e.includes(`chair_back`)||e.includes(`chair`)&&e.includes(`back`)?`chairBack`:e.includes(`chair_left`)||e.includes(`chair`)&&e.includes(`left`)?`chairLeft`:e.includes(`chair_right`)||e.includes(`chair`)&&e.includes(`right`)?`chairRight`:null}function ui(e){return e.includes(`computer`)||e.includes(`pc`)||e.includes(`monitor`)||e.includes(`portable`)||e.includes(`bm86`)?`computer`:null}function di(e){return oi.has(e)}async function fi(e,t={}){let n=await sr.loadAsync(e);return n.flipY=t.flipY??!1,t.colorSpace&&(n.colorSpace=t.colorSpace),n}async function pi(e,t={}){if(e.toLowerCase().endsWith(`.ktx2`)){let n=await ur.loadAsync(e);return t.colorSpace&&(n.colorSpace=t.colorSpace),n}return fi(e,t)}function mi(e){B?.setVisualState({transition:e})}function hi(){return!!B?.isMounted()}function gi(e=`preload`){return pr?(w(`screenOverlay.import.reuse`,{reason:e}),pr):(w(`screenOverlay.import.start`,{reason:e}),pr=Se(()=>import(`./outer-screen-overlay-BpJLfdd7.js`).then(t=>(w(`screenOverlay.import.end`,{reason:e}),t),t=>{throw pr=null,w(`screenOverlay.import.error`,{reason:e,message:t?.message??String(t)}),t}),__vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11,12])),pr)}async function _i({standby:e=!1}={}){let t=performance.now();return w(`screenOverlay.ensure.start`,{hasOverlay:!!B,hasPendingModulePromise:!!pr,hasPendingOverlayPromise:!!mr}),B?(w(`screenOverlay.ensure.end`,{branch:`cached`,elapsedMs:performance.now()-t}),B):(mr||=gi(`ensure`).then(({createScreenHtmlOverlay:t})=>(B=t({width:O.width,height:O.height,standby:e}),W.lastSyncedVolume=null,B.setVisualState({opacity:H.current,brightness:1,pointerEvents:`none`,transition:``,visible:!1}),Tr(),wi(J.getState().isMuted),Ti(J.getState().volume),Lr(),B)),mr.then(e=>(w(`screenOverlay.ensure.end`,{branch:`promise`,elapsedMs:performance.now()-t,mounted:e?.isMounted?.()??!1}),e)))}function vi(e){if(!e||z)return;z=new ue,j.add(z),e.updateWorldMatrix(!0,!1),e.geometry.computeBoundingBox();let t=e.geometry.boundingBox,n=new p;t.getCenter(n);let r=n.applyMatrix4(e.matrixWorld);z.position.copy(r),z.rotation.set(O.rotationX,O.rotationY,O.rotationZ,`YXZ`),z.translateZ(O.offsetZ),z.translateX(O.offsetX),z.translateY(O.offsetY);let i=new p;t.getSize(i);let a=[i.x,i.y,i.z].sort((e,t)=>t-e),o=a[0]/O.width*O.scaleMultiplier*O.scaleX,s=a[1]/O.height*O.scaleMultiplier*O.scaleY;z.scale.set(o,s,1),z.updateMatrixWorld(!0);let c=new p(0,0,1).applyQuaternion(z.quaternion).normalize();Wt.copy(z.position).addScaledVector(c,k.focus.distance),Wt.y+=k.focus.yOffset,Gt.copy(z.position),Gt.x+=k.focus.targetOffsetX,Gt.y+=k.focus.targetOffsetY,Gt.z+=k.focus.targetOffsetZ,W.fullVolumeDistance=Wt.distanceTo(z.position),W.minimumVolumeDistance=Math.max(W.fullVolumeDistance+1e-4,Sn.distanceTo(z.position),k.intro.startPos.distanceTo(z.position),k.unfocus.endPos.distanceTo(z.position)),W.currentGain=bi(P.position.distanceTo(z.position)),Lr()}function yi(e){return f.clamp(e,0,1)}function bi(e){let t=W.fullVolumeDistance,n=Math.max(W.minimumVolumeDistance,t+1e-4);if(!(t>0)||!(n>t)||e<=t)return 1;if(e>=n)return bn.minVolumeRatio;let r=(e-t)/(n-t),i=r*r*(3-2*r);return f.lerp(1,bn.minVolumeRatio,i)}function xi(e){hr=`live`}function Si(e){return yi(e*W.currentGain)}function Ci(){if(!z||!J||!hi())return;let e=bi(P.position.distanceTo(z.position));Math.abs(e-W.currentGain)<.001||(W.currentGain=e,Ti(J.getState().volume))}function wi(e){if(B?.syncAudioControl){B.syncAudioControl({type:ve.SET_MUTED,muted:!!e});return}let t=window.__outerWebsiteAudioRuntime;t&&t.setMuted(!!e)}function Ti(e){let t=Si(e);if(W.lastSyncedVolume!==null&&Math.abs(W.lastSyncedVolume-t)<bn.volumeSyncEpsilon)return;if(W.lastSyncedVolume=t,B?.syncAudioControl){B.syncAudioControl({type:ve.SET_VOLUME,volume:t});return}let n=window.__outerWebsiteAudioRuntime;n&&n.setVolume(t)}function Ei(){let e=(Array.isArray(yn.sources)?yn.sources:[yn.src]).filter(Boolean),t=new Audio;t.__outerWebsiteIgnoreGlobalAudio=!0,t.preload=`none`,t.loop=yn.loop,t.volume=yn.initialVolume,t.playsInline=!0;let n=!1,r=!0,i=0,a=null,o=0,s=null,c=0,l=null,u=null,d={hasSource:e.length>0,hasError:!1,isMuted:!1,isPlaying:!1,needsUserGesture:!1,unlockArmed:!1,volume:yn.initialVolume,wantsToPlay:yn.defaultWantsToPlay},ee=()=>e[o]||``,te=()=>{let e=ee();return e?(t.getAttribute(`src`)!==e&&(t.src=e),!0):(t.removeAttribute(`src`),!1)},ne=()=>o>=e.length-1?!1:(o+=1,n=!1,te()),p=()=>{typeof l==`function`&&l({...d,currentSource:ee()})},re=()=>{a!==null&&(window.clearTimeout(a),a=null)},m=()=>{i=0,re()},ie=(e,n=240)=>!d.wantsToPlay||d.needsUserGesture?!1:a===null?i>=12?!1:(a=window.setTimeout(()=>{a=null,i+=1,t.readyState===0&&!d.hasError&&t.load(),he(`${e}-retry-${i}`)},n),!0):!0,ae=({restoreVolume:e=!1}={})=>{c+=1,s!==null&&(window.cancelAnimationFrame(s),s=null),e&&(t.volume=yi(d.volume))},oe=e=>{if(t.paused||t.muted||r||t.volume<=.001){e();return}ae();let n=c,i=t.volume,a=performance.now(),o=r=>{if(n!==c)return;let l=Math.min((r-a)/at,1);if(t.volume=f.lerp(i,0,l),l<1){s=window.requestAnimationFrame(o);return}s=null,e()};s=window.requestAnimationFrame(o)},h=(e=!1)=>{t.muted=e||d.isMuted||r,t.volume=yi(d.volume)},se=async()=>{if(!d.hasSource||n)return!1;h(!0);try{return await t.play(),m(),n=!0,d.hasError=!1,d.isPlaying=!0,d.needsUserGesture=!1,pe(),p(),!0}catch{return h(),ie(`prime-muted-autoplay`),!1}},ce=()=>!n||t.paused?!1:(ae({restoreVolume:!0}),t.currentTime=0,h(),m(),d.hasError=!1,d.isPlaying=!0,d.needsUserGesture=!1,pe(),p(),!0),le=()=>{if(!n||t.paused)return!1;t.pause();try{t.currentTime=0}catch{return!1}return d.isPlaying=!1,!0},ue=(e=`timeline-sync`)=>{let i=performance.now();if(w(`audio.releaseQueuedPlayback.start`,{reason:e,holdAudibleStart:r,wantsToPlay:d.wantsToPlay,isPlaying:d.isPlaying,hasPrimedMutedAutoplay:n,paused:t.paused}),!r){d.wantsToPlay&&!d.isPlaying?he(e):(h(),p()),w(`audio.releaseQueuedPlayback.end`,{reason:e,branch:`already-released`,elapsedMs:performance.now()-i});return}if(r=!1,d.needsUserGesture=!1,d.hasError=!1,m(),pe(),h(),!d.wantsToPlay){p(),w(`audio.releaseQueuedPlayback.end`,{reason:e,branch:`not-wanted`,elapsedMs:performance.now()-i});return}let a=le();he(a?`${e}-restart-from-zero`:e),w(`audio.releaseQueuedPlayback.end`,{reason:e,branch:a?`primed-restart`:`play`,elapsedMs:performance.now()-i})},de=()=>{window.setTimeout(()=>{t.currentTime<.25&&(t.currentTime=0),h(),p()},80)},fe=async()=>{h(!0);try{return await t.play(),m(),d.hasError=!1,d.isPlaying=!0,d.needsUserGesture=!1,pe(),de(),p(),!0}catch{return h(),!1}},pe=()=>{!d.unlockArmed||!u||([`pointerdown`,`keydown`,`touchstart`].forEach(e=>{window.removeEventListener(e,u,!0)}),u=null,d.unlockArmed=!1)},me=()=>{d.unlockArmed||=(u=()=>{pe(),d.wantsToPlay&&he(`user-gesture`)},[`pointerdown`,`keydown`,`touchstart`].forEach(e=>{window.addEventListener(e,u,!0)}),!0)},he=async(e=`manual`)=>{if(d.wantsToPlay=!0,ae({restoreVolume:!0}),!d.hasSource)return p(),!1;if(ce())return!0;d.hasError&&=(t.load(),!1),h();try{return await t.play(),m(),d.hasError=!1,d.isPlaying=!0,d.needsUserGesture=!1,pe(),p(),!0}catch(n){return d.isPlaying=!t.paused,n?.name===`NotAllowedError`?await fe()||(d.hasError=!1,ie(`autoplay-blocked`)||(d.needsUserGesture=!0,me())):n?.name===`AbortError`||n?.name===`NotSupportedError`?(d.hasError=!1,ie(n.name===`AbortError`?`media-aborted`:`media-not-ready`)||(d.hasError=!0)):(d.hasError=!0,console.warn(`[BGM] Unable to play audio (${e}).`,n)),p(),!1}},ge=()=>{d.wantsToPlay=!1,d.needsUserGesture=!1,m(),pe(),oe(()=>{t.pause(),ae({restoreVolume:!0}),d.isPlaying=!1,p()})},_e=()=>{if(d.isPlaying||d.wantsToPlay){ge();return}he(`toggle`)},ve=e=>{let t=()=>{d.isMuted=e,h(),wi(d.isMuted),p()};if(e!==d.isMuted){if(e){oe(t);return}ae({restoreVolume:!0}),t()}};return t.addEventListener(`play`,()=>{d.isPlaying=!0,p()}),t.addEventListener(`pause`,()=>{d.isPlaying=!1,p()}),t.addEventListener(`ended`,()=>{d.isPlaying=!1,p()}),t.addEventListener(`canplay`,()=>{d.wantsToPlay&&!d.isPlaying&&!d.needsUserGesture&&ie(`canplay`,0)}),t.addEventListener(`error`,()=>{let e=t.error?.code??null;if(e===1||e===null){ie(`media-load-aborted`);return}if(e===4){if(ne()){m(),d.hasError=!1,d.isPlaying=!1,t.load(),d.wantsToPlay&&(r?se():he(`media-source-fallback`)),p();return}if(ie(`media-source-error`,320))return}d.hasError=!0,d.isPlaying=!1,console.warn(`[BGM] Audio source could not be loaded: ${ee()}`),p()}),h(),d.hasSource&&te(),{getState(){return{...d,currentSource:ee()}},pause:ge,play:he,releaseQueuedPlayback:ue,setVolume:e=>{ae(),d.volume=yi(e),d.volume>0&&d.isMuted&&(d.isMuted=!1),h(),Ti(d.volume),wi(d.isMuted),p()},setOnChange(e){l=e,p()},toggleMute:()=>{ve(!d.isMuted)},togglePlay:_e}}var J=Ei(),Y={soundOn:`<svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#ff7b00" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"/><path d="M15.54 8.46a5 5 0 0 1 0 7.07"/><path d="M19.07 4.93a10 10 0 0 1 0 14.14"/></svg>`,soundOff:`<svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#ff7b00" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"/><line x1="23" y1="9" x2="17" y2="15"/><line x1="17" y1="9" x2="23" y2="15"/></svg>`,play:`<svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#ff7b00" stroke-width="2.3" stroke-linecap="round" stroke-linejoin="round"><polygon points="8 5 19 12 8 19 8 5"/></svg>`,pause:`<svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#ff7b00" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><line x1="9" y1="5" x2="9" y2="19"/><line x1="15" y1="5" x2="15" y2="19"/></svg>`,volumeLow:`<svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#ff7b00" stroke-width="2.3" stroke-linecap="round" stroke-linejoin="round"><polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"/><path d="M15 12a3 3 0 0 0 0-0.01"/></svg>`,volumeMid:`<svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#ff7b00" stroke-width="2.3" stroke-linecap="round" stroke-linejoin="round"><polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"/><path d="M15.5 9.5a4 4 0 0 1 0 5"/></svg>`,volumeHigh:`<svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#ff7b00" stroke-width="2.3" stroke-linecap="round" stroke-linejoin="round"><polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"/><path d="M15.5 8.5a5.5 5.5 0 0 1 0 7"/><path d="M18.8 6a9 9 0 0 1 0 12"/></svg>`,camUnfocused:`<svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#ff7b00" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z"/><circle cx="12" cy="13" r="4"/></svg>`,camFocused:`<svg width="13" height="13" viewBox="0 0 24 24" fill="#ff7b00" stroke="#ff7b00" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z"/><circle cx="12" cy="13" r="4"/></svg>`,fx:`<svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#ff7b00" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 7h8"/><path d="M4 17h14"/><path d="M14 7h6"/><path d="M10 17h4"/><circle cx="12" cy="7" r="2"/><circle cx="8" cy="17" r="2"/></svg>`},Di={wasd:`<svg width="46" height="30" viewBox="0 0 46 30" fill="none" xmlns="http://www.w3.org/2000/svg">
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
  </svg>`};function Oi(){ze&&(v?ze.innerHTML=Y.camFocused:ze.innerHTML=Y.camUnfocused)}function ki(e){return e>=.75?Y.volumeHigh:e>=.4?Y.volumeMid:Y.volumeLow}function Ai(e){return e.isMuted?`Muted`:`${Math.round(e.volume*100)}%`}function ji(){Qe!==null&&(window.clearTimeout(Qe),Qe=null)}function Mi(){ji(),S&&(Qe=window.setTimeout(()=>{Ni(!1)},nt))}function Ni(e){e&&$e&&Ri(!1),S=e,b&&b.classList.toggle(`is-open`,S),S?(kr(b,Ge),Mi()):ji()}function Pi(){let e=nn(Vn(),0),t=Un(e);return{bloomEnabled:zn(),bloomLabel:zn()?`On`:`Off`,requestedMsaaSamples:e,effectiveMsaaSamples:t,msaaEnabled:t>0,msaaLabel:rn(t)}}function Fi(){let e=Pi();return`Bloom ${e.bloomLabel} | MSAA ${e.msaaLabel}`}function Ii(e,t,n,r=`On`,i=`Off`){e&&(e.classList.toggle(`is-active`,n),e.innerHTML=`<span>${t}</span><strong>${n?r:i}</strong>`)}function Li(){let e=Pi();if(Ke&&(Ke.classList.toggle(`is-active`,$e),Ke.title=Fi()),x&&(x.classList.toggle(`is-open`,$e),$e&&kr(x,Ze)),qe&&(qe.textContent=g.label),Ii(Ye,`Bloom`,e.bloomEnabled,`On`,`Off`),Ii(Xe,`MSAA`,e.msaaEnabled,e.msaaLabel,`Off`),Ye&&(Ye.title=`Toggle Bloom`),Xe&&(Xe.title=`Cycle MSAA: 4x, 2x, Off`),Je){let{width:e,height:t}=$n(),n=T.avgRenderMs>0?T.avgRenderMs.toFixed(1):`0.0`,r=performance.now()-T.lastFrameNow>500?0:Math.round(T.fps);Je.textContent=`avg: ${n} ms    fps: ${r}    resolution: ${e}x${t}`}}function Ri(e){e&&S&&Ni(!1),$e=e,Li(),q()}function zi(e){let t=nn(D.msaaSamples,0);D.bloomEnabled=!!e.bloomEnabled,D.msaaSamples=nn(e.msaaSamples,D.msaaSamples),Qn({forceRebuild:nn(D.msaaSamples,0)!==t}),Li(),zr(600),q()}function Bi(e){if(e===`msaaSamples`){let e=nn(D.msaaSamples,0),t=St.indexOf(e),n=St[t===-1?0:(t+1)%St.length];zi({...D,msaaSamples:n});return}zi({...D,[e]:!D[e]})}function Vi(e,t=performance.now()){if(T.lastRenderMs=e,T.avgRenderMs=T.avgRenderMs===0?e:f.lerp(T.avgRenderMs,e,.18),T.lastFrameNow>0){let e=t-T.lastFrameNow;e>0&&e<250&&(T.avgFrameMs=T.avgFrameMs===0?e:f.lerp(T.avgFrameMs,e,.2),T.fps=T.avgFrameMs>0?1e3/T.avgFrameMs:0)}T.lastFrameNow=t,!(y||t-T.lastUiUpdate<250)&&(T.lastUiUpdate=t,Li())}function Hi(e=J.getState()){Be&&(Be.innerHTML=e.isMuted?Y.soundOff:Y.soundOn,Be.title=e.isMuted?`Unmute all audio`:`Mute all audio`),Ve&&(Ve.innerHTML=e.isPlaying||e.wantsToPlay?Y.pause:Y.play,e.hasError?Ve.title=`BGM unavailable (${e.currentSource||`no source`})`:e.needsUserGesture&&!e.isPlaying?Ve.title=`Click to start music`:e.wantsToPlay&&!e.isPlaying?Ve.title=`Music queued to start`:Ve.title=e.isPlaying?`Pause music`:`Play music`),He&&(He.innerHTML=ki(e.volume),He.title=`Adjust volume (${Math.round(e.volume*100)}%)`),Ue&&(Ue.value=`${Math.round(e.volume*100)}`),We&&(We.textContent=Ai(e))}J.setOnChange(Hi);function Ui(){let e=document.createElement(`style`);e.textContent=`
    :root {
      --hud-glass-bg: rgba(80, 80, 80, 0.35);
      --hud-glass-border: rgba(255, 255, 255, 0.08);
      --hud-glass-shadow: none;
      --hud-glass-blur: blur(20px);
      --hud-font-main: ${dn};
      --hud-font-accent: ${fn};
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
      opacity: 0; transition: opacity ${vn.fadeDuration}s ease;
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
      grid-template-columns: repeat(2, minmax(0, 1fr));
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
      opacity: 0; transition: opacity ${vn.fadeDuration}s ease;
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
      opacity: 0; transition: opacity ${vn.fadeDuration}s ease;
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
  `,document.head.appendChild(e);let t=document.createElement(`div`);t.id=`ui-tl`,et=t;let n=document.createElement(`span`);n.id=`ui-name`,n.textContent=`Hanqi Zhao`,Ve=document.createElement(`button`),Ve.className=`ui-btn`,Ve.addEventListener(`click`,()=>{J.togglePlay()});let r=document.createElement(`div`);Ge=r,r.className=`ui-volume-control`,He=document.createElement(`button`),He.className=`ui-btn`,He.addEventListener(`click`,()=>{Ni(!S)}),b=document.createElement(`div`),b.className=`ui-volume-panel`;let i=document.createElement(`div`);i.className=`ui-volume-title`,i.innerHTML=`<span>Volume</span>`,We=document.createElement(`span`),We.className=`ui-volume-value`,i.appendChild(We),Ue=document.createElement(`input`),Ue.className=`ui-volume-slider`,Ue.type=`range`,Ue.min=`0`,Ue.max=`100`,Ue.step=`1`,Ue.addEventListener(`input`,e=>{J.setVolume(Number(e.target.value)/100),Mi()}),b.appendChild(i),b.appendChild(Ue),r.appendChild(He);let a=document.createElement(`div`);Ze=a,a.className=`ui-postfx-control`,Ke=document.createElement(`button`),Ke.className=`ui-btn`,Ke.innerHTML=Y.fx,Ke.addEventListener(`click`,()=>{Ri(!$e)}),x=document.createElement(`div`),x.className=`ui-postfx-panel`;let o=document.createElement(`div`);o.className=`ui-postfx-header`,o.innerHTML=`<span>Render FX</span>`,qe=document.createElement(`span`),qe.className=`ui-postfx-summary`,qe.textContent=g.label,o.appendChild(qe);let s=document.createElement(`div`);s.className=`ui-postfx-toggles`,Ye=document.createElement(`button`),Ye.className=`ui-postfx-toggle`,Ye.type=`button`,Ye.addEventListener(`click`,()=>{Bi(`bloomEnabled`)}),Xe=document.createElement(`button`),Xe.className=`ui-postfx-toggle`,Xe.type=`button`,Xe.addEventListener(`click`,()=>{Bi(`msaaSamples`)}),s.appendChild(Ye),s.appendChild(Xe),x.appendChild(o),x.appendChild(s),a.appendChild(Ke),Be=document.createElement(`button`),Be.className=`ui-btn`,Be.addEventListener(`click`,()=>{J.toggleMute()}),ze=document.createElement(`button`),ze.className=`ui-btn`,ze.innerHTML=Y.camUnfocused,ze.title=`Toggle focus`,ze.addEventListener(`click`,()=>{_&&(v?aa():ia())}),t.appendChild(n),t.appendChild(ze),t.appendChild(Ve),t.appendChild(Be),t.appendChild(r),t.appendChild(a),document.body.appendChild(t),document.body.appendChild(b),document.body.appendChild(x),Ar(),document.addEventListener(`pointerdown`,e=>{let t=Ge?.contains(e.target)||b?.contains(e.target),n=Ze?.contains(e.target)||x?.contains(e.target);S&&t?Mi():S&&Ni(!1),$e&&!n&&Ri(!1)}),document.addEventListener(`pointermove`,()=>{S&&Mi()},{passive:!0}),document.addEventListener(`wheel`,()=>{S&&Mi()},{passive:!0}),document.addEventListener(`keydown`,e=>{if(e.key===`Escape`){Ni(!1),Ri(!1);return}S&&Mi()}),Hi(),Li();let c=document.createElement(`div`);c.id=`ui-bl`;let l=document.createElement(`div`);l.className=`ui-hint-row`,l.innerHTML=`
    <div class="ui-hint">${Di.wasd}<span>: move</span></div>
    <div class="ui-hint">${Di.space}<span>: up</span></div>
    <div class="ui-hint">${Di.ctrl}<span>: down</span></div>
  `,Je=document.createElement(`div`),Je.className=`ui-hud-stats`,c.appendChild(l),c.appendChild(Je),document.body.appendChild(c);let u=document.createElement(`div`);return u.id=`ui-br`,u.innerHTML=`<div class="ui-copy">© Copyright 2026 Hanqi Zhao.</div>`,document.body.appendChild(u),Li(),{tl:t,bl:c,br:u}}async function Wi(){try{let e=Promise.all(Object.entries(ai).map(async([e,n])=>[e,await pi(n.path,{colorSpace:t})])),n=Promise.all(Object.entries(ii).map(async([e,t])=>{let n=await pi(t.path,{colorSpace:``});return n.channel=0,[e,n]})),[i,a,o,c,l]=await Promise.all([g.visualSky.kind===`hdr`?lr.loadAsync(g.visualSky.path):fi(g.visualSky.path,{colorSpace:t,flipY:g.visualSky.flipY??!1}),g.lightingEnvironment.kind===`hdr`?lr.loadAsync(g.lightingEnvironment.path):fi(g.lightingEnvironment.path,{colorSpace:t,flipY:g.lightingEnvironment.flipY??!1}),cr.loadAsync(Ce),e,n]);mn.ready(`textures`),mn.ready(`model`);let u=Object.fromEntries(c),ne=Object.fromEntries(l),re=new r(200,32,20);re.scale(-1,1,1),V=new te(re,ni(i,g.visualSky)),V.layers.enable(Wn),V.position.y=-100,V.rotation.y=M.rotationY,j.add(V),a.mapping=303,j.environment=a,j.environmentIntensity=g.lightingEnvironment.intensity??1.2;let m=o.scene;if(m.traverse(e=>{if(!e.isMesh)return;let t=(e.name??``).toLowerCase();(t.includes(`computer`)||t.includes(`screen`)||t.includes(`monitor`))&&gr.push(e),t.includes(`screen_plane`)&&(fr=e,Jt.setFromMatrixPosition(e.matrixWorld),Jt.add(k.loader.shockwave.centerOffset),fr.material=new s({colorWrite:!1,depthWrite:!0}),fr.renderOrder=-1)}),Qr(m),m.traverse(e=>{if(!e.isMesh)return;let t=(e.name??``).toLowerCase();t.includes(`screen_plane`)||(Array.isArray(e.material)?e.material:[e.material]).forEach(e=>{if(!e)return;ci(e);let n=li(t),r=ui(t);if(n&&u[n]){e.map=u[n],e.dithering=di(n),e.needsUpdate=!0;return}e.isMeshStandardMaterial&&r&&ne[r]&&(e.lightMap=ne[r],si[r]&&(e.envMapIntensity=si[r].envMapIntensity,e.roughness<si[r].roughnessMin&&(e.roughness=si[r].roughnessMin)),e.needsUpdate=!0)})}),j.add(m),gr.length>0){let e=new d;gr.forEach(t=>{t.updateMatrixWorld(!0),e.union(new d().setFromObject(t))});let t=new p;e.getCenter(t);let n=new p;e.getSize(n),_r=new te(new ee(n.x,n.y,n.z),new s({colorWrite:!1,depthWrite:!1,transparent:!0,opacity:0})),_r.position.copy(t),_r.scale.setScalar(k.focus.hitboxScale),_r.visible=!1,j.add(_r),fr||(Jt.copy(t),Jt.add(k.loader.shockwave.centerOffset))}fr&&vi(fr),mn.ready(`scene`),await F.compileAsync(j,P),Vr(performance.now()),mn.ready(`gpu`),Ne=!1,mn.transition(`awaitingGesture`),w(`startup.assets.readyForGesture`),gi(`start-prompt`).then(e=>e.prepareDesktop()).then(()=>_i({standby:!0})).catch(e=>console.warn(`Desktop preload will retry on mount.`,e)),Le=!0,ei(m),q(),await hn(),mn.transition(`intro`),Le=!1,w(`loader.gesture.await.end`),w(`loader.fade.start`,{fadeTimeMs:k.loader.fadeTime*1e3}),A.style.opacity=`0`,await new Promise(e=>setTimeout(e,k.loader.fadeTime*1e3)),w(`loader.fade.end`),A.remove(),w(`loader.removed`),await _i(),B?.powerOn?.(),w(`screenOverlay.ready`);let ie=Ui();w(`outerHud.overlay.created`);{let e=performance.now();Fe=(t,n)=>{e+=Math.min(t,Math.max(0,n-e))},w(`loadingTimeline.start`);let t=!1,n=e=>e===1?1:1-2**(-10*e),r=e=>e<.5?4*e*e*e:1-(-2*e+2)**3/2;function i(){let i=(performance.now()-e)/1e3;if(!_){let e=k.loader.cameraPush,t=0;i>=e.startTime&&(t=Math.min((i-e.startTime)/e.duration,1)),P.position.lerpVectors(Sn,k.intro.startPos,r(t)),P.lookAt(or.target)}let a=k.loader.shockwave,o=0;if(i>=a.startTime&&(o=Math.min((i-a.startTime)/a.duration,1)),!qt){let e=o>=1?bt:f.lerp(a.startRadius,a.endRadius,n(o));Kt.forEach(t=>{t.userData.shader&&(t.userData.shader.uniforms.uShockwaveRadius.value=e)}),o>=1&&ti()}let s=k.loader.skyFade,c=0;i>=s.startTime&&(c=Math.min((i-s.startTime)/s.duration,1)),V&&V.material&&(V.material.uniforms.uSkyOpacity.value=c),!_&&i>=k.loader.controlsUnlockTime&&(_=!0,w(`loadingTimeline.physicsUnlocked`,{elapsedSec:i}),X.locked=!0,X.targetMouse.set(0,0),X.currentMouse.set(0,0),X.lockBaseMouse.copy(Gi),Zi());let l=k.loader.screenFade;i>=l.startTime&&!Re&&(Re=!0,w(`loadingTimeline.screenFade.start`,{elapsedSec:i,durationSec:l.duration}),H.runtimeEnabled=!1,z&&B&&(mi(`opacity ${l.duration}s ease-in-out`),requestAnimationFrame(()=>{w(`loadingTimeline.screenFade.visibleFrame`),B.setVisualState({opacity:1,visible:!0}),setTimeout(()=>{z&&B&&(mi(``),H.runtimeEnabled=!0,H.target=1,Hr(1),w(`loadingTimeline.screenFade.runtimeEnabled`))},l.duration*1e3+100)}))),!t&&i>=vn.appearAt&&(t=!0,ie.tl.style.opacity=`1`,ie.bl.style.opacity=`1`,ie.br.style.opacity=`1`,w(`outerHud.overlay.visible`,{elapsedSec:i})),i>=Math.max(k.loader.cameraPush.startTime+k.loader.cameraPush.duration,a.startTime+a.duration,s.startTime+s.duration,l.startTime+l.duration,k.loader.controlsUnlockTime)&&(Ie=!1,Pe=null,Fe=null,mn.transition(`roomInteractive`),w(`loadingTimeline.complete`,{elapsedSec:i}))}Pe=i,i(),q()}}catch(e){console.error(e),Ne=!0,yr.suspend(!0),A.isConnected||document.body.appendChild(A),A.style.opacity=`1`,A.style.pointerEvents=`auto`,A.querySelector(`#hud-status`).textContent=`Unable to prepare the room.`;let t=document.createElement(`button`);t.textContent=`Retry loading`,t.onclick=()=>window.location.reload(),A.querySelector(`.hud-core`).appendChild(t)}}var Gi=new i,X={locked:!0,lockBaseMouse:new i,targetMouse:new i,currentMouse:new i,velocity:new i},Ki={lastIdleSampleAt:0},qi={lastFrameNow:0},Z={forward:new p,right:new p,up:new p(0,1,0),rawDir:new p,targetVel:new p,actualVel:new p,nextPos:new p,delta:new p,originalQuat:new l,zeroMouse:new i(0,0),parallaxDiff:new i},Ji={normal:new p,toCamera:new p},Q={w:!1,a:!1,s:!1,d:!1," ":!1,control:!1};function Yi(){Object.keys(Q).forEach(e=>{Q[e]=!1}),$.active=!1,$.chargeStart=0,$.releaseStart=0,$.dist=0,$.currentDir.set(0,0,0),$.velocity.set(0,0,0)}window.addEventListener(`blur`,()=>{Yi(),_&&!v&&q()});var Xi=performance.now();function Zi(){Xi=performance.now()}window.addEventListener(`pointermove`,e=>{let t=tn(e.clientX,e.clientY);if(Gi.x=t.x,Gi.y=t.y,v&&!y||!_)return;let n=performance.now(),r=!y&&!v&&X.locked;r&&n-Ki.lastIdleSampleAt<Ft()||(r&&(Ki.lastIdleSampleAt=n),Zi(),!y&&!v&&X.locked&&Gi.distanceTo(X.lockBaseMouse)>k.parallax.unlockThreshold&&(X.locked=!1),q())},{passive:!0}),window.addEventListener(`keydown`,e=>{if(v||y||!_)return;Zi();let t=e.key.toLowerCase();t===` `&&e.preventDefault(),Q[t]!==void 0&&(Q[t]=!0),q()},{passive:!1}),window.addEventListener(`keyup`,e=>{let t=e.key.toLowerCase();if(Q[t]===void 0)return;let n=Q[t];Q[t]=!1,!(!n||!_||v)&&(Zi(),q())}),window.addEventListener(`wheel`,()=>{v&&!y||_&&(Zi(),q())},{passive:!0}),F.domElement.addEventListener(`contextmenu`,e=>e.preventDefault());var Qi={linear:e=>e,easeOutCubic:e=>1-(1-e)**3,easeInOutCubic:e=>e<.5?4*e*e*e:1-(-2*e+2)**3/2},$i=null,ea=!1;function ta(){$i!==null&&(window.clearTimeout($i),$i=null)}function na(){!ea||y||!v||!_||(ea=!1,window.requestAnimationFrame(()=>{!y&&v&&_&&aa()}))}function ra(e,t,n,r,i,a,o,{emitStartState:s=!0}={}){s&&(y=!0,Er());let c=performance.now();Sr(v?`focus`:`unfocus`,i,a,c);let l=K.mode;w(`focus.cameraTween.start`,{mode:l,durationMs:i,easingName:a});let u=Qi[a]||Qi.easeInOutCubic;q(),vr.start({now:c,duration:i,update(i){let a=u(i);P.position.lerpVectors(e,n,a),or.target.lerpVectors(t,r,a),P.lookAt(or.target)},complete(){Cr(),y=!1,G.projectionInvalidated=!0,zr(),Er(),$.velocity.set(0,0,0),X.locked=!0,X.lockBaseMouse.copy(Gi),X.targetMouse.set(0,0),X.currentMouse.set(0,0),X.velocity.set(0,0),Zi(),o?.(),na(),w(`focus.cameraTween.end`,{mode:l,elapsedMs:performance.now()-c})}})}function ia(){if(v||!_){w(`focus.transition.blocked`,{target:`focus`,isAnimating:y,isFocused:v,isPhysicsUnlocked:_});return}w(`focus.transition.start`,{target:`focus`}),ta(),vr.cancel(),ea=!1,y=!0,Dr(!0),Er(),q(),ra(P.position.clone(),or.target.clone(),Wt,Gt,k.focus.duration,k.focus.easing,null,{emitStartState:!1})}async function aa(){if(!v||!_){w(`focus.transition.blocked`,{target:`unfocus`,isAnimating:y,isFocused:v,isPhysicsUnlocked:_});return}w(`focus.transition.start`,{target:`unfocus`}),ta(),vr.cancel(),ea=!1,y=!0,Er(),Dr(!1),!(!y||v)&&(Er(),q(),$i=window.setTimeout(()=>{$i=null,ra(P.position.clone(),or.target.clone(),k.unfocus.endPos,k.unfocus.endTarget,k.unfocus.duration,k.unfocus.easing,null,{emitStartState:!1})},Math.max(0,k.unfocus.preDelay??0)))}var oa=new fe;F.domElement.addEventListener(`pointerdown`,e=>{if(!_||e.button!==0)return;let t=hi()?Zr(e.clientX,e.clientY):!1;if(w(`focus.pointerdown.canvas`,{button:e.button,pointerType:e.pointerType,isPhysicsUnlocked:_,isAnimating:y,isFocused:v,pointerInsideScreen:t}),y){v&&!t&&(ea=!0,w(`focus.unfocus.queued`,{source:`canvas-pointerdown`}));return}Zi();let n=tn(e.clientX,e.clientY);if(Gi.x=n.x,Gi.y=n.y,q(),v){if(t){w(`focus.pointerdown.insideFocusedScreen`);return}w(`focus.pointerdown.requestUnfocus`,{source:`canvas`}),aa();return}if(t){w(`focus.pointerdown.requestFocus`,{source:`screen-bounds`}),ia();return}oa.setFromCamera(Gi,P);let r=_r?[_r]:gr;if(oa.intersectObjects(r,!0).length>0&&z){let e=new p(0,0,1).applyQuaternion(z.quaternion).normalize(),t=new p().subVectors(P.position,z.position).normalize(),n=e.angleTo(t)*(180/Math.PI);w(`focus.pointerdown.hitboxIntersect`,{angleDegree:n,maxTriggerAngle:k.focus.maxTriggerAngle}),n<=k.focus.maxTriggerAngle&&(w(`focus.pointerdown.requestFocus`,{source:`computer-hitbox`}),ia())}q()});function sa(e){return!!(et?.contains(e)||b?.contains(e)||x?.contains(e))}document.addEventListener(`pointerdown`,e=>{if(!_||e.button!==0)return;let t=sa(e.target),n=hi()?Zr(e.clientX,e.clientY):!1;if(w(`focus.pointerdown.document`,{button:e.button,pointerType:e.pointerType,isPhysicsUnlocked:_,isAnimating:y,isFocused:v,pointerInsideUi:t,clickedInsideScreen:n}),!t){if(!v){!y&&n&&(w(`focus.pointerdown.requestFocus`,{source:`document-screen-bounds`}),ia());return}if(!n){if(y){ea=!0,w(`focus.unfocus.queued`,{source:`document-pointerdown`});return}w(`focus.pointerdown.requestUnfocus`,{source:`document`}),aa()}}},!0);function ca(e=1){if(!fr||!z)return;let t=v&&!y&&hi();if(xi(`live`),!Re){Ur(t?`auto`:`none`);return}if(!H.runtimeEnabled){Ur(t?`auto`:`none`);return}let n=Ji.normal.set(0,0,1).applyQuaternion(z.quaternion).normalize(),r=Ji.toCamera.subVectors(P.position,z.position).normalize(),i=P.position.distanceTo(z.position),a=n.dot(r)>=0,o=0,s=`none`;if(t)o=1,s=`auto`;else if(a){let e=k.shield.maxClickDistance+k.shield.fadeDistance;if(i<=k.shield.maxClickDistance)o=1;else if(i>=e)o=k.shield.dimOpacity;else{let e=1-(i-k.shield.maxClickDistance)/k.shield.fadeDistance;o=f.lerp(k.shield.dimOpacity,1,e)}}H.target=o;let c=f.lerp(H.current,H.target,Rt(k.shield.opacityLerp,e)),l=Math.abs(c-H.target)<.002?H.target:c;Hr(Math.abs(l-H.target)<=vt?H.target:l),Ur(s)}var $={active:!1,chargeStart:0,releaseStart:0,dist:0,currentDir:new p,velocity:new p};function la(e){let t=Math.max(1,Math.min(8,Math.ceil(e))),n=e/t,r=(1-f.clamp(k.parallax.springFriction,0,1))**n;for(let e=0;e<t;e+=1){let e=Z.parallaxDiff.subVectors(X.targetMouse,X.currentMouse);X.velocity.add(e.multiplyScalar(k.parallax.springAccel*n)),X.velocity.multiplyScalar(r),X.currentMouse.addScaledVector(X.velocity,n)}}function ua(e){if(Ne||document.hidden)return;Pe?.(),vr.tick(e),G.frameId=null;let t=qi.lastFrameNow||e-wt,n=Math.max(0,e-t),r=Lt(n),i=Lt(n,Et);qi.lastFrameNow=e;let a=!Le&&jr(),o=G.renderRequested,s=Rr(e),c=s||a;if(!c&&!o)return;if(V&&a&&(V.rotation.y+=k.sky.rotationSpeed*i),!_){Vr(e,{skyOnly:!1,sceneAnimationActive:!0,frameScale:r}),G.renderRequested=!1,c&&q();return}if(!s&&a&&!o){Vr(e,{skyOnly:!0,sceneAnimationActive:!1,frameScale:r}),G.renderRequested=!1,Ir();return}let l=e-Xi>k.parallax.idleTimeout;if(!v&&!y){let t=Z.forward;P.getWorldDirection(t),t.y=0,t.normalize();let n=Z.right.crossVectors(t,P.up).normalize(),i=Z.up,a=Z.rawDir.set(0,0,0);Q.w&&a.add(t),Q.s&&a.sub(t),Q.a&&a.sub(n),Q.d&&a.add(n),Q[` `]&&a.add(i),Q.control&&a.sub(i),a.lengthSq()>0?($.releaseStart=0,$.active?$.currentDir.lerp(a.normalize(),Rt(k.walk.dirLerp,r)).normalize():($.chargeStart===0&&($.chargeStart=e),e-$.chargeStart>k.walk.chargeTime&&($.active=!0,$.dist=0,$.currentDir.copy(a.normalize())))):($.chargeStart=0,$.active&&($.releaseStart===0&&($.releaseStart=e),e-$.releaseStart>k.walk.releaseGrace&&($.active=!1)),l&&($.active=!1,$.releaseStart=0,$.currentDir.set(0,0,0),$.velocity.set(0,0,0))),$.active&&$.dist>=k.walk.maxDist&&($.active=!1);let o=Z.targetVel.set(0,0,0);if($.active?(o.copy($.currentDir).multiplyScalar(k.walk.speed),$.velocity.lerp(o,Rt(k.walk.acceleration,r))):($.velocity.lerp(o,Rt(k.walk.deceleration,r)),Nr($.velocity)&&$.velocity.set(0,0,0)),$.velocity.lengthSq()>1e-6){$.dist+=$.velocity.length()*r;let e=Z.actualVel.copy($.velocity),t=k.walk.bounds,n=k.walk.dampingZone;e.x<0&&P.position.x-t.minX<n?e.x*=Math.max(0,(P.position.x-t.minX)/n):e.x>0&&t.maxX-P.position.x<n&&(e.x*=Math.max(0,(t.maxX-P.position.x)/n)),e.y<0&&P.position.y-t.minY<n?e.y*=Math.max(0,(P.position.y-t.minY)/n):e.y>0&&t.maxY-P.position.y<n&&(e.y*=Math.max(0,(t.maxY-P.position.y)/n)),e.z<0&&P.position.z-t.minZ<n?e.z*=Math.max(0,(P.position.z-t.minZ)/n):e.z>0&&t.maxZ-P.position.z<n&&(e.z*=Math.max(0,(t.maxZ-P.position.z)/n));let i=Z.nextPos.copy(P.position).addScaledVector(e,r);i.x<=t.minX?(i.x=t.minX,$.velocity.x=0):i.x>=t.maxX&&(i.x=t.maxX,$.velocity.x=0),i.y<=t.minY?(i.y=t.minY,$.velocity.y=0):i.y>=t.maxY&&(i.y=t.maxY,$.velocity.y=0),i.z<=t.minZ?(i.z=t.minZ,$.velocity.z=0):i.z>=t.maxZ&&(i.z=t.maxZ,$.velocity.z=0);let a=Z.delta.subVectors(i,P.position);P.position.copy(i),or.target.add(a)}}P.lookAt(or.target);let u=Z.originalQuat.copy(P.quaternion),d=Rt(k.parallax.catchupSpeed,r);v||y||l||X.locked?X.targetMouse.lerp(Z.zeroMouse,d):X.targetMouse.lerp(Gi,d),la(r),l&&(Mr(X.targetMouse)&&X.targetMouse.set(0,0),Mr(X.velocity)&&X.velocity.set(0,0),Mr(X.currentMouse)&&Mr(X.targetMouse)&&Mr(X.velocity)&&X.currentMouse.set(0,0));let ee=X.currentMouse.y*f.degToRad(k.parallax.maxAngle),te=-X.currentMouse.x*f.degToRad(k.parallax.maxAngle);P.rotateX(ee),P.rotateY(te),Vr(e,{skyOnly:a&&!s&&!o,sceneAnimationActive:s,frameScale:r}),P.quaternion.copy(u),G.renderRequested=!1,s?q():a&&Ir()}window.addEventListener(`resize`,()=>{en(),Cn(),Tn(),P.aspect=E.aspect,P.updateProjectionMatrix(),Yt!==null&&window.clearTimeout(Yt),Yt=window.setTimeout(()=>{Yt=null,Qn({forceRebuild:!0}),Li(),q()},yt),Ar(),Lr()}),Wi(),q();