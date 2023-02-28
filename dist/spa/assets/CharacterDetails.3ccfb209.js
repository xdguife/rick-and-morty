import{_ as v,d as y,r as b,u as k,e as C,o as h,c as u,a as s,t as n,g as S,f as c,h as t,l as p,j as f,p as w,b as B}from"./index.cc7bf62e.js";import{g as D,L as x}from"./LoadingScreen.b3595228.js";const I=D`
  query getUserById($id: ID!) {
    character(id: $id) {
      id
      name
      status
      species
      type
      gender
      origin {
        id
        name
        type
        dimension
        residents {
          id
        }
      }
      location {
        id
        name
        type
        dimension
        residents {
          id
        }
      }
      image
      episode {
        id
        name
      }
      created
    }
  }
`,L=y({name:"CharacterDetails",components:{LoadingScreen:x},data(){return{character:{episode:[{name:""}]},loading:!1}},computed:{namesString(){return this.character?this.character.episode.reduce((o,i)=>{let d;return o?d=", ":d=" ",o+d+i.name},""):null}},mounted(){this.getCharacterDetails()},methods:{async getCharacterDetails(){this.loading=!0;const i=p().currentRoute.value.params.id,d=b({id:i}),{result:_,loading:m}=await k(I,d);C(()=>{_.value&&(this.character=_.value.character,this.loading=m.value)})}},setup(){const o=p();return{goBack:()=>{o.go(-1)}}}}),l=o=>(w("data-v-14bb1b13"),o=o(),B(),o),R={class:"character-details-screen"},q={key:1,style:{"text-align":"center"}},E={class:"title-name"},N={class:"character-details-container"},$={class:"main-details"},j=["src"],A={class:"character"},T=l(()=>s("h3",{class:"title-info"},"Character",-1)),V={class:"info-content"},G=l(()=>s("span",{class:"info-label"},"Name: ",-1)),Q={class:"info-result"},U={class:"info-content"},H=l(()=>s("span",{class:"info-label"},"Species: ",-1)),M={class:"info-result"},O={class:"info-content"},Y=l(()=>s("span",{class:"info-label"},"Status: ",-1)),z={class:"info-result"},F={class:"info-content"},J=l(()=>s("span",{class:"info-label"},"Gender: ",-1)),K={class:"info-result"},P={class:"character"},W=l(()=>s("h3",{class:"title-info"},"Origin",-1)),X={class:"info-content"},Z=l(()=>s("span",{class:"info-label"},"Name: ",-1)),ss={class:"info-result"},os={class:"info-content"},es=l(()=>s("span",{class:"info-label"},"Dimension: ",-1)),cs={class:"info-result"},ts={class:"info-content"},as=l(()=>s("span",{class:"info-label"},"Type: ",-1)),ls={class:"info-result"},ns={class:"info-content"},is=l(()=>s("span",{class:"info-label"},"Amount of Residentes:",-1)),ds={class:"info-result"},rs={class:"character"},_s=l(()=>s("h3",{class:"title-info"},"Location",-1)),hs={class:"info-content"},fs=l(()=>s("span",{class:"info-label"},"Name: ",-1)),ms={class:"info-result"},us={class:"info-content"},ps=l(()=>s("span",{class:"info-label"},"Dimension: ",-1)),gs={class:"info-result"},vs={class:"info-content"},ys=l(()=>s("span",{class:"info-label"},"Type: ",-1)),bs={class:"info-result"},ks={class:"episodes-container"},Cs=l(()=>s("h3",{class:"title-info"},"Episodes",-1)),Ss={class:"episodes-text"};function ws(o,i,d,_,m,Bs){const g=f("LoadingScreen"),a=f("q-col"),r=f("q-row");return h(),u("div",R,[s("div",null,[s("button",{class:"go-back-button",onClick:i[0]||(i[0]=(...e)=>o.goBack&&o.goBack(...e))},n("< Voltar"))]),o.loading?(h(),S(g,{key:0})):(h(),u("div",q,[s("h2",E,n(o.character.name),1),s("div",N,[s("div",$,[c(r,{class:"row"},{default:t(()=>[c(a,{class:"col-6 col-xs-12 col-sm-12 col-md-12 col-lg-3",style:{"justify-content":"center",display:"flex"}},{default:t(()=>[s("img",{class:"character-image",src:o.character.image,alt:"Rick and Morty Logo"},null,8,j)]),_:1}),c(a,{class:"col-6 col-xs-12 col-sm-12 col-md-12 col-lg-4"},{default:t(()=>[s("div",A,[T,s("div",null,[c(r,{class:"row"},{default:t(()=>[c(a,{class:"col-6 col-xs-12 col-sm-12 col-md-6 col-lg-6"},{default:t(()=>[s("div",V,[G,s("span",Q,n(o.character.name),1)])]),_:1}),c(a,{class:"col-6 col-xs-12 col-sm-12 col-md-6 col-lg-6"},{default:t(()=>[s("div",U,[H,s("span",M,n(o.character.species),1)])]),_:1}),c(a,{class:"col-6 col-xs-12 col-sm-12 col-md-6 col-lg-6"},{default:t(()=>[s("div",O,[Y,s("span",z,n(o.character.status),1)])]),_:1}),c(a,{class:"col-6 col-xs-12 col-sm-12 col-md-6 col-lg-6"},{default:t(()=>[s("div",F,[J,s("span",K,n(o.character.gender),1)])]),_:1})]),_:1})])])]),_:1}),c(a,{class:"col-6 col-xs-12 col-sm-12 col-md-12 col-lg-5"},{default:t(()=>[s("div",P,[W,s("div",null,[c(r,{class:"row"},{default:t(()=>[c(a,{class:"col-6 col-xs-12 col-sm-12 col-md-6 col-lg-6"},{default:t(()=>{var e;return[s("div",X,[Z,s("span",ss,n((e=o.character.origin)==null?void 0:e.name),1)])]}),_:1}),c(a,{class:"col-6 col-xs-12 col-sm-12 col-md-6 col-lg-6"},{default:t(()=>{var e;return[s("div",os,[es,s("span",cs,n((e=o.character.origin)==null?void 0:e.dimension),1)])]}),_:1}),c(a,{class:"col-6 col-xs-12 col-sm-12 col-md-6 col-lg-6"},{default:t(()=>{var e;return[s("div",ts,[as,s("span",ls,n((e=o.character.origin)==null?void 0:e.type),1)])]}),_:1}),c(a,{class:"col-6 col-xs-12 col-sm-12 col-md-6 col-lg-6"},{default:t(()=>{var e;return[s("div",ns,[is,s("span",ds,n((e=o.character.origin)==null?void 0:e.residents.length),1)])]}),_:1})]),_:1})])])]),_:1}),c(a,{class:"col-6 col-xs-12 col-sm-12 col-md-12 col-lg-3",style:{"justify-content":"center",display:"flex"}}),c(a,{class:"col-6 col-xs-12 col-sm-12 col-md-12 col-lg-9"},{default:t(()=>[s("div",rs,[_s,s("div",null,[c(r,{class:"row"},{default:t(()=>[c(a,{class:"col-6 col-xs-12 col-sm-12 col-md-6 col-lg-6"},{default:t(()=>{var e;return[s("div",hs,[fs,s("span",ms,n((e=o.character.location)==null?void 0:e.name),1)])]}),_:1}),c(a,{class:"col-6 col-xs-12 col-sm-12 col-md-5 col-lg-6"},{default:t(()=>{var e;return[s("div",us,[ps,s("span",gs,n((e=o.character.location)==null?void 0:e.dimension),1)])]}),_:1}),c(a,{class:"col-6 col-xs-12 col-sm-12 col-md-5 col-lg-6"},{default:t(()=>{var e;return[s("div",vs,[ys,s("span",bs,n((e=o.character.location)==null?void 0:e.type),1)])]}),_:1})]),_:1})])])]),_:1})]),_:1})])]),s("div",ks,[Cs,s("p",Ss,n(o.namesString),1)])]))])}var Is=v(L,[["render",ws],["__scopeId","data-v-14bb1b13"]]);export{Is as default};
