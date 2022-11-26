<template>
  <div class="bg-white shadow-md rounded my-6">
    <div v-if="pending">Loading ...</div>
    <table
      v-else-if="pairs && pairs.data.length"
      class="min-w-max w-full table-auto"
    >
      <thead>
        <tr class="bg-gray-200 text-gray-600 uppercase text-sm leading-normal">
          <th class="py-3 px-6 text-left">Gift Giver</th>
          <th class="py-3 px-6 text-left">Gift Receiver</th>
        </tr>
      </thead>
      <tbody class="text-gray-600 text-sm font-light">
        <tr
          class="border-b border-gray-200 hover:bg-gray-100"
          :class="{
            'bg-gray-100': index % 2 !== 0,
          }"
          v-for="(pair, index) in pairs.data"
          :key="index"
        >
          <td class="py-3 px-6 text-left whitespace-nowrap">
            {{ pair.giftGiver.name }}
          </td>
          <td class="py-3 px-6 text-left whitespace-nowrap">
            {{ pair.giftReceiver.name }}
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script setup lang="ts">
import { useStore } from '@/store/main';
const store = useStore();
const { data: pairs, pending } = await useLazyFetch('/api/generate-pairs', {
  server: false,
  initialCache: false,
  body: {
    participants: store.participants,
    generateType: store.generateType,
  },
  method: 'POST',
});

watch(pending, (newPending) => {
  if (!newPending) {
    window.jsConfetti.addConfetti({
      emojis: ['🎁'],
      emojiSize: 100,
      confettiNumber: 30,
    });
  }
});
</script>
