<template>
  <Title>Rupam Kairi | Full Stack Web Developer</Title>
  <div>
    <div class="min-h-screen border">
      <TopNavigationBar />
      <div class="container mx-auto p-2">
        <div class="mt-16 mb-8">
          <slot></slot>
        </div>
      </div>
      <BottomFooter />
    </div>
  </div>
</template>
