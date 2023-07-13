<template>
  <section class="hero">
    <div class="container mx-auto px-5 py-5">
      <div class="flex flex-col-reverse lg:flex-row items-center lg:py-5 lg:order-first">
        <div class="lg:w-6/12 lg:ms-10 text-black">
          <h1 class="text-4xl font-bold leading-tight mb-3">Responsive left-aligned hero with image</h1>
          <p class="text-lg">
            Quickly design and customize responsive mobile-first sites with Bootstrap, the world’s most popular front-end open source toolkit, featuring Sass variables and mixins, responsive grid system, extensive prebuilt components, and
            powerful JavaScript plugins.
          </p>
          <div class="grid grid-cols-1 gap-2 md:flex md:justify-start">
            <button type="button" class="bg-blue-500 hover:bg-blue-400 text-black  rounded-lg px-4 py-2 mt-7">Primary</button>
            <button type="button" class="bg-gray-300 hover:bg-gray-200 text-black rounded-lg px-4 py-2 mt-7">Default</button>
          </div>
        </div>
        <div class="lg:w-6/12">
          <div class="mx-auto lg:w-[400px] lg:h-[400px]">
            <lottie-player src="https://assets3.lottiefiles.com/packages/lf20_xY418y0j6x.json" class="mx-auto" background="transparent" speed="1" loop autoplay></lottie-player>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
