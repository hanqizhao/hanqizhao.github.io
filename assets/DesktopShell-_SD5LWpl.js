const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/FooterMenu-B0R0atUi.js","assets/rolldown-runtime-BVbofQct.js","assets/react-vendor-aHYhdYD6.js","assets/empty-Cz90MWLW.js","assets/mine-icon-FNNA13VC.js","assets/299(32x32)-B-qGVFSJ.js","assets/308(32x32)-SqTQKXZR.js","assets/690(16x16)-tS56rh3m.js","assets/680(32x32)-BHjIH8ml.js","assets/msn-Bazy-NcE.js","assets/SubMenu-9hOHB_gY.js"])))=>i.map(i=>d[i]);
import{n as e}from"./rolldown-runtime-BVbofQct.js";import"./runtimeBridge-DiqJiUi9.js";import{t}from"./preload-helper-DWTEM3RW.js";import{c as n,i as r,o as i,t as a}from"./react-vendor-aHYhdYD6.js";import{n as o,r as s}from"./globalAudio-DDKx6bqK.js";import{t as c}from"./publicPath-SdK1OGf5.js";import{n as l}from"./DesktopPreparationContext-Bgx_rmu8.js";import{a as u,i as d,n as f,r as p}from"./DesktopViewportContext-BvIqTV0r.js";import"./layout-C3iG-kT-.js";import{APP_KEYS as m,appSettings as h,defaultAppState as g,defaultIconState as _,getLoadedAppComponent as v,preloadAppComponent as y,resolveAppSetting as ee}from"./apps-tOdFU4nE.js";import{n as b,r as x,t as S}from"./690(16x16)-tS56rh3m.js";import{t as C}from"./290-agx6iTvT.js";import{n as w,r as T,t as te}from"./DashedBox-BdZXZJhS.js";import{t as E}from"./LifecycleContext-CVfvOU73.js";var D=e(n(),1),O=`ADD_APP`,k=`DEL_APP`,A=`FOCUS_APP`,j=`MINIMIZE_APP`,M=`TOGGLE_MAXIMIZE_APP`,N=`FOCUS_ICON`,P=`SELECT_ICONS`,F=`FOCUS_DESKTOP`,I=`START_SELECT`,L=`END_SELECT`,R=`RESET_DESKTOP_SESSION`,z=`/assets/windows-off-UnECWoRH.png`,B=`/assets/restart-CiWjLok5.ico`,V=a();function ne(e){return(0,V.jsx)(G,{children:(0,V.jsx)(U,{...e})})}var H=({className:e,children:t})=>{function n(e){e.preventDefault(),e.stopPropagation()}return(0,V.jsx)(`div`,{className:e,onMouseMove:n,onClick:n,onMouseDown:n,onMouseUp:n,children:t})},U=({mode:e,onClose:t,onClickButton:n})=>{let r=e===u.TURN_OFF?`Turn off computer`:`Log Off Windows`;function i(){return e===u.TURN_OFF?(0,V.jsxs)(V.Fragment,{children:[(0,V.jsx)(W,{img:x,text:`Stand By`,onClick:n}),(0,V.jsx)(W,{img:x,text:`Turn Off`,onClick:n}),(0,V.jsx)(W,{style:{margin:`-3px 0 0px 0`,width:`33px`,height:`33px`},img:B,text:`Restart`,onClick:n})]}):(0,V.jsxs)(V.Fragment,{children:[(0,V.jsx)(W,{img:C,text:`Switch User`,style:{border:`1px solid #fff`,borderRadius:`3px`},onClick:n}),(0,V.jsx)(W,{img:b,text:`Log Off`,onClick:n})]})}return(0,V.jsxs)(`div`,{className:`modal`,children:[(0,V.jsxs)(`header`,{className:`header`,children:[(0,V.jsx)(`span`,{className:`header__text`,children:r}),(0,V.jsx)(`img`,{src:z,alt:``,className:`header__img`})]}),(0,V.jsx)(`div`,{className:`content`,children:i()}),(0,V.jsx)(`footer`,{className:`footer`,children:(0,V.jsx)(`button`,{onClick:t,className:`footer__button`,children:`Cancel`})})]})},W=({style:e,img:t,text:n,onClick:r})=>{function i(){r(n)}return(0,V.jsxs)(`div`,{className:`button-container`,children:[(0,V.jsx)(`img`,{onClick:i,style:{...e},src:t,alt:n,className:`button-img`}),(0,V.jsx)(`span`,{className:`button-text`,children:n})]})},G=i(H)`
  font-family: Tahoma, 'MS Sans Serif', 'Noto Sans', sans-serif;
  position: absolute;
  inset: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 2000;
  .modal {
    width: 300px;
    height: 190px;
    border: 1px solid #09154b;
    display: flex;
    flex-direction: column;
    box-shadow: 0 0 0 1px rgba(136, 170, 243, 0.75), 0 12px 26px rgba(0, 0, 0, 0.18);
  }
  .header {
    height: 31px;
    display: flex;
    padding: 0 8px 0 8px;
    align-items: center;
    background: linear-gradient(180deg, #1956c9 0%, #1246b2 42%, #0a2f8f 100%);
    border-bottom: 1px solid rgba(255, 255, 255, 0.22);
  }
  .header__text {
    font-size: 14px;
    font-family: Tahoma, 'MS Sans Serif', 'Noto Sans', sans-serif;
    font-weight: 700;
    line-height: 1;
    color: #fff;
    flex: 1;
    text-shadow: 0 1px 0 rgba(0, 0, 0, 0.18);
  }
  .header__img {
    width: auto;
    height: 23px;
    margin-right: 1px;
  }
  .content {
    flex: 1;
    background: linear-gradient(
      180deg,
      #6887ef 0%,
      #5b79ec 38%,
      #5875e7 64%,
      #4964d2 100%
    );
    display: flex;
    align-items: center;
    justify-content: space-around;
    padding: 0 28px;
    position: relative;
    &:before {
      content: '';
      display: block;
      position: absolute;
      height: 2px;
      top: 0;
      left: 0;
      right: 0;
      background: linear-gradient(
        to right,
        transparent 0,
        rgba(255, 255, 255, 0.3) 40%,
        rgba(255, 255, 255, 0.3) 60%,
        transparent 100%
      );
    }
  }
  .button-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    color: #fff;
    &.disable {
      color: gray;
      .button-img {
        opacity: 0.3;
        &:hover {
          filter: none;
        }
        &:hover:active {
          filter: none;
        }
      }
    }
  }
  .button-img {
    height: 30px;
    width: 30px;
    &:hover {
      filter: brightness(1.1);
    }
    &:hover:active {
      filter: brightness(0.7);
    }
  }
  .button-text {
    padding-top: 3px;
    font-weight: bold;
    font-size: 11px;
  }
  .footer {
    height: 42px;
    background: linear-gradient(180deg, #10379b 0%, #0a2c8d 100%);
    display: flex;
    justify-content: flex-end;
    align-items: center;
    border-top: 1px solid rgba(255, 255, 255, 0.18);
  }
  .footer__button {
    font-family: Tahoma, 'MS Sans Serif', 'Noto Sans', sans-serif;
    font-size: 11px;
    padding: 0 8px;
    line-height: 10px;
    background: rgb(240, 240, 240);
    margin-right: 10px;
    height: 16px;
    border-radius: 1px;
    box-shadow: 2px 2px 4px 1px #0005b0, 2px 2px 2px 0px white,
      inset 0 0 0 1px skyblue, inset 2px -2px skyblue;
    border: none;
    outline: none;
    &:hover {
      box-shadow: 1px 1px black, 1px 1px 2px 0px white, inset 0 0 0 1px orange,
        inset 2px -2px orange;
    }
    &:hover:active {
      box-shadow: none;
      background: rgb(220, 220, 220);
    }
  }
`,K=`/assets/start-ElBR6pVC.png`,re=`data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAAFiUAABYlAUlSJPAAAAJ7SURBVDhPfZNvSFNhFMbfcOqm1lrbNIkQrIa6FWZ3VCNIJJgydiv/oClR6lbSpG30IUp0LTZBPwwUL05XVJrSmlRoE8aIjFWypA8FfqoIidWXIIIIwg9P517Q/JcP/Ni5Z8/hnPfe97Bl2dgIM7MDFGURW6RcCytjPNNSJFvO/U96QQt5k+wOhQbWyKrk12QJRV86WBMLUq6AyBR9G6uVVVindCgb3Pk735nzSj+SC/3jXOSPb4W8I/0HOWqJXMm7oVpY98W3h3H+dSnqEiWofLYXxqe7UPxIC1W/AqyY3SWXgUiT/GtV6NNMdyxUov39UdjmylD9ogjHJwug9mQtsmPsA1n8BEdkiP51Kh8r/nnz20lc/2yGfc6IQ0L+YkZF2kf6a4zoJqTxVSrVQfrJJla/0Jz2zHhd3AjvVx5XP53A9npFitIhYvncNtsAHI4b7ygUJ1FIyTVq2tGW/eVUtBSnn3CgZ6nYar0AlyuAYHASnZ0R1NScuU/pfYT4addreGoY+z06XA44UVt7DhZLK6qr3RgYeIiurgeIRJ7/KSrSXyKr2GD93Zifn0dPTw84zkhdb8FsbgTPt0EQIpidfYOJiQk0N7ckyHqEWH0Unud/xWIxxONx6mxBQ8NZ9Pb2Y2YmIeXC4TDsdntKo9HcI3sloZQKl6TT6QZdLheSySSGhoYQCoWkwmg0CqfTmdJqtdNk6yNshHgvVk0gc7vd9SaTacHn82F0dJxGnoXf70/l5eUtFYpnLyfEq/1vZ1Yom+O4215vLwIB4bvBYHhJOYFwEJsWLilNrVaXKJVKsZOHuEJUEYXEpoUrJW7dbkJc7T3ENmLjHWCM/QWIROiXfEWyEQAAAABJRU5ErkJggg==`,q=null,J=()=>q??=t(()=>import(`./FooterMenu-B0R0atUi.js`),__vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10])),ie=(0,D.lazy)(J),Y=()=>{let e=new Date,t=e.getHours(),n=`AM`,r=e.getMinutes();return t>=12&&(t-=12,n=`PM`),t===0&&(t=12),r<10&&(r=`0`+r),`${t}:${r} ${n}`};function ae({onMouseDownApp:e,apps:t,focusedAppId:n,onMouseDown:r,onClickMenuItem:i,desktopFrozen:a=!1,desktopVisible:o=!0}){let[l,u]=(0,D.useState)(Y),[d,f]=(0,D.useState)(!1),p=(0,D.useRef)(null);(0,D.useEffect)(()=>{if(!o)return;let e=()=>{J().catch(()=>{q=null})};if(typeof window.requestIdleCallback==`function`){let t=window.requestIdleCallback(e,{timeout:4e3});return()=>window.cancelIdleCallback(t)}let t=window.setTimeout(e,1500);return()=>window.clearTimeout(t)},[o]);function m(){s(c(`/sounds/Windows%20XP%20Start.mp3`),.8),f(e=>!e)}function h(e){e.target.closest(`.footer__start__menu`)||(e.stopPropagation(),m())}function g(e){e.target.closest(`.footer__window`)||e.target.closest(`.footer__start-region`)||r()}function _(e){i(e),f(!1)}return(0,D.useEffect)(()=>{if(a)return;let e=0;function t(){let n=new Date,r=(60-n.getSeconds())*1e3-n.getMilliseconds()+20;e=window.setTimeout(()=>{u(Y()),t()},r)}return u(Y()),t(),()=>{window.clearTimeout(e)}},[a]),(0,D.useEffect)(()=>{let e=p.current;if(!e)return;function t(t){d&&(e.contains(t.target)||t.target.closest(`.footer__start-region`)||f(!1))}return window.addEventListener(`mousedown`,t),()=>window.removeEventListener(`mousedown`,t)},[d]),(0,V.jsxs)(Z,{onMouseDown:g,children:[(0,V.jsx)(`div`,{ref:p,className:`footer__start__menu`,children:d&&(0,V.jsx)(D.Suspense,{fallback:null,children:(0,V.jsx)(ie,{onClick:_})})}),(0,V.jsxs)(`div`,{className:`footer__items left`,children:[(0,V.jsx)(`div`,{className:`footer__start-region`,onMouseDown:h,children:(0,V.jsx)(`img`,{src:K,alt:`start`,className:`footer__start`})}),[...t].map(t=>!t.header.noFooterWindow&&(0,V.jsx)(X,{id:t.id,icon:t.header.icon,title:t.header.title,onMouseDown:e,isFocus:n===t.id},t.id))]}),(0,V.jsxs)(`div`,{className:`footer__items right`,children:[(0,V.jsx)(`img`,{className:`footer__icon`,src:S,alt:``}),(0,V.jsx)(`img`,{className:`footer__icon`,src:re,alt:``}),(0,V.jsx)(`img`,{className:`footer__icon`,src:T,alt:``}),(0,V.jsx)(`div`,{style:{position:`relative`,width:0,height:0},children:(0,V.jsx)(w,{active:o})}),(0,V.jsx)(`div`,{className:`footer__time`,children:l})]})]})}function X({id:e,icon:t,title:n,onMouseDown:r,isFocus:i}){function a(){r(e)}return(0,V.jsxs)(`div`,{onMouseDown:a,className:`footer__window ${i?`focus`:`cover`}`,children:[(0,V.jsx)(`img`,{className:`footer__icon`,src:t,alt:n}),(0,V.jsx)(`div`,{className:`footer__text`,children:n})]})}var Z=i.footer`
  height: 30px;
  background: linear-gradient(
    to bottom,
    #1f2f86 0,
    #3165c4 3%,
    #3682e5 6%,
    #4490e6 10%,
    #3883e5 12%,
    #2b71e0 15%,
    #2663da 18%,
    #235bd6 20%,
    #2258d5 23%,
    #2157d6 38%,
    #245ddb 54%,
    #2562df 86%,
    #245fdc 89%,
    #2158d4 92%,
    #1d4ec0 95%,
    #1941a5 98%
  );
  position: absolute;
  bottom: 0;
  right: 0;
  left: 0;
  z-index: 1000;
  display: flex;
  .footer__items.left {
    height: 100%;
    flex: 1;
    overflow: hidden;
  }
  .footer__items.right {
    background-color: #0b77e9;
    flex-shrink: 0;
    background: linear-gradient(
      to bottom,
      #0c59b9 1%,
      #139ee9 6%,
      #18b5f2 10%,
      #139beb 14%,
      #1290e8 19%,
      #0d8dea 63%,
      #0d9ff1 81%,
      #0f9eed 88%,
      #119be9 91%,
      #1392e2 94%,
      #137ed7 97%,
      #095bc9 100%
    );
    border-left: 1px solid #1042af;
    box-shadow: inset 1px 0 1px #18bbff;
    padding: 0 10px;
    margin-left: 10px;
  }
  .footer__items {
    display: flex;
    align-items: center;
  }
  .footer__start-region {
    height: 100%;
    display: flex;
    align-items: stretch;
    flex-shrink: 0;
    margin-right: 10px;
    position: relative;
    z-index: 1;
  }
  .footer__start {
    height: 100%;
    display: block;
    cursor: pointer;
    position: relative;
    &:hover {
      filter: brightness(105%);
    }
    &:active {
      filter: brightness(85%);
    }
  }
  .footer__start__menu {
    position: absolute;
    left: 0;
    pointer-events: auto;
    box-shadow: 2px 4px 2px rgba(0, 0, 0, 0.5);
    bottom: 100%;
    z-index: 20;
  }
  .footer__window {
    flex: 1;
    max-width: 150px;
    color: #fff;
    border-radius: 2px;
    margin-top: 2px;
    padding: 0 8px;
    height: 22px;
    font-size: 11px;
    background-color: #3c81f3;
    box-shadow: inset -1px 0px rgba(0, 0, 0, 0.3),
      inset 1px 1px 1px rgba(255, 255, 255, 0.2);
    position: relative;
    display: flex;
    align-items: center;
  }
  .footer__icon {
    height: 15px;
    width: 15px;
  }
  .footer__text {
    position: absolute;
    left: 27px;
    right: 8px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
  .footer__window.cover:hover {
    background-color: #53a3ff;
    box-shadow: inset -1px 0px rgba(0, 0, 0, 0.3),
      inset 1px 1px 1px rgba(255, 255, 255, 0.2);
  }
  .footer__window.cover:before {
    display: block;
    content: '';
    position: absolute;
    left: -2px;
    top: -2px;
    width: 10px;
    height: 1px;
    border-bottom-right-radius: 50%;
    box-shadow: 2px 2px 3px rgba(255, 255, 255, 0.5);
  }
  .footer__window.cover:hover:active {
    background-color: #1e52b7;
    box-shadow: inset 0 0 1px 1px rgba(0, 0, 0, 0.3),
      inset 1px 0 1px rgba(0, 0, 0, 0.7);
  }
  .footer__window.focus:hover {
    background-color: #3576f3;
  }
  .footer__window.focus:hover:active {
    background-color: #1e52b7;
  }
  .footer__window.focus {
    background-color: #1e52b7;
    box-shadow: inset 0 0 1px 1px rgba(0, 0, 0, 0.2),
      inset 1px 0 1px rgba(0, 0, 0, 0.7);
  }
  .footer__time {
    margin: 0 5px;
    color: #fff;
    font-size: 11px;
    font-weight: lighter;
    text-shadow: none;
  }
`,oe=(0,D.memo)(ae),Q=(e,t,n)=>Math.min(Math.max(e,t),Math.max(t,n));function se(e,t,n){return{x:Q(e.x,n.left-t.width+64,n.right-64),y:Q(e.y,n.top,n.bottom-30)}}function ce(e,t){let[n,r]=(0,D.useState)(t.defaultOffset),[i,a]=(0,D.useState)(t.defaultSize),o=(0,D.useRef)(null),s=(0,D.useRef)({offset:n,size:i,options:t});s.current={offset:n,size:i,options:t},(0,D.useEffect)(()=>{let t=e.current;if(!t)return;let n=null,i=0;function c(){if(i=0,!n)return;let{position:e,dimensions:r}=n;t.style.transform=`translate(${e.x}px,${e.y}px)`,n.edges&&(t.style.width=r.width+`px`,t.style.height=r.height+`px`)}function l(e){if(!n||e?.pointerId!==void 0&&e.pointerId!==n.id)return;e?.type===`pointerup`&&u(e),cancelAnimationFrame(i),c();let o=n;n=null,t.hasPointerCapture(o.id)&&t.releasePointerCapture(o.id),t.style.willChange=``,t.style.cursor=``,r(o.position),o.edges&&a(o.dimensions)}function u(e){if(!n||e.pointerId!==n.id)return;let t=n.map(e),r=t.x-n.origin.x,a=t.y-n.origin.y,{initial:o,bounds:s,minimum:l,edges:u}=n,d=o.x,f=o.y,p=o.width,m=o.height;u?(u.includes(`e`)&&(p=Q(o.width+r,l,s.right-d)),u.includes(`s`)&&(m=Q(o.height+a,l,s.bottom-f)),u.includes(`w`)&&(d=Q(o.x+r,s.left,o.x+o.width-l),p=o.width+o.x-d),u.includes(`n`)&&(f=Q(o.y+a,s.top,o.y+o.height-l),m=o.height+o.y-f)):(d+=r,f+=a),n.position=se({x:d,y:f},{width:p,height:m},s),n.dimensions={width:p,height:m},i||=requestAnimationFrame(c)}function d(e){let{options:r,offset:i,size:a}=s.current;if(e.button!==0||r.disabled||n||t.dataset.desktopInteractive===`false`)return;let o=f(t),c=o(e),l=``;if(r.resizable&&e.target===t){let e=c.x-i.x,n=c.y-i.y,a=r.resizeThreshold??10;n<a?l+=`n`:t.offsetHeight-n<a&&(l+=`s`),e<a?l+=`w`:t.offsetWidth-e<a&&(l+=`e`)}let u=r.dragRef?.current;!l&&(!u?.contains(e.target)||e.target.closest(`button`))||(e.preventDefault(),n={id:e.pointerId,map:o,origin:c,bounds:r.boundary,minimum:r.constraintSize??200,edges:l,initial:{...i,width:a.width||t.offsetWidth,height:a.height||t.offsetHeight},position:{...i},dimensions:{width:t.offsetWidth,height:t.offsetHeight}},t.setPointerCapture(e.pointerId),t.style.willChange=`transform`,t.style.cursor=l?l+`-resize`:`move`)}o.current=()=>l(),t.addEventListener(`pointerdown`,d),t.addEventListener(`pointermove`,u),t.addEventListener(`pointerup`,l),t.addEventListener(`pointercancel`,l),t.addEventListener(`lostpointercapture`,l),window.addEventListener(`blur`,l);let p=()=>{document.hidden&&l()};return document.addEventListener(`visibilitychange`,p),()=>{cancelAnimationFrame(i),n=null,t.removeEventListener(`pointerdown`,d),t.removeEventListener(`pointermove`,u),t.removeEventListener(`pointerup`,l),t.removeEventListener(`pointercancel`,l),t.removeEventListener(`lostpointercapture`,l),window.removeEventListener(`blur`,l),document.removeEventListener(`visibilitychange`,p)}},[e]),(0,D.useEffect)(()=>{t.disabled&&o.current?.()},[t.disabled]);let c=t.boundary;return(0,D.useEffect)(()=>{e.current&&r(t=>se(t,{width:i.width||e.current.offsetWidth,height:i.height||e.current.offsetHeight},c))},[c.top,c.right,c.bottom,c.left]),{offset:n,size:i}}function le(){return typeof window>`u`?{width:0,height:0}:{width:window.innerWidth,height:window.innerHeight}}function ue(){let e=p(),t=!!e,[n,r]=(0,D.useState)(le);return(0,D.useEffect)(()=>{if(t)return;let e=0;function n(){e||=window.requestAnimationFrame(()=>{e=0,r(le())})}return window.addEventListener(`resize`,n),()=>{window.cancelAnimationFrame(e),window.removeEventListener(`resize`,n)}},[t]),e?.width?e:n}function de({buttons:e,onMaximize:t,onMinimize:n,onClose:r,maximized:i,resizable:a,className:o}){let s={minimize:(0,V.jsx)(`button`,{className:`header__button header__button--minimize`,onMouseUp:n},`minimize`),maximize:(0,V.jsx)(`button`,{className:`header__button ${i?`header__button--maximized`:`header__button--maximize`} ${a?``:`header__button--disable`}`,onMouseUp:t},`maximize`),close:(0,V.jsx)(`button`,{className:`header__button header__button--close`,onMouseUp:r},`button`)};return(0,V.jsx)(`div`,{className:o,children:e?e.map(e=>s[e]):(0,V.jsxs)(V.Fragment,{children:[s.minimize,s.maximize,s.close]})})}var fe=i(de)`
  opacity: ${({isFocus:e})=>e?1:.6};
  height: 22px;
  display: flex;
  align-items: center;
  margin-top: -1px;
  margin-right: 1px;
  .header__button {
    margin-right: 1px;
    position: relative;
    width: 22px;
    height: 22px;
    border: 1px solid #fff;
    border-radius: 3px;
    &:hover {
      filter: brightness(120%);
    }
    &:hover:active {
      filter: brightness(90%);
    }
  }
  .header__button--minimize {
    box-shadow: inset 0 -1px 2px 1px #4646ff;
    background-image: radial-gradient(
      circle at 90% 90%,
      #0054e9 0%,
      #2263d5 55%,
      #4479e4 70%,
      #a3bbec 90%,
      white 100%
    );
    &:before {
      content: '';
      position: absolute;
      left: 4px;
      top: 13px;
      height: 3px;
      width: 8px;
      background-color: white;
    }
  }
  .header__button--maximize {
    box-shadow: inset 0 -1px 2px 1px #4646ff;
    background-image: radial-gradient(
      circle at 90% 90%,
      #0054e9 0%,
      #2263d5 55%,
      #4479e4 70%,
      #a3bbec 90%,
      white 100%
    );
    &:before {
      content: '';
      position: absolute;
      display: block;
      left: 4px;
      top: 4px;
      box-shadow: inset 0 3px white, inset 0 0 0 1px white;
      height: 12px;
      width: 12px;
    }
  }
  .header__button--maximized {
    box-shadow: inset 0 -1px 2px 1px #4646ff;
    background-image: radial-gradient(
      circle at 90% 90%,
      #0054e9 0%,
      #2263d5 55%,
      #4479e4 70%,
      #a3bbec 90%,
      white 100%
    );
    &:before {
      content: '';
      position: absolute;
      display: block;
      left: 7px;
      top: 4px;
      box-shadow: inset 0 2px white, inset 0 0 0 1px white;
      height: 8px;
      width: 8px;
    }
    &:after {
      content: '';
      position: absolute;
      display: block;
      left: 4px;
      top: 7px;
      box-shadow: inset 0 2px white, inset 0 0 0 1px white, 1px -1px #136dff;
      height: 8px;
      width: 8px;
      background-color: #136dff;
    }
  }
  .header__button--close {
    box-shadow: inset 0 -1px 2px 1px #da4600;
    background-image: radial-gradient(
      circle at 90% 90%,
      #cc4600 0%,
      #dc6527 55%,
      #cd7546 70%,
      #ffccb2 90%,
      white 100%
    );
    &:before {
      content: '';
      position: absolute;
      left: 9px;
      top: 2px;
      transform: rotate(45deg);
      height: 16px;
      width: 2px;
      background-color: white;
    }
    &:after {
      content: '';
      position: absolute;
      left: 9px;
      top: 2px;
      transform: rotate(-45deg);
      height: 16px;
      width: 2px;
      background-color: white;
    }
  }
  .header__button--disable {
    outline: none;
    opacity: 0.5;
    &:hover {
      filter: brightness(100%);
    }
  }
`,pe=(0,D.memo)(function({Component:e,header:t,injectProps:n,onClose:r,onMinimize:i,isFocus:a,windowVisible:o,outerFocusSettled:s,desktopVisible:c,desktopFrozen:l,desktopInteractive:u}){return e?(0,V.jsx)(E,{visible:o&&c,focused:a,suspended:l||!o,children:(0,V.jsx)(e,{onClose:r,onMinimize:i,isFocus:a,windowVisible:o,outerFocusSettled:s,desktopVisible:c,desktopFrozen:l,desktopInteractive:u,...n})}):t?.invisible?null:(0,V.jsx)(`div`,{className:`app__placeholder`})});function me({apps:e,onMouseDown:t,onClose:n,onMinimize:r,onMaximize:i,focusedAppId:a,outerFocusSettled:o,desktopVisible:s,desktopFrozen:c,desktopInteractive:l,startupHydrationReady:u}){return(0,V.jsx)(`div`,{style:{position:`relative`,zIndex:0},children:e.map(e=>(0,V.jsx)(he,{show:!e.minimized,id:e.id,onMouseDown:t,onMouseUpClose:n,onMouseUpMinimize:r,onMouseUpMaximize:i,isFocus:a===e.id,outerFocusSettled:o,desktopVisible:s,desktopFrozen:c,desktopInteractive:l,startupHydrationReady:u,...e},e.id))})}var he=i((0,D.memo)(function({show:e,injectProps:t,id:n,onMouseDown:r,onMouseUpClose:i,onMouseUpMinimize:a,onMouseUpMaximize:o,header:s,defaultSize:c,defaultOffset:l,resizable:u,maximized:d,appKey:f,component:p,zIndex:h,isFocus:g,outerFocusSettled:_,desktopVisible:ee,desktopFrozen:b,desktopInteractive:x,startupHydrationReady:S,className:C}){let[w,T]=(0,D.useState)(()=>p??v(f)??null);(0,D.useEffect)(()=>{if(p){T(()=>p);return}let e=v(f);if(e){T(()=>e);return}if(!f){T(null);return}if(!(!(f===m.WINAMP||f===m.MY_SHOWCASE)||S)){T(null);return}let t=!0;return y(f).then(e=>{t&&T(()=>e)}).catch(e=>{console.warn(`Failed to lazy-load window content: ${f}`,e)}),()=>{t=!1}},[f,p,x,_,S]);let te=(0,D.useCallback)(()=>{r(n)},[n,r]),E=(0,D.useCallback)(()=>{i(n)},[n,i]),O=(0,D.useCallback)(()=>{a(n)},[n,a]),k=(0,D.useCallback)(()=>{u&&o(n)},[n,o,u]),A=(0,D.useCallback)(e=>{e.target===j.current&&k()},[k]),j=(0,D.useRef)(null),M=(0,D.useRef)(null),{width:N,height:P}=ue(),{offset:F,size:I}=ce(M,{dragRef:j,defaultOffset:l,defaultSize:c,boundary:{top:1,right:N-1,bottom:P-31,left:1},resizable:u,resizeThreshold:10,disabled:d||!x}),L,R,z,B;return d?(L=N+6,R=P-24,z=-3,B=-3):(L=I.width,R=I.height,z=F.x,B=F.y),(0,V.jsxs)(`div`,{className:C,ref:M,onPointerDown:te,"data-app-key":f??void 0,"data-window-visible":e?`true`:`false`,"data-desktop-frozen":b?`true`:`false`,"data-desktop-interactive":x?`true`:`false`,style:{transform:`translate(${z}px,${B}px)`,width:L?`${L}px`:`auto`,height:R?`${R}px`:`auto`,zIndex:h,pointerEvents:x?`auto`:`none`},children:[(0,V.jsx)(`div`,{className:`header__bg`}),(0,V.jsxs)(`header`,{className:`app__header`,ref:j,onDoubleClick:A,children:[(0,V.jsx)(`img`,{onDoubleClick:E,src:s.icon,alt:s.title,className:`app__header__icon`,draggable:!1}),(0,V.jsx)(`div`,{className:`app__header__title`,children:s.title}),(0,V.jsx)(fe,{buttons:s.buttons,onMaximize:k,onMinimize:O,onClose:E,maximized:d,resizable:u,isFocus:g})]}),(0,V.jsx)(`div`,{className:`app__content`,children:(0,V.jsx)(pe,{Component:w,header:s,injectProps:t,onClose:E,onMinimize:O,isFocus:g,windowVisible:e,outerFocusSettled:_,desktopVisible:ee,desktopFrozen:b||!e,desktopInteractive:x})})]})}))`
  display: ${({show:e})=>e?`flex`:`none`};
  position: absolute;
  padding: 3px;
  padding: ${({header:e})=>e.invisible?0:3}px;
  background-color: ${({isFocus:e})=>e?`#0831d9`:`#6582f5`};
  flex-direction: column;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  .header__bg {
    background: ${({isFocus:e})=>e?`linear-gradient(to bottom,#0058ee 0%,#3593ff 4%,#288eff 6%,#127dff 8%,#036ffc 10%,#0262ee 14%,#0057e5 20%,#0054e3 24%,#0055eb 56%,#005bf5 66%,#026afe 76%,#0062ef 86%,#0052d6 92%,#0040ab 94%,#003092 100%)`:`linear-gradient(to bottom, #7697e7 0%,#7e9ee3 3%,#94afe8 6%,#97b4e9 8%,#82a5e4 14%,#7c9fe2 17%,#7996de 25%,#7b99e1 56%,#82a9e9 81%,#80a5e7 89%,#7b96e1 94%,#7a93df 97%,#abbae3 100%)`};
    position: absolute;
    left: 0;
    top: 0;
    right: 0;
    height: 28px;
    pointer-events: none;
    border-top-left-radius: 8px;
    border-top-right-radius: 8px;
    overflow: hidden;
  }
  .header__bg:before {
    content: '';
    display: block;
    position: absolute;
    left: 0;
    opacity: ${({isFocus:e})=>e?1:.3};
    background: linear-gradient(to right, #1638e6 0%, transparent 100%);
    top: 0;
    bottom: 0;
    width: 15px;
  }
  .header__bg:after {
    content: '';
    opacity: ${({isFocus:e})=>e?1:.4};
    display: block;
    position: absolute;
    right: 0;
    background: linear-gradient(to left, #1638e6 0%, transparent 100%);
    top: 0;
    bottom: 0;
    width: 15px;
  }
  .app__header {
    touch-action: none;
    display: ${({header:e})=>e.invisible?`none`:`flex`};
    height: 25px;
    line-height: 25px;
    font-weight: 700;
    font-size: 12px;
    font-family: 'Noto Sans';
    text-shadow: 1px 1px #000;
    color: white;
    position: absolute;
    left: 3px;
    right: 3px;
    align-items: center;
  }
  .app__header__icon {
    width: 15px;
    height: 15px;
    margin-left: 1px;
    margin-right: 3px;
  }
  .app__header__title {
    flex: 1;
    pointer-events: none;
    padding-right: 5px;
    letter-spacing: 0.5px;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  }
  .app__content {
    flex: 1;
    position: relative;
    margin-top: ${({header:e})=>e.invisible?0:25}px;
    height: ${({header:e})=>e.invisible?`100%`:`calc(100% - 25px)`};
  }
  &[data-desktop-frozen='true'] * {
    animation-play-state: paused !important;
  }
  .app__placeholder {
    width: 100%;
    height: 100%;
    background: #ffffff;
  }
`,ge=.95;function _e(e){if(!e)return[];let t=e.offsetLeft,n=e.offsetTop;return Array.from(e.children,e=>({id:Number(e.dataset.iconId),x:t+e.offsetLeft,y:n+e.offsetTop,w:e.offsetWidth,h:e.offsetHeight}))}function ve({icons:e,onMouseDown:t,onDoubleClick:n,displayFocus:r,mouse:i,selecting:a,setSelectedIcons:o}){let s=(0,D.useRef)(null),c=(0,D.useRef)([]);return(0,D.useEffect)(()=>{a&&(c.current=_e(s.current))},[a]),(0,D.useEffect)(()=>{if(!a)return;let e=Math.min(a.x,i.docX),t=Math.min(a.y,i.docY),n=Math.abs(a.x-i.docX),r=Math.abs(a.y-i.docY);o(c.current.filter(i=>{let{x:a,y:o,w:s,h:c}=i;return a-e<n&&e-a<s&&o-t<r&&t-o<c}).map(e=>e.id))},[o,a,i.docX,i.docY]),(0,V.jsx)(be,{ref:s,children:e.map(e=>(0,V.jsx)(xe,{...e,displayFocus:r,onMouseDown:t,onDoubleClick:n},e.id))})}function ye({title:e,onMouseDown:t,onDoubleClick:n,icon:r,className:i,id:a,appKey:o}){function l(){t(a)}function u(){s(c(`/sounds/Windows%20Navigation%20Start.mp3`),ge),n(o)}return(0,V.jsxs)(`div`,{className:i,"data-icon-id":a,onMouseDown:l,onDoubleClick:u,children:[(0,V.jsx)(`div`,{className:`${i}__img__container`,children:(0,V.jsx)(`img`,{src:r,alt:e,className:`${i}__img`})}),(0,V.jsx)(`div`,{className:`${i}__text__container`,children:(0,V.jsx)(`div`,{className:`${i}__text`,children:e})})]})}var be=i.div`
  position: absolute;
  margin-top: 15px;
  margin-left: 5px;
`,xe=i(ye)`
  width: 70px;
  margin-bottom: 30px;
  display: flex;
  flex-direction: column;
  align-items: center;
  &__text__container {
    width: 100%;
    font-size: 10px;
    color: white;
    text-shadow: 0 1px 1px black;
    margin-top: 5px;
    display: flex;
    justify-content: center;

    &:before {
      content: '';
      display: block;
      flex-grow: 1;
    }
    &:after {
      content: '';
      display: block;
      flex-grow: 1;
    }
  }
  &__text {
    padding: 0 3px 2px;
    background-color: ${({isFocus:e,displayFocus:t})=>e&&t?`#0b61ff`:`transparent`};
    text-align: center;
    flex-shrink: 1;
  }
  &__img__container {
    width: 30px;
    height: 30px;
    filter: ${({isFocus:e,displayFocus:t})=>e&&t?`drop-shadow(0 0 blue)`:``};
  }
  &__img {
    width: 30px;
    height: 30px;
    opacity: ${({isFocus:e,displayFocus:t})=>e&&t?.5:1};
  }
`,Se=(0,D.memo)(ve),Ce=c(`/images/xp-wallpaper.jpg`),we=240,Te=.95;function Ee(e){return{...e,component:e.component??v(e.appKey)??null,header:e.header?{...e.header}:e.header,defaultSize:e.defaultSize?{...e.defaultSize}:e.defaultSize,defaultOffset:e.defaultOffset?{...e.defaultOffset}:e.defaultOffset,injectProps:e.injectProps?{...e.injectProps}:e.injectProps}}function De({includeStartupApps:e=!0}={}){let t=e?g.map(Ee):[];return{apps:t,nextAppID:t.length,nextZIndex:t.length,focusing:t.length>0?d.WINDOW:d.DESKTOP,icons:_.map(e=>({...e})),selecting:!1}}function Oe(){return De({includeStartupApps:!0})}function ke(e,t,n){return e.focusing===n&&e.icons.every(e=>e.isFocus===t(e))?e:{...e,focusing:n,icons:e.icons.map(e=>{let n=t(e);return e.isFocus===n?e:{...e,isFocus:n}})}}function Ae(e,t={type:``}){switch(t.type){case O:{let n=e.apps.find(e=>e.appKey===t.payload.appKey);if(t.payload.multiInstance||!n){let n=Ee({...t.payload,id:e.nextAppID,zIndex:e.nextZIndex});return{...e,apps:[...e.apps,n],nextAppID:e.nextAppID+1,nextZIndex:e.nextZIndex+1,focusing:d.WINDOW}}let r=e.apps.map(n=>n.appKey===t.payload.appKey?{...n,component:n.component??v(n.appKey)??null,zIndex:e.nextZIndex,minimized:!1}:n);return{...e,apps:r,nextZIndex:e.nextZIndex+1,focusing:d.WINDOW}}case k:return $(e)===t.payload?{...e,apps:e.apps.filter(e=>e.id!==t.payload),focusing:e.apps.length>1?d.WINDOW:e.icons.find(e=>e.isFocus)?d.ICON:d.DESKTOP}:e;case A:{if($(e)===t.payload)return e;let n=e.apps.map(n=>n.id===t.payload?{...n,zIndex:e.nextZIndex,minimized:!1}:n);return{...e,apps:n,nextZIndex:e.nextZIndex+1,focusing:d.WINDOW}}case j:{if($(e)!==t.payload)return e;let n=e.apps.map(e=>e.id===t.payload?{...e,minimized:!0}:e);return{...e,apps:n,focusing:d.WINDOW}}case M:{if($(e)!==t.payload)return e;let n=e.apps.map(e=>e.id===t.payload?{...e,maximized:!e.maximized}:e);return{...e,apps:n,focusing:d.WINDOW}}case N:return ke(e,e=>e.id===t.payload,d.ICON);case P:return ke(e,e=>t.payload.includes(e.id),d.ICON);case F:return ke(e,()=>!1,d.DESKTOP);case I:return{...e,focusing:d.DESKTOP,icons:e.icons.map(e=>({...e,isFocus:!1})),selecting:t.payload};case L:return e.selecting?{...e,selecting:null}:e;case R:return{...e,...De({includeStartupApps:!!t.payload?.includeStartupApps})};default:return e}}function $(e){if(e.focusing!==d.WINDOW)return-1;let t=-1,n=-1/0;return e.apps.forEach(e=>{!e.minimized&&e.zIndex>n&&(n=e.zIndex,t=e.id)}),t}function je({powerState:e,outerFocusSettled:t,desktopVisible:n=!0,desktopFrozen:r=!1,desktopInteractive:i=!r,startupHydrationReady:a=!1,onRequestPowerStateChange:p,onStageReady:m}){let[g,_]=(0,D.useReducer)(Ae,void 0,Oe),v=Ce,[y,b]=(0,D.useState)(!1),[x,S]=(0,D.useState)({x:50,y:50}),[C,w]=(0,D.useState)(!0),[T,E]=(0,D.useState)({docX:0,docY:0}),R=(0,D.useRef)(null),z=(0,D.useRef)(null),B=l(`shell`),H=(0,D.useRef)(null),U=ue(),W=(0,D.useRef)(U);W.current=U;let G=i||[u.LOG_OFF,u.TURN_OFF].includes(e)&&t&&!document.hidden,K=$(g),re=(0,D.useRef)(K);re.current=K;let q=(0,D.useCallback)(e=>{_({type:A,payload:e})},[]),J=(0,D.useCallback)(e=>{_({type:M,payload:e})},[]),ie=(0,D.useCallback)(e=>{_({type:j,payload:e})},[]),Y=(0,D.useCallback)(e=>{_({type:k,payload:e})},[]),ae=(0,D.useCallback)(e=>{_({type:P,payload:e})},[]),X=(0,D.useCallback)(e=>{_({type:O,payload:ee(e,W.current)})},[]);(0,D.useEffect)(()=>(m?.(z.current),()=>{m?.(null)}),[m]),(0,D.useLayoutEffect)(()=>{let e=z.current,t=H.current;e&&(e.inert=!G),t&&(t.inert=!i);let n=G?i?null:t:e;if(!n)return;let r=document.activeElement;r instanceof HTMLElement&&n.contains(r)&&r.blur()},[i,G]),(0,D.useEffect)(()=>{if(!g.selecting)return;let e=0,t=null,n=R.current;if(!n)return;function r(r){let i=n(r);t={docX:i.x,docY:i.y},!e&&(e=window.requestAnimationFrame(()=>{e=0;let n=t;t=null,E(e=>e.docX===n.docX&&e.docY===n.docY?e:n)}))}return window.addEventListener(`mousemove`,r,{passive:!0}),()=>{window.cancelAnimationFrame(e),window.removeEventListener(`mousemove`,r)}},[g.selecting]),(0,D.useEffect)(()=>{e!==u.START&&(b(!1),w(!0))},[e]),(0,D.useEffect)(()=>{y&&(o(),w(!0))},[y]);let Z=(0,D.useRef)(x);Z.current=x,(0,D.useEffect)(()=>{if(!y)return;let e=!0,t=Z.current,n=0;function r(){let e=t,n=0;for(;n<10&&Math.abs(e.x-t.x)<10&&Math.abs(e.y-t.y)<10;)e={x:Math.floor(Math.random()*80)+10,y:Math.floor(Math.random()*80)+10},n+=1;return t=e,e}let i=0;function a(){i=setTimeout(()=>{e&&(w(!1),n=setTimeout(()=>{e&&(S(r()),w(!0),a())},200))},2500)}return a(),()=>{e=!1,clearTimeout(i),clearTimeout(n)}},[y]),(0,D.useEffect)(()=>{if(!y)return;function e(){b(!1)}return window.addEventListener(`mousedown`,e),()=>{window.removeEventListener(`mousedown`,e)}},[y]);let Q=(0,D.useCallback)(e=>{re.current===e?_({type:j,payload:e}):_({type:A,payload:e})},[]),se=(0,D.useCallback)(e=>{_({type:N,payload:e})},[]),ce=(0,D.useCallback)(e=>{let t=Object.values(h).find(t=>t.appKey===e);t&&X(t)},[X]),le=(0,D.useCallback)(()=>{_({type:F})},[]),de=(0,D.useCallback)(e=>{let t={Internet:h[`Internet Explorer`],Minesweeper:h.Minesweeper,"My Computer":h[`My Computer`],Notepad:h.Notepad,Winamp:h.Winamp,Paint:h.Paint};if(t[e]){s(c(`/sounds/Windows%20Navigation%20Start.mp3`),Te),X(t[e]);return}if(e===`Log Off`){p?.(u.LOG_OFF);return}if(e===`Turn Off Computer`){p?.(u.TURN_OFF);return}X({...h.Error,injectProps:{message:`C:\\nApplication not found`}})},[p,X]);function fe(e){if(e.target!==e.currentTarget&&e.target!==H.current)return;let t=f(e.currentTarget);R.current=t;let n=t(e);E({docX:n.x,docY:n.y}),_({type:I,payload:{x:n.x,y:n.y}})}function pe(){_({type:L})}function he(e){if(!(e===`Log Off`||e===`Switch User`)){if(e===`Stand By`){b(!0),p?.(u.START);return}if(e===`Turn Off`){p?.(u.SHUTTING_DOWN);return}if(e===`Restart`){p?.(u.RESTARTING);return}p?.(u.START)}}function ge(){p?.(u.START)}function _e(){b(!1)}return(0,V.jsxs)(Pe,{ref:z,"data-winxp-desktop-stage":`true`,onMouseUp:pe,onMouseDown:fe,children:[(0,V.jsxs)(Fe,{$prepared:B,ref:H,state:e,hidden:y,wallpaperUrl:v,children:[(0,V.jsx)(Se,{icons:g.icons,onMouseDown:se,onDoubleClick:ce,displayFocus:g.focusing===d.ICON,mouse:T,selecting:g.selecting,setSelectedIcons:ae}),(0,V.jsx)(te,{startPos:g.selecting,mouse:T}),(0,V.jsx)(me,{apps:g.apps,onMouseDown:q,onClose:Y,onMinimize:ie,onMaximize:J,focusedAppId:K,outerFocusSettled:t,desktopVisible:n,desktopFrozen:r,desktopInteractive:i,startupHydrationReady:a}),(0,V.jsx)(oe,{apps:g.apps,onMouseDownApp:Q,focusedAppId:K,onMouseDown:le,onClickMenuItem:de,desktopFrozen:r,desktopVisible:n})]}),[u.LOG_OFF,u.TURN_OFF].includes(e)&&(0,V.jsx)(ne,{onClose:ge,onClickButton:he,mode:e}),y&&(0,V.jsx)(Ie,{position:x,isVisible:C,onExit:_e})]})}var Me=r`
  0% {
    filter: brightness(1) grayscale(0);
  }
  30% {
    filter: brightness(1) grayscale(0);
  }
  100% {
    filter: brightness(0.6) grayscale(1);
  }
`,Ne={[u.START]:``,[u.TURN_OFF]:Me,[u.LOG_OFF]:Me},Pe=i.div`
  position: absolute;
  inset: 0;
  overflow: hidden;
  background: #000;
`,Fe=i.div`
  position: relative;
  height: 100%;
  width: 100%;
  background-color: #4f94de;
  background-image: ${({wallpaperUrl:e})=>e?`url(${e})`:`none`};
  background-repeat: no-repeat;
  background-position: center center;
  background-size: cover;
  animation: ${({state:e})=>Ne[e]} 5s forwards;
  visibility: ${({state:e,hidden:t,$prepared:n})=>t?`hidden`:n||[u.START,u.LOG_OFF,u.TURN_OFF].includes(e)?`visible`:`hidden`};
`,Ie=({position:e,isVisible:t,onExit:n})=>(0,V.jsx)(Le,{onMouseDown:n,children:(0,V.jsx)(`div`,{className:`saver-logo ${t?`is-visible`:``}`,style:{left:`${e.x}%`,top:`${e.y}%`},children:(0,V.jsx)(`img`,{src:c(`/images/WindowsXPProLogo.png`),alt:`Windows`})})}),Le=i.div`
  position: absolute;
  inset: 0;
  z-index: 99999;
  background: #000;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: none;

  .saver-logo {
    position: absolute;
    opacity: 0;
    transition: opacity 0.4s ease-in-out;
    transform: translate(-50%, -50%);
  }

  .saver-logo.is-visible {
    opacity: 0.9;
  }

  img {
    width: ${we}px;
    height: auto;
  }
`;export{je as default};