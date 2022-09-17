<template>
  <div class="bg-yellow-900 p-2 md:p-4 lg:p-8 xl:p-16 rounded-lg flex flex-col">
    <h1
      class="text-2xl xlg:text-5xl md:text-4xl text-primary-600 font-bold mb-6"
    >
      Secret Selection
    </h1>
    <TabGroup :selectedIndex="selectedTab" @change="changeTab">
      <TabList class="flex space-x-1 rounded-xl bg-yellow-300/50 p-1">
        <Tab
          v-for="category in categories"
          as="template"
          :key="category.step"
          v-slot="{ selected }"
        >
          <button
            :class="[
              'w-full rounded-lg py-2.5 text-sm font-medium leading-5 text-blue-700',
              'ring-white ring-opacity-60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2',
              selected
                ? 'bg-white shadow'
                : 'text-bodyBg hover:bg-yellow-900/[0.55] hover:font-bold',
            ]"
          >
            {{ category.title }}
          </button>
        </Tab>
      </TabList>

      <TabPanels class="mt-2">
        <TabPanel
          v-for="(category, idx) in categories"
          :key="idx"
          :class="[
            'rounded-xl bg-white p-3',
            'ring-white ring-opacity-60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2',
          ]"
        >
          <component :is="category.component" @updateTab="updateSelectedTab" />
        </TabPanel>
      </TabPanels>
    </TabGroup>
  </div>
</template>

<script setup lang="ts">
import { TabGroup, TabList, Tab, TabPanels, TabPanel } from '@headlessui/vue';
import type { Component } from 'vue';
import Participants from '@/components/Participants.vue';
import ParticipantExclusions from '@/components/ParticipantExclusions.vue';
import GeneratePairs from '@/components/GeneratePairs.vue';

interface TabOption {
  title: string;
  step: number;
  component: Component;
}

const selectedTab = ref(0);

const changeTab = (index: number) => {
  selectedTab.value = index;
};

const updateSelectedTab = (index: number) => {
  selectedTab.value = index;
};

const categories = shallowRef<TabOption[]>([
  {
    title: 'Enter Participants',
    step: 1,
    component: Participants,
  },
  {
    title: 'Exclusions',
    step: 2,
    component: ParticipantExclusions,
  },
  {
    title: 'Generate',
    step: 3,
    component: GeneratePairs,
  },
]);
</script>
