(this.webpackJsonpnonograms=this.webpackJsonpnonograms||[]).push([[0],{11:function(e,t,n){e.exports=n(23)},22:function(e,t,n){},23:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),i=n(5),o=n.n(i),l=n(1);n(22),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var c=n(2),u="hit",s="X",d="?",m="clear",f="#75daad",p="#ffc299",g="#79d279",v="#ff6363",h=function(e,t){var n="";return t.forEach((function(e,t,r){for(var a=0;a<e;a++)n+=1;(function(e,t){return!Object.is(e.length-1,t)})(r,t)&&(n+=0)})),function e(t,n){if(!n){for(var r="",a=0;a<t;a++)r+="0";return[r]}for(var i=t-n.length+1,o=[],l=function(r){for(var a=n,i=0;i<r;i++)a="0"+a;var l=a.search("10")+1,c=a.slice(0,l),u=a.slice(l);if(a.search("10")>=0){var s=t-c.length;e(s,u).forEach((function(e){o.push(c+e)}))}else{for(;t>u.length;)u+=0;o.push(c+u)}},c=0;c<i;c++)l(c);return o}(e,n)},b=function(e,t){for(var n=[],r=0;r<e;r++){var a=[],i=t(0,a,r);i&&a.push(i),n.push(a)}return n},y=function(e,t){return e.map((function(e){return h(t,e)}))},w=function(e){return e.reduce((function(e,t,n){return"1"===t&&e.push(n),e}),[])},E=function(e,t){return{hitIndex:w(t),crossIndex:(n=e,n.reduce((function(e,t,n){return t.hited&&t.hitType===s&&e.push(n),e}),[]))};var n},C=function(e,t){var n=e.map((function(e){return e.hited&&e.hitType===u?"1":"0"})),r=E(e,n),a=r.hitIndex,i=r.crossIndex,o=parseInt(n.join(""),2);return t.some((function(e){for(var t=parseInt(e,2),n=((t|o)^t).toString(2);e.length>n.length;)n="0"+n;var r=a.every((function(e){return"0"===n[e]})),l=i.every((function(t){return"0"===e[t]}));return!0===r&&!0===l}))},x=function(e){return Array.from(e).map((function(e){return"1"===e?{hitType:u,hited:!0,value:"",color:f}:{hitType:s,hited:!0,value:s,color:p,auto:!0}}))},j={rows:{},columns:{},completed:!1},k=Object(c.b)({name:"validation",initialState:j,reducers:{resetValidation:function(e){return j},setRowsValidation:function(e,t){var n=t.payload,r=n.index,a=n.value;e.rows[r]=a},setColumnsValidation:function(e,t){var n=t.payload,r=n.index,a=n.value;e.columns[r]=a},setPuzzleCompleted:function(e,t){e.completed=t.payload}}}),z=k.actions,O=z.setRowsValidation,T=z.setColumnsValidation,S=z.setPuzzleCompleted,R=z.resetValidation,V=function(e){return e.validation.completed},G=function(e){return e.validation.rows},I=function(e){return e.validation.columns},A=k.reducer,H=function(){return function(e,t){var n=t().game,r=n.puzzle,a=n.game;e(S(W(r,a))),e((function(e,t){var n=t().rows.possibilities;t().game.game.forEach((function(t,r){var a=C(t,n[r]);e(O({index:r,value:a}))}))})),e((function(e,t){var n=t().columns.possibilities,r=t().game.game;P(r,r[0].length).forEach((function(t,r){var a=C(t,n[r]);e(T({index:r,value:a}))}))}))}},P=function(e,t){for(var n=[],r=function(t){n.push(e.map((function(e,n,r){return r[n][t]})))},a=0;a<t;a++)r(a);return n},W=function(e,t){return e.map((function(e,n){return e.map((function(e,r){var a="0";return t[n][r].hited&&t[n][r].hitType===u&&(a="1"),e===a}))})).every((function(e){return e.every((function(e){return!0===e}))}))},X=Object(c.b)({name:"rows",initialState:{values:[[]],possibilities:[[]]},reducers:{setRowsValues:function(e,t){e.values=t.payload},setRowsPossibilities:function(e,t){e.possibilities=t.payload}}}),M=X.actions,F=M.setRowsValues,Y=M.setRowsPossibilities,N=function(e){return e.rows.values},B=function(e){return e.rows.answer},J=X.reducer,$=function(e){return function(t){var n=function(e){return b(e.length,(function(t,n,r){for(var a=0;a<e[0].length;a++)"1"===e[r][a]&&(t++,"1"!==e[r][a+1]&&(n.push(t),t=0));return t}))}(e);t(F(n));var r=y(n,e[0].length);t(Y(r)),r.forEach((function(e,n){if(1===e.length){var r=x(e[0]);t(ae({row:r,index:n}))}}))}},q=Object(c.b)({name:"columns",initialState:{values:[[]],possibilities:[[]]},reducers:{setColumnsValues:function(e,t){e.values=t.payload},setColumnsPossibilities:function(e,t){e.possibilities=t.payload}}}),D=q.actions,K=D.setColumnsValues,L=D.setColumnsPossibilities,Q=function(e){return e.columns.values},U=function(e){return e.columns.answer},Z=q.reducer,_=function(e){return function(t){var n=function(e){return b(e[0].length,(function(t,n,r){for(var a=0;a<e.length;a++)"1"===e[a][r]&&(t++,e[a+1]&&"1"!==e[a+1][r]&&(n.push(t),t=0));return t}))}(e);t(K(n));var r=y(n,e.length);t(L(r)),r.forEach((function(e,n){if(1===e.length){var r=x(e[0]);t(ie({column:r,index:n}))}}))}},ee=Object(c.b)({name:"game",initialState:{puzzle:[["0","0","1"],["1","0","0"],["1","0","0"]],game:[[]]},reducers:{setNewPuzzle:function(e,t){e.puzzle=t.payload},initGame:function(e,t){e.game=t.payload.map((function(e){return e.map((function(){return{hited:!1,color:p,value:""}}))}))},setGameHit:function(e,t){var n=t.payload,r=n.type,a=n.iX,i=n.iY;switch(r){case u:e.game[a][i]={hitType:r,hited:!0,value:"",color:f};break;case s:e.game[a][i]={hitType:r,hited:!0,value:s,color:p};break;case d:e.game[a][i]={hitType:r,hited:!0,value:d,color:f};break;case m:e.game[a][i]={hited:!1,value:"",color:p}}},setAutoCompleteRow:function(e,t){var n=t.payload,r=n.row,a=n.index;e.game[a]=r},setAutoCompleteColumn:function(e,t){var n=t.payload,r=n.column,a=n.index;e.game.forEach((function(t,n){e.game[n][a]=r[n]}))}}}),te=ee.actions,ne=te.initGame,re=te.setGameHit,ae=te.setAutoCompleteRow,ie=te.setAutoCompleteColumn,oe=te.setNewPuzzle,le=function(e){return e.game.game},ce=function(e){return e.game.puzzle.length},ue=function(e){return e.game.puzzle[0].length},se=ee.reducer,de=function(){return function(e){for(var t=[],n=0;n<10;n++){for(var r=[],a=0;a<10;a++){var i=fe(1,10);me(i)?r.push("1"):r.push("0")}t.push(r)}e(oe(t)),e((function(e,t){var n=t().game.puzzle;e(ne(n)),e(R()),e($(n)),e(_(n)),e(H())}))}},me=function(e){return e%2},fe=function(e,t){return e=Math.ceil(e),t=Math.floor(t),Math.floor(Math.random()*(t-e))+e},pe=Object(c.b)({name:"user",initialState:{clickType:u},reducers:{setClickType:function(e,t){e.clickType=t.payload}}}),ge=pe.actions.setClickType,ve=function(e){return e.user.clickType},he=pe.reducer,be=Object(c.a)({reducer:{user:he,game:se,rows:J,columns:Z,validation:A}}),ye=n(4),we={board:{gridColumn:"2 / 4",gridRow:"2 / 4",boxSizing:"border-box"},boardGrid:{display:"grid",gridGap:"3px",height:"100%"},cell:{boxSizing:"border-box",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",fontFamily:"Helvetica",fontSize:"1em",fontWeight:"bold"},hitColors:{hit:"#75daad",empty:"#ffc299"}},Ee=function(e){var t=e.iX,n=e.iY,r=e.cell,i=Object(l.c)(ve),o=Object(l.b)();return a.a.createElement("div",{onClick:function(){var e,a=r.hitType===i?m:i;o((e={type:a,iX:t,iY:n},function(t){t(re(e)),t(H())}))},style:Object(ye.a)({},we.cell,{backgroundColor:r.color})},r.value)},Ce=function(){var e=Object(l.c)(le),t=Object(l.c)(ce),n=Object(l.c)(ue);return a.a.createElement("div",{style:Object(ye.a)({},we.boardGrid,{gridTemplateColumns:"repeat(".concat(n,", 1fr)"),gridTemplateRows:"repeat(".concat(t,", 1fr)")})},e.map((function(e,t){return e.map((function(e,n){return a.a.createElement(Ee,{cell:e,iX:t,iY:n,key:"".concat(t).concat(n)})}))})))},xe=function(){return a.a.createElement("div",{style:we.board},a.a.createElement(Ce,null))},je={headers:{display:"grid",gridTemplateColumns:"1fr",gridGap:"3px",height:"100%",boxSizing:"border-box"},header:{display:"grid",gridGap:"3px",height:"100%",boxSizing:"border-box"},panel:{display:"flex",alignItems:"center",justifyContent:"center"},rowHeaders:{gridColumn:"1",gridRow:"2 / 4"},columnHeaders:{gridColumn:"2 / 4",gridRow:"1"}},ke=function(e){var t=e.backgroundColor,n=e.value;return a.a.createElement("div",{style:Object(ye.a)({},je.panel,{backgroundColor:t})},n)},ze=function(e){var t=e.headerValues,n=e.valid,r=e.alignment,i=n||void 0===n?g:v;return 0===t.length?a.a.createElement("div",{style:Object(ye.a)({},je.header,{},r)},a.a.createElement(ke,{backgroundColor:i})):a.a.createElement("div",{style:Object(ye.a)({},je.header,{},r)},t.map((function(e,t){return a.a.createElement(ke,{key:t,backgroundColor:i,value:e})})))},Oe=function(e){var t=e.alignment,n=e.headersValues,r=e.gridTemplate,i=e.validations;return a.a.createElement("div",{style:Object(ye.a)({},je.headers,{},r)},n.map((function(e,n){return a.a.createElement(ze,{alignment:t,key:n,headerValues:e,valid:i[n]})})))},Te=function(){var e=Object(l.c)(N),t=Object(l.c)(G),n={gridTemplateRows:"repeat(".concat(e.length,", 1fr)")};return a.a.createElement("div",{style:je.rowHeaders},a.a.createElement(Oe,{alignment:{gridAutoFlow:"column"},headersValues:e,gridTemplate:n,validations:t}))},Se=function(){var e=Object(l.c)(Q),t=Object(l.c)(I),n={gridTemplateColumns:"repeat(".concat(e.length,", 1fr)")};return a.a.createElement("div",{style:je.columnHeaders},a.a.createElement(Oe,{headersValues:e,gridTemplate:n,validations:t}))};function Re(){var e=Object(l.c)(B),t=Object(l.c)(U);return a.a.createElement(a.a.Fragment,null,a.a.createElement(Se,{userAnswer:t}),a.a.createElement(Te,{userAnswer:e}))}var Ve={validationStyle:{gridColumn:"1",gridRow:"1",boxSizing:"border-box",backgroundColor:"#ffd31d"},buttonWrapper:{boxSizing:"border-box",height:"100%",display:"flex",alignItems:"center",justifyContent:"center"}};function Ge(){var e=Object(l.b)();return a.a.createElement("div",{style:Ve.validationStyle},a.a.createElement("div",{style:Ve.buttonWrapper},a.a.createElement("button",{onClick:function(){e(de())}},"New Game?")))}var Ie={wrapper:{gridColumn:"1",gridRow:"1",boxSizing:"border-box"},menu:{display:"grid",gridGap:"3px",height:"100%",gridTemplateRows:"repeat(auto, auto)"},item:{height:"100%",display:"flex",alignItems:"center",justifyContent:"center",boxSizing:"border-box",fontWeight:"bold",backgroundColor:"#75daad",lineHeight:"10px"}};function Ae(){var e=Object(l.b)();function t(t){e(ge(t.currentTarget.id))}return a.a.createElement("div",{style:Ie.wrapper},a.a.createElement("div",{style:Ie.menu},a.a.createElement("div",{id:u,onClick:t,style:Ie.item}),a.a.createElement("div",{id:s,onClick:t,style:Ie.item},"X"),a.a.createElement("div",{id:d,onClick:t,style:Ie.item},"?")))}function He(e){var t=e.setClickType,n=Object(l.c)(V)?a.a.createElement(Ge,null):a.a.createElement(Ae,{setClickType:t});return a.a.createElement(a.a.Fragment,null,n)}var Pe={display:"grid",gridTemplateColumns:"repeat(3, 1fr)",gridTtemplateRows:"repeat(3, 1fr)",gridGap:"3px",width:"100vw",height:"calc(100vh)"},We=function(){return a.a.createElement("div",{style:Pe},a.a.createElement(He,null),a.a.createElement(Re,null),a.a.createElement(xe,null))},Xe=function(){return Object(l.b)()(de()),a.a.createElement(We,null)};o.a.render(a.a.createElement(a.a.StrictMode,null,a.a.createElement(l.a,{store:be},a.a.createElement(Xe,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[11,1,2]]]);
//# sourceMappingURL=main.44dbc22f.chunk.js.map