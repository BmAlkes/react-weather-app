(this["webpackJsonpreact-weather-app"]=this["webpackJsonpreact-weather-app"]||[]).push([[0],[,,,,,,,,function(e,t,n){e.exports=n(23)},,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){var a={"./1.png":17,"./14.png":18,"./18.png":19,"./6.png":20,"./7.png":21};function r(e){var t=c(e);return n(t)}function c(e){if(!n.o(a,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return a[e]}r.keys=function(){return Object.keys(a)},r.resolve=c,e.exports=r,r.id=16},function(e,t,n){e.exports=n.p+"static/media/1.448a5262.png"},function(e,t,n){e.exports=n.p+"static/media/14.56ad48ec.png"},function(e,t,n){e.exports=n.p+"static/media/18.2477303a.png"},function(e,t,n){e.exports=n.p+"static/media/6.39ec4739.png"},function(e,t,n){e.exports=n.p+"static/media/7.5cb0a006.png"},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(7),i=n.n(c),o=(n(13),n(1)),s=n(2),p=n(4),u=n(3),l=n(5),d=(n(14),n(15),function(e){function t(){var e,n;Object(o.a)(this,t);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(n=Object(p.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).daysWeek={2:"Tuesday",3:"Wednesday",4:"Thursday",5:"Friday",6:"Saturday"},n}return Object(l.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"Day"},r.a.createElement("h3",null,this.daysWeek[this.props.day]),r.a.createElement("img",{src:n(16)("./".concat(this.props.icon,".png")),alt:this.props.description}),r.a.createElement("p",null,r.a.createElement("span",null,this.props.temperature+"\xb0")," ",this.props.description))}}]),t}(a.Component)),h=(n(22),function(e){function t(e){var n;return Object(o.a)(this,t),(n=Object(p.a)(this,Object(u.a)(t).call(this,e))).state={daysWeek:[]},n}return Object(l.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){var e=this;fetch("https://my-json-server.typicode.com/evyros/react-weather-app/forecast").then((function(e){return e.json()})).then((function(t){return e.setState({daysWeek:t})}))}},{key:"render",value:function(){return r.a.createElement("div",{className:"week"},this.state.daysWeek.map((function(e){return r.a.createElement(d,{className:"weather",key:e.day,day:e.day,temperature:e.temperature,icon:e.icon,description:e.description})})))}}]),t}(a.Component)),m=function(e){function t(){return Object(o.a)(this,t),Object(p.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(l.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"App"},r.a.createElement("h1",null,"React Weather App"),r.a.createElement(h,null))}}]),t}(r.a.Component);i.a.render(r.a.createElement(m,null),document.getElementById("root"))}],[[8,1,2]]]);
//# sourceMappingURL=main.82e7a615.chunk.js.map