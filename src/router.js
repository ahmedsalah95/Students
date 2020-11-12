import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import StudentForm from './components/StudentForm.vue'
import Students from './views/Students.vue'
import Fathers from './views/Fathers.vue'
Vue.use(Router);

export default new Router({
    routes: [
        {
            path: '/',
            name: 'home',
            component: Home
        },
        {
            path: '/StudentForm',
            name: 'StudentForm',
            component: StudentForm
        }
        ,
        {
            path:'/Students',
            name:'/Students',
            component: Students
        },
        {
            path:'/Fathers',
            name:'/Fathers',
            component:Fathers
        }
    ]
})
