import{n as e}from"./rolldown-runtime-BVbofQct.js";import{c as t,i as n,o as r,t as i}from"./react-vendor-aHYhdYD6.js";import{r as a}from"./globalAudio-DDKx6bqK.js";import{t as o}from"./publicPath-SdK1OGf5.js";import{n as s,t as c}from"./visibleTimeout-DctrY-yE.js";var l=`data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAAFiUAABYlAUlSJPAAAALnSURBVDhPjY8LLNVxFMeP3ZvrTjWReYV7FUrZPEZCWaRVXhW3mjTmWV2PipK8RzZKKI0bLbpNniMmy+OixzwqZmkRm8dadWVJ6WXWt7/5b6VZ9dnOdnbO+Zzz+9HSWG4WR1x5HBqfDe8jqT1MwXih/g8uZVW6aeseSjgZVY7q2id42v0aKanNcD+c911puenR+T47uhiuks0mjXXeGfNiTcwtjIpikX6+DvXZlRhQNUN52h2EJ3XBxDqtja+yO5BojS6rLuAblDPZl92AD1kSIDIEn0/EoyZWCtm5bMzQMgyROpqcxahIL0FaTi8MTET3hRs8rFmd6HRcyaeBwGR8PR6N7wFRmHX0w0dLEeSq5nhL2nihoI4O4qKdr4aCvEZY2EcM6Qi3O7I6UUCEVD544AzmDF0wt94d/bJW9AnM8EFBC/Vu7pgoLEQLrULDSm1kZlTAyNz/ucDYNZjViXbuL3z4TBQOkAFmOYZ41dmJsf5+1Hn7YHxiAu9kMtyl5agVmCMhpRSaApcOA5N9vqxOpGFwrLjPKxRyWo1xrh4GOIqYGB3FPN+YRb0KPFQzX6gwtUdEYhmIKyxau9FrD6sTOTiK0zpOZ2KQlNDH0UKZ6CDeT09jprsbky8H0RQWhioi3AlJxsHgfNjYOhcyC2xZnShIfNXTT1wx1WXjinZSxcjICOQSCVp11mAsKQlvmpshXaUNaXE7bJ0ivzg67ctiFghZfQE1Ha/c+VdUM5eqmCVlTEhJBQW0AheYmiwmAxl5LeDydKr27g/wYbXf4QpPxTX+qPHwhoQRJKSMy8RHCpPftLJDe+cQXD0ToadvHOLrH2XJSovhKVvGNbTJIQ2MRjwjnmXi2hY7DL8cwcVcGYj4RVu3uS91/Rf6Rm71j3qmcS89F+Un4vDq7RTyb3SBxxf0WlnvOMaO/RWeuoZVad51GRrbhuHjlwwFjuYDcwuHU2z/f1EScRQ1bzNJ1BbbXQELtT8h+gm9undzpD1ygQAAAABJRU5ErkJggg==`,u=e(t(),1),d=i();function f({startAfter:e=3e3,duration:t=15e3,active:n=!0}){let[r,i]=(0,u.useState)(!0),[l,f]=(0,u.useState)(!1),[p,m]=(0,u.useState)(!1);return(0,u.useEffect)(()=>{n&&m(!0)},[n]),(0,u.useEffect)(()=>{if(!p)return;let n=[s(()=>{f(!0),a(o(`/sounds/Windows%20XP%20Balloon.mp3`),.8)},e),s(()=>i(!1),e+t),s(()=>f(!1),e+t+1e3)];return()=>n.forEach(c)},[p,e,t]),l&&(0,d.jsx)(h,{show:r,children:(0,d.jsxs)(`div`,{className:`balloon__container`,children:[(0,d.jsx)(`button`,{onClick:()=>i(!1),className:`balloon__close`}),(0,d.jsxs)(`div`,{className:`balloon__header`,children:[(0,d.jsx)(`img`,{className:`balloon__header__img`,src:`data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAAFiUAABYlAUlSJPAAAALnSURBVDhPjY8LLNVxFMeP3ZvrTjWReYV7FUrZPEZCWaRVXhW3mjTmWV2PipK8RzZKKI0bLbpNniMmy+OixzwqZmkRm8dadWVJ6WXWt7/5b6VZ9dnOdnbO+Zzz+9HSWG4WR1x5HBqfDe8jqT1MwXih/g8uZVW6aeseSjgZVY7q2id42v0aKanNcD+c911puenR+T47uhiuks0mjXXeGfNiTcwtjIpikX6+DvXZlRhQNUN52h2EJ3XBxDqtja+yO5BojS6rLuAblDPZl92AD1kSIDIEn0/EoyZWCtm5bMzQMgyROpqcxahIL0FaTi8MTET3hRs8rFmd6HRcyaeBwGR8PR6N7wFRmHX0w0dLEeSq5nhL2nihoI4O4qKdr4aCvEZY2EcM6Qi3O7I6UUCEVD544AzmDF0wt94d/bJW9AnM8EFBC/Vu7pgoLEQLrULDSm1kZlTAyNz/ucDYNZjViXbuL3z4TBQOkAFmOYZ41dmJsf5+1Hn7YHxiAu9kMtyl5agVmCMhpRSaApcOA5N9vqxOpGFwrLjPKxRyWo1xrh4GOIqYGB3FPN+YRb0KPFQzX6gwtUdEYhmIKyxau9FrD6sTOTiK0zpOZ2KQlNDH0UKZ6CDeT09jprsbky8H0RQWhioi3AlJxsHgfNjYOhcyC2xZnShIfNXTT1wx1WXjinZSxcjICOQSCVp11mAsKQlvmpshXaUNaXE7bJ0ivzg67ctiFghZfQE1Ha/c+VdUM5eqmCVlTEhJBQW0AheYmiwmAxl5LeDydKr27g/wYbXf4QpPxTX+qPHwhoQRJKSMy8RHCpPftLJDe+cQXD0ToadvHOLrH2XJSovhKVvGNbTJIQ2MRjwjnmXi2hY7DL8cwcVcGYj4RVu3uS91/Rf6Rm71j3qmcS89F+Un4vDq7RTyb3SBxxf0WlnvOMaO/RWeuoZVad51GRrbhuHjlwwFjuYDcwuHU2z/f1EScRQ1bzNJ1BbbXQELtT8h+gm9undzpD1ygQAAAABJRU5ErkJggg==`,alt:`risk`}),(0,d.jsx)(`span`,{className:`balloon__header__text`,children:`Your computer might be at risk`})]}),(0,d.jsx)(`p`,{className:`balloon__text__first`,children:`Antivirus software might not be installed`}),(0,d.jsx)(`p`,{className:`balloon__text__second`,children:`Click this balloon to fix this problem.`})]})})}var p=n`
  0% { 
    display: block;
    opacity: 0;
  }
  100% {
    display: block;
    opacity: 1;
  }
`,m=n`
  0% { 
    display: block;
    opacity: 1;
  }
  99% {
    display: block;
    opacity: 0;
  }
  100% {
    display: none;
    opacity: 0;
  }
`,h=r.div`
  position: absolute;
  display: block;
  opacity: 0;
  animation: ${({show:e})=>e?p:m} 1s forwards;
  filter: drop-shadow(2px 2px 1px rgba(0, 0, 0, 0.4));
  .balloon__container {
    position: absolute;
    right: -4px;
    bottom: 19px;
    border: 1px solid black;
    border-radius: 7px;
    padding: 6px 28px 10px 10px;
    background-color: #ffffe1;
    font-size: 11px;
    white-space: nowrap;
    &:before {
      content: '';
      position: absolute;
      display: block;
      bottom: -19px;
      right: 14px;
      width: 0;
      height: 0;
      border-style: solid;
      border-width: 0 19px 19px 0;
      border-color: transparent black transparent transparent;
    }
    &:after {
      content: '';
      position: absolute;
      display: block;
      bottom: -17px;
      right: 15px;
      width: 0;
      height: 0;
      border-style: solid;
      border-width: 0 18px 18px 0;
      border-color: transparent #ffffe1 transparent transparent;
    }
  }
  .balloon__close:hover {
    background-color: #ffa90c;
    border-color: white;
    box-shadow: 1px 1px rgba(0, 0, 0, 0.1);
    &:before,
    &:after {
      background-color: white;
    }
  }
  .balloon__close {
    outline: none;
    position: absolute;
    right: 4px;
    top: 4px;
    width: 14px;
    height: 14px;
    border: 1px solid rgba(0, 0, 0, 0.1);
    border-radius: 3px;
    background-color: transparent;
    &:before {
      content: '';
      position: absolute;
      left: 5px;
      top: 2px;
      transform: rotate(45deg);
      height: 8px;
      width: 2px;
      background-color: rgba(170, 170, 170);
    }
    &:after {
      content: '';
      position: absolute;
      left: 5px;
      top: 2px;
      transform: rotate(-45deg);
      height: 8px;
      width: 2px;
      background-color: rgba(170, 170, 170);
    }
  }
  .balloon__header {
    display: flex;
    align-items: center;
    font-weight: 700;
  }
  .balloon__header__img {
    width: 14px;
    height: 14px;
    margin-right: 8px;
  }
  .balloon__text__first {
    margin: 5px 0 10px;
  }
`;function g({mouse:e,startPos:t}){function n(){return{x:Math.min(t.x,e.docX),y:Math.min(t.y,e.docY),w:Math.abs(t.x-e.docX),h:Math.abs(t.y-e.docY)}}if(t){let{x:e,y:t,w:r,h:i}=n();return(0,d.jsx)(`div`,{style:{transform:`translate(${e}px,${t}px)`,width:r,height:i,position:`absolute`,border:`1px dotted gray`}})}return null}export{f as n,l as r,g as t};