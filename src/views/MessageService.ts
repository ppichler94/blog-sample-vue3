import { useToast } from 'primevue/usetoast'
import type MessageError from '@/views/MessageError'

export type Severity = 'info' | 'success' | 'warn' | 'error'
export default class MessageService {
  toast = useToast()

  display(severity: Severity, summary: string, detail?: string) {
    this.toast.add({
      severity,
      summary,
      detail,
      life: 3000
    })
  }

  success(summary: string, detail?: string) {
    this.display('success', summary, detail)
  }

  error(summary: string, detail?: string) {
    this.display('error', summary, detail)
  }

  displayError(error: MessageError) {
    this.toast.add({
      severity: 'error',
      summary: error.detail,
      life: 3000
    })
  }
}