(window.webpackJsonpartopod=window.webpackJsonpartopod||[]).push([[0],{111:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),i=n(21),c=n.n(i),o=(n(67),n(68),n(8)),s=n(5),l=n(9),u=n(10),p=n(11),h=n(3),d=n.n(h),m=n(12),f=n(4),b=n(52),E=n.n(b),g=n(55),v=n.n(g),O=n(14),w=n(19),y=n(17),j=n(26),x=n.n(j),k=function(e,t,n){var a=function(e){return Math.PI/180*e},r=function(e,t){return Math.PI/180*(e-t)},i=e[0],c=t[0],o=e[1],s=t[1],l=r(c,i),u=r(s,o);i=a(i),c=a(c);var p=Math.pow(Math.sin(l/2),2)+Math.pow(Math.sin(u/2),2)*Math.cos(i)*Math.cos(c),h=6371*(2*Math.asin(Math.sqrt(p)));return n&&(h/=1.60934),h};function S(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function C(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?S(n,!0).forEach((function(t){Object(y.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):S(n).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var T={location:{lat:0,lng:0},exhibitions:[],selected:[]},N=function(e){return{type:"SELECTED_EXHIBITIONS",exhibition:e}},L=function(e){return{type:"DESELECT_EXHIBITION",exhibition:e}},I=function(e){return{type:"SET_LOCATION",location:e}},A=function(e){return{type:"SET_CLOSEST",location:e}},D=function(e){return function(){var t=Object(m.a)(d.a.mark((function t(n){var a,r,i;return d.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,x.a.get("https://artopod.herokuapp.com/api");case 2:a=t.sent,r=a.data,i=r.map((function(t){return C({},t,{distance:k([e.lat,e.lng],[t.lat,t.lng],!0)})})).sort((function(e,t){return e.distance>t.distance?1:-1})),n({type:"GOT_EXHIBITIONS",exhibitions:i});case 6:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},M=function(e){return function(){var t=Object(m.a)(d.a.mark((function t(n){return d.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:n({type:"GOT_SELECTED",selected:e});case 1:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},_=function(e){return function(){var t=Object(m.a)(d.a.mark((function t(n){return d.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:n(L(e));case 1:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},P=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:T,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"GOT_EXHIBITIONS":return C({},e,{exhibitions:t.exhibitions});case"GOT_SELECTED":return C({},e,{selected:e.selected});case"SELECTED_EXHIBITIONS":return C({},e,{selected:[t.exhibition].concat(Object(w.a)(e.selected))});case"DESELECT_EXHIBITION":return C({},e,{selected:e.selected.filter((function(e){return e.id!==t.exhibition.id}))});case"FAKE_SELECTED":return C({},e,{selected:e.exhibitions.slice(0,5)});case"SET_LOCATION":return C({},e,{location:t.location});case"GET_DISTANCES":return C({},e,{exhibitions:e.exhibitions.map((function(e){return e.distance=k([t.location.lat,t.location.lng],[e.lat,e.lng],!0)})).sort((function(e,t){return e.distance<t.distance}))});case"SET_CLOSEST":return C({},e,{selected:[].concat(Object(w.a)(e.selected),Object(w.a)(e.exhibitions.slice(0,5)))});default:return e}},B=n(27),V=n.n(B),H=n(54),J=n.n(H),X=function(e){function t(e){var n;return Object(o.a)(this,t),(n=Object(l.a)(this,Object(u.a)(t).call(this,e))).handleClick=n.handleClick.bind(Object(f.a)(n)),n}return Object(p.a)(t,e),Object(s.a)(t,[{key:"handleClick",value:function(e){var t=this.props.exh;this.props.selected.includes(t)?this.props.deselectExhibition(t):this.props.selectExhibition(t)}},{key:"render",value:function(){var e=this.props.exh;return r.a.createElement("div",{className:"map-item"},this.props.selected.includes(e)?r.a.createElement("div",{className:"map-deselect-icon",onClick:this.handleClick},r.a.createElement(V.a,null)):r.a.createElement("div",{className:"map-select-icon",onClick:this.handleClick},r.a.createElement(J.a,null)),r.a.createElement("p",null,r.a.createElement("i",null,e.title)),r.a.createElement("p",null,e.gallery))}}]),t}(r.a.Component),G=Object(O.b)((function(e){return{selected:e.selected}}),(function(e){return{selectExhibition:function(t){return e((n=t,function(){var e=Object(m.a)(d.a.mark((function e(t){return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t(N(n));case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()));var n},deselectExhibition:function(t){return e(_(t))}}}))(X),z=function(e){function t(e){var n;return Object(o.a)(this,t),(n=Object(l.a)(this,Object(u.a)(t).call(this,e))).state={mouse:!1},n.handleClick=n.handleClick.bind(Object(f.a)(n)),n}return Object(p.a)(t,e),Object(s.a)(t,[{key:"handleClick",value:function(e){this.setState({mouse:!this.state.mouse})}},{key:"render",value:function(){var e=this,t=this.props.selected?"marker-selected":"marker";return r.a.createElement("div",{className:t,onClick:function(){return e.handleClick()}},this.state.mouse?r.a.createElement(G,{exh:this.props.exh}):r.a.createElement(v.a,null))}}]),t}(r.a.Component),F=n(56),U=n.n(F);function W(){return r.a.createElement("div",{className:"person-pin"},r.a.createElement(U.a,null))}var q=n(123),K=n(124),R=Object(q.a)((function(e){return{progress:{margin:e.spacing(2)}}}));function Y(){var e=R();return r.a.createElement("div",{className:"loading"},r.a.createElement("h3",null,"Mapping exhibitions near you!"),r.a.createElement("p",null,"If nothing seems to be happening, please check that location is enabled!"),r.a.createElement(K.a,{className:e.progress}))}var Z=function(e){function t(){var e;return Object(o.a)(this,t),(e=Object(l.a)(this,Object(u.a)(t).call(this))).state={userLocation:{lat:0,lng:0},zoom:14,loading:!0},e.loadExhibitions=e.loadExhibitions.bind(Object(f.a)(e)),e}return Object(p.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){var e=Object(m.a)(d.a.mark((function e(){var t=this;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,navigator.geolocation.getCurrentPosition((function(e){var n=e.coords,a=n.latitude,r=n.longitude;t.setState({userLocation:{lat:a,lng:r},loading:!1}),!1===t.state.loading&&t.loadExhibitions()}));case 2:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()},{key:"loadExhibitions",value:function(){var e=Object(m.a)(d.a.mark((function e(){return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.props.setLocation(this.state.userLocation);case 2:return e.next=4,this.props.getExhibitions(this.state.userLocation);case 4:return e.next=6,this.props.setClosest(this.state.userLocation);case 6:return e.next=8,this.props.getSelected();case 8:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this;return this.state.loading?r.a.createElement(Y,null):r.a.createElement("div",{className:"map-container"},r.a.createElement("div",{id:"map"},r.a.createElement(E.a,{bootstrapURLKeys:{key:"AIzaSyCTILRbtZ7JJi2hgtJkL5SoCSJ0Tq9mwPA"},center:this.state.userLocation,defaultZoom:this.state.zoom},r.a.createElement(W,{lat:this.props.location.lat,lng:this.props.location.lng}),this.props.exhibitions.map((function(t){return r.a.createElement(z,{key:t.id,lat:t.lat,lng:t.lng,exh:t,selected:!!e.props.selected.includes(t)})})))))}}]),t}(r.a.Component),$=Object(O.b)((function(e){return{exhibitions:e.exhibitions,selected:e.selected,location:e.location}}),(function(e){return{getExhibitions:function(t){return e(D(t))},getSelected:function(){return e(M())},setClosest:function(t){return e(function(e){return function(){var t=Object(m.a)(d.a.mark((function t(n){return d.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:n(A(e));case 1:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()}(t))},setLocation:function(t){return e(function(e){return function(){var t=Object(m.a)(d.a.mark((function t(n){return d.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:n(I(e));case 1:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()}(t))}}}))(Z),Q=n(34);var ee=function(e){var t=e.exh,n={month:"long",day:"numeric",year:"numeric"},a=Q.DateTime.fromISO(t.showStart).setLocale("en-US").toLocaleString(n),i=Q.DateTime.fromISO(t.showEnd).setLocale("en-US").toLocaleString(n),c="https://artforum.com".concat(t.imgUrl);return r.a.createElement("div",{className:"about body"},r.a.createElement("p",null,r.a.createElement("em",null,t.title)," at ",t.gallery),r.a.createElement("p",null,t.hours),r.a.createElement("p",null,t.distance.toFixed(2),"mi away"),r.a.createElement("p",{className:"multi-line"},t.description),r.a.createElement("p",null,"Open ",a," to ",i),r.a.createElement("p",null,t.hours),r.a.createElement("img",{src:c,alt:t.imgCaption,className:"single-exhibition-image"}),r.a.createElement("p",null,t.imgCaption),r.a.createElement("em",null,t.gallery),r.a.createElement("p",null,"Address: ",t.address,", ",t.city,", ",t.zip),r.a.createElement("p",null,t.galleryEmail),r.a.createElement("p",null,t.phone))},te=function(e){function t(e){var n;return Object(o.a)(this,t),(n=Object(l.a)(this,Object(u.a)(t).call(this,e))).state={singleView:!1},n.handleClick=n.handleClick.bind(Object(f.a)(n)),n.toggleSingleView=n.toggleSingleView.bind(Object(f.a)(n)),n}return Object(p.a)(t,e),Object(s.a)(t,[{key:"handleClick",value:function(e){this.props.deselectExhibition(this.props.row)}},{key:"toggleSingleView",value:function(e){this.setState({singleView:!this.state.singleView})}},{key:"render",value:function(){return r.a.createElement("div",{className:"list-row"},r.a.createElement("div",{className:"deselect-icon",onClick:this.handleClick},r.a.createElement(V.a,null)),r.a.createElement("div",{className:"list-row-info",onClick:this.toggleSingleView},this.state.singleView?r.a.createElement(ee,{exh:this.props.row}):r.a.createElement("div",null,r.a.createElement("p",null,r.a.createElement("em",null,this.props.row.title)," at ",this.props.row.gallery),r.a.createElement("p",null,this.props.row.hours),r.a.createElement("p",null,this.props.row.distance.toFixed(2),"mi away"))))}}]),t}(r.a.Component),ne=Object(O.b)(null,(function(e){return{deselectExhibition:function(t){return e(_(t))}}}))(te);var ae=function(){return r.a.createElement("div",{className:"about body"},r.a.createElement("p",null,"Artopod is a single-page application by",r.a.createElement("a",{href:"https://siwinlo.github.io"}," Siwin Lo"),", which finds 5 art exhibitions close to you, and lets you take it from there."),r.a.createElement("p",null,"Perfect for a New York-paced lunch-hour and inspired by location-based apps like Tinder and Yelp, Artopod helps users find art shows close by without the overwhelming choice and cumbersome nature of traditional listings."))},re=function(e){function t(e){var n;return Object(o.a)(this,t),(n=Object(l.a)(this,Object(u.a)(t).call(this,e))).state={about:!1,loading:!0,message:"Finding exhibitions near you"},n.toggleAbout=n.toggleAbout.bind(Object(f.a)(n)),n.isLoading=n.isLoading.bind(Object(f.a)(n)),n}return Object(p.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){var e=Object(m.a)(d.a.mark((function e(){return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.props.getSelected();case 2:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"toggleAbout",value:function(e){this.setState({about:!this.state.about})}},{key:"isLoading",value:function(){this.props.exhibitions.length>0&&this.setState({loading:!1,message:"Select exhibitions from the map"})}},{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("div",{className:"banner"},r.a.createElement("h1",{onClick:this.toggleAbout},"Artopod"),r.a.createElement("div",{className:"about",onClick:this.toggleAbout},this.state.about?r.a.createElement(ae,null):null)),r.a.createElement("div",{className:"list-container"},this.props.selected.length>0?this.props.selected.map((function(e){return r.a.createElement(ne,{key:e.id,row:e})})):r.a.createElement("h3",{className:"loading"},this.state.message)))}}]),t}(r.a.Component),ie=Object(O.b)((function(e){return{exhibitions:e.exhibitions,selected:e.selected}}),(function(e){return{getExhibitions:function(){return e(D())},getSelected:function(){return e(M())}}}))(re),ce=function(e){function t(){var e;return Object(o.a)(this,t),(e=Object(l.a)(this,Object(u.a)(t).call(this))).state={about:!1},e}return Object(p.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"main"},r.a.createElement("div",{className:"main-container"},r.a.createElement("div",null,r.a.createElement($,null)),r.a.createElement("div",null,r.a.createElement(ie,null))))}}]),t}(r.a.Component);var oe=function(){return r.a.createElement("div",{className:"App"},r.a.createElement(ce,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var se=n(18),le=n(57),ue=n(58),pe=n.n(ue),he=n(59),de=Object(se.createStore)(P,Object(le.composeWithDevTools)(Object(se.applyMiddleware)(he.a.withExtraArgument({axios:x.a}),pe.a)));c.a.render(r.a.createElement(O.a,{store:de},r.a.createElement(oe,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))},62:function(e,t,n){e.exports=n(111)},67:function(e,t,n){},68:function(e,t,n){}},[[62,1,2]]]);
//# sourceMappingURL=main.2ea72bad.chunk.js.map