(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-31fae7ac"],{"06b7":function(e,t,n){"use strict";var i=n("58f9"),s=n.n(i);s.a},"11e9":function(e,t,n){var i=n("52a7"),s=n("4630"),c=n("6821"),r=n("6a99"),o=n("69a8"),a=n("c69a"),l=Object.getOwnPropertyDescriptor;t.f=n("9e1e")?l:function(e,t){if(e=c(e),t=r(t,!0),a)try{return l(e,t)}catch(n){}if(o(e,t))return s(!i.f.call(e,t),e[t])}},"1eab":function(e,t,n){},2366:function(e,t){for(var n=[],i=0;i<256;++i)n[i]=(i+256).toString(16).substr(1);function s(e,t){var i=t||0,s=n;return[s[e[i++]],s[e[i++]],s[e[i++]],s[e[i++]],"-",s[e[i++]],s[e[i++]],"-",s[e[i++]],s[e[i++]],"-",s[e[i++]],s[e[i++]],"-",s[e[i++]],s[e[i++]],s[e[i++]],s[e[i++]],s[e[i++]],s[e[i++]]].join("")}e.exports=s},"4d5c":function(e,t,n){"use strict";n.r(t);var i=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[e._l(e.choiceQuestions,(function(t,i){return n("el-row",{key:t.id},[n("el-card",{staticClass:"question",attrs:{shadow:"hover"}},[n("el-row",{staticClass:"question-header"},[n("el-col",{staticClass:"question-index",attrs:{span:12}},[n("span",[e._v("第"+e._s(i+1)+"题")])]),n("el-col",{staticClass:"question-control",attrs:{span:12}},[n("el-button",{attrs:{type:"text"},on:{click:function(n){return e.delQuestion(t.id)}}},[e._v("删除")])],1)],1),n("el-input",{attrs:{placeholder:"请输入题干（必填）"},model:{value:t.problem,callback:function(n){e.$set(t,"problem",n)},expression:"choiceQuestion.problem"}},[n("el-select",{staticStyle:{width:"120px"},attrs:{slot:"prepend",placeholder:"请选择题型"},slot:"prepend",model:{value:t.questionType,callback:function(n){e.$set(t,"questionType",n)},expression:"choiceQuestion.questionType"}},[n("el-option",{attrs:{label:"单选题",value:"Exclusive"}}),n("el-option",{attrs:{label:"多选题",value:"Multiple"}})],1)],1),n("MultipleChoice",{staticClass:"question-setting",attrs:{questionType:t.questionType,courseid:e.courseID,exerciseid:e.exerciseID,questionid:t.id},model:{value:t.detail,callback:function(n){e.$set(t,"detail",n)},expression:"choiceQuestion.detail"}})],1)],1)})),n("el-row",{staticClass:"control"},[n("el-button",{attrs:{plain:""},on:{click:e.addQuestion}},[e._v("添加题目")])],1),n("el-row",{staticClass:"add-exerise"},[n("el-col",{attrs:{span:20}},[n("el-input",{attrs:{placeholder:"请输入作业名称（必填）"},model:{value:e.exerciseName,callback:function(t){e.exerciseName=t},expression:"exerciseName"}},[n("template",{slot:"prepend"},[e._v("作业名称：")])],2)],1),n("el-col",{staticStyle:{"text-align":"right"},attrs:{span:4}},[n("el-button",{attrs:{type:"primary"},on:{click:e.addExercisePaper}},[e._v("创建作业")])],1)],1)],2)},s=[],c=(n("ac6a"),n("28a5"),n("915c")),r=n("7d35"),o=n("c64e"),a=n.n(o),l={data:function(){return{courseID:"",exerciseID:"",exerciseName:"",choiceQuestions:[{id:0,questionType:"Exclusive",problem:"",detail:{}}]}},props:{user:{type:Object,default:{}}},created:function(){this.courseID=this.$route.params.course_id,this.exerciseID=a()().split("-").join("")},methods:{checkQuestionsInfo:function(){function e(e){return e.some((function(e){return!e.content}))}function t(e){return e.some((function(e){return e.isAnswer}))}return!this.choiceQuestions.some((function(n){if(!n.problem)return!0;if(!n.detail.selections)return!0;var i=e(n.detail.selections),s=t(n.detail.selections);return!(!i&&s)}))},addExercisePaper:function(){var e=this;this.$confirm("此操作将创建作业, 是否继续?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then((function(){e.checkQuestionsInfo()&&e.exerciseName?c["d"].addExercisePaper({courseID:e.courseID,exerciseID:e.exerciseID,exerciseName:e.exerciseName,choiceQuestions:e.choiceQuestions}).then((function(t){1===t.data.code&&e.$router.push({path:"/course/".concat(e.courseID,"/exercise")}),-1===t.data.code&&(e.$alert("发生了错误导致创建失败","创建失败",{confirmButtonText:"确定"}),console.log(t.data.errMsg))})).catch((function(e){console.log(e)})):e.$message({message:"请先把必填项填写完成再提交！",type:"warning"})})).catch((function(e){}))},getQuestionID:function(){var e=[];return this.choiceQuestions.forEach((function(t){e.push(t.id)})),0===e.length?0:Math.max.apply(Math,e)+1},delQuestion:function(e){if(1===this.choiceQuestions.length)return this.$alert("请至少保留1道题！","提示",{confirmButtonText:"确定"}),null;this.choiceQuestions=this.choiceQuestions.filter((function(t){return t.id!==e||(t.detail.imgs.length>0&&c["d"].delQuestionImgs({imgs:t.detail.imgs}).then((function(e){})).catch((function(e){})),!1)}))},addQuestion:function(){this.choiceQuestions.push({id:this.getQuestionID(),questionType:"Exclusive",problem:"",detail:{}})}},components:{MultipleChoice:r["a"]}},u=l,p=(n("06b7"),n("2877")),f=Object(p["a"])(u,i,s,!1,null,"68a5fae0",null);t["default"]=f.exports},"58f9":function(e,t,n){},"5dbc":function(e,t,n){var i=n("d3f4"),s=n("8b97").set;e.exports=function(e,t,n){var c,r=t.constructor;return r!==n&&"function"==typeof r&&(c=r.prototype)!==n.prototype&&i(c)&&s&&s(e,c),e}},"72d7":function(e,t,n){"use strict";var i=n("1eab"),s=n.n(i);s.a},"7d35":function(e,t,n){"use strict";var i=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("span",{staticClass:"selections-title"},[e._v("选项：")]),e._l(e.practiceSelections,(function(t){return n("div",{key:t.id,staticClass:"selection",attrs:{shadow:"never"}},[n("el-input",{attrs:{placeholder:"请输入选项内容（必填）"},on:{blur:e.setPractice},model:{value:t.content,callback:function(n){e.$set(t,"content",n)},expression:"selection.content"}},[n("template",{slot:"prepend"},[e._v(e._s(t.id)+".")])],2)],1)})),n("el-row",{staticClass:"control"},[n("el-button",{attrs:{type:"primary"},on:{click:e.addSelection}},[e._v("添加选项")]),e.practiceSelections.length>2?n("el-button",{attrs:{type:"danger"},on:{click:e.delLastSelection}},[e._v("删除最后一项")]):e._e()],1),n("el-form",{attrs:{"label-width":"100px"}},[n("el-form-item",{staticClass:"answer-setting",attrs:{label:"正确答案："}},["Exclusive"===e.questionType?n("el-select",{attrs:{placeholder:"请选择（必填）"},on:{change:e.setPractice},model:{value:e.practiceAnswer,callback:function(t){e.practiceAnswer=t},expression:"practiceAnswer"}},e._l(e.practiceSelections,(function(e){return n("el-option",{key:e.id,attrs:{label:e.id,value:e.id}})})),1):e._e(),"Multiple"===e.questionType?n("el-select",{attrs:{placeholder:"请选择（必填）",multiple:""},on:{change:e.setPractice},model:{value:e.practiceAnswers,callback:function(t){e.practiceAnswers=t},expression:"practiceAnswers"}},e._l(e.practiceSelections,(function(e){return n("el-option",{key:e.id,attrs:{label:e.id,value:e.id}})})),1):e._e()],1),n("el-form-item",{staticClass:"analyze-setting",attrs:{label:"答案解析："}},[n("el-input",{attrs:{type:"textarea",autosize:{minRows:2,maxRows:4},resize:"none",placeholder:"请输入答案解析（选填）"},on:{change:e.setPractice},model:{value:e.practiceAnalyze,callback:function(t){e.practiceAnalyze=t},expression:"practiceAnalyze"}})],1)],1),n("el-row",{staticClass:"upload-img"},[n("el-upload",{attrs:{action:e.$serverBaseUrl+"/api/uploadQuestionImg",data:{courseID:e.courseid,exerciseID:e.exerciseid,questionID:e.questionid},accept:".jpg, .png","with-credentials":!0,"before-upload":e.beforeImgUpload,"on-remove":e.removeImg,"on-success":e.imgUploadScuess,"file-list":e.uploadImgs,"list-type":"picture"}},[n("el-button",{attrs:{type:"primary"}},[e._v("上传配图")]),n("div",{staticClass:"el-upload__tip",attrs:{slot:"tip"},slot:"tip"},[e._v("\n        只能上传jpg/png文件，且不超过500kb\n      ")])],1)],1)],2)},s=[],c=(n("7f7f"),n("ac6a"),n("c5f6"),n("915c")),r={data:function(){return{practiceSelections:[{id:"A",content:""},{id:"B",content:""}],practiceAnswer:"",practiceAnswers:[],practiceAnalyze:"",uploadImgs:[]}},watch:{questionType:function(e,t){this.setPractice()}},model:{prop:"detail",event:"setPractice"},props:{questionType:{type:String,default:"Exclusive"},detail:{type:Object,default:{}},courseid:{type:String,require:!0},exerciseid:{type:String,require:!0},questionid:{type:Number,require:!0}},created:function(){var e=this;if(this.practiceSelections=this.detail.selections||[{id:"A",content:""},{id:"B",content:""}],this.uploadImgs=this.detail.imgs||[],this.practiceAnalyze=this.detail.analyze,"Exclusive"===this.questionType&&this.detail.selections)this.detail.selections.some((function(t){return!!t.isAnswer&&(e.practiceAnswer=t.id,!0)}));else if("Multiple"===this.questionType&&this.detail.selections){var t=[];this.detail.selections.forEach((function(e){e.isAnswer&&t.push(e.id)})),this.practiceAnswers=t}},methods:{setPractice:function(){var e=this;"Exclusive"===this.questionType&&(this.practiceSelections=this.practiceSelections.map((function(t){return t.id===e.practiceAnswer?t.isAnswer=!0:t.isAnswer=!1,t}))),"Multiple"===this.questionType&&(this.practiceSelections=this.practiceSelections.map((function(t){return e.practiceAnswers.indexOf(t.id)>=0?t.isAnswer=!0:t.isAnswer=!1,t}))),this.$emit("setPractice",{selections:this.practiceSelections,analyze:this.practiceAnalyze,imgs:this.uploadImgs})},beforeImgUpload:function(e){var t=e.size<512e3;return t||this.$message.error("上传图片大小不能超过 500KB!"),t},removeImg:function(e,t){var n=this;if("success"!==e.status)return null;this.uploadImgs.push({}),this.uploadImgs.pop(),this.$confirm("此操作将删除图片, 是否继续?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then((function(){c["d"].delQuestionImg({filename:e.name}).then((function(t){1===t.data.code&&(n.$message({type:"success",message:"删除成功!"}),n.uploadImgs=n.uploadImgs.filter((function(t){return t.name!==e.name})),n.setPractice()),-1===t.data.code&&(n.$alert("发生了错误导致删除失败","删除失败",{confirmButtonText:"确定"}),console.log(t.data.errMsg))})).catch((function(e){console.log(e)}))})).catch((function(e){}))},imgUploadScuess:function(e,t,n){1===e.code&&(this.uploadImgs.push({name:e.data.filename,url:e.data.url}),this.setPractice())},delLastSelection:function(){this.practiceAnswer="",this.practiceAnswers=[],this.practiceSelections.pop(),this.setPractice()},genLetters:function(){for(var e=[],t=65;t<91;t++)e.push(String.fromCharCode(t));return e},addSelection:function(){var e=this.genLetters();this.practiceSelections.push({id:e[this.practiceSelections.length],content:""})}}},o=r,a=(n("72d7"),n("2877")),l=Object(a["a"])(o,i,s,!1,null,"b339c8ac",null);t["a"]=l.exports},"7f7f":function(e,t,n){var i=n("86cc").f,s=Function.prototype,c=/^\s*function ([^ (]*)/,r="name";r in s||n("9e1e")&&i(s,r,{configurable:!0,get:function(){try{return(""+this).match(c)[1]}catch(e){return""}}})},"8b97":function(e,t,n){var i=n("d3f4"),s=n("cb7c"),c=function(e,t){if(s(e),!i(t)&&null!==t)throw TypeError(t+": can't set as prototype!")};e.exports={set:Object.setPrototypeOf||("__proto__"in{}?function(e,t,i){try{i=n("9b43")(Function.call,n("11e9").f(Object.prototype,"__proto__").set,2),i(e,[]),t=!(e instanceof Array)}catch(s){t=!0}return function(e,n){return c(e,n),t?e.__proto__=n:i(e,n),e}}({},!1):void 0),check:c}},9093:function(e,t,n){var i=n("ce10"),s=n("e11e").concat("length","prototype");t.f=Object.getOwnPropertyNames||function(e){return i(e,s)}},aa77:function(e,t,n){var i=n("5ca1"),s=n("be13"),c=n("79e5"),r=n("fdef"),o="["+r+"]",a="​",l=RegExp("^"+o+o+"*"),u=RegExp(o+o+"*$"),p=function(e,t,n){var s={},o=c((function(){return!!r[e]()||a[e]()!=a})),l=s[e]=o?t(f):r[e];n&&(s[n]=l),i(i.P+i.F*o,"String",s)},f=p.trim=function(e,t){return e=String(s(e)),1&t&&(e=e.replace(l,"")),2&t&&(e=e.replace(u,"")),e};e.exports=p},c5f6:function(e,t,n){"use strict";var i=n("7726"),s=n("69a8"),c=n("2d95"),r=n("5dbc"),o=n("6a99"),a=n("79e5"),l=n("9093").f,u=n("11e9").f,p=n("86cc").f,f=n("aa77").trim,d="Number",h=i[d],m=h,g=h.prototype,y=c(n("2aeb")(g))==d,v="trim"in String.prototype,b=function(e){var t=o(e,!1);if("string"==typeof t&&t.length>2){t=v?t.trim():f(t,3);var n,i,s,c=t.charCodeAt(0);if(43===c||45===c){if(n=t.charCodeAt(2),88===n||120===n)return NaN}else if(48===c){switch(t.charCodeAt(1)){case 66:case 98:i=2,s=49;break;case 79:case 111:i=8,s=55;break;default:return+t}for(var r,a=t.slice(2),l=0,u=a.length;l<u;l++)if(r=a.charCodeAt(l),r<48||r>s)return NaN;return parseInt(a,i)}}return+t};if(!h(" 0o1")||!h("0b1")||h("+0x1")){h=function(e){var t=arguments.length<1?0:e,n=this;return n instanceof h&&(y?a((function(){g.valueOf.call(n)})):c(n)!=d)?r(new m(b(t)),n,h):b(t)};for(var x,w=n("9e1e")?l(m):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger".split(","),I=0;w.length>I;I++)s(m,x=w[I])&&!s(h,x)&&p(h,x,u(m,x));h.prototype=g,g.constructor=h,n("2aba")(i,d,h)}},c64e:function(e,t,n){var i=n("e1f4"),s=n("2366");function c(e,t,n){var c=t&&n||0;"string"==typeof e&&(t="binary"===e?new Array(16):null,e=null),e=e||{};var r=e.random||(e.rng||i)();if(r[6]=15&r[6]|64,r[8]=63&r[8]|128,t)for(var o=0;o<16;++o)t[c+o]=r[o];return t||s(r)}e.exports=c},e1f4:function(e,t){var n="undefined"!=typeof crypto&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto)||"undefined"!=typeof msCrypto&&"function"==typeof window.msCrypto.getRandomValues&&msCrypto.getRandomValues.bind(msCrypto);if(n){var i=new Uint8Array(16);e.exports=function(){return n(i),i}}else{var s=new Array(16);e.exports=function(){for(var e,t=0;t<16;t++)0===(3&t)&&(e=4294967296*Math.random()),s[t]=e>>>((3&t)<<3)&255;return s}}},fdef:function(e,t){e.exports="\t\n\v\f\r   ᠎             　\u2028\u2029\ufeff"}}]);
//# sourceMappingURL=chunk-31fae7ac.c06cefde.js.map