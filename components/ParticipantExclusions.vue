<template>
  <div>
    <div>
      <div>
        <button
          class="flex items-center mb-4 gap-1 px-2 py-1 text-lg font-medium text-bodyBg hover:underline focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-bodyBg"
          type="button"
          @click="$emit('updateTab', 0)"
        >
          <solid-arrow-left-icon class="h-4 w-4" />
          Back
        </button>
      </div>
      <ul>
        <li
          class="mb-6"
          v-for="participant in store.participants"
          :key="participant.id"
        >
          <div class="">
            <div class="text-xl mb-2">{{ participant.name }}</div>
            <Listbox v-model="participant.excludes" multiple by="id">
              <div class="flex items-center gap-1">
                <div class="relative md:w-1/4">
                  <ListboxButton
                    class="text-left mt-1 block w-full rounded-md border border-gray-300 bg-white py-2 px-3 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                  >
                    <span class="block truncate">{{
                      participant.excludes
                        .map((person) => person.name)
                        .join(', ') || 'Select'
                    }}</span>
                    <span
                      class="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2"
                    >
                      <solid-chevron-down-icon
                        class="h-5 w-5 text-gray-400"
                        aria-hidden="true"
                      />
                    </span>
                  </ListboxButton>

                  <transition
                    leave-active-class="transition duration-100 ease-in"
                    leave-from-class="opacity-100"
                    leave-to-class="opacity-0"
                  >
                    <ListboxOptions
                      class="z-10 absolute mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm"
                    >
                      <ListboxOption
                        v-slot="{ active, selected }"
                        v-for="person in filteredOptions(participant.id)"
                        :key="person.id"
                        :value="person"
                        as="template"
                      >
                        <li
                          :class="[
                            active
                              ? 'bg-amber-100 text-amber-900'
                              : 'text-gray-900',
                            'relative cursor-default select-none py-2 pl-10 pr-4 z-10',
                          ]"
                        >
                          <span
                            :class="[
                              selected ? 'font-medium' : 'font-normal',
                              'block truncate',
                            ]"
                            >{{ person.name }}</span
                          >
                          <span
                            v-if="selected"
                            class="absolute inset-y-0 left-0 flex items-center pl-3 text-amber-600"
                          >
                            <solid-check-icon
                              class="h-5 w-5"
                              aria-hidden="true"
                            />
                          </span>
                        </li>
                      </ListboxOption>
                    </ListboxOptions>
                  </transition>
                </div>
                <button
                  @click="removeParticipant(participant.id)"
                  type="button"
                >
                  <solid-trash-icon class="w-6 h-6 text-red-600" />
                </button>
              </div>
            </Listbox>
          </div>
        </li>
      </ul>
      <button
        class="block mr-2 px-5 py-1 text-lg font-medium text-white bg-primary-600 rounded-md hover:underline focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-600"
        type="button"
        @click="$emit('updateTab', 2)"
      >
        Generate
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useStore } from '@/store/main';
import {
  Listbox,
  ListboxButton,
  ListboxOptions,
  ListboxOption,
} from '@headlessui/vue';
const store = useStore();

const filteredOptions = (id: string) => {
  return store.participants.filter((person) => person.id !== id);
};

const removeParticipant = (id: string) => {
  store.removeParticipant(id);
};
</script>
