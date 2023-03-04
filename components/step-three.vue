<template>
  <div class="flex flex-col">
    <h1 class="text-4xl font-bold text-marine-blue">Pick add-ons</h1>
    <span class="text-cool-gray mt-2">Add-ons help enhance your gaming experience.</span>

    <div class="mt-10 flex flex-col gap-5">
      <div v-for="addon in addons"
           @click="toggleAddon(addon)"
           :class="{'bg-opacity-10 bg-purplish-blue border-purplish-blue': form.addons.has(addon.name)}"
           class="h-20 flex items-center px-5 rounded-lg border gap-5 hover:border-purplish-blue hover:bg-purplish-blue hover:bg-opacity-5 cursor-pointer">
        <div class="h-5 aspect-square border rounded-md flex items-center justify-center"
             :class="{'bg-purplish-blue':form.addons.has(addon.name)}"
        >
          <div v-if="form.addons.has(addon.name)"
               class="border-r-2 border-b-2 border-white h-2.5 w-1.5 rotate-45 mb-1"></div>
        </div>
        <div>
          <h2 class="text-marine-blue font-bold" v-text="addon.name"/>
          <span class="text-cool-gray text-sm" v-text="addon.comment"/>
        </div>
        <div class="ml-auto text-purplish-blue text-sm font-medium">
          ${{ form.yearly ? addon.monthly * (12 - addon.yearlyOffer) : addon.monthly }}/{{
            form.yearly ? 'yr' : 'mo'
          }}
        </div>
      </div>

    </div>
  </div>
</template>

<script setup lang="ts">
import {useState} from "#imports";

const form: any = useState('form')
const addons = [
  {
    name: 'Online Service',
    comment: 'Access to multiplayer games',
    monthly: 1,
    yearlyOffer: 2
  },
  {
    name: 'Larger storage',
    comment: 'Extra 1TB of cloud save',
    monthly: 2,
    yearlyOffer: 2

  },
  {
    name: 'Customizable profile',
    comment: 'Custom theme on your profile',
    monthly: 1,
    yearlyOffer: 2
  }

]

function toggleAddon(addon: any) {
  if (form.value.addons.has(addon.name)) {
    form.value.addons.delete(addon.name)
  } else form.value.addons.set(addon.name, addon)
}

</script>

<style scoped>

</style>