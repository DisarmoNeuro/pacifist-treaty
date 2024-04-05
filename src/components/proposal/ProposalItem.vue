<template>
  <ul class="proposal-group">
    <h2 class="proposal-group__title heading--2">{{ item.name }}</h2>
    <div class="proposal-group__expander">
      <component :is="expandIcon" class="proposal-group__icon" @click="expandGroup" />
    </div>
    <div>
      <h2 class="proposal-group__title proposal-group__title--mobile">{{ item.name }}</h2>
      <Transition>
        <ul v-show="expanded" class="proposal-group__list">
          <li v-for="proposal in item.items" :key="proposal.id" class="proposal">
            <div class="proposal__date">
              <span>{{ normalizeDate(proposal.date) }}</span>
            </div>
            <div class="proposal__content">
              <h3 class="proposal__title heading--3">{{ proposal.title }}</h3>
              <h3 class="proposal__author heading--3">{{ proposal.author }}</h3>
              <p class="proposal__text">{{ proposal.text }}</p>
            </div>
          </li>
        </ul>
      </Transition>
    </div>
  </ul>
</template>

<script setup lang="ts">
import { ChevronDownIcon, ChevronUpIcon } from '@heroicons/vue/24/solid'
import { computed, ref } from 'vue'

import type { ProposalGroup } from '@/typings'
import dayjs from 'dayjs'

defineProps<{ item: ProposalGroup }>()

const expanded = ref<boolean>(false)

const expandIcon = computed(() => {
  return expanded.value ? ChevronUpIcon : ChevronDownIcon
})

const expandGroup = (): void => {
  expanded.value = !expanded.value
}

const normalizeDate = (date: string): string => {
  return dayjs(date).format(`DD MMMM HH:mm`)
}
</script>

<style src="@/assets/scss/components/proposals.scss" lang="scss" scoped />
