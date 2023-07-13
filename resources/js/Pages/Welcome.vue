<script setup>
import { Head, Link } from "@inertiajs/vue3";
import Hero from "../Components/Hero.vue";

defineProps({
  canLogin: {
    type: Boolean,
  },
  canRegister: {
    type: Boolean,
  },
  laravelVersion: {
    type: String,
    required: true,
  },
  phpVersion: {
    type: String,
    required: true,
  },
});
</script>

<template>
  <Head title="Welcome" />

  <div class="max-w-screen-xl fixed flex flex-wrap items-center justify-between ml-9 p-4">
    <a href="/">
      <img src="../Components/images/logo.png" class="h-8 mr-9" alt="" />
    </a>
  </div>
  <div class="relative sm:flex sm:justify-end sm:items-center min-h-screen bg-dots-darker bg-center mr-11 selection:bg-red-500 selection:text-white">
    <div v-if="canLogin" class="sm:fixed sm:top-0 sm:right-0 p-6 text-right">
      <Link v-if="$page.props.auth.user" :href="route('dashboard')" class="font-semibold text-gray-600 hover:text-gray-900 focus:outline focus:outline-2 focus:rounded-sm focus:outline-red-500">Dashboard</Link>
      <template v-else>
        <div class="mr-11">
          <Link :href="route('login')" class="bg-blue-500 hover:bg-blue-400 px-6 py-2 rounded-lg font-semibold text-white focus:outline focus:outline-2 focus:rounded-sm focus:outline-red-500">Log in</Link>

          <Link v-if="canRegister" :href="route('register')" class="ml-4 font-semibold text-gray-600 hover:text-gray-900 focus:outline focus:outline-2 focus:rounded-sm focus:outline-red-500">Register</Link>
        </div>
      </template>
    </div>
    <Hero />
  </div>
</template>

<style>
/*  */
</style>
