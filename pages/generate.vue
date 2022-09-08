<script setup lang="ts">
import { useStore } from '@/store/main';
import { Participant } from '@/types';

interface Pair {
  me: Participant;
  them: Participant;
}

const pairs = await useAsyncData<Pair[]>('pairs', () => {
  const store = useStore();
  const alreadyPicked: { [key: string]: boolean } = {};
  const generate = (participant: Participant) => {
    const { id, excludes } = participant;
    let selectedPerson: Participant | undefined;
    while (!selectedPerson) {
      const randomIndex = Math.floor(Math.random() * store.participants.length);
      const person = store.participants[randomIndex];
      if (
        id === person.id ||
        alreadyPicked[person.id] ||
        excludes.find((p) => p.id === person.id)
      ) {
        continue;
      }

      alreadyPicked[person.id] = true;
      selectedPerson = person;
    }

    return selectedPerson;
  };

  const pairs = store.participants.map((person: Participant) => {
    return {
      me: person,
      them: generate(person),
    };
  });
  return Promise.resolve(pairs);
});
</script>

<template>
  <div>
    <h1>Generate</h1>
    <div>
      <ul>
        <li v-for="(pair, index) in pairs.data.value" :key="index">
          <span>{{ pair.me.name }}</span> -
          <span>{{ pair.them.name }}</span>
        </li>
      </ul>
    </div>
  </div>
</template>
