(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{134:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),r=a(79),c=a.n(r),s=(a(97),a(17)),m=a(12),o=a(57),i=a(58),d=a(77),u=(a(98),a(80)),x=a.n(u),f=a(36),p=a(33),g=a(78),E=a(37),h=a(59),b=a.n(h),N=a(82),v=a.n(N);var y=function(e){var t=e.launch,a=t.flight_number,n=t.mission_name,r=t.launch_date_local,c=t.launch_success,m=t.details,o=t.links.mission_patch_small;return l.a.createElement("div",{className:"p-4 md:w-1/3 sm:mb-0 mb-6 border-solid border-4 border-dark-100"},l.a.createElement("div",{className:"rounded-lg h-64 overflow-hidden"},l.a.createElement("img",{alt:"Space Ship Image Not Found",className:"object-cover object-center h-full w-full",src:o||"https://dummyimage.com/1203x503"})),l.a.createElement("h2",{className:"text-2xl font-medium title-font text-gray-900 mt-5"},"Mission: ",l.a.createElement("span",{className:b()({"text-success":c,"text-danger":!c})},n)),l.a.createElement("p",{className:"mb-2"},"Date: ",l.a.createElement(v.a,{format:"YYYY-MM-DD HH:mm"},r)),l.a.createElement("p",{className:"text-base leading-relaxed mt-2"},m?m.slice(0,150)+"...":"Details not available..."),l.a.createElement(s.b,{to:"/launch/".concat(a),className:"text-indigo-500 inline-flex items-center mt-3"},"Launch Details",l.a.createElement("svg",{fill:"none",stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",className:"w-4 h-4 ml-2",viewBox:"0 0 24 24"},l.a.createElement("path",{d:"M5 12h14M12 5l7 7-7 7"}))))};var w=function(){return l.a.createElement("div",{className:"mb-5"},l.a.createElement("p",null,l.a.createElement("span",{className:"px-3 mr-2 bg-success"})," Sucess"),l.a.createElement("p",null,l.a.createElement("span",{className:"px-3 mr-2 bg-danger"})," Failure"))};function k(){var e=Object(f.a)(["\n    query LanuchesQuery {\n        launches {\n            flight_number\n            mission_name\n            launch_date_local\n            launch_success\n            details\n            links{\n                mission_patch_small\n            }\n        }\n    }\n"]);return k=function(){return e},e}var _=Object(p.a)(k());var j=function(){var e=Object(g.a)(_),t=e.loading,a=e.error,n=e.data;return t?l.a.createElement("div",{className:"container text-center"},l.a.createElement(E.ClipLoader,{color:"blue",size:40})):(a&&console.log(a),l.a.createElement(l.a.Fragment,null,l.a.createElement("section",{className:"text-gray-700 body-font"},l.a.createElement("div",{className:"container px-5 py-24 mx-auto"},l.a.createElement("div",{className:"flex flex-col"},l.a.createElement("div",{className:"h-1 bg-gray-200 rounded overflow-hidden"},l.a.createElement("div",{className:"w-24 h-full bg-indigo-500"})),l.a.createElement("div",{className:"flex flex-wrap sm:flex-row flex-col py-6 mb-6"},l.a.createElement("h1",{className:"sm:w-2/5 text-gray-900 font-medium title-font text-2xl mb-2 sm:mb-0"},"Launching Histories"),l.a.createElement("p",{className:"sm:w-3/5 leading-relaxed text-base sm:pl-10 pl-0"},"Space Exploration Technologies Corp., trading as SpaceX, is an American aerospace manufacturer and space transportation services company headquartered in Hawthorne, California. It was founded in 2002 by Elon Musk with the goal of reducing space transportation costs to enable the colonization of Mars."))),l.a.createElement(w,null),l.a.createElement("div",{className:"flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4"},n.launches.map((function(e){return l.a.createElement(y,{key:e.flight_number,launch:e})})))))))};function L(){var e=Object(f.a)(["\n    query LaunchQuery($flight_number:Int!) {\n        launch(flight_number: $flight_number) {\n            flight_number\n            mission_name\n            launch_year\n            launch_success\n            launch_date_local\n            details\n            links{\n                mission_patch_small\n            }\n            rocket {\n                rocket_id\n                rocket_name\n                rocket_type\n            }\n        }\n    }\n"]);return L=function(){return e},e}var M=Object(p.a)(L());var O=function(e){var t=e.match.params.flight_number;t=parseInt(t);var a=Object(g.a)(M,{variables:{flight_number:t}}),n=a.loading,r=a.error,c=a.data;if(n)return l.a.createElement("div",{className:"container text-center"},l.a.createElement(E.ClipLoader,{color:"blue",size:40}));r&&console.log(r);var m=c.launch,o=m.mission_name,i=m.launch_year,d=m.launch_success,u=m.details,x=m.links.mission_patch_small,f=m.rocket,p=f.rocket_id,h=f.rocket_name,N=f.rocket_type;return l.a.createElement("section",{className:"text-gray-700 body-font"},l.a.createElement("div",{className:"container px-5 py-24 mx-auto flex flex-col"},l.a.createElement("div",{className:"lg:w-4/6 mx-auto"},l.a.createElement("div",{className:"rounded-lg h-80 overflow-hidden"},l.a.createElement("img",{alt:"content",className:"object-cover object-center h-full w-full",src:x||"https://dummyimage.com/1203x503"})),l.a.createElement("div",{className:"flex flex-col sm:flex-row mt-10"},l.a.createElement("div",{className:"sm:w-1/3 text-center sm:pr-8 sm:py-8"},l.a.createElement("div",{className:"flex flex-col items-center text-center justify-center"},l.a.createElement("h2",{className:"font-medium title-font mt-4 text-gray-900 text-4xl"},l.a.createElement("span",{className:"text-dark"},"Mission: "),o),l.a.createElement("div",{className:"w-12 h-1 bg-indigo-500 rounded mt-2 mb-4"}),l.a.createElement("p",{className:"text-2xl text-gray-600"},i),l.a.createElement("p",{className:"text-2xl text-gray-600"},"Launch Success:  ",l.a.createElement("span",{className:b()({"text-success":d,"text-danger":!d})},d?"YES":"NO")))),l.a.createElement("div",{className:"sm:w-2/3 sm:pl-8 sm:py-8 sm:border-l border-gray-300 sm:border-t-0 border-t mt-4 pt-4 sm:mt-0 text-center sm:text-left"},l.a.createElement("p",{className:"leading-relaxed text-lg mb-4"},u||"Details not available..."),l.a.createElement("h4",{className:"mt-3 text-3xl text-gray-900 text-left"},"Rocket Details"),l.a.createElement("div",{className:"w-20 h-1 bg-indigo-500 rounded mt-2 mb-4"}),l.a.createElement("ul",{className:"list-group mt-2"},l.a.createElement("li",{className:"list-group-item text-2xl "},"Rocket ID: ",l.a.createElement("span",{className:"text-purple-600"},p)),l.a.createElement("li",{className:"list-group-item text-2xl "},"Rocket Name:",l.a.createElement("span",{className:"text-purple-600"},h)," "),l.a.createElement("li",{className:"list-group-item text-2xl "},"Rocket Type: ",l.a.createElement("span",{className:"text-purple-600"},N))),l.a.createElement(s.b,{to:"/",className:"text-indigo-500 inline-flex items-center mt-2"},"Back",l.a.createElement("svg",{fill:"none",stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",className:"w-4 h-4 ml-2",viewBox:"0 0 24 24"},l.a.createElement("path",{d:"M5 12h14M12 5l7 7-7 7"}))))))))};var C=function(){return l.a.createElement("header",{className:"text-gray-700 body-font bg-gray-300 mt-3 rounded"},l.a.createElement("div",{className:"container mx-auto flex flex-wrap flex-col md:flex-row items-center"},l.a.createElement(s.b,{to:"/",className:"flex title-font font-medium items-center text-gray-900 md:mb-0"},l.a.createElement("span",{className:"ml-3 text-2xl "},"SpaceX")),l.a.createElement("nav",{className:"md:ml-auto flex flex-wrap items-center text-base justify-around"},l.a.createElement(s.b,{to:"/",className:"mr-3 hover:text-gray-900"},"Launches"),l.a.createElement(s.b,{to:"/about",className:"mr-3 hover:text-gray-900"},"About"),l.a.createElement(s.b,{to:"/history",className:"mr-3 hover:text-gray-900"},"History"))))},S=a(86),q=a.n(S);function I(){var e=Object(f.a)(["\n    query InfoQuery {\n            info {\n            name,\n            founder,\n            founded,\n            summary,\n            headquarters{\n                address,\n                city,\n                state\n            }\n        }\n    }\n"]);return I=function(){return e},e}var D=Object(p.a)(I());var F=function(){var e=Object(g.a)(D),t=e.loading,a=e.error,n=e.data;if(t)return l.a.createElement("div",{className:"container text-center"},l.a.createElement(E.ClipLoader,{color:"blue",size:40}));a&&console.log(a);var r=n.info,c=r.name,m=r.founder,o=r.founded,i=r.summary,d=r.headquarters,u=d.address,x=d.city,f=d.state;return l.a.createElement(l.a.Fragment,null,l.a.createElement("section",{className:"text-gray-700 body-font"},l.a.createElement("div",{className:"container mx-auto flex px-5 py-24 md:flex-row flex-col"},l.a.createElement("div",{className:"lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0"},l.a.createElement("img",{className:"object-cover object-center rounded",alt:"hero",src:q.a})),l.a.createElement("div",{className:"lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left "},l.a.createElement("h1",{className:"title-font sm:text-2xl sm:text-center lg:text-3xl mb-2 font-medium text-gray-900 text-left"},l.a.createElement("span",{className:"text-gray-500"},"Company: "),c),l.a.createElement("h1",null,l.a.createElement("span",{className:"text-gray-500 sm:text-2xl lg:text-3xl text-left"},"Founder:")," ",l.a.createElement("span",{className:"sm:text-2xl lg:text-3xl"}," ",m)),l.a.createElement("h2",null,l.a.createElement("span",{className:"text-gray-500 sm:text-xl lg:text-2xl text-left"},"Founded In:")," ",l.a.createElement("span",{className:"sm:text-xl lg:text-2xl"}," ",o)),l.a.createElement("p",{className:"mb-3 lg:text-xl leading-relaxed text-left mt-3 sm:text-sm"},l.a.createElement("span",{className:"text-gray-500 sm:text-sm lg:text-xl"},"Headquarter:"),u,",",x,",",f),l.a.createElement("p",{className:"mb-8 leading-relaxed text-left mt-3"},i),l.a.createElement("div",{className:"flex justify-center"},l.a.createElement(s.b,{to:"/"},l.a.createElement("button",{className:"inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg"},"Launches")),l.a.createElement(s.b,{to:"history"},l.a.createElement("button",{className:"ml-4 inline-flex text-gray-700 bg-gray-200 border-0 py-2 px-6 focus:outline-none hover:bg-gray-300 rounded text-lg"},"Events")))))))};var H=function(e){var t=e.story,a=t.title,n=t.details,r=t.event_date_utc,c=t.links.wikipedia;return l.a.createElement("div",{className:"py-8 flex border-t-2 border-gray-200 flex-wrap md:flex-no-wrap"},l.a.createElement("div",{className:"md:w-64 md:mb-0 mb-6 flex-shrink-0 flex flex-col"},l.a.createElement("span",{className:"tracking-widest font-medium title-font text-gray-900"},"TIME"),l.a.createElement("span",{className:"mt-1 text-gray-500 text-sm"},r.slice(0,10))),l.a.createElement("div",{className:"md:flex-grow"},l.a.createElement("h2",{className:"text-2xl font-medium text-gray-900 title-font mb-2"},a),l.a.createElement("p",{className:"leading-relaxed"},n.slice(0,100)+"..."),l.a.createElement("a",{target:"_blank",href:c||"/history",className:"text-indigo-500 inline-flex items-center mt-4"},c?"wikipedia":"No wikpedia link available",l.a.createElement("svg",{className:"w-4 h-4 ml-2",viewBox:"0 0 24 24",stroke:"currentColor",strokeWidth:"2",fill:"none",strokeLinecap:"round",strokeLinejoin:"round"},l.a.createElement("path",{d:"M5 12h14"}),l.a.createElement("path",{d:"M12 5l7 7-7 7"})))))};function B(){var e=Object(f.a)(["\n    query HistoryQuery {\n        history {\n            id\n            title\n            details\n            event_date_utc\n            links {\n              wikipedia\n            }\n        }\n    }\n"]);return B=function(){return e},e}var z=Object(p.a)(B());var W=function(){var e=Object(g.a)(z),t=e.loading,a=e.error,n=e.data;return t?l.a.createElement("div",{className:"container text-center"},l.a.createElement(E.ClipLoader,{color:"blue",size:40})):(a&&console.log(a),l.a.createElement(l.a.Fragment,null,l.a.createElement("section",{className:"text-gray-700 body-font overflow-hidden"},l.a.createElement("div",{className:"container px-5 py-24 mx-auto"},l.a.createElement("div",{className:"-my-8"},n.history.map((function(e){return l.a.createElement(H,{key:e.id,story:e})})))))))},Y=new o.a({uri:"/graphql",cache:new i.a});var Q=function(){return l.a.createElement(d.a,{client:Y},l.a.createElement(s.a,null,l.a.createElement("div",{className:"container"},l.a.createElement(C,null),l.a.createElement("img",{src:x.a,alt:"SpaceX",style:{width:"300px",display:"block",margin:"1rem auto"}}),l.a.createElement(m.c,null,l.a.createElement(m.a,{exact:!0,path:"/",component:j}),l.a.createElement(m.a,{exact:!0,path:"/launch/:flight_number",component:O}),l.a.createElement(m.a,{exact:!0,path:"/about",component:F}),l.a.createElement(m.a,{exact:!0,path:"/history",component:W})))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(Q,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},80:function(e,t,a){e.exports=a.p+"static/media/logo.28aa741f.jpg"},86:function(e,t,a){e.exports=a.p+"static/media/Elon.bf2ecf09.jpg"},92:function(e,t,a){e.exports=a(134)},97:function(e,t,a){},98:function(e,t,a){}},[[92,1,2]]]);
//# sourceMappingURL=main.5af03986.chunk.js.map