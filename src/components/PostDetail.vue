<template>
    <div v-if="post">
      <h2>{{ post.title }}</h2>
      <p>{{ post.content }}</p>
  
      <CommentList :postId="post.id" />
      <CommentForm :postId="post.id" />
    </div>
  </template>
  
  <script setup>
  import { ref, onMounted } from 'vue'
  import { useRoute } from 'vue-router'
  import axios from 'axios'
  import CommentList from './CommentList.vue'
  import CommentForm from './CommentForm.vue'
  
  const route = useRoute()
  const post = ref(null)
  
  onMounted(async () => {
    const response = await axios.get(`/api/posts/${route.params.id}`)
    post.value = response.data
  })
  </script>
  