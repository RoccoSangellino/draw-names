<template>
  <div
    class="flex items-center justify-center min-h-screen sm:min-h-[50vh] py-0 px-2 sm:px-12"
  >
    <!-- <div class="party-banner">
      <img src="../assets/images/party-banner.png" alt="" />
    </div>
    <div class="balloons">
      <img src="../assets/images/balloons.png" alt="" />
    </div> -->
    <div
      class="rounded-3xl p-6 flex justify-center items-center lg:max-w-6xl bg-yellow-default flex-col lg:flex-row"
    >
      <img
        src="../assets/images/banner.png"
        alt=""
        class="lg:order-2 lg:w-full w-[400px]"
      />
      <div class="sm:w-[400px] md:w-auto">
        <h1 class="my-6 font-semibold text-slate-800">
          Gift giving made easy with
          <div class="text-primary-600 font-extrabold">Secret Selection</div>
        </h1>
        <p class="w-4/6 text-lg text-slate-800 opacity-75">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi
          suscipit voluptas eius? Sunt quis dolor libero, error quo maxime
          exercitationem.
        </p>
        <div class="inline-block">
          <a
            href="/participants"
            class="flex items-center justify-center px-6 py-3 mt-6 text-lg font-medium text-white rounded-md bg-primary-600 hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-600"
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
