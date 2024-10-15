import{h as w,u as S,m as k,t as C,r as s,o as c,a as H,f as t,l as a,e as i,F as P,k as V,x as o,y as l,d as m,b as A}from"./app-44623493.js";const I={class:"grid grid-cols-1 gap-x-4 gap-y-8 sm:grid-cols-2"},N=["innerHTML"],D={name:"LeaveTypeShow"},E=Object.assign(D,{setup(R){w();const d=S(),u=k(),_={},v="leave/type/",n=C({..._}),y=e=>{Object.assign(n,e)};return(e,p)=>{const f=s("PageHeaderAction"),b=s("PageHeader"),r=s("BaseDataView"),g=s("BaseButton"),B=s("ShowButton"),$=s("BaseCard"),T=s("ShowItem"),h=s("ParentTransition");return c(),H(P,null,[t(b,{title:e.$trans(i(d).meta.trans,{attribute:e.$trans(i(d).meta.label)}),navs:[{label:e.$trans("leave.leave"),path:"Leave"},{label:e.$trans("leave.type.type"),path:"LeaveTypeList"}]},{default:a(()=>[t(f,{name:"LeaveType",title:e.$trans("leave.type.type"),actions:["list"]},null,8,["title"])]),_:1},8,["title","navs"]),t(h,{appear:"",visibility:!0},{default:a(()=>[t(T,{"init-url":v,uuid:i(d).params.uuid,onSetItem:y,onRedirectTo:p[1]||(p[1]=L=>i(u).push({name:"LeaveType"}))},{default:a(()=>[n.uuid?(c(),V($,{key:0},{title:a(()=>[o(l(n.name),1)]),footer:a(()=>[t(B,null,{default:a(()=>[t(g,{design:"primary",onClick:p[0]||(p[0]=L=>i(u).push({name:"LeaveTypeEdit",params:{uuid:n.uuid}}))},{default:a(()=>[o(l(e.$trans("general.edit")),1)]),_:1})]),_:1})]),default:a(()=>[m("dl",I,[t(r,{label:e.$trans("leave.type.props.name")},{default:a(()=>[o(l(n.name),1)]),_:1},8,["label"]),t(r,{label:e.$trans("leave.type.props.code")},{default:a(()=>[o(l(n.code),1)]),_:1},8,["label"]),t(r,{label:e.$trans("leave.type.props.alias")},{default:a(()=>[o(l(n.alias),1)]),_:1},8,["label"]),t(r,{class:"col-span-1 sm:col-span-2",label:e.$trans("leave.type.props.description")},{default:a(()=>[m("div",{innerHTML:n.description},null,8,N)]),_:1},8,["label"]),t(r,{label:e.$trans("general.created_at")},{default:a(()=>[o(l(n.createdAt.formatted),1)]),_:1},8,["label"]),t(r,{label:e.$trans("general.updated_at")},{default:a(()=>[o(l(n.updatedAt.formatted),1)]),_:1},8,["label"])])]),_:1})):A("",!0)]),_:1},8,["uuid"])]),_:1})],64)}}});export{E as default};
