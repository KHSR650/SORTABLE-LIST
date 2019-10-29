<template>
  <div class="hello">
    <el-button @click="goToQuestionSearch"></el-button>
    <h1>list</h1>
    <transition-group tag="ul" name="flip-list">
      <li class="card" v-for="(item,index) in getTodoList" :key="JSON.stringify(item)">
        <span>{{item.name}}</span>
        <button @click="moveUp(item,index)">up &#8593;</button>
        <button @click="moveDown(item,index)">down &#8595;</button>
      </li>
    </transition-group>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  name: "HelloWorld",
  props: {
    msg: String
  },
  computed: {
    ...mapGetters("todo", ["getTodoList"])
  },
  data() {
    return {
      items: [1, 2, 3, 4, 5, 6, 7, 8, 9]
    };
  },
  methods: {
    moveUp(item, index) {
      if (index > 0) {
        let updatedList = JSON.parse(JSON.stringify(this.getTodoList));
        let temp = updatedList[index - 1];
        updatedList[index - 1] = item;
        updatedList[index] = temp;
        this.$store.commit("todo/setTodoList", updatedList);
      }
    },
    moveDown(item, index) {
      if (index < this.getTodoList.length - 1) {
        let updatedList = JSON.parse(JSON.stringify(this.getTodoList));
        let temp = updatedList[index + 1];
        updatedList[index + 1] = item;
        updatedList[index] = temp;
        this.$store.commit("todo/setTodoList", updatedList);
      }
    },
    goToQuestionSearch(){
      this.$router.push('/questions')
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.card {
  padding: 10px;
  margin: 10px;
  border: solid 2px #000;
  transition: transform 1s;
}
.flip-list-move {
  transition: transform 1s;
}
.list-complete-item {
  transition: all 1s;
  display: inline-block;
  margin-right: 10px;
}
.list-complete-enter, .list-complete-leave-to
/* .list-complete-leave-active below version 2.1.8 */ {
  opacity: 0;
  transform: translateY(30px);
}
.list-complete-leave-active {
  position: absolute;
}
</style>
