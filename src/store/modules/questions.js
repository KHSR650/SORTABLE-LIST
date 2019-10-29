
import axios from "axios"

const initateState = () =>{
    return {
        searched_questions:[]
    }
}
const state = initateState()

const getters = {
    getSearchedQuestions: state=> state.searched_questions,

}
const mutations = {
    setSearchedQuestions: (state,value) =>{
        state.searched_questions = value;
    }
}
const actions = {
    searchQuestions: async (context,params) =>{
        try{
            context.commit('questions/setSearchedQuestions',[],{
                root:true
            })
            let response = await axios.get('http://localhost:3000/questions/search',{
                params:params
            })
            context.commit('questions/setSearchedQuestions',response.data.questions,{
                root:true
            })
        }
        catch(error){
            console.log(error)
        }
    }
}
export default { 
    namespaced:true,
    mutations,
    getters,
    state,
    actions
}