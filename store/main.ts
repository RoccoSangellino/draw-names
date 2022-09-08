import { defineStore } from 'pinia';
import { Participant } from '@/types';
import { v4 as randomUUID } from 'uuid';

interface State {
  participants: Participant[];
}

interface Actions {
  addParticipant: () => void;
  removeParticipant: (id: string) => void;
}

export const useStore = defineStore<'main', State, {}, Actions>({
  id: 'main',
  state: () => {
    return {
      participants: [
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
      ],
    };
  },

  actions: {
    addParticipant() {
      (this.participants as Participant[]).push({
        name: '',
        id: randomUUID(),
        excludes: [],
      });
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
