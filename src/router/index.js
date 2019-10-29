import Vue from "vue";
import Router from "vue-router";

import QuestionSearch from "../components/QuestionSearch"
import HelloWorld from "../components/HelloWorld"
Vue.use(Router)
export default  new Router({
    mode: "history",
    routes:[
        {
            name:"questions",   
            path:"/questions",
            component:QuestionSearch
        },
        {
            name:"helloworld",   
            path:"/",
            component:HelloWorld
        },
    ]
})