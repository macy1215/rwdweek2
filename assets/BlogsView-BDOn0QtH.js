import{_ as h,c as r,a as t,F as _,s as p,b as i,w as c,r as y,o as n,u as g,d,v as w,x as v}from"./index-BkpRKEF_.js";const f={data(){return{selectedCategory:null,articles:[{id:"001",category:"UI/UX 新知",date:"2024/02/10",title:"Vision Pro 登場！Vision Pro UI/UX 設計重點大公開 (上)",imgUrl:"https://github.com/hexschool/2022-web-layout-training/blob/main/2024%20web-camp/article-image1.png?raw=true",content:`Vision Pro 終於在 2024 年 2 月正式開賣，距離正式發表的 2023 年 6 月，已有半年時間。
這半年間，各種質疑聲不斷冒出，例如「太貴了，這是做給投資家看的產品，不能真的大量生產」、「續航力明顯不足，電池太重，不利於隨身攜帶使用」、「隔絕現實世界，會更加深世代或人際關係的隔閡」。`},{id:"002",category:"UI/UX 新知",date:"2023/11/20",title:"給設計師和工程師的 Figma-Dev Mode 開發模式使用指南 (下)",imgUrl:"https://github.com/hexschool/2022-web-layout-training/blob/main/2024%20web-camp/article-image2.png?raw=true",content:`延續上一篇針對 Dev Mode 介紹
這一篇要說的就是最複雜的「右側面板」啦！
右側面板預設有兩個分頁：Inspect（偵測）, Plugins（外掛），預設開啟 Inspect。 右側面板也可以顯示 Comment，但需要先在左側面板上方點擊 對話 icon，才可以在右側面板看到所有留言紀錄。`},{id:"003",category:"UI/UX 新知",date:"2023/10/18",title:"給設計師和工程師的 Figma-Dev Mode 開發模式使用指南 (上)",imgUrl:"https://github.com/hexschool/2022-web-layout-training/blob/main/2024%20web-camp/article-image3.png?raw=true",content:`身為工程師，除了精進開發技術、學習新框架、看更多的範例、刷更多的題，為了與其他團隊成員有效合作，也需要學習使用其他協作軟體，例如 Trello, Notion。 而如果是要跟設計師合作，目前最主要的就是使用 Figma了！
Figma 是現在最主流的 UIUX 設計軟體，自從開創了「協作功能」之後，幾乎就是把 Adobe XD 和 Sketch 遠遠甩在後頭！`},{id:"004",category:"數位產品設計",date:"2023/09/20",title:"虛擬實境 (VR) 介面設計對使用者沈浸感影響的研究",imgUrl:"https://github.com/hexschool/2022-web-layout-training/blob/main/2024%20web-camp/article-image4.png?raw=true",content:"在當今數位科技的快速發展下，虛擬實境（VR）技術日益受到關注。VR技術為使用者提供了身臨其境的體驗，並在多個領域中得到應用，如遊戲、教育、醫療等。然而，要實現真正的沈浸感需要考慮多個因素，其中介面設計是至關重要的一環。本研究旨在探討不同介面設計對使用者在虛擬環境中的沈浸感的影響，以期為優化VR技術的使用者體驗提供參考。"},{id:"005",category:"數位產品設計",date:"2023/08/10",title:"想打到目標受眾？先讓設計師跟你都瞭解他們痛在哪！",imgUrl:"https://github.com/hexschool/2022-web-layout-training/blob/main/2024%20web-camp/article-image5.png?raw=true",content:`一個準備完整的案主，會在發案之前，先準備好這個設計案的目標、受眾、主要功能、參考資料，然後交給設計師參考、發想、研究、使用。
有些產品的目標受眾很明確，譬如一個比價 App，受眾目標的特徵可能有：年齡層廣、會使用線上購物、手機使用時間長。 但可以比價的東西實在太多了，若五花八門的商品都要拉進去，設計上需要建立非常多的目錄階層、制定非常多種的產品詳細頁面版型等等。...`},{id:"006",category:"前端開發",date:"2023/07/03",title:"React vs. Vue，哪種前端框架比較好用？從三大面向談起",imgUrl:"https://github.com/hexschool/2022-web-layout-training/blob/main/2024%20web-camp/article-image6.png?raw=true",content:"在當今快速發展的前端開發領域中，React和Vue被廣泛認為是兩個最受歡迎和強大的前端框架之一。然而，對於開發人員來說，選擇適合自己的框架可能是一個具有挑戰性的決定。本文將從三個主要面向探討React和Vue：開發效率、性能和生態系統。通過深入比較和分析這些方面，我們將試圖回答一個關鍵問題：React和Vue中哪種前端框架更加適用？這將有助於開發人員更好地理解兩者之間的優勢和劣勢，並在實際應用中做出明智..."}],newArticles:[]}},computed:{filteredArticles(){return this.selectedCategory?this.articles.filter(o=>o.category===this.selectedCategory):this.articles}},methods:{wrapNext(o){return o.replace(/<br>/g,`
`)},selectCategory(o){this.selectedCategory=o}},mounted(){}},u=o=>(w("data-v-2fb8012c"),o=o(),v(),o),U={class:"container"},C={class:"blog-box"},x=u(()=>t("div",{class:"title-box"},[t("h2",null,[t("span",{class:"title fs-2 primary-bg-white-color"},"部落格")]),t("div",{class:"fs-6 text-center primary-500-color"},"不定期分享技術文章")],-1)),I={class:"blog-content"},V={class:"col-blog-9 col-m-12"},k={key:0,class:"article-show"},R={class:"cardImg"},X=["src","alt"],A={class:"cardBody"},F={class:"primary-600-color"},N={class:"tag"},B={class:"fs-5 fw-bold"},D={class:"primary-700-color white-space"},S={key:1},P=u(()=>t("h5",{class:"fs-5"},"目前還沒有文章唷！",-1)),L=[P],M={class:"col-blog-3 col-m-12 primary-bg-100-color side-nav"},T={class:"list"};function E(o,s,$,j,m,l){const a=y("RouterLink");return n(),r("div",U,[t("div",C,[x,t("div",I,[t("div",V,[l.filteredArticles.length!==0?(n(),r("div",k,[(n(!0),r(_,null,p(l.filteredArticles,(e,b)=>(n(),r("div",{key:b,class:"card-style"},[t("div",R,[i(a,{to:`blog/${m.articles.id}`},{default:c(()=>[t("img",{src:e.imgUrl,alt:e.title},null,8,X)]),_:2},1032,["to"])]),t("div",A,[t("div",F,[t("span",null,g(e.date),1),t("span",N,g(e.category),1)]),t("h3",B,g(e.title),1),t("div",D,g(l.wrapNext(e.content)),1)])]))),128))])):(n(),r("div",S,L))]),t("div",M,[t("ul",T,[t("li",null,[i(a,{to:"/blogs",onClick:s[0]||(s[0]=e=>l.selectCategory(null))},{default:c(()=>[d("全部文章")]),_:1})]),t("li",null,[i(a,{to:"/blogs/UIUX新知",onClick:s[1]||(s[1]=e=>l.selectCategory("UI/UX 新知"))},{default:c(()=>[d("UI/UX 新知")]),_:1})]),t("li",null,[i(a,{to:"/blogs/數位產品設計",onClick:s[2]||(s[2]=e=>l.selectCategory("數位產品設計"))},{default:c(()=>[d("數位產品設計")]),_:1})]),t("li",null,[i(a,{to:"/blogs/平面設計",onClick:s[3]||(s[3]=e=>l.selectCategory("平面設計"))},{default:c(()=>[d("平面設計")]),_:1})]),t("li",null,[i(a,{to:"/blogs/前端開發",onClick:s[4]||(s[4]=e=>l.selectCategory("前端開發"))},{default:c(()=>[d("前端開發")]),_:1})])])])])])])}const z=h(f,[["render",E],["__scopeId","data-v-2fb8012c"]]);export{z as default};