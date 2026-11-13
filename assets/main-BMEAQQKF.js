const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/outer-screen-overlay-Bg5mmK4p.js","assets/createWinXPHost-BGy2zRi_.js","assets/rolldown-runtime-BVbofQct.js","assets/preload-helper-DWTEM3RW.js","assets/react-vendor-aHYhdYD6.js","assets/DesktopPreparationContext-Bgx_rmu8.js","assets/runtimeBridge-DiqJiUi9.js","assets/DesktopViewportContext-BvIqTV0r.js","assets/desktopPresentationProfile-CVnTUj2M.js","assets/globalAudio-DDKx6bqK.js","assets/publicPath-SdK1OGf5.js","assets/visibleTimeout-DctrY-yE.js","assets/createWinXPHost-BSxTm-g0.css"])))=>i.map(i=>d[i]);
import"./modulepreload-polyfill-Cf3xff8G.js";import{A as e,C as t,D as n,E as r,F as i,M as a,N as o,P as s,S as c,T as l,_ as u,a as d,b as ee,c as te,d as ne,f,g as re,h as p,i as ie,j as ae,k as oe,l as m,m as se,n as ce,o as le,p as ue,r as de,s as fe,t as pe,u as me,v as h,w as he,x as ge,y as _e}from"./three-vendor-XiMRrbE6.js";import{t as ve}from"./desktopPresentationProfile-CVnTUj2M.js";import{a as ye,d as be,f as xe,i as Se,n as Ce,o as we,t as Te,u as Ee}from"./runtimeBridge-DiqJiUi9.js";import{t as De}from"./preload-helper-DWTEM3RW.js";var Oe=`/models/room_all.glb`,ke={current:{visualSkyLdr:new URL(`/assets/new_sky_ldr-yZ_KpEae.jpg`,``+import.meta.url).href,lightingLdr:new URL(`/assets/room_ldr-DOcZ7og-.jpg`,``+import.meta.url).href,room:new URL(`/assets/room%20baked-CWk1e83Q.ktx2`,``+import.meta.url).href,table:new URL(`/assets/table%20baked-DhW2AEBk.ktx2`,``+import.meta.url).href,chairBack:new URL(`/assets/chair%20back%20final-sbWclMz4.ktx2`,``+import.meta.url).href,chairLeft:new URL(`/assets/chair%20left%20final-BjZ_O-yh.ktx2`,``+import.meta.url).href,chairRight:new URL(`/assets/chair%20right%20final-BtcJ8_ie.ktx2`,``+import.meta.url).href,computer:new URL(`/assets/computer%20shadow-D5HsGwbv.ktx2`,``+import.meta.url).href}},g={label:`Slim`,visualSky:{kind:`ldr`,path:ke.current.visualSkyLdr,flipY:!0},lightingEnvironment:{kind:`ldr`,path:ke.current.lightingLdr,flipY:!0,intensity:1.2},bakedSurfacePaths:{room:ke.current.room,table:ke.current.table,chairBack:ke.current.chairBack,chairLeft:ke.current.chairLeft,chairRight:ke.current.chairRight},lightMapPaths:{computer:ke.current.computer}},Ae=class{constructor(e,t=()=>{}){this.stages=new Map(e.map(e=>[e,!1])),this.onChange=t,this.state=`preparing`}ready(e){if(!this.stages.has(e))throw Error(`Unknown startup stage: ${e}`);this.stages.set(e,!0),this.onChange(this.snapshot())}transition(e){this.state=e,this.onChange(this.snapshot())}snapshot(){let e=[...this.stages.values()].filter(Boolean).length;return{state:this.state,completed:e,total:this.stages.size,pending:[...this.stages].filter(([,e])=>!e).map(([e])=>e)}}},je=class{constructor(e,{request:t=e=>window.requestAnimationFrame(e),cancel:n=e=>window.cancelAnimationFrame(e)}={}){this.frame=e,this.request=t,this.cancel=n,this.frameId=null,this.timer=null,this.suspended=!1,this.reasons=new Set,this.lastReasons=[],this.frameCount=0}invalidate(e=`scene`){this.reasons.add(e),clearTimeout(this.timer),this.timer=null,!(this.suspended||this.frameId!==null)&&(this.frameId=this.request(e=>{this.frameId=null,this.lastReasons=[...this.reasons],this.reasons.clear(),this.frameCount++,this.frame(e)}))}decorate(e){this.suspended||this.frameId!==null||this.timer!==null||(this.timer=setTimeout(()=>{this.timer=null,this.invalidate(`sky`)},e))}suspend(e){this.suspended=e,e?(this.frameId!==null&&this.cancel(this.frameId),clearTimeout(this.timer),this.frameId=null,this.timer=null):this.invalidate(`recovering`)}dispose(){this.suspend(!0),this.reasons.clear()}},Me=class{constructor(){this.active=null}start({now:e,duration:t,update:n,complete:r}){this.active={startedAt:e,duration:Math.max(1,t),update:n,complete:r},this.tick(e)}tick(e){let t=this.active;if(!t)return!1;let n=Math.min(1,Math.max(0,(e-t.startedAt)/t.duration));return t.update(n),n===1&&this.active===t&&(this.active=null,t.complete?.()),!!this.active}shift(e,t=1/0){this.active&&(this.active.startedAt+=Math.min(e,Math.max(0,t-this.active.startedAt)))}cancel(){this.active=null}},Ne=new Set([`legacy`,`single-scene`,`compact`]),Pe=new URLSearchParams(window.location.search).get(`postfxBuffers`),Fe=Ne.has(Pe)?Pe:`compact`;function Ie(e,t,n){if(Fe!==`legacy`){if(e.passes.at(-1)!==n||e.passes.slice(0,-1).some(e=>e.needsSwap))throw Error(`Compact postprocessing requires an in-place chain and final OutputPass.`);if(n.needsSwap=!1,Fe===`compact`)for(let e of[t.renderTargetBright,...t.renderTargetsHorizontal,...t.renderTargetsVertical])e.depthBuffer=!1,e.stencilBuffer=!1}}var Le=`slim`;be(ve());var Re=!0,ze=null,Be=null,Ve=!0,He=!1,_=!1,Ue=!1,v=!1,y=!1,We=null,Ge=null,Ke=null,qe=null,b=null,Je=null,Ye=null,Xe=null,Ze=null,x=null,Qe=null,$e=null,et=null,tt=null,nt=null,S=!1,rt=null,it=!1,at=null,ot=null,st=2200,ct=10,lt=12,ut=220,dt=2,ft=2,pt=1,mt=.7,ht=1800,gt=18,_t=1e3/10,vt=1200,yt=.25,bt=32,xt=1e-4,St=.01,Ct=.01,wt=150,Tt=9999,Et=`outer-website:shockwave-v1`,Dt=[4,2,0],Ot=!0,kt=1e3/180,At=1e3/30,jt=250,Mt=800,Nt=`outer-website:`;function Pt(){return ft}function Ft(){return pt}function It(){return mt}function Lt(){return gt}function Rt(){return 1e3/Lt()}function zt(){return vt}function Bt(){return bt}function Vt(){return St}function Ht(e,t=At){return(Number.isFinite(e)&&e>0?Math.min(e,t):kt)/kt}function Ut(e,t){let n=h.clamp(e,0,1);return n<=0?0:n>=1?1:1-(1-n)**Math.max(0,t)}var C=window.__outerWebsiteStartupTiming??{createdAt:Date.now(),timeOrigin:performance.timeOrigin??Date.now()-performance.now(),events:[]};window.__outerWebsiteStartupTiming=C;function Wt(){try{return new URLSearchParams(window.location.search).has(`startupTimingLog`)}catch{return!1}}var Gt=Wt();function Kt(e){if(typeof e!=`object`||!e)return e??{};try{return JSON.parse(JSON.stringify(e,(e,t)=>{if(typeof t==`number`)return Number.isFinite(t)?Number(t.toFixed(3)):String(t);if(typeof t!=`function`)return t}))}catch{return{unserializable:!0}}}function w(e,t={}){let n=performance.now(),r={index:C.events.length,name:e,at:Number(n.toFixed(3)),detail:Kt(t)};if(C.events.push(r),C.events.length>Mt&&C.events.splice(0,C.events.length-Mt),Gt)try{performance.mark(`${Nt}${e}`)}catch{}return Gt&&console.debug(`[startup-timing]`,JSON.stringify(r)),r}function qt(){return{createdAt:C.createdAt,timeOrigin:C.timeOrigin,now:Number(performance.now().toFixed(3)),eventCount:C.events.length,events:C.events.slice()}}function Jt(){C.events.length=0,w(`debug.timeline.cleared`)}if(window.__outerWebsiteRecordStartupTiming=w,Gt&&typeof PerformanceObserver<`u`)try{C.longTaskObserver?.disconnect?.(),C.longTaskObserver=new PerformanceObserver(e=>{e.getEntries().forEach(e=>{w(`performance.longtask`,{startTime:e.startTime,duration:e.duration,name:e.name})})}),C.longTaskObserver.observe({type:`longtask`,buffered:!0})}catch{}w(`main.module.loaded`,{assetProfile:Le});var Yt=new s,Xt=new s,Zt=[],Qt=!1,$t=new s(0,0,0),en=null,T={lastRenderMs:0,avgRenderMs:0,avgFrameMs:0,fps:0,lastUiUpdate:0,lastFrameNow:0},tn=4/3,nn=21/9;function rn(e){return Math.min(Math.max(e,tn),nn)}function an(e=window.innerWidth,t=window.innerHeight){let n=Math.max(1,Math.floor(e)),r=Math.max(1,Math.floor(t)),i=n/r,a=rn(i),o=n,s=r;return i>a?o=Math.max(1,Math.round(r*a)):i<a&&(s=Math.max(1,Math.round(n/a))),{windowWidth:n,windowHeight:r,width:o,height:s,left:Math.round((n-o)/2),top:Math.round((r-s)/2),aspect:o/s,isClamped:Math.abs(i-a)>.001}}var E=an();function on(){Object.assign(E,an())}function sn(e,t){let n=e-E.left,r=t-E.top,i=h.clamp(n,0,E.width),a=h.clamp(r,0,E.height);return{x:i/E.width*2-1,y:-(a/E.height)*2+1,inside:n>=0&&n<=E.width&&r>=0&&r<=E.height}}function cn(e,t=dt){if(e===!0)return dt;if(e===!1||e==null)return t;let n=Number(e);return n>=4?4:n>=2?2:0}function ln(e){return e>=4?`4x`:e>=2?`2x`:`Off`}var D={bloomEnabled:!1,msaaSamples:0},O={url:`/embedded-winxp.html`,width:1280,height:820,rotationX:-Math.PI*15.5/180,rotationY:Math.PI/2,rotationZ:0,flipNormal:!1,scaleMultiplier:1,scaleX:.99,scaleY:1.01,offsetX:0,offsetY:6e-4,offsetZ:0},un={localCorners:[new s(-O.width/2,O.height/2,0),new s(O.width/2,O.height/2,0),new s(O.width/2,-O.height/2,0),new s(-O.width/2,-O.height/2,0)],worldCorners:[new s,new s,new s,new s],quad:[{x:0,y:0},{x:0,y:0},{x:0,y:0},{x:0,y:0}],cameraSpacePoint:new s,projectedPoint:new s},k={loader:{bgColor:`#d9d9d9`,minLoadTime:1500,fadeTime:1,cameraPush:{startTime:1.5,duration:1,distance:.5},shockwave:{startTime:.5,duration:5.5,startRadius:0,endRadius:20,edgeWidth:.2,edgeIntensity:3,centerOffset:new s(-4,-1,0)},skyFade:{startTime:.5,duration:1},screenFade:{startTime:2.5,duration:6.5},controlsUnlockTime:2.5},intro:{startPos:new s(4.3,-1.8,0),startTarget:new s(0,-1.4,0)},focus:{duration:2e3,easing:`easeInOutCubic`,distance:.18,yOffset:0,maxTriggerAngle:60,targetOffsetX:0,targetOffsetY:0,targetOffsetZ:0,hitboxScale:1.8},unfocus:{preDelay:0,duration:1800,easing:`easeOutCubic`,endPos:new s(4.5,-1.8,0),endTarget:new s(0,-1.4,0)},shield:{maxClickDistance:1.2,dimOpacity:.8,fadeDistance:.55,opacityLerp:.14},sky:{rotationSpeed:3e-5},parallax:{maxAngle:6,unlockThreshold:.12,springAccel:.0065,springFriction:.095,catchupSpeed:.055,idleTimeout:2200},walk:{chargeTime:80,releaseGrace:50,maxDist:1e3,speed:.011,acceleration:.6,deceleration:.6,dirLerp:1,dampingZone:.8,bounds:{minX:2,maxX:5,minY:-2,maxY:1.5,minZ:-3.5,maxZ:3.5}}};document.body.style.backgroundColor=k.loader.bgColor,document.body.style.margin=`0`,document.body.style.overflow=`hidden`;var dn=`/font/Controller%20W01%20Two%20Oblique.ttf`,fn=`/font/Controller%20W01%20Five%20Oblique.ttf`,pn=`/font/Controller%20W01%20Two%20Oblique.woff2`,mn=`/font/Controller%20W01%20Five%20Oblique.woff2`,hn=(e,t)=>`url('${e}') format('woff2'), url('${t}') format('truetype')`,gn=`"Controller W01 Two Oblique", 'Courier New', Courier, monospace`,_n=`"Controller W01 Five Oblique", 'Courier New', Courier, monospace`,vn=document.createElement(`style`);vn.textContent=`
  @font-face {
    font-family: 'Controller W01 Two Oblique';
    src: ${hn(pn,dn)};
    font-weight: 400;
    font-style: normal;
    font-display: swap;
  }
  @font-face {
    font-family: 'Controller W01 Five Oblique';
    src: ${hn(mn,fn)};
    font-weight: 400;
    font-style: normal;
    font-display: swap;
  }
  #hud-loader-root {
    position: fixed; top: 0; left: 0; width: 100vw; height: 100vh;
    background-color: #ffffff;
    z-index: 9999; display: flex; justify-content: center; align-items: center;
    font-family: ${gn};
    color: #ff7b00;
    /* Was two orange drop-shadows. On this opaque full-screen white layer they
       are hidden under the background, yet the blinking greebles inside made
       the browser recompute both blurs over the whole screen every frame
       (19% GPU on a 4K/160 Hz display). An identity filter keeps the same
       render path, so text anti-aliasing and every pixel stay the same. */
    filter: brightness(1);
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
`,document.head.appendChild(vn);var A=document.createElement(`div`);A.id=`hud-loader-root`,A.innerHTML=`
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
  </div>`,document.body.appendChild(A);var yn=new Ae([`textures`,`model`,`scene`,`gpu`],({completed:e,total:t,state:n})=>{A.querySelectorAll(`.hud-block`).forEach((n,r)=>n.classList.toggle(`lit`,r<e/t*18)),A.querySelector(`#hud-status`).textContent=n===`awaitingGesture`?`Ready to enter.`:`Preparing room (`+e+`/`+t+`)...`,A.querySelector(`#hud-hex`).textContent=e+`/`+t});(function(){let e=A.querySelector(`#hud-bar`);A.querySelector(`#hud-hex`),A.querySelector(`#hud-status`);for(let t=0;t<18;t++){let t=document.createElement(`div`);t.className=`hud-block`,e.appendChild(t)}yn.transition(`preparing`)})();function bn(){return w(`loader.prompt.wait.start`),new Promise(e=>{let t=A.querySelector(`.hud-core`);if(!t){w(`loader.prompt.missing`),ot=null,e();return}let n=!1,r=t=>{if(n)return;let r=performance.now();if(w(`loader.gesture.finish.start`,{reason:t}),n=!0,He=!1,J(),ot=null,A.removeEventListener(`pointerdown`,i,!0),A.removeEventListener(`keydown`,a,!0),typeof Y?.releaseQueuedPlayback==`function`){let e=performance.now();Y.releaseQueuedPlayback(t),w(`loader.gesture.audioRelease.called`,{reason:t,elapsedMs:performance.now()-e})}w(`loader.gesture.finish.end`,{reason:t,elapsedMs:performance.now()-r}),e()},i=e=>{w(`loader.gesture.pointerdown`,{button:e.button,pointerType:e.pointerType}),e.preventDefault(),r(`loader-start-pointer`)},a=e=>{e.key!==`Enter`&&e.key!==` `||(w(`loader.gesture.keydown`,{key:e.key}),e.preventDefault(),r(`loader-start-keyboard`))};t.classList.add(`is-awaiting-start`),ot=()=>{w(`loader.gesture.debugTrigger`),r(`loader-start-debug`)},A.tabIndex=0,A.focus({preventScroll:!0}),A.addEventListener(`pointerdown`,i,!0),A.addEventListener(`keydown`,a,!0),w(`loader.prompt.awaiting`,{activeElementId:document.activeElement?.id??``})})}var xn=document.getElementById(`app`),j=new oe,Sn={fov:65,near:.1,far:1e3},M={exposure:1.1,saturation:1.25,highlights:.95,washout:0,lift:0,gamma:1,colorBalance:new s(1,1,1),bloomOffCompensation:{exposure:1.26,saturation:1.55,highlights:.95,washout:0,lift:0,gamma:1,colorBalance:new s(1.003,1.006,1.026)},repeatX:2,repeatY:1.2,offsetY:0,rotationY:-3*Math.PI/4},N={exposure:.9,bloom:{strength:.01,radius:0,threshold:0,transitionDurationMs:220},unfocus:{bloomResumeProgress:.5}},Cn={appearAt:3,fadeDuration:1},wn={sources:[`/audio/outer-bgm.ogg`,`/audio/outer-bgm.m4a`],loop:!0,initialVolume:.56,defaultWantsToPlay:!0},Tn={minVolumeRatio:.2,volumeSyncEpsilon:.003},P=new t(Sn.fov,E.aspect,Sn.near,Sn.far),En=new s().subVectors(k.intro.startTarget,k.intro.startPos).normalize(),Dn=k.intro.startPos.clone().addScaledVector(En,-k.loader.cameraPush.distance);P.position.copy(Dn);var F=new me({antialias:!1,depth:!1,stencil:!1,alpha:!1,powerPreference:`high-performance`});F.debug.checkShaderErrors=!1;function On(){F.domElement.style.left=`${E.left}px`,F.domElement.style.top=`${E.top}px`}function kn(e=zn,t=Nn()){return e?jn():t}function An(e=Nn()){let t=kn(zn,e);Xn=!1,F.setPixelRatio(t),F.setSize(E.width,E.height),Rn=e,I?.setPixelRatio&&I.setPixelRatio(e),I?.setSize&&I.setSize(E.width,E.height),L?.setSize&&L.setSize(Math.max(1,Math.floor(E.width*e*.5)),Math.max(1,Math.floor(E.height*e*.5)))}function jn(){return Math.min(window.devicePixelRatio||1,Pt())}function Mn(){return Ft()}function Nn(){let e=jn();return h.clamp(e*Mn(),It(),e)}F.setPixelRatio(jn()),F.setSize(E.width,E.height),F.setClearColor(0,1),F.outputColorSpace=n,F.useLegacyLights=!1,F.toneMapping=4,F.toneMappingExposure=N.exposure,xn.style.position=`relative`,xn.style.backgroundColor=`#000000`,F.domElement.style.position=`absolute`,F.domElement.style.zIndex=`1`,F.domElement.style.pointerEvents=`auto`,F.domElement.style.display=`block`,On(),xn.appendChild(F.domElement);var Pn=null,I=null,Fn=null,L=null,In=null,Ln=0,Rn=0,zn=!1,R={currentStrength:D.bloomEnabled?N.bloom.strength:0,fromStrength:D.bloomEnabled?N.bloom.strength:0,targetStrength:D.bloomEnabled?N.bloom.strength:0,transitionStartedAt:performance.now()},Bn={hidden:!1};function Vn(){return D.bloomEnabled?N.bloom.strength:0}function Hn(e=performance.now()){let t=Vn();Math.abs(t-R.targetStrength)<1e-4||(R.fromStrength=R.currentStrength,R.targetStrength=t,R.transitionStartedAt=e)}function Un(){return Math.abs(R.currentStrength-R.targetStrength)>1e-4}function Wn(){return R.currentStrength>1e-4||R.targetStrength>1e-4}function Gn(e=performance.now()){Hn(e);let t=Math.max(0,N.bloom.transitionDurationMs??0);if(t<=0)R.currentStrength=R.targetStrength,R.fromStrength=R.targetStrength;else{let n=h.clamp((e-R.transitionStartedAt)/t,0,1),r=n<.5?4*n*n*n:1-(-2*n+2)**3/2;R.currentStrength=h.lerp(R.fromStrength,R.targetStrength,r),n>=1&&(R.currentStrength=R.targetStrength,R.fromStrength=R.targetStrength)}L&&(L.enabled=Wn(),L.strength=R.currentStrength,L.radius=N.bloom.radius,L.threshold=N.bloom.threshold)}function Kn(){return D.msaaSamples}function qn(e=performance.now()){return Hn(e),Ot}function Jn(e=Kn()){let t=cn(e,0);if(t<=0)return 0;let n=F.capabilities.maxSamples??0;return n>=t?t:n>=4?4:n>=2?2:0}var Yn=1,Xn=!1;function Zn(){return!!(zn&&I&&Fn&&H&&Xn&&Fe!==`legacy`&&Ln===0&&!L?.enabled&&!Un())}function Qn(){let e=F.getRenderTarget(),t=F.autoClear,n=P.layers.mask;try{F.setRenderTarget(I.readBuffer),F.autoClear=!1,P.layers.set(Yn),F.render(j,P)}finally{P.layers.mask=n,F.autoClear=t,F.setRenderTarget(e)}Fn.enabled=!1;try{I.render()}finally{Fn.enabled=!0}}function $n(){I.render(),Xn=!0}var er={1:`LINEAR_TONE_MAPPING`,2:`REINHARD_TONE_MAPPING`,3:`CINEON_TONE_MAPPING`,4:`ACES_FILMIC_TONE_MAPPING`,6:`AGX_TONE_MAPPING`,7:`NEUTRAL_TONE_MAPPING`,5:`CUSTOM_TONE_MAPPING`};function tr(){let e=In.material.clone();e.defines={},p.getTransfer(F.outputColorSpace)===`srgb`&&(e.defines.SRGB_TRANSFER=``);let t=er[F.toneMapping];t&&(e.defines[t]=``);let n=new ue;n.setAttribute(`position`,new re([-1,3,0,-1,-1,0,3,-1,0],3)),n.setAttribute(`uv`,new re([0,2,0,0,2,0],2));let r=new _e(n,e);return r.frustumCulled=!1,r}async function nr(){if(!I||!Fn)return await F.compileAsync(j,P),()=>{};let e=F.getRenderTarget(),t=[],n=null;try{F.setRenderTarget(I.readBuffer),t.push(F.compileAsync(j,P)),In?.material&&(F.setRenderTarget(null),n=tr(),t.push(F.compileAsync(n,new c(-1,1,1,-1,0,1))))}finally{F.setRenderTarget(e)}return await Promise.all(t),()=>{n?.geometry.dispose(),n?.material.dispose()}}function rr({withRestingParallax:e=!1}={}){if(!Zn())return{eligible:!1};let t=P.quaternion.clone();e&&(P.lookAt(z.target),Zr());try{return ir()}finally{P.quaternion.copy(t)}}function ir(){let e=I.readBuffer,{width:t,height:n}=e,r=()=>{let r=new Uint16Array(t*n*4);return F.readRenderTargetPixels(e,0,0,t,n,r),r},i=H.rotation.y;try{$n(),H.rotation.y=i+.05,Qn();let e=r();$n();let a=r(),o=0;for(let t=0;t<a.length;t+=1)a[t]!==e[t]&&(o+=1);return{eligible:!0,width:t,height:n,values:a.length,differing:o}}finally{H.rotation.y=i,$n()}}function ar(){Xn=!1,I?.dispose&&I.dispose(),L?.dispose&&L.dispose(),In?.dispose&&In.dispose(),Pn&&Pn.dispose(),I=null,Fn=null,L=null,In=null,Pn=null,zn=!1}function or({pixelRatio:e=Nn(),msaaSamples:t=Jn(Kn()),useComposer:n=qn()}={}){ar();let r=Math.max(1,Math.floor(E.width*e)),a=Math.max(1,Math.floor(E.height*e)),s=kn(n,e);F.setPixelRatio(s),F.setSize(E.width,E.height),On(),Rn=e,Ln=n?t:0,zn=n,n&&(Pn=new i(r,a,{samples:t,type:u}),I=new ie(F,Pn),I?.setPixelRatio&&I.setPixelRatio(e),Fn=new de(j,P),I.addPass(Fn),L=new ce(new o(Math.max(1,Math.floor(E.width*e*.5)),Math.max(1,Math.floor(E.height*e*.5))),R.currentStrength,N.bloom.radius,N.bloom.threshold),Gn(performance.now()),I.addPass(L),In=new pe,I.addPass(In),Ie(I,L,In),An(e))}function sr({forceRebuild:e=!1}={}){let t=performance.now();Hn(t);let n=Nn(),r=Jn(Kn()),i=qn(t);if(e||Math.abs(n-Rn)>.001||r!==Ln||i!==zn){or({pixelRatio:n,msaaSamples:r,useComposer:i}),K.projectionInvalidated=!0,J();return}if(Math.abs(n-Rn)>.001){An(n),K.projectionInvalidated=!0,J();return}Gn(t)}or();function cr(){let e=Nn();return{scale:Number(Mn().toFixed(3)),pixelRatio:e,width:Math.max(1,Math.floor(E.width*e)),height:Math.max(1,Math.floor(E.height*e))}}function lr(){let e=performance.memory;if(!e)return null;let t=e=>Number((e/(1024*1024)).toFixed(2));return{usedMB:t(e.usedJSHeapSize),totalMB:t(e.totalJSHeapSize),limitMB:t(e.jsHeapSizeLimit)}}function ur(){let e=Ji(),t=cr(),n=cn(D.msaaSamples,0),r=cn(Kn(),0),i=Jn(Kn()),a=$?.velocity?.lengthSq?.()??0,o=X?.velocity?.lengthSq?.()??0,s=X?.currentMouse?.distanceToSquared?.(X.targetMouse)??0,c=Math.abs((U?.current??0)-(U?.target??0)),l=W?.lastUpdateAt?performance.now()-W.lastUpdateAt:null;return{ready:!Ve,isAnimating:y,physicsUnlocked:_,focused:v,benchmarkMode:!1,postFxBufferMode:Fe,externalTextureOverridesEnabled:!0,assetProfile:Le,assetProfileLabel:g.label,performanceProfile:{qualityMode:`high`,qualitySelectionSource:`fixed`,qualityLowTierScore:null,lowPowerOuterMode:!1,maxDevicePixelRatio:Pt(),renderScale:Number(Mn().toFixed(3)),skyOnlyTargetFps:Lt()},bloomEnabled:e.bloomEnabled,bloomStrength:Number(R.currentStrength.toFixed(4)),savedBloomEnabled:D.bloomEnabled,requestedMsaaSamples:r,savedMsaaSamples:n,effectiveMsaaSamples:i,msaaLabel:ln(i),avgRenderMs:Number(T.avgRenderMs.toFixed(3)),avgFrameMs:Number(T.avgFrameMs.toFixed(3)),fps:Number(T.fps.toFixed(2)),resolution:t,viewport:{width:E.width,height:E.height,left:E.left,top:E.top,aspect:Number(E.aspect.toFixed(3)),clamped:E.isClamped},rendererInfo:{calls:F.info.render.calls,triangles:F.info.render.triangles,lines:F.info.render.lines,points:F.info.render.points,frame:F.info.render.frame,geometries:F.info.memory.geometries,textures:F.info.memory.textures},jsHeap:lr(),internals:{outerScenePaused:kr(),effectiveRenderPath:Ir()?`renderer`:`composer`,composerActive:zn,outerCanvasVisible:!Bn.hidden,screenContentMode:Cr,screenAppReadyForProjection:Oi(),renderRequested:K.renderRequested,projectionInvalidated:K.projectionInvalidated,hasActiveSceneAnimation:Kr(performance.now()),hasSkyAnimation:!He&&zr(),transitionSettleRemainingMs:Math.max(0,Number((K.transitionSettleUntil-performance.now()).toFixed(3))),walkVelocitySq:Number(a.toFixed(8)),parallaxVelocitySq:Number(o.toFixed(8)),parallaxDeltaSq:Number(s.toFixed(8)),screenOpacityDelta:Number(c.toFixed(8)),screenProjectionAgeMs:l==null?null:Number(l.toFixed(3))}}}function dr(e=2e4){return new Promise((t,n)=>{let r=performance.now();function i(){if(!Ve){t(ur());return}if(performance.now()-r>=e){n(Error(`Timed out waiting for outer scene readiness`));return}window.requestAnimationFrame(i)}i()})}function fr(e=3e4){return new Promise((t,n)=>{let r=performance.now();function i(){if(!Ve&&!y&&_){t(ur());return}if(performance.now()-r>=e){n(Error(`Timed out waiting for benchmark-stable scene state`));return}window.requestAnimationFrame(i)}i()})}function pr(e=2e4){return new Promise((t,n)=>{let r=performance.now();function i(){if(typeof ot==`function`){t(!0);return}if(performance.now()-r>=e){n(Error(`Timed out waiting for loader start prompt`));return}window.requestAnimationFrame(i)}i()})}function mr(e=3e3){return new Promise((t,n)=>{let r=Math.max(250,Number(e)||3e3),i=performance.now(),a=[],o=[],s=[],c=0;function l(){let e=ur(),n=e=>e.length?Number((e.reduce((e,t)=>e+t,0)/e.length).toFixed(3)):0,i=o.map(e=>e>0?1e3/e:0);t({...e,sampleDurationMs:r,sampleCount:a.length,windowAvgRenderMs:n(a),windowAvgFrameMs:n(o),windowAvgFps:n(i),windowMinFps:i.length?Number(Math.min(...i).toFixed(3)):0,windowMaxFps:i.length?Number(Math.max(...i).toFixed(3)):0,windowAvgHeapMB:n(s)})}function u(e){let t=ur();if(a.push(T.lastRenderMs||t.avgRenderMs),t.jsHeap?.usedMB!=null&&s.push(t.jsHeap.usedMB),c>0){let t=e-c;t>0&&t<250&&o.push(t)}if(c=e,performance.now()-i>=r){l();return}window.requestAnimationFrame(u)}dr().then(()=>u()).catch(n)})}window.__outerWebsiteDebug={getMetrics:ur,getWinXPRuntimeState:()=>({focusState:we(),presentationState:ye(),presentationProfile:Se()}),waitForReady:dr,waitForBenchmarkStable:fr,waitForStartPrompt:pr,getStartupTimeline:qt,clearStartupTimeline:Jt,getQualityProfile:()=>({mode:`high`,selectionSource:`fixed`}),startExperience:()=>typeof ot==`function`?(ot(),!0):!1,sampleMetrics:mr,compareSkyOnlyRedraw:rr};var z=new m(P,F.domElement);z.enabled=!1,z.target.copy(k.intro.startTarget);var hr=new a,gr=new fe,_r=new le,vr=new d,yr=new te;vr.setTranscoderPath(`/basis/`),vr.detectSupport(F),yr.setDecoderPath(`/draco/`),yr.preload(),gr.setKTX2Loader(vr),gr.setDRACOLoader(yr);var br=null,B=null,V=null,xr=null,Sr=null,Cr=`live`,wr=[],Tr=null,H=null,U={runtimeEnabled:!1,current:0,target:0,pointerEvents:`none`},W={quad:null,lastUpdateAt:0,lastMissStartedAt:0},G={currentGain:1,fullVolumeDistance:0,minimumVolumeDistance:0,lastSyncedVolume:null},K={frameId:null,renderRequested:!0,projectionInvalidated:!0,skyFrameTimeoutId:null,transitionSettleUntil:0},q={mode:`idle`,startedAt:0,duration:0,easingName:`easeInOutCubic`},Er=new Me,Dr=new je(wa),Or=null;document.addEventListener(`visibilitychange`,()=>{if(document.hidden)Or=performance.now(),Dr.suspend(!0),la();else{let e=performance.now(),t=Or===null?0:e-Or;Or=null,Er.shift(t,e),q.mode!==`idle`&&(q.startedAt+=Math.min(t,Math.max(0,e-q.startedAt))),Be?.(t,e),sa.lastFrameNow=performance.now(),K.projectionInvalidated=!0,Dr.suspend(!1)}});function kr(){return document.hidden||v&&!y}function Ar(e,t,n,r=performance.now()){q.mode=e,q.startedAt=r,q.duration=Math.max(1,t),q.easingName=n}function jr(){q.mode=`idle`,q.startedAt=0,q.duration=0,q.easingName=`easeInOutCubic`}function Mr(){return!1}function Nr(){let e=Mr();Bn.hidden!==e&&(Bn.hidden=e,F.domElement.style.display=`block`,F.domElement.style.visibility=e?`hidden`:`visible`,F.domElement.style.opacity=e?`0`:`1`,F.domElement.style.pointerEvents=e?`none`:`auto`)}function Pr(){let e={focused:v,animating:y,settled:kr()};sr(),Nr(),Zi(),Ee(e)}Ee(Te);function Fr(e){v!==e&&(v=e,e&&la(),Hi(),sr(),Nr(),Zi(),J())}function Ir(){return!zn}function Lr(e,t){if(!e||!t)return;let n=t.getBoundingClientRect(),r=at?.getBoundingClientRect()??n,i=e.offsetWidth||e.getBoundingClientRect().width||0,a=h.clamp(r.right-i,lt,window.innerWidth-lt-i);e.style.left=`${a}px`,e.style.top=`${n.bottom+ct}px`}function Rr(){Lr(b,Xe),Lr(x,nt)}function zr(){return!!H&&!kr()}function Br(e,t=Vt()){return e.lengthSq()<=t*t}function Vr(e,t=xt){return e.lengthSq()<=t*t}function Hr(){return U.runtimeEnabled&&Math.abs(U.current-U.target)>Ct}function Ur(){K.skyFrameTimeoutId!==null&&(window.clearTimeout(K.skyFrameTimeoutId),K.skyFrameTimeoutId=null)}function J(){K.renderRequested=!0,Ur(),Nr(),Dr.invalidate(K.projectionInvalidated?`projection`:`scene`)}function Wr(e=Rt()){Dr.decorate(Math.max(0,e))}function Gr(){K.projectionInvalidated=!0,J()}function Kr(e){return Re||document.hidden?!1:!!(Ve&&!He||y||Un()||e<K.transitionSettleUntil||Q.w||Q.a||Q.s||Q.d||Q[` `]||Q.control||$.active||$.velocity.lengthSq()>1e-6||X.velocity.lengthSq()>1e-6||!Jr(e)||X.currentMouse.distanceToSquared(X.targetMouse)>1e-6||Hr())}var qr=.001;function Jr(e){let t=e-ua>k.parallax.idleTimeout;return v||y||t||X.locked?Br(X.currentMouse):X.targetMouse.distanceTo(aa)<qr&&X.currentMouse.distanceTo(X.targetMouse)<qr&&X.velocity.length()<qr*.1}var Yr=800;function Xr(e=performance.now()){if(Re||document.hidden)return!0;if(Ve&&!He||y||Q.w||Q.a||Q.s||Q.d||Q[` `]||Q.control||$.active||$.velocity.lengthSq()>1e-6||X.velocity.lengthSq()>1e-6||!Jr(e))return!1;let t=k.parallax.idleTimeout-(e-ua);return!(!v&&!X.locked&&t>0&&!Br(X.currentMouse)&&t<Yr)}xe(Xr);function Zr(){P.rotateX(X.currentMouse.y*h.degToRad(k.parallax.maxAngle)),P.rotateY(-X.currentMouse.x*h.degToRad(k.parallax.maxAngle))}function Qr(e=ht){K.transitionSettleUntil=Math.max(K.transitionSettleUntil,performance.now()+e),J()}function $r(e=performance.now(),t=!1,n=!1){return K.projectionInvalidated?!0:t?!1:v?!!(y||Ve):y||Ve||n||K.renderRequested?!0:e-W.lastUpdateAt>=_t}function ei(e=performance.now(),{skyOnly:t=!1,sceneAnimationActive:n=!1,frameScale:r=1}={}){let i=performance.now(),a=Un();Gn(e),zn&&!qn(e)&&sr({forceRebuild:!0}),gi();let o=Un();(a||o)&&!y&&Zi(),t||Ii(),!zn||!I?F.render(j,P):t&&Zn()?Qn():$n(),t||Sa(r),$r(e,t,n)&&(li(),K.projectionInvalidated=!1,W.lastUpdateAt=e),ta(performance.now()-i,e)}function ti(e){let t=h.clamp(e,0,1);Math.abs(U.current-t)<.001||(U.current=t,V?.setVisualState({brightness:t}),Nr())}function ni(e){U.pointerEvents!==e&&(U.pointerEvents=e,V?.setVisualState({pointerEvents:e}))}function ri(e,t){if(un.cameraSpacePoint.copy(e).applyMatrix4(P.matrixWorldInverse).z>=-.001)return null;let n=un.projectedPoint.copy(e).project(P);return!Number.isFinite(n.x)||!Number.isFinite(n.y)?null:(t.x=E.left+(n.x*.5+.5)*E.width,t.y=E.top+(-n.y*.5+.5)*E.height,t)}function ii(){if(!B)return null;B.updateMatrixWorld(!0);for(let e=0;e<un.localCorners.length;e+=1)if(!ri(un.worldCorners[e].copy(un.localCorners[e]).applyMatrix4(B.matrixWorld),un.quad[e]))return null;return un.quad}function ai(e){return e.map(e=>({x:e.x,y:e.y}))}function oi(e,t){for(let n=0;n<t.length;n+=1)e[n].x=t[n].x,e[n].y=t[n].y}function si(e,t,n=yt){if(!e||!t||e.length!==t.length)return!1;for(let r=0;r<e.length;r+=1)if(Math.abs(e[r].x-t[r].x)>n||Math.abs(e[r].y-t[r].y)>n)return!1;return!0}function ci(){if(W.quad&&V?.isMounted?.()){W.lastMissStartedAt=0,V.setVisualState({pointerEvents:`none`,visible:!0}),Nr();return}W.quad=null,W.lastMissStartedAt=0,V?.setVisualState({pointerEvents:`none`,visible:!1}),Nr()}function li(){if(!B){ci();return}let e=performance.now(),t=ii();if(!t){if(W.quad&&(W.lastMissStartedAt===0&&(W.lastMissStartedAt=e),e-W.lastMissStartedAt<zt())){V?.setVisualState({visible:!0}),Nr();return}ci();return}if(W.lastMissStartedAt=0,!W.quad)W.quad=ai(t);else if(!si(W.quad,t))oi(W.quad,t);else{V&&V.setVisualState({visible:!0}),Nr();return}V&&(V.syncProjection(W.quad),V.setVisualState({visible:!0})),Nr()}function ui(e,t){if(!W.quad||W.quad.length!==4)return!1;let n=0;for(let r=0;r<W.quad.length;r+=1){let i=W.quad[r],a=W.quad[(r+1)%W.quad.length],o=(a.x-i.x)*(t-i.y)-(a.y-i.y)*(e-i.x);if(Math.abs(o)<=.5)continue;let s=Math.sign(o);if(n===0){n=s;continue}if(n!==s)return!1}return!0}function di(e){Qt=!1,e.traverse(e=>{e.isMesh&&(e.name.toLowerCase().includes(`screen_plane`)||e.name.toLowerCase().includes(`hitbox`)||(Array.isArray(e.material)?e.material:[e.material]).forEach(e=>{if(!e||Zt.includes(e))return;Zt.push(e);let t=e.onBeforeCompile,n=Object.prototype.hasOwnProperty.call(e,`customProgramCacheKey`),r=e.customProgramCacheKey;e.userData.outerWebsiteShockwaveMaterial={originalOnBeforeCompile:t,hadOwnCustomProgramCacheKey:n,originalCustomProgramCacheKey:r},e.onBeforeCompile=(n,r)=>{typeof t==`function`&&t.call(e,n,r),e.userData.shader=n,n.uniforms.uShockwaveRadius={value:0},n.uniforms.uShockwaveCenter={value:$t},n.uniforms.uEdgeIntensity={value:k.loader.shockwave.edgeIntensity},n.vertexShader=`
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
          `)},e.customProgramCacheKey=()=>`${typeof r==`function`?r.call(e):``}|${Et}`,e.needsUpdate=!0}))})}var fi=null;function pi(e){if(fi||Qt||!e)return fi;let t=new oe;t.environment=j.environment,t.environmentIntensity=j.environmentIntensity;let n=[];e.traverse(e=>{if(!e.isMesh)return;let r=Array.isArray(e.material)?e.material:[e.material];if(!r.some(e=>Zt.includes(e)))return;let i=r.map(e=>{let t=e.clone();return t.userData={},n.push(t),t}),a=new _e(e.geometry,Array.isArray(e.material)?i:i[0]);a.matrixAutoUpdate=!1,a.matrix.copy(e.matrixWorld),a.frustumCulled=!1,t.add(a)}),t.updateMatrixWorld(!0);let r=new i(1,1,{type:u});return fi=(async()=>{w(`shockwave.programWarmup.start`,{materials:n.length});let e=F.getRenderTarget();try{if(F.setRenderTarget(r),await F.compileAsync(t,P),Qt)return;F.setRenderTarget(r),F.render(t,P),w(`shockwave.programWarmup.end`)}catch(e){console.warn(`Shockwave program warmup skipped.`,e)}finally{F.setRenderTarget(e)}})(),fi.dispose=()=>{r.dispose(),n.forEach(e=>e.dispose())},fi}function mi(){if(Qt)return;Qt=!0,Zt.forEach(e=>{let t=e?.userData?.outerWebsiteShockwaveMaterial;t&&(e.onBeforeCompile=t.originalOnBeforeCompile,t.hadOwnCustomProgramCacheKey?e.customProgramCacheKey=t.originalCustomProgramCacheKey:delete e.customProgramCacheKey,delete e.userData.shader,delete e.userData.outerWebsiteShockwaveMaterial,e.needsUpdate=!0)}),J();let e=fi;e?.dispose&&window.setTimeout(()=>e.dispose(),2e3)}function hi(t,n={}){return t.wrapS=r,t.wrapT=se,new e({transparent:!0,uniforms:{tSky:{value:t},uExposure:{value:M.exposure},uSaturation:{value:M.saturation},uHighlights:{value:M.highlights},uWashout:{value:n.washout??M.washout},uLift:{value:n.lift??M.lift},uGamma:{value:n.gamma??M.gamma},uColorBalance:{value:M.colorBalance.clone()},uRepeat:{value:new o(n.repeatX??M.repeatX,n.repeatY??M.repeatY)},uOffsetY:{value:n.offsetY??M.offsetY},uSkyOpacity:{value:0}},vertexShader:`varying vec2 vUv; void main() { vUv = uv; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }`,fragmentShader:`
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
    `,side:0,toneMapped:!1,depthWrite:!1})}function gi(){let e=H?.material?.uniforms;if(!e)return;let t=Math.max(1e-4,N.bloom.strength??1e-4),n=h.clamp(R.currentStrength/t,0,1),r=M.bloomOffCompensation;e.uExposure.value=h.lerp(r.exposure,M.exposure,n),e.uSaturation.value=h.lerp(r.saturation,M.saturation,n),e.uHighlights.value=h.lerp(r.highlights,M.highlights,n),e.uWashout.value=h.lerp(r.washout,M.washout,n),e.uLift.value=h.lerp(r.lift,M.lift,n),e.uGamma.value=h.lerp(r.gamma,M.gamma,n),e.uColorBalance.value.lerpVectors(r.colorBalance,M.colorBalance,n)}var _i={computer:{path:g.lightMapPaths.computer}},vi={room:{path:g.bakedSurfacePaths.room},table:{path:g.bakedSurfacePaths.table},chairBack:{path:g.bakedSurfacePaths.chairBack},chairLeft:{path:g.bakedSurfacePaths.chairLeft},chairRight:{path:g.bakedSurfacePaths.chairRight}},yi=new Set([`room`,`table`]),bi={computer:{envMapIntensity:10.95,roughnessMin:.8}};function xi(e){e.map&&(e.map.colorSpace=n),e.emissiveMap&&(e.emissiveMap.colorSpace=n)}function Si(e){return e.includes(`room`)||e.includes(`wall`)||e.includes(`floor`)||e.includes(`ceiling`)?`room`:(e.includes(`table`)||e.includes(`desk`))&&!e.includes(`portable`)?`table`:e.includes(`chair_back`)||e.includes(`chair`)&&e.includes(`back`)?`chairBack`:e.includes(`chair_left`)||e.includes(`chair`)&&e.includes(`left`)?`chairLeft`:e.includes(`chair_right`)||e.includes(`chair`)&&e.includes(`right`)?`chairRight`:null}function Ci(e){return e.includes(`computer`)||e.includes(`pc`)||e.includes(`monitor`)||e.includes(`portable`)||e.includes(`bm86`)?`computer`:null}function wi(e){return yi.has(e)}async function Ti(e,t={}){let n=await hr.loadAsync(e);return n.flipY=t.flipY??!1,t.colorSpace&&(n.colorSpace=t.colorSpace),n}async function Ei(e,t={}){if(e.toLowerCase().endsWith(`.ktx2`)){let n=await vr.loadAsync(e);return t.colorSpace&&(n.colorSpace=t.colorSpace),n}return Ti(e,t)}function Di(e){V?.setVisualState({transition:e})}function Oi(){return!!V?.isMounted()}function ki(e=`preload`){return xr?(w(`screenOverlay.import.reuse`,{reason:e}),xr):(w(`screenOverlay.import.start`,{reason:e}),xr=De(()=>import(`./outer-screen-overlay-Bg5mmK4p.js`).then(t=>(w(`screenOverlay.import.end`,{reason:e}),t),t=>{throw xr=null,w(`screenOverlay.import.error`,{reason:e,message:t?.message??String(t)}),t}),__vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11,12])),xr)}async function Ai({standby:e=!1}={}){let t=performance.now();return w(`screenOverlay.ensure.start`,{hasOverlay:!!V,hasPendingModulePromise:!!xr,hasPendingOverlayPromise:!!Sr}),V?(w(`screenOverlay.ensure.end`,{branch:`cached`,elapsedMs:performance.now()-t}),V):(Sr||=ki(`ensure`).then(({createScreenHtmlOverlay:t})=>(V=t({width:O.width,height:O.height,standby:e}),G.lastSyncedVolume=null,V.setVisualState({opacity:U.current,brightness:1,pointerEvents:`none`,transition:``,visible:!1}),Nr(),Li(Y.getState().isMuted),Ri(Y.getState().volume),Gr(),V)),Sr.then(e=>(w(`screenOverlay.ensure.end`,{branch:`promise`,elapsedMs:performance.now()-t,mounted:e?.isMounted?.()??!1}),e)))}function ji(e){if(!e||B)return;B=new ge,j.add(B),e.updateWorldMatrix(!0,!1),e.geometry.computeBoundingBox();let t=e.geometry.boundingBox,n=new s;t.getCenter(n);let r=n.applyMatrix4(e.matrixWorld);B.position.copy(r),B.rotation.set(O.rotationX,O.rotationY,O.rotationZ,`YXZ`),B.translateZ(O.offsetZ),B.translateX(O.offsetX),B.translateY(O.offsetY);let i=new s;t.getSize(i);let a=[i.x,i.y,i.z].sort((e,t)=>t-e),o=a[0]/O.width*O.scaleMultiplier*O.scaleX,c=a[1]/O.height*O.scaleMultiplier*O.scaleY;B.scale.set(o,c,1),B.updateMatrixWorld(!0);let l=new s(0,0,1).applyQuaternion(B.quaternion).normalize();Yt.copy(B.position).addScaledVector(l,k.focus.distance),Yt.y+=k.focus.yOffset,Xt.copy(B.position),Xt.x+=k.focus.targetOffsetX,Xt.y+=k.focus.targetOffsetY,Xt.z+=k.focus.targetOffsetZ,G.fullVolumeDistance=Yt.distanceTo(B.position),G.minimumVolumeDistance=Math.max(G.fullVolumeDistance+1e-4,Dn.distanceTo(B.position),k.intro.startPos.distanceTo(B.position),k.unfocus.endPos.distanceTo(B.position)),G.currentGain=Ni(P.position.distanceTo(B.position)),Gr()}function Mi(e){return h.clamp(e,0,1)}function Ni(e){let t=G.fullVolumeDistance,n=Math.max(G.minimumVolumeDistance,t+1e-4);if(!(t>0)||!(n>t)||e<=t)return 1;if(e>=n)return Tn.minVolumeRatio;let r=(e-t)/(n-t),i=r*r*(3-2*r);return h.lerp(1,Tn.minVolumeRatio,i)}function Pi(e){Cr=`live`}function Fi(e){return Mi(e*G.currentGain)}function Ii(){if(!B||!Y||!Oi())return;let e=Ni(P.position.distanceTo(B.position));Math.abs(e-G.currentGain)<.001||(G.currentGain=e,Ri(Y.getState().volume))}function Li(e){if(V?.syncAudioControl){V.syncAudioControl({type:Ce.SET_MUTED,muted:!!e});return}let t=window.__outerWebsiteAudioRuntime;t&&t.setMuted(!!e)}function Ri(e){let t=Fi(e);if(G.lastSyncedVolume!==null&&Math.abs(G.lastSyncedVolume-t)<Tn.volumeSyncEpsilon)return;if(G.lastSyncedVolume=t,V?.syncAudioControl){V.syncAudioControl({type:Ce.SET_VOLUME,volume:t});return}let n=window.__outerWebsiteAudioRuntime;n&&n.setVolume(t)}function zi(){let e=(Array.isArray(wn.sources)?wn.sources:[wn.src]).filter(Boolean),t=new Audio;t.__outerWebsiteIgnoreGlobalAudio=!0,t.preload=`none`,t.loop=wn.loop,t.volume=wn.initialVolume,t.playsInline=!0;let n=!1,r=!0,i=0,a=null,o=0,s=null,c=0,l=null,u=null,d={hasSource:e.length>0,hasError:!1,isMuted:!1,isPlaying:!1,needsUserGesture:!1,unlockArmed:!1,volume:wn.initialVolume,wantsToPlay:wn.defaultWantsToPlay},ee=()=>e[o]||``,te=()=>{let e=ee();return e?(t.getAttribute(`src`)!==e&&(t.src=e),!0):(t.removeAttribute(`src`),!1)},ne=()=>o>=e.length-1?!1:(o+=1,n=!1,te()),f=()=>{typeof l==`function`&&l({...d,currentSource:ee()})},re=()=>{a!==null&&(window.clearTimeout(a),a=null)},p=()=>{i=0,re()},ie=(e,n=240)=>!d.wantsToPlay||d.needsUserGesture?!1:a===null?i>=12?!1:(a=window.setTimeout(()=>{a=null,i+=1,t.readyState===0&&!d.hasError&&t.load(),he(`${e}-retry-${i}`)},n),!0):!0,ae=({restoreVolume:e=!1}={})=>{c+=1,s!==null&&(window.cancelAnimationFrame(s),s=null),e&&(t.volume=Mi(d.volume))},oe=e=>{if(t.paused||t.muted||r||t.volume<=.001){e();return}ae();let n=c,i=t.volume,a=performance.now(),o=r=>{if(n!==c)return;let l=Math.min((r-a)/ut,1);if(t.volume=h.lerp(i,0,l),l<1){s=window.requestAnimationFrame(o);return}s=null,e()};s=window.requestAnimationFrame(o)},m=(e=!1)=>{t.muted=e||d.isMuted||r,t.volume=Mi(d.volume)},se=async()=>{if(!d.hasSource||n)return!1;m(!0);try{return await t.play(),p(),n=!0,d.hasError=!1,d.isPlaying=!0,d.needsUserGesture=!1,pe(),f(),!0}catch{return m(),ie(`prime-muted-autoplay`),!1}},ce=()=>!n||t.paused?!1:(ae({restoreVolume:!0}),t.currentTime=0,m(),p(),d.hasError=!1,d.isPlaying=!0,d.needsUserGesture=!1,pe(),f(),!0),le=()=>{if(!n||t.paused)return!1;t.pause();try{t.currentTime=0}catch{return!1}return d.isPlaying=!1,!0},ue=(e=`timeline-sync`)=>{let i=performance.now();if(w(`audio.releaseQueuedPlayback.start`,{reason:e,holdAudibleStart:r,wantsToPlay:d.wantsToPlay,isPlaying:d.isPlaying,hasPrimedMutedAutoplay:n,paused:t.paused}),!r){d.wantsToPlay&&!d.isPlaying?he(e):(m(),f()),w(`audio.releaseQueuedPlayback.end`,{reason:e,branch:`already-released`,elapsedMs:performance.now()-i});return}if(r=!1,d.needsUserGesture=!1,d.hasError=!1,p(),pe(),m(),!d.wantsToPlay){f(),w(`audio.releaseQueuedPlayback.end`,{reason:e,branch:`not-wanted`,elapsedMs:performance.now()-i});return}let a=le();he(a?`${e}-restart-from-zero`:e),w(`audio.releaseQueuedPlayback.end`,{reason:e,branch:a?`primed-restart`:`play`,elapsedMs:performance.now()-i})},de=()=>{window.setTimeout(()=>{t.currentTime<.25&&(t.currentTime=0),m(),f()},80)},fe=async()=>{m(!0);try{return await t.play(),p(),d.hasError=!1,d.isPlaying=!0,d.needsUserGesture=!1,pe(),de(),f(),!0}catch{return m(),!1}},pe=()=>{!d.unlockArmed||!u||([`pointerdown`,`keydown`,`touchstart`].forEach(e=>{window.removeEventListener(e,u,!0)}),u=null,d.unlockArmed=!1)},me=()=>{d.unlockArmed||=(u=()=>{pe(),d.wantsToPlay&&he(`user-gesture`)},[`pointerdown`,`keydown`,`touchstart`].forEach(e=>{window.addEventListener(e,u,!0)}),!0)},he=async(e=`manual`)=>{if(d.wantsToPlay=!0,ae({restoreVolume:!0}),!d.hasSource)return f(),!1;if(ce())return!0;d.hasError&&=(t.load(),!1),m();try{return await t.play(),p(),d.hasError=!1,d.isPlaying=!0,d.needsUserGesture=!1,pe(),f(),!0}catch(n){return d.isPlaying=!t.paused,n?.name===`NotAllowedError`?await fe()||(d.hasError=!1,ie(`autoplay-blocked`)||(d.needsUserGesture=!0,me())):n?.name===`AbortError`||n?.name===`NotSupportedError`?(d.hasError=!1,ie(n.name===`AbortError`?`media-aborted`:`media-not-ready`)||(d.hasError=!0)):(d.hasError=!0,console.warn(`[BGM] Unable to play audio (${e}).`,n)),f(),!1}},ge=()=>{d.wantsToPlay=!1,d.needsUserGesture=!1,p(),pe(),oe(()=>{t.pause(),ae({restoreVolume:!0}),d.isPlaying=!1,f()})},_e=()=>{if(d.isPlaying||d.wantsToPlay){ge();return}he(`toggle`)},ve=e=>{let t=()=>{d.isMuted=e,m(),Li(d.isMuted),f()};if(e!==d.isMuted){if(e){oe(t);return}ae({restoreVolume:!0}),t()}};return t.addEventListener(`play`,()=>{d.isPlaying=!0,f()}),t.addEventListener(`pause`,()=>{d.isPlaying=!1,f()}),t.addEventListener(`ended`,()=>{d.isPlaying=!1,f()}),t.addEventListener(`canplay`,()=>{d.wantsToPlay&&!d.isPlaying&&!d.needsUserGesture&&ie(`canplay`,0)}),t.addEventListener(`error`,()=>{let e=t.error?.code??null;if(e===1||e===null){ie(`media-load-aborted`);return}if(e===4){if(ne()){p(),d.hasError=!1,d.isPlaying=!1,t.load(),d.wantsToPlay&&(r?se():he(`media-source-fallback`)),f();return}if(ie(`media-source-error`,320))return}d.hasError=!0,d.isPlaying=!1,console.warn(`[BGM] Audio source could not be loaded: ${ee()}`),f()}),m(),d.hasSource&&te(),{getState(){return{...d,currentSource:ee()}},pause:ge,play:he,releaseQueuedPlayback:ue,setVolume:e=>{ae(),d.volume=Mi(e),d.volume>0&&d.isMuted&&(d.isMuted=!1),m(),Ri(d.volume),Li(d.isMuted),f()},setOnChange(e){l=e,f()},toggleMute:()=>{ve(!d.isMuted)},togglePlay:_e}}var Y=zi(),Bi={soundOn:`<svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#ff7b00" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"/><path d="M15.54 8.46a5 5 0 0 1 0 7.07"/><path d="M19.07 4.93a10 10 0 0 1 0 14.14"/></svg>`,soundOff:`<svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#ff7b00" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"/><line x1="23" y1="9" x2="17" y2="15"/><line x1="17" y1="9" x2="23" y2="15"/></svg>`,play:`<svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#ff7b00" stroke-width="2.3" stroke-linecap="round" stroke-linejoin="round"><polygon points="8 5 19 12 8 19 8 5"/></svg>`,pause:`<svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#ff7b00" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><line x1="9" y1="5" x2="9" y2="19"/><line x1="15" y1="5" x2="15" y2="19"/></svg>`,volumeLow:`<svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#ff7b00" stroke-width="2.3" stroke-linecap="round" stroke-linejoin="round"><polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"/><path d="M15 12a3 3 0 0 0 0-0.01"/></svg>`,volumeMid:`<svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#ff7b00" stroke-width="2.3" stroke-linecap="round" stroke-linejoin="round"><polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"/><path d="M15.5 9.5a4 4 0 0 1 0 5"/></svg>`,volumeHigh:`<svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#ff7b00" stroke-width="2.3" stroke-linecap="round" stroke-linejoin="round"><polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"/><path d="M15.5 8.5a5.5 5.5 0 0 1 0 7"/><path d="M18.8 6a9 9 0 0 1 0 12"/></svg>`,camUnfocused:`<svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#ff7b00" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z"/><circle cx="12" cy="13" r="4"/></svg>`,camFocused:`<svg width="13" height="13" viewBox="0 0 24 24" fill="#ff7b00" stroke="#ff7b00" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z"/><circle cx="12" cy="13" r="4"/></svg>`,fx:`<svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#ff7b00" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 7h8"/><path d="M4 17h14"/><path d="M14 7h6"/><path d="M10 17h4"/><circle cx="12" cy="7" r="2"/><circle cx="8" cy="17" r="2"/></svg>`},Vi={wasd:`<svg width="46" height="30" viewBox="0 0 46 30" fill="none" xmlns="http://www.w3.org/2000/svg">
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
  </svg>`};function Hi(){We&&(v?We.innerHTML=Bi.camFocused:We.innerHTML=Bi.camUnfocused)}function Ui(e){return e>=.75?Bi.volumeHigh:e>=.4?Bi.volumeMid:Bi.volumeLow}function Wi(e){return e.isMuted?`Muted`:`${Math.round(e.volume*100)}%`}function Gi(){rt!==null&&(window.clearTimeout(rt),rt=null)}function Ki(){Gi(),S&&(rt=window.setTimeout(()=>{qi(!1)},st))}function qi(e){e&&it&&Qi(!1),S=e,b&&b.classList.toggle(`is-open`,S),S?(Lr(b,Xe),Ki()):Gi()}function Ji(){let e=cn(Kn(),0),t=Jn(e);return{bloomEnabled:Wn(),bloomLabel:Wn()?`On`:`Off`,requestedMsaaSamples:e,effectiveMsaaSamples:t,msaaEnabled:t>0,msaaLabel:ln(t)}}function Yi(){let e=Ji();return`Bloom ${e.bloomLabel} | MSAA ${e.msaaLabel}`}function Xi(e,t,n,r=`On`,i=`Off`){e&&(e.classList.toggle(`is-active`,n),e.innerHTML=`<span>${t}</span><strong>${n?r:i}</strong>`)}function Zi(){let e=Ji();if(Ze&&(Ze.classList.toggle(`is-active`,it),Ze.title=Yi()),x&&(x.classList.toggle(`is-open`,it),it&&Lr(x,nt)),Qe&&(Qe.textContent=g.label),Xi(et,`Bloom`,e.bloomEnabled,`On`,`Off`),Xi(tt,`MSAA`,e.msaaEnabled,e.msaaLabel,`Off`),et&&(et.title=`Toggle Bloom`),tt&&(tt.title=`Cycle MSAA: 4x, 2x, Off`),$e){let{width:e,height:t}=cr(),n=T.avgRenderMs>0?T.avgRenderMs.toFixed(1):`0.0`,r=performance.now()-T.lastFrameNow>500?0:Math.round(T.fps);$e.textContent=`avg: ${n} ms    fps: ${r}    resolution: ${e}x${t}`}}function Qi(e){e&&S&&qi(!1),it=e,Zi(),J()}function $i(e){let t=cn(D.msaaSamples,0);D.bloomEnabled=!!e.bloomEnabled,D.msaaSamples=cn(e.msaaSamples,D.msaaSamples),sr({forceRebuild:cn(D.msaaSamples,0)!==t}),Zi(),Qr(600),J()}function ea(e){if(e===`msaaSamples`){let e=cn(D.msaaSamples,0),t=Dt.indexOf(e),n=Dt[t===-1?0:(t+1)%Dt.length];$i({...D,msaaSamples:n});return}$i({...D,[e]:!D[e]})}function ta(e,t=performance.now()){if(T.lastRenderMs=e,T.avgRenderMs=T.avgRenderMs===0?e:h.lerp(T.avgRenderMs,e,.18),T.lastFrameNow>0){let e=t-T.lastFrameNow;e>0&&e<250&&(T.avgFrameMs=T.avgFrameMs===0?e:h.lerp(T.avgFrameMs,e,.2),T.fps=T.avgFrameMs>0?1e3/T.avgFrameMs:0)}T.lastFrameNow=t,!(y||t-T.lastUiUpdate<250)&&(T.lastUiUpdate=t,Zi())}function na(e=Y.getState()){Ge&&(Ge.innerHTML=e.isMuted?Bi.soundOff:Bi.soundOn,Ge.title=e.isMuted?`Unmute all audio`:`Mute all audio`),Ke&&(Ke.innerHTML=e.isPlaying||e.wantsToPlay?Bi.pause:Bi.play,e.hasError?Ke.title=`BGM unavailable (${e.currentSource||`no source`})`:e.needsUserGesture&&!e.isPlaying?Ke.title=`Click to start music`:e.wantsToPlay&&!e.isPlaying?Ke.title=`Music queued to start`:Ke.title=e.isPlaying?`Pause music`:`Play music`),qe&&(qe.innerHTML=Ui(e.volume),qe.title=`Adjust volume (${Math.round(e.volume*100)}%)`),Je&&(Je.value=`${Math.round(e.volume*100)}`),Ye&&(Ye.textContent=Wi(e))}Y.setOnChange(na);function ra(){let e=document.createElement(`style`);e.textContent=`
    :root {
      --hud-glass-bg: rgba(80, 80, 80, 0.35);
      --hud-glass-border: rgba(255, 255, 255, 0.08);
      --hud-glass-shadow: none;
      --hud-glass-blur: blur(20px);
      --hud-font-main: ${gn};
      --hud-font-accent: ${_n};
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
      opacity: 0; transition: opacity ${Cn.fadeDuration}s ease;
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
      opacity: 0; transition: opacity ${Cn.fadeDuration}s ease;
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
      opacity: 0; transition: opacity ${Cn.fadeDuration}s ease;
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
  `,document.head.appendChild(e);let t=document.createElement(`div`);t.id=`ui-tl`,at=t;let n=document.createElement(`span`);n.id=`ui-name`,n.textContent=`Hanqi Zhao`,Ke=document.createElement(`button`),Ke.className=`ui-btn`,Ke.addEventListener(`click`,()=>{Y.togglePlay()});let r=document.createElement(`div`);Xe=r,r.className=`ui-volume-control`,qe=document.createElement(`button`),qe.className=`ui-btn`,qe.addEventListener(`click`,()=>{qi(!S)}),b=document.createElement(`div`),b.className=`ui-volume-panel`;let i=document.createElement(`div`);i.className=`ui-volume-title`,i.innerHTML=`<span>Volume</span>`,Ye=document.createElement(`span`),Ye.className=`ui-volume-value`,i.appendChild(Ye),Je=document.createElement(`input`),Je.className=`ui-volume-slider`,Je.type=`range`,Je.min=`0`,Je.max=`100`,Je.step=`1`,Je.addEventListener(`input`,e=>{Y.setVolume(Number(e.target.value)/100),Ki()}),b.appendChild(i),b.appendChild(Je),r.appendChild(qe);let a=document.createElement(`div`);nt=a,a.className=`ui-postfx-control`,Ze=document.createElement(`button`),Ze.className=`ui-btn`,Ze.innerHTML=Bi.fx,Ze.addEventListener(`click`,()=>{Qi(!it)}),x=document.createElement(`div`),x.className=`ui-postfx-panel`;let o=document.createElement(`div`);o.className=`ui-postfx-header`,o.innerHTML=`<span>Render FX</span>`,Qe=document.createElement(`span`),Qe.className=`ui-postfx-summary`,Qe.textContent=g.label,o.appendChild(Qe);let s=document.createElement(`div`);s.className=`ui-postfx-toggles`,et=document.createElement(`button`),et.className=`ui-postfx-toggle`,et.type=`button`,et.addEventListener(`click`,()=>{ea(`bloomEnabled`)}),tt=document.createElement(`button`),tt.className=`ui-postfx-toggle`,tt.type=`button`,tt.addEventListener(`click`,()=>{ea(`msaaSamples`)}),s.appendChild(et),s.appendChild(tt),x.appendChild(o),x.appendChild(s),a.appendChild(Ze),Ge=document.createElement(`button`),Ge.className=`ui-btn`,Ge.addEventListener(`click`,()=>{Y.toggleMute()}),We=document.createElement(`button`),We.className=`ui-btn`,We.innerHTML=Bi.camUnfocused,We.title=`Toggle focus`,We.addEventListener(`click`,()=>{_&&(v?ya():va())}),t.appendChild(n),t.appendChild(We),t.appendChild(Ke),t.appendChild(Ge),t.appendChild(r),t.appendChild(a),document.body.appendChild(t),document.body.appendChild(b),document.body.appendChild(x),Rr(),document.addEventListener(`pointerdown`,e=>{let t=Xe?.contains(e.target)||b?.contains(e.target),n=nt?.contains(e.target)||x?.contains(e.target);S&&t?Ki():S&&qi(!1),it&&!n&&Qi(!1)}),document.addEventListener(`pointermove`,()=>{S&&Ki()},{passive:!0}),document.addEventListener(`wheel`,()=>{S&&Ki()},{passive:!0}),document.addEventListener(`keydown`,e=>{if(e.key===`Escape`){qi(!1),Qi(!1);return}S&&Ki()}),na(),Zi();let c=document.createElement(`div`);c.id=`ui-bl`;let l=document.createElement(`div`);l.className=`ui-hint-row`,l.innerHTML=`
    <div class="ui-hint">${Vi.wasd}<span>: move</span></div>
    <div class="ui-hint">${Vi.space}<span>: up</span></div>
    <div class="ui-hint">${Vi.ctrl}<span>: down</span></div>
  `,$e=document.createElement(`div`),$e.className=`ui-hud-stats`,c.appendChild(l),c.appendChild($e),document.body.appendChild(c);let u=document.createElement(`div`);return u.id=`ui-br`,u.innerHTML=`<div class="ui-copy">© Copyright 2026 Hanqi Zhao.</div>`,document.body.appendChild(u),Zi(),{tl:t,bl:c,br:u}}async function ia(){try{let e=Promise.all(Object.entries(vi).map(async([e,t])=>[e,await Ei(t.path,{colorSpace:n})])),t=Promise.all(Object.entries(_i).map(async([e,t])=>{let n=await Ei(t.path,{colorSpace:``});return n.channel=0,[e,n]})),[r,i,a,o,c]=await Promise.all([g.visualSky.kind===`hdr`?_r.loadAsync(g.visualSky.path):Ti(g.visualSky.path,{colorSpace:n,flipY:g.visualSky.flipY??!1}),g.lightingEnvironment.kind===`hdr`?_r.loadAsync(g.lightingEnvironment.path):Ti(g.lightingEnvironment.path,{colorSpace:n,flipY:g.lightingEnvironment.flipY??!1}),gr.loadAsync(Oe),e,t]);yn.ready(`textures`),yn.ready(`model`);let l=Object.fromEntries(o),u=Object.fromEntries(c),d=new ae(200,32,20);d.scale(-1,1,1),H=new _e(d,hi(r,g.visualSky)),H.layers.enable(Yn),H.position.y=-100,H.rotation.y=M.rotationY,j.add(H),i.mapping=303,j.environment=i,j.environmentIntensity=g.lightingEnvironment.intensity??1.2;let te=a.scene;if(te.traverse(e=>{if(!e.isMesh)return;let t=(e.name??``).toLowerCase();(t.includes(`computer`)||t.includes(`screen`)||t.includes(`monitor`))&&wr.push(e),t.includes(`screen_plane`)&&(br=e,$t.setFromMatrixPosition(e.matrixWorld),$t.add(k.loader.shockwave.centerOffset),br.material=new ee({colorWrite:!1,depthWrite:!0}),br.renderOrder=-1)}),di(te),te.traverse(e=>{if(!e.isMesh)return;let t=(e.name??``).toLowerCase();t.includes(`screen_plane`)||(Array.isArray(e.material)?e.material:[e.material]).forEach(e=>{if(!e)return;xi(e);let n=Si(t),r=Ci(t);if(n&&l[n]){e.map=l[n],e.dithering=wi(n),e.needsUpdate=!0;return}e.isMeshStandardMaterial&&r&&u[r]&&(e.lightMap=u[r],bi[r]&&(e.envMapIntensity=bi[r].envMapIntensity,e.roughness<bi[r].roughnessMin&&(e.roughness=bi[r].roughnessMin)),e.needsUpdate=!0)})}),j.add(te),wr.length>0){let e=new ne;wr.forEach(t=>{t.updateMatrixWorld(!0),e.union(new ne().setFromObject(t))});let t=new s;e.getCenter(t);let n=new s;e.getSize(n),Tr=new _e(new f(n.x,n.y,n.z),new ee({colorWrite:!1,depthWrite:!1,transparent:!0,opacity:0})),Tr.position.copy(t),Tr.scale.setScalar(k.focus.hitboxScale),Tr.visible=!1,j.add(Tr),br||($t.copy(t),$t.add(k.loader.shockwave.centerOffset))}br&&ji(br),yn.ready(`scene`);let re=await nr();ei(performance.now()),re(),yn.ready(`gpu`),Re=!1,yn.transition(`awaitingGesture`),w(`startup.assets.readyForGesture`),ki(`start-prompt`).then(e=>e.prepareDesktop()).then(()=>Ai({standby:!0})).catch(e=>console.warn(`Desktop preload will retry on mount.`,e)),He=!0,pi(te),J(),await bn(),yn.transition(`intro`),He=!1,w(`loader.gesture.await.end`),w(`loader.fade.start`,{fadeTimeMs:k.loader.fadeTime*1e3}),A.style.opacity=`0`,await new Promise(e=>setTimeout(e,k.loader.fadeTime*1e3)),w(`loader.fade.end`),A.remove(),w(`loader.removed`),await Ai(),V?.powerOn?.(),w(`screenOverlay.ready`);let p=ra();w(`outerHud.overlay.created`);{let e=performance.now();Be=(t,n)=>{e+=Math.min(t,Math.max(0,n-e))},w(`loadingTimeline.start`);let t=!1,n=e=>e===1?1:1-2**(-10*e),r=e=>e<.5?4*e*e*e:1-(-2*e+2)**3/2;function i(){let i=(performance.now()-e)/1e3;if(!_){let e=k.loader.cameraPush,t=0;i>=e.startTime&&(t=Math.min((i-e.startTime)/e.duration,1)),P.position.lerpVectors(Dn,k.intro.startPos,r(t)),P.lookAt(z.target)}let a=k.loader.shockwave,o=0;if(i>=a.startTime&&(o=Math.min((i-a.startTime)/a.duration,1)),!Qt){let e=o>=1?Tt:h.lerp(a.startRadius,a.endRadius,n(o));Zt.forEach(t=>{t.userData.shader&&(t.userData.shader.uniforms.uShockwaveRadius.value=e)}),o>=1&&mi()}let s=k.loader.skyFade,c=0;i>=s.startTime&&(c=Math.min((i-s.startTime)/s.duration,1)),H&&H.material&&(H.material.uniforms.uSkyOpacity.value=c),!_&&i>=k.loader.controlsUnlockTime&&(_=!0,w(`loadingTimeline.physicsUnlocked`,{elapsedSec:i}),X.locked=!0,X.targetMouse.set(0,0),X.currentMouse.set(0,0),X.lockBaseMouse.copy(aa),da());let l=k.loader.screenFade;i>=l.startTime&&!Ue&&(Ue=!0,w(`loadingTimeline.screenFade.start`,{elapsedSec:i,durationSec:l.duration}),U.runtimeEnabled=!1,B&&V&&(Di(`opacity ${l.duration}s ease-in-out`),requestAnimationFrame(()=>{w(`loadingTimeline.screenFade.visibleFrame`),V.setVisualState({opacity:1,visible:!0}),setTimeout(()=>{B&&V&&(Di(``),U.runtimeEnabled=!0,U.target=1,ti(1),w(`loadingTimeline.screenFade.runtimeEnabled`))},l.duration*1e3+100)}))),!t&&i>=Cn.appearAt&&(t=!0,p.tl.style.opacity=`1`,p.bl.style.opacity=`1`,p.br.style.opacity=`1`,w(`outerHud.overlay.visible`,{elapsedSec:i})),i>=Math.max(k.loader.cameraPush.startTime+k.loader.cameraPush.duration,a.startTime+a.duration,s.startTime+s.duration,l.startTime+l.duration,k.loader.controlsUnlockTime)&&(Ve=!1,ze=null,Be=null,yn.transition(`roomInteractive`),w(`loadingTimeline.complete`,{elapsedSec:i}))}ze=i,i(),J()}}catch(e){console.error(e),Re=!0,Dr.suspend(!0),A.isConnected||document.body.appendChild(A),A.style.opacity=`1`,A.style.pointerEvents=`auto`,A.querySelector(`#hud-status`).textContent=`Unable to prepare the room.`;let t=document.createElement(`button`);t.textContent=`Retry loading`,t.onclick=()=>window.location.reload(),A.querySelector(`.hud-core`).appendChild(t)}}var aa=new o,X={locked:!0,lockBaseMouse:new o,targetMouse:new o,currentMouse:new o,velocity:new o},oa={lastIdleSampleAt:0},sa={lastFrameNow:0},Z={forward:new s,right:new s,up:new s(0,1,0),rawDir:new s,targetVel:new s,actualVel:new s,nextPos:new s,delta:new s,originalQuat:new he,zeroMouse:new o(0,0),parallaxDiff:new o},ca={normal:new s,toCamera:new s},Q={w:!1,a:!1,s:!1,d:!1," ":!1,control:!1};function la(){Object.keys(Q).forEach(e=>{Q[e]=!1}),$.active=!1,$.chargeStart=0,$.releaseStart=0,$.dist=0,$.currentDir.set(0,0,0),$.velocity.set(0,0,0)}window.addEventListener(`blur`,()=>{la(),_&&!v&&J()});var ua=performance.now();function da(){ua=performance.now()}window.addEventListener(`pointermove`,e=>{let t=sn(e.clientX,e.clientY);if(aa.x=t.x,aa.y=t.y,v&&!y||!_)return;let n=performance.now(),r=!y&&!v&&X.locked;r&&n-oa.lastIdleSampleAt<Bt()||(r&&(oa.lastIdleSampleAt=n),da(),!y&&!v&&X.locked&&aa.distanceTo(X.lockBaseMouse)>k.parallax.unlockThreshold&&(X.locked=!1),J())},{passive:!0}),window.addEventListener(`keydown`,e=>{if(v||y||!_)return;da();let t=e.key.toLowerCase();t===` `&&e.preventDefault(),Q[t]!==void 0&&(Q[t]=!0),J()},{passive:!1}),window.addEventListener(`keyup`,e=>{let t=e.key.toLowerCase();if(Q[t]===void 0)return;let n=Q[t];Q[t]=!1,!(!n||!_||v)&&(da(),J())}),window.addEventListener(`wheel`,()=>{v&&!y||_&&(da(),J())},{passive:!0}),F.domElement.addEventListener(`contextmenu`,e=>e.preventDefault());var fa={linear:e=>e,easeOutCubic:e=>1-(1-e)**3,easeInOutCubic:e=>e<.5?4*e*e*e:1-(-2*e+2)**3/2},pa=null,ma=!1;function ha(){pa!==null&&(window.clearTimeout(pa),pa=null)}function ga(){!ma||y||!v||!_||(ma=!1,window.requestAnimationFrame(()=>{!y&&v&&_&&ya()}))}function _a(e,t,n,r,i,a,o,{emitStartState:s=!0}={}){s&&(y=!0,Pr());let c=performance.now();Ar(v?`focus`:`unfocus`,i,a,c);let l=q.mode;w(`focus.cameraTween.start`,{mode:l,durationMs:i,easingName:a});let u=fa[a]||fa.easeInOutCubic;J(),Er.start({now:c,duration:i,update(i){let a=u(i);P.position.lerpVectors(e,n,a),z.target.lerpVectors(t,r,a),P.lookAt(z.target)},complete(){jr(),y=!1,K.projectionInvalidated=!0,J(),Pr(),$.velocity.set(0,0,0),X.locked=!0,X.lockBaseMouse.copy(aa),X.targetMouse.set(0,0),X.currentMouse.set(0,0),X.velocity.set(0,0),da(),o?.(),ga(),w(`focus.cameraTween.end`,{mode:l,elapsedMs:performance.now()-c})}})}function va(){if(v||!_){w(`focus.transition.blocked`,{target:`focus`,isAnimating:y,isFocused:v,isPhysicsUnlocked:_});return}w(`focus.transition.start`,{target:`focus`}),ha(),Er.cancel(),ma=!1,y=!0,Fr(!0),Pr(),J(),_a(P.position.clone(),z.target.clone(),Yt,Xt,k.focus.duration,k.focus.easing,null,{emitStartState:!1})}async function ya(){if(!v||!_){w(`focus.transition.blocked`,{target:`unfocus`,isAnimating:y,isFocused:v,isPhysicsUnlocked:_});return}w(`focus.transition.start`,{target:`unfocus`}),ha(),Er.cancel(),ma=!1,y=!0,Pr(),Fr(!1),!(!y||v)&&(Pr(),J(),pa=window.setTimeout(()=>{pa=null,_a(P.position.clone(),z.target.clone(),k.unfocus.endPos,k.unfocus.endTarget,k.unfocus.duration,k.unfocus.easing,null,{emitStartState:!1})},Math.max(0,k.unfocus.preDelay??0)))}var ba=new l;F.domElement.addEventListener(`pointerdown`,e=>{if(!_||e.button!==0)return;let t=Oi()?ui(e.clientX,e.clientY):!1;if(w(`focus.pointerdown.canvas`,{button:e.button,pointerType:e.pointerType,isPhysicsUnlocked:_,isAnimating:y,isFocused:v,pointerInsideScreen:t}),y){v&&!t&&(ma=!0,w(`focus.unfocus.queued`,{source:`canvas-pointerdown`}));return}da();let n=sn(e.clientX,e.clientY);if(aa.x=n.x,aa.y=n.y,J(),v){if(t){w(`focus.pointerdown.insideFocusedScreen`);return}w(`focus.pointerdown.requestUnfocus`,{source:`canvas`}),ya();return}if(t){w(`focus.pointerdown.requestFocus`,{source:`screen-bounds`}),va();return}ba.setFromCamera(aa,P);let r=Tr?[Tr]:wr;if(ba.intersectObjects(r,!0).length>0&&B){let e=new s(0,0,1).applyQuaternion(B.quaternion).normalize(),t=new s().subVectors(P.position,B.position).normalize(),n=e.angleTo(t)*(180/Math.PI);w(`focus.pointerdown.hitboxIntersect`,{angleDegree:n,maxTriggerAngle:k.focus.maxTriggerAngle}),n<=k.focus.maxTriggerAngle&&(w(`focus.pointerdown.requestFocus`,{source:`computer-hitbox`}),va())}J()});function xa(e){return!!(at?.contains(e)||b?.contains(e)||x?.contains(e))}document.addEventListener(`pointerdown`,e=>{if(!_||e.button!==0)return;let t=xa(e.target),n=Oi()?ui(e.clientX,e.clientY):!1;if(w(`focus.pointerdown.document`,{button:e.button,pointerType:e.pointerType,isPhysicsUnlocked:_,isAnimating:y,isFocused:v,pointerInsideUi:t,clickedInsideScreen:n}),!t){if(!v){!y&&n&&(w(`focus.pointerdown.requestFocus`,{source:`document-screen-bounds`}),va());return}if(!n){if(y){ma=!0,w(`focus.unfocus.queued`,{source:`document-pointerdown`});return}w(`focus.pointerdown.requestUnfocus`,{source:`document`}),ya()}}},!0);function Sa(e=1){if(!br||!B)return;let t=v&&!y&&Oi();if(Pi(`live`),!Ue){ni(t?`auto`:`none`);return}if(!U.runtimeEnabled){ni(t?`auto`:`none`);return}let n=ca.normal.set(0,0,1).applyQuaternion(B.quaternion).normalize(),r=ca.toCamera.subVectors(P.position,B.position).normalize(),i=P.position.distanceTo(B.position),a=n.dot(r)>=0,o=0,s=`none`;if(t)o=1,s=`auto`;else if(a){let e=k.shield.maxClickDistance+k.shield.fadeDistance;if(i<=k.shield.maxClickDistance)o=1;else if(i>=e)o=k.shield.dimOpacity;else{let e=1-(i-k.shield.maxClickDistance)/k.shield.fadeDistance;o=h.lerp(k.shield.dimOpacity,1,e)}}U.target=o;let c=h.lerp(U.current,U.target,Ut(k.shield.opacityLerp,e)),l=Math.abs(c-U.target)<.002?U.target:c;ti(Math.abs(l-U.target)<=Ct?U.target:l),ni(s)}var $={active:!1,chargeStart:0,releaseStart:0,dist:0,currentDir:new s,velocity:new s};function Ca(e){let t=Math.max(1,Math.min(8,Math.ceil(e))),n=e/t,r=(1-h.clamp(k.parallax.springFriction,0,1))**n;for(let e=0;e<t;e+=1){let e=Z.parallaxDiff.subVectors(X.targetMouse,X.currentMouse);X.velocity.add(e.multiplyScalar(k.parallax.springAccel*n)),X.velocity.multiplyScalar(r),X.currentMouse.addScaledVector(X.velocity,n)}}function wa(e){if(Re||document.hidden)return;ze?.(),Er.tick(e),K.frameId=null;let t=sa.lastFrameNow||e-kt,n=Math.max(0,e-t),r=Ht(n),i=Ht(n,jt);sa.lastFrameNow=e;let a=!He&&zr(),o=K.renderRequested,s=Kr(e),c=s||a;if(!c&&!o)return;if(H&&a&&(H.rotation.y+=k.sky.rotationSpeed*i),!_){ei(e,{skyOnly:!1,sceneAnimationActive:!0,frameScale:r}),K.renderRequested=!1,c&&J();return}if(!s&&a&&!o){P.lookAt(z.target);let t=Z.originalQuat.copy(P.quaternion);Zr(),ei(e,{skyOnly:!0,sceneAnimationActive:!1,frameScale:r}),P.quaternion.copy(t),K.renderRequested=!1,Wr();return}let l=e-ua>k.parallax.idleTimeout;if(!v&&!y){let t=Z.forward;P.getWorldDirection(t),t.y=0,t.normalize();let n=Z.right.crossVectors(t,P.up).normalize(),i=Z.up,a=Z.rawDir.set(0,0,0);Q.w&&a.add(t),Q.s&&a.sub(t),Q.a&&a.sub(n),Q.d&&a.add(n),Q[` `]&&a.add(i),Q.control&&a.sub(i),a.lengthSq()>0?($.releaseStart=0,$.active?$.currentDir.lerp(a.normalize(),Ut(k.walk.dirLerp,r)).normalize():($.chargeStart===0&&($.chargeStart=e),e-$.chargeStart>k.walk.chargeTime&&($.active=!0,$.dist=0,$.currentDir.copy(a.normalize())))):($.chargeStart=0,$.active&&($.releaseStart===0&&($.releaseStart=e),e-$.releaseStart>k.walk.releaseGrace&&($.active=!1)),l&&($.active=!1,$.releaseStart=0,$.currentDir.set(0,0,0),$.velocity.set(0,0,0))),$.active&&$.dist>=k.walk.maxDist&&($.active=!1);let o=Z.targetVel.set(0,0,0);if($.active?(o.copy($.currentDir).multiplyScalar(k.walk.speed),$.velocity.lerp(o,Ut(k.walk.acceleration,r))):($.velocity.lerp(o,Ut(k.walk.deceleration,r)),Vr($.velocity)&&$.velocity.set(0,0,0)),$.velocity.lengthSq()>1e-6){$.dist+=$.velocity.length()*r;let e=Z.actualVel.copy($.velocity),t=k.walk.bounds,n=k.walk.dampingZone;e.x<0&&P.position.x-t.minX<n?e.x*=Math.max(0,(P.position.x-t.minX)/n):e.x>0&&t.maxX-P.position.x<n&&(e.x*=Math.max(0,(t.maxX-P.position.x)/n)),e.y<0&&P.position.y-t.minY<n?e.y*=Math.max(0,(P.position.y-t.minY)/n):e.y>0&&t.maxY-P.position.y<n&&(e.y*=Math.max(0,(t.maxY-P.position.y)/n)),e.z<0&&P.position.z-t.minZ<n?e.z*=Math.max(0,(P.position.z-t.minZ)/n):e.z>0&&t.maxZ-P.position.z<n&&(e.z*=Math.max(0,(t.maxZ-P.position.z)/n));let i=Z.nextPos.copy(P.position).addScaledVector(e,r);i.x<=t.minX?(i.x=t.minX,$.velocity.x=0):i.x>=t.maxX&&(i.x=t.maxX,$.velocity.x=0),i.y<=t.minY?(i.y=t.minY,$.velocity.y=0):i.y>=t.maxY&&(i.y=t.maxY,$.velocity.y=0),i.z<=t.minZ?(i.z=t.minZ,$.velocity.z=0):i.z>=t.maxZ&&(i.z=t.maxZ,$.velocity.z=0);let a=Z.delta.subVectors(i,P.position);P.position.copy(i),z.target.add(a)}}P.lookAt(z.target);let u=Z.originalQuat.copy(P.quaternion),d=Ut(k.parallax.catchupSpeed,r);v||y||l||X.locked?X.targetMouse.lerp(Z.zeroMouse,d):X.targetMouse.lerp(aa,d),Ca(r),l&&(Br(X.targetMouse)&&X.targetMouse.set(0,0),Br(X.velocity)&&X.velocity.set(0,0),Br(X.currentMouse)&&Br(X.targetMouse)&&Br(X.velocity)&&X.currentMouse.set(0,0));let ee=X.currentMouse.y*h.degToRad(k.parallax.maxAngle),te=-X.currentMouse.x*h.degToRad(k.parallax.maxAngle);P.rotateX(ee),P.rotateY(te),ei(e,{skyOnly:a&&!s&&!o,sceneAnimationActive:s,frameScale:r}),P.quaternion.copy(u),K.renderRequested=!1,s?J():a&&Wr()}window.addEventListener(`resize`,()=>{on(),On(),An(),P.aspect=E.aspect,P.updateProjectionMatrix(),en!==null&&window.clearTimeout(en),en=window.setTimeout(()=>{en=null,sr({forceRebuild:!0}),Zi(),J()},wt),Rr(),Gr()}),ia(),J();