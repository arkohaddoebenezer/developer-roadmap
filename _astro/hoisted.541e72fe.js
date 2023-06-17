import{h as x}from"./http.12b0c277.js";import{i as k}from"./jwt.f0e0aa9c.js";import{b}from"./resource-progress.2af371ab.js";import"./hoisted.f9e32fa0.js";import"./popup.4f9d3eac.js";function $(c){let e=c>>16&255,t=c>>8&255,r=c&255;return`rgb(${e},${t},${r})`}function d(c,e={},t){let r=document.createElementNS("http://www.w3.org/2000/svg",c);for(let s in e)e.hasOwnProperty(s)&&r.setAttribute(s,e[s]);return t&&t.appendChild(r),r}const f=2.7,T=4,E=2,y={black:["#000"],gray:["#000","#333","#666","#999","#ccc","#ddd","#eee"],white:["#fff"],red:["#cf2a27","#ea9999","#eo6666","#cc0000","#990000","#660000"],orange:["#ff9900","#f9cb9c","#f6b26b","#e69138","#b45f06","#783f04"],yellow:["#ffff00","#ffe599","#ffd966","#f1c232","#bf9000","#7f6000"],green:["#009e0f","#b6d7a8","#93c47d","#6aa84f","#38761d","#274e13"],cyan:["#00ffff","#a2c4c9","#76a5af","#45818e","#134f5c","#0c343d"],blue:["#2b78e4","#9fc5f8","#6fa8dc","#597eaa","#085394","#073763"],purple:["#9900ff","#b4a7d6","#8e7cc3","#674ea7","#351c75","#20124d"],pink:["#ff00ff","#d5a6bd","#c27ba0","#a64d79","#741b47","#4c1130"]};class C{constructor(e,t){this.svgRoot=e,this.fontFamily=t,this.canvasRenderingContext2D=document.createElement("canvas").getContext("2d")}render(e,t){let r=e.typeID;r in this?this[r](e,t):console.log(`'${r}' control type not implemented`)}parseColor(e,t){return e===void 0?`rgb(${t})`:$(e)}parseFontProperties(e){var t,r,s;return{style:(t=e.properties)!=null&&t.italic?"italic":"normal",weight:(r=e.properties)!=null&&r.bold?"bold":"normal",size:(s=e.properties)!=null&&s.size?e.properties.size+"px":"13px",family:this.fontFamily}}measureText(e,t){return this.canvasRenderingContext2D.font=t,this.canvasRenderingContext2D.measureText(e)}drawRectangle(e,t){var r,s,o;d("rect",{x:parseInt(e.x)+f/2,y:parseInt(e.y)+f/2,width:parseInt(e.w??e.measuredW)-f,height:parseInt(e.h??e.measuredH)-f,rx:E,fill:this.parseColor((r=e.properties)==null?void 0:r.color,"255,255,255"),"fill-opacity":((s=e.properties)==null?void 0:s.backgroundAlpha)??1,stroke:this.parseColor((o=e.properties)==null?void 0:o.borderColor,"0,0,0"),"stroke-width":f},t)}addText(e,t,r,s){let o=e.properties.text??"",n=parseInt(e.x),a=parseInt(e.y),i=this.parseFontProperties(e),l=this.measureText(o,`${i.style} ${i.weight} ${i.size} ${i.family}`),p=s==="center"?n+(e.w??e.measuredW)/2-l.width/2:n,w=a+e.measuredH/2+l.actualBoundingBoxAscent/2,h=d("text",{x:p,y:w,fill:r,"font-style":i.style,"font-weight":i.weight,"font-size":i.size},t);if(!o.includes("{color:")){let g=d("tspan",{},h);g.textContent=o;return}o.split(/{color:|{color}/).forEach(g=>{if(g.includes("}")){let[u,I]=g.split("}");if(!u.startsWith("#")){let m=parseInt(u.slice(-1));u=isNaN(m)?y[u][0]:y[u][m]}let v=d("tspan",{fill:u},h);v.textContent=I}else{let u=d("tspan",{},h);u.textContent=g}})}TextArea(e,t){this.drawRectangle(e,t)}Canvas(e,t){this.drawRectangle(e,t)}Label(e,t){var r;this.addText(e,t,this.parseColor((r=e.properties)==null?void 0:r.color,"0,0,0"),"left")}TextInput(e,t){var r;this.drawRectangle(e,t),this.addText(e,t,this.parseColor((r=e.properties)==null?void 0:r.textColor,"0,0,0"),"center")}Arrow(e,t){var r,s,o;let n=parseInt(e.x),a=parseInt(e.y),{p0:i,p1:l,p2:p}=e.properties,w;((r=e.properties)==null?void 0:r.stroke)==="dotted"?w="0.8 12":((s=e.properties)==null?void 0:s.stroke)==="dashed"&&(w="28 46");let h={x:(p.x-i.x)*l.x,y:(p.y-i.y)*l.x};d("path",{d:`M${n+i.x} ${a+i.y}Q${n+i.x+h.x+h.y*l.y*3.6} ${a+i.y+h.y+-h.x*l.y*3.6} ${n+p.x} ${a+p.y}`,fill:"none",stroke:this.parseColor((o=e.properties)==null?void 0:o.color,"0,0,0"),"stroke-width":T,"stroke-linecap":"round","stroke-linejoin":"round","stroke-dasharray":w},t)}Icon(e,t){var r;let s=parseInt(e.x),o=parseInt(e.y),n=10;d("circle",{cx:s+n,cy:o+n,r:n,fill:this.parseColor((r=e.properties)==null?void 0:r.color,"0,0,0")},t),e.properties.icon.ID==="check-circle"&&d("path",{d:`M${s+4.5} ${o+n}L${s+8.5} ${o+n+4} ${s+15} ${o+n-2.5}`,fill:"none",stroke:"#fff","stroke-width":3.5,"stroke-linecap":"round","stroke-linejoin":"round"},t)}HRule(e,t){var r,s,o;let n=parseInt(e.x),a=parseInt(e.y),i;((r=e.properties)==null?void 0:r.stroke)==="dotted"?i="0.8, 8":((s=e.properties)==null?void 0:s.stroke)==="dashed"&&(i="18, 30"),d("path",{d:`M${n} ${a}L${n+parseInt(e.w??e.measuredW)} ${a}`,fill:"none",stroke:this.parseColor((o=e.properties)==null?void 0:o.color,"0,0,0"),"stroke-width":f,"stroke-linecap":"round","stroke-linejoin":"round","stroke-dasharray":i},t)}__group__(e,t){var r;const s=((r=e?.properties)==null?void 0:r.controlName)||"";let o=d("g",{...s?{class:"clickable-group","data-group-id":s}:{}},t);e.children.controls.control.sort((n,a)=>n.zOrder-a.zOrder).forEach(n=>{n.x=parseInt(n.x,10)+parseInt(e.x,10),n.y=parseInt(n.y,10)+parseInt(e.y,10),this.render(n,o)})}}async function L(c,e={}){if(e={padding:5,fontFamily:"balsamiq",fontURL:"https://fonts.gstatic.com/s/balsamiqsans/v3/P5sEzZiAbNrN8SB3lQQX7Pncwd4XIA.woff2",...e},e.fontURL){let l=new FontFace(e.fontFamily,`url(${e.fontURL})`);await l.load(),document.fonts.add&&document.fonts.add(l)}let t=c.mockup,r=t.measuredW-t.mockupW-e.padding,s=t.measuredH-t.mockupH-e.padding,o=parseInt(t.mockupW)+e.padding*2,n=parseInt(t.mockupH)+e.padding*2,a=d("svg",{xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",viewBox:`${r} ${s} ${o} ${n}`,style:"font-family: balsamiq"}),i=new C(a,e.fontFamily);return t.controls.control.sort((l,p)=>l.zOrder-p.zOrder).forEach(l=>{i.render(l,a)}),a}class R{resourceId;resourceType;jsonUrl;loaderHTML;containerId;loaderId;constructor(){this.resourceId="",this.resourceType="",this.jsonUrl="",this.loaderHTML=null,this.containerId="resource-svg-wrap",this.loaderId="resource-loader",this.init=this.init.bind(this),this.onDOMLoaded=this.onDOMLoaded.bind(this),this.jsonToSvg=this.jsonToSvg.bind(this),this.handleSvgClick=this.handleSvgClick.bind(this),this.prepareConfig=this.prepareConfig.bind(this),this.switchRoadmap=this.switchRoadmap.bind(this)}get loaderEl(){return document.getElementById(this.loaderId)}get containerEl(){return document.getElementById(this.containerId)}prepareConfig(){if(!this.containerEl)return!1;this.loaderHTML=this.loaderEl.innerHTML;const e=this.containerEl.dataset;return this.resourceType=e.resourceType,this.resourceId=e.resourceId,!0}jsonToSvg(e){return e?this.containerEl?(this.containerEl.innerHTML=this.loaderHTML,fetch(e).then(t=>t.json()).then(t=>L(t,{fontURL:"/fonts/balsamiq.woff2"})).then(t=>{this.containerEl?.replaceChildren(t)}).then(()=>b(this.resourceType,this.resourceId)).catch(t=>{if(!this.containerEl)return;const r=`
          <strong>There was an error.</strong><br>
          
          Try loading the page again. or submit an issue on GitHub with following:<br><br>

          ${t.message} <br /> ${t.stack}
        `;this.containerEl.innerHTML=`<div class="error py-5 text-center text-red-600 mx-auto">${r}</div>`})):null:(console.error("jsonUrl not defined in frontmatter"),null)}trackVisit(){k()&&window.setTimeout(()=>{x("https://api.roadmap.sh/v1-visit",{resourceId:this.resourceId,resourceType:this.resourceType}).then(()=>null)},0)}onDOMLoaded(){if(!this.prepareConfig())return;const t=new URLSearchParams(window.location.search).get("r");this.trackVisit(),t?this.switchRoadmap(`/${t}.json`):this.jsonToSvg(this.resourceType==="roadmap"?`/${this.resourceId}.json`:`/best-practices/${this.resourceId}.json`)}switchRoadmap(e){this.containerEl?.setAttribute("style","");const t=e.split("/").pop()?.replace(".json","");if(window?.history?.pushState){const r=new URL(window.location.href),s=this.resourceType[0];r.searchParams.delete(s),t!==this.resourceId&&r.searchParams.set(s,t),window.history.pushState(null,"",r.toString())}this.jsonToSvg(e)?.then(()=>{})}handleSvgClick(e){const t=e.target?.closest("g")||{},r=t.dataset?t.dataset.groupId:"";if(!r)return;if(e.stopImmediatePropagation(),/^ext_link/.test(r)){const o=r.replace("ext_link:","");o.startsWith("roadmap.sh")||window.fireEvent({category:"RoadmapExternalLink",action:`${this.resourceType} / ${this.resourceId}`,label:o}),window.open(`https://${o}`);return}if(/^json:/.test(r)){const o=r.replace("json:","");this.switchRoadmap(o);return}if(/^check:/.test(r)){window.dispatchEvent(new CustomEvent(`${this.resourceType}.topic.toggle`,{detail:{topicId:r.replace("check:",""),resourceType:this.resourceType,resourceId:this.resourceId}}));return}const s=r.replace(/^\d+-/,"");window.dispatchEvent(new CustomEvent(`${this.resourceType}.topic.click`,{detail:{topicId:s,resourceId:this.resourceId,resourceType:this.resourceType}}))}init(){window.addEventListener("DOMContentLoaded",this.onDOMLoaded),window.addEventListener("click",this.handleSvgClick)}}const S=new R;S.init();class j{constructor(){this.init=this.init.bind(this),this.onScroll=this.onScroll.bind(this),this.shareIconsId="page-share-icons"}get shareIconsEl(){return document.getElementById(this.shareIconsId)}onScroll(){if(window.scrollY<100||window.innerWidth<1050)return this.shareIconsEl.classList.add("hidden"),null;this.shareIconsEl.classList.remove("hidden")}init(){this.shareIconsEl&&window.addEventListener("scroll",this.onScroll,{passive:!0})}}const M=new j;M.init();
