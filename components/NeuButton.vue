<script>
export default {
  props: {
    label: {
      default: "Techs I am Using",
      type: String,
    },
    smallLabel: {
      default: "My Techs",
      type: String,
    },
  },
  setup(props) {
    console.log(props);

    return props;
  },
};
</script>

<template>
  <button
    class="relative px-4 py-2 border hover:border-2 border-violet-500 text-4xl font-line transition-all group"
  >
    <div
      class="absolute -z-10 w-full h-full top-1 left-1 group-hover:-top-1 group-hover:-left-1 bg-violet-500 transition-all"
    ></div>
    <span class="z-10 text-white whitespace-nowrap">
      <span class="md:hidden">{{}}</span>
      <span class="hidden md:inline">{{ label }}</span>
    </span>
  </button>
</template>
