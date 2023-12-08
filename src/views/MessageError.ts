export default class MessageError {
  detail: string
  field: string

  constructor(detail: string, field: string) {
    this.detail = detail
    this.field = field
  }
}
