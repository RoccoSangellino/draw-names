import { defineStore } from 'pinia';
import { Participant } from '@/types';
import { v4 as randomUUID } from 'uuid';

interface State {
  participants: Participant[];
}

interface Actions {
  addParticipant: (numParticipants?: number) => void;
  removeParticipant: (id: string) => void;
}

export const useStore = defineStore<'main', State, {}, Actions>({
  id: 'main',
  state: () => {
    return {
      participants: [],
    };
  },

  actions: {
    addParticipant(numParticipants) {
      console.log(numParticipants);
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

// {
//   name: '',
//   id: randomUUID(),
//   excludes: [],
// },
// {
//   name: '',
//   id: randomUUID(),
//   excludes: [],
// },
// {
//   name: '',
//   id: randomUUID(),
//   excludes: [],
// },
// {
//   name: '',
//   id: randomUUID(),
//   excludes: [],
// },
