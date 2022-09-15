<template>
  <main class="p-2 pt-12 md:px-4 lg:px-8 xl:px-16 relative overflow-x-hidden">
    <div class="absolute -z-10 w-[394px] left-[-80px] top-[-130px]">
      <img src="../assets/images/party-banner.png" alt="" />
    </div>
    <div
      class="absolute -z-10 w-[250px] right-[-35px] top-[-66px] transform rotate-45"
    >
      <img class="h-[400px]" src="../assets/images/balloons.png" alt="" />
    </div>
    <slot />
  </main>
</template>
