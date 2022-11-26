import { Pair, Participant, AppState } from '@/types';
import sgMail from '@sendgrid/mail';
sgMail.setApiKey(process.env.SENDGRID_API_KEY);

const pairs = async (state: AppState) => {
  const { participants, generateType } = state;
  const alreadyPicked: { [key: string]: boolean } = {};
  const messages = [];

  const generatePair = (participant: Participant): Pair => {
    const { id, excludes } = participant;
    let selectedPerson: Participant | undefined;
    const excludesIndex: { [key: string]: boolean } = {
      [id]: true,
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
      selectedPerson = { ...person };

      if (generateType === 'private') {
        // selectedPerson.name = '**********';
      }
    }

    messages.push({
      to: participant.email, // replace this with your email address
      from: 'rsangellino@gmail.com',
      subject: 'Let the gift giving begin',
      text: `The secret selection for ${participant.name} is ${selectedPerson.name}`,
    });

    return {
      giftGiver: participant,
      giftReceiver: selectedPerson,
    };
  };

  const pairs = participants.map((person: Participant) => generatePair(person));
  const mail = await sgMail.send(messages);
  console.log({ mail });
  return pairs;
};

export default defineEventHandler(async (event) => {
  const body = await useBody<AppState>(event);
  return {
    data: await pairs(body),
  };
});
