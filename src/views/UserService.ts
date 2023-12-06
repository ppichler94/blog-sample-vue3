import axios from 'axios'
import { useUserStore } from '@/stores/user'

export default class UserService {
  store = useUserStore()

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
    await axios.post('/api/users', { username, password })
  }
}
