<script setup lang="ts">
import { v4 as randomUUID } from 'uuid';
import { Person } from '@/types';
const participants = ref<Person[]>([
  {
    name: '',
    id: randomUUID(),
    excludes: [],
  },
  {
    name: '',
    id: randomUUID(),
    excludes: [],
  },
  {
    name: '',
    id: randomUUID(),
    excludes: [],
  },
  {
    name: '',
    id: randomUUID(),
    excludes: [],
  },
]);

const addPerson = () => {
  participants.value.push({
    name: '',
    id: randomUUID(),
    excludes: [],
  });
};

const removePerson = (id: string) => {
  participants.value = participants.value.filter((person) => person.id !== id);
};
</script>

<template>
  <div>
    <header>
      <h1>Enter Participants</h1>
    </header>
    <div>
      <form @submit.prevent="addPerson()">
        <div v-for="person in participants" :key="person.id">
          <label :for="person.id">Name</label>
          <input
            class="border border-black"
            type="text"
            name="participant"
            :id="person.id"
          />
          <button @click="removePerson(person.id)" type="button">X</button>
        </div>
        <div>
          <button type="submit">Add</button>
          <a href="/conditions">Add Conditions</a>
          <a href="/finish">Finish</a>
        </div>
      </form>
    </div>
  </div>
</template>
