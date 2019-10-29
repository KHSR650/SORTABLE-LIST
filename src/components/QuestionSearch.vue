
<template>
  <div>
    <h1>Question Search</h1>
    {{matchedQuestions}}
    <el-row class="demo-autocomplete">
      <el-col :span="24">
        <div class="sub-title">list suggestions when activated</div>
        <el-autocomplete
          class="inputtype"
          v-model="question"
          :fetch-suggestions="querySearch"
          placeholder="Please Input"
          @select="handleSelect"
          size="medium"
        ></el-autocomplete>
      </el-col>
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
    querySearch(queryString, cb) {
      if (queryString.split(" ").length > 2) {
        this.getQuestionsForSuggestions();

        cb(this.matchedQuestions);
      } else {
        this.matchedQuestions = [
          "What does good customer service mean to you?",
          "Describe the property you are looking to buy. How big is it? How many bedrooms? Bathrooms? Near a school? Transportation? Quiet? Busy? Lots of trees? Water? I want to get a good picture of what success looks like."
        ];
        cb([]);
      }
    },
    createFilter(queryString) {
      return link => {
        return (
          link.value.toLowerCase().indexOf(queryString.toLowerCase()) === 0
        );
      };
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
</style>
