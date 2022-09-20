<template>
  <div class="bg-white shadow-md rounded my-6">
    <table class="min-w-max w-full table-auto">
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
          v-for="(pair, index) in pairs.data.value"
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
import { Participant } from '@/types';

interface Pair {
  giftGiver: Participant;
  giftReceiver: Participant;
}

const pairs = await useAsyncData<Pair[]>('pairs', () => {
  const store = useStore();
  const alreadyPicked: { [key: string]: boolean } = {};

  const generatePair = (participant: Participant): Pair => {
    const { id, excludes } = participant;
    let selectedPerson: Participant | undefined;
    const excludesIndex: { [key: string]: boolean } = {
      [participant.id]: true,
    };

    excludes.forEach((person) => {
      excludesIndex[person.id] = true;
    });

    while (!selectedPerson) {
      const randomIndex = Math.floor(Math.random() * store.participants.length);
      const person = store.participants[randomIndex];
      if (alreadyPicked[person.id] || excludesIndex[person.id]) {
        continue;
      }

      alreadyPicked[person.id] = true;
      selectedPerson = person;
    }

    return {
      giftGiver: participant,
      giftReceiver: selectedPerson,
    };
  };

  const pairs = store.participants.map((person: Participant) =>
    generatePair(person)
  );
  return Promise.resolve(pairs);
});

onMounted(() => {
  window.jsConfetti.addConfetti({
    emojis: ['🎁'],
    emojiSize: 100,
    confettiNumber: 30,
  });
});
</script>
