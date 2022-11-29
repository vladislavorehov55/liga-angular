// export enum Status {
//   ordinary = 'обычная',
//   important = 'важная',
//   completed = 'выполненная'
// }
export type Status = 'ordinary' | 'important' | 'completed'
export class RecordItem {
  id: number = Date.now()
  status: Status = 'ordinary'
  description: string = ''
}
