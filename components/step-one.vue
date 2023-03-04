<template>

  <div class="flex flex-col">
    <h1 class="text-4xl font-bold text-marine-blue">Personal info</h1>
    <span class="text-cool-gray mt-2">Please provide your name, email address, and phone number.</span>

    <div class="flex flex-col gap-5 mt-10">
      <label class="text-sm font-medium text-marine-blue">
        <span class="flex">
          Name
          <span class="error-caption" v-if="form.errors.get('name')"
                v-text="form.errors.get('name')"/>
        </span>
        <input v-model="form.name"
               class="block w-full text-base mt-1 outline-none border flex items-center h-12 rounded-md px-3"
               :class="{'border-strawberry-red':form.errors.get('phone') }"
               type="text" placeholder="e.g. Saeed Akhshijan">
      </label>

      <label class="text-sm font-medium text-marine-blue">
        <span class="flex">
          Email Address
          <span class="error-caption" v-if="form.errors.get('email')"
                v-text="form.errors.get('email')"/>
        </span>
        <input v-model="form.email"
               :class="{'border-strawberry-red':form.errors.get('phone') }"
               class="block w-full text-base mt-1 outline-none border flex items-center h-12 rounded-md px-3"
               type="email" placeholder="e.g. sakhshijan@gmail.com">
      </label>


      <label class="text-sm font-medium text-marine-blue">
        <span class="flex">
          Phone Number
          <span class="error-caption" v-if="form.errors.get('phone')"
                v-text="form.errors.get('phone')"/>
        </span>
        <input v-model="form.phone"
               :class="{'border-strawberry-red':form.errors.get('phone') }"
               class="block w-full text-base mt-1 outline-none border flex items-center h-12 rounded-md px-3"
               type="tel" placeholder="e.g. +1 234 567 890">
      </label>
    </div>

  </div>

</template>

<script setup lang="ts">

import {useState} from "#imports";

const form = useState('form')
</script>

<style scoped>

</style>