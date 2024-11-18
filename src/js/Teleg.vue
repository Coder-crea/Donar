<template>
    <Nav />
    <Telegram />
    <Endter />
</template>

<script>
import Nav from "./components/Nav.vue"
import Head from "./components/Head.vue"
import Endter from "./components/endter.vue"
import Telegram from "./components/Telegram.vue"

export default {
    components: {
        Nav, Head, Endter , Telegram
    }
}
</script>

<style lang="scss" scoped>

</style>