<script setup>
const { data } = await useAsyncData(() => queryContent("/").findOne());
</script>

<template>
  <NuxtLayout name="legal">
    <ContentDoc class="prose mx-auto">
      <template #not-found>Not Found</template>
      <template #empty>Empty</template>
    </ContentDoc>
  </NuxtLayout>
</template>
