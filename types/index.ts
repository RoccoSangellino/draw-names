export interface Participant {
  id: string;
  name: string;
  excludes: Participant[];
}
