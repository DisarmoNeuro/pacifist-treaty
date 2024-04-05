<template>
  <footer id="contacts" class="footer">
    <div class="footer__container">
      <h2 class="footer__title heading--2">Контактная информация</h2>
      <ul class="footer__contacts">
        <li class="footer__contact">
          <a href="https://drive.google.com/file/d/1uKNEtw_r80PcrPK1oRcbrP7JaBMoGyt6/view" target="_blank">
            <IconDoc />
          </a>
        </li>
        <li class="footer__contact">
          <a href="mailto:anatohy.muravyov@gmail.com" target="_blank">
            <IconEmail />
          </a>
        </li>
        <li class="footer__contact">
          <a href="https://www.youtube.com/@DisarmoNeuro" target="_blank">
            <IconYoutube />
          </a>
        </li>
        <li class="footer__contact">
          <a href="https://" target="_blank">
            <IconTelegram />
          </a>
        </li>
        <li class="footer__contact">
          <a href="https://boosty.to/disarmoneuro/donate" target="_blank">
            <IconBoosty />
          </a>
        </li>
        <li class="footer__contact">
          <a href="https://discord.gg/aJJFF49msu" target="_blank">
            <IconDiscord />
          </a>
        </li>
      </ul>
    </div>
  </footer>
</template>

<script setup lang="ts">
import { IconBoosty, IconDiscord, IconDoc, IconEmail, IconTelegram, IconYoutube } from '@/components/icons'
</script>

<style src="@/assets/scss/components/footer.scss" lang="scss" scoped />
