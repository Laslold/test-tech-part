"use strict";(self.webpackChunktest_tech_part=self.webpackChunktest_tech_part||[]).push([[704],{716:function(e,a,i){i.d(a,{Z:function(){return m}});var c=i(2791),s=i(9277),r={items:"card_items__lHv-2",item:"card_item__tPrhe",image:"card_image__FVsct",wrapp:"card_wrapp__ybVkS",icon:"card_icon__OHTrb",isActiveIcon:"card_isActiveIcon__+ra94 card_icon__OHTrb",card:"card_card__TtvCw",cardInfo:"card_cardInfo__AaanH",carName:"card_carName__dWY7-",mark:"card_mark__Nhemc",descript:"card_descript__btbB-",company:"card_company__VHBON",tech:"card_tech__V2Xak",model:"card_model__5Yb6A"},n=i(6856),d=i(184),l=function(e){var a=e.itemData,i=e.handleClick,c=e.onFavorClick,l=e.isFavorite,t=a.make,o=a.id,_=a.img,m=a.model,v=a.year,h=a.type,x=a.accessories,u=a.rentalPrice,j=a.rentalCompany,f=a.address.split(",").splice(1);return(0,d.jsxs)("li",{className:r.item,children:[(0,d.jsx)("div",{className:r.image,children:(0,d.jsx)("img",{src:_,alt:m})}),(0,d.jsx)("div",{onClick:function(){return c(a,l?"remove":"add")},children:l?(0,d.jsx)(n.Yqy,{className:r.isActiveIcon}):(0,d.jsx)(n.iqB,{className:r.icon})}),(0,d.jsxs)("div",{className:r.card,children:[(0,d.jsxs)("div",{className:r.cardInfo,children:[(0,d.jsxs)("div",{className:r.carName,children:[(0,d.jsxs)("div",{children:[t," "]}),(0,d.jsxs)("div",{className:r.mark,children:[m,","]}),(0,d.jsxs)("div",{children:[" ",v]})]}),(0,d.jsx)("div",{className:r.carPrice,children:u})]}),(0,d.jsxs)("div",{className:r.descript,children:[(0,d.jsxs)("div",{className:r.company,children:[(0,d.jsxs)("div",{children:[f," "]}),(0,d.jsx)("div",{children:j})]}),(0,d.jsxs)("div",{className:r.tech,children:[(0,d.jsx)("div",{children:h}),(0,d.jsx)("div",{className:r.model,children:m}),(0,d.jsx)("div",{className:r.model,children:o}),(0,d.jsx)("div",{children:x})]})]})]}),(0,d.jsx)(s.Z,{onClick:function(){return i(a)},variant:"primary",children:"Learn more"})]})},t=(0,c.memo)(l),o=i(9434),_=i(8786),m=function(e){var a=e.handleClick,i=e.items,c=e.onFavorClick,s=(0,o.v9)(_.o).map((function(e){return e.id})),n=i.map((function(e){return(0,d.jsx)(t,{itemData:e,handleClick:a,onFavorClick:c,isFavorite:s.includes(e.id)},e.id)}));return(0,d.jsx)("ul",{className:r.items,children:n})}},1109:function(e,a,i){i.d(a,{Z:function(){return N}});i(2791);var c="modalcard_item__xppnW",s="modalcard_image__2xdfg",r="modalcard_cardInfo__bSsem",n="modalcard_carName__fOrh-",d="modalcard_mark__JVxeg",l="modalcard_company__WEzIw",t="modalcard_description__AnqKX",o="modalcard_acces__JMUzP",_="modalcard_itemsAccsse__j8xkJ",m="modalcard_itemAccess__Dp+ym",v="modalcard_rental__rDAI7",h="modalcard_tech__+wso0",x="modalcard_itemRental__hPn54",u="modalcard_itemsRental__5zY0d",j="modalcard_dist__hrkDE",f=i(9277),p=i(184),N=function(e){var a=e.content,i=a.make,N=a.id,g=a.img,k=a.model,C=a.year,y=a.type,P=a.description,b=a.fuelConsumption,w=a.engineSize,Z=a.accessories,H=a.functionalities,I=a.rentalPrice,A=a.address,S=a.rentalConditions,B=a.mileage,E=A.split(",").splice(1),O=S.split("\n").map((function(e){return(0,p.jsx)("li",{className:x,children:e},e)})),T=Z.map((function(e){return(0,p.jsx)("li",{className:m,children:e},e)})),F=H.map((function(e){return(0,p.jsx)("li",{className:m,children:e},e)})),z=B.toLocaleString("en-US");return(0,p.jsxs)("div",{className:c,children:[(0,p.jsx)("div",{className:s,children:(0,p.jsx)("img",{src:g,alt:k})}),(0,p.jsxs)("div",{className:r,children:[(0,p.jsxs)("div",{className:n,children:[(0,p.jsxs)("div",{children:[i," "]}),(0,p.jsxs)("div",{className:d,children:[" ",k," "]}),(0,p.jsxs)("div",{children:[", ",C]})]}),(0,p.jsxs)("div",{className:l,children:[(0,p.jsxs)("div",{children:[E," "]}),(0,p.jsxs)("div",{children:["Id: ",N]}),(0,p.jsxs)("div",{children:["Year: ",C]}),(0,p.jsxs)("div",{children:["Type: ",y," "]}),(0,p.jsxs)("div",{children:["Fuel Consumption: ",b]}),(0,p.jsxs)("div",{children:["Engine Size: ",w]})]}),(0,p.jsx)("div",{className:t,children:P}),(0,p.jsxs)("div",{className:o,children:[(0,p.jsx)("h3",{children:"Accessories and functionalities:"}),(0,p.jsxs)("div",{children:[(0,p.jsx)("ul",{className:_,children:T}),(0,p.jsx)("ul",{className:_,children:F})]})]}),(0,p.jsxs)("div",{className:v,children:[(0,p.jsx)("h3",{children:"Rental Conditions:"}),(0,p.jsx)("div",{className:h,children:(0,p.jsx)("div",{children:(0,p.jsx)("ul",{className:u,children:O})})}),(0,p.jsxs)("div",{className:j,children:[(0,p.jsxs)("div",{children:["Mileage: ",(0,p.jsx)("span",{children:z})]}),(0,p.jsxs)("div",{children:["Price: ",(0,p.jsx)("span",{children:I})]})]})]}),(0,p.jsx)(f.Z,{variant:"primary",onClick:function(){window.location.href="tel:".concat("380730000000")},children:"Rental car"})]})]})}},360:function(e,a,i){i.d(a,{Z:function(){return _}});var c=i(4164),s=i(2791),r=i(6053),n="modal_overlay__fCMjT",d="modal_modal__Nszx8",l="modal_modalClose__K3DHA",t=i(184),o=document.getElementById("modal-root"),_=function(e){var a=e.close,i=e.children;(0,s.useEffect)((function(){return document.addEventListener("keydown",_),function(){return document.removeEventListener("keydown",_)}}));var _=function(e){var i=e.code,c=e.target,s=e.currentTarget;"Escape"!==i&&c!==s||a()};return(0,c.createPortal)((0,t.jsx)("div",{className:n,onClick:_,children:(0,t.jsxs)("div",{className:d,children:[(0,t.jsx)(r.nfZ,{className:l,onClick:a}),i]})}),o)}},2704:function(e,a,i){i.r(a),i.d(a,{default:function(){return x}});var c=i(9439),s=i(2791),r={heroWrap:"favoritePage_heroWrap__SrZra",overlay:"favoritePage_overlay__tvyNt",ftcoBg:"favoritePage_ftcoBg__kfyGA",container:"favoritePage_container__plIXO",row:"favoritePage_row__Cfejz",col:"favoritePage_col__4bU6k",textBox:"favoritePage_textBox__bxB5c",sliderText:"favoritePage_sliderText__qfGDo",sectionSl:"favoritePage_sectionSl__zTX8K",subheading:"favoritePage_subheading__ya4tw",sectionHr:"favoritePage_sectionHr__K1V57",colHr:"favoritePage_colHr__H2EjW"},n=i(716),d=i(9434),l=i(8786),t=i(2671),o=i(360),_=i(1109),m=i(7945),v=i.n(m),h=(i(4655),i(184)),x=function(){var e=(0,d.v9)(l.o),a=(0,d.I0)(),i=(0,s.useState)({isOpen:!1,content:{}}),m=(0,c.Z)(i,2),x=m[0],u=m[1];(0,s.useEffect)((function(){v().init({duration:2e3})}),[]);var j=(0,s.useCallback)((function(e){a((0,t.Od)(e.id))}),[a]),f=(0,s.useCallback)((function(e){u({isOpen:!0,content:e})}),[u]),p=(0,s.useCallback)((function(){u({content:{},isOpen:!1})}),[u]),N=x.isOpen,g=x.content;return(0,h.jsxs)(h.Fragment,{children:[(0,h.jsx)("div",{className:r.sectionHr,children:(0,h.jsx)("div",{className:r.colHr,children:(0,h.jsx)("div",{className:r.textBox,children:(0,h.jsx)("h1",{"data-aos":"fade-down",className:r.sliderText,children:"Your favorite cars"})})})}),(0,h.jsx)("div",{"data-aos":"fade-up",className:r.sectionSl,children:(0,h.jsx)("div",{className:r.servicesWrapSl,children:(0,h.jsx)("div",{children:(0,h.jsx)(n.Z,{onFavorClick:j,handleClick:f,items:e})})})}),N&&(0,h.jsx)(o.Z,{close:p,children:(0,h.jsx)(_.Z,{content:g})})]})}},8786:function(e,a,i){i.d(a,{o:function(){return c}});var c=function(e){return e.favoriteCars.cars}},9277:function(e,a,i){i.d(a,{Z:function(){return d}});var c=i(1413),s=i(4925),r=i(184),n=["children","variant"],d=function(e){var a=e.children,i=e.variant,d=void 0===i?"none":i,l=(0,s.Z)(e,n);return(0,r.jsx)("button",(0,c.Z)((0,c.Z)({className:d},l),{},{children:a}))}}}]);
//# sourceMappingURL=704.425ce740.chunk.js.map