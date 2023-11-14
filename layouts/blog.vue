<script setup lang="ts">
const route = useRoute();
const params = "/blogs/" + route.params.slug;

const currentContentHead = await queryContent(params).findOne();
let { categories } = currentContentHead;
categories = categories.split(" ");

const relatedContents = await queryContent("blogs")
  .where({
    categories: { $containsAny: categories },
    _path: { $ne: params },
  })
  .find();
</script>

<template>
  <div>
    <div class="min-h-screen">
      <TopNavigation />

      <div class="container mx-auto p-2">
        <div class="mt-16 mb-8">
          <div class="grid grid-cols-3 gap-2 lg:gap-4">
            <div class="col-span-3 lg:col-span-2">
              <div class="max-w-screen-md mx-auto">
                <slot></slot>
              </div>
            </div>
            <div class="col-span-3 lg:col-span-1">
              <h1 class="text-2xl font-black">Related</h1>
              <div v-for="blog in relatedContents">
                <div>
                  <NuxtLink :href="blog._path">{{ blog.title }}</NuxtLink>
                </div>
              </div>
              <!-- <pre>{{
                JSON.stringify(
                  {
                    related_blogs_count: relatedContents.length,
                    blogs: relatedContents,
                  },
                  null,
                  2
                )
              }}</pre> -->
            </div>
          </div>
        </div>
      </div>
      <div class="my-32"></div>

      <BottomFooter />
    </div>
  </div>
</template>
