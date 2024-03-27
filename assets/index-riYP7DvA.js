import{T as b,s as O,w as g,c as l,p as k,a as B,b as j,t as C,r as x}from"./index-0uJt83GB.js";import{m as u,U as m,x as s,q as _,n,O as y,J as p,j as S,l as w,e as L,f as D}from"./vendor-28BfryBT.js";import"./charts-cate-KrKbI8fN.js";import{h as V}from"./async-replace-E7lBj6ry.js";var W=Object.defineProperty,A=Object.getOwnPropertyDescriptor,c=(i,t,a,r)=>{for(var e=r>1?void 0:r?A(t,a):t,o=i.length-1,d;o>=0;o--)(d=i[o])&&(e=(r?d(t,a,e):d(e))||e);return r&&e&&W(t,a,e),e};let h=class extends b(O){constructor(){super(...arguments),this.bindScreen=new u(this,m),this.bindWeekly=new u(this,g),this.bindCharts=new u(this,l),this.paging=!1,this.brief=!0,this.moreSubjects=[],this.morePending=!1,this.err="",this.ts=0,this.pagination=k({pageNum:2}),this.hasMore=!0,this.fetch=async(i=!1)=>{if(!(this.morePending&&!i)&&!(this.paging&&!this.hasMore)){this.err="",this.morePending=!0;try{const a={week:await g.getLatest()};if(this.pagination){const{pageSize:e,pageNum:o}=this.pagination;Object.assign(a,{first:e,skip:(o-1)*e})}const{weeklySubjects:r}=await B(a);this.paging?(this.moreSubjects=[...this.moreSubjects,...r],this.hasMore=r.length>=this.pagination.pageSize,this.pagination.pageNum++):this.moreSubjects=[...r]}catch(t){let a=t.message||t.code||t;this.err=t.message||t.msg||t,console.error(a)}finally{this.morePending=!1,this.ts++}}},this.loadmore=()=>{this.fetch()}}get isMobi(){return m.isMobi}get scrollMode(){return this.isMobi?"click":"scroll"}get page1Len(){return l.weeklySubjects.length}get loading(){return l.pending&&!this.page1Len}get empty(){return l.inited&&!this.page1Len}get subjects(){return l.weeklySubjects.concat(this.moreSubjects)}render(){return s`<div role="list" class="ui-list gap-2 ${_(this.$c([this.morePending?"loading":"hover"]))}"><div class="flex header border-bottom">${n(!this.isMobi,()=>s`<div class="w-8">Rank</div>`)}<div class="subject-intro">Collection</div><div class="num pl-2">Volume</div></div>${n(this.loading,()=>s`<div name="loading" class="doc-intro"></div><loading-skeleton num="4"></loading-skeleton>`,()=>s`${y(this.subjects,(i,t)=>s`<subject-brief .subject="${i}" lite>${n(!this.isMobi,()=>s`<div slot="left" class="subject-rank">${t+1}</div>`)}</subject-brief>`)}`)}</div>${n(this.empty,()=>s`<p class="p-2 opacity-60">No votes yet.</p>`)} ${n(this.paging,()=>s`<ui-pagination .nomore="${this.err}" mode="${this.scrollMode}" .firstLoad="${!1}" .pending="${this.morePending}" @loadmore="${this.loadmore}"></ui-pagination>`)}`}};c([S({type:Boolean})],h.prototype,"paging",2);c([S({type:Boolean})],h.prototype,"brief",2);c([p()],h.prototype,"moreSubjects",2);c([p()],h.prototype,"morePending",2);c([p()],h.prototype,"err",2);c([p()],h.prototype,"ts",2);c([p()],h.prototype,"pagination",2);c([p()],h.prototype,"hasMore",2);h=c([w("weekly-top")],h);var T=Object.defineProperty,H=Object.getOwnPropertyDescriptor,M=(i,t,a,r)=>{for(var e=r>1?void 0:r?H(t,a):t,o=i.length-1,d;o>=0;o--)(d=i[o])&&(e=(r?d(t,a,e):d(e))||e);return r&&e&&T(t,a,e),e};let $=class extends b(""){constructor(){super(...arguments),this.bindWallet=new u(this,j),this.dialog=!1,this.open=()=>{this.disabled?L.emit("connect-wallet"):this.dialog=!0},this.close=()=>this.dialog=!1}get disabled(){return!j.account}render(){return s`<ui-button icon @click="${this.open}" title="Bind Social"><i class="i mdi mdi-twitter"></i></ui-button>${n(this.dialog,()=>s`<reward-dialog scene="social" @close="${()=>this.dialog=!1}"></reward-dialog>`)}`}};M([p()],$.prototype,"dialog",2);$=M([w("bind-social-btn")],$);const N="svg{display:inline-flex;align-items:center;overflow:hidden;border-radius:9999px;background:#c81444}svg svg{height:100%;width:100%}.ui-list.bidders{margin-top:.5rem;display:grid;grid-template-columns:repeat(5,minmax(0,1fr));align-items:end;justify-items:end;place-items:end;grid-gap:1rem;gap:1rem}@media (min-width: 768px){.ui-list.bidders{min-height:20rem;grid-template-columns:repeat(1,minmax(0,1fr))}}@media (min-width: 1024px){.ui-list.bidders{row-gap:0px}}.ui-list.bidders>*:not(.header){padding-top:.75rem;padding-bottom:.75rem}.ui-list.bidders.loading{grid-template-columns:repeat(1,minmax(0,1fr))!important}.ui-list.bidders .header{grid-column:span 3 / span 3}@media (min-width: 768px){.ui-list.bidders .header{grid-column:span 1 / span 1}}.ui-list .item{--tw-shadow: 0 4px 6px -1px rgba(0, 0, 0, .1), 0 2px 4px -2px rgba(0, 0, 0, .1);--tw-shadow-colored: 0 4px 6px -1px var(--tw-shadow-color), 0 2px 4px -2px var(--tw-shadow-color);box-shadow:0 0 #0000,0 0 #0000,0 4px 6px -1px #0000001a,0 2px 4px -2px #0000001a;box-shadow:var(--tw-ring-offset-shadow, 0 0 rgba(0,0,0,0)),var(--tw-ring-shadow, 0 0 rgba(0,0,0,0)),var(--tw-shadow)}@media (min-width: 768px){.ui-list .item{--tw-shadow: 0 0 rgba(0,0,0,0);--tw-shadow-colored: 0 0 rgba(0,0,0,0);box-shadow:0 0 #0000,0 0 #0000,0 0 #0000;box-shadow:var(--tw-ring-offset-shadow, 0 0 rgba(0,0,0,0)),var(--tw-ring-shadow, 0 0 rgba(0,0,0,0)),var(--tw-shadow)}}";var q=Object.defineProperty,z=Object.getOwnPropertyDescriptor,f=(i,t,a,r)=>{for(var e=r>1?void 0:r?z(t,a):t,o=i.length-1,d;o>=0;o--)(d=i[o])&&(e=(r?d(t,a,e):d(e))||e);return r&&e&&q(t,a,e),e};let v=class extends b(N){constructor(){super(...arguments),this.bindCharts=new u(this,l),this.albumToVote={id:"",voter:0,time:0,value:0},this.moreVotes=[],this.morePending=!1,this.itemMobi=i=>s`<ui-link class="flex justify-center items-center" href="${`/user/${i.voter.address}`}"><ui-address class="relative -top-1 text-xl" .address="${i.voter.address}" avatar hideAddr></ui-address></ui-link>`,this.timeAgo=async function*(i){for(;;)yield C(i),await new Promise(t=>setTimeout(t,1e3))}}get isMobi(){return m.screen.isMobi}get skeletonLen(){return this.isMobi?2:3}get loading(){return l.pending&&!l.votes.length}get empty(){return l.inited&&!l.votes.length}get votes(){return l.votes.concat(this.moreVotes)}render(){return s`<div class="w-full p-2 text-sm text-neutral-400 border-b" style="border-color:#2e3349"><div class="w-full">Bidders</div></div><div role="list" class="ui-list bidders ${_(this.$c([this.morePending?"loading":"hover"]))}">${n(this.loading,()=>s`<div name="Loading" class="doc-intro"><div class="w-full flex flex-col gap-8">${y([...Array(this.skeletonLen).keys()],()=>s`<loading-skeleton num="3" class="${this.isMobi?"":"sm"}"></loading-skeleton>`)}</div></div>`,()=>s`${y(this.votes,(i,t)=>s`${n(!this.isMobi,()=>s`<div class="item flex items-center pr-0.5"><div class="w-full flex items-center justify-between gap-2"><ui-link href="${`/user/${i.voter.address}`}"><ui-address class="relative -top-1 text-xl" .address="${i.voter.address}" avatar hideAddr></ui-address></ui-link><div class="flex flex-col justify-center items-end text-right"><p class="opacity-95 text-base">${D(i.value)}</p><p class="relative text-right text-xs leading-none text-neutral-400 whitespace-nowrap h-3"><span class="absolute right-0">${V(this.timeAgo(i.time))}</span></p></div></div></div>`,()=>s`${n(t<5,()=>s`${this.itemMobi(i)}`)}`)}`)}`)}</div>`}};f([p()],v.prototype,"albumToVote",2);f([p()],v.prototype,"moreVotes",2);f([p()],v.prototype,"morePending",2);v=f([w("latest-votes")],v);const R=":host{--homeBoardWidth: 8rem;--homeBoardHalf: calc((100% - var(--homeBoardWidth)) / 2 - 3rem)}.ui-board{width:100%}@media (min-width: 1024px){.ui-board{width:30rem;flex:0 1 auto}}.ui-board:nth-of-type(1){flex-grow:1}@media (min-width: 1024px){.ui-board:nth-of-type(1){width:100%}}.ui-board:nth-of-type(1){width:var(--homeBoardHalf)}.ui-board:nth-of-type(2){flex-grow:1;width:var(--homeBoardHalf)}.ui-board:nth-of-type(3){flex-shrink:1;flex-grow:0}@media (min-width: 1024px){.ui-board:nth-of-type(3){width:7rem}}@media (max-width: 1024px){.ui-board:nth-of-type(1),.ui-board:nth-of-type(2){width:auto}}";var U=Object.defineProperty,E=Object.getOwnPropertyDescriptor,J=(i,t,a,r)=>{for(var e=r>1?void 0:r?E(t,a):t,o=i.length-1,d;o>=0;o--)(d=i[o])&&(e=(r?d(t,a,e):d(e))||e);return r&&e&&U(t,a,e),e};let P=class extends b(R){constructor(){super(...arguments),this.bindScreen=new u(this,m),this.bindStore=new u(this,x),this.bindWeekly=new u(this,g)}get isMobi(){return m.screen.isMobi}async connectedCallback(){super.connectedCallback()}render(){return s`<div class="ui-pageview ui-container flex-col lg_flex-row place-content-center"><div class="ui-board"><div class="ui-board-header"><div class="ui-board-lead"><h5>Weekly Chart</h5><div class="ui-board-subtitle">${n(g.latest,()=>s`${g.latestRange}, <span class="text-green-500">${g.latestLeft}</span> left`)}</div></div><div class="ui-board-lead">${n(x.inited,()=>s`<h5><span class="text-sm text-gray-300">Pool: </span><span class="ui-em text-xl">${x.weeklyPoolHumanized||"-"}</span></h5>`,()=>s`<i class="mdi mdi-loading"></i>`)}</div></div><weekly-top></weekly-top></div>${n(!0,()=>s`<div class="ui-board"><div class="ui-board-header"><div class="ui-board-lead"><div class="ui-board-title"><charts-cate></charts-cate></div></div></div><top-charts></top-charts></div><div class="ui-board"><div class="ui-board-header"><div class="text-xl">Votes</div></div><latest-votes></latest-votes></div>`)}</div>`}};P=J([w("view-home")],P);export{P as ViewHome};
