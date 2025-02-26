<template>
    <div v-if="post">
      <h2>{{ post.title }}</h2>
      <p>{{ post.content }}</p>
  
      <h3>댓글</h3>
      <CommentList :postId="post.id" />
      <CommentForm :postId="post.id" @comment-added="fetchPost" />
    </div>
  </template>
  
  <script setup>
  import { ref, onMounted } from 'vue'
  import { useRoute } from 'vue-router'
  import { usePostStore } from '@/store/post'
  import CommentList from '@/components/CommentList.vue'
  import CommentForm from '@/components/CommentForm.vue'
  
  const route = useRoute()
  const postStore = usePostStore()
  const post = ref(null)
  
  const fetchPost = async () => {
    post.value = await postStore.fetchPost(route.params.id)
  }
  
  onMounted(fetchPost)
  </script>
  