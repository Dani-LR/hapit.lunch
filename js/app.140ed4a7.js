(function(e){function t(t){for(var n,r,i=t[0],u=t[1],s=t[2],l=0,d=[];l<i.length;l++)r=i[l],Object.prototype.hasOwnProperty.call(c,r)&&c[r]&&d.push(c[r][0]),c[r]=0;for(n in u)Object.prototype.hasOwnProperty.call(u,n)&&(e[n]=u[n]);f&&f(t);while(d.length)d.shift()();return o.push.apply(o,s||[]),a()}function a(){for(var e,t=0;t<o.length;t++){for(var a=o[t],n=!0,r=1;r<a.length;r++){var i=a[r];0!==c[i]&&(n=!1)}n&&(o.splice(t--,1),e=u(u.s=a[0]))}return e}var n={},r={app:0},c={app:0},o=[];function i(e){return u.p+"js/"+({}[e]||e)+"."+{"chunk-4fca3d7c":"efd37dc2","chunk-17af9cdd":"ff13adbd","chunk-3f0a8b54":"638e2f36","chunk-c000335c":"e61320f4","chunk-4a33528a":"b7588c2c","chunk-57561d05":"6c1e30b4","chunk-56135b9c":"13bf0259","chunk-78346ac6":"c5b57ea6","chunk-1915dffc":"9f011bee","chunk-69498528":"dfc0d3ea","chunk-5da7b5da":"602acfbc","chunk-7826be67":"8f59b7a4","chunk-4dfec9b6":"278cec11","chunk-ae203f32":"013ccda1","chunk-4ca8841c":"46425aa5","chunk-951711d4":"8b4206b9","chunk-7250ed6f":"f9864182","chunk-7f051226":"b9decf81","chunk-c79fe9e8":"40fccd80","chunk-3be69a36":"434ba70a","chunk-42ff5156":"acbe1351","chunk-54289484":"e1acc3c1","chunk-b7cfe4a6":"132f43f8","chunk-0482382c":"c59d8c22","chunk-2ac69f61":"d96c148e","chunk-a04fc1fa":"cff8a279","chunk-2d225b8b":"2eb75388","chunk-c2405fac":"fd7a0ce6","chunk-c874a560":"9a88d70d"}[e]+".js"}function u(t){if(n[t])return n[t].exports;var a=n[t]={i:t,l:!1,exports:{}};return e[t].call(a.exports,a,a.exports,u),a.l=!0,a.exports}u.e=function(e){var t=[],a={"chunk-4fca3d7c":1,"chunk-17af9cdd":1,"chunk-3f0a8b54":1,"chunk-c000335c":1,"chunk-4a33528a":1,"chunk-57561d05":1,"chunk-56135b9c":1,"chunk-78346ac6":1,"chunk-1915dffc":1,"chunk-69498528":1,"chunk-5da7b5da":1,"chunk-7826be67":1,"chunk-4dfec9b6":1,"chunk-ae203f32":1,"chunk-4ca8841c":1,"chunk-951711d4":1,"chunk-7f051226":1,"chunk-c79fe9e8":1,"chunk-3be69a36":1,"chunk-42ff5156":1,"chunk-54289484":1,"chunk-0482382c":1,"chunk-2ac69f61":1,"chunk-a04fc1fa":1};r[e]?t.push(r[e]):0!==r[e]&&a[e]&&t.push(r[e]=new Promise((function(t,a){for(var n="css/"+({}[e]||e)+"."+{"chunk-4fca3d7c":"57793855","chunk-17af9cdd":"d277fda1","chunk-3f0a8b54":"ab2af501","chunk-c000335c":"998a35d8","chunk-4a33528a":"2afbfc4e","chunk-57561d05":"eeb580c0","chunk-56135b9c":"bf61c9c1","chunk-78346ac6":"7a46f2e4","chunk-1915dffc":"045eeab0","chunk-69498528":"e739e11e","chunk-5da7b5da":"8bb468b3","chunk-7826be67":"04f8765b","chunk-4dfec9b6":"01f98a96","chunk-ae203f32":"a9933b23","chunk-4ca8841c":"c83b4863","chunk-951711d4":"3ab86bcb","chunk-7250ed6f":"31d6cfe0","chunk-7f051226":"920faefc","chunk-c79fe9e8":"3cbb840d","chunk-3be69a36":"47858089","chunk-42ff5156":"4613a85c","chunk-54289484":"12cf6f88","chunk-b7cfe4a6":"31d6cfe0","chunk-0482382c":"0857b0a3","chunk-2ac69f61":"045eeab0","chunk-a04fc1fa":"8205a93b","chunk-2d225b8b":"31d6cfe0","chunk-c2405fac":"31d6cfe0","chunk-c874a560":"31d6cfe0"}[e]+".css",c=u.p+n,o=document.getElementsByTagName("link"),i=0;i<o.length;i++){var s=o[i],l=s.getAttribute("data-href")||s.getAttribute("href");if("stylesheet"===s.rel&&(l===n||l===c))return t()}var d=document.getElementsByTagName("style");for(i=0;i<d.length;i++){s=d[i],l=s.getAttribute("data-href");if(l===n||l===c)return t()}var f=document.createElement("link");f.rel="stylesheet",f.type="text/css",f.onload=t,f.onerror=function(t){var n=t&&t.target&&t.target.src||c,o=new Error("Loading CSS chunk "+e+" failed.\n("+n+")");o.code="CSS_CHUNK_LOAD_FAILED",o.request=n,delete r[e],f.parentNode.removeChild(f),a(o)},f.href=c;var h=document.getElementsByTagName("head")[0];h.appendChild(f)})).then((function(){r[e]=0})));var n=c[e];if(0!==n)if(n)t.push(n[2]);else{var o=new Promise((function(t,a){n=c[e]=[t,a]}));t.push(n[2]=o);var s,l=document.createElement("script");l.charset="utf-8",l.timeout=120,u.nc&&l.setAttribute("nonce",u.nc),l.src=i(e);var d=new Error;s=function(t){l.onerror=l.onload=null,clearTimeout(f);var a=c[e];if(0!==a){if(a){var n=t&&("load"===t.type?"missing":t.type),r=t&&t.target&&t.target.src;d.message="Loading chunk "+e+" failed.\n("+n+": "+r+")",d.name="ChunkLoadError",d.type=n,d.request=r,a[1](d)}c[e]=void 0}};var f=setTimeout((function(){s({type:"timeout",target:l})}),12e4);l.onerror=l.onload=s,document.head.appendChild(l)}return Promise.all(t)},u.m=e,u.c=n,u.d=function(e,t,a){u.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},u.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},u.t=function(e,t){if(1&t&&(e=u(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(u.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)u.d(a,n,function(t){return e[t]}.bind(null,n));return a},u.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return u.d(t,"a",t),t},u.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},u.p="/",u.oe=function(e){throw console.error(e),e};var s=window["webpackJsonp"]=window["webpackJsonp"]||[],l=s.push.bind(s);s.push=t,s=s.slice();for(var d=0;d<s.length;d++)t(s[d]);var f=l;o.push([0,"chunk-vendors"]),a()})({0:function(e,t,a){e.exports=a("56d7")},"002c":function(e,t,a){e.exports=a.p+"img/historial.57417ed1.svg"},"03aa":function(e,t,a){"use strict";a("d3b7");var n=a("260b"),r=a("ea7b"),c=(a("000b"),a("e71f")),o=a("20aa"),i=Object(n["a"])(o["a"].FIREBASE_OPTIONS),u=Object(c["g"])(i),s=Object(r["e"])(),l=new r["c"]("microsoft.com"),d=new r["b"],f=new r["a"],h=new r["d"],m=function(){Object(r["g"])(s,l)},p=function(){Object(r["g"])(s,d)},v=function(){Object(r["g"])(s,f)},g=function(){Object(r["g"])(s,h)},b=function(){return new Promise((function(e,t){Object(r["f"])(s).then((function(t){var a=y(t.user);e({user:a})})).catch((function(e){e.code,e.message,e.email;t(e)}))}))},k=function(e){s.onAuthStateChanged((function(t){e(t)}))},$=function(){s.signOut()};function y(e){return e?{nombre:e.displayName,apellidoPaterno:null,apellidoMaterno:null,email:e.email,photoURL:e.photoURL}:null}var _={db:u,collection:c["b"],getDocs:c["f"],doc:c["d"],getDoc:c["e"],query:c["h"],where:c["j"],addDoc:c["a"],setDoc:c["i"],deleteDoc:c["c"]},C={Firestore:_,getAuthResult:b,googleSignIn:p,facebookSignIn:v,twitterSignIn:g,microsoftSignIn:m,getActiveUser:k,signOut:$};t["a"]=C},"0d88":function(e,t,a){e.exports=a.p+"img/dashboard.90f227f4.svg"},"0dcc":function(e,t,a){"use strict";a("d3b7"),a("e9c4");var n=a("bc3a"),r=a.n(n),c={username:"",password:""},o=c,i=function(e){return new Promise((function(t,a){r()({method:"get",url:e,auth:o,headers:{"Content-Type":"application/json"}}).then((function(e){t(e.data)})).catch((function(e){a(e)}))}))},u=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return new Promise((function(a,n){r()({method:"post",url:e,data:JSON.stringify(t),auth:o,headers:{"Content-Type":"application/json"}}).then((function(e){a(e.data)})).catch((function(e){n(e)}))}))},s=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return new Promise((function(a,n){r()({method:"put",url:e,data:JSON.stringify(t),auth:o,headers:{"Content-Type":"application/json"}}).then((function(e){a(e.data)})).catch((function(e){n(e)}))}))},l=function(e){return new Promise((function(t,a){r()({method:"delete",url:e,auth:o,headers:{"Content-Type":"application/json"}}).then((function(e){t(e.data)})).catch((function(e){a(e)}))}))},d=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return new Promise((function(a,n){r()({method:"patch",url:e,data:JSON.stringify(t),auth:o,headers:{"Content-Type":"application/json"}}).then((function(e){a(e.data)})).catch((function(e){n(e)}))}))},f=function(e,t,a){var n=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"application/json";return new Promise((function(c,i){r()({method:a,url:e,data:t,auth:o,headers:{"Content-Type":n}}).then((function(e){c(e.data)})).catch((function(e){i(e)}))}))},h=function(e,t){return console.log(" sending .. request ",e,"   dat:",t),new Promise((function(a,n){r.a.post(e,t,{headers:{"Content-Type":"multipart/form-data"}}).then((function(e){a(e.data)})).catch((function(e){n(e)}))}))};t["a"]={get:i,post:u,put:s,remove:l,patch:d,requestFormData:f,multipart:h}},1055:function(e,t,a){e.exports=a.p+"img/saldo.56e5c535.svg"},"1dbc":function(e,t,a){e.exports=a.p+"img/hapitLogo.996a9863.svg"},"20aa":function(e,t,a){"use strict";var n="http://localhost:8010",r={apiKey:"AIzaSyACvAafiW0M6auBVtoUG8jeohja-mHJx3k",authDomain:"hapit-lunch-dev.firebaseapp.com",projectId:"hapit-lunch-dev",storageBucket:"hapit-lunch-dev.appspot.com",messagingSenderId:"932914524721",appId:"1:932914524721:web:3f1a7c20813b4c2b49db10"};t["a"]={ACCESS_TOKEN_KEY:"ACCESS_TOKEN",CURRENT_USER_KEY:"CURRENT_USER",CARRITO_KEY:"CARRITO",BASE_URL:n,FIREBASE_OPTIONS:r,IMG_URL:"https://img.vjp.io/image",IMG_PATH:"hapit-lunch"}},"233a":function(e,t,a){e.exports=a.p+"img/niños.6a9c8fa3.svg"},"2d6c":function(e,t,a){e.exports=a.p+"img/carrito_estado_vacio.513dcad9.svg"},"31e0":function(e,t,a){"use strict";a("3490")},"334e":function(e,t,a){"use strict";a("d81d"),a("d3b7");var n=a("20aa"),r=a("0dcc"),c=(a("159b"),a("03aa")),o=c["a"].Firestore,i=o.db,u=o.collection,s=o.getDocs,l=o.doc,d=o.getDoc,f=o.query,h=o.where,m=o.addDoc,p=o.setDoc,v=o.deleteDoc,g=function(e){return new Promise((function(t,a){s(u(i,e)).then((function(e){if(e.empty)t([]);else{var a=[];e.forEach((function(e){var t=e.data();t.id=e.id,a.push(t)})),t(a)}})).catch((function(e){a(e)}))}))},b=function(e,t){return new Promise((function(a,n){var r=l(i,e,String(t));d(r).then((function(e){if(e.exists()){var t=e.data();t.id=e.id,a(t)}else a(null)})).catch((function(e){n(e)}))}))},k=function(e,t,a){return new Promise((function(n,r){var c=f(u(i,e),h(a,"==",t));s(c).then((function(e){if(e.empty)n([]);else{var t=[];e.forEach((function(e){var a=e.data();a.id=e.id,t.push(a)})),n(t)}})).catch((function(e){r(e)}))}))},$=function(e,t){return new Promise((function(a,n){v(l(i,e,t)).then((function(){a(t)})).catch((function(e){n(e)}))}))},y=function(e,t){return new Promise((function(a,n){m(u(i,e),t).then((function(e){t.id=e.id,a(t)})).catch((function(e){n(e)}))}))},_=function(e,t){return new Promise((function(a,n){p(l(i,e,String(t.id)),t).then((function(){a(t)})).catch((function(e){n(e)}))}))},C={getCollection:g,agregar:y,getDocument:b,buscarPorCampo:k,eliminar:$,actualizar:_},x=function(e){return"Bachillerato"===e.seccion.titulo},S=function(e){return e.esPadreDeFamilia||e.esAlumno&&x(e)},w=function(e){return e.esPadreDeFamilia?e.hijos.map((function(e){return e.alumno})):e.esAlumno?[e]:[]},A=function(e,t){var a=new FormData;a.append("password",t);var c=n["a"].BASE_URL+"/encargados/"+e+"/password";return r["a"].requestFormData(c,a,"patch")},P=function(e){return new Promise((function(t,a){C.buscarPorCampo("usuarios",e,"email").then((function(a){a.length>0?t(a[0]):t({email:e,deseaGuardarTarjeta:!1})})).catch((function(e){return a(e)}))}))},O=function(e){var t=e.id?C.actualizar:C.agregar;return t("usuarios",e)};t["a"]={alumnoPuedeOrdenar:x,usuarioPuedeGestionarOrdenes:S,getListaAlumnos:w,cambiarContrasena:A,getInfoFromFirebase:P,saveInfoFromFirebase:O}},3490:function(e,t,a){},"49ce":function(e,t,a){e.exports=a.p+"img/menu.468230a1.svg"},"56d7":function(e,t,a){"use strict";a.r(t);a("e260"),a("e6cf"),a("cca6"),a("a79d");var n=a("2b0e"),r=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-app",[a("v-main",["Login"!=e.$route.name?a("navegador"):e._e(),"Login"!=e.$route.name?a("bar"):e._e(),"Dashboard"===e.$route.name?a("tarjeta-saldo",{staticStyle:{position:"sticky"}}):e._e(),a("router-view")],1),a("loader"),a("alerta")],1)},c=[],o=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-dialog",{attrs:{scrollable:"",persistent:"","max-width":e.$alerta.ancho+"px",transition:"dialog-top-transition"},on:{keydown:function(t){if(!t.type.indexOf("key")&&e._k(t.keyCode,"esc",27,t.key,["Esc","Escape"]))return null;e.$alerta.model=!1}},model:{value:e.$alerta.model,callback:function(t){e.$set(e.$alerta,"model",t)},expression:"$alerta.model"}},[a("v-card",{staticStyle:{"border-radius":"15px"}},[a("v-card-text",[a("v-row",{staticClass:"pa-9",attrs:{justify:"center",align:"center"}},[e.$alerta.img?a("v-col",{staticClass:"text-center",attrs:{cols:"12",sm:"10",md:"9",lg:"8"}},[a("v-img",{attrs:{src:e.$alerta.img}})],1):a("v-col",{staticClass:"text-center",attrs:{cols:"12",sm:"12"}},[a("v-icon",{class:e.$alerta.color+"--text",attrs:{size:"50px"}},[e._v(e._s(e.$alerta.icon))])],1),a("v-col",{staticClass:"text-center",attrs:{cols:"12",sm:"12"}},[a("h2",[e._v(e._s(e.$alerta.mensaje))])])],1),e._t("default")],2),e.$alerta.isSnackbar?e._e():a("v-card-actions",[a("v-spacer"),a("v-btn",{attrs:{text:"",plain:""},on:{click:function(t){e.$alerta.model=!1}}},[e._v("Cerrar")]),null!=e.$alerta.accion?a("v-btn",{attrs:{text:"",plain:"",color:"primary"},on:{click:function(){e.$alerta.accion()}}},[e._v("Aceptar")]):e._e()],1)],1)],1)},i=[],u={name:"Alerta"},s=u,l=a("2877"),d=a("6544"),f=a.n(d),h=a("8336"),m=a("b0af"),p=a("99d9"),v=a("62ad"),g=a("169a"),b=a("132d"),k=a("adda"),$=a("0fd9"),y=a("2fa4"),_=Object(l["a"])(s,o,i,!1,null,"94b082ae",null),C=_.exports;f()(_,{VBtn:h["a"],VCard:m["a"],VCardActions:p["a"],VCardText:p["c"],VCol:v["a"],VDialog:g["a"],VIcon:b["a"],VImg:k["a"],VRow:$["a"],VSpacer:y["a"]});var x=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-navigation-drawer",{attrs:{fixed:"",app:"",permanent:!e.$vuetify.breakpoint.smAndDown&&e.$navegador},model:{value:e.$navegador,callback:function(t){e.$navegador=t},expression:"$navegador"}},[n("v-card",{attrs:{flat:"",to:{name:"InformacionPersonal"}}},[n("v-card-text",[e.$usuario.esAlumno?[n("v-avatar",{attrs:{size:"200px"}},[e.$usuario&&e.$usuario.refImagen?n("v-img",{attrs:{height:"200",width:"200",src:e.$usuario.refImagen}}):n("v-img",{attrs:{height:"200",width:"200",src:a("71f5")}})],1)]:[e.$usuario&&e.$usuario.photoURL?n("v-avatar",{attrs:{size:"200px"}},[n("v-img",{attrs:{height:"200",width:"200",src:e.$usuario.photoURL}})],1):n("v-avatar",{attrs:{size:"200px"}},[n("v-img",{attrs:{height:"200",width:"200",src:a("96c2")}})],1)]],2),n("v-card-text",{staticClass:"text-center"},[n("v-row",[n("v-col",{staticClass:"pb-0",attrs:{cols:"12"}},[n("h3",{},[e._v(e._s(e.$usuario.nombre))])]),n("v-col",{staticClass:"pt-0",attrs:{cols:"12"}},[n("h4",{staticClass:"font-weight-bold text--disabled"},[e._v(e._s(e.$usuario.email))])])],1)],1)],1),n("v-list",{attrs:{dense:"",nav:""}},e._l(e.opciones,(function(t){return n("v-list-item",{key:t.title,attrs:{to:{name:t.irA},exact:""}},[n("v-list-item-icon",[n("v-img",{attrs:{src:t.icon,width:"30px"}})],1),n("v-list-item-content",[n("v-list-item-title",[e._v(e._s(t.title))])],1)],1)})),1)],1)},S=[],w=a("2909"),A=(a("99af"),{name:"Navegador",data:function(){return{opciones:[],right:null}},created:function(){this.opciones=[{title:"Dashboard",icon:a("0d88"),irA:"Dashboard"}].concat(Object(w["a"])(P(this)))}});function P(e){return e.$usuario.esAlumno?e.$alumnoPuedeOrdenar()?[{title:"Saldo",icon:a("1055"),irA:"Saldo"},{title:"Productos",icon:a("49ce"),irA:"VistaProductosParaAlumno"},{title:"Órdenes",icon:a("ea95"),irA:"DashboardOrdenes"},{title:"Historial",icon:a("002c"),irA:"HistorialOrdenes"},{title:"Boletín",icon:a("ca81"),irA:"DashboardBoletin"}]:[]:e.$usuario.esPadreDeFamilia?[{title:"Alumnos",icon:a("233a"),irA:"Alumnos"},{title:"Saldo",icon:a("1055"),irA:"Saldo"},{title:"Menú",icon:a("49ce"),irA:"DashboardMenu"},{title:"Tienda",icon:a("f070"),irA:"DashboardTienda"},{title:"Órdenes",icon:a("ea95"),irA:"DashboardOrdenes"},{title:"Historial",icon:a("002c"),irA:"HistorialOrdenes"},{title:"Boletín",icon:a("ca81"),irA:"DashboardBoletin"}]:e.$usuario.esEncargado?[{title:"Órdenes",icon:a("ea95"),irA:"PanelDeBusquedaDeOrdenes"},{title:"Productos",icon:a("f070"),irA:"ProductosCafeteria"},{title:"Menús",icon:a("49ce"),irA:"MenusCafeteria"},{title:"Boletines",icon:a("ca81"),irA:"PanelBoletines"},{title:"Cafeterías",icon:a("f070"),irA:"Cafeterias"},{title:"Reporte",icon:a("ca81"),irA:""}]:[]}var O=A,E=(a("31e0"),a("8212")),D=a("8860"),j=a("da13"),V=a("5d23"),T=a("34c3"),I=a("f774"),R=Object(l["a"])(O,x,S,!1,null,"4d7ed32a",null),N=R.exports;f()(R,{VAvatar:E["a"],VCard:m["a"],VCardText:p["c"],VCol:v["a"],VImg:k["a"],VList:D["a"],VListItem:j["a"],VListItemContent:V["a"],VListItemIcon:T["a"],VListItemTitle:V["c"],VNavigationDrawer:I["a"],VRow:$["a"]});var B=function(){var e=this,t=e.$createElement,n=e._self._c||t;return"Login"!=e.$route.name?n("v-app-bar",{attrs:{color:"#eb2229",flat:"",app:"",dark:""}},[n("v-app-bar-nav-icon",{on:{click:function(t){e.$navegador=!e.$navegador}}}),n("div",{staticClass:"v-toolbar-title text-xs-center align-center justify-center",staticStyle:{"flex-grow":"1"}},[n("v-img",{attrs:{width:"120px",height:"53px",src:a("1dbc")}})],1),n("v-spacer"),e.$usuario.administrador?n("v-btn",{attrs:{icon:"",dark:"",to:{name:"Usuarios"}}},[n("v-icon",[e._v("mdi-account-group")])],1):e._e(),e.$usuarioPuedeGestionarOrdenes()?n("v-menu",{attrs:{"offset-y":""},scopedSlots:e._u([{key:"activator",fn:function(t){var a=t.attrs,r=t.on;return[n("v-btn",e._g(e._b({attrs:{icon:"",dark:""}},"v-btn",a,!1),r),[e.$ordenesNuevas.length?n("v-badge",{attrs:{color:"green",content:e.$ordenesNuevas.length}},[n("v-icon",[e._v("mdi-cart")])],1):n("v-icon",[e._v("mdi-cart")])],1)]}}],null,!1,2590994248)},[n("v-card",[e.$ordenesNuevas.length>0?[n("v-card",[e._l(e.$ordenesNuevas,(function(t,a){return n("v-card-text",{key:a},[n("v-row",[n("v-col",{attrs:{cols:"12"}},[n("v-row",[n("v-col",{staticClass:"font-weight-bold",attrs:{cols:"12"}},[e._v(" Orden para "+e._s(t.alumno.nombreCompleto)+" ")]),n("v-col",{staticClass:"font-weight-bold",attrs:{cols:"12"}},[e._v(" Para consumir el "+e._s(e._f("fecha")(t.fecha))+" ")]),n("v-col",{staticClass:"my-0 py-0",attrs:{cols:"12"}},[n("span",{staticClass:"green--text font-weight-bold"},[e._v(e._s(e._f("moneda")(t.costo)))])])],1)],1)],1)],1)})),n("v-card-actions",{staticClass:"text-center",staticStyle:{display:"flex","justify-content":"center"}},[n("v-btn",{attrs:{small:"",rounded:"",color:"primary",dark:"",to:{name:"ResumenCarrito"}}},[e._v("Ir al carrito")])],1)],2)]:n("v-card-text",[n("v-row",{staticStyle:{display:"flex","justify-content":"center","align-items":"center"},attrs:{align:"center",justify:"center"}},[n("v-col",{staticClass:"text-center",staticStyle:{display:"flex","justify-content":"center","align-items":"center"},attrs:{cols:"12"}},[n("img",{style:e.$vuetify.breakpoint.smAndDown?"width:100%":"width:50%",attrs:{src:a("2d6c")}})]),n("v-col",{staticClass:"text-center",attrs:{cols:"12"}},[n("h2",{staticClass:"text--disabled",staticStyle:{"font-family":"Nunito"}},[e._v("Aún no tiene ordenes")])])],1)],1)],2)],1):e._e(),n("v-btn",{attrs:{icon:"",dark:""},on:{click:e.cerrarSesion}},[n("v-icon",[e._v("mdi-exit-to-app")])],1)],1):e._e()},L=[],U=a("20aa"),M={name:"Bar",methods:{cerrarSesion:function(){localStorage.removeItem(U["a"].ACCESS_TOKEN_KEY),localStorage.removeItem(U["a"].CURRENT_USER_KEY),localStorage.removeItem(U["a"].CARRITO_KEY),this.$usuario={},this.$ordenesNuevas=[],this.$router.push({name:"Login"})}}},F=M,Y=a("40dc"),K=a("5bc1"),G=a("4ca6"),q=a("e449"),z=Object(l["a"])(F,B,L,!1,null,"3e4ab918",null),H=z.exports;f()(z,{VAppBar:Y["a"],VAppBarNavIcon:K["a"],VBadge:G["a"],VBtn:h["a"],VCard:m["a"],VCardActions:p["a"],VCardText:p["c"],VCol:v["a"],VIcon:b["a"],VImg:k["a"],VMenu:q["a"],VRow:$["a"],VSpacer:y["a"]});var J=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-card",{attrs:{to:e.$usuario.esAlumno?{name:"Saldo"}:null}},[a("v-card-text",{staticClass:"text-center"},[a("h2",[e._v("Hola "+e._s(e.$usuario.nombre))]),e.$usuario.esAlumno?a("h2",{staticClass:"success--text mt-2"},[e._v("Saldo: "+e._s(e._f("moneda")(e.$usuario.cafeteria.saldoAlumno)))]):e._e()])],1)},W=[],Q={name:"TarjetaSaldo"},X=Q,Z=Object(l["a"])(X,J,W,!1,null,"2bad41bc",null),ee=Z.exports;f()(Z,{VCard:m["a"],VCardText:p["c"]});var te=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-overlay",{attrs:{value:e.$loader,"z-index":"205"}},[a("v-progress-circular",{attrs:{indeterminate:"",color:"primary",size:"64"}})],1)},ae=[],ne={name:"Loader"},re=ne,ce=a("a797"),oe=a("490a"),ie=Object(l["a"])(re,te,ae,!1,null,"1a64bd0f",null),ue=ie.exports;f()(ie,{VOverlay:ce["a"],VProgressCircular:oe["a"]});var se={name:"App",components:{Loader:ue,TarjetaSaldo:ee,Bar:H,Navegador:N,Alerta:C},data:function(){return{}},created:function(){var e=JSON.parse(localStorage.getItem(U["a"].CURRENT_USER_KEY));e&&e.id&&(this.$usuario=e);var t=JSON.parse(localStorage.getItem(U["a"].CARRITO_KEY));this.$ordenesNuevas=t||[]},watch:{$usuario:function(e){},$ordenesNuevas:function(e){}}},le=se,de=a("7496"),fe=a("f6c4"),he=Object(l["a"])(le,r,c,!1,null,null,null),me=he.exports;f()(he,{VApp:de["a"],VMain:fe["a"]});var pe=a("f309");n["a"].use(pe["a"]);var ve=new pe["a"]({theme:{themes:{light:{precios:"#315ae4"},dark:{precios:"#315ae4"}}}}),ge=(a("d3b7"),a("3ca3"),a("ddb0"),a("b0c0"),a("8c4f")),be=a("334e"),ke=function(){return Promise.all([a.e("chunk-4fca3d7c"),a.e("chunk-4a33528a"),a.e("chunk-57561d05")]).then(a.bind(null,"578a"))},$e=function(){return Promise.all([a.e("chunk-56135b9c"),a.e("chunk-b7cfe4a6"),a.e("chunk-0482382c")]).then(a.bind(null,"0c7c"))},ye=function(){return Promise.all([a.e("chunk-4fca3d7c"),a.e("chunk-56135b9c"),a.e("chunk-78346ac6"),a.e("chunk-1915dffc")]).then(a.bind(null,"2179"))},_e=function(){return Promise.all([a.e("chunk-4fca3d7c"),a.e("chunk-17af9cdd")]).then(a.bind(null,"3be1"))},Ce=function(){return Promise.all([a.e("chunk-56135b9c"),a.e("chunk-3f0a8b54"),a.e("chunk-c79fe9e8"),a.e("chunk-42ff5156")]).then(a.bind(null,"95f3"))},xe=function(){return Promise.all([a.e("chunk-56135b9c"),a.e("chunk-c79fe9e8"),a.e("chunk-2ac69f61")]).then(a.bind(null,"3619"))},Se=function(){return Promise.all([a.e("chunk-56135b9c"),a.e("chunk-3f0a8b54"),a.e("chunk-c79fe9e8"),a.e("chunk-54289484")]).then(a.bind(null,"e15b"))},we=function(){return a.e("chunk-a04fc1fa").then(a.bind(null,"35fa"))},Ae=function(){return a.e("chunk-c874a560").then(a.bind(null,"dbf2"))},Pe=function(){return a.e("chunk-c2405fac").then(a.bind(null,"5cf4"))},Oe=function(){return Promise.all([a.e("chunk-4fca3d7c"),a.e("chunk-78346ac6"),a.e("chunk-4a33528a"),a.e("chunk-4ca8841c")]).then(a.bind(null,"b92b"))},Ee=function(){return Promise.all([a.e("chunk-4fca3d7c"),a.e("chunk-7826be67")]).then(a.bind(null,"5572"))},De=function(){return Promise.all([a.e("chunk-56135b9c"),a.e("chunk-3f0a8b54"),a.e("chunk-c79fe9e8"),a.e("chunk-3be69a36")]).then(a.bind(null,"5981"))},je=function(){return Promise.all([a.e("chunk-b7cfe4a6"),a.e("chunk-2d225b8b")]).then(a.bind(null,"a7ee"))},Ve=function(){return Promise.all([a.e("chunk-4fca3d7c"),a.e("chunk-78346ac6"),a.e("chunk-4dfec9b6"),a.e("chunk-951711d4")]).then(a.bind(null,"2ab5"))},Te=function(){return Promise.all([a.e("chunk-4fca3d7c"),a.e("chunk-78346ac6"),a.e("chunk-3f0a8b54"),a.e("chunk-4dfec9b6"),a.e("chunk-ae203f32")]).then(a.bind(null,"34c0"))},Ie=function(){return Promise.all([a.e("chunk-4fca3d7c"),a.e("chunk-56135b9c"),a.e("chunk-78346ac6"),a.e("chunk-69498528"),a.e("chunk-5da7b5da")]).then(a.bind(null,"f755"))},Re=function(){return Promise.all([a.e("chunk-4fca3d7c"),a.e("chunk-3f0a8b54"),a.e("chunk-c000335c")]).then(a.bind(null,"b736"))},Ne=function(){return Promise.all([a.e("chunk-4fca3d7c"),a.e("chunk-78346ac6"),a.e("chunk-69498528"),a.e("chunk-7250ed6f")]).then(a.bind(null,"62e8"))},Be=function(){return Promise.all([a.e("chunk-4fca3d7c"),a.e("chunk-78346ac6"),a.e("chunk-69498528"),a.e("chunk-7f051226")]).then(a.bind(null,"b88a"))},Le=[{path:"/",component:$e,name:"Dashboard"},{path:"/login",component:ke,name:"Login"},{path:"/alumnos",component:ye,name:"Alumnos"},{path:"/saldo",component:_e,name:"Saldo"},{path:"/menu",component:Ce,name:"DashboardMenu"},{path:"/ordenes",component:xe,name:"DashboardOrdenes",meta:{esUsuarioGestionadorOrdenes:!0}},{path:"/tienda",component:Se,name:"DashboardTienda"},{path:"/historial",component:we,name:"HistorialOrdenes"},{path:"/boletin",component:Ae,name:"DashboardBoletin"},{path:"/carrito",component:Pe,name:"ResumenCarrito",meta:{esUsuarioGestionadorOrdenes:!0}},{path:"/informacion",component:Oe,name:"InformacionPersonal"},{path:"/productos",component:De,name:"VistaProductosParaAlumno"},{path:"/",component:je,name:"DashboardCafeteria",meta:{esEncargado:!0}},{path:"/busqueda-ordenes",component:Ie,name:"PanelDeBusquedaDeOrdenes",meta:{esEncargado:!0}},{path:"/productos-cafeteria",component:Ve,name:"ProductosCafeteria",meta:{esEncargado:!0}},{path:"/menus-cafeteria",component:Te,name:"MenusCafeteria",meta:{esEncargado:!0}},{path:"/boletines",component:Re,name:"PanelBoletines",meta:{esEncargado:!0}},{path:"/cafeterias",component:Ne,name:"Cafeterias",meta:{esEncargado:!0}},{path:"/usuarios",component:Be,name:"Usuarios",meta:{esAdministrador:!0}},{path:"/login-cafeteria",component:Ee,name:"LoginCafeteria"}],Ue=function(e){e.use(ge["a"]);var t=new ge["a"]({routes:Le,mode:"history"});return t.beforeEach((function(e,t,a){var n=JSON.parse(localStorage.getItem(U["a"].CURRENT_USER_KEY));n&&n.id?"Login"===e.name?a("/"):e.matched.some((function(e){return e.meta.esUsuarioGestionadorOrdenes}))?be["a"].usuarioPuedeGestionarOrdenes(n)?a():a("/"):e.matched.some((function(e){return e.meta.esEncargado}))?n.esEncargado?a():a("/"):e.matched.some((function(e){return e.meta.esAdministrador}))?n.esEncargado&&n.administrador?a():a("/"):a():"Login"!==e.name?a("/login"):a()})),t},Me={getRouter:Ue},Fe=a("3a60"),Ye=a.n(Fe),Ke=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-container",{staticClass:"fill-height pb-9",attrs:{fluid:"","fill-height":""}},[a("v-layout",{staticStyle:{display:"block !important",background:"transparent"},attrs:{column:""}},[a("v-card",{class:"elevation-0 "+(e.$vuetify.breakpoint.xsOnly?"ma-0":"ma-4"),staticStyle:{background:"transparent"},attrs:{color:"transparent"}},[a("h1",{staticClass:"grey--text mb-5"},[e._v(e._s(e.titulo))]),e._t("default")],2)],1)],1)},Ge=[],qe={name:"Wrapper",props:{titulo:{type:String,default:null}}},ze=qe,He=a("a523"),Je=a("a722"),We=Object(l["a"])(ze,Ke,Ge,!1,null,"571d1614",null),Qe=We.exports;f()(We,{VCard:m["a"],VContainer:He["a"],VLayout:Je["a"]});var Xe=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-dialog",{attrs:{scrollable:"",persistent:"",fullscreen:!e.noFullscreen&&e.$vuetify.breakpoint.smAndDown,"max-width":e.ancho+"px"},on:{keydown:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"esc",27,t.key,["Esc","Escape"])?null:e.cerrarDialog.apply(null,arguments)}},model:{value:e.value,callback:function(t){e.value=t},expression:"value"}},[a("v-card",{staticStyle:{"border-radius":"10px"}},[a("v-card-title",[e.esConsulta?a("v-btn",{staticClass:"mr-2",attrs:{icon:"",color:"gray"},on:{click:e.cerrarDialog}},[a("v-icon",[e._v("mdi-arrow-left")])],1):e._e(),a("span",{staticStyle:{"word-break":"normal!important"}},[e._v(e._s(e.title))])],1),a("v-card-text",[e._t("default")],2),e.esConsulta?e._e():a("v-card-actions",[a("v-spacer"),a("v-btn",{attrs:{text:"",plain:""},on:{click:e.cerrarDialog}},[e._v("Cerrar")]),e._t("actions")],2)],1)],1)},Ze=[],et={name:"Dialogo",props:{value:{type:Boolean},ancho:{type:String,default:"600"},title:{type:String,required:!0},noFullscreen:{type:Boolean,default:!1},esConsulta:{type:Boolean,default:!1}},methods:{cerrarDialog:function(){this.$emit("input",!1)}}},tt=et,at=Object(l["a"])(tt,Xe,Ze,!1,null,"4d868102",null),nt=at.exports;f()(at,{VBtn:h["a"],VCard:m["a"],VCardActions:p["a"],VCardText:p["c"],VCardTitle:p["d"],VDialog:g["a"],VIcon:b["a"],VSpacer:y["a"]}),n["a"].component("Wrapper",Qe),n["a"].component("Dialogo",nt);a("d81d");var rt=new n["a"]({data:{$loader:!1,$usuario:{},$alerta:{model:!1,ancho:"",color:"",icon:"",mensaje:"",isSnackbar:!1},$navegador:!0,$ordenesNuevas:[],$cafeteriaSeleccionada:{}}});n["a"].mixin({computed:{$loader:{get:function(){return rt.$data.$loader},set:function(e){rt.$data.$loader=e}},$usuario:{get:function(){return rt.$data.$usuario},set:function(e){rt.$data.$usuario=e}},$alerta:{get:function(){return rt.$data.$alerta},set:function(e){rt.$data.$alerta=e}},$navegador:{get:function(){return rt.$data.$navegador},set:function(e){rt.$data.$navegador=e}},$ordenesNuevas:{get:function(){return rt.$data.$ordenesNuevas},set:function(e){rt.$data.$ordenesNuevas=e}},$cafeteriaSeleccionada:{get:function(){return rt.$data.$cafeteriaSeleccionada},set:function(e){rt.$data.$cafeteriaSeleccionada=e}}},methods:{$getIndex:function(e,t,a){return e.map((function(e){return e[t]})).indexOf(a[t])},$showAlerta:function(){var e=this,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"600",a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"gray",n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"mdi-checkbox-blank-circle",r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"",c=arguments.length>4&&void 0!==arguments[4]&&arguments[4],o=arguments.length>5&&void 0!==arguments[5]?arguments[5]:null,i=arguments.length>6&&void 0!==arguments[6]?arguments[6]:null;this.$alerta.model=!1,this.$nextTick((function(){if(e.$alerta.ancho=t,e.$alerta.color=a,e.$alerta.icon=n,e.$alerta.img=i,e.$alerta.mensaje=r,e.$alerta.accion=o,e.$alerta.model=!0,e.$alerta.isSnackbar=c,e.$alerta.isSnackbar){var u=e;setTimeout((function(){u.$alerta.model=!1}),800)}}))},$showAlertMessage:function(){var e=this,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"600",a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"gray",n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"mdi-checkbox-blank-circle",r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"",c=arguments.length>4&&void 0!==arguments[4]&&arguments[4],o=arguments.length>5&&void 0!==arguments[5]?arguments[5]:null,i=arguments.length>6&&void 0!==arguments[6]?arguments[6]:null,u=arguments.length>7&&void 0!==arguments[7]?arguments[7]:3e3;this.$alerta.model=!1,this.$nextTick((function(){if(e.$alerta.ancho=t,e.$alerta.color=a,e.$alerta.icon=n,e.$alerta.img=i,e.$alerta.mensaje=r,e.$alerta.accion=o,e.$alerta.model=!0,e.$alerta.isSnackbar=c,e.$alerta.isSnackbar){var s=e;setTimeout((function(){s.$alerta.model=!1}),u)}}))},$getSaldoDeAlumnoParaCafeteria:function(e,t){var a=this.$getIndex(t,"id",{id:e});return a>=0?t[a].saldoAlumno:0},$alumnoPuedeOrdenar:function(){return be["a"].alumnoPuedeOrdenar(this.$usuario)},$usuarioPuedeGestionarOrdenes:function(){return be["a"].usuarioPuedeGestionarOrdenes(this.$usuario)}}}),n["a"].prototype.$getImgCategoria=function(e){return"https://images-hapit-lunch.s3.amazonaws.com/icons/"+e+".png"};a("4de4"),a("b680"),a("ac1f"),a("5319");var ct=a("9d42");n["a"].filter("moneda",(function(e){var t=parseFloat(e).toFixed(2);return t=t.replace(/\B(?=(\d{3})+(?!\d))/g,","),"$ "+t})),n["a"].filter("fecha",(function(e){return ct["a"].getFechaString(e,"DD MMMM YYYY")})),n["a"].config.productionTip=!1;var ot=Me.getRouter(n["a"]);n["a"].use(Ye.a),new n["a"]({vuetify:ve,router:ot,render:function(e){return e(me)}}).$mount("#app")},"71f5":function(e,t,a){e.exports=a.p+"img/nino.ec15cbf2.jpg"},"96c2":function(e,t,a){e.exports=a.p+"img/tmp_52191a9c-81e4-40ad-8767-13d4ecea97ca.1eb28562.jpg"},"9d42":function(e,t,a){"use strict";var n=a("2a04"),r=a.n(n),c=a("5a0c");a("e072"),c.extend(r.a);var o=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:new Date,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"YYYY-MM-DD";return e?c(e).startOf("day").locale("es").format(t):null},i=function(e){return c(e).startOf("day").toDate()},u=function(e){var t=c(e);return t.day()>0&&t.day()<6&&t.week()===c().week()};t["a"]={getFechaString:o,getFechaToDate:i,enRangoDentroDeSemanaActual:u}},ca81:function(e,t,a){e.exports=a.p+"img/boletinv.41f4fda1.svg"},ea95:function(e,t,a){e.exports=a.p+"img/ordenes.3a863007.svg"},f070:function(e,t,a){e.exports=a.p+"img/tienda.15a48511.svg"}});
//# sourceMappingURL=app.140ed4a7.js.map