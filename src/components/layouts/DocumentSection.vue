<template>
  <section id="document" class="document">
    <div class="document__container">
      <h1 class="document__title heading--1">Договор и его версии</h1>
      <div class="document__files">
        <template v-for="document in documents" :key="document.lang">
          <div class="document__file heading--3" @click="downloadFile(document)">
            <IconFilePdf class="document__file--icon" />
            <span>{{ document.lang }}</span>
          </div>
        </template>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import type { DocumentItem } from '@/typings'
import { IconFilePdf } from '@/components/icons'
import documentsJSON from '@/assets/json/documents.json'
import { ref } from 'vue'

const documents = ref<DocumentItem[]>(documentsJSON.documents)

const downloadFile = ({ url, lang }: DocumentItem): void => {
  const link = document.createElement('a')
  link.href = url
  link.download = `pacifist-treaty_${lang}.pdf`
  link.dispatchEvent(new MouseEvent('click'))
  link.remove()
}
</script>

<style src="@/assets/scss/components/document.scss" lang="scss" scoped />
