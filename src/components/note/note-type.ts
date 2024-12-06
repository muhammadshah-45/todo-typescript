export type Proirity = "high" | "medium" | 'low'

export type NoteType = {
    id: string;
    text:string,
    proirity:Proirity;
}

export enum ColorLight {
  high = 'rgb(124,166,6)',

  medium = 'rgb(230,155,133)',
  low = 'rgb(200,50,100)',
}

export enum ColorDark {
  high = 'rgb(143,66,61)',
  medium = 'rgb(190,131,79)',
  low = 'rgb(151,151,98)',
}


