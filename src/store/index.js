import Vue from "vue";
import Vuex from "vuex";
import todo from "./modules/todo";
import questions from "./modules/questions";

Vue.use(Vuex);

const store = new Vuex.Store({
  modules: {
    todo,
    questions
  },
  strict: true
});

export default store;
