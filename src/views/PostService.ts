import axios from 'axios'
import { useToast } from 'primevue/usetoast'

export interface Post {
  id: number
  title: string
  content: string
}

export class PostService {
  toast = useToast()

  async createPost(title: string, content: string) {
    const dto = {
      title,
      content
    }
    await axios.post('/api/articles', dto)
  }

  async getPosts(): Promise<Post[]> {
    try {
      const result = await axios.get('/api/articles')
      return result.data
    } catch (e: any) {
      this.toast.add({
        severity: 'error',
        summary: 'Error reading posts',
        detail: e.message,
        life: 3000
      })
    }
  }
}
