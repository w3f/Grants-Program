"use strict";(self.webpackChunkgrants=self.webpackChunkgrants||[]).push([[94658],{7812:(e,t,a)=>{function i(e,t){e.accDescr&&t.setAccDescription?.(e.accDescr),e.accTitle&&t.setAccTitle?.(e.accTitle),e.title&&t.setDiagramTitle?.(e.title)}a.d(t,{S:()=>i}),(0,a(83082).K2)(i,"populateCommonDb")},94658:(e,t,a)=>{a.d(t,{diagram:()=>b});var i=a(7812),n=a(10563),r=a(73944),l=a(83082),s=a(78731),o=a(20007),c=l.UI.pie,p={sections:new Map,showData:!1,config:c},d=p.sections,g=p.showData,u=structuredClone(c),h=(0,l.K2)((()=>structuredClone(u)),"getConfig"),m=(0,l.K2)((()=>{d=new Map,g=p.showData,(0,l.IU)()}),"clear"),f=(0,l.K2)((({label:e,value:t})=>{d.has(e)||(d.set(e,t),l.Rm.debug(`added new section: ${e}, with value: ${t}`))}),"addSection"),S=(0,l.K2)((()=>d),"getSections"),x=(0,l.K2)((e=>{g=e}),"setShowData"),w=(0,l.K2)((()=>g),"getShowData"),D={getConfig:h,clear:m,setDiagramTitle:l.ke,getDiagramTitle:l.ab,setAccTitle:l.SV,getAccTitle:l.iN,setAccDescription:l.EI,getAccDescription:l.m7,addSection:f,getSections:S,setShowData:x,getShowData:w},T=(0,l.K2)(((e,t)=>{(0,i.S)(e,t),t.setShowData(e.showData),e.sections.map(t.addSection)}),"populateDb"),$={parse:(0,l.K2)((async e=>{const t=await(0,s.qg)("pie",e);l.Rm.debug(t),T(t,D)}),"parse")},y=(0,l.K2)((e=>`\n  .pieCircle{\n    stroke: ${e.pieStrokeColor};\n    stroke-width : ${e.pieStrokeWidth};\n    opacity : ${e.pieOpacity};\n  }\n  .pieOuterCircle{\n    stroke: ${e.pieOuterStrokeColor};\n    stroke-width: ${e.pieOuterStrokeWidth};\n    fill: none;\n  }\n  .pieTitleText {\n    text-anchor: middle;\n    font-size: ${e.pieTitleTextSize};\n    fill: ${e.pieTitleTextColor};\n    font-family: ${e.fontFamily};\n  }\n  .slice {\n    font-family: ${e.fontFamily};\n    fill: ${e.pieSectionTextColor};\n    font-size:${e.pieSectionTextSize};\n    // fill: white;\n  }\n  .legend text {\n    fill: ${e.pieLegendTextColor};\n    font-family: ${e.fontFamily};\n    font-size: ${e.pieLegendTextSize};\n  }\n`),"getStyles"),C=(0,l.K2)((e=>{const t=[...e.entries()].map((e=>({label:e[0],value:e[1]}))).sort(((e,t)=>t.value-e.value));return(0,o.rLf)().value((e=>e.value))(t)}),"createPieArcs"),b={parser:$,db:D,renderer:{draw:(0,l.K2)(((e,t,a,i)=>{l.Rm.debug("rendering pie chart\n"+e);const s=i.db,c=(0,l.D7)(),p=(0,n.$t)(s.getConfig(),c.pie),d=18,g=450,u=g,h=(0,r.D)(t),m=h.append("g");m.attr("transform","translate(225,225)");const{themeVariables:f}=c;let[S]=(0,n.I5)(f.pieOuterStrokeWidth);S??=2;const x=p.textPosition,w=Math.min(u,g)/2-40,D=(0,o.JLW)().innerRadius(0).outerRadius(w),T=(0,o.JLW)().innerRadius(w*x).outerRadius(w*x);m.append("circle").attr("cx",0).attr("cy",0).attr("r",w+S/2).attr("class","pieOuterCircle");const $=s.getSections(),y=C($),b=[f.pie1,f.pie2,f.pie3,f.pie4,f.pie5,f.pie6,f.pie7,f.pie8,f.pie9,f.pie10,f.pie11,f.pie12],k=(0,o.UMr)(b);m.selectAll("mySlices").data(y).enter().append("path").attr("d",D).attr("fill",(e=>k(e.data.label))).attr("class","pieCircle");let K=0;$.forEach((e=>{K+=e})),m.selectAll("mySlices").data(y).enter().append("text").text((e=>(e.data.value/K*100).toFixed(0)+"%")).attr("transform",(e=>"translate("+T.centroid(e)+")")).style("text-anchor","middle").attr("class","slice"),m.append("text").text(s.getDiagramTitle()).attr("x",0).attr("y",-200).attr("class","pieTitleText");const v=m.selectAll(".legend").data(k.domain()).enter().append("g").attr("class","legend").attr("transform",((e,t)=>"translate(216,"+(22*t-22*k.domain().length/2)+")"));v.append("rect").attr("width",d).attr("height",d).style("fill",k).style("stroke",k),v.data(y).append("text").attr("x",22).attr("y",14).text((e=>{const{label:t,value:a}=e.data;return s.getShowData()?`${t} [${a}]`:t}));const A=512+Math.max(...v.selectAll("text").nodes().map((e=>e?.getBoundingClientRect().width??0)));h.attr("viewBox",`0 0 ${A} 450`),(0,l.a$)(h,g,A,p.useMaxWidth)}),"draw")},styles:y}}}]);