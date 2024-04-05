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
          <div ref="refLocaleButton" class="header__locale--current" @click="showLocalePopup">
            <span class="header__locale--text">{{ currentLocale.alias }}</span>
            <ChevronDownIcon class="header__locale--icon" />
          </div>
          <Transition>
            <ul v-show="localePopupState" ref="refLocaleMenu" class="header__locale--list">
              <template v-for="locale in locales" :key="locale.id">
                <li class="header__locale--item" @click.stop="selectLocale(locale.id)">{{ locale.alias }}</li>
              </template>
            </ul>
          </Transition>
        </div>

        <div class="header__popup">
          <div ref="refMobileMenuButton" class="header__popup--icon">
            <Bars3Icon @click="showMenuPopup" />
          </div>
        </div>
      </div>

      <Transition>
        <ul v-show="menuPopupState" ref="refMobileMenu" class="header__popup--list" @click.stop="showMenuPopup">
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
import { onBeforeUnmount, onMounted, ref } from 'vue'

import { IconLogo } from '@/components/icons'
import { storeToRefs } from 'pinia'
import { useAppStore } from '@/store'

const appStore = useAppStore()
const { locales, currentLocale, localePopupState, menuPopupState } = storeToRefs(appStore)
const selectLocale = appStore.selectLocale
const showLocalePopup = appStore.showLocalePopup
const showMenuPopup = appStore.showMenuPopup

const refMobileMenu = ref<Node>()
const refMobileMenuButton = ref<Node>()
const refLocaleMenu = ref<Node>()
const refLocaleButton = ref<Node>()

const onClickOutside = (event: MouseEvent): void => {
  const menu = refMobileMenu.value!
  const menuButton = refMobileMenuButton.value!
  const localeMenu = refLocaleMenu.value!
  const localeButton = refLocaleButton.value!

  if (event.target instanceof Node && !menu.contains(event.target) && !menuButton.contains(event.target)) {
    menuPopupState.value = false
  }

  if (event.target instanceof Node && !localeMenu.contains(event.target) && !localeButton.contains(event.target)) {
    localePopupState.value = false
  }
}

onMounted(() => {
  window.addEventListener('click', onClickOutside)
})

onBeforeUnmount(() => {
  window.removeEventListener('click', onClickOutside)
})
</script>

<style src="@/assets/scss/components/header.scss" lang="scss" scoped />
