(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-54289484"],{"0745":function(t,e,a){t.exports=a.p+"img/estado_vacio.2893b194.svg"},"08dc":function(t,e,a){t.exports=a.p+"img/dinero.207c07ef.png"},"19b8":function(t,e,a){},"34a0":function(t,e,a){"use strict";var o=a("20aa"),n=a("0dcc"),i=function(){var t=o["a"].BASE_URL+"/categorias-productos";return n["a"].get(t)};e["a"]={getCategorias:i}},5246:function(t,e,a){},"613a":function(t,e,a){"use strict";a("19b8")},7931:function(t,e,a){t.exports=a.p+"img/productos_estado_vacio.96899fd0.svg"},"8b83":function(t,e,a){"use strict";var o=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("v-card",{staticStyle:{"border-radius":"40px"},attrs:{color:"#eaf1f6",flat:"",disabled:t.estaBloqueado&&!t.opcionBloquear}},[t.editarProducto?o("v-card-title",{staticClass:"pa-2 text-center",staticStyle:{"background-color":"gray",display:"flex","margin-left":"85%","border-bottom-left-radius":"inherit"}},[o("v-btn",{attrs:{icon:"","x-small":"",dark:""},on:{click:function(e){return t.editarProducto()}}},[o("v-icon",[t._v("mdi-pencil")])],1)],1):t._e(),o("v-row",[o("v-col",{staticClass:"text-center flex-column pr-0",staticStyle:{display:"flex"},attrs:{cols:"4"}},[o("div",{staticClass:"py-2 flex-column text-center alineacion"},[o("v-img",{attrs:{height:"100px",width:"100px",src:t.imgSrc,"lazy-src":a("0745")}})],1)]),o("v-col",{staticClass:"pl-0 ml-0",attrs:{cols:"8"}},[o("v-card-text",{staticClass:"pa-0"},[o("v-row",[o("v-col",{attrs:{cols:"12"}},[o("h3",{staticClass:"black--text",staticStyle:{"font-family":"Nunito"}},[t._v(t._s(t.producto.nombre))]),o("h4",{staticClass:"text--disabled",staticStyle:{"font-family":"Readex Pro, sans-serif"}},[t._v(t._s(t.producto.descripcion))]),o("h4",{staticClass:"text--disabled",staticStyle:{"font-family":"Readex Pro, sans-serif"}},[t._v(t._s(t.producto.contenidoNeto))]),o("h4",{staticClass:"font-weight-bold precios--text",staticStyle:{"font-family":"Readex Pro, sans-serif"}},[t._v(t._s(t._f("moneda")(t.producto.costo)))])])],1)],1)],1)],1),t.mostrarAcciones?[t.estaBloqueado?[t.opcionBloquear?o("v-card-actions",{staticStyle:{display:"flex","justify-content":"center","align-items":"center","background-color":"grey"}},[o("v-btn",{attrs:{text:"",small:"",dark:""},on:{click:function(e){return t.$emit("desbloquear-producto")}}},[t._v("Desbloquear")])],1):o("v-card-actions",{staticClass:"font-weight-bold white--text",staticStyle:{display:"flex","justify-content":"center","align-items":"center","background-color":"grey"}},[t._v(" Producto Bloqueado ")])]:t.opcionBloquear?o("v-card-actions",{staticClass:"primary",staticStyle:{display:"flex","justify-content":"center","align-items":"center"}},[o("v-btn",{attrs:{text:"",small:"",dark:""},on:{click:function(e){return t.$emit("bloquear-producto")}}},[t._v("Bloquear")])],1):t.productoAgregado?o("v-card-actions",{staticClass:"font-weight-bold white--text",staticStyle:{display:"flex","justify-content":"center","align-items":"center","background-color":"#8bc34a"}},[o("v-btn",{attrs:{text:"",small:"",dark:""}},[t._v("Producto Agregado")])],1):[o("v-card-actions",{staticClass:"primary",staticStyle:{display:"flex","justify-content":"center","align-items":"center"}},[t.opcionAgregar?o("v-btn",{attrs:{text:"",small:"",dark:""},on:{click:function(e){return t.$emit("seleccionar")}}},[t._v("Agregar")]):t._e()],1)]]:t._e()],2)},n=[],i=(a("d3b7"),{name:"Producto",props:{opcionAgregar:{type:Boolean,default:!1},opcionBloquear:{type:Boolean,default:!1},producto:{type:Object,required:!0},productosBloqueadosAlumno:{type:Array,default:function(){return[]}},mostrarAcciones:{type:Boolean,default:!1},productoAgregado:{type:Boolean,default:!1},editarProducto:{type:Function}},data:function(){return{verDetalles:!1}},computed:{estaBloqueado:function(){var t=this.producto;return this.productosBloqueadosAlumno.some((function(e){return t.id===e.producto.id}))},imgSrc:function(){return this.$getImgCategoria(this.producto.categoria.id)}}}),c=i,r=(a("613a"),a("2877")),s=a("6544"),l=a.n(s),u=a("8336"),d=a("b0af"),f=a("99d9"),m=a("62ad"),p=a("132d"),h=a("adda"),g=a("0fd9"),v=Object(r["a"])(c,o,n,!1,null,"35d953f6",null);e["a"]=v.exports;l()(v,{VBtn:u["a"],VCard:d["a"],VCardActions:f["a"],VCardText:f["c"],VCardTitle:f["d"],VCol:m["a"],VIcon:p["a"],VImg:h["a"],VRow:g["a"]})},"8e6b":function(t,e,a){"use strict";a("5246")},"8eab":function(t,e,a){"use strict";var o=a("20aa"),n=a("0dcc"),i=function(){var t=o["a"].BASE_URL+"/productos";return n["a"].get(t)},c=function(t){var e=o["a"].BASE_URL+"/productos/id-cliente/"+t;return n["a"].get(e)},r=function(t){var e=o["a"].BASE_URL+"/productos";return n["a"].post(e,t)},s=function(t){var e=o["a"].BASE_URL+"/productos";return n["a"].put(e,t)},l=function(t){var e=o["a"].BASE_URL+"/productos/bloqueos";return n["a"].post(e,t)},u=function(t){var e=o["a"].BASE_URL+"/productos/bloqueos/"+t;return n["a"].remove(e)};e["a"]={getProductos:i,getByCliente:c,create:r,update:s,bloquearProducto:l,desbloquearProducto:u}},"901c":function(t,e,a){"use strict";var o=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",[t.$vuetify.breakpoint.smAndDown?o("v-bottom-navigation",{staticStyle:{"font-family":"Nunito"},attrs:{grow:"",fixed:"",app:"",color:"primary","background-color":"blue lighten-5"}},[t.alumno?o("v-btn",{on:{click:function(e){t.dialogSeleccionarAlumno=!0}}},[o("span",[t._v(" "+t._s(t.alumno.nombre)+" ")]),o("img",{attrs:{src:t.alumno.refImagen,width:"30"}})]):t._e(),o("select-fecha",{attrs:{value:t.fecha},on:{input:function(e){return t.$emit("cambiar-fecha",e)}}}),o("v-btn",[o("span",[t._v(" "+t._s(t._f("moneda")(t.saldo))+" ")]),o("img",{attrs:{src:a("08dc"),width:"30"}})])],1):o("v-card",{staticClass:"text-center",staticStyle:{"font-family":"Nunito"},attrs:{color:"blue lighten-5",flat:"",rounded:""}},[o("v-card-text",[o("v-row",[t.alumno?o("v-col",{attrs:{cols:"4"},on:{click:function(e){t.dialogSeleccionarAlumno=!0}}},[o("item-opcion",{attrs:{texto:t.alumno.nombre,imagen:t.alumno.refImagen,descripcion:"Alumno"}})],1):t._e(),o("v-col",{attrs:{cols:"4"}},[o("select-fecha",{attrs:{value:t.fecha},on:{input:function(e){return t.$emit("cambiar-fecha",e)}}})],1),o("v-col",{attrs:{cols:"4"}},[o("item-opcion",{attrs:{texto:t._f("moneda")(t.saldo),imagen:a("08dc"),descripcion:"Saldo disponible"}})],1)],1)],1)],1),o("dialogo",{attrs:{title:""},model:{value:t.dialogSeleccionarAlumno,callback:function(e){t.dialogSeleccionarAlumno=e},expression:"dialogSeleccionarAlumno"}},[o("v-card",{staticClass:"text-center",staticStyle:{"font-family":"Nunito"},attrs:{flat:""}},[o("v-card-title",{staticStyle:{display:"grid","text-align":"center"}},[o("h4",{staticClass:"text--disabled"},[t._v("Seleccione un alumno")])]),o("v-card-text",t._l(t.$usuario.hijos,(function(e,a){return o("div",{key:a,on:{click:function(a){return t.seleccionarHijo(e)}}},[o("item-opcion",{attrs:{texto:e.alumno.nombreCompleto,imagen:e.alumno.refImagen}})],1)})),0)],1)],1)],1)},n=[],i=(a("a9e3"),a("137f")),c=a("e3fc"),r={name:"PanelOpciones",props:{alumno:{type:Object,required:!1},fecha:{type:String,required:!1},saldo:{type:Number,required:!0}},components:{SelectFecha:c["a"],ItemOpcion:i["a"]},data:function(){return{dialogSeleccionarAlumno:!1}},methods:{seleccionarHijo:function(t){this.$emit("seleccionar-hijo",t),this.dialogSeleccionarAlumno=!1}}},s=r,l=a("2877"),u=a("6544"),d=a.n(u),f=a("b81c"),m=a("8336"),p=a("b0af"),h=a("99d9"),g=a("62ad"),v=a("0fd9"),b=Object(l["a"])(s,o,n,!1,null,"7023b634",null);e["a"]=b.exports;d()(b,{VBottomNavigation:f["a"],VBtn:m["a"],VCard:p["a"],VCardText:h["c"],VCardTitle:h["d"],VCol:g["a"],VRow:v["a"]})},b81c:function(t,e,a){"use strict";var o=a("5530"),n=(a("a9e3"),a("c7cd"),a("dd43"),a("3a66")),i=a("604c"),c=i["a"].extend({name:"button-group",provide:function(){return{btnToggle:this}},computed:{classes:function(){return i["a"].options.computed.classes.call(this)}},methods:{genData:i["a"].options.methods.genData}}),r=a("a9ad"),s=a("24b2"),l=a("a452"),u=a("277e"),d=a("7560"),f=a("f2e7"),m=a("58df"),p=a("d9bd");e["a"]=Object(m["a"])(Object(n["a"])("bottom",["height","inputValue"]),r["a"],s["a"],Object(f["b"])("inputValue"),l["a"],u["a"],d["a"]).extend({name:"v-bottom-navigation",props:{activeClass:{type:String,default:"v-btn--active"},backgroundColor:String,grow:Boolean,height:{type:[Number,String],default:56},hideOnScroll:Boolean,horizontal:Boolean,inputValue:{type:Boolean,default:!0},mandatory:Boolean,shift:Boolean,tag:{type:String,default:"div"}},data:function(){return{isActive:this.inputValue}},computed:{canScroll:function(){return u["a"].options.computed.canScroll.call(this)&&(this.hideOnScroll||!this.inputValue)},classes:function(){return{"v-bottom-navigation--absolute":this.absolute,"v-bottom-navigation--grow":this.grow,"v-bottom-navigation--fixed":!this.absolute&&(this.app||this.fixed),"v-bottom-navigation--horizontal":this.horizontal,"v-bottom-navigation--shift":this.shift}},styles:function(){return Object(o["a"])(Object(o["a"])({},this.measurableStyles),{},{transform:this.isActive?"none":"translateY(100%)"})}},created:function(){this.$attrs.hasOwnProperty("active")&&Object(p["a"])("active.sync","value or v-model",this)},methods:{thresholdMet:function(){this.isActive=!this.isScrollingUp,this.$emit("update:input-value",this.isActive)},updateApplication:function(){return this.$el?this.$el.clientHeight:0},updateValue:function(t){this.$emit("change",t)}},render:function(t){var e=this.setBackgroundColor(this.backgroundColor,{staticClass:"v-bottom-navigation",class:this.classes,style:this.styles,props:{activeClass:this.activeClass,mandatory:Boolean(this.mandatory||void 0!==this.value),tag:this.tag,value:this.internalValue},on:{change:this.updateValue}});return this.canScroll&&(e.directives=e.directives||[],e.directives.push({arg:this.scrollTarget,name:"scroll",value:this.onScroll})),t(c,this.setTextColor(this.color,e),this.$slots.default)}})},dd43:function(t,e,a){},e15b:function(t,e,a){"use strict";a.r(e);var o=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("wrapper",{attrs:{titulo:"Tienda"}},[t.$usuario.hijos&&t.$usuario.hijos.length>0?o("v-row",[o("v-col",{staticClass:"text-center",attrs:{cols:"12"}},[o("panel-opciones",{attrs:{alumno:t.hijoSeleccionado.alumno,fecha:t.fecha,saldo:t.saldoCafeteriaAlumnoSeleccionado},on:{"cambiar-fecha":function(e){t.fecha=e},"seleccionar-hijo":t.seleccionarHijo}})],1),o("v-col",{staticClass:"text-center",attrs:{cols:"12"}},[t.hijoSeleccionado?o("h2",{staticClass:"text--disabled"},[t._v(t._s(t.hijoSeleccionado.alumno.cafeteria.nombre))]):t._e()]),o("v-col",{attrs:{cols:"12"}},[o("carrusel",t._l(t.categorias,(function(e,a){return o("carrusel-item",{key:a,attrs:{size:"41%"}},[o("categoria",{attrs:{categoria:e,"esta-seleccionada":t.categoriaSeleccionada&&e.id===t.categoriaSeleccionada},on:{seleccionarCategoria:function(a){return t.seleccionarCategoria(e)}}})],1)})),1)],1),t.productosFiltrados&&t.productosFiltrados.length>0?t._l(t.productosFiltrados,(function(e,a){return o("v-col",{key:a,attrs:{cols:"12",md:"6"}},[o("producto",{attrs:{producto:e,"opcion-agregar":"","mostrar-acciones":"","productos-bloqueados-alumno":t.hijoSeleccionado.alumno.productosBloqueados,"producto-agregado":t.estaProductoEnCarrito(e.id)},on:{seleccionar:function(a){return t.seleccionarProducto(t.hijoSeleccionado.alumno,t.fecha,e)}}})],1)})):o("v-row",{staticStyle:{display:"flex","justify-content":"center","align-items":"center"},attrs:{align:"center",justify:"center"}},[o("v-col",{staticClass:"text-center",staticStyle:{display:"flex","justify-content":"center","align-items":"center"},attrs:{cols:"12"}},[o("img",{style:t.$vuetify.breakpoint.smAndDown?"width:100%":"width:50%",attrs:{src:a("7931")}})]),o("v-col",{staticClass:"text-center",attrs:{cols:"12"}},[o("h2",{staticClass:"text--disabled",staticStyle:{"font-family":"Nunito"}},[t._v("No hay productos disponibles")])])],1)],2):o("v-row",{staticStyle:{display:"flex","justify-content":"center","align-items":"center"},attrs:{align:"center",justify:"center"}},[o("v-col",{staticClass:"text-center",staticStyle:{display:"flex","justify-content":"center","align-items":"center"},attrs:{cols:"12"}},[o("img",{style:t.$vuetify.breakpoint.smAndDown?"width:100%":"width:50%",attrs:{src:a("7931")}})]),o("v-col",{staticClass:"text-center",attrs:{cols:"12"}},[o("h2",{staticClass:"text--disabled",staticStyle:{"font-family":"Nunito"}},[t._v("No tiene alumnos agregados")])]),o("v-col",{staticClass:"text-center",attrs:{cols:"12",md:"6"}},[o("v-btn",{attrs:{rounded:"",to:{name:"Alumnos"}}},[o("span",{staticClass:"primary--text",staticStyle:{"font-family":"Nunito"}},[t._v("Ir a alumnos")])])],1)],1),o("v-snackbar",{attrs:{color:"success",bottom:"",app:""},model:{value:t.mensajeProductoAgregado,callback:function(e){t.mensajeProductoAgregado=e},expression:"mensajeProductoAgregado"}},[t._v("Producto agregado")])],1)},n=[],i=a("b85c"),c=a("1da1"),r=(a("96cf"),a("d3b7"),a("4de4"),a("c740"),a("e9c4"),a("8b83")),s=a("4bdc"),l=a("cc46"),u=a("34a0"),d=a("8eab"),f=a("e822"),m=a("9d42"),p=a("f28e"),h=a("20aa"),g=a("e637"),v=a("6f35"),b=a("901c"),y={name:"DashboardTienda",components:{PanelOpciones:b["a"],Categoria:f["a"],CarruselItem:l["a"],Carrusel:s["a"],Producto:r["a"]},data:function(){return{productos:[],categorias:[],alumnos:[],hijoSeleccionado:{},categoriaSeleccionada:null,productosFiltrados:[],fecha:null,mensajeProductoAgregado:!1}},created:function(){var t=this;return Object(c["a"])(regeneratorRuntime.mark((function e(){var a,o,n,c;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return t.hijoSeleccionado=t.$usuario.hijos.length?t.$usuario.hijos[0]:{},t.$loader=!0,e.prev=2,e.next=5,d["a"].getProductos();case 5:t.productos=e.sent,e.next=11;break;case 8:e.prev=8,e.t0=e["catch"](2),t.productos=[];case 11:return e.prev=11,e.next=14,u["a"].getCategorias();case 14:t.categorias=e.sent,e.next=20;break;case 17:e.prev=17,e.t1=e["catch"](11),t.categorias=[];case 20:t.categoriaSeleccionada||(t.productosFiltrados=t.productos),t.fecha=m["a"].getFechaString(),t.$loader=!1,a=t,o=Object(i["a"])(t.$usuario.hijos);try{for(c=function(){var e=n.value;a.$set(e,"cargandoSaldo",!0),g["a"].getSaldoPorCafeteria(t.$usuario.idCliente,e.alumno.id).then((function(t){a.$set(e.alumno.cafeteria,"saldoAlumno",a.$getSaldoDeAlumnoParaCafeteria(e.alumno.cafeteria.id,t))})).catch((function(){})).finally((function(){return a.$set(e,"cargandoSaldo",!1)}))},o.s();!(n=o.n()).done;)c()}catch(r){o.e(r)}finally{o.f()}case 26:case"end":return e.stop()}}),e,null,[[2,8],[11,17]])})))()},computed:{saldoCafeteriaAlumnoSeleccionado:function(){return this.hijoSeleccionado.alumno.cafeteria.saldoAlumno-v["a"].getCostoTotalOrdenes(this.hijoSeleccionado.alumno,this.$ordenesNuevas)}},methods:{seleccionarHijo:function(t){this.hijoSeleccionado=t},seleccionarCategoria:function(t){var e=this;e.categoriaSeleccionada=t.id,e.categoriaSeleccionada?e.productosFiltrados=e.productos.filter((function(t){var a=t.categoria.id;return a==e.categoriaSeleccionada})):e.productosFiltrados=e.productos},seleccionarProducto:function(t,e,a){v["a"].esSaldoSuficiente(this.$ordenesNuevas,t,a,1)?t.productosBloqueados.some((function(t){return a.id===t.producto.id}))?this.$showAlerta("600","warning","mdi-alert-circle","El producto "+a.nombre+" no se ha agregado a la orden porque se encuentra bloqueado para "+t.nombre,!1):S(this,t,e,a):this.$showAlerta("600","warning","mdi-alert-circle","El alumno no cuenta con saldo suficiente",!1)},estaProductoEnCarrito:function(t){var e=this;return this.$ordenesNuevas.some((function(a){return e.fecha===a.fecha&&e.hijoSeleccionado.alumno.id===a.alumno.id&&a.productos.some((function(e){return e.producto&&t===e.producto.id}))}))}}};function S(t,e,a,o){var n=t.$ordenesNuevas.findIndex((function(t){return t.idAlumno===e.id&&t.fecha===a}));n<0&&(n=t.$ordenesNuevas.push(new p["a"]({alumno:e,fecha:a,cafeteria:e.cafeteria,clienteInternet:t.$usuario}))-1);var i=t.$ordenesNuevas[n];i.productos.push({id:0,cantidad:1,costo:o.costo,producto:o}),t.$set(i,"costo",i.productos.reduce((function(t,e){return t+e.costo}),0)),t.mensajeProductoAgregado=!0,localStorage.setItem(h["a"].CARRITO_KEY,JSON.stringify(t.$ordenesNuevas))}var x=y,C=a("2877"),_=a("6544"),j=a.n(_),A=a("8336"),w=a("62ad"),$=a("0fd9"),k=a("2db4"),B=Object(C["a"])(x,o,n,!1,null,"6b0bd852",null);e["default"]=B.exports;j()(B,{VBtn:A["a"],VCol:w["a"],VRow:$["a"],VSnackbar:k["a"]})},e822:function(t,e,a){"use strict";var o=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("v-card",{staticClass:"text-center mx-0",staticStyle:{"border-radius":"10px"},attrs:{color:t.estaSeleccionada?"#2cafca":"",dark:t.estaSeleccionada,elevation:t.estaSeleccionada?"0":"",to:t.to?{name:t.to}:null},on:{click:function(e){return t.$emit("seleccionarCategoria")}}},[o("div",{staticClass:"py-2 flex-column text-center alineacion"},[o("v-img",{attrs:{height:"100px",width:"100px",src:t.imgSrc,"lazy-src":a("0745")}})],1),o("v-card-text",[o("v-row",[o("v-col",{attrs:{cols:"12"}},[o("h2",[t._v(t._s(t.categoria.titulo))])])],1)],1)],1)},n=[],i={name:"Categoria",props:{categoria:{type:Object,required:!0},estaSeleccionada:{type:Boolean,required:!1},to:{type:String,default:null}},data:function(){return{imgSrc:this.$getImgCategoria(this.categoria.id)}}},c=i,r=(a("8e6b"),a("2877")),s=a("6544"),l=a.n(s),u=a("b0af"),d=a("99d9"),f=a("62ad"),m=a("adda"),p=a("0fd9"),h=Object(r["a"])(c,o,n,!1,null,"afc342f0",null);e["a"]=h.exports;l()(h,{VCard:u["a"],VCardText:d["c"],VCol:f["a"],VImg:m["a"],VRow:p["a"]})},f28e:function(t,e,a){"use strict";var o=a("d4ec"),n=function t(e){var a=e.id,n=void 0===a?0:a,i=e.alumno,c=e.fecha,r=e.ciclo,s=void 0===r?null:r,l=e.productos,u=void 0===l?[]:l,d=e.cafeteria,f=e.clienteInternet,m=e.menu;Object(o["a"])(this,t),this.id=n,this.alumno=i||null,this.idAlumno=i?i.id:null,this.fecha=c,this.ciclo=s,this.costo=0,this.estaEntregada=!1,this.productos=u,this.cafeteria=d||null,this.idCafeteria=d?d.id:null,this.clienteInternet=f||null,this.idClienteInternet=f?f.id:null,this.menu=m||null,this.idMenu=m?m.id:null};e["a"]=n}}]);
//# sourceMappingURL=chunk-54289484.e1acc3c1.js.map