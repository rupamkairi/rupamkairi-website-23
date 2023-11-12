<script setup></script>

<template>
  <div class="">
    <div class="container mx-auto border-2 border-violet-500">
      <div class="flex justify-between flex-wrap">
        <div
          class="text-2xl font-line px-4 py-2 border-r-2 border-violet-500 bg-violet-500 text-white"
        >
          <NuxtLink :href="routes.home"> Home </NuxtLink>
        </div>
        <div
          class="grow sm:grow-0 overflow-x-scroll sm:overflow-auto flex border-t-2 sm:border-t-0 border-violet-500 text-violet-500"
        >
          <div
            class="text-2xl font-line px-4 py-2 border-l-0 sm:border-l-2 border-violet-500 hover:bg-violet-500 hover:text-white"
          >
            <NuxtLink :href="routes.blogs"> BloGs </NuxtLink>
          </div>
          <div
            class="text-2xl font-line px-4 py-2 border-l-2 border-violet-500 hover:bg-violet-500 hover:text-white"
          >
            <NuxtLink :href="routes.blogs"> ProJects </NuxtLink>
          </div>
          <!-- <div
            class="text-2xl font-line px-4 py-2 border-l-2 border-violet-500 hover:bg-violet-500 hover:text-white"
          >
            . . .
          </div>
          <div
            class="text-2xl font-line px-4 py-2 border-l-2 border-violet-500 hover:bg-violet-500 hover:text-white"
          >
            . . .
          </div> -->
        </div>
      </div>
    </div>
  </div>
</template>
