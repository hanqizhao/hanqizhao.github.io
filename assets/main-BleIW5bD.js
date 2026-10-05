const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/outer-screen-overlay-Dr23aHuB.js","assets/createWinXPHost-umycNQtc.js","assets/rolldown-runtime-BVbofQct.js","assets/preload-helper-DWTEM3RW.js","assets/react-vendor-aHYhdYD6.js","assets/DesktopPreparationContext-BlSP-Nga.js","assets/DesktopViewportContext-CSe3oa11.js","assets/desktopPresentationProfile-CxyoU_8r.js","assets/runtimeBridge-BbQNkrZH.js","assets/globalAudio-DIT2W2K_.js","assets/publicPath-SdK1OGf5.js","assets/createWinXPHost-BSxTm-g0.css"])))=>i.map(i=>d[i]);
import"./modulepreload-polyfill-Cf3xff8G.js";import{A as e,C as t,D as n,E as r,M as i,O as a,S as o,T as s,_ as c,a as l,b as u,c as d,d as ee,f as te,g as f,h as ne,i as p,j as m,k as re,l as ie,m as ae,n as oe,o as h,p as se,r as ce,s as le,t as ue,u as de,v as fe,w as g,x as pe,y as me}from"./three-vendor-46HZT5qf.js";import{t as he}from"./desktopPresentationProfile-CxyoU_8r.js";import{a as ge,i as _e,l as ve,n as ye,o as be,t as xe,u as Se}from"./runtimeBridge-BbQNkrZH.js";import{t as Ce}from"./preload-helper-DWTEM3RW.js";var we=`/models/room_all.glb`,Te={current:{visualSkyLdr:new URL(`/assets/new_sky_ldr-yZ_KpEae.jpg`,``+import.meta.url).href,lightingLdr:new URL(`/assets/room_ldr-DOcZ7og-.jpg`,``+import.meta.url).href,room:new URL(`/assets/room%20baked-KoBuYlPf.ktx2`,``+import.meta.url).href,table:new URL(`/assets/table%20baked-DFp0K4D2.ktx2`,``+import.meta.url).href,chairBack:new URL(`/assets/chair%20back%20final-sbWclMz4.ktx2`,``+import.meta.url).href,chairLeft:new URL(`/assets/chair%20left%20final-BjZ_O-yh.ktx2`,``+import.meta.url).href,chairRight:new URL(`/assets/chair%20right%20final-BtcJ8_ie.ktx2`,``+import.meta.url).href,computer:new URL(`/assets/computer%20shadow-D5HsGwbv.ktx2`,``+import.meta.url).href}},_={label:`Slim`,visualSky:{kind:`ldr`,path:Te.current.visualSkyLdr,flipY:!0},lightingEnvironment:{kind:`ldr`,path:Te.current.lightingLdr,flipY:!0,intensity:1.2},bakedSurfacePaths:{room:Te.current.room,table:Te.current.table,chairBack:Te.current.chairBack,chairLeft:Te.current.chairLeft,chairRight:Te.current.chairRight},lightMapPaths:{computer:Te.current.computer}},Ee=class{constructor(e,t=()=>{}){this.stages=new Map(e.map(e=>[e,!1])),this.onChange=t,this.state=`preparing`}ready(e){if(!this.stages.has(e))throw Error(`Unknown startup stage: ${e}`);this.stages.set(e,!0),this.onChange(this.snapshot())}transition(e){this.state=e,this.onChange(this.snapshot())}snapshot(){let e=[...this.stages.values()].filter(Boolean).length;return{state:this.state,completed:e,total:this.stages.size,pending:[...this.stages].filter(([,e])=>!e).map(([e])=>e)}}},De=class{constructor(e,{request:t=e=>window.requestAnimationFrame(e),cancel:n=e=>window.cancelAnimationFrame(e)}={}){this.frame=e,this.request=t,this.cancel=n,this.frameId=null,this.timer=null,this.suspended=!1,this.reasons=new Set,this.lastReasons=[],this.frameCount=0}invalidate(e=`scene`){this.reasons.add(e),clearTimeout(this.timer),this.timer=null,!(this.suspended||this.frameId!==null)&&(this.frameId=this.request(e=>{this.frameId=null,this.lastReasons=[...this.reasons],this.reasons.clear(),this.frameCount++,this.frame(e)}))}decorate(e){this.suspended||this.frameId!==null||this.timer!==null||(this.timer=setTimeout(()=>{this.timer=null,this.invalidate(`sky`)},e))}suspend(e){this.suspended=e,e?(this.frameId!==null&&this.cancel(this.frameId),clearTimeout(this.timer),this.frameId=null,this.timer=null):this.invalidate(`recovering`)}dispose(){this.suspend(!0),this.reasons.clear()}},Oe=class{constructor(){this.active=null}start({now:e,duration:t,update:n,complete:r}){this.active={startedAt:e,duration:Math.max(1,t),update:n,complete:r},this.tick(e)}tick(e){let t=this.active;if(!t)return!1;let n=Math.min(1,Math.max(0,(e-t.startedAt)/t.duration));return t.update(n),n===1&&this.active===t&&(this.active=null,t.complete?.()),!!this.active}shift(e,t=1/0){this.active&&(this.active.startedAt+=Math.min(e,Math.max(0,t-this.active.startedAt)))}cancel(){this.active=null}},ke=new Set([`legacy`,`single-scene`,`compact`]),Ae=new URLSearchParams(window.location.search).get(`postfxBuffers`),je=ke.has(Ae)?Ae:`compact`;function Me(e,t,n){if(je!==`legacy`){if(e.passes.at(-1)!==n||e.passes.slice(0,-1).some(e=>e.needsSwap))throw Error(`Compact postprocessing requires an in-place chain and final OutputPass.`);if(n.needsSwap=!1,je===`compact`)for(let e of[t.renderTargetBright,...t.renderTargetsHorizontal,...t.renderTargetsVertical])e.depthBuffer=!1,e.stencilBuffer=!1}}var Ne=`slim`,Pe=`outer-website:quality-mode`,Fe=`outer-website:quality-profile-v1`,Ie=1,Le=336*60*60*1e3,Re=`high`,ze=`low`;function Be(){try{return new URLSearchParams(window.location.search)}catch{return new URLSearchParams}}var Ve=Be();function He(e){let t=Ve.get(e);return t===``||t===`1`||t===`true`}function Ue(e){return e===ze?ze:Re}function We(){try{window.localStorage.removeItem(Pe),window.localStorage.removeItem(Fe)}catch{}}(He(`clearQualityProfile`)||He(`resetQualityProfile`))&&We();function Ge(){if(He(`ignoreQualityProfile`))return null;try{let e=window.localStorage.getItem(Pe);if(!e)return null;let t=JSON.parse(e);return t?.mode===ze||t===ze?ze:Re}catch{return null}}function Ke(){if(He(`ignoreQualityProfile`))return null;try{let e=window.localStorage.getItem(Fe);if(!e)return null;let t=JSON.parse(e),n=Date.now()-Number(t?.createdAt??0);return t?.version!==Ie||!Number.isFinite(n)||n<0||n>Le?null:t}catch{return null}}function qe(){try{let e=document.createElement(`canvas`),t=e.getContext(`webgl2`,{powerPreference:`high-performance`})||e.getContext(`webgl`,{powerPreference:`high-performance`});if(!t)return{available:!1};let n=t.getExtension(`WEBGL_debug_renderer_info`),r=n?t.getParameter(n.UNMASKED_RENDERER_WEBGL):``,i=n?t.getParameter(n.UNMASKED_VENDOR_WEBGL):``,a=t.getParameter(t.MAX_SAMPLES)??0,o=t.getParameter(t.MAX_TEXTURE_SIZE)??0,s=t.getParameter(t.MAX_RENDERBUFFER_SIZE)??0,c=`${i} ${r}`.toLowerCase();return{available:!0,renderer:r,vendor:i,maxSamples:a,maxTextureSize:o,maxRenderBufferSize:s,integratedHint:/intel|uhd|hd graphics|iris|radeon graphics|adreno|mali|apple gpu/i.test(c),softwareHint:/swiftshader|llvmpipe|basic render|software|warp/i.test(c)}}catch{return{available:!1}}}function Je(e=5){let t=performance.now(),n=0,r=0;for(;n<14e4&&performance.now()-t<e;)r=(r+Math.sqrt(n%97+1))%1e3,n+=1;let i=Math.max(.001,performance.now()-t);return{durationMs:Number(i.toFixed(3)),iterations:n,iterationsPerMs:Number((n/i).toFixed(1)),checksum:Number(r.toFixed(3))}}function Ye(e){let t=qe(),n=Je(),r=Math.round((window.screen?.width??window.innerWidth)*(window.screen?.height??window.innerHeight)*(window.devicePixelRatio||1)**2),i=0;e.prefersReducedMotion&&(i+=3),(e.coarsePointer||e.isLikelyMobile)&&(i+=2),e.deviceMemory>0&&e.deviceMemory<=4?i+=2:e.deviceMemory>0&&e.deviceMemory<=8&&(i+=1),e.hardwareConcurrency>0&&e.hardwareConcurrency<=4?i+=2:e.hardwareConcurrency>0&&e.hardwareConcurrency<=8&&(i+=1),r>=5e6&&(e.deviceMemory<=8||e.hardwareConcurrency<=8)&&(i+=1),!t.available||t.softwareHint?i+=4:t.integratedHint&&(i+=2),t.maxRenderBufferSize>0&&t.maxRenderBufferSize<=8192&&(i+=1),t.maxSamples===0&&(i+=1),n.iterationsPerMs<9e3?i+=2:n.iterationsPerMs<16e3&&(i+=1);let a=i>=3?ze:Re;return{version:Ie,createdAt:Date.now(),mode:a,lowTierScore:i,device:{deviceMemory:e.deviceMemory,hardwareConcurrency:e.hardwareConcurrency,prefersReducedMotion:e.prefersReducedMotion,coarsePointer:e.coarsePointer,isLikelyMobile:e.isLikelyMobile,devicePixelRatio:window.devicePixelRatio||1,screenPixelCount:r},webgl:t,cpuProbe:n}}function Xe(e){if(!He(`ignoreQualityProfile`))try{window.localStorage.setItem(Fe,JSON.stringify(e))}catch{}}function Ze(e){let t=Ge(),n=Ve.get(`quality`),r=Ke(),i=r??Ye(e);return r||Xe(i),{profile:i,mode:Ue(t??n??i.mode),source:t?`manual`:n?`query`:r?`cached`:`measured`}}var v=he(),Qe=Ze(v),$e=Qe.mode,et=Qe.source;function y(){return $e===ze}function tt(){v.qualityMode=$e,v.qualitySelectionSource=et,v.qualityProfile=Qe.profile,v.lowTierDetected=y(),v.shouldDefaultPostFxOff=y(),v.preferredBloomEnabled=!y(),v.preferredMsaaSamples=y()?0:v.preferredMsaaSamples||2}tt(),Se(v);var nt=!0,rt=null,it=null,at=!0,ot=!1,b=!1,st=!1,x=!1,S=!1,ct=null,lt=null,ut=null,dt=null,C=null,ft=null,pt=null,mt=null,ht=null,w=null,gt=null,_t=null,vt=null,yt=null,bt=null,xt=null,T=!1,St=null,Ct=!1,wt=null,Tt=null,Et=`outer-website:postfx-settings`,Dt=2200,Ot=10,kt=12,At=220,jt=2,Mt=2,Nt=1.25,Pt=1,Ft=.62,It=.7,Lt=.55,Rt=1800,zt=18,Bt=8,Vt=1e3/10,Ht=1200,Ut=1600,Wt=.25,Gt=32,Kt=40,qt=1e-4,Jt=.01,Yt=.015,Xt=.01,Zt=150,Qt=9999,$t=`outer-website:shockwave-v1`,en=[4,2,0],tn=!0,nn=1e3/180,rn=1e3/30,an=250,on=800,sn=`outer-website:`;function cn(){return y()?Nt:Mt}function ln(){return y()?Ft:Pt}function un(){return y()?Lt:It}function dn(){return y()?Bt:zt}function fn(){return 1e3/dn()}function pn(){return y()?Ut:Ht}function mn(){return y()?Kt:Gt}function hn(){return y()?Yt:Jt}function gn(e,t=rn){return(Number.isFinite(e)&&e>0?Math.min(e,t):nn)/nn}function _n(e,t){let n=f.clamp(e,0,1);return n<=0?0:n>=1?1:1-(1-n)**Math.max(0,t)}var E=window.__outerWebsiteStartupTiming??{createdAt:Date.now(),timeOrigin:performance.timeOrigin??Date.now()-performance.now(),events:[]};window.__outerWebsiteStartupTiming=E;function vn(){try{return new URLSearchParams(window.location.search).has(`startupTimingLog`)}catch{return!1}}var yn=vn();function bn(e){if(typeof e!=`object`||!e)return e??{};try{return JSON.parse(JSON.stringify(e,(e,t)=>{if(typeof t==`number`)return Number.isFinite(t)?Number(t.toFixed(3)):String(t);if(typeof t!=`function`)return t}))}catch{return{unserializable:!0}}}function D(e,t={}){let n=performance.now(),r={index:E.events.length,name:e,at:Number(n.toFixed(3)),detail:bn(t)};if(E.events.push(r),E.events.length>on&&E.events.splice(0,E.events.length-on),yn)try{performance.mark(`${sn}${e}`)}catch{}return yn&&console.debug(`[startup-timing]`,JSON.stringify(r)),r}function xn(){return{createdAt:E.createdAt,timeOrigin:E.timeOrigin,now:Number(performance.now().toFixed(3)),eventCount:E.events.length,events:E.events.slice()}}function Sn(){E.events.length=0,D(`debug.timeline.cleared`)}if(window.__outerWebsiteRecordStartupTiming=D,yn&&typeof PerformanceObserver<`u`)try{E.longTaskObserver?.disconnect?.(),E.longTaskObserver=new PerformanceObserver(e=>{e.getEntries().forEach(e=>{D(`performance.longtask`,{startTime:e.startTime,duration:e.duration,name:e.name})})}),E.longTaskObserver.observe({type:`longtask`,buffered:!0})}catch{}D(`main.module.loaded`,{assetProfile:Ne});var Cn=new m,wn=new m,Tn=[],En=!1,Dn=new m(0,0,0),On=null,O={lastRenderMs:0,avgRenderMs:0,avgFrameMs:0,fps:0,lastUiUpdate:0,lastFrameNow:0},kn=4/3,An=21/9;function jn(e){return Math.min(Math.max(e,kn),An)}function Mn(e=window.innerWidth,t=window.innerHeight){let n=Math.max(1,Math.floor(e)),r=Math.max(1,Math.floor(t)),i=n/r,a=jn(i),o=n,s=r;return i>a?o=Math.max(1,Math.round(r*a)):i<a&&(s=Math.max(1,Math.round(n/a))),{windowWidth:n,windowHeight:r,width:o,height:s,left:Math.round((n-o)/2),top:Math.round((r-s)/2),aspect:o/s,isClamped:Math.abs(i-a)>.001}}var k=Mn();function Nn(){Object.assign(k,Mn())}function Pn(e,t){let n=e-k.left,r=t-k.top,i=f.clamp(n,0,k.width),a=f.clamp(r,0,k.height);return{x:i/k.width*2-1,y:-(a/k.height)*2+1,inside:n>=0&&n<=k.width&&r>=0&&r<=k.height}}function A(e,t=jt){if(e===!0)return jt;if(e===!1||e==null)return t;let n=Number(e);return n>=4?4:n>=2?2:0}function Fn(e){return e>=4?`4x`:e>=2?`2x`:`Off`}function In(){let e={bloomEnabled:!y(),msaaSamples:A(y()?0:v.preferredMsaaSamples,y()?0:jt)};try{let t=window.localStorage.getItem(Et);if(!t)return e;let n=JSON.parse(t);return{bloomEnabled:n?.bloomEnabled!==!1,msaaSamples:A(n?.msaaSamples??n?.msaaEnabled,e.msaaSamples)}}catch{return e}}var j=In();function Ln(){try{window.localStorage.setItem(Et,JSON.stringify(j))}catch{}}var M={url:`/embedded-winxp.html`,width:1280,height:820,rotationX:-Math.PI*15.5/180,rotationY:Math.PI/2,rotationZ:0,flipNormal:!1,scaleMultiplier:1,scaleX:.99,scaleY:1.01,offsetX:0,offsetY:6e-4,offsetZ:0},Rn={localCorners:[new m(-M.width/2,M.height/2,0),new m(M.width/2,M.height/2,0),new m(M.width/2,-M.height/2,0),new m(-M.width/2,-M.height/2,0)],worldCorners:[new m,new m,new m,new m],quad:[{x:0,y:0},{x:0,y:0},{x:0,y:0},{x:0,y:0}],cameraSpacePoint:new m,projectedPoint:new m},N={loader:{bgColor:`#d9d9d9`,minLoadTime:1500,fadeTime:1,cameraPush:{startTime:1.5,duration:1,distance:.5},shockwave:{startTime:.5,duration:5.5,startRadius:0,endRadius:20,edgeWidth:.2,edgeIntensity:3,centerOffset:new m(-4,-1,0)},skyFade:{startTime:.5,duration:1},screenFade:{startTime:2.5,duration:6.5},controlsUnlockTime:2.5},intro:{startPos:new m(4.3,-1.8,0),startTarget:new m(0,-1.4,0)},focus:{duration:2e3,easing:`easeInOutCubic`,distance:.18,yOffset:0,maxTriggerAngle:60,targetOffsetX:0,targetOffsetY:0,targetOffsetZ:0,hitboxScale:1.8},unfocus:{preDelay:0,duration:1800,easing:`easeOutCubic`,endPos:new m(4.5,-1.8,0),endTarget:new m(0,-1.4,0)},shield:{maxClickDistance:1.2,dimOpacity:.8,fadeDistance:.55,opacityLerp:.14},sky:{rotationSpeed:3e-5},parallax:{maxAngle:6,unlockThreshold:.12,springAccel:.0065,springFriction:.095,catchupSpeed:.055,idleTimeout:2200},walk:{chargeTime:80,releaseGrace:50,maxDist:1e3,speed:.011,acceleration:.6,deceleration:.6,dirLerp:1,dampingZone:.8,bounds:{minX:2,maxX:5,minY:-2,maxY:1.5,minZ:-3.5,maxZ:3.5}}};document.body.style.backgroundColor=N.loader.bgColor,document.body.style.margin=`0`,document.body.style.overflow=`hidden`;var zn=`/font/Controller%20W01%20Two%20Oblique.ttf`,Bn=`/font/Controller%20W01%20Five%20Oblique.ttf`,Vn=`"Controller W01 Two Oblique", 'Courier New', Courier, monospace`,Hn=`"Controller W01 Five Oblique", 'Courier New', Courier, monospace`,Un=document.createElement(`style`);Un.textContent=`
  @font-face {
    font-family: 'Controller W01 Two Oblique';
    src: url('${zn}') format('truetype');
    font-weight: 400;
    font-style: normal;
    font-display: swap;
  }
  @font-face {
    font-family: 'Controller W01 Five Oblique';
    src: url('${Bn}') format('truetype');
    font-weight: 400;
    font-style: normal;
    font-display: swap;
  }
  #hud-loader-root {
    position: fixed; top: 0; left: 0; width: 100vw; height: 100vh;
    background-color: #ffffff;
    z-index: 9999; display: flex; justify-content: center; align-items: center;
    font-family: ${Vn};
    color: #ff7b00;
    filter: drop-shadow(0 0 2px rgba(255,102,0,0.9)) drop-shadow(0 0 6px rgba(255,102,0,0.5));
    -webkit-user-select: none; user-select: none;
    transition: opacity ${N.loader.fadeTime}s ease-in-out;
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
`,document.head.appendChild(Un);var P=document.createElement(`div`);P.id=`hud-loader-root`,P.innerHTML=`
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
  </div>`,document.body.appendChild(P);var Wn=new Ee([`textures`,`model`,`scene`,`gpu`],({completed:e,total:t,state:n})=>{P.querySelectorAll(`.hud-block`).forEach((n,r)=>n.classList.toggle(`lit`,r<e/t*18)),P.querySelector(`#hud-status`).textContent=n===`awaitingGesture`?`Ready to enter.`:`Preparing room (`+e+`/`+t+`)...`,P.querySelector(`#hud-hex`).textContent=e+`/`+t});(function(){let e=P.querySelector(`#hud-bar`);P.querySelector(`#hud-hex`),P.querySelector(`#hud-status`);for(let t=0;t<18;t++){let t=document.createElement(`div`);t.className=`hud-block`,e.appendChild(t)}Wn.transition(`preparing`)})();function Gn(){return D(`loader.prompt.wait.start`),new Promise(e=>{let t=P.querySelector(`.hud-core`);if(!t){D(`loader.prompt.missing`),Tt=null,e();return}let n=!1,r=t=>{if(n)return;let r=performance.now();if(D(`loader.gesture.finish.start`,{reason:t}),n=!0,ot=!1,X(),Tt=null,P.removeEventListener(`pointerdown`,i,!0),P.removeEventListener(`keydown`,a,!0),typeof $i?.releaseQueuedPlayback==`function`){let e=performance.now();$i.releaseQueuedPlayback(t),D(`loader.gesture.audioRelease.called`,{reason:t,elapsedMs:performance.now()-e})}D(`loader.gesture.finish.end`,{reason:t,elapsedMs:performance.now()-r}),e()},i=e=>{D(`loader.gesture.pointerdown`,{button:e.button,pointerType:e.pointerType}),e.preventDefault(),r(`loader-start-pointer`)},a=e=>{e.key!==`Enter`&&e.key!==` `||(D(`loader.gesture.keydown`,{key:e.key}),e.preventDefault(),r(`loader-start-keyboard`))};t.classList.add(`is-awaiting-start`),Tt=()=>{D(`loader.gesture.debugTrigger`),r(`loader-start-debug`)},P.tabIndex=0,P.focus({preventScroll:!0}),P.addEventListener(`pointerdown`,i,!0),P.addEventListener(`keydown`,a,!0),D(`loader.prompt.awaiting`,{activeElementId:document.activeElement?.id??``})})}var Kn=document.getElementById(`app`),qn=new s,Jn={fov:65,near:.1,far:1e3},F={exposure:1.1,saturation:1.25,highlights:.95,washout:0,lift:0,gamma:1,colorBalance:new m(1,1,1),bloomOffCompensation:{exposure:1.26,saturation:1.55,highlights:.95,washout:0,lift:0,gamma:1,colorBalance:new m(1.003,1.006,1.026)},repeatX:2,repeatY:1.2,offsetY:0,rotationY:-3*Math.PI/4},I={exposure:.9,bloom:{strength:.01,radius:0,threshold:0,transitionDurationMs:220},unfocus:{bloomResumeProgress:.5}},Yn={appearAt:3,fadeDuration:1},Xn={sources:[`/audio/outer-bgm.ogg`,`/audio/outer-bgm.m4a`],loop:!0,initialVolume:.56,defaultWantsToPlay:!0},Zn={minVolumeRatio:.2,volumeSyncEpsilon:.003},L=new u(Jn.fov,k.aspect,Jn.near,Jn.far),Qn=new m().subVectors(N.intro.startTarget,N.intro.startPos).normalize(),$n=N.intro.startPos.clone().addScaledVector(Qn,-N.loader.cameraPush.distance);L.position.copy($n);var R=new de({antialias:!0,alpha:!1,powerPreference:`high-performance`});function er(){R.domElement.style.left=`${k.left}px`,R.domElement.style.top=`${k.top}px`}function tr(e=dr,t=ar()){return y()||!e?t:rr()}function nr(e=ar()){let t=tr(dr,e);R.setPixelRatio(t),R.setSize(k.width,k.height),ur=e,z?.setPixelRatio&&z.setPixelRatio(e),z?.setSize&&z.setSize(k.width,k.height),B?.setSize&&B.setSize(Math.max(1,Math.floor(k.width*e*.5)),Math.max(1,Math.floor(k.height*e*.5)))}function rr(){return Math.min(window.devicePixelRatio||1,cn())}function ir(){return ln()}function ar(){let e=rr();return f.clamp(e*ir(),un(),e)}R.setPixelRatio(rr()),R.setSize(k.width,k.height),R.setClearColor(0,1),R.outputColorSpace=g,R.useLegacyLights=!1,R.toneMapping=4,R.toneMappingExposure=I.exposure,Kn.style.position=`relative`,Kn.style.backgroundColor=`#000000`,R.domElement.style.position=`absolute`,R.domElement.style.zIndex=`1`,R.domElement.style.pointerEvents=`auto`,R.domElement.style.display=`block`,er(),Kn.appendChild(R.domElement);var or=null,z=null,sr=null,B=null,cr=null,lr=0,ur=0,dr=!1,V={currentStrength:j.bloomEnabled&&!y()?I.bloom.strength:0,fromStrength:j.bloomEnabled&&!y()?I.bloom.strength:0,targetStrength:j.bloomEnabled&&!y()?I.bloom.strength:0,transitionStartedAt:performance.now()},fr={hidden:!1};function pr(){return j.bloomEnabled&&!Yr()?I.bloom.strength:0}function mr(e=performance.now()){let t=pr();Math.abs(t-V.targetStrength)<1e-4||(V.fromStrength=V.currentStrength,V.targetStrength=t,V.transitionStartedAt=e)}function hr(){return Math.abs(V.currentStrength-V.targetStrength)>1e-4}function gr(){return V.currentStrength>1e-4||V.targetStrength>1e-4}function _r(e=performance.now()){mr(e);let t=Math.max(0,I.bloom.transitionDurationMs??0);if(t<=0)V.currentStrength=V.targetStrength,V.fromStrength=V.targetStrength;else{let n=f.clamp((e-V.transitionStartedAt)/t,0,1),r=n<.5?4*n*n*n:1-(-2*n+2)**3/2;V.currentStrength=f.lerp(V.fromStrength,V.targetStrength,r),n>=1&&(V.currentStrength=V.targetStrength,V.fromStrength=V.targetStrength)}B&&(B.enabled=gr(),B.strength=V.currentStrength,B.radius=I.bloom.radius,B.threshold=I.bloom.threshold)}function vr(){return Xr()?0:j.msaaSamples}function yr(e=performance.now()){return mr(e),tn}function br(e=vr()){let t=A(e,0);if(t<=0)return 0;let n=R.capabilities.maxSamples??0;return n>=t?t:n>=4?4:n>=2?2:0}function xr(){z?.dispose&&z.dispose(),B?.dispose&&B.dispose(),cr?.dispose&&cr.dispose(),or&&or.dispose(),z=null,sr=null,B=null,cr=null,or=null,dr=!1}function Sr({pixelRatio:t=ar(),msaaSamples:n=br(vr()),useComposer:r=yr()}={}){xr();let a=Math.max(1,Math.floor(k.width*t)),o=Math.max(1,Math.floor(k.height*t)),s=tr(r,t);R.setPixelRatio(s),R.setSize(k.width,k.height),er(),ur=t,lr=r?n:0,dr=r,r&&(or=new i(a,o,{samples:n,type:y()?re:ne}),z=new p(R,or),z?.setPixelRatio&&z.setPixelRatio(t),sr=new ce(qn,L),z.addPass(sr),B=new oe(new e(Math.max(1,Math.floor(k.width*t*.5)),Math.max(1,Math.floor(k.height*t*.5))),V.currentStrength,I.bloom.radius,I.bloom.threshold),_r(performance.now()),z.addPass(B),cr=new ue,z.addPass(cr),Me(z,B,cr),nr(t))}function Cr({forceRebuild:e=!1}={}){let t=performance.now();mr(t);let n=ar(),r=br(vr()),i=yr(t);if(e||Math.abs(n-ur)>.001||r!==lr||i!==dr){Sr({pixelRatio:n,msaaSamples:r,useComposer:i}),J.projectionInvalidated=!0,X();return}if(Math.abs(n-ur)>.001){nr(n),J.projectionInvalidated=!0,X();return}_r(t)}Sr();function wr(){let e=ar();return{scale:Number(ir().toFixed(3)),pixelRatio:e,width:Math.max(1,Math.floor(k.width*e)),height:Math.max(1,Math.floor(k.height*e))}}function Tr(){let e=performance.memory;if(!e)return null;let t=e=>Number((e/(1024*1024)).toFixed(2));return{usedMB:t(e.usedJSHeapSize),totalMB:t(e.totalJSHeapSize),limitMB:t(e.jsHeapSizeLimit)}}function Er(){let e=ca(),t=wr(),n=A(j.msaaSamples,0),r=A(vr(),0),i=br(vr()),a=$?.velocity?.lengthSq?.()??0,o=Z?.velocity?.lengthSq?.()??0,s=Z?.currentMouse?.distanceToSquared?.(Z.targetMouse)??0,c=Math.abs((G?.current??0)-(G?.target??0)),l=K?.lastUpdateAt?performance.now()-K.lastUpdateAt:null;return{ready:!at,isAnimating:S,physicsUnlocked:b,focused:x,benchmarkMode:!1,postFxBufferMode:je,externalTextureOverridesEnabled:!0,assetProfile:Ne,assetProfileLabel:_.label,performanceProfile:{qualityMode:$e,qualitySelectionSource:et,qualityLowTierScore:Qe.profile?.lowTierScore??null,lowPowerOuterMode:y(),maxDevicePixelRatio:cn(),renderScale:Number(ir().toFixed(3)),skyOnlyTargetFps:dn()},bloomEnabled:e.bloomEnabled,bloomStrength:Number(V.currentStrength.toFixed(4)),savedBloomEnabled:j.bloomEnabled,requestedMsaaSamples:r,savedMsaaSamples:n,effectiveMsaaSamples:i,msaaLabel:Fn(i),avgRenderMs:Number(O.avgRenderMs.toFixed(3)),avgFrameMs:Number(O.avgFrameMs.toFixed(3)),fps:Number(O.fps.toFixed(2)),resolution:t,viewport:{width:k.width,height:k.height,left:k.left,top:k.top,aspect:Number(k.aspect.toFixed(3)),clamped:k.isClamped},rendererInfo:{calls:R.info.render.calls,triangles:R.info.render.triangles,lines:R.info.render.lines,points:R.info.render.points,frame:R.info.render.frame,geometries:R.info.memory.geometries,textures:R.info.memory.textures},jsHeap:Tr(),internals:{outerScenePaused:Kr(),effectiveRenderPath:ti()?`renderer`:`composer`,composerActive:dr,outerCanvasVisible:!fr.hidden,screenContentMode:Br,screenAppReadyForProjection:Vi(),renderRequested:J.renderRequested,projectionInvalidated:J.projectionInvalidated,hasActiveSceneAnimation:di(performance.now()),hasSkyAnimation:!ot&&ii(),transitionSettleRemainingMs:Math.max(0,Number((J.transitionSettleUntil-performance.now()).toFixed(3))),walkVelocitySq:Number(a.toFixed(8)),parallaxVelocitySq:Number(o.toFixed(8)),parallaxDeltaSq:Number(s.toFixed(8)),screenOpacityDelta:Number(c.toFixed(8)),screenProjectionAgeMs:l==null?null:Number(l.toFixed(3))}}}function Dr(e=2e4){return new Promise((t,n)=>{let r=performance.now();function i(){if(!at){t(Er());return}if(performance.now()-r>=e){n(Error(`Timed out waiting for outer scene readiness`));return}window.requestAnimationFrame(i)}i()})}function Or(e=3e4){return new Promise((t,n)=>{let r=performance.now();function i(){if(!at&&!S&&b){t(Er());return}if(performance.now()-r>=e){n(Error(`Timed out waiting for benchmark-stable scene state`));return}window.requestAnimationFrame(i)}i()})}function kr(e=2e4){return new Promise((t,n)=>{let r=performance.now();function i(){if(typeof Tt==`function`){t(!0);return}if(performance.now()-r>=e){n(Error(`Timed out waiting for loader start prompt`));return}window.requestAnimationFrame(i)}i()})}function Ar(e=3e3){return new Promise((t,n)=>{let r=Math.max(250,Number(e)||3e3),i=performance.now(),a=[],o=[],s=[],c=0;function l(){let e=Er(),n=e=>e.length?Number((e.reduce((e,t)=>e+t,0)/e.length).toFixed(3)):0,i=o.map(e=>e>0?1e3/e:0);t({...e,sampleDurationMs:r,sampleCount:a.length,windowAvgRenderMs:n(a),windowAvgFrameMs:n(o),windowAvgFps:n(i),windowMinFps:i.length?Number(Math.min(...i).toFixed(3)):0,windowMaxFps:i.length?Number(Math.max(...i).toFixed(3)):0,windowAvgHeapMB:n(s)})}function u(e){let t=Er();if(a.push(O.lastRenderMs||t.avgRenderMs),t.jsHeap?.usedMB!=null&&s.push(t.jsHeap.usedMB),c>0){let t=e-c;t>0&&t<250&&o.push(t)}if(c=e,performance.now()-i>=r){l();return}window.requestAnimationFrame(u)}Dr().then(()=>u()).catch(n)})}window.__outerWebsiteDebug={getMetrics:Er,getWinXPRuntimeState:()=>({focusState:be(),presentationState:ge(),presentationProfile:_e()}),waitForReady:Dr,waitForBenchmarkStable:Or,waitForStartPrompt:kr,getStartupTimeline:xn,clearStartupTimeline:Sn,getQualityProfile:()=>({mode:$e,selectionSource:et,profile:Qe.profile,storageKeys:{mode:Pe,profile:Fe}}),setQualityMode:e=>(ha(Ue(e)),Er()),clearQualityProfile:()=>(We(),!0),startExperience:()=>typeof Tt==`function`?(Tt(),!0):!1,sampleMetrics:Ar};var jr=new ie(L,R.domElement);jr.enabled=!1,jr.target.copy(N.intro.startTarget);var Mr=new a,Nr=new le,Pr=new h,Fr=new l,Ir=new d;Fr.setTranscoderPath(`/basis/`),Fr.detectSupport(R),Ir.setDecoderPath(`/draco/`),Ir.preload(),Nr.setKTX2Loader(Fr),Nr.setDRACOLoader(Ir);var Lr=null,H=null,U=null,Rr=null,zr=null,Br=`live`,Vr=[],Hr=null,W=null,G={runtimeEnabled:!1,current:0,target:0,pointerEvents:`none`},K={quad:null,lastUpdateAt:0,lastMissStartedAt:0},q={currentGain:1,fullVolumeDistance:0,minimumVolumeDistance:0,lastSyncedVolume:null},J={frameId:null,renderRequested:!0,projectionInvalidated:!0,skyFrameTimeoutId:null,transitionSettleUntil:0},Y={mode:`idle`,startedAt:0,duration:0,easingName:`easeInOutCubic`},Ur=new Oe,Wr=new De(Ua),Gr=null;document.addEventListener(`visibilitychange`,()=>{if(document.hidden)Gr=performance.now(),Wr.suspend(!0),Oa();else{let e=performance.now(),t=Gr===null?0:e-Gr;Gr=null,Ur.shift(t,e),Y.mode!==`idle`&&(Y.startedAt+=Math.min(t,Math.max(0,e-Y.startedAt))),it?.(t,e),Ta.lastFrameNow=performance.now(),J.projectionInvalidated=!0,Wr.suspend(!1)}});function Kr(){return document.hidden||x&&!S}function qr(e,t,n,r=performance.now()){Y.mode=e,Y.startedAt=r,Y.duration=Math.max(1,t),Y.easingName=n}function Jr(){Y.mode=`idle`,Y.startedAt=0,Y.duration=0,Y.easingName=`easeInOutCubic`}function Yr(e=performance.now()){return y()}function Xr(){return y()}function Zr(){return!1}function Qr(){let e=Zr();fr.hidden!==e&&(fr.hidden=e,R.domElement.style.display=`block`,R.domElement.style.visibility=e?`hidden`:`visible`,R.domElement.style.opacity=e?`0`:`1`,R.domElement.style.pointerEvents=e?`none`:`auto`)}function $r(){let e={focused:x,animating:S,settled:Kr()};Cr(),Qr(),fa(),ve(e)}ve(xe);function ei(e){x!==e&&(x=e,e&&Oa(),na(),Cr(),Qr(),fa(),X())}function ti(){return!dr}function ni(e,t){if(!e||!t)return;let n=t.getBoundingClientRect(),r=wt?.getBoundingClientRect()??n,i=e.offsetWidth||e.getBoundingClientRect().width||0,a=f.clamp(r.right-i,kt,window.innerWidth-kt-i);e.style.left=`${a}px`,e.style.top=`${n.bottom+Ot}px`}function ri(){ni(C,mt),ni(w,xt)}function ii(){return!!W&&!Kr()&&!y()}function ai(e,t=hn()){return e.lengthSq()<=t*t}function oi(e,t=qt){return e.lengthSq()<=t*t}function si(){return G.runtimeEnabled&&Math.abs(G.current-G.target)>Xt}function ci(){J.skyFrameTimeoutId!==null&&(window.clearTimeout(J.skyFrameTimeoutId),J.skyFrameTimeoutId=null)}function X(){J.renderRequested=!0,ci(),Qr(),Wr.invalidate(J.projectionInvalidated?`projection`:`scene`)}function li(e=fn()){Wr.decorate(Math.max(0,e))}function ui(){J.projectionInvalidated=!0,X()}function di(e){return nt||document.hidden?!1:!!(at&&!ot||S||hr()||e<J.transitionSettleUntil||Q.w||Q.a||Q.s||Q.d||Q[` `]||Q.control||$.active||$.velocity.lengthSq()>1e-6||Z.velocity.lengthSq()>1e-6||!ai(Z.currentMouse)||Z.currentMouse.distanceToSquared(Z.targetMouse)>1e-6||si())}function fi(e=Rt){J.transitionSettleUntil=Math.max(J.transitionSettleUntil,performance.now()+e),X()}function pi(e=performance.now(),t=!1,n=!1){return J.projectionInvalidated?!0:t?!1:x?!!(S||at):S||at||n||J.renderRequested?!0:e-K.lastUpdateAt>=Vt}function mi(e=performance.now(),{skyOnly:t=!1,sceneAnimationActive:n=!1,frameScale:r=1}={}){let i=performance.now(),a=hr();_r(e),dr&&!yr(e)&&Cr({forceRebuild:!0}),Oi();let o=hr();(a||o)&&!S&&fa(),t||Yi(),!dr||!z?R.render(qn,L):z.render(),t||Va(r),pi(e,t,n)&&(Ci(),J.projectionInvalidated=!1,K.lastUpdateAt=e),ya(performance.now()-i,e)}function hi(e){let t=f.clamp(e,0,1);Math.abs(G.current-t)<.001||(G.current=t,U?.setVisualState({brightness:t}),Qr())}function gi(e){G.pointerEvents!==e&&(G.pointerEvents=e,U?.setVisualState({pointerEvents:e}))}function _i(e,t){if(Rn.cameraSpacePoint.copy(e).applyMatrix4(L.matrixWorldInverse).z>=-.001)return null;let n=Rn.projectedPoint.copy(e).project(L);return!Number.isFinite(n.x)||!Number.isFinite(n.y)?null:(t.x=k.left+(n.x*.5+.5)*k.width,t.y=k.top+(-n.y*.5+.5)*k.height,t)}function vi(){if(!H)return null;H.updateMatrixWorld(!0);for(let e=0;e<Rn.localCorners.length;e+=1)if(!_i(Rn.worldCorners[e].copy(Rn.localCorners[e]).applyMatrix4(H.matrixWorld),Rn.quad[e]))return null;return Rn.quad}function yi(e){return e.map(e=>({x:e.x,y:e.y}))}function bi(e,t){for(let n=0;n<t.length;n+=1)e[n].x=t[n].x,e[n].y=t[n].y}function xi(e,t,n=Wt){if(!e||!t||e.length!==t.length)return!1;for(let r=0;r<e.length;r+=1)if(Math.abs(e[r].x-t[r].x)>n||Math.abs(e[r].y-t[r].y)>n)return!1;return!0}function Si(){if(K.quad&&U?.isMounted?.()){K.lastMissStartedAt=0,U.setVisualState({pointerEvents:`none`,visible:!0}),Qr();return}K.quad=null,K.lastMissStartedAt=0,U?.setVisualState({pointerEvents:`none`,visible:!1}),Qr()}function Ci(){if(!H){Si();return}let e=performance.now(),t=vi();if(!t){if(K.quad&&(K.lastMissStartedAt===0&&(K.lastMissStartedAt=e),e-K.lastMissStartedAt<pn())){U?.setVisualState({visible:!0}),Qr();return}Si();return}if(K.lastMissStartedAt=0,!K.quad)K.quad=yi(t);else if(!xi(K.quad,t))bi(K.quad,t);else{U&&U.setVisualState({visible:!0}),Qr();return}U&&(U.syncProjection(K.quad),U.setVisualState({visible:!0})),Qr()}function wi(e,t){if(!K.quad||K.quad.length!==4)return!1;let n=0;for(let r=0;r<K.quad.length;r+=1){let i=K.quad[r],a=K.quad[(r+1)%K.quad.length],o=(a.x-i.x)*(t-i.y)-(a.y-i.y)*(e-i.x);if(Math.abs(o)<=.5)continue;let s=Math.sign(o);if(n===0){n=s;continue}if(n!==s)return!1}return!0}function Ti(e){En=!1,e.traverse(e=>{e.isMesh&&(e.name.toLowerCase().includes(`screen_plane`)||e.name.toLowerCase().includes(`hitbox`)||(Array.isArray(e.material)?e.material:[e.material]).forEach(e=>{if(!e||Tn.includes(e))return;Tn.push(e);let t=e.onBeforeCompile,n=Object.prototype.hasOwnProperty.call(e,`customProgramCacheKey`),r=e.customProgramCacheKey;e.userData.outerWebsiteShockwaveMaterial={originalOnBeforeCompile:t,hadOwnCustomProgramCacheKey:n,originalCustomProgramCacheKey:r},e.onBeforeCompile=(n,r)=>{typeof t==`function`&&t.call(e,n,r),e.userData.shader=n,n.uniforms.uShockwaveRadius={value:0},n.uniforms.uShockwaveCenter={value:Dn},n.uniforms.uEdgeIntensity={value:N.loader.shockwave.edgeIntensity},n.vertexShader=`
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
          float edgeWidth = ${N.loader.shockwave.edgeWidth.toFixed(2)};
          if (uShockwaveRadius > 0.01 && dist > uShockwaveRadius - edgeWidth) {
             float glow = (dist - (uShockwaveRadius - edgeWidth)) / edgeWidth;
             gl_FragColor.rgb += vec3(glow * 0.2, glow * 0.8, glow * 1.5) * uEdgeIntensity;
          }
          `)},e.customProgramCacheKey=()=>`${typeof r==`function`?r.call(e):``}|${$t}`,e.needsUpdate=!0}))})}function Ei(){En||(En=!0,Tn.forEach(e=>{let t=e?.userData?.outerWebsiteShockwaveMaterial;t&&(e.onBeforeCompile=t.originalOnBeforeCompile,t.hadOwnCustomProgramCacheKey?e.customProgramCacheKey=t.originalCustomProgramCacheKey:delete e.customProgramCacheKey,delete e.userData.shader,delete e.userData.outerWebsiteShockwaveMaterial,e.needsUpdate=!0)}),X())}function Di(n,i={}){return n.wrapS=t,n.wrapT=ae,new r({transparent:!0,uniforms:{tSky:{value:n},uExposure:{value:F.exposure},uSaturation:{value:F.saturation},uHighlights:{value:F.highlights},uWashout:{value:i.washout??F.washout},uLift:{value:i.lift??F.lift},uGamma:{value:i.gamma??F.gamma},uColorBalance:{value:F.colorBalance.clone()},uRepeat:{value:new e(i.repeatX??F.repeatX,i.repeatY??F.repeatY)},uOffsetY:{value:i.offsetY??F.offsetY},uSkyOpacity:{value:0}},vertexShader:`varying vec2 vUv; void main() { vUv = uv; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }`,fragmentShader:`
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
    `,side:0,toneMapped:!1})}function Oi(){let e=W?.material?.uniforms;if(!e)return;let t=Math.max(1e-4,I.bloom.strength??1e-4),n=f.clamp(V.currentStrength/t,0,1),r=F.bloomOffCompensation;e.uExposure.value=f.lerp(r.exposure,F.exposure,n),e.uSaturation.value=f.lerp(r.saturation,F.saturation,n),e.uHighlights.value=f.lerp(r.highlights,F.highlights,n),e.uWashout.value=f.lerp(r.washout,F.washout,n),e.uLift.value=f.lerp(r.lift,F.lift,n),e.uGamma.value=f.lerp(r.gamma,F.gamma,n),e.uColorBalance.value.lerpVectors(r.colorBalance,F.colorBalance,n)}var ki={computer:{path:_.lightMapPaths.computer}},Ai={room:{path:_.bakedSurfacePaths.room},table:{path:_.bakedSurfacePaths.table},chairBack:{path:_.bakedSurfacePaths.chairBack},chairLeft:{path:_.bakedSurfacePaths.chairLeft},chairRight:{path:_.bakedSurfacePaths.chairRight}},ji=new Set([`room`,`table`]),Mi={computer:{envMapIntensity:10.95,roughnessMin:.8}};function Ni(e){e.map&&(e.map.colorSpace=g),e.emissiveMap&&(e.emissiveMap.colorSpace=g)}function Pi(e){let t=e.getAttribute(`uv`);if(!t)return;let n=new Float32Array(t.array.length);n.set(t.array),e.setAttribute(`uv1`,new se(n,t.itemSize))}function Fi(e){return e.includes(`room`)||e.includes(`wall`)||e.includes(`floor`)||e.includes(`ceiling`)?`room`:(e.includes(`table`)||e.includes(`desk`))&&!e.includes(`portable`)?`table`:e.includes(`chair_back`)||e.includes(`chair`)&&e.includes(`back`)?`chairBack`:e.includes(`chair_left`)||e.includes(`chair`)&&e.includes(`left`)?`chairLeft`:e.includes(`chair_right`)||e.includes(`chair`)&&e.includes(`right`)?`chairRight`:null}function Ii(e){return e.includes(`computer`)||e.includes(`pc`)||e.includes(`monitor`)||e.includes(`portable`)||e.includes(`bm86`)?`computer`:null}function Li(e){return ji.has(e)}async function Ri(e,t={}){let n=await Mr.loadAsync(e);return n.flipY=t.flipY??!1,t.colorSpace&&(n.colorSpace=t.colorSpace),n}async function zi(e,t={}){if(e.toLowerCase().endsWith(`.ktx2`)){let n=await Fr.loadAsync(e);return t.colorSpace&&(n.colorSpace=t.colorSpace),n}return Ri(e,t)}function Bi(e){U?.setVisualState({transition:e})}function Vi(){return!!U?.isMounted()}function Hi(e=`preload`){return Rr?(D(`screenOverlay.import.reuse`,{reason:e}),Rr):(D(`screenOverlay.import.start`,{reason:e}),Rr=Ce(()=>import(`./outer-screen-overlay-Dr23aHuB.js`).then(t=>(D(`screenOverlay.import.end`,{reason:e}),t),t=>{throw Rr=null,D(`screenOverlay.import.error`,{reason:e,message:t?.message??String(t)}),t}),__vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11])),Rr)}async function Ui(){let e=performance.now();return D(`screenOverlay.ensure.start`,{hasOverlay:!!U,hasPendingModulePromise:!!Rr,hasPendingOverlayPromise:!!zr}),U?(D(`screenOverlay.ensure.end`,{branch:`cached`,elapsedMs:performance.now()-e}),U):(zr||=Hi(`ensure`).then(({createScreenHtmlOverlay:e})=>(U=e({width:M.width,height:M.height}),q.lastSyncedVolume=null,U.setVisualState({opacity:G.current,brightness:1,pointerEvents:`none`,transition:``,visible:!1}),Qr(),Xi($i.getState().isMuted),Zi($i.getState().volume),ui(),U)),zr.then(t=>(D(`screenOverlay.ensure.end`,{branch:`promise`,elapsedMs:performance.now()-e,mounted:t?.isMounted?.()??!1}),t)))}function Wi(e){if(!e||H)return;H=new me,qn.add(H),e.updateWorldMatrix(!0,!1),e.geometry.computeBoundingBox();let t=e.geometry.boundingBox,n=new m;t.getCenter(n);let r=n.applyMatrix4(e.matrixWorld);H.position.copy(r),H.rotation.set(M.rotationX,M.rotationY,M.rotationZ,`YXZ`),H.translateZ(M.offsetZ),H.translateX(M.offsetX),H.translateY(M.offsetY);let i=new m;t.getSize(i);let a=[i.x,i.y,i.z].sort((e,t)=>t-e),o=a[0]/M.width*M.scaleMultiplier*M.scaleX,s=a[1]/M.height*M.scaleMultiplier*M.scaleY;H.scale.set(o,s,1),H.updateMatrixWorld(!0);let c=new m(0,0,1).applyQuaternion(H.quaternion).normalize();Cn.copy(H.position).addScaledVector(c,N.focus.distance),Cn.y+=N.focus.yOffset,wn.copy(H.position),wn.x+=N.focus.targetOffsetX,wn.y+=N.focus.targetOffsetY,wn.z+=N.focus.targetOffsetZ,q.fullVolumeDistance=Cn.distanceTo(H.position),q.minimumVolumeDistance=Math.max(q.fullVolumeDistance+1e-4,$n.distanceTo(H.position),N.intro.startPos.distanceTo(H.position),N.unfocus.endPos.distanceTo(H.position)),q.currentGain=Ki(L.position.distanceTo(H.position)),ui()}function Gi(e){return f.clamp(e,0,1)}function Ki(e){let t=q.fullVolumeDistance,n=Math.max(q.minimumVolumeDistance,t+1e-4);if(!(t>0)||!(n>t)||e<=t)return 1;if(e>=n)return Zn.minVolumeRatio;let r=(e-t)/(n-t),i=r*r*(3-2*r);return f.lerp(1,Zn.minVolumeRatio,i)}function qi(e){Br=`live`}function Ji(e){return Gi(e*q.currentGain)}function Yi(){if(!H||!$i||!Vi())return;let e=Ki(L.position.distanceTo(H.position));Math.abs(e-q.currentGain)<.001||(q.currentGain=e,Zi($i.getState().volume))}function Xi(e){if(U?.syncAudioControl){U.syncAudioControl({type:ye.SET_MUTED,muted:!!e});return}let t=window.__outerWebsiteAudioRuntime;t&&t.setMuted(!!e)}function Zi(e){let t=Ji(e);if(q.lastSyncedVolume!==null&&Math.abs(q.lastSyncedVolume-t)<Zn.volumeSyncEpsilon)return;if(q.lastSyncedVolume=t,U?.syncAudioControl){U.syncAudioControl({type:ye.SET_VOLUME,volume:t});return}let n=window.__outerWebsiteAudioRuntime;n&&n.setVolume(t)}function Qi(){let e=(Array.isArray(Xn.sources)?Xn.sources:[Xn.src]).filter(Boolean),t=new Audio;t.__outerWebsiteIgnoreGlobalAudio=!0,t.preload=`none`,t.loop=Xn.loop,t.volume=Xn.initialVolume,t.playsInline=!0;let n=!1,r=!0,i=0,a=null,o=0,s=null,c=0,l=null,u=null,d={hasSource:e.length>0,hasError:!1,isMuted:!1,isPlaying:!1,needsUserGesture:!1,unlockArmed:!1,volume:Xn.initialVolume,wantsToPlay:Xn.defaultWantsToPlay},ee=()=>e[o]||``,te=()=>{let e=ee();return e?(t.getAttribute(`src`)!==e&&(t.src=e),!0):(t.removeAttribute(`src`),!1)},ne=()=>o>=e.length-1?!1:(o+=1,n=!1,te()),p=()=>{typeof l==`function`&&l({...d,currentSource:ee()})},m=()=>{a!==null&&(window.clearTimeout(a),a=null)},re=()=>{i=0,m()},ie=(e,n=240)=>!d.wantsToPlay||d.needsUserGesture?!1:a===null?i>=12?!1:(a=window.setTimeout(()=>{a=null,i+=1,t.readyState===0&&!d.hasError&&t.load(),me(`${e}-retry-${i}`)},n),!0):!0,ae=({restoreVolume:e=!1}={})=>{c+=1,s!==null&&(window.cancelAnimationFrame(s),s=null),e&&(t.volume=Gi(d.volume))},oe=e=>{if(t.paused||t.muted||r||t.volume<=.001){e();return}ae();let n=c,i=t.volume,a=performance.now(),o=r=>{if(n!==c)return;let l=Math.min((r-a)/At,1);if(t.volume=f.lerp(i,0,l),l<1){s=window.requestAnimationFrame(o);return}s=null,e()};s=window.requestAnimationFrame(o)},h=(e=!1)=>{t.muted=e||d.isMuted||r,t.volume=Gi(d.volume)},se=async()=>{if(!d.hasSource||n)return!1;h(!0);try{return await t.play(),re(),n=!0,d.hasError=!1,d.isPlaying=!0,d.needsUserGesture=!1,g(),p(),!0}catch{return h(),ie(`prime-muted-autoplay`),!1}},ce=()=>!n||t.paused?!1:(ae({restoreVolume:!0}),t.currentTime=0,h(),re(),d.hasError=!1,d.isPlaying=!0,d.needsUserGesture=!1,g(),p(),!0),le=()=>{if(!n||t.paused)return!1;t.pause();try{t.currentTime=0}catch{return!1}return d.isPlaying=!1,!0},ue=(e=`timeline-sync`)=>{let i=performance.now();if(D(`audio.releaseQueuedPlayback.start`,{reason:e,holdAudibleStart:r,wantsToPlay:d.wantsToPlay,isPlaying:d.isPlaying,hasPrimedMutedAutoplay:n,paused:t.paused}),!r){d.wantsToPlay&&!d.isPlaying?me(e):(h(),p()),D(`audio.releaseQueuedPlayback.end`,{reason:e,branch:`already-released`,elapsedMs:performance.now()-i});return}if(r=!1,d.needsUserGesture=!1,d.hasError=!1,re(),g(),h(),!d.wantsToPlay){p(),D(`audio.releaseQueuedPlayback.end`,{reason:e,branch:`not-wanted`,elapsedMs:performance.now()-i});return}let a=le();me(a?`${e}-restart-from-zero`:e),D(`audio.releaseQueuedPlayback.end`,{reason:e,branch:a?`primed-restart`:`play`,elapsedMs:performance.now()-i})},de=()=>{window.setTimeout(()=>{t.currentTime<.25&&(t.currentTime=0),h(),p()},80)},fe=async()=>{h(!0);try{return await t.play(),re(),d.hasError=!1,d.isPlaying=!0,d.needsUserGesture=!1,g(),de(),p(),!0}catch{return h(),!1}},g=()=>{!d.unlockArmed||!u||([`pointerdown`,`keydown`,`touchstart`].forEach(e=>{window.removeEventListener(e,u,!0)}),u=null,d.unlockArmed=!1)},pe=()=>{d.unlockArmed||=(u=()=>{g(),d.wantsToPlay&&me(`user-gesture`)},[`pointerdown`,`keydown`,`touchstart`].forEach(e=>{window.addEventListener(e,u,!0)}),!0)},me=async(e=`manual`)=>{if(d.wantsToPlay=!0,ae({restoreVolume:!0}),!d.hasSource)return p(),!1;if(ce())return!0;d.hasError&&=(t.load(),!1),h();try{return await t.play(),re(),d.hasError=!1,d.isPlaying=!0,d.needsUserGesture=!1,g(),p(),!0}catch(n){return d.isPlaying=!t.paused,n?.name===`NotAllowedError`?await fe()||(d.hasError=!1,ie(`autoplay-blocked`)||(d.needsUserGesture=!0,pe())):n?.name===`AbortError`||n?.name===`NotSupportedError`?(d.hasError=!1,ie(n.name===`AbortError`?`media-aborted`:`media-not-ready`)||(d.hasError=!0)):(d.hasError=!0,console.warn(`[BGM] Unable to play audio (${e}).`,n)),p(),!1}},he=()=>{d.wantsToPlay=!1,d.needsUserGesture=!1,re(),g(),oe(()=>{t.pause(),ae({restoreVolume:!0}),d.isPlaying=!1,p()})},ge=()=>{if(d.isPlaying||d.wantsToPlay){he();return}me(`toggle`)},_e=e=>{let t=()=>{d.isMuted=e,h(),Xi(d.isMuted),p()};if(e!==d.isMuted){if(e){oe(t);return}ae({restoreVolume:!0}),t()}};return t.addEventListener(`play`,()=>{d.isPlaying=!0,p()}),t.addEventListener(`pause`,()=>{d.isPlaying=!1,p()}),t.addEventListener(`ended`,()=>{d.isPlaying=!1,p()}),t.addEventListener(`canplay`,()=>{d.wantsToPlay&&!d.isPlaying&&!d.needsUserGesture&&ie(`canplay`,0)}),t.addEventListener(`error`,()=>{let e=t.error?.code??null;if(e===1||e===null){ie(`media-load-aborted`);return}if(e===4){if(ne()){re(),d.hasError=!1,d.isPlaying=!1,t.load(),d.wantsToPlay&&(r?se():me(`media-source-fallback`)),p();return}if(ie(`media-source-error`,320))return}d.hasError=!0,d.isPlaying=!1,console.warn(`[BGM] Audio source could not be loaded: ${ee()}`),p()}),h(),d.hasSource&&te(),{getState(){return{...d,currentSource:ee()}},pause:he,play:me,releaseQueuedPlayback:ue,setVolume:e=>{ae(),d.volume=Gi(e),d.volume>0&&d.isMuted&&(d.isMuted=!1),h(),Zi(d.volume),Xi(d.isMuted),p()},setOnChange(e){l=e,p()},toggleMute:()=>{_e(!d.isMuted)},togglePlay:ge}}var $i=Qi(),ea={soundOn:`<svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#ff7b00" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"/><path d="M15.54 8.46a5 5 0 0 1 0 7.07"/><path d="M19.07 4.93a10 10 0 0 1 0 14.14"/></svg>`,soundOff:`<svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#ff7b00" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"/><line x1="23" y1="9" x2="17" y2="15"/><line x1="17" y1="9" x2="23" y2="15"/></svg>`,play:`<svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#ff7b00" stroke-width="2.3" stroke-linecap="round" stroke-linejoin="round"><polygon points="8 5 19 12 8 19 8 5"/></svg>`,pause:`<svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#ff7b00" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><line x1="9" y1="5" x2="9" y2="19"/><line x1="15" y1="5" x2="15" y2="19"/></svg>`,volumeLow:`<svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#ff7b00" stroke-width="2.3" stroke-linecap="round" stroke-linejoin="round"><polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"/><path d="M15 12a3 3 0 0 0 0-0.01"/></svg>`,volumeMid:`<svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#ff7b00" stroke-width="2.3" stroke-linecap="round" stroke-linejoin="round"><polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"/><path d="M15.5 9.5a4 4 0 0 1 0 5"/></svg>`,volumeHigh:`<svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#ff7b00" stroke-width="2.3" stroke-linecap="round" stroke-linejoin="round"><polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"/><path d="M15.5 8.5a5.5 5.5 0 0 1 0 7"/><path d="M18.8 6a9 9 0 0 1 0 12"/></svg>`,camUnfocused:`<svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#ff7b00" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z"/><circle cx="12" cy="13" r="4"/></svg>`,camFocused:`<svg width="13" height="13" viewBox="0 0 24 24" fill="#ff7b00" stroke="#ff7b00" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z"/><circle cx="12" cy="13" r="4"/></svg>`,fx:`<svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#ff7b00" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 7h8"/><path d="M4 17h14"/><path d="M14 7h6"/><path d="M10 17h4"/><circle cx="12" cy="7" r="2"/><circle cx="8" cy="17" r="2"/></svg>`},ta={wasd:`<svg width="46" height="30" viewBox="0 0 46 30" fill="none" xmlns="http://www.w3.org/2000/svg">
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
  </svg>`};function na(){ct&&(x?ct.innerHTML=ea.camFocused:ct.innerHTML=ea.camUnfocused)}function ra(e){return e>=.75?ea.volumeHigh:e>=.4?ea.volumeMid:ea.volumeLow}function ia(e){return e.isMuted?`Muted`:`${Math.round(e.volume*100)}%`}function aa(){St!==null&&(window.clearTimeout(St),St=null)}function oa(){aa(),T&&(St=window.setTimeout(()=>{sa(!1)},Dt))}function sa(e){e&&Ct&&pa(!1),T=e,C&&C.classList.toggle(`is-open`,T),T?(ni(C,mt),oa()):aa()}function ca(){let e=A(vr(),0),t=br(e);return{bloomEnabled:gr(),bloomLabel:gr()?`On`:`Off`,requestedMsaaSamples:e,effectiveMsaaSamples:t,msaaEnabled:t>0,msaaLabel:Fn(t)}}function la(e=$e){return e===ze?`Low`:`High`}function ua(){let e=ca();return`Quality ${la()} | Bloom ${e.bloomLabel} | MSAA ${e.msaaLabel}`}function da(e,t,n,r=`On`,i=`Off`){e&&(e.classList.toggle(`is-active`,n),e.innerHTML=`<span>${t}</span><strong>${n?r:i}</strong>`)}function fa(){let e=ca();if(ht&&(ht.classList.toggle(`is-active`,Ct),ht.title=ua()),w&&(w.classList.toggle(`is-open`,Ct),Ct&&ni(w,xt)),gt&&(gt.textContent=`${_.label} / ${la()}`),da(vt,`Bloom`,e.bloomEnabled,`On`,`Off`),da(yt,`MSAA`,e.msaaEnabled,e.msaaLabel,`Off`),da(bt,`Quality`,$e===Re,`High`,`Low`),vt&&(vt.title=`Toggle Bloom`),yt&&(yt.title=`Cycle MSAA: 4x, 2x, Off`),bt&&(bt.title=`Toggle quality: High keeps full visual quality; Low saves GPU with downsampling, Bloom off, and static sky`),_t){let{width:e,height:t}=wr(),n=O.avgRenderMs>0?O.avgRenderMs.toFixed(1):`0.0`,r=performance.now()-O.lastFrameNow>500?0:Math.round(O.fps);_t.textContent=`avg: ${n} ms    fps: ${r}    resolution: ${e}x${t}`}}function pa(e){e&&T&&sa(!1),Ct=e,fa(),X()}function ma(e){try{window.localStorage.setItem(Pe,JSON.stringify({mode:Ue(e),updatedAt:Date.now()}))}catch{}}function ha(e,{persistOverride:t=!0,applyModeDefaults:n=!0}={}){let r=Ue(e),i=$e,a=A(vr(),0),o=ar();$e=r,t&&(et=`manual`),tt(),Se(v),n&&(y()?(j.bloomEnabled=!1,j.msaaSamples=0):(j.bloomEnabled=!0,A(j.msaaSamples,0)<=0&&(j.msaaSamples=jt)),Ln()),t&&ma($e);let s=A(vr(),0),c=ar();Cr({forceRebuild:i!==$e||s!==a||Math.abs(c-o)>.001}),fa(),fi(900),X()}function ga(){ha(y()?Re:ze)}function _a(e){y()&&ha(Re,{applyModeDefaults:!1});let t=A(j.msaaSamples,0);j.bloomEnabled=!!e.bloomEnabled,j.msaaSamples=A(e.msaaSamples,j.msaaSamples);let n=A(j.msaaSamples,0);Ln(),Cr({forceRebuild:n!==t}),fa(),fi(600),X()}function va(e){if(e===`msaaSamples`){let e=A(j.msaaSamples,0),t=en.indexOf(e),n=en[t===-1?0:(t+1)%en.length];_a({...j,msaaSamples:n});return}_a({...j,[e]:!j[e]})}function ya(e,t=performance.now()){if(O.lastRenderMs=e,O.avgRenderMs=O.avgRenderMs===0?e:f.lerp(O.avgRenderMs,e,.18),O.lastFrameNow>0){let e=t-O.lastFrameNow;e>0&&e<250&&(O.avgFrameMs=O.avgFrameMs===0?e:f.lerp(O.avgFrameMs,e,.2),O.fps=O.avgFrameMs>0?1e3/O.avgFrameMs:0)}O.lastFrameNow=t,!(S||t-O.lastUiUpdate<250)&&(O.lastUiUpdate=t,fa())}function ba(e=$i.getState()){lt&&(lt.innerHTML=e.isMuted?ea.soundOff:ea.soundOn,lt.title=e.isMuted?`Unmute all audio`:`Mute all audio`),ut&&(ut.innerHTML=e.isPlaying||e.wantsToPlay?ea.pause:ea.play,e.hasError?ut.title=`BGM unavailable (${e.currentSource||`no source`})`:e.needsUserGesture&&!e.isPlaying?ut.title=`Click to start music`:e.wantsToPlay&&!e.isPlaying?ut.title=`Music queued to start`:ut.title=e.isPlaying?`Pause music`:`Play music`),dt&&(dt.innerHTML=ra(e.volume),dt.title=`Adjust volume (${Math.round(e.volume*100)}%)`),ft&&(ft.value=`${Math.round(e.volume*100)}`),pt&&(pt.textContent=ia(e))}$i.setOnChange(ba);function xa(){let e=document.createElement(`style`);e.textContent=`
    :root {
      --hud-glass-bg: rgba(80, 80, 80, 0.35);
      --hud-glass-border: rgba(255, 255, 255, 0.08);
      --hud-glass-shadow: none;
      --hud-glass-blur: blur(20px);
      --hud-font-main: ${Vn};
      --hud-font-accent: ${Hn};
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
      opacity: 0; transition: opacity ${Yn.fadeDuration}s ease;
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
      opacity: 0; transition: opacity ${Yn.fadeDuration}s ease;
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
      opacity: 0; transition: opacity ${Yn.fadeDuration}s ease;
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
  `,document.head.appendChild(e);let t=document.createElement(`div`);t.id=`ui-tl`,wt=t;let n=document.createElement(`span`);n.id=`ui-name`,n.textContent=`Hanqi Zhao`,ut=document.createElement(`button`),ut.className=`ui-btn`,ut.addEventListener(`click`,()=>{$i.togglePlay()});let r=document.createElement(`div`);mt=r,r.className=`ui-volume-control`,dt=document.createElement(`button`),dt.className=`ui-btn`,dt.addEventListener(`click`,()=>{sa(!T)}),C=document.createElement(`div`),C.className=`ui-volume-panel`;let i=document.createElement(`div`);i.className=`ui-volume-title`,i.innerHTML=`<span>Volume</span>`,pt=document.createElement(`span`),pt.className=`ui-volume-value`,i.appendChild(pt),ft=document.createElement(`input`),ft.className=`ui-volume-slider`,ft.type=`range`,ft.min=`0`,ft.max=`100`,ft.step=`1`,ft.addEventListener(`input`,e=>{$i.setVolume(Number(e.target.value)/100),oa()}),C.appendChild(i),C.appendChild(ft),r.appendChild(dt);let a=document.createElement(`div`);xt=a,a.className=`ui-postfx-control`,ht=document.createElement(`button`),ht.className=`ui-btn`,ht.innerHTML=ea.fx,ht.addEventListener(`click`,()=>{pa(!Ct)}),w=document.createElement(`div`),w.className=`ui-postfx-panel`;let o=document.createElement(`div`);o.className=`ui-postfx-header`,o.innerHTML=`<span>Render FX</span>`,gt=document.createElement(`span`),gt.className=`ui-postfx-summary`,gt.textContent=_.label,o.appendChild(gt);let s=document.createElement(`div`);s.className=`ui-postfx-toggles`,vt=document.createElement(`button`),vt.className=`ui-postfx-toggle`,vt.type=`button`,vt.addEventListener(`click`,()=>{va(`bloomEnabled`)}),yt=document.createElement(`button`),yt.className=`ui-postfx-toggle`,yt.type=`button`,yt.addEventListener(`click`,()=>{va(`msaaSamples`)}),bt=document.createElement(`button`),bt.className=`ui-postfx-toggle`,bt.type=`button`,bt.addEventListener(`click`,()=>{ga()}),s.appendChild(vt),s.appendChild(yt),s.appendChild(bt),w.appendChild(o),w.appendChild(s),a.appendChild(ht),lt=document.createElement(`button`),lt.className=`ui-btn`,lt.addEventListener(`click`,()=>{$i.toggleMute()}),ct=document.createElement(`button`),ct.className=`ui-btn`,ct.innerHTML=ea.camUnfocused,ct.title=`Toggle focus`,ct.addEventListener(`click`,()=>{b&&(x?Ra():La())}),t.appendChild(n),t.appendChild(ct),t.appendChild(ut),t.appendChild(lt),t.appendChild(r),t.appendChild(a),document.body.appendChild(t),document.body.appendChild(C),document.body.appendChild(w),ri(),document.addEventListener(`pointerdown`,e=>{let t=mt?.contains(e.target)||C?.contains(e.target),n=xt?.contains(e.target)||w?.contains(e.target);T&&t?oa():T&&sa(!1),Ct&&!n&&pa(!1)}),document.addEventListener(`pointermove`,()=>{T&&oa()},{passive:!0}),document.addEventListener(`wheel`,()=>{T&&oa()},{passive:!0}),document.addEventListener(`keydown`,e=>{if(e.key===`Escape`){sa(!1),pa(!1);return}T&&oa()}),ba(),fa();let c=document.createElement(`div`);c.id=`ui-bl`;let l=document.createElement(`div`);l.className=`ui-hint-row`,l.innerHTML=`
    <div class="ui-hint">${ta.wasd}<span>: move</span></div>
    <div class="ui-hint">${ta.space}<span>: up</span></div>
    <div class="ui-hint">${ta.ctrl}<span>: down</span></div>
  `,_t=document.createElement(`div`),_t.className=`ui-hud-stats`,c.appendChild(l),c.appendChild(_t),document.body.appendChild(c);let u=document.createElement(`div`);return u.id=`ui-br`,u.innerHTML=`<div class="ui-copy">© Copyright 2026 Hanqi Zhao.</div>`,document.body.appendChild(u),fa(),{tl:t,bl:c,br:u}}async function Sa(){try{let e=Promise.all(Object.entries(Ai).map(async([e,t])=>[e,await zi(t.path,{colorSpace:g})])),t=Promise.all(Object.entries(ki).map(async([e,t])=>{let n=await zi(t.path,{colorSpace:``});return n.channel=1,[e,n]})),[r,i,a,o,s]=await Promise.all([_.visualSky.kind===`hdr`?Pr.loadAsync(_.visualSky.path):Ri(_.visualSky.path,{colorSpace:g,flipY:_.visualSky.flipY??!1}),_.lightingEnvironment.kind===`hdr`?Pr.loadAsync(_.lightingEnvironment.path):Ri(_.lightingEnvironment.path,{colorSpace:g,flipY:_.lightingEnvironment.flipY??!1}),Nr.loadAsync(we),e,t]);Wn.ready(`textures`),Wn.ready(`model`);let l=Object.fromEntries(o),u=Object.fromEntries(s),d=new n(200,32,20);d.scale(-1,1,1),W=new c(d,Di(r,_.visualSky)),W.position.y=-100,W.rotation.y=F.rotationY,qn.add(W),i.mapping=303,qn.environment=i,qn.environmentIntensity=_.lightingEnvironment.intensity??1.2;let ne=a.scene;if(ne.traverse(e=>{if(!e.isMesh)return;let t=(e.name??``).toLowerCase();(t.includes(`computer`)||t.includes(`screen`)||t.includes(`monitor`))&&Vr.push(e),t.includes(`screen_plane`)&&(Lr=e,Dn.setFromMatrixPosition(e.matrixWorld),Dn.add(N.loader.shockwave.centerOffset),Lr.material=new fe({colorWrite:!1,depthWrite:!0}),Lr.renderOrder=-1)}),Ti(ne),ne.traverse(e=>{if(!e.isMesh)return;let t=(e.name??``).toLowerCase();t.includes(`screen_plane`)||(Array.isArray(e.material)?e.material:[e.material]).forEach(n=>{if(!n)return;Ni(n);let r=Fi(t),i=Ii(t);if(r&&l[r]){n.map=l[r],n.dithering=Li(r),n.needsUpdate=!0;return}n.isMeshStandardMaterial&&i&&u[i]&&(Pi(e.geometry),n.lightMap=u[i],Mi[i]&&(n.envMapIntensity=Mi[i].envMapIntensity,n.roughness<Mi[i].roughnessMin&&(n.roughness=Mi[i].roughnessMin)),n.needsUpdate=!0)})}),qn.add(ne),Vr.length>0){let e=new ee;Vr.forEach(t=>{t.updateMatrixWorld(!0),e.union(new ee().setFromObject(t))});let t=new m;e.getCenter(t);let n=new m;e.getSize(n),Hr=new c(new te(n.x,n.y,n.z),new fe({colorWrite:!1,depthWrite:!1,transparent:!0,opacity:0})),Hr.position.copy(t),Hr.scale.setScalar(N.focus.hitboxScale),qn.add(Hr),Lr||(Dn.copy(t),Dn.add(N.loader.shockwave.centerOffset))}Lr&&Wi(Lr),Wn.ready(`scene`),await R.compileAsync(qn,L),mi(performance.now()),Wn.ready(`gpu`),nt=!1,Wn.transition(`awaitingGesture`),D(`startup.assets.readyForGesture`),Hi(`start-prompt`).then(e=>e.prepareDesktop()).catch(e=>console.warn(`Desktop preload will retry on mount.`,e)),ot=!0,X(),await Gn(),Wn.transition(`intro`),ot=!1,D(`loader.gesture.await.end`),D(`loader.fade.start`,{fadeTimeMs:N.loader.fadeTime*1e3}),P.style.opacity=`0`,await new Promise(e=>setTimeout(e,N.loader.fadeTime*1e3)),D(`loader.fade.end`),P.remove(),D(`loader.removed`),await Ui(),D(`screenOverlay.ready`);let p=xa();D(`outerHud.overlay.created`);{let e=performance.now();it=(t,n)=>{e+=Math.min(t,Math.max(0,n-e))},D(`loadingTimeline.start`);let t=!1,n=e=>e===1?1:1-2**(-10*e),r=e=>e<.5?4*e*e*e:1-(-2*e+2)**3/2;function i(){let i=(performance.now()-e)/1e3;if(!b){let e=N.loader.cameraPush,t=0;i>=e.startTime&&(t=Math.min((i-e.startTime)/e.duration,1)),L.position.lerpVectors($n,N.intro.startPos,r(t)),L.lookAt(jr.target)}let a=N.loader.shockwave,o=0;if(i>=a.startTime&&(o=Math.min((i-a.startTime)/a.duration,1)),!En){let e=o>=1?Qt:f.lerp(a.startRadius,a.endRadius,n(o));Tn.forEach(t=>{t.userData.shader&&(t.userData.shader.uniforms.uShockwaveRadius.value=e)}),o>=1&&Ei()}let s=N.loader.skyFade,c=0;i>=s.startTime&&(c=Math.min((i-s.startTime)/s.duration,1)),W&&W.material&&(W.material.uniforms.uSkyOpacity.value=c),!b&&i>=N.loader.controlsUnlockTime&&(b=!0,D(`loadingTimeline.physicsUnlocked`,{elapsedSec:i}),Z.locked=!0,Z.targetMouse.set(0,0),Z.currentMouse.set(0,0),Z.lockBaseMouse.copy(Ca),Aa());let l=N.loader.screenFade;i>=l.startTime&&!st&&(st=!0,D(`loadingTimeline.screenFade.start`,{elapsedSec:i,durationSec:l.duration}),G.runtimeEnabled=!1,H&&U&&(Bi(`opacity ${l.duration}s ease-in-out`),requestAnimationFrame(()=>{D(`loadingTimeline.screenFade.visibleFrame`),U.setVisualState({opacity:1,visible:!0}),setTimeout(()=>{H&&U&&(Bi(``),G.runtimeEnabled=!0,G.target=1,hi(1),D(`loadingTimeline.screenFade.runtimeEnabled`))},l.duration*1e3+100)}))),!t&&i>=Yn.appearAt&&(t=!0,p.tl.style.opacity=`1`,p.bl.style.opacity=`1`,p.br.style.opacity=`1`,D(`outerHud.overlay.visible`,{elapsedSec:i})),i>=Math.max(N.loader.cameraPush.startTime+N.loader.cameraPush.duration,a.startTime+a.duration,s.startTime+s.duration,l.startTime+l.duration,N.loader.controlsUnlockTime)&&(at=!1,rt=null,it=null,Wn.transition(`roomInteractive`),D(`loadingTimeline.complete`,{elapsedSec:i}))}rt=i,i(),X()}}catch(e){console.error(e),nt=!0,Wr.suspend(!0),P.isConnected||document.body.appendChild(P),P.style.opacity=`1`,P.style.pointerEvents=`auto`,P.querySelector(`#hud-status`).textContent=`Unable to prepare the room.`;let t=document.createElement(`button`);t.textContent=`Retry loading`,t.onclick=()=>window.location.reload(),P.querySelector(`.hud-core`).appendChild(t)}}var Ca=new e,Z={locked:!0,lockBaseMouse:new e,targetMouse:new e,currentMouse:new e,velocity:new e},wa={lastIdleSampleAt:0},Ta={lastFrameNow:0},Ea={forward:new m,right:new m,up:new m(0,1,0),rawDir:new m,targetVel:new m,actualVel:new m,nextPos:new m,delta:new m,originalQuat:new pe,zeroMouse:new e(0,0),parallaxDiff:new e},Da={normal:new m,toCamera:new m},Q={w:!1,a:!1,s:!1,d:!1," ":!1,control:!1};function Oa(){Object.keys(Q).forEach(e=>{Q[e]=!1}),$.active=!1,$.chargeStart=0,$.releaseStart=0,$.dist=0,$.currentDir.set(0,0,0),$.velocity.set(0,0,0)}window.addEventListener(`blur`,()=>{Oa(),b&&!x&&X()});var ka=performance.now();function Aa(){ka=performance.now()}window.addEventListener(`pointermove`,e=>{let t=Pn(e.clientX,e.clientY);if(Ca.x=t.x,Ca.y=t.y,x&&!S||!b)return;let n=performance.now(),r=!S&&!x&&Z.locked;r&&n-wa.lastIdleSampleAt<mn()||(r&&(wa.lastIdleSampleAt=n),Aa(),!S&&!x&&Z.locked&&Ca.distanceTo(Z.lockBaseMouse)>N.parallax.unlockThreshold&&(Z.locked=!1),X())},{passive:!0}),window.addEventListener(`keydown`,e=>{if(x||S||!b)return;Aa();let t=e.key.toLowerCase();t===` `&&e.preventDefault(),Q[t]!==void 0&&(Q[t]=!0),X()},{passive:!1}),window.addEventListener(`keyup`,e=>{let t=e.key.toLowerCase();if(Q[t]===void 0)return;let n=Q[t];Q[t]=!1,!(!n||!b||x)&&(Aa(),X())}),window.addEventListener(`wheel`,()=>{x&&!S||b&&(Aa(),X())},{passive:!0}),R.domElement.addEventListener(`contextmenu`,e=>e.preventDefault());var ja={linear:e=>e,easeOutCubic:e=>1-(1-e)**3,easeInOutCubic:e=>e<.5?4*e*e*e:1-(-2*e+2)**3/2},Ma=null,Na=!1;function Pa(){Ma!==null&&(window.clearTimeout(Ma),Ma=null)}function Fa(){!Na||S||!x||!b||(Na=!1,window.requestAnimationFrame(()=>{!S&&x&&b&&Ra()}))}function Ia(e,t,n,r,i,a,o,{emitStartState:s=!0}={}){s&&(S=!0,$r());let c=performance.now();qr(x?`focus`:`unfocus`,i,a,c);let l=Y.mode;D(`focus.cameraTween.start`,{mode:l,durationMs:i,easingName:a});let u=ja[a]||ja.easeInOutCubic;X(),Ur.start({now:c,duration:i,update(i){let a=u(i);L.position.lerpVectors(e,n,a),jr.target.lerpVectors(t,r,a),L.lookAt(jr.target)},complete(){Jr(),S=!1,fi(),$r(),$.velocity.set(0,0,0),Z.locked=!0,Z.lockBaseMouse.copy(Ca),Z.targetMouse.set(0,0),Z.currentMouse.set(0,0),Z.velocity.set(0,0),Aa(),o?.(),Fa(),D(`focus.cameraTween.end`,{mode:l,elapsedMs:performance.now()-c})}})}function La(){if(x||!b){D(`focus.transition.blocked`,{target:`focus`,isAnimating:S,isFocused:x,isPhysicsUnlocked:b});return}D(`focus.transition.start`,{target:`focus`}),Pa(),Ur.cancel(),Na=!1,S=!0,ei(!0),$r(),X(),Ia(L.position.clone(),jr.target.clone(),Cn,wn,N.focus.duration,N.focus.easing,null,{emitStartState:!1})}async function Ra(){if(!x||!b){D(`focus.transition.blocked`,{target:`unfocus`,isAnimating:S,isFocused:x,isPhysicsUnlocked:b});return}D(`focus.transition.start`,{target:`unfocus`}),Pa(),Ur.cancel(),Na=!1,S=!0,$r(),ei(!1),!(!S||x)&&($r(),X(),Ma=window.setTimeout(()=>{Ma=null,Ia(L.position.clone(),jr.target.clone(),N.unfocus.endPos,N.unfocus.endTarget,N.unfocus.duration,N.unfocus.easing,null,{emitStartState:!1})},Math.max(0,N.unfocus.preDelay??0)))}var za=new o;R.domElement.addEventListener(`pointerdown`,e=>{if(!b||e.button!==0)return;let t=Vi()?wi(e.clientX,e.clientY):!1;if(D(`focus.pointerdown.canvas`,{button:e.button,pointerType:e.pointerType,isPhysicsUnlocked:b,isAnimating:S,isFocused:x,pointerInsideScreen:t}),S){x&&!t&&(Na=!0,D(`focus.unfocus.queued`,{source:`canvas-pointerdown`}));return}Aa();let n=Pn(e.clientX,e.clientY);if(Ca.x=n.x,Ca.y=n.y,X(),x){if(t){D(`focus.pointerdown.insideFocusedScreen`);return}D(`focus.pointerdown.requestUnfocus`,{source:`canvas`}),Ra();return}if(t){D(`focus.pointerdown.requestFocus`,{source:`screen-bounds`}),La();return}za.setFromCamera(Ca,L);let r=Hr?[Hr]:Vr;if(za.intersectObjects(r,!0).length>0&&H){let e=new m(0,0,1).applyQuaternion(H.quaternion).normalize(),t=new m().subVectors(L.position,H.position).normalize(),n=e.angleTo(t)*(180/Math.PI);D(`focus.pointerdown.hitboxIntersect`,{angleDegree:n,maxTriggerAngle:N.focus.maxTriggerAngle}),n<=N.focus.maxTriggerAngle&&(D(`focus.pointerdown.requestFocus`,{source:`computer-hitbox`}),La())}X()});function Ba(e){return!!(wt?.contains(e)||C?.contains(e)||w?.contains(e))}document.addEventListener(`pointerdown`,e=>{if(!b||e.button!==0)return;let t=Ba(e.target),n=Vi()?wi(e.clientX,e.clientY):!1;if(D(`focus.pointerdown.document`,{button:e.button,pointerType:e.pointerType,isPhysicsUnlocked:b,isAnimating:S,isFocused:x,pointerInsideUi:t,clickedInsideScreen:n}),!t){if(!x){!S&&n&&(D(`focus.pointerdown.requestFocus`,{source:`document-screen-bounds`}),La());return}if(!n){if(S){Na=!0,D(`focus.unfocus.queued`,{source:`document-pointerdown`});return}D(`focus.pointerdown.requestUnfocus`,{source:`document`}),Ra()}}},!0);function Va(e=1){if(!Lr||!H)return;let t=x&&!S&&Vi();if(qi(`live`),!st){gi(t?`auto`:`none`);return}if(!G.runtimeEnabled){gi(t?`auto`:`none`);return}let n=Da.normal.set(0,0,1).applyQuaternion(H.quaternion).normalize(),r=Da.toCamera.subVectors(L.position,H.position).normalize(),i=L.position.distanceTo(H.position),a=n.dot(r)>=0,o=0,s=`none`;if(t)o=1,s=`auto`;else if(a){let e=N.shield.maxClickDistance+N.shield.fadeDistance;if(i<=N.shield.maxClickDistance)o=1;else if(i>=e)o=N.shield.dimOpacity;else{let e=1-(i-N.shield.maxClickDistance)/N.shield.fadeDistance;o=f.lerp(N.shield.dimOpacity,1,e)}}G.target=o;let c=f.lerp(G.current,G.target,_n(N.shield.opacityLerp,e)),l=Math.abs(c-G.target)<.002?G.target:c;hi(Math.abs(l-G.target)<=Xt?G.target:l),gi(s)}var $={active:!1,chargeStart:0,releaseStart:0,dist:0,currentDir:new m,velocity:new m};function Ha(e){let t=Math.max(1,Math.min(8,Math.ceil(e))),n=e/t,r=(1-f.clamp(N.parallax.springFriction,0,1))**n;for(let e=0;e<t;e+=1){let e=Ea.parallaxDiff.subVectors(Z.targetMouse,Z.currentMouse);Z.velocity.add(e.multiplyScalar(N.parallax.springAccel*n)),Z.velocity.multiplyScalar(r),Z.currentMouse.addScaledVector(Z.velocity,n)}}function Ua(e){if(nt||document.hidden)return;rt?.(),Ur.tick(e),J.frameId=null;let t=Ta.lastFrameNow||e-nn,n=Math.max(0,e-t),r=gn(n),i=gn(n,an);Ta.lastFrameNow=e;let a=!ot&&ii(),o=J.renderRequested,s=di(e),c=s||a;if(!c&&!o)return;if(W&&a&&(W.rotation.y+=N.sky.rotationSpeed*i),!b){mi(e,{skyOnly:!1,sceneAnimationActive:!0,frameScale:r}),J.renderRequested=!1,c&&X();return}if(!s&&a&&!o){mi(e,{skyOnly:!0,sceneAnimationActive:!1,frameScale:r}),J.renderRequested=!1,li();return}let l=e-ka>N.parallax.idleTimeout;if(!x&&!S){let t=Ea.forward;L.getWorldDirection(t),t.y=0,t.normalize();let n=Ea.right.crossVectors(t,L.up).normalize(),i=Ea.up,a=Ea.rawDir.set(0,0,0);Q.w&&a.add(t),Q.s&&a.sub(t),Q.a&&a.sub(n),Q.d&&a.add(n),Q[` `]&&a.add(i),Q.control&&a.sub(i),a.lengthSq()>0?($.releaseStart=0,$.active?$.currentDir.lerp(a.normalize(),_n(N.walk.dirLerp,r)).normalize():($.chargeStart===0&&($.chargeStart=e),e-$.chargeStart>N.walk.chargeTime&&($.active=!0,$.dist=0,$.currentDir.copy(a.normalize())))):($.chargeStart=0,$.active&&($.releaseStart===0&&($.releaseStart=e),e-$.releaseStart>N.walk.releaseGrace&&($.active=!1)),l&&($.active=!1,$.releaseStart=0,$.currentDir.set(0,0,0),$.velocity.set(0,0,0))),$.active&&$.dist>=N.walk.maxDist&&($.active=!1);let o=Ea.targetVel.set(0,0,0);if($.active?(o.copy($.currentDir).multiplyScalar(N.walk.speed),$.velocity.lerp(o,_n(N.walk.acceleration,r))):($.velocity.lerp(o,_n(N.walk.deceleration,r)),oi($.velocity)&&$.velocity.set(0,0,0)),$.velocity.lengthSq()>1e-6){$.dist+=$.velocity.length()*r;let e=Ea.actualVel.copy($.velocity),t=N.walk.bounds,n=N.walk.dampingZone;e.x<0&&L.position.x-t.minX<n?e.x*=Math.max(0,(L.position.x-t.minX)/n):e.x>0&&t.maxX-L.position.x<n&&(e.x*=Math.max(0,(t.maxX-L.position.x)/n)),e.y<0&&L.position.y-t.minY<n?e.y*=Math.max(0,(L.position.y-t.minY)/n):e.y>0&&t.maxY-L.position.y<n&&(e.y*=Math.max(0,(t.maxY-L.position.y)/n)),e.z<0&&L.position.z-t.minZ<n?e.z*=Math.max(0,(L.position.z-t.minZ)/n):e.z>0&&t.maxZ-L.position.z<n&&(e.z*=Math.max(0,(t.maxZ-L.position.z)/n));let i=Ea.nextPos.copy(L.position).addScaledVector(e,r);i.x<=t.minX?(i.x=t.minX,$.velocity.x=0):i.x>=t.maxX&&(i.x=t.maxX,$.velocity.x=0),i.y<=t.minY?(i.y=t.minY,$.velocity.y=0):i.y>=t.maxY&&(i.y=t.maxY,$.velocity.y=0),i.z<=t.minZ?(i.z=t.minZ,$.velocity.z=0):i.z>=t.maxZ&&(i.z=t.maxZ,$.velocity.z=0);let a=Ea.delta.subVectors(i,L.position);L.position.copy(i),jr.target.add(a)}}L.lookAt(jr.target);let u=Ea.originalQuat.copy(L.quaternion),d=_n(N.parallax.catchupSpeed,r);x||S||l||Z.locked?Z.targetMouse.lerp(Ea.zeroMouse,d):Z.targetMouse.lerp(Ca,d),Ha(r),l&&(ai(Z.targetMouse)&&Z.targetMouse.set(0,0),ai(Z.velocity)&&Z.velocity.set(0,0),ai(Z.currentMouse)&&ai(Z.targetMouse)&&ai(Z.velocity)&&Z.currentMouse.set(0,0));let ee=Z.currentMouse.y*f.degToRad(N.parallax.maxAngle),te=-Z.currentMouse.x*f.degToRad(N.parallax.maxAngle);L.rotateX(ee),L.rotateY(te),mi(e,{skyOnly:a&&!s&&!o,sceneAnimationActive:s,frameScale:r}),L.quaternion.copy(u),J.renderRequested=!1,s?X():a&&li()}window.addEventListener(`resize`,()=>{Nn(),er(),nr(),L.aspect=k.aspect,L.updateProjectionMatrix(),On!==null&&window.clearTimeout(On),On=window.setTimeout(()=>{On=null,Cr({forceRebuild:!0}),fa(),X()},Zt),ri(),ui()}),Sa(),X();