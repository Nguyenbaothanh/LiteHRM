import{t as w,r as l,o as m,k as c,l as e,d as h,f as a,m as L,q as M,p as v,z as N,e as o,x as d,y as u,b as k,a as U,A as j,F as S}from"./app-44623493.js";const E={class:"grid grid-cols-3 gap-6"},O={class:"col-span-3 sm:col-span-1"},q={class:"col-span-3 sm:col-span-1"},z={__name:"Filter",emits:["hide"],setup(B,{emit:p}){const f={name:"",startDate:"",endDate:""},r=w({...f});return(C,s)=>{const _=l("BaseInput"),y=l("DatePicker"),D=l("FilterForm");return m(),c(D,{"init-form":f,form:r,onHide:s[3]||(s[3]=t=>p("hide"))},{default:e(()=>[h("div",E,[h("div",O,[a(_,{type:"text",modelValue:r.name,"onUpdate:modelValue":s[0]||(s[0]=t=>r.name=t),name:"name",label:C.$trans("calendar.holiday.props.name")},null,8,["modelValue","label"])]),h("div",q,[a(y,{start:r.startDate,"onUpdate:start":s[1]||(s[1]=t=>r.startDate=t),end:r.endDate,"onUpdate:end":s[2]||(s[2]=t=>r.endDate=t),name:"dateBetween",as:"range",label:C.$trans("general.date_between")},null,8,["start","end","label"])])])]),_:1},8,["form"])}}},G={name:"CalendarHolidayList"},K=Object.assign(G,{setup(B){const p=L(),f=M("emitter");let r=["filter"];v("holiday:create")&&r.unshift("create");let C=[];v("holiday:export")&&(C=["print","pdf","excel"]);const s="calendar/holiday/",_=N(!1),y=w({}),D=t=>{Object.assign(y,t)};return(t,i)=>{const H=l("PageHeaderAction"),I=l("PageHeader"),F=l("ParentTransition"),g=l("DataCell"),$=l("FloatingMenuItem"),P=l("FloatingMenu"),A=l("DataRow"),V=l("BaseButton"),T=l("DataTable"),R=l("ListItem");return m(),c(R,{"init-url":s,onSetItems:D},{header:e(()=>[a(I,{title:t.$trans("calendar.holiday.holiday"),navs:[{label:t.$trans("calendar.calendar"),path:"Calendar"}]},{default:e(()=>[a(H,{url:"calendar/holidays/",name:"CalendarHoliday",title:t.$trans("calendar.holiday.holiday"),actions:o(r),"dropdown-actions":o(C),onToggleFilter:i[0]||(i[0]=n=>_.value=!_.value)},null,8,["title","actions","dropdown-actions"])]),_:1},8,["title","navs"])]),filter:e(()=>[a(F,{appear:"",visibility:_.value},{default:e(()=>[a(z,{onRefresh:i[1]||(i[1]=n=>o(f).emit("listItems")),onHide:i[2]||(i[2]=n=>_.value=!1)})]),_:1},8,["visibility"])]),default:e(()=>[a(F,{appear:"",visibility:!0},{default:e(()=>[a(T,{header:y.headers,meta:y.meta,module:"calendar.holiday",onRefresh:i[4]||(i[4]=n=>o(f).emit("listItems"))},{actionButton:e(()=>[o(v)("holiday:create")?(m(),c(V,{key:0,onClick:i[3]||(i[3]=n=>o(p).push({name:"CalendarHolidayCreate"}))},{default:e(()=>[d(u(t.$trans("global.add",{attribute:t.$trans("calendar.holiday.holiday")})),1)]),_:1})):k("",!0)]),default:e(()=>[(m(!0),U(S,null,j(y.data,n=>(m(),c(A,{key:n.uuid},{default:e(()=>[a(g,{name:"name"},{default:e(()=>[d(u(n.name),1)]),_:2},1024),a(g,{name:"startDate"},{default:e(()=>[d(u(n.startDate.formatted),1)]),_:2},1024),a(g,{name:"endDate"},{default:e(()=>[d(u(n.endDate.formatted),1)]),_:2},1024),a(g,{name:"duration"},{default:e(()=>[d(u(n.duration),1)]),_:2},1024),a(g,{name:"createdAt"},{default:e(()=>[d(u(n.createdAt.formatted),1)]),_:2},1024),a(g,{name:"action"},{default:e(()=>[a(P,null,{default:e(()=>[a($,{icon:"fas fa-arrow-circle-right",onClick:b=>o(p).push({name:"CalendarHolidayShow",params:{uuid:n.uuid}})},{default:e(()=>[d(u(t.$trans("general.show")),1)]),_:2},1032,["onClick"]),o(v)("holiday:edit")?(m(),c($,{key:0,icon:"fas fa-edit",onClick:b=>o(p).push({name:"CalendarHolidayEdit",params:{uuid:n.uuid}})},{default:e(()=>[d(u(t.$trans("general.edit")),1)]),_:2},1032,["onClick"])):k("",!0),o(v)("holiday:create")?(m(),c($,{key:1,icon:"fas fa-copy",onClick:b=>o(p).push({name:"CalendarHolidayDuplicate",params:{uuid:n.uuid}})},{default:e(()=>[d(u(t.$trans("general.duplicate")),1)]),_:2},1032,["onClick"])):k("",!0),o(v)("holiday:delete")?(m(),c($,{key:2,icon:"fas fa-trash",onClick:b=>o(f).emit("deleteItem",{uuid:n.uuid})},{default:e(()=>[d(u(t.$trans("general.delete")),1)]),_:2},1032,["onClick"])):k("",!0)]),_:2},1024)]),_:2},1024)]),_:2},1024))),128))]),_:1},8,["header","meta"])]),_:1})]),_:1})}}});export{K as default};