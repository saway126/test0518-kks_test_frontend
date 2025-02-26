<template>
    <div>
      <form @submit.prevent="submitComment">
        <input v-model="commentText" placeholder="댓글 작성..." required />
        <button type="submit">작성</button>
      </form>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue'
  import axios from 'axios'
  
  const props = defineProps({ postId: Number })
  const commentText = ref('')
  
  const submitComment = async () => {
    await axios.post(`/api/posts/${props.postId}/comments`, { content: commentText.value })
    commentText.value = ''
  }
  </script>
  