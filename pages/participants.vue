<script setup lang="ts">
import { useStore } from '@/store/main';
const store = useStore();
</script>

<template>
  <div>
    <header>
      <h1>Enter Participants</h1>
    </header>
    <div>
      <form @submit.prevent="store.addParticipant()">
        <div v-for="person in store.participants" :key="person.id">
          <label :for="person.id">Name</label>
          <input
            :id="person.id"
            v-model="person.name"
            class="border border-black"
            type="text"
            name="participant"
          />
          <button @click="store.removeParticipant(person.id)" type="button">
            X
          </button>
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
