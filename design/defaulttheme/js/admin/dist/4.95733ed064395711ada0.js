(window.webpackJsonpLHCReactAPPAdmin=window.webpackJsonpLHCReactAPPAdmin||[]).push([[4],{63:function(e,t,a){"use strict";a.r(t);var s=a(14),n=a.n(s),r=a(2),c=a.n(r),o=a(0),i=a.n(o),l=a(15),m=a.n(l),u=a(48),h=a.n(u),d=i.a.memo((function(e){var t=e.message,a=e.index,s=!1;return h()(t.msg,{replace:function(e){if(e.attribs){var n=Object.assign({},e.attribs);if(e.attribs.class&&(e.attribs.className=e.attribs.class,-1!==e.attribs.className.indexOf("message-row")&&a>0&&(e.attribs.className+=" fade-in-fast",t.msop>0&&t.msop!=t.lmsop&&0==s&&(e.attribs.className+=" operator-changes",s=!0)),delete e.attribs.class),e.attribs.onclick&&delete e.attribs.onclick,e.name&&"img"===e.name)return i.a.createElement("img",e.attribs);if(e.name&&"a"===e.name&&n.onclick)return i.a.createElement("a",e.attribs,Object(u.domToReact)(e.children))}}})}));var g=a(4),p=a.n(g),f=a(5),v=a.n(f),b=new(function(){function e(){p()(this,e),this.eventEmitter=new EventEmitter,this.chatsSynchro=[],this.chatsSynchroMsg=[],this.timeoutSync=null,this.syncInProgress=!1}return v()(e,[{key:"sync",value:function(){var e=this;1!=this.syncInProgress&&(this.syncInProgress=!0,m.a.post(WWW_DIR_JAVASCRIPT+"groupchat/sync/",this.chatsSynchroMsg).then((function(t){var a=[];t.data.result.forEach((function(t){a[t.chat_id]||(a[t.chat_id]={}),a[t.chat_id].msg=t;var s=e.chatsSynchro.indexOf(t.chat_id),n=e.chatsSynchroMsg[s].split(",");n[1]=t.message_id,e.chatsSynchroMsg[s]=n.join(",")})),t.data.result_status.forEach((function(t){a[t.chat_id]||(a[t.chat_id]={}),a[t.chat_id].status=t;var s=e.chatsSynchro.indexOf(t.chat_id),n=e.chatsSynchroMsg[s].split(",");n[2]=t.lgsync,e.chatsSynchroMsg[s]=n.join(",")})),a.forEach((function(t,a){e.eventEmitter.emitEvent("gchat_"+a,[t])})),e.syncInProgress=!1})))}},{key:"startSync",value:function(){var e=this;clearTimeout(this.timeoutSync),this.chatsSynchro.length>0&&(this.timeoutSync=setInterval((function(){e.sync()}),2500))}},{key:"addSubscriber",value:function(e,t){this.chatsSynchro.push(parseInt(e)),this.chatsSynchroMsg.push(e+",0,0"),this.eventEmitter.addListener("gchat_"+e,t),this.startSync()}},{key:"removeSubscriber",value:function(e,t){var a=this.chatsSynchro.indexOf(parseInt(e));this.chatsSynchro.splice(a,1),this.chatsSynchroMsg.splice(a,1),this.eventEmitter.removeListener("gchat_"+e,t),this.startSync()}}]),e}()),_=a(64);function y(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);t&&(s=s.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,s)}return a}function E(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?y(Object(a),!0).forEach((function(t){c()(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):y(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function I(e,t){switch(t.type){case"increment":return{count:e.count+1};case"decrement":return{count:e.count-1};case"update":return E({},e,{},t.value);case"update_messages":return t.messages.lmsop=e.lmsop||t.value.lmsop,(e=E({},e,{},t.value)).messages.push(t.messages),e;case"update_history":return e=E({},e,{},t.value),""!=t.history.msg&&e.messages.unshift(t.history),e;case"init":return{count:e.count-1};default:throw new Error("Unknown action!")}}t.default=function(e){var t=Object(o.useRef)(null),s=Object(o.useRef)(null),r=Object(o.useRef)(null),c=Object(o.useRef)(null),l=Object(o.useReducer)(I,{messages:[],operators:[],operators_invite:[],chat:{},has_more_messages:!1,old_message_id:0,last_message:"",last_message_id:0,lmsop:0,lgsync:0}),u=n()(l,2),h=u[0],g=u[1];Object(o.useEffect)((function(){s.current.scrollTop=s.current.scrollHeight;var t=document.getElementById("chat-tab-link-gc"+e.chatId);h.messages.length>1&&!t.classList.contains("active")&&t.querySelector(".whatshot").classList.remove("d-none")}),[h.messages.length]);var p=function(e){if(localStorage)try{var t=[],a=localStorage.getItem("gachat_id");null!==a&&""!==a&&(t=a.split(",")),-1===t.indexOf(e)&&(t.push(e),localStorage.setItem("gachat_id",t.join(",")))}catch(e){}},f=null,v=function(){clearTimeout(f),f=setTimeout((function(){m.a.get(WWW_DIR_JAVASCRIPT+"groupchat/searchoperator/"+e.chatId+"?q="+escape(c.current.value)).then((function(e){g({type:"update",value:{operators_invite:e.data}})}))}),200)};Object(o.useEffect)((function(){m.a.post(WWW_DIR_JAVASCRIPT+"groupchat/loadgroupchat/"+e.chatId).then((function(t){g({type:"update",value:{chat:t.data.chat}}),p(e.chatId),b.sync()})).catch((function(t){lhinst.removeDialogTabGroup("gc"+e.chatId,$("#tabs"),!0)}));var n=r.current,c=a(60),o=n.querySelectorAll('[data-toggle="tab"]');o.length>0&&Array.prototype.forEach.call(o,(function(e){new c.Tab(e)}));var i=function(a){if(a==e.chatId){setTimeout((function(){t.current.focus(),s.current.scrollHeight-(s.current.scrollTop+s.current.offsetHeight)<s.current.offsetHeight-50&&(s.current.scrollTop=s.current.scrollHeight)}),2);var n=document.getElementById("chat-tab-link-gc"+e.chatId);if(null!==n){var r=n.querySelector(".whatshot");r.classList.contains("d-none")||r.classList.add("d-none")}}};ee.addListener("groupChatTabClicked",i),t.current.focus();var l=function(e){if(e.msg&&g({type:"update_messages",messages:{msg:e.msg.content,msop:e.msg.msop},value:{last_message_id:e.msg.message_id,lmsop:e.msg.lmsop}}),e.status){var t={operators:e.status.operators,lgsync:e.status.lgsync};e.status.old_message_id&&(t.has_more_messages=e.status.has_more_messages,t.old_message_id=e.status.old_message_id),g({type:"update",value:t})}};return b.addSubscriber(e.chatId,l),function(){!function(e){if(localStorage)try{var t=[],a=localStorage.getItem("gachat_id");null!==a&&""!==a&&(t=a.split(",")),-1!==t.indexOf(e)&&t.splice(t.indexOf(e),1),localStorage.setItem("gachat_id",t.join(","))}catch(e){}}(e.chatId),ee.removeListener("groupChatTabClicked",i),b.removeSubscriber(e.chatId,l)}}),[]);var y=Object(_.a)("group_chat"),E=y.t;y.i18n;return i.a.createElement(i.a.Fragment,null,i.a.createElement("div",{className:"row"},i.a.createElement("div",{className:"col-7 chat-main-left-column"},i.a.createElement("div",{className:"message-block"},h.has_more_messages&&i.a.createElement("a",{className:"load-prev-btn",title:"Load more...",onClick:function(t){m.a.get(WWW_DIR_JAVASCRIPT+"groupchat/loadpreviousmessages/"+e.chatId+"/"+h.old_message_id).then((function(e){g({type:"update_history",value:{has_more_messages:e.data.has_messages,old_message_id:e.data.message_id},history:{msg:e.data.result,msop:e.data.msop,lmsop:e.data.lmsop}})}))}},i.a.createElement("i",{className:"material-icons"},"")),i.a.createElement("div",{className:"msgBlock msgBlock-admin msgBlock-group-admin",ref:s},h.messages.map((function(t,a){return i.a.createElement(d,{key:"msg_"+e.chatId+"_"+a,index:a,message:t})})))),i.a.createElement("div",{className:"message-container-admin mt-2"},i.a.createElement("textarea",{ref:t,placeholder:E("message.enter_message"),onKeyDown:function(a){return function(a,s){if(13==a.keyCode)return m.a.post(WWW_DIR_JAVASCRIPT+"groupchat/addmessage/"+e.chatId,{msg:t.current.value}).then((function(e){b.sync()})),t.current.value="",a.preventDefault(),void a.stopPropagation()}(a)},className:"form-control form-control-sm form-group",rows:"2"}))),i.a.createElement("div",{className:"chat-main-right-column col-5"},i.a.createElement("div",{role:"tabpanel"},i.a.createElement("ul",{className:"nav nav-pills",role:"tablist",ref:r},i.a.createElement("li",{role:"presentation",className:"nav-item"},i.a.createElement("a",{className:"nav-link active",href:"#group-chat-"+e.chatId,"aria-controls":"#group-chat-"+e.chatId,role:"tab","data-toggle":"tab",title:"Operators"},i.a.createElement("i",{className:"material-icons mr-0"},"face"))),i.a.createElement("li",{className:"nav-item",role:"presentation"},i.a.createElement("a",{className:"nav-link ",href:"#group-chat-info-"+e.chatId,"aria-controls":"#group-chat-info-"+e.chatId,title:"Information",role:"tab","data-toggle":"tab"},i.a.createElement("i",{className:"material-icons mr-0"},"info_outline")))),i.a.createElement("div",{className:"tab-content"},i.a.createElement("div",{role:"tabpanel",className:"tab-pane active",id:"group-chat-"+e.chatId},i.a.createElement("ul",{className:"list-group list-group-flush border-0 mw-100 mx275"},h.operators.map((function(t,a){return i.a.createElement("li",{className:"list-group-item pl-1 py-1"},e.userId!=t.user_id&&i.a.createElement("i",{title:"Start chat with an operator directly",onClick:function(e){return function(e){angular.element("body").scope().startChatOperatorPublic(e.user_id)}(t)},className:"material-icons action-image"},"chat")," ",h.chat.user_id==t.user_id&&i.a.createElement("i",{title:"Group owner",className:"material-icons"},"account_balance")," ",t.n_off_full,i.a.createElement("span",{className:"float-right fs11"},!t.jtime&&i.a.createElement("span",{className:"badge badge-info fs11"},E("operator.pending_join"))," ",t.last_activity_ago," ",i.a.createElement("i",{className:"material-icons"},t.hide_online?"flash_off":"flash_on")))})))),i.a.createElement("div",{role:"tabpanel",className:"tab-pane",id:"group-chat-info-"+e.chatId},1==h.chat.type&&i.a.createElement("div",null,i.a.createElement("div",{className:"form-row"},i.a.createElement("div",{className:"col-9"},i.a.createElement("input",{ref:c,onKeyUp:v,type:"text",placeholder:E("operator.search_tip"),className:"form-control form-control-sm"})),i.a.createElement("div",{className:"col-3"},i.a.createElement("button",{onClick:v,className:"btn w-100 d-block btn-default btn-sm"},i.a.createElement("span",{className:"material-icons"},"search")))),i.a.createElement("ul",{className:"m-0 p-0 mt-2 mx275"},h.operators_invite.map((function(t,a){return i.a.createElement("li",{className:"list-group-item p-2 fs13",title:t.id},t.name_official,!t.member&&!t.invited&&i.a.createElement("button",{className:"float-right btn btn-xs btn-secondary",onClick:function(a){return function(t){m.a.get(WWW_DIR_JAVASCRIPT+"groupchat/inviteoperator/"+e.chatId+"/"+t.id).then((function(e){t.invited=!0,g({type:"update",value:{operators_invite:h.operators_invite}})}))}(t)}},E("operator.invite")),!t.member&&t.invited&&i.a.createElement("button",{className:"float-right btn btn-xs btn-warning",onClick:function(a){return function(t){m.a.get(WWW_DIR_JAVASCRIPT+"groupchat/cancelinvite/"+e.chatId+"/"+t.id).then((function(e){t.invited=!1,g({type:"update",value:{operators_invite:h.operators_invite}})}))}(t)}},E("operator.cancel_invite")),t.member&&i.a.createElement("button",{disabled:"disabled",className:"float-right btn btn-xs btn-success"},E("operator.already_member")))}))),i.a.createElement("hr",null)),i.a.createElement("button",{className:"btn btn-xs btn-danger",title:E("operator.leave_group_tip"),onClick:function(t){m.a.get(WWW_DIR_JAVASCRIPT+"groupchat/leave/"+e.chatId).then((function(t){lhinst.removeDialogTabGroup("gc"+e.chatId,$("#tabs"),!0)}))}},E("operator.leave_group"))))))))}}}]);