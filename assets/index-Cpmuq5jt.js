import _ from"./CollapseItem-CZe-fllY.js";import B from"./FormComponentPanel-DJjFf4IG.js";import G from"./JsonModal-C6PI2Tbg.js";import V from"./index-DgBnz5re.js";import{_ as N}from"./useForm.vue_vue_type_script_setup_true_lang-Da9KdF5w.js";import Z from"./Toolbar-B3msZ1Tn.js";import q from"./PropsPanel-CCTaMSN5.js";import Q from"./ImportJsonModal-CHZZBgIj.js";import U from"./CodeModal-B1wHUqpY.js";import"./javascript-DBhWMvLi.js";import{g as P,f as X}from"./index-DrPvFpAA.js";import{b as Y,c as ee,l as oe}from"./formItemConfig-D0x5oss_.js";import{f as te,a$ as re,C as b,c as ne}from"./entry/index-D1RCTh21.js";import{g as se}from"./formItemPropsConfig-DnT7TK12.js";import{bm as J,bn as le,L as ae,f as c}from"./antd-BmrhB3rb.js";import{d as ie,f as a,p as f,Z as me,_ as pe,k as n,a9 as i,u as s,a1 as z,ad as ue,aa as de,ae as ce,aj as fe,ak as ve,F as he}from"./vue-BjERyvPm.js";import"./vuedraggable.umd-C6p3V6YJ.js";import"./LayoutItem-BaTIGAA_.js";import"./FormNode-CL-DUSDx.js";import"./FormNodeOperate-Dil4EwVj.js";import"./useFormDesignState-DaR4Tnkk.js";import"./index-BogZfeQX.js";import"./PreviewCode-Dfu95bG9.js";import"./index-KyTdHkIr.js";import"./useWindowSizeFn-DJ2iJAeD.js";import"./copyTextToClipboard-DUmgQPO1.js";import"./index-ZV3LD0en.js";import"./FormRender-DT3eCrDs.js";import"./BasicForm.vue_vue_type_script_setup_true_lang-dnma3T6b.js";import"./FormItem.vue_vue_type_script_lang-BlXal_h4.js";import"./componentMap-C3RyRbWY.js";import"./useFormItem-B4KjxddK.js";import"./RadioButtonGroup.vue_vue_type_script_setup_true_lang-B3qtL7XX.js";import"./index-C4yuUFSX.js";import"./index-Qh37hxql.js";import"./uuid-D0SLUWHI.js";import"./useSortable-DtcQmVYD.js";import"./download-XXOtKtNu.js";import"./base64Conver-bBv-IO2K.js";import"./index-CNHHUpB_.js";import"./IconPicker.vue_vue_type_script_setup_true_lang-BEFy_aOZ.js";import"./index-BEfp6a0w.js";import"./index-gYKqnhFr.js";import"./helper-ME1KvNFQ.js";import"./BasicForm.vue_vue_type_style_index_0_lang-CNTKe4_X.js";import"./useForm-3D1xYRr3.js";import"./FormProps.vue_vue_type_script_setup_true_name_FormProps_lang-BdnkgjIE.js";import"./FormItemProps.vue_vue_type_script_setup_true_name_FormItemProps_lang-CCkqgorL.js";import"./RuleProps-CGrrMNSb.js";import"./ComponentProps-C8oAf5YO.js";import"./FormOptions-Bgv7bNLT.js";import"./FormItemColumnProps-CMy4UFSW.js";const ye=ie({__name:"index",props:{title:{type:String,default:"v-form-antd表单设计器"}},setup(Pe){const{prefixCls:F}=te("form-design"),D=a(null),I=a(null),M=a(null),w=a(null),L=a(null),S=a(null),$=a({}),t=a({schemas:[],layout:"horizontal",labelLayout:"flex",labelWidth:100,labelCol:{},wrapperCol:{},currentItem:{component:"",componentProps:{}},activeKey:1}),T=o=>{o.schemas=o.schemas||[],o.schemas.forEach(e=>{e.colProps=e.colProps||{span:24},e.componentProps=e.componentProps||{},e.itemProps=e.itemProps||{}}),t.value=o},W=re(t,{deep:!0,capacity:20,parse:o=>{const e=c(o),{currentItem:r,schemas:l}=e,d=l&&l.find(m=>m.key===(r==null?void 0:r.key));return d&&(e.currentItem=d),e}}),p=o=>{t.value.currentItem=o,O(o.key?t.value.activeKey===1?2:t.value.activeKey:1)},H=o=>{o.colProps=o.colProps||{},o.colProps.span=se.span},v=(o,e)=>{},g=o=>{const e=c(o);return H(e),P(e),e},h=o=>{var r;const e=c(o);if(H(e),P(e),!((r=t.value.currentItem)!=null&&r.key)){p(e),t.value.schemas&&t.value.schemas.push(e);return}A(e,!1)},E=o=>{const e=c(o);return e.component==="Grid"&&X([o],r=>{P(r)}),e},A=(o=t.value.currentItem,e=!0)=>{var d;const r=(d=t.value.currentItem)==null?void 0:d.key,l=m=>{m.some((y,C)=>{var K;if(y.key===r){e?m.splice(C,0,E(y)):m.splice(C+1,0,o);const k={newIndex:C+1};return x(k,m,e),!0}["Grid","Tabs"].includes(y.component)&&((K=y.columns)==null||K.forEach(k=>{l(k.children)}))})};t.value.schemas&&l(t.value.schemas)},x=({newIndex:o},e,r=!1)=>{const l=e[o];r&&P(l),p(l)},u=o=>{const e=c(t.value);o==null||o.showModal(e)},O=o=>{t.value.activeKey=o},R=()=>{t.value.schemas=[],p({component:""})},j=(o,e)=>$.value[o]=e;return f("formModel",$),f("setFormModelMethod",j),f("formConfig",t),f("historyReturn",W),f("formDesignMethods",{handleBeforeColAdd:x,handleCopy:A,handleListPush:h,handleSetSelectItem:p,handleAddAttrs:v,setFormConfig:T}),(o,e)=>(me(),pe(he,null,[n(s(ae),null,{default:i(()=>[n(s(J),{class:z(`left ${s(F)}-sider`),collapsible:"",collapsedWidth:"0",width:"270",zeroWidthTriggerStyle:{"margin-top":"-70px","background-color":"gray"},breakpoint:"md"},{default:i(()=>[n(s(b),{title:"基础控件"},{default:i(()=>[n(_,{list:s(Y),handleListPush:g,onAddAttrs:v,onHandleListPush:h},null,8,["list"])]),_:1}),n(s(b),{title:"自定义控件"},{default:i(()=>[n(_,{list:s(ee),onAddAttrs:v,handleListPush:g,onHandleListPush:h},null,8,["list"])]),_:1}),n(s(b),{title:"布局控件"},{default:i(()=>[n(_,{list:s(oe),handleListPush:g,onAddAttrs:v,onHandleListPush:h},null,8,["list"])]),_:1})]),_:1},8,["class"]),n(s(le),null,{default:i(()=>[n(Z,{onHandleOpenJsonModal:e[0]||(e[0]=r=>u(I.value)),onHandleOpenImportJsonModal:e[1]||(e[1]=r=>u(M.value)),onHandlePreview:e[2]||(e[2]=r=>u(w.value)),onHandlePreview2:e[3]||(e[3]=r=>u(L.value)),onHandleOpenCodeModal:e[4]||(e[4]=r=>u(S.value)),onHandleClearFormItems:R}),n(B,{"current-item":t.value.currentItem,data:t.value,onHandleSetSelectItem:p},null,8,["current-item","data"])]),_:1}),n(s(J),{class:z(`right ${s(F)}-sider`),collapsible:"",reverseArrow:!0,collapsedWidth:"0",width:"270",zeroWidthTriggerStyle:{"margin-top":"-70px","background-color":"gray"},breakpoint:"lg"},{default:i(()=>[n(q,{ref_key:"propsPanel",ref:D,activeKey:t.value.activeKey},ue({_:2},[de(t.value.schemas,r=>({name:`${r.component}Props`,fn:i(l=>[ce(o.$slots,`${r.component}Props`,fe(ve({formItem:l,props:l.componentProps})),void 0,!0)])}))]),1032,["activeKey"])]),_:3},8,["class"])]),_:3}),n(G,{ref_key:"jsonModal",ref:I},null,512),n(U,{ref_key:"codeModal",ref:S},null,512),n(Q,{ref_key:"importJsonModal",ref:M},null,512),n(V,{ref_key:"eFormPreview",ref:w,formConfig:t.value},null,8,["formConfig"]),n(N,{ref_key:"eFormPreview2",ref:L,formConfig:t.value},null,8,["formConfig"])],64))}}),Po=ne(ye,[["__scopeId","data-v-52ba6cd3"]]);export{Po as default};