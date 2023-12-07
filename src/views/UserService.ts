import axios from 'axios'
import { useUserStore } from '@/stores/user'
import { useToast } from 'primevue/usetoast'

export default class UserService {
  store = useUserStore()
  toast = useToast()

  async login(username: string, password: string) {
    await axios.post(
      '/login',
      { username, password },
      { headers: { 'Content-Type': 'application/x-www-form-urlencoded' } }
    )
    const result = await axios.get('/api/user')
    this.store.name = result.data
  }

  async logout() {
    await axios.post('/logout')
    this.store.name = 'Logged out'
  }

  async addUser(username: string, password: string) {
    try {
      await axios.post('/api/register', { username, password })
      this.toast.add({
        severity: 'success',
        summary: 'User Created',
        life: 3000
      })
    } catch (e: any) {
      this.toast.add({
        severity: 'error',
        summary: 'Error creating user',
        detail: e.message,
        life: 3000
      })
    }
  }
}
