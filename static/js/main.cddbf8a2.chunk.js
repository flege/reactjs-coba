(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{13:function(e,t,n){e.exports=n(24)},19:function(e,t,n){},20:function(e,t,n){e.exports=n.p+"static/media/logo.ee7cd8ed.svg"},21:function(e,t,n){},24:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(8),i=n.n(o),c=(n(19),n(1)),l=n(5),s=n(4),u=n(2),m=n(3),h=(n(20),n(21),n(9)),p=(n(12),function(e){function t(e){return Object(c.a)(this,t),Object(s.a)(this,Object(u.a)(t).call(this,e))}return Object(m.a)(t,e),Object(l.a)(t,[{key:"klik",value:function(){h.a.notify("Hello world",{duration:2e3})}},{key:"render",value:function(){var e=this;return r.a.createElement("div",null,r.a.createElement("button",{onClick:function(){return e.klik()}},"alert"),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("img",{src:"apel.jpg"}))}}]),t}(a.Component)),g=n(7),d=function(e){function t(e){var n;return Object(c.a)(this,t),(n=Object(s.a)(this,Object(u.a)(t).call(this,e))).state={angka1:0,angka2:0,operation:"plus"},n}return Object(m.a)(t,e),Object(l.a)(t,[{key:"changeHandler",value:function(e){this.setState(Object(g.a)({},e.target.name,e.target.value))}},{key:"hitung",value:function(){switch(this.state.operation){case"plus":return parseInt(this.state.angka1)+parseInt(this.state.angka2);case"minus":return parseInt(this.state.angka1)-parseInt(this.state.angka2);case"pow":return parseInt(this.state.angka1)*parseInt(this.state.angka2);case"div":return parseInt(this.state.angka1)/parseInt(this.state.angka2)}}},{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("span",{className:"selected "+this.props.item.color},this.props.item.name,"  "),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("input",{type:"number",name:"angka1",placeholder:"angka 1",value:this.state.angka1,onChange:this.changeHandler.bind(this)}),r.a.createElement("select",{name:"operation",onChange:this.changeHandler.bind(this)},r.a.createElement("option",{value:"plus"},"+"),r.a.createElement("option",{value:"minus"},"-"),r.a.createElement("option",{value:"pow"},"x"),r.a.createElement("option",{value:"div"},":")),r.a.createElement("input",{type:"number",name:"angka2",placeholder:"angka 2",value:this.state.angka2,onChange:this.changeHandler.bind(this)}),"=",r.a.createElement("span",null," ",this.hitung()))}}]),t}(a.Component),f=function(e){function t(e){var n;return Object(c.a)(this,t),(n=Object(s.a)(this,Object(u.a)(t).call(this,e))).state={name:"Apple",color:"merah",img:"apel.jpg"},h.a.notify("Hello world!"),n}return Object(m.a)(t,e),Object(l.a)(t,[{key:"clicked",value:function(e){this.setState({name:e.name,color:e.color,img:e.img})}},{key:"info",value:function(e){return"Calculator"==e?r.a.createElement(d,{item:this.state}):"Profile"==e?r.a.createElement(p,null):r.a.createElement("div",null,"ini adalah ",r.a.createElement("span",{className:"selected "+this.state.color},this.state.name),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("img",{src:this.state.img,width:"200"}))}},{key:"render",value:function(){var e=this;return r.a.createElement("div",{id:"app"},r.a.createElement("nav",{className:"nav"},this.props.items.map(function(t,n){var a="menu";return e.state.color===t.color&&(a="".concat(a," is-active")),r.a.createElement("a",{className:a+" "+t.color,onClick:e.clicked.bind(e,t),key:n},t.name)})),r.a.createElement("div",{className:"info"},this.info(this.state.name)))}}]),t}(a.Component),v=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function k(e,t){navigator.serviceWorker.register(e).then(function(e){e.onupdatefound=function(){var n=e.installing;null!=n&&(n.onstatechange=function(){"installed"===n.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See http://bit.ly/CRA-PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}}).catch(function(e){console.error("Error during service worker registration:",e)})}i.a.render(r.a.createElement(f,{items:[{name:"Apple",color:"merah",img:"apel.jpg"},{name:"Pineapple",color:"kuning",img:"nanas.jpg"},{name:"Avocado",color:"hijau",img:"alpukat.jpg"},{name:"Berry",color:"biru",img:"berry.jpg"},{name:"Calculator",color:"gray",img:""},{name:"Profile",color:"blue",img:""}]}),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("/reactjs-coba",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",function(){var t="".concat("/reactjs-coba","/service-worker.js");v?(function(e,t){fetch(e).then(function(n){var a=n.headers.get("content-type");404===n.status||null!=a&&-1===a.indexOf("javascript")?navigator.serviceWorker.ready.then(function(e){e.unregister().then(function(){window.location.reload()})}):k(e,t)}).catch(function(){console.log("No internet connection found. App is running in offline mode.")})}(t,e),navigator.serviceWorker.ready.then(function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit http://bit.ly/CRA-PWA")})):k(t,e)})}}()}},[[13,1,2]]]);
//# sourceMappingURL=main.cddbf8a2.chunk.js.map