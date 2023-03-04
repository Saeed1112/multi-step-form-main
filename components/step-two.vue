<template>
  <div class="flex flex-col">
    <h1 class="text-4xl font-bold text-marine-blue">Select your plan</h1>
    <span class="text-cool-gray mt-2">You have the option of monthly or yearly billing.</span>

    <div class="mt-10">
      <div class="flex">
          <span class="ml-auto font-bold text-strawberry-red mb-3"
                v-if="form.errors.get('plan')"
                v-text="form.errors.get('plan')"/>
      </div>
      <div class="flex gap-3">
        <div
            class="border border-purplish-blue flex-1 py-5 px-5 rounded-lg hover:bg-purplish-blue hover:bg-opacity-5 cursor-pointer"
            :class="{'bg-purplish-blue bg-opacity-10': form.plan.name === plan.name}"
            @click="form.plan = plan"
            v-for="plan in plans">
          <img :src="plan.icon" :alt="`Plan - ${plan.name}`">

          <div class="mt-10 flex flex-col gap-1">
            <h2 class="font-medium text-marine-blue" v-text="plan.name"/>
            <span class="text-sm text-cool-gray ">
            ${{ form.yearly ? plan.monthly * (12 - plan.yearlyOffer) : plan.monthly }}/{{
                form.yearly ? 'yr' : 'mo'
              }}</span>
            <span class="text-xs text-marine-blue" v-if="form.yearly">
            {{ plan.yearlyOffer }}  months free
          </span>
          </div>
        </div>
      </div>
    </div>


    <div class="mt-8">
      <label
          class="flex items-center justify-center h-10 bg-magnolia rounded-lg gap-5 text-marine-blue font-bold text-sm select-none">
        <span :class="{'opacity-50': form.yearly}">Monthly</span>
        <input type="checkbox" v-model="form.yearly" hidden/>
        <span class="w-7 h-4 bg-purplish-blue rounded-full flex items-center px-0.5">
          <i class="h-3 aspect-square bg-white rounded-full" :class="{'ml-auto': form.yearly}"/>
        </span>
        <span :class="{'opacity-50': !form.yearly}">Yearly</span>
      </label>
    </div>

  </div>
</template>

<script setup lang="ts">
import {useState} from "#imports";

const form = useState('form')
const plans = [
  {
    name: 'Arcade',
    monthly: 9,
    yearlyOffer: 2,
    icon: '/images/icon-arcade.svg'
  },
  {
    name: 'Advance',
    monthly: 12,
    yearlyOffer: 2,
    icon: '/images/icon-advanced.svg'
  },
  {
    name: 'Pro',
    monthly: 15,
    yearlyOffer: 2,
    icon: '/images/icon-pro.svg'
  }
]
</script>

<style scoped>

</style>