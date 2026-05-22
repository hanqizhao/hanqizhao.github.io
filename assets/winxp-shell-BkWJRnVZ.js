import{n as e}from"./rolldown-runtime-BVbofQct.js";import{$ as t,$t as n,A as r,At as i,B as a,Bt as o,C as s,Ct as c,D as l,Dt as u,E as d,Et as f,F as p,Ft as m,G as h,Gt as g,H as _,Ht as v,I as y,It as b,J as x,K as S,Kt as C,L as ee,Lt as w,M as T,Mt as E,N as D,Nt as O,O as k,Ot as A,P as j,Pt as M,Q as N,Qt as P,R as F,Rt as te,S as I,St as L,T as R,Tt as z,U as ne,Ut as re,V as ie,Vt as ae,W as oe,Wt as se,X as ce,Xt as B,Y as le,Z as ue,Zt as de,_ as fe,_t as pe,an as me,at as he,b as ge,bt as _e,c as ve,ct as ye,d as be,dn as V,dt as H,en as xe,et as Se,f as Ce,fn as we,ft as Te,g as Ee,gt as De,h as Oe,ht as ke,in as Ae,it as je,j as Me,jt as U,k as Ne,kt as Pe,l as Fe,ln as W,lt as Ie,m as Le,mt as Re,nn as G,nt as ze,on as Be,ot as Ve,p as He,pn as Ue,pt as We,q as Ge,qt as Ke,rn as qe,rt as Je,s as Ye,sn as Xe,st as Ze,tn as Qe,tt as $e,u as et,un as K,ut as tt,v as nt,vt as rt,w as it,wt as at,x as ot,xt as st,y as ct,yt as lt,z as ut,zt as dt}from"./winxp-core-CBk7ns0J.js";import{c as ft,i as pt,o as q,t as mt}from"./react-vendor-DbC8iAKZ.js";var J=e(ft(),1),Y=mt();function ht(e){return(0,Y.jsx)(vt,{children:(0,Y.jsx)(_t,{...e})})}var gt=({className:e,children:t})=>{function n(e){e.preventDefault(),e.stopPropagation()}return(0,Y.jsx)(`div`,{className:e,onMouseMove:n,onClick:n,onMouseDown:n,onMouseUp:n,children:t})},_t=({mode:e,onClose:t,onClickButton:n})=>{let r=e===K.TURN_OFF?`Turn off computer`:`Log Off Windows`;function a(){return e===K.TURN_OFF?(0,Y.jsxs)(Y.Fragment,{children:[(0,Y.jsx)(X,{img:U,text:`Stand By`,onClick:n}),(0,Y.jsx)(X,{img:U,text:`Turn Off`,onClick:n}),(0,Y.jsx)(X,{style:{margin:`-3px 0 0px 0`,width:`33px`,height:`33px`},img:Pe,text:`Restart`,onClick:n})]}):(0,Y.jsxs)(Y.Fragment,{children:[(0,Y.jsx)(X,{img:A,text:`Switch User`,style:{border:`1px solid #fff`,borderRadius:`3px`},onClick:n}),(0,Y.jsx)(X,{img:i,text:`Log Off`,onClick:n})]})}return(0,Y.jsxs)(`div`,{className:`modal`,children:[(0,Y.jsxs)(`header`,{className:`header`,children:[(0,Y.jsx)(`span`,{className:`header__text`,children:r}),(0,Y.jsx)(`img`,{src:E,alt:``,className:`header__img`})]}),(0,Y.jsx)(`div`,{className:`content`,children:a()}),(0,Y.jsx)(`footer`,{className:`footer`,children:(0,Y.jsx)(`button`,{onClick:t,className:`footer__button`,children:`Cancel`})})]})},X=({style:e,img:t,text:n,onClick:r})=>{function i(){r(n)}return(0,Y.jsxs)(`div`,{className:`button-container`,children:[(0,Y.jsx)(`img`,{onClick:i,style:{...e},src:t,alt:n,className:`button-img`}),(0,Y.jsx)(`span`,{className:`button-text`,children:n})]})},vt=q(gt)`
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
`,yt=[{type:`item`,icon:H,text:`(Empty)`}],bt=[{type:`item`,icon:Se,text:`MSN`},{type:`item`,icon:x,text:`Show all connections`}],xt=[{type:`item`,icon:ue,text:`Set Program Access and Defaults`},{type:`item`,icon:_,text:`Windows Catalog`},{type:`item`,icon:Ge,text:`Windows Update`},{type:`separator`},{type:`menu`,icon:h,text:`Accessories`,items:[{type:`menu`,icon:h,text:`Accessibility`,bottom:`initial`,items:[{type:`item`,icon:le,text:`Accessibility Wizard`},{type:`item`,icon:T,text:`Magnifier`},{type:`item`,icon:Ee,text:`Narrator`},{type:`item`,icon:Ie,text:`On-Screen Keyboard`},{type:`item`,icon:Ve,text:`Utility Manager`}]},{type:`menu`,icon:h,text:`Communications`,bottom:`initial`,items:[{type:`item`,icon:y,text:`HyperTerminal`},{type:`item`,icon:ie,text:`Network Connections`},{type:`item`,icon:ee,text:`Network Setup Wizard`},{type:`item`,icon:F,text:`New Connection Wizard`},{type:`item`,icon:ce,text:`Wireless Network Setup Wizard`}]},{type:`menu`,icon:h,text:`Entertainment`,bottom:`initial`,items:[{type:`item`,icon:p,text:`Sound Recorder`},{type:`item`,icon:he,text:`Volume Control`},{type:`item`,icon:Me,text:`Windows Media Player`}]},{type:`menu`,icon:h,text:`System Tools`,bottom:`initial`,items:[{type:`item`,icon:tt,text:`Backup`},{type:`item`,icon:je,text:`Character Map`},{type:`item`,icon:Je,text:`Disk Cleanup`},{type:`item`,icon:ne,text:`Disk Defragmenter`},{type:`item`,icon:oe,text:`Files and Settings Transfer Wizard`},{type:`item`,icon:j,text:`Scheduled Tasks`},{type:`item`,icon:N,text:`Security Center`},{type:`item`,icon:a,text:`System Information`},{type:`item`,icon:Le,text:`System Restore`}]},{type:`item`,icon:ut,text:`Address Book`},{type:`item`,icon:ye,text:`Command Prompt`},{type:`item`,icon:se,text:`Notepad`},{type:`item`,icon:o,text:`Paint`},{type:`item`,icon:Ze,text:`Calculator`},{type:`item`,icon:D,text:`Program Compatibility Wizard`},{type:`item`,icon:nt,text:`Remote Desktop Connection`},{type:`item`,icon:t,text:`Synchronize`},{type:`item`,icon:r,text:`Tour Windows XP`},{type:`item`,icon:$e,text:`Windows Explorer`},{type:`item`,icon:ze,text:`WordPad`}]},{type:`menu`,icon:h,text:`Games`,items:[{type:`item`,icon:ge,text:`FreeCell`},{type:`item`,icon:ct,text:`Hearts`},{type:`item`,icon:it,text:`Internet Backgammon`},{type:`item`,icon:R,text:`Internet Checkers`},{type:`item`,icon:d,text:`Internet Hearts`},{type:`item`,icon:l,text:`Internet Reversi`},{type:`item`,icon:k,text:`Internet Spades`},{type:`item`,icon:C,text:`Minesweeper`},{type:`item`,icon:Oe,text:`Pinball`},{type:`item`,icon:fe,text:`Solitaire`},{type:`item`,icon:ot,text:`Spider Solitaire`}]},{type:`menu`,icon:h,text:`Startup`,items:[{type:`item`,icon:H,text:`(Empty)`}]},{type:`item`,icon:I,text:`Internet Explorer`},{type:`item`,icon:Ne,text:`Outlook Express`},{type:`item`,icon:S,text:`Remote Assistance`},{type:`item`,icon:Me,text:`Windows Media Player`},{type:`item`,icon:c,text:`Windows Messenger`},{type:`item`,icon:s,text:`Windows Movie Maker`}];function St({className:e,onClick:t}){let[n,r]=(0,J.useState)(``);function a(e){let t=e.target.closest(`.menu__item`);t&&r(t.querySelector(`.menu__item__text`).textContent)}return(0,Y.jsxs)(`div`,{className:e,children:[(0,Y.jsxs)(`header`,{children:[(0,Y.jsx)(`img`,{className:`header__img`,src:We,alt:`avatar`}),(0,Y.jsx)(`span`,{className:`header__text`,children:`Hanqi Zhao`})]}),(0,Y.jsxs)(`section`,{className:`menu`,onMouseOver:a,children:[(0,Y.jsx)(`hr`,{className:`orange-hr`}),(0,Y.jsxs)(`div`,{className:`menu__left`,children:[(0,Y.jsx)(Q,{onClick:t,text:`Internet`,icon:Ke,children:(0,Y.jsx)(`div`,{className:`menu__item__subtext`,children:`Internet Explorer`})}),(0,Y.jsx)(Q,{onClick:t,text:`E-mail`,icon:z,children:(0,Y.jsx)(`div`,{className:`menu__item__subtext`,children:`Outlook Express`})}),(0,Y.jsx)(`div`,{className:`menu__separator`}),(0,Y.jsx)(Z,{onClick:t,items:[{icon:C,text:`Minesweeper`},{icon:re,text:`Notepad`},{icon:v,text:`Winamp`},{icon:ae,text:`Paint`},{icon:at,text:`Windows Media Player`},{icon:c,text:`Windows Messenger`}]}),(0,Y.jsx)(`div`,{style:{flex:1}}),(0,Y.jsx)(`div`,{className:`menu__separator`}),(0,Y.jsx)(Q,{style:n===`All Programs`?{backgroundColor:`#2f71cd`,color:`#FFF`}:{},text:(0,Y.jsxs)(`div`,{style:{display:`flex`,alignItems:`center`},children:[`All Programs`,(0,Y.jsx)(`img`,{src:Te,alt:``,style:{marginLeft:`5px`,height:`18px`}})]}),icon:H,children:n===`All Programs`&&(0,Y.jsx)(u,{data:xt,onClick:t})})]}),(0,Y.jsxs)(`div`,{className:`menu__right`,children:[(0,Y.jsx)(Q,{text:`My Documents`,icon:dt,onClick:t}),(0,Y.jsxs)(Q,{style:n===`My Recent Documents`?{backgroundColor:`#2f71cd`,color:`#FFF`}:{},text:`My Recent Documents`,icon:L,children:[(0,Y.jsx)(`div`,{style:{borderLeftColor:n===`My Recent Documents`?`#FFF`:`#00136b`},className:`menu__arrow`}),n===`My Recent Documents`&&(0,Y.jsx)(u,{left:`153px`,data:yt,onClick:t})]}),(0,Y.jsx)(Z,{onClick:t,items:[{icon:st,text:`My Pictures`},{icon:_e,text:`My Music`},{icon:g,text:`My Computer`}]}),(0,Y.jsx)(`div`,{className:`menu__separator`}),(0,Y.jsx)(Z,{onClick:t,items:[{icon:lt,text:`Control Panel`},{icon:f,text:`Set Program Access and Defaults`}]}),(0,Y.jsxs)(Q,{style:n===`Connect To`?{backgroundColor:`#2f71cd`,color:`#FFF`}:{},text:`Connect To`,icon:rt,children:[(0,Y.jsx)(`div`,{style:{borderLeftColor:n===`Connect To`?`#FFF`:`#00136b`},className:`menu__arrow`}),n===`Connect To`&&(0,Y.jsx)(u,{left:`153px`,data:bt,onClick:t})]}),(0,Y.jsx)(Q,{onClick:t,text:`Printers and Faxes`,icon:pe}),(0,Y.jsx)(`div`,{className:`menu__separator`}),(0,Y.jsx)(Z,{onClick:t,items:[{icon:De,text:`Help and Support`},{icon:ke,text:`Search`},{icon:Re,text:`Run...`}]})]})]}),(0,Y.jsxs)(`footer`,{children:[(0,Y.jsxs)(`div`,{className:`footer__item`,onClick:()=>t(`Log Off`),children:[(0,Y.jsx)(`img`,{className:`footer__item__img`,src:i,alt:``}),(0,Y.jsx)(`span`,{children:`Log Off`})]}),(0,Y.jsxs)(`div`,{className:`footer__item`,onClick:()=>t(`Turn Off Computer`),children:[(0,Y.jsx)(`img`,{className:`footer__item__img`,src:U,alt:``}),(0,Y.jsx)(`span`,{children:`Turn Off Computer`})]})]})]})}function Z({items:e,...t}){return e.map((e,n)=>(0,Y.jsx)(Q,{...e,...t},n))}function Q({style:e,text:t,icon:n,onHover:r=()=>{},onClick:i=()=>{},children:a}){function o(){i(t)}function s(){r(t)}return(0,Y.jsxs)(`div`,{className:`menu__item`,style:e,onClick:o,onMouseEnter:s,children:[(0,Y.jsx)(`img`,{className:`menu__item__img`,src:n,alt:t}),(0,Y.jsxs)(`div`,{className:`menu__item__texts`,children:[(0,Y.jsx)(`div`,{className:`menu__item__text `,children:t}),a]})]})}var Ct=q(St)`
  font-size: 11px;
  line-height: 14px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #4282d6;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  header {
    position: relative;
    align-self: flex-start;
    display: flex;
    align-items: center;
    color: #fff;
    height: 54px;
    padding: 6px 5px 5px;
    width: 100%;
    border-top-left-radius: 5px;
    border-top-right-radius: 5px;
    background: linear-gradient(
      to bottom,
      #1868ce 0%,
      #0e60cb 12%,
      #0e60cb 20%,
      #1164cf 32%,
      #1667cf 33%,
      #1b6cd3 47%,
      #1e70d9 54%,
      #2476dc 60%,
      #297ae0 65%,
      #3482e3 77%,
      #3786e5 79%,
      #428ee9 90%,
      #4791eb 100%
    );
    overflow: hidden;
  }
  header:before {
    content: '';
    display: block;
    position: absolute;
    top: 1px;
    left: 0;
    width: 100%;
    height: 3px;
    background: linear-gradient(
      to right,
      transparent 0,
      rgb(255, 255, 255, 0.3) 1%,
      rgb(255, 255, 255, 0.5) 2%,
      rgb(255, 255, 255, 0.5) 95%,
      rgb(255, 255, 255, 0.3) 98%,
      rgb(255, 255, 255, 0.2) 99%,
      transparent 100%
    );
    box-shadow: inset 0 -1px 1px #0e60cb;
  }
  .header__img {
    width: 42px;
    height: 42px;
    margin-right: 5px;
    border-radius: 3px;
    border: 2px solid rgb(222, 222, 222, 0.8);
  }
  .header__text {
    font-size: 14px;
    font-weight: 700;
    text-shadow: 1px 1px rgba(0, 0, 0, 0.7);
  }
  footer {
    display: flex;
    align-self: flex-end;
    align-items: center;
    justify-content: flex-end;
    color: #fff;
    height: 36px;
    width: 100%;
    background: linear-gradient(
      to bottom,
      #4282d6 0%,
      #3b85e0 3%,
      #418ae3 5%,
      #418ae3 17%,
      #3c87e2 21%,
      #3786e4 26%,
      #3482e3 29%,
      #2e7ee1 39%,
      #2374df 49%,
      #2072db 57%,
      #196edb 62%,
      #176bd8 72%,
      #1468d5 75%,
      #1165d2 83%,
      #0f61cb 88%
    );
  }

  .footer__item {
    padding: 3px;
    display: flex;
    margin-right: 10px;
    align-items: center;
    &:hover {
      background-color: rgba(60, 80, 210, 0.5);
    }
    &:hover:active > * {
      transform: translate(1px, 1px);
    }
  }
  .footer__item__img {
    border-radius: 3px;
    margin-right: 2px;
    width: 22px;
    height: 22px;
  }
  .menu {
    display: flex;
    margin: 0 2px;
    position: relative;
    border-top: 1px solid #385de7;
    box-shadow: 0 1px #385de7;
  }
  .orange-hr {
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    display: block;
    height: 2px;
    background: linear-gradient(
      to right,
      rgba(0, 0, 0, 0) 0%,
      #da884a 50%,
      rgba(0, 0, 0, 0) 100%
    );
    border: 0;
  }
  .menu__right {
    background-color: #cbe3ff;
    border-left: solid #3a3aff5e 1px;
    padding: 6px 5px 5px;
    width: 190px;
    color: #00136b;
  }
  .menu__left {
    background-color: #fff;
    padding: 6px 5px 0;
    width: 190px;
    display: flex;
    flex-direction: column;
  }
  .sub_menu {
    border: 1px solid black;
    position: absolute;
    left: 100%;
    bottom: 0;
    background-color: #fff;
    display: flex;
    flex-direction: column;
  }

  .menu__separator {
    height: 7.5px;
    background: linear-gradient(
      to right,
      rgba(0, 0, 0, 0) 0%,
      rgba(0, 0, 0, 0.1) 50%,
      rgba(0, 0, 0, 0) 100%
    );
    border-top: 3px solid transparent;
    border-bottom: 3px solid transparent;
    background-clip: content-box;
  }
  .menu__right .menu__separator {
    background: linear-gradient(
      to right,
      rgba(0, 0, 0, 0) 0%,
      #87b3e2b5 50%,
      rgba(0, 0, 0, 0) 100%
    );
    background-clip: content-box;
  }
  .menu__item {
    padding: 1px;
    display: flex;
    align-items: center;
    margin-bottom: 4px;
  }
  .menu__left .menu__item {
    height: 34px;
  }
  .menu__right .menu__item {
    height: 26px;
    margin-bottom: 4px;
    line-height: 13px;
  }
  .menu__item:hover {
    color: white;
    background-color: #2f71cd;
  }
  .menu__item:hover .menu__item__subtext {
    color: white;
  }
  .menu__item__texts {
    display: flex;
    flex-direction: column;
    justify-content: center;
    height: 100%;
    position: relative;
  }
  .menu__right .menu__item__img {
    margin-right: 3px;
    width: 22px;
    height: 22px;
  }
  .menu__left .menu__item__img {
    margin-right: 3px;
    width: 30px;
    height: 30px;
  }
  .menu__right .menu__item:nth-child(-n + 5),
  .menu__left .menu__item:nth-child(-n + 2),
  .menu__left .menu__item:last-child {
    .menu__item__text {
      font-weight: 700;
    }
  }
  .menu__item__subtext {
    color: rgba(0, 0, 0, 0.4);
    line-height: 12px;
    margin-bottom: 1px;
  }
  .menu__left .menu__item:last-child {
    height: 24px;
  }
  .menu__item:hover .menu__arrow {
    border-left-color: #fff;
  }
  .menu__arrow {
    border: 3.5px solid transparent;
    border-right: 0;
    border-left-color: #00136b;
    position: absolute;
    left: 146px;
  }
`,$=()=>{let e=new Date,t=e.getHours(),n=`AM`,r=e.getMinutes();return t>=12&&(t-=12,n=`PM`),t===0&&(t=12),r<10&&(r=`0`+r),`${t}:${r} ${n}`};function wt({onMouseDownApp:e,apps:t,focusedAppId:n,onMouseDown:r,onClickMenuItem:i,desktopFrozen:a=!1}){let[o,s]=(0,J.useState)($),[c,l]=(0,J.useState)(!1),u=(0,J.useRef)(null);function d(){let e=new Audio(V(`/sounds/Windows%20XP%20Start.mp3`));e.volume=.8,e.play().catch(()=>{}),l(e=>!e)}function f(e){e.target.closest(`.footer__start__menu`)||(e.stopPropagation(),d())}function m(e){e.target.closest(`.footer__window`)||e.target.closest(`.footer__start-region`)||r()}function h(e){i(e),l(!1)}return(0,J.useEffect)(()=>{if(a)return;let e=0;function t(){let n=new Date,r=(60-n.getSeconds())*1e3-n.getMilliseconds()+20;e=window.setTimeout(()=>{s($()),t()},r)}return s($()),t(),()=>{window.clearTimeout(e)}},[a]),(0,J.useEffect)(()=>{let e=u.current;if(!e)return;function t(t){c&&(e.contains(t.target)||t.target.closest(`.footer__start-region`)||l(!1))}return window.addEventListener(`mousedown`,t),()=>window.removeEventListener(`mousedown`,t)},[c]),(0,Y.jsxs)(Et,{onMouseDown:m,children:[(0,Y.jsx)(`div`,{ref:u,className:`footer__start__menu`,children:c&&(0,Y.jsx)(Ct,{onClick:h})}),(0,Y.jsxs)(`div`,{className:`footer__items left`,children:[(0,Y.jsx)(`div`,{className:`footer__start-region`,onMouseDown:f,children:(0,Y.jsx)(`img`,{src:be,alt:`start`,className:`footer__start`})}),[...t].map(t=>!t.header.noFooterWindow&&(0,Y.jsx)(Tt,{id:t.id,icon:t.header.icon,title:t.header.title,onMouseDown:e,isFocus:n===t.id},t.id))]}),(0,Y.jsxs)(`div`,{className:`footer__items right`,children:[(0,Y.jsx)(`img`,{className:`footer__icon`,src:p,alt:``}),(0,Y.jsx)(`img`,{className:`footer__icon`,src:et,alt:``}),(0,Y.jsx)(`img`,{className:`footer__icon`,src:He,alt:``}),(0,Y.jsx)(`div`,{style:{position:`relative`,width:0,height:0},children:(0,Y.jsx)(Ce,{})}),(0,Y.jsx)(`div`,{className:`footer__time`,children:o})]})]})}function Tt({id:e,icon:t,title:n,onMouseDown:r,isFocus:i}){function a(){r(e)}return(0,Y.jsxs)(`div`,{onMouseDown:a,className:`footer__window ${i?`focus`:`cover`}`,children:[(0,Y.jsx)(`img`,{className:`footer__icon`,src:t,alt:n}),(0,Y.jsx)(`div`,{className:`footer__text`,children:n})]})}var Et=q.footer`
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
`;function Dt({buttons:e,onMaximize:t,onMinimize:n,onClose:r,maximized:i,resizable:a,className:o}){let s={minimize:(0,Y.jsx)(`button`,{className:`header__button header__button--minimize`,onMouseUp:n},`minimize`),maximize:(0,Y.jsx)(`button`,{className:`header__button ${i?`header__button--maximized`:`header__button--maximize`} ${a?``:`header__button--disable`}`,onMouseUp:t},`maximize`),close:(0,Y.jsx)(`button`,{className:`header__button header__button--close`,onMouseUp:r},`button`)};return(0,Y.jsx)(`div`,{className:o,children:e?e.map(e=>s[e]):(0,Y.jsxs)(Y.Fragment,{children:[s.minimize,s.maximize,s.close]})})}var Ot=q(Dt)`
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
`;function kt({Component:e,header:t,injectProps:n,onClose:r,onMinimize:i,isFocus:a,windowVisible:o,outerFocusSettled:s,desktopVisible:c,desktopFrozen:l,desktopInteractive:u}){return e?(0,Y.jsx)(e,{onClose:r,onMinimize:i,isFocus:a,windowVisible:o,outerFocusSettled:s,desktopVisible:c,desktopFrozen:l,desktopInteractive:u,...n}):t?.invisible?null:(0,Y.jsx)(`div`,{className:`app__placeholder`})}function At({apps:e,onMouseDown:t,onClose:n,onMinimize:r,onMaximize:i,focusedAppId:a,outerFocusSettled:o,desktopVisible:s,desktopFrozen:c,desktopInteractive:l,startupHydrationReady:u}){return(0,Y.jsx)(`div`,{style:{position:`relative`,zIndex:0},children:e.map(e=>(0,Y.jsx)(jt,{show:!e.minimized,id:e.id,onMouseDown:t,onMouseUpClose:n,onMouseUpMinimize:r,onMouseUpMaximize:i,isFocus:a===e.id,outerFocusSettled:o,desktopVisible:s,desktopFrozen:c,desktopInteractive:l,startupHydrationReady:u,...e},e.id))})}var jt=q((0,J.memo)(function({show:e,injectProps:t,id:n,onMouseDown:r,onMouseUpClose:i,onMouseUpMinimize:a,onMouseUpMaximize:o,header:s,defaultSize:c,defaultOffset:l,resizable:u,maximized:d,appKey:f,component:p,zIndex:m,isFocus:h,outerFocusSettled:g,desktopVisible:_,desktopFrozen:v,desktopInteractive:y,startupHydrationReady:b,className:x}){let[S,C]=(0,J.useState)(()=>p??w(f)??null);(0,J.useEffect)(()=>{if(p){C(()=>p);return}let e=w(f);if(e){C(()=>e);return}if(!f){C(null);return}if(!(f===O.WINAMP?y:f!==O.MY_SHOWCASE||b)){C(null);return}let t=!0;return te(f).then(e=>{t&&C(()=>e)}).catch(e=>{console.warn(`Failed to lazy-load window content: ${f}`,e)}),()=>{t=!1}},[f,p,y,g,b]);function ee(){r(n)}function T(){i(n)}function E(){a(n)}function D(){u&&o(n)}function k(e){e.target===A.current&&D()}let A=(0,J.useRef)(null),j=(0,J.useRef)(null),{width:M,height:N}=ve(),{offset:P,size:F}=Fe(j,{dragRef:A,defaultOffset:l,defaultSize:c,boundary:{top:1,right:M-1,bottom:N-31,left:1},resizable:u,resizeThreshold:10}),I,L,R,z;return d?(I=M+6,L=N-24,R=-3,z=-3):(I=F.width,L=F.height,R=P.x,z=P.y),(0,Y.jsxs)(`div`,{className:x,ref:j,onMouseDown:ee,"data-app-key":f??void 0,"data-window-visible":e?`true`:`false`,"data-desktop-frozen":v?`true`:`false`,"data-desktop-interactive":y?`true`:`false`,style:{transform:`translate(${R}px,${z}px)`,width:I?`${I}px`:`auto`,height:L?`${L}px`:`auto`,zIndex:m,pointerEvents:y?`auto`:`none`},children:[(0,Y.jsx)(`div`,{className:`header__bg`}),(0,Y.jsxs)(`header`,{className:`app__header`,ref:A,onDoubleClick:k,children:[(0,Y.jsx)(`img`,{onDoubleClick:T,src:s.icon,alt:s.title,className:`app__header__icon`,draggable:!1}),(0,Y.jsx)(`div`,{className:`app__header__title`,children:s.title}),(0,Y.jsx)(Ot,{buttons:s.buttons,onMaximize:D,onMinimize:E,onClose:T,maximized:d,resizable:u,isFocus:h})]}),(0,Y.jsx)(`div`,{className:`app__content`,children:(0,Y.jsx)(kt,{Component:S,header:s,injectProps:t,onClose:T,onMinimize:E,isFocus:h,windowVisible:e,outerFocusSettled:g,desktopVisible:_,desktopFrozen:v,desktopInteractive:y})})]})}))`
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
`,Mt=.95;function Nt({icons:e,onMouseDown:t,onDoubleClick:n,displayFocus:r,mouse:i,selecting:a,setSelectedIcons:o}){let[s,c]=(0,J.useState)([]);function l(e){s.find(t=>t.id===e.id)||c(t=>[...t,e])}return(0,J.useEffect)(()=>{if(!a)return;let e=Math.min(a.x,i.docX),t=Math.min(a.y,i.docY),n=Math.abs(a.x-i.docX),r=Math.abs(a.y-i.docY);o(s.filter(i=>{let{x:a,y:o,w:s,h:c}=i;return a-e<n&&e-a<s&&o-t<r&&t-o<c}).map(e=>e.id))},[s,o,a,i.docX,i.docY]),(0,Y.jsx)(Ft,{children:e.map(e=>(0,Y.jsx)(It,{...e,displayFocus:r,onMouseDown:t,onDoubleClick:n,measure:l},e.id))})}function Pt({title:e,onMouseDown:t,onDoubleClick:n,icon:r,className:i,id:a,appKey:o,measure:s}){let c=(0,J.useRef)(null);function l(){t(a)}function u(){Ue(V(`/sounds/Windows%20Navigation%20Start.mp3`),Mt),n(o)}return(0,J.useEffect)(()=>{if(!c.current)return;let{left:e,top:t,width:n,height:r}=c.current.getBoundingClientRect();s({id:a,x:e+window.scrollX,y:t+window.scrollY,w:n,h:r})},[a,s]),(0,Y.jsxs)(`div`,{className:i,onMouseDown:l,onDoubleClick:u,ref:c,children:[(0,Y.jsx)(`div`,{className:`${i}__img__container`,children:(0,Y.jsx)(`img`,{src:r,alt:e,className:`${i}__img`})}),(0,Y.jsx)(`div`,{className:`${i}__text__container`,children:(0,Y.jsx)(`div`,{className:`${i}__text`,children:e})})]})}var Ft=q.div`
  position: absolute;
  margin-top: 15px;
  margin-left: 5px;
`,It=q(Pt)`
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
`,Lt=V(`/images/xp-wallpaper.svg`),Rt=[V(`/images/xp-wallpaper.jpg`),V(`/images/bliss.jpg`),V(`/images/bliss.jpeg`),V(`/images/bliss.png`),V(`/images/xp-bliss.jpg`),V(`/images/xp-bliss.jpeg`),V(`/images/xp-bliss.png`)],zt=240,Bt=.95;function Vt(e){return new Promise(t=>{let n=new Image;n.onload=()=>t(!0),n.onerror=()=>t(!1),n.src=e})}async function Ht(){let e=(await Promise.allSettled(Rt.map(async e=>{if(!await Vt(e))throw Error(`wallpaper-unavailable`);return e}))).find(e=>e.status===`fulfilled`);return e?.status===`fulfilled`?e.value:Lt}function Ut(e){return{...e,component:e.component??w(e.appKey)??null,header:e.header?{...e.header}:e.header,defaultSize:e.defaultSize?{...e.defaultSize}:e.defaultSize,defaultOffset:e.defaultOffset?{...e.defaultOffset}:e.defaultOffset,injectProps:e.injectProps?{...e.injectProps}:e.injectProps}}function Wt({includeStartupApps:e=!0}={}){let t=e?m.map(Ut):[];return{apps:t,nextAppID:t.length,nextZIndex:t.length,focusing:t.length>0?W.WINDOW:W.DESKTOP,icons:b.map(e=>({...e})),selecting:!1}}function Gt(){return Wt({includeStartupApps:!0})}function Kt(e,t={type:``}){switch(t.type){case B:{let n=e.apps.find(e=>e.appKey===t.payload.appKey);if(t.payload.multiInstance||!n){let n=Ut({...t.payload,id:e.nextAppID,zIndex:e.nextZIndex});return{...e,apps:[...e.apps,n],nextAppID:e.nextAppID+1,nextZIndex:e.nextZIndex+1,focusing:W.WINDOW}}let r=e.apps.map(n=>n.appKey===t.payload.appKey?{...n,component:n.component??w(n.appKey)??null,zIndex:e.nextZIndex,minimized:!1}:n);return{...e,apps:r,nextZIndex:e.nextZIndex+1,focusing:W.WINDOW}}case me:return{...e,apps:e.apps.map(e=>e.id===t.payload.id?{...e,component:t.payload.component}:e)};case de:return e.focusing===W.WINDOW?{...e,apps:e.apps.filter(e=>e.id!==t.payload),focusing:e.apps.length>1?W.WINDOW:e.icons.find(e=>e.isFocus)?W.ICON:W.DESKTOP}:e;case n:{let n=e.apps.map(n=>n.id===t.payload?{...n,zIndex:e.nextZIndex,minimized:!1}:n);return{...e,apps:n,nextZIndex:e.nextZIndex+1,focusing:W.WINDOW}}case G:{if(e.focusing!==W.WINDOW)return e;let n=e.apps.map(e=>e.id===t.payload?{...e,minimized:!0}:e);return{...e,apps:n,focusing:W.WINDOW}}case Xe:{if(e.focusing!==W.WINDOW)return e;let n=e.apps.map(e=>e.id===t.payload?{...e,maximized:!e.maximized}:e);return{...e,apps:n,focusing:W.WINDOW}}case Qe:{let n=e.icons.map(e=>({...e,isFocus:e.id===t.payload}));return{...e,focusing:W.ICON,icons:n}}case Ae:{let n=e.icons.map(e=>({...e,isFocus:t.payload.includes(e.id)}));return{...e,icons:n,focusing:W.ICON}}case xe:return{...e,focusing:W.DESKTOP,icons:e.icons.map(e=>({...e,isFocus:!1}))};case Be:return{...e,focusing:W.DESKTOP,icons:e.icons.map(e=>({...e,isFocus:!1})),selecting:t.payload};case P:return{...e,selecting:null};case qe:return{...e,...Wt({includeStartupApps:!!t.payload?.includeStartupApps})};default:return e}}function qt(e){if(e.focusing!==W.WINDOW)return-1;let t=-1,n=-1/0;return e.apps.forEach(e=>{!e.minimized&&e.zIndex>n&&(n=e.zIndex,t=e.id)}),t}function Jt({powerState:e,outerFocusSettled:t,desktopVisible:r=!0,desktopFrozen:i=!1,desktopInteractive:a=!i,startupHydrationReady:o=!1,onRequestPowerStateChange:s,onStageReady:c}){let[l,u]=(0,J.useReducer)(Kt,void 0,Gt),[d,f]=(0,J.useState)(Lt),[p,m]=(0,J.useState)(!1),[h,g]=(0,J.useState)({x:50,y:50}),[_,v]=(0,J.useState)(!0),[y,b]=(0,J.useState)({docX:0,docY:0}),x=(0,J.useRef)(new Set),S=(0,J.useRef)(null),C=qt(l),ee=l.apps.map(e=>e.id).join(`|`),T=l.apps.filter(e=>e.appKey&&!e.component).map(e=>`${e.id}:${e.appKey}`).join(`|`),E=(0,J.useCallback)(e=>{u({type:n,payload:e})},[]),D=(0,J.useCallback)(e=>{C===e&&u({type:Xe,payload:e})},[C]),k=(0,J.useCallback)(e=>{C===e&&u({type:G,payload:e})},[C]),A=(0,J.useCallback)(e=>{C===e&&u({type:de,payload:e})},[C]),j=(0,J.useCallback)(e=>{u({type:Ae,payload:e})},[]);(0,J.useEffect)(()=>(c?.(S.current),()=>{c?.(null)}),[c]),(0,J.useEffect)(()=>{if(a)return;let e=document.activeElement;e instanceof HTMLElement&&S.current?.contains(e)&&e.blur()},[a]),(0,J.useEffect)(()=>{let e=!1;return Ht().then(t=>{e||f(t)}),()=>{e=!0}},[]),(0,J.useEffect)(()=>{let e=!1,t=new Set(l.apps.map(e=>e.id));return x.current.forEach(e=>{t.has(e)||x.current.delete(e)}),l.apps.forEach(t=>{if(!t.appKey||t.component||x.current.has(t.id))return;let n=w(t.appKey);if(n){u({type:me,payload:{id:t.id,component:n}});return}(t.appKey===O.WINAMP?a:t.appKey!==O.MY_SHOWCASE||o)&&(x.current.add(t.id),te(t.appKey).then(n=>{e||u({type:me,payload:{id:t.id,component:n}})}).catch(e=>{console.warn(`Failed to lazy-load WinXP app: ${t.appKey}`,e)}).finally(()=>{x.current.delete(t.id)}))}),()=>{e=!0}},[ee,a,t,T,o]),(0,J.useEffect)(()=>{if(!l.selecting)return;function e(e){b(t=>t.docX===e.pageX&&t.docY===e.pageY?t:{docX:e.pageX,docY:e.pageY})}return window.addEventListener(`mousemove`,e),()=>{window.removeEventListener(`mousemove`,e)}},[l.selecting]),(0,J.useEffect)(()=>{e!==K.START&&(m(!1),v(!0))},[e]),(0,J.useEffect)(()=>{p&&(we(),v(!0))},[p]),(0,J.useEffect)(()=>{if(!p)return;let e=!0,t=h;function n(){let e=t,n=0;for(;n<10&&Math.abs(e.x-t.x)<10&&Math.abs(e.y-t.y)<10;)e={x:Math.floor(Math.random()*80)+10,y:Math.floor(Math.random()*80)+10},n+=1;return t=e,e}let r=setInterval(()=>{e&&(v(!1),setTimeout(()=>{e&&(g(n()),v(!0))},200))},2500);return()=>{e=!1,clearInterval(r)}},[p,h]),(0,J.useEffect)(()=>{if(!p)return;function e(){m(!1)}return window.addEventListener(`mousedown`,e),()=>{window.removeEventListener(`mousedown`,e)}},[p]);function N(e){u(C===e?{type:G,payload:e}:{type:n,payload:e})}function F(e){u({type:Qe,payload:e})}function I(e){let t=Object.values(M).find(t=>t.appKey===e);t&&u({type:B,payload:t})}function L(){u({type:xe})}function R(){Ue(V(`/sounds/Windows%20Navigation%20Start.mp3`),Bt)}function z(e){if(e===`Internet`){R(),u({type:B,payload:M[`Internet Explorer`]});return}if(e===`Minesweeper`){R(),u({type:B,payload:M.Minesweeper});return}if(e===`My Computer`){R(),u({type:B,payload:M[`My Computer`]});return}if(e===`Notepad`){R(),u({type:B,payload:M.Notepad});return}if(e===`Winamp`){R(),u({type:B,payload:M.Winamp});return}if(e===`Paint`){R(),u({type:B,payload:M.Paint});return}if(e===`Log Off`){s?.(K.LOG_OFF);return}if(e===`Turn Off Computer`){s?.(K.TURN_OFF);return}u({type:B,payload:{...M.Error,injectProps:{message:`C:\\nApplication not found`}}})}function ne(e){e.target===e.currentTarget&&(b({docX:e.pageX,docY:e.pageY}),u({type:Be,payload:{x:e.pageX,y:e.pageY}}))}function re(){u({type:P})}function ie(e){if(!(e===`Log Off`||e===`Switch User`)){if(e===`Stand By`){m(!0),s?.(K.START);return}if(e===`Turn Off`){s?.(K.SHUTTING_DOWN);return}if(e===`Restart`){s?.(K.RESTARTING);return}s?.(K.START)}}function ae(){s?.(K.START)}function oe(){m(!1)}return(0,Y.jsxs)(Zt,{ref:S,"data-winxp-desktop-stage":`true`,onMouseUp:re,onMouseDown:ne,children:[(0,Y.jsxs)(Qt,{state:e,hidden:p,wallpaperUrl:d,children:[(0,Y.jsx)(Nt,{icons:l.icons,onMouseDown:F,onDoubleClick:I,displayFocus:l.focusing===W.ICON,mouse:y,selecting:l.selecting,setSelectedIcons:j}),(0,Y.jsx)(Ye,{startPos:l.selecting,mouse:y}),(0,Y.jsx)(At,{apps:l.apps,onMouseDown:E,onClose:A,onMinimize:k,onMaximize:D,focusedAppId:C,outerFocusSettled:t,desktopVisible:r,desktopFrozen:i,desktopInteractive:a,startupHydrationReady:o}),(0,Y.jsx)(wt,{apps:l.apps,onMouseDownApp:N,focusedAppId:C,onMouseDown:L,onClickMenuItem:z,desktopFrozen:i})]}),[K.LOG_OFF,K.TURN_OFF].includes(e)&&(0,Y.jsx)(ht,{onClose:ae,onClickButton:ie,mode:e}),p&&(0,Y.jsx)($t,{position:h,isVisible:_,onExit:oe})]})}var Yt=pt`
  0% {
    filter: brightness(1) grayscale(0);
  }
  30% {
    filter: brightness(1) grayscale(0);
  }
  100% {
    filter: brightness(0.6) grayscale(1);
  }
`,Xt={[K.START]:``,[K.TURN_OFF]:Yt,[K.LOG_OFF]:Yt},Zt=q.div`
  position: absolute;
  inset: 0;
  overflow: hidden;
  background: #000;
`,Qt=q.div`
  position: relative;
  height: 100%;
  width: 100%;
  background-color: #4f94de;
  background-image: ${({wallpaperUrl:e})=>e?`url(${e})`:`none`};
  background-repeat: no-repeat;
  background-position: center center;
  background-attachment: fixed;
  background-size: cover;
  animation: ${({state:e})=>Xt[e]} 5s forwards;
  visibility: ${({state:e,hidden:t})=>t?`hidden`:[K.START,K.LOG_OFF,K.TURN_OFF].includes(e)?`visible`:`hidden`};
`,$t=({position:e,isVisible:t,onExit:n})=>(0,Y.jsx)(en,{onMouseDown:n,children:(0,Y.jsx)(`div`,{className:`saver-logo ${t?`is-visible`:``}`,style:{left:`${e.x}%`,top:`${e.y}%`},children:(0,Y.jsx)(`img`,{src:V(`/images/WindowsXPProLogo.png`),alt:`Windows`})})}),en=q.div`
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
    width: ${zt}px;
    height: auto;
  }
`;export{Jt as t};