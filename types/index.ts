export interface Participant {
  id: string;
  name: string;
  email?: string;
  excludes: Participant[];
}

export interface Pair {
  giftGiver: Participant;
  giftReceiver: Participant;
}

export interface AppState {
  participants: Participant[];
  generateType: 'private' | 'public';
}
