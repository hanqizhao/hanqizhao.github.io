import{n as e}from"./rolldown-runtime-BVbofQct.js";import{c as t,o as n,t as r}from"./react-vendor-aHYhdYD6.js";var i=e(t(),1),a=r();function o({className:e,data:t,style:n,onClick:r}){let[o,c]=(0,i.useState)(-1);return(0,a.jsx)(`div`,{style:{...n},className:e,children:t.map((t,n)=>(0,a.jsx)(s,{onClick:r,onHover:c,hover:o===n,item:t,index:n,className:e},n))})}var s=({index:e,item:t,className:n,hover:r,onHover:i,onClick:o})=>{function s(){i(e)}function l(){o(t.text)}switch(t.type){case`item`:return(0,a.jsxs)(`div`,{onClick:l,onMouseEnter:s,className:`${n}-item`,children:[(0,a.jsx)(`img`,{className:`${n}-img`,src:t.icon,alt:``}),(0,a.jsx)(`div`,{className:`${n}-text`,children:t.text})]});case`separator`:return(0,a.jsx)(`div`,{className:`${n}-separator`});case`menu`:return(0,a.jsxs)(`div`,{onMouseEnter:s,className:`${n}-item ${r?`hover`:``}`,children:[(0,a.jsx)(`img`,{className:`${n}-img`,src:t.icon,alt:``}),(0,a.jsx)(`div`,{className:`${n}-text`,children:t.text}),(0,a.jsx)(`div`,{className:`${n}-arrow`,children:r&&(0,a.jsx)(c,{data:t.items,bottom:t.bottom,onClick:o})})]});default:return null}},c=n(o)`
  position: absolute;
  z-index: 1;
  left: ${({left:e})=>e||`100%`};
  bottom: ${({bottom:e})=>e||`-1px`};
  background-color: white;
  padding-left: 1px;
  box-shadow: inset 0 0 0 1px #72ade9, 2px 3px 3px rgb(0, 0, 0, 0.5);
  &-separator {
    padding: 0 5px;
    height: 2px;
    box-shadow: inset 3px 0 #4081ff;
    background: linear-gradient(
      to right,
      rgba(0, 0, 0, 0) 0%,
      rgba(0, 0, 0, 0.1) 50%,
      rgba(0, 0, 0, 0) 100%
    );
  }
  &-item {
    height: 25px;
    display: flex;
    align-items: center;
    padding: 0 10px;
    box-shadow: inset 3px 0 #4081ff;
    position: relative;
    padding-right: 22px;
    color: black;
  }
  &-item.hover {
    background-color: #1b65cc;
    color: white;
  }
  &-item:hover {
    background-color: #1b65cc;
    color: white;
    &-arrow:before {
      border-left-color: #fff;
    }
  }
  &-item:hover,
  &-item.hover > &-arrow:before {
    border-left-color: #fff;
  }
  &-img {
    margin-right: 6px;
    width: 16px;
    height: 16px;
  }
  &-text {
    font-size: 11px;
    white-space: nowrap;
  }
  &-arrow {
    position: absolute;
    right: 0;
    height: 100%;
    width: 10px;
    &:before {
      top: 9px;
      right: 6px;
      content: '';
      display: block;
      border: 4px solid transparent;
      border-right: 0;
      border-left-color: #000;
      position: absolute;
    }
  }
`;export{c as t};