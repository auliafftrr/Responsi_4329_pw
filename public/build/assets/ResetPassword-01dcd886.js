import{T as c,o as f,c as w,w as n,a as o,u as e,Z as _,b as t,d as V,n as b,e as g}from"./app-8e55d31e.js";import{_ as k}from"./GuestLayout-d7a6ca9e.js";import{_ as l,a as i,b as m}from"./TextInput-6b7294a0.js";import{P as v}from"./PrimaryButton-ca21e236.js";import"./ApplicationLogo-b43bde4e.js";import"./_plugin-vue_export-helper-c27b6911.js";const y=["onSubmit"],P={class:"mt-4"},q={class:"mt-4"},x={class:"flex items-center justify-end mt-4"},h={__name:"ResetPassword",props:{email:{type:String,required:!0},token:{type:String,required:!0}},setup(u){const d=u,s=c({token:d.token,email:d.email,password:"",password_confirmation:""}),p=()=>{s.post(route("password.store"),{onFinish:()=>s.reset("password","password_confirmation")})};return(B,a)=>(f(),w(k,null,{default:n(()=>[o(e(_),{title:"Reset Password"}),t("form",{onSubmit:g(p,["prevent"])},[t("div",null,[o(l,{for:"email",value:"Email"}),o(i,{id:"email",type:"email",class:"mt-1 block w-full",modelValue:e(s).email,"onUpdate:modelValue":a[0]||(a[0]=r=>e(s).email=r),required:"",autofocus:"",autocomplete:"username"},null,8,["modelValue"]),o(m,{class:"mt-2",message:e(s).errors.email},null,8,["message"])]),t("div",P,[o(l,{for:"password",value:"Password"}),o(i,{id:"password",type:"password",class:"mt-1 block w-full",modelValue:e(s).password,"onUpdate:modelValue":a[1]||(a[1]=r=>e(s).password=r),required:"",autocomplete:"new-password"},null,8,["modelValue"]),o(m,{class:"mt-2",message:e(s).errors.password},null,8,["message"])]),t("div",q,[o(l,{for:"password_confirmation",value:"Confirm Password"}),o(i,{id:"password_confirmation",type:"password",class:"mt-1 block w-full",modelValue:e(s).password_confirmation,"onUpdate:modelValue":a[2]||(a[2]=r=>e(s).password_confirmation=r),required:"",autocomplete:"new-password"},null,8,["modelValue"]),o(m,{class:"mt-2",message:e(s).errors.password_confirmation},null,8,["message"])]),t("div",x,[o(v,{class:b({"opacity-25":e(s).processing}),disabled:e(s).processing},{default:n(()=>[V(" Reset Password ")]),_:1},8,["class","disabled"])])],40,y)]),_:1}))}};export{h as default};
