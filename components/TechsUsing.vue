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
  <div class="h-80">
    <div class="w-full h-full relative">
      <div class="h-full">
        <div class="h-full grid grid-rows-2">
          <div class="grid grid-cols-2 md:grid-cols-3 self-center text-center">
            <div class="text-4xl font-black">React</div>
            <div class="text-4xl font-black">Vue</div>
            <div class="text-4xl font-black">Svelte</div>
          </div>
          <div class="grid grid-cols-2 md:grid-cols-3 self-center text-center">
            <div class="text-4xl font-black">Express</div>
            <div class="text-4xl font-black">Adonis</div>
          </div>
        </div>
      </div>
      <div
        v-if="overlayBackground"
        class="absolute inset-0 bg-gradient-to-b from-transparent via-violet-100 to-transparent transition-all"
        :class="[overlayRemove ? 'opacity-0 duration-500' : 'opacity-50']"
      ></div>
      <div
        v-if="overlayButton"
        class="absolute left-[50%] top-[50%] -translate-x-[50%] -translate-y-[50%] transition-all"
        :class="{ 'opacity-0 duration-500': overlayRemove }"
      >
        <div class="">
          <NeuButton />
        </div>
      </div>
    </div>
  </div>
</template>
