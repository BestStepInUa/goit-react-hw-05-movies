"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[171],{1578:function(r,t,e){e.r(t),e.d(t,{default:function(){return g}});var n,a=e(5861),u=e(9439),c=e(7757),s=e.n(c),i=e(2791),o=e(7689),p=e(5667),f=e(8866),l=e.p+"static/media/defaultCastImg.0c926ae3740b0ffcc10f.jpg",d=e(184),h=function(r){var t=r.cast;return(0,d.jsx)("ul",{children:t.map((function(r){var t=r.id,e=r.profile_path,n=r.name,a=r.character,u=e?"https://image.tmdb.org/t/p/w200"+e:l;return(0,d.jsxs)("li",{children:[(0,d.jsx)("img",{src:u,alt:n,width:"200px"}),(0,d.jsxs)("p",{children:[(0,d.jsx)("b",{children:"Name: "}),n]}),(0,d.jsxs)("p",{children:[(0,d.jsx)("b",{children:"Character: "}),a]})]},t)}))})},v=e(3727),m=e(168),x=e(7924).ZP.div(n||(n=(0,m.Z)(["\n  padding-top: 15px;\n  padding-bottom: 15px;\n"]))),g=function(){var r=(0,o.UO)().movieId,t=(0,i.useState)([]),e=(0,u.Z)(t,2),n=e[0],c=e[1],l=(0,i.useState)(!1),m=(0,u.Z)(l,2),g=m[0],w=m[1],Z=(0,i.useState)(null),b=(0,u.Z)(Z,2),j=b[0],k=b[1];return(0,i.useEffect)((function(){var t=new AbortController,e=function(){var e=(0,a.Z)(s().mark((function e(){var n;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,w(!0),k(null),e.next=5,(0,v.uV)(r,{signal:t.signal});case 5:n=e.sent,c(n),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(0),k(e.t0.message);case 12:return e.prev=12,w(!1),e.finish(12);case 15:case"end":return e.stop()}}),e,null,[[0,9,12,15]])})));return function(){return e.apply(this,arguments)}}();return e(),function(){t.abort()}}),[r]),n&&p.NY.scrollMore(640),(0,d.jsxs)(d.Fragment,{children:[g&&(0,d.jsx)(f.Z,{}),j&&(0,d.jsx)("p",{children:"Error loading information. Please try again later."}),n&&(0,d.jsx)(x,{children:(0,d.jsx)(h,{cast:n})})]})}},8866:function(r,t,e){var n=e(4137),a=e(184);t.Z=function(){return(0,a.jsx)("div",{className:"Loader",children:(0,a.jsx)(n.Bb,{height:"80",width:"80",radius:"9",color:"#3f51b5",ariaLabel:"three-dots-loading"})})}},3727:function(r,t,e){e.d(t,{Ai:function(){return d},Hx:function(){return l},Y5:function(){return p},uV:function(){return f},wr:function(){return o}});var n=e(8683),a=e(5861),u=e(7757),c=e.n(u),s=e(5294);s.Z.defaults.baseURL="https://api.themoviedb.org/3/";var i={api_key:"1ff5f9e57945bfb0ff78aaaf0ecf4ac6",language:"en-US"},o=function(){var r=(0,a.Z)(c().mark((function r(){var t,e;return c().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,s.Z.get("trending/movie/week",{params:i});case 2:return t=r.sent,e=t.data,r.abrupt("return",e.results);case 5:case"end":return r.stop()}}),r)})));return function(){return r.apply(this,arguments)}}(),p=function(){var r=(0,a.Z)(c().mark((function r(t){var e;return c().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,s.Z.get("movie/".concat(t),{params:i});case 2:return e=r.sent,r.abrupt("return",e.data);case 4:case"end":return r.stop()}}),r)})));return function(t){return r.apply(this,arguments)}}(),f=function(){var r=(0,a.Z)(c().mark((function r(t){var e,n;return c().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,s.Z.get("movie/".concat(t,"/credits"),{params:i});case 2:return e=r.sent,n=e.data,r.abrupt("return",n.cast);case 5:case"end":return r.stop()}}),r)})));return function(t){return r.apply(this,arguments)}}(),l=function(){var r=(0,a.Z)(c().mark((function r(t){var e,a;return c().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,s.Z.get("movie/".concat(t,"/reviews"),{params:(0,n.Z)((0,n.Z)({},i),{},{page:1})});case 2:return e=r.sent,a=e.data,r.abrupt("return",a.results);case 5:case"end":return r.stop()}}),r)})));return function(t){return r.apply(this,arguments)}}(),d=function(){var r=(0,a.Z)(c().mark((function r(t){var e;return c().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,s.Z.get("search/movie",{params:(0,n.Z)((0,n.Z)({},i),{},{query:t,include_adult:!0,page:1})});case 2:return e=r.sent,r.abrupt("return",e.data);case 4:case"end":return r.stop()}}),r)})));return function(t){return r.apply(this,arguments)}}()}}]);
//# sourceMappingURL=171.ce9e565d.chunk.js.map