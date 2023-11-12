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
            <div class="col-span-3 lg:col-span-1">Related</div>
          </div>
        </div>
      </div>
      <BottomFooter />
    </div>
  </div>
</template>
