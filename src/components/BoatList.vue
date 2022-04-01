<template>
  <table>
    <thead>
      <tr>
        <th>Boat's Name</th>
        <th>Boat's Owner</th>
        <th>Annual Income in €</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="boat in getList" :key="boat">
        <th>{{boat.name}}</th>
        <th>{{boat.owner}}</th>
        <th>{{boat.annualincome}}</th>
      </tr>
    </tbody>
  </table>
</template>

<script>
import { AllBoat } from "../stores/boat";
import { mapState, mapWritableState } from "pinia";
export default {
computed: {
      ...mapState(AllBoat, ['getList', 'getAnnualIncome'])
},
methods: {
  
},
};
</script>

<style>
</style>