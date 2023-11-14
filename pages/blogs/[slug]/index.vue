<script setup lang="ts">
const route = useRoute();
const params = "/blogs/" + route.params.slug;
</script>

<template>
  <NuxtLayout name="blog">
    <ContentDoc class="prose" :path="params">
      <template v-slot:not-found>404</template>
    </ContentDoc>
  </NuxtLayout>
</template>
