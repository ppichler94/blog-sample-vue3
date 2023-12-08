import axios from 'axios'
import { useToast } from 'primevue/usetoast'
import MessageService from '@/views/MessageService'

export interface Post {
  id: number
  title: string
  content: string
  author: string
}

export class PostService {
  messageService = new MessageService()

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
      this.messageService.error('Error reading posts')
      return []
    }
  }
}
