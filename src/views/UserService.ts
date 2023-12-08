import axios from 'axios'
import { useUserStore } from '@/stores/user'
import { useToast } from 'primevue/usetoast'
import MessageError from '@/views/MessageError'

export default class UserService {
  store = useUserStore()
  toast = useToast()

  async login(username: string, password: string) {
    try {
      await axios.post(
        '/login',
        { username, password },
        { headers: { 'Content-Type': 'application/x-www-form-urlencoded' } }
      )
      const result = await axios.get('/api/user')
      this.store.name = result.data
    } catch (e: any) {
      throw new MessageError('Username or password invalid', 'password')
    }
  }

  async logout() {
    await axios.post('/logout')
    this.store.name = 'Logged out'
  }

  async addUser(username: string, password: string) {
    try {
      await axios.post('/api/register', { username, password })
    } catch (e: any) {
      throw new MessageError(e.response.data.detail, e.response.data.field)
    }
  }
}
