(this["webpackJsonpgoit-react-hw-02-feedback"]=this["webpackJsonpgoit-react-hw-02-feedback"]||[]).push([[0],{17:function(t,e,n){},22:function(t,e,n){"use strict";n.r(e);var a,o,c,i,r=n(1),s=n.n(r),l=n(6),d=n.n(l),b=(n(17),n(5)),u=n(7),j=n(8),p=n(11),h=n(10),x=n(2),g=n(3),v=g.a.div(a||(a=Object(x.a)(["\n  padding: 25px 25px 25px 50px;\n"]))),O=g.a.div(o||(o=Object(x.a)(["\n  display: inline-block;\n  color: black;\n  font-weight: 700;\n  text-decoration: none;\n  padding: 5px 30px;\n  outline: none;\n  border-width: 2px 0;\n  border-style: solid none;\n  border-color: #fdbe33 #000 #d77206;\n  border-radius: 6px;\n  background: linear-gradient(#f3ae0f, #e38916) #e38916;\n  transition: 0.2s;\n  margin: 20px 5px 20px 5px;\n   cursor: pointer;\n"]))),f=g.a.div(c||(c=Object(x.a)(["\n  display: flex;\n  flex-direction: column;\n  justify-content: flex-start;\n  font-weight: 500;\n  letter-spacing: 0.06em;\n  font-size: 18px;\n  margin-top: 2px;\n"]))),k=g.a.span(i||(i=Object(x.a)(["\n  margin-top: 10px;\n"]))),S=n(0),m=function(t){var e=t.options,n=t.onLeaveFeedback,a=Object.keys(e);return Object(S.jsx)("div",{children:a.map((function(t,a){return Object(S.jsx)(O,{type:"button",name:t,"data-option":t,onClick:n,children:e[t]},a)}))})},P=function(t){var e=t.good,n=t.neutral,a=t.bad,o=t.total,c=t.positivePercentage,i=t.title;return Object(S.jsxs)("div",{children:[Object(S.jsxs)("h2",{children:[" ",i," "]}),Object(S.jsxs)(f,{children:[Object(S.jsxs)(k,{children:[" Good: ",e," "]}),Object(S.jsxs)(k,{children:[" Neutral: ",n," "]}),Object(S.jsxs)(k,{children:[" Bad: ",a," "]}),Object(S.jsxs)(k,{children:[" Total: ",o," "]}),Object(S.jsxs)(k,{children:[" Positive feedback: ",c," "]})]})]})},y=function(t){var e=t.message;return Object(S.jsxs)("h2",{children:[" ",e," "]})},V=function(t){var e=t.title,n=t.children;return Object(S.jsxs)("div",{children:[Object(S.jsx)("h1",{children:e}),n]})},w={good:"Good",neutral:"Neutral",bad:"Bad"},F=function(t){Object(p.a)(n,t);var e=Object(h.a)(n);function n(){var t;Object(u.a)(this,n);for(var a=arguments.length,o=new Array(a),c=0;c<a;c++)o[c]=arguments[c];return(t=e.call.apply(e,[this].concat(o))).state={good:t.props.goodStaticValue,neutral:t.props.neutralStaticValue,bad:t.props.badStaticValue,title:"Please leave feedback",titleStat:"Statistics",total:t.props.totalStaticValue,positivePercentage:t.props.positivePercentageStaticValue},t.countTotalFeedback=function(e){console.log(e);var n=e.target.dataset.option;console.log(n),t.setState((function(t){var e;return e={},Object(b.a)(e,n,t[n]+1),Object(b.a)(e,"total",t.total+1),e}))},t.countPositiveFeedbackPercentage=function(){var e=Math.round(t.state.good/t.state.total*100);return"".concat(e,"%")},t}return Object(j.a)(n,[{key:"render",value:function(){var t=this.countPositiveFeedbackPercentage();return Object(S.jsxs)(v,{children:[Object(S.jsx)(V,{title:this.state.title,children:Object(S.jsx)(m,{options:w,onLeaveFeedback:this.countTotalFeedback})}),this.state.total?Object(S.jsx)(P,{title:this.state.titleStat,good:this.state.good,neutral:this.state.neutral,bad:this.state.bad,total:this.state.total,positivePercentage:t}):Object(S.jsx)(y,{message:"No feedback given"})]})}}]),n}(r.Component);F.defaultProps={goodStaticValue:0,neutralStaticValue:0,badStaticValue:0,totalStaticValue:0,positivePercentageStaticValue:"100%"};var B=F,N=function(){return Object(S.jsx)(B,{})};d.a.render(Object(S.jsx)(s.a.StrictMode,{children:Object(S.jsx)(N,{})}),document.getElementById("root"))}},[[22,1,2]]]);
//# sourceMappingURL=main.0713380d.chunk.js.map