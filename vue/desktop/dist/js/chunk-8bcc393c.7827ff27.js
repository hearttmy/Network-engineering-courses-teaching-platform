(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-8bcc393c"],{"7df2":function(e,t,a){"use strict";a.r(t);var r=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[e.user&&1===e.user.userType?a("TchCourseDetail",{attrs:{user:e.user,courseID:e.courseID},on:{changeCourseComponent:e.changeCourseComponentHandler}}):e._e(),e.user&&0===e.user.userType?a("StuCourseDetail",{attrs:{user:e.user,course:e.courseID},on:{changeCourseComponent:e.changeCourseComponentHandler}}):e._e()],1)},s=[],n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("el-row",{staticClass:"header"},[a("span",[a("i",{staticClass:"el-icon-arrow-left icon",attrs:{title:"返回"},on:{click:function(t){return e.$emit("changeCourseComponent",{from:"myCourseDetail",to:"myCourses"})}}}),e._v("\n      统计信息 - "+e._s(e.courseName)+"\n    ")])]),a("el-row",[a("el-table",{directives:[{name:"loading",rawName:"v-loading",value:e.loadingStusData,expression:"loadingStusData"}],staticStyle:{width:"100%"},attrs:{data:e.stus,border:""}},[a("el-table-column",{attrs:{type:"index",index:1}}),a("el-table-column",{attrs:{prop:"id",label:"学号"}}),a("el-table-column",{attrs:{prop:"username",label:"姓名"}}),a("el-table-column",{attrs:{label:"考试成绩"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("el-button",{attrs:{type:"text",size:"small"},on:{click:function(a){return e.checkStuExamResult(t.row)}}},[e._v("查看该生所有考试成绩")])]}}])})],1)],1),a("el-dialog",{attrs:{title:e.currentStuID+" - "+e.currentStuName,visible:e.checkingStuExamReslt},on:{"update:visible":function(t){e.checkingStuExamReslt=t}}},[a("el-table",{attrs:{data:e.currentStuExams}},[a("el-table-column",{attrs:{property:"examName",label:"试卷",width:"150"}}),a("el-table-column",{attrs:{property:"examScore",label:"成绩",width:"200"}}),a("el-table-column",{attrs:{label:"操作"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("el-button",{attrs:{type:"danger",size:"mini"},on:{click:function(a){return e.resetStuExam(t.row.examID)}}},[e._v("重置成绩")])]}}])})],1)],1)],1)},o=[],u=(a("ac6a"),a("915c")),c={data:function(){return{loadingStusData:!0,courseName:"",courseExams:[],stus:[],checkingStuExamReslt:!1,currentStuID:"",currentStuName:"",currentStuExams:[]}},props:{user:{type:Object,default:{}},courseID:{type:String,default:""}},created:function(){this.getCourseStusAndExams()},methods:{getCourseStusAndExams:function(){var e=this;u["b"].getCourseStusAndExams({courseID:this.courseID}).then((function(t){1===t.data.code&&(e.courseExams=t.data.data.exams,e.courseName=t.data.data.course.coursename,t.data.data.course.stus.forEach((function(t){var a,r;t.study.some((function(t){return t.courseID===e.courseID&&(a=t.progress,r=t.exams,!0)})),e.stus.push({id:t.id,username:t.username,progress:a,exams:r})})),e.loadingStusData=!1),-1===t.data.code&&e.$message.error("加载失败")})).catch((function(t){console.log(t),e.$message.error("加载失败")}))},checkStuExamResult:function(e){var t=this;this.currentStuID=e.id,this.currentStuName=e.username,this.currentStuExams=[],this.courseExams.forEach((function(a){var r="-";e.exams.some((function(e){return e.examID===a.examID&&(r=e.examScore,!0)})),t.currentStuExams.push({examID:a.examID,examName:a.examName,examScore:r})})),this.checkingStuExamReslt=!0},resetStuExam:function(e){var t=this;this.$confirm("将把该生的该考试成绩重置并不可撤销，学生需重新考试, 是否继续?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then((function(){var a=!1;if(t.currentStuExams.some((function(t){return t.examID===e&&("-"===t.examScore&&(a=!0),!0)})),a)return t.$message("该生未参与该考试，无需重置"),null;u["h"].teacher.resetStuExamScore({stuID:t.currentStuID,courseID:t.courseID,examID:e}).then((function(a){var r,s;1===a.data.code&&(t.currentStuExams.some((function(a,r){return a.examID===e&&(t.currentStuExams[r].examScore="-",!0)})),t.stus.some((function(e,a){return e.id===t.currentStuID&&(r=a,!0)})),t.stus[r].exams.some((function(t,a){return t.examID===e&&(s=a,!0)})),t.stus[r].exams[s].examScore="-",t.$message({message:"重置成功",type:"success"}));-1===a.data.code&&(console.log(a.errMsg),t.$message.error("发生错误，操作失败"))})).catch((function(e){console.log(e),t.$message.error("发生错误，操作失败")}))})).catch((function(e){}))}}},l=c,i=(a("bd2c"),a("2877")),m=Object(i["a"])(l,n,o,!1,null,"6ee8dc7c",null),d=m.exports,x=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("el-row",{staticClass:"header"},[a("span",[a("i",{staticClass:"el-icon-arrow-left icon",attrs:{title:"返回"},on:{click:function(t){return e.$emit("changeCourseComponent",{from:"myCourseDetail",to:"myCourses"})}}}),e._v("\n      统计信息 - "+e._s(e.courseName)+"\n    ")])]),a("el-row",[a("el-table",{directives:[{name:"loading",rawName:"v-loading",value:e.loadingData,expression:"loadingData"}],staticStyle:{width:"100%"},attrs:{data:e.courseExams,border:""}},[a("el-table-column",{attrs:{prop:"examName",label:"试卷"}}),a("el-table-column",{attrs:{prop:"examScore",label:"成绩"}})],1)],1)],1)},f=[],h={data:function(){return{loadingData:!0,courseName:"",courseExams:[]}},props:{user:{type:Object,default:{}},courseID:{type:String,default:""}},created:function(){this.getMyCourseExams()},methods:{getMyCourseExams:function(){var e=this;userProvider.student.getMyCourseExams({courseID:this.courseID}).then((function(t){1===t.data.code&&(e.courseName=t.data.course.coursename,t.data.exams.forEach((function(a){var r="-";t.data.stu.exams.some((function(e){return e.examID===a.examID&&(r=e.examScore,!0)})),e.courseExams.push({examName:a.examName,examScore:r})})),e.loadingData=!1),-1===t.data.code&&(console.log(t.errMsg),e.$message.error("加载失败"))})).catch((function(t){console.log(t),e.$message.error("加载失败")}))}}},p=h,g=(a("a65a"),Object(i["a"])(p,x,f,!1,null,"2aaae194",null)),S=g.exports,D={data:function(){return{}},props:{user:{type:Object,default:{}},courseID:{type:String,default:""}},methods:{changeCourseComponentHandler:function(e){this.$emit("changeCourseComponent",e)}},components:{TchCourseDetail:d,StuCourseDetail:S}},b=D,C=Object(i["a"])(b,r,s,!1,null,"3c3f50ea",null);t["default"]=C.exports},a65a:function(e,t,a){"use strict";var r=a("b0d9"),s=a.n(r);s.a},b0d9:function(e,t,a){},bccf:function(e,t,a){},bd2c:function(e,t,a){"use strict";var r=a("bccf"),s=a.n(r);s.a}}]);
//# sourceMappingURL=chunk-8bcc393c.7827ff27.js.map