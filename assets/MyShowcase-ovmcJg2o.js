import{i as e,n as t,t as n}from"./jsx-runtime-xty2or4m.js";import{a as r,n as i,t as a}from"./styled-components.browser.esm-UXiHu3Ep.js";import{t as o}from"./publicPath-CTds-oHY.js";var s=e(t(),1),c={fontFamily:`'Inter', 'Lucida Grande', 'Verdana', sans-serif`,fontSize:14,color:`#5d5d5d`,lineHeight:1.2,paragraphGap:18},l=i`
  font-family: ${c.fontFamily};
  font-size: ${c.fontSize}px;
  color: ${c.color};
  line-height: ${c.lineHeight};
  text-align: left;

  a {
    color: inherit;
    text-decoration: underline;
  }

  strong {
    font-weight: 600;
    color: inherit;
  }
`,u=r.p`
  ${l}
  margin: 0 0 ${c.paragraphGap}px;
`;function d(e){if(e===void 0)throw ReferenceError(`this hasn't been initialised - super() hasn't been called`);return e}function f(e,t){e.prototype=Object.create(t.prototype),e.prototype.constructor=e,e.__proto__=t}var p={autoSleep:120,force3D:`auto`,nullTargetWarn:1,units:{lineHeight:``}},m={duration:.5,overwrite:!1,delay:0},h,g,_,v=1e8,y=1/v,b=Math.PI*2,x=b/4,S=0,C=Math.sqrt,w=Math.cos,T=Math.sin,E=function(e){return typeof e==`string`},D=function(e){return typeof e==`function`},O=function(e){return typeof e==`number`},k=function(e){return e===void 0},A=function(e){return typeof e==`object`},j=function(e){return e!==!1},M=function(){return typeof window<`u`},N=function(e){return D(e)||E(e)},P=typeof ArrayBuffer==`function`&&ArrayBuffer.isView||function(){},F=Array.isArray,I=/random\([^)]+\)/g,L=/,\s*/g,R=/(?:-?\.?\d|\.)+/gi,ee=/[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,z=/[-+=.]*\d+[.e-]*\d*[a-z%]*/g,te=/[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,ne=/[+-]=-?[.\d]+/,re=/[^,'"\[\]\s]+/gi,ie=/^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,B,ae,oe,se,ce={},le={},ue,de=function(e){return(le=Be(e,ce))&&X},fe=function(e,t){return console.warn(`Invalid property`,e,`set to`,t,`Missing plugin? gsap.registerPlugin()`)},pe=function(e,t){return!t&&console.warn(e)},me=function(e,t){return e&&(ce[e]=t)&&le&&(le[e]=t)||ce},he=function(){return 0},ge={suppressEvents:!0,isStart:!0,kill:!1},_e={suppressEvents:!0,kill:!1},ve={suppressEvents:!0},ye={},be=[],xe={},Se,Ce={},we={},Te=30,Ee=[],De=``,Oe=function(e){var t=e[0],n,r;if(A(t)||D(t)||(e=[e]),!(n=(t._gsap||{}).harness)){for(r=Ee.length;r--&&!Ee[r].targetTest(t););n=Ee[r]}for(r=e.length;r--;)e[r]&&(e[r]._gsap||(e[r]._gsap=new mn(e[r],n)))||e.splice(r,1);return e},ke=function(e){return e._gsap||Oe(St(e))[0]._gsap},Ae=function(e,t,n){return(n=e[t])&&D(n)?e[t]():k(n)&&e.getAttribute&&e.getAttribute(t)||n},V=function(e,t){return(e=e.split(`,`)).forEach(t)||e},H=function(e){return Math.round(e*1e5)/1e5||0},U=function(e){return Math.round(e*1e7)/1e7||0},je=function(e,t){var n=t.charAt(0),r=parseFloat(t.substr(2));return e=parseFloat(e),n===`+`?e+r:n===`-`?e-r:n===`*`?e*r:e/r},Me=function(e,t){for(var n=t.length,r=0;e.indexOf(t[r])<0&&++r<n;);return r<n},Ne=function(){var e=be.length,t=be.slice(0),n,r;for(xe={},be.length=0,n=0;n<e;n++)r=t[n],r&&r._lazy&&(r.render(r._lazy[0],r._lazy[1],!0)._lazy=0)},Pe=function(e){return!!(e._initted||e._startAt||e.add)},Fe=function(e,t,n,r){be.length&&!g&&Ne(),e.render(t,n,r||!!(g&&t<0&&Pe(e))),be.length&&!g&&Ne()},Ie=function(e){var t=parseFloat(e);return(t||t===0)&&(e+``).match(re).length<2?t:E(e)?e.trim():e},Le=function(e){return e},Re=function(e,t){for(var n in t)n in e||(e[n]=t[n]);return e},ze=function(e){return function(t,n){for(var r in n)r in t||r===`duration`&&e||r===`ease`||(t[r]=n[r])}},Be=function(e,t){for(var n in t)e[n]=t[n];return e},Ve=function e(t,n){for(var r in n)r!==`__proto__`&&r!==`constructor`&&r!==`prototype`&&(t[r]=A(n[r])?e(t[r]||(t[r]={}),n[r]):n[r]);return t},He=function(e,t){var n={},r;for(r in e)r in t||(n[r]=e[r]);return n},Ue=function(e){var t=e.parent||B,n=e.keyframes?ze(F(e.keyframes)):Re;if(j(e.inherit))for(;t;)n(e,t.vars.defaults),t=t.parent||t._dp;return e},We=function(e,t){for(var n=e.length,r=n===t.length;r&&n--&&e[n]===t[n];);return n<0},Ge=function(e,t,n,r,i){n===void 0&&(n=`_first`),r===void 0&&(r=`_last`);var a=e[r],o;if(i)for(o=t[i];a&&a[i]>o;)a=a._prev;return a?(t._next=a._next,a._next=t):(t._next=e[n],e[n]=t),t._next?t._next._prev=t:e[r]=t,t._prev=a,t.parent=t._dp=e,t},Ke=function(e,t,n,r){n===void 0&&(n=`_first`),r===void 0&&(r=`_last`);var i=t._prev,a=t._next;i?i._next=a:e[n]===t&&(e[n]=a),a?a._prev=i:e[r]===t&&(e[r]=i),t._next=t._prev=t.parent=null},qe=function(e,t){e.parent&&(!t||e.parent.autoRemoveChildren)&&e.parent.remove&&e.parent.remove(e),e._act=0},Je=function(e,t){if(e&&(!t||t._end>e._dur||t._start<0))for(var n=e;n;)n._dirty=1,n=n.parent;return e},Ye=function(e){for(var t=e.parent;t&&t.parent;)t._dirty=1,t.totalDuration(),t=t.parent;return e},Xe=function(e,t,n,r){return e._startAt&&(g?e._startAt.revert(_e):e.vars.immediateRender&&!e.vars.autoRevert||e._startAt.render(t,!0,r))},Ze=function e(t){return!t||t._ts&&e(t.parent)},Qe=function(e){return e._repeat?$e(e._tTime,e=e.duration()+e._rDelay)*e:0},$e=function(e,t){var n=Math.floor(e=U(e/t));return e&&n===e?n-1:n},et=function(e,t){return(e-t._start)*t._ts+(t._ts>=0?0:t._dirty?t.totalDuration():t._tDur)},tt=function(e){return e._end=U(e._start+(e._tDur/Math.abs(e._ts||e._rts||y)||0))},nt=function(e,t){var n=e._dp;return n&&n.smoothChildTiming&&e._ts&&(e._start=U(n._time-(e._ts>0?t/e._ts:((e._dirty?e.totalDuration():e._tDur)-t)/-e._ts)),tt(e),n._dirty||Je(n,e)),e},rt=function(e,t){var n;if((t._time||!t._dur&&t._initted||t._start<e._time&&(t._dur||!t.add))&&(n=et(e.rawTime(),t),(!t._dur||_t(0,t.totalDuration(),n)-t._tTime>y)&&t.render(n,!0)),Je(e,t)._dp&&e._initted&&e._time>=e._dur&&e._ts){if(e._dur<e.duration())for(n=e;n._dp;)n.rawTime()>=0&&n.totalTime(n._tTime),n=n._dp;e._zTime=-y}},it=function(e,t,n,r){return t.parent&&qe(t),t._start=U((O(n)?n:n||e!==B?mt(e,n,t):e._time)+t._delay),t._end=U(t._start+(t.totalDuration()/Math.abs(t.timeScale())||0)),Ge(e,t,`_first`,`_last`,e._sort?`_start`:0),ct(t)||(e._recent=t),r||rt(e,t),e._ts<0&&nt(e,e._tTime),e},at=function(e,t){return(ce.ScrollTrigger||fe(`scrollTrigger`,t))&&ce.ScrollTrigger.create(t,e)},ot=function(e,t,n,r,i){if(Sn(e,t,i),!e._initted)return 1;if(!n&&e._pt&&!g&&(e._dur&&e.vars.lazy!==!1||!e._dur&&e.vars.lazy)&&Se!==$t.frame)return be.push(e),e._lazy=[i,r],1},st=function e(t){var n=t.parent;return n&&n._ts&&n._initted&&!n._lock&&(n.rawTime()<0||e(n))},ct=function(e){var t=e.data;return t===`isFromStart`||t===`isStart`},lt=function(e,t,n,r){var i=e.ratio,a=t<0||!t&&(!e._start&&st(e)&&!(!e._initted&&ct(e))||(e._ts<0||e._dp._ts<0)&&!ct(e))?0:1,o=e._rDelay,s=0,c,l,u;if(o&&e._repeat&&(s=_t(0,e._tDur,t),l=$e(s,o),e._yoyo&&l&1&&(a=1-a),l!==$e(e._tTime,o)&&(i=1-a,e.vars.repeatRefresh&&e._initted&&e.invalidate())),a!==i||g||r||e._zTime===y||!t&&e._zTime){if(!e._initted&&ot(e,t,r,n,s))return;for(u=e._zTime,e._zTime=t||(n?y:0),n||=t&&!u,e.ratio=a,e._from&&(a=1-a),e._time=0,e._tTime=s,c=e._pt;c;)c.r(a,c.d),c=c._next;t<0&&Xe(e,t,n,!0),e._onUpdate&&!n&&zt(e,`onUpdate`),s&&e._repeat&&!n&&e.parent&&zt(e,`onRepeat`),(t>=e._tDur||t<0)&&e.ratio===a&&(a&&qe(e,1),!n&&!g&&(zt(e,a?`onComplete`:`onReverseComplete`,!0),e._prom&&e._prom()))}else e._zTime||=t},ut=function(e,t,n){var r;if(n>t)for(r=e._first;r&&r._start<=n;){if(r.data===`isPause`&&r._start>t)return r;r=r._next}else for(r=e._last;r&&r._start>=n;){if(r.data===`isPause`&&r._start<t)return r;r=r._prev}},dt=function(e,t,n,r){var i=e._repeat,a=U(t)||0,o=e._tTime/e._tDur;return o&&!r&&(e._time*=a/e._dur),e._dur=a,e._tDur=i?i<0?1e10:U(a*(i+1)+e._rDelay*i):a,o>0&&!r&&nt(e,e._tTime=e._tDur*o),e.parent&&tt(e),n||Je(e.parent,e),e},ft=function(e){return e instanceof q?Je(e):dt(e,e._dur)},pt={_start:0,endTime:he,totalDuration:he},mt=function e(t,n,r){var i=t.labels,a=t._recent||pt,o=t.duration()>=v?a.endTime(!1):t._dur,s,c,l;return E(n)&&(isNaN(n)||n in i)?(c=n.charAt(0),l=n.substr(-1)===`%`,s=n.indexOf(`=`),c===`<`||c===`>`?(s>=0&&(n=n.replace(/=/,``)),(c===`<`?a._start:a.endTime(a._repeat>=0))+(parseFloat(n.substr(1))||0)*(l?(s<0?a:r).totalDuration()/100:1)):s<0?(n in i||(i[n]=o),i[n]):(c=parseFloat(n.charAt(s-1)+n.substr(s+1)),l&&r&&(c=c/100*(F(r)?r[0]:r).totalDuration()),s>1?e(t,n.substr(0,s-1),r)+c:o+c)):n==null?o:+n},ht=function(e,t,n){var r=O(t[1]),i=(r?2:1)+(e<2?0:1),a=t[i],o,s;if(r&&(a.duration=t[1]),a.parent=n,e){for(o=a,s=n;s&&!(`immediateRender`in o);)o=s.vars.defaults||{},s=j(s.vars.inherit)&&s.parent;a.immediateRender=j(o.immediateRender),e<2?a.runBackwards=1:a.startAt=t[i-1]}return new J(t[0],a,t[i+1])},gt=function(e,t){return e||e===0?t(e):t},_t=function(e,t,n){return n<e?e:n>t?t:n},W=function(e,t){return!E(e)||!(t=ie.exec(e))?``:t[1]},vt=function(e,t,n){return gt(n,function(n){return _t(e,t,n)})},yt=[].slice,bt=function(e,t){return e&&A(e)&&`length`in e&&(!t&&!e.length||e.length-1 in e&&A(e[0]))&&!e.nodeType&&e!==ae},xt=function(e,t,n){return n===void 0&&(n=[]),e.forEach(function(e){var r;return E(e)&&!t||bt(e,1)?(r=n).push.apply(r,St(e)):n.push(e)})||n},St=function(e,t,n){return _&&!t&&_.selector?_.selector(e):E(e)&&!n&&(oe||!en())?yt.call((t||se).querySelectorAll(e),0):F(e)?xt(e,n):bt(e)?yt.call(e,0):e?[e]:[]},Ct=function(e){return e=St(e)[0]||pe(`Invalid scope`)||{},function(t){var n=e.current||e.nativeElement||e;return St(t,n.querySelectorAll?n:n===e?pe(`Invalid scope`)||se.createElement(`div`):e)}},wt=function(e){return e.sort(function(){return .5-Math.random()})},Tt=function(e){if(D(e))return e;var t=A(e)?e:{each:e},n=ln(t.ease),r=t.from||0,i=parseFloat(t.base)||0,a={},o=r>0&&r<1,s=isNaN(r)||o,c=t.axis,l=r,u=r;return E(r)?l=u={center:.5,edges:.5,end:1}[r]||0:!o&&s&&(l=r[0],u=r[1]),function(e,o,d){var f=(d||t).length,p=a[f],m,h,g,_,y,b,x,S,w;if(!p){if(w=t.grid===`auto`?0:(t.grid||[1,v])[1],!w){for(x=-v;x<(x=d[w++].getBoundingClientRect().left)&&w<f;);w<f&&w--}for(p=a[f]=[],m=s?Math.min(w,f)*l-.5:r%w,h=w===v?0:s?f*u/w-.5:r/w|0,x=0,S=v,b=0;b<f;b++)g=b%w-m,_=h-(b/w|0),p[b]=y=c?Math.abs(c===`y`?_:g):C(g*g+_*_),y>x&&(x=y),y<S&&(S=y);r===`random`&&wt(p),p.max=x-S,p.min=S,p.v=f=(parseFloat(t.amount)||parseFloat(t.each)*(w>f?f-1:c?c===`y`?f/w:w:Math.max(w,f/w))||0)*(r===`edges`?-1:1),p.b=f<0?i-f:i,p.u=W(t.amount||t.each)||0,n=n&&f<0?sn(n):n}return f=(p[e]-p.min)/p.max||0,U(p.b+(n?n(f):f)*p.v)+p.u}},Et=function(e){var t=10**((e+``).split(`.`)[1]||``).length;return function(n){var r=U(Math.round(parseFloat(n)/e)*e*t);return(r-r%1)/t+(O(n)?0:W(n))}},Dt=function(e,t){var n=F(e),r,i;return!n&&A(e)&&(r=n=e.radius||v,e.values?(e=St(e.values),(i=!O(e[0]))&&(r*=r)):e=Et(e.increment)),gt(t,n?D(e)?function(t){return i=e(t),Math.abs(i-t)<=r?i:t}:function(t){for(var n=parseFloat(i?t.x:t),a=parseFloat(i?t.y:0),o=v,s=0,c=e.length,l,u;c--;)i?(l=e[c].x-n,u=e[c].y-a,l=l*l+u*u):l=Math.abs(e[c]-n),l<o&&(o=l,s=c);return s=!r||o<=r?e[s]:t,i||s===t||O(t)?s:s+W(t)}:Et(e))},Ot=function(e,t,n,r){return gt(F(e)?!t:n===!0?!!(n=0):!r,function(){return F(e)?e[~~(Math.random()*e.length)]:(n||=1e-5)&&(r=n<1?10**((n+``).length-2):1)&&Math.floor(Math.round((e-n/2+Math.random()*(t-e+n*.99))/n)*n*r)/r})},kt=function(){var e=[...arguments];return function(t){return e.reduce(function(e,t){return t(e)},t)}},At=function(e,t){return function(n){return e(parseFloat(n))+(t||W(n))}},jt=function(e,t,n){return It(e,t,0,1,n)},Mt=function(e,t,n){return gt(n,function(n){return e[~~t(n)]})},Nt=function e(t,n,r){var i=n-t;return F(t)?Mt(t,e(0,t.length),n):gt(r,function(e){return(i+(e-t)%i)%i+t})},Pt=function e(t,n,r){var i=n-t,a=i*2;return F(t)?Mt(t,e(0,t.length-1),n):gt(r,function(e){return e=(a+(e-t)%a)%a||0,t+(e>i?a-e:e)})},Ft=function(e){return e.replace(I,function(e){var t=e.indexOf(`[`)+1,n=e.substring(t||7,t?e.indexOf(`]`):e.length-1).split(L);return Ot(t?n:+n[0],t?0:+n[1],+n[2]||1e-5)})},It=function(e,t,n,r,i){var a=t-e,o=r-n;return gt(i,function(t){return n+((t-e)/a*o||0)})},Lt=function e(t,n,r,i){var a=isNaN(t+n)?0:function(e){return(1-e)*t+e*n};if(!a){var o=E(t),s={},c,l,u,d,f;if(r===!0&&(i=1)&&(r=null),o)t={p:t},n={p:n};else if(F(t)&&!F(n)){for(u=[],d=t.length,f=d-2,l=1;l<d;l++)u.push(e(t[l-1],t[l]));d--,a=function(e){e*=d;var t=Math.min(f,~~e);return u[t](e-t)},r=n}else i||(t=Be(F(t)?[]:{},t));if(!u){for(c in n)_n.call(s,t,c,`get`,n[c]);a=function(e){return Ln(e,s)||(o?t.p:t)}}}return gt(r,a)},Rt=function(e,t,n){var r=e.labels,i=v,a,o,s;for(a in r)o=r[a]-t,o<0==!!n&&o&&i>(o=Math.abs(o))&&(s=a,i=o);return s},zt=function(e,t,n){var r=e.vars,i=r[t],a=_,o=e._ctx,s,c,l;if(i)return s=r[t+`Params`],c=r.callbackScope||e,n&&be.length&&Ne(),o&&(_=o),l=s?i.apply(c,s):i.call(c),_=a,l},Bt=function(e){return qe(e),e.scrollTrigger&&e.scrollTrigger.kill(!!g),e.progress()<1&&zt(e,`onInterrupt`),e},Vt,Ht=[],Ut=function(e){if(e)if(e=!e.name&&e.default||e,M()||e.headless){var t=e.name,n=D(e),r=t&&!n&&e.init?function(){this._props=[]}:e,i={init:he,render:Ln,add:_n,kill:zn,modifier:Rn,rawVars:0},a={targetTest:0,get:0,getSetter:Nn,aliases:{},register:0};if(en(),e!==r){if(Ce[t])return;Re(r,Re(He(e,i),a)),Be(r.prototype,Be(i,He(e,a))),Ce[r.prop=t]=r,e.targetTest&&(Ee.push(r),ye[t]=1),t=(t===`css`?`CSS`:t.charAt(0).toUpperCase()+t.substr(1))+`Plugin`}me(t,r),e.register&&e.register(X,r,Y)}else Ht.push(e)},G=255,Wt={aqua:[0,G,G],lime:[0,G,0],silver:[192,192,192],black:[0,0,0],maroon:[128,0,0],teal:[0,128,128],blue:[0,0,G],navy:[0,0,128],white:[G,G,G],olive:[128,128,0],yellow:[G,G,0],orange:[G,165,0],gray:[128,128,128],purple:[128,0,128],green:[0,128,0],red:[G,0,0],pink:[G,192,203],cyan:[0,G,G],transparent:[G,G,G,0]},Gt=function(e,t,n){return e+=e<0?1:e>1?-1:0,(e*6<1?t+(n-t)*e*6:e<.5?n:e*3<2?t+(n-t)*(2/3-e)*6:t)*G+.5|0},Kt=function(e,t,n){var r=e?O(e)?[e>>16,e>>8&G,e&G]:0:Wt.black,i,a,o,s,c,l,u,d,f,p;if(!r){if(e.substr(-1)===`,`&&(e=e.substr(0,e.length-1)),Wt[e])r=Wt[e];else if(e.charAt(0)===`#`){if(e.length<6&&(i=e.charAt(1),a=e.charAt(2),o=e.charAt(3),e=`#`+i+i+a+a+o+o+(e.length===5?e.charAt(4)+e.charAt(4):``)),e.length===9)return r=parseInt(e.substr(1,6),16),[r>>16,r>>8&G,r&G,parseInt(e.substr(7),16)/255];e=parseInt(e.substr(1),16),r=[e>>16,e>>8&G,e&G]}else if(e.substr(0,3)===`hsl`){if(r=p=e.match(R),!t)s=r[0]%360/360,c=r[1]/100,l=r[2]/100,a=l<=.5?l*(c+1):l+c-l*c,i=l*2-a,r.length>3&&(r[3]*=1),r[0]=Gt(s+1/3,i,a),r[1]=Gt(s,i,a),r[2]=Gt(s-1/3,i,a);else if(~e.indexOf(`=`))return r=e.match(ee),n&&r.length<4&&(r[3]=1),r}else r=e.match(R)||Wt.transparent;r=r.map(Number)}return t&&!p&&(i=r[0]/G,a=r[1]/G,o=r[2]/G,u=Math.max(i,a,o),d=Math.min(i,a,o),l=(u+d)/2,u===d?s=c=0:(f=u-d,c=l>.5?f/(2-u-d):f/(u+d),s=u===i?(a-o)/f+(a<o?6:0):u===a?(o-i)/f+2:(i-a)/f+4,s*=60),r[0]=~~(s+.5),r[1]=~~(c*100+.5),r[2]=~~(l*100+.5)),n&&r.length<4&&(r[3]=1),r},qt=function(e){var t=[],n=[],r=-1;return e.split(Yt).forEach(function(e){var i=e.match(z)||[];t.push.apply(t,i),n.push(r+=i.length+1)}),t.c=n,t},Jt=function(e,t,n){var r=``,i=(e+r).match(Yt),a=t?`hsla(`:`rgba(`,o=0,s,c,l,u;if(!i)return e;if(i=i.map(function(e){return(e=Kt(e,t,1))&&a+(t?e[0]+`,`+e[1]+`%,`+e[2]+`%,`+e[3]:e.join(`,`))+`)`}),n&&(l=qt(e),s=n.c,s.join(r)!==l.c.join(r)))for(c=e.replace(Yt,`1`).split(z),u=c.length-1;o<u;o++)r+=c[o]+(~s.indexOf(o)?i.shift()||a+`0,0,0,0)`:(l.length?l:i.length?i:n).shift());if(!c)for(c=e.split(Yt),u=c.length-1;o<u;o++)r+=c[o]+i[o];return r+c[u]},Yt=function(){var e=`(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b`,t;for(t in Wt)e+=`|`+t+`\\b`;return RegExp(e+`)`,`gi`)}(),Xt=/hsl[a]?\(/,Zt=function(e){var t=e.join(` `),n;if(Yt.lastIndex=0,Yt.test(t))return n=Xt.test(t),e[1]=Jt(e[1],n),e[0]=Jt(e[0],n,qt(e[1])),!0},Qt,$t=function(){var e=Date.now,t=500,n=33,r=e(),i=r,a=1e3/240,o=a,s=[],c,l,u,d,f,p,m=function u(m){var h=e()-i,g=m===!0,_,v,y,b;if((h>t||h<0)&&(r+=h-n),i+=h,y=i-r,_=y-o,(_>0||g)&&(b=++d.frame,f=y-d.time*1e3,d.time=y/=1e3,o+=_+(_>=a?4:a-_),v=1),g||(c=l(u)),v)for(p=0;p<s.length;p++)s[p](y,f,b,m)};return d={time:0,frame:0,tick:function(){m(!0)},deltaRatio:function(e){return f/(1e3/(e||60))},wake:function(){ue&&(!oe&&M()&&(ae=oe=window,se=ae.document||{},ce.gsap=X,(ae.gsapVersions||=[]).push(X.version),de(le||ae.GreenSockGlobals||!ae.gsap&&ae||{}),Ht.forEach(Ut)),u=typeof requestAnimationFrame<`u`&&requestAnimationFrame,c&&d.sleep(),l=u||function(e){return setTimeout(e,o-d.time*1e3+1|0)},Qt=1,m(2))},sleep:function(){(u?cancelAnimationFrame:clearTimeout)(c),Qt=0,l=he},lagSmoothing:function(e,r){t=e||1/0,n=Math.min(r||33,t)},fps:function(e){a=1e3/(e||240),o=d.time*1e3+a},add:function(e,t,n){var r=t?function(t,n,i,a){e(t,n,i,a),d.remove(r)}:e;return d.remove(e),s[n?`unshift`:`push`](r),en(),r},remove:function(e,t){~(t=s.indexOf(e))&&s.splice(t,1)&&p>=t&&p--},_listeners:s},d}(),en=function(){return!Qt&&$t.wake()},K={},tn=/^[\d.\-M][\d.\-,\s]/,nn=/["']/g,rn=function(e){for(var t={},n=e.substr(1,e.length-3).split(`:`),r=n[0],i=1,a=n.length,o,s,c;i<a;i++)s=n[i],o=i===a-1?s.length:s.lastIndexOf(`,`),c=s.substr(0,o),t[r]=isNaN(c)?c.replace(nn,``).trim():+c,r=s.substr(o+1).trim();return t},an=function(e){var t=e.indexOf(`(`)+1,n=e.indexOf(`)`),r=e.indexOf(`(`,t);return e.substring(t,~r&&r<n?e.indexOf(`)`,n+1):n)},on=function(e){var t=(e+``).split(`(`),n=K[t[0]];return n&&t.length>1&&n.config?n.config.apply(null,~e.indexOf(`{`)?[rn(t[1])]:an(e).split(`,`).map(Ie)):K._CE&&tn.test(e)?K._CE(``,e):n},sn=function(e){return function(t){return 1-e(1-t)}},cn=function e(t,n){for(var r=t._first,i;r;)r instanceof q?e(r,n):r.vars.yoyoEase&&(!r._yoyo||!r._repeat)&&r._yoyo!==n&&(r.timeline?e(r.timeline,n):(i=r._ease,r._ease=r._yEase,r._yEase=i,r._yoyo=n)),r=r._next},ln=function(e,t){return e&&(D(e)?e:K[e]||on(e))||t},un=function(e,t,n,r){n===void 0&&(n=function(e){return 1-t(1-e)}),r===void 0&&(r=function(e){return e<.5?t(e*2)/2:1-t((1-e)*2)/2});var i={easeIn:t,easeOut:n,easeInOut:r},a;return V(e,function(e){for(var t in K[e]=ce[e]=i,K[a=e.toLowerCase()]=n,i)K[a+(t===`easeIn`?`.in`:t===`easeOut`?`.out`:`.inOut`)]=K[e+`.`+t]=i[t]}),i},dn=function(e){return function(t){return t<.5?(1-e(1-t*2))/2:.5+e((t-.5)*2)/2}},fn=function e(t,n,r){var i=n>=1?n:1,a=(r||(t?.3:.45))/(n<1?n:1),o=a/b*(Math.asin(1/i)||0),s=function(e){return e===1?1:i*2**(-10*e)*T((e-o)*a)+1},c=t===`out`?s:t===`in`?function(e){return 1-s(1-e)}:dn(s);return a=b/a,c.config=function(n,r){return e(t,n,r)},c},pn=function e(t,n){n===void 0&&(n=1.70158);var r=function(e){return e?--e*e*((n+1)*e+n)+1:0},i=t===`out`?r:t===`in`?function(e){return 1-r(1-e)}:dn(r);return i.config=function(n){return e(t,n)},i};V(`Linear,Quad,Cubic,Quart,Quint,Strong`,function(e,t){var n=t<5?t+1:t;un(e+`,Power`+(n-1),t?function(e){return e**+n}:function(e){return e},function(e){return 1-(1-e)**n},function(e){return e<.5?(e*2)**n/2:1-((1-e)*2)**n/2})}),K.Linear.easeNone=K.none=K.Linear.easeIn,un(`Elastic`,fn(`in`),fn(`out`),fn()),(function(e,t){var n=1/t,r=2*n,i=2.5*n,a=function(a){return a<n?e*a*a:a<r?e*(a-1.5/t)**2+.75:a<i?e*(a-=2.25/t)*a+.9375:e*(a-2.625/t)**2+.984375};un(`Bounce`,function(e){return 1-a(1-e)},a)})(7.5625,2.75),un(`Expo`,function(e){return 2**(10*(e-1))*e+e*e*e*e*e*e*(1-e)}),un(`Circ`,function(e){return-(C(1-e*e)-1)}),un(`Sine`,function(e){return e===1?1:-w(e*x)+1}),un(`Back`,pn(`in`),pn(`out`),pn()),K.SteppedEase=K.steps=ce.SteppedEase={config:function(e,t){e===void 0&&(e=1);var n=1/e,r=e+(t?0:1),i=t?1:0,a=1-y;return function(e){return((r*_t(0,a,e)|0)+i)*n}}},m.ease=K[`quad.out`],V(`onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt`,function(e){return De+=e+`,`+e+`Params,`});var mn=function(e,t){this.id=S++,e._gsap=this,this.target=e,this.harness=t,this.get=t?t.get:Ae,this.set=t?t.getSetter:Nn},hn=function(){function e(e){this.vars=e,this._delay=+e.delay||0,(this._repeat=e.repeat===1/0?-2:e.repeat||0)&&(this._rDelay=e.repeatDelay||0,this._yoyo=!!e.yoyo||!!e.yoyoEase),this._ts=1,dt(this,+e.duration,1,1),this.data=e.data,_&&(this._ctx=_,_.data.push(this)),Qt||$t.wake()}var t=e.prototype;return t.delay=function(e){return e||e===0?(this.parent&&this.parent.smoothChildTiming&&this.startTime(this._start+e-this._delay),this._delay=e,this):this._delay},t.duration=function(e){return arguments.length?this.totalDuration(this._repeat>0?e+(e+this._rDelay)*this._repeat:e):this.totalDuration()&&this._dur},t.totalDuration=function(e){return arguments.length?(this._dirty=0,dt(this,this._repeat<0?e:(e-this._repeat*this._rDelay)/(this._repeat+1))):this._tDur},t.totalTime=function(e,t){if(en(),!arguments.length)return this._tTime;var n=this._dp;if(n&&n.smoothChildTiming&&this._ts){for(nt(this,e),!n._dp||n.parent||rt(n,this);n&&n.parent;)n.parent._time!==n._start+(n._ts>=0?n._tTime/n._ts:(n.totalDuration()-n._tTime)/-n._ts)&&n.totalTime(n._tTime,!0),n=n.parent;!this.parent&&this._dp.autoRemoveChildren&&(this._ts>0&&e<this._tDur||this._ts<0&&e>0||!this._tDur&&!e)&&it(this._dp,this,this._start-this._delay)}return(this._tTime!==e||!this._dur&&!t||this._initted&&Math.abs(this._zTime)===y||!this._initted&&this._dur&&e||!e&&!this._initted&&(this.add||this._ptLookup))&&(this._ts||(this._pTime=e),Fe(this,e,t)),this},t.time=function(e,t){return arguments.length?this.totalTime(Math.min(this.totalDuration(),e+Qe(this))%(this._dur+this._rDelay)||(e?this._dur:0),t):this._time},t.totalProgress=function(e,t){return arguments.length?this.totalTime(this.totalDuration()*e,t):this.totalDuration()?Math.min(1,this._tTime/this._tDur):this.rawTime()>=0&&this._initted?1:0},t.progress=function(e,t){return arguments.length?this.totalTime(this.duration()*(this._yoyo&&!(this.iteration()&1)?1-e:e)+Qe(this),t):this.duration()?Math.min(1,this._time/this._dur):this.rawTime()>0?1:0},t.iteration=function(e,t){var n=this.duration()+this._rDelay;return arguments.length?this.totalTime(this._time+(e-1)*n,t):this._repeat?$e(this._tTime,n)+1:1},t.timeScale=function(e,t){if(!arguments.length)return this._rts===-y?0:this._rts;if(this._rts===e)return this;var n=this.parent&&this._ts?et(this.parent._time,this):this._tTime;return this._rts=+e||0,this._ts=this._ps||e===-y?0:this._rts,this.totalTime(_t(-Math.abs(this._delay),this.totalDuration(),n),t!==!1),tt(this),Ye(this)},t.paused=function(e){return arguments.length?(this._ps!==e&&(this._ps=e,e?(this._pTime=this._tTime||Math.max(-this._delay,this.rawTime()),this._ts=this._act=0):(en(),this._ts=this._rts,this.totalTime(this.parent&&!this.parent.smoothChildTiming?this.rawTime():this._tTime||this._pTime,this.progress()===1&&Math.abs(this._zTime)!==y&&(this._tTime-=y)))),this):this._ps},t.startTime=function(e){if(arguments.length){this._start=U(e);var t=this.parent||this._dp;return t&&(t._sort||!this.parent)&&it(t,this,this._start-this._delay),this}return this._start},t.endTime=function(e){return this._start+(j(e)?this.totalDuration():this.duration())/Math.abs(this._ts||1)},t.rawTime=function(e){var t=this.parent||this._dp;return t?e&&(!this._ts||this._repeat&&this._time&&this.totalProgress()<1)?this._tTime%(this._dur+this._rDelay):this._ts?et(t.rawTime(e),this):this._tTime:this._tTime},t.revert=function(e){e===void 0&&(e=ve);var t=g;return g=e,Pe(this)&&(this.timeline&&this.timeline.revert(e),this.totalTime(-.01,e.suppressEvents)),this.data!==`nested`&&e.kill!==!1&&this.kill(),g=t,this},t.globalTime=function(e){for(var t=this,n=arguments.length?e:t.rawTime();t;)n=t._start+n/(Math.abs(t._ts)||1),t=t._dp;return!this.parent&&this._sat?this._sat.globalTime(e):n},t.repeat=function(e){return arguments.length?(this._repeat=e===1/0?-2:e,ft(this)):this._repeat===-2?1/0:this._repeat},t.repeatDelay=function(e){if(arguments.length){var t=this._time;return this._rDelay=e,ft(this),t?this.time(t):this}return this._rDelay},t.yoyo=function(e){return arguments.length?(this._yoyo=e,this):this._yoyo},t.seek=function(e,t){return this.totalTime(mt(this,e),j(t))},t.restart=function(e,t){return this.play().totalTime(e?-this._delay:0,j(t)),this._dur||(this._zTime=-y),this},t.play=function(e,t){return e!=null&&this.seek(e,t),this.reversed(!1).paused(!1)},t.reverse=function(e,t){return e!=null&&this.seek(e||this.totalDuration(),t),this.reversed(!0).paused(!1)},t.pause=function(e,t){return e!=null&&this.seek(e,t),this.paused(!0)},t.resume=function(){return this.paused(!1)},t.reversed=function(e){return arguments.length?(!!e!==this.reversed()&&this.timeScale(-this._rts||(e?-y:0)),this):this._rts<0},t.invalidate=function(){return this._initted=this._act=0,this._zTime=-y,this},t.isActive=function(){var e=this.parent||this._dp,t=this._start,n;return!!(!e||this._ts&&this._initted&&e.isActive()&&(n=e.rawTime(!0))>=t&&n<this.endTime(!0)-y)},t.eventCallback=function(e,t,n){var r=this.vars;return arguments.length>1?(t?(r[e]=t,n&&(r[e+`Params`]=n),e===`onUpdate`&&(this._onUpdate=t)):delete r[e],this):r[e]},t.then=function(e){var t=this,n=t._prom;return new Promise(function(r){var i=D(e)?e:Le,a=function(){var e=t.then;t.then=null,n&&n(),D(i)&&(i=i(t))&&(i.then||i===t)&&(t.then=e),r(i),t.then=e};t._initted&&t.totalProgress()===1&&t._ts>=0||!t._tTime&&t._ts<0?a():t._prom=a})},t.kill=function(){Bt(this)},e}();Re(hn.prototype,{_time:0,_start:0,_end:0,_tTime:0,_tDur:0,_dirty:0,_repeat:0,_yoyo:!1,parent:null,_initted:!1,_rDelay:0,_ts:1,_dp:0,ratio:0,_zTime:-y,_prom:0,_ps:!1,_rts:1});var q=function(e){f(t,e);function t(t,n){var r;return t===void 0&&(t={}),r=e.call(this,t)||this,r.labels={},r.smoothChildTiming=!!t.smoothChildTiming,r.autoRemoveChildren=!!t.autoRemoveChildren,r._sort=j(t.sortChildren),B&&it(t.parent||B,d(r),n),t.reversed&&r.reverse(),t.paused&&r.paused(!0),t.scrollTrigger&&at(d(r),t.scrollTrigger),r}var n=t.prototype;return n.to=function(e,t,n){return ht(0,arguments,this),this},n.from=function(e,t,n){return ht(1,arguments,this),this},n.fromTo=function(e,t,n,r){return ht(2,arguments,this),this},n.set=function(e,t,n){return t.duration=0,t.parent=this,Ue(t).repeatDelay||(t.repeat=0),t.immediateRender=!!t.immediateRender,new J(e,t,mt(this,n),1),this},n.call=function(e,t,n){return it(this,J.delayedCall(0,e,t),n)},n.staggerTo=function(e,t,n,r,i,a,o){return n.duration=t,n.stagger=n.stagger||r,n.onComplete=a,n.onCompleteParams=o,n.parent=this,new J(e,n,mt(this,i)),this},n.staggerFrom=function(e,t,n,r,i,a,o){return n.runBackwards=1,Ue(n).immediateRender=j(n.immediateRender),this.staggerTo(e,t,n,r,i,a,o)},n.staggerFromTo=function(e,t,n,r,i,a,o,s){return r.startAt=n,Ue(r).immediateRender=j(r.immediateRender),this.staggerTo(e,t,r,i,a,o,s)},n.render=function(e,t,n){var r=this._time,i=this._dirty?this.totalDuration():this._tDur,a=this._dur,o=e<=0?0:U(e),s=this._zTime<0!=e<0&&(this._initted||!a),c,l,u,d,f,p,m,h,_,v,b,x;if(this!==B&&o>i&&e>=0&&(o=i),o!==this._tTime||n||s){if(r!==this._time&&a&&(o+=this._time-r,e+=this._time-r),c=o,_=this._start,h=this._ts,p=!h,s&&(a||(r=this._zTime),(e||!t)&&(this._zTime=e)),this._repeat){if(b=this._yoyo,f=a+this._rDelay,this._repeat<-1&&e<0)return this.totalTime(f*100+e,t,n);if(c=U(o%f),o===i?(d=this._repeat,c=a):(v=U(o/f),d=~~v,d&&d===v&&(c=a,d--),c>a&&(c=a)),v=$e(this._tTime,f),!r&&this._tTime&&v!==d&&this._tTime-v*f-this._dur<=0&&(v=d),b&&d&1&&(c=a-c,x=1),d!==v&&!this._lock){var S=b&&v&1,C=S===(b&&d&1);if(d<v&&(S=!S),r=S?0:o%a?a:o,this._lock=1,this.render(r||(x?0:U(d*f)),t,!a)._lock=0,this._tTime=o,!t&&this.parent&&zt(this,`onRepeat`),this.vars.repeatRefresh&&!x&&(this.invalidate()._lock=1,v=d),r&&r!==this._time||p!==!this._ts||this.vars.onRepeat&&!this.parent&&!this._act||(a=this._dur,i=this._tDur,C&&(this._lock=2,r=S?a:-1e-4,this.render(r,!0),this.vars.repeatRefresh&&!x&&this.invalidate()),this._lock=0,!this._ts&&!p))return this;cn(this,x)}}if(this._hasPause&&!this._forcing&&this._lock<2&&(m=ut(this,U(r),U(c)),m&&(o-=c-(c=m._start))),this._tTime=o,this._time=c,this._act=!h,this._initted||(this._onUpdate=this.vars.onUpdate,this._initted=1,this._zTime=e,r=0),!r&&o&&a&&!t&&!v&&(zt(this,`onStart`),this._tTime!==o))return this;if(c>=r&&e>=0)for(l=this._first;l;){if(u=l._next,(l._act||c>=l._start)&&l._ts&&m!==l){if(l.parent!==this)return this.render(e,t,n);if(l.render(l._ts>0?(c-l._start)*l._ts:(l._dirty?l.totalDuration():l._tDur)+(c-l._start)*l._ts,t,n),c!==this._time||!this._ts&&!p){m=0,u&&(o+=this._zTime=-y);break}}l=u}else{l=this._last;for(var w=e<0?e:c;l;){if(u=l._prev,(l._act||w<=l._end)&&l._ts&&m!==l){if(l.parent!==this)return this.render(e,t,n);if(l.render(l._ts>0?(w-l._start)*l._ts:(l._dirty?l.totalDuration():l._tDur)+(w-l._start)*l._ts,t,n||g&&Pe(l)),c!==this._time||!this._ts&&!p){m=0,u&&(o+=this._zTime=w?-y:y);break}}l=u}}if(m&&!t&&(this.pause(),m.render(c>=r?0:-y)._zTime=c>=r?1:-1,this._ts))return this._start=_,tt(this),this.render(e,t,n);this._onUpdate&&!t&&zt(this,`onUpdate`,!0),(o===i&&this._tTime>=this.totalDuration()||!o&&r)&&(_===this._start||Math.abs(h)!==Math.abs(this._ts))&&(this._lock||((e||!a)&&(o===i&&this._ts>0||!o&&this._ts<0)&&qe(this,1),!t&&!(e<0&&!r)&&(o||r||!i)&&(zt(this,o===i&&e>=0?`onComplete`:`onReverseComplete`,!0),this._prom&&!(o<i&&this.timeScale()>0)&&this._prom())))}return this},n.add=function(e,t){var n=this;if(O(t)||(t=mt(this,t,e)),!(e instanceof hn)){if(F(e))return e.forEach(function(e){return n.add(e,t)}),this;if(E(e))return this.addLabel(e,t);if(D(e))e=J.delayedCall(0,e);else return this}return this===e?this:it(this,e,t)},n.getChildren=function(e,t,n,r){e===void 0&&(e=!0),t===void 0&&(t=!0),n===void 0&&(n=!0),r===void 0&&(r=-v);for(var i=[],a=this._first;a;)a._start>=r&&(a instanceof J?t&&i.push(a):(n&&i.push(a),e&&i.push.apply(i,a.getChildren(!0,t,n)))),a=a._next;return i},n.getById=function(e){for(var t=this.getChildren(1,1,1),n=t.length;n--;)if(t[n].vars.id===e)return t[n]},n.remove=function(e){return E(e)?this.removeLabel(e):D(e)?this.killTweensOf(e):(e.parent===this&&Ke(this,e),e===this._recent&&(this._recent=this._last),Je(this))},n.totalTime=function(t,n){return arguments.length?(this._forcing=1,!this._dp&&this._ts&&(this._start=U($t.time-(this._ts>0?t/this._ts:(this.totalDuration()-t)/-this._ts))),e.prototype.totalTime.call(this,t,n),this._forcing=0,this):this._tTime},n.addLabel=function(e,t){return this.labels[e]=mt(this,t),this},n.removeLabel=function(e){return delete this.labels[e],this},n.addPause=function(e,t,n){var r=J.delayedCall(0,t||he,n);return r.data=`isPause`,this._hasPause=1,it(this,r,mt(this,e))},n.removePause=function(e){var t=this._first;for(e=mt(this,e);t;)t._start===e&&t.data===`isPause`&&qe(t),t=t._next},n.killTweensOf=function(e,t,n){for(var r=this.getTweensOf(e,n),i=r.length;i--;)bn!==r[i]&&r[i].kill(e,t);return this},n.getTweensOf=function(e,t){for(var n=[],r=St(e),i=this._first,a=O(t),o;i;)i instanceof J?Me(i._targets,r)&&(a?(!bn||i._initted&&i._ts)&&i.globalTime(0)<=t&&i.globalTime(i.totalDuration())>t:!t||i.isActive())&&n.push(i):(o=i.getTweensOf(r,t)).length&&n.push.apply(n,o),i=i._next;return n},n.tweenTo=function(e,t){t||={};var n=this,r=mt(n,e),i=t,a=i.startAt,o=i.onStart,s=i.onStartParams,c=i.immediateRender,l,u=J.to(n,Re({ease:t.ease||`none`,lazy:!1,immediateRender:!1,time:r,overwrite:`auto`,duration:t.duration||Math.abs((r-(a&&`time`in a?a.time:n._time))/n.timeScale())||y,onStart:function(){if(n.pause(),!l){var e=t.duration||Math.abs((r-(a&&`time`in a?a.time:n._time))/n.timeScale());u._dur!==e&&dt(u,e,0,1).render(u._time,!0,!0),l=1}o&&o.apply(u,s||[])}},t));return c?u.render(0):u},n.tweenFromTo=function(e,t,n){return this.tweenTo(t,Re({startAt:{time:mt(this,e)}},n))},n.recent=function(){return this._recent},n.nextLabel=function(e){return e===void 0&&(e=this._time),Rt(this,mt(this,e))},n.previousLabel=function(e){return e===void 0&&(e=this._time),Rt(this,mt(this,e),1)},n.currentLabel=function(e){return arguments.length?this.seek(e,!0):this.previousLabel(this._time+y)},n.shiftChildren=function(e,t,n){n===void 0&&(n=0);var r=this._first,i=this.labels,a;for(e=U(e);r;)r._start>=n&&(r._start+=e,r._end+=e),r=r._next;if(t)for(a in i)i[a]>=n&&(i[a]+=e);return Je(this)},n.invalidate=function(t){var n=this._first;for(this._lock=0;n;)n.invalidate(t),n=n._next;return e.prototype.invalidate.call(this,t)},n.clear=function(e){e===void 0&&(e=!0);for(var t=this._first,n;t;)n=t._next,this.remove(t),t=n;return this._dp&&(this._time=this._tTime=this._pTime=0),e&&(this.labels={}),Je(this)},n.totalDuration=function(e){var t=0,n=this,r=n._last,i=v,a,o,s;if(arguments.length)return n.timeScale((n._repeat<0?n.duration():n.totalDuration())/(n.reversed()?-e:e));if(n._dirty){for(s=n.parent;r;)a=r._prev,r._dirty&&r.totalDuration(),o=r._start,o>i&&n._sort&&r._ts&&!n._lock?(n._lock=1,it(n,r,o-r._delay,1)._lock=0):i=o,o<0&&r._ts&&(t-=o,(!s&&!n._dp||s&&s.smoothChildTiming)&&(n._start+=U(o/n._ts),n._time-=o,n._tTime-=o),n.shiftChildren(-o,!1,-1/0),i=0),r._end>t&&r._ts&&(t=r._end),r=a;dt(n,n===B&&n._time>t?n._time:t,1,1),n._dirty=0}return n._tDur},t.updateRoot=function(e){if(B._ts&&(Fe(B,et(e,B)),Se=$t.frame),$t.frame>=Te){Te+=p.autoSleep||120;var t=B._first;if((!t||!t._ts)&&p.autoSleep&&$t._listeners.length<2){for(;t&&!t._ts;)t=t._next;t||$t.sleep()}}},t}(hn);Re(q.prototype,{_lock:0,_hasPause:0,_forcing:0});var gn=function(e,t,n,r,i,a,o){var s=new Y(this._pt,e,t,0,1,In,null,i),c=0,l=0,u,d,f,p,m,h,g,_;for(s.b=n,s.e=r,n+=``,r+=``,(g=~r.indexOf(`random(`))&&(r=Ft(r)),a&&(_=[n,r],a(_,e,t),n=_[0],r=_[1]),d=n.match(te)||[];u=te.exec(r);)p=u[0],m=r.substring(c,u.index),f?f=(f+1)%5:m.substr(-5)===`rgba(`&&(f=1),p!==d[l++]&&(h=parseFloat(d[l-1])||0,s._pt={_next:s._pt,p:m||l===1?m:`,`,s:h,c:p.charAt(1)===`=`?je(h,p)-h:parseFloat(p)-h,m:f&&f<4?Math.round:0},c=te.lastIndex);return s.c=c<r.length?r.substring(c,r.length):``,s.fp=o,(ne.test(r)||g)&&(s.e=0),this._pt=s,s},_n=function(e,t,n,r,i,a,o,s,c,l){D(r)&&(r=r(i||0,e,a));var u=e[t],d=n===`get`?D(u)?c?e[t.indexOf(`set`)||!D(e[`get`+t.substr(3)])?t:`get`+t.substr(3)](c):e[t]():u:n,f=D(u)?c?jn:An:kn,m;if(E(r)&&(~r.indexOf(`random(`)&&(r=Ft(r)),r.charAt(1)===`=`&&(m=je(d,r)+(W(d)||0),(m||m===0)&&(r=m))),!l||d!==r||xn)return!isNaN(d*r)&&r!==``?(m=new Y(this._pt,e,t,+d||0,r-(d||0),typeof u==`boolean`?Fn:Pn,0,f),c&&(m.fp=c),o&&m.modifier(o,this,e),this._pt=m):(!u&&!(t in e)&&fe(t,r),gn.call(this,e,t,d,r,f,s||p.stringFilter,c))},vn=function(e,t,n,r,i){if(D(e)&&(e=En(e,i,t,n,r)),!A(e)||e.style&&e.nodeType||F(e)||P(e))return E(e)?En(e,i,t,n,r):e;var a={},o;for(o in e)a[o]=En(e[o],i,t,n,r);return a},yn=function(e,t,n,r,i,a){var o,s,c,l;if(Ce[e]&&(o=new Ce[e]).init(i,o.rawVars?t[e]:vn(t[e],r,i,a,n),n,r,a)!==!1&&(n._pt=s=new Y(n._pt,i,e,0,1,o.render,o,0,o.priority),n!==Vt))for(c=n._ptLookup[n._targets.indexOf(i)],l=o._props.length;l--;)c[o._props[l]]=s;return o},bn,xn,Sn=function e(t,n,r){var i=t.vars,a=i.ease,o=i.startAt,s=i.immediateRender,c=i.lazy,l=i.onUpdate,u=i.runBackwards,d=i.yoyoEase,f=i.keyframes,p=i.autoRevert,_=t._dur,b=t._startAt,x=t._targets,S=t.parent,C=S&&S.data===`nested`?S.vars.targets:x,w=t._overwrite===`auto`&&!h,T=t.timeline,E,D,O,k,A,M,N,P,F,I,L,R,ee;if(T&&(!f||!a)&&(a=`none`),t._ease=ln(a,m.ease),t._yEase=d?sn(ln(d===!0?a:d,m.ease)):0,d&&t._yoyo&&!t._repeat&&(d=t._yEase,t._yEase=t._ease,t._ease=d),t._from=!T&&!!i.runBackwards,!T||f&&!i.stagger){if(P=x[0]?ke(x[0]).harness:0,R=P&&i[P.prop],E=He(i,ye),b&&(b._zTime<0&&b.progress(1),n<0&&u&&s&&!p?b.render(-1,!0):b.revert(u&&_?_e:ge),b._lazy=0),o){if(qe(t._startAt=J.set(x,Re({data:`isStart`,overwrite:!1,parent:S,immediateRender:!0,lazy:!b&&j(c),startAt:null,delay:0,onUpdate:l&&function(){return zt(t,`onUpdate`)},stagger:0},o))),t._startAt._dp=0,t._startAt._sat=t,n<0&&(g||!s&&!p)&&t._startAt.revert(_e),s&&_&&n<=0&&r<=0){n&&(t._zTime=n);return}}else if(u&&_&&!b){if(n&&(s=!1),O=Re({overwrite:!1,data:`isFromStart`,lazy:s&&!b&&j(c),immediateRender:s,stagger:0,parent:S},E),R&&(O[P.prop]=R),qe(t._startAt=J.set(x,O)),t._startAt._dp=0,t._startAt._sat=t,n<0&&(g?t._startAt.revert(_e):t._startAt.render(-1,!0)),t._zTime=n,!s)e(t._startAt,y,y);else if(!n)return}for(t._pt=t._ptCache=0,c=_&&j(c)||c&&!_,D=0;D<x.length;D++){if(A=x[D],N=A._gsap||Oe(x)[D]._gsap,t._ptLookup[D]=I={},xe[N.id]&&be.length&&Ne(),L=C===x?D:C.indexOf(A),P&&(F=new P).init(A,R||E,t,L,C)!==!1&&(t._pt=k=new Y(t._pt,A,F.name,0,1,F.render,F,0,F.priority),F._props.forEach(function(e){I[e]=k}),F.priority&&(M=1)),!P||R)for(O in E)Ce[O]&&(F=yn(O,E,t,L,A,C))?F.priority&&(M=1):I[O]=k=_n.call(t,A,O,`get`,E[O],L,C,0,i.stringFilter);t._op&&t._op[D]&&t.kill(A,t._op[D]),w&&t._pt&&(bn=t,B.killTweensOf(A,I,t.globalTime(n)),ee=!t.parent,bn=0),t._pt&&c&&(xe[N.id]=1)}M&&Vn(t),t._onInit&&t._onInit(t)}t._onUpdate=l,t._initted=(!t._op||t._pt)&&!ee,f&&n<=0&&T.render(v,!0,!0)},Cn=function(e,t,n,r,i,a,o,s){var c=(e._pt&&e._ptCache||(e._ptCache={}))[t],l,u,d,f;if(!c)for(c=e._ptCache[t]=[],d=e._ptLookup,f=e._targets.length;f--;){if(l=d[f][t],l&&l.d&&l.d._pt)for(l=l.d._pt;l&&l.p!==t&&l.fp!==t;)l=l._next;if(!l)return xn=1,e.vars[t]=`+=0`,Sn(e,o),xn=0,s?pe(t+` not eligible for reset`):1;c.push(l)}for(f=c.length;f--;)u=c[f],l=u._pt||u,l.s=(r||r===0)&&!i?r:l.s+(r||0)+a*l.c,l.c=n-l.s,u.e&&=H(n)+W(u.e),u.b&&=l.s+W(u.b)},wn=function(e,t){var n=e[0]?ke(e[0]).harness:0,r=n&&n.aliases,i,a,o,s;if(!r)return t;for(a in i=Be({},t),r)if(a in i)for(s=r[a].split(`,`),o=s.length;o--;)i[s[o]]=i[a];return i},Tn=function(e,t,n,r){var i=t.ease||r||`power1.inOut`,a,o;if(F(t))o=n[e]||(n[e]=[]),t.forEach(function(e,n){return o.push({t:n/(t.length-1)*100,v:e,e:i})});else for(a in t)o=n[a]||(n[a]=[]),a===`ease`||o.push({t:parseFloat(e),v:t[a],e:i})},En=function(e,t,n,r,i){return D(e)?e.call(t,n,r,i):E(e)&&~e.indexOf(`random(`)?Ft(e):e},Dn=De+`repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,autoRevert`,On={};V(Dn+`,id,stagger,delay,duration,paused,scrollTrigger`,function(e){return On[e]=1});var J=function(e){f(t,e);function t(t,n,r,i){var a;typeof n==`number`&&(r.duration=n,n=r,r=null),a=e.call(this,i?n:Ue(n))||this;var o=a.vars,s=o.duration,c=o.delay,l=o.immediateRender,u=o.stagger,f=o.overwrite,m=o.keyframes,g=o.defaults,_=o.scrollTrigger,v=o.yoyoEase,b=n.parent||B,x=(F(t)||P(t)?O(t[0]):`length`in n)?[t]:St(t),S,C,w,T,E,D,k,M;if(a._targets=x.length?Oe(x):pe(`GSAP target `+t+` not found. https://gsap.com`,!p.nullTargetWarn)||[],a._ptLookup=[],a._overwrite=f,m||u||N(s)||N(c)){if(n=a.vars,S=a.timeline=new q({data:`nested`,defaults:g||{},targets:b&&b.data===`nested`?b.vars.targets:x}),S.kill(),S.parent=S._dp=d(a),S._start=0,u||N(s)||N(c)){if(T=x.length,k=u&&Tt(u),A(u))for(E in u)~Dn.indexOf(E)&&(M||={},M[E]=u[E]);for(C=0;C<T;C++)w=He(n,On),w.stagger=0,v&&(w.yoyoEase=v),M&&Be(w,M),D=x[C],w.duration=+En(s,d(a),C,D,x),w.delay=(+En(c,d(a),C,D,x)||0)-a._delay,!u&&T===1&&w.delay&&(a._delay=c=w.delay,a._start+=c,w.delay=0),S.to(D,w,k?k(C,D,x):0),S._ease=K.none;S.duration()?s=c=0:a.timeline=0}else if(m){Ue(Re(S.vars.defaults,{ease:`none`})),S._ease=ln(m.ease||n.ease||`none`);var I=0,L,R,ee;if(F(m))m.forEach(function(e){return S.to(x,e,`>`)}),S.duration();else{for(E in w={},m)E===`ease`||E===`easeEach`||Tn(E,m[E],w,m.easeEach);for(E in w)for(L=w[E].sort(function(e,t){return e.t-t.t}),I=0,C=0;C<L.length;C++)R=L[C],ee={ease:R.e,duration:(R.t-(C?L[C-1].t:0))/100*s},ee[E]=R.v,S.to(x,ee,I),I+=ee.duration;S.duration()<s&&S.to({},{duration:s-S.duration()})}}s||a.duration(s=S.duration())}else a.timeline=0;return f===!0&&!h&&(bn=d(a),B.killTweensOf(x),bn=0),it(b,d(a),r),n.reversed&&a.reverse(),n.paused&&a.paused(!0),(l||!s&&!m&&a._start===U(b._time)&&j(l)&&Ze(d(a))&&b.data!==`nested`)&&(a._tTime=-y,a.render(Math.max(0,-c)||0)),_&&at(d(a),_),a}var n=t.prototype;return n.render=function(e,t,n){var r=this._time,i=this._tDur,a=this._dur,o=e<0,s=e>i-y&&!o?i:e<y?0:e,c,l,u,d,f,p,m,h,g;if(!a)lt(this,e,t,n);else if(s!==this._tTime||!e||n||!this._initted&&this._tTime||this._startAt&&this._zTime<0!==o||this._lazy){if(c=s,h=this.timeline,this._repeat){if(d=a+this._rDelay,this._repeat<-1&&o)return this.totalTime(d*100+e,t,n);if(c=U(s%d),s===i?(u=this._repeat,c=a):(f=U(s/d),u=~~f,u&&u===f?(c=a,u--):c>a&&(c=a)),p=this._yoyo&&u&1,p&&(g=this._yEase,c=a-c),f=$e(this._tTime,d),c===r&&!n&&this._initted&&u===f)return this._tTime=s,this;u!==f&&(h&&this._yEase&&cn(h,p),this.vars.repeatRefresh&&!p&&!this._lock&&c!==d&&this._initted&&(this._lock=n=1,this.render(U(d*u),!0).invalidate()._lock=0))}if(!this._initted){if(ot(this,o?e:c,n,t,s))return this._tTime=0,this;if(r!==this._time&&!(n&&this.vars.repeatRefresh&&u!==f))return this;if(a!==this._dur)return this.render(e,t,n)}if(this._tTime=s,this._time=c,!this._act&&this._ts&&(this._act=1,this._lazy=0),this.ratio=m=(g||this._ease)(c/a),this._from&&(this.ratio=m=1-m),!r&&s&&!t&&!f&&(zt(this,`onStart`),this._tTime!==s))return this;for(l=this._pt;l;)l.r(m,l.d),l=l._next;h&&h.render(e<0?e:h._dur*h._ease(c/this._dur),t,n)||this._startAt&&(this._zTime=e),this._onUpdate&&!t&&(o&&Xe(this,e,t,n),zt(this,`onUpdate`)),this._repeat&&u!==f&&this.vars.onRepeat&&!t&&this.parent&&zt(this,`onRepeat`),(s===this._tDur||!s)&&this._tTime===s&&(o&&!this._onUpdate&&Xe(this,e,!0,!0),(e||!a)&&(s===this._tDur&&this._ts>0||!s&&this._ts<0)&&qe(this,1),!t&&!(o&&!r)&&(s||r||p)&&(zt(this,s===i?`onComplete`:`onReverseComplete`,!0),this._prom&&!(s<i&&this.timeScale()>0)&&this._prom()))}return this},n.targets=function(){return this._targets},n.invalidate=function(t){return(!t||!this.vars.runBackwards)&&(this._startAt=0),this._pt=this._op=this._onUpdate=this._lazy=this.ratio=0,this._ptLookup=[],this.timeline&&this.timeline.invalidate(t),e.prototype.invalidate.call(this,t)},n.resetTo=function(e,t,n,r,i){Qt||$t.wake(),this._ts||this.play();var a=Math.min(this._dur,(this._dp._time-this._start)*this._ts),o;return this._initted||Sn(this,a),o=this._ease(a/this._dur),Cn(this,e,t,n,r,o,a,i)?this.resetTo(e,t,n,r,1):(nt(this,0),this.parent||Ge(this._dp,this,`_first`,`_last`,this._dp._sort?`_start`:0),this.render(0))},n.kill=function(e,t){if(t===void 0&&(t=`all`),!e&&(!t||t===`all`))return this._lazy=this._pt=0,this.parent?Bt(this):this.scrollTrigger&&this.scrollTrigger.kill(!!g),this;if(this.timeline){var n=this.timeline.totalDuration();return this.timeline.killTweensOf(e,t,bn&&bn.vars.overwrite!==!0)._first||Bt(this),this.parent&&n!==this.timeline.totalDuration()&&dt(this,this._dur*this.timeline._tDur/n,0,1),this}var r=this._targets,i=e?St(e):r,a=this._ptLookup,o=this._pt,s,c,l,u,d,f,p;if((!t||t===`all`)&&We(r,i))return t===`all`&&(this._pt=0),Bt(this);for(s=this._op=this._op||[],t!==`all`&&(E(t)&&(d={},V(t,function(e){return d[e]=1}),t=d),t=wn(r,t)),p=r.length;p--;)if(~i.indexOf(r[p]))for(d in c=a[p],t===`all`?(s[p]=t,u=c,l={}):(l=s[p]=s[p]||{},u=t),u)f=c&&c[d],f&&((!(`kill`in f.d)||f.d.kill(d)===!0)&&Ke(this,f,`_pt`),delete c[d]),l!==`all`&&(l[d]=1);return this._initted&&!this._pt&&o&&Bt(this),this},t.to=function(e,n){return new t(e,n,arguments[2])},t.from=function(e,t){return ht(1,arguments)},t.delayedCall=function(e,n,r,i){return new t(n,0,{immediateRender:!1,lazy:!1,overwrite:!1,delay:e,onComplete:n,onReverseComplete:n,onCompleteParams:r,onReverseCompleteParams:r,callbackScope:i})},t.fromTo=function(e,t,n){return ht(2,arguments)},t.set=function(e,n){return n.duration=0,n.repeatDelay||(n.repeat=0),new t(e,n)},t.killTweensOf=function(e,t,n){return B.killTweensOf(e,t,n)},t}(hn);Re(J.prototype,{_targets:[],_lazy:0,_startAt:0,_op:0,_onInit:0}),V(`staggerTo,staggerFrom,staggerFromTo`,function(e){J[e]=function(){var t=new q,n=yt.call(arguments,0);return n.splice(e===`staggerFromTo`?5:4,0,0),t[e].apply(t,n)}});var kn=function(e,t,n){return e[t]=n},An=function(e,t,n){return e[t](n)},jn=function(e,t,n,r){return e[t](r.fp,n)},Mn=function(e,t,n){return e.setAttribute(t,n)},Nn=function(e,t){return D(e[t])?An:k(e[t])&&e.setAttribute?Mn:kn},Pn=function(e,t){return t.set(t.t,t.p,Math.round((t.s+t.c*e)*1e6)/1e6,t)},Fn=function(e,t){return t.set(t.t,t.p,!!(t.s+t.c*e),t)},In=function(e,t){var n=t._pt,r=``;if(!e&&t.b)r=t.b;else if(e===1&&t.e)r=t.e;else{for(;n;)r=n.p+(n.m?n.m(n.s+n.c*e):Math.round((n.s+n.c*e)*1e4)/1e4)+r,n=n._next;r+=t.c}t.set(t.t,t.p,r,t)},Ln=function(e,t){for(var n=t._pt;n;)n.r(e,n.d),n=n._next},Rn=function(e,t,n,r){for(var i=this._pt,a;i;)a=i._next,i.p===r&&i.modifier(e,t,n),i=a},zn=function(e){for(var t=this._pt,n,r;t;)r=t._next,t.p===e&&!t.op||t.op===e?Ke(this,t,`_pt`):t.dep||(n=1),t=r;return!n},Bn=function(e,t,n,r){r.mSet(e,t,r.m.call(r.tween,n,r.mt),r)},Vn=function(e){for(var t=e._pt,n,r,i,a;t;){for(n=t._next,r=i;r&&r.pr>t.pr;)r=r._next;(t._prev=r?r._prev:a)?t._prev._next=t:i=t,(t._next=r)?r._prev=t:a=t,t=n}e._pt=i},Y=function(){function e(e,t,n,r,i,a,o,s,c){this.t=t,this.s=r,this.c=i,this.p=n,this.r=a||Pn,this.d=o||this,this.set=s||kn,this.pr=c||0,this._next=e,e&&(e._prev=this)}var t=e.prototype;return t.modifier=function(e,t,n){this.mSet=this.mSet||this.set,this.set=Bn,this.m=e,this.mt=n,this.tween=t},e}();V(De+`parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger`,function(e){return ye[e]=1}),ce.TweenMax=ce.TweenLite=J,ce.TimelineLite=ce.TimelineMax=q,B=new q({sortChildren:!1,defaults:m,autoRemoveChildren:!0,id:`root`,smoothChildTiming:!0}),p.stringFilter=Zt;var Hn=[],Un={},Wn=[],Gn=0,Kn=0,qn=function(e){return(Un[e]||Wn).map(function(e){return e()})},Jn=function(){var e=Date.now(),t=[];e-Gn>2&&(qn(`matchMediaInit`),Hn.forEach(function(e){var n=e.queries,r=e.conditions,i,a,o,s;for(a in n)i=ae.matchMedia(n[a]).matches,i&&(o=1),i!==r[a]&&(r[a]=i,s=1);s&&(e.revert(),o&&t.push(e))}),qn(`matchMediaRevert`),t.forEach(function(e){return e.onMatch(e,function(t){return e.add(null,t)})}),Gn=e,qn(`matchMedia`))},Yn=function(){function e(e,t){this.selector=t&&Ct(t),this.data=[],this._r=[],this.isReverted=!1,this.id=Kn++,e&&this.add(e)}var t=e.prototype;return t.add=function(e,t,n){D(e)&&(n=t,t=e,e=D);var r=this,i=function(){var e=_,i=r.selector,a;return e&&e!==r&&e.data.push(r),n&&(r.selector=Ct(n)),_=r,a=t.apply(r,arguments),D(a)&&r._r.push(a),_=e,r.selector=i,r.isReverted=!1,a};return r.last=i,e===D?i(r,function(e){return r.add(null,e)}):e?r[e]=i:i},t.ignore=function(e){var t=_;_=null,e(this),_=t},t.getTweens=function(){var t=[];return this.data.forEach(function(n){return n instanceof e?t.push.apply(t,n.getTweens()):n instanceof J&&!(n.parent&&n.parent.data===`nested`)&&t.push(n)}),t},t.clear=function(){this._r.length=this.data.length=0},t.kill=function(e,t){var n=this;if(e?(function(){for(var t=n.getTweens(),r=n.data.length,i;r--;)i=n.data[r],i.data===`isFlip`&&(i.revert(),i.getChildren(!0,!0,!1).forEach(function(e){return t.splice(t.indexOf(e),1)}));for(t.map(function(e){return{g:e._dur||e._delay||e._sat&&!e._sat.vars.immediateRender?e.globalTime(0):-1/0,t:e}}).sort(function(e,t){return t.g-e.g||-1/0}).forEach(function(t){return t.t.revert(e)}),r=n.data.length;r--;)i=n.data[r],i instanceof q?i.data!==`nested`&&(i.scrollTrigger&&i.scrollTrigger.revert(),i.kill()):!(i instanceof J)&&i.revert&&i.revert(e);n._r.forEach(function(t){return t(e,n)}),n.isReverted=!0})():this.data.forEach(function(e){return e.kill&&e.kill()}),this.clear(),t)for(var r=Hn.length;r--;)Hn[r].id===this.id&&Hn.splice(r,1)},t.revert=function(e){this.kill(e||{})},e}(),Xn=function(){function e(e){this.contexts=[],this.scope=e,_&&_.data.push(this)}var t=e.prototype;return t.add=function(e,t,n){A(e)||(e={matches:e});var r=new Yn(0,n||this.scope),i=r.conditions={},a,o,s;for(o in _&&!r.selector&&(r.selector=_.selector),this.contexts.push(r),t=r.add(`onMatch`,t),r.queries=e,e)o===`all`?s=1:(a=ae.matchMedia(e[o]),a&&(Hn.indexOf(r)<0&&Hn.push(r),(i[o]=a.matches)&&(s=1),a.addListener?a.addListener(Jn):a.addEventListener(`change`,Jn)));return s&&t(r,function(e){return r.add(null,e)}),this},t.revert=function(e){this.kill(e||{})},t.kill=function(e){this.contexts.forEach(function(t){return t.kill(e,!0)})},e}(),Zn={registerPlugin:function(){[...arguments].forEach(function(e){return Ut(e)})},timeline:function(e){return new q(e)},getTweensOf:function(e,t){return B.getTweensOf(e,t)},getProperty:function(e,t,n,r){E(e)&&(e=St(e)[0]);var i=ke(e||{}).get,a=n?Le:Ie;return n===`native`&&(n=``),e&&(t?a((Ce[t]&&Ce[t].get||i)(e,t,n,r)):function(t,n,r){return a((Ce[t]&&Ce[t].get||i)(e,t,n,r))})},quickSetter:function(e,t,n){if(e=St(e),e.length>1){var r=e.map(function(e){return X.quickSetter(e,t,n)}),i=r.length;return function(e){for(var t=i;t--;)r[t](e)}}e=e[0]||{};var a=Ce[t],o=ke(e),s=o.harness&&(o.harness.aliases||{})[t]||t,c=a?function(t){var r=new a;Vt._pt=0,r.init(e,n?t+n:t,Vt,0,[e]),r.render(1,r),Vt._pt&&Ln(1,Vt)}:o.set(e,s);return a?c:function(t){return c(e,s,n?t+n:t,o,1)}},quickTo:function(e,t,n){var r,i=X.to(e,Re((r={},r[t]=`+=0.1`,r.paused=!0,r.stagger=0,r),n||{})),a=function(e,n,r){return i.resetTo(t,e,n,r)};return a.tween=i,a},isTweening:function(e){return B.getTweensOf(e,!0).length>0},defaults:function(e){return e&&e.ease&&(e.ease=ln(e.ease,m.ease)),Ve(m,e||{})},config:function(e){return Ve(p,e||{})},registerEffect:function(e){var t=e.name,n=e.effect,r=e.plugins,i=e.defaults,a=e.extendTimeline;(r||``).split(`,`).forEach(function(e){return e&&!Ce[e]&&!ce[e]&&pe(t+` effect requires `+e+` plugin.`)}),we[t]=function(e,t,r){return n(St(e),Re(t||{},i),r)},a&&(q.prototype[t]=function(e,n,r){return this.add(we[t](e,A(n)?n:(r=n)&&{},this),r)})},registerEase:function(e,t){K[e]=ln(t)},parseEase:function(e,t){return arguments.length?ln(e,t):K},getById:function(e){return B.getById(e)},exportRoot:function(e,t){e===void 0&&(e={});var n=new q(e),r,i;for(n.smoothChildTiming=j(e.smoothChildTiming),B.remove(n),n._dp=0,n._time=n._tTime=B._time,r=B._first;r;)i=r._next,(t||!(!r._dur&&r instanceof J&&r.vars.onComplete===r._targets[0]))&&it(n,r,r._start-r._delay),r=i;return it(B,n,0),n},context:function(e,t){return e?new Yn(e,t):_},matchMedia:function(e){return new Xn(e)},matchMediaRefresh:function(){return Hn.forEach(function(e){var t=e.conditions,n,r;for(r in t)t[r]&&(t[r]=!1,n=1);n&&e.revert()})||Jn()},addEventListener:function(e,t){var n=Un[e]||(Un[e]=[]);~n.indexOf(t)||n.push(t)},removeEventListener:function(e,t){var n=Un[e],r=n&&n.indexOf(t);r>=0&&n.splice(r,1)},utils:{wrap:Nt,wrapYoyo:Pt,distribute:Tt,random:Ot,snap:Dt,normalize:jt,getUnit:W,clamp:vt,splitColor:Kt,toArray:St,selector:Ct,mapRange:It,pipe:kt,unitize:At,interpolate:Lt,shuffle:wt},install:de,effects:we,ticker:$t,updateRoot:q.updateRoot,plugins:Ce,globalTimeline:B,core:{PropTween:Y,globals:me,Tween:J,Timeline:q,Animation:hn,getCache:ke,_removeLinkedListItem:Ke,reverting:function(){return g},context:function(e){return e&&_&&(_.data.push(e),e._ctx=_),_},suppressOverwrites:function(e){return h=e}}};V(`to,from,fromTo,delayedCall,set,killTweensOf`,function(e){return Zn[e]=J[e]}),$t.add(q.updateRoot),Vt=Zn.to({},{duration:0});var Qn=function(e,t){for(var n=e._pt;n&&n.p!==t&&n.op!==t&&n.fp!==t;)n=n._next;return n},$n=function(e,t){var n=e._targets,r,i,a;for(r in t)for(i=n.length;i--;)a=e._ptLookup[i][r],(a&&=a.d)&&(a._pt&&(a=Qn(a,r)),a&&a.modifier&&a.modifier(t[r],e,n[i],r))},er=function(e,t){return{name:e,headless:1,rawVars:1,init:function(e,n,r){r._onInit=function(e){var r,i;if(E(n)&&(r={},V(n,function(e){return r[e]=1}),n=r),t){for(i in r={},n)r[i]=t(n[i]);n=r}$n(e,n)}}}},X=Zn.registerPlugin({name:`attr`,init:function(e,t,n,r,i){var a,o,s;for(a in this.tween=n,t)s=e.getAttribute(a)||``,o=this.add(e,`setAttribute`,(s||0)+``,t[a],r,i,0,0,a),o.op=a,o.b=s,this._props.push(a)},render:function(e,t){for(var n=t._pt;n;)g?n.set(n.t,n.p,n.b,n):n.r(e,n.d),n=n._next}},{name:`endArray`,headless:1,init:function(e,t){for(var n=t.length;n--;)this.add(e,n,e[n]||0,t[n],0,0,0,0,0,1)}},er(`roundProps`,Et),er(`modifiers`),er(`snap`,Dt))||Zn;J.version=q.version=X.version=`3.14.2`,ue=1,M()&&en(),K.Power0,K.Power1,K.Power2,K.Power3,K.Power4,K.Linear,K.Quad,K.Cubic,K.Quart,K.Quint,K.Strong,K.Elastic,K.Back,K.SteppedEase,K.Bounce,K.Sine,K.Expo,K.Circ;var tr,nr,rr,ir,ar,or,sr,cr=function(){return typeof window<`u`},lr={},ur=180/Math.PI,dr=Math.PI/180,fr=Math.atan2,pr=1e8,mr=/([A-Z])/g,hr=/(left|right|width|margin|padding|x)/i,gr=/[\s,\(]\S/,_r={autoAlpha:`opacity,visibility`,scale:`scaleX,scaleY`,alpha:`opacity`},vr=function(e,t){return t.set(t.t,t.p,Math.round((t.s+t.c*e)*1e4)/1e4+t.u,t)},yr=function(e,t){return t.set(t.t,t.p,e===1?t.e:Math.round((t.s+t.c*e)*1e4)/1e4+t.u,t)},br=function(e,t){return t.set(t.t,t.p,e?Math.round((t.s+t.c*e)*1e4)/1e4+t.u:t.b,t)},xr=function(e,t){return t.set(t.t,t.p,e===1?t.e:e?Math.round((t.s+t.c*e)*1e4)/1e4+t.u:t.b,t)},Sr=function(e,t){var n=t.s+t.c*e;t.set(t.t,t.p,~~(n+(n<0?-.5:.5))+t.u,t)},Cr=function(e,t){return t.set(t.t,t.p,e?t.e:t.b,t)},wr=function(e,t){return t.set(t.t,t.p,e===1?t.e:t.b,t)},Tr=function(e,t,n){return e.style[t]=n},Er=function(e,t,n){return e.style.setProperty(t,n)},Dr=function(e,t,n){return e._gsap[t]=n},Or=function(e,t,n){return e._gsap.scaleX=e._gsap.scaleY=n},kr=function(e,t,n,r,i){var a=e._gsap;a.scaleX=a.scaleY=n,a.renderTransform(i,a)},Ar=function(e,t,n,r,i){var a=e._gsap;a[t]=n,a.renderTransform(i,a)},Z=`transform`,Q=Z+`Origin`,jr=function e(t,n){var r=this,i=this.target,a=i.style,o=i._gsap;if(t in lr&&a){if(this.tfm=this.tfm||{},t!==`transform`)t=_r[t]||t,~t.indexOf(`,`)?t.split(`,`).forEach(function(e){return r.tfm[e]=Xr(i,e)}):this.tfm[t]=o.x?o[t]:Xr(i,t),t===Q&&(this.tfm.zOrigin=o.zOrigin);else return _r.transform.split(`,`).forEach(function(t){return e.call(r,t,n)});if(this.props.indexOf(Z)>=0)return;o.svg&&(this.svgo=i.getAttribute(`data-svg-origin`),this.props.push(Q,n,``)),t=Z}(a||n)&&this.props.push(t,n,a[t])},Mr=function(e){e.translate&&(e.removeProperty(`translate`),e.removeProperty(`scale`),e.removeProperty(`rotate`))},Nr=function(){var e=this.props,t=this.target,n=t.style,r=t._gsap,i,a;for(i=0;i<e.length;i+=3)e[i+1]?e[i+1]===2?t[e[i]](e[i+2]):t[e[i]]=e[i+2]:e[i+2]?n[e[i]]=e[i+2]:n.removeProperty(e[i].substr(0,2)===`--`?e[i]:e[i].replace(mr,`-$1`).toLowerCase());if(this.tfm){for(a in this.tfm)r[a]=this.tfm[a];r.svg&&(r.renderTransform(),t.setAttribute(`data-svg-origin`,this.svgo||``)),i=sr(),(!i||!i.isStart)&&!n[Z]&&(Mr(n),r.zOrigin&&n[Q]&&(n[Q]+=` `+r.zOrigin+`px`,r.zOrigin=0,r.renderTransform()),r.uncache=1)}},Pr=function(e,t){var n={target:e,props:[],revert:Nr,save:jr};return e._gsap||X.core.getCache(e),t&&e.style&&e.nodeType&&t.split(`,`).forEach(function(e){return n.save(e)}),n},Fr,Ir=function(e,t){var n=nr.createElementNS?nr.createElementNS((t||`http://www.w3.org/1999/xhtml`).replace(/^https/,`http`),e):nr.createElement(e);return n&&n.style?n:nr.createElement(e)},Lr=function e(t,n,r){var i=getComputedStyle(t);return i[n]||i.getPropertyValue(n.replace(mr,`-$1`).toLowerCase())||i.getPropertyValue(n)||!r&&e(t,zr(n)||n,1)||``},Rr=`O,Moz,ms,Ms,Webkit`.split(`,`),zr=function(e,t,n){var r=(t||ar).style,i=5;if(e in r&&!n)return e;for(e=e.charAt(0).toUpperCase()+e.substr(1);i--&&!(Rr[i]+e in r););return i<0?null:(i===3?`ms`:i>=0?Rr[i]:``)+e},Br=function(){cr()&&window.document&&(tr=window,nr=tr.document,rr=nr.documentElement,ar=Ir(`div`)||{style:{}},Ir(`div`),Z=zr(Z),Q=Z+`Origin`,ar.style.cssText=`border-width:0;line-height:0;position:absolute;padding:0`,Fr=!!zr(`perspective`),sr=X.core.reverting,ir=1)},Vr=function(e){var t=e.ownerSVGElement,n=Ir(`svg`,t&&t.getAttribute(`xmlns`)||`http://www.w3.org/2000/svg`),r=e.cloneNode(!0),i;r.style.display=`block`,n.appendChild(r),rr.appendChild(n);try{i=r.getBBox()}catch{}return n.removeChild(r),rr.removeChild(n),i},Hr=function(e,t){for(var n=t.length;n--;)if(e.hasAttribute(t[n]))return e.getAttribute(t[n])},Ur=function(e){var t,n;try{t=e.getBBox()}catch{t=Vr(e),n=1}return t&&(t.width||t.height)||n||(t=Vr(e)),t&&!t.width&&!t.x&&!t.y?{x:+Hr(e,[`x`,`cx`,`x1`])||0,y:+Hr(e,[`y`,`cy`,`y1`])||0,width:0,height:0}:t},Wr=function(e){return!!(e.getCTM&&(!e.parentNode||e.ownerSVGElement)&&Ur(e))},Gr=function(e,t){if(t){var n=e.style,r;t in lr&&t!==Q&&(t=Z),n.removeProperty?(r=t.substr(0,2),(r===`ms`||t.substr(0,6)===`webkit`)&&(t=`-`+t),n.removeProperty(r===`--`?t:t.replace(mr,`-$1`).toLowerCase())):n.removeAttribute(t)}},Kr=function(e,t,n,r,i,a){var o=new Y(e._pt,t,n,0,1,a?wr:Cr);return e._pt=o,o.b=r,o.e=i,e._props.push(n),o},qr={deg:1,rad:1,turn:1},Jr={grid:1,flex:1},Yr=function e(t,n,r,i){var a=parseFloat(r)||0,o=(r+``).trim().substr((a+``).length)||`px`,s=ar.style,c=hr.test(n),l=t.tagName.toLowerCase()===`svg`,u=(l?`client`:`offset`)+(c?`Width`:`Height`),d=100,f=i===`px`,p=i===`%`,m,h,g,_;if(i===o||!a||qr[i]||qr[o])return a;if(o!==`px`&&!f&&(a=e(t,n,r,`px`)),_=t.getCTM&&Wr(t),(p||o===`%`)&&(lr[n]||~n.indexOf(`adius`)))return m=_?t.getBBox()[c?`width`:`height`]:t[u],H(p?a/m*d:a/100*m);if(s[c?`width`:`height`]=d+(f?o:i),h=i!==`rem`&&~n.indexOf(`adius`)||i===`em`&&t.appendChild&&!l?t:t.parentNode,_&&(h=(t.ownerSVGElement||{}).parentNode),(!h||h===nr||!h.appendChild)&&(h=nr.body),g=h._gsap,g&&p&&g.width&&c&&g.time===$t.time&&!g.uncache)return H(a/g.width*d);if(p&&(n===`height`||n===`width`)){var v=t.style[n];t.style[n]=d+i,m=t[u],v?t.style[n]=v:Gr(t,n)}else (p||o===`%`)&&!Jr[Lr(h,`display`)]&&(s.position=Lr(t,`position`)),h===t&&(s.position=`static`),h.appendChild(ar),m=ar[u],h.removeChild(ar),s.position=`absolute`;return c&&p&&(g=ke(h),g.time=$t.time,g.width=h[u]),H(f?m*a/d:m&&a?d/m*a:0)},Xr=function(e,t,n,r){var i;return ir||Br(),t in _r&&t!==`transform`&&(t=_r[t],~t.indexOf(`,`)&&(t=t.split(`,`)[0])),lr[t]&&t!==`transform`?(i=ci(e,r),i=t===`transformOrigin`?i.svg?i.origin:li(Lr(e,Q))+` `+i.zOrigin+`px`:i[t]):(i=e.style[t],(!i||i===`auto`||r||~(i+``).indexOf(`calc(`))&&(i=ti[t]&&ti[t](e,t,n)||Lr(e,t)||Ae(e,t)||(t===`opacity`?1:0))),n&&!~(i+``).trim().indexOf(` `)?Yr(e,t,i,n)+n:i},Zr=function(e,t,n,r){if(!n||n===`none`){var i=zr(t,e,1),a=i&&Lr(e,i,1);a&&a!==n?(t=i,n=a):t===`borderColor`&&(n=Lr(e,`borderTopColor`))}var o=new Y(this._pt,e.style,t,0,1,In),s=0,c=0,l,u,d,f,m,h,g,_,v,y,b,x;if(o.b=n,o.e=r,n+=``,r+=``,r.substring(0,6)===`var(--`&&(r=Lr(e,r.substring(4,r.indexOf(`)`)))),r===`auto`&&(h=e.style[t],e.style[t]=r,r=Lr(e,t)||r,h?e.style[t]=h:Gr(e,t)),l=[n,r],Zt(l),n=l[0],r=l[1],d=n.match(z)||[],x=r.match(z)||[],x.length){for(;u=z.exec(r);)g=u[0],v=r.substring(s,u.index),m?m=(m+1)%5:(v.substr(-5)===`rgba(`||v.substr(-5)===`hsla(`)&&(m=1),g!==(h=d[c++]||``)&&(f=parseFloat(h)||0,b=h.substr((f+``).length),g.charAt(1)===`=`&&(g=je(f,g)+b),_=parseFloat(g),y=g.substr((_+``).length),s=z.lastIndex-y.length,y||(y=y||p.units[t]||b,s===r.length&&(r+=y,o.e+=y)),b!==y&&(f=Yr(e,t,h,y)||0),o._pt={_next:o._pt,p:v||c===1?v:`,`,s:f,c:_-f,m:m&&m<4||t===`zIndex`?Math.round:0});o.c=s<r.length?r.substring(s,r.length):``}else o.r=t===`display`&&r===`none`?wr:Cr;return ne.test(r)&&(o.e=0),this._pt=o,o},Qr={top:`0%`,bottom:`100%`,left:`0%`,right:`100%`,center:`50%`},$r=function(e){var t=e.split(` `),n=t[0],r=t[1]||`50%`;return(n===`top`||n===`bottom`||r===`left`||r===`right`)&&(e=n,n=r,r=e),t[0]=Qr[n]||n,t[1]=Qr[r]||r,t.join(` `)},ei=function(e,t){if(t.tween&&t.tween._time===t.tween._dur){var n=t.t,r=n.style,i=t.u,a=n._gsap,o,s,c;if(i===`all`||i===!0)r.cssText=``,s=1;else for(i=i.split(`,`),c=i.length;--c>-1;)o=i[c],lr[o]&&(s=1,o=o===`transformOrigin`?Q:Z),Gr(n,o);s&&(Gr(n,Z),a&&(a.svg&&n.removeAttribute(`transform`),r.scale=r.rotate=r.translate=`none`,ci(n,1),a.uncache=1,Mr(r)))}},ti={clearProps:function(e,t,n,r,i){if(i.data!==`isFromStart`){var a=e._pt=new Y(e._pt,t,n,0,0,ei);return a.u=r,a.pr=-10,a.tween=i,e._props.push(n),1}}},ni=[1,0,0,1,0,0],ri={},ii=function(e){return e===`matrix(1, 0, 0, 1, 0, 0)`||e===`none`||!e},ai=function(e){var t=Lr(e,Z);return ii(t)?ni:t.substr(7).match(ee).map(H)},oi=function(e,t){var n=e._gsap||ke(e),r=e.style,i=ai(e),a,o,s,c;return n.svg&&e.getAttribute(`transform`)?(s=e.transform.baseVal.consolidate().matrix,i=[s.a,s.b,s.c,s.d,s.e,s.f],i.join(`,`)===`1,0,0,1,0,0`?ni:i):(i===ni&&!e.offsetParent&&e!==rr&&!n.svg&&(s=r.display,r.display=`block`,a=e.parentNode,(!a||!e.offsetParent&&!e.getBoundingClientRect().width)&&(c=1,o=e.nextElementSibling,rr.appendChild(e)),i=ai(e),s?r.display=s:Gr(e,`display`),c&&(o?a.insertBefore(e,o):a?a.appendChild(e):rr.removeChild(e))),t&&i.length>6?[i[0],i[1],i[4],i[5],i[12],i[13]]:i)},si=function(e,t,n,r,i,a){var o=e._gsap,s=i||oi(e,!0),c=o.xOrigin||0,l=o.yOrigin||0,u=o.xOffset||0,d=o.yOffset||0,f=s[0],p=s[1],m=s[2],h=s[3],g=s[4],_=s[5],v=t.split(` `),y=parseFloat(v[0])||0,b=parseFloat(v[1])||0,x,S,C,w;n?s!==ni&&(S=f*h-p*m)&&(C=h/S*y+b*(-m/S)+(m*_-h*g)/S,w=y*(-p/S)+f/S*b-(f*_-p*g)/S,y=C,b=w):(x=Ur(e),y=x.x+(~v[0].indexOf(`%`)?y/100*x.width:y),b=x.y+(~(v[1]||v[0]).indexOf(`%`)?b/100*x.height:b)),r||r!==!1&&o.smooth?(g=y-c,_=b-l,o.xOffset=u+(g*f+_*m)-g,o.yOffset=d+(g*p+_*h)-_):o.xOffset=o.yOffset=0,o.xOrigin=y,o.yOrigin=b,o.smooth=!!r,o.origin=t,o.originIsAbsolute=!!n,e.style[Q]=`0px 0px`,a&&(Kr(a,o,`xOrigin`,c,y),Kr(a,o,`yOrigin`,l,b),Kr(a,o,`xOffset`,u,o.xOffset),Kr(a,o,`yOffset`,d,o.yOffset)),e.setAttribute(`data-svg-origin`,y+` `+b)},ci=function(e,t){var n=e._gsap||new mn(e);if(`x`in n&&!t&&!n.uncache)return n;var r=e.style,i=n.scaleX<0,a=`px`,o=`deg`,s=getComputedStyle(e),c=Lr(e,Q)||`0`,l=u=d=h=g=_=v=y=b=0,u,d,f=m=1,m,h,g,_,v,y,b,x,S,C,w,T,E,D,O,k,A,j,M,N,P,F,I,L,R,ee,z,te;return n.svg=!!(e.getCTM&&Wr(e)),s.translate&&((s.translate!==`none`||s.scale!==`none`||s.rotate!==`none`)&&(r[Z]=(s.translate===`none`?``:`translate3d(`+(s.translate+` 0 0`).split(` `).slice(0,3).join(`, `)+`) `)+(s.rotate===`none`?``:`rotate(`+s.rotate+`) `)+(s.scale===`none`?``:`scale(`+s.scale.split(` `).join(`,`)+`) `)+(s[Z]===`none`?``:s[Z])),r.scale=r.rotate=r.translate=`none`),C=oi(e,n.svg),n.svg&&(n.uncache?(P=e.getBBox(),c=n.xOrigin-P.x+`px `+(n.yOrigin-P.y)+`px`,N=``):N=!t&&e.getAttribute(`data-svg-origin`),si(e,N||c,!!N||n.originIsAbsolute,n.smooth!==!1,C)),x=n.xOrigin||0,S=n.yOrigin||0,C!==ni&&(D=C[0],O=C[1],k=C[2],A=C[3],l=j=C[4],u=M=C[5],C.length===6?(f=Math.sqrt(D*D+O*O),m=Math.sqrt(A*A+k*k),h=D||O?fr(O,D)*ur:0,v=k||A?fr(k,A)*ur+h:0,v&&(m*=Math.abs(Math.cos(v*dr))),n.svg&&(l-=x-(x*D+S*k),u-=S-(x*O+S*A))):(te=C[6],ee=C[7],I=C[8],L=C[9],R=C[10],z=C[11],l=C[12],u=C[13],d=C[14],w=fr(te,R),g=w*ur,w&&(T=Math.cos(-w),E=Math.sin(-w),N=j*T+I*E,P=M*T+L*E,F=te*T+R*E,I=j*-E+I*T,L=M*-E+L*T,R=te*-E+R*T,z=ee*-E+z*T,j=N,M=P,te=F),w=fr(-k,R),_=w*ur,w&&(T=Math.cos(-w),E=Math.sin(-w),N=D*T-I*E,P=O*T-L*E,F=k*T-R*E,z=A*E+z*T,D=N,O=P,k=F),w=fr(O,D),h=w*ur,w&&(T=Math.cos(w),E=Math.sin(w),N=D*T+O*E,P=j*T+M*E,O=O*T-D*E,M=M*T-j*E,D=N,j=P),g&&Math.abs(g)+Math.abs(h)>359.9&&(g=h=0,_=180-_),f=H(Math.sqrt(D*D+O*O+k*k)),m=H(Math.sqrt(M*M+te*te)),w=fr(j,M),v=Math.abs(w)>2e-4?w*ur:0,b=z?1/(z<0?-z:z):0),n.svg&&(N=e.getAttribute(`transform`),n.forceCSS=e.setAttribute(`transform`,``)||!ii(Lr(e,Z)),N&&e.setAttribute(`transform`,N))),Math.abs(v)>90&&Math.abs(v)<270&&(i?(f*=-1,v+=h<=0?180:-180,h+=h<=0?180:-180):(m*=-1,v+=v<=0?180:-180)),t||=n.uncache,n.x=l-((n.xPercent=l&&(!t&&n.xPercent||(Math.round(e.offsetWidth/2)===Math.round(-l)?-50:0)))?e.offsetWidth*n.xPercent/100:0)+a,n.y=u-((n.yPercent=u&&(!t&&n.yPercent||(Math.round(e.offsetHeight/2)===Math.round(-u)?-50:0)))?e.offsetHeight*n.yPercent/100:0)+a,n.z=d+a,n.scaleX=H(f),n.scaleY=H(m),n.rotation=H(h)+o,n.rotationX=H(g)+o,n.rotationY=H(_)+o,n.skewX=v+o,n.skewY=y+o,n.transformPerspective=b+a,(n.zOrigin=parseFloat(c.split(` `)[2])||!t&&n.zOrigin||0)&&(r[Q]=li(c)),n.xOffset=n.yOffset=0,n.force3D=p.force3D,n.renderTransform=n.svg?gi:Fr?hi:di,n.uncache=0,n},li=function(e){return(e=e.split(` `))[0]+` `+e[1]},ui=function(e,t,n){var r=W(t);return H(parseFloat(t)+parseFloat(Yr(e,`x`,n+`px`,r)))+r},di=function(e,t){t.z=`0px`,t.rotationY=t.rotationX=`0deg`,t.force3D=0,hi(e,t)},fi=`0deg`,pi=`0px`,mi=`) `,hi=function(e,t){var n=t||this,r=n.xPercent,i=n.yPercent,a=n.x,o=n.y,s=n.z,c=n.rotation,l=n.rotationY,u=n.rotationX,d=n.skewX,f=n.skewY,p=n.scaleX,m=n.scaleY,h=n.transformPerspective,g=n.force3D,_=n.target,v=n.zOrigin,y=``,b=g===`auto`&&e&&e!==1||g===!0;if(v&&(u!==fi||l!==fi)){var x=parseFloat(l)*dr,S=Math.sin(x),C=Math.cos(x),w;x=parseFloat(u)*dr,w=Math.cos(x),a=ui(_,a,S*w*-v),o=ui(_,o,-Math.sin(x)*-v),s=ui(_,s,C*w*-v+v)}h!==pi&&(y+=`perspective(`+h+mi),(r||i)&&(y+=`translate(`+r+`%, `+i+`%) `),(b||a!==pi||o!==pi||s!==pi)&&(y+=s!==pi||b?`translate3d(`+a+`, `+o+`, `+s+`) `:`translate(`+a+`, `+o+mi),c!==fi&&(y+=`rotate(`+c+mi),l!==fi&&(y+=`rotateY(`+l+mi),u!==fi&&(y+=`rotateX(`+u+mi),(d!==fi||f!==fi)&&(y+=`skew(`+d+`, `+f+mi),(p!==1||m!==1)&&(y+=`scale(`+p+`, `+m+mi),_.style[Z]=y||`translate(0, 0)`},gi=function(e,t){var n=t||this,r=n.xPercent,i=n.yPercent,a=n.x,o=n.y,s=n.rotation,c=n.skewX,l=n.skewY,u=n.scaleX,d=n.scaleY,f=n.target,p=n.xOrigin,m=n.yOrigin,h=n.xOffset,g=n.yOffset,_=n.forceCSS,v=parseFloat(a),y=parseFloat(o),b,x,S,C,w;s=parseFloat(s),c=parseFloat(c),l=parseFloat(l),l&&(l=parseFloat(l),c+=l,s+=l),s||c?(s*=dr,c*=dr,b=Math.cos(s)*u,x=Math.sin(s)*u,S=Math.sin(s-c)*-d,C=Math.cos(s-c)*d,c&&(l*=dr,w=Math.tan(c-l),w=Math.sqrt(1+w*w),S*=w,C*=w,l&&(w=Math.tan(l),w=Math.sqrt(1+w*w),b*=w,x*=w)),b=H(b),x=H(x),S=H(S),C=H(C)):(b=u,C=d,x=S=0),(v&&!~(a+``).indexOf(`px`)||y&&!~(o+``).indexOf(`px`))&&(v=Yr(f,`x`,a,`px`),y=Yr(f,`y`,o,`px`)),(p||m||h||g)&&(v=H(v+p-(p*b+m*S)+h),y=H(y+m-(p*x+m*C)+g)),(r||i)&&(w=f.getBBox(),v=H(v+r/100*w.width),y=H(y+i/100*w.height)),w=`matrix(`+b+`,`+x+`,`+S+`,`+C+`,`+v+`,`+y+`)`,f.setAttribute(`transform`,w),_&&(f.style[Z]=w)},_i=function(e,t,n,r,i){var a=360,o=E(i),s=parseFloat(i)*(o&&~i.indexOf(`rad`)?ur:1)-r,c=r+s+`deg`,l,u;return o&&(l=i.split(`_`)[1],l===`short`&&(s%=a,s!==s%(a/2)&&(s+=s<0?a:-a)),l===`cw`&&s<0?s=(s+a*pr)%a-~~(s/a)*a:l===`ccw`&&s>0&&(s=(s-a*pr)%a-~~(s/a)*a)),e._pt=u=new Y(e._pt,t,n,r,s,yr),u.e=c,u.u=`deg`,e._props.push(n),u},vi=function(e,t){for(var n in t)e[n]=t[n];return e},yi=function(e,t,n){var r=vi({},n._gsap),i=`perspective,force3D,transformOrigin,svgOrigin`,a=n.style,o,s,c,l,u,d,f,p;for(s in r.svg?(c=n.getAttribute(`transform`),n.setAttribute(`transform`,``),a[Z]=t,o=ci(n,1),Gr(n,Z),n.setAttribute(`transform`,c)):(c=getComputedStyle(n)[Z],a[Z]=t,o=ci(n,1),a[Z]=c),lr)c=r[s],l=o[s],c!==l&&i.indexOf(s)<0&&(f=W(c),p=W(l),u=f===p?parseFloat(c):Yr(n,s,c,p),d=parseFloat(l),e._pt=new Y(e._pt,o,s,u,d-u,vr),e._pt.u=p||0,e._props.push(s));vi(o,r)};V(`padding,margin,Width,Radius`,function(e,t){var n=`Top`,r=`Right`,i=`Bottom`,a=`Left`,o=(t<3?[n,r,i,a]:[n+a,n+r,i+r,i+a]).map(function(n){return t<2?e+n:`border`+n+e});ti[t>1?`border`+e:e]=function(e,t,n,r,i){var a,s;if(arguments.length<4)return a=o.map(function(t){return Xr(e,t,n)}),s=a.join(` `),s.split(a[0]).length===5?a[0]:s;a=(r+``).split(` `),s={},o.forEach(function(e,t){return s[e]=a[t]=a[t]||a[(t-1)/2|0]}),e.init(t,s,i)}});var bi={name:`css`,register:Br,targetTest:function(e){return e.style&&e.nodeType},init:function(e,t,n,r,i){var a=this._props,o=e.style,s=n.vars.startAt,c,l,u,d,f,m,h,g,_,v,y,b,x,S,C,w,T;for(h in ir||Br(),this.styles=this.styles||Pr(e),w=this.styles.props,this.tween=n,t)if(h!==`autoRound`&&(l=t[h],!(Ce[h]&&yn(h,t,n,r,e,i)))){if(f=typeof l,m=ti[h],f===`function`&&(l=l.call(n,r,e,i),f=typeof l),f===`string`&&~l.indexOf(`random(`)&&(l=Ft(l)),m)m(this,e,h,l,n)&&(C=1);else if(h.substr(0,2)===`--`)c=(getComputedStyle(e).getPropertyValue(h)+``).trim(),l+=``,Yt.lastIndex=0,Yt.test(c)||(g=W(c),_=W(l),_?g!==_&&(c=Yr(e,h,c,_)+_):g&&(l+=g)),this.add(o,`setProperty`,c,l,r,i,0,0,h),a.push(h),w.push(h,0,o[h]);else if(f!==`undefined`){if(s&&h in s?(c=typeof s[h]==`function`?s[h].call(n,r,e,i):s[h],E(c)&&~c.indexOf(`random(`)&&(c=Ft(c)),W(c+``)||c===`auto`||(c+=p.units[h]||W(Xr(e,h))||``),(c+``).charAt(1)===`=`&&(c=Xr(e,h))):c=Xr(e,h),d=parseFloat(c),v=f===`string`&&l.charAt(1)===`=`&&l.substr(0,2),v&&(l=l.substr(2)),u=parseFloat(l),h in _r&&(h===`autoAlpha`&&(d===1&&Xr(e,`visibility`)===`hidden`&&u&&(d=0),w.push(`visibility`,0,o.visibility),Kr(this,o,`visibility`,d?`inherit`:`hidden`,u?`inherit`:`hidden`,!u)),h!==`scale`&&h!==`transform`&&(h=_r[h],~h.indexOf(`,`)&&(h=h.split(`,`)[0]))),y=h in lr,y){if(this.styles.save(h),T=l,f===`string`&&l.substring(0,6)===`var(--`){if(l=Lr(e,l.substring(4,l.indexOf(`)`))),l.substring(0,5)===`calc(`){var D=e.style.perspective;e.style.perspective=l,l=Lr(e,`perspective`),D?e.style.perspective=D:Gr(e,`perspective`)}u=parseFloat(l)}if(b||(x=e._gsap,x.renderTransform&&!t.parseTransform||ci(e,t.parseTransform),S=t.smoothOrigin!==!1&&x.smooth,b=this._pt=new Y(this._pt,o,Z,0,1,x.renderTransform,x,0,-1),b.dep=1),h===`scale`)this._pt=new Y(this._pt,x,`scaleY`,x.scaleY,(v?je(x.scaleY,v+u):u)-x.scaleY||0,vr),this._pt.u=0,a.push(`scaleY`,h),h+=`X`;else if(h===`transformOrigin`){w.push(Q,0,o[Q]),l=$r(l),x.svg?si(e,l,0,S,0,this):(_=parseFloat(l.split(` `)[2])||0,_!==x.zOrigin&&Kr(this,x,`zOrigin`,x.zOrigin,_),Kr(this,o,h,li(c),li(l)));continue}else if(h===`svgOrigin`){si(e,l,1,S,0,this);continue}else if(h in ri){_i(this,x,h,d,v?je(d,v+l):l);continue}else if(h===`smoothOrigin`){Kr(this,x,`smooth`,x.smooth,l);continue}else if(h===`force3D`){x[h]=l;continue}else if(h===`transform`){yi(this,l,e);continue}}else h in o||(h=zr(h)||h);if(y||(u||u===0)&&(d||d===0)&&!gr.test(l)&&h in o)g=(c+``).substr((d+``).length),u||=0,_=W(l)||(h in p.units?p.units[h]:g),g!==_&&(d=Yr(e,h,c,_)),this._pt=new Y(this._pt,y?x:o,h,d,(v?je(d,v+u):u)-d,!y&&(_===`px`||h===`zIndex`)&&t.autoRound!==!1?Sr:vr),this._pt.u=_||0,y&&T!==l?(this._pt.b=c,this._pt.e=T,this._pt.r=xr):g!==_&&_!==`%`&&(this._pt.b=c,this._pt.r=br);else if(h in o)Zr.call(this,e,h,c,v?v+l:l);else if(h in e)this.add(e,h,c||e[h],v?v+l:l,r,i);else if(h!==`parseTransform`){fe(h,l);continue}y||(h in o?w.push(h,0,o[h]):typeof e[h]==`function`?w.push(h,2,e[h]()):w.push(h,1,c||e[h])),a.push(h)}}C&&Vn(this)},render:function(e,t){if(t.tween._time||!sr())for(var n=t._pt;n;)n.r(e,n.d),n=n._next;else t.styles.revert()},get:Xr,aliases:_r,getSetter:function(e,t,n){var r=_r[t];return r&&r.indexOf(`,`)<0&&(t=r),t in lr&&t!==Q&&(e._gsap.x||Xr(e,`x`))?n&&or===n?t===`scale`?Or:Dr:(or=n||{})&&(t===`scale`?kr:Ar):e.style&&!k(e.style[t])?Tr:~t.indexOf(`-`)?Er:Nn(e,t)},core:{_removeProperty:Gr,_getMatrix:oi}};X.utils.checkPrefix=zr,X.core.getStyleSaver=Pr,(function(e,t,n,r){var i=V(e+`,`+t+`,`+n,function(e){lr[e]=1});V(t,function(e){p.units[e]=`deg`,ri[e]=1}),_r[i[13]]=e+`,`+t,V(r,function(e){var t=e.split(`:`);_r[t[1]]=i[t[0]]})})(`x,y,z,scale,scaleX,scaleY,xPercent,yPercent`,`rotation,rotationX,rotationY,skewX,skewY`,`transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective`,`0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY`),V(`x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective`,function(e){p.units[e]=`px`}),X.registerPlugin(bi);var xi=X.registerPlugin(bi)||X;xi.core.Tween;var $=n(),Si=0,Ci=80,wi=`#d4d4d4ff`,Ti=1.6,Ei=20,Di=60,Oi=`145px`,ki=`19px`,Ai=0,ji=-.4,Mi=`170px`,Ni=`20px`,Pi=0,Fi=.4,Ii=`3%`,Li=`32%`,Ri=`65%`,zi=[Li,Ri,Ri,Li,Ri,Li,Li,Ri],Bi=`'Controller W01 Three Oblique', serif`,Vi=`12px`,Hi=`#000000`,Ui=`35px`,Wi=`24px`,Gi=14,Ki=18,qi=`82%`,Ji=`4px`,Yi=16,Xi=12,Zi=1,Qi=[],$i=24,ea=22,ta=`(the end)`,na=.45,ra=`power2.inOut`,ia=.38,aa=.52,oa=`power3.out`,sa=50,ca=Math.ceil(Math.max(ia,aa)*1e3)+40;function la(e,t){return e.length===t.length?e.every((e,n)=>Math.abs(e-t[n])<1):!1}function ua({dividerLabel:e=`archives`,items:t=[],defaultImage:n=``,defaultImageCaptions:r=Qi,cardVerticalStep:i,cardBodyHeight:a=Si,cardCollapsedHeight:l=Ci,cardContentPaddingY:u=Gi}){let d=(0,s.useRef)(null),f=(0,s.useRef)(null),p=(0,s.useRef)(null),m=(0,s.useRef)(null),h=(0,s.useRef)(null),g=(0,s.useRef)(!1),_=(0,s.useRef)(null),v=(0,s.useRef)([]),y=(0,s.useRef)([]),b=(0,s.useRef)([]),[x,S]=(0,s.useState)(null),[C,w]=(0,s.useState)([]),[T,E]=(0,s.useState)(null),D=Math.ceil(c.fontSize*c.lineHeight*Zi),O=Math.max(0,l-(u*2+D)),k=(0,s.useMemo)(()=>t.map((e,t)=>{let i=r.length>0?r[t%r.length]:``,o=e.image||n,s=e.imageCaption||i||``;return{...e,image:o,imageCaption:s,expandedHeight:(typeof e.expandedHeight==`number`?e.expandedHeight:a)+$i,hasExpandableContent:!!(e.preview||e.title||e.subtitle||o)}}),[a,n,r,t]),A=(0,s.useMemo)(()=>k.map((e,t)=>{let n=C[t]||0,r=Math.ceil(n+u*2);return Math.max(l,r+O)}),[l,u,O,C,k]),j=(0,s.useMemo)(()=>k.map((e,t)=>Math.max(A[t]||l,e.expandedHeight||a)),[a,l,A,k]),M=(0,s.useMemo)(()=>A.map(e=>{let t=Math.max(0,e-Ei);return typeof i==`number`?Math.max(0,Math.min(i,t)):t}),[i,A]),N=(0,s.useMemo)(()=>{let e=0;return k.map((t,n)=>{let r=e;return e+=M[n]||0,r})},[M,k]),P=(e,t)=>{let n=N[e]||0;return t===null||e<=t?n:n+(j[t]||0)-(M[t]||0)-ea},F=e=>k.reduce((t,n,r)=>{let i=e===r?j[r]||A[r]||l:A[r]||l;return Math.max(t,P(r,e)+i)},0)+20,I=()=>{_.current!==null&&(window.clearTimeout(_.current),_.current=null)},L=()=>{I(),_.current=window.setTimeout(()=>{E(null),_.current=null},ca)},R=e=>{let t=e?.parentElement;for(;t&&t!==document.body;){let{overflowY:e}=window.getComputedStyle(t);if((e===`auto`||e===`scroll`)&&t.scrollHeight>t.clientHeight)return t;t=t.parentElement}return document.scrollingElement||document.documentElement},ee=e=>e&&(e.clientHeight||e.getBoundingClientRect().height)||0,z=e=>{let t=ee(e),n=e?.getBoundingClientRect().height||0;return!(t>0)||!(n>0)?1:n/t},te=(e,t,n)=>Math.max(0,Math.min(t,typeof n==`number`?Math.max(0,n):Math.max(0,e.scrollHeight-ee(e)))),ne=(e,t)=>{let n=z(t);return n>0?(e.getBoundingClientRect().top-t.getBoundingClientRect().top)/n+t.scrollTop:t.scrollTop},re=(e,t,n,r)=>{let i=d.current;if(!i)return;let a=R(i);if(!a)return;let o=typeof r==`number`?r:te(a,ne(i,a)+P(e,t)-sa,n);h.current&&xi.killTweensOf(h.current),xi.killTweensOf(a),h.current=a,xi.to(a,{scrollTop:o,duration:aa,ease:oa,overwrite:`auto`})};(0,s.useLayoutEffect)(()=>{let e=0,t=0,n=!1,r=()=>{w(e=>{let t=k.map((t,n)=>t.preview?Math.ceil(v.current[n]?.scrollHeight||e[n]||0):Math.ceil(y.current[n]?.scrollHeight||e[n]||0));return la(e,t)?e:t})},i=()=>{e&&window.cancelAnimationFrame(e),e=window.requestAnimationFrame(r)},a=()=>{window.clearTimeout(t),t=window.setTimeout(i,90)};return i(),document.fonts?.ready&&document.fonts.ready.then(()=>{n||i()}),window.addEventListener(`resize`,a),()=>{n=!0,window.cancelAnimationFrame(e),window.clearTimeout(t),window.removeEventListener(`resize`,a)}},[u,O,k]),(0,s.useLayoutEffect)(()=>()=>{I()},[]),(0,s.useLayoutEffect)(()=>{k.forEach((e,t)=>{let n=x===t,r=!!e.preview,i=v.current[t],a=b.current[t];r&&a&&xi.to(a,{opacity:n?1:0,x:n?0:Xi,duration:na,ease:ra,overwrite:`auto`}),r&&i&&xi.to(i,{opacity:n?0:1,x:n?-Xi:0,duration:na,ease:ra,overwrite:`auto`})})},[x,k]),(0,s.useLayoutEffect)(()=>{if(f.current===null)return;let e=f.current,t=p.current,n=m.current,r=g.current,i=window.requestAnimationFrame(()=>{re(e,x,t,n),r&&L(),f.current=null,p.current=null,m.current=null,g.current=!1});return()=>window.cancelAnimationFrame(i)},[x]);let ie=e=>{if(!k[e]?.hasExpandableContent)return;let t=x===e?null:e,n=F(x),r=F(t),i=d.current,a=i?R(i):null;if(I(),g.current=r<n,a&&i){let o=a.scrollHeight-n+r,s=Math.max(0,o-ee(a));p.current=s,m.current=te(a,ne(i,a)+P(e,t)-sa,s)}else p.current=null,m.current=null;g.current?E(n):E(null),f.current=e,S(t)},B=(e,t)=>{e.key!==`Enter`&&e.key!==` `||(e.preventDefault(),ie(t))},ae=e=>t=>{y.current[e]=t},oe=(e,t)=>(0,$.jsxs)(Da,{ref:ae(t),children:[e.title&&(0,$.jsx)(ka,{children:e.title}),e.subtitle&&(0,$.jsx)(Aa,{children:e.subtitle})]}),se=Math.max(F(x),T||0);return(0,$.jsxs)(da,{children:[(0,$.jsxs)(fa,{children:[(0,$.jsx)(pa,{}),(0,$.jsx)(ma,{children:e}),(0,$.jsx)(pa,{})]}),(0,$.jsx)(ha,{children:(0,$.jsx)(ga,{ref:d,style:{height:se},children:k.map((e,t)=>{let n=x===t,r=!!e.preview,i=e.hasExpandableContent;return(0,$.jsxs)(_a,{style:{zIndex:t+1,top:`${P(t,x)}px`},children:[e.year&&(0,$.jsxs)(ya,{style:{left:`calc(${Ii} + ${Ai}px)`,transform:`translateY(${ji}px)`,width:Oi,height:ki},children:[(0,$.jsx)(`img`,{src:o(`/images/file_year.png`),alt:``}),(0,$.jsx)(xa,{children:(0,$.jsx)(wa,{children:e.year})})]}),(0,$.jsxs)(ba,{style:{left:`calc(${zi[t%zi.length]} + ${Pi}px)`,transform:`translateY(${Fi}px)`,width:Mi,height:Ni,zIndex:2,cursor:i?`pointer`:`default`},onClick:()=>ie(t),role:`button`,tabIndex:i?0:-1,onKeyDown:e=>B(e,t),"aria-disabled":!i,children:[(0,$.jsx)(`img`,{src:o(`/images/file_nonactive.png`),alt:``}),(0,$.jsxs)(xa,{children:[(0,$.jsx)(Sa,{children:e.number}),(0,$.jsx)(Ca,{children:e.label})]})]}),(0,$.jsx)(Ta,{isOpen:n,onClick:()=>ie(t),onKeyDown:e=>B(e,t),role:`button`,tabIndex:i?0:-1,"aria-expanded":n,"aria-disabled":!i,style:{height:n?`${j[t]||A[t]||l}px`:`${A[t]||l}px`,cursor:i?`pointer`:`default`},children:(0,$.jsxs)(Ea,{isOpen:n,cardContentPaddingY:u,ref:e=>b.current[t]=e,children:[r?(0,$.jsxs)($.Fragment,{children:[!n&&(0,$.jsx)(Fa,{cardContentPaddingY:u,children:(0,$.jsx)(La,{ref:e=>v.current[t]=e,children:e.preview})}),(0,$.jsxs)(Oa,{children:[(0,$.jsxs)(Ia,{isOpen:n,children:[e.title&&(0,$.jsx)(ka,{children:e.title}),e.subtitle&&(0,$.jsx)(Aa,{children:e.subtitle})]}),n&&(0,$.jsx)(Pa,{children:ta})]})]}):(0,$.jsxs)(Oa,{children:[oe(e,t),n&&(0,$.jsx)(Pa,{children:ta})]}),e.image&&(0,$.jsxs)(ja,{isOpen:n,children:[(0,$.jsx)(Ma,{src:e.image,alt:e.title||e.label}),e.imageCaption&&(0,$.jsx)(Na,{children:e.imageCaption})]})]})})]},t)})})})]})}var da=r.div`
  margin-top: 40px;
  margin-bottom: 32px;
  width: 100%;
  font-family: ${c.fontFamily};
  scroll-margin-top: ${Wi};
`,fa=r.div`
  display: flex; align-items: center; gap: 12px; margin-bottom: 24px;
`,pa=r.div`flex: 1; height: 1px; background: #ccc;`,ma=r.span`
  font-family: 'Controller W01 Three Oblique', serif;
  font-size: 13px; letter-spacing: 2px; text-transform: lowercase; color: #888; white-space: nowrap;
`,ha=r.div`
  position: relative; width: 100%; box-sizing: border-box; margin-top: ${Di}px;
`,ga=r.div`position: relative; width: 100%;`,_a=r.div`
  position: absolute;
  width: 100%;
  left: 0;
  box-sizing: border-box;
  transition: top 0.38s ease-in-out;
`,va=r.div`
  position: absolute;
  bottom: calc(100% - ${Ti}px);
  user-select: none; box-sizing: border-box;
  img { width: 100%; height: 100%; object-fit: fill; display: block; }
`,ya=r(va)`cursor: default;`,ba=r(va)`
  outline: none;

  &:focus,
  &:focus-visible {
    outline: none;
  }

  &:hover span { text-shadow: 0px 0px 8px rgba(0,0,0,0.3); }
`,xa=r.div`
  position: absolute; inset: 0;
  display: flex; align-items: center; justify-content: center;
  gap: ${Ui}; padding-top: 2px; z-index: 10;
`,Sa=r.span`
  font-family: ${Bi}; font-size: ${Vi}; font-weight: 700;
  color: ${Hi}; letter-spacing: 0.5px;
  white-space: nowrap; transition: all 0.2s ease;
`,Ca=r.span`
  font-family: ${Bi}; font-size: ${Vi};
  color: ${Hi}; letter-spacing: 0.3px;
  overflow: hidden; text-overflow: ellipsis; white-space: nowrap; transition: all 0.2s ease;
`,wa=r.span`
  font-family: ${Bi}; font-size: ${Vi}; font-weight: 700;
  color: ${Hi}; letter-spacing: 1px; text-transform: none;
`,Ta=r.div`
  position: relative;
  width: 100%;
  transition: height 0.38s ease-in-out;
  border: ${Ti}px solid ${wi};
  background: #ffffff;
  box-sizing: border-box; overflow: hidden; border-radius: 10px;
  box-shadow: 0 -2px 10px rgba(0,0,0,0.05);

  &:focus,
  &:focus-visible {
    outline: none;
  }
`,Ea=r.div`
  position: absolute;
  inset: 0;
  display: flex; flex-direction: column;
  align-items: flex-start; justify-content: flex-start;
  gap: 10px;
  padding: ${({cardContentPaddingY:e})=>e}px ${Ki}px;
  overflow-x: hidden;
  overflow-y: hidden;
  pointer-events: ${({isOpen:e})=>e?`auto`:`none`};
  box-sizing: border-box;
`,Da=r(u).attrs({as:`div`})`
  display: flex;
  flex-direction: column;
  gap: ${Ji};
  width: 100%;
  max-width: 100%;
  margin: 0;
  box-sizing: border-box;
  text-align: left;
  flex-shrink: 0;
`,Oa=r.div`
  display: flex;
  flex-direction: column;
  gap: 0;
  width: 100%;
  flex-shrink: 0;
`,ka=r.div`
  margin: 0;
  font-family: inherit;
  font-size: inherit;
  font-weight: inherit;
  color: inherit;
  letter-spacing: inherit;
  line-height: inherit;
  white-space: pre-wrap;
  word-break: break-word;
  width: 100%;
`,Aa=r.div`
  margin: 0;
  font-family: inherit;
  font-size: inherit;
  font-weight: inherit;
  color: inherit;
  letter-spacing: inherit;
  white-space: pre-wrap; word-break: break-word;
  width: 100%;
  line-height: inherit;
`,ja=r.div`
  width: 100%; display: flex; flex-direction: column; align-items: center;
  margin-top: 12px;
  opacity: ${({isOpen:e})=>e?1:0};
  pointer-events: ${({isOpen:e})=>e?`auto`:`none`};
  transition: opacity 0.18s ease-out;
`,Ma=r.img`
  width: 50%; height: auto;
  border-radius: 12px;
  display: block;
  object-fit: cover;
`,Na=r(u).attrs({as:`div`})`
  margin: 6px 0 0;
  text-align: center;
  width: 100%;
`,Pa=r(u).attrs({as:`div`})`
  width: 100%;
  margin: ${Yi}px 0 0;
  align-self: stretch;
  text-align: center;
  font-family: 'Controller W01 Two Oblique', ${c.fontFamily};
  font-size: ${c.fontSize-2}px;
  pointer-events: none;
  animation: endNoteReveal 0.42s ease-out;

  @keyframes endNoteReveal {
    from {
      opacity: 0;
      transform: translateY(-10px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
`,Fa=r.div`
  position: absolute;
  inset: 0;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding: ${({cardContentPaddingY:e})=>e}px ${Ki}px;
  box-sizing: border-box;
  pointer-events: none;
`,Ia=r(u).attrs({as:`div`})`
  display: flex;
  flex-direction: column;
  gap: ${Ji};
  width: ${qi};
  max-width: 100%;
  margin: 0;
  opacity: ${({isOpen:e})=>e?1:0};
  pointer-events: ${({isOpen:e})=>e?`auto`:`none`};
  transition: opacity 0.18s ease-out;
`,La=r(u).attrs({as:`div`})`
  width: ${qi};
  max-width: 100%;
  margin: 0;
  white-space: pre-wrap; word-break: break-word;
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
`,Ra=12,za=10,Ba=14,Va=12,Ha=`1WQkC-8vhqXrkWmpbUDEuHYXP_EVzg5cA`,Ua=`https://drive.google.com/file/d/${Ha}/preview?hl=en`,Wa=`https://drive.google.com/file/d/${Ha}/view?usp=sharing&hl=en`,Ga=`https://drive.google.com/uc?export=download&id=${Ha}`,Ka=[{number:`28`,label:`Jan`,year:`2026`,expandedHeight:100,subtitle:`Our paper has been submitted to ICML, fingers crossed.`},{number:`12`,label:`Jan`,expandedHeight:100,subtitle:`Joined Danziger Lab! Advised by Dr. Zachary Danziger.`},{number:`01`,label:`Jul`,year:`2025`,expandedHeight:150,subtitle:`Joined BrainML Lab! Advised by Dr. Anqi Wu and Dr. Chengrui Li. They will supervise my master’s thesis.`},{number:`05`,label:`Nov`,year:`2024`,expandedHeight:150,subtitle:`Our paper on hierarchical planning for autonomous navigation and exploration (HDPlanner) has been accepted by RA-L and will be presented at ICRA 2025!`},{number:`09`,label:`Apr`,expandedHeight:150,subtitle:`I finished the oral defense "Learning structured communication for multi-agent reinforcement learning" for my bachelor's degree! Thanks to my advisor Prof. Guillaume Sartoretti and examiner Prof. Hongying Zhang! 🎉`}],qa=[{title:`A Hitchhiker's Guide to Poisson Gradient Estimation`,authors:`Michael Ibrahim*, Hanqi Zhao*, Eli Sennesh, Zhi Li, Anqi Wu, Jacob L. Yates, Chengrui Li, and Hadi Vafaii`,venue:`43rd International Conference on Machine Learning (ICML), 2026 [under review]`,badges:[],links:[{label:`arXiv`,href:`https://arxiv.org/abs/2602.03896`}]},{title:`HDPlanner: Advancing Autonomous Deployments in Unknown Environments through Hierarchical Decision Networks`,authors:`Jingsong Liang, Yuhong Cao, Yixiao Ma, Hanqi Zhao, and Guillaume Sartoretti`,venue:`IEEE Robotics and Automation Letters (RA-L), 2025`,badges:[],links:[{label:`Paper`,href:`https://ieeexplore.ieee.org/abstract/document/10767278`},{label:`arXiv`,href:`https://arxiv.org/abs/2408.03768`},{label:`Code`,href:`https://github.com/marmotlab/HDPlanner_Exp_and_Nav`}]}];function Ja({isFocus:e=!1,outerFocusSettled:t=!1}){let[n,r]=(0,s.useState)(null),i=!!Ua,a=(0,s.useRef)({start:()=>{},stop:()=>{}}),c=(0,s.useRef)(e),l=(0,s.useRef)(t),d=e&&t;(0,s.useEffect)(()=>{if(c.current=e,l.current=t,e&&t&&document.visibilityState!==`hidden`){a.current.start();return}a.current.stop()},[e,t]);let f=e=>e.split(/(Hanqi Zhao\*?)/).map((e,t)=>e.startsWith(`Hanqi Zhao`)?(0,$.jsx)(`strong`,{children:e},`${e}-${t}`):(0,$.jsx)(s.Fragment,{children:e},`${e}-${t}`));(0,s.useEffect)(()=>{let e={original:o(`/images/dot_original.png`),hover:o(`/images/dot_hover.png`),selected:o(`/images/dot_selected.png`)},t=Array.from(document.querySelectorAll(`[data-dot]`));function n(t,n){if(t.dataset.state===n)return;t.dataset.state=n;let r=t.querySelector(`img`);r&&(r.src=e[n],r.style.transition=`opacity 600ms ease-in-out`,r.style.opacity=`0.6`,r.offsetHeight,r.style.opacity=`1`)}t.forEach(t=>{let r=t.dataset.state||`original`,i=t.querySelector(`img`);i&&e[r]&&(i.src=e[r]);let a=()=>{t.dataset.state===`original`&&n(t,`hover`)},o=()=>{t.dataset.state===`hover`&&n(t,`original`)},s=()=>{t.dataset.state===`selected`?n(t,`original`):t.dataset.state===`hover`&&n(t,`selected`)};t.addEventListener(`mouseenter`,a),t.addEventListener(`mouseleave`,o),t.addEventListener(`click`,s),t._cleanup=()=>{t.removeEventListener(`mouseenter`,a),t.removeEventListener(`mouseleave`,o),t.removeEventListener(`click`,s)}});let r=document.querySelector(`[data-dots]`),i,s;r&&(i=()=>r.classList.add(`is-hover`),s=()=>r.classList.remove(`is-hover`),r.addEventListener(`mouseenter`,i),r.addEventListener(`mouseleave`,s));let u=document.getElementById(`screen-svg-sidebar`),d=0,f=()=>c.current&&l.current&&document.visibilityState!==`hidden`,p=()=>{d&&=(cancelAnimationFrame(d),0)},m=()=>{},h=()=>{if(f()){m();return}p()};if(u){let e={canvas:{x:0,y:0,width:250,height:200}},t=`http://www.w3.org/2000/svg`,n=document.getElementById(`particles-sidebar`),r=document.getElementById(`clear-polygons-sidebar`),i=document.getElementById(`blurred-polygons-sidebar`),o=document.getElementById(`clip-rect-sidebar`);if(n&&r&&i&&o){o.setAttribute(`x`,e.canvas.x),o.setAttribute(`y`,e.canvas.y),o.setAttribute(`width`,e.canvas.width),o.setAttribute(`height`,e.canvas.height);let i=[],s=[];function c(n,r,a,o,s,c,l,u,d){let f=e.canvas.x+s,p=e.canvas.y+c,m=l*.1,h=u*.1;for(let e=0;e<o;e++){let e=document.createElementNS(t,`circle`);e.setAttribute(`r`,r),e.setAttribute(`fill`,a),n.appendChild(e);let o={cx:f+(Math.random()-.5)*l,cy:p+(Math.random()-.5)*u,rx:m*(.8+Math.random()*.4),ry:h*(.8+Math.random()*.4),phaseOffset:Math.random()*Math.PI*2,speed:(.5+Math.random()*.5)/1e3*d};i.push({element:e,pathData:o})}}function l(n,r,i,a,o,c,l,u,d,f,p=1){let m=document.createElementNS(t,`polygon`);m.setAttribute(`stroke`,i),m.setAttribute(`stroke-width`,r),m.setAttribute(`fill`,`none`),m.setAttribute(`opacity`,p),n.appendChild(m);let h=[],g=e.canvas.x+a,_=e.canvas.y+o,v=c*.05,y=l*.05;for(let e=0;e<d;e++){let e=g+(Math.random()-.5)*c,t=_+(Math.random()-.5)*l,n={cx:e,cy:t,rx:v*(.5+Math.random()*f),ry:y*(.5+Math.random()*f),phaseOffset:Math.random()*Math.PI*2,speed:(.5+Math.random()*.5)/500*u};h.push({x:e,y:t,pathData:n})}s.push({element:m,vertices:h})}function u(){c(n,1,`#ffaa00`,12,125,75,80,65,.5),c(n,.8,`#ff5500`,8,125,60,160,35,1),l(r,1,`#ffaa00`,125,65,110,30,.2,12,10,.8)}function g(t){if(!f()){d=0;return}i.forEach(e=>{let{pathData:n}=e,r=t*n.speed+n.phaseOffset,i=n.cx+n.rx*Math.cos(r),a=n.cy+n.ry*Math.sin(r);e.element.setAttribute(`cx`,i),e.element.setAttribute(`cy`,a)}),s.forEach(n=>{let r=n.vertices.map(n=>{let{pathData:r}=n,i=t*r.speed+r.phaseOffset,a=r.cx+r.rx*Math.cos(i),o=r.cy+r.ry*Math.sin(i);return`${Math.max(e.canvas.x+2,Math.min(e.canvas.x+e.canvas.width-2,a))},${Math.max(e.canvas.y+2,Math.min(e.canvas.y+e.canvas.height-2,o))}`}).join(` `);n.element.setAttribute(`points`,r)}),d=requestAnimationFrame(g)}m=()=>{d||!f()||(d=requestAnimationFrame(g))},u(),a.current={start:m,stop:p},document.addEventListener(`visibilitychange`,h),h()}}return()=>{t.forEach(e=>{e._cleanup&&e._cleanup()}),r&&i&&s&&(r.removeEventListener(`mouseenter`,i),r.removeEventListener(`mouseleave`,s)),document.removeEventListener(`visibilitychange`,h),a.current={start:()=>{},stop:()=>{}},p()}},[]);let p=()=>{switch(n){case`ABOUT`:return(0,$.jsxs)(uo,{$ambientAnimationsActive:d,children:[(0,$.jsx)(co,{children:`About Me`}),(0,$.jsx)(lo,{src:o(`/images/960grey.gif`),alt:``,"aria-hidden":`true`}),(0,$.jsx)(u,{children:`Hi, this is Hanqi ZHAO (赵寒麒).`}),(0,$.jsxs)(u,{children:[`I am a second year Master student at Georgia Tech majoring in Robotics, where I am currently advised by `,(0,$.jsx)(`a`,{href:`https://scholarblogs.emory.edu/danziger/`,target:`_blank`,rel:`noopener noreferrer`,children:`Dr. Zachary Danziger`}),`. I am also honored to be advised by `,(0,$.jsx)(`a`,{href:`https://sites.google.com/view/brainml/home`,target:`_blank`,rel:`noopener noreferrer`,children:`Dr. Anqi Wu`}),`, where I finished my graduate thesis on estimation methods for Poisson-distributed latent variables models. I am also working closely with `,(0,$.jsx)(`a`,{href:`https://jerrysoybean.github.io/`,target:`_blank`,rel:`noopener noreferrer`,children:`Dr. Chengrui Li`}),`, a research scientist at Meta, who is working on neural surface electromyography (sEMG) in Meta's CTRL-Labs.`]}),(0,$.jsxs)(u,{children:[`I received my Bachelor's degree in engineering from School of Artificial Intelligence and Automation, Huazhong University of Science and Technology. During my senior year, I spent time at National University of Singapore working with `,(0,$.jsx)(`a`,{href:`https://marmotlab.org/people.html`,target:`_blank`,rel:`noopener noreferrer`,children:`Dr. Guillaume Sartoretti`}),`, where I completed my undergraduate thesis on Multi‑Agent Reinforcement Learning for path planning.`]}),(0,$.jsxs)(u,{children:[(0,$.jsx)(`strong`,{children:`Goal:`}),` Develop Brain-Computer Interfaces (BCIs) that infer human intent directly from neural activity and to design robust robotic systems capable of executing these intents in complex, real‑world environments.`]}),(0,$.jsxs)(u,{children:[(0,$.jsx)(`strong`,{children:`Research Question:`}),` How can we build a scalable flywheel that unifies close-loop feedback, real-world robot execution, and cross-subject neural representation learning, enabling general-purpose neuroprosthetics control system in real-world deployment?`]}),(0,$.jsxs)(u,{children:[(0,$.jsx)(`strong`,{children:`Research Interest:`}),` The intersection of Robotics, Machine Learning, and BCIs.`]}),(0,$.jsx)(u,{children:`Email: hanqi [DOT] zhao [AT] gatech [DOT] edu`}),(0,$.jsx)(ua,{dividerLabel:`news`,items:Ka})]});case`EXPERIENCE`:return(0,$.jsxs)(uo,{$ambientAnimationsActive:d,children:[(0,$.jsx)(co,{children:`Internship and Educational Background`}),(0,$.jsxs)(fo,{children:[(0,$.jsx)(po,{children:`Aug. 2024 - Present`}),(0,$.jsx)(mo,{children:`M.S. in Robotics (expected)`}),(0,$.jsx)(ho,{children:`Georgia Institute of Technology (Georgia Tech)`})]}),(0,$.jsxs)(fo,{children:[(0,$.jsx)(po,{children:`Aug. 2023 - Apr. 2024`}),(0,$.jsx)(mo,{children:`Undergraduate Robotics Research Exchange Program`}),(0,$.jsx)(ho,{children:`National University of Singapore (NUS)`})]}),(0,$.jsxs)(fo,{children:[(0,$.jsx)(po,{children:`Jul. 2022 - Sep. 2022`}),(0,$.jsx)(mo,{children:`Robotics and Software Engineering Intern`}),(0,$.jsx)(ho,{children:`Shandong Victory Soft Technology Co. Ltd.`})]}),(0,$.jsxs)(fo,{children:[(0,$.jsx)(po,{children:`Sep. 2020 - Jun. 2024`}),(0,$.jsx)(mo,{children:`B.E. in Artificial Intelligence and Automation`}),(0,$.jsx)(ho,{children:`Huazhong University of Science and Technology (HUST)`})]})]});case`RESEARCH`:return(0,$.jsxs)(uo,{$ambientAnimationsActive:d,children:[(0,$.jsx)(co,{children:`Publications`}),(0,$.jsx)(go,{children:qa.map(e=>(0,$.jsxs)(_o,{children:[(0,$.jsx)(vo,{children:e.title}),(0,$.jsx)(yo,{children:f(e.authors)}),(0,$.jsxs)(bo,{children:[(0,$.jsx)(xo,{children:e.venue}),(0,$.jsx)(So,{children:e.badges.map(e=>(0,$.jsx)(wo,{children:e},e))})]}),(0,$.jsx)(Co,{children:e.links.map(e=>(0,$.jsx)(To,{href:e.href,target:`_blank`,rel:`noopener noreferrer`,children:e.label},e.label))})]},e.title))}),(0,$.jsx)(co,{children:`Projects`}),(0,$.jsx)(Eo,{children:`Under construction`})]});case`CV`:return(0,$.jsxs)(uo,{$ambientAnimationsActive:d,children:[(0,$.jsx)(co,{children:`Curriculum Vitae`}),(0,$.jsx)(Do,{children:i?(0,$.jsxs)($.Fragment,{children:[(0,$.jsxs)(u,{children:[`If the PDF does not display in your browser, you can `,(0,$.jsx)(`a`,{href:Wa,target:`_blank`,rel:`noopener noreferrer`,children:`open it directly here`}),`.`]}),(0,$.jsxs)(u,{children:[`You can also `,(0,$.jsx)(`a`,{href:Ga,target:`_blank`,rel:`noopener noreferrer`,children:`download the CV`}),`.`]})]}):(0,$.jsxs)($.Fragment,{children:[(0,$.jsx)(u,{children:`This page is set up to mirror the embedded-PDF layout from the reference CV page.`}),(0,$.jsxs)(u,{children:[`Add your CV PDF URL to `,(0,$.jsx)(`strong`,{children:`CV_PDF_URL`}),` in this file and the direct-view link, download link, and embedded preview will appear automatically.`]})]})}),(0,$.jsx)(Oo,{children:i?(0,$.jsxs)($.Fragment,{children:[(0,$.jsx)(To,{href:Wa,target:`_blank`,rel:`noopener noreferrer`,children:`Open PDF`}),(0,$.jsx)(To,{href:Ga,target:`_blank`,rel:`noopener noreferrer`,children:`Download PDF`})]}):(0,$.jsx)(wo,{children:`Awaiting PDF`})}),(0,$.jsx)(ko,{children:i?(0,$.jsx)(Ao,{title:`Hanqi Zhao CV`,src:Ua}):(0,$.jsx)(jo,{children:`Drop in your CV PDF URL and this panel will become an embedded viewer.`})})]});default:return null}},m=()=>(0,$.jsxs)(no,{children:[(0,$.jsx)(ro,{children:`Welcome`}),(0,$.jsx)(io,{children:`I'm Hanqi Zhao`})]});return(0,$.jsxs)(Xa,{$ambientAnimationsActive:d,children:[(0,$.jsx)(Ya,{}),(0,$.jsx)(Za,{children:(0,$.jsxs)(`div`,{style:{width:`284px`,maxWidth:`284px`,minWidth:`284px`,maxHeight:`644px`,minHeight:`644px`,display:`inline-flex`,flexDirection:`column`,justifyContent:`center`,alignItems:`center`},children:[(0,$.jsx)(`div`,{style:{width:`100%`,height:`36px`,maxWidth:`284px`,minWidth:`284px`,maxHeight:`36px`,minHeight:`36px`,position:`relative`,background:`linear-gradient(180deg, #ABADB3 0%, #FFFFFF 100%)`,boxShadow:`0px 4px 7.5px 2px rgba(255, 255, 255, 0.73) inset`,overflow:`hidden`,borderTopLeftRadius:`20px`,borderTopRightRadius:`20px`,borderTop:`2px solid #CECECE`,borderLeft:`2px solid #CECECE`,borderRight:`2px solid #CECECE`,zIndex:2,marginBottom:`-2px`},children:(0,$.jsx)(`div`,{style:{left:`249px`,top:`7px`,position:`absolute`,justifyContent:`center`,alignItems:`center`,gap:`10px`,display:`inline-flex`},children:(0,$.jsx)(`div`,{className:`dot-toggle`,"data-dot":!0,"data-state":`original`,children:(0,$.jsx)(`img`,{src:o(`/images/dot_original.png`),alt:``})})})}),(0,$.jsxs)(`div`,{style:{width:`100%`,height:`608px`,maxWidth:`284px`,minWidth:`284px`,position:`relative`,background:`linear-gradient(180deg, rgba(104, 104, 114, 0) 0%, #686872 100%), white`,boxShadow:`9px 0px 8.199999809265137px rgba(255, 255, 255, 0.35) inset`,overflow:`hidden`,borderBottomRightRadius:`28px`,borderBottomLeftRadius:`28px`,borderLeft:`2px #CECECE solid`,borderRight:`2px #CECECE solid`,borderBottom:`2px #CECECE solid`},children:[(0,$.jsx)(`img`,{style:{width:`264px`,height:`202px`,left:`8px`,top:`30px`,position:`absolute`},src:o(`/images/image%202.svg`),alt:``}),(0,$.jsx)(`div`,{className:`screen-container`,"aria-hidden":`true`,children:(0,$.jsxs)(`svg`,{id:`screen-svg-sidebar`,viewBox:`0 0 250 200`,children:[(0,$.jsxs)(`defs`,{children:[(0,$.jsxs)(`filter`,{id:`glow-sidebar`,children:[(0,$.jsx)(`feGaussianBlur`,{stdDeviation:`2`,result:`blur`}),(0,$.jsxs)(`feMerge`,{children:[(0,$.jsx)(`feMergeNode`,{in:`blur`}),(0,$.jsx)(`feMergeNode`,{in:`SourceGraphic`})]})]}),(0,$.jsx)(`filter`,{id:`blurFilter-sidebar`,children:(0,$.jsx)(`feGaussianBlur`,{stdDeviation:`5`})}),(0,$.jsx)(`clipPath`,{id:`animation-clip-sidebar`,children:(0,$.jsx)(`rect`,{id:`clip-rect-sidebar`,x:`0`,y:`0`,width:`0`,height:`0`})})]}),(0,$.jsxs)(`g`,{id:`animation-layer-sidebar`,clipPath:`url(#animation-clip-sidebar)`,children:[(0,$.jsx)(`g`,{id:`particles-sidebar`,filter:`url(#glow-sidebar)`}),(0,$.jsx)(`g`,{id:`clear-polygons-sidebar`,filter:`url(#glow-sidebar)`}),(0,$.jsx)(`g`,{id:`blurred-polygons-sidebar`,filter:`url(#blurFilter-sidebar) url(#glow-sidebar)`})]})]})}),(0,$.jsx)(`img`,{style:{width:`54px`,height:`36px`,left:`12px`,top:`2px`,position:`absolute`},src:o(`/images/egg.png`),alt:``}),(0,$.jsx)(`div`,{style:{width:`46px`,height:`30px`,left:`16px`,top:`1px`,position:`absolute`},children:(0,$.jsx)(`div`,{className:`dot-toggle`,"data-dot":!0,"data-state":`original`,style:{left:`4px`,top:`6px`,position:`absolute`},children:(0,$.jsx)(`img`,{src:o(`/images/dot_original.png`),alt:``})})}),(0,$.jsx)(`img`,{style:{width:`183px`,height:`42.5px`,left:`50.5px`,top:`72px`,position:`absolute`},src:o(`/images/image%206.svg`),alt:``}),(0,$.jsx)(`div`,{"data-property-1":`Component 30 1`,style:{width:`172px`,height:`20px`,left:`60px`,top:`6px`,position:`absolute`},children:(0,$.jsxs)(`div`,{className:`dots-toggle`,"data-dots":!0,children:[(0,$.jsx)(`img`,{className:`dots-base`,src:o(`/images/dots_original.png`),alt:``}),(0,$.jsx)(`img`,{className:`dots-hover`,src:o(`/images/dots_hover.png`),alt:``})]})}),(0,$.jsx)(`div`,{style:{left:`249px`,top:`6px`,position:`absolute`,justifyContent:`center`,alignItems:`center`,gap:`10px`,display:`inline-flex`},children:(0,$.jsx)(`div`,{className:`dot-toggle`,"data-dot":!0,"data-state":`selected`,children:(0,$.jsx)(`img`,{src:o(`/images/dot_selected.png`),alt:``})})}),(0,$.jsx)(`div`,{style:{width:`264px`,paddingTop:`15px`,paddingBottom:`15px`,paddingLeft:`15px`,paddingRight:`20px`,left:`8px`,top:`236px`,position:`absolute`,background:`linear-gradient(0deg, #EFEFEF 91%, #E6E6E6 95%, #CECECE 99%, #B9B9B9 100%)`,boxShadow:`3px 0px 4px white inset, -6px 0px 4px white inset, 14px 0px 35px rgba(0, 0, 0, 0.20) inset, 5px 5px 4.099999904632568px white inset, 0px 4px 4px #797979, 0px -6px 3px rgba(0, 0, 0, 0.25) inset, 0px 2px 16px #A9A9A9, 0.5px 0.5px 0.5px`,borderRadius:`20px`,filter:`blur(0.25px)`,display:`inline-flex`,flexDirection:`column`,justifyContent:`center`,alignItems:`center`,gap:`11px`},children:(0,$.jsx)(`div`,{style:{paddingTop:`16px`,paddingBottom:`10px`,display:`flex`,flexDirection:`column`,justifyContent:`center`,alignItems:`center`},children:(0,$.jsxs)(`div`,{className:`showcase-menu`,"data-menu":!0,children:[(0,$.jsxs)(`button`,{className:`menu-button ${n===`ABOUT`?`is-selected`:``}`,type:`button`,"data-button":`about`,"aria-pressed":n===`ABOUT`,onClick:()=>r(`ABOUT`),children:[(0,$.jsx)(`span`,{className:`btn-outer`,"aria-hidden":`true`}),(0,$.jsx)(`span`,{className:`btn-inner`,"aria-hidden":`true`}),(0,$.jsx)(`span`,{className:`btn-text`,children:`About`})]}),(0,$.jsxs)(`button`,{className:`menu-button ${n===`EXPERIENCE`?`is-selected`:``}`,type:`button`,"data-button":`experience`,"aria-pressed":n===`EXPERIENCE`,onClick:()=>r(`EXPERIENCE`),children:[(0,$.jsx)(`span`,{className:`btn-outer`,"aria-hidden":`true`}),(0,$.jsx)(`span`,{className:`btn-inner`,"aria-hidden":`true`}),(0,$.jsx)(`span`,{className:`btn-text`,children:`Experience`})]}),(0,$.jsxs)(`button`,{className:`menu-button ${n===`RESEARCH`?`is-selected`:``}`,type:`button`,"data-button":`research`,"aria-pressed":n===`RESEARCH`,onClick:()=>r(`RESEARCH`),children:[(0,$.jsx)(`span`,{className:`btn-outer`,"aria-hidden":`true`}),(0,$.jsx)(`span`,{className:`btn-inner`,"aria-hidden":`true`}),(0,$.jsx)(`span`,{className:`btn-text`,children:`Research`})]}),(0,$.jsxs)(`button`,{className:`menu-button ${n===`CV`?`is-selected`:``}`,type:`button`,"data-button":`cv`,"aria-pressed":n===`CV`,onClick:()=>r(`CV`),children:[(0,$.jsx)(`span`,{className:`btn-outer`,"aria-hidden":`true`}),(0,$.jsx)(`span`,{className:`btn-inner`,"aria-hidden":`true`}),(0,$.jsx)(`span`,{className:`btn-text`,children:`CV`})]})]})})}),(0,$.jsxs)(`div`,{style:{left:`0px`,right:`0px`,top:`578px`,position:`absolute`,justifyContent:`center`,alignItems:`center`,gap:`0px`,display:`inline-flex`},children:[(0,$.jsx)(`div`,{className:`dot-toggle`,"data-dot":!0,"data-state":`original`,children:(0,$.jsx)(`img`,{src:o(`/images/dot_original.png`),alt:``,style:{width:`18px`,height:`18px`}})}),(0,$.jsx)(`div`,{className:`dot-toggle`,"data-dot":!0,"data-state":`original`,children:(0,$.jsx)(`img`,{src:o(`/images/dot_original.png`),alt:``,style:{width:`18px`,height:`18px`}})}),(0,$.jsx)(`div`,{className:`dot-toggle`,"data-dot":!0,"data-state":`original`,children:(0,$.jsx)(`img`,{src:o(`/images/dot_original.png`),alt:``,style:{width:`18px`,height:`18px`}})})]})]})]})}),(0,$.jsx)(Qa,{children:(0,$.jsxs)($a,{children:[(0,$.jsx)(eo,{"aria-hidden":`true`}),(0,$.jsx)(to,{children:n?(0,$.jsx)(ao,{children:(0,$.jsx)(oo,{className:`has-scrollbar`,children:(0,$.jsx)(so,{children:p()})})}):m()})]})})]})}var Ya=a`
  @font-face {
    font-family: 'Controller W01 One Oblique';
    src: url('https://db.onlinewebfonts.com/t/2ee42d29f9b216fdc3ef1df618a7a93e.eot');
    src: url('https://db.onlinewebfonts.com/t/2ee42d29f9b216fdc3ef1df618a7a93e.eot?#iefix') format('embedded-opentype'),
      url('https://db.onlinewebfonts.com/t/2ee42d29f9b216fdc3ef1df618a7a93e.woff2') format('woff2'),
      url('https://db.onlinewebfonts.com/t/2ee42d29f9b216fdc3ef1df618a7a93e.woff') format('woff'),
      url('https://db.onlinewebfonts.com/t/2ee42d29f9b216fdc3ef1df618a7a93e.ttf') format('truetype'),
      url('https://db.onlinewebfonts.com/t/2ee42d29f9b216fdc3ef1df618a7a93e.svg#Controller W01 One Oblique') format('svg');
    font-weight: 400;
    font-style: normal;
    font-display: swap;
  }

  @font-face {
    font-family: 'Controller W01 One';
    src: url('https://db.onlinewebfonts.com/t/99d5563c5700c5c4e3fa6c9f60f31ba5.eot');
    src: url('https://db.onlinewebfonts.com/t/99d5563c5700c5c4e3fa6c9f60f31ba5.eot?#iefix') format('embedded-opentype'),
      url('https://db.onlinewebfonts.com/t/99d5563c5700c5c4e3fa6c9f60f31ba5.woff2') format('woff2'),
      url('https://db.onlinewebfonts.com/t/99d5563c5700c5c4e3fa6c9f60f31ba5.woff') format('woff'),
      url('https://db.onlinewebfonts.com/t/99d5563c5700c5c4e3fa6c9f60f31ba5.ttf') format('truetype'),
      url('https://db.onlinewebfonts.com/t/99d5563c5700c5c4e3fa6c9f60f31ba5.svg#Controller W01 One') format('svg');
    font-weight: 400;
    font-style: normal;
    font-display: swap;
  }

  @font-face {
    font-family: 'Controller W01 Two Oblique';
    src: url('https://db.onlinewebfonts.com/t/35ea0eae14a5c7ee380c2d62cd367fe9.eot');
    src: url('https://db.onlinewebfonts.com/t/35ea0eae14a5c7ee380c2d62cd367fe9.eot?#iefix') format('embedded-opentype'),
      url('https://db.onlinewebfonts.com/t/35ea0eae14a5c7ee380c2d62cd367fe9.woff2') format('woff2'),
      url('https://db.onlinewebfonts.com/t/35ea0eae14a5c7ee380c2d62cd367fe9.woff') format('woff'),
      url('https://db.onlinewebfonts.com/t/35ea0eae14a5c7ee380c2d62cd367fe9.ttf') format('truetype'),
      url('https://db.onlinewebfonts.com/t/35ea0eae14a5c7ee380c2d62cd367fe9.svg#Controller W01 Two Oblique') format('svg');
    font-weight: 400;
    font-style: normal;
    font-display: swap;
  }

  @font-face {
    font-family: 'Controller W01 Two';
    src: url('https://db.onlinewebfonts.com/t/06725377b902746127049f1019c53c75.eot');
    src: url('https://db.onlinewebfonts.com/t/06725377b902746127049f1019c53c75.eot?#iefix') format('embedded-opentype'),
      url('https://db.onlinewebfonts.com/t/06725377b902746127049f1019c53c75.woff2') format('woff2'),
      url('https://db.onlinewebfonts.com/t/06725377b902746127049f1019c53c75.woff') format('woff'),
      url('https://db.onlinewebfonts.com/t/06725377b902746127049f1019c53c75.ttf') format('truetype'),
      url('https://db.onlinewebfonts.com/t/06725377b902746127049f1019c53c75.svg#Controller W01 Two') format('svg');
    font-weight: 400;
    font-style: normal;
    font-display: swap;
  }

  @font-face {
    font-family: 'Controller W01 Five Oblique';
    src: url('https://db.onlinewebfonts.com/t/8a7a89e31c8ccec1c446bb97e9e6cc07.eot');
    src: url('https://db.onlinewebfonts.com/t/8a7a89e31c8ccec1c446bb97e9e6cc07.eot?#iefix') format('embedded-opentype'),
      url('https://db.onlinewebfonts.com/t/8a7a89e31c8ccec1c446bb97e9e6cc07.woff2') format('woff2'),
      url('https://db.onlinewebfonts.com/t/8a7a89e31c8ccec1c446bb97e9e6cc07.woff') format('woff'),
      url('https://db.onlinewebfonts.com/t/8a7a89e31c8ccec1c446bb97e9e6cc07.ttf') format('truetype'),
      url('https://db.onlinewebfonts.com/t/8a7a89e31c8ccec1c446bb97e9e6cc07.svg#Controller W01 Five Oblique') format('svg');
    font-weight: 400;
    font-style: normal;
    font-display: swap;
  }

  @font-face {
    font-family: 'Controller W01 Three Oblique';
    src: url('https://db.onlinewebfonts.com/t/b2924781ca301a1277ad9b046b17b4e6.eot');
    src: url('https://db.onlinewebfonts.com/t/b2924781ca301a1277ad9b046b17b4e6.eot?#iefix') format('embedded-opentype'),
      url('https://db.onlinewebfonts.com/t/b2924781ca301a1277ad9b046b17b4e6.woff2') format('woff2'),
      url('https://db.onlinewebfonts.com/t/b2924781ca301a1277ad9b046b17b4e6.woff') format('woff'),
      url('https://db.onlinewebfonts.com/t/b2924781ca301a1277ad9b046b17b4e6.ttf') format('truetype'),
      url('https://db.onlinewebfonts.com/t/b2924781ca301a1277ad9b046b17b4e6.svg#Controller W01 Three Oblique') format('svg');
    font-weight: 400;
    font-style: normal;
    font-display: swap;
  }

  @font-face {
    font-family: 'Lucida Grande Custom';
    src: url('${o(`/fonts/LucidaGrande.ttf`)}') format('truetype');
    font-weight: 400;
    font-style: normal;
    font-display: swap;
  }

  .showcase-menu {
    width: 246px;
    display: flex;
    flex-direction: column;
    gap: 10px;
    align-items: center;
  }

  .menu-button {
    width: 246px;
    height: 62px;
    padding: 0 8px;
    position: relative;
    overflow: hidden;
    background: transparent;
    border: none;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    font: inherit;
  }

  .menu-button:focus-visible {
    outline: 2px solid #6b6b6b;
    outline-offset: 2px;
  }

  .btn-outer {
    width: 210px;
    height: 50px;
    padding: 15px 20px 15px 15px;
    position: absolute;
    left: 20px;
    top: 0;
    z-index: 0;
    background: linear-gradient(0deg, #F3F3F8 49%, #8F8F96 100%);
    box-shadow: 2px 3px 2.0999999046325684px white inset,
      3px 0px 4px white inset,
      -6px 0px 4px white inset,
      0px 7px 4.0999999046325684px rgba(13.31, 21.86, 26.46, 0.12);
    border-radius: 29px;
  }

  .btn-inner {
    width: 192px;
    height: 38px;
    padding: 8px 10px 10px;
    position: absolute;
    left: 28px;
    top: 7px;
    z-index: 1;
    background: linear-gradient(180deg, #EBE9EE 0%, #D1D0D3 100%);
    box-shadow: 0px 0px 6px rgb(189 189 189) inset,
      0px 0px 2px rgb(237 237 237 / 65%),
      3px 3px 3px rgb(52 52 52 / 69%),
      -1px -1px 8px #a4a4a4 inset,
      1px 1px 3px #3e3e3e,
      0px -9px 10px #373737de inset;
    border-radius: 30px;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .btn-text {
    width: 210px;
    height: 34px;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0px 0px 12px 0;
    color: #383838;
    font-size: 16px;
    font-family: 'Controller W01 Three Oblique', serif;
    font-weight: 400;
    text-shadow: 2px 2px 4px rgba(144, 144, 144, 1);
    position: relative;
    z-index: 2;
    pointer-events: none;
  }

  .dot-toggle {
    width: 22px;
    height: 22px;
    position: relative;
    display: inline-flex;
    align-items: center;
    justify-content: center;
  }

  .dot-toggle img {
    width: 22px;
    height: 22px;
    position: absolute;
    left: 0;
    top: 0;
    transition: opacity 220ms ease-in-out;
  }

  .dots-toggle {
    width: 172px;
    height: 20px;
    position: relative;
  }

  .dots-toggle img {
    position: absolute;
    inset: 0;
    width: 100%;
    height: 100%;
    transition: opacity 1500ms linear;
  }

  .dots-toggle .dots-hover {
    opacity: 0;
  }

  .dots-toggle.is-hover .dots-hover {
    opacity: 1;
  }

  .dots-toggle.is-hover .dots-base {
    opacity: 0;
  }

  .screen-container {
    width: 264px;
    height: 202px;
    position: absolute;
    left: 10px;
    top: 36px;
    pointer-events: none;
  }

  .screen-container svg {
    width: 100%;
    height: 100%;
    display: block;
  }

  .menu-button:hover:not(.is-selected) .btn-text {
    color: white;
    text-shadow: 2px 2px 4px rgba(99, 99, 99, 1);
  }

  .menu-button:active:not(.is-selected) .btn-inner {
    background: linear-gradient(180deg, #6B6B6B 0%, #7F7F7F 24%, #C6C6C6 100%);
    box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.25) inset,
      0px 0px 3.700000047683716px rgba(0, 0, 0, 0.12),
      4px 5px 4px rgba(0, 0, 0, 0.30),
      -1px -1px 8px #8B8B8B inset,
      -1px -1px 1px #A4A4A4 inset,
      2px 2px 6px #383838 inset,
      -1px -1px 3px #2D2D2D;
  }

  .menu-button:active:not(.is-selected) .btn-text {
    color: #E4E4E4;
    text-shadow: 2px 2px 4px rgba(68, 68, 68, 1);
  }

  .menu-button.is-selected .btn-inner {
    background: linear-gradient(180deg, #959599c7 0%, #aeaeaefa 20%, #C7C7C7 36%, white 100%);
    box-shadow: 0px 0px 4px rgb(0 0 0 / 21%) inset,
      0px 0px 3.700000047683716px rgb(0 0 0 / 8%),
      4px 4px 5px #8a8a8a52,
      -1px -1px 5px #ffffff inset,
      -2px -2px 2px #b2b2b2 inset,
      0px -3px 4px #b2b2b266 inset;
  }

  .menu-button.is-selected .btn-text {
    color: #383838;
    text-shadow: 2px 2px 4px rgba(155, 155, 155, 1);
  }

  .menu-button.is-selected:active .btn-inner {
    background: linear-gradient(180deg, #6B6B6B 0%, #7F7F7F 24%, #C6C6C6 100%);
    box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.25) inset,
      0px 0px 3.700000047683716px rgba(0, 0, 0, 0.12),
      4px 5px 4px rgba(0, 0, 0, 0.30),
      -1px -1px 8px #8B8B8B inset,
      -1px -1px 1px #A4A4A4 inset,
      2px 2px 6px #383838 inset,
      -1px -1px 3px #2D2D2D;
  }

  .menu-button.is-selected:active .btn-text {
    color: #E4E4E4;
    text-shadow: 2px 2px 4px rgba(98, 98, 98, 1);
  }
`,Xa=r.div`
  height: 100%;
  min-height: 100%;
  width: 100%;
  background: #ffffff; 
  color: #333;
  font-family: 'Lucida Grande', 'Verdana', 'Arial', sans-serif;
  overflow: hidden;

  display: flex;
  align-items: stretch;

  img {
    pointer-events: none;
    user-select: none;
    -webkit-user-drag: none;
  }

  .dot-toggle img {
    transition: ${({$ambientAnimationsActive:e})=>e?`opacity 220ms ease-in-out`:`none`};
  }

  .dots-toggle img {
    transition: ${({$ambientAnimationsActive:e})=>e?`opacity 1500ms linear`:`none`};
  }
`,Za=r.div`
  height: 100%;
  min-height: 0;
  flex-shrink: 0;
  position: relative;
  z-index: 100;
  padding: 5px;
  box-sizing: border-box;
  display: flex;
`,Qa=r.main`
  flex: 1;
  height: 100%;
  min-height: 0;
  overflow: hidden;
  padding: 6px 5px 6px 0px;
  box-sizing: border-box;
  background: #ffffff;
`,$a=r.div`
  width: 100%;
  max-width: 100%;
  height: 100%;
  min-height: 0;
  display: flex;
  flex-direction: column;
`,eo=r.div`
  width: 100%;
  height: 36px;
  position: relative;
  background: linear-gradient(180deg, #ABADB3 0%, #FFFFFF 100%);
  box-shadow: 0px 4px 7.5px 2px rgba(255, 255, 255, 0.73) inset,
    0px -4px 4px rgba(255, 255, 255, 0.25) inset;
  overflow: hidden;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
  border-top: 2px solid #CECECE;
  border-left: 2px solid #CECECE;
  border-right: 2px solid #CECECE;
`,to=r.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  background: #ffffff;
  border-left: 2px solid #CECECE;
  border-right: 2px solid #CECECE;
  border-bottom: 2px solid #CECECE;
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;
  padding: 5px 15px;
  flex: 1;
  min-height: 0;
  overflow: hidden;
  box-sizing: border-box;
`,no=r.div`
  flex: 1;
  min-height: 0;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
`;r.div`font-family: 'Controller W01 Three Oblique', serif; font-stretch: condensed; font-size: 28px; font-weight: 400; line-height: 0.9; letter-spacing: -1px; color: #000;`,r.div`font-family: 'Controller W01 Three Oblique', serif; font-stretch: condensed; font-size: 18px; font-weight: 400; color: #777; margin-top: 16px; margin-bottom: 0; text-transform: uppercase; line-height: 1; letter-spacing: -0.5px;`;var ro=r.div`font-family: 'Controller W01 Three Oblique', serif; font-stretch: condensed; font-size: 50px; font-weight: 300; letter-spacing: -4px; color: #000; line-height: 0.85;`,io=r.div`font-family: 'Controller W01 Two Oblique', serif; font-stretch: condensed; font-size: 14px; font-weight: 300; margin-top: 16px; margin-bottom: 0; letter-spacing: 2px; color: #888; line-height: 1;`,ao=r.div`
  position: relative;
  flex: 1;
  min-height: 0;
  width: 100%;
  box-sizing: border-box;
  overflow: visible;
`,oo=r.div`
  position: absolute;
  top: 0;
  left: 0;
  right: -${Ra}px;
  bottom: ${Va}px;
  min-height: 0;
  overflow-y: auto;
  overflow-x: hidden;
  overflow-anchor: none;
  box-sizing: border-box;
  font-family: 'Controller W01 One';
  font-size: 15px;
  letter-spacing: -0.25px;
  line-height: 1.1;
  color: #2c2c2c;

  &.has-scrollbar::-webkit-scrollbar-track:vertical {
    margin-top: ${za}px;
    margin-bottom: ${za}px;
  }

  p {
    text-align: left;
  }

  a {
    color: #ff9500;
    text-decoration: underline;
  }
`,so=r.div`
  width: 100%;
  max-width: 100%;
  margin: 0 auto;
  min-height: 100%;
  padding-right: ${Ba}px;
  padding-bottom: 8px;
  box-sizing: border-box;
`,co=r.div`font-family: 'Controller W01 Three Oblique', serif; font-stretch: condensed; font-size: 26px; font-weight: 400; letter-spacing: -1.5px; margin-top: 0; margin-bottom: 24px; color: #000; border-bottom: 1px solid #ccc; padding-bottom: 12px; line-height: 1;`,lo=r.img`display: block; width: min(100%, 240px); height: auto; margin: 0 auto 28px; object-fit: contain;`,uo=r.div`width: 100%; max-width: 100%; margin: 0 auto; box-sizing: border-box; animation: ${({$ambientAnimationsActive:e=!0})=>e?`fadeIn 0.4s ease-in-out`:`none`}; @keyframes fadeIn { from { opacity: 0; transform: translateY(5px); } to { opacity: 1; transform: translateY(0); } }`,fo=r.div`margin-bottom: 32px;`,po=r.div`font-family: 'Controller W01 One', serif; font-size: 14px; color: #888; margin-bottom: 8px; text-transform: uppercase;`,mo=r.h4`font-family: 'Controller W01 Three Oblique', serif; font-stretch: condensed; font-weight: 400; font-size: 16px; letter-spacing: -0.5px; color: #000; margin: 0 0 8px 0;`,ho=r.div`font-size: 14px; color: #555;`,go=r.div`display: flex; flex-direction: column; gap: 20px; margin-bottom: 32px;`,_o=r.article`padding: 10px 10px 8px; background: linear-gradient(180deg, #ffffff 75%, #d5d5d5 100%); border: 1px solid #d7d7d7; border-radius: 14px; box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.92);`,vo=r.h4`font-family: 'Inter', 'Lucida Grande', 'Verdana', sans-serif; font-size: 16px; letter-spacing: -0.8px; line-height: 1.05; color: #343434; margin: 0 0 5px;`,yo=r.p`font-family: 'Inter', 'Lucida Grande', 'Verdana', sans-serif; font-size: 13px; line-height: 1.45; color: #555; margin: 0 0 4px;`,bo=r.div`display: flex; align-items: center; justify-content: space-between; gap: 12px; flex-wrap: wrap; margin-bottom: 0px;`,xo=r.div`font-family: 'Inter', 'Lucida Grande', 'Verdana', sans-serif; font-size: 13px; line-height: 1.45; color: #555; margin: 0 0 6px;`,So=r.div`display: flex; align-items: center; gap: 8px; flex-wrap: wrap;`,Co=r.div`display: flex; align-items: center; gap: 10px; flex-wrap: wrap;`,wo=r.span`display: inline-flex; align-items: center; justify-content: center; min-height: 22px; padding: 3px 11px; border-radius: 999px; border: 1px solid #d2d2d2; background: linear-gradient(180deg, #ffffff 0%, #ededed 100%); font-family: 'Inter', 'Lucida Grande', 'Verdana', sans-serif; font-size: 11px; letter-spacing: 0.5px; color: #4a4a4a;`,To=r.a`display: inline-flex; align-items: center; justify-content: center; min-height: 24px; padding: 3px 12px; border-radius: 999px; border: 1px solid #cfcfcf; background: linear-gradient(180deg, #ffffff 0%, #ececec 100%); box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.92); font-family: 'Controller W01 Two Oblique', serif; font-size: 11px; letter-spacing: 0.5px; color: #2d2d2d; text-decoration: none !important; &:hover { background: linear-gradient(180deg, #ffffff 0%, #e6e6e6 100%); color: #111; }`,Eo=r.p`font-family: 'Inter', 'Lucida Grande', 'Verdana', sans-serif; font-size: 14px; line-height: 1.5; color: #5c5c5c; margin: 0;`,Do=r.div`display: flex; flex-direction: column;`,Oo=r.div`display: flex; align-items: center; gap: 10px; flex-wrap: wrap; margin: 8px 0 18px;`,ko=r.div`border: 1px solid #d3d3d3; border-radius: 16px; background: linear-gradient(180deg, #fcfcfc 0%, #f1f1f1 100%); padding: 12px; box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.95);`,Ao=r.iframe`display: block; width: 100%; min-height: 760px; border: none; border-radius: 10px; background: white;`,jo=r(u).attrs({as:`div`})`display: flex; align-items: center; justify-content: center; min-height: 320px; margin: 0; border: 1px dashed #c5c5c5; border-radius: 10px; background: linear-gradient(180deg, #fdfdfd 0%, #f3f3f3 100%); text-align: center; padding: 32px;`;export{Ja as default};