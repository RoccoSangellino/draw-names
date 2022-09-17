<template>
  <div>
    <div
      class="flex justify-center items-center"
      v-if="!store.participants.length"
    >
      <div class="flex flex-col justify-center">
        <form @submit.prevent="store.addParticipant(totalParticipants)">
          <label for="participants">How many participants?</label>
          <input
            id="participants"
            class="mt-2 mr-2 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
            type="number"
            v-model="totalParticipants"
          />
          <button
            class="w-full block px-2 py-2 mt-2 text-lg font-medium text-white rounded-md bg-primary-600 hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-600"
            type="submit"
          >
            Add
          </button>
        </form>
      </div>
    </div>
    <div v-else class="xs:w-full md:w-2/4">
      <form @submit.prevent="store.addParticipant()">
        <div class="mb-6" v-for="person in store.participants" :key="person.id">
          <label
            class="block text-sm font-medium text-gray-700"
            :for="person.id"
            >Name</label
          >
          <div class="flex items-center">
            <input
              :id="person.id"
              v-model="person.name"
              class="mt-1 mr-2 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
              type="text"
              name="participant"
            />
            <button @click="removeParticipant(person.id)" type="button">
              <solid-trash-icon class="w-6 h-6 text-red-600" />
            </button>
          </div>
        </div>
        <div class="flex justify-between items-center">
          <button
            class="block mr-2 px-5 py-1 text-lg font-medium text-white bg-primary-600 rounded-md hover:underline focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-600"
            type="submit"
          >
            Add
          </button>
          <div class="flex items-center">
            <button
              class="block px-2 py-1 text-lg font-medium text-bodyBg hover:underline focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-bodyBg"
              type="button"
              @click="$emit('updateTab', 1)"
            >
              Add Exclusions
            </button>
            <button
              class="block px-2 py-1 text-lg font-medium text-bodyBg hover:underline focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-bodyBg"
              type="button"
              @click="$emit('updateTab', 2)"
            >
              Generate
            </button>
          </div>
        </div>
      </form>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useStore } from '@/store/main';
const store = useStore();
const totalParticipants = ref(0);

const removeParticipant = (id: string) => {
  totalParticipants.value--;
  store.removeParticipant(id);
};
</script>
