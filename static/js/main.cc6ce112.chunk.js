(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{12:function(e,t,n){},13:function(e,t,n){"use strict";n.r(t);var a=n(0),c=n.n(a),r=n(4),s=n.n(r),o=n(2),m=n.n(o),l=n(5),u=n(1),i=(n(12),function(){return fetch("https://jsonplaceholder.typicode.com/posts").then(function(e){return e.ok?e.json():[]}).catch(function(){return[]})}),d=function(){return fetch("https://jsonplaceholder.typicode.com/users").then(function(e){return e.ok?e.json():[]}).catch(function(){return[]})},p=function(){return fetch("https://jsonplaceholder.typicode.com/comments").then(function(e){return e.ok?e.json():[]}).catch(function(){return[]})},f=function(e){var t=e.comment;return c.a.createElement("div",{className:"all"},c.a.createElement("ul",{className:"comment"},c.a.createElement("li",{className:"comment__name"},t.name),c.a.createElement("li",{className:"comment__body"},t.body),c.a.createElement("li",{className:"comment__email"},t.email)))},E=function(e){var t=e.comments;return c.a.createElement("div",{className:"comments-list"},t.map(function(e){return c.a.createElement(f,{comment:e,key:e.id})}))};E.defaultProps={comments:[{}]};var h=E,N=function(e){var t=e.user;return c.a.createElement("ul",{className:"user"},c.a.createElement("li",{className:"user__name"},"Author:",t.name),c.a.createElement("li",{className:"user__email"},"Email:",t.email),c.a.createElement("li",{className:"user__address"},"Address:"," ",t.address.city,","," ",t.address.street,","," ",t.address.suite,","," ",t.address.zipcode))},v=function(e){var t=e.post;return c.a.createElement("div",{className:"all"},c.a.createElement("ul",{className:"post"},c.a.createElement("li",{className:"post__title"}," ","\ud83d\udd8b"," "," ",t.title),c.a.createElement("li",{className:"post__body"},t.body),c.a.createElement(N,{user:t.user}),c.a.createElement(h,{comments:t.comments})))},_=function(e){var t=e.posts;return c.a.createElement("div",{className:"post-list"},t.map(function(e){return c.a.createElement(v,{post:e,key:e.id})}))};var b=function(){var e=Object(a.useState)([]),t=Object(u.a)(e,2),n=t[0],r=t[1],s=Object(a.useState)(!1),o=Object(u.a)(s,2),f=o[0],E=o[1];return c.a.createElement("div",{className:"App"},c.a.createElement("h1",{className:"title"},"Dynamic List of Posts"),n.length>0?c.a.createElement(_,{posts:n}):c.a.createElement("button",{className:"button",type:"button",onClick:function(){var e,t,n,a,c;return m.a.async(function(s){for(;;)switch(s.prev=s.next){case 0:return E(!f),s.next=3,m.a.awrap(Promise.all([i(),d(),p()]));case 3:e=s.sent,t=Object(u.a)(e,3),n=t[0],a=t[1],c=t[2],r(n.map(function(e){return Object(l.a)({},e,{user:a.find(function(t){return t.id===e.userId}),comments:c.filter(function(t){return t.postId===e.id})})}));case 9:case"end":return s.stop()}})}},f?"Loading...":"Load"))};s.a.render(c.a.createElement(b,null),document.getElementById("root"))},6:function(e,t,n){e.exports=n(13)}},[[6,1,2]]]);
//# sourceMappingURL=main.cc6ce112.chunk.js.map