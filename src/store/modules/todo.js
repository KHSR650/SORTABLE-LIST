const initialState = () => {
  return {
    list: [
      {
        name: "A"
      },
      {
        name: "B"
      },
      {
        name: "C"
      },
      {
        name: "D"
      },
      {
        name: "E"
      },
      {
        name: "F"
      }
    ]
  };
};

const state = initialState();

const getters = {
  getTodoList: state => state.list
};

const actions = {};

const mutations = {
  setTodoList(state, value) {
    state.list = value;
  }
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
};
