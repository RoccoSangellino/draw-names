<template>
  <div>
    <div
      class="flex justify-center items-center"
      v-if="!store.participants.length"
    >
      <div class="flex flex-col justify-center">
        <form @submit.prevent="handleSubmit" autocomplete="off">
          <div class="mb-4">
            <label for="participants">How many participants?</label>
            <input
              id="participants"
              class="mt-2 mr-2 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
              type="number"
              v-model="totalParticipants"
              autocomplete="new-password"
            />
          </div>
          <div class="flex justify-center gap-2 mb-4">
            <div class="form-check form-check-inline">
              <input
                class="form-check-input form-check-input appearance-none rounded-full h-4 w-4 border border-gray-300 bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                type="radio"
                name="display-type"
                id="private"
                value="private"
                v-model="generateType"
              />
              <label
                class="form-check-label inline-block text-gray-800"
                for="inlineRadio10"
                >Make it Secret 🤫</label
              >
            </div>
            <div class="form-check form-check-inline">
              <input
                class="form-check-input form-check-input appearance-none rounded-full h-4 w-4 border border-gray-300 bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                type="radio"
                name="display-type"
                id="public"
                value="public"
                v-model="generateType"
              />
              <label
                class="form-check-label inline-block text-gray-800"
                for="inlineRadio20"
                >Make it Public</label
              >
            </div>
          </div>
          <button
            class="uppercase w-full block px-2 py-2 mt-2 text-base font-medium text-white rounded-md bg-primary-600 hover:underline focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-600"
            type="submit"
          >
            Let the gift giving begin
          </button>
        </form>
      </div>
    </div>
    <div
      v-else
      class="xs:w-full"
      :class="{
        'w-3/4': store.generateType === 'private',
        'w-2/4': store.generateType === 'public',
      }"
    >
      <form @submit.prevent="store.addParticipant()" autocomplete="off">
        <div
          class="mb-6 flex items-center gap-2"
          v-for="person in store.participants"
          :key="person.id"
        >
          <div class="flex-grow">
            <label
              class="block text-sm font-medium text-gray-700"
              :for="`${person.id}-name`"
              >Name</label
            >
            <input
              :id="`${person.id}-name`"
              v-model="person.name"
              class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
              type="text"
              autocomplete="new-password"
            />
          </div>
          <div v-if="store.generateType === 'private'" class="flex-grow">
            <label
              class="block text-sm font-medium text-gray-700"
              :for="`${person.id}-email`"
              >Email</label
            >
            <input
              :id="`${person.id}-email`"
              v-model="person.email"
              class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
              type="text"
              autocomplete="new-password"
            />
          </div>
          <button
            class="relative top-2"
            @click="removeParticipant(person.id)"
            type="button"
          >
            <solid-trash-icon class="w-6 h-6 text-red-600" />
          </button>
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
const generateType = ref<'private' | 'public'>('private');

const removeParticipant = (id: string) => {
  totalParticipants.value--;
  store.removeParticipant(id);
};

const handleSubmit = () => {
  store.generateType = generateType.value;
  store.addParticipant(totalParticipants.value);
};

onMounted(() => {
  totalParticipants.value = store.participants.length;
});
</script>
