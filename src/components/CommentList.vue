<template>
    <div>
      <h3>댓글</h3>
      <ul>
        <li v-for="comment in comments" :key="comment.id">{{ comment.content }}</li>
      </ul>
    </div>
  </template>
  
  <script setup>
  import { ref, onMounted } from 'vue'
  import axios from 'axios'
  
  const props = defineProps({ postId: Number })
  const comments = ref([])
  
  onMounted(async () => {
    const response = await axios.get(`/api/posts/${props.postId}/comments`)
    comments.value = response.data
  })
  </script>
  