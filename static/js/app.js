webpackJsonp([2,0],[function(t,e,r){"use strict";function s(t){return t&&t.__esModule?t:{"default":t}}var n=r(34),a=s(n),i=r(5),u=s(i),l=r(31),o=s(l),c=r(21),h=s(c),d=r(11),f=s(d),m=r(25),_=s(m);u["default"].use(o["default"]);var p=new o["default"]({mode:"history",linkActiveClass:"active",routes:[{path:"/dashboard",component:_["default"]},{path:"*",component:_["default"]}]});new u["default"]((0,a["default"])({Store:f["default"],router:p},h["default"])).$mount("#app")},,,,,,,,,,,function(t,e,r){"use strict";function s(t){return t&&t.__esModule?t:{"default":t}}Object.defineProperty(e,"__esModule",{value:!0});var n=r(5),a=s(n),i=r(32),u=s(i);a["default"].use(u["default"]);var l=new u["default"].Store({state:{count:0},mutation:{increment:function(t){t.count++}},actions:{increment:function(t){var e=t.commit;e("increment")}}});e["default"]=l},function(t,e,r){"use strict";function s(t){return t&&t.__esModule?t:{"default":t}}Object.defineProperty(e,"__esModule",{value:!0});var n=r(23),a=s(n);e["default"]={data:function(){return{menus:[{url:"/",text:"动画",num:100,items:[{url:"/",text:"MAD·AMV"},{url:"/",text:"MMD·3D"},{url:"/",text:"短片·手书·配音"},{url:"/",text:"综合"}]},{url:"/",text:"番剧",num:58,items:[{url:"/",text:"连载动画"},{url:"/",text:"完结动画"},{url:"/",text:"国产动画"},{url:"/",text:"资讯"},{url:"/",text:"官方延伸"},{url:"/",text:"新番时间表"},{url:"/",text:"番剧索引"}]},{url:"/",text:"音乐",num:764,items:[{url:"/",text:"原创音乐"},{url:"/",text:"翻唱"},{url:"/",text:"VOCALOID·UTAU"},{url:"/",text:"演奏"},{url:"/",text:"三次元音乐"},{url:"/",text:"OP/ED/OST"},{url:"/",text:"音乐选集"}]},{url:"/",text:"舞蹈",num:110,items:[{url:"/",text:"宅舞"},{url:"/",text:"三次元舞蹈"},{url:"/",text:"舞蹈教程"}]},{url:"/",text:"游戏",num:"999+",items:[{url:"/",text:"单机联机"},{url:"/",text:"网游·电竞"},{url:"/",text:"音游"},{url:"/",text:"Mugen"},{url:"/",text:"GMV"}]},{url:"/",text:"科技",num:659,items:[{url:"/",text:"纪录片"},{url:"/",text:"趣味科普人文"},{url:"/",text:"野生技术协会"},{url:"/",text:"演讲·公开课"},{url:"/",text:"星海"},{url:"/",text:"数码"},{url:"/",text:"机械"}]},{url:"/",text:"生活",num:885,items:[{url:"/",text:"搞笑"},{url:"/",text:"日常"},{url:"/",text:"美食圈"},{url:"/",text:"动物圈"},{url:"/",text:"手工"},{url:"/",text:"绘画"},{url:"/",text:"运动"}]},{url:"/",text:"鬼畜",num:93,items:[{url:"/",text:"鬼畜调教"},{url:"/",text:"音MAD"},{url:"/",text:"人力VOCALOID"},{url:"/",text:"教程演示"}]},{url:"/",text:"时尚",num:203,items:[{url:"/",text:"美妆"},{url:"/",text:"服饰"},{url:"/",text:"健身"},{url:"/",text:"资讯"}]},{url:"/",text:"广告",num:28,items:[{url:"/",text:"其实我没有"}]},{url:"/",text:"娱乐",num:773,items:[{url:"/",text:"综艺"},{url:"/",text:"明星"},{url:"/",text:"韩流相关"}]},{url:"/",text:"影视",num:993,items:[{url:"/",text:"电影"},{url:"/",text:"电视剧"}]}],onlines:[{url:"/",text:"萌宅推荐"},{url:"/",text:"手机直播"},{url:"/",text:"绘画专区"},{url:"/",text:"唱见舞见"},{url:"/",text:"御宅文化"},{url:"/",text:"生活娱乐"},{url:"/",text:"单机联机"},{url:"/",text:"网络游戏"},{url:"/",text:"电子竞技"},{url:"/",text:"手游直播"},{url:"/",text:"放映厅"}]}},components:{SmallMenu:a["default"]}}},function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e["default"]={props:["items"]}},function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e["default"]={data:function(){return{set:0,showImg:"",ranks:[{url:"http://bh3.biligame.com/yuyue/",text:"崩坏3",img:"http://i0.hdslb.com/bfs/game/cbab91ba8981913b894c74433eee5ebfdd80910b.png"},{url:"http://ntdgm.biligame.com/yuyue.html",text:"那兔之大国梦",img:"http://i0.hdslb.com/bfs/game/c0d223aa39c4a2ad9a9e201399fb2c6109eb3538.png"},{url:"http://sdmht.biligame.com/yuyue.html",text:"神代梦华谭",img:"http://i0.hdslb.com/bfs/game/6b138b68d4bcb75c486ffa7e592970298e659c29.png"},{url:"http://tank.biligame.com/yuyue.html",text:"装甲联盟",img:"http://i0.hdslb.com/bfs/game/82d16f654bfcc27f728bc8a8e9fb193310484eee.png"},{url:"http://kfq.biligame.com/yuyue/",text:"少女咖啡枪",img:"http://i0.hdslb.com/bfs/game/0f38471ed9f2260a6625fc3df1cf947994be1541.png"},{url:"http://madoka.biligame.com/yuyue.html",text:"魔法少女小圆",img:"http://i0.hdslb.com/bfs/game/c776546e88a6c2ddf6d5c3fc1bab388ea4154ddd.png"},{url:"http://hywz.biligame.com/yuyue.html",text:"幻影纹章",img:"http://i0.hdslb.com/bfs/game/59d24a99226e9d1d273708b1a78452c811bf0aa9.png"}]}},methods:{show:function(t){document.querySelector(".imgdiv").style.background="url("+t+")"},leave:function(){document.querySelector(".imgdiv").style.background=""},hasClass:function(t,e){var r=t.split(" "),s=!1;return r.forEach(function(t){t===e&&(s=!0)}),s}},mounted:function(){},destroyed:function(){}}},function(t,e,r){"use strict";function s(t){return t&&t.__esModule?t:{"default":t}}Object.defineProperty(e,"__esModule",{value:!0});var n=r(24),a=s(n),i=r(22),u=s(i);e["default"]={data:function(){return{}},components:{TopNav:a["default"],BgNav:u["default"]},methods:{},mounted:function(){},destroyed:function(){}}},function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e,r){t.exports=r.p+"static/img/r1.gif"},function(t,e,r){var s,n,a=r(26);n=s=s||{},"object"!=typeof s["default"]&&"function"!=typeof s["default"]||(n=s=s["default"]),"function"==typeof n&&(n=n.options),n.render=a.render,n.staticRenderFns=a.staticRenderFns,t.exports=s},function(t,e,r){var s,n;r(18),s=r(12);var a=r(29);n=s=s||{},"object"!=typeof s["default"]&&"function"!=typeof s["default"]||(n=s=s["default"]),"function"==typeof n&&(n=n.options),n.render=a.render,n.staticRenderFns=a.staticRenderFns,t.exports=s},function(t,e,r){var s,n;r(19),s=r(13);var a=r(30);n=s=s||{},"object"!=typeof s["default"]&&"function"!=typeof s["default"]||(n=s=s["default"]),"function"==typeof n&&(n=n.options),n.render=a.render,n.staticRenderFns=a.staticRenderFns,t.exports=s},function(t,e,r){var s,n;r(17),s=r(14);var a=r(28);n=s=s||{},"object"!=typeof s["default"]&&"function"!=typeof s["default"]||(n=s=s["default"]),"function"==typeof n&&(n=n.options),n.render=a.render,n.staticRenderFns=a.staticRenderFns,t.exports=s},function(t,e,r){var s,n;r(16),s=r(15);var a=r(27);n=s=s||{},"object"!=typeof s["default"]&&"function"!=typeof s["default"]||(n=s=s["default"]),"function"==typeof n&&(n=n.options),n.render=a.render,n.staticRenderFns=a.staticRenderFns,t.exports=s},function(module,exports){module.exports={render:function(){with(this)return _h("div",{staticClass:"wrapper"},[_h("router-view")])},staticRenderFns:[]}},function(module,exports){module.exports={render:function(){with(this)return _h("div",{staticClass:"content"},[_h("topNav")," ",_h("bgNav")])},staticRenderFns:[]}},function(module,exports){module.exports={render:function(){with(this)return _h("nav",{staticClass:"top-nav"},[_m(0)," ",_h("div",{staticClass:"nav-content"},[_h("ul",{staticClass:"nav"},[_h("li",[_h("router-link",{attrs:{to:{path:"/"},title:"主站"}},["主站"])])," ",_h("li",[_h("router-link",{attrs:{to:{path:"/"},title:"画友"}},["画友"])])," ",_h("li",[_h("router-link",{staticClass:"show-tag",attrs:{to:{path:"/"},title:"游戏中心",id:"gameCenter"}},["游戏中心"])," ",_h("div",{staticClass:"show-content"},[_m(1)," ",_h("div",{staticClass:"right"},[_m(2)," ",_h("div",{staticClass:"all"},[_l(ranks,function(t){return _h("a",{attrs:{target:"_blank",href:t.url},on:{mouseover:function(e){show(t.img)},mouseout:leave}},[_h("span",[_s(t.text)])])})])])," ",_m(3)])])," ",_h("li",[_h("router-link",{staticClass:"show-tag",attrs:{to:{path:"/"},title:"直播",id:"online"}},["直播"])," ",_m(4)])," ",_h("li",[_h("router-link",{attrs:{to:{path:"/"},title:"周边"}},["周边"])])," ",_h("li",[_h("router-link",{attrs:{to:{path:"/"},title:"BML"}},["BML"])])])," ",_h("div",{staticClass:"user-box"},[_h("ul",[_h("li",[_h("router-link",{attrs:{to:{path:"/"},title:"登录"}},["登录"])])," ",_m(5)," ",_h("li",[_h("router-link",{attrs:{to:{path:"/"},title:"注册"}},["注册"])])," ",_h("li",{staticClass:"none"},[_h("router-link",{staticClass:"i-link",attrs:{to:{path:"/"},title:"投稿"}},["投 稿"])])])])])])},staticRenderFns:[function(){with(this)return _h("div",{staticClass:"bg"},[_h("div",{staticClass:"bg-ma"})," ",_h("div",{staticClass:"bg-model"})])},function(){with(this)return _h("div",{staticClass:"left"},[_h("div",{staticClass:"banner"},[_h("a",{attrs:{target:"_blank",href:"http://vipgift.biligame.com/"}},[_h("img",{attrs:{src:"http://i0.hdslb.com/bfs/game/32bbcb85fb7c344f30f46a5b30f9219243ec9740.jpg",alt:"大会员礼包"}})," ",_h("span",["大会员礼包"])])])," ",_h("div",{staticClass:"brief clearfix"},[_h("a",{attrs:{target:"_blank",title:"命运-冠位指定（Fate/GO）",href:"http://acg.tv/u1Hz"}},[_h("img",{attrs:{src:"http://i0.hdslb.com/bfs/game/f7d4ee0877089e4079b8f0b4f5c95dd4ceba512a.png",alt:"命运-冠位指定（Fate/GO）"}})," ",_h("span",["命运-冠位指定（Fate/GO）"])])," ",_h("a",{attrs:{target:"_blank",title:"如果的世界",href:"http://rgdsj.biligame.com/"}},[_h("img",{attrs:{src:"http://i0.hdslb.com/bfs/game/b8132ed0de34f1cd53bab5e2a40c9f48c01542fb.png",alt:"如果的世界"}})," ",_h("span",["如果的世界"])])," ",_h("a",{attrs:{target:"_blank",title:"阴阳师",href:"http://yys.biligame.com/"}},[_h("img",{attrs:{src:"http://i0.hdslb.com/bfs/game/3b205675d44bbd90e6ea46d4baec9674bda6e642.png",alt:"阴阳师"}})," ",_h("span",["阴阳师"])])])])},function(){with(this)return _h("a",{staticClass:"bbs",attrs:{target:"_blank",href:"http://bbs.biligame.com"}},["游戏论坛"])},function(){with(this)return _h("div",{staticClass:"imgdiv",attrs:{style:"background-repeat: no-repeat;"}})},function(){with(this)return _h("div",{staticClass:"show-content"},["直播"])},function(){with(this)return _h("i",{staticClass:"s-line"})}]}},function(module,exports,__webpack_require__){module.exports={render:function(){with(this)return _h("div",{staticClass:"header"},[_h("div",{staticClass:"h-content"},[_h("div",{staticClass:"h-info"},[_h("router-link",{staticClass:"logo",attrs:{to:{path:"/"}}})," ",_m(0)," ",_h("div",{staticClass:"search"},[_h("router-link",{staticClass:"link-ranking",attrs:{to:{path:"/"}}},[_m(1)])," ",_m(2)])])])," ",_h("div",{staticClass:"h-menu"},[_h("div",{staticClass:"menu-wrapper"},[_h("ul",[_h("li",[_h("router-link",{staticClass:"dashboard",attrs:{to:{path:"/"}}},[_m(3)])])," ",_l(menus,function(t){return _h("li",{staticClass:"other-menu"},[_h("router-link",{attrs:{to:{path:t.url}}},[_h("div",{staticClass:"menu-num"},[_h("span",{staticClass:"num"},[_s(t.num)])])," ",_h("span",{staticClass:"menu-text"},[_s(t.text)])])," ",_h("smallMenu",{attrs:{items:t.items}})])})," ",_h("li",{staticClass:"last-menu"},[_h("router-link",{staticClass:"square",attrs:{to:{path:"/"}}},[_m(4)])])," ",_h("li",{staticClass:"last-menu"},[_h("router-link",{staticClass:"live",attrs:{to:{path:"/"}}},[_m(5)])," ",_h("smallMenu",{attrs:{items:onlines}})])])," ",_h("div",{staticClass:"right-menu"},[_m(6)," ",_h("router-link",{staticClass:"phone",attrs:{to:{path:"/"}}},[_m(7)])])])])])},staticRenderFns:[function(){with(this)return _h("a",{staticClass:"banner-title"},["哔哩哔哩弹幕视频网 - ( ゜- ゜)つロ 乾杯~ - bilibili"])},function(){with(this)return _h("span",["排行榜"])},function(){with(this)return _h("form",[_h("input",{attrs:{type:"text",name:"search",placeholder:"如何在MC中还原《三体》原著"}})," ",_h("button",{attrs:{type:"button"}})])},function(){with(this)return _h("span",{staticClass:"menu-text"},["首页"])},function(){with(this)return _h("span",["广场"])},function(){with(this)return _h("span",["直播"])},function(){with(this)return _h("img",{attrs:{src:__webpack_require__(20),alt:"动起来"}})},function(){with(this)return _h("div",{staticClass:"mobile-p-box"},[_h("div",{staticClass:"mobile-p-qrcode"})])}]}},function(module,exports){module.exports={render:function(){with(this)return _h("ul",{staticClass:"small-menu"},[_l(items,function(t){return _h("li",[_h("router-link",{attrs:{to:{path:t.url}}},[_h("span",[_s(t.text),_m(0)])])])})])},staticRenderFns:[function(){with(this)return _h("em")}]}}]);
//# sourceMappingURL=app.js.map