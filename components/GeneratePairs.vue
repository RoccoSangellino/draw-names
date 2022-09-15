<template>
  <div>
    <ul>
      <li v-for="(pair, index) in pairs.data.value" :key="index">
        <span>{{ pair.giftGiver.name }}</span> -
        <span>{{ pair.giftReceiver.name }}</span>
      </li>
    </ul>
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
</script>
