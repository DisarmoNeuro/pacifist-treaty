<template>
  <div class="proposals">
    <div class="proposals__container">
      <h1 class="proposals__title heading--1">Предложения</h1>
      <div class="proposals__list">
        <ProposalItem v-for="group in proposalGroups" :key="group.name" :item="group" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { ProposalGroup } from '@/typings'
import { ProposalItem } from '@/components/proposal'
import proposalsJSON from '@/assets/json/proposals.json'
import { ref } from 'vue'

const proposalGroups = ref<ProposalGroup[]>(proposalsJSON.proposals)
</script>

<style src="@/assets/scss/components/proposals.scss" lang="scss" scoped />
