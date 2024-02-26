import{g as P,o as z,w as C,a as F,T as k,b as L,f as I}from"./index-J8GC-uss.js";import{a0 as S,f as B,S as A,y as R,p as $,W as U,x as o,m as y,n as l,i as c,j as M,l as x,O as D,e as W,$ as q,L as G,G as f}from"./vendor-Ik7V0v8y.js";const H="/assets/empty-SE8Z4v6N.webp?inline",j=(t=[])=>([t].flat().forEach(e=>{e.subject&&(Object.assign(e,e.subject),delete e.subject);const{image:s,supply:r,voteLogs:i=[]}=e,a=e.totalVoteValue??e.volumeTotal,[n,g]=[!i.length,{val:0n,rate:"1",per:"",stat:""}];if(n)g.per="New";else{const[T,O]=[S(r),S(i[0].supply)],m=T-O;g.val=m,g.rate=B(m*S("100")/O),m!==0n&&(g.stat=m>0?"up":"down"),g.per=m==0n?"-":`${m>0?"+":"-"}${parseFloat(g.rate.toString()).toFixed(1)}%`}e.cooked={totalBN:a,total:+B(a).toString(),src:s!=null&&s.startsWith("http")?s:H,chg:g,newer:n,price:(+r+1)/10}}),t),N=({time:t=z(),first:e=10,skip:s=0}={})=>`
  subjects (
    where: { creator_starts_with: "0x" }${e?` first: ${e}`:""}${s?` skip: ${s}`:""}
    orderBy: supply orderDirection: desc
  ) {
    id image name uri supply createdAt totalVoteValue creator { address }
    voteLogs ( first: 1 where: { time_lt: ${t+""} } orderBy: time orderDirection: desc ) { supply }
  }
`,Q=async t=>{const{subjects:e}=await P("MediaBoard",`{ ${N(t)} }`);return j(e),{subjects:e}},E=({week:t,time:e=z(),first:s=10,skip:r=0}={})=>`
  weeklySubjects: subjectWeeklyVotes (
    where: { week: ${t} }${s?` first: ${s}`:""}${r?` skip: ${r}`:""}
    orderBy: volumeTotal orderDirection: desc
  ) {
    id volumeTotal
    subject {
      id name image uri supply creator { address }
      voteLogs ( first: 1 where: { time_lt: ${e+""} } orderBy: time orderDirection: desc ) { supply }
    }
  }
`,de=async t=>{const{weeklySubjects:e}=await P("MediaBoard",`{ ${E(t)} }`);return j(e),{weeklySubjects:e}},Z=({first:t=12}={})=>`
  votes: voteLogs ( first: ${t} orderBy: time orderDirection: desc) {
    id time value voter { address }
  }
`,J=async t=>{const{subjects:e,weeklySubjects:s,votes:r}=await P("MediaBoard",`{ ${E(t)} ${N(t)} ${Z(t)} }`);return j(e),j(s),{subjects:e,weeklySubjects:s,votes:r}};var K=Object.defineProperty,X=Object.getOwnPropertyDescriptor,w=(t,e,s,r)=>{for(var i=r>1?void 0:r?X(e,s):e,a=t.length-1,n;a>=0;a--)(n=t[a])&&(i=(r?n(e,s,i):n(i))||i);return r&&i&&K(e,s,i),i};class b extends A{constructor(){super(),this.fetch=async()=>{try{const e=await C.getLatest(),{weeklySubjects:s,subjects:r,votes:i}=await J({week:e});this.weeklySubjects=s,this.subjects=r,this.votes=i}catch(e){console.error(e)}this.pending=!1,this.inited=!0},this.init=async()=>{this.fetch(),R.on("block-world",this.listener)},this.listener=F(this.fetch),this.init()}}w([$({value:[]})],b.prototype,"weeklySubjects",2);w([$({value:[]})],b.prototype,"subjects",2);w([$({value:[]})],b.prototype,"votes",2);w([$({value:!0})],b.prototype,"pending",2);w([$({value:!1})],b.prototype,"inited",2);const v=new b,Y=(t={})=>({pageNum:1,pageSize:10,hasMore:!0,...t}),ee=":host{background-color:transparent!important}:host::part(inner){display:flex;height:2rem;width:100%;align-items:center;justify-content:center}@media (min-width: 1024px){:host::part(inner){height:2.5rem}}";var te=Object.defineProperty,se=Object.getOwnPropertyDescriptor,u=(t,e,s,r)=>{for(var i=r>1?void 0:r?se(e,s):e,a=t.length-1,n;a>=0;a--)(n=t[a])&&(i=(r?n(e,s,i):n(i))||i);return r&&i&&te(e,s,i),i};let p=class extends U(k(ee),{persistent:!0,rootMargin:"30px"}){constructor(){super(...arguments),this.pageSize=5,this.page=1,this.mode="scroll",this.pending=!1,this.firstLoad=!0,this.empty=!1,this.nomore=!1,this.class="",this.loadmore=()=>{if(!this.canLoad)return;const{pageSize:t,page:e,mode:s}=this;this.emit("cc"),this.emit("loadmore",{pageSize:t,page:e,mode:s})},this.onObserved=()=>{this.scrollMode&&this.loadmore()}}get canLoad(){return!this.pending&&!this.nomore&&!this.empty&&!this.firstLoad}get scrollMode(){return this.mode==="scroll"}connectedCallback(){super.connectedCallback()}render(){return o`<div class="ui-pagination w-full flex justify-center items-center mt-4 ${y(this.$c([{nomore:this.nomore,"pointer-events-none !bg-transparent":!this.canLoad||this.scrollMode,scrollMode:this.scrollMode},this.class]))}"><div part="inner" @click="${this.loadmore}">${l(this.empty,()=>o`<slot name="empty"></slot>`,()=>o`${l(this.nomore,()=>o`<slot name="nomore"></slot>`,()=>o`${l(this.pending,()=>o`<slot name="loading"><loading-icon type="block"></loading-icon></slot>`,()=>o`${l(!this.scrollMode&&!this.firstLoad,()=>o`<slot><ui-link>Load more</ui-link></slot>`)}`)}`)}`)}</div></div>`}};u([c({type:Number})],p.prototype,"pageSize",2);u([c({type:Number})],p.prototype,"page",2);u([c()],p.prototype,"mode",2);u([c()],p.prototype,"pending",2);u([c({type:Boolean})],p.prototype,"firstLoad",2);u([c({type:Boolean})],p.prototype,"empty",2);u([c({type:Boolean})],p.prototype,"nomore",2);u([c()],p.prototype,"class",2);p=u([M("ui-pagination")],p);var ie=Object.defineProperty,re=Object.getOwnPropertyDescriptor,V=(t,e,s,r)=>{for(var i=r>1?void 0:r?re(e,s):e,a=t.length-1,n;a>=0;a--)(n=t[a])&&(i=(r?n(e,s,i):n(i))||i);return r&&i&&ie(e,s,i),i};let _=class extends k(""){render(){return this.chg.val==0?this.chg.per:o`<span class="${y({"text-green-500":this.chg.stat=="up","text-red-500":this.chg.stat=="down"})}">${this.chg.per}</span>`}};V([c({type:Object})],_.prototype,"chg",2);_=V([M("chg-stat")],_);const oe=".subject-name{cursor:pointer;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}@media (min-width: 1024px){.subject-name{font-size:1rem;line-height:1.5rem}.subject-name.limit{max-width:10rem}}.subject-img{height:3.5rem;width:3.5rem;cursor:pointer;border-radius:.5rem}.subject-lines{display:flex;flex-direction:column;gap:.25rem;line-height:1}.subject-lines .subject-line1{display:flex;height:1.5rem;align-items:center;line-height:1}.subject-play{font-size:1.25rem;line-height:1.75rem;line-height:1;opacity:.85}.subject-play:hover{opacity:1}";var ae=Object.defineProperty,ne=Object.getOwnPropertyDescriptor,h=(t,e,s,r)=>{for(var i=r>1?void 0:r?ne(e,s):e,a=t.length-1,n;a>=0;a--)(n=t[a])&&(i=(r?n(e,s,i):n(i))||i);return r&&i&&ae(e,s,i),i};let d=class extends k(oe){constructor(){super(...arguments),this.bindScreen=new x(this,D),this.bindBridge=new x(this,L),this.bindWeekly=new x(this,C),this.bindCharts=new x(this,v),this.paging=!1,this.brief=!0,this.pageSize=10,this.moreSubjects=[],this.morePending=!1,this.ts=0,this.err="",this.pagination=Y({pageNum:2,pageSize:this.pageSize}),this.hasMore=!0,this.fetch=async(t=!1)=>{if(!(this.morePending&&!t)&&!(this.paging&&!this.hasMore)){this.err="",this.morePending=!0;try{const e={};if(this.pagination){const{pageSize:r,pageNum:i}=this.pagination;Object.assign(e,{first:r,skip:(i-1)*r})}const{subjects:s}=await Q(e);this.paging?(this.moreSubjects=[...this.moreSubjects,...s],this.hasMore=s.length>=this.pagination.pageSize,this.pagination.pageNum++):this.moreSubjects=[...s]}catch(e){this.err=e.message||e.msg||e}finally{this.morePending=!1,this.ts++}}},this.loadmore=()=>{this.fetch()},this.fullItemMobi=t=>o`<div class="w-full overflow-hidden flex gap-x-2" @click="${e=>this.go2(e,t)}"><div class="w-[3.25rem] h-[3.25rem] mr-2 rounded-lg"><img-loader src="${t.image}" class="w-[3.25rem] rounded-lg"></img-loader></div><div class="subject-lines flex-auto overflow-hidden"><div class="subject-line1"><p class="subject-name ${y({limit:this.brief})}">${t.name}</p><a href="${t.uri}" class="flex-none ml-1.5" target="_blank"><i class="subject-play mdi mdi-play-circle-outline"></i></a></div><div class="text-xs text-gray-400/80"><span class="mr-1 text-gray-400/60">Price:</span>${t.cooked.price}</div></div><div class="subject-lines num flex-initial !w-12 text-sm items-end"><span class="subject-line1">${t.cooked.total}</span> <span class="text-xs"><chg-stat .chg="${t.cooked.chg}"></chg-stat></span></div></div>`,this.go2=(t,e)=>{var s;t.preventDefault(),t.stopPropagation(),this.disabled?W.emit("connect-wallet"):((s=t.target)==null?void 0:s.tagName)=="I"?window.open(e.uri,"_blank"):q(`/track/${e.id}`)},this.headerEle=()=>this.brief?o`${l(!this.isMobi,()=>o`<div class="w-8">Rank</div>`)}<div class="flex-shrink">Collection</div><div class="flex-auto"></div><div class="num flex-auto w-32">Volume</div>`:o`${l(!this.isMobi,()=>o`<div class="w-16">Index</div>`)}<div class="flex-auto">Name</div>${l(!this.isMobi,()=>o`<div class="flex-none w-40">Created</div>`)}<div class="num flex-none w-24">Volume</div>${l(!this.isMobi,()=>o`<div class="num flex-none w-24">Price</div><div class="num flex-none w-24">24H</div>`)}`,this.itemEle=(t,e)=>this.brief?o`<div class="item flex items-center" @click="${s=>this.go2(s,t)}">${l(!this.isMobi,()=>o`<div class="flex-none w-8 text-center text-sm font-light opacity-70">${e+1}</div>`)}<div class="subject-img flex-shrink flex justify-center"><img-loader .src="${t.cooked.src}" class="w-14 rounded-lg"></img-loader></div><div class="subject-lines flex-auto overflow-hidden"><div class="subject-line1"><p class="subject-name ${y({limit:this.brief})}">${t.name}</p><a href="${t.uri}" class="flex-none ml-1.5" target="_blank"><i class="subject-play mdi mdi-play-circle-outline"></i></a></div>${l(this.brief,()=>o`<div class="text-xs text-gray-400/80"><span class="mr-1 text-gray-400/60">Price:</span>${t.cooked.price}</div>`)}</div><div class="subject-lines num flex-initial !w-12 text-sm items-end"><span class="subject-line1">${t.cooked.total}</span> <span class="text-xs"><chg-stat .chg="${t.cooked.chg}"></chg-stat></span></div></div>`:o`${l(!this.isMobi,()=>o`<div class="item flex items-center hover_cursor-pointer" @click="${s=>this.go2(s,t)}"><div class="flex-none w-16 pl-4 text-sm font-light opacity-75">${e+1} ${l(this.subjects.length>3&&e<3,()=>o`<i class="mdi mdi-fire text-red-400"></i>`)}</div><div class="flex-auto flex"><div class="w-[3.25rem] h-[3.25rem] mr-4 rounded-lg"><img-loader src="${t.cooked.src}" class="rounded-lg"></img-loader></div><div><p class="subject-name subject-line1 lg_text-base truncate">${t.name}</p><i class="subject-play mdi mdi-play-circle"></i></div></div><div class="flex-none w-40 text-xs text-gray-300/60">${I(t.createdAt)}</div><div class="flex-none w-24 text-right text-sm"><span>${t.cooked.total}</span></div><div class="flex-none w-24 text-right text-sm"><span>${t.cooked.price}</span></div><div class="flex-none w-24 text-right text-sm leading-none"><span><chg-stat .chg="${t.cooked.chg}"></chg-stat></span></div></div>`,()=>o`${this.fullItemMobi(t)}`)}`}get disabled(){return!L.bridge.account}get isMobi(){return D.isMobi}get scrollMode(){return"scroll"}get empty(){return v.inited&&!v.subjects.length}get loading(){return v.pending&&!v.subjects.length}get subjects(){return v.subjects.concat(this.moreSubjects)}render(){return o`<div role="list" class="ui-list gap-2 ${y(this.$c([this.morePending?"loading":"hover"]))}"><div class="flex header border-bottom">${this.headerEle()}</div>${l(this.loading,()=>o`<div name="loading" class="doc-intro"></div><loading-skeleton num="4"></loading-skeleton>`,()=>o`${G(this.subjects,(t,e)=>o`${this.itemEle(t,e)}`)} ${l(this.paging,()=>o`<ui-pagination .nomore="${this.err}" mode="${this.scrollMode}" .firstLoad="${!1}" .pending="${this.morePending}" @loadmore="${this.loadmore}"></ui-pagination>`)}`)}</div>`}};h([c({type:Boolean})],d.prototype,"paging",2);h([c({type:Boolean})],d.prototype,"brief",2);h([c({type:Number})],d.prototype,"pageSize",2);h([f()],d.prototype,"moreSubjects",2);h([f()],d.prototype,"morePending",2);h([f()],d.prototype,"ts",2);h([f()],d.prototype,"err",2);h([f()],d.prototype,"pagination",2);h([f()],d.prototype,"hasMore",2);d=h([M("top-album")],d);export{v as c,Y as p,oe as s,de as w};
