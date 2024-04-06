<template>
  <section id="advantages" class="advantages">
    <div class="advantages__container">
      <h1 class="advantages__title heading--1">Преимущества и достоинства</h1>
      <div class="advantages__lists">
        <div class="advantages__list">
          <h2 class="advantages__list--title heading--2">Преимущества</h2>
          <ul class="advantages__list--points">
            <li v-for="point in advantages" :key="point" class="advantages__list--point">
              {{ point }}
            </li>
          </ul>
        </div>
        <br class="advantages__list--separator" />
        <div class="advantages__list">
          <h2 class="advantages__list--title heading--2">Недостатки</h2>
          <ul class="advantages__list--points">
            <li v-for="point in disadvantages" :key="point" class="advantages__list--point">
              {{ point }}
            </li>
          </ul>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const advantages = [
  'Сотрудничество',
  'Равенство всех участников в правах',
  'Коллективная поддержка ресурсами',
  'Автономия от других участников'
]

const disadvantages = [
  'Ориентация только на пацифизм в медиа среде',
  'Качество исполнения договора определяется участниками',
  'Отсуствие санкционных инструментов в отношении участников',
  'Неравномерная поддержка участников'
]
</script>

<style src="@/assets/scss/components/advantages.scss" lang="scss" scoped />
