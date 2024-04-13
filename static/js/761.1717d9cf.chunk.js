"use strict";(self.webpackChunkfurniking_react_v1=self.webpackChunkfurniking_react_v1||[]).push([[761],{3271:(e,n,r)=>{r.d(n,{A:()=>d});var a,i,t=r(7528),s=r(197),o=r(2603),l=r(9526);const m=s.Ay.div(a||(a=(0,t.A)(['\n    font-family: "Mulish", sans-serif;\n    color: ',";\n    font-size: 36px;\n    font-weight: ",";\n    text-align: center;\n    text-transform: uppercase;\n    margin: 25px;\n    ","\n"])),(e=>e.theme.colors.primaryText),(e=>e.theme.fontWeight.bolder),o.Ay.lessThan(l.a.MEDIUM)(i||(i=(0,t.A)(["\n    "]))));var c=r(579);const d=function(e){let{children:n}=e;return(0,c.jsx)(m,{children:n})}},4761:(e,n,r)=>{r.r(n),r.d(n,{default:()=>p});r(5043);var a,i=r(3271),t=r(7528);const s=r(197).Ay.div(a||(a=(0,t.A)(["\n/*    width: 100%;\n    max-width: 650px;\n    margin: 0 auto;*/\n\n    .contact_form {\n        width: 100%;\n        display: flex;\n        flex-direction: column;\n        row-gap: 25px;\n\n        .button_container {\n            .submit_form_btn {\n                background: ",";\n                color: ",';\n                font-weight: 600;\n                padding: 12px 20px;\n                display: flex;\n                justify-items: center;\n                align-items: center;\n                column-gap: 5px;\n                border: none;\n                border-radius: 5px;\n                transition: all .3s;\n\n                &:hover {\n                    cursor: pointer;\n                    box-shadow: 0 0 5px 1px green;\n                }\n\n                &:active {\n                    box-shadow: 0 0 1px 1px green;\n                }\n            }\n        }\n\n        \n\n        .input_container {\n            width: 100%;\n            position: relative;\n\n            .error_field{\n                font-family: "Rubik";\n                font-size: 14px;\n                font-weight: 400;\n                line-height: 17px;\n                color: ',';\n                position: absolute;\n                bottom: 0%;\n                transform: translateY(calc(100% + 5px));\n            }\n            input, textarea {\n                width: inherit;\n                font-family: "Rubik";\n                font-size: 14px;\n                font-weight: 400;\n                line-height: 17px;\n                color: rgba(176, 176, 176, 1);\n                padding: 0 10px;\n                height: 46px;\n                border-radius: 5px;\n                border: 2px solid rgba(122, 199, 81, 1);\n                overflow: hidden;\n                transition: all .3s;\n\n                &:focus {\n                    color: ',";\n                }\n            }\n\n            textarea {\n                height: 150px;\n                padding: 15px 10px;\n                resize: none;\n            }\n\n            &.error {\n                input, textarea {\n                    border: 1px solid red;\n                }\n            }\n        }\n    }\n"])),(e=>e.theme.colors.green),(e=>e.theme.colors.primaryText),(e=>e.theme.colors.primaryText),(e=>e.theme.colors.primaryText));var o=r(5394),l=r(899),m=r(3892),c=r(579);const d=l.Ik().shape({firstName:l.Yj().min(2,"Too Short!").max(50,"Too Long!").required("Required"),lastName:l.Yj().min(2,"Too Short!").max(50,"Too Long!").required("Required"),message:l.Yj().min(50,"Too Short").max(500,"Too Long").required("Required"),email:l.Yj().email("Invalid email").required("Required")});const x=function(e){return(0,c.jsx)(s,{children:(0,c.jsx)(m.l1,{initialValues:{firstName:"",lastName:"",email:"",message:""},validationSchema:d,onSubmit:(e,n)=>{let{resetForm:r}=n;console.log(e),r()},children:e=>{let{errors:n,touched:r}=e;return(0,c.jsxs)(m.lV,{className:"contact_form",children:[(0,c.jsxs)("div",{className:"input_container ".concat(n.firstName&&r.firstName?"error":""),children:[(0,c.jsx)(m.D0,{name:"firstName",placeholder:"Type your name"}),n.firstName&&r.firstName?(0,c.jsx)("div",{className:"error_field",children:n.firstName}):null]}),(0,c.jsxs)("div",{className:"input_container ".concat(n.lastName&&r.lastName?"error":""),children:[(0,c.jsx)(m.D0,{name:"lastName",placeholder:"Type your last name"}),n.lastName&&r.lastName?(0,c.jsx)("div",{className:"error_field",children:n.lastName}):null]}),(0,c.jsxs)("div",{className:"input_container ".concat(n.email&&r.email?"error":""),children:[(0,c.jsx)(m.D0,{name:"email",type:"email",placeholder:"Type your email"}),n.email&&r.email?(0,c.jsx)("div",{className:"error_field",children:n.email}):null]}),(0,c.jsxs)("div",{className:"input_container ".concat(n.message&&r.message?"error":""),children:[(0,c.jsx)(m.D0,{as:"textarea",name:"message",type:"text",placeholder:"Type your message"}),n.message&&r.message?(0,c.jsx)("div",{className:"error_field",children:n.message}):null]}),(0,c.jsx)("div",{className:"button_container",children:(0,c.jsxs)("button",{className:"submit_form_btn",type:"submit",children:["SEND",(0,c.jsx)(o.$_z,{})]})})]})}})})};var h=r(7291);const p=function(e){return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(i.A,{children:"Contact us"}),(0,c.jsxs)(h.n5,{className:"contact_flex",children:[(0,c.jsx)(x,{}),(0,c.jsx)("iframe",{className:"bordered",src:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d21234.541941581905!2d18.07880522099052!3d48.29674009227935!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x476b3efddce92a83%3A0xe57854eebfaab9de!2zxb1lbGV6bmnEjW7DoSBzdGFuaWNh!5e0!3m2!1suk!2ssk!4v1711965105423!5m2!1suk!2ssk",width:"600",height:"450",allowFullScreen:"",loading:"lazy",referrerPolicy:"no-referrer-when-downgrade"})]})]})}}}]);
//# sourceMappingURL=761.1717d9cf.chunk.js.map