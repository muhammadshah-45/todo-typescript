export type Proirity = 'high' | 'medium' | 'low'
export type Props = {
    text:string;
    proirity:Proirity;
} 

export type SecondNoteType = {
    id:number | string;
    text :string;
    proirity:Proirity;
}
export type secondNoteProps = {
    secondaddNote:(secondnote: SecondNoteType) => void
}