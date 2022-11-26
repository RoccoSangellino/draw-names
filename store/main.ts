import { defineStore } from 'pinia';
import { AppState, Participant } from '@/types';
import { v4 as randomUUID } from 'uuid';

interface Actions {
  addParticipant: (numParticipants?: number) => void;
  removeParticipant: (id: string) => void;
}

export const useStore = defineStore<'main', AppState, {}, Actions>({
  id: 'main',
  state: () => {
    return {
      participants: [],
      generateType: 'private',
    };
  },

  actions: {
    addParticipant(numParticipants) {
      if (numParticipants) {
        for (let i = 0; i < numParticipants; i++) {
          (this.participants as Participant[]).push({
            name: '',
            id: randomUUID(),
            excludes: [],
          });
        }
      } else {
        (this.participants as Participant[]).push({
          name: '',
          id: randomUUID(),
          excludes: [],
        });
      }
    },
    removeParticipant(id: string) {
      this.participants = (this.participants as Participant[]).filter(
        (participant) => participant.id !== id
      );
    },
  },

  getters: {
    getParticipants: (state) => state.participants,
  },

  persist: true,
});
