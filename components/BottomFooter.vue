<script setup></script>

<template>
  <div class="">
    <div class="container mx-auto p-2">
      <div class="mb-8">
        <div class="flex justify-between flex-wrap">
          <div>
            <div class="flex flex-col">
              <div class="flex gap-2">
                <NuxtLink :href="links.github"> Github </NuxtLink>
                <NuxtLink :href="links.twitter"> Twitter </NuxtLink>
              </div>
              <NuxtLink :href="routes.about"> About </NuxtLink>
            </div>
          </div>
          <div>
            <div class="flex flex-col">
              <NuxtLink :href="routes.terms">Terms & Conditions</NuxtLink>
              <NuxtLink :href="routes.privacyPolicy">Privacy Policy</NuxtLink>
              <NuxtLink :href="routes.refundPolicy">Refund Policy</NuxtLink>
            </div>
          </div>
        </div>
        <div class="text-sm text-center">Copyright © 2023 Rupam Kairi</div>
      </div>
    </div>
  </div>
</template>
