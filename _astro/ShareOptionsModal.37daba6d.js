import{c as U}from"./createLucideIcon.3c9fdece.js";import{j as e}from"./jsx-runtime.6940b965.js";import{r as x}from"./index.070054a4.js";import{u as O}from"./use-toast.dbd347db.js";import{c as w}from"./classname.fdb4949b.js";import{a as P,b as H}from"./http.408ee04f.js";import{g as ie}from"./jwt.ab9b7b25.js";import{u as Q}from"./use-copy-text.77785bb1.js";import{C as X,T as ce,F as de,L as oe}from"./twitter.f2cdd55b.js";import{C as Z}from"./copy.2caf0f52.js";import{U as E}from"./users-2.dc7091e7.js";import{U as ee}from"./users.9673a18c.js";import{C as me}from"./check-circle.045c0bed.js";import{M as W}from"./Modal.f242e82e.js";import{L as q}from"./loader-2.7ee93c0d.js";const he=U("ArrowLeftRight",[["path",{d:"M8 3 4 7l4 4",key:"9rb6wj"}],["path",{d:"M4 7h16",key:"6tx8e3"}],["path",{d:"m16 21 4-4-4-4",key:"siv7j2"}],["path",{d:"M20 17H4",key:"h6l3hr"}]]),se=U("Globe2",[["path",{d:"M21.54 15H17a2 2 0 0 0-2 2v4.54",key:"1djwo0"}],["path",{d:"M7 3.34V5a3 3 0 0 0 3 3v0a2 2 0 0 1 2 2v0c0 1.1.9 2 2 2v0a2 2 0 0 0 2-2v0c0-1.1.9-2 2-2h3.17",key:"1fi5u6"}],["path",{d:"M11 21.95V18a2 2 0 0 0-2-2v0a2 2 0 0 1-2-2v-1a2 2 0 0 0-2-2H2.05",key:"xsiumc"}],["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}]]),te=U("Lock",[["rect",{width:"18",height:"11",x:"3",y:"11",rx:"2",ry:"2",key:"1w4ew1"}],["path",{d:"M7 11V7a5 5 0 0 1 10 0v4",key:"fwvmzm"}]]),Oe=U("MoreVertical",[["circle",{cx:"12",cy:"12",r:"1",key:"41hilf"}],["circle",{cx:"12",cy:"5",r:"1",key:"gxeob9"}],["circle",{cx:"12",cy:"19",r:"1",key:"lyex9k"}]]),xe=U("UserPlus2",[["path",{d:"M14 19a6 6 0 0 0-12 0",key:"vej9p1"}],["circle",{cx:"8",cy:"9",r:"4",key:"143rtg"}],["line",{x1:"19",x2:"19",y1:"8",y2:"14",key:"1bvyxn"}],["line",{x1:"22",x2:"16",y1:"11",y2:"11",key:"1shjgl"}]]);function ae(m){const{user:s,onClick:a,isSelected:t}=m;return e.jsxs("button",{className:w("relative flex w-full items-center gap-2.5 rounded-lg border p-2.5",t&&"border-gray-500 bg-gray-300 text-black"),onClick:a,children:[e.jsx("img",{src:s.avatar?`https://dodrc8eu8m09s.cloudfront.net/avatars/${s.avatar}`:"/images/default-avatar.png",alt:s.name||"",className:"relative top-[1px] h-10 w-10 shrink-0 rounded-full"}),e.jsxs("div",{className:"inline-grid w-full",children:[e.jsx("h3",{className:"truncate text-left font-semibold",children:s.name}),e.jsx("p",{className:w("truncate text-left text-sm text-gray-500",t&&"text-gray-700"),children:s.email})]})]})}function ge(m){const s=ie()?.id,{setFriends:a,friends:t,sharedFriendIds:c,setSharedFriendIds:d}=m,i=O(),{isCopied:n,copyText:b}=Q(),[g,p]=x.useState(!0),[l,o]=x.useState(!1);async function r(){if(t.length>0)return;p(!0);const{response:h,error:y}=await P("https://api.roadmap.sh/v1-list-friends");if(y||!h){i.error(y?.message||"Something went wrong");return}a(h.filter(N=>N.status==="accepted"))}x.useEffect(()=>{r().finally(()=>{p(!1)})},[]);const u=g&&e.jsx("ul",{className:"mt-2 grid grid-cols-3 gap-1.5",children:[...Array(3)].map((h,y)=>e.jsxs("li",{className:"flex animate-pulse items-center gap-2.5 rounded-md border p-2",children:[e.jsx("div",{className:"relative top-[1px] h-10 w-10 shrink-0 rounded-full bg-gray-200"}),e.jsxs("div",{className:"inline-grid w-full",children:[e.jsx("div",{className:"h-5 w-2/4 rounded bg-gray-200"}),e.jsx("div",{className:"mt-1 h-5 w-3/4 rounded bg-gray-200"})]})]},y))}),I=`https://roadmap.sh/befriend?u=${s}`;return e.jsxs(e.Fragment,{children:[(t.length>0||g)&&e.jsxs("div",{className:"flex items-center justify-between gap-2",children:[e.jsx("p",{className:"text-sm",children:"Select Friends to share the roadmap with"}),e.jsxs("label",{className:"flex items-center gap-2 text-sm",children:[e.jsx("input",{type:"checkbox",checked:c.length===t.length,onChange:h=>{h.target.checked?d(t.map(y=>y.userId)):d([])}}),e.jsx("span",{className:"text-sm",children:"Select all"})]})]}),u,t.length>0&&!g&&e.jsxs(e.Fragment,{children:[e.jsx("ul",{className:"mt-2 grid grid-cols-3 gap-1.5",children:t.map(h=>{const y=c?.includes(h.userId);return e.jsx("li",{children:e.jsx(ae,{user:{name:h.name,avatar:h.avatar,email:h.email},isSelected:y,onClick:()=>{d(y?c.filter(N=>N!==h.userId):[...c,h.userId])}})},h.userId)})}),!l&&e.jsxs("p",{className:"mt-6 text-sm text-gray-600",children:["Don't see a Friend?"," ",e.jsx("button",{onClick:()=>{o(!0)},className:"font-semibold text-gray-900 underline",children:"Add them"})]}),l&&e.jsxs("div",{className:"-mx-4 -mb-4 mt-6 border-t bg-gray-50 px-4 py-4",children:[e.jsxs("p",{className:"mb-1.5 flex items-center gap-1 text-sm text-gray-800",children:[e.jsx(xe,{className:"text-gray-500",size:"20px"}),"Share the link below with your friends to invite them"]}),e.jsxs("div",{className:"relative",children:[e.jsx("input",{readOnly:!0,type:"text",value:I,onClick:h=>{h.preventDefault(),h.target.select(),b(I)},className:w("w-full rounded-md border px-2 py-2 text-sm focus:shadow-none focus:outline-0",{"border-green-400 bg-green-50":n})}),e.jsx("button",{onClick:()=>b(I),className:"absolute bottom-0 right-0 top-0 flex items-center px-2.5",children:n?e.jsxs("span",{className:"flex items-center gap-1 text-sm font-medium text-green-600",children:[e.jsx(X,{className:"text-green-600",size:"18px"})," Copied"]}):e.jsx(Z,{className:"text-gray-400",size:"18px"})})]})]})]}),t.length===0&&!g&&e.jsxs("div",{className:"flex h-full flex-grow flex-col items-center justify-center rounded-md border bg-gray-50 text-center",children:[e.jsx(E,{className:"mb-3 h-10 w-10 text-gray-300"}),e.jsxs("p",{className:"font-semibold text-gray-500",children:["You do not have any friends yet. ",e.jsx("br",{})," ",e.jsx("a",{target:"_blank",className:"underline underline-offset-2",href:"/account/friends",children:"Invite your friends to share roadmaps with."})]})]})]})}function ue(m){const{teams:s,setTeams:a,selectedTeamId:t,setSelectedTeamId:c,isTeamMembersLoading:d,setIsTeamMembersLoading:i,onTeamChange:n}=m,b=O(),[g,p]=x.useState(!0);async function l(){if(s.length>0)return;const{response:r,error:u}=await P("https://api.roadmap.sh/v1-get-user-teams");if(u||!r){b.error(u?.message||"Something went wrong");return}a(r.filter(v=>["admin","manager"].includes(v.role)))}x.useEffect(()=>{l().finally(()=>p(!1))},[]);const o=g&&e.jsx("ul",{className:"mt-2 grid grid-cols-3 gap-1.5",children:[...Array(3)].map((r,u)=>e.jsx("li",{children:e.jsxs("div",{className:"relative flex w-full items-center gap-2 rounded-md border p-2",children:[e.jsx("div",{className:"h-6 w-6 shrink-0 animate-pulse rounded-full bg-gray-200"}),e.jsx("div",{className:"inline-grid w-full",children:e.jsx("div",{className:"h-4 animate-pulse rounded bg-gray-200"})})]})},u))});return e.jsxs(e.Fragment,{children:[(s.length>0||g)&&e.jsx("p",{className:"text-sm",children:"Select a team to transfer this roadmap to"}),o,s.length>0&&!g&&e.jsx("ul",{className:"mt-2 grid grid-cols-3 gap-1.5",children:s.map(r=>{const u=r._id===t;return e.jsx("li",{children:e.jsxs("button",{className:w("relative flex w-full items-center gap-2.5 rounded-lg border p-2.5 disabled:cursor-not-allowed disabled:opacity-70",u&&"border-gray-500 bg-gray-100 text-black"),disabled:d,onClick:()=>{c(u?null:r._id),n(r._id)},children:[e.jsx("img",{src:r.avatar?`https://dodrc8eu8m09s.cloudfront.net/avatars/${r.avatar}`:"/images/default-avatar.png",alt:r.name||"",className:"h-6 w-6 shrink-0 rounded-full"}),e.jsx("div",{className:"inline-grid w-full",children:e.jsx("h3",{className:"truncate text-left font-normal",children:r.name})})]})},r._id)})}),s.length===0&&!g&&e.jsxs("div",{className:"flex grow flex-col items-center justify-center gap-2",children:[e.jsx(E,{className:"h-12 w-12 text-gray-500"}),e.jsx("p",{className:"text-gray-500",children:"You are not a member of any team."})]})]})}const pe=[{id:"me",label:"Only me",long:"Only visible to me",icon:te},{id:"public",label:"Public",long:"Anyone can view",icon:se},{id:"friends",label:"Only friends",long:"Only friends can view",icon:ee},{id:"team",label:"Only Members",long:"Visible to team members",icon:E}];function fe(m){const{visibility:s,setVisibility:a,teamId:t,onChange:c}=m,d=i=>{a(i),c(i)};return e.jsxs("div",{className:"flex justify-between",children:[e.jsx("ul",{className:"flex w-full items-center gap-1.5",children:pe.map(i=>{if(i.id==="friends"&&t)return null;if(i.id==="team"&&!t)return null;const n=i.id===s;return e.jsx("li",{children:e.jsx(B,{label:i.label,isActive:n,icon:i.icon,onClick:()=>{d(i.id)}})},i.id)})}),!t&&e.jsx("div",{className:"grow",children:e.jsx(B,{label:"Transfer to team",icon:he,isActive:s==="team",onClick:()=>{d("team")},className:'border-red-300 text-red-600 hover:border-red-200 hover:bg-red-50 data-[active="true"]:border-red-600 data-[active="true"]:bg-red-600 data-[active="true"]:text-white'})})]})}function B(m){const{label:s,isActive:a,onClick:t,icon:c,className:d}=m;return e.jsxs("button",{className:w("flex items-center justify-center gap-2 rounded-md border px-3 py-2 text-sm text-black hover:border-gray-300 hover:bg-gray-100",'data-[active="true"]:border-gray-500 data-[active="true"]:bg-gray-200 data-[active="true"]:text-black',d),"data-active":a,disabled:a,onClick:t,children:[!a&&e.jsx(c,{className:"h-4 w-4"}),a&&e.jsx(X,{className:"h-4 w-4"}),e.jsx("span",{className:"whitespace-nowrap",children:s})]})}function J(m){const{teamId:s,title:a="Select Members",sharedTeamMemberIds:t,setSharedTeamMemberIds:c,membersCache:d,isTeamMembersLoading:i,setIsTeamMembersLoading:n}=m,b=O();async function g(){if(d.has(s))return;n(!0);const{response:o,error:r}=await P(`https://api.roadmap.sh/v1-get-team-member-list/${s}`);if(r||!o){b.error(r?.message||"Something went wrong");return}const u=o?.filter(v=>v.status==="joined")||[];d.set(s,u)}x.useEffect(()=>{g().finally(()=>{n(!1)})},[s]);const p=i&&e.jsx("ul",{className:"mt-2 grid grid-cols-3 gap-2.5",children:[...Array(3)].map((o,r)=>e.jsxs("li",{className:"flex min-h-[66px] animate-pulse items-center gap-2 rounded-md border p-2",children:[e.jsx("div",{className:"h-8 w-8 shrink-0 rounded-full bg-gray-200"}),e.jsxs("div",{className:"inline-grid w-full",children:[e.jsx("div",{className:"h-5 w-2/4 rounded bg-gray-200"}),e.jsx("div",{className:"mt-1 h-5 w-3/4 rounded bg-gray-200"})]})]},r))}),l=d.get(s)||[];return e.jsxs(e.Fragment,{children:[(l.length>0||i)&&e.jsxs("div",{className:"flex items-center justify-between gap-2",children:[e.jsx("p",{className:"text-sm",children:a}),e.jsxs("label",{className:"flex items-center gap-2",children:[e.jsx("input",{type:"checkbox",checked:t.length===l.length,onChange:o=>{o.target.checked?c(l.map(r=>r._id)):c([])}}),e.jsx("span",{className:"text-sm",children:"Select all"})]})]}),p,l?.length>0&&!i&&e.jsx("ul",{className:"mt-2 grid grid-cols-3 gap-2.5",children:l?.map(o=>{const r=t?.includes(o._id?.toString());return e.jsx("li",{children:e.jsx(ae,{user:{name:o.name,avatar:o.avatar,email:o.invitedEmail},isSelected:r,onClick:()=>{c(r?t.filter(u=>u!==o._id?.toString()):[...t,o._id?.toString()])}})},o.userId)})}),l.length===0&&!i&&e.jsxs("div",{className:"flex grow flex-col items-center justify-center gap-2",children:[e.jsx(ee,{className:"h-12 w-12 text-gray-500"}),e.jsx("p",{className:"text-gray-500",children:"No members have been added yet."})]})]})}function be(m){const{roadmapId:s,onClose:a,description:t,visibility:c,isSharingWithOthers:d=!1}=m,n=`https://roadmap.sh/r?id=${s}`,{copyText:b,isCopied:g}=Q(),p=[{title:"Twitter",href:`https://twitter.com/intent/tweet?text=${t}&url=${n}`,icon:ce},{title:"Facebook",href:`https://www.facebook.com/sharer/sharer.php?quote=${t}&u=${n}`,icon:de},{title:"Linkedin",href:`https://www.linkedin.com/sharing/share-offsite/?url=${n}`,icon:oe}];return e.jsxs("div",{className:"flex grow flex-col justify-center",children:[e.jsxs("div",{className:"mt-5 flex grow flex-col items-center justify-center gap-1.5",children:[e.jsx(me,{className:"h-14 w-14 text-green-500"}),d?e.jsx("h3",{className:"text-xl font-medium",children:"Sharing with Others"}):e.jsx("h3",{className:"text-xl font-medium",children:"Sharing Settings Updated"})]}),e.jsx("input",{type:"text",className:"mt-6 w-full rounded-md border bg-gray-50 p-2 px-2.5 text-gray-700 focus:outline-none",value:n,readOnly:!0,onClick:l=>{l.currentTarget.select(),b(n)}}),d?e.jsx("p",{className:"mt-1 text-sm text-gray-400",children:"You can share the above link with anyone"}):e.jsx("p",{className:"mt-1 text-sm text-gray-400",children:"You can share the above link with anyone who has access"}),c==="public"&&e.jsxs(e.Fragment,{children:[e.jsxs("div",{className:"-mx-4 mt-4 flex items-center gap-1.5",children:[e.jsx("span",{className:"h-px grow bg-gray-300"}),e.jsx("span",{className:"px-2 text-xs uppercase text-gray-400",children:"Or"}),e.jsx("span",{className:"h-px grow bg-gray-300"})]}),e.jsxs("div",{className:"mt-4 flex items-center gap-2",children:[e.jsx("span",{className:"text-sm text-gray-600",children:"Share with others on"}),e.jsx("ul",{className:"flex items-center gap-1.5",children:p.map(l=>e.jsx("li",{children:e.jsx("a",{href:l.href,target:"_blank",rel:"noopener noreferrer",className:"flex h-8 w-8 items-center justify-center gap-1.5 rounded-md border bg-gray-50 text-sm text-gray-700 hover:bg-gray-100 focus:outline-none",children:e.jsx(l.icon,{className:"h-4 w-4"})})},l.title))})]})]}),e.jsxs("div",{className:"mt-4 flex flex-col items-center justify-end gap-2",children:[e.jsxs("button",{className:w("flex w-full items-center justify-center gap-1.5 rounded bg-black px-4 py-2.5 text-sm font-medium text-white hover:opacity-80",g&&"bg-green-300 text-green-800"),disabled:g,onClick:()=>{b(n)},children:[e.jsx(Z,{className:"h-3.5 w-3.5 stroke-[2.5]"}),g?"Copied":"Copy URL"]}),e.jsx("button",{className:w("flex w-full items-center justify-center gap-1.5 rounded border border-black px-4 py-2 text-sm font-medium hover:bg-gray-100"),onClick:a,children:"Close"})]})]})}function _e(m){const{roadmapId:s,onClose:a,isDiscoverable:t=!1,visibility:c,sharedTeamMemberIds:d=[],sharedFriendIds:i=[],teamId:n,onShareSettingsUpdate:b,description:g}=m,p=O(),[l,o]=x.useState(!1),[r,u]=x.useState(!1),[v,I]=x.useState([]),[h,y]=x.useState([]),[N,_]=x.useState(!1),R=x.useMemo(()=>new Map,[]),[f,re]=x.useState(c),[T,Y]=x.useState(t),[k,S]=x.useState(d),[D,M]=x.useState(i),[L,z]=x.useState(null),$=f==="team"&&!n;let F=!1;(f==="friends"&&D.length===0||$&&!L||f==="team"&&n&&k.length===0)&&(F=!0);const ne=async({sharedFriendIds:j,visibility:C,sharedTeamMemberIds:A})=>{if(o(!0),C==="friends"&&j.length===0){p.error("Please select at least one friend");return}else if(C==="team"&&n&&A.length===0){p.error("Please select at least one member");return}const{response:V,error:G}=await H(`https://api.roadmap.sh/v1-update-roadmap-visibility/${s}`,{visibility:C,sharedFriendIds:j,sharedTeamMemberIds:A,isDiscoverable:T});if(G){p.error(G?.message||"Something went wrong, please try again");return}o(!1),u(!0),b({isDiscoverable:T,sharedFriendIds:j,visibility:C,sharedTeamMemberIds:A})},le=x.useCallback(async(j,C)=>{if(!s)return;o(!0);const{response:A,error:V}=await H(`https://api.roadmap.sh/v1-transfer-roadmap/${s}`,{teamId:j,sharedTeamMemberIds:C,isDiscoverable:T});if(V){o(!1),p.error(V?.message||"Something went wrong, please try again");return}window.location.reload()},[s]);return r?e.jsx(W,{onClose:a,wrapperClassName:"max-w-lg",bodyClassName:"p-4 flex flex-col",children:e.jsx(be,{visibility:f,roadmapId:s,description:g,onClose:a})}):e.jsxs(W,{onClose:()=>{l||a()},wrapperClassName:"max-w-3xl",bodyClassName:"p-4 flex flex-col min-h-[440px]",children:[e.jsxs("div",{className:"mb-4",children:[e.jsx("h3",{className:"mb-1 text-xl font-semibold",children:"Update Sharing Settings"}),e.jsx("p",{className:"text-sm text-gray-500",children:"Pick and modify who can access this roadmap."})]}),e.jsx(fe,{visibility:f,setVisibility:re,teamId:n,onChange:j=>{z(null),["me","public"].includes(j)?(S([]),M([])):j==="friends"?M(i.length>0?i:[]):j==="team"&&n?(S(d?.length>0?d:[]),M([])):(M([]),S([])),Y(j==="public")}}),e.jsxs("div",{className:"mt-4 flex grow flex-col",children:[f==="public"&&e.jsxs("div",{className:"flex h-full flex-grow flex-col items-center justify-center rounded-md border bg-gray-50 text-center",children:[e.jsx(se,{className:"mb-3 h-10 w-10 text-gray-300"}),e.jsx("p",{className:"font-medium text-gray-500",children:"Anyone with the link can access."})]}),f==="me"&&e.jsxs("div",{className:"flex h-full flex-grow flex-col items-center justify-center rounded-md border bg-gray-50 text-center",children:[e.jsx(te,{className:"mb-3 h-10 w-10 text-gray-300"}),e.jsx("p",{className:"font-medium text-gray-500",children:"Only you will be able to access."})]}),f==="friends"&&e.jsx(ge,{friends:v,setFriends:I,sharedFriendIds:D,setSharedFriendIds:M}),f==="team"&&n&&e.jsx(J,{teamId:n,sharedTeamMemberIds:k,setSharedTeamMemberIds:S,membersCache:R,isTeamMembersLoading:N,setIsTeamMembersLoading:_}),$&&e.jsxs(e.Fragment,{children:[e.jsx(ue,{teams:h,setTeams:y,selectedTeamId:L,setSelectedTeamId:z,isTeamMembersLoading:N,setIsTeamMembersLoading:_,onTeamChange:()=>{S([])}}),L&&e.jsxs(e.Fragment,{children:[e.jsx("hr",{className:"-mx-4 my-4"}),e.jsx("div",{className:"mb-4",children:e.jsx(J,{title:"Select who can access this roadmap. You can change this later.",teamId:L,sharedTeamMemberIds:k,setSharedTeamMemberIds:S,membersCache:R,isTeamMembersLoading:N,setIsTeamMembersLoading:_})})]})]})]}),f!=="me"&&e.jsxs(e.Fragment,{children:[e.jsx("hr",{className:"-mx-4 my-4"}),e.jsx("div",{className:"mb-2",children:e.jsx(ye,{isDiscoverable:T,setIsDiscoverable:Y})})]}),e.jsxs("div",{className:"mt-2 flex items-center justify-between gap-1.5",children:[e.jsx("button",{className:"flex items-center justify-center gap-1.5 rounded-md border px-3.5 py-1.5 hover:bg-gray-100 disabled:cursor-not-allowed disabled:opacity-75",disabled:l,onClick:a,children:"Close"}),$&&e.jsxs(K,{disabled:F||l||k.length===0,onClick:()=>{le(L,k).then(()=>null)},children:[l&&e.jsx(q,{className:"h-4 w-4 animate-spin"}),"Transfer"]}),!$&&e.jsxs(K,{disabled:F||l,onClick:()=>{ne({isDiscoverable:T,visibility:f,sharedTeamMemberIds:f==="team"?k:[],sharedFriendIds:f==="friends"?D:[]})},children:[l&&e.jsx(q,{className:"h-4 w-4 animate-spin"}),"Update Sharing Settings"]})]})]})}function K(m){const{onClick:s,disabled:a,children:t,className:c}=m;return e.jsx("button",{className:w("flex min-w-[120px] items-center justify-center gap-1.5 rounded-md border border-gray-900 bg-gray-900 px-4 py-2 text-white hover:bg-gray-800 disabled:cursor-not-allowed disabled:opacity-75",a&&"border-gray-700 bg-gray-700 text-white hover:bg-gray-700",c),disabled:a,onClick:s,children:t})}function ye(m){const{isDiscoverable:s,setIsDiscoverable:a}=m;return e.jsxs("label",{className:"group flex items-center gap-1.5",children:[e.jsx("input",{type:"checkbox",checked:s,onChange:t=>a(t.target.checked)}),e.jsx("span",{className:"text-sm text-gray-500 group-hover:text-gray-700",children:"Include on discovery page (when launched)"})]})}export{te as L,Oe as M,_e as S,be as a};
