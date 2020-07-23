(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{103:function(e,a,t){"use strict";t.r(a);var n=t(1),l=t.n(n),c=t(75),r=t.n(c),s=(t(91),t(48)),m=t(10),o=t(53),i=t(54),u=t(73),d=(t(92),t(76)),p=t.n(d),h=t(55),x=t(51),g=t(74),f=t(56),E=t.n(f),b=t(77),N=t.n(b);var v=function(e){var a=e.launch,t=a.flight_number,n=a.mission_name,c=a.launch_date_local,r=a.launch_success,m=a.details,o=a.links.mission_patch_small;return l.a.createElement("div",{className:"p-4 md:w-1/3 sm:mb-0 mb-6 border-solid border-4 border-dark-100"},l.a.createElement("div",{className:"rounded-lg h-64 overflow-hidden"},l.a.createElement("img",{alt:"Space Ship Image Not Found",className:"object-cover object-center h-full w-full",src:o||"https://dummyimage.com/1203x503"})),l.a.createElement("h2",{className:"text-2xl font-medium title-font text-gray-900 mt-5"},"Mission: ",l.a.createElement("span",{className:E()({"text-success":r,"text-danger":!r})},n)),l.a.createElement("p",{className:"mb-2"},"Date: ",l.a.createElement(N.a,{format:"YYYY-MM-DD HH:mm"},c)),l.a.createElement("p",{className:"text-base leading-relaxed mt-2"},m?m.slice(0,150)+"...":"Details not available..."),l.a.createElement(s.b,{to:"/launch/".concat(t),className:"text-indigo-500 inline-flex items-center mt-3"},"Launch Details",l.a.createElement("svg",{fill:"none",stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",className:"w-4 h-4 ml-2",viewBox:"0 0 24 24"},l.a.createElement("path",{d:"M5 12h14M12 5l7 7-7 7"}))))};var _=function(){return l.a.createElement("div",{className:"mb-5"},l.a.createElement("p",null,l.a.createElement("span",{className:"px-3 mr-2 bg-success"})," Sucess"),l.a.createElement("p",null,l.a.createElement("span",{className:"px-3 mr-2 bg-danger"})," Failure"))};function w(){var e=Object(h.a)(["\n    query LanuchesQuery {\n        launches {\n            flight_number\n            mission_name\n            launch_date_local\n            launch_success\n            details\n            links{\n                mission_patch_small\n            }\n        }\n    }\n"]);return w=function(){return e},e}var y=Object(x.a)(w());var k=function(){var e=Object(g.a)(y),a=e.loading,t=e.error,n=e.data;return a?l.a.createElement("h4",{className:"text-center"},"Loading..."):(t&&console.log(t),l.a.createElement(l.a.Fragment,null,l.a.createElement("section",{className:"text-gray-700 body-font"},l.a.createElement("div",{className:"container px-5 py-24 mx-auto"},l.a.createElement("div",{className:"flex flex-col"},l.a.createElement("div",{className:"h-1 bg-gray-200 rounded overflow-hidden"},l.a.createElement("div",{className:"w-24 h-full bg-indigo-500"})),l.a.createElement("div",{className:"flex flex-wrap sm:flex-row flex-col py-6 mb-6"},l.a.createElement("h1",{className:"sm:w-2/5 text-gray-900 font-medium title-font text-2xl mb-2 sm:mb-0"},"Launching Histories"),l.a.createElement("p",{className:"sm:w-3/5 leading-relaxed text-base sm:pl-10 pl-0"},"Space Exploration Technologies Corp., trading as SpaceX, is an American aerospace manufacturer and space transportation services company headquartered in Hawthorne, California. It was founded in 2002 by Elon Musk with the goal of reducing space transportation costs to enable the colonization of Mars."))),l.a.createElement(_,null),l.a.createElement("div",{className:"flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4"},n.launches.map((function(e){return l.a.createElement(v,{key:e.flight_number,launch:e})})))))))};function j(){var e=Object(h.a)(["\n    query LaunchQuery($flight_number:Int!) {\n        launch(flight_number: $flight_number) {\n            flight_number\n            mission_name\n            launch_year\n            launch_success\n            launch_date_local\n            details\n            links{\n                mission_patch_small\n            }\n            rocket {\n                rocket_id\n                rocket_name\n                rocket_type\n            }\n        }\n    }\n"]);return j=function(){return e},e}var L=Object(x.a)(j());var M=function(e){var a=e.match.params.flight_number;a=parseInt(a);var t=Object(g.a)(L,{variables:{flight_number:a}}),n=t.loading,c=t.error,r=t.data;if(n)return l.a.createElement("h4",{className:"text-center"},"Loading...");c&&console.log(c);var m=r.launch,o=m.mission_name,i=m.launch_year,u=m.launch_success,d=m.details,p=m.links.mission_patch_small,h=m.rocket,x=h.rocket_id,f=h.rocket_name,b=h.rocket_type;return l.a.createElement("section",{className:"text-gray-700 body-font"},l.a.createElement("div",{className:"container px-5 py-24 mx-auto flex flex-col"},l.a.createElement("div",{className:"lg:w-4/6 mx-auto"},l.a.createElement("div",{className:"rounded-lg h-80 overflow-hidden"},l.a.createElement("img",{alt:"content",className:"object-cover object-center h-full w-full",src:p||"https://dummyimage.com/1203x503"})),l.a.createElement("div",{className:"flex flex-col sm:flex-row mt-10"},l.a.createElement("div",{className:"sm:w-1/3 text-center sm:pr-8 sm:py-8"},l.a.createElement("div",{className:"flex flex-col items-center text-center justify-center"},l.a.createElement("h2",{className:"font-medium title-font mt-4 text-gray-900 text-4xl"},l.a.createElement("span",{className:"text-dark"},"Mission: "),o),l.a.createElement("div",{className:"w-12 h-1 bg-indigo-500 rounded mt-2 mb-4"}),l.a.createElement("p",{className:"text-2xl text-gray-600"},i),l.a.createElement("p",{className:"text-2xl text-gray-600"},"Launch Success:  ",l.a.createElement("span",{className:E()({"text-success":u,"text-danger":!u})},u?"YES":"NO")))),l.a.createElement("div",{className:"sm:w-2/3 sm:pl-8 sm:py-8 sm:border-l border-gray-300 sm:border-t-0 border-t mt-4 pt-4 sm:mt-0 text-center sm:text-left"},l.a.createElement("p",{className:"leading-relaxed text-lg mb-4"},d||"Details not available..."),l.a.createElement("h4",{className:"mt-3 text-3xl text-gray-900 text-left"},"Rocket Details"),l.a.createElement("div",{className:"w-20 h-1 bg-indigo-500 rounded mt-2 mb-4"}),l.a.createElement("ul",{className:"list-group mt-2"},l.a.createElement("li",{className:"list-group-item text-2xl "},"Rocket ID: ",l.a.createElement("span",{className:"text-purple-600"},x)),l.a.createElement("li",{className:"list-group-item text-2xl "},"Rocket Name:",l.a.createElement("span",{className:"text-purple-600"},f)," "),l.a.createElement("li",{className:"list-group-item text-2xl "},"Rocket Type: ",l.a.createElement("span",{className:"text-purple-600"},b))),l.a.createElement(s.b,{to:"/",className:"text-indigo-500 inline-flex items-center mt-2"},"Back",l.a.createElement("svg",{fill:"none",stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",className:"w-4 h-4 ml-2",viewBox:"0 0 24 24"},l.a.createElement("path",{d:"M5 12h14M12 5l7 7-7 7"}))))))))},S=new o.a({uri:"/graphql",cache:new i.a});var D=function(){return l.a.createElement(u.a,{client:S},l.a.createElement(s.a,null,l.a.createElement("div",{className:"container"},l.a.createElement("img",{src:p.a,alt:"SpaceX",style:{width:"300px",display:"block",margin:"1rem auto"}}),l.a.createElement(m.c,null,l.a.createElement(m.a,{exact:!0,path:"/",component:k}),l.a.createElement(m.a,{exact:!0,path:"/launch/:flight_number",component:M})))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(D,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},76:function(e,a,t){e.exports=t.p+"static/media/logo.28aa741f.jpg"},86:function(e,a,t){e.exports=t(103)},91:function(e,a,t){},92:function(e,a,t){}},[[86,1,2]]]);
//# sourceMappingURL=main.4c6e4166.chunk.js.map