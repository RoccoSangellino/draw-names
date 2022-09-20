<template>
  <div>
    <div
      class="bg-yellow-900 p-2 md:p-4 lg:p-8 xl:p-16 rounded-lg flex flex-col gap-8 lg:flex-row"
    >
      <div class="flex justify-center lg:order-2 lg:min-w-[45%]">
        <img
          class="lg:hidden"
          src="../assets/images/present-banner.png"
          alt=""
        />
        <img class="hidden lg:block" src="../assets/images/banner.png" alt="" />
      </div>
      <div class="">
        <h1
          class="text-2xl xlg:text-5xl md:text-4xl md:leading-tight xlg:leading-snug font-semibold text-slate-800"
        >
          Gift giving made easy with
          <div class="text-primary-600 font-bold">Secret Selection</div>
        </h1>
        <p class="mt-4 mb-4 md:text-xl xl:text-2xl text-slate-800 opacity-75">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi
          suscipit voluptas eius? Sunt quis dolor libero, error quo maxime
          exercitationem.
        </p>
        <div class="lg:inline-block">
          <a
            href="/generate-pairs"
            class="flex items-center justify-center px-6 py-3 mt-6 text-lg xl:text-2xl font-medium text-white rounded-md bg-primary-600 hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-600"
          >
            <span>Get Started</span>
            <svg
              class="w-5 h-5 ml-2"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              ></path>
            </svg>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>
