<template>
  <b-container>
    <b-row class="w-100">
      <b-col cols="8">Hello</b-col>
      <b-col cols="4">Nuxt!</b-col>
    </b-row>
    Counter: {{ $store.state.counter }}
    <b-btn @click="$store.commit('increment')">Збільшити </b-btn>
  </b-container>
</template>