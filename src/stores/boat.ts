import { defineStore } from "pinia";


export const AllBoat = defineStore({
  id: "AllBoat",
  state: () => ({
    list: [],
  }),
  persist: true,
  getters: {
    getList: (state) => state.list
  },
  actions: {
    increment() {
    },
  },
});