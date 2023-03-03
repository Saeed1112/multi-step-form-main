<template>

  <div class="my-auto bg-white w-[58.8rem] min-h-[20rem] rounded-2xl shadow-2xl flex p-4">

    <div class="relative">
      <img src="/images/bg-sidebar-desktop.svg" alt="">
      <div class="absolute top-0 left-0 bottom-0 right-0 flex flex-col gap-7 px-8 pt-9">
        <div v-for="(step, index) in steps" :key="index" class="flex gap-4 items-center">
          <div
              :class="{
                  'text-light-gray bg-transparent': activeStep !== index+1,
                  'text-gray-900 bg-light-blue': activeStep === index+1
                }"
              class="h-8 aspect-square border border-light-gray text-sm rounded-full flex items-center justify-center font-bold"
              v-text="index+1"/>
          <div class="flex flex-col justify-center">
            <span class="uppercase text-xs text-cool-gray" v-text="`step ${index+1}`"/>
            <h2 v-text="step" class="uppercase font-medium text-[16px] text-white -mt-0.5"/>
          </div>
        </div>

      </div>
    </div>


    <div class="flex-1 px-24 py-8 flex flex-col">
      <StepOne/>
      <div class="mt-auto flex">
        <button @click="activeStep--" class="text-marine-blue h-12 px-6 outline-none font-medium mr-auto"
                v-if="activeStep > 1">
          Go Back
        </button>

        <button v-if="activeStep < 4"
                class="bg-marine-blue text-gray-50 h-12 outline-none px-6 rounded-lg font-medium ml-auto"
                @click="activeStep++">Next Step
        </button>
        <button v-if="activeStep === 4"
                class="bg-purplish-blue text-gray-50 h-12 outline-none px-6 rounded-lg font-medium ml-auto">
          Confirm
        </button>
      </div>

    </div>


  </div>

</template>
<script setup>

import StepOne from '../components/step-one';

const steps = ['Your Info', 'Select Plan', 'Add-Ons', 'Summary'];
const activeStep = ref(1)
const form = useState('form', () => ({
  name: '',
  email: '',
  phone: '',
  plan: 0,
  yearly: true,
  addons: [],
  errors: new Map()
}))

watch(activeStep, (v) => {
  console.log(v)
})

</script>