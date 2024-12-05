export type Proirity = "high" | "medium" | 'low'

export type NoteType = {
    id: string;
    text:string,
    proirity:Proirity;
}

export enum Color {
  high = 'red',
  medium = 'green',
  low = 'yellow',
}
