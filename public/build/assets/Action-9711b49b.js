import{u as M,m as I,q as A,s as J,t as N,v as K,L as x,r as i,o as k,a as j,k as E,l as y,f as s,x as B,y as T,b as h,e as a,d as g,n as Q,F as q}from"./app-44623493.js";const W={key:0,class:"grid grid-cols-3 gap-6"},X={class:"col-span-3 sm:col-span-1"},Y={key:0,class:"col-span-3 sm:col-span-1"},Z={class:"col-span-3 sm:col-span-1"},ee={class:"col-span-3 sm:col-span-1"},te={class:"col-span-3 sm:col-span-1"},ae={class:"col-span-3 sm:col-span-1"},oe={class:"col-span-3 sm:col-span-1"},ne={class:"mt-4 grid grid-cols-1"},re={class:"col"},le={class:"grid grid-cols-1"},se={class:"col"},me={name:"EmployeeRecordForm"},de=Object.assign(me,{props:{employee:{type:Object,default(){return{}}}},setup(p){const u=p,d=M(),F=I(),n=A("$trans"),$=A("emitter"),C=[{key:"period",label:n("employee.record.props.period"),visibility:!0},{key:"department",label:n("company.department.department"),visibility:!0},{key:"designation",label:n("company.designation.designation"),visibility:!0},{key:"branch",label:n("company.branch.branch"),visibility:!0},{key:"employmentStatus",label:n("employee.employment_status.employment_status"),visibility:!0}],U={end:!1,endDate:"",startDate:"",department:"",designation:"",branch:"",employmentStatus:"",remarks:"",media:[],mediaToken:"",mediaHash:""},O="employee/record/",m=J(O),o=N({...U}),l=N({department:"",designation:"",branch:"",employmentStatus:"",isLoaded:!1}),z=r=>{var e,c,S,v,V,_,f,b,D,R;Object.assign(U,{end:!!r.isEnded,startDate:(e=r.startDate)==null?void 0:e.value,endDate:r.isEnded?(c=r.endDate)==null?void 0:c.value:"",department:(S=r.department)==null?void 0:S.uuid,designation:(v=r.designation)==null?void 0:v.uuid,branch:(V=r.branch)==null?void 0:V.uuid,employmentStatus:(_=r.employmentStatus)==null?void 0:_.uuid,remarks:r.remarks,media:r.media,mediaToken:r.mediaToken}),Object.assign(o,x(U)),l.department=(f=r.department)==null?void 0:f.name,l.designation=(b=r.designation)==null?void 0:b.name,l.branch=(D=r.branch)==null?void 0:D.name,l.employmentStatus=(R=r.employmentStatus)==null?void 0:R.name,l.isLoaded=!0},G=()=>{$.emit("employeeUpdated"),F.push({name:"EmployeeRecord",params:{uuid:u.employee.uuid}})};return K(()=>{var r,e,c,S,v,V,_,f,b,D,R,L,t,P,H,w;d.params.muuid||(Object.assign(U,{department:(e=(r=u.employee.lastRecord)==null?void 0:r.department)==null?void 0:e.uuid,designation:(S=(c=u.employee.lastRecord)==null?void 0:c.designation)==null?void 0:S.uuid,branch:(V=(v=u.employee.lastRecord)==null?void 0:v.branch)==null?void 0:V.uuid,employmentStatus:(f=(_=u.employee.lastRecord)==null?void 0:_.employmentStatus)==null?void 0:f.uuid}),Object.assign(o,x(U)),l.department=(D=(b=u.employee.lastRecord)==null?void 0:b.department)==null?void 0:D.name,l.designation=(L=(R=u.employee.lastRecord)==null?void 0:R.designation)==null?void 0:L.name,l.branch=(P=(t=u.employee.lastRecord)==null?void 0:t.branch)==null?void 0:P.name,l.employmentStatus=(w=(H=u.employee.lastRecord)==null?void 0:H.employmentStatus)==null?void 0:w.name,l.isLoaded=!0)}),(r,e)=>{const c=i("DataCell"),S=i("DataRow"),v=i("SimpleTable"),V=i("BaseCard"),_=i("BaseSwitch"),f=i("DatePicker"),b=i("BaseSelectSearch"),D=i("BaseTextarea"),R=i("MediaUpload"),L=i("FormAction");return k(),j(q,null,[p.employee.lastRecord?(k(),E(V,{key:0,"no-padding":"","no-content-padding":"","bottom-content-padding":"",class:"mb-4"},{default:y(()=>[s(v,{header:C},{default:y(()=>[s(S,null,{default:y(()=>[s(c,{name:"period"},{default:y(()=>[B(T(p.employee.lastRecord.period),1)]),_:1}),s(c,{name:"department"},{default:y(()=>[B(T(p.employee.lastRecord.department.name),1)]),_:1}),s(c,{name:"designation"},{default:y(()=>[B(T(p.employee.lastRecord.designation.name),1)]),_:1}),s(c,{name:"branch"},{default:y(()=>[B(T(p.employee.lastRecord.branch.name),1)]),_:1}),s(c,{name:"employmentStatus"},{default:y(()=>[B(T(p.employee.lastRecord.employmentStatus.name),1)]),_:1})]),_:1})]),_:1})]),_:1})):h("",!0),s(L,{"no-data-fetch":"","init-url":O,uuid:a(d).params.uuid,"module-uuid":a(d).params.muuid,"init-form":U,form:o,"set-form":z,"after-submit":G,redirect:{name:"EmployeeRecord",params:{uuid:a(d).params.uuid}}},{default:y(()=>[a(d).params.muuid?(k(),j("div",W,[g("div",X,[s(_,{modelValue:o.end,"onUpdate:modelValue":e[0]||(e[0]=t=>o.end=t),name:"end",label:a(n)("employee.record.props.end"),error:a(m).end,"onUpdate:error":e[1]||(e[1]=t=>a(m).end=t),vertical:""},null,8,["modelValue","label","error"])]),o.end?(k(),j("div",Y,[s(f,{modelValue:o.endDate,"onUpdate:modelValue":e[2]||(e[2]=t=>o.endDate=t),name:"endDate",label:a(n)("employee.record.props.end_date"),error:a(m).endDate,"onUpdate:error":e[3]||(e[3]=t=>a(m).endDate=t)},null,8,["modelValue","label","error"])])):h("",!0)])):h("",!0),!o.end||a(d).params.muuid?(k(),j("div",{key:1,class:Q(["grid grid-cols-3 gap-6",{"mt-4":a(d).params.muuid}])},[g("div",Z,[s(f,{modelValue:o.startDate,"onUpdate:modelValue":e[4]||(e[4]=t=>o.startDate=t),name:"startDate",label:a(n)("employee.record.props.start_date"),error:a(m).startDate,"onUpdate:error":e[5]||(e[5]=t=>a(m).startDate=t)},null,8,["modelValue","label","error"])]),g("div",ee,[l.isLoaded?(k(),E(b,{key:0,name:"department",label:a(n)("global.select",{attribute:a(n)("company.department.department")}),modelValue:o.department,"onUpdate:modelValue":e[6]||(e[6]=t=>o.department=t),error:a(m).department,"onUpdate:error":e[7]||(e[7]=t=>a(m).department=t),"label-prop":"name","value-prop":"uuid","init-search":l.department,"init-search-key":"name","search-action":"company/department/list"},null,8,["label","modelValue","error","init-search"])):h("",!0)]),g("div",te,[l.isLoaded?(k(),E(b,{key:0,name:"designation",label:a(n)("global.select",{attribute:a(n)("company.designation.designation")}),modelValue:o.designation,"onUpdate:modelValue":e[8]||(e[8]=t=>o.designation=t),error:a(m).designation,"onUpdate:error":e[9]||(e[9]=t=>a(m).designation=t),"label-prop":"name","value-prop":"uuid","init-search":l.designation,"init-search-key":"name","search-action":"company/designation/list"},null,8,["label","modelValue","error","init-search"])):h("",!0)]),g("div",ae,[l.isLoaded?(k(),E(b,{key:0,name:"branch",label:a(n)("global.select",{attribute:a(n)("company.branch.branch")}),modelValue:o.branch,"onUpdate:modelValue":e[10]||(e[10]=t=>o.branch=t),error:a(m).branch,"onUpdate:error":e[11]||(e[11]=t=>a(m).branch=t),"label-prop":"name","value-prop":"uuid","init-search":l.branch,"init-search-key":"name","search-action":"company/branch/list"},null,8,["label","modelValue","error","init-search"])):h("",!0)]),g("div",oe,[l.isLoaded?(k(),E(b,{key:0,name:"employmentStatus",label:a(n)("global.select",{attribute:a(n)("employee.employment_status.employment_status")}),modelValue:o.employmentStatus,"onUpdate:modelValue":e[12]||(e[12]=t=>o.employmentStatus=t),error:a(m).employmentStatus,"onUpdate:error":e[13]||(e[13]=t=>a(m).employmentStatus=t),"label-prop":"name","value-prop":"uuid","init-search":l.employmentStatus,"init-search-key":"name","search-action":"option/list","additional-search-query":{type:"employment_status"}},null,8,["label","modelValue","error","init-search"])):h("",!0)])],2)):h("",!0),g("div",ne,[g("div",re,[s(D,{modelValue:o.remarks,"onUpdate:modelValue":e[14]||(e[14]=t=>o.remarks=t),name:"remarks",label:a(n)("employee.record.props.remarks"),error:a(m).remarks,"onUpdate:error":e[15]||(e[15]=t=>a(m).remarks=t)},null,8,["modelValue","label","error"])])]),g("div",le,[g("div",se,[s(R,{multiple:"",label:a(n)("general.file"),module:"employee_record",media:o.media,onSetHash:e[16]||(e[16]=t=>o.mediaHash=t),onSetToken:e[17]||(e[17]=t=>o.mediaToken=t)},null,8,["label","media"])])])]),_:1},8,["uuid","module-uuid","form","redirect"])],64)}}}),ie={name:"EmployeeRecordAction"},ue=Object.assign(ie,{props:{employee:{type:Object,default(){return{}}}},setup(p){const u=M();return(d,F)=>{const n=i("PageHeaderAction"),$=i("PageHeader"),C=i("ParentTransition");return k(),j(q,null,[s($,{title:d.$trans(a(u).meta.trans,{attribute:d.$trans(a(u).meta.label)}),navs:[{label:d.$trans("employee.employee"),path:"EmployeeList"},{label:p.employee.contact.name,path:{name:"EmployeeShow",params:{uuid:p.employee.uuid}}},{label:d.$trans("employee.record.record"),path:{name:"EmployeeRecord",params:{uuid:p.employee.uuid}}}]},{default:y(()=>[s(n,{name:"EmployeeRecord",title:d.$trans("employee.record.record"),actions:["list"]},null,8,["title"])]),_:1},8,["title","navs"]),s(C,{appear:"",visibility:!0},{default:y(()=>[s(de,{employee:p.employee},null,8,["employee"])]),_:1})],64)}}});export{ue as default};