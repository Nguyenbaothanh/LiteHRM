import{u as M,t as q,v as U,r as o,o as f,k as v,l as e,d as T,x as m,y as l,b as g,f as a,m as O,q as j,p as k,z as E,e as d,a as C,A as z,F}from"./app-44623493.js";const G={class:"grid grid-cols-3 gap-6"},J={class:"col-span-3 sm:col-span-1"},K={class:"col-span-3 sm:col-span-1"},Q={class:"col-span-3 sm:col-span-1"},R={__name:"Filter",emits:["hide"],setup(w,{emit:b}){const p=M(),$={employees:[],leaveTypes:[],startDate:"",endDate:""},r=q({...$}),y=q({employees:[],leaveTypes:[],isLoaded:!(p.query.employees||p.query.leaveTypes)});return U(async()=>{y.employees=p.query.employees?p.query.employees.split(","):[],y.leaveTypes=p.query.leaveTypes?p.query.leaveTypes.split(","):[],y.isLoaded=!0}),(c,s)=>{const D=o("BaseSelectSearch"),i=o("DatePicker"),u=o("FilterForm");return f(),v(u,{"init-form":$,form:r,multiple:["employees","leaveTypes"],onHide:s[4]||(s[4]=n=>b("hide"))},{default:e(()=>[T("div",G,[T("div",J,[y.isLoaded?(f(),v(D,{key:0,multiple:"",name:"employees",label:c.$trans("global.select",{attribute:c.$trans("employee.employee")}),modelValue:r.employees,"onUpdate:modelValue":s[0]||(s[0]=n=>r.employees=n),"value-prop":"uuid","init-search":y.employees,"search-key":"name","search-action":"employee/list"},{selectedOption:e(n=>[m(l(n.value.name)+" ("+l(n.value.codeNumber)+") ",1)]),listOption:e(n=>[m(l(n.option.name)+" ("+l(n.option.codeNumber)+") ",1)]),_:1},8,["label","modelValue","init-search"])):g("",!0)]),T("div",K,[y.isLoaded?(f(),v(D,{key:0,multiple:"",name:"leaveTypes",label:c.$trans("global.select",{attribute:c.$trans("leave.type.type")}),modelValue:r.leaveTypes,"onUpdate:modelValue":s[1]||(s[1]=n=>r.leaveTypes=n),"label-prop":"name","value-prop":"uuid","init-search":y.leaveTypes,"search-key":"name","search-action":"leave/type/list"},null,8,["label","modelValue","init-search"])):g("",!0)]),T("div",Q,[a(i,{start:r.startDate,"onUpdate:start":s[2]||(s[2]=n=>r.startDate=n),end:r.endDate,"onUpdate:end":s[3]||(s[3]=n=>r.endDate=n),name:"dateBetween",as:"range",label:c.$trans("general.date_between")},null,8,["start","end","label"])])])]),_:1},8,["form"])}}},W={name:"LeaveRequestList"},Y=Object.assign(W,{setup(w){const b=O(),p=j("emitter");let $=["filter"];k("leave-request:create")&&$.unshift("create");let r=[];k("leave-request:export")&&(r=["print","pdf","excel"]);const y="leave/request/",c=E(!1),s=q({}),D=i=>{Object.assign(s,i)};return(i,u)=>{const n=o("PageHeaderAction"),V=o("PageHeader"),B=o("ParentTransition"),_=o("DataCell"),I=o("BaseBadge"),h=o("FloatingMenuItem"),A=o("FloatingMenu"),N=o("DataRow"),S=o("BaseButton"),H=o("DataTable"),P=o("ListItem");return f(),v(P,{"init-url":y,onSetItems:D},{header:e(()=>[a(V,{title:i.$trans("leave.request.request"),navs:[{label:i.$trans("leave.leave"),path:"Leave"}]},{default:e(()=>[a(n,{url:"leave/requests/",name:"LeaveRequest","config-path":"LeaveConfig",title:i.$trans("leave.request.request"),actions:d($),"dropdown-actions":d(r),onToggleFilter:u[0]||(u[0]=t=>c.value=!c.value)},null,8,["title","actions","dropdown-actions"])]),_:1},8,["title","navs"])]),filter:e(()=>[a(B,{appear:"",visibility:c.value},{default:e(()=>[a(R,{onRefresh:u[1]||(u[1]=t=>d(p).emit("listItems")),onHide:u[2]||(u[2]=t=>c.value=!1)})]),_:1},8,["visibility"])]),default:e(()=>[a(B,{appear:"",visibility:!0},{default:e(()=>[a(H,{header:s.headers,meta:s.meta,module:"leave.request",onRefresh:u[4]||(u[4]=t=>d(p).emit("listItems"))},{actionButton:e(()=>[d(k)("leave-request:create")?(f(),v(S,{key:0,onClick:u[3]||(u[3]=t=>d(b).push({name:"LeaveRequestCreate"}))},{default:e(()=>[m(l(i.$trans("global.add",{attribute:i.$trans("leave.request.request")})),1)]),_:1})):g("",!0)]),default:e(()=>[(f(!0),C(F,null,z(s.data,t=>(f(),v(N,{key:t.uuid},{default:e(()=>[a(_,{name:"employee"},{default:e(()=>[m(l(t.employee.name)+" ("+l(t.employee.codeNumber)+") ",1)]),_:2},1024),a(_,{name:"leaveType"},{default:e(()=>[m(l(t.leaveType.name),1)]),_:2},1024),a(_,{name:"startDate"},{default:e(()=>[m(l(t.startDate.formatted),1)]),_:2},1024),a(_,{name:"endDate"},{default:e(()=>[m(l(t.endDate.formatted),1)]),_:2},1024),a(_,{name:"status"},{default:e(()=>[a(I,{label:t.status.label,design:t.status.color},null,8,["label","design"])]),_:2},1024),a(_,{name:"createdAt"},{default:e(()=>[m(l(t.createdAt.formatted),1)]),_:2},1024),a(_,{name:"action"},{default:e(()=>[a(A,null,{default:e(()=>[a(h,{icon:"fas fa-arrow-circle-right",onClick:L=>d(b).push({name:"LeaveRequestShow",params:{uuid:t.uuid}})},{default:e(()=>[m(l(i.$trans("general.show")),1)]),_:2},1032,["onClick"]),t.status=="requested"?(f(),C(F,{key:0},[d(k)("leave-request:edit")?(f(),v(h,{key:0,icon:"fas fa-edit",onClick:L=>d(b).push({name:"LeaveRequestEdit",params:{uuid:t.uuid}})},{default:e(()=>[m(l(i.$trans("general.edit")),1)]),_:2},1032,["onClick"])):g("",!0),d(k)("leave-request:delete")?(f(),v(h,{key:1,icon:"fas fa-trash",onClick:L=>d(p).emit("deleteItem",{uuid:t.uuid})},{default:e(()=>[m(l(i.$trans("general.delete")),1)]),_:2},1032,["onClick"])):g("",!0)],64)):g("",!0)]),_:2},1024)]),_:2},1024)]),_:2},1024))),128))]),_:1},8,["header","meta"])]),_:1})]),_:1})}}});export{Y as default};