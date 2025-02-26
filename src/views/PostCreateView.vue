<template>
    <div>
      <h2>게시글 작성</h2>
      <PostForm @post-created="handlePostCreated" />
    </div>
  </template>
  
  <script setup>
  import { useRouter } from 'vue-router'
  import PostForm from '@/components/PostForm.vue'
  
  const router = useRouter()
  
  const handlePostCreated = () => {
    router.push('/') // 작성 후 목록 페이지로 이동
  }
  </script>
  