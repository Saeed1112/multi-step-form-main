<template>

  <div
      class="mb-auto md:my-auto bg-transparent md:bg-white w-[58.8rem] min-h-[20rem] rounded-2xl md:shadow-2xl flex flex-col md:flex-row p-4 max-w-md md:max-w-full">

    <div class="md:relative">
      <img src="/images/bg-sidebar-desktop.svg" class="md:block hidden" alt="">
      <img src="/images/bg-sidebar-mobile.svg"
           class="fixed left-0 right-0 object-cover w-full top-0 md:hidden max-h-60" alt="">
      <div
          class="absolute top-0 left-0 md:bottom-0 right-0 flex flex-row md:flex-col gap-5 md:gap-7 px-8 pt-9 md:justify-start justify-center">
        <div v-for="(step, index) in Steps.keys()" :key="index" class="flex gap-4 items-center">
          <div
              :class="{
                  'text-light-gray bg-transparent': form.activeStep !== index+1,
                  'text-gray-900 bg-light-blue': form.activeStep === index+1
                }"
              class="h-8 aspect-square border border-light-gray text-sm rounded-full flex items-center justify-center font-bold"
              v-text="index+1"/>
          <div class="md:flex flex-col justify-center hidden">
            <span class="uppercase text-xs text-cool-gray" v-text="`step ${index+1}`"/>
            <h2 v-text="step" class="uppercase font-medium text-[16px] text-white -mt-0.5"/>
          </div>
        </div>
      </div>
    </div>


    <div
        class="shadow-xl md:shadow-none flex-1 sm:px-5 md:px-8 absolute lg:px-24 py-8 flex flex-col md:bg-transparent px-5 md:px-0 md:rounded-none rounded-lg bg-white relative">
      <transition name="v" mode="out-in">
        <component v-bind:is="Steps.get(StepKeys[form.activeStep - 1])" :key="form.activeStep" v-if="!form.finish"/>
        <step-five v-else/>
      </transition>
      <div class="mt-auto flex fixed bottom-0 right-0 left-0 bg-white md:p-0 py-3 px-5 md:relative" v-if="!form.finish">
        <button @click="form.activeStep--"
                class="text-marine-blue h-12 px-6 text-opacity-50 hover:text-opacity-100 outline-none font-medium mr-auto"
                v-if="form.activeStep > 1">
          Go Back
        </button>
        <button v-if="form.activeStep < 4"
                class="bg-marine-blue text-gray-50 h-12 outline-none px-6 rounded-lg font-medium ml-auto"
                @click="nextStep">
          Next Step
        </button>
        <button v-if="form.activeStep === 4" @click="form.finish = true"
                class="bg-purplish-blue text-gray-50 h-12 outline-none px-6 rounded-lg font-medium ml-auto">
          Confirm
        </button>
      </div>

    </div>


  </div>

</template>
<script setup>
const StepKeys = ['Your Info', 'Select Plan', 'Add-Ons', 'Summary'];

const Steps = new Map()
    .set('Your Info', resolveComponent('step-one'))
    .set('Select Plan', resolveComponent('step-two'))
    .set('Add-Ons', resolveComponent('step-three'))
    .set('Summary', resolveComponent('step-for'))

const form = useState('form', () => ({
  activeStep: 1,
  name: '',
  email: '',
  phone: '',
  plan: 0,
  yearly: false,
  addons: new Map(),
  errors: new Map(),
  finish: false,
}))

function nextStep() {
  form.value.errors.clear();
  switch (form.value.activeStep) {
    case 1 : {
      const {name, email, phone} = form.value;
      if (!name || name.length < 4)
        form.value.errors.set('name', 'Name must be more than 4 characters');

      if (!email.match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/))
        form.value.errors.set('email', 'Please enter a valid email address');

      if (!phone.match(/^(\+\d{1,2}\s?)?\(?\d{3}\)?[\s.-]?\d{3}[\s.-]?\d{4}$/))
        form.value.errors.set('phone', 'Please enter a valid phone number');


      if (form.value.errors.size > 0) break;
      form.value.activeStep++;

      break;
    }
    case 2 : {
      const {plan} = form.value
      if (!plan)
        form.value.errors.set('plan', 'Please choose a plan!')
      if (form.value.errors.size > 0) return;
      form.value.activeStep++;
      break;
    }
    case 3 : {
      form.value.activeStep++;
      break;
    }
    case 4: {
      form.value.finish = true;
      break;
    }
  }
}


</script>

<style>
.v-enter-active,
.v-leave-active {
  transition: opacity 0.2s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}



.error-caption {
  @apply ml-auto font-bold text-strawberry-red;
}
</style>