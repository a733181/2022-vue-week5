(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-0b847208"],{"408a":function(t,e,r){var c=r("e330");t.exports=c(1..valueOf)},5899:function(t,e){t.exports="\t\n\v\f\r                　\u2028\u2029\ufeff"},"58a8":function(t,e,r){var c=r("e330"),n=r("1d80"),a=r("577e"),i=r("5899"),o=c("".replace),u="["+i+"]",l=RegExp("^"+u+u+"*"),s=RegExp(u+u+"*$"),d=function(t){return function(e){var r=a(n(e));return 1&t&&(r=o(r,l,"")),2&t&&(r=o(r,s,"")),r}};t.exports={start:d(1),end:d(2),trim:d(3)}},"5f47":function(t,e,r){"use strict";r.r(e);r("a4d3"),r("e01a");var c=r("7a23"),n=function(t){return Object(c["B"])("data-v-f7608eb4"),t=t(),Object(c["z"])(),t},a={class:"grid lg:grid-cols-2 gap-7"},i={class:"w-full"},o=["src","alt"],u={class:"flex"},l=["src"],s=["onClick"],d=["src"],b={class:"flex flex-col mt-6"},p={class:"flex items-end mb-6"},f={class:"mr-2 text-4xl font-bold"},j={class:"text-xl"},O={class:"flex items-center text-[#40916C] mb-8"},g={class:"mr-3 text-3xl"},m={class:"line-through"},v={class:"p-3 bg-gray-100"},h={class:"flex items-center my-6 lg:mt-auto lg:mb-[72px]"},y=["value"],x=Object(c["j"])("加入購物車"),w=n((function(){return Object(c["i"])("div",{class:"py-2 mt-3 border-t-2"},[Object(c["i"])("h2",null,"注意事項"),Object(c["i"])("ul",{class:"pl-5 list-disc"},[Object(c["i"])("li",null," 生鮮食品不適用於消費者保護法第19條，並不享用7天鑑賞期，若您對於訂購之商品不甚滿意且希望辦理退貨時，請於到貨後4小時內拍照存證，並將問題反映客服人員 "),Object(c["i"])("li",null,"出貨時間：付款後隔天將有專車送達")])],-1)}));function I(t,e,r,n,I,k){var C=Object(c["H"])("base-btn"),N=Object(c["H"])("base-loading"),S=Object(c["H"])("base-dialog"),E=Object(c["H"])("add-cart-product");return Object(c["y"])(),Object(c["h"])(c["a"],null,[Object(c["i"])("div",a,[Object(c["i"])("div",i,[Object(c["i"])("img",{src:I.cacheImage,alt:I.product.title,class:"object-cover mb-2 rounded-lg h-[400px] w-full"},null,8,o),Object(c["i"])("ul",u,[Object(c["i"])("li",{class:Object(c["s"])(["img",k.activeImg(I.product.imageUrl)]),onClick:e[0]||(e[0]=function(t){return I.cacheImage=I.product.imageUrl})},[Object(c["i"])("img",{src:I.product.imageUrl,alt:"product.title",class:"object-cover w-full h-full"},null,8,l)],2),(Object(c["y"])(!0),Object(c["h"])(c["a"],null,Object(c["F"])(I.product.imagesUrl,(function(t){return Object(c["y"])(),Object(c["h"])("li",{key:t,onClick:function(e){return I.cacheImage=t}},[t?(Object(c["y"])(),Object(c["h"])("div",{key:0,class:Object(c["s"])(["img",k.activeImg(t)])},[Object(c["i"])("img",{src:t,alt:"product.title",class:"object-cover w-full h-full"},null,8,d)],2)):Object(c["g"])("",!0)],8,s)})),128))])]),Object(c["i"])("section",b,[Object(c["i"])("div",p,[Object(c["i"])("h1",f,Object(c["K"])(I.product.title),1),Object(c["i"])("p",j,Object(c["K"])(I.product.description),1)]),Object(c["i"])("div",O,[Object(c["i"])("p",g,"NT$ "+Object(c["K"])(I.product.price),1),Object(c["i"])("p",m,"NT$ "+Object(c["K"])(I.product.origin_price),1)]),Object(c["i"])("p",v,Object(c["K"])(I.product.content),1),Object(c["i"])("div",h,[Object(c["T"])(Object(c["i"])("select",{name:"",id:"","onUpdate:modelValue":e[1]||(e[1]=function(t){return I.productQuantity=t}),class:"px-2 py-[6.5px] mr-3 border-2 rounded-lg lg:px-5"},[(Object(c["y"])(),Object(c["h"])(c["a"],null,Object(c["F"])(12,(function(t){return Object(c["i"])("option",{value:t,key:t},Object(c["K"])(t),9,y)})),64))],512),[[c["N"],I.productQuantity]]),Object(c["k"])(C,{class:"w-full",onClick:k.addCart},{default:Object(c["S"])((function(){return[x]})),_:1},8,["onClick"])])])]),w,Object(c["k"])(N,{show:I.isLoading},null,8,["show"]),Object(c["k"])(S,{show:!!I.error,title:"Error",onClose:k.closeError},{default:Object(c["S"])((function(){return[Object(c["j"])(Object(c["K"])(I.error),1)]})),_:1},8,["show","onClose"]),Object(c["k"])(S,{show:!!I.addCartMessage,title:"已加入購物車",onClose:k.closeAddCartMessage},{default:Object(c["S"])((function(){return[Object(c["k"])(E,{product:I.product,quantity:I.productQuantity},null,8,["product","quantity"])]})),_:1},8,["show","onClose"])],64)}var k=r("1da1"),C=(r("96cf"),r("b56b")),N={components:{AddCartProduct:C["a"]},props:["id"],data:function(){return{isLoading:!1,error:"",product:{},cacheImage:"",productQuantity:1,addCartMessage:""}},computed:{},methods:{getProductDetail:function(){var t=this;return Object(k["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,t.isLoading=!0,e.next=4,t.$store.dispatch("product/getProductDetails",t.id);case 4:return e.next=6,t.$store.getters["product/productData"];case 6:t.product=e.sent,t.cacheImage=t.product.imageUrl,e.next=13;break;case 10:e.prev=10,e.t0=e["catch"](0),t.error=e.t0;case 13:return e.prev=13,t.isLoading=!1,e.finish(13);case 16:case"end":return e.stop()}}),e,null,[[0,10,13,16]])})))()},closeError:function(){this.error=""},activeImg:function(t){return this.cacheImage===t?"activeImg":""},addCart:function(){var t=this;return Object(k["a"])(regeneratorRuntime.mark((function e(){var r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,t.isLoading=!0,r={product_id:t.id,qty:t.productQuantity},e.next=5,t.$store.dispatch("cart/addCart",r);case 5:t.addCartMessage=t.$store.getters["cart/addCart"],e.next=11;break;case 8:e.prev=8,e.t0=e["catch"](0),t.error=e.t0;case 11:return e.prev=11,t.isLoading=!1,e.finish(11);case 14:case"end":return e.stop()}}),e,null,[[0,8,11,14]])})))()},closeAddCartMessage:function(){this.addCartMessage=""}},mounted:function(){this.getProductDetail()}},S=(r("e005"),r("6b0d")),E=r.n(S);const _=E()(N,[["render",I],["__scopeId","data-v-f7608eb4"]]);e["default"]=_},a9e3:function(t,e,r){"use strict";var c=r("83ab"),n=r("da84"),a=r("e330"),i=r("94ca"),o=r("6eeb"),u=r("1a2d"),l=r("7156"),s=r("3a9b"),d=r("d9b5"),b=r("c04e"),p=r("d039"),f=r("241c").f,j=r("06cf").f,O=r("9bf2").f,g=r("408a"),m=r("58a8").trim,v="Number",h=n[v],y=h.prototype,x=n.TypeError,w=a("".slice),I=a("".charCodeAt),k=function(t){var e=b(t,"number");return"bigint"==typeof e?e:C(e)},C=function(t){var e,r,c,n,a,i,o,u,l=b(t,"number");if(d(l))throw x("Cannot convert a Symbol value to a number");if("string"==typeof l&&l.length>2)if(l=m(l),e=I(l,0),43===e||45===e){if(r=I(l,2),88===r||120===r)return NaN}else if(48===e){switch(I(l,1)){case 66:case 98:c=2,n=49;break;case 79:case 111:c=8,n=55;break;default:return+l}for(a=w(l,2),i=a.length,o=0;o<i;o++)if(u=I(a,o),u<48||u>n)return NaN;return parseInt(a,c)}return+l};if(i(v,!h(" 0o1")||!h("0b1")||h("+0x1"))){for(var N,S=function(t){var e=arguments.length<1?0:h(k(t)),r=this;return s(y,r)&&p((function(){g(r)}))?l(Object(e),r,S):e},E=c?f(h):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,isFinite,isInteger,isNaN,isSafeInteger,parseFloat,parseInt,fromString,range".split(","),_=0;E.length>_;_++)u(h,N=E[_])&&!u(S,N)&&O(S,N,j(h,N));S.prototype=y,y.constructor=S,o(n,v,S)}},b56b:function(t,e,r){"use strict";var c=r("7a23"),n=Object(c["i"])("tr",null,[Object(c["i"])("th"),Object(c["i"])("th",{class:"lg:px-3 lg:py-1"},"數量"),Object(c["i"])("th",{class:"px-3 py-1"},"價格")],-1),a={class:"flex flex-col items-center lg:flex-row"},i=["src","alt"],o=Object(c["j"])("查看購物車");function u(t,e,r,u,l,s){var d=Object(c["H"])("base-btn"),b=Object(c["H"])("router-link");return Object(c["y"])(),Object(c["h"])(c["a"],null,[Object(c["i"])("table",{class:"mb-5 text-center",onClick:e[0]||(e[0]=function(t){return s.toProductDetail(r.product.id)})},[n,Object(c["i"])("tr",null,[Object(c["i"])("td",a,[Object(c["i"])("img",{src:r.product.imageUrl,alt:r.product.title,class:"mr-3 w-[100px] mb-2 lg:mb-0"},null,8,i),Object(c["i"])("p",null,Object(c["K"])(r.product.title),1)]),Object(c["i"])("td",null,Object(c["K"])(r.quantity),1),Object(c["i"])("td",null,Object(c["K"])(r.product.price),1)])]),Object(c["k"])(b,{to:"/cart"},{default:Object(c["S"])((function(){return[Object(c["k"])(d,{class:"w-full"},{default:Object(c["S"])((function(){return[o]})),_:1})]})),_:1})],64)}r("a9e3");var l={props:{product:{type:Object,relative:!0},quantity:{type:[String,Number],relative:!0}},methods:{toProductDetail:function(t){var e="/product/".concat(t);this.$router.push(e)}}},s=r("6b0d"),d=r.n(s);const b=d()(l,[["render",u]]);e["a"]=b},e005:function(t,e,r){"use strict";r("e69c")},e01a:function(t,e,r){"use strict";var c=r("23e7"),n=r("83ab"),a=r("da84"),i=r("e330"),o=r("1a2d"),u=r("1626"),l=r("3a9b"),s=r("577e"),d=r("9bf2").f,b=r("e893"),p=a.Symbol,f=p&&p.prototype;if(n&&u(p)&&(!("description"in f)||void 0!==p().description)){var j={},O=function(){var t=arguments.length<1||void 0===arguments[0]?void 0:s(arguments[0]),e=l(f,this)?new p(t):void 0===t?p():p(t);return""===t&&(j[e]=!0),e};b(O,p),O.prototype=f,f.constructor=O;var g="Symbol(test)"==String(p("test")),m=i(f.toString),v=i(f.valueOf),h=/^Symbol\((.*)\)[^)]+$/,y=i("".replace),x=i("".slice);d(f,"description",{configurable:!0,get:function(){var t=v(this),e=m(t);if(o(j,t))return"";var r=g?x(e,7,-1):y(e,h,"$1");return""===r?void 0:r}}),c({global:!0,forced:!0},{Symbol:O})}},e69c:function(t,e,r){}}]);
//# sourceMappingURL=chunk-0b847208.3ac6e013.js.map