<template>
  <div class="relative mx-8 group">
    <div
      class="absolute -z-10 w-full h-full rounded border-t-0 border-r-0 border-b-8 group-hover:border-b-[16px] border-l-8 group-hover:border-l-[16px] -bottom-2 group-hover:-bottom-4 -left-2 group-hover:-left-4 bg-base-300 dark:bg-base-300 group-hover:bg-primary dark:group-hover:bg-primary transition-all"
    ></div>
    <div
      class="shrink-0 grow-0 rounded-sm p-4 sm:h-24 sm:w-24 sm:p-6 md:h-28 md:w-28 md:p-8 lg:h-32 lg:w-32 lg:p-10 xl:h-36 xl:w-36 xl:p-12 2xl:h-40 2xl:w-40 2xl:p-14 bg-neutral-content dark:bg-base-300 transition-all"
    >
      <slot></slot>
    </div>
  </div>
</template>
