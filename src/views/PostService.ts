import axios from 'axios'

export interface Post {
  id: number
  title: string
  content: string
}

export class PostService {
  async createPost(title: string, content: string) {
    const dto = {
      title,
      content
    }
    await axios.post('/api/articles', dto)
  }

  async getPosts(): Promise<Post[]> {
    const result = await axios.get('/api/articles')
    return result.data
  }
}
