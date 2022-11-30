export enum Status {
  ordinary = 'обычная',
  important = 'важная',
  completed = 'выполненная'
}
export class RecordItem {
  id: number = Date.now()
  status: Status = Status.ordinary
  description: string = ''
}
