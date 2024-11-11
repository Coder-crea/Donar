<template>
    <div>
        <Nav />
        <Head />
        <Courses :data="courses" />
        <Move />
    </div>
</template>

<script>

import Nav from "./components/Nav.vue"
import Head from "./components/Head.vue"
import Courses from "./components/Courses.vue"
import Move from "./components/Move.vue"
export default {
    components: { Nav, Head, Courses, Move },
    data() {
        return {
            courses: [
                { 'title': 'Кардио', 'cl': '250 калорий', 'time': '58:24', 'img': 'cardio.png' },
                { 'title': 'Растяжка', 'cl': '250 калорий', 'time': '58:24', 'img': 'stretch.png' },
                { 'title': 'Йога', 'cl': '250 калорий', 'time': '58:24', 'img': 'Manikyur01.jpeg' },
                { 'title': 'Бег', 'cl': '250 калорий', 'time': '58:24', 'img': 'mini_worksnail.jpg' },
                { 'title': 'Гантели', 'cl': '250 калорий', 'time': '58:24', 'img': 'mini_AnsNail.jpg' },
                { 'title': 'На улице', 'cl': '250 калорий', 'time': '58:24', 'img': 'mini_ans02nail.jpg' },
            ]
        }
    }
}
</script>

<style lang="scss"></style>