<script setup lang="ts">
import { useStore } from '@/store/main';
const store = useStore();
</script>

<template>
  <div>
    <header>
      <h1>Enter Conditions</h1>
    </header>
    <div>
      <ul>
        <li v-for="participant in store.participants" :key="participant.id">
          {{ participant.name }}
        </li>
      </ul>
    </div>
  </div>
</template>
