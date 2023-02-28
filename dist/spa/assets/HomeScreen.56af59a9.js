import{d as h,_,o as r,c as o,a as t,t as d,p as C,b as k,w as b,v as N,r as E,u as L,e as q,f as $,g as p,h as f,i as y,j as l,F as R,k as T,l as A}from"./index.e1ff3cdb.js";import{g as B,L as D}from"./LoadingScreen.974dafea.js";var H="/rick-and-morty/dist/spa/assets/portal.bd79e02e.png";const j=h({name:"CharacterComponent",props:{character:{type:Object,required:!0}}}),x=e=>(C("data-v-002eecaa"),e=e(),k(),e),F={class:"container-character"},M={class:"character-info"},Q={class:"character-name"},U=["src"],O=x(()=>t("img",{class:"portal",src:H,alt:"Descri\xE7\xE3o da imagem"},null,-1));function Y(e,a,s,n,i,g){return r(),o("div",F,[t("div",M,[t("p",Q,d(e.character.name),1),t("img",{class:"character",src:e.character.image,alt:"Descri\xE7\xE3o da imagem"},null,8,U)]),O])}var z=_(j,[["render",Y],["__scopeId","data-v-002eecaa"]]);const G=h({name:"SearchInput",data(){return{localValue:""}},props:{value:String,placeholder:String},setup(e,{emit:a}){return{updateValue:n=>{const i=n.target.value;a("update:value",i)}}}}),J=["placeholder"];function K(e,a,s,n,i,g){return b((r(),o("input",{type:"text","onUpdate:modelValue":a[0]||(a[0]=c=>e.localValue=c),onInput:a[1]||(a[1]=(...c)=>e.updateValue&&e.updateValue(...c)),placeholder:e.placeholder},null,40,J)),[[N,e.localValue]])}var W=_(G,[["render",K]]),X="/rick-and-morty/dist/spa/assets/rick-and-morty-logo.2ea6d7ba.png";const Z=B`
  query getAllCharacters($name: String!, $page: Int!) {
    characters(page: $page, filter: { name: $name }) {
      info {
        count
        pages
        next
        prev
      }
      results {
        id
        name
        image
      }
    }
  }
`,ee=h({name:"HomeScreen",components:{SearchInput:W,Character:z,LoadingScreen:D},data(){return{searchName:"",currentPage:1,loading:!0,characters:[]}},watch:{currentPage(e){this.getCharacters(e)},searchName(){let e;e&&clearTimeout(e),e=setTimeout(()=>{try{this.currentPage=1,this.getCharacters()}catch(a){console.error(a)}},2e3)}},mounted(){this.getCharacters()},methods:{updateValue(e){this.$data.searchName=e.target.value},async getCharacters(e=1){this.loading=!0;const a=E({name:this.$data.searchName,page:e}),{result:s,loading:n}=await L(Z,a);q(()=>{s.value&&(this.characters=s.value.characters,this.loading=n.value)})},nextPage(){this.$data.currentPage+=1},previousPage(){this.$data.currentPage-=1}},setup(){const e=A();return{handleClick:s=>{e.push(`/character-details/${s}`)}}}}),S=e=>(C("data-v-420801e4"),e=e(),k(),e),ae={class:"",style:{background:"#000"}},te={class:"search-characters-container"},re=S(()=>t("img",{class:"image-logo",src:X,alt:"Rick and Morty Logo"},null,-1)),se={class:"search-container"},ne=S(()=>t("div",{class:"fade"},null,-1)),oe={class:"list-characters-section"},ce={class:"pagination-container"};function le(e,a,s,n,i,g){var m,v;const c=l("SearchInput"),I=l("LoadingScreen"),V=l("Character"),P=l("q-col"),w=l("q-row");return r(),o("div",ae,[t("section",te,[re,t("div",se,[$(c,{value:e.searchName,onInput:e.updateValue,placeholder:"Search Character Name"},null,8,["value","onInput"])]),ne]),t("section",oe,[e.loading?(r(),p(I,{key:0})):(r(),p(w,{key:1,class:"row"},{default:f(()=>[(r(!0),o(R,null,T(e.characters.results,u=>(r(),p(P,{class:"col-6 col-xs-12 col-sm-6 col-md-3 col-lg-2",style:{"justify-content":"center",display:"flex"},key:u.id},{default:f(()=>[$(V,{character:u,onClick:()=>e.handleClick(u.id)},null,8,["character","onClick"])]),_:2},1024))),128))]),_:1}))]),t("div",ce,[e.currentPage>1?(r(),o("button",{key:0,class:"pagination-btn",onClick:a[0]||(a[0]=u=>e.previousPage())},d("< Previous"))):y("",!0),t("span",null,d(e.currentPage)+" of "+d((m=e.characters.info)==null?void 0:m.pages),1),e.currentPage<`${parseInt((v=e.characters.info)==null?void 0:v.pages)}`?(r(),o("button",{key:1,class:"pagination-btn",onClick:a[1]||(a[1]=()=>e.nextPage())}," Next > ")):y("",!0)])])}var de=_(ee,[["render",le],["__scopeId","data-v-420801e4"]]);export{de as default};