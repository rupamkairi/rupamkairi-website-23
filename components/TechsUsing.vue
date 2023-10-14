<script setup>
let overlayButton = ref(true);
let overlayBackground = ref(true);
let overlayRemove = ref(false);

onMounted(() => {
  setTimeout(() => {
    overlayRemove.value = true;
  }, 2000);

  setTimeout(() => {
    overlayBackground.value = false;
    overlayButton.value = false;
  }, 3000);
});
</script>

<template>
  <div class="h-80 md:h-[60vh] xl:h-[40vh] 2xl:h-[40vh]">
    <div class="w-full h-full relative my-16">
      <div class="h-full container mx-auto">
        <MovingTechCard />
      </div>
      <div
        v-if="overlayBackground"
        class="absolute inset-0 bg-gradient-to-b from-transparent via-violet-200 dark:via-violet-900 to-transparent transition-all"
        :class="[overlayRemove ? 'opacity-0 duration-500' : 'opacity-50']"
      ></div>
      <div
        v-if="overlayButton"
        class="absolute left-[50%] top-[50%] -translate-x-[50%] -translate-y-[50%] transition-all"
        :class="{ 'opacity-0 duration-500': overlayRemove }"
      >
        <div class="">
          <NeuButton label="Techs I am Using" smallLabel="My Techs" />
        </div>
      </div>
    </div>
  </div>
</template>
