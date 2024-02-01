import{T as w,b as m,d as P,u as S,p as O,q as k,s as V,r as y,l as E}from"./index-Be9je0zv.js";import{i as x,x as a,n as d,f as C,u as n,c as v,g as $,e as b,$ as A,j as D,B as _}from"./vendor-dtnumNs5.js";import{u as H}from"./action-G3Y4GGKx.js";var T=Object.defineProperty,B=Object.getOwnPropertyDescriptor,h=(t,s,r,i)=>{for(var e=i>1?void 0:i?B(s,r):s,l=t.length-1,o;l>=0;l--)(o=t[l])&&(e=(i?o(s,r,e):o(e))||e);return i&&e&&T(s,r,e),e};const j=()=>({tx:""});let c=class extends w(""){constructor(){super(...arguments),this.bindBridge=new x(this,m),this.album="",this.url="",this.votes=0,this.price=0,this.tx=null,this.success=!1,this.pending=!1,this.rewards=!1,this.err=j(),this.resetState=()=>{this.err=j(),this.pending=!1,this.success=!1,this.price=0},this.close=async()=>{this.tx=null,this.resetState(),this.emit("close")},this.updateErr=(t={})=>this.err=Object.assign({},this.err,t)}connectedCallback(){super.connectedCallback(),this.getPrice()}async getPrice(){try{let t=await S(this.album,await P());this.votes=t,this.price=await O(this.album,this.votes)}catch(t){let s=t.message||t.code;this.updateErr({tx:s})}}async retreat(){this.pending=!0;try{this.tx=await k(this.album,this.votes),this.success=await this.tx.wait()}catch(t){let s=t.message||t.code;if(t.code===4001)return this.updateErr({tx:s}),this.close()}finally{this.pending=!1}}render(){return a`<ui-dialog @close="${()=>{this.close()}}"><p slot="header" class="my-2 font-bold">Retreat Subject</p><div class="grid place-items-center b-1 border m-4 p-4 rounded-md"><p class="w-36 h-36"><img-loader src="${this.url}"></img-loader></p>${d(!this.price,()=>a`<div class="my-4"><loading-skeleton num="3"></loading-skeleton><p class="my-4">Loading subject data...</p></div>`)} ${d(this.price&&!this.pending,()=>a`<p class="font-bold">Estimated returned value</p><p class="text-xl text-sky-500">${C(this.price)} FTM</p><p>Your Votes:${this.votes}</p><ui-button class="m-1" @click="${this.retreat}">RETREAT</ui-button>`)}${d(this.pending,()=>a`<tx-state .tx="${this.tx}" .opts="${{state:{success:"Success. Your retreat has been submitted."}}}"><ui-button slot="view" href="/">Close</ui-button></tx-state>`)}</div></ui-dialog>`}};h([v({type:String})],c.prototype,"album",2);h([v({type:String})],c.prototype,"url",2);h([v({type:Number})],c.prototype,"votes",2);h([n()],c.prototype,"price",2);h([n()],c.prototype,"tx",2);h([n()],c.prototype,"success",2);h([n()],c.prototype,"pending",2);h([n()],c.prototype,"rewards",2);h([n()],c.prototype,"err",2);c=h([$("retreat-vote-dialog")],c);const R=".ui-list .item{cursor:pointer;align-items:center}@media (min-width: 768px){.ui-list .name{font-size:1rem;line-height:1.5rem}}.ui-list .author{width:13rem;text-align:right}";var L=Object.defineProperty,M=Object.getOwnPropertyDescriptor,g=(t,s,r,i)=>{for(var e=i>1?void 0:i?M(s,r):s,l=t.length-1,o;l>=0;l--)(o=t[l])&&(e=(i?o(s,r,e):o(e))||e);return i&&e&&L(s,r,e),e};let p=class extends w(R){constructor(){super(...arguments),this.bindBridge=new x(this,m),this.by="",this.dir="",this.uVotes=[],this.dialog=!1,this.currentAlbum={id:"",votes:0,url:""},this.pending=!1,this.fetch=async()=>{if(!this.disabled){this.pending=!0;try{const t=await V(this.acc,{orderBy:this.by});this.uVotes=t}catch{}finally{this.pending=!1}}},this.close=()=>this.dialog=!1,this.go2=t=>{this.disabled?b.emit("connect-wallet"):A(`/track/${t.subject.id}`)}}get disabled(){return!m.bridge.account}getRandomInt(t){return Math.floor(Math.random()*t)}connectedCallback(){super.connectedCallback(),this.fetch(),m.bridge.subscribe(this.fetch),b.on("manual-change",this.fetch)}disconnectedCallback(){super.disconnectedCallback(),b.off("manual-change",this.fetch)}render(){return a`<div role="list" class="ui-list ${D(this.$c([this.pending?"loading":"hover"]))}"><div class="flex header"><div class="flex-auto">Collection</div><div class="author flex-none w-32 text-right">Author</div><div class="num flex-none">Tickets</div><div class="num flex-none">Holding</div></div>${d(this.pending,()=>a`<div name="Loading" class="doc-intro"><div class="flex flex-col gap-8 m-6">${_([...Array(3).keys()],()=>a`<div name="Loading" class="doc-intro"><loading-skeleton num="4"></loading-skeleton></div>`)}</div></div>`,()=>a`${_(this.uVotes,t=>a`<div class="item flex items-center pr-0.5" @click="${()=>this.go2(t)}"><div class="flex-auto flex items-center"><img-loader .src="${t.subject.image}" class="w-[3.25rem] h-[3.25rem] rounded-lg mr-4"></img-loader><div><p class="name truncate mb-0.5">${t.subject.name}</p>${d(t.subject.uri,()=>a`<a href="${t.subject.uri}" target="_blank"><span class="icon mt-1"><i class="mdi mdi-play-circle-outline text-lg opacity-80 hover_opacity-100"></i></span></a>`)}</div></div><div class="author flex-none text-right"><ui-address .address="${t.subject.creator.address}" short avatar></ui-address></div><div class="num flex-none font-light">${t.subject.supply}</div><div class="num flex-none font-light">${t.holding}</div></div>`)}`)}</div>`}};g([v()],p.prototype,"acc",2);g([v()],p.prototype,"by",2);g([v()],p.prototype,"dir",2);g([n()],p.prototype,"uVotes",2);g([n()],p.prototype,"dialog",2);g([n()],p.prototype,"currentAlbum",2);g([n()],p.prototype,"pending",2);p=g([$("user-votes-list")],p);const z=".page{min-height:calc(100vh - var(--headerH) - var(--footerH) - 1rem)}.page-profile{display:flex gap-4}";var F=Object.defineProperty,U=Object.getOwnPropertyDescriptor,f=(t,s,r,i)=>{for(var e=i>1?void 0:i?U(s,r):s,l=t.length-1,o;l>=0;l--)(o=t[l])&&(e=(i?o(s,r,e):o(e))||e);return i&&e&&F(s,r,e),e};const I=()=>({own:null,holding:null,rewards:null,claimed:null});let u=class extends w(z){constructor(){super(...arguments),this.bindBridge=new x(this,m),this.bindStore=new x(this,y),this.acc="",this.stat=I(),this.pending=!1,this.err="",this.inited=!1,this.fetch=async()=>{this.pending=!0;try{const{user:t}=await H(this.acc);this.user=t;const{address:s,socials:r=[],holding:i,rewardClaimed:e,subjectsCreated:l}=t,{uri:o}=r[0]??{};this.social=await E.fromUri(s,o),this.stat={...this.stat,own:l.length,holding:i,rewards:"",claimed:parseFloat((+C(e)).toFixed(4))}}catch(t){console.error(t)}finally{this.pending=!1,this.inited=!0}}}get itsMe(){return this.acc==m.bridge.account}get loading(){return!this.inited&&this.pending}connectedCallback(){super.connectedCallback(),this.fetch(),b.on("block-world",this.fetch)}disconnectedCallback(){super.disconnectedCallback(),b.off("block-world",this.fetch)}render(){return a`<div class="page page-profile ui-container mx-auto pt-6 lg_pt-10"><div class="flex flex-col lg_flex-row gap-4 justify-between items-center"><div>${d(!this.inited&&!this.err,()=>a`${d(this.loading,()=>a`<div><loading-skeleton num="2"></loading-skeleton></div>`)}`,()=>{var t,s;return a`<div><div class="lg_min-h-6 text-base leading-6"><ui-address class="text-lg" .address="${(t=this.user)==null?void 0:t.address}" short avatar></ui-address></div><div class="lg_min-h-6 text-base leading-6">${d((s=this.social)==null?void 0:s.id,()=>{var r,i,e,l,o;return a`<span class="text-base font-light middle-dot-divider">${(r=this.social)==null?void 0:r.name}<span class="ml-0.5"> ${d((i=this.social)==null?void 0:i.verified,()=>a`<i class="text-green-600 text-sm mdi mdi-check-decagram"></i>`)}</span> <span class="text-base font-light"><a href="${(e=this.social)==null?void 0:e.url}" target="_blank">${(l=this.social)!=null&&l.id?"@":""}${(o=this.social)==null?void 0:o.id}</a></span></span>`})}</div></div>`})}</div><div class="w-full lg_w-1/2 lg_h-32 grid grid-cols-2 lg_grid-cols-4 gap-4 items-center"><div class="h-24 lg_h-full flex flex-col justify-center items-center rounded-xl gap-y-1.5 bg-white/5 text-white"><span class="text-sm opacity-70">Create</span><div class="text-2xl font-light">${this.stat.own??"-"}</div></div><div class="h-24 lg_h-full flex flex-col justify-center items-center rounded-xl gap-y-1.5 bg-white/5"><span class="text-sm opacity-70">Holding</span><div class="text-2xl font-light">${this.stat.holding??"-"}</div></div><div class="h-24 lg_h-full flex flex-col justify-center items-center rounded-xl gap-y-1.5 bg-white/5"><span class="text-sm opacity-70">Rewards</span><div class="text-2xl font-light">${this.inited?y.totalHumanized?y.totalHumanized:"0":"-"}</div></div><div class="h-24 lg_h-full flex flex-col justify-center items-center rounded-xl gap-y-1.5 bg-white/5"><span class="text-sm opacity-70">Claimed</span><div class="text-2xl font-light">${this.stat.claimed??"-"}</div></div></div></div><div class="mt-8 lg_mt-14"><div class="w-full inline-flex pb-2 border-b border-slate-50/10"><div class="py-1.5 px-3 text-base font-normal text-white/70 rounded-md">Voted</div></div>${d(this.acc,()=>a`<user-votes-list by="id" .acc="${this.acc}"></user-votes-list>`)}</div></div>`}};f([v()],u.prototype,"acc",2);f([n()],u.prototype,"user",2);f([n()],u.prototype,"social",2);f([n()],u.prototype,"stat",2);f([n()],u.prototype,"pending",2);f([n()],u.prototype,"err",2);f([n()],u.prototype,"inited",2);u=f([$("profile-page")],u);export{u as ProfilePage};
