<script setup>
const techs1 = [
  { label: "JavaScript", logo: "/logos/javascript.svg" },
  { label: "Vue", logo: "/logos/vue.svg" },
  { label: "React", logo: "/logos/react.svg" },
  { label: "Next", logo: "/logos/next.svg" },
  { label: "Svelte", logo: "/logos/svelte.svg" },
  { label: "Nuxt", logo: "/logos/nuxt.svg" },
];
const techs2 = [
  { label: "Node", logo: "/logos/node.svg" },
  { label: "Express", logo: "/logos/express.svg" },
  { label: "Adonis", logo: "/logos/adonis.svg" },
  { label: "SocketIO", logo: "/logos/socketio.svg" },
  { label: "Mongodb", logo: "/logos/mongodb.svg" },
  { label: "MySQL", logo: "/logos/mysql.svg" },
];
const techs3 = [
  { label: "TypeScript", logo: "/logos/typescript.svg" },
  { label: "WebSocket", logo: "/logos/websocket.svg" },
  { label: "Git", logo: "/logos/git.svg" },
  { label: "Docker", logo: "/logos/docker.svg" },
  { label: "Firebase", logo: "/logos/firebase.svg" },
];
const techs4 = [];
</script>

<template>
  <div class="h-full overflow-hidden">
    <div class="isometric">
      <div class="flex justify-center flex-nowrap -translate-x-24">
        <div v-for="el in techs1">
          <NeuDesignsNeuIsometricBox>
            <img :src="el.logo" :alt="el.label" />
          </NeuDesignsNeuIsometricBox>
        </div>
      </div>
    </div>
    <div class="isometric">
      <div class="flex justify-center flex-nowrap">
        <div v-for="el in techs2">
          <NeuDesignsNeuIsometricBox>
            <img :src="el.logo" :alt="el.label" />
          </NeuDesignsNeuIsometricBox>
        </div>
      </div>
    </div>
    <div class="isometric">
      <div class="flex justify-center flex-nowrap translate-x-[16rem]">
        <div v-for="el in techs3">
          <NeuDesignsNeuIsometricBox>
            <img :src="el.logo" :alt="el.label" />
          </NeuDesignsNeuIsometricBox>
        </div>
      </div>
    </div>
    <!-- <div class="flex justify-center flex-nowrap isometric">
      <div v-for="el in techs4">
        <NeuDesignsNeuIsometricBox>
          <img :src="el.logo" :alt="el.label" />
        </NeuDesignsNeuIsometricBox>
      </div>
    </div> -->
    <!-- <div class="flex justify-center flex-nowrap isometric">
      <div v-for="el in Array(12)">
        <NeuIsometricBox>
          <img src="/logos/nuxt.svg" alt="" />
        </NeuIsometricBox>
      </div>
    </div> -->
  </div>
</template>
