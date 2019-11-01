
<template>
  <div>
    <h1>Question Search</h1>
    
    <el-row class="demo-autocomplete">
      <el-col :span="24">
        <div class="sub-title">list suggestions when activated</div>
        <el-input
          class="inputtype"
          v-model="question"
          @keyup.native="querySearch()"
          placeholder="Please Input"
          size="medium"
        ></el-input>
      </el-col>
    </el-row>
    <el-row v-if="matchedQuestions.length">
      <ul>
        <li class="qustion" v-for="(question,index) in matchedQuestions" :key="index">
          {{question}}</li>
      </ul>
    </el-row>
  </div>
</template>


<script>
import { mapGetters } from "vuex";
export default {
  name: "QuestionSearch",
  data() {
    return {
      matchedQuestions: [],
      question: ""
    };
  },
  computed: {
    ...mapGetters("questions", ["getSearchedQuestions"])
  },
  methods: {
    querySearch() {
      if (this.question.split(" ").length > 2) {
        this.getQuestionsForSuggestions();
      } else {
        this.matchedQuestions = [
          
        ];
      }
    },
    
    loadAll() {
      return [
        { value: "vue", link: "https://github.com/vuejs/vue" },
        { value: "element", link: "https://github.com/ElemeFE/element" },
        { value: "cooking", link: "https://github.com/ElemeFE/cooking" },
        { value: "mint-ui", link: "https://github.com/ElemeFE/mint-ui" },
        { value: "vuex", link: "https://github.com/vuejs/vuex" },
        { value: "vue-router", link: "https://github.com/vuejs/vue-router" },
        { value: "babel", link: "https://github.com/babel/babel" }
      ];
    },
    handleSelect(item) {
      console.log(item);
    },
    async getQuestionsForSuggestions() {
      let params = {
        question: this.question
      };
      await this.$store.dispatch("questions/searchQuestions", params);
      this.matchedQuestions = JSON.parse(
        JSON.stringify(this.getSearchedQuestions)
      );
    }
  },
  mounted() {
    this.links = this.loadAll();
  }
};
</script>

<style scoped>
.el-input--medium .el-input__inner {
  height: 73px !important;
  line-height: 27px !important;
  width: 788px !important;
}
.inputtype {
  height: 71px !important;
  width: 600px !important;
}
.qustion{
    padding: 20px;
    display: block;
    border: 1px solid;
    background: #eef5f7;
    overflow: auto;
    margin: 0;
    width: fit-content;
    text-align: center;
    margin-bottom: 24px;

}
</style>
