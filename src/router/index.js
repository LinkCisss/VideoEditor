import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Layout from "../views/Layout";
import About from "../views/About";
import EditPicture from "../views/EditPicture";
import EditVedio from "../views/EditVedio";


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name:'About',
    component: About
  },
  {
    path: '/editPicture',
    name:'EditPicture',
    component: EditPicture
  },
  {
    path: '/editVedio',
    name: 'EditVedio',
    component: EditVedio,
  },
  {
    path: '/cutVideo',
    name: 'CutVideo',
    component: CutVideo,
  }
  // {
  //   path: '/',
  //   name: 'Layout',
  //   component: Layout,
  //   redirect: '/home',
  //   children: [
  //     {path: 'home', component: Home, name: 'Home'},
  //     {path: 'about',component: About,name:'About'}
  //   ]
  // },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
