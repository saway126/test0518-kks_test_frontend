import { createRouter, createWebHistory } from 'vue-router'
import PostListView from '../views/PostListView.vue'
import PostDetailView from '../views/PostDetailView.vue'
import PostCreateView from '../views/PostCreateView.vue'

const routes = [
  { path: '/', component: PostListView },
  { path: '/post/:id', component: PostDetailView },
  { path: '/post/create', component: PostCreateView }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
