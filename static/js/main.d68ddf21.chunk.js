(this.webpackJsonpteleprompter=this.webpackJsonpteleprompter||[]).push([[0],{50:function(e,t,n){},51:function(e,t,n){},58:function(e,t,n){"use strict";n.r(t);var c=n(0),i=n(11),r=n.n(i),s=(n(50),n(15)),l=(n(51),n(94)),o=n(80),a=n(92),j=n(81),d=n(93),h=n(82),u=n(83),b=n(84),f=n(85),O=n(86),x=n(87),g=n(88),y=n(2);var p=function(e){var t={paddingRight:30,paddingLeft:30};return Object(y.jsx)(l.a,{position:"fixed",children:Object(y.jsxs)(o.a,{children:[Object(y.jsx)("div",{style:{display:"flex",width:"1000px"},children:Object(y.jsx)(a.a,{title:Object(y.jsx)("h1",{children:"Current Song Title"}),arrow:!0,children:Object(y.jsx)(j.a,{variant:"h2",children:e.song})})}),Object(y.jsxs)("div",{style:{display:"flex"},children:[Object(y.jsx)(a.a,{title:Object(y.jsx)("h1",{children:"Start"}),arrow:!0,children:Object(y.jsx)(d.a,{style:t,color:"inherit",onClick:function(){e.play(!0)},children:Object(y.jsx)(h.a,{fontSize:"large",style:{color:!0===e.isPlaying?"#00ff0d":"inherit"}})})}),Object(y.jsx)(a.a,{title:Object(y.jsx)("h1",{children:"Stop"}),arrow:!0,children:Object(y.jsx)(d.a,{style:t,color:"inherit",onClick:function(){e.play(!1)},children:Object(y.jsx)(u.a,{fontSize:"large",style:{color:!1===e.isPlaying?"red":"inherit"}})})}),Object(y.jsx)(a.a,{title:Object(y.jsx)("h1",{children:"Back"}),arrow:!0,children:Object(y.jsx)(d.a,{style:t,color:"inherit",onClick:function(){e.switchSong(-1)},children:Object(y.jsx)(b.a,{fontSize:"large"})})}),Object(y.jsx)(a.a,{title:Object(y.jsx)("h1",{children:"Forward"}),arrow:!0,children:Object(y.jsx)(d.a,{style:t,color:"inherit",onClick:function(){e.switchSong(1)},children:Object(y.jsx)(f.a,{fontSize:"large"})})}),Object(y.jsx)(a.a,{title:Object(y.jsx)("h1",{children:"Slow 500ms"}),arrow:!0,children:Object(y.jsx)(d.a,{style:t,color:"inherit",onClick:function(){e.changeSpeed(e.speedAdjustment+500)},children:Object(y.jsx)(O.a,{fontSize:"large",style:{color:e.speedAdjustment>0?"red":"inherit"}})})}),Object(y.jsx)(a.a,{title:Object(y.jsx)("h1",{children:"Speed Adjustment"}),arrow:!0,children:Object(y.jsx)(j.a,{style:{width:120},color:"inherit",variant:"h3",align:"center",children:-1*e.speedAdjustment})}),Object(y.jsx)(a.a,{title:Object(y.jsx)("h1",{children:"Speed 500ms"}),arrow:!0,children:Object(y.jsx)(d.a,{style:t,color:"inherit",onClick:function(){e.changeSpeed(e.speedAdjustment-500)},children:Object(y.jsx)(x.a,{fontSize:"large",style:{color:e.speedAdjustment<0?"#00ff0d":"inherit"}})})}),Object(y.jsx)(a.a,{title:Object(y.jsx)("h1",{children:"Reset Adjustment"}),arrow:!0,children:Object(y.jsx)(d.a,{style:t,color:"inherit",onClick:function(){e.changeSpeed(0)},children:Object(y.jsx)(g.a,{fontSize:"large"})})})]})]})})},v=n(32),S=n(89);var w=function(e){var t,n={paddingBottom:15,paddingTop:15};return Object(y.jsxs)(S.a,{maxWidth:!1,children:[Object(y.jsx)(j.a,{style:n,variant:"h1",children:e.lyricIndex>1?e.songs[e.song][e.lyricIndex-2].lyric:""}),Object(y.jsx)(j.a,{style:n,variant:"h1",children:e.lyricIndex>0?e.songs[e.song][e.lyricIndex-1].lyric:""}),Object(y.jsx)(j.a,(t={style:n,variant:"h1"},Object(v.a)(t,"style",{color:"yellow",textDecoration:"underline"}),Object(v.a)(t,"children",e.songs[e.song][e.lyricIndex].lyric),t)),Object(y.jsx)(j.a,{style:n,variant:"h1",children:e.lyricIndex<e.songs[e.song].length-1?e.songs[e.song][e.lyricIndex+1].lyric:""}),Object(y.jsx)(j.a,{style:n,variant:"h1",children:e.lyricIndex<e.songs[e.song].length-2?e.songs[e.song][e.lyricIndex+2].lyric:""})]})};var m=function(){var e=Object(c.useState)({}),t=Object(s.a)(e,2),n=t[0],i=t[1],r=Object(c.useState)("Everyday"),l=Object(s.a)(r,2),o=l[0],a=l[1],j=Object(c.useState)(0),d=Object(s.a)(j,2),h=d[0],u=d[1],b=Object(c.useState)([]),f=Object(s.a)(b,2),O=f[0],x=f[1],g=Object(c.useState)(0),v=Object(s.a)(g,2),S=v[0],m=v[1],k=Object(c.useState)(!1),I=Object(s.a)(k,2),C=I[0],A=I[1],z=Object(c.useState)(0),E=Object(s.a)(z,2),F=E[0],L=E[1];function P(e){m(0),L(0),A(!1),0===h&&e<0?(u(O.length-1),a(O[O.length-1])):h===O.length-1&&e>0?(u(0),a(O[0])):(a(O[h+e]),u((function(t){return t+e})))}function T(e,t){Object(c.useEffect)((function(){function n(n){n.key===e&&t()}return window.addEventListener("keydown",n),function(){return window.removeEventListener("keydown",n)}}),[S,F,C,n,o,O,h])}Object(c.useEffect)((function(){fetch("songs.json",{headers:{"Content-Type":"application/json",Accept:"application/json"}}).then((function(e){return e.json()})).then((function(e){i(e);var t=[];for(var n in e)t.push(n);x(t)}))}),[]),Object(c.useEffect)((function(){var e=null;return C?e=setInterval((function(){n[o]&&S===n[o].length-1?P(1):m((function(e){return e+1}))}),n[o][S].time+F):C||0===S||clearInterval(e),function(){return clearInterval(e)}}),[C,S]),T("p",(function(){A(!0)})),T("s",(function(){A(!1)})),T("b",(function(){P(1)})),T("f",(function(){P(-1)})),T("i",(function(){L((function(e){return e-500}))})),T("d",(function(){L((function(e){return e+500}))})),T("r",(function(){L(0)}));var B=null;return n&&n.Everyday&&(B=Object(y.jsxs)("div",{className:"App",children:[Object(y.jsx)(p,{speedAdjustment:F,changeSpeed:L,song:o,switchSong:P,play:A,isPlaying:C}),Object(y.jsx)(w,{lyricIndex:S,songs:n,song:o})]})),B},k=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,95)).then((function(t){var n=t.getCLS,c=t.getFID,i=t.getFCP,r=t.getLCP,s=t.getTTFB;n(e),c(e),i(e),r(e),s(e)}))},I=n(91),C=n(90),A=n(30),z=n(41),E=Object(z.a)({palette:{primary:{main:"#3f51b5"},secondary:{main:"#f50057"},error:{main:A.a.A400},background:{default:"#fff"},info:{main:"#2196f3"}}});r.a.render(Object(y.jsxs)(C.a,{theme:E,children:[Object(y.jsx)(I.a,{}),Object(y.jsx)(m,{})]}),document.querySelector("#root")),k()}},[[58,1,2]]]);
//# sourceMappingURL=main.d68ddf21.chunk.js.map