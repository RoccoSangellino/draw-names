import { Pair, Participant } from '@/types';

const pairs = (participants: Participant[]) => {
  const alreadyPicked: { [key: string]: boolean } = {};

  const generatePair = (participant: Participant): Pair => {
    const { id, excludes } = participant;
    let selectedPerson: Participant | undefined;
    const excludesIndex: { [key: string]: boolean } = {
      [participant.id]: true,
    };

    excludes.forEach((person) => {
      excludesIndex[person.id] = true;
    });

    while (!selectedPerson) {
      const randomIndex = Math.floor(Math.random() * participants.length);
      const person = participants[randomIndex];
      if (alreadyPicked[person.id] || excludesIndex[person.id]) {
        continue;
      }

      alreadyPicked[person.id] = true;
      selectedPerson = person;
    }

    return {
      giftGiver: participant,
      giftReceiver: selectedPerson,
    };
  };

  return participants.map((person: Participant) => generatePair(person));
};

export default defineEventHandler(async (event) => {
  const body = await useBody<Participant[]>(event);
  console.log(body);
  return {
    data: pairs(body),
  };
});
