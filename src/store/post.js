import { defineStore } from 'pinia'
import axios from 'axios'

export const usePostStore = defineStore('post', {
  state: () => ({
    posts: [],
    post: null,
  }),

  actions: {
    async fetchPosts() {
      const response = await axios.get('/api/posts')
      this.posts = response.data
    },

    async fetchPost(id) {
      const response = await axios.get(`/api/posts/${id}`)
      this.post = response.data
      return this.post
    },

    async createPost(newPost) {
      await axios.post('/api/posts', newPost)
      await this.fetchPosts()
    },
  },
})
