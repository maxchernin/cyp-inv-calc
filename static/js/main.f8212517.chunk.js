(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{12:function(e,t,a){},13:function(e,t,a){},14:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),r=a(2),c=a.n(r);a(12),a(13);function m(e){let{children:t,className:a}=e;return l.a.createElement("div",{className:`card ${a}`},t)}function o(e){let{children:t}=e;return l.a.createElement("div",{className:"card-header"},t)}function s(e){let{children:t}=e;return l.a.createElement("div",{className:"card-content"},t)}function i(e){let{children:t}=e;return l.a.createElement("h2",{className:"card-title"},t)}function u(e){return l.a.createElement("input",e)}function d(e){let{children:t,htmlFor:a}=e;return l.a.createElement("label",{htmlFor:a},t)}function E(e){let{id:t,min:a,max:n,step:r,value:c,onValueChange:m}=e;return l.a.createElement("input",{type:"range",id:t,min:a,max:n,step:r,value:c[0],onChange:e=>m([parseFloat(e.target.value)])})}function p(e){let{value:t,onValueChange:a,children:n}=e;return l.a.createElement("select",{value:t,onChange:e=>a(e.target.value)},n)}function v(e){let{children:t,className:a}=e;return l.a.createElement("div",{className:`select-trigger ${a}`},t)}function h(e){let{children:t}=e;return l.a.createElement("div",{className:"select-content"},t)}function g(e){let{value:t,children:a}=e;return l.a.createElement("option",{value:t},a)}function b(e){let{placeholder:t}=e;return l.a.createElement("span",null,t)}const f=e=>{let{id:t,checked:a,onChange:n}=e;return l.a.createElement("div",{className:"flex items-center"},l.a.createElement("input",{type:"checkbox",id:t,checked:a,onChange:e=>n(e.target.checked),className:"toggle-checkbox"}),l.a.createElement("label",{htmlFor:t,className:"toggle-label"},l.a.createElement("span",{className:"toggle-button"})))},x=e=>new Intl.NumberFormat("en-US").format(Math.round(e)),N=(e,t)=>{return 12*e/t*100},y=e=>{const{totalPrice:t,upfrontPercentage:a,constructionMonths:n,appreciationRate:l,years:r,occupancyRate:c,monthlyRent:m,monthlyManagementFee:o,transferTaxRate:s,vatRate:i,israeliTaxRate:u,isNewApartment:d}=e,E=t*(a/100),p=(t-E)/n;let v=E;for(let P=1;P<=n;P++)v+=p;let h=t,g=0,b=0,f=0,x=0,N=0;const y=Math.max(0,r-n/12);for(let P=0;P<y;P++){const e=12*m*(c/100),t=12*o,a=e*(i/100)/(1+i/100);g+=e,b+=t,x+=u/100*(e-t),P>0&&(f+=a),h*=1+l/100}d||(v+=N=t*(s/100));const R=h-t,T=g+R+f-b-x;return{upfrontPayment:E,monthlyPayment:p,totalInvestment:v,finalValue:h,totalRentalIncome:g,totalManagementFees:b,totalVatReturns:f,totalIsraeliTax:x,totalAppreciation:R,totalReturn:T,roi:T/v*100,transferTax:N}},R=e=>{let{label:t,id:a,value:n,min:r,max:c,step:m,onChange:o,unit:s="%"}=e;return l.a.createElement("div",{className:"flex flex-col space-y-1.5"},l.a.createElement(d,{htmlFor:a},t," ",l.a.createElement("span",{className:"font-bold"},n,s)),l.a.createElement(E,{id:a,min:r,max:c,step:m,value:[n],onValueChange:e=>{let[t]=e;return o(t)}}))};var T=function(){const[e,t]=Object(n.useState)({totalPrice:3e5,upfrontPercentage:30,constructionMonths:24}),[a,r]=Object(n.useState)({appreciationRate:3,years:7,occupancyRate:100,monthlyRent:1e3,monthlyManagementFee:100,transferTaxRate:8,vatRate:19,israeliTaxRate:15,isNewApartment:!0}),c=(e,a)=>{t(t=>({...t,[e]:a}))},E=(e,t)=>{r(a=>({...a,[e]:t}))},T=Object(n.useMemo)(()=>y({...e,...a}),[e,a]),P=Object(n.useMemo)(()=>N(a.monthlyRent,e.totalPrice),[a.monthlyRent,e.totalPrice]);return l.a.createElement("div",{className:"space-y-4"},l.a.createElement(m,{className:"bg-gradient-to-r from-blue-500 to-purple-500 text-white"},l.a.createElement(o,null,l.a.createElement(i,{className:"text-3xl font-bold"},"Cyprus Apartment Investment Calculator for Israeli Investors")),l.a.createElement(s,null,l.a.createElement("div",{className:"space-y-6"},l.a.createElement("div",null,l.a.createElement("h3",{className:"text-xl font-semibold mb-2 border-b-2 pb-2"},"Property Details"),l.a.createElement("div",{className:"grid grid-cols-3 gap-4"},l.a.createElement("div",{className:"flex flex-col space-y-1.5"},l.a.createElement(d,{htmlFor:"totalPrice"},"Total Apartment Price (\u20ac)"),l.a.createElement(u,{id:"totalPrice",value:e.totalPrice,onChange:e=>c("totalPrice",Number(e.target.value)),className:"bg-white text-black"})),l.a.createElement(R,{label:"Upfront Payment",id:"upfrontPercentage",value:e.upfrontPercentage,min:0,max:100,step:1,onChange:e=>c("upfrontPercentage",e)}),l.a.createElement("div",{className:"flex flex-col space-y-1.5"},l.a.createElement(d,{htmlFor:"constructionMonths"},"Construction Period"),l.a.createElement(p,{value:e.constructionMonths.toString(),onValueChange:e=>c("constructionMonths",Number(e))},[12,24,36,48,60].map(e=>l.a.createElement("option",{key:e,value:e.toString()},e/12," years")))))),l.a.createElement("div",null,l.a.createElement("h3",{className:"text-xl font-semibold mb-2 border-b-2 pb-2"},"Investment Parameters"),l.a.createElement("div",{className:"grid grid-cols-3 gap-4"},l.a.createElement("div",{className:"flex flex-col space-y-1.5"},l.a.createElement(d,null,"Annual Rental Yield"),l.a.createElement("div",{className:"font-bold"},P.toFixed(2),"%")),l.a.createElement(R,{label:"Annual Appreciation Rate",id:"appreciationRate",value:a.appreciationRate,min:0,max:10,step:.1,onChange:e=>E("appreciationRate",e)}),l.a.createElement("div",{className:"flex flex-col space-y-1.5"},l.a.createElement(d,{htmlFor:"years"},"Investment Period (Years)"),l.a.createElement(p,{value:a.years.toString(),onValueChange:e=>E("years",Number(e))},l.a.createElement(v,{className:"bg-white text-black"},l.a.createElement(b,{placeholder:"Select period"})),l.a.createElement(h,null,[...Array(20)].map((e,t)=>l.a.createElement(g,{key:t+1,value:(t+1).toString()},t+1," years"))))))),l.a.createElement("div",null,l.a.createElement("h3",{className:"text-xl font-semibold mb-2 border-b-2 pb-2"},"Rental Details"),l.a.createElement("div",{className:"grid grid-cols-3 gap-4"},l.a.createElement("div",{className:"flex flex-col space-y-1.5"},l.a.createElement(d,{htmlFor:"occupancyRate"},"Annual Occupancy Rate (%)"),l.a.createElement(u,{id:"occupancyRate",type:"number",value:a.occupancyRate,onChange:e=>E("occupancyRate",Number(e.target.value)),min:0,max:100,step:.1,className:"bg-white text-black"})),l.a.createElement("div",{className:"flex flex-col space-y-1.5"},l.a.createElement(d,{htmlFor:"monthlyRent"},"Estimated Monthly Rent (\u20ac)"),l.a.createElement(u,{id:"monthlyRent",type:"number",value:a.monthlyRent,onChange:e=>E("monthlyRent",Number(e.target.value)),className:"bg-white text-black"})),l.a.createElement("div",{className:"flex flex-col space-y-1.5"},l.a.createElement(d,{htmlFor:"monthlyManagementFee"},"Monthly Management Fee (\u20ac)"),l.a.createElement(u,{id:"monthlyManagementFee",type:"number",value:a.monthlyManagementFee,onChange:e=>E("monthlyManagementFee",Number(e.target.value)),className:"bg-white text-black"})))),l.a.createElement("div",null,l.a.createElement("h3",{className:"text-xl font-semibold mb-2 border-b-2 pb-2"},"Taxes"),l.a.createElement("div",{className:"grid grid-cols-3 gap-4"},l.a.createElement("div",{className:"flex flex-col space-y-1.5"},l.a.createElement(d,null,"New Apartment"),l.a.createElement(f,{id:"isNewApartment",checked:a.isNewApartment,onChange:e=>E("isNewApartment",e)})),a.isNewApartment?l.a.createElement("div",{className:"flex flex-col space-y-1.5"},l.a.createElement(d,null,"VAT Rate"),l.a.createElement("div",{className:"font-bold"},a.vatRate,"%")):l.a.createElement(R,{label:"Transfer Tax Rate",id:"transferTaxRate",value:a.transferTaxRate,min:0,max:15,step:.1,onChange:e=>E("transferTaxRate",e)}),l.a.createElement("div",{className:"flex flex-col space-y-1.5"},l.a.createElement(d,null,"Israeli Tax Rate"),l.a.createElement("div",{className:"font-bold"},a.israeliTaxRate,"%"))))))),l.a.createElement(m,{className:"bg-gradient-to-r from-green-500 to-teal-500 text-white"},l.a.createElement(o,null,l.a.createElement(i,{className:"text-3xl font-bold"},"Investment Returns for ",a.years," Years")),l.a.createElement(s,null,l.a.createElement("div",{className:"space-y-4"},l.a.createElement("div",null,l.a.createElement("h3",{className:"text-xl font-semibold mb-2 border-b-2 pb-2"},"Initial Costs"),l.a.createElement("div",{className:"grid grid-cols-3 gap-4"},l.a.createElement("div",null,"Upfront Payment: \u20ac",x(T.upfrontPayment)),l.a.createElement("div",null,"Monthly Contractor Return Payment: \u20ac",x(T.monthlyPayment)),l.a.createElement("div",null,"Transfer Tax: \u20ac",x(T.transferTax)),l.a.createElement("div",null,"VAT: \u20ac",x(e.totalPrice*a.vatRate/100)))),l.a.createElement("hr",{className:"border-t-2 border-white"}),l.a.createElement("div",null,l.a.createElement("h3",{className:"text-xl font-semibold mb-2 border-b-2 pb-2"},"Investment Overview"),l.a.createElement("div",{className:"grid grid-cols-3 gap-4"},l.a.createElement("div",null,"Total Investment: \u20ac",x(T.totalInvestment)),l.a.createElement("div",null,"Total Investment Inc. VAT: \u20ac",x(T.totalInvestment+e.totalPrice*a.vatRate/100)),l.a.createElement("div",null,"Final Property Value: \u20ac",x(T.finalValue)),l.a.createElement("div",null,"Total Appreciation: \u20ac",x(T.totalAppreciation)))),l.a.createElement("hr",{className:"border-t-2 border-white"}),l.a.createElement("div",null,l.a.createElement("h3",{className:"text-xl font-semibold mb-2 border-b-2 pb-2"},"Rental Income and Expenses"),l.a.createElement("div",{className:"grid grid-cols-3 gap-4"},l.a.createElement("div",null,"Total Rental Income: \u20ac",x(T.totalRentalIncome)),l.a.createElement("div",null,"Management Fees: \u20ac",x(T.totalManagementFees)),l.a.createElement("div",null,"VAT Returns: \u20ac",x(T.totalVatReturns)))),l.a.createElement("hr",{className:"border-t-2 border-white"}),l.a.createElement("div",null,l.a.createElement("h3",{className:"text-xl font-semibold mb-2 border-b-2 pb-2"},"Taxes and Returns"),l.a.createElement("div",{className:"grid grid-cols-3 gap-4"},l.a.createElement("div",null,"Israeli Tax: \u20ac",x(T.totalIsraeliTax)),l.a.createElement("div",null,"Total Return: \u20ac",x(T.totalReturn)),l.a.createElement("div",null,"ROI: ",T.roi.toFixed(2),"%")))))))};var P=function(){return l.a.createElement("div",{className:"App"},l.a.createElement("header",{className:"App-header"},l.a.createElement("h1",null,"Cyprus Apartment Investment Calculator")),l.a.createElement("main",null,l.a.createElement(T,null)))};var F=e=>{e&&e instanceof Function&&a.e(3).then(a.bind(null,15)).then(t=>{let{getCLS:a,getFID:n,getFCP:l,getLCP:r,getTTFB:c}=t;a(e),n(e),l(e),r(e),c(e)})};c.a.createRoot(document.getElementById("root")).render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(P,null))),F()},3:function(e,t,a){e.exports=a(14)}},[[3,1,2]]]);
//# sourceMappingURL=main.f8212517.chunk.js.map