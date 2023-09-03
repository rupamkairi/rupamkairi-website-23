<script setup></script>

<template>
  <div class="">
    <div class="container mx-auto border border-slate-300">
      <div class="flex justify-between flex-wrap">
        <div>
          <div class="text-2xl font-line px-4 py-2 border-r border-slate-300">
            <NuxtLink :href="routes.home"> Home </NuxtLink>
          </div>
        </div>
        <div
          class="grow sm:grow-0 overflow-x-scroll sm:overflow-auto flex border-t sm:border-t-0 border-slate-300"
        >
          <div
            class="text-2xl font-line px-4 py-2 border-l-0 sm:border-l border-slate-300"
          >
            <NuxtLink :href="routes.blogs"> Blogs </NuxtLink>
          </div>
          <div class="text-2xl font-line px-4 py-2 border-l border-slate-300">
            . . .
          </div>
          <div class="text-2xl font-line px-4 py-2 border-l border-slate-300">
            . . .
          </div>
          <div class="text-2xl font-line px-4 py-2 border-l border-slate-300">
            . . .
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
