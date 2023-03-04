<template>
  <div class="flex flex-col">
    <h1 class="text-4xl font-bold text-marine-blue">Finishing up</h1>
    <span class="text-cool-gray mt-2">Double-check everything looks OK before confirming.</span>

    <div class="flex flex-col mt-10">
      <div class="px-5 py-4 bg-alabaster rounded-lg flex flex-col gap-4">


        <div class="flex items-center">
          <div class="flex-col">
            <h1 class="text-marine-blue font-medium">
              {{ form.plan.name }} ({{ form.yearly ? 'Yearly' : 'Monthly' }})
            </h1>
            <button class="text-cool-gray underline text-sm" @click="form.activeStep = 2">Change</button>
          </div>
          <div class="ml-auto text-marine-blue font-bold ">
            ${{ form.yearly ? form.plan.monthly * (12 - form.plan.yearlyOffer) : form.plan.monthly }}/{{
              form.yearly ? 'yr' : 'mo'
            }}
          </div>
        </div>

        <hr>

        <ul class="flex flex-col gap-3">
          <li v-for="[key,addon] in form.addons.entries()" :key="key" class="flex text-sm">
            <span class="text-cool-gray">{{ addon.name }}</span>
            <span class="ml-auto text-marine-blue font-medium">
              ${{ form.yearly ? addon.monthly * (12 - addon.yearlyOffer) : addon.monthly }}/{{
                form.yearly ? 'yr' : 'mo'
              }}
            </span>
          </li>
        </ul>

      </div>

      <div class="flex px-5 mt-5">
        <span class="text-cool-gray text-sm">Total (per {{ form.yearly ? 'year' : 'month' }})</span>
        <span class="ml-auto text-purplish-blue font-bold text-xl">+{{ totalAmount }}/m</span>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import {computed, useState} from "#imports";

const form: any = useState('form')

const totalAmount = computed(() => {
  let total = 0;
  const {plan, addons, yearly} = form.value;
  const planPrice = plan.monthly * (yearly ? 12 - plan.yearlyOffer : plan.monthly);
  for (const [key, addon] of addons)
    total += addon.monthly * (yearly ? 12 - addon.yearlyOffer : addon.monthly);

  return total + planPrice;
})
</script>

<style scoped>

</style>