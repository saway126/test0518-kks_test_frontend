<template>
    <div>
      <h2>게시글 작성</h2>
      <form @submit.prevent="submitPost">
        <input v-model="title" placeholder="제목" required />
        <textarea v-model="content" placeholder="내용" required></textarea>
        <button type="submit">작성</button>
      </form>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue'
  import axios from 'axios'
  import { useRouter } from 'vue-router'
  
  const title = ref('')
  const content = ref('')
  const router = useRouter()
  
  const submitPost = async () => {
    await axios.post('/api/posts', { title: title.value, content: content.value })
    router.push('/')
  }
  </script>
  