<template>
  <section id="members" class="members">
    <div class="members__container">
      <h1 class="members__title heading--1">Список участников</h1>
      <ul class="members__list">
        <li v-for="member in members" :key="member" class="member">
          {{ member }}
        </li>
      </ul>
    </div>
  </section>
</template>

<script setup lang="ts">
import membersJSON from '@/assets/json/members.json'
import { ref } from 'vue'

const members = ref<string[]>(membersJSON.members)
</script>

<style src="@/assets/scss/components/members.scss" lang="scss" scoped />
