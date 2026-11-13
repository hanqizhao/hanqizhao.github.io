const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/outer-screen-overlay-BpJLfdd7.js","assets/createWinXPHost-TB3hANri.js","assets/rolldown-runtime-BVbofQct.js","assets/preload-helper-DWTEM3RW.js","assets/react-vendor-aHYhdYD6.js","assets/DesktopPreparationContext-BSY2MTtZ.js","assets/DesktopViewportContext-BvIqTV0r.js","assets/desktopPresentationProfile-CVnTUj2M.js","assets/runtimeBridge-BbQNkrZH.js","assets/globalAudio-BLDl5KfZ.js","assets/publicPath-SdK1OGf5.js","assets/visibleTimeout-DctrY-yE.js","assets/createWinXPHost-BSxTm-g0.css"])))=>i.map(i=>d[i]);
import"./modulepreload-polyfill-Cf3xff8G.js";import{A as e,C as t,D as n,E as r,O as i,S as a,T as o,_ as s,a as c,b as l,c as u,d,f as ee,g as te,h as f,i as ne,k as p,l as re,m,n as ie,o as ae,p as oe,r as h,s as se,t as ce,u as le,v as ue,w as de,x as fe,y as pe}from"./three-vendor-DKD55Jen.js";import{t as me}from"./desktopPresentationProfile-CVnTUj2M.js";import{a as he,i as ge,l as _e,n as ve,o as ye,t as be,u as xe}from"./runtimeBridge-BbQNkrZH.js";import{t as Se}from"./preload-helper-DWTEM3RW.js";var Ce=`/models/room_all.glb`,we={current:{visualSkyLdr:new URL(`/assets/new_sky_ldr-yZ_KpEae.jpg`,``+import.meta.url).href,lightingLdr:new URL(`/assets/room_ldr-DOcZ7og-.jpg`,``+import.meta.url).href,room:new URL(`/assets/room%20baked-KoBuYlPf.ktx2`,``+import.meta.url).href,table:new URL(`/assets/table%20baked-DFp0K4D2.ktx2`,``+import.meta.url).href,chairBack:new URL(`/assets/chair%20back%20final-sbWclMz4.ktx2`,``+import.meta.url).href,chairLeft:new URL(`/assets/chair%20left%20final-BjZ_O-yh.ktx2`,``+import.meta.url).href,chairRight:new URL(`/assets/chair%20right%20final-BtcJ8_ie.ktx2`,``+import.meta.url).href,computer:new URL(`/assets/computer%20shadow-D5HsGwbv.ktx2`,``+import.meta.url).href}},g={label:`Slim`,visualSky:{kind:`ldr`,path:we.current.visualSkyLdr,flipY:!0},lightingEnvironment:{kind:`ldr`,path:we.current.lightingLdr,flipY:!0,intensity:1.2},bakedSurfacePaths:{room:we.current.room,table:we.current.table,chairBack:we.current.chairBack,chairLeft:we.current.chairLeft,chairRight:we.current.chairRight},lightMapPaths:{computer:we.current.computer}},Te=class{constructor(e,t=()=>{}){this.stages=new Map(e.map(e=>[e,!1])),this.onChange=t,this.state=`preparing`}ready(e){if(!this.stages.has(e))throw Error(`Unknown startup stage: ${e}`);this.stages.set(e,!0),this.onChange(this.snapshot())}transition(e){this.state=e,this.onChange(this.snapshot())}snapshot(){let e=[...this.stages.values()].filter(Boolean).length;return{state:this.state,completed:e,total:this.stages.size,pending:[...this.stages].filter(([,e])=>!e).map(([e])=>e)}}},Ee=class{constructor(e,{request:t=e=>window.requestAnimationFrame(e),cancel:n=e=>window.cancelAnimationFrame(e)}={}){this.frame=e,this.request=t,this.cancel=n,this.frameId=null,this.timer=null,this.suspended=!1,this.reasons=new Set,this.lastReasons=[],this.frameCount=0}invalidate(e=`scene`){this.reasons.add(e),clearTimeout(this.timer),this.timer=null,!(this.suspended||this.frameId!==null)&&(this.frameId=this.request(e=>{this.frameId=null,this.lastReasons=[...this.reasons],this.reasons.clear(),this.frameCount++,this.frame(e)}))}decorate(e){this.suspended||this.frameId!==null||this.timer!==null||(this.timer=setTimeout(()=>{this.timer=null,this.invalidate(`sky`)},e))}suspend(e){this.suspended=e,e?(this.frameId!==null&&this.cancel(this.frameId),clearTimeout(this.timer),this.frameId=null,this.timer=null):this.invalidate(`recovering`)}dispose(){this.suspend(!0),this.reasons.clear()}},De=class{constructor(){this.active=null}start({now:e,duration:t,update:n,complete:r}){this.active={startedAt:e,duration:Math.max(1,t),update:n,complete:r},this.tick(e)}tick(e){let t=this.active;if(!t)return!1;let n=Math.min(1,Math.max(0,(e-t.startedAt)/t.duration));return t.update(n),n===1&&this.active===t&&(this.active=null,t.complete?.()),!!this.active}shift(e,t=1/0){this.active&&(this.active.startedAt+=Math.min(e,Math.max(0,t-this.active.startedAt)))}cancel(){this.active=null}},Oe=new Set([`legacy`,`single-scene`,`compact`]),ke=new URLSearchParams(window.location.search).get(`postfxBuffers`),Ae=Oe.has(ke)?ke:`compact`;function je(e,t,n){if(Ae!==`legacy`){if(e.passes.at(-1)!==n||e.passes.slice(0,-1).some(e=>e.needsSwap))throw Error(`Compact postprocessing requires an in-place chain and final OutputPass.`);if(n.needsSwap=!1,Ae===`compact`)for(let e of[t.renderTargetBright,...t.renderTargetsHorizontal,...t.renderTargetsVertical])e.depthBuffer=!1,e.stencilBuffer=!1}}var Me=`slim`;xe(me());var Ne=!0,Pe=null,Fe=null,Ie=!0,Le=!1,_=!1,Re=!1,v=!1,y=!1,ze=null,Be=null,Ve=null,He=null,b=null,Ue=null,We=null,Ge=null,Ke=null,qe=null,Je=null,Ye=null,Xe=null,Ze=null,Qe=null,x=!1,$e=null,et=!1,tt=null,nt=null,rt=2200,it=10,at=12,ot=220,st=2,ct=2,lt=1,ut=.7,dt=1800,ft=18,pt=1e3/10,mt=1200,ht=.25,gt=32,_t=1e-4,vt=.01,yt=.01,bt=150,xt=9999,St=`outer-website:shockwave-v1`,Ct=[4,2,0],wt=!0,Tt=1e3/180,Et=1e3/30,Dt=250,Ot=800,kt=`outer-website:`;function At(){return ct}function jt(){return lt}function Mt(){return ut}function Nt(){return ft}function Pt(){return 1e3/Nt()}function Ft(){return mt}function It(){return gt}function Lt(){return vt}function Rt(e,t=Et){return(Number.isFinite(e)&&e>0?Math.min(e,t):Tt)/Tt}function zt(e,t){let n=f.clamp(e,0,1);return n<=0?0:n>=1?1:1-(1-n)**Math.max(0,t)}var S=window.__outerWebsiteStartupTiming??{createdAt:Date.now(),timeOrigin:performance.timeOrigin??Date.now()-performance.now(),events:[]};window.__outerWebsiteStartupTiming=S;function Bt(){try{return new URLSearchParams(window.location.search).has(`startupTimingLog`)}catch{return!1}}var Vt=Bt();function Ht(e){if(typeof e!=`object`||!e)return e??{};try{return JSON.parse(JSON.stringify(e,(e,t)=>{if(typeof t==`number`)return Number.isFinite(t)?Number(t.toFixed(3)):String(t);if(typeof t!=`function`)return t}))}catch{return{unserializable:!0}}}function C(e,t={}){let n=performance.now(),r={index:S.events.length,name:e,at:Number(n.toFixed(3)),detail:Ht(t)};if(S.events.push(r),S.events.length>Ot&&S.events.splice(0,S.events.length-Ot),Vt)try{performance.mark(`${kt}${e}`)}catch{}return Vt&&console.debug(`[startup-timing]`,JSON.stringify(r)),r}function Ut(){return{createdAt:S.createdAt,timeOrigin:S.timeOrigin,now:Number(performance.now().toFixed(3)),eventCount:S.events.length,events:S.events.slice()}}function Wt(){S.events.length=0,C(`debug.timeline.cleared`)}if(window.__outerWebsiteRecordStartupTiming=C,Vt&&typeof PerformanceObserver<`u`)try{S.longTaskObserver?.disconnect?.(),S.longTaskObserver=new PerformanceObserver(e=>{e.getEntries().forEach(e=>{C(`performance.longtask`,{startTime:e.startTime,duration:e.duration,name:e.name})})}),S.longTaskObserver.observe({type:`longtask`,buffered:!0})}catch{}C(`main.module.loaded`,{assetProfile:Me});var Gt=new p,Kt=new p,qt=[],Jt=!1,Yt=new p(0,0,0),Xt=null,w={lastRenderMs:0,avgRenderMs:0,avgFrameMs:0,fps:0,lastUiUpdate:0,lastFrameNow:0},Zt=4/3,Qt=21/9;function $t(e){return Math.min(Math.max(e,Zt),Qt)}function en(e=window.innerWidth,t=window.innerHeight){let n=Math.max(1,Math.floor(e)),r=Math.max(1,Math.floor(t)),i=n/r,a=$t(i),o=n,s=r;return i>a?o=Math.max(1,Math.round(r*a)):i<a&&(s=Math.max(1,Math.round(n/a))),{windowWidth:n,windowHeight:r,width:o,height:s,left:Math.round((n-o)/2),top:Math.round((r-s)/2),aspect:o/s,isClamped:Math.abs(i-a)>.001}}var T=en();function tn(){Object.assign(T,en())}function nn(e,t){let n=e-T.left,r=t-T.top,i=f.clamp(n,0,T.width),a=f.clamp(r,0,T.height);return{x:i/T.width*2-1,y:-(a/T.height)*2+1,inside:n>=0&&n<=T.width&&r>=0&&r<=T.height}}function rn(e,t=st){if(e===!0)return st;if(e===!1||e==null)return t;let n=Number(e);return n>=4?4:n>=2?2:0}function an(e){return e>=4?`4x`:e>=2?`2x`:`Off`}var E={bloomEnabled:!1,msaaSamples:0},D={url:`/embedded-winxp.html`,width:1280,height:820,rotationX:-Math.PI*15.5/180,rotationY:Math.PI/2,rotationZ:0,flipNormal:!1,scaleMultiplier:1,scaleX:.99,scaleY:1.01,offsetX:0,offsetY:6e-4,offsetZ:0},on={localCorners:[new p(-D.width/2,D.height/2,0),new p(D.width/2,D.height/2,0),new p(D.width/2,-D.height/2,0),new p(-D.width/2,-D.height/2,0)],worldCorners:[new p,new p,new p,new p],quad:[{x:0,y:0},{x:0,y:0},{x:0,y:0},{x:0,y:0}],cameraSpacePoint:new p,projectedPoint:new p},O={loader:{bgColor:`#d9d9d9`,minLoadTime:1500,fadeTime:1,cameraPush:{startTime:1.5,duration:1,distance:.5},shockwave:{startTime:.5,duration:5.5,startRadius:0,endRadius:20,edgeWidth:.2,edgeIntensity:3,centerOffset:new p(-4,-1,0)},skyFade:{startTime:.5,duration:1},screenFade:{startTime:2.5,duration:6.5},controlsUnlockTime:2.5},intro:{startPos:new p(4.3,-1.8,0),startTarget:new p(0,-1.4,0)},focus:{duration:2e3,easing:`easeInOutCubic`,distance:.18,yOffset:0,maxTriggerAngle:60,targetOffsetX:0,targetOffsetY:0,targetOffsetZ:0,hitboxScale:1.8},unfocus:{preDelay:0,duration:1800,easing:`easeOutCubic`,endPos:new p(4.5,-1.8,0),endTarget:new p(0,-1.4,0)},shield:{maxClickDistance:1.2,dimOpacity:.8,fadeDistance:.55,opacityLerp:.14},sky:{rotationSpeed:3e-5},parallax:{maxAngle:6,unlockThreshold:.12,springAccel:.0065,springFriction:.095,catchupSpeed:.055,idleTimeout:2200},walk:{chargeTime:80,releaseGrace:50,maxDist:1e3,speed:.011,acceleration:.6,deceleration:.6,dirLerp:1,dampingZone:.8,bounds:{minX:2,maxX:5,minY:-2,maxY:1.5,minZ:-3.5,maxZ:3.5}}};document.body.style.backgroundColor=O.loader.bgColor,document.body.style.margin=`0`,document.body.style.overflow=`hidden`;var sn=`/font/Controller%20W01%20Two%20Oblique.ttf`,cn=`/font/Controller%20W01%20Five%20Oblique.ttf`,ln=`/font/Controller%20W01%20Two%20Oblique.woff2`,un=`/font/Controller%20W01%20Five%20Oblique.woff2`,dn=(e,t)=>`url('${e}') format('woff2'), url('${t}') format('truetype')`,fn=`"Controller W01 Two Oblique", 'Courier New', Courier, monospace`,pn=`"Controller W01 Five Oblique", 'Courier New', Courier, monospace`,mn=document.createElement(`style`);mn.textContent=`
  @font-face {
    font-family: 'Controller W01 Two Oblique';
    src: ${dn(ln,sn)};
    font-weight: 400;
    font-style: normal;
    font-display: swap;
  }
  @font-face {
    font-family: 'Controller W01 Five Oblique';
    src: ${dn(un,cn)};
    font-weight: 400;
    font-style: normal;
    font-display: swap;
  }
  #hud-loader-root {
    position: fixed; top: 0; left: 0; width: 100vw; height: 100vh;
    background-color: #ffffff;
    z-index: 9999; display: flex; justify-content: center; align-items: center;
    font-family: ${fn};
    color: #ff7b00;
    /* Was two orange drop-shadows. On this opaque full-screen white layer they
       are hidden under the background, yet the blinking greebles inside made
       the browser recompute both blurs over the whole screen every frame
       (19% GPU on a 4K/160 Hz display). An identity filter keeps the same
       render path, so text anti-aliasing and every pixel stay the same. */
    filter: brightness(1);
    -webkit-user-select: none; user-select: none;
    transition: opacity ${O.loader.fadeTime}s ease-in-out;
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
`,document.head.appendChild(mn);var k=document.createElement(`div`);k.id=`hud-loader-root`,k.innerHTML=`
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
  </div>`,document.body.appendChild(k);var hn=new Te([`textures`,`model`,`scene`,`gpu`],({completed:e,total:t,state:n})=>{k.querySelectorAll(`.hud-block`).forEach((n,r)=>n.classList.toggle(`lit`,r<e/t*18)),k.querySelector(`#hud-status`).textContent=n===`awaitingGesture`?`Ready to enter.`:`Preparing room (`+e+`/`+t+`)...`,k.querySelector(`#hud-hex`).textContent=e+`/`+t});(function(){let e=k.querySelector(`#hud-bar`);k.querySelector(`#hud-hex`),k.querySelector(`#hud-status`);for(let t=0;t<18;t++){let t=document.createElement(`div`);t.className=`hud-block`,e.appendChild(t)}hn.transition(`preparing`)})();function gn(){return C(`loader.prompt.wait.start`),new Promise(e=>{let t=k.querySelector(`.hud-core`);if(!t){C(`loader.prompt.missing`),nt=null,e();return}let n=!1,r=t=>{if(n)return;let r=performance.now();if(C(`loader.gesture.finish.start`,{reason:t}),n=!0,Le=!1,q(),nt=null,k.removeEventListener(`pointerdown`,i,!0),k.removeEventListener(`keydown`,a,!0),typeof J?.releaseQueuedPlayback==`function`){let e=performance.now();J.releaseQueuedPlayback(t),C(`loader.gesture.audioRelease.called`,{reason:t,elapsedMs:performance.now()-e})}C(`loader.gesture.finish.end`,{reason:t,elapsedMs:performance.now()-r}),e()},i=e=>{C(`loader.gesture.pointerdown`,{button:e.button,pointerType:e.pointerType}),e.preventDefault(),r(`loader-start-pointer`)},a=e=>{e.key!==`Enter`&&e.key!==` `||(C(`loader.gesture.keydown`,{key:e.key}),e.preventDefault(),r(`loader-start-keyboard`))};t.classList.add(`is-awaiting-start`),nt=()=>{C(`loader.gesture.debugTrigger`),r(`loader-start-debug`)},k.tabIndex=0,k.focus({preventScroll:!0}),k.addEventListener(`pointerdown`,i,!0),k.addEventListener(`keydown`,a,!0),C(`loader.prompt.awaiting`,{activeElementId:document.activeElement?.id??``})})}var _n=document.getElementById(`app`),A=new de,vn={fov:65,near:.1,far:1e3},j={exposure:1.1,saturation:1.25,highlights:.95,washout:0,lift:0,gamma:1,colorBalance:new p(1,1,1),bloomOffCompensation:{exposure:1.26,saturation:1.55,highlights:.95,washout:0,lift:0,gamma:1,colorBalance:new p(1.003,1.006,1.026)},repeatX:2,repeatY:1.2,offsetY:0,rotationY:-3*Math.PI/4},M={exposure:.9,bloom:{strength:.01,radius:0,threshold:0,transitionDurationMs:220},unfocus:{bloomResumeProgress:.5}},yn={appearAt:3,fadeDuration:1},bn={sources:[`/audio/outer-bgm.ogg`,`/audio/outer-bgm.m4a`],loop:!0,initialVolume:.56,defaultWantsToPlay:!0},xn={minVolumeRatio:.2,volumeSyncEpsilon:.003},N=new pe(vn.fov,T.aspect,vn.near,vn.far),Sn=new p().subVectors(O.intro.startTarget,O.intro.startPos).normalize(),Cn=O.intro.startPos.clone().addScaledVector(Sn,-O.loader.cameraPush.distance);N.position.copy(Cn);var P=new le({antialias:!1,depth:!1,stencil:!1,alpha:!1,powerPreference:`high-performance`});P.debug.checkShaderErrors=!1;function wn(){P.domElement.style.left=`${T.left}px`,P.domElement.style.top=`${T.top}px`}function Tn(e=Fn,t=kn()){return e?Dn():t}function En(e=kn()){let t=Tn(Fn,e);Kn=!1,P.setPixelRatio(t),P.setSize(T.width,T.height),Pn=e,F?.setPixelRatio&&F.setPixelRatio(e),F?.setSize&&F.setSize(T.width,T.height),I?.setSize&&I.setSize(Math.max(1,Math.floor(T.width*e*.5)),Math.max(1,Math.floor(T.height*e*.5)))}function Dn(){return Math.min(window.devicePixelRatio||1,At())}function On(){return jt()}function kn(){let e=Dn();return f.clamp(e*On(),Mt(),e)}P.setPixelRatio(Dn()),P.setSize(T.width,T.height),P.setClearColor(0,1),P.outputColorSpace=t,P.useLegacyLights=!1,P.toneMapping=4,P.toneMappingExposure=M.exposure,_n.style.position=`relative`,_n.style.backgroundColor=`#000000`,P.domElement.style.position=`absolute`,P.domElement.style.zIndex=`1`,P.domElement.style.pointerEvents=`auto`,P.domElement.style.display=`block`,wn(),_n.appendChild(P.domElement);var An=null,F=null,jn=null,I=null,Mn=null,Nn=0,Pn=0,Fn=!1,L={currentStrength:E.bloomEnabled?M.bloom.strength:0,fromStrength:E.bloomEnabled?M.bloom.strength:0,targetStrength:E.bloomEnabled?M.bloom.strength:0,transitionStartedAt:performance.now()},In={hidden:!1};function Ln(){return E.bloomEnabled?M.bloom.strength:0}function Rn(e=performance.now()){let t=Ln();Math.abs(t-L.targetStrength)<1e-4||(L.fromStrength=L.currentStrength,L.targetStrength=t,L.transitionStartedAt=e)}function zn(){return Math.abs(L.currentStrength-L.targetStrength)>1e-4}function Bn(){return L.currentStrength>1e-4||L.targetStrength>1e-4}function Vn(e=performance.now()){Rn(e);let t=Math.max(0,M.bloom.transitionDurationMs??0);if(t<=0)L.currentStrength=L.targetStrength,L.fromStrength=L.targetStrength;else{let n=f.clamp((e-L.transitionStartedAt)/t,0,1),r=n<.5?4*n*n*n:1-(-2*n+2)**3/2;L.currentStrength=f.lerp(L.fromStrength,L.targetStrength,r),n>=1&&(L.currentStrength=L.targetStrength,L.fromStrength=L.targetStrength)}I&&(I.enabled=Bn(),I.strength=L.currentStrength,I.radius=M.bloom.radius,I.threshold=M.bloom.threshold)}function Hn(){return E.msaaSamples}function Un(e=performance.now()){return Rn(e),wt}function Wn(e=Hn()){let t=rn(e,0);if(t<=0)return 0;let n=P.capabilities.maxSamples??0;return n>=t?t:n>=4?4:n>=2?2:0}var Gn=1,Kn=!1;function qn(){return!!(Fn&&F&&jn&&V&&Kn&&Ae!==`legacy`&&Nn===0&&!I?.enabled&&!zn())}function Jn(){let e=P.getRenderTarget(),t=P.autoClear,n=N.layers.mask;try{P.setRenderTarget(F.readBuffer),P.autoClear=!1,N.layers.set(Gn),P.render(A,N)}finally{N.layers.mask=n,P.autoClear=t,P.setRenderTarget(e)}jn.enabled=!1;try{F.render()}finally{jn.enabled=!0}}function Yn(){F.render(),Kn=!0}function Xn({withRestingParallax:e=!1}={}){if(!qn())return{eligible:!1};let t=N.quaternion.clone();e&&(N.lookAt(R.target),Hr());try{return Zn()}finally{N.quaternion.copy(t)}}function Zn(){let e=F.readBuffer,{width:t,height:n}=e,r=()=>{let r=new Uint16Array(t*n*4);return P.readRenderTargetPixels(e,0,0,t,n,r),r},i=V.rotation.y;try{Yn(),V.rotation.y=i+.05,Jn();let e=r();Yn();let a=r(),o=0;for(let t=0;t<a.length;t+=1)a[t]!==e[t]&&(o+=1);return{eligible:!0,width:t,height:n,values:a.length,differing:o}}finally{V.rotation.y=i,Yn()}}function Qn(){Kn=!1,F?.dispose&&F.dispose(),I?.dispose&&I.dispose(),Mn?.dispose&&Mn.dispose(),An&&An.dispose(),F=null,jn=null,I=null,Mn=null,An=null,Fn=!1}function $n({pixelRatio:t=kn(),msaaSamples:n=Wn(Hn()),useComposer:r=Un()}={}){Qn();let a=Math.max(1,Math.floor(T.width*t)),o=Math.max(1,Math.floor(T.height*t)),s=Tn(r,t);P.setPixelRatio(s),P.setSize(T.width,T.height),wn(),Pn=t,Nn=r?n:0,Fn=r,r&&(An=new e(a,o,{samples:n,type:m}),F=new ne(P,An),F?.setPixelRatio&&F.setPixelRatio(t),jn=new h(A,N),F.addPass(jn),I=new ie(new i(Math.max(1,Math.floor(T.width*t*.5)),Math.max(1,Math.floor(T.height*t*.5))),L.currentStrength,M.bloom.radius,M.bloom.threshold),Vn(performance.now()),F.addPass(I),Mn=new ce,F.addPass(Mn),je(F,I,Mn),En(t))}function er({forceRebuild:e=!1}={}){let t=performance.now();Rn(t);let n=kn(),r=Wn(Hn()),i=Un(t);if(e||Math.abs(n-Pn)>.001||r!==Nn||i!==Fn){$n({pixelRatio:n,msaaSamples:r,useComposer:i}),G.projectionInvalidated=!0,q();return}if(Math.abs(n-Pn)>.001){En(n),G.projectionInvalidated=!0,q();return}Vn(t)}$n();function tr(){let e=kn();return{scale:Number(On().toFixed(3)),pixelRatio:e,width:Math.max(1,Math.floor(T.width*e)),height:Math.max(1,Math.floor(T.height*e))}}function nr(){let e=performance.memory;if(!e)return null;let t=e=>Number((e/(1024*1024)).toFixed(2));return{usedMB:t(e.usedJSHeapSize),totalMB:t(e.totalJSHeapSize),limitMB:t(e.jsHeapSizeLimit)}}function rr(){let e=Ri(),t=tr(),n=rn(E.msaaSamples,0),r=rn(Hn(),0),i=Wn(Hn()),a=$?.velocity?.lengthSq?.()??0,o=X?.velocity?.lengthSq?.()??0,s=X?.currentMouse?.distanceToSquared?.(X.targetMouse)??0,c=Math.abs((H?.current??0)-(H?.target??0)),l=U?.lastUpdateAt?performance.now()-U.lastUpdateAt:null;return{ready:!Ie,isAnimating:y,physicsUnlocked:_,focused:v,benchmarkMode:!1,postFxBufferMode:Ae,externalTextureOverridesEnabled:!0,assetProfile:Me,assetProfileLabel:g.label,performanceProfile:{qualityMode:`high`,qualitySelectionSource:`fixed`,qualityLowTierScore:null,lowPowerOuterMode:!1,maxDevicePixelRatio:At(),renderScale:Number(On().toFixed(3)),skyOnlyTargetFps:Nt()},bloomEnabled:e.bloomEnabled,bloomStrength:Number(L.currentStrength.toFixed(4)),savedBloomEnabled:E.bloomEnabled,requestedMsaaSamples:r,savedMsaaSamples:n,effectiveMsaaSamples:i,msaaLabel:an(i),avgRenderMs:Number(w.avgRenderMs.toFixed(3)),avgFrameMs:Number(w.avgFrameMs.toFixed(3)),fps:Number(w.fps.toFixed(2)),resolution:t,viewport:{width:T.width,height:T.height,left:T.left,top:T.top,aspect:Number(T.aspect.toFixed(3)),clamped:T.isClamped},rendererInfo:{calls:P.info.render.calls,triangles:P.info.render.triangles,lines:P.info.render.lines,points:P.info.render.points,frame:P.info.render.frame,geometries:P.info.memory.geometries,textures:P.info.memory.textures},jsHeap:nr(),internals:{outerScenePaused:Sr(),effectiveRenderPath:kr()?`renderer`:`composer`,composerActive:Fn,outerCanvasVisible:!In.hidden,screenContentMode:gr,screenAppReadyForProjection:yi(),renderRequested:G.renderRequested,projectionInvalidated:G.projectionInvalidated,hasActiveSceneAnimation:zr(performance.now()),hasSkyAnimation:!Le&&Mr(),transitionSettleRemainingMs:Math.max(0,Number((G.transitionSettleUntil-performance.now()).toFixed(3))),walkVelocitySq:Number(a.toFixed(8)),parallaxVelocitySq:Number(o.toFixed(8)),parallaxDeltaSq:Number(s.toFixed(8)),screenOpacityDelta:Number(c.toFixed(8)),screenProjectionAgeMs:l==null?null:Number(l.toFixed(3))}}}function ir(e=2e4){return new Promise((t,n)=>{let r=performance.now();function i(){if(!Ie){t(rr());return}if(performance.now()-r>=e){n(Error(`Timed out waiting for outer scene readiness`));return}window.requestAnimationFrame(i)}i()})}function ar(e=3e4){return new Promise((t,n)=>{let r=performance.now();function i(){if(!Ie&&!y&&_){t(rr());return}if(performance.now()-r>=e){n(Error(`Timed out waiting for benchmark-stable scene state`));return}window.requestAnimationFrame(i)}i()})}function or(e=2e4){return new Promise((t,n)=>{let r=performance.now();function i(){if(typeof nt==`function`){t(!0);return}if(performance.now()-r>=e){n(Error(`Timed out waiting for loader start prompt`));return}window.requestAnimationFrame(i)}i()})}function sr(e=3e3){return new Promise((t,n)=>{let r=Math.max(250,Number(e)||3e3),i=performance.now(),a=[],o=[],s=[],c=0;function l(){let e=rr(),n=e=>e.length?Number((e.reduce((e,t)=>e+t,0)/e.length).toFixed(3)):0,i=o.map(e=>e>0?1e3/e:0);t({...e,sampleDurationMs:r,sampleCount:a.length,windowAvgRenderMs:n(a),windowAvgFrameMs:n(o),windowAvgFps:n(i),windowMinFps:i.length?Number(Math.min(...i).toFixed(3)):0,windowMaxFps:i.length?Number(Math.max(...i).toFixed(3)):0,windowAvgHeapMB:n(s)})}function u(e){let t=rr();if(a.push(w.lastRenderMs||t.avgRenderMs),t.jsHeap?.usedMB!=null&&s.push(t.jsHeap.usedMB),c>0){let t=e-c;t>0&&t<250&&o.push(t)}if(c=e,performance.now()-i>=r){l();return}window.requestAnimationFrame(u)}ir().then(()=>u()).catch(n)})}window.__outerWebsiteDebug={getMetrics:rr,getWinXPRuntimeState:()=>({focusState:ye(),presentationState:he(),presentationProfile:ge()}),waitForReady:ir,waitForBenchmarkStable:ar,waitForStartPrompt:or,getStartupTimeline:Ut,clearStartupTimeline:Wt,getQualityProfile:()=>({mode:`high`,selectionSource:`fixed`}),startExperience:()=>typeof nt==`function`?(nt(),!0):!1,sampleMetrics:sr,compareSkyOnlyRedraw:Xn};var R=new re(N,P.domElement);R.enabled=!1,R.target.copy(O.intro.startTarget);var cr=new n,lr=new se,ur=new ae,dr=new c,fr=new u;dr.setTranscoderPath(`/basis/`),dr.detectSupport(P),fr.setDecoderPath(`/draco/`),fr.preload(),lr.setKTX2Loader(dr),lr.setDRACOLoader(fr);var pr=null,z=null,B=null,mr=null,hr=null,gr=`live`,_r=[],vr=null,V=null,H={runtimeEnabled:!1,current:0,target:0,pointerEvents:`none`},U={quad:null,lastUpdateAt:0,lastMissStartedAt:0},W={currentGain:1,fullVolumeDistance:0,minimumVolumeDistance:0,lastSyncedVolume:null},G={frameId:null,renderRequested:!0,projectionInvalidated:!0,skyFrameTimeoutId:null,transitionSettleUntil:0},K={mode:`idle`,startedAt:0,duration:0,easingName:`easeInOutCubic`},yr=new De,br=new Ee(ma),xr=null;document.addEventListener(`visibilitychange`,()=>{if(document.hidden)xr=performance.now(),br.suspend(!0),$i();else{let e=performance.now(),t=xr===null?0:e-xr;xr=null,yr.shift(t,e),K.mode!==`idle`&&(K.startedAt+=Math.min(t,Math.max(0,e-K.startedAt))),Fe?.(t,e),Zi.lastFrameNow=performance.now(),G.projectionInvalidated=!0,br.suspend(!1)}});function Sr(){return document.hidden||v&&!y}function Cr(e,t,n,r=performance.now()){K.mode=e,K.startedAt=r,K.duration=Math.max(1,t),K.easingName=n}function wr(){K.mode=`idle`,K.startedAt=0,K.duration=0,K.easingName=`easeInOutCubic`}function Tr(){return!1}function Er(){let e=Tr();In.hidden!==e&&(In.hidden=e,P.domElement.style.display=`block`,P.domElement.style.visibility=e?`hidden`:`visible`,P.domElement.style.opacity=e?`0`:`1`,P.domElement.style.pointerEvents=e?`none`:`auto`)}function Dr(){let e={focused:v,animating:y,settled:Sr()};er(),Er(),Vi(),_e(e)}_e(be);function Or(e){v!==e&&(v=e,e&&$i(),Mi(),er(),Er(),Vi(),q())}function kr(){return!Fn}function Ar(e,t){if(!e||!t)return;let n=t.getBoundingClientRect(),r=tt?.getBoundingClientRect()??n,i=e.offsetWidth||e.getBoundingClientRect().width||0,a=f.clamp(r.right-i,at,window.innerWidth-at-i);e.style.left=`${a}px`,e.style.top=`${n.bottom+it}px`}function jr(){Ar(b,Ge),Ar(qe,Qe)}function Mr(){return!!V&&!Sr()}function Nr(e,t=Lt()){return e.lengthSq()<=t*t}function Pr(e,t=_t){return e.lengthSq()<=t*t}function Fr(){return H.runtimeEnabled&&Math.abs(H.current-H.target)>yt}function Ir(){G.skyFrameTimeoutId!==null&&(window.clearTimeout(G.skyFrameTimeoutId),G.skyFrameTimeoutId=null)}function q(){G.renderRequested=!0,Ir(),Er(),br.invalidate(G.projectionInvalidated?`projection`:`scene`)}function Lr(e=Pt()){br.decorate(Math.max(0,e))}function Rr(){G.projectionInvalidated=!0,q()}function zr(e){return Ne||document.hidden?!1:!!(Ie&&!Le||y||zn()||e<G.transitionSettleUntil||Q.w||Q.a||Q.s||Q.d||Q[` `]||Q.control||$.active||$.velocity.lengthSq()>1e-6||X.velocity.lengthSq()>1e-6||!Vr(e)||X.currentMouse.distanceToSquared(X.targetMouse)>1e-6||Fr())}var Br=.001;function Vr(e){let t=e-ea>O.parallax.idleTimeout;return v||y||t||X.locked?Nr(X.currentMouse):X.targetMouse.distanceTo(Yi)<Br&&X.currentMouse.distanceTo(X.targetMouse)<Br&&X.velocity.length()<Br*.1}function Hr(){N.rotateX(X.currentMouse.y*f.degToRad(O.parallax.maxAngle)),N.rotateY(-X.currentMouse.x*f.degToRad(O.parallax.maxAngle))}function Ur(e=dt){G.transitionSettleUntil=Math.max(G.transitionSettleUntil,performance.now()+e),q()}function Wr(e=performance.now(),t=!1,n=!1){return G.projectionInvalidated?!0:t?!1:v?!!(y||Ie):y||Ie||n||G.renderRequested?!0:e-U.lastUpdateAt>=pt}function Gr(e=performance.now(),{skyOnly:t=!1,sceneAnimationActive:n=!1,frameScale:r=1}={}){let i=performance.now(),a=zn();Vn(e),Fn&&!Un(e)&&er({forceRebuild:!0}),si();let o=zn();(a||o)&&!y&&Vi(),t||Di(),!Fn||!F?P.render(A,N):t&&qn()?Jn():Yn(),t||fa(r),Wr(e,t,n)&&(ei(),G.projectionInvalidated=!1,U.lastUpdateAt=e),Gi(performance.now()-i,e)}function Kr(e){let t=f.clamp(e,0,1);Math.abs(H.current-t)<.001||(H.current=t,B?.setVisualState({brightness:t}),Er())}function qr(e){H.pointerEvents!==e&&(H.pointerEvents=e,B?.setVisualState({pointerEvents:e}))}function Jr(e,t){if(on.cameraSpacePoint.copy(e).applyMatrix4(N.matrixWorldInverse).z>=-.001)return null;let n=on.projectedPoint.copy(e).project(N);return!Number.isFinite(n.x)||!Number.isFinite(n.y)?null:(t.x=T.left+(n.x*.5+.5)*T.width,t.y=T.top+(-n.y*.5+.5)*T.height,t)}function Yr(){if(!z)return null;z.updateMatrixWorld(!0);for(let e=0;e<on.localCorners.length;e+=1)if(!Jr(on.worldCorners[e].copy(on.localCorners[e]).applyMatrix4(z.matrixWorld),on.quad[e]))return null;return on.quad}function Xr(e){return e.map(e=>({x:e.x,y:e.y}))}function Zr(e,t){for(let n=0;n<t.length;n+=1)e[n].x=t[n].x,e[n].y=t[n].y}function Qr(e,t,n=ht){if(!e||!t||e.length!==t.length)return!1;for(let r=0;r<e.length;r+=1)if(Math.abs(e[r].x-t[r].x)>n||Math.abs(e[r].y-t[r].y)>n)return!1;return!0}function $r(){if(U.quad&&B?.isMounted?.()){U.lastMissStartedAt=0,B.setVisualState({pointerEvents:`none`,visible:!0}),Er();return}U.quad=null,U.lastMissStartedAt=0,B?.setVisualState({pointerEvents:`none`,visible:!1}),Er()}function ei(){if(!z){$r();return}let e=performance.now(),t=Yr();if(!t){if(U.quad&&(U.lastMissStartedAt===0&&(U.lastMissStartedAt=e),e-U.lastMissStartedAt<Ft())){B?.setVisualState({visible:!0}),Er();return}$r();return}if(U.lastMissStartedAt=0,!U.quad)U.quad=Xr(t);else if(!Qr(U.quad,t))Zr(U.quad,t);else{B&&B.setVisualState({visible:!0}),Er();return}B&&(B.syncProjection(U.quad),B.setVisualState({visible:!0})),Er()}function ti(e,t){if(!U.quad||U.quad.length!==4)return!1;let n=0;for(let r=0;r<U.quad.length;r+=1){let i=U.quad[r],a=U.quad[(r+1)%U.quad.length],o=(a.x-i.x)*(t-i.y)-(a.y-i.y)*(e-i.x);if(Math.abs(o)<=.5)continue;let s=Math.sign(o);if(n===0){n=s;continue}if(n!==s)return!1}return!0}function ni(e){Jt=!1,e.traverse(e=>{e.isMesh&&(e.name.toLowerCase().includes(`screen_plane`)||e.name.toLowerCase().includes(`hitbox`)||(Array.isArray(e.material)?e.material:[e.material]).forEach(e=>{if(!e||qt.includes(e))return;qt.push(e);let t=e.onBeforeCompile,n=Object.prototype.hasOwnProperty.call(e,`customProgramCacheKey`),r=e.customProgramCacheKey;e.userData.outerWebsiteShockwaveMaterial={originalOnBeforeCompile:t,hadOwnCustomProgramCacheKey:n,originalCustomProgramCacheKey:r},e.onBeforeCompile=(n,r)=>{typeof t==`function`&&t.call(e,n,r),e.userData.shader=n,n.uniforms.uShockwaveRadius={value:0},n.uniforms.uShockwaveCenter={value:Yt},n.uniforms.uEdgeIntensity={value:O.loader.shockwave.edgeIntensity},n.vertexShader=`
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
          float edgeWidth = ${O.loader.shockwave.edgeWidth.toFixed(2)};
          if (uShockwaveRadius > 0.01 && dist > uShockwaveRadius - edgeWidth) {
             float glow = (dist - (uShockwaveRadius - edgeWidth)) / edgeWidth;
             gl_FragColor.rgb += vec3(glow * 0.2, glow * 0.8, glow * 1.5) * uEdgeIntensity;
          }
          `)},e.customProgramCacheKey=()=>`${typeof r==`function`?r.call(e):``}|${St}`,e.needsUpdate=!0}))})}var ri=null;function ii(t){if(ri||Jt||!t)return ri;let n=new de;n.environment=A.environment,n.environmentIntensity=A.environmentIntensity;let r=[];t.traverse(e=>{if(!e.isMesh)return;let t=Array.isArray(e.material)?e.material:[e.material];if(!t.some(e=>qt.includes(e)))return;let i=t.map(e=>{let t=e.clone();return t.userData={},r.push(t),t}),a=new te(e.geometry,Array.isArray(e.material)?i:i[0]);a.matrixAutoUpdate=!1,a.matrix.copy(e.matrixWorld),a.frustumCulled=!1,n.add(a)}),n.updateMatrixWorld(!0);let i=new e(1,1,{type:m});return ri=(async()=>{C(`shockwave.programWarmup.start`,{materials:r.length});let e=P.getRenderTarget();try{if(P.setRenderTarget(i),await P.compileAsync(n,N),Jt)return;P.setRenderTarget(i),P.render(n,N),C(`shockwave.programWarmup.end`)}catch(e){console.warn(`Shockwave program warmup skipped.`,e)}finally{P.setRenderTarget(e)}})(),ri.dispose=()=>{i.dispose(),r.forEach(e=>e.dispose())},ri}function ai(){if(Jt)return;Jt=!0,qt.forEach(e=>{let t=e?.userData?.outerWebsiteShockwaveMaterial;t&&(e.onBeforeCompile=t.originalOnBeforeCompile,t.hadOwnCustomProgramCacheKey?e.customProgramCacheKey=t.originalCustomProgramCacheKey:delete e.customProgramCacheKey,delete e.userData.shader,delete e.userData.outerWebsiteShockwaveMaterial,e.needsUpdate=!0)}),q();let e=ri;e?.dispose&&window.setTimeout(()=>e.dispose(),2e3)}function oi(e,t={}){return e.wrapS=a,e.wrapT=oe,new o({transparent:!0,uniforms:{tSky:{value:e},uExposure:{value:j.exposure},uSaturation:{value:j.saturation},uHighlights:{value:j.highlights},uWashout:{value:t.washout??j.washout},uLift:{value:t.lift??j.lift},uGamma:{value:t.gamma??j.gamma},uColorBalance:{value:j.colorBalance.clone()},uRepeat:{value:new i(t.repeatX??j.repeatX,t.repeatY??j.repeatY)},uOffsetY:{value:t.offsetY??j.offsetY},uSkyOpacity:{value:0}},vertexShader:`varying vec2 vUv; void main() { vUv = uv; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }`,fragmentShader:`
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
    `,side:0,toneMapped:!1,depthWrite:!1})}function si(){let e=V?.material?.uniforms;if(!e)return;let t=Math.max(1e-4,M.bloom.strength??1e-4),n=f.clamp(L.currentStrength/t,0,1),r=j.bloomOffCompensation;e.uExposure.value=f.lerp(r.exposure,j.exposure,n),e.uSaturation.value=f.lerp(r.saturation,j.saturation,n),e.uHighlights.value=f.lerp(r.highlights,j.highlights,n),e.uWashout.value=f.lerp(r.washout,j.washout,n),e.uLift.value=f.lerp(r.lift,j.lift,n),e.uGamma.value=f.lerp(r.gamma,j.gamma,n),e.uColorBalance.value.lerpVectors(r.colorBalance,j.colorBalance,n)}var ci={computer:{path:g.lightMapPaths.computer}},li={room:{path:g.bakedSurfacePaths.room},table:{path:g.bakedSurfacePaths.table},chairBack:{path:g.bakedSurfacePaths.chairBack},chairLeft:{path:g.bakedSurfacePaths.chairLeft},chairRight:{path:g.bakedSurfacePaths.chairRight}},ui=new Set([`room`,`table`]),di={computer:{envMapIntensity:10.95,roughnessMin:.8}};function fi(e){e.map&&(e.map.colorSpace=t),e.emissiveMap&&(e.emissiveMap.colorSpace=t)}function pi(e){return e.includes(`room`)||e.includes(`wall`)||e.includes(`floor`)||e.includes(`ceiling`)?`room`:(e.includes(`table`)||e.includes(`desk`))&&!e.includes(`portable`)?`table`:e.includes(`chair_back`)||e.includes(`chair`)&&e.includes(`back`)?`chairBack`:e.includes(`chair_left`)||e.includes(`chair`)&&e.includes(`left`)?`chairLeft`:e.includes(`chair_right`)||e.includes(`chair`)&&e.includes(`right`)?`chairRight`:null}function mi(e){return e.includes(`computer`)||e.includes(`pc`)||e.includes(`monitor`)||e.includes(`portable`)||e.includes(`bm86`)?`computer`:null}function hi(e){return ui.has(e)}async function gi(e,t={}){let n=await cr.loadAsync(e);return n.flipY=t.flipY??!1,t.colorSpace&&(n.colorSpace=t.colorSpace),n}async function _i(e,t={}){if(e.toLowerCase().endsWith(`.ktx2`)){let n=await dr.loadAsync(e);return t.colorSpace&&(n.colorSpace=t.colorSpace),n}return gi(e,t)}function vi(e){B?.setVisualState({transition:e})}function yi(){return!!B?.isMounted()}function bi(e=`preload`){return mr?(C(`screenOverlay.import.reuse`,{reason:e}),mr):(C(`screenOverlay.import.start`,{reason:e}),mr=Se(()=>import(`./outer-screen-overlay-BpJLfdd7.js`).then(t=>(C(`screenOverlay.import.end`,{reason:e}),t),t=>{throw mr=null,C(`screenOverlay.import.error`,{reason:e,message:t?.message??String(t)}),t}),__vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11,12])),mr)}async function xi({standby:e=!1}={}){let t=performance.now();return C(`screenOverlay.ensure.start`,{hasOverlay:!!B,hasPendingModulePromise:!!mr,hasPendingOverlayPromise:!!hr}),B?(C(`screenOverlay.ensure.end`,{branch:`cached`,elapsedMs:performance.now()-t}),B):(hr||=bi(`ensure`).then(({createScreenHtmlOverlay:t})=>(B=t({width:D.width,height:D.height,standby:e}),W.lastSyncedVolume=null,B.setVisualState({opacity:H.current,brightness:1,pointerEvents:`none`,transition:``,visible:!1}),Er(),Oi(J.getState().isMuted),ki(J.getState().volume),Rr(),B)),hr.then(e=>(C(`screenOverlay.ensure.end`,{branch:`promise`,elapsedMs:performance.now()-t,mounted:e?.isMounted?.()??!1}),e)))}function Si(e){if(!e||z)return;z=new ue,A.add(z),e.updateWorldMatrix(!0,!1),e.geometry.computeBoundingBox();let t=e.geometry.boundingBox,n=new p;t.getCenter(n);let r=n.applyMatrix4(e.matrixWorld);z.position.copy(r),z.rotation.set(D.rotationX,D.rotationY,D.rotationZ,`YXZ`),z.translateZ(D.offsetZ),z.translateX(D.offsetX),z.translateY(D.offsetY);let i=new p;t.getSize(i);let a=[i.x,i.y,i.z].sort((e,t)=>t-e),o=a[0]/D.width*D.scaleMultiplier*D.scaleX,s=a[1]/D.height*D.scaleMultiplier*D.scaleY;z.scale.set(o,s,1),z.updateMatrixWorld(!0);let c=new p(0,0,1).applyQuaternion(z.quaternion).normalize();Gt.copy(z.position).addScaledVector(c,O.focus.distance),Gt.y+=O.focus.yOffset,Kt.copy(z.position),Kt.x+=O.focus.targetOffsetX,Kt.y+=O.focus.targetOffsetY,Kt.z+=O.focus.targetOffsetZ,W.fullVolumeDistance=Gt.distanceTo(z.position),W.minimumVolumeDistance=Math.max(W.fullVolumeDistance+1e-4,Cn.distanceTo(z.position),O.intro.startPos.distanceTo(z.position),O.unfocus.endPos.distanceTo(z.position)),W.currentGain=wi(N.position.distanceTo(z.position)),Rr()}function Ci(e){return f.clamp(e,0,1)}function wi(e){let t=W.fullVolumeDistance,n=Math.max(W.minimumVolumeDistance,t+1e-4);if(!(t>0)||!(n>t)||e<=t)return 1;if(e>=n)return xn.minVolumeRatio;let r=(e-t)/(n-t),i=r*r*(3-2*r);return f.lerp(1,xn.minVolumeRatio,i)}function Ti(e){gr=`live`}function Ei(e){return Ci(e*W.currentGain)}function Di(){if(!z||!J||!yi())return;let e=wi(N.position.distanceTo(z.position));Math.abs(e-W.currentGain)<.001||(W.currentGain=e,ki(J.getState().volume))}function Oi(e){if(B?.syncAudioControl){B.syncAudioControl({type:ve.SET_MUTED,muted:!!e});return}let t=window.__outerWebsiteAudioRuntime;t&&t.setMuted(!!e)}function ki(e){let t=Ei(e);if(W.lastSyncedVolume!==null&&Math.abs(W.lastSyncedVolume-t)<xn.volumeSyncEpsilon)return;if(W.lastSyncedVolume=t,B?.syncAudioControl){B.syncAudioControl({type:ve.SET_VOLUME,volume:t});return}let n=window.__outerWebsiteAudioRuntime;n&&n.setVolume(t)}function Ai(){let e=(Array.isArray(bn.sources)?bn.sources:[bn.src]).filter(Boolean),t=new Audio;t.__outerWebsiteIgnoreGlobalAudio=!0,t.preload=`none`,t.loop=bn.loop,t.volume=bn.initialVolume,t.playsInline=!0;let n=!1,r=!0,i=0,a=null,o=0,s=null,c=0,l=null,u=null,d={hasSource:e.length>0,hasError:!1,isMuted:!1,isPlaying:!1,needsUserGesture:!1,unlockArmed:!1,volume:bn.initialVolume,wantsToPlay:bn.defaultWantsToPlay},ee=()=>e[o]||``,te=()=>{let e=ee();return e?(t.getAttribute(`src`)!==e&&(t.src=e),!0):(t.removeAttribute(`src`),!1)},ne=()=>o>=e.length-1?!1:(o+=1,n=!1,te()),p=()=>{typeof l==`function`&&l({...d,currentSource:ee()})},re=()=>{a!==null&&(window.clearTimeout(a),a=null)},m=()=>{i=0,re()},ie=(e,n=240)=>!d.wantsToPlay||d.needsUserGesture?!1:a===null?i>=12?!1:(a=window.setTimeout(()=>{a=null,i+=1,t.readyState===0&&!d.hasError&&t.load(),he(`${e}-retry-${i}`)},n),!0):!0,ae=({restoreVolume:e=!1}={})=>{c+=1,s!==null&&(window.cancelAnimationFrame(s),s=null),e&&(t.volume=Ci(d.volume))},oe=e=>{if(t.paused||t.muted||r||t.volume<=.001){e();return}ae();let n=c,i=t.volume,a=performance.now(),o=r=>{if(n!==c)return;let l=Math.min((r-a)/ot,1);if(t.volume=f.lerp(i,0,l),l<1){s=window.requestAnimationFrame(o);return}s=null,e()};s=window.requestAnimationFrame(o)},h=(e=!1)=>{t.muted=e||d.isMuted||r,t.volume=Ci(d.volume)},se=async()=>{if(!d.hasSource||n)return!1;h(!0);try{return await t.play(),m(),n=!0,d.hasError=!1,d.isPlaying=!0,d.needsUserGesture=!1,pe(),p(),!0}catch{return h(),ie(`prime-muted-autoplay`),!1}},ce=()=>!n||t.paused?!1:(ae({restoreVolume:!0}),t.currentTime=0,h(),m(),d.hasError=!1,d.isPlaying=!0,d.needsUserGesture=!1,pe(),p(),!0),le=()=>{if(!n||t.paused)return!1;t.pause();try{t.currentTime=0}catch{return!1}return d.isPlaying=!1,!0},ue=(e=`timeline-sync`)=>{let i=performance.now();if(C(`audio.releaseQueuedPlayback.start`,{reason:e,holdAudibleStart:r,wantsToPlay:d.wantsToPlay,isPlaying:d.isPlaying,hasPrimedMutedAutoplay:n,paused:t.paused}),!r){d.wantsToPlay&&!d.isPlaying?he(e):(h(),p()),C(`audio.releaseQueuedPlayback.end`,{reason:e,branch:`already-released`,elapsedMs:performance.now()-i});return}if(r=!1,d.needsUserGesture=!1,d.hasError=!1,m(),pe(),h(),!d.wantsToPlay){p(),C(`audio.releaseQueuedPlayback.end`,{reason:e,branch:`not-wanted`,elapsedMs:performance.now()-i});return}let a=le();he(a?`${e}-restart-from-zero`:e),C(`audio.releaseQueuedPlayback.end`,{reason:e,branch:a?`primed-restart`:`play`,elapsedMs:performance.now()-i})},de=()=>{window.setTimeout(()=>{t.currentTime<.25&&(t.currentTime=0),h(),p()},80)},fe=async()=>{h(!0);try{return await t.play(),m(),d.hasError=!1,d.isPlaying=!0,d.needsUserGesture=!1,pe(),de(),p(),!0}catch{return h(),!1}},pe=()=>{!d.unlockArmed||!u||([`pointerdown`,`keydown`,`touchstart`].forEach(e=>{window.removeEventListener(e,u,!0)}),u=null,d.unlockArmed=!1)},me=()=>{d.unlockArmed||=(u=()=>{pe(),d.wantsToPlay&&he(`user-gesture`)},[`pointerdown`,`keydown`,`touchstart`].forEach(e=>{window.addEventListener(e,u,!0)}),!0)},he=async(e=`manual`)=>{if(d.wantsToPlay=!0,ae({restoreVolume:!0}),!d.hasSource)return p(),!1;if(ce())return!0;d.hasError&&=(t.load(),!1),h();try{return await t.play(),m(),d.hasError=!1,d.isPlaying=!0,d.needsUserGesture=!1,pe(),p(),!0}catch(n){return d.isPlaying=!t.paused,n?.name===`NotAllowedError`?await fe()||(d.hasError=!1,ie(`autoplay-blocked`)||(d.needsUserGesture=!0,me())):n?.name===`AbortError`||n?.name===`NotSupportedError`?(d.hasError=!1,ie(n.name===`AbortError`?`media-aborted`:`media-not-ready`)||(d.hasError=!0)):(d.hasError=!0,console.warn(`[BGM] Unable to play audio (${e}).`,n)),p(),!1}},ge=()=>{d.wantsToPlay=!1,d.needsUserGesture=!1,m(),pe(),oe(()=>{t.pause(),ae({restoreVolume:!0}),d.isPlaying=!1,p()})},_e=()=>{if(d.isPlaying||d.wantsToPlay){ge();return}he(`toggle`)},ve=e=>{let t=()=>{d.isMuted=e,h(),Oi(d.isMuted),p()};if(e!==d.isMuted){if(e){oe(t);return}ae({restoreVolume:!0}),t()}};return t.addEventListener(`play`,()=>{d.isPlaying=!0,p()}),t.addEventListener(`pause`,()=>{d.isPlaying=!1,p()}),t.addEventListener(`ended`,()=>{d.isPlaying=!1,p()}),t.addEventListener(`canplay`,()=>{d.wantsToPlay&&!d.isPlaying&&!d.needsUserGesture&&ie(`canplay`,0)}),t.addEventListener(`error`,()=>{let e=t.error?.code??null;if(e===1||e===null){ie(`media-load-aborted`);return}if(e===4){if(ne()){m(),d.hasError=!1,d.isPlaying=!1,t.load(),d.wantsToPlay&&(r?se():he(`media-source-fallback`)),p();return}if(ie(`media-source-error`,320))return}d.hasError=!0,d.isPlaying=!1,console.warn(`[BGM] Audio source could not be loaded: ${ee()}`),p()}),h(),d.hasSource&&te(),{getState(){return{...d,currentSource:ee()}},pause:ge,play:he,releaseQueuedPlayback:ue,setVolume:e=>{ae(),d.volume=Ci(e),d.volume>0&&d.isMuted&&(d.isMuted=!1),h(),ki(d.volume),Oi(d.isMuted),p()},setOnChange(e){l=e,p()},toggleMute:()=>{ve(!d.isMuted)},togglePlay:_e}}var J=Ai(),Y={soundOn:`<svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#ff7b00" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"/><path d="M15.54 8.46a5 5 0 0 1 0 7.07"/><path d="M19.07 4.93a10 10 0 0 1 0 14.14"/></svg>`,soundOff:`<svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#ff7b00" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"/><line x1="23" y1="9" x2="17" y2="15"/><line x1="17" y1="9" x2="23" y2="15"/></svg>`,play:`<svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#ff7b00" stroke-width="2.3" stroke-linecap="round" stroke-linejoin="round"><polygon points="8 5 19 12 8 19 8 5"/></svg>`,pause:`<svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#ff7b00" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><line x1="9" y1="5" x2="9" y2="19"/><line x1="15" y1="5" x2="15" y2="19"/></svg>`,volumeLow:`<svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#ff7b00" stroke-width="2.3" stroke-linecap="round" stroke-linejoin="round"><polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"/><path d="M15 12a3 3 0 0 0 0-0.01"/></svg>`,volumeMid:`<svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#ff7b00" stroke-width="2.3" stroke-linecap="round" stroke-linejoin="round"><polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"/><path d="M15.5 9.5a4 4 0 0 1 0 5"/></svg>`,volumeHigh:`<svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#ff7b00" stroke-width="2.3" stroke-linecap="round" stroke-linejoin="round"><polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"/><path d="M15.5 8.5a5.5 5.5 0 0 1 0 7"/><path d="M18.8 6a9 9 0 0 1 0 12"/></svg>`,camUnfocused:`<svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#ff7b00" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z"/><circle cx="12" cy="13" r="4"/></svg>`,camFocused:`<svg width="13" height="13" viewBox="0 0 24 24" fill="#ff7b00" stroke="#ff7b00" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z"/><circle cx="12" cy="13" r="4"/></svg>`,fx:`<svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#ff7b00" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 7h8"/><path d="M4 17h14"/><path d="M14 7h6"/><path d="M10 17h4"/><circle cx="12" cy="7" r="2"/><circle cx="8" cy="17" r="2"/></svg>`},ji={wasd:`<svg width="46" height="30" viewBox="0 0 46 30" fill="none" xmlns="http://www.w3.org/2000/svg">
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
  </svg>`};function Mi(){ze&&(v?ze.innerHTML=Y.camFocused:ze.innerHTML=Y.camUnfocused)}function Ni(e){return e>=.75?Y.volumeHigh:e>=.4?Y.volumeMid:Y.volumeLow}function Pi(e){return e.isMuted?`Muted`:`${Math.round(e.volume*100)}%`}function Fi(){$e!==null&&(window.clearTimeout($e),$e=null)}function Ii(){Fi(),x&&($e=window.setTimeout(()=>{Li(!1)},rt))}function Li(e){e&&et&&Hi(!1),x=e,b&&b.classList.toggle(`is-open`,x),x?(Ar(b,Ge),Ii()):Fi()}function Ri(){let e=rn(Hn(),0),t=Wn(e);return{bloomEnabled:Bn(),bloomLabel:Bn()?`On`:`Off`,requestedMsaaSamples:e,effectiveMsaaSamples:t,msaaEnabled:t>0,msaaLabel:an(t)}}function zi(){let e=Ri();return`Bloom ${e.bloomLabel} | MSAA ${e.msaaLabel}`}function Bi(e,t,n,r=`On`,i=`Off`){e&&(e.classList.toggle(`is-active`,n),e.innerHTML=`<span>${t}</span><strong>${n?r:i}</strong>`)}function Vi(){let e=Ri();if(Ke&&(Ke.classList.toggle(`is-active`,et),Ke.title=zi()),qe&&(qe.classList.toggle(`is-open`,et),et&&Ar(qe,Qe)),Je&&(Je.textContent=g.label),Bi(Xe,`Bloom`,e.bloomEnabled,`On`,`Off`),Bi(Ze,`MSAA`,e.msaaEnabled,e.msaaLabel,`Off`),Xe&&(Xe.title=`Toggle Bloom`),Ze&&(Ze.title=`Cycle MSAA: 4x, 2x, Off`),Ye){let{width:e,height:t}=tr(),n=w.avgRenderMs>0?w.avgRenderMs.toFixed(1):`0.0`,r=performance.now()-w.lastFrameNow>500?0:Math.round(w.fps);Ye.textContent=`avg: ${n} ms    fps: ${r}    resolution: ${e}x${t}`}}function Hi(e){e&&x&&Li(!1),et=e,Vi(),q()}function Ui(e){let t=rn(E.msaaSamples,0);E.bloomEnabled=!!e.bloomEnabled,E.msaaSamples=rn(e.msaaSamples,E.msaaSamples),er({forceRebuild:rn(E.msaaSamples,0)!==t}),Vi(),Ur(600),q()}function Wi(e){if(e===`msaaSamples`){let e=rn(E.msaaSamples,0),t=Ct.indexOf(e),n=Ct[t===-1?0:(t+1)%Ct.length];Ui({...E,msaaSamples:n});return}Ui({...E,[e]:!E[e]})}function Gi(e,t=performance.now()){if(w.lastRenderMs=e,w.avgRenderMs=w.avgRenderMs===0?e:f.lerp(w.avgRenderMs,e,.18),w.lastFrameNow>0){let e=t-w.lastFrameNow;e>0&&e<250&&(w.avgFrameMs=w.avgFrameMs===0?e:f.lerp(w.avgFrameMs,e,.2),w.fps=w.avgFrameMs>0?1e3/w.avgFrameMs:0)}w.lastFrameNow=t,!(y||t-w.lastUiUpdate<250)&&(w.lastUiUpdate=t,Vi())}function Ki(e=J.getState()){Be&&(Be.innerHTML=e.isMuted?Y.soundOff:Y.soundOn,Be.title=e.isMuted?`Unmute all audio`:`Mute all audio`),Ve&&(Ve.innerHTML=e.isPlaying||e.wantsToPlay?Y.pause:Y.play,e.hasError?Ve.title=`BGM unavailable (${e.currentSource||`no source`})`:e.needsUserGesture&&!e.isPlaying?Ve.title=`Click to start music`:e.wantsToPlay&&!e.isPlaying?Ve.title=`Music queued to start`:Ve.title=e.isPlaying?`Pause music`:`Play music`),He&&(He.innerHTML=Ni(e.volume),He.title=`Adjust volume (${Math.round(e.volume*100)}%)`),Ue&&(Ue.value=`${Math.round(e.volume*100)}`),We&&(We.textContent=Pi(e))}J.setOnChange(Ki);function qi(){let e=document.createElement(`style`);e.textContent=`
    :root {
      --hud-glass-bg: rgba(80, 80, 80, 0.35);
      --hud-glass-border: rgba(255, 255, 255, 0.08);
      --hud-glass-shadow: none;
      --hud-glass-blur: blur(20px);
      --hud-font-main: ${fn};
      --hud-font-accent: ${pn};
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
      opacity: 0; transition: opacity ${yn.fadeDuration}s ease;
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
      opacity: 0; transition: opacity ${yn.fadeDuration}s ease;
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
      opacity: 0; transition: opacity ${yn.fadeDuration}s ease;
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
  `,document.head.appendChild(e);let t=document.createElement(`div`);t.id=`ui-tl`,tt=t;let n=document.createElement(`span`);n.id=`ui-name`,n.textContent=`Hanqi Zhao`,Ve=document.createElement(`button`),Ve.className=`ui-btn`,Ve.addEventListener(`click`,()=>{J.togglePlay()});let r=document.createElement(`div`);Ge=r,r.className=`ui-volume-control`,He=document.createElement(`button`),He.className=`ui-btn`,He.addEventListener(`click`,()=>{Li(!x)}),b=document.createElement(`div`),b.className=`ui-volume-panel`;let i=document.createElement(`div`);i.className=`ui-volume-title`,i.innerHTML=`<span>Volume</span>`,We=document.createElement(`span`),We.className=`ui-volume-value`,i.appendChild(We),Ue=document.createElement(`input`),Ue.className=`ui-volume-slider`,Ue.type=`range`,Ue.min=`0`,Ue.max=`100`,Ue.step=`1`,Ue.addEventListener(`input`,e=>{J.setVolume(Number(e.target.value)/100),Ii()}),b.appendChild(i),b.appendChild(Ue),r.appendChild(He);let a=document.createElement(`div`);Qe=a,a.className=`ui-postfx-control`,Ke=document.createElement(`button`),Ke.className=`ui-btn`,Ke.innerHTML=Y.fx,Ke.addEventListener(`click`,()=>{Hi(!et)}),qe=document.createElement(`div`),qe.className=`ui-postfx-panel`;let o=document.createElement(`div`);o.className=`ui-postfx-header`,o.innerHTML=`<span>Render FX</span>`,Je=document.createElement(`span`),Je.className=`ui-postfx-summary`,Je.textContent=g.label,o.appendChild(Je);let s=document.createElement(`div`);s.className=`ui-postfx-toggles`,Xe=document.createElement(`button`),Xe.className=`ui-postfx-toggle`,Xe.type=`button`,Xe.addEventListener(`click`,()=>{Wi(`bloomEnabled`)}),Ze=document.createElement(`button`),Ze.className=`ui-postfx-toggle`,Ze.type=`button`,Ze.addEventListener(`click`,()=>{Wi(`msaaSamples`)}),s.appendChild(Xe),s.appendChild(Ze),qe.appendChild(o),qe.appendChild(s),a.appendChild(Ke),Be=document.createElement(`button`),Be.className=`ui-btn`,Be.addEventListener(`click`,()=>{J.toggleMute()}),ze=document.createElement(`button`),ze.className=`ui-btn`,ze.innerHTML=Y.camUnfocused,ze.title=`Toggle focus`,ze.addEventListener(`click`,()=>{_&&(v?la():ca())}),t.appendChild(n),t.appendChild(ze),t.appendChild(Ve),t.appendChild(Be),t.appendChild(r),t.appendChild(a),document.body.appendChild(t),document.body.appendChild(b),document.body.appendChild(qe),jr(),document.addEventListener(`pointerdown`,e=>{let t=Ge?.contains(e.target)||b?.contains(e.target),n=Qe?.contains(e.target)||qe?.contains(e.target);x&&t?Ii():x&&Li(!1),et&&!n&&Hi(!1)}),document.addEventListener(`pointermove`,()=>{x&&Ii()},{passive:!0}),document.addEventListener(`wheel`,()=>{x&&Ii()},{passive:!0}),document.addEventListener(`keydown`,e=>{if(e.key===`Escape`){Li(!1),Hi(!1);return}x&&Ii()}),Ki(),Vi();let c=document.createElement(`div`);c.id=`ui-bl`;let l=document.createElement(`div`);l.className=`ui-hint-row`,l.innerHTML=`
    <div class="ui-hint">${ji.wasd}<span>: move</span></div>
    <div class="ui-hint">${ji.space}<span>: up</span></div>
    <div class="ui-hint">${ji.ctrl}<span>: down</span></div>
  `,Ye=document.createElement(`div`),Ye.className=`ui-hud-stats`,c.appendChild(l),c.appendChild(Ye),document.body.appendChild(c);let u=document.createElement(`div`);return u.id=`ui-br`,u.innerHTML=`<div class="ui-copy">© Copyright 2026 Hanqi Zhao.</div>`,document.body.appendChild(u),Vi(),{tl:t,bl:c,br:u}}async function Ji(){try{let e=Promise.all(Object.entries(li).map(async([e,n])=>[e,await _i(n.path,{colorSpace:t})])),n=Promise.all(Object.entries(ci).map(async([e,t])=>{let n=await _i(t.path,{colorSpace:``});return n.channel=0,[e,n]})),[i,a,o,c,l]=await Promise.all([g.visualSky.kind===`hdr`?ur.loadAsync(g.visualSky.path):gi(g.visualSky.path,{colorSpace:t,flipY:g.visualSky.flipY??!1}),g.lightingEnvironment.kind===`hdr`?ur.loadAsync(g.lightingEnvironment.path):gi(g.lightingEnvironment.path,{colorSpace:t,flipY:g.lightingEnvironment.flipY??!1}),lr.loadAsync(Ce),e,n]);hn.ready(`textures`),hn.ready(`model`);let u=Object.fromEntries(c),ne=Object.fromEntries(l),re=new r(200,32,20);re.scale(-1,1,1),V=new te(re,oi(i,g.visualSky)),V.layers.enable(Gn),V.position.y=-100,V.rotation.y=j.rotationY,A.add(V),a.mapping=303,A.environment=a,A.environmentIntensity=g.lightingEnvironment.intensity??1.2;let m=o.scene;if(m.traverse(e=>{if(!e.isMesh)return;let t=(e.name??``).toLowerCase();(t.includes(`computer`)||t.includes(`screen`)||t.includes(`monitor`))&&_r.push(e),t.includes(`screen_plane`)&&(pr=e,Yt.setFromMatrixPosition(e.matrixWorld),Yt.add(O.loader.shockwave.centerOffset),pr.material=new s({colorWrite:!1,depthWrite:!0}),pr.renderOrder=-1)}),ni(m),m.traverse(e=>{if(!e.isMesh)return;let t=(e.name??``).toLowerCase();t.includes(`screen_plane`)||(Array.isArray(e.material)?e.material:[e.material]).forEach(e=>{if(!e)return;fi(e);let n=pi(t),r=mi(t);if(n&&u[n]){e.map=u[n],e.dithering=hi(n),e.needsUpdate=!0;return}e.isMeshStandardMaterial&&r&&ne[r]&&(e.lightMap=ne[r],di[r]&&(e.envMapIntensity=di[r].envMapIntensity,e.roughness<di[r].roughnessMin&&(e.roughness=di[r].roughnessMin)),e.needsUpdate=!0)})}),A.add(m),_r.length>0){let e=new d;_r.forEach(t=>{t.updateMatrixWorld(!0),e.union(new d().setFromObject(t))});let t=new p;e.getCenter(t);let n=new p;e.getSize(n),vr=new te(new ee(n.x,n.y,n.z),new s({colorWrite:!1,depthWrite:!1,transparent:!0,opacity:0})),vr.position.copy(t),vr.scale.setScalar(O.focus.hitboxScale),vr.visible=!1,A.add(vr),pr||(Yt.copy(t),Yt.add(O.loader.shockwave.centerOffset))}pr&&Si(pr),hn.ready(`scene`),await P.compileAsync(A,N),Gr(performance.now()),hn.ready(`gpu`),Ne=!1,hn.transition(`awaitingGesture`),C(`startup.assets.readyForGesture`),bi(`start-prompt`).then(e=>e.prepareDesktop()).then(()=>xi({standby:!0})).catch(e=>console.warn(`Desktop preload will retry on mount.`,e)),Le=!0,ii(m),q(),await gn(),hn.transition(`intro`),Le=!1,C(`loader.gesture.await.end`),C(`loader.fade.start`,{fadeTimeMs:O.loader.fadeTime*1e3}),k.style.opacity=`0`,await new Promise(e=>setTimeout(e,O.loader.fadeTime*1e3)),C(`loader.fade.end`),k.remove(),C(`loader.removed`),await xi(),B?.powerOn?.(),C(`screenOverlay.ready`);let ie=qi();C(`outerHud.overlay.created`);{let e=performance.now();Fe=(t,n)=>{e+=Math.min(t,Math.max(0,n-e))},C(`loadingTimeline.start`);let t=!1,n=e=>e===1?1:1-2**(-10*e),r=e=>e<.5?4*e*e*e:1-(-2*e+2)**3/2;function i(){let i=(performance.now()-e)/1e3;if(!_){let e=O.loader.cameraPush,t=0;i>=e.startTime&&(t=Math.min((i-e.startTime)/e.duration,1)),N.position.lerpVectors(Cn,O.intro.startPos,r(t)),N.lookAt(R.target)}let a=O.loader.shockwave,o=0;if(i>=a.startTime&&(o=Math.min((i-a.startTime)/a.duration,1)),!Jt){let e=o>=1?xt:f.lerp(a.startRadius,a.endRadius,n(o));qt.forEach(t=>{t.userData.shader&&(t.userData.shader.uniforms.uShockwaveRadius.value=e)}),o>=1&&ai()}let s=O.loader.skyFade,c=0;i>=s.startTime&&(c=Math.min((i-s.startTime)/s.duration,1)),V&&V.material&&(V.material.uniforms.uSkyOpacity.value=c),!_&&i>=O.loader.controlsUnlockTime&&(_=!0,C(`loadingTimeline.physicsUnlocked`,{elapsedSec:i}),X.locked=!0,X.targetMouse.set(0,0),X.currentMouse.set(0,0),X.lockBaseMouse.copy(Yi),ta());let l=O.loader.screenFade;i>=l.startTime&&!Re&&(Re=!0,C(`loadingTimeline.screenFade.start`,{elapsedSec:i,durationSec:l.duration}),H.runtimeEnabled=!1,z&&B&&(vi(`opacity ${l.duration}s ease-in-out`),requestAnimationFrame(()=>{C(`loadingTimeline.screenFade.visibleFrame`),B.setVisualState({opacity:1,visible:!0}),setTimeout(()=>{z&&B&&(vi(``),H.runtimeEnabled=!0,H.target=1,Kr(1),C(`loadingTimeline.screenFade.runtimeEnabled`))},l.duration*1e3+100)}))),!t&&i>=yn.appearAt&&(t=!0,ie.tl.style.opacity=`1`,ie.bl.style.opacity=`1`,ie.br.style.opacity=`1`,C(`outerHud.overlay.visible`,{elapsedSec:i})),i>=Math.max(O.loader.cameraPush.startTime+O.loader.cameraPush.duration,a.startTime+a.duration,s.startTime+s.duration,l.startTime+l.duration,O.loader.controlsUnlockTime)&&(Ie=!1,Pe=null,Fe=null,hn.transition(`roomInteractive`),C(`loadingTimeline.complete`,{elapsedSec:i}))}Pe=i,i(),q()}}catch(e){console.error(e),Ne=!0,br.suspend(!0),k.isConnected||document.body.appendChild(k),k.style.opacity=`1`,k.style.pointerEvents=`auto`,k.querySelector(`#hud-status`).textContent=`Unable to prepare the room.`;let t=document.createElement(`button`);t.textContent=`Retry loading`,t.onclick=()=>window.location.reload(),k.querySelector(`.hud-core`).appendChild(t)}}var Yi=new i,X={locked:!0,lockBaseMouse:new i,targetMouse:new i,currentMouse:new i,velocity:new i},Xi={lastIdleSampleAt:0},Zi={lastFrameNow:0},Z={forward:new p,right:new p,up:new p(0,1,0),rawDir:new p,targetVel:new p,actualVel:new p,nextPos:new p,delta:new p,originalQuat:new l,zeroMouse:new i(0,0),parallaxDiff:new i},Qi={normal:new p,toCamera:new p},Q={w:!1,a:!1,s:!1,d:!1," ":!1,control:!1};function $i(){Object.keys(Q).forEach(e=>{Q[e]=!1}),$.active=!1,$.chargeStart=0,$.releaseStart=0,$.dist=0,$.currentDir.set(0,0,0),$.velocity.set(0,0,0)}window.addEventListener(`blur`,()=>{$i(),_&&!v&&q()});var ea=performance.now();function ta(){ea=performance.now()}window.addEventListener(`pointermove`,e=>{let t=nn(e.clientX,e.clientY);if(Yi.x=t.x,Yi.y=t.y,v&&!y||!_)return;let n=performance.now(),r=!y&&!v&&X.locked;r&&n-Xi.lastIdleSampleAt<It()||(r&&(Xi.lastIdleSampleAt=n),ta(),!y&&!v&&X.locked&&Yi.distanceTo(X.lockBaseMouse)>O.parallax.unlockThreshold&&(X.locked=!1),q())},{passive:!0}),window.addEventListener(`keydown`,e=>{if(v||y||!_)return;ta();let t=e.key.toLowerCase();t===` `&&e.preventDefault(),Q[t]!==void 0&&(Q[t]=!0),q()},{passive:!1}),window.addEventListener(`keyup`,e=>{let t=e.key.toLowerCase();if(Q[t]===void 0)return;let n=Q[t];Q[t]=!1,!(!n||!_||v)&&(ta(),q())}),window.addEventListener(`wheel`,()=>{v&&!y||_&&(ta(),q())},{passive:!0}),P.domElement.addEventListener(`contextmenu`,e=>e.preventDefault());var na={linear:e=>e,easeOutCubic:e=>1-(1-e)**3,easeInOutCubic:e=>e<.5?4*e*e*e:1-(-2*e+2)**3/2},ra=null,ia=!1;function aa(){ra!==null&&(window.clearTimeout(ra),ra=null)}function oa(){!ia||y||!v||!_||(ia=!1,window.requestAnimationFrame(()=>{!y&&v&&_&&la()}))}function sa(e,t,n,r,i,a,o,{emitStartState:s=!0}={}){s&&(y=!0,Dr());let c=performance.now();Cr(v?`focus`:`unfocus`,i,a,c);let l=K.mode;C(`focus.cameraTween.start`,{mode:l,durationMs:i,easingName:a});let u=na[a]||na.easeInOutCubic;q(),yr.start({now:c,duration:i,update(i){let a=u(i);N.position.lerpVectors(e,n,a),R.target.lerpVectors(t,r,a),N.lookAt(R.target)},complete(){wr(),y=!1,G.projectionInvalidated=!0,Ur(),Dr(),$.velocity.set(0,0,0),X.locked=!0,X.lockBaseMouse.copy(Yi),X.targetMouse.set(0,0),X.currentMouse.set(0,0),X.velocity.set(0,0),ta(),o?.(),oa(),C(`focus.cameraTween.end`,{mode:l,elapsedMs:performance.now()-c})}})}function ca(){if(v||!_){C(`focus.transition.blocked`,{target:`focus`,isAnimating:y,isFocused:v,isPhysicsUnlocked:_});return}C(`focus.transition.start`,{target:`focus`}),aa(),yr.cancel(),ia=!1,y=!0,Or(!0),Dr(),q(),sa(N.position.clone(),R.target.clone(),Gt,Kt,O.focus.duration,O.focus.easing,null,{emitStartState:!1})}async function la(){if(!v||!_){C(`focus.transition.blocked`,{target:`unfocus`,isAnimating:y,isFocused:v,isPhysicsUnlocked:_});return}C(`focus.transition.start`,{target:`unfocus`}),aa(),yr.cancel(),ia=!1,y=!0,Dr(),Or(!1),!(!y||v)&&(Dr(),q(),ra=window.setTimeout(()=>{ra=null,sa(N.position.clone(),R.target.clone(),O.unfocus.endPos,O.unfocus.endTarget,O.unfocus.duration,O.unfocus.easing,null,{emitStartState:!1})},Math.max(0,O.unfocus.preDelay??0)))}var ua=new fe;P.domElement.addEventListener(`pointerdown`,e=>{if(!_||e.button!==0)return;let t=yi()?ti(e.clientX,e.clientY):!1;if(C(`focus.pointerdown.canvas`,{button:e.button,pointerType:e.pointerType,isPhysicsUnlocked:_,isAnimating:y,isFocused:v,pointerInsideScreen:t}),y){v&&!t&&(ia=!0,C(`focus.unfocus.queued`,{source:`canvas-pointerdown`}));return}ta();let n=nn(e.clientX,e.clientY);if(Yi.x=n.x,Yi.y=n.y,q(),v){if(t){C(`focus.pointerdown.insideFocusedScreen`);return}C(`focus.pointerdown.requestUnfocus`,{source:`canvas`}),la();return}if(t){C(`focus.pointerdown.requestFocus`,{source:`screen-bounds`}),ca();return}ua.setFromCamera(Yi,N);let r=vr?[vr]:_r;if(ua.intersectObjects(r,!0).length>0&&z){let e=new p(0,0,1).applyQuaternion(z.quaternion).normalize(),t=new p().subVectors(N.position,z.position).normalize(),n=e.angleTo(t)*(180/Math.PI);C(`focus.pointerdown.hitboxIntersect`,{angleDegree:n,maxTriggerAngle:O.focus.maxTriggerAngle}),n<=O.focus.maxTriggerAngle&&(C(`focus.pointerdown.requestFocus`,{source:`computer-hitbox`}),ca())}q()});function da(e){return!!(tt?.contains(e)||b?.contains(e)||qe?.contains(e))}document.addEventListener(`pointerdown`,e=>{if(!_||e.button!==0)return;let t=da(e.target),n=yi()?ti(e.clientX,e.clientY):!1;if(C(`focus.pointerdown.document`,{button:e.button,pointerType:e.pointerType,isPhysicsUnlocked:_,isAnimating:y,isFocused:v,pointerInsideUi:t,clickedInsideScreen:n}),!t){if(!v){!y&&n&&(C(`focus.pointerdown.requestFocus`,{source:`document-screen-bounds`}),ca());return}if(!n){if(y){ia=!0,C(`focus.unfocus.queued`,{source:`document-pointerdown`});return}C(`focus.pointerdown.requestUnfocus`,{source:`document`}),la()}}},!0);function fa(e=1){if(!pr||!z)return;let t=v&&!y&&yi();if(Ti(`live`),!Re){qr(t?`auto`:`none`);return}if(!H.runtimeEnabled){qr(t?`auto`:`none`);return}let n=Qi.normal.set(0,0,1).applyQuaternion(z.quaternion).normalize(),r=Qi.toCamera.subVectors(N.position,z.position).normalize(),i=N.position.distanceTo(z.position),a=n.dot(r)>=0,o=0,s=`none`;if(t)o=1,s=`auto`;else if(a){let e=O.shield.maxClickDistance+O.shield.fadeDistance;if(i<=O.shield.maxClickDistance)o=1;else if(i>=e)o=O.shield.dimOpacity;else{let e=1-(i-O.shield.maxClickDistance)/O.shield.fadeDistance;o=f.lerp(O.shield.dimOpacity,1,e)}}H.target=o;let c=f.lerp(H.current,H.target,zt(O.shield.opacityLerp,e)),l=Math.abs(c-H.target)<.002?H.target:c;Kr(Math.abs(l-H.target)<=yt?H.target:l),qr(s)}var $={active:!1,chargeStart:0,releaseStart:0,dist:0,currentDir:new p,velocity:new p};function pa(e){let t=Math.max(1,Math.min(8,Math.ceil(e))),n=e/t,r=(1-f.clamp(O.parallax.springFriction,0,1))**n;for(let e=0;e<t;e+=1){let e=Z.parallaxDiff.subVectors(X.targetMouse,X.currentMouse);X.velocity.add(e.multiplyScalar(O.parallax.springAccel*n)),X.velocity.multiplyScalar(r),X.currentMouse.addScaledVector(X.velocity,n)}}function ma(e){if(Ne||document.hidden)return;Pe?.(),yr.tick(e),G.frameId=null;let t=Zi.lastFrameNow||e-Tt,n=Math.max(0,e-t),r=Rt(n),i=Rt(n,Dt);Zi.lastFrameNow=e;let a=!Le&&Mr(),o=G.renderRequested,s=zr(e),c=s||a;if(!c&&!o)return;if(V&&a&&(V.rotation.y+=O.sky.rotationSpeed*i),!_){Gr(e,{skyOnly:!1,sceneAnimationActive:!0,frameScale:r}),G.renderRequested=!1,c&&q();return}if(!s&&a&&!o){N.lookAt(R.target);let t=Z.originalQuat.copy(N.quaternion);Hr(),Gr(e,{skyOnly:!0,sceneAnimationActive:!1,frameScale:r}),N.quaternion.copy(t),G.renderRequested=!1,Lr();return}let l=e-ea>O.parallax.idleTimeout;if(!v&&!y){let t=Z.forward;N.getWorldDirection(t),t.y=0,t.normalize();let n=Z.right.crossVectors(t,N.up).normalize(),i=Z.up,a=Z.rawDir.set(0,0,0);Q.w&&a.add(t),Q.s&&a.sub(t),Q.a&&a.sub(n),Q.d&&a.add(n),Q[` `]&&a.add(i),Q.control&&a.sub(i),a.lengthSq()>0?($.releaseStart=0,$.active?$.currentDir.lerp(a.normalize(),zt(O.walk.dirLerp,r)).normalize():($.chargeStart===0&&($.chargeStart=e),e-$.chargeStart>O.walk.chargeTime&&($.active=!0,$.dist=0,$.currentDir.copy(a.normalize())))):($.chargeStart=0,$.active&&($.releaseStart===0&&($.releaseStart=e),e-$.releaseStart>O.walk.releaseGrace&&($.active=!1)),l&&($.active=!1,$.releaseStart=0,$.currentDir.set(0,0,0),$.velocity.set(0,0,0))),$.active&&$.dist>=O.walk.maxDist&&($.active=!1);let o=Z.targetVel.set(0,0,0);if($.active?(o.copy($.currentDir).multiplyScalar(O.walk.speed),$.velocity.lerp(o,zt(O.walk.acceleration,r))):($.velocity.lerp(o,zt(O.walk.deceleration,r)),Pr($.velocity)&&$.velocity.set(0,0,0)),$.velocity.lengthSq()>1e-6){$.dist+=$.velocity.length()*r;let e=Z.actualVel.copy($.velocity),t=O.walk.bounds,n=O.walk.dampingZone;e.x<0&&N.position.x-t.minX<n?e.x*=Math.max(0,(N.position.x-t.minX)/n):e.x>0&&t.maxX-N.position.x<n&&(e.x*=Math.max(0,(t.maxX-N.position.x)/n)),e.y<0&&N.position.y-t.minY<n?e.y*=Math.max(0,(N.position.y-t.minY)/n):e.y>0&&t.maxY-N.position.y<n&&(e.y*=Math.max(0,(t.maxY-N.position.y)/n)),e.z<0&&N.position.z-t.minZ<n?e.z*=Math.max(0,(N.position.z-t.minZ)/n):e.z>0&&t.maxZ-N.position.z<n&&(e.z*=Math.max(0,(t.maxZ-N.position.z)/n));let i=Z.nextPos.copy(N.position).addScaledVector(e,r);i.x<=t.minX?(i.x=t.minX,$.velocity.x=0):i.x>=t.maxX&&(i.x=t.maxX,$.velocity.x=0),i.y<=t.minY?(i.y=t.minY,$.velocity.y=0):i.y>=t.maxY&&(i.y=t.maxY,$.velocity.y=0),i.z<=t.minZ?(i.z=t.minZ,$.velocity.z=0):i.z>=t.maxZ&&(i.z=t.maxZ,$.velocity.z=0);let a=Z.delta.subVectors(i,N.position);N.position.copy(i),R.target.add(a)}}N.lookAt(R.target);let u=Z.originalQuat.copy(N.quaternion),d=zt(O.parallax.catchupSpeed,r);v||y||l||X.locked?X.targetMouse.lerp(Z.zeroMouse,d):X.targetMouse.lerp(Yi,d),pa(r),l&&(Nr(X.targetMouse)&&X.targetMouse.set(0,0),Nr(X.velocity)&&X.velocity.set(0,0),Nr(X.currentMouse)&&Nr(X.targetMouse)&&Nr(X.velocity)&&X.currentMouse.set(0,0));let ee=X.currentMouse.y*f.degToRad(O.parallax.maxAngle),te=-X.currentMouse.x*f.degToRad(O.parallax.maxAngle);N.rotateX(ee),N.rotateY(te),Gr(e,{skyOnly:a&&!s&&!o,sceneAnimationActive:s,frameScale:r}),N.quaternion.copy(u),G.renderRequested=!1,s?q():a&&Lr()}window.addEventListener(`resize`,()=>{tn(),wn(),En(),N.aspect=T.aspect,N.updateProjectionMatrix(),Xt!==null&&window.clearTimeout(Xt),Xt=window.setTimeout(()=>{Xt=null,er({forceRebuild:!0}),Vi(),q()},bt),jr(),Rr()}),Ji(),q();