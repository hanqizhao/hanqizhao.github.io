const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/outer-screen-overlay-CmZuLpHl.js","assets/winxp-core-DCDivdTE.js","assets/rolldown-runtime-BVbofQct.js","assets/react-vendor-DbC8iAKZ.js","assets/winxp-core-BSxTm-g0.css"])))=>i.map(i=>d[i]);
import"./modulepreload-polyfill-Cf3xff8G.js";import{A as e,C as t,D as n,E as r,O as i,S as a,T as o,_ as s,a as c,b as l,c as u,d,f as ee,g as f,h as te,i as ne,j as p,k as m,l as re,m as ie,n as ae,o as oe,p as h,r as se,s as ce,t as le,u as ue,v as de,w as fe,x as pe,y as me}from"./three-vendor-ezp25pWM.js";import{Sn as he,Tn as ge,_n as _e,gn as ve,hn as ye,mn as be,vn as xe,xn as Se,yn as Ce}from"./winxp-core-DCDivdTE.js";var we=`slim`,Te=ge();he(Te);var Ee={current:{visualSkyLdr:new URL(`/assets/new_sky_ldr-yZ_KpEae.jpg`,``+import.meta.url).href,lightingLdr:new URL(`/assets/room_ldr-DOcZ7og-.jpg`,``+import.meta.url).href,room:new URL(`/assets/room%20baked-KoBuYlPf.ktx2`,``+import.meta.url).href,table:new URL(`/assets/table%20baked-DFp0K4D2.ktx2`,``+import.meta.url).href,chairBack:new URL(`/assets/chair%20back%20final-sbWclMz4.ktx2`,``+import.meta.url).href,chairLeft:new URL(`/assets/chair%20left%20final-BjZ_O-yh.ktx2`,``+import.meta.url).href,chairRight:new URL(`/assets/chair%20right%20final-BtcJ8_ie.ktx2`,``+import.meta.url).href,computer:new URL(`/assets/computer%20shadow-D5HsGwbv.ktx2`,``+import.meta.url).href}},g={label:`Slim`,visualSky:{kind:`ldr`,path:Ee.current.visualSkyLdr,flipY:!0},lightingEnvironment:{kind:`ldr`,path:Ee.current.lightingLdr,flipY:!0,intensity:1.2},bakedSurfacePaths:{room:Ee.current.room,table:Ee.current.table,chairBack:Ee.current.chairBack,chairLeft:Ee.current.chairLeft,chairRight:Ee.current.chairRight},lightMapPaths:{computer:Ee.current.computer}},De=!0,_=!1,Oe=!1,v=!1,y=!1,ke=null,Ae=null,b=null,je=null,x=null,S=null,Me=null,Ne=null,Pe=null,C=null,Fe=null,Ie=null,Le=null,Re=null,ze=null,w=!1,Be=null,Ve=!1,He=null,Ue=null,We=`outer-website:postfx-settings`,Ge=2200,Ke=10,qe=12,Je=220,Ye=2,Xe=.85,Ze=.7,Qe=1e3/24,$e=1e3/10,et=120,tt=.25,nt=50,rt=1e-4,it=.01,at=.01,ot=150,st=9999,ct=`outer-website:shockwave-v1`,lt=[4,2,0],ut=800,dt=`outer-website:`,T=window.__outerWebsiteStartupTiming??{createdAt:Date.now(),timeOrigin:performance.timeOrigin??Date.now()-performance.now(),events:[]};window.__outerWebsiteStartupTiming=T;function ft(){try{return new URLSearchParams(window.location.search).has(`startupTimingLog`)}catch{return!1}}var pt=ft();function mt(e){if(typeof e!=`object`||!e)return e??{};try{return JSON.parse(JSON.stringify(e,(e,t)=>{if(typeof t==`number`)return Number.isFinite(t)?Number(t.toFixed(3)):String(t);if(typeof t!=`function`)return t}))}catch{return{unserializable:!0}}}function E(e,t={}){let n=performance.now(),r={index:T.events.length,name:e,at:Number(n.toFixed(3)),detail:mt(t)};if(T.events.push(r),T.events.length>ut&&T.events.splice(0,T.events.length-ut),pt)try{performance.mark(`${dt}${e}`)}catch{}return pt&&console.debug(`[startup-timing]`,JSON.stringify(r)),r}function ht(){return{createdAt:T.createdAt,timeOrigin:T.timeOrigin,now:Number(performance.now().toFixed(3)),eventCount:T.events.length,events:T.events.slice()}}function gt(){T.events.length=0,E(`debug.timeline.cleared`)}if(window.__outerWebsiteRecordStartupTiming=E,pt&&typeof PerformanceObserver<`u`)try{T.longTaskObserver?.disconnect?.(),T.longTaskObserver=new PerformanceObserver(e=>{e.getEntries().forEach(e=>{E(`performance.longtask`,{startTime:e.startTime,duration:e.duration,name:e.name})})}),T.longTaskObserver.observe({type:`longtask`,buffered:!0})}catch{}E(`main.module.loaded`,{assetProfile:we});var _t=new e,vt=new e,yt=[],bt=!1,xt=new e(0,0,0),St=null,D={lastRenderMs:0,avgRenderMs:0,avgFrameMs:0,fps:0,lastUiUpdate:0,lastFrameNow:0},Ct=4/3,wt=21/9;function Tt(e){return Math.min(Math.max(e,Ct),wt)}function Et(e=window.innerWidth,t=window.innerHeight){let n=Math.max(1,Math.floor(e)),r=Math.max(1,Math.floor(t)),i=n/r,a=Tt(i),o=n,s=r;return i>a?o=Math.max(1,Math.round(r*a)):i<a&&(s=Math.max(1,Math.round(n/a))),{windowWidth:n,windowHeight:r,width:o,height:s,left:Math.round((n-o)/2),top:Math.round((r-s)/2),aspect:o/s,isClamped:Math.abs(i-a)>.001}}var O=Et();function Dt(){Object.assign(O,Et())}function Ot(e,t){let n=e-O.left,r=t-O.top,i=f.clamp(n,0,O.width),a=f.clamp(r,0,O.height);return{x:i/O.width*2-1,y:-(a/O.height)*2+1,inside:n>=0&&n<=O.width&&r>=0&&r<=O.height}}function kt(e,t=Ye){if(e===!0)return Ye;if(e===!1||e==null)return t;let n=Number(e);return n>=4?4:n>=2?2:0}function At(e){return e>=4?`4x`:e>=2?`2x`:`Off`}function jt(){let e={bloomEnabled:Te.preferredBloomEnabled??!Te.shouldDefaultPostFxOff,msaaSamples:kt(Te.preferredMsaaSamples,Te.shouldDefaultPostFxOff?0:Ye)};try{let t=window.localStorage.getItem(We);if(!t)return e;let n=JSON.parse(t);return{bloomEnabled:n?.bloomEnabled!==!1,msaaSamples:kt(n?.msaaSamples??n?.msaaEnabled,e.msaaSamples)}}catch{return e}}var k=jt();function Mt(){try{window.localStorage.setItem(We,JSON.stringify(k))}catch{}}var A={url:`/embedded-winxp.html`,width:1280,height:820,rotationX:-Math.PI*15.5/180,rotationY:Math.PI/2,rotationZ:0,flipNormal:!1,scaleMultiplier:1,scaleX:.99,scaleY:1.01,offsetX:0,offsetY:6e-4,offsetZ:0},Nt={localCorners:[new e(-A.width/2,A.height/2,0),new e(A.width/2,A.height/2,0),new e(A.width/2,-A.height/2,0),new e(-A.width/2,-A.height/2,0)],worldCorners:[new e,new e,new e,new e],quad:[{x:0,y:0},{x:0,y:0},{x:0,y:0},{x:0,y:0}],cameraSpacePoint:new e,projectedPoint:new e},j={loader:{bgColor:`#d9d9d9`,minLoadTime:1500,fadeTime:1,cameraPush:{startTime:1.5,duration:1,distance:.5},shockwave:{startTime:.5,duration:5.5,startRadius:0,endRadius:20,edgeWidth:.2,edgeIntensity:3,centerOffset:new e(-4,-1,0)},skyFade:{startTime:.5,duration:1},screenFade:{startTime:2.5,duration:6.5},controlsUnlockTime:2.5},intro:{startPos:new e(4.3,-1.8,0),startTarget:new e(0,-1.4,0)},focus:{duration:2e3,easing:`easeInOutCubic`,distance:.18,yOffset:0,maxTriggerAngle:60,targetOffsetX:0,targetOffsetY:0,targetOffsetZ:0,hitboxScale:1.8},unfocus:{preDelay:0,duration:1800,easing:`easeOutCubic`,endPos:new e(4.5,-1.8,0),endTarget:new e(0,-1.4,0)},shield:{maxClickDistance:1.2,dimOpacity:.8,fadeDistance:.55,opacityLerp:.14},sky:{rotationSpeed:3e-5},parallax:{maxAngle:6,unlockThreshold:.2,springAccel:.004,springFriction:.06,catchupSpeed:.03,idleTimeout:3e3},walk:{chargeTime:80,releaseGrace:50,maxDist:1e3,speed:.011,acceleration:.6,deceleration:.6,dirLerp:1,dampingZone:.8,bounds:{minX:2,maxX:5,minY:-2,maxY:1.5,minZ:-3.5,maxZ:3.5}}};document.body.style.backgroundColor=j.loader.bgColor,document.body.style.margin=`0`,document.body.style.overflow=`hidden`;var Pt=`/font/Controller%20W01%20Two%20Oblique.ttf`,Ft=`/font/Controller%20W01%20Five%20Oblique.ttf`,It=`"Controller W01 Two Oblique", 'Courier New', Courier, monospace`,Lt=`"Controller W01 Five Oblique", 'Courier New', Courier, monospace`,Rt=document.createElement(`style`);Rt.textContent=`
  @font-face {
    font-family: 'Controller W01 Two Oblique';
    src: url('${Pt}') format('truetype');
    font-weight: 400;
    font-style: normal;
    font-display: swap;
  }
  @font-face {
    font-family: 'Controller W01 Five Oblique';
    src: url('${Ft}') format('truetype');
    font-weight: 400;
    font-style: normal;
    font-display: swap;
  }
  #hud-loader-root {
    position: fixed; top: 0; left: 0; width: 100vw; height: 100vh;
    background-color: #ffffff;
    z-index: 9999; display: flex; justify-content: center; align-items: center;
    font-family: ${It};
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
`,document.head.appendChild(Rt);var M=document.createElement(`div`);M.id=`hud-loader-root`,M.innerHTML=`
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
  </div>`,document.body.appendChild(M);var zt,Bt=new Promise(e=>{zt=e});(function(){let e=M.querySelector(`#hud-bar`),t=M.querySelector(`#hud-hex`),n=M.querySelector(`#hud-status`);for(let t=0;t<18;t++){let t=document.createElement(`div`);t.className=`hud-block`,e.appendChild(t)}let r=e.querySelectorAll(`.hud-block`),i=0;function a(){i+=Math.random()*2+1,i>100&&(i=100);let e=Math.round(i/100*18);r.forEach((t,n)=>t.classList.toggle(`lit`,n<e)),t.textContent=`0x`+Math.floor(Math.random()*65535).toString(16).toUpperCase(),i<100?setTimeout(a,Math.random()*100+20):(n.textContent=`Boot sequence complete.`,setTimeout(zt,800))}setTimeout(a,1e3)})();function Vt(){return E(`loader.prompt.wait.start`),new Promise(e=>{let t=M.querySelector(`.hud-core`);if(!t){E(`loader.prompt.missing`),Ue=null,e();return}let n=!1,r=t=>{if(n)return;let r=performance.now();if(E(`loader.gesture.finish.start`,{reason:t}),n=!0,Ue=null,M.removeEventListener(`pointerdown`,i,!0),M.removeEventListener(`keydown`,a,!0),typeof q?.releaseQueuedPlayback==`function`){let e=performance.now();q.releaseQueuedPlayback(t),E(`loader.gesture.audioRelease.called`,{reason:t,elapsedMs:performance.now()-e})}E(`loader.gesture.finish.end`,{reason:t,elapsedMs:performance.now()-r}),e()},i=e=>{E(`loader.gesture.pointerdown`,{button:e.button,pointerType:e.pointerType}),e.preventDefault(),r(`loader-start-pointer`)},a=e=>{e.key!==`Enter`&&e.key!==` `||(E(`loader.gesture.keydown`,{key:e.key}),e.preventDefault(),r(`loader-start-keyboard`))};t.classList.add(`is-awaiting-start`),Ue=()=>{E(`loader.gesture.debugTrigger`),r(`loader-start-debug`)},M.tabIndex=0,M.focus({preventScroll:!0}),M.addEventListener(`pointerdown`,i,!0),M.addEventListener(`keydown`,a,!0),E(`loader.prompt.awaiting`,{activeElementId:document.activeElement?.id??``})})}var Ht=document.getElementById(`app`),Ut=new o,Wt={fov:65,near:.1,far:1e3},Gt={exposure:1.1,saturation:1.25,highlights:.95,repeatX:2,repeatY:1.2,offsetY:0,rotationY:-3*Math.PI/4},N={exposure:.9,bloom:{strength:.01,radius:0,threshold:0,transitionDurationMs:220},unfocus:{bloomResumeProgress:.5}},Kt={appearAt:3,fadeDuration:1},qt={sources:[`/audio/outer-bgm.ogg`,`/audio/outer-bgm.m4a`],loop:!0,initialVolume:.56,defaultWantsToPlay:!0},Jt={minVolumeRatio:.2,volumeSyncEpsilon:.003},P=new l(Wt.fov,O.aspect,Wt.near,Wt.far),Yt=new e().subVectors(j.intro.startTarget,j.intro.startPos).normalize(),Xt=j.intro.startPos.clone().addScaledVector(Yt,-j.loader.cameraPush.distance);P.position.copy(Xt);var F=new ue({antialias:!0,alpha:!0});function Zt(){F.domElement.style.left=`${O.left}px`,F.domElement.style.top=`${O.top}px`}function Qt(e=ln,t=nn()){return e?en():t}function $t(e=nn()){let t=Qt(ln,e);F.setPixelRatio(t),F.setSize(O.width,O.height),cn=e,I?.setPixelRatio&&I.setPixelRatio(e),I?.setSize&&I.setSize(O.width,O.height),L?.setSize&&L.setSize(Math.max(1,Math.floor(O.width*e*.5)),Math.max(1,Math.floor(O.height*e*.5)))}function en(){return Math.min(window.devicePixelRatio,2)}function tn(){return!v&&!y&&!De?Xe:1}function nn(){let e=en();return f.clamp(e*tn(),Ze,e)}F.setPixelRatio(en()),F.setSize(O.width,O.height),F.setClearColor(0,1),F.outputColorSpace=fe,F.useLegacyLights=!1,F.toneMapping=4,F.toneMappingExposure=N.exposure,Ht.style.position=`relative`,Ht.style.backgroundColor=`#000000`,F.domElement.style.position=`absolute`,F.domElement.style.zIndex=`1`,F.domElement.style.pointerEvents=`auto`,F.domElement.style.display=`block`,Zt(),Ht.appendChild(F.domElement);var rn=null,I=null,an=null,L=null,on=null,sn=0,cn=0,ln=!1,R={currentStrength:k.bloomEnabled?N.bloom.strength:0,fromStrength:k.bloomEnabled?N.bloom.strength:0,targetStrength:k.bloomEnabled?N.bloom.strength:0,transitionStartedAt:performance.now()},un={hidden:!1};function dn(){return k.bloomEnabled&&!Gn()?N.bloom.strength:0}function fn(e=performance.now()){let t=dn();Math.abs(t-R.targetStrength)<1e-4||(R.fromStrength=R.currentStrength,R.targetStrength=t,R.transitionStartedAt=e)}function pn(){return Math.abs(R.currentStrength-R.targetStrength)>1e-4}function mn(){return R.currentStrength>1e-4||R.targetStrength>1e-4}function hn(e=performance.now()){fn(e);let t=Math.max(0,N.bloom.transitionDurationMs??0);if(t<=0)R.currentStrength=R.targetStrength,R.fromStrength=R.targetStrength;else{let n=f.clamp((e-R.transitionStartedAt)/t,0,1),r=n<.5?4*n*n*n:1-(-2*n+2)**3/2;R.currentStrength=f.lerp(R.fromStrength,R.targetStrength,r),n>=1&&(R.currentStrength=R.targetStrength,R.fromStrength=R.targetStrength)}L&&(L.enabled=mn(),L.strength=R.currentStrength,L.radius=N.bloom.radius,L.threshold=N.bloom.threshold)}function gn(){return Kn()?0:k.msaaSamples}function _n(e=performance.now()){return fn(e),vn(gn())>0||dn()>1e-4||pn()}function vn(e=gn()){let t=kt(e,0);if(t<=0)return 0;let n=F.capabilities.maxSamples??0;return n>=t?t:n>=4?4:n>=2?2:0}function yn(){I?.dispose&&I.dispose(),L?.dispose&&L.dispose(),on?.dispose&&on.dispose(),rn&&rn.dispose(),I=null,an=null,L=null,on=null,rn=null,ln=!1}function bn({pixelRatio:e=nn(),msaaSamples:t=vn(gn()),useComposer:n=_n()}={}){yn();let r=Math.max(1,Math.floor(O.width*e)),i=Math.max(1,Math.floor(O.height*e)),a=Qt(n,e);F.setPixelRatio(a),F.setSize(O.width,O.height),Zt(),cn=e,sn=n?t:0,ln=n,n&&(rn=new p(r,i,{samples:t,type:te}),I=new ne(F,rn),I?.setPixelRatio&&I.setPixelRatio(e),an=new se(Ut,P),I.addPass(an),L=new ae(new m(Math.max(1,Math.floor(O.width*e*.5)),Math.max(1,Math.floor(O.height*e*.5))),R.currentStrength,N.bloom.radius,N.bloom.threshold),hn(performance.now()),I.addPass(L),on=new le,I.addPass(on),I?.setSize&&I.setSize(O.width,O.height))}function xn({forceRebuild:e=!1}={}){let t=performance.now();fn(t);let n=nn(),r=vn(gn()),i=_n(t);if(e||r!==sn||i!==ln){bn({pixelRatio:n,msaaSamples:r,useComposer:i}),G.projectionInvalidated=!0,K();return}if(Math.abs(n-cn)>.001){$t(n),G.projectionInvalidated=!0,K();return}hn(t)}bn();function Sn(){let e=nn();return{scale:Number(tn().toFixed(3)),pixelRatio:e,width:Math.max(1,Math.floor(O.width*e)),height:Math.max(1,Math.floor(O.height*e))}}function Cn(){let e=performance.memory;if(!e)return null;let t=e=>Number((e/(1024*1024)).toFixed(2));return{usedMB:t(e.usedJSHeapSize),totalMB:t(e.totalJSHeapSize),limitMB:t(e.jsHeapSizeLimit)}}function wn(){let e=ei(),t=Sn(),n=kt(k.msaaSamples,0),r=kt(gn(),0),i=vn(gn()),a=$?.velocity?.lengthSq?.()??0,o=X?.velocity?.lengthSq?.()??0,s=X?.currentMouse?.distanceToSquared?.(X.targetMouse)??0,c=Math.abs((H?.current??0)-(H?.target??0)),l=U?.lastUpdateAt?performance.now()-U.lastUpdateAt:null;return{ready:!De,isAnimating:y,physicsUnlocked:_,focused:v,benchmarkMode:!1,externalTextureOverridesEnabled:!0,assetProfile:we,assetProfileLabel:g.label,bloomEnabled:e.bloomEnabled,bloomStrength:Number(R.currentStrength.toFixed(4)),savedBloomEnabled:k.bloomEnabled,requestedMsaaSamples:r,savedMsaaSamples:n,effectiveMsaaSamples:i,msaaLabel:At(i),avgRenderMs:Number(D.avgRenderMs.toFixed(3)),avgFrameMs:Number(D.avgFrameMs.toFixed(3)),fps:Number(D.fps.toFixed(2)),resolution:t,viewport:{width:O.width,height:O.height,left:O.left,top:O.top,aspect:Number(O.aspect.toFixed(3)),clamped:O.isClamped},rendererInfo:{calls:F.info.render.calls,triangles:F.info.render.triangles,lines:F.info.render.lines,points:F.info.render.points,frame:F.info.render.frame,geometries:F.info.memory.geometries,textures:F.info.memory.textures},jsHeap:Cn(),internals:{outerScenePaused:Hn(),effectiveRenderPath:Zn()?`renderer`:`composer`,composerActive:ln,outerCanvasVisible:!un.hidden,screenContentMode:Rn,screenAppReadyForProjection:Fr(),renderRequested:G.renderRequested,projectionInvalidated:G.projectionInvalidated,hasActiveSceneAnimation:sr(performance.now()),hasSkyAnimation:er(),walkVelocitySq:Number(a.toFixed(8)),parallaxVelocitySq:Number(o.toFixed(8)),parallaxDeltaSq:Number(s.toFixed(8)),screenOpacityDelta:Number(c.toFixed(8)),screenProjectionAgeMs:l==null?null:Number(l.toFixed(3))}}}function Tn(e=2e4){return new Promise((t,n)=>{let r=performance.now();function i(){if(!De){t(wn());return}if(performance.now()-r>=e){n(Error(`Timed out waiting for outer scene readiness`));return}window.requestAnimationFrame(i)}i()})}function En(e=3e4){return new Promise((t,n)=>{let r=performance.now();function i(){if(!De&&!y&&_){t(wn());return}if(performance.now()-r>=e){n(Error(`Timed out waiting for benchmark-stable scene state`));return}window.requestAnimationFrame(i)}i()})}function Dn(e=2e4){return new Promise((t,n)=>{let r=performance.now();function i(){if(typeof Ue==`function`){t(!0);return}if(performance.now()-r>=e){n(Error(`Timed out waiting for loader start prompt`));return}window.requestAnimationFrame(i)}i()})}function On(e=3e3){return new Promise((t,n)=>{let r=Math.max(250,Number(e)||3e3),i=performance.now(),a=[],o=[],s=[],c=0;function l(){let e=wn(),n=e=>e.length?Number((e.reduce((e,t)=>e+t,0)/e.length).toFixed(3)):0,i=o.map(e=>e>0?1e3/e:0);t({...e,sampleDurationMs:r,sampleCount:a.length,windowAvgRenderMs:n(a),windowAvgFrameMs:n(o),windowAvgFps:n(i),windowMinFps:i.length?Number(Math.min(...i).toFixed(3)):0,windowMaxFps:i.length?Number(Math.max(...i).toFixed(3)):0,windowAvgHeapMB:n(s)})}function u(e){let t=wn();if(a.push(D.lastRenderMs||t.avgRenderMs),t.jsHeap?.usedMB!=null&&s.push(t.jsHeap.usedMB),c>0){let t=e-c;t>0&&t<250&&o.push(t)}if(c=e,performance.now()-i>=r){l();return}window.requestAnimationFrame(u)}Tn().then(()=>u()).catch(n)})}window.__outerWebsiteDebug={getMetrics:wn,getWinXPRuntimeState:()=>({focusState:Ce(),presentationState:xe(),presentationProfile:_e()}),waitForReady:Tn,waitForBenchmarkStable:En,waitForStartPrompt:Dn,getStartupTimeline:ht,clearStartupTimeline:gt,startExperience:()=>typeof Ue==`function`?(Ue(),!0):!1,sampleMetrics:On};var kn=new re(P,F.domElement);kn.enabled=!1,kn.target.copy(j.intro.startTarget);var An=new i,jn=new ce,Mn=new oe,Nn=new c,Pn=new u;Nn.setTranscoderPath(`/basis/`),Nn.detectSupport(F),Pn.setDecoderPath(`/draco/`),Pn.preload(),jn.setKTX2Loader(Nn),jn.setDRACOLoader(Pn);var Fn=null,z=null,B=null,In=null,Ln=null,Rn=`live`,zn=[],Bn=null,V=null,H={runtimeEnabled:!1,current:0,target:0,pointerEvents:`none`},U={quad:null,lastUpdateAt:0,lastMissStartedAt:0},W={currentGain:1,fullVolumeDistance:0,minimumVolumeDistance:0,lastSyncedVolume:null},G={frameId:null,renderRequested:!0,projectionInvalidated:!0,skyFrameTimeoutId:null},Vn={mode:`idle`,startedAt:0,duration:0,easingName:`easeInOutCubic`};function Hn(){return v&&!y}function Un(e,t,n,r=performance.now()){Vn.mode=e,Vn.startedAt=r,Vn.duration=Math.max(1,t),Vn.easingName=n}function Wn(){Vn.mode=`idle`,Vn.startedAt=0,Vn.duration=0,Vn.easingName=`easeInOutCubic`}function Gn(e=performance.now()){return!1}function Kn(){return!1}function qn(){return!1}function Jn(){let e=qn();un.hidden!==e&&(un.hidden=e,F.domElement.style.display=e?`none`:`block`,F.domElement.style.pointerEvents=e?`none`:`auto`)}function Yn(){let e={focused:v,animating:y,settled:Hn()};xn(),Jn(),ri(),Se(e)}Se(ye);function Xn(e){v!==e&&(v=e,Jr(),xn(),Jn(),ri(),K())}function Zn(){return!ln}function Qn(e,t){if(!e||!t)return;let n=t.getBoundingClientRect(),r=He?.getBoundingClientRect()??n,i=e.offsetWidth||e.getBoundingClientRect().width||0,a=f.clamp(r.right-i,qe,window.innerWidth-qe-i);e.style.left=`${a}px`,e.style.top=`${n.bottom+Ke}px`}function $n(){Qn(x,Ne),Qn(C,ze)}function er(){return!!V&&!Hn()}function tr(e,t=it){return e.lengthSq()<=t*t}function nr(e,t=rt){return e.lengthSq()<=t*t}function rr(){return H.runtimeEnabled&&Math.abs(H.current-H.target)>at}function ir(){G.skyFrameTimeoutId!==null&&(window.clearTimeout(G.skyFrameTimeoutId),G.skyFrameTimeoutId=null)}function K(){G.renderRequested=!0,ir(),Jn(),G.frameId===null&&(G.frameId=window.requestAnimationFrame(Ei))}function ar(e=Qe){G.renderRequested||G.frameId!==null||G.skyFrameTimeoutId!==null||(G.skyFrameTimeoutId=window.setTimeout(()=>{G.skyFrameTimeoutId=null,G.frameId===null&&(G.frameId=window.requestAnimationFrame(Ei))},Math.max(0,e)))}function or(){G.projectionInvalidated=!0,K()}function sr(e){return!!(De||y||pn()||Q.w||Q.a||Q.s||Q.d||Q[` `]||Q.control||$.active||$.velocity.lengthSq()>1e-6||X.velocity.lengthSq()>1e-6||!tr(X.currentMouse)||X.currentMouse.distanceToSquared(X.targetMouse)>1e-6||rr())}function cr(e=performance.now(),t=!1,n=!1){return G.projectionInvalidated?!0:t?!1:v?!!(y||De):y||De||n||G.renderRequested?!0:e-U.lastUpdateAt>=$e}function lr(e=performance.now(),{skyOnly:t=!1,sceneAnimationActive:n=!1}={}){let r=performance.now(),i=pn();hn(e);let a=pn();(i||a)&&!y&&ri(),t||Ur(),!ln||!I?F.render(Ut,P):I.render(),t||Ti(),ln&&!_n(e)&&xn({forceRebuild:!0}),cr(e,t,n)&&(vr(),G.projectionInvalidated=!1,U.lastUpdateAt=e),si(performance.now()-r,e)}function ur(e){let t=f.clamp(e,0,1);Math.abs(H.current-t)<.001||(H.current=t,B?.setVisualState({brightness:t}),Jn())}function dr(e){H.pointerEvents!==e&&(H.pointerEvents=e,B?.setVisualState({pointerEvents:e}))}function fr(e,t){if(Nt.cameraSpacePoint.copy(e).applyMatrix4(P.matrixWorldInverse).z>=-.001)return null;let n=Nt.projectedPoint.copy(e).project(P);return!Number.isFinite(n.x)||!Number.isFinite(n.y)?null:(t.x=O.left+(n.x*.5+.5)*O.width,t.y=O.top+(-n.y*.5+.5)*O.height,t)}function pr(){if(!z)return null;z.updateMatrixWorld(!0);for(let e=0;e<Nt.localCorners.length;e+=1)if(!fr(Nt.worldCorners[e].copy(Nt.localCorners[e]).applyMatrix4(z.matrixWorld),Nt.quad[e]))return null;return Nt.quad}function mr(e){return e.map(e=>({x:e.x,y:e.y}))}function hr(e,t){for(let n=0;n<t.length;n+=1)e[n].x=t[n].x,e[n].y=t[n].y}function gr(e,t,n=tt){if(!e||!t||e.length!==t.length)return!1;for(let r=0;r<e.length;r+=1)if(Math.abs(e[r].x-t[r].x)>n||Math.abs(e[r].y-t[r].y)>n)return!1;return!0}function _r(){U.quad=null,U.lastMissStartedAt=0,B?.setVisualState({pointerEvents:`none`,visible:!1}),Jn()}function vr(){if(!z){_r();return}let e=performance.now(),t=pr();if(!t){if(U.quad&&(U.lastMissStartedAt===0&&(U.lastMissStartedAt=e),e-U.lastMissStartedAt<et)){B?.setVisualState({visible:!0}),Jn();return}_r();return}if(U.lastMissStartedAt=0,!U.quad)U.quad=mr(t);else if(!gr(U.quad,t))hr(U.quad,t);else{B&&B.setVisualState({visible:!0}),Jn();return}B&&(B.syncProjection(U.quad),B.setVisualState({visible:!0})),Jn()}function yr(e,t){if(!U.quad||U.quad.length!==4)return!1;let n=0;for(let r=0;r<U.quad.length;r+=1){let i=U.quad[r],a=U.quad[(r+1)%U.quad.length],o=(a.x-i.x)*(t-i.y)-(a.y-i.y)*(e-i.x);if(Math.abs(o)<=.5)continue;let s=Math.sign(o);if(n===0){n=s;continue}if(n!==s)return!1}return!0}function br(e){bt=!1,e.traverse(e=>{e.isMesh&&(e.name.toLowerCase().includes(`screen_plane`)||e.name.toLowerCase().includes(`hitbox`)||(Array.isArray(e.material)?e.material:[e.material]).forEach(e=>{if(!e||yt.includes(e))return;yt.push(e);let t=e.onBeforeCompile,n=Object.prototype.hasOwnProperty.call(e,`customProgramCacheKey`),r=e.customProgramCacheKey;e.userData.outerWebsiteShockwaveMaterial={originalOnBeforeCompile:t,hadOwnCustomProgramCacheKey:n,originalCustomProgramCacheKey:r},e.onBeforeCompile=(n,r)=>{typeof t==`function`&&t.call(e,n,r),e.userData.shader=n,n.uniforms.uShockwaveRadius={value:0},n.uniforms.uShockwaveCenter={value:xt},n.uniforms.uEdgeIntensity={value:j.loader.shockwave.edgeIntensity},n.vertexShader=`
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
          `)},e.customProgramCacheKey=()=>`${typeof r==`function`?r.call(e):``}|${ct}`,e.needsUpdate=!0}))})}function xr(){bt||(bt=!0,yt.forEach(e=>{let t=e?.userData?.outerWebsiteShockwaveMaterial;t&&(e.onBeforeCompile=t.originalOnBeforeCompile,t.hadOwnCustomProgramCacheKey?e.customProgramCacheKey=t.originalCustomProgramCacheKey:delete e.customProgramCacheKey,delete e.userData.shader,delete e.userData.outerWebsiteShockwaveMaterial,e.needsUpdate=!0)}),K())}function Sr(e,n={}){return e.wrapS=t,e.wrapT=ie,new r({transparent:!0,uniforms:{tSky:{value:e},uExposure:{value:Gt.exposure},uSaturation:{value:Gt.saturation},uHighlights:{value:Gt.highlights},uRepeat:{value:new m(n.repeatX??Gt.repeatX,n.repeatY??Gt.repeatY)},uOffsetY:{value:n.offsetY??Gt.offsetY},uSkyOpacity:{value:0}},vertexShader:`varying vec2 vUv; void main() { vUv = uv; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }`,fragmentShader:`
      uniform sampler2D tSky; uniform float uExposure; uniform float uSaturation; uniform float uHighlights; uniform vec2 uRepeat; uniform float uOffsetY;
      uniform float uSkyOpacity;
      varying vec2 vUv;
      void main() {
        if (uSkyOpacity < 0.01) discard; 
        vec2 uv = vec2(vUv.x * uRepeat.x, vUv.y * uRepeat.y + uOffsetY);
        vec3 color = texture2D(tSky, uv).rgb * uExposure;
        float luma = dot(color, vec3(0.2126, 0.7152, 0.0722));
        color = mix(color, color * uHighlights, smoothstep(0.7, 1.0, luma));
        color = mix(vec3(dot(color, vec3(0.2126, 0.7152, 0.0722))), color, uSaturation);
        gl_FragColor = vec4(color, uSkyOpacity);
      }
    `,side:0,toneMapped:!1})}var Cr={computer:{path:g.lightMapPaths.computer}},wr={room:{path:g.bakedSurfacePaths.room},table:{path:g.bakedSurfacePaths.table},chairBack:{path:g.bakedSurfacePaths.chairBack},chairLeft:{path:g.bakedSurfacePaths.chairLeft},chairRight:{path:g.bakedSurfacePaths.chairRight}},Tr=new Set([`room`,`table`]),Er={computer:{envMapIntensity:10.95,roughnessMin:.8}};function Dr(e){e.map&&(e.map.colorSpace=fe),e.emissiveMap&&(e.emissiveMap.colorSpace=fe)}function Or(e){let t=e.getAttribute(`uv`);if(!t)return;let n=new Float32Array(t.array.length);n.set(t.array),e.setAttribute(`uv1`,new h(n,t.itemSize))}function kr(e){return e.includes(`room`)||e.includes(`wall`)||e.includes(`floor`)||e.includes(`ceiling`)?`room`:(e.includes(`table`)||e.includes(`desk`))&&!e.includes(`portable`)?`table`:e.includes(`chair_back`)||e.includes(`chair`)&&e.includes(`back`)?`chairBack`:e.includes(`chair_left`)||e.includes(`chair`)&&e.includes(`left`)?`chairLeft`:e.includes(`chair_right`)||e.includes(`chair`)&&e.includes(`right`)?`chairRight`:null}function Ar(e){return e.includes(`computer`)||e.includes(`pc`)||e.includes(`monitor`)||e.includes(`portable`)||e.includes(`bm86`)?`computer`:null}function jr(e){return Tr.has(e)}async function Mr(e,t={}){let n=await An.loadAsync(e);return n.flipY=t.flipY??!1,t.colorSpace&&(n.colorSpace=t.colorSpace),n}async function Nr(e,t={}){if(e.toLowerCase().endsWith(`.ktx2`)){let n=await Nn.loadAsync(e);return t.colorSpace&&(n.colorSpace=t.colorSpace),n}return Mr(e,t)}function Pr(e){B?.setVisualState({transition:e})}function Fr(){return!!B?.isMounted()}function Ir(e=`preload`){return In?(E(`screenOverlay.import.reuse`,{reason:e}),In):(E(`screenOverlay.import.start`,{reason:e}),In=be(()=>import(`./outer-screen-overlay-CmZuLpHl.js`).then(t=>(E(`screenOverlay.import.end`,{reason:e}),t),t=>{throw In=null,E(`screenOverlay.import.error`,{reason:e,message:t?.message??String(t)}),t}),__vite__mapDeps([0,1,2,3,4])),In)}async function Lr(){let e=performance.now();return E(`screenOverlay.ensure.start`,{hasOverlay:!!B,hasPendingModulePromise:!!In,hasPendingOverlayPromise:!!Ln}),B?(E(`screenOverlay.ensure.end`,{branch:`cached`,elapsedMs:performance.now()-e}),B):(Ln||=Ir(`ensure`).then(({createScreenHtmlOverlay:e})=>(B=e({width:A.width,height:A.height}),W.lastSyncedVolume=null,B.setVisualState({opacity:H.current,brightness:1,pointerEvents:`none`,transition:``,visible:!1}),Jn(),Wr(q.getState().isMuted),Gr(q.getState().volume),or(),B)),Ln.then(t=>(E(`screenOverlay.ensure.end`,{branch:`promise`,elapsedMs:performance.now()-e,mounted:t?.isMounted?.()??!1}),t)))}function Rr(t){if(!t||z)return;z=new me,Ut.add(z),t.updateWorldMatrix(!0,!1),t.geometry.computeBoundingBox();let n=t.geometry.boundingBox,r=new e;n.getCenter(r);let i=r.applyMatrix4(t.matrixWorld);z.position.copy(i),z.rotation.set(A.rotationX,A.rotationY,A.rotationZ,`YXZ`),z.translateZ(A.offsetZ),z.translateX(A.offsetX),z.translateY(A.offsetY);let a=new e;n.getSize(a);let o=[a.x,a.y,a.z].sort((e,t)=>t-e),s=o[0]/A.width*A.scaleMultiplier*A.scaleX,c=o[1]/A.height*A.scaleMultiplier*A.scaleY;z.scale.set(s,c,1),z.updateMatrixWorld(!0);let l=new e(0,0,1).applyQuaternion(z.quaternion).normalize();_t.copy(z.position).addScaledVector(l,j.focus.distance),_t.y+=j.focus.yOffset,vt.copy(z.position),vt.x+=j.focus.targetOffsetX,vt.y+=j.focus.targetOffsetY,vt.z+=j.focus.targetOffsetZ,W.fullVolumeDistance=_t.distanceTo(z.position),W.minimumVolumeDistance=Math.max(W.fullVolumeDistance+1e-4,Xt.distanceTo(z.position),j.intro.startPos.distanceTo(z.position),j.unfocus.endPos.distanceTo(z.position)),W.currentGain=Br(P.position.distanceTo(z.position)),or()}function zr(e){return f.clamp(e,0,1)}function Br(e){let t=W.fullVolumeDistance,n=Math.max(W.minimumVolumeDistance,t+1e-4);if(!(t>0)||!(n>t)||e<=t)return 1;if(e>=n)return Jt.minVolumeRatio;let r=(e-t)/(n-t),i=r*r*(3-2*r);return f.lerp(1,Jt.minVolumeRatio,i)}function Vr(e){Rn=`live`}function Hr(e){return zr(e*W.currentGain)}function Ur(){if(!z||!q||!Fr())return;let e=Br(P.position.distanceTo(z.position));Math.abs(e-W.currentGain)<.001||(W.currentGain=e,Gr(q.getState().volume))}function Wr(e){if(B?.syncAudioControl){B.syncAudioControl({type:ve.SET_MUTED,muted:!!e});return}let t=window.__outerWebsiteAudioRuntime;t&&t.setMuted(!!e)}function Gr(e){let t=Hr(e);if(W.lastSyncedVolume!==null&&Math.abs(W.lastSyncedVolume-t)<Jt.volumeSyncEpsilon)return;if(W.lastSyncedVolume=t,B?.syncAudioControl){B.syncAudioControl({type:ve.SET_VOLUME,volume:t});return}let n=window.__outerWebsiteAudioRuntime;n&&n.setVolume(t)}function Kr(){let e=(Array.isArray(qt.sources)?qt.sources:[qt.src]).filter(Boolean),t=new Audio;t.__outerWebsiteIgnoreGlobalAudio=!0,t.preload=`auto`,t.loop=qt.loop,t.volume=qt.initialVolume,t.playsInline=!0;let n=!1,r=!0,i=0,a=null,o=0,s=null,c=0,l=null,u=null,d={hasSource:e.length>0,hasError:!1,isMuted:!1,isPlaying:!1,needsUserGesture:!1,unlockArmed:!1,volume:qt.initialVolume,wantsToPlay:qt.defaultWantsToPlay},ee=()=>e[o]||``,te=()=>{let e=ee();return e?(t.getAttribute(`src`)!==e&&(t.src=e),!0):(t.removeAttribute(`src`),!1)},ne=()=>o>=e.length-1?!1:(o+=1,n=!1,te()),p=()=>{typeof l==`function`&&l({...d,currentSource:ee()})},m=()=>{a!==null&&(window.clearTimeout(a),a=null)},re=()=>{i=0,m()},ie=(e,n=240)=>!d.wantsToPlay||d.needsUserGesture?!1:a===null?i>=12?!1:(a=window.setTimeout(()=>{a=null,i+=1,t.readyState===0&&!d.hasError&&t.load(),he(`${e}-retry-${i}`)},n),!0):!0,ae=({restoreVolume:e=!1}={})=>{c+=1,s!==null&&(window.cancelAnimationFrame(s),s=null),e&&(t.volume=zr(d.volume))},oe=e=>{if(t.paused||t.muted||r||t.volume<=.001){e();return}ae();let n=c,i=t.volume,a=performance.now(),o=r=>{if(n!==c)return;let l=Math.min((r-a)/Je,1);if(t.volume=f.lerp(i,0,l),l<1){s=window.requestAnimationFrame(o);return}s=null,e()};s=window.requestAnimationFrame(o)},h=(e=!1)=>{t.muted=e||d.isMuted||r,t.volume=zr(d.volume)},se=async()=>{if(!d.hasSource||n)return!1;h(!0);try{return await t.play(),re(),n=!0,d.hasError=!1,d.isPlaying=!0,d.needsUserGesture=!1,pe(),p(),!0}catch{return h(),ie(`prime-muted-autoplay`),!1}},ce=()=>!n||t.paused?!1:(ae({restoreVolume:!0}),t.currentTime=0,h(),re(),d.hasError=!1,d.isPlaying=!0,d.needsUserGesture=!1,pe(),p(),!0),le=()=>{if(!n||t.paused)return!1;t.pause();try{t.currentTime=0}catch{return!1}return d.isPlaying=!1,!0},ue=(e=`timeline-sync`)=>{let i=performance.now();if(E(`audio.releaseQueuedPlayback.start`,{reason:e,holdAudibleStart:r,wantsToPlay:d.wantsToPlay,isPlaying:d.isPlaying,hasPrimedMutedAutoplay:n,paused:t.paused}),!r){d.wantsToPlay&&!d.isPlaying?he(e):(h(),p()),E(`audio.releaseQueuedPlayback.end`,{reason:e,branch:`already-released`,elapsedMs:performance.now()-i});return}if(r=!1,d.needsUserGesture=!1,d.hasError=!1,re(),pe(),h(),!d.wantsToPlay){p(),E(`audio.releaseQueuedPlayback.end`,{reason:e,branch:`not-wanted`,elapsedMs:performance.now()-i});return}let a=le();he(a?`${e}-restart-from-zero`:e),E(`audio.releaseQueuedPlayback.end`,{reason:e,branch:a?`primed-restart`:`play`,elapsedMs:performance.now()-i})},de=()=>{window.setTimeout(()=>{t.currentTime<.25&&(t.currentTime=0),h(),p()},80)},fe=async()=>{h(!0);try{return await t.play(),re(),d.hasError=!1,d.isPlaying=!0,d.needsUserGesture=!1,pe(),de(),p(),!0}catch{return h(),!1}},pe=()=>{!d.unlockArmed||!u||([`pointerdown`,`keydown`,`touchstart`].forEach(e=>{window.removeEventListener(e,u,!0)}),u=null,d.unlockArmed=!1)},me=()=>{d.unlockArmed||=(u=()=>{pe(),d.wantsToPlay&&he(`user-gesture`)},[`pointerdown`,`keydown`,`touchstart`].forEach(e=>{window.addEventListener(e,u,!0)}),!0)},he=async(e=`manual`)=>{if(d.wantsToPlay=!0,ae({restoreVolume:!0}),!d.hasSource)return p(),!1;if(ce())return!0;d.hasError&&=(t.load(),!1),h();try{return await t.play(),re(),d.hasError=!1,d.isPlaying=!0,d.needsUserGesture=!1,pe(),p(),!0}catch(n){return d.isPlaying=!t.paused,n?.name===`NotAllowedError`?await fe()||(d.hasError=!1,ie(`autoplay-blocked`)||(d.needsUserGesture=!0,me())):n?.name===`AbortError`||n?.name===`NotSupportedError`?(d.hasError=!1,ie(n.name===`AbortError`?`media-aborted`:`media-not-ready`)||(d.hasError=!0)):(d.hasError=!0,console.warn(`[BGM] Unable to play audio (${e}).`,n)),p(),!1}},ge=()=>{d.wantsToPlay=!1,d.needsUserGesture=!1,re(),pe(),oe(()=>{t.pause(),ae({restoreVolume:!0}),d.isPlaying=!1,p()})},_e=()=>{if(d.isPlaying||d.wantsToPlay){ge();return}he(`toggle`)},ve=e=>{let t=()=>{d.isMuted=e,h(),Wr(d.isMuted),p()};if(e!==d.isMuted){if(e){oe(t);return}ae({restoreVolume:!0}),t()}};return t.addEventListener(`play`,()=>{d.isPlaying=!0,p()}),t.addEventListener(`pause`,()=>{d.isPlaying=!1,p()}),t.addEventListener(`ended`,()=>{d.isPlaying=!1,p()}),t.addEventListener(`canplay`,()=>{d.wantsToPlay&&!d.isPlaying&&!d.needsUserGesture&&ie(`canplay`,0)}),t.addEventListener(`error`,()=>{let e=t.error?.code??null;if(e===1||e===null){ie(`media-load-aborted`);return}if(e===4){if(ne()){re(),d.hasError=!1,d.isPlaying=!1,t.load(),d.wantsToPlay&&(r?se():he(`media-source-fallback`)),p();return}if(ie(`media-source-error`,320))return}d.hasError=!0,d.isPlaying=!1,console.warn(`[BGM] Audio source could not be loaded: ${ee()}`),p()}),h(),d.hasSource&&te()&&(t.load(),d.wantsToPlay&&se()),{getState(){return{...d,currentSource:ee()}},pause:ge,play:he,releaseQueuedPlayback:ue,setVolume:e=>{ae(),d.volume=zr(e),d.volume>0&&d.isMuted&&(d.isMuted=!1),h(),Gr(d.volume),Wr(d.isMuted),p()},setOnChange(e){l=e,p()},toggleMute:()=>{ve(!d.isMuted)},togglePlay:_e}}var q=Kr(),J={soundOn:`<svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#ff7b00" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"/><path d="M15.54 8.46a5 5 0 0 1 0 7.07"/><path d="M19.07 4.93a10 10 0 0 1 0 14.14"/></svg>`,soundOff:`<svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#ff7b00" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"/><line x1="23" y1="9" x2="17" y2="15"/><line x1="17" y1="9" x2="23" y2="15"/></svg>`,play:`<svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#ff7b00" stroke-width="2.3" stroke-linecap="round" stroke-linejoin="round"><polygon points="8 5 19 12 8 19 8 5"/></svg>`,pause:`<svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#ff7b00" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><line x1="9" y1="5" x2="9" y2="19"/><line x1="15" y1="5" x2="15" y2="19"/></svg>`,volumeLow:`<svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#ff7b00" stroke-width="2.3" stroke-linecap="round" stroke-linejoin="round"><polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"/><path d="M15 12a3 3 0 0 0 0-0.01"/></svg>`,volumeMid:`<svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#ff7b00" stroke-width="2.3" stroke-linecap="round" stroke-linejoin="round"><polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"/><path d="M15.5 9.5a4 4 0 0 1 0 5"/></svg>`,volumeHigh:`<svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#ff7b00" stroke-width="2.3" stroke-linecap="round" stroke-linejoin="round"><polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"/><path d="M15.5 8.5a5.5 5.5 0 0 1 0 7"/><path d="M18.8 6a9 9 0 0 1 0 12"/></svg>`,camUnfocused:`<svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#ff7b00" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z"/><circle cx="12" cy="13" r="4"/></svg>`,camFocused:`<svg width="13" height="13" viewBox="0 0 24 24" fill="#ff7b00" stroke="#ff7b00" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z"/><circle cx="12" cy="13" r="4"/></svg>`,fx:`<svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#ff7b00" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 7h8"/><path d="M4 17h14"/><path d="M14 7h6"/><path d="M10 17h4"/><circle cx="12" cy="7" r="2"/><circle cx="8" cy="17" r="2"/></svg>`},qr={wasd:`<svg width="46" height="30" viewBox="0 0 46 30" fill="none" xmlns="http://www.w3.org/2000/svg">
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
  </svg>`};function Jr(){ke&&(v?ke.innerHTML=J.camFocused:ke.innerHTML=J.camUnfocused)}function Yr(e){return e>=.75?J.volumeHigh:e>=.4?J.volumeMid:J.volumeLow}function Xr(e){return e.isMuted?`Muted`:`${Math.round(e.volume*100)}%`}function Zr(){Be!==null&&(window.clearTimeout(Be),Be=null)}function Qr(){Zr(),w&&(Be=window.setTimeout(()=>{$r(!1)},Ge))}function $r(e){e&&Ve&&ii(!1),w=e,x&&x.classList.toggle(`is-open`,w),w?(Qn(x,Ne),Qr()):Zr()}function ei(){let e=kt(gn(),0),t=vn(e);return{bloomEnabled:mn(),bloomLabel:mn()?`On`:`Off`,requestedMsaaSamples:e,effectiveMsaaSamples:t,msaaEnabled:t>0,msaaLabel:At(t)}}function ti(){let e=ei();return`Bloom ${e.bloomLabel} | MSAA ${e.msaaLabel}`}function ni(e,t,n,r=`On`,i=`Off`){e&&(e.classList.toggle(`is-active`,n),e.innerHTML=`<span>${t}</span><strong>${n?r:i}</strong>`)}function ri(){let e=ei();if(Pe&&(Pe.classList.toggle(`is-active`,Ve),Pe.title=ti()),C&&(C.classList.toggle(`is-open`,Ve),Ve&&Qn(C,ze)),Fe&&(Fe.textContent=g.label),ni(Le,`Bloom`,e.bloomEnabled,`On`,`Off`),ni(Re,`MSAA`,e.msaaEnabled,e.msaaLabel,`Off`),Le&&(Le.title=`Toggle Bloom`),Re&&(Re.title=`Cycle MSAA: 4x, 2x, Off`),Ie){let{width:e,height:t}=Sn(),n=D.avgRenderMs>0?D.avgRenderMs.toFixed(1):`0.0`,r=performance.now()-D.lastFrameNow>500?0:Math.round(D.fps);Ie.textContent=`avg: ${n} ms    fps: ${r}    resolution: ${e}x${t}`}}function ii(e){e&&w&&$r(!1),Ve=e,ri(),K()}function ai(e){k.bloomEnabled=!!e.bloomEnabled,k.msaaSamples=kt(e.msaaSamples,k.msaaSamples),Mt(),xn({forceRebuild:!0}),ri(),K()}function oi(e){if(e===`msaaSamples`){let e=kt(k.msaaSamples,0),t=lt.indexOf(e),n=lt[t===-1?0:(t+1)%lt.length];ai({...k,msaaSamples:n});return}ai({...k,[e]:!k[e]})}function si(e,t=performance.now()){if(D.lastRenderMs=e,D.avgRenderMs=D.avgRenderMs===0?e:f.lerp(D.avgRenderMs,e,.18),D.lastFrameNow>0){let e=t-D.lastFrameNow;e>0&&e<250&&(D.avgFrameMs=D.avgFrameMs===0?e:f.lerp(D.avgFrameMs,e,.2),D.fps=D.avgFrameMs>0?1e3/D.avgFrameMs:0)}D.lastFrameNow=t,!(y||t-D.lastUiUpdate<250)&&(D.lastUiUpdate=t,ri())}function ci(e=q.getState()){Ae&&(Ae.innerHTML=e.isMuted?J.soundOff:J.soundOn,Ae.title=e.isMuted?`Unmute all audio`:`Mute all audio`),b&&(b.innerHTML=e.isPlaying||e.wantsToPlay?J.pause:J.play,e.hasError?b.title=`BGM unavailable (${e.currentSource||`no source`})`:e.needsUserGesture&&!e.isPlaying?b.title=`Click to start music`:e.wantsToPlay&&!e.isPlaying?b.title=`Music queued to start`:b.title=e.isPlaying?`Pause music`:`Play music`),je&&(je.innerHTML=Yr(e.volume),je.title=`Adjust volume (${Math.round(e.volume*100)}%)`),S&&(S.value=`${Math.round(e.volume*100)}`),Me&&(Me.textContent=Xr(e))}q.setOnChange(ci);function li(){let e=document.createElement(`style`);e.textContent=`
    :root {
      --hud-glass-bg: rgba(80, 80, 80, 0.35);
      --hud-glass-border: rgba(255, 255, 255, 0.08);
      --hud-glass-shadow: none;
      --hud-glass-blur: blur(20px);
      --hud-font-main: ${It};
      --hud-font-accent: ${Lt};
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
      opacity: 0; transition: opacity ${Kt.fadeDuration}s ease;
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
      gap: 5px;
    }
    .ui-postfx-toggle {
      border: 1px solid rgba(255, 123, 0, 0.35);
      border-radius: 6px;
      background: rgba(255, 123, 0, 0.08);
      color: #ffd1aa;
      cursor: pointer;
      font-family: var(--hud-font-main);
      font-size: 10px;
      line-height: 1.2;
      transition: background 0.15s ease, border-color 0.15s ease, color 0.15s ease;
    }
    .ui-postfx-toggle {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      gap: 3px;
      min-height: 40px;
      padding: 6px 7px;
      text-align: left;
    }
    .ui-postfx-toggle strong {
      color: #ff7b00;
      font-size: 11px;
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
      opacity: 0; transition: opacity ${Kt.fadeDuration}s ease;
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
      opacity: 0; transition: opacity ${Kt.fadeDuration}s ease;
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
  `,document.head.appendChild(e);let t=document.createElement(`div`);t.id=`ui-tl`,He=t;let n=document.createElement(`span`);n.id=`ui-name`,n.textContent=`Hanqi Zhao`,b=document.createElement(`button`),b.className=`ui-btn`,b.addEventListener(`click`,()=>{q.togglePlay()});let r=document.createElement(`div`);Ne=r,r.className=`ui-volume-control`,je=document.createElement(`button`),je.className=`ui-btn`,je.addEventListener(`click`,()=>{$r(!w)}),x=document.createElement(`div`),x.className=`ui-volume-panel`;let i=document.createElement(`div`);i.className=`ui-volume-title`,i.innerHTML=`<span>Volume</span>`,Me=document.createElement(`span`),Me.className=`ui-volume-value`,i.appendChild(Me),S=document.createElement(`input`),S.className=`ui-volume-slider`,S.type=`range`,S.min=`0`,S.max=`100`,S.step=`1`,S.addEventListener(`input`,e=>{q.setVolume(Number(e.target.value)/100),Qr()}),x.appendChild(i),x.appendChild(S),r.appendChild(je);let a=document.createElement(`div`);ze=a,a.className=`ui-postfx-control`,Pe=document.createElement(`button`),Pe.className=`ui-btn`,Pe.innerHTML=J.fx,Pe.addEventListener(`click`,()=>{ii(!Ve)}),C=document.createElement(`div`),C.className=`ui-postfx-panel`;let o=document.createElement(`div`);o.className=`ui-postfx-header`,o.innerHTML=`<span>Render FX</span>`,Fe=document.createElement(`span`),Fe.className=`ui-postfx-summary`,Fe.textContent=g.label,o.appendChild(Fe);let s=document.createElement(`div`);s.className=`ui-postfx-toggles`,Le=document.createElement(`button`),Le.className=`ui-postfx-toggle`,Le.type=`button`,Le.addEventListener(`click`,()=>{oi(`bloomEnabled`)}),Re=document.createElement(`button`),Re.className=`ui-postfx-toggle`,Re.type=`button`,Re.addEventListener(`click`,()=>{oi(`msaaSamples`)}),s.appendChild(Le),s.appendChild(Re),C.appendChild(o),C.appendChild(s),a.appendChild(Pe),Ae=document.createElement(`button`),Ae.className=`ui-btn`,Ae.addEventListener(`click`,()=>{q.toggleMute()}),ke=document.createElement(`button`),ke.className=`ui-btn`,ke.innerHTML=J.camUnfocused,ke.title=`Toggle focus`,ke.addEventListener(`click`,()=>{y||!_||(v?Si():xi())}),t.appendChild(n),t.appendChild(ke),t.appendChild(b),t.appendChild(Ae),t.appendChild(r),t.appendChild(a),document.body.appendChild(t),document.body.appendChild(x),document.body.appendChild(C),$n(),document.addEventListener(`pointerdown`,e=>{let t=Ne?.contains(e.target)||x?.contains(e.target),n=ze?.contains(e.target)||C?.contains(e.target);w&&t?Qr():w&&$r(!1),Ve&&!n&&ii(!1)}),document.addEventListener(`pointermove`,()=>{w&&Qr()}),document.addEventListener(`wheel`,()=>{w&&Qr()},{passive:!0}),document.addEventListener(`keydown`,e=>{if(e.key===`Escape`){$r(!1),ii(!1);return}w&&Qr()}),ci(),ri();let c=document.createElement(`div`);c.id=`ui-bl`;let l=document.createElement(`div`);l.className=`ui-hint-row`,l.innerHTML=`
    <div class="ui-hint">${qr.wasd}<span>: move</span></div>
    <div class="ui-hint">${qr.space}<span>: up</span></div>
    <div class="ui-hint">${qr.ctrl}<span>: down</span></div>
  `,Ie=document.createElement(`div`),Ie.className=`ui-hud-stats`,c.appendChild(l),c.appendChild(Ie),document.body.appendChild(c);let u=document.createElement(`div`);return u.id=`ui-br`,u.innerHTML=`<div class="ui-copy">© Copyright 2026 Hanqi Zhao.</div>`,document.body.appendChild(u),ri(),{tl:t,bl:c,br:u}}async function ui(){try{let t=Promise.all(Object.entries(wr).map(async([e,t])=>[e,await Nr(t.path,{colorSpace:fe})])),r=Promise.all(Object.entries(Cr).map(async([e,t])=>{let n=await Nr(t.path,{colorSpace:``});return n.channel=1,[e,n]})),[i,a,o,c,l]=await Promise.all([g.visualSky.kind===`hdr`?Mn.loadAsync(g.visualSky.path):Mr(g.visualSky.path,{colorSpace:fe,flipY:g.visualSky.flipY??!1}),g.lightingEnvironment.kind===`hdr`?Mn.loadAsync(g.lightingEnvironment.path):Mr(g.lightingEnvironment.path,{colorSpace:fe,flipY:g.lightingEnvironment.flipY??!1}),jn.loadAsync(`/models/room_all.glb`),t,r]),u=Object.fromEntries(c),te=Object.fromEntries(l),ne=new n(200,32,20);ne.scale(-1,1,1),V=new s(ne,Sr(i,g.visualSky)),V.position.y=-100,V.rotation.y=Gt.rotationY,Ut.add(V),a.mapping=303,Ut.environment=a,Ut.environmentIntensity=g.lightingEnvironment.intensity??1.2;let p=o.scene;if(p.traverse(e=>{if(!e.isMesh)return;let t=(e.name??``).toLowerCase();(t.includes(`computer`)||t.includes(`screen`)||t.includes(`monitor`))&&zn.push(e),t.includes(`screen_plane`)&&(Fn=e,xt.setFromMatrixPosition(e.matrixWorld),xt.add(j.loader.shockwave.centerOffset),Fn.material=new de({colorWrite:!1,depthWrite:!0}),Fn.renderOrder=-1)}),br(p),p.traverse(e=>{if(!e.isMesh)return;let t=(e.name??``).toLowerCase();t.includes(`screen_plane`)||(Array.isArray(e.material)?e.material:[e.material]).forEach(n=>{if(!n)return;Dr(n);let r=kr(t),i=Ar(t);if(r&&u[r]){n.map=u[r],n.dithering=jr(r),n.needsUpdate=!0;return}n.isMeshStandardMaterial&&i&&te[i]&&(Or(e.geometry),n.lightMap=te[i],Er[i]&&(n.envMapIntensity=Er[i].envMapIntensity,n.roughness<Er[i].roughnessMin&&(n.roughness=Er[i].roughnessMin)),n.needsUpdate=!0)})}),Ut.add(p),zn.length>0){let t=new d;zn.forEach(e=>{e.updateMatrixWorld(!0),t.union(new d().setFromObject(e))});let n=new e;t.getCenter(n);let r=new e;t.getSize(r),Bn=new s(new ee(r.x,r.y,r.z),new de({colorWrite:!1,depthWrite:!1,transparent:!0,opacity:0})),Bn.position.copy(n),Bn.scale.setScalar(j.focus.hitboxScale),Ut.add(Bn),Fn||(xt.copy(n),xt.add(j.loader.shockwave.centerOffset))}Fn&&Rr(Fn),await Promise.all([Bt,new Promise(e=>setTimeout(e,j.loader.minLoadTime))]),E(`startup.assets.readyForGesture`),Ir(`start-prompt`).catch(()=>{}),await Vt(),E(`loader.gesture.await.end`),E(`loader.fade.start`,{fadeTimeMs:j.loader.fadeTime*1e3}),M.style.opacity=`0`,await new Promise(e=>setTimeout(e,j.loader.fadeTime*1e3)),E(`loader.fade.end`),M.remove(),E(`loader.removed`),await Lr(),E(`screenOverlay.ready`);let m=li();E(`outerHud.overlay.created`);{let e=performance.now();E(`loadingTimeline.start`);let t=!1,n=e=>e===1?1:1-2**(-10*e),r=e=>e<.5?4*e*e*e:1-(-2*e+2)**3/2;function i(){let a=(performance.now()-e)/1e3;if(!_){let e=j.loader.cameraPush,t=0;a>=e.startTime&&(t=Math.min((a-e.startTime)/e.duration,1)),P.position.lerpVectors(Xt,j.intro.startPos,r(t)),P.lookAt(kn.target)}let o=j.loader.shockwave,s=0;if(a>=o.startTime&&(s=Math.min((a-o.startTime)/o.duration,1)),!bt){let e=s>=1?st:f.lerp(o.startRadius,o.endRadius,n(s));yt.forEach(t=>{t.userData.shader&&(t.userData.shader.uniforms.uShockwaveRadius.value=e)}),s>=1&&xr()}let c=j.loader.skyFade,l=0;a>=c.startTime&&(l=Math.min((a-c.startTime)/c.duration,1)),V&&V.material&&(V.material.uniforms.uSkyOpacity.value=l),!_&&a>=j.loader.controlsUnlockTime&&(_=!0,E(`loadingTimeline.physicsUnlocked`,{elapsedSec:a}),X.locked=!0,X.targetMouse.set(0,0),X.currentMouse.set(0,0),X.lockBaseMouse.copy(Y),mi());let u=j.loader.screenFade;a>=u.startTime&&!Oe&&(Oe=!0,E(`loadingTimeline.screenFade.start`,{elapsedSec:a,durationSec:u.duration}),H.runtimeEnabled=!1,z&&B&&(Pr(`opacity ${u.duration}s ease-in-out`),requestAnimationFrame(()=>{E(`loadingTimeline.screenFade.visibleFrame`),B.setVisualState({opacity:1,visible:!0}),setTimeout(()=>{z&&B&&(Pr(``),H.runtimeEnabled=!0,H.target=1,ur(1),E(`loadingTimeline.screenFade.runtimeEnabled`))},u.duration*1e3+100)}))),!t&&a>=Kt.appearAt&&(t=!0,m.tl.style.opacity=`1`,m.bl.style.opacity=`1`,m.br.style.opacity=`1`,E(`outerHud.overlay.visible`,{elapsedSec:a})),a<Math.max(j.loader.cameraPush.startTime+j.loader.cameraPush.duration,o.startTime+o.duration,c.startTime+c.duration,u.startTime+u.duration,j.loader.controlsUnlockTime)?requestAnimationFrame(i):(De=!1,E(`loadingTimeline.complete`,{elapsedSec:a}))}i()}}catch(e){console.error(e)}}var Y=new m,X={locked:!0,lockBaseMouse:new m,targetMouse:new m,currentMouse:new m,velocity:new m},di={lastIdleSampleAt:0},Z={forward:new e,right:new e,up:new e(0,1,0),rawDir:new e,targetVel:new e,actualVel:new e,nextPos:new e,delta:new e,originalQuat:new pe,zeroMouse:new m(0,0),parallaxDiff:new m},fi={normal:new e,toCamera:new e},Q={w:!1,a:!1,s:!1,d:!1," ":!1,control:!1},pi=performance.now();function mi(){pi=performance.now()}window.addEventListener(`pointermove`,e=>{let t=Ot(e.clientX,e.clientY);if(Y.x=t.x,Y.y=t.y,v&&!y||!_)return;let n=performance.now(),r=!y&&!v&&X.locked;r&&n-di.lastIdleSampleAt<nt||(r&&(di.lastIdleSampleAt=n),mi(),!y&&!v&&X.locked&&Y.distanceTo(X.lockBaseMouse)>j.parallax.unlockThreshold&&(X.locked=!1),K())}),window.addEventListener(`keydown`,e=>{if(v&&!y||!_)return;mi();let t=e.key.toLowerCase();t===` `&&e.preventDefault(),Q[t]!==void 0&&(Q[t]=!0),K()},{passive:!1}),window.addEventListener(`keyup`,e=>{if(v&&!y||!_)return;mi();let t=e.key.toLowerCase();Q[t]!==void 0&&(Q[t]=!1),K()}),window.addEventListener(`wheel`,()=>{v&&!y||_&&(mi(),K())}),F.domElement.addEventListener(`contextmenu`,e=>e.preventDefault());var hi={linear:e=>e,easeOutCubic:e=>1-(1-e)**3,easeInOutCubic:e=>e<.5?4*e*e*e:1-(-2*e+2)**3/2},gi=null,_i=!1;function vi(){gi!==null&&(window.clearTimeout(gi),gi=null)}function yi(){!_i||y||!v||!_||(_i=!1,window.requestAnimationFrame(()=>{!y&&v&&_&&Si()}))}function bi(e,t,n,r,i,a,o,{emitStartState:s=!0}={}){s&&(y=!0,Yn());let c=performance.now();Un(v?`focus`:`unfocus`,i,a,c);let l=Vn.mode;E(`focus.cameraTween.start`,{mode:l,durationMs:i,easingName:a});let u=hi[a]||hi.easeInOutCubic;K();function d(){let a=performance.now(),s=(a-c)/i;s>1&&(s=1);let ee=u(s);P.position.lerpVectors(e,n,ee),kn.target.lerpVectors(t,r,ee),P.lookAt(kn.target),K(),s<1?requestAnimationFrame(d):(Wn(),y=!1,Yn(),$.velocity.set(0,0,0),X.locked=!0,X.lockBaseMouse.copy(Y),X.targetMouse.set(0,0),X.currentMouse.set(0,0),X.velocity.set(0,0),mi(),o&&o(),yi(),E(`focus.cameraTween.end`,{mode:l,elapsedMs:a-c}),K())}d()}function xi(){if(y||v||!_){E(`focus.transition.blocked`,{target:`focus`,isAnimating:y,isFocused:v,isPhysicsUnlocked:_});return}E(`focus.transition.start`,{target:`focus`}),vi(),_i=!1,y=!0,Xn(!0),Yn(),K(),bi(P.position.clone(),kn.target.clone(),_t,vt,j.focus.duration,j.focus.easing,null,{emitStartState:!1})}async function Si(){if(y||!v||!_){E(`focus.transition.blocked`,{target:`unfocus`,isAnimating:y,isFocused:v,isPhysicsUnlocked:_});return}E(`focus.transition.start`,{target:`unfocus`}),vi(),_i=!1,y=!0,Yn(),Xn(!1),!(!y||v)&&(Yn(),K(),gi=window.setTimeout(()=>{gi=null,bi(P.position.clone(),kn.target.clone(),j.unfocus.endPos,j.unfocus.endTarget,j.unfocus.duration,j.unfocus.easing,null,{emitStartState:!1})},Math.max(0,j.unfocus.preDelay??0)))}var Ci=new a;F.domElement.addEventListener(`pointerdown`,t=>{if(!_||t.button!==0)return;let n=Fr()?yr(t.clientX,t.clientY):!1;if(E(`focus.pointerdown.canvas`,{button:t.button,pointerType:t.pointerType,isPhysicsUnlocked:_,isAnimating:y,isFocused:v,pointerInsideScreen:n}),y){v&&!n&&(_i=!0,E(`focus.unfocus.queued`,{source:`canvas-pointerdown`}));return}mi();let r=Ot(t.clientX,t.clientY);if(Y.x=r.x,Y.y=r.y,K(),v){if(n){E(`focus.pointerdown.insideFocusedScreen`);return}E(`focus.pointerdown.requestUnfocus`,{source:`canvas`}),Si();return}if(n){E(`focus.pointerdown.requestFocus`,{source:`screen-bounds`}),xi();return}Ci.setFromCamera(Y,P);let i=Bn?[Bn]:zn;if(Ci.intersectObjects(i,!0).length>0&&z){let t=new e(0,0,1).applyQuaternion(z.quaternion).normalize(),n=new e().subVectors(P.position,z.position).normalize(),r=t.angleTo(n)*(180/Math.PI);E(`focus.pointerdown.hitboxIntersect`,{angleDegree:r,maxTriggerAngle:j.focus.maxTriggerAngle}),r<=j.focus.maxTriggerAngle&&(E(`focus.pointerdown.requestFocus`,{source:`computer-hitbox`}),xi())}K()});function wi(e){return!!(He?.contains(e)||x?.contains(e)||C?.contains(e))}document.addEventListener(`pointerdown`,e=>{if(!_||e.button!==0)return;let t=wi(e.target),n=Fr()?yr(e.clientX,e.clientY):!1;if(E(`focus.pointerdown.document`,{button:e.button,pointerType:e.pointerType,isPhysicsUnlocked:_,isAnimating:y,isFocused:v,pointerInsideUi:t,clickedInsideScreen:n}),!t){if(!v){!y&&n&&(E(`focus.pointerdown.requestFocus`,{source:`document-screen-bounds`}),xi());return}if(!n){if(y){_i=!0,E(`focus.unfocus.queued`,{source:`document-pointerdown`});return}E(`focus.pointerdown.requestUnfocus`,{source:`document`}),Si()}}},!0);function Ti(){if(!Fn||!z)return;let e=v&&!y&&Fr();if(Vr(`live`),!Oe){dr(e?`auto`:`none`);return}if(!H.runtimeEnabled){dr(e?`auto`:`none`);return}let t=fi.normal.set(0,0,1).applyQuaternion(z.quaternion).normalize(),n=fi.toCamera.subVectors(P.position,z.position).normalize(),r=P.position.distanceTo(z.position),i=t.dot(n)>=0,a=0,o=`none`;if(e)a=1,o=`auto`;else if(i){let e=j.shield.maxClickDistance+j.shield.fadeDistance;if(r<=j.shield.maxClickDistance)a=1;else if(r>=e)a=j.shield.dimOpacity;else{let e=1-(r-j.shield.maxClickDistance)/j.shield.fadeDistance;a=f.lerp(j.shield.dimOpacity,1,e)}}H.target=a;let s=f.lerp(H.current,H.target,j.shield.opacityLerp),c=Math.abs(s-H.target)<.002?H.target:s;ur(Math.abs(c-H.target)<=at?H.target:c),dr(o)}var $={active:!1,chargeStart:0,releaseStart:0,dist:0,currentDir:new e,velocity:new e};function Ei(e){G.frameId=null;let t=er(),n=G.renderRequested,r=sr(e),i=r||t;if(!i&&!n)return;if(V&&t&&(V.rotation.y+=j.sky.rotationSpeed),!_){lr(e,{skyOnly:!1,sceneAnimationActive:!0}),G.renderRequested=!1,i&&K();return}if(!r&&t&&!n){lr(e,{skyOnly:!0,sceneAnimationActive:!1}),G.renderRequested=!1,ar();return}let a=e-pi>j.parallax.idleTimeout;if(!v&&!y){let t=Z.forward;P.getWorldDirection(t),t.y=0,t.normalize();let n=Z.right.crossVectors(t,P.up).normalize(),r=Z.up,i=Z.rawDir.set(0,0,0);Q.w&&i.add(t),Q.s&&i.sub(t),Q.a&&i.sub(n),Q.d&&i.add(n),Q[` `]&&i.add(r),Q.control&&i.sub(r),i.lengthSq()>0?($.releaseStart=0,$.active?$.currentDir.lerp(i.normalize(),j.walk.dirLerp).normalize():($.chargeStart===0&&($.chargeStart=e),e-$.chargeStart>j.walk.chargeTime&&($.active=!0,$.dist=0,$.currentDir.copy(i.normalize())))):($.chargeStart=0,$.active&&($.releaseStart===0&&($.releaseStart=e),e-$.releaseStart>j.walk.releaseGrace&&($.active=!1)),a&&($.active=!1,$.releaseStart=0,$.currentDir.set(0,0,0),$.velocity.set(0,0,0))),$.active&&$.dist>=j.walk.maxDist&&($.active=!1);let o=Z.targetVel.set(0,0,0);if($.active?(o.copy($.currentDir).multiplyScalar(j.walk.speed),$.velocity.lerp(o,j.walk.acceleration)):($.velocity.lerp(o,j.walk.deceleration),nr($.velocity)&&$.velocity.set(0,0,0)),$.velocity.lengthSq()>1e-6){$.dist+=$.velocity.length();let e=Z.actualVel.copy($.velocity),t=j.walk.bounds,n=j.walk.dampingZone;e.x<0&&P.position.x-t.minX<n?e.x*=Math.max(0,(P.position.x-t.minX)/n):e.x>0&&t.maxX-P.position.x<n&&(e.x*=Math.max(0,(t.maxX-P.position.x)/n)),e.y<0&&P.position.y-t.minY<n?e.y*=Math.max(0,(P.position.y-t.minY)/n):e.y>0&&t.maxY-P.position.y<n&&(e.y*=Math.max(0,(t.maxY-P.position.y)/n)),e.z<0&&P.position.z-t.minZ<n?e.z*=Math.max(0,(P.position.z-t.minZ)/n):e.z>0&&t.maxZ-P.position.z<n&&(e.z*=Math.max(0,(t.maxZ-P.position.z)/n));let r=Z.nextPos.copy(P.position).add(e);r.x<=t.minX?(r.x=t.minX,$.velocity.x=0):r.x>=t.maxX&&(r.x=t.maxX,$.velocity.x=0),r.y<=t.minY?(r.y=t.minY,$.velocity.y=0):r.y>=t.maxY&&(r.y=t.maxY,$.velocity.y=0),r.z<=t.minZ?(r.z=t.minZ,$.velocity.z=0):r.z>=t.maxZ&&(r.z=t.maxZ,$.velocity.z=0);let i=Z.delta.subVectors(r,P.position);P.position.copy(r),kn.target.add(i)}}P.lookAt(kn.target);let o=Z.originalQuat.copy(P.quaternion);v||y||a||X.locked?X.targetMouse.lerp(Z.zeroMouse,j.parallax.catchupSpeed):X.targetMouse.lerp(Y,j.parallax.catchupSpeed);let s=Z.parallaxDiff.subVectors(X.targetMouse,X.currentMouse);X.velocity.add(s.multiplyScalar(j.parallax.springAccel)),X.velocity.multiplyScalar(1-j.parallax.springFriction),X.currentMouse.add(X.velocity),a&&(tr(X.targetMouse)&&X.targetMouse.set(0,0),tr(X.velocity)&&X.velocity.set(0,0),tr(X.currentMouse)&&tr(X.targetMouse)&&tr(X.velocity)&&X.currentMouse.set(0,0));let c=X.currentMouse.y*f.degToRad(j.parallax.maxAngle),l=-X.currentMouse.x*f.degToRad(j.parallax.maxAngle);P.rotateX(c),P.rotateY(l),lr(e,{skyOnly:t&&!r&&!n,sceneAnimationActive:r}),P.quaternion.copy(o),G.renderRequested=!1,r?K():t&&ar()}window.addEventListener(`resize`,()=>{Dt(),Zt(),$t(),P.aspect=O.aspect,P.updateProjectionMatrix(),St!==null&&window.clearTimeout(St),St=window.setTimeout(()=>{St=null,xn({forceRebuild:!0}),ri(),K()},ot),$n(),or()}),ui(),K();