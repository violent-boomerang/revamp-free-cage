!function(e){var t={};function n(o){if(t[o])return t[o].exports;var a=t[o]={i:o,l:!1,exports:{}};return e[o].call(a.exports,a,a.exports,n),a.l=!0,a.exports}n.m=e,n.c=t,n.d=function(e,t,o){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)n.d(o,a,function(t){return e[t]}.bind(null,a));return o},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=1)}([function(e,t,n){},function(e,t,n){"use strict";n.r(t);n(0);var o=(()=>{THREE.DRACOLoader.setDecoderPath("/js/draco_decoder.js"),THREE.DRACOLoader.setDecoderConfig({type:"js"}),THREE.DRACOLoader.getDecoderModule();const e=new THREE.LoadingManager,t=new THREE.DRACOLoader(e);let n=0,o=0,a=0,r=!1;const s={};return e.onStart=(e,t,o)=>{console.log("Started loading assets"),r=!1,n=o},e.onProgress=(e,t,n)=>{console.log(`Asset complete: ${e} ${t} ${n}`)},e.onLoad=()=>{console.log("All assets downloaded"),r=!0},{assets:{},total:0,isCompleted:()=>r,count:()=>n,progress:()=>Math.round(a/o*100),load:(e,n,r)=>{t.load(n,r,t=>{if(t.lengthComputable){void 0===s[e]&&(o+=t.total),s[e]=t.loaded,a=0;for(let e in s)a+=s[e]}},e=>console.log("error",e))}}})();var a={load:(e,t)=>{const n=document.getElementById("loader-screen"),o=n.getElementsByClassName("modal__body")[0],a=n.getElementsByClassName("progress-bar")[0],r=a.getElementsByClassName("progress-bar__indicator")[0];o.innerHTML="loading assets...",a.style.opacity=1;const s=setInterval(()=>{e.isCompleted()?(clearInterval(s),r.style.width="100%",n.classList.add("closed"),o.innerHTML="completed",setTimeout(()=>{n.style.display="none"},3200),t()):r.style.width=e.progress()+"%"},50)}};var r=(()=>{let e,t,n=null,o=null,a=[],r=()=>{};const s=new THREE.Vector2,i=new THREE.Vector2,d=new THREE.Vector2,l=new THREE.Raycaster,c=()=>{n.aspect=window.innerWidth/window.innerHeight,n.updateProjectionMatrix(),o.setSize(window.innerWidth,window.innerHeight)},m=()=>{if(e){const t=((new Date).getTime()-e)/100;s.x=(d.x-i.x)/t,s.y=(d.y-i.y)/t}else s.x=0,s.y=0},u=()=>{l.setFromCamera(i,n);for(var e=0;e<a.length;e++){const t=a[e];if(l.ray.intersectsBox(t.box))return t}return null},E=t=>{i.x=t.clientX/window.innerWidth*2-1,i.y=-t.clientY/window.innerHeight*2+1,null!=e&&m()},g=t=>{i.x=+t.targetTouches[0].pageX/window.innerWidth*2-1,i.y=-t.targetTouches[0].pageY/window.innerHeight*2+1,null!=e&&m()},p=o=>{o.preventDefault(),l.setFromCamera(i,n);const s=u();(new Date).getTime()-e<200&&s===t&&r(t,a.filter(e=>e!==t)),e=null,t=null},v=n=>{n.preventDefault(),n.target==o.domElement&&(e=(new Date).getTime(),d.x=n.clientX/window.innerWidth*2-1,d.y=-n.clientY/window.innerHeight*2+1,t=u())},h=n=>{n.preventDefault(),n.target==o.domElement&&(e=(new Date).getTime(),i.x=+n.targetTouches[0].pageX/window.innerWidth*2-1,i.y=-n.targetTouches[0].pageY/window.innerHeight*2+1,d.x=+n.targetTouches[0].pageX/window.innerWidth*2-1,d.y=-n.targetTouches[0].pageY/window.innerHeight*2+1,t=u())};return{init:(e,t,a)=>{n=e,o=t,window.addEventListener("mousedown",v,!1),window.addEventListener("mousemove",E,!1),window.addEventListener("mouseup",p,!1),o.domElement.addEventListener("touchstart",h,!1),o.domElement.addEventListener("touchmove",g,!1),o.domElement.addEventListener("touchend",p,!1),window.addEventListener("resize",c,!1),null!=a&&(document.getElementsByName("tableParameter").forEach(e=>{e.addEventListener("change",e=>{a.changeParameter("table",e.target.value)})}),document.getElementsByName("bellParameter").forEach(e=>{e.addEventListener("change",e=>{a.changeParameter("bell",e.target.value)})}),document.getElementsByName("virtualObjParameter").forEach(e=>{e.addEventListener("change",e=>{a.changeParameter("virtualObj",e.target.value)})}))},setActiveTargets:(e,t=(()=>{}))=>{a=e,r=t},setAction:e=>{r=e},onSelect:e=>{},resetAction:()=>{a=[],r=()=>{}},getMouseVelocity:()=>(null!=e||(s.x=Math.abs(s.x)>1e-4?.95*s.x:0,s.y=Math.abs(s.y)>1e-4?.95*s.y:0),s),addEventListener:(e,t)=>{document.getElementById(e).addEventListener("click",t)}}})();var s=(()=>{const e=(e,t,n)=>{e.preventDefault(),e.stopPropagation(),t.moveForward=n},t=(e,t,n)=>{e.preventDefault(),e.stopPropagation(),t.moveBackward=n},n=(e,t,n,o)=>{switch(e.preventDefault(),e.stopPropagation(),t){case"left":n.moveLeft=o;break;case"right":n.moveRight=o}},o=[];return{init:a=>{o.push(["moveForwardBtn","down",t=>e(t,a,!0)]),document.getElementById("moveForwardBtn").addEventListener("mousedown",o[0][2],!1),document.getElementById("moveForwardBtn").addEventListener("touchstart",o[0][2],!1),o.push(["moveForwardBtn","up",t=>e(t,a,!1)]),document.getElementById("moveForwardBtn").addEventListener("mouseup",o[1][2],!1),document.getElementById("moveForwardBtn").addEventListener("touchend",o[1][2],!1),o.push(["moveBackwardBtn","down",e=>t(e,a,!0)]),document.getElementById("moveBackwardBtn").addEventListener("mousedown",o[2][2],!1),document.getElementById("moveBackwardBtn").addEventListener("touchstart",o[2][2],!1),o.push(["moveBackwardBtn","up",e=>t(e,a,!1)]),document.getElementById("moveBackwardBtn").addEventListener("mouseup",o[3][2],!1),document.getElementById("moveBackwardBtn").addEventListener("touchend",o[3][2],!1),o.push(["moveLeftBtn","down",e=>n(e,"left",a,!0)]),document.getElementById("moveLeftBtn").addEventListener("mousedown",o[4][2],!1),document.getElementById("moveLeftBtn").addEventListener("touchstart",o[4][2],!1),o.push(["moveLeftBtn","up",e=>n(e,"left",a,!1)]),document.getElementById("moveLeftBtn").addEventListener("mouseup",o[5][2],!1),document.getElementById("moveLeftBtn").addEventListener("touchend",o[5][2],!1),o.push(["moveRightBtn","down",e=>n(e,"right",a,!0)]),document.getElementById("moveRightBtn").addEventListener("mousedown",o[6][2],!1),document.getElementById("moveRightBtn").addEventListener("touchstart",o[6][2],!1),o.push(["moveRightBtn","up",e=>n(e,"right",a,!1)]),document.getElementById("moveRightBtn").addEventListener("mouseup",o[7][2],!1),document.getElementById("moveRightBtn").addEventListener("touchend",o[7][2],!1)},reset:e=>{e.moveForward=!1,e.moveBackward=!1,e.moveLeft=!1,e.moveRight=!1;for(var t=0;t<o.length;t++)document.getElementById(o[t][0]).removeEventListener("down"==o[t][1]?"mousedown":"mouseup",o[t][2],!1),document.getElementById(o[t][0]).removeEventListener("down"==o[t][1]?"touchstart":"touchend",o[t][2],!1)}}})();let i,d,l,c,m,u,E,g,p,v,h=()=>{};const w=document.getElementById("app-container"),y=[],b=[],L=new THREE.Vector3(0,1.5,0),B=new THREE.Scene,T=new THREE.PerspectiveCamera(75,window.innerWidth/window.innerHeight,.1,5e3),f={moveForward:!1,moveBackward:!1,moveLeft:!1,moveRight:!1},R=[],x=[],H=new THREE.MeshLambertMaterial;T.position.set(0,1.5,-3),T.lookAt(L);const I=new THREE.WebGLRenderer({alpha:!0,antialias:!0});I.setSize(window.innerWidth,window.innerHeight),w.appendChild(I.domElement);const P=new THREE.AmbientLight(13421772,.4);B.add(P);const M=new THREE.PointLight(16777215,.8);M.position.y=500,B.add(M);const k=new THREE.PlaneGeometry(5e3,5e3,32),j=new THREE.MeshBasicMaterial({color:14540253,side:THREE.DoubleSide}),A=new THREE.Mesh(k,j);A.rotateX(Math.PI/2),B.add(A);{const e=10,t=30,n=11842740;B.fog=new THREE.Fog(n,e,t),B.background=new THREE.Color(n)}const O=new THREE.OrbitControls(T,I.domElement);O.enableDamping=!0,O.dampingFactor=.15,O.screenSpacePanning=!1,O.enablePan=!1,O.enableKeys=!1,O.minDistance=L.distanceTo(T.position),O.maxDistance=L.distanceTo(T.position),O.target.set(L.x,L.y,L.z),O.update(),O.maxPolarAngle=O.getPolarAngle(),O.minPolarAngle=O.getPolarAngle(),O.update();let D,C,F,S=new THREE.Vector3;const z=(e,t)=>{var n=e.x-t.x,o=e.z-t.z;return Math.sqrt(n*n+o*o)};let Y=0;const W=(e,t)=>{if(e){const{name:n}=e;let o,a;switch(n){case"bell":o=[d],a=c;break;case"table":o=[c],a=d;break;case"virtualObj":o=[],a=v}for(let e=0;e<t.length;e++)document.getElementById(t[e].name+"-param-selector").classList.remove("--show");document.getElementById(n+"-param-selector").classList.add("--show"),document.getElementById("exitCage").classList.remove("--d-block"),o.map(e=>{e.children.map(e=>{e.material.transparent=!0,e.material.opacity=.4})}),a.children.map(e=>{e.material.opacity=1}),O.enabled=!1,h=()=>{const e=parseFloat(r.getMouseVelocity().x);let t,n;Math.abs(e)>.1?(t=Math.abs(e)/e,n=.2*t):(t=0,n=e),n&&!isNaN(n)&&a.rotateY(-n),t!=Y&&(Y=t)}}V=()=>{O.enabled=!0,h=()=>{},document.getElementById("exitCage").classList.add("--d-block");const e=["table","bell","virtualObj"];for(let t=0;t<e.length;t++)document.getElementById(e[t]+"-param-selector").classList.remove("--show");b.map(e=>{e.children.map(e=>{e.material.opacity=1})})}};let V=()=>{};const _=()=>{if(L.y+=i.position.y<u.position.y?.1:-.2,L.y>1.5)i.translateY(-.1),T.lookAt(L),u.position.y>-E.min.y&&u.translateY(.2);else{B.remove(i),i.children.map(e=>{e.geometry.dispose()}),L.y=1.5,T.lookAt(L),r.addEventListener("exitCage",()=>(r.resetAction(),document.getElementById("exitCage").classList.remove("--d-block"),document.getElementById("navigationControls").classList.add("--d-block"),s.init(f),O.enabled=!1,void(h=()=>{f.moveForward&&(T.translateZ(-.2),T.updateProjectionMatrix(),R.map((e,t)=>{const n=z(e.position,T.position);if(n<20&&n>5){if(D=new THREE.Vector3,D.subVectors(e.position,T.position),D.normalize(),T.getWorldDirection(S),S.normalize(),C=S.angleTo(D),C>Math.PI/3)return;v=t<x.length?x[t]:null;const n=S.clone();n.applyAxisAngle(T.up,.01);const o=n.angleTo(D);console.log(C,o),F=o<C?1:-1,s.reset(f),document.getElementById("navigationControls").classList.remove("--d-block"),h=()=>{0!=C&&(C=S.angleTo(D),C>.3?(T.rotateY(.02*F),T.getWorldDirection(S)):(T.lookAt(e.position.x,1.5,e.position.z),C=0)),T.updateProjectionMatrix(),z(e.position,T.position)>=3?(T.translateZ(-.2),T.updateProjectionMatrix(),D.subVectors(e.position,T.position)):(O.target.set(e.position.x,1.5,e.position.z),O.enabled=!0,null==v?r.setActiveTargets([{name:"table",box:l},{name:"bell",box:m.setFromObject(c)}],W):r.setActiveTargets([{name:"virtualObj",box:(new THREE.Box3).setFromObject(v)}],W),h=()=>{})}}})),f.moveBackward&&(T.translateZ(.2),T.updateProjectionMatrix()),f.moveLeft&&(T.rotateY(.05),T.updateProjectionMatrix()),f.moveRight&&(T.rotateY(-.05),T.updateProjectionMatrix())}))),r.addEventListener("closeParameterBell",()=>V()),r.addEventListener("closeParameterTable",()=>V()),r.addEventListener("closeParameterVirtual",()=>V()),r.setActiveTargets([{name:"table",box:l},{name:"bell",box:m.setFromObject(c)}],W),h=()=>{B.fog.far<90?B.fog.far+=2:(h=()=>{},O.enabled=!0)};const e=80,t=e*Math.sqrt(2)/2,n=[[0,e],[t,t],[e,0],[-t,t],[-e,0],[-t,-t],[0,-e],[t,-t]],o=[THREE.DodecahedronGeometry.bind(void 0,.4),THREE.BoxGeometry.bind(void 0,.4,.4,.4),THREE.ConeGeometry.bind(void 0,.4,.4),THREE.CylinderGeometry.bind(void 0,.4,.4,.4),THREE.OctahedronGeometry.bind(void 0,.4),THREE.TorusGeometry.bind(void 0,.4,.2),THREE.IcosahedronGeometry.bind(void 0,.4),THREE.TetrahedronGeometry.bind(void 0,.4)];for(let e=0;e<n.length;e++){const t=n[e],a=new o[e],r=new THREE.MeshPhongMaterial({color:6710886}),s=new THREE.Mesh(a,r);s.position.x=t[0],s.position.y=1,s.position.z=t[1],B.add(s),x.push(s);const i=u.clone();i.position.x=t[0],i.position.z=t[1],i.rotateY(360*Math.random()),B.add(i),R.push(i);const d=new THREE.SpotLight(16777215,.2,200,.1,.05,2);d.position.x=t[0],d.position.z=t[1],d.position.y=300,d.lookAt(s.position),B.add(d)}R.push(u)}},G=()=>{i.rotation.x>0?i.rotateX(.05):h=_};o.load("table","assets/obj/table.drc",e=>{d=new THREE.Mesh,d.geometry=e,d.material=H,B.add(d),b.push(d),l=(new THREE.Box3).setFromObject(d),y.push({name:"table",box:l})}),o.load("bell","assets/obj/bell.drc",e=>{c=new THREE.Mesh,c.geometry=e,c.material=H,c.scale.set(1.5,1.5,1.5),b.push(c),m=(new THREE.Box3).setFromObject(c),c.position.y=.83-m.min.y,B.add(c),y.push({name:"bell",box:m.setFromObject(c)})}),o.load("cage","assets/obj/lamp-centered.drc",e=>{g=new THREE.Mesh,g.geometry=e,g.material=H,B.add(g),u=g.clone();const t=(new THREE.Matrix4).makeScale(16,16,16);u.applyMatrix(t),u.rotateX(Math.PI),E=(new THREE.Box3).setFromObject(u),u.position.y=80,B.add(u),g.translateY(2.5),g.rotateX(Math.PI/2),i=g,p=(new THREE.Box3).setFromObject(g),y.push({name:"lamp",box:p})});let N=!0,X=function(){requestAnimationFrame(X),N&&(h(),O.enabled&&O.update(),I.render(B,T))};r.init(T,I,null),r.setActiveTargets(y,()=>{r.resetAction(),h=G,O.enabled=!1}),a.load(o,X);const q=document.getElementById("menu"),Z=document.getElementById("overlay"),$=document.getElementById("closeStatic");let K=!1;const J=()=>{const e=q.classList.contains("open"),t=Z.classList.contains("open");q.classList.toggle("open"),e!=t||K||(Z.classList.toggle("open"),Z.classList.remove("close")),N=e,dataLayer.push({event:"click-menu",menuIsOpen:e})},Q=e=>{q.classList.remove("open"),N=!0;const t=document.getElementById(e+"--content");U.map(t=>{t!=e&&document.getElementById(t+"--content").classList.remove("open")}),K=!0,t.classList.add("open"),$.classList.add("--d-block"),dataLayer.push({event:"static-page-view",page:e})};document.getElementById("menuBtn").addEventListener("click",J),q.addEventListener("click",e=>{e.preventDefault(),e.stopImmediatePropagation(),e.stopPropagation(),J()});const U=["about","team"];U.map((e,t)=>{document.getElementById(e).addEventListener("click",t=>{t.stopImmediatePropagation(),t.preventDefault(),Q(e)})}),Z.addEventListener("transitionend",e=>{"background-color"!=e.propertyName||Z.classList.contains("open")||Z.classList.add("close")}),$.addEventListener("click",e=>{U.map(e=>{document.getElementById(e+"--content").classList.remove("open")}),K=!1,Z.classList.remove("open"),$.classList.remove("--d-block"),dataLayer.push({event:"static-page-close"})})}]);
//# sourceMappingURL=bundle.js.map