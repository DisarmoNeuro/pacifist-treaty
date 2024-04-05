<template>
  <svg width="260" height="232" viewBox="0 0 260 232" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M130.11 208H136.921C138.662 207.89 140.213 206.693 140.678 205.082L159.783 129.052C160.186 126.782 158.375 124.398 156.026 124.265H130.036H104.046C101.696 124.398 99.886 126.782 100.288 129.052L119.393 205.082C119.859 206.693 121.41 207.89 123.151 208H130.11Z"
      :fill="solid ? 'white' : 'none'"
      :stroke="solid ? 'white' : 'currentColor'"
      stroke-width="2.59022"
      stroke-miterlimit="22.9256"
    />
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M138.331 85.791C135.694 81.2455 129.851 79.6881 125.282 82.3124C120.714 84.9368 119.148 90.7492 121.786 95.2947C124.424 99.8403 130.266 101.398 134.835 98.7733C139.404 96.1489 140.969 90.3366 138.331 85.791Z"
      :fill="solid ? 'white' : 'none'"
      :stroke="solid ? 'white' : 'currentColor'"
      stroke-width="2.59022"
      stroke-miterlimit="22.9256"
    />
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M232.081 31.8868L228.675 26.0178C227.709 24.573 225.891 23.8354 224.256 24.2398L148.522 45.7938C146.345 46.5819 145.175 49.3341 146.234 51.4244L159.229 73.8177L172.224 96.211C173.514 98.1687 176.495 98.5363 178.27 97.0546L234.899 42.5791C236.068 41.3726 236.335 39.4378 235.561 37.8828L232.081 31.8868Z"
      :fill="solid ? 'white' : 'none'"
      :stroke="solid ? 'white' : 'currentColor'"
      stroke-width="2.59022"
      stroke-miterlimit="22.9256"
    />
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M27.8453 31.8839L24.4394 37.7529C23.665 39.3079 23.9316 41.2427 25.1012 42.4492L81.7303 96.9247C83.5049 98.4063 86.4859 98.0388 87.7759 96.0811L100.771 73.688L113.766 51.2945C114.825 49.2042 113.655 46.452 111.478 45.6639L35.7438 24.1099C34.1088 23.7055 32.2911 24.4433 31.3247 25.8879L27.8453 31.8839Z"
      :fill="solid ? 'white' : 'none'"
      :stroke="solid ? 'white' : 'currentColor'"
      stroke-width="2.59022"
      stroke-miterlimit="22.9256"
    />
  </svg>
</template>

<script setup lang="ts">
withDefaults(defineProps<{ solid: boolean }>(), {
  solid: false
})
</script>
