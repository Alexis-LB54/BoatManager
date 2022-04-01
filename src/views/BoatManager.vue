<template>
  <div>
    <form @submit.prevent="LoveCash(boat)">
      <table>
        <thead>
          <label for="name">Name of your Boat</label>
        </thead>
        <tbody>
          <input type="text" v-model="boat.name" id="name" />
        </tbody>

        <thead>
          <label for="size">Size in meters</label>
        </thead>
        <tbody>
          <input type="number" min="0" v-model="boat.size" id="size" />
        </tbody>

        <thead>
          <label for="owner">Owner's Name</label>
        </thead>
        <tbody>
          <input type="text" v-model="boat.owner" id="owner" />
        </tbody>

        <thead>
          <label for="price">Monthly Price</label>
        </thead>
        <tbody>
          <input type="number" min="0" v-model="boat.price" id="price" />
        </tbody>

        <input type="submit" value="Manage your Boat !" />
      </table>
    </form>
  </div>
</template>

<script>
import { AllBoat } from "../stores/boat";
import { mapState, mapWritableState } from "pinia";
import { useRouter, useRoute } from "vue-router";

export default {
  data() {
    return {
      boat: {
        name: "",
        size: 0,
        owner: "",
        price: 0,
      },
    };
  },
  components: {
  },
  computed: {
    ...mapWritableState(AllBoat, ["list"]),
  },
  methods: {
    LoveCash(boat) {
      console.log(boat);
      let error = "Format of your data is not accepted";
      if (
        typeof this.boat.name === "string" &&
        this.boat.size > 0 &&
        typeof this.boat.owner === "string" &&
        this.boat.price > 0
      ) {
          boat.annualincome = this.boat.price * 12;
          this.list.push(boat);
          this.$router.push("/dashboard");
      }
      else {alert(error)}
    },
  },
};
</script>

<style scoped>
</style>