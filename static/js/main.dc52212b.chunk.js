(this.webpackJsonp2048=this.webpackJsonp2048||[]).push([[0],{14:function(e,t,a){},15:function(e,t,a){"use strict";a.r(t);a(9);var n=a(0),r=a(6),o=a(1),i=a(2),c=a(4),s=a(3),l=a(7);a(14);function u(e,t){return"".concat(e,",").concat(t)}function h(e,t,a){switch(a){case m.Up:return u(e,t);case m.Right:return u(3-t,e);case m.Down:return u(e,3-t);case m.Left:return u(t,e);default:return""}}var m,v=["red","grey lighten-5","grey lighten-5","grey lighten-4","grey lighten-4","grey lighten-3","grey lighten-3","grey lighten-2","grey lighten-2","grey lighten-1","grey lighten-1","light-green lighten-2"],f=Math.log(2);function g(){return 2+2*Math.floor(2*Math.random())}function d(){return Math.floor(4*Math.random())}!function(e){e[e.Up=0]="Up",e[e.Right=1]="Right",e[e.Down=2]="Down",e[e.Left=3]="Left"}(m||(m={}));var y=function(e){Object(c.a)(a,e);var t=Object(s.a)(a);function a(e){var n;return Object(o.a)(this,a),(n=t.call(this,e)).touchListenersAdded=!1,n.state={squares:[],keyAcc:0,gameover:!1,score:0},n}return Object(i.a)(a,[{key:"componentDidMount",value:function(){var e=this;document.addEventListener("keydown",(function(t){if(!e.state.gameover){var a;switch(t.key){case"ArrowUp":a=m.Up;break;case"ArrowRight":a=m.Right;break;case"ArrowDown":a=m.Down;break;case"ArrowLeft":a=m.Left;break;default:return}t.altKey||t.metaKey||t.preventDefault(),e.move(a)}})),this.reset()}},{key:"render",value:function(){var e=this;return n.createElement("div",{className:"container"},n.createElement("div",{className:"GameMenu"},n.createElement("div",{className:"text"},n.createElement("span",{className:"left"},this.state.score)),n.createElement("button",{className:"btn",onClick:function(){return e.reset()}},"Restart")),n.createElement("div",{className:"Grid grey lighten-3",ref:function(t){t&&e.addTouchEventlisteners(t)}},this.state.squares.map((function(e){return n.createElement("div",{className:"Square "+(t=e.value,v[Math.log(t)/f]),key:e.key,style:{"--num-length":(""+e.value).length,"--x":e.x,"--y":e.y}},e.value);var t})),n.createElement("div",{className:"Gameover",style:{display:this.state.gameover?"block":"none"}},n.createElement("div",{className:"container"},n.createElement("div",{className:"card",style:{paddingTop:10}},n.createElement("div",{className:"container"},n.createElement("h3",null,"Game Over!"),n.createElement("p",null,"Better luck next-time")),n.createElement("p",{style:{textAlign:"right"}},n.createElement("button",{className:"btn-flat blue-text",onClick:function(){return e.reset()}},"try again")))))))}},{key:"addTouchEventlisteners",value:function(e){var t=this;if(!this.touchListenersAdded){this.touchListenersAdded=!0;var a=0,n=0,r=0,o=0;e.addEventListener("touchstart",(function(e){if(!t.state.gameover){e.preventDefault();var r=e.touches[0];a=r.pageX,n=r.pageY}})),e.addEventListener("touchmove",(function(e){if(!t.state.gameover){var a=e.touches[0];r=a.pageX,o=a.pageY}})),e.addEventListener("touchend",(function(e){if(!t.state.gameover){var i=r-a,c=o-n;i*i+c*c>100&&(Math.abs(i)>Math.abs(c)?i>0?t.move(m.Right):t.move(m.Left):c>0?t.move(m.Down):t.move(m.Up))}}))}}},{key:"reset",value:function(){for(var e={key:0,value:g(),x:0,y:0},t={key:1,value:g(),x:0,y:0};e.x===t.x&&e.y===t.y;)e.x=d(),e.y=d(),t.x=d(),t.y=d();this.setState({gameover:!1,keyAcc:1,score:0,squares:[e,t]})}},{key:"move",value:function(e){var t=this.state.keyAcc,a=this.state.score,n=!1,r={};this.state.squares.forEach((function(e){var t=e.x,a=e.y,n=e.value,o=e.key;return r[u(t,a)]={value:n,key:o}}));for(var o=0;o<4;o++)for(var i=0;i<4;i++){for(var c=i,s=void 0;c<4;c++){var m=h(o,c,e);if(r.hasOwnProperty(m)){s=r[m],delete r[m],c>i&&(n=!0),c++;break}}for(;c<4;c++){var v=h(o,c,e);if(r.hasOwnProperty(v)){"undefined"!==typeof s&&r[v].value===s.value&&(a+=2*s.value,s={key:s.key,value:2*s.value},delete r[v],n=!0);break}}if("undefined"!==typeof s){var f=h(o,i,e);r[f]=s}}if(n){for(var d=[],y=0;y<4;y++)for(var p=0;p<4;p++)r.hasOwnProperty(u(y,p))||d.push({x:y,y:p});if(d.length>0){var E=++t,w=g(),k=d[Math.floor(d.length*Math.random())],b=k.x,x=k.y;r[u(b,x)]={key:E,value:w}}var N=[];for(var j in r)if(r.hasOwnProperty(j)){var M=r[j],O=M.key,L=M.value,A=j.split(",").map((function(e){return parseInt(e,10)})),D=Object(l.a)(A,2),R=D[0],C=D[1];N.push({key:O,value:L,x:R,y:C})}N.sort((function(e,t){return e.key-t.key})),this.setState({keyAcc:t,score:a,squares:N}),this.checkGameover(r)}}},{key:"checkGameover",value:function(e){if(!this.state.gameover){for(var t=0;t<4;t++)for(var a=0;a<4;a++)if(!e.hasOwnProperty(u(t,a)))return;for(var n=0;n<3;n++)for(var r=0;r<3;r++){var o=e[u(n,r)];if(e[u(n+1,r)].value===o.value)return;if(e[u(n,r+1)].value===o.value)return}this.setState({gameover:!0})}}}]),a}(n.Component),p=function(e){Object(c.a)(a,e);var t=Object(s.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(i.a)(a,[{key:"render",value:function(){return n.createElement("div",null,n.createElement("header",{className:"center container"},n.createElement("h1",null,"2048")),n.createElement("main",{className:"center"},n.createElement(y,null)),n.createElement("section",{className:"container"},n.createElement("p",null,"Swipe or use the arrow keys to move the tiles around the 4\xd74 grid. Combine 2 tiles of the same type to form their sum. The goal is to either get the highest score, or to form the 2048 tile."),n.createElement("p",null,"I made this game clone a while ago now. I have re-visited it to fix a couple of bugs but overall it is the same as it was in 2017. I would appreciate it if you checked out some of my"," ",n.createElement("a",{href:"/"},"more recent projects."))),n.createElement("footer",{className:"page-footer blue"},n.createElement("div",{className:"container"},n.createElement("div",{className:"row"},n.createElement("div",{className:"col l6 s12"},n.createElement("h5",{className:"white-text"},"Credits"),n.createElement("p",{className:"grey-text text-lighten-4"},"Made using React and Materialize.")),n.createElement("div",{className:"col l4 offset-l2 s12"},n.createElement("h5",{className:"white-text"},"Links"),n.createElement("ul",null,n.createElement("li",null,n.createElement("a",{className:"grey-text text-lighten-3",href:"https://benjamin-davies.github.io/"},"My Site")),n.createElement("li",null,n.createElement("a",{className:"grey-text text-lighten-3",href:"https://github.com/benjamin-davies/"},"My GitHub profile")),n.createElement("li",null,n.createElement("a",{className:"grey-text text-lighten-3",href:"https://reactjs.org/"},"React")),n.createElement("li",null,n.createElement("a",{className:"grey-text text-lighten-3",href:"http://materializecss.com/"},"Materialize")))))),n.createElement("div",{className:"footer-copyright"},n.createElement("div",{className:"container"},"\xa9 2017 Benjamin Davies",n.createElement("a",{className:"grey-text text-lighten-4 right",href:"https://benjamin-davies.github.io/"},"My Website")))))}}]),a}(n.Component),E=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function w(e){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var t=e.installing;if(null===t)throw new Error("Idk what went wrong");t.onstatechange=function(){"installed"===t.state&&(navigator.serviceWorker.controller?console.log("New content is available; please refresh."):console.log("Content is cached for offline use."))}}})).catch((function(e){console.error("Error during service worker registration:",e)}))}Object(r.render)(n.createElement(p,null),document.getElementById("root")),function(){if("serviceWorker"in navigator){if(new URL("/2048",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var e="".concat("/2048","/service-worker.js");E?(!function(e){fetch(e).then((function(t){404===t.status||-1===(t.headers.get("content-type")||"").indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):w(e)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://goo.gl/SC7cgQ")}))):w(e)}))}}()},8:function(e,t,a){e.exports=a(15)}},[[8,1,2]]]);
//# sourceMappingURL=main.dc52212b.chunk.js.map