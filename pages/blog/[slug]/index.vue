<template>
  <div>Blog</div>
  <ContentDoc :path="params">
    <template v-slot:not-found>404</template>
  </ContentDoc>
</template>

<script setup>
const route = useRoute();
const params = "blog/" + route.params.slug;
</script>
