import{u as _,s as T,t as V,r as a,o as f,k as g,l as c,d as s,f as i,e as r,y as d}from"./app-44623493.js";const B={class:"grid grid-cols-1 gap-6"},y={class:"col-span-1"},P={class:"col-span-1"},$={class:"col-span-1"},A={class:"text-sm"},F={name:"ConfigMailTemplateForm"},U=Object.assign(F,{setup(b){const m=_(),p={subject:"",content:"",variablesDisplay:""},l="config/mailTemplate/",n=T(l),t=V({...p});return(u,e)=>{const v=a("BaseInput"),j=a("BaseEditor"),C=a("FormAction");return f(),g(C,{"init-url":l,"init-form":p,form:t,redirect:"ConfigMailTemplate"},{default:c(()=>[s("div",B,[s("div",y,[i(v,{type:"text",modelValue:t.subject,"onUpdate:modelValue":e[0]||(e[0]=o=>t.subject=o),name:"subject",label:u.$trans("config.mail.template.props.subject"),error:r(n).subject,"onUpdate:error":e[1]||(e[1]=o=>r(n).subject=o),autofocus:""},null,8,["modelValue","label","error"])]),s("div",P,[i(j,{id:"Testing",modelValue:t.content,"onUpdate:modelValue":e[2]||(e[2]=o=>t.content=o),name:"content",edit:!!r(m).params.uuid,label:u.$trans("config.mail.template.props.content"),error:r(n).content,"onUpdate:error":e[3]||(e[3]=o=>r(n).content=o)},null,8,["modelValue","edit","label","error"])]),s("div",$,[s("p",A,d(u.$trans("config.mail.template.available_variables"))+": "+d(t.variablesDisplay),1)])])]),_:1},8,["form"])}}}),k={name:"ConfigMailTemplateAction"},M=Object.assign(k,{setup(b){return _(),(m,p)=>{const l=a("PageHeaderAction"),n=a("ParentTransition"),t=a("ConfigPage");return f(),g(t,{"no-background":""},{action:c(()=>[i(l,{name:"ConfigMailTemplate",title:m.$trans("config.mail.template.template"),actions:["list"]},null,8,["title"])]),default:c(()=>[i(n,{appear:"",visibility:!0},{default:c(()=>[i(U)]),_:1})]),_:1})}}});export{M as default};
