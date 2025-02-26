<template>
    <div>
      <h2>게시글 목록</h2>
      <router-link to="/post/create">새 게시글 작성</router-link>
      <PostList />
    </div>
  </template>
  
  <script setup>
  import PostList from '@/components/PostList.vue'
  </script>
  