<template>
  <header class="header">
    <div class="header__container">
      <div class="header__left">
        <RouterLink to="/">
          <IconLogo solid class="header__logo" />
        </RouterLink>
        <ul class="header__menu">
          <li class="header__menu--item">
            <RouterLink to="/#document" :replace="false"> Договор </RouterLink>
          </li>
          <li class="header__menu--item">
            <RouterLink to="/proposals" :replace="false"> Предложения </RouterLink>
          </li>
          <li class="header__menu--item">
            <RouterLink to="/#advantages" :replace="false"> Преимущества и недостатки </RouterLink>
          </li>
        </ul>
      </div>

      <div class="header__right">
        <div class="header__locale">
          <span>{{ appStore.currentLocale.alias }}</span>
          <ChevronDownIcon />
        </div>
        <div class="header__menu--burger">
          <Bars3Icon @click="switchPopup" />
        </div>
      </div>

      <Transition>
        <ul v-show="popupMenuActive" class="header__popup" @click.stop="switchPopup">
          <RouterLink to="/#history" :replace="false">
            <li class="header__popup--item">Историческая традиция</li>
          </RouterLink>
          <RouterLink to="/#document" :replace="false">
            <li class="header__popup--item">Договор</li>
          </RouterLink>
          <RouterLink to="/#advantages" :replace="false">
            <li class="header__popup--item">Преимущества и недостатки</li>
          </RouterLink>
          <RouterLink to="/#about" :replace="false">
            <li class="header__popup--item">Общая информация</li>
          </RouterLink>
          <RouterLink to="/proposals" :replace="false">
            <li class="header__popup--item">Предложения</li>
          </RouterLink>
          <RouterLink to="/#members" :replace="false">
            <li class="header__popup--item">Участники</li>
          </RouterLink>
          <RouterLink to="#contacts" :replace="false">
            <li class="header__popup--item">Контактная информация</li>
          </RouterLink>
        </ul>
      </Transition>
    </div>
  </header>
</template>

<script setup lang="ts">
import { Bars3Icon, ChevronDownIcon } from '@heroicons/vue/24/solid'

import { IconLogo } from '@/components/icons'
import { ref } from 'vue'
import { useAppStore } from '@/store'

const appStore = useAppStore()
const popupMenuActive = ref<boolean>(false)

const switchPopup = (): void => {
  popupMenuActive.value = !popupMenuActive.value
}
</script>

<style src="@/assets/scss/components/header.scss" lang="scss" scoped />
