(function(e){function t(t){for(var s,o,n=t[0],u=t[1],l=t[2],d=0,p=[];d<n.length;d++)o=n[d],Object.prototype.hasOwnProperty.call(r,o)&&r[o]&&p.push(r[o][0]),r[o]=0;for(s in u)Object.prototype.hasOwnProperty.call(u,s)&&(e[s]=u[s]);c&&c(t);while(p.length)p.shift()();return a.push.apply(a,l||[]),i()}function i(){for(var e,t=0;t<a.length;t++){for(var i=a[t],s=!0,n=1;n<i.length;n++){var u=i[n];0!==r[u]&&(s=!1)}s&&(a.splice(t--,1),e=o(o.s=i[0]))}return e}var s={},r={app:0},a=[];function o(t){if(s[t])return s[t].exports;var i=s[t]={i:t,l:!1,exports:{}};return e[t].call(i.exports,i,i.exports,o),i.l=!0,i.exports}o.m=e,o.c=s,o.d=function(e,t,i){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:i})},o.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var i=Object.create(null);if(o.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var s in e)o.d(i,s,function(t){return e[t]}.bind(null,s));return i},o.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="/";var n=window["webpackJsonp"]=window["webpackJsonp"]||[],u=n.push.bind(n);n.push=t,n=n.slice();for(var l=0;l<n.length;l++)t(n[l]);var c=u;a.push([0,"chunk-vendors"]),i()})({0:function(e,t,i){e.exports=i("56d7")},"034f":function(e,t,i){"use strict";i("85ec")},"428f":function(e,t,i){},"543b":function(e,t,i){e.exports=i.p+"img/baroque.1a0f7966.jpg"},"56d7":function(e,t,i){"use strict";i.r(t);i("e260"),i("e6cf"),i("cca6"),i("a79d");var s=i("2b0e"),r=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{attrs:{id:"app"}},[i("body",[i("header",{attrs:{id:"header"}},[i("div",{staticClass:"logoHead",attrs:{title:"Retour à la page projet !"},on:{click:e.retourProjets}}),i("section",{attrs:{id:"menuHead"}},[i("ul",[i("li",[i("a",{class:e.QuiSuisJeVisible?"notActive":"active",attrs:{title:"Voir la page projet !"},on:{click:e.retourProjets}},[e._v("Projets")])]),i("li",[i("a",{class:e.QuiSuisJeVisible?"active":"notActive",attrs:{title:"Voir la page Qui Suis-Je !"},on:{click:e.toggleQuiSuisJe}},[e._v("Qui suis-je")])]),i("li",[i("a",{attrs:{title:"Voir la section contact !"},on:{click:e.scrollBottom}},[e._v("Contact")])])]),i("div",{staticClass:"border"})]),i("i",{staticClass:"fas fa-bars icon",attrs:{id:"boutonMobile"},on:{click:e.openNav}}),i("section",{staticClass:"sidenav",attrs:{id:"navigationMobile"}},[i("i",{staticClass:"fas fa-arrow-circle-left",on:{click:e.closeNav}}),i("ul",[i("li",[i("a",{class:e.QuiSuisJeVisible?"notActive":"active",attrs:{title:"Voir la page projet !"},on:{click:function(t){e.retourProjets(),e.closeNav()}}},[e._v("Projets")])]),i("li",[i("a",{class:e.QuiSuisJeVisible?"active":"notActive",attrs:{title:"Voir la page Qui Suis-Je !"},on:{click:function(t){e.toggleQuiSuisJe(),e.closeNav()}}},[e._v("Qui suis-je")])])]),e._m(0)])]),e.QuiSuisJeVisible?i("qui-suis-je"):e._e(),e.QuiSuisJeVisible?e._e():i("main",[i("tri"),i("section",{attrs:{id:"listeProjets"}},e._l(e.projets,(function(e){return i("projets",{key:e.id,attrs:{id:e.id,name:e.name,type:e.type,images1:e.images1,images2:e.images2,date:e.date,txt:e.txt,LienProjet:e.LienProjet,GH:e.GH,cover:e.cover,roles:e.roles,technos:e.technos,LienYT:e.LienYT,txtPhotos1:e.txtPhotos1,txtPhotos2:e.txtPhotos2,canva:e.canva}})})),1)],1),i("anim-fond"),i("bas-de-page")],1)])},a=[function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("ul",{staticClass:"linksFooter"},[i("li",[i("a",{attrs:{href:"mailto:matgaudreau13@gmail.com",target:"_blank",title:"Envoyé moi un courriel !"}},[i("i",{staticClass:"fas fa-envelope-square"})])]),i("li",[i("a",{attrs:{href:"https://www.linkedin.com/in/mathieu-gaudreau-8243a318a",target:"_blank",title:"Voir mon LinkedIn !"}},[i("i",{staticClass:"fab fa-linkedin"})])]),i("li",[i("a",{attrs:{href:"https://github.com/MathieuGaudreau",target:"_blank",title:"Voir mon GitHub !"}},[i("i",{staticClass:"fab fa-github-square"})])])])}],o=i("b35b"),n=(i("428f"),function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)}),u=[function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("footer",{attrs:{id:"footer"}},[i("ul",{staticClass:"linksFooter"},[i("li",[i("a",{attrs:{href:"mailto:matgaudreau13@gmail.com",target:"_blank",title:"Envoyé moi un courriel !"}},[i("i",{staticClass:"fas fa-envelope-square"})])]),i("li",[i("a",{attrs:{href:"https://www.linkedin.com/in/mathieu-gaudreau-8243a318a",target:"_blank",title:"Voir mon LinkedIn !"}},[i("i",{staticClass:"fab fa-linkedin"})])]),i("li",[i("a",{attrs:{href:"https://github.com/MathieuGaudreau",target:"_blank",title:"Voir mon GitHub !"}},[i("i",{staticClass:"fab fa-github-square"})])])]),i("section",[i("h3",[e._v("Mathieu Gaudreau")]),i("h4",[e._v("2021")])])])}],l=i("2877"),c={},d=Object(l["a"])(c,n,u,!1,null,null,null),p=d.exports,m=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("section",{attrs:{id:"tri"}},[i("ul",[i("li",{staticClass:"active",attrs:{title:"Voir tous les projets !",id:"tous"},on:{click:e.triTous}},[e._v("Tous")]),i("li",{attrs:{title:"Voir les projets création !",id:"creation"},on:{click:e.triCreation}},[e._v("Créations")]),i("li",{attrs:{title:"Voir les projets de jeux !",id:"jeux"},on:{click:e.triJeu}},[e._v("Jeux")]),i("li",{attrs:{title:"Voir les projets web !",id:"web"},on:{click:e.triWeb}},[e._v("Web")])]),i("div",{staticClass:"border"})])},b=[],h={methods:{triCreation:function(){var e=document.getElementById("creation");e.classList.add("active");var t=document.getElementById("jeux");t.classList.remove("active");var i=document.getElementById("web");i.classList.remove("active");var s=document.getElementById("tous");s.classList.remove("active");for(var r=document.querySelectorAll(".creation"),a=0;a<r.length;a++)window.screen.width<=768?r[a].style.width="100%":r[a].style.width="40%";for(var o=document.querySelectorAll(".jeu"),n=0;n<o.length;n++)o[n].style.width="0";for(var u=document.querySelectorAll(".web"),l=0;l<u.length;l++)u[l].style.width="0"},triJeu:function(){var e=document.getElementById("creation");e.classList.remove("active");var t=document.getElementById("jeux");t.classList.add("active");var i=document.getElementById("web");i.classList.remove("active");var s=document.getElementById("tous");s.classList.remove("active");for(var r=document.querySelectorAll(".creation"),a=0;a<r.length;a++)r[a].style.width="0";for(var o=document.querySelectorAll(".jeu"),n=0;n<o.length;n++)window.screen.width<=768?o[n].style.width="100%":o[n].style.width="40%";for(var u=document.querySelectorAll(".web"),l=0;l<u.length;l++)u[l].style.width="0"},triWeb:function(){var e=document.getElementById("creation");e.classList.remove("active");var t=document.getElementById("jeux");t.classList.remove("active");var i=document.getElementById("web");i.classList.add("active");var s=document.getElementById("tous");s.classList.remove("active");for(var r=document.querySelectorAll(".creation"),a=0;a<r.length;a++)r[a].style.width="0";for(var o=document.querySelectorAll(".jeu"),n=0;n<o.length;n++)o[n].style.width="0";for(var u=document.querySelectorAll(".web"),l=0;l<u.length;l++)window.screen.width<=768?u[l].style.width="100%":u[l].style.width="40%"},triTous:function(){var e=document.getElementById("creation");e.classList.remove("active");var t=document.getElementById("jeux");t.classList.remove("active");var i=document.getElementById("web");i.classList.remove("active");var s=document.getElementById("tous");s.classList.add("active");for(var r=document.querySelectorAll(".creation"),a=0;a<r.length;a++)window.screen.width<=768?r[a].style.width="100%":r[a].style.width="40%";for(var o=document.querySelectorAll(".jeu"),n=0;n<o.length;n++)window.screen.width<=768?o[n].style.width="100%":o[n].style.width="40%";for(var u=document.querySelectorAll(".web"),l=0;l<u.length;l++)window.screen.width<=768?u[l].style.width="100%":u[l].style.width="40%"}}},g=h,v=Object(l["a"])(g,m,b,!1,null,null,null),f=v.exports,w=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("article",{staticClass:"projets",class:e.type},[i("article",{staticClass:"projetThumb",style:{backgroundImage:"url("+e.cover+")"},on:{click:function(t){e.scrollTop(),e.toggleDetails()}}}),e.detailsAreVisible?i("section",{staticClass:"detailsProjets",attrs:{id:"details"}},[i("section",{staticClass:"headProjets",style:{backgroundImage:"url("+e.cover+")"}},[i("h3",{staticClass:"retour",on:{click:e.closeDetails}},[i("i",{staticClass:"fas fa-arrow-circle-left"}),e._v("Retour à la liste des projets ")])]),i("section",{staticClass:"nomProjet",attrs:{"data-aos":"fade-right"}},[i("h1",[e._v(e._s(e.name))]),i("h4",[e._v(e._s(e.date))])]),i("section",{staticClass:"description"},[i("div",{staticClass:"descHalf"},[i("div",{staticClass:"rolesLogi",attrs:{"data-aos":"fade-right"}},[i("h4",[e._v("Rôles :")]),i("ul",e._l(e.roles,(function(t,s){return i("li",{key:s},[e._v(" "+e._s(e.roles[s])+" ")])})),0)]),i("div",{staticClass:"rolesLogi",attrs:{"data-aos":"fade-right"}},[i("h4",[e._v("Fait avec :")]),i("ul",e._l(e.technos,(function(t,s){return i("li",{key:s},[e._v(" "+e._s(e.technos[s])+" ")])})),0)])]),i("div",{staticClass:"txtDescription",attrs:{"data-aos":"fade-left"}},[i("h4",[e._v("Le projet")]),e._l(e.txt,(function(t,s){return i("p",{key:s},[e._v(e._s(e.txt[s]))])}))],2)]),i("div",{staticClass:"divider"}),e.LienProjet?i("section",{staticClass:"liensProjets"},[i("h2",[i("a",{attrs:{href:e.LienProjet,target:"_blank"}},[e._v("Voir le projet"),i("i",{staticClass:"fas fa-external-link-square-alt"})])]),e.GH?i("h2",[i("a",{attrs:{href:e.GH,target:"_blank"}},[e._v("Voir le GitHub"),i("i",{staticClass:"fab fa-github-square"})])]):e._e()]):e._e(),e.LienProjet?i("div",{staticClass:"divider"}):e._e(),e.LienYT?i("section",{staticClass:"youtube",attrs:{"data-aos":"fade-up"}},[i("iframe",{attrs:{id:"player",type:"text/html",src:e.LienYT,frameborder:"0",showinfo:"0"}}),e.canva||e.images1?i("div",{staticClass:"divider"}):e._e()]):e._e(),e.canva?i("section",{staticClass:"canvas"},e._l(e.canva,(function(t,s){return i("div",{key:s,attrs:{"data-aos":"fade-up"}},[i("iframe",{attrs:{loading:"lazy",src:e.canva[s]}})])})),0):e._e(),e.canva?i("div",{staticClass:"divider"}):e._e(),e.images1?i("section",{staticClass:"sliders"},[i("hooper",{staticClass:"hooper1Container",attrs:{"data-aos":"fade-right"}},[e._l(e.images1,(function(t,s){return i("slide",{key:s,class:{onlyOneSlider:!e.images2}},[i("img",{attrs:{src:e.images1[s],alt:""},on:{click:function(){return e.showImg(s)}}}),i("div",{staticClass:"detailImg"},[i("h3",[e._v("Dans cette image :")]),i("p",[e._v(e._s(e.txtPhotos1[s]))])])])})),i("hooper-pagination",{class:{oneSlider:!e.images2},attrs:{slot:"hooper-addons"},slot:"hooper-addons"})],2),e.images2?i("hooper",{staticClass:"hooper2Container",attrs:{"data-aos":"fade-left"}},[e._l(e.images2,(function(t,s){return i("slide",{key:s,staticClass:"hooper2"},[i("img",{attrs:{src:e.images2[s],alt:""},on:{click:function(){return e.showImg2(s)}}}),i("div",{staticClass:"detailImg"},[i("h3",[e._v("Dans cette image :")]),i("p",[e._v(e._s(e.txtPhotos2[s]))])])])})),i("hooper-pagination",{attrs:{slot:"hooper-addons"},slot:"hooper-addons"})],2):e._e(),i("vue-easy-lightbox",{attrs:{visible:e.visible,imgs:e.images1,index:e.index},on:{hide:e.handleHide}}),i("vue-easy-lightbox",{attrs:{visible:e.visible2,imgs:e.images2,index:e.index2},on:{hide:e.handleHide2}})],1):e._e(),i("section",{staticClass:"retourProjets",on:{click:e.closeDetails}},[e._m(0)])]):e._e()])},C=[function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("h1",[i("i",{staticClass:"fas fa-arrow-circle-left"}),e._v("Retour à la liste des projets ")])}],y=i("7e04"),j=(i("955f"),i("825ae")),x={components:{Hooper:y["a"],Slide:y["c"],HooperPagination:y["b"],VueEasyLightbox:j["a"]},props:{id:{type:String,required:!0},name:{type:String,required:!0},type:{type:String,required:!0},date:{type:String,required:!0},images1:{type:Array,required:!1},images2:{type:Array,required:!1},txtPhotos1:{type:Array,required:!1},txtPhotos2:{type:Array,required:!1},cover:{type:String,required:!0},txt:{type:Array,required:!0},roles:{type:Array,required:!0},technos:{type:Array,required:!0},LienProjet:{type:String,required:!1},LienYT:{type:String,required:!1},canva:{type:Array,required:!1},GH:{type:String,required:!1}},data:function(){return{detailsAreVisible:!1,index:0,index2:0,visible:!1,visible2:!1}},methods:{toggleDetails:function(){this.detailsAreVisible=!this.detailsAreVisible;for(var e=document.querySelectorAll(".projetThumb"),t=0;t<e.length;t++)e[t].style.display="none";for(var i=document.querySelectorAll(".projets"),s=0;s<i.length;s++)i[s].style.width="100%";document.getElementById("tri").style.display="none"},closeDetails:function(){this.detailsAreVisible=!1;for(var e=document.querySelectorAll(".projetThumb"),t=0;t<e.length;t++)e[t].style.display="flex";for(var i=document.querySelectorAll(".projets"),s=0;s<i.length;s++)window.screen.width<=768?i[s].style.width="100%":i[s].style.width="40%";document.getElementById("tri").style.display="flex";var r=document.getElementById("creation");r.classList.remove("active");var a=document.getElementById("jeux");a.classList.remove("active");var o=document.getElementById("web");o.classList.remove("active");var n=document.getElementById("tous");n.classList.add("active")},scrollTop:function(){document.documentElement.scrollTop=0},showImg:function(e){this.index=e,this.visible=!0},handleHide:function(){this.visible=!1},showImg2:function(e){this.index2=e,this.visible2=!0},handleHide2:function(){this.visible2=!1}}},P=x,q=Object(l["a"])(P,w,C,!1,null,null,null),M=q.exports,S=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"anim"},[i("svg",{staticClass:"svg",attrs:{xmlns:"http://www.w3.org/2000/svg"}},[i("path",{attrs:{d:"M42.8,-45.8C56,-39.8,67.9,-26.9,72.5,-11.2C77.2,4.5,74.6,23.1,66.6,39.9C58.6,56.7,45.1,71.8,29.3,75.4C13.5,79,-4.8,71,-19.2,61.8C-33.7,52.7,-44.4,42.2,-50.9,29.9C-57.4,17.6,-59.6,3.3,-61,-14.6C-62.4,-32.5,-63,-54.1,-52.6,-60.6C-42.3,-67.2,-21.2,-58.7,-3.2,-54.9C14.7,-51.1,29.5,-51.9,42.8,-45.8Z",transform:"translate(100 100)"}})]),i("svg",{staticClass:"svg",attrs:{xmlns:"http://www.w3.org/2000/svg"}},[i("path",{attrs:{d:"M47.2,-57.8C60.6,-45.1,70.3,-29.6,69.4,-15.2C68.4,-0.8,56.7,12.6,48.4,28.8C40.1,45,35.2,64.1,22,75.4C8.8,86.6,-12.6,90.1,-27.2,81.8C-41.7,73.4,-49.3,53.1,-53,35.8C-56.8,18.6,-56.7,4.3,-57.9,-13.9C-59.1,-32,-61.5,-54.1,-52,-67.5C-42.6,-80.9,-21.3,-85.6,-2.2,-83C16.9,-80.4,33.9,-70.5,47.2,-57.8Z",transform:"translate(100 100)"}})]),i("svg",{staticClass:"svg",attrs:{xmlns:"http://www.w3.org/2000/svg"}},[i("path",{attrs:{d:"M20.2,-27.7C28.7,-21.5,40.1,-19.1,42.2,-13.5C44.3,-7.9,37.1,0.9,35.2,12.9C33.3,24.8,36.6,39.9,31.6,46.7C26.6,53.6,13.3,52.2,-3.1,56.4C-19.5,60.7,-38.9,70.5,-52.3,66.4C-65.7,62.3,-73.1,44.2,-77.7,26.1C-82.3,8.1,-84.2,-9.9,-76.9,-22.7C-69.6,-35.4,-53.1,-42.9,-38.7,-47.1C-24.4,-51.4,-12.2,-52.4,-3.2,-48C5.8,-43.6,11.6,-33.8,20.2,-27.7Z",transform:"translate(100 100)"}})]),i("svg",{staticClass:"svg",attrs:{xmlns:"http://www.w3.org/2000/svg"}},[i("path",{attrs:{d:"M34.9,-49.3C47.4,-39.1,61,-31.7,62.7,-21.5C64.3,-11.4,54,1.4,50,17C46,32.6,48.2,51.1,40.9,59.2C33.7,67.4,16.8,65.3,4.8,58.7C-7.2,52.1,-14.5,41,-19.4,32.1C-24.4,23.1,-27,16.4,-31.4,8.8C-35.7,1.2,-41.9,-7.2,-43.5,-17.8C-45.1,-28.4,-42.2,-41.3,-34.2,-53C-26.2,-64.7,-13.1,-75.3,-0.9,-74.1C11.3,-72.8,22.5,-59.6,34.9,-49.3Z",transform:"translate(100 100)"}})]),i("svg",{staticClass:"svg",attrs:{xmlns:"http://www.w3.org/2000/svg"}},[i("path",{attrs:{d:"M50.6,-70.2C62.7,-60.8,67.8,-42.3,69.1,-25.5C70.3,-8.7,67.9,6.3,62,18.9C56.1,31.4,46.9,41.6,36,53.5C25.1,65.3,12.5,78.9,-2.3,82.1C-17.1,85.2,-34.3,78,-50.1,67.7C-65.9,57.4,-80.4,44.1,-82.3,28.9C-84.2,13.7,-73.5,-3.3,-65.6,-19.3C-57.7,-35.3,-52.5,-50.2,-42,-60.1C-31.5,-70,-15.8,-74.8,1.7,-77.2C19.2,-79.6,38.5,-79.5,50.6,-70.2Z",transform:"translate(100 100)"}})]),i("svg",{staticClass:"svg",attrs:{xmlns:"http://www.w3.org/2000/svg"}},[i("path",{attrs:{d:"M45.9,-68.6C56.6,-64.6,60.3,-46.9,61.1,-31.8C62,-16.7,59.9,-4.2,56.6,7.1C53.4,18.4,48.9,28.4,41.6,35.1C34.4,41.8,24.3,45.2,14.3,47.6C4.3,50,-5.6,51.4,-14.5,49C-23.4,46.6,-31.4,40.3,-38.4,32.9C-45.5,25.5,-51.6,16.9,-53.5,7.4C-55.4,-2.2,-53,-12.6,-50,-24.4C-47.1,-36.1,-43.5,-49.2,-35.1,-54.1C-26.6,-59.1,-13.3,-56.1,2.2,-59.4C17.6,-62.8,35.3,-72.5,45.9,-68.6Z",transform:"translate(100 100)"}})]),i("svg",{staticClass:"svg",attrs:{xmlns:"http://www.w3.org/2000/svg"}},[i("path",{attrs:{d:"M43.1,-70.3C53.5,-60.5,57.8,-44.4,61.2,-30C64.7,-15.5,67.4,-2.7,68.9,12.2C70.3,27.1,70.4,44.1,61.4,51.6C52.4,59,34.2,56.9,18.1,61.7C1.9,66.5,-12.3,78.3,-27.5,80C-42.7,81.8,-59.1,73.6,-70,60.8C-81,47.9,-86.6,30.6,-87.8,13.4C-88.9,-3.7,-85.7,-20.7,-75.8,-31.4C-65.9,-42.1,-49.3,-46.4,-35.5,-54.7C-21.8,-63,-10.9,-75.1,2.8,-79.4C16.4,-83.7,32.8,-80.1,43.1,-70.3Z",transform:"translate(100 100)"}})]),i("svg",{staticClass:"svg",attrs:{xmlns:"http://www.w3.org/2000/svg"}},[i("path",{attrs:{d:"M41.5,-64.8C55.4,-55.7,69.2,-46.8,68.9,-35.1C68.7,-23.3,54.4,-8.8,50,5.7C45.7,20.3,51.3,34.8,49.2,49.3C47,63.8,37.1,78.3,25.1,78.8C13.1,79.2,-1.1,65.6,-17.6,60.5C-34.1,55.4,-53,58.8,-61,51.6C-69,44.5,-66.1,26.8,-65.5,11.3C-64.8,-4.3,-66.4,-17.7,-62.1,-28.8C-57.8,-40,-47.5,-48.9,-36.1,-59.1C-24.8,-69.3,-12.4,-80.8,0.7,-81.9C13.9,-83.1,27.7,-73.9,41.5,-64.8Z",transform:"translate(100 100)"}})]),i("svg",{staticClass:"svg",attrs:{xmlns:"http://www.w3.org/2000/svg"}},[i("path",{attrs:{d:"M28.9,-51.2C36.3,-40.3,40.2,-30.2,43.5,-20.6C46.8,-11,49.5,-1.7,49,7.6C48.5,16.9,44.8,26.3,40.8,40.9C36.8,55.6,32.4,75.5,22.6,79.5C12.9,83.5,-2.3,71.5,-18.2,65.3C-34.1,59.2,-50.7,58.8,-63.4,51.1C-76,43.4,-84.6,28.4,-80.5,15.4C-76.4,2.4,-59.6,-8.6,-49.1,-18.6C-38.6,-28.7,-34.4,-37.9,-27.3,-48.8C-20.2,-59.8,-10.1,-72.5,0.4,-73.1C10.8,-73.6,21.6,-62,28.9,-51.2Z",transform:"translate(100 100)"}})]),i("svg",{staticClass:"svg",attrs:{xmlns:"http://www.w3.org/2000/svg"}},[i("path",{attrs:{d:"M57.4,-63.5C72.5,-55.6,81.8,-35.8,82.4,-16.9C82.9,2.1,74.7,20.3,63.8,34.7C52.9,49.1,39.2,59.7,24.5,63.2C9.8,66.7,-5.9,63.1,-19.4,56.7C-32.9,50.3,-44.2,41.1,-56.3,28.5C-68.5,15.8,-81.6,-0.5,-80.2,-15.1C-78.8,-29.8,-62.8,-42.8,-47,-50.6C-31.3,-58.4,-15.6,-60.9,2.7,-64.1C21.1,-67.4,42.2,-71.4,57.4,-63.5Z",transform:"translate(100 100)"}})])])},L=[],_={},k=Object(l["a"])(_,S,L,!1,null,null,null),T=k.exports,A=function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},V=[function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("section",{attrs:{id:"moi"}},[s("div",{attrs:{id:"moiImg"}},[s("img",{attrs:{src:i("543b"),alt:""}})]),s("div",{attrs:{id:"moiTxt"}},[s("h2",[e._v("Qui suis-je ?")]),s("p",[e._v(" Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum vel elit vitae sem convallis dignissim sed ac magna. Nulla vehicula egestas eros at aliquam. Sed accumsan tellus vel nisl feugiat, nec eleifend justo sollicitudin. Etiam mollis tincidunt libero, non lacinia ante efficitur convallis. Phasellus pellentesque congue sapien, sit amet maximus lectus lacinia et. Phasellus eget justo tortor. Suspendisse bibendum tincidunt metus a scelerisque. Donec hendrerit lectus nec elit finibus faucibus. Sed et posuere nisi. Praesent ultrices eu erat vel facilisis. Sed mattis euismod turpis, nec sodales ligula lobortis et. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Quisque fringilla erat sed diam dignissim dictum. Maecenas porttitor enim in lorem iaculis laoreet sit amet ut ante. ")]),s("div",[s("h1",[e._v("Retrouvez moi sur :")]),s("ul",[s("li",[s("a",{attrs:{href:"https://www.linkedin.com/in/mathieu-gaudreau-8243a318a",target:"_blank",title:"Voir mon LinkedIn"}},[e._v("LinkedIn"),s("i",{staticClass:"fab fa-linkedin"})])]),s("li",[s("a",{attrs:{href:"https://github.com/MathieuGaudreau",target:"_blank",title:"Voir mon GitHub !"}},[e._v("GitHub"),s("i",{staticClass:"fab fa-github-square"})])])])])])])}],E={},G=Object(l["a"])(E,A,V,!1,null,null,null),F=G.exports,D={components:{BasDePage:p,Tri:f,Projets:M,AnimFond:T,QuiSuisJe:F},name:"App",data:function(){return{projets:o,QuiSuisJeVisible:!1,imgLogoBlanc:"./assets/logoBlanc.png",imgLogoOrange:"./assets/logoOrange.png"}},methods:{toggleQuiSuisJe:function(){this.QuiSuisJeVisible=!0},retourProjets:function(){this.QuiSuisJeVisible&&(this.QuiSuisJeVisible=!1)},scrollBottom:function(){window.scrollTo(0,document.body.scrollHeight)},openNav:function(){document.getElementById("navigationMobile").style.width="100%",document.getElementById("boutonMobile").style.transform="rotate(-90deg)"},closeNav:function(){document.getElementById("navigationMobile").style.width="0",document.getElementById("boutonMobile").style.transform="rotate(0deg)"}}},H=D,I=(i("034f"),Object(l["a"])(H,r,a,!1,null,null,null)),J=I.exports,B=i("f5af"),Q=i.n(B);i("e829");s["a"].component("quisuisje",F),s["a"].component("anim",T),s["a"].component("tri",f),s["a"].component("projets",M),s["a"].component("basdepage",p),s["a"].config.productionTip=!1,new s["a"]({created:function(){Q.a.init()},render:function(e){return e(J)}}).$mount("#app")},"85ec":function(e,t,i){},b35b:function(e){e.exports=JSON.parse('[{"id":"projetRecherche","name":"Projet de recherche","type":"jeu","date":"2021","txt":["Ce projet est un petit jeu d’horreur / ambiance dans lequel le joueur doit explorer l’environnement pour trouver des clés qui lui permettent d’avancer dans la carte et des statuettes de singes pour compléter l’objectif du jeu.","Ce jeu est ma première expérimentation avec Unreal Engine dont j’ai appris l’utilisation par moi-même lors de mon cours de projet final sur l’étendue de 8 semaines."],"images1":["https://i.ibb.co/f2bPC1Z/mainMenu.png","https://i.ibb.co/D7WpFPy/options-Menu.png","https://i.ibb.co/h9TGJyn/hud-Exemple.png","https://i.ibb.co/Lvz5Lfh/death-Screen.png","https://i.ibb.co/6JXJsSP/InGame.png","https://i.ibb.co/ZNtFhLn/Cabanon.png","https://i.ibb.co/y02YM55/Maison-Exterieur.png","https://i.ibb.co/k1Vg4rf/Maison-Interieur.png","https://i.ibb.co/FXrsHj4/Maison-Interieur2.png"],"txtPhotos1":["Menu principal du jeu.","Écran d\'options du jeu.","HUD du jeu, on retrouve le niveau de stress ( rouge ), le niveau de stamina ( vert ), état de la batterie ( jaune ), l\'objectif et l\'inventaire.","Écran de fin du jeu si le joueur meurt.","Début du jeu.","Première zone à explorer.","Zone principale du jeu ( extérieur ).","Zone principale du jeu ( premier étage ).","Zone principale du jeu ( deuxième étage )."],"cover":"https://i.ibb.co/9www7QH/projet-Recherche-Cover.png","roles":["Concepteur Sonore","Programmeur","Intégrateur","Designer"],"technos":["Unreal Engine","Blueprint","Photoshop"]},{"id":"JKM","name":"John Kenn Mortensen","type":"creation","date":"2021","txt":["Animation réalisée dans le cadre d\'un travail pratique à thème libre. Le but de ce travail était d\'expérimenter avec les effets de marionnettes, de bruits fractals, de particules et de 3D.","L\'animation a été créée avec les dessins de l\'artiste danois John Kenn Mortensen."],"LienYT":"https://www.youtube.com/embed/00sdrKHIxJ4","cover":"https://i.ibb.co/w4J4tDQ/johnkenn-Cover.png","roles":["Designer"],"technos":["After Effects","Photoshop"]},{"id":"TOKYO","name":"Tokyo","type":"creation","date":"2021","txt":["Animation réalisée dans le cadre d\'un travail pratique à thème libre. Le but de ce travail était d\'expérimenter avec les masques et les différents effets.","Ici beaucoup d\'effets de glow, de camera tracking, de lumière et d\'un plugin qui se nomme Thicc Stroke."],"LienYT":"https://www.youtube.com/embed/SMKQ7CC4Mh4","cover":"https://i.ibb.co/0Mp4Q4j/tokyo-Cover.png","roles":["Designer"],"technos":["After Effects"]},{"id":"LASTSPARK","name":"Last Spark","type":"jeu","date":"2020","txt":["Last Spark est un jeu d\'action / aventure rogue-like où règne une constante présence sinistre. Le joueur doit réussir à survivre le plus longtemps possible et doit trouver les multiples mini boss pour ensuite vaincre le boss final.","Ce projet a été créé en équipe de 3 personnes sur l’étendue d’une session de cégep.","Nous avons aussi créé un site web pour le jeu qui sert de plateforme sur laquelle le jeu est disponible pour téléchargement.","Nous devions donner une esthétique similaire à celle du jeu sur le site. Nous avons donc décidé de choisir des couleurs qui se contrastent très bien pour donner un effet sombre et mystérieux. Nous avons aussi mis un effet de particules et des images subtiles des ennemis du jeu pour rappeler les éléments que le joueur peut retrouver en jouant."],"LienProjet":"https://lastspark.netlify.app/","LienYT":"https://www.youtube.com/embed/5FMPfM0h2wI","canva":["https:&#x2F;&#x2F;www.canva.com&#x2F;design&#x2F;DAEXKXS_0fM&#x2F;view?embed","https:&#x2F;&#x2F;www.canva.com&#x2F;design&#x2F;DAEH9Ur3gbM&#x2F;view?embed"],"GH":"https://github.com/MathieuGaudreau/LastSpark","images1":["https://i.ibb.co/VSc3k7Z/accueil.webp","https://i.ibb.co/FsMPfVT/menu.webp","https://i.ibb.co/6txcX3p/pause.webp","https://i.ibb.co/353y9MF/inventaire.webp","https://i.ibb.co/K7BZ9Ff/aide.webp"],"txtPhotos1":["Affiche du jeu","Écran principal du jeu, ici le joueur peut commencer à jouer, voir les instructions et quitter le jeu.","Le menu permet de quitter vers le menu principal ou de quitter le jeu.","Le sytème d\'inventaire permet d\'équipper les armes et pouvoirs et d\'organiser les objets obtenus durant le jeu.","Des écrans d\'aides vont apparaitre lors du jeu pour expliquer au joueur les différentes méchaniques."],"txtPhotos2":["Le feu de camp sert de safezone pour le joueur et il peut interagir avec le feu pour se soigner et crafter.","Le joueur peut retrouver des ruines dans le jeu qui donne accès à des améliorations, des armes et un sort.","Exemple de combat contre un boss. Les boss et les ennemies ont plus en plus de vies au fil que le jeu avance."],"images2":["https://i.ibb.co/yPykPpD/debut.webp","https://i.ibb.co/qntnzG9/ruine.webp","https://i.ibb.co/7nZ1vS5/boss.webp"],"cover":"https://i.ibb.co/yP4mz3P/lastspark-Cover.png","roles":["Chargé de projet","Concepteur Sonore","Programmeur","Intégrateur","Designer"],"technos":["Unity","C#","Photoshop","HTML","CSS","JavaScript"]},{"id":"TIM2020","name":"TIM 2020","type":"web","date":"2020","txt":["Ce projet est un concept de site web pour le département de Techniques d’intégration multimédia du cégep de Maisonneuve qui a été développé en équipe de 5 sur l’étendue d’une session de cégep.","Nous avons décidé de donner un nouveau look au site web beaucoup plus au goût du jour, très inspiré du style et des couleurs cyberpunks."],"LienProjet":"https://techniques-integration-multimedia.netlify.app/","GH":"https://github.com/MathieuGaudreau/TIM2020","images1":["https://i.ibb.co/jrMFbgN/accueil-tim.webp","https://i.ibb.co/4s6cNGz/accueil-Mobile1.webp","https://i.ibb.co/tpKgP2M/accueil-Mobile2.webp","https://i.ibb.co/kyWXj9y/cours.webp","https://i.ibb.co/PcTJqVF/cours-Mobile.webp","https://i.ibb.co/rHF2n6S/cours-Mobile2.webp"],"images2":["https://i.ibb.co/tQfJhM9/equipe.webp","https://i.ibb.co/c8NfRht/equipe-Mobile.webp","https://i.ibb.co/mDnQyxM/event.webp","https://i.ibb.co/9ZdCNMH/events-Mobile.webp","https://i.ibb.co/FHrWYJw/guide-style.webp","https://i.ibb.co/KhffnQd/Moodboard-Tim.webp"],"txtPhotos1":["Version grand écran de la page d\'accueil du site.","Version mobile de la page d\'accueil du site.","Navigation du site version mobile.","Version grand écran de la page cours du site.","Version mobile de la page cours du site.","Version mobile de la page cours du site."],"txtPhotos2":["Version grand écran de la page équipe du site.","Version mobile de la page équipe du site.","Version grand écran de la page événement du site.","Version mobile de la page événement du site.","Guide de style du site.","Moodboard du site."],"cover":"https://i.ibb.co/g4GQNHL/tim2020-Cover.png","roles":["Designer","Dev Front-End"],"technos":["HTML","CSS","JavaScript","Photoshop"]},{"id":"MANOR","name":"HOLLOW MANOR","type":"jeu","date":"2020","txt":["Hollow Manor est un jeu d\'exploration dans lequel le joueur doit explorer un labyrinthe et échapper aux monstres. Le joueur doit réussir à trouver des indices et des clés pour pouvoir s\'échapper du labyrinthe.","Nous avons décidé de suivre un style graphique très sombre, inspiré de l\'époque victorienne et des histoires de HP Lovecraft pour la création de l\'univers.","Ce jeu est le premier jeu que j\'ai développé en 3D avec Unity et il a été créé en équipe de 2."],"LienProjet":"https://mathieugaudreau.itch.io/the-strange-case-of-hollow-manor","canva":["https:&#x2F;&#x2F;www.canva.com&#x2F;design&#x2F;DAEXFFUQhjg&#x2F;view?embed"],"GH":"https://github.com/MathieuGaudreau/HollowManor","images1":["https://i.ibb.co/MgyDFkS/Menu-Intro-Assemblage-Jeu.webp","https://i.ibb.co/7XgR7zX/Choix1.webp","https://i.ibb.co/Sd7MKQH/Choix2.webp"],"images2":["https://i.ibb.co/5MxdqHQ/gameplay1.webp","https://i.ibb.co/tLhpgsM/gameplay2.webp","https://i.ibb.co/92mJmbZ/gameplay3.webp","https://i.ibb.co/p4B1RP0/village.webp"],"txtPhotos1":["Affiche du jeu","Victor, premier des 2 personnages jouables.","Victoria, deuxième personnage jouable."],"txtPhotos2":["Le joueur commence son aventure dans une petite cabane sombre.","Le jeu comporte plusieurs zones différentes, ici le jardin.","La zone principale du jeu à explorer est le labyrinthe.","Le joueur peut décider de choisir quelle zone du jeu il veut explorer en premier."],"cover":"https://i.ibb.co/68YPQWQ/hollowmanor-Cover.png","roles":["Designer","Concepteur Sonore","Programmeur"],"technos":["Unity","C#"]},{"id":"OBJETS","name":"Objets","type":"creation","date":"2019","txt":["Ce projet avec comme but de créer différents objets et un sprite d\'animation pour être utilisé dans un jeu vidéo."],"images1":["https://i.ibb.co/ryVwVk3/Gaudreau-Cl-2.webp","https://i.ibb.co/LJSgD4D/Gaudreau-Potion.webp","https://i.ibb.co/2cFzyYy/Gaudreau-Power-up.webp","https://i.ibb.co/F3LnxrQ/Gaudreau-Points.webp","https://i.ibb.co/GR46BBW/Gaudreau-Key-Card.webp"],"images2":["https://i.ibb.co/23WKrfs/Gaudreau-Gem.webp","https://i.ibb.co/PNpJnMj/Gaudreau-Coffre-coffre-ferme.webp","https://i.ibb.co/SN4sX76/Gaudreau-Coffre-coffre-ouvert-1.webp","https://i.ibb.co/0YmYVtj/Gaudreau-Coffre-coffre-ouvert-2.webp"],"txtPhotos1":["Clé","Potion","Power up","Pièce d\'or","Carte d\'accès"],"txtPhotos2":["Cristal","Sprite de coffre 1","Sprite de coffre 2","Sprite de coffre 3"],"cover":"https://i.ibb.co/V9B3MXt/objets-Cover.png","roles":["Designer"],"technos":["Illustrator"]},{"id":"ROVE","name":"Rovesciato","type":"creation","date":"2019","txt":["Ce projet avec comme but de créer une vidéo comprenant plusieures angles différents et un contenu avec une cohérance artistique.","Le projet est inspiré d’émissions et de vidéos de cuisine comme Chef’s Table."],"LienYT":"https://www.youtube.com/embed/nt1fpiuzrJo","cover":"https://i.ibb.co/CwMJ24p/rovesciato-Cover.png","roles":["Cameraman","Scénariste","Monteur"],"technos":["Premiere Pro"]},{"id":"NIMH","name":"Nimh","type":"jeu","date":"2019","txt":["Nimh est un petit jeu de plateforme dans lequel le joueur doit réussir à sauter de plateforme en plateforme sans tomber dans le vide le plus longtemps possible."],"LienProjet":"https://nimh.netlify.app/","GH":"https://github.com/MathieuGaudreau/Nimh","images1":["https://i.ibb.co/y4MKf7P/accueil.webp","https://i.ibb.co/wB8b7hq/instructionm.webp"],"images2":["https://i.ibb.co/K0RF0Td/jeu.webp","https://i.ibb.co/dkKbLHx/mort.webp"],"txtPhotos1":["Accueil du jeu","Écran d\'instructions du jeu"],"txtPhotos2":["Exemple de gameplay du jeu","Le menu de fin indique le dernier score du joueur et son meilleur score."],"cover":"https://i.ibb.co/D8YNbPG/nimh-Cover.png","roles":["Designer","Programmeur"],"technos":["PHASER","HTML","CSS","JavaScript"]},{"id":"ASSASINE","name":"Assasine","type":"jeu","date":"2019","txt":["Assassine est un concept de jeu qui a été développé en équipe de 4 dans le cadre d’un projet donné par le comité environnemental du cégep de Maisonneuve pour la journée de la terre 2019.","Assassine est un RPG dans lequel le joueur est de reprendre contrôle de l’environnement de la terre en éliminant les CEO des compagnies qui polluent la planète pour ensuite les transformer en compagnies écologiques.","Notre projet a reçu le prix du choix du comité environnemental du cégep."],"LienProjet":"https://assasine.netlify.app/","images1":["https://i.ibb.co/Pz17xXX/cover.webp","https://i.ibb.co/k1THBTt/Mathieu-Ville.webp","https://i.ibb.co/12F2JyZ/Map-Asasine.webp","https://i.ibb.co/fq0YzcM/personnage.webp","https://i.ibb.co/dtY2VkR/principale.webp"],"images2":["https://i.ibb.co/GFwKRgK/ennemi2.webp","https://i.ibb.co/5T9pJh3/ennemi3.webp","https://i.ibb.co/W5CDKtD/ennemi4.webp","https://i.ibb.co/nQKG4n4/ennemi5.webp"],"txtPhotos1":["Logo du jeu","Concept de la ville, la zone principale du jeu est une ville très futuriste et très illuminée oû seulement les riches peuvent habiter. ","La carte indique les différents objectifs que le joueur doit accomplir.","Hiérarchie des boss, le joueur doit éliminer les boss en ordre de hiérarchie pour arriver au boss final. ","Concept de l\'héroine"],"txtPhotos2":["Concept du 1er boss","Concept du 2e boss","Concept du 3e boss","Concept du 4e boss"],"cover":"https://i.ibb.co/p2nGP1y/assasine-Cover.png","roles":["Designer","Programmeur"],"technos":["Illustrator","HTML","CSS"]},{"id":"BLOOD","name":"Bloodville","type":"jeu","date":"2019","txt":["Bloodville est un jeu de plateforme en 2D dans lequel le joueur s\'aventure dans un village morbide et c’est alentour afin de détruire les créatures qui terrorisent ses habitants.","J\'ai décidé de donner au jeu un style graphique 8 bits pour rappeler les jeux de plateforme plus rétro, car c\'est un style très à la mode. J\'ai aussi choisi des couleurs dans les palettes de rouge et de mauve pour donner une ambiance un peu plus sombre et macabre pour aller avec l\'univers très fantastique et médiéval du jeu.","Ce jeu est le premier jeu que j\'ai développé avec Unity."],"LienProjet":"https://assasine.netlify.app/","canva":["https:&#x2F;&#x2F;www.canva.com&#x2F;design&#x2F;DAEXYBfMwGA&#x2F;view?embed"],"images1":["https://i.ibb.co/t2W8F92/Gaudreau-Affiche.webp","https://i.ibb.co/f4x4FQt/Gaudreau-Menu.webp","https://i.ibb.co/XsQgcFW/Gaudreau-Instructions.webp"],"images2":["https://i.ibb.co/XzDX0Fw/Gaudreau-Gameplay.webp","https://i.ibb.co/DtTbktR/Gaudreau-Victoire.webp","https://i.ibb.co/mhdtMtn/Gaudreau-Gameover.webp"],"txtPhotos1":["Affiche du jeu","Menu principal du jeu","Écran d\'instructions du jeu"],"txtPhotos2":["Exemple de gameplay, le joueur est confronté à plusieurs petites zones de platforming durant le jeu.","Écran de victoire du jeu","Écran de mort du jeu"],"cover":"https://i.ibb.co/6Jt6rQD/bloodvillle-Cover.png","roles":["Designer","Programmeur"],"technos":["Unity","C#","Illustrator"]},{"id":"VFM","name":"Manago","type":"web","date":"2019","txt":["Ce projet est un concept pour la refonte du site web du restaurant Le Vieux Four Manago situé à Saint-Sauveur.","Mon mandat pour ce projet était de faire revivre un site web qui n\'était pas au goût du jour. J\'ai donc donné un style beaucoup plus moderne et épuré avec des couleurs plus sobres. J\'ai aussi simplifié la navigation en rendant le site en one pager."],"LienProjet":"https://vieux-four-manago-gaudreau.netlify.app","GH":"https://github.com/MathieuGaudreau/Manago","images1":["https://i.ibb.co/ssnthCH/accueil.webp","https://i.ibb.co/Bq7Vqpp/background.webp","https://i.ibb.co/RSCMXp6/histoire.webp"],"images2":["https://i.ibb.co/BwwqTmL/gallerie.webp","https://i.ibb.co/tB38tZ2/menu.webp","https://i.ibb.co/qyy9fHH/reservation.webp"],"txtPhotos1":["Version grand écran de la page d\'accueil du site.","Version mobile de la page d\'accueil du site.","Page histoire du site."],"txtPhotos2":["Page gallerie du site.","Page menu du site","Page réservation du site"],"cover":"https://i.ibb.co/2qcrLD8/manago-Cover.png","roles":["Designer","Programmeur"],"technos":["HTML","CSS","JavaScript"]},{"id":"SM","name":"Sous-Marin","type":"creation","date":"2019","txt":["Création d\'un véhicule sous-marin inspiré des pieuvres magnapinnas ( pieuvre qui se retrouve dans les mers profondes )."],"LienYT":"https://www.youtube.com/embed/rfliD0X_8Y0","cover":"https://i.ibb.co/9HTyRnn/sousmarin-Cover.png","images1":["https://i.ibb.co/9HTyRnn/sousmarin-Cover.png"],"txtPhotos1":["Modèle de sous-marin."],"roles":["Concepteur"],"technos":["Maya","Arnold"]},{"id":"OBE","name":"Obélisque","type":"creation","date":"2019","txt":["Cet obélisque est ma première création en 3D avec le logiciel Maya et le moteur de rendu Arnold.","Le style graphique très inspiré du monde de Lovecraft et de elder runes."],"LienYT":"https://www.youtube.com/embed/Xbbpt0oPZFY","images1":["https://i.ibb.co/VNg6Gcq/TP1-Gaudreau-2-0060.webp","https://i.ibb.co/ygwH4Nd/TP1-Gaudreau-1-0001.webp","https://i.ibb.co/12THgfJ/TP1-Gaudreau-2-0200.webp","https://i.ibb.co/rQZWJ37/TP1-Gaudreau-2-0158.webp"],"txtPhotos1":["Frame du render de l\'obélisque.","Frame du render de l\'obélisque.","Frame du render de l\'obélisque.","Frame du render de l\'obélisque."],"cover":"https://i.ibb.co/syvsqKB/obelisque-Cover.png","roles":["Concepteur"],"technos":["Maya","Arnold"]},{"id":"TUTO","name":"Galaxies","type":"creation","date":"2018","txt":["Ce projet avec comme but de créer une affiche d’un personnage ou d’une personnalité connue en suivant un tutoriel Creationshop et de le mettre à notre manière."],"images1":["https://i.ibb.co/NLKBSKN/tuto1.webp"],"images2":["https://i.ibb.co/Lxn2Xhf/mob.webp"],"txtPhotos1":["Vladimir Putin"],"txtPhotos2":["Shigeo Kageyama de Mob Psycho 100."],"cover":"https://i.ibb.co/s5fB3vR/galaxie-Cover.png","roles":["Designer"],"technos":["Photoshop"]},{"id":"MCDO","name":"Anachronisme","type":"creation","date":"2018","txt":["Ce projet avait comme but de créer une publicité en incorporant une compagnie ou objet moderne dans une peinture ou photographie d’une autre époque.","Donc ici un Big Mac de chez McDonald incorporé dans une peinture du 17e siècle."],"images1":["https://i.ibb.co/stCX4TY/MCDO.webp"],"txtPhotos1":["Rendu final du projet."],"cover":"https://i.ibb.co/XzDTBdn/anachronisme-Cover.png","roles":["Designer"],"technos":["Photoshop"]},{"id":"TF","name":"Tempus Fugit","type":"creation","date":"2018","txt":["Court métrage réalisé en équipe de 3 lors d’un cours de multimédia en 5e année du secondaire"],"LienYT":"https://www.youtube.com/embed/jvS9JraJkvU","images1":["https://i.ibb.co/bvpNLnf/Tempus-Fugit.webp","https://i.ibb.co/TBZ9Qjk/Tempus-Fugit2.webp","https://i.ibb.co/1qwb1My/Tempus-Fugi3.webp"],"txtPhotos1":["Première affiche du court métrage.","Deuxième affiche du court métrage.","Troisième affiche du court métrage."],"cover":"https://i.ibb.co/frJJ7Cp/tempusfugit-Cover.png","roles":["Scénariste","Acteur","Designer"],"technos":["Premiere Pro","Photoshop"]}]')}});
//# sourceMappingURL=app.15de3fef.js.map