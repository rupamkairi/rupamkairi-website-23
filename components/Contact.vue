<script>
export default {
  setup() {
    const handleFormSubmit = (e) => {
      e.preventDefault();

      console.log("Hello");
    };

    return { handleFormSubmit };
  },
};
</script>

<template>
  <div class="container mx-auto p-2">
    <div class="text-center mb-16">
      <NeuButton label="Contact Me" smallLabel="Contact Me" />
    </div>
    <div class="mb-8">
      <form class="max-w-screen-sm mx-auto" @submit="handleFormSubmit">
        <div class="w-full mb-8">
          <div class="mb-8">
            <label for="name" class="block mb-2 font-bold text-violet-500"
              >Where should we pick up our dicussion from?
              <div class="text-sm font-medium">
                Say something about your Project, Organisation, Expectation etc.
              </div>
            </label>

            <NeuFormInput>
              <textarea
                placeholder="I want to build Website of *** for *** with ***"
                class="w-full px-4 py-2 outline-none block"
              ></textarea>
            </NeuFormInput>
          </div>
          <div class="mb-8">
            <label for="name" class="block mb-2 font-bold text-violet-500"
              >What should I call you?</label
            >
            <NeuFormInput>
              <input
                id="name"
                type="text"
                placeholder="Your Name"
                class="w-full py-2 px-4 outline-none"
              />
            </NeuFormInput>
          </div>
        </div>
        <div class="mb-8">
          <label for="email" class="block mb-2 font-bold text-violet-500"
            >How should I get back to you?
            <div class="text-sm font-medium">Drop your email please.</div>
          </label>
          <NeuFormInput>
            <input
              id="email"
              type="email"
              placeholder="Or directly email me at rupamkairi@gmail.com"
              class="w-full py-2 px-4 outline-none"
            />
          </NeuFormInput>
        </div>
        <div class="text-center mb-16">
          <NeuButton
            type="submit"
            label="Send Message"
            smallLabel="Send Message"
          />
        </div>
      </form>
    </div>
  </div>
</template>
