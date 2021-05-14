(this["webpackJsonpgoit-react-hw-02-phonebook"]=this["webpackJsonpgoit-react-hw-02-phonebook"]||[]).push([[0],[,,,,,,,,,,,,,,,,function(t,e,n){},function(t,e,n){},,function(t,e,n){},function(t,e,n){},function(t,e,n){},function(t,e,n){},function(t,e,n){"use strict";n.r(e);var a=n(1),c=n.n(a),r=n(9),o=n.n(r),i=(n(16),n(11)),s=n(2),u=n(3),l=n(6),b=n(5),d=(n(17),n(0)),h=function(t){var e=t.children;return Object(d.jsx)("ul",{className:"ContactsList",children:e})},j=(n(19),function(t){var e=t.onDelete,n=t.contacts;return Object(d.jsx)(d.Fragment,{children:n.map((function(t){var n=t.id,a=t.name,c=t.number;return Object(d.jsxs)("li",{className:"ContactsListItem",children:[a,": ",c,Object(d.jsx)("button",{type:"button",onClick:function(){return e(n)},children:"Delete"})]},n)}))})}),m=n(10),f=n(4),O=n(7),p=(n(20),function(t){Object(l.a)(n,t);var e=Object(b.a)(n);function n(){var t;Object(s.a)(this,n);for(var a=arguments.length,c=new Array(a),r=0;r<a;r++)c[r]=arguments[r];return(t=e.call.apply(e,[this].concat(c))).state={name:"",number:""},t.nameInputId=Object(O.a)(),t.numberInputId=Object(O.a)(),t.handleChange=function(e){var n=e.currentTarget,a=n.name,c=n.value;t.setState(Object(f.a)({},a,c))},t.handleSubmit=function(e){e.preventDefault(),t.props.onSubmit(Object(m.a)({id:Object(O.a)()},t.state)),t.reset()},t.reset=function(){t.setState({name:"",number:""})},t}return Object(u.a)(n,[{key:"render",value:function(){var t=this.state,e=t.name,n=t.number;return Object(d.jsxs)("form",{className:"ContactForm",onSubmit:this.handleSubmit,children:[Object(d.jsx)("label",{htmlFor:this.nameInputId,children:"Name"}),Object(d.jsx)("input",{type:"text",value:e,name:"name",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"\u0418\u043c\u044f \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0442\u043e\u043b\u044c\u043a\u043e \u0438\u0437 \u0431\u0443\u043a\u0432, \u0430\u043f\u043e\u0441\u0442\u0440\u043e\u0444\u0430, \u0442\u0438\u0440\u0435 \u0438 \u043f\u0440\u043e\u0431\u0435\u043b\u043e\u0432. \u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440 Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan \u0438 \u0442. \u043f.",required:!0,onChange:this.handleChange,id:this.nameInputId}),Object(d.jsx)("label",{htmlFor:this.numberInputId,children:"Number"}),Object(d.jsx)("input",{type:"tel",name:"number",value:n,pattern:"(\\+?( |-|\\.)?\\d{1,2}( |-|\\.)?)?(\\(?\\d{3}\\)?|\\d{3})( |-|\\.)?(\\d{3}( |-|\\.)?\\d{4})",title:"\u041d\u043e\u043c\u0435\u0440 \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u0430 \u0434\u043e\u043b\u0436\u0435\u043d \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0438\u0437 11-12 \u0446\u0438\u0444\u0440 \u0438 \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0434\u0435\u0440\u0436\u0430\u0442\u044c \u0446\u0438\u0444\u0440\u044b, \u043f\u0440\u043e\u0431\u0435\u043b\u044b, \u0442\u0438\u0440\u0435, \u043f\u0443\u0437\u0430\u0442\u044b\u0435 \u0441\u043a\u043e\u0431\u043a\u0438 \u0438 \u043c\u043e\u0436\u0435\u0442 \u043d\u0430\u0447\u0438\u043d\u0430\u0442\u044c\u0441\u044f \u0441 +",required:!0,onChange:this.handleChange,id:this.numberInputId}),Object(d.jsx)("button",{type:"submit",children:"Add contact"})]})}}]),n}(a.Component)),v=(n(21),function(t){var e=t.value,n=t.onChange;return Object(d.jsxs)("label",{className:"Filter",children:["Find contacts by name",Object(d.jsx)("input",{type:"text",value:e,onChange:n})]})}),x=(n(22),function(t){Object(l.a)(n,t);var e=Object(b.a)(n);function n(){var t;Object(s.a)(this,n);for(var a=arguments.length,c=new Array(a),r=0;r<a;r++)c[r]=arguments[r];return(t=e.call.apply(e,[this].concat(c))).state={contacts:[],filter:""},t.formSubmitHandler=function(e){t.state.contacts.some((function(t){return t.name===e.name}))?alert("".concat(e.name," is already in contacts")):t.setState((function(t){return{contacts:[].concat(Object(i.a)(t.contacts),[e])}}))},t.filterHandler=function(e){var n=e.currentTarget.value;t.setState({filter:n})},t.deleteHandler=function(e){t.setState((function(t){return{contacts:t.contacts.filter((function(t){return t.id!==e}))}}))},t}return Object(u.a)(n,[{key:"render",value:function(){var t=this.state,e=t.contacts,n=t.filter,a=n.toLocaleLowerCase(),c=e.filter((function(t){return t.name.toLocaleLowerCase().includes(a)}));return Object(d.jsxs)("div",{className:"phonebook",children:[Object(d.jsx)("h1",{children:"Phonebook"}),Object(d.jsx)(p,{onSubmit:this.formSubmitHandler}),Object(d.jsx)("h2",{children:"Contacts"}),e.length>0?Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)(v,{onChange:this.filterHandler,value:n}),Object(d.jsx)(h,{children:Object(d.jsx)(j,{contacts:c,onDelete:this.deleteHandler})})]}):Object(d.jsx)("span",{children:"You have no contacts yet "})]})}}]),n}(a.Component));o.a.render(Object(d.jsx)(c.a.StrictMode,{children:Object(d.jsx)(x,{})}),document.getElementById("root"))}],[[23,1,2]]]);
//# sourceMappingURL=main.9a63dbf8.chunk.js.map