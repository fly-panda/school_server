import Vue from 'vue'
import Vuex from 'vuex'

import modal from './module/modal_status'
Vue.use(Vuex);
const state={   //要设置的全局访问的state对象
  studentList: [],
  teacherList:[]
  //要设置的初始属性值
};
const getters = {   //实时监听state值的变化(最新状态)
  students(state) {
     return state.studentList
  },
  teachers(){
     return state.teacherList
  }
};
const mutations = {
  //自定义改变state初始值的方法，这里面的参数除了state之外还可以再传额外的参数(变量或对象);
  updateStudents(state,arrs) {  //同上
      state.studentList = arrs;
  },
  updateTeachers(state,arrs){ //同上，这里面的参数除了state之外还传实的值
     state.teacherList=arrs;
  }
};
const actions = {
//自定义触发mutations里函数的方法，context与store 实例具有相同方法和属性
  setStudents(context,arrs) {  //同上注释
      context.commit('updateStudents',arrs);
  },
  setTeachers(context,arrs){ 
      context.commit('updateStudents',arrs)
   }
};
export default new Vuex.Store({
  state,
  getters,
  mutations,
  actions:actions,
  modules: {
    modal
  }
})
