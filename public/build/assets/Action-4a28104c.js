import{u as v,t as g,s as F,r as c,o as V,k as h,l as m,d as i,f as r,e as t,n as j,x as O,y as b,L as T,a as k,F as A}from"./app-44623493.js";import{d as E}from"./vuedraggable.umd-baf2a55c.js";const q={class:"grid grid-cols-2 gap-6"},L={class:"col-span-2 sm:col-span-1"},R={class:"col-span-2 sm:col-span-1"},C={class:"col-span-2 sm:col-span-1"},N={class:"mt-4 grid grid-cols-4 gap-3"},w={class:"col-span-4 flex items-end sm:col-span-1"},x=i("i",{class:"fas fa-arrows mr-2 cursor-pointer"},null,-1),D={class:"col-span-4 sm:col-span-1"},I=i("div",{class:"col-span-4 sm:col-span-1"},null,-1),z={name:"PayrollSalaryTemplateForm"},G=Object.assign(z,{setup(P){v();const n={name:"",alias:"",records:[],description:""},d="payroll/salaryTemplate/",u=g({attendanceTypes:[],payHeadTypes:[],payHeads:[]}),o=F(d),s=g({...n}),y=p=>{Object.assign(u,p),u.payHeads.forEach((e,l)=>{n.records.push({uuid:e.uuid,payHead:e,attendanceType:"",type:"",position:l})}),Object.assign(s,T(n))},$=p=>{let e=[];p.records.forEach(l=>{e.push({uuid:l.uuid,payHead:l.payHead,attendanceType:l.attendanceType,type:l.type.value,position:l.position})}),Object.assign(n,{...p,records:e}),Object.assign(s,T(n))};return(p,e)=>{const l=c("BaseInput"),H=c("BaseTextarea"),B=c("BaseLabel"),U=c("BaseSelect"),S=c("FormAction");return V(),h(S,{"pre-requisites":!0,onSetPreRequisites:y,"init-url":d,"init-form":n,form:s,"set-form":$,redirect:"PayrollSalaryTemplate"},{default:m(()=>[i("div",q,[i("div",L,[r(l,{type:"text",modelValue:s.name,"onUpdate:modelValue":e[0]||(e[0]=a=>s.name=a),name:"name",label:p.$trans("payroll.salary_template.props.name"),error:t(o).name,"onUpdate:error":e[1]||(e[1]=a=>t(o).name=a),autofocus:""},null,8,["modelValue","label","error"])]),i("div",R,[r(l,{type:"text",modelValue:s.alias,"onUpdate:modelValue":e[2]||(e[2]=a=>s.alias=a),name:"alias",label:p.$trans("payroll.salary_template.props.alias"),error:t(o).alias,"onUpdate:error":e[3]||(e[3]=a=>t(o).alias=a),autofocus:""},null,8,["modelValue","label","error"])]),i("div",C,[r(H,{modelValue:s.description,"onUpdate:modelValue":e[4]||(e[4]=a=>s.description=a),name:"description",label:p.$trans("payroll.salary_template.props.description"),error:t(o).description,"onUpdate:error":e[5]||(e[5]=a=>t(o).description=a)},null,8,["modelValue","label","error"])])]),r(t(E),{list:s.records,"item-key":"uuid"},{item:m(({element:a,index:_})=>[i("div",N,[i("div",w,[x,r(B,{class:j({"text-success":a.payHead.category.value=="earning","text-danger":a.payHead.category.value=="deduction"})},{default:m(()=>[O(b(a.payHead.name)+" ("+b(a.payHead.code)+") ",1)]),_:2},1032,["class"])]),i("div",D,[r(U,{modelValue:a.type,"onUpdate:modelValue":f=>a.type=f,name:`records.${_}.type`,label:p.$trans("payroll.salary_template.props.type"),options:u.payHeadTypes,error:t(o)[`records.${_}.type`],"onUpdate:error":f=>t(o)[`records.${_}.type`]=f},null,8,["modelValue","onUpdate:modelValue","name","label","options","error","onUpdate:error"])]),I])]),_:1},8,["list"])]),_:1},8,["form"])}}}),J={name:"PayrollSalaryTemplateAction"},Q=Object.assign(J,{setup(P){const n=v();return(d,u)=>{const o=c("PageHeaderAction"),s=c("PageHeader"),y=c("ParentTransition");return V(),k(A,null,[r(s,{title:d.$trans(t(n).meta.trans,{attribute:d.$trans(t(n).meta.label)}),navs:[{label:d.$trans("payroll.payroll"),path:"Payroll"},{label:d.$trans("payroll.salary_template.salary_template"),path:"PayrollSalaryTemplateList"}]},{default:m(()=>[r(o,{name:"PayrollSalaryTemplate",title:d.$trans("payroll.salary_template.salary_template"),actions:["list"]},null,8,["title"])]),_:1},8,["title","navs"]),r(y,{appear:"",visibility:!0},{default:m(()=>[r(G)]),_:1})],64)}}});export{Q as default};