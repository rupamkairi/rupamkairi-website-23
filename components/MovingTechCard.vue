<script setup>
const techs1 = [
  { label: "React", logo: "/logos/react.svg" },
  { label: "Vue", logo: "/logos/vue.svg" },
  { label: "Adonis", logo: "/logos/adonis.svg" },
  { label: "Next", logo: "/logos/next.svg" },
  { label: "Nuxt", logo: "/logos/nuxt.svg" },
  { label: "Mongodb", logo: "/logos/mongodb.svg" },
];
const techs2 = [{ label: "Nuxt", logo: "/logos/nuxt.svg" }];
const techs3 = [{ label: "Nuxt", logo: "/logos/nuxt.svg" }];
</script>

<template>
  <div class="h-full overflow-hidden">
    <div class="flex justify-center flex-nowrap isometric">
      <div v-for="el in techs1">
        <NeuIsometricBox>
          <img :src="el.logo" :alt="el.label" />
        </NeuIsometricBox>
      </div>
    </div>
    <div class="flex justify-center flex-nowrap isometric">
      <div v-for="el in Array(12)">
        <NeuIsometricBox>
          <img src="/logos/nuxt.svg" alt="" />
        </NeuIsometricBox>
      </div>
    </div>
    <div class="flex justify-center flex-nowrap isometric">
      <div v-for="el in Array(12)">
        <NeuIsometricBox>
          <img src="/logos/nuxt.svg" alt="" />
        </NeuIsometricBox>
      </div>
    </div>
    <div class="flex justify-center flex-nowrap isometric">
      <div v-for="el in Array(12)">
        <NeuIsometricBox>
          <img src="/logos/nuxt.svg" alt="" />
        </NeuIsometricBox>
      </div>
    </div>
    <div class="flex justify-center flex-nowrap isometric">
      <div v-for="el in Array(12)">
        <NeuIsometricBox>
          <img src="/logos/nuxt.svg" alt="" />
        </NeuIsometricBox>
      </div>
    </div>
  </div>
</template>
