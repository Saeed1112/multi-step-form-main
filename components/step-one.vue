<template>

  <div class="flex flex-col">
    <h1 class="text-4xl font-bold text-marine-blue">Personal info</h1>
    <span class="text-cool-gray mt-2">Please provide your name, email address, and phone number.</span>

    <div class="flex flex-col gap-5 mt-10">
      <label class="text-sm font-medium text-marine-blue">
        <span class="flex">
          Name
          <span class="ml-auto font-bold text-strawberry-red" v-if="form.errors.get('name')"
                v-text="form.errors.get('name')"/>
        </span>
        <input v-model="form.name"
               class="block w-full text-base mt-1 outline-none border flex items-center h-12 rounded-md px-3"
               type="text" placeholder="Your name">
      </label>

      <label class="text-sm font-medium text-marine-blue">
        <span class="flex">
          Email Address
          <span class="ml-auto font-bold text-strawberry-red" v-if="form.errors.get('email')"
                v-text="form.errors.get('email')"/>
        </span>
        <input v-model="form.email"
               class="block w-full text-base mt-1 outline-none border flex items-center h-12 rounded-md px-3"
               type="email" placeholder="Your name">
      </label>


      <label class="text-sm font-medium text-marine-blue">
        <span class="flex">
          Phone Number
          <span class="ml-auto font-bold text-strawberry-red" v-if="form.errors.get('phone')"
                v-text="form.errors.get('phone')"/>
        </span>
        <input v-model="form.phone"
               class="block w-full text-base mt-1 outline-none border flex items-center h-12 rounded-md px-3"
               type="tel" placeholder="eg. +1 234 567 890">
      </label>
    </div>

  </div>

</template>

<script setup lang="ts">

import {definePageMeta, useState} from "#imports";

definePageMeta({name: 'StepOne'})
const form = useState('form')
</script>

<style scoped>

</style>