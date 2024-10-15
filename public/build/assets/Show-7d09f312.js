import{h as k,u as H,m as P,t as T,r as o,o as u,a as V,f as n,l as a,e as l,F as A,k as c,x as s,y as i,p as I,b as g,d as _}from"./app-44623493.js";const N={class:"grid grid-cols-1 gap-x-4 gap-y-8 sm:grid-cols-2"},L=["innerHTML"],R={name:"CompanyDesignationShow"},F=Object.assign(R,{setup(j){k();const p=H(),m=P(),f={},y="company/designation/",t=T({...f}),b=e=>{Object.assign(t,e)};return(e,d)=>{const B=o("PageHeaderAction"),$=o("PageHeader"),r=o("BaseDataView"),C=o("BaseButton"),h=o("ShowButton"),D=o("BaseCard"),v=o("ShowItem"),w=o("ParentTransition");return u(),V(A,null,[n($,{title:e.$trans(l(p).meta.trans,{attribute:e.$trans(l(p).meta.label)}),navs:[{label:e.$trans("company.company"),path:"Company"},{label:e.$trans("company.designation.designation"),path:"CompanyDesignationList"}]},{default:a(()=>[n(B,{name:"CompanyDesignation",title:e.$trans("company.designation.designation"),actions:["list"]},null,8,["title"])]),_:1},8,["title","navs"]),n(w,{appear:"",visibility:!0},{default:a(()=>[n(v,{"init-url":y,uuid:l(p).params.uuid,onSetItem:b,onRedirectTo:d[1]||(d[1]=S=>l(m).push({name:"Designation"}))},{default:a(()=>[t.uuid?(u(),c(D,{key:0},{title:a(()=>[s(i(t.name),1)]),footer:a(()=>[n(h,null,{default:a(()=>[l(I)("designation:edit")?(u(),c(C,{key:0,design:"primary",onClick:d[0]||(d[0]=S=>l(m).push({name:"CompanyDesignationEdit",params:{uuid:t.uuid}}))},{default:a(()=>[s(i(e.$trans("general.edit")),1)]),_:1})):g("",!0)]),_:1})]),default:a(()=>[_("dl",N,[n(r,{label:e.$trans("company.designation.props.name")},{default:a(()=>[s(i(t.name),1)]),_:1},8,["label"]),n(r,{label:e.$trans("company.designation.props.alias")},{default:a(()=>[s(i(t.alias),1)]),_:1},8,["label"]),n(r,{label:e.$trans("company.designation.props.parent")},{default:a(()=>[s(i(t.parent?t.parent.name:"-"),1)]),_:1},8,["label"]),n(r,{class:"col-span-1 sm:col-span-2",label:e.$trans("company.designation.props.description")},{default:a(()=>[_("div",{innerHTML:t.description},null,8,L)]),_:1},8,["label"]),n(r,{label:e.$trans("general.created_at")},{default:a(()=>[s(i(t.createdAt.formatted),1)]),_:1},8,["label"]),n(r,{label:e.$trans("general.updated_at")},{default:a(()=>[s(i(t.updatedAt.formatted),1)]),_:1},8,["label"])])]),_:1})):g("",!0)]),_:1},8,["uuid"])]),_:1})],64)}}});export{F as default};