<template>
  <div class="relative mx-4 group">
    <div
      class="absolute -z-10 w-full h-full -bottom-2 border-b-8 group-hover:-bottom-4 group-hover:border-b-[16px] -left-2 border-l-8 group-hover:-left-4 group-hover:border-l-[16px] transition-all"
    ></div>
    <div
      class="shrink-0 grow-0 border hover:border-violet-500 p-4 sm:h-24 sm:w-24 sm:p-6 md:h-28 md:w-28 md:p-8 lg:h-32 lg:w-32 lg:p-10 xl:h-36 xl:w-36 xl:p-12 2xl:h-40 2xl:w-40 2xl:p-14"
    >
      <slot></slot>
    </div>
  </div>
</template>
