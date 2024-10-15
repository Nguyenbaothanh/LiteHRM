import{h as S,u as w,m as E,t as v,r as s,o as p,a as P,f as t,l as a,e as m,F as V,k,x as n,y as r,d as C,b as A}from"./app-44623493.js";const H={class:"grid grid-cols-1 gap-x-4 gap-y-8 sm:grid-cols-2"},I={name:"EmployeeRecordShow"},j=Object.assign(I,{props:{employee:{type:Object,default(){return{}}}},setup(d){S();const u=w(),c=E(),y={},b="employee/record/",o=v({...y}),f=e=>{Object.assign(o,e)};return(e,i)=>{const g=s("PageHeaderAction"),$=s("PageHeader"),l=s("BaseDataView"),_=s("ListMedia"),h=s("BaseCard"),B=s("ShowItem"),R=s("ParentTransition");return p(),P(V,null,[t($,{title:e.$trans(m(u).meta.trans,{attribute:e.$trans(m(u).meta.label)}),navs:[{label:e.$trans("employee.employee"),path:"Employee"},{label:d.employee.contact.name,path:{name:"EmployeeShow",params:{uuid:d.employee.uuid}}},{label:e.$trans("employee.record.record"),path:{name:"EmployeeRecord",params:{uuid:d.employee.uuid}}}]},{default:a(()=>[t(g,{name:"EmployeeRecord",title:e.$trans("employee.record.record"),actions:["list"]},null,8,["title"])]),_:1},8,["title","navs"]),t(R,{appear:"",visibility:!0},{default:a(()=>[t(B,{"init-url":b,uuid:m(u).params.uuid,"module-uuid":m(u).params.muuid,onSetItem:f,onRedirectTo:i[0]||(i[0]=N=>m(c).push({name:"EmployeeRecord",params:{uuid:d.employee.uuid}}))},{default:a(()=>[o.uuid?(p(),k(h,{key:0},{title:a(()=>[n(r(d.employee.contact.name),1)]),footer:a(()=>[]),default:a(()=>[C("dl",H,[t(l,{label:e.$trans("company.department.department")},{default:a(()=>[n(r(o.department.name),1)]),_:1},8,["label"]),t(l,{label:e.$trans("company.designation.designation")},{default:a(()=>[n(r(o.designation.name),1)]),_:1},8,["label"]),t(l,{label:e.$trans("company.branch.branch")},{default:a(()=>[n(r(o.branch.name),1)]),_:1},8,["label"]),t(l,{label:e.$trans("employee.employment_status.employment_status")},{default:a(()=>[n(r(o.employmentStatus.name),1)]),_:1},8,["label"]),t(l,{label:e.$trans("employee.record.props.period")},{default:a(()=>[n(r(o.period),1)]),_:1},8,["label"]),t(l,{label:e.$trans("employee.record.props.duration")},{default:a(()=>[n(r(o.duration),1)]),_:1},8,["label"]),t(l,{class:"col-span-1 sm:col-span-2",label:e.$trans("general.attachment")},{default:a(()=>[t(_,{media:o.media,url:`/app/employees/${d.employee.uuid}/records/${o.uuid}/`},null,8,["media","url"])]),_:1},8,["label"]),t(l,{label:e.$trans("general.created_at")},{default:a(()=>[n(r(o.createdAt.formatted),1)]),_:1},8,["label"]),t(l,{label:e.$trans("general.updated_at")},{default:a(()=>[n(r(o.updatedAt.formatted),1)]),_:1},8,["label"])])]),_:1})):A("",!0)]),_:1},8,["uuid","module-uuid"])]),_:1})],64)}}});export{j as default};