import{j as o}from"./jsx-runtime.6940b965.js";import{r as i}from"./index.070054a4.js";import{u as j}from"./use-keydown.bb1f91bb.js";import{u as I}from"./use-outside-click.5adb83b9.js";import{R as w}from"./roadmap.6f873a56.js";import{U as C}from"./user.bab2b5ca.js";import{G as b}from"./group.18cd9107.js";import{a as A}from"./http.3e3d4bea.js";import{i as N}from"./jwt.5556697d.js";const T=new Proxy({src:"/_astro/best-practices.50e7851f.svg",width:24,height:24,format:"svg"},{get(e,s,c){return s==="clone"?structuredClone(e):(globalThis.astroAsset.referencedImages.add(e.fsPath),e[s])}}),R=new Proxy({src:"/_astro/clipboard.76d39f96.svg",width:24,height:24,format:"svg"},{get(e,s,c){return s==="clone"?structuredClone(e):(globalThis.astroAsset.referencedImages.add(e.fsPath),e[s])}}),k=new Proxy({src:"/_astro/guide.cc658e25.svg",width:24,height:24,format:"svg"},{get(e,s,c){return s==="clone"?structuredClone(e):(globalThis.astroAsset.referencedImages.add(e.fsPath),e[s])}}),S=new Proxy({src:"/_astro/home.cab14122.svg",width:24,height:24,format:"svg"},{get(e,s,c){return s==="clone"?structuredClone(e):(globalThis.astroAsset.referencedImages.add(e.fsPath),e[s])}}),E=new Proxy({src:"/_astro/video.e6296e1b.svg",width:24,height:24,format:"svg"},{get(e,s,c){return s==="clone"?structuredClone(e):(globalThis.astroAsset.referencedImages.add(e.fsPath),e[s])}}),l=[{id:"home",url:"/",title:"Home",group:"Pages",icon:S.src},{id:"account",url:"/account",title:"Account",group:"Pages",icon:C.src,isProtected:!0},{id:"team",url:"/team",title:"Teams",group:"Pages",icon:b.src,isProtected:!0},{id:"friends",url:"/account/friends",title:"Friends",group:"Pages",icon:b.src,isProtected:!0},{id:"roadmaps",url:"/roadmaps",title:"Roadmaps",group:"Pages",icon:w.src},{id:"account-roadmaps",url:"/account/roadmaps",title:"Custom Roadmaps",group:"Pages",icon:w.src,isProtected:!0},{id:"best-practices",url:"/best-practices",title:"Best Practices",group:"Pages",icon:T.src},{id:"questions",url:"/questions",title:"Questions",group:"Pages",icon:R.src},{id:"guides",url:"/guides",title:"Guides",group:"Pages",icon:k.src},{id:"videos",url:"/videos",title:"Videos",group:"Pages",icon:E.src}];function p(e){const s=N();return!e.isProtected||s}function B(){const e=i.useRef(null),s=i.useRef(null),[c,u]=i.useState(!1),[v,y]=i.useState([]),[n,x]=i.useState(l),[d,g]=i.useState(""),[a,f]=i.useState(0);j("mod_k",()=>{u(!0)}),I(s,()=>{g(""),u(!1)}),i.useEffect(()=>{function t(r){u(!0)}return P(),window.addEventListener("command.k",t),()=>{window.removeEventListener("command.k",t)}},[]),i.useEffect(()=>{!c||!e.current||e.current.focus()},[c]);async function P(){if(v.length>0)return v;const{error:t,response:r}=await A("/pages.json");return r?(y([...l,...r].filter(p)),r):l.filter(p)}return i.useEffect(()=>{if(!d){x(l.filter(p));return}const t=d.trim().toLowerCase();P().then((r=l)=>{const m=r.filter(h=>h.title.toLowerCase().indexOf(t)!==-1).slice(0,10);f(0),x(m)})},[d]),c?o.jsx("div",{className:"fixed left-0 right-0 top-0 z-50 flex h-full justify-center overflow-y-auto overflow-x-hidden bg-black/50",children:o.jsx("div",{className:"relative top-0 h-full w-full max-w-lg p-2 sm:top-20 md:h-auto",children:o.jsxs("div",{className:"relative rounded-lg bg-white shadow",ref:s,children:[o.jsx("input",{ref:e,autoFocus:!0,type:"text",value:d,className:"w-full rounded-t-md border-b p-4 text-sm focus:bg-gray-50 focus:outline-none",placeholder:"Search roadmaps, guides or pages ..",autoComplete:"off",onInput:t=>{const r=t.target.value.trim();g(r)},onKeyDown:t=>{if(t.key==="ArrowDown"){const r=a<n.length-1;f(r?a+1:0)}else if(t.key==="ArrowUp"){const r=a>0;f(r?a-1:n.length-1)}else if(t.key==="Tab")t.preventDefault();else if(t.key==="Escape")g(""),u(!1);else if(t.key==="Enter"){const r=n[a];r&&(window.location.href=r.url)}}}),o.jsx("div",{className:"px-2 py-2",children:o.jsxs("div",{className:"flex flex-col",children:[n.length===0&&o.jsx("div",{className:"p-5 text-center text-sm text-gray-400",children:"No results found"}),n.map((t,r)=>{const m=n[r-1],h=m&&m.group!==t.group;return o.jsxs(i.Fragment,{children:[h&&o.jsx("div",{className:"border-b border-gray-100"}),o.jsxs("a",{className:`flex w-full items-center rounded p-2 text-sm ${r===a?"bg-gray-100":""}`,onMouseOver:()=>f(r),href:t.url,children:[!t.icon&&o.jsx("span",{className:"mr-2 text-gray-400",children:t.group}),t.icon&&o.jsx("img",{alt:t.title,src:t.icon,className:"mr-2 h-4 w-4"}),t.title]})]},t.id)})]})})]})})}):null}export{B as CommandMenu};
