<template>
    <div>
      <h2>게시글 목록</h2>
      <ul>
        <li v-for="post in posts" :key="post.id">
          <router-link :to="`/post/${post.id}`">{{ post.title }}</router-link>
        </li>
      </ul>
    </div>
  </template>
  
  <script setup>
  import { ref, onMounted } from 'vue'
  import axios from 'axios'
  
  const posts = ref([])
  
  onMounted(async () => {
    const response = await axios.get('/api/posts') // 백엔드 API 호출
    posts.value = response.data
  })
  </script>
  