(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,,,,,,,,,function(e,t,n){e.exports=n(30)},,,,,,,,function(e,t,n){},function(e,t,n){e.exports=n.p+"static/media/model3.2b3bb081.jpg"},function(e,t,n){e.exports=n.p+"static/media/bolt.3b938641.jpg"},function(e,t,n){e.exports=n.p+"static/media/leaf.ce7844ba.jpg"},function(e,t,n){e.exports=n.p+"static/media/kona.91ed75b9.jpg"},function(e,t,n){e.exports=n.p+"static/media/etron.0ef0a743.jpg"},function(e,t,n){e.exports=n.p+"static/media/i3.4b334f0e.jpg"},function(e,t,n){e.exports=n.p+"static/media/fiat.61a9a223.jpg"},function(e,t,n){e.exports=n.p+"static/media/golf.f41734f7.jpg"},function(e,t,n){e.exports=n.p+"static/media/bmw330e.f4e6f276.jpg"},function(e,t,n){e.exports=n.p+"static/media/prime.6b50995d.jpg"},function(e,t,n){e.exports=n.p+"static/media/volt.3a3e8402.jpg"},function(e,t,n){e.exports=n.p+"static/media/niro.7d919d46.jpg"},function(e,t,n){"use strict";n.r(t);var a=n(0),l=n.n(a),r=n(6),c=n.n(r),o=n(2),i=n(4),s=n(3),u=n(1),m=n(5),d=n(8),f=n.n(d),p=function(e){function t(e){var n;return Object(o.a)(this,t),(n=Object(i.a)(this,Object(s.a)(t).call(this,e))).state={data:[]},n}return Object(m.a)(t,e),Object(u.a)(t,[{key:"componentWillMount",value:function(){var e=this;fetch("https://api.apify.com/v1/rG44NsjnfukCkKecE/crawlers/Z79rSy82LB9BxDyaa/lastExec/results?token=u8HqK39BcB8PKAFsjMtb9Bnnh").then(function(e){return e.json()}).then(function(e){for(var t=[],n=0;n<e.length;n++)t=0===n?e[0].pageFunctionResult:t.concat(e[n].pageFunctionResult);return t}).then(function(e){return e.sort(function(e,t){return e.date<t.date?1:t.date<e.date?-1:0})}).then(function(e){for(var t=0;t<e.length;t++)e[t].date=new Date(1e3*e[t].date);return e}).then(function(t){e.setState({data:t})})}},{key:"componentWillUnmount",value:function(){this.ref.off()}},{key:"_getRandomColor",value:function(){return"#"+("000000"+Math.floor(16777215*Math.random()).toString(16)).substr(-6)}},{key:"render",value:function(){return l.a.createElement("div",{class:"box"},l.a.createElement("span",{class:""},l.a.createElement("b",null,"Latest EV News")),l.a.createElement("hr",null),this.state.data.map(function(e){return l.a.createElement("a",{onclick:"ga('send', 'event', 'NewsItem', 'clicked', 'textlinks');",target:"_blank",class:"item",href:e.link,rel:"noopener noreferrer"},l.a.createElement("div",{key:e.text,class:"newsItem"},l.a.createElement("div",null,l.a.createElement("img",{src:e.image,alt:"",class:"newsImage"})),l.a.createElement("div",null,l.a.createElement("p",null,e.text.substring(0,e.text.indexOf("http")),"\xa0",l.a.createElement("span",{class:"source"},l.a.createElement("i",null,e.source)))),l.a.createElement("div",{class:"newsItemRight"},l.a.createElement("p",{class:"time"},l.a.createElement(f.a,{date:e.date})))))}))}}]),t}(l.a.Component),E=(n(17),n(18)),g=n(19),h=n(20),v=n(21),b=n(22),j=n(23),k=n(24),w=n(25),y=n(26),x=n(27),O=n(28),I=n(29),B=function(e){function t(e){var n;return Object(o.a)(this,t),(n=Object(i.a)(this,Object(s.a)(t).call(this,e))).state={data:[],loading:!1,region:"SF Bay Area"},n}return Object(m.a)(t,e),Object(u.a)(t,[{key:"componentWillMount",value:function(){this.setState({loading:!0}),this._getLeases()}},{key:"componentWillUnmount",value:function(){}},{key:"_getLeases",value:function(){var e=this;fetch("https://electrade-server.herokuapp.com/api/leases/SF/get").then(function(e){return e.json()}).then(function(t){e.setState({leases:t})})}},{key:"render",value:function(){return l.a.createElement("div",{class:"box"},l.a.createElement("p",null,l.a.createElement("span",{class:""},l.a.createElement("b",null,"Best local Electric Vehicle lease deals around "),l.a.createElement("select",null,l.a.createElement("option",{value:"San Francisco, CA"},"San Francisco, CA"))),l.a.createElement("br",null),l.a.createElement("hr",null)),this.state.leases?l.a.createElement("table",null,l.a.createElement("th",null,l.a.createElement("td",null,"Image"),l.a.createElement("td",null,"Make and model"),l.a.createElement("td",null,"$/ mo"),l.a.createElement("td",null,"Months"),l.a.createElement("td",null,"Down + Acq Fee"),l.a.createElement("td",null,"Miles / Yr"),l.a.createElement("td",null,"$/ mo avg"),l.a.createElement("td",null,"$ Total"),l.a.createElement("td",null,"Expires")),this.state.leases.map(function(e){return l.a.createElement("tr",null,l.a.createElement("a",null,l.a.createElement("td",null,l.a.createElement("img",{class:"videoImage",src:"Bolt"===e.teaserImage?g:"Leaf"===e.teaserImage?h:"Etron"===e.teaserImage?b:"Kona"===e.teaserImage?v:"500e"===e.teaserImage?k:"i3"===e.teaserImage?j:"Golf"===e.teaserImage?w:"330e"===e.teaserImage?y:"Prime"===e.teaserImage?x:"Volt"===e.teaserImage?O:"Niro"===e.teaserImage?I:E})),l.a.createElement("td",null,l.a.createElement("span",null,e["Make and Model"]," ",e.Year)),l.a.createElement("td",null,e.$.mo),l.a.createElement("td",null,e.months),l.a.createElement("td",null,e["down+acq"]),l.a.createElement("td",null,e.miles.yr),l.a.createElement("td",{style:{color:"#98ff98"}},e.$["mo avg"]),l.a.createElement("td",null,e["$ total"]),l.a.createElement("td",null,e.Exp)),l.a.createElement("hr",null))})):null)}}]),t}(l.a.Component),M=function(e){function t(e){var n;return Object(o.a)(this,t),(n=Object(i.a)(this,Object(s.a)(t).call(this,e))).state={},n}return Object(m.a)(t,e),Object(u.a)(t,[{key:"componentWillMount",value:function(){}},{key:"componentWillUnmount",value:function(){}},{key:"render",value:function(){return l.a.createElement("div",null,l.a.createElement(B,null))}}]),t}(l.a.Component),C=function(e){function t(e){var n;return Object(o.a)(this,t),(n=Object(i.a)(this,Object(s.a)(t).call(this,e))).state={},n}return Object(m.a)(t,e),Object(u.a)(t,[{key:"onError",value:function(e){console.log(e)}}]),Object(u.a)(t,[{key:"componentDidMount",value:function(){}},{key:"render",value:function(){return l.a.createElement("div",null,l.a.createElement("div",{class:"navbar"},l.a.createElement("span",null,l.a.createElement("img",{src:"/electron.png",alt:""}),"\xa0",l.a.createElement("span",{class:"title"},l.a.createElement("b",null,"electrade")," | Follow EV news, track local electric car deals."),l.a.createElement("a",{class:"AppButton title time",href:"https://itunes.apple.com/us/app/id1445602414",target:"blank"},"Get the App"))),l.a.createElement("div",{class:"container"},l.a.createElement("div",{class:"news"},l.a.createElement(p,null)),l.a.createElement("div",{class:"listings"},l.a.createElement(M,null))))}}]),t}(l.a.Component);c.a.render(l.a.createElement(C,null),document.getElementById("root"));var W=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function F(e){navigator.serviceWorker.register(e).then(function(e){e.onupdatefound=function(){var t=e.installing;t.onstatechange=function(){"installed"===t.state&&(navigator.serviceWorker.controller?console.log("New content is available; please refresh."):console.log("Content is cached for offline use."))}}}).catch(function(e){console.error("Error during service worker registration:",e)})}var S=document.getElementById("root");S.hasChildNodes()?Object(r.hydrate)(l.a.createElement(C,null),S):Object(r.render)(l.a.createElement(C,null),S),function(){if("serviceWorker"in navigator){if(new URL("",window.location).origin!==window.location.origin)return;window.addEventListener("load",function(){var e="".concat("","/service-worker.js");W?function(e){fetch(e).then(function(t){404===t.status||-1===t.headers.get("content-type").indexOf("javascript")?navigator.serviceWorker.ready.then(function(e){e.unregister().then(function(){window.location.reload()})}):F(e)}).catch(function(){console.log("No internet connection found. App is running in offline mode.")})}(e):F(e)})}}()}],[[9,1,2]]]);
//# sourceMappingURL=main.ff8c1ef1.chunk.js.map