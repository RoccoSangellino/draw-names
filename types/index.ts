export interface Participant {
  id: string;
  name: string;
  excludes: Participant[];
}

export interface Pair {
  giftGiver: Participant;
  giftReceiver: Participant;
}
