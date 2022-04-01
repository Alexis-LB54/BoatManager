import { defineStore } from "pinia";


export const AllBoat = defineStore({
  id: "AllBoat",
  state: () => ({
    list: [  
    ],
  }),
  getters: {
    getList: (state) => state.list,
    getAnnualIncome: (state) => {
        let total = 0;
        state.list.map( (item : {price: number}) => {
          total = (item.price * 12)
        })
        return total
      },
  },
  actions: {
    increment() {
    },
  },
});