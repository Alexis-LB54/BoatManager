import { defineStore } from "pinia";


export const AllBoat = defineStore({
  id: "AllBoat",
  state: () => ({
    list: [  
    ],
  }),
  getters: {
    getList: (state) => state.list
  },
  actions: {
    increment() {
    },
  },
});