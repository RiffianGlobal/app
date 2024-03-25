import{g,b as w,e as C,f as j,n as D,h as R,T as $,i as A,j as S,k as y}from"./index-DIAcnXtn.js";import{S as B,a6 as T,p as x,m as h,e as q,x as o,n as f,q as I,J as u,j as _,l as O,P as m,a2 as M}from"./vendor-zEY3Y4ov.js";var E=Object.defineProperty,F=Object.getOwnPropertyDescriptor,P=(r,t,s,a)=>{for(var e=a>1?void 0:a?F(t,s):t,i=r.length-1,d;i>=0;i--)(d=r[i])&&(e=(a?d(t,s,e):d(e))||e);return a&&e&&E(t,s,e),e};class v extends B{constructor(){super(...arguments),this.get=async()=>{if(!this.address){const t=await g();try{const s=await t.agentAddress(w.account);s&&+s!=0&&(this.address=s)}catch{}}return this.inited=!0,this.address},this.set=async t=>{try{const s=await g(),[a,e]=["bindAgent",{}],i=[t,T(["address","address"],[t,C("MediaBoard")])];await j(e,s,a,i);const d=s[a](...i);await new R(d,{errorCodes:"MediaBoard",seq:{type:"Referral",title:"Referral",ts:D(),overrides:e}}).wait(),this.address=t}catch(s){throw s}}}get bound(){return this.inited&&!!w.account&&!!this.address}}P([x({value:""})],v.prototype,"address",2);P([x({value:!1})],v.prototype,"inited",2);const n=new v,J="";var K=Object.defineProperty,V=Object.getOwnPropertyDescriptor,b=(r,t,s,a)=>{for(var e=a>1?void 0:a?V(t,s):t,i=r.length-1,d;i>=0;i--)(d=r[i])&&(e=(a?d(t,s,e):d(e))||e);return a&&e&&K(t,s,e),e};let l=class extends $(J){constructor(){super(...arguments),this.bindReferral=new h(this,n),this.address="",this.pending=!1,this.bind=async()=>{if(!await A())return q.emit("connect-wallet");if(this.pending=!0,!n.address)try{await n.set(this.address)}catch(r){r.code!==4001&&S.add({summary:"Set Failed",detail:r.message})}finally{this.pending=!1}}}get addr(){return n.address||this.address}connectedCallback(){super.connectedCallback(),n.get()}render(){return o`<div class="flex flex-col gap-8 w-full"><div class="mt-8">${f(!n.bound,()=>o`<ui-button @click="${()=>this.bind()}" .pending="${this.pending}">Accept</ui-button>`)}</div><div><i class="mdi ${I(this.$c([this.pending?"mdi-loading":"mdi-check-circle-outline invisible",n.bound?"mdi-check-circle-outline text-green-600 !visible":""]))}"></i></div></div>`}};b([_()],l.prototype,"address",2);b([u()],l.prototype,"pending",2);l=b([O("bind-referrer")],l);const Y="";var z=Object.defineProperty,G=Object.getOwnPropertyDescriptor,p=(r,t,s,a)=>{for(var e=a>1?void 0:a?G(t,s):t,i=r.length-1,d;i>=0;i--)(d=r[i])&&(e=(a?d(t,s,e):d(e))||e);return a&&e&&z(t,s,e),e};let c=class extends $(Y){constructor(){super(...arguments),this.bindReferral=new h(this,n),this.bindDOID=new h(this,y),this.referrer="",this.address="",this.resolved=!1,this.validate=async()=>{},this.resolve=async()=>{const r=await n.get();if(r)this.address=r;else if(m(this.referrer))this.address=this.referrer;else{const s=await y.getAddress(this.referrer);s&&(this.address=s)}this.address?this.resolved=!0:M("/")}}get isAddress(){return m(this.referrer)}async connectedCallback(){super.connectedCallback(),await this.resolve()}render(){const r=o`<ui-address .href="${`/user/${this.address}`}" .address="${this.address}" short avatar></ui-address>`;return o`<div class="ui-pageview ui-container flex-col justify-center items-center"><h3 class="text-center mt-20 text-3xl font-bold uppercase">Compose your assets with us</h3><div class="text-center text-base">${f(n.inited&&this.resolved,()=>o`${f(n.bound,()=>o`<div class="flex flex-col text-center gap-2"><span class="opacity-80">You have been invited by:</span><p>${r}</p></div>`,()=>o`<h4>${r}</h4><p class="mt-2 opacity-80">invite you to join Riffian</p><bind-referrer .address="${this.address}"></bind-referrer>`)}`,()=>o`<loading-icon type="block"></loading-icon>`)}</div></div>`}};p([_()],c.prototype,"referrer",2);p([u()],c.prototype,"address",2);p([u()],c.prototype,"resolved",2);c=p([O("view-referral")],c);export{c as ViewReferral};
