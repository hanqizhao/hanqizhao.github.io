import{i as e,n as t,t as n}from"./jsx-runtime-xty2or4m.js";import{a as r}from"./styled-components.browser.esm-UXiHu3Ep.js";import{o as i}from"./components-CarJ1nMQ.js";var a=e(t(),1),o={File:[{type:`item`,disable:!0,text:`New`},{type:`item`,disable:!0,text:`Open...`},{type:`item`,disable:!0,text:`Save`},{type:`item`,disable:!0,text:`Save As...`},{type:`separator`},{type:`item`,disable:!0,text:`Page Setup...`},{type:`item`,disable:!0,text:`Print...`},{type:`separator`},{type:`item`,text:`Exit`}],Edit:[{type:`item`,disable:!0,text:`Undo...`},{type:`separator`},{type:`item`,disable:!0,text:`Cut`},{type:`item`,disable:!0,text:`Copy`},{type:`item`,disable:!0,text:`Paste`},{type:`item`,disable:!0,text:`Delete`},{type:`separator`},{type:`item`,disable:!0,text:`Find...`},{type:`item`,disable:!0,text:`Find Next`},{type:`item`,disable:!0,text:`Replace...`},{type:`item`,disable:!0,text:`Go To...`},{type:`separator`},{type:`item`,disable:!0,text:`Select All`},{type:`item`,text:`Time/Date`}],Format:[{type:`item`,text:`Word Wrap`},{type:`item`,disable:!0,text:`Font...`}],View:[{type:`item`,disable:!0,text:`Status Bar`}],Help:[{type:`item`,disable:!0,text:`Help Topics`},{type:`item`,disable:!0,text:`About Notepad`}]},s=n();function c({onClose:e}){let[t,n]=(0,a.useState)(``),[r,c]=(0,a.useState)(!1);function d(i){switch(i){case`Exit`:e();break;case`Word Wrap`:c(!r);break;case`Time/Date`:let i=new Date;n(`${t}${i.toLocaleTimeString()} ${i.toLocaleDateString()}`);break;default:}}function f(e){if(e.which===9){e.preventDefault(),e.persist();var r=e.target.selectionStart,i=e.target.selectionEnd;n(`${t.substring(0,r)}\t${t.substring(i)}`),requestAnimationFrame(()=>{e.target.selectionStart=r+1,e.target.selectionEnd=r+1})}}return(0,s.jsxs)(l,{children:[(0,s.jsx)(`section`,{className:`np__toolbar`,children:(0,s.jsx)(i,{items:o,onClickItem:d})}),(0,s.jsx)(u,{wordWrap:r,value:t,onChange:e=>n(e.target.value),onKeyDown:f,spellCheck:!1})]})}var l=r.div`
  height: 100%;
  background: linear-gradient(to right, #edede5 0%, #ede8cd 100%);
  display: flex;
  flex-direction: column;
  align-items: stretch;
  .np__toolbar {
    position: relative;
    height: 21px;
    flex-shrink: 0;
    border-bottom: 1px solid white;
  }
`,u=r.textarea`
  flex: auto;
  outline: none;
  font-family: 'Lucida Console', monospace;
  font-size: 13px;
  line-height: 14px;
  resize: none;
  padding: 2px;
  ${e=>e.wordWrap?``:`white-space: nowrap; overflow-x: scroll;`}
  overflow-y: scroll;
  border: 1px solid #96abff;
`;export{c as default};