<script></script>

<template>
  <div class="container mx-auto p-2">
    <div class="text-center mb-16">
      <NeuButton label="Contact Me" smallLabel="Contact Me" />
    </div>
    <div class="mb-8">
      <form action="" class="max-w-screen-sm mx-auto text-violet-500">
        <div class="w-full mb-8">
          <div class="w-full mb-8">
            <label for="name" class="font-medium"
              >Where should we pick up our dicussion from?
              <div class="text-sm">
                Say something about your Project, Organisation, Expectation etc.
              </div>
            </label>
            <textarea
              placeholder="I want to build Website of *** for *** with ***"
              class="w-full rounded-xl border-r-4 border-b-4 border-violet-500 py-2 px-4 outline-none"
            ></textarea>
          </div>
          <label for="name" class="font-medium">What should I call you?</label>
          <input
            id="name"
            type="text"
            placeholder="Your Name"
            class="w-full rounded-xl border-r-4 border-b-4 border-violet-500 py-2 px-4 outline-none"
          />
        </div>
        <div class="w-full mb-8">
          <label for="email" class="font-medium"
            >How should I get back to you?
            <div class="text-sm">Drop your email please.</div>
          </label>
          <input
            id="email"
            type="email"
            placeholder="Or directly email me at rupamkairi@gmail.com"
            class="w-full rounded-xl border-r-4 border-b-4 border-violet-500 py-2 px-4 outline-none"
          />
        </div>
      </form>
    </div>
  </div>
</template>
