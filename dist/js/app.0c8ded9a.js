(function(e){function t(t){for(var o,a,s=t[0],r=t[1],l=t[2],d=0,p=[];d<s.length;d++)a=s[d],Object.prototype.hasOwnProperty.call(i,a)&&i[a]&&p.push(i[a][0]),i[a]=0;for(o in r)Object.prototype.hasOwnProperty.call(r,o)&&(e[o]=r[o]);u&&u(t);while(p.length)p.shift()();return c.push.apply(c,l||[]),n()}function n(){for(var e,t=0;t<c.length;t++){for(var n=c[t],o=!0,s=1;s<n.length;s++){var r=n[s];0!==i[r]&&(o=!1)}o&&(c.splice(t--,1),e=a(a.s=n[0]))}return e}var o={},i={app:0},c=[];function a(t){if(o[t])return o[t].exports;var n=o[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,a),n.l=!0,n.exports}a.m=e,a.c=o,a.d=function(e,t,n){a.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},a.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},a.t=function(e,t){if(1&t&&(e=a(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(a.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)a.d(n,o,function(t){return e[t]}.bind(null,o));return n},a.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return a.d(t,"a",t),t},a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},a.p="";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],r=s.push.bind(s);s.push=t,s=s.slice();for(var l=0;l<s.length;l++)t(s[l]);var u=r;c.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"31d7":function(e,t,n){"use strict";n("e852")},"4fd1":function(e,t,n){},"516e":function(e,t,n){"use strict";n("4fd1")},5225:function(e,t,n){"use strict";n("6de6")},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var o=n("7a23"),i={key:0,class:"cover",id:"cover"},c=["src"],a=["src"],s={class:"video",id:"video",loop:""},r=["src"];function l(e,t,n,l,u,d){var p=this,g=Object(o["o"])("Clock"),b=Object(o["o"])("UpdateAlert"),f=Object(o["o"])("VersionDialog"),v=Object(o["o"])("OptionDialog");return Object(o["k"])(),Object(o["f"])(o["a"],null,[Object(o["i"])(o["b"],{name:"cover"},{default:Object(o["r"])((function(){return[e.isCover?(Object(o["k"])(),Object(o["f"])("div",i)):Object(o["e"])("",!0)]})),_:1}),Object(o["g"])("div",{class:"button",id:"night_mode",onClick:t[0]||(t[0]=function(){return e.changeNightMode&&e.changeNightMode.apply(e,arguments)})},[Object(o["g"])("img",{src:e.nightModeImage},null,8,c)]),Object(o["g"])("div",{class:"button",id:"option",onClick:t[1]||(t[1]=function(){return e.openOptionDialog&&e.openOptionDialog.apply(e,arguments)})},[Object(o["g"])("img",{src:e.optionImage},null,8,a)]),Object(o["g"])("video",s,[Object(o["g"])("source",{src:e.video,type:"video/mp4"},null,8,r)]),Object(o["g"])("div",{class:"main",style:Object(o["j"])(e.style)},[Object(o["i"])(g,{onOpenVersionDialog:e.openVersionDialog,onOpenUpdateAlert:e.openUpdateAlert},null,8,["onOpenVersionDialog","onOpenUpdateAlert"])],4),Object(o["i"])(o["b"],{name:"dialog"},{default:Object(o["r"])((function(){return[e.isUpdateAlert?(Object(o["k"])(),Object(o["d"])(b,{key:0,onClick:e.reload},null,8,["onClick"])):Object(o["e"])("",!0)]})),_:1}),Object(o["i"])(o["b"],{name:"cover"},{default:Object(o["r"])((function(){return[e.isDialogCover?(Object(o["k"])(),Object(o["f"])("div",{key:0,class:"cover",id:"dialog_cover",onClick:t[2]||(t[2]=function(){return e.closeDialog&&e.closeDialog.apply(e,arguments)})})):Object(o["e"])("",!0)]})),_:1}),Object(o["i"])(o["b"],{name:"dialog"},{default:Object(o["r"])((function(){return[e.isVersionDialog?(Object(o["k"])(),Object(o["d"])(f,{key:0,onCloseDialog:e.closeDialog},null,8,["onCloseDialog"])):Object(o["e"])("",!0)]})),_:1}),Object(o["i"])(o["b"],{name:"dialog"},{default:Object(o["r"])((function(){return[e.isOptionDialog?(Object(o["k"])(),Object(o["d"])(v,{key:0,currentOption:p.option,onCloseDialog:e.closeDialog,onChangeOption:e.changeOption},null,8,["currentOption","onCloseDialog","onChangeOption"])):Object(o["e"])("",!0)]})),_:1})],64)}n("99af");var u=function(e){return Object(o["m"])("data-v-62b0adee"),e=e(),Object(o["l"])(),e},d=u((function(){return Object(o["g"])("div",{class:"pronama-clock-cover"},null,-1)}));function p(e,t,n,i,c,a){return Object(o["k"])(),Object(o["f"])(o["a"],null,[d,Object(o["g"])("div",{class:"main-date",onClick:t[0]||(t[0]=function(){return a.changeScreenMode&&a.changeScreenMode.apply(a,arguments)})},Object(o["p"])(c.date),1),Object(o["g"])("div",{class:"main-time",onClick:t[1]||(t[1]=function(){return a.openVersionDialog&&a.openVersionDialog.apply(a,arguments)})},Object(o["p"])(c.time),1)],64)}n("ac1f"),n("1276"),n("d3b7"),n("25f0");var g={name:"App",components:{},emits:["openVersionDialog","openUpdateAlert"],data:function(){return{date:"",time:"",second:"",screenMode:0,frame:0,updateFlag:!1}},mounted:function(){this.updateClock()},methods:{updateClock:function(){var e,t,o,i,c,a,s,r,l=["日","月","火","水","木","金","土"],u=this,d=this.frame;(function p(){e=new Date,t=e.getFullYear(),o=e.getMonth()+1,i=e.getDate(),c=l[e.getDay()],a=u.clockProcess(e.getHours()),s=u.clockProcess(e.getMinutes()),r=u.clockProcess(e.getSeconds()),u.date=t+"年"+o+"月"+i+"日 "+c+"曜日",u.time=a+":"+s,u.second=r,360==d&&0==u.updateFlag&&u.axios.get("./config.json?timestamp=".concat((new Date).getTime())).then((function(e){var t=u.convertVersion(n("9224").version),o=u.convertVersion(e.data.version);o>t&&(u.$emit("openUpdateAlert"),u.updateFlag=!0)})).catch((function(e){console.log(e)})),d>=18e3&&(d=0),d++,requestAnimationFrame(p)})()},convertVersion:function(e){var t=e.split("."),n=100*t[0]+10*t[1]+t[2];return n},clockProcess:function(e){return e=e<10?"0"+e:e.toString(),e},changeScreenMode:function(){this.screenMode++,2==this.screenMode&&(this.screenMode=0),1==this.screenMode&&document.body.requestFullscreen(),0==this.screenMode&&document.exitFullscreen()},openVersionDialog:function(){this.$emit("openVersionDialog")}}},b=(n("5225"),n("6b0d")),f=n.n(b);const v=f()(g,[["render",p],["__scopeId","data-v-62b0adee"]]);var h=v,O=function(e){return Object(o["m"])("data-v-d8b0807a"),e=e(),Object(o["l"])(),e},m={class:"alert"},j=O((function(){return Object(o["g"])("div",{class:"icon"},[Object(o["g"])("img",{src:"assets/update.svg?version=20220101"})],-1)})),D=O((function(){return Object(o["g"])("div",{class:"heading"}," 新しいプロ生時計を利用可能 ",-1)})),k=O((function(){return Object(o["g"])("div",{class:"text"}," ここをタップして再読み込み ",-1)})),y=[j,D,k];function C(e,t,n,i,c,a){return Object(o["k"])(),Object(o["f"])("div",m,y)}var w={name:"App",components:{},data:function(){return{}}};n("516e");const M=f()(w,[["render",C],["__scopeId","data-v-d8b0807a"]]);var _=M,V=function(e){return Object(o["m"])("data-v-2734a122"),e=e(),Object(o["l"])(),e},x={class:"dialog"},A=V((function(){return Object(o["g"])("div",{class:"header"},"プロ生時計 について",-1)})),S={class:"contents"},I={class:"logo"},P=["src"],T={class:"version"},U=V((function(){return Object(o["g"])("br",null,null,-1)})),F=V((function(){return Object(o["g"])("div",{class:"license"},[Object(o["g"])("p",null,[Object(o["h"])(" Copyright (c) 2021,2022 Sora Arakawa"),Object(o["g"])("br"),Object(o["h"])(" Licensed under the MIT License ")]),Object(o["g"])("p",null," Copyright (c) 2022 Pronama LLC "),Object(o["g"])("p",null,[Object(o["g"])("a",{href:"https://arkw.net/products/web/pronama_clock/",target:"blank"},"https://arkw.net/products/web/pronama_clock/")])],-1)}));function N(e,t,n,i,c,a){return Object(o["k"])(),Object(o["f"])("div",x,[A,Object(o["g"])("div",S,[Object(o["g"])("div",I,[Object(o["g"])("img",{src:c.logoImage},null,8,P)]),Object(o["g"])("div",T,[Object(o["h"])(" Version "+Object(o["p"])(c.version),1),U,Object(o["g"])("small",null,"Based on Ahoxa "+Object(o["p"])(c.ahoxaVersion),1)]),F]),Object(o["g"])("div",{class:"button",onClick:t[0]||(t[0]=function(e){return a.closeDialog()})},"閉じる")])}var J={name:"App",components:{},emits:["closeDialog"],data:function(){return{logoImage:"assets/logo.svg?version=20220101",version:n("9224").version,ahoxaVersion:"2.0.1"}},methods:{closeDialog:function(){this.$emit("closeDialog")}}};n("9790");const $=f()(J,[["render",N],["__scopeId","data-v-2734a122"]]);var L=$,q=(n("b0c0"),function(e){return Object(o["m"])("data-v-2de5b4da"),e=e(),Object(o["l"])(),e}),B={class:"dialog"},E=q((function(){return Object(o["g"])("div",{class:"header"},"設定",-1)})),H={class:"contents"},Y={class:"option"},z={class:"columns"},G=q((function(){return Object(o["g"])("div",{class:"left"}," テーマ ",-1)})),K={class:"right"},Q=["value"];function R(e,t,n,i,c,a){return Object(o["k"])(),Object(o["f"])("div",B,[E,Object(o["g"])("div",H,[Object(o["g"])("div",Y,[Object(o["g"])("div",z,[G,Object(o["g"])("div",K,[Object(o["s"])(Object(o["g"])("select",{"onUpdate:modelValue":t[0]||(t[0]=function(e){return c.option.theme=e}),onChange:t[1]||(t[1]=function(){return a.changeOption&&a.changeOption.apply(a,arguments)})},[(Object(o["k"])(!0),Object(o["f"])(o["a"],null,Object(o["n"])(c.optionThemes,(function(e){return Object(o["k"])(),Object(o["f"])("option",{key:e.name,value:e.name},Object(o["p"])(e.name),9,Q)})),128))],544),[[o["q"],c.option.theme]]),Object(o["g"])("div",{class:"preview",style:Object(o["j"])(c.preview)},null,4)])])])]),Object(o["g"])("div",{class:"button",onClick:t[2]||(t[2]=function(e){return a.closeDialog()})},"閉じる")])}var W=void 0,X={name:"App",components:{},props:{currentOption:{type:Object,default:function(){return W.option}}},emits:["closeDialog","changeOption"],data:function(){return{option:{theme:"default"},optionThemes:[],preview:""}},mounted:function(){var e=this;this.option=this.currentOption,this.axios.get("./config.json?timestamp=".concat((new Date).getTime())).then((function(t){for(var n=[],o=0;o<t.data.themes.length;o++)n.push({name:t.data.themes[o]});e.optionThemes=n,e.loadPreview()})).catch((function(e){console.log(e)}))},methods:{closeDialog:function(){this.$emit("closeDialog")},changeOption:function(){this.$emit("changeOption",this.option),this.loadPreview()},loadPreview:function(){var e=this;this.axios.get("./assets/themes/".concat(this.option.theme,"/theme.json?timestamp=").concat((new Date).getTime())).then((function(t){e.preview="background-image: url('assets/themes/"+e.option.theme+"/"+t.data.image+"')"})).catch((function(e){console.log(e)}))}}};n("31d7");const Z=f()(X,[["render",R],["__scopeId","data-v-2de5b4da"]]);var ee=Z,te={name:"App",components:{Clock:h,UpdateAlert:_,VersionDialog:L,OptionDialog:ee},data:function(){return{video:"assets/video.mp4",style:"",nightModeImage:"assets/night_mode.svg?version=20220101",nightMode:0,optionImage:"assets/option.svg?version=20220101",isCover:!1,isUpdateAlert:!1,isDialogCover:!1,isVersionDialog:!1,isOptionDialog:!1,option:{theme:"default"}}},mounted:function(){document.title="プロ生時計",null!==localStorage.getItem("pronama-clock")&&(this.option=JSON.parse(localStorage.getItem("pronama-clock"))),this.loadTheme(this.option.theme);var e=document.getElementById("video");e.volume=0,e.play()},methods:{changeNightMode:function(){this.nightMode++,2==this.nightMode&&(this.nightMode=0),1==this.nightMode&&(this.isCover=!0),0==this.nightMode&&(this.isCover=!1)},openVersionDialog:function(){this.isDialogCover=!0,this.isVersionDialog=!0},openUpdateAlert:function(){this.isUpdateAlert=!0},openOptionDialog:function(){this.isDialogCover=!0,this.isOptionDialog=!0},closeDialog:function(){this.isDialogCover=!1,this.isVersionDialog=!1,this.isOptionDialog=!1},loadTheme:function(e){var t=this;this.axios.get("./assets/themes/".concat(e,"/theme.json?timestamp=").concat((new Date).getTime())).then((function(n){t.style="background-image: url('assets/themes/"+e+"/"+n.data.image+"')"})).catch((function(e){console.log(e)}))},changeOption:function(e){this.option=e,this.loadTheme(this.option.theme),localStorage.setItem("pronama-clock",JSON.stringify(this.option))},reload:function(){location.reload()}}};n("e81d");const ne=f()(te,[["render",l],["__scopeId","data-v-5b11abb8"]]);var oe=ne,ie=n("bc3a"),ce=n.n(ie),ae=n("130e"),se=Object(o["c"])(oe);se.use(ae["a"],ce.a),se.mount("#app")},"6de6":function(e,t,n){},9224:function(e){e.exports=JSON.parse('{"name":"pronama-clock","version":"1.0.0","private":true,"scripts":{"serve":"vue-cli-service serve","build":"vue-cli-service build","lint":"vue-cli-service lint"},"dependencies":{"axios":"^0.22.0","core-js":"^3.20.1","vue":"^3.2.26","vue-axios":"^3.3.7"},"devDependencies":{"@vue/cli-plugin-babel":"~4.5.0","@vue/cli-plugin-eslint":"~4.5.0","@vue/cli-service":"~4.5.0","@vue/compiler-sfc":"^3.2.24","babel-eslint":"^10.1.0","eslint":"^6.7.2","eslint-plugin-vue":"^8.1.1","sass":"^1.45.2","sass-loader":"^8.0.2"},"eslintConfig":{"root":true,"env":{"node":true},"extends":["eslint:recommended","plugin:vue/vue3-recommended"],"parserOptions":{"parser":"babel-eslint"},"rules":{"vue/attributes-order":"off","vue/html-indent":["warn","tab"],"vue/html-self-closing":"off","vue/max-attributes-per-line":"off","vue/singleline-html-element-content-newline":"off"}},"browserslist":["> 1%","last 2 versions","not dead"]}')},9790:function(e,t,n){"use strict";n("f753")},df9b:function(e,t,n){},e81d:function(e,t,n){"use strict";n("df9b")},e852:function(e,t,n){},f753:function(e,t,n){}});
//# sourceMappingURL=app.0c8ded9a.js.map