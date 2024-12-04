export type Proirity = "high" | "medium" | 'low'
export type NoteProps = {
    text: string;
    proirity?: Proirity;
}

export type NoteType = {
    id:number | string;
    text:string,
    proirity:Proirity;
}

export enum Color {
  high = 'red',
  medium = 'green',
  low = 'yellow',
}
