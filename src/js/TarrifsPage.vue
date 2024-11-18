<template>
    <div>
        <Nav />
        <ContentTarif />
        <Move />
        <Endter />
    </div>
</template>

<script>

import Nav from "./components/Nav.vue"
import Endter from "./components/endter.vue"
import Move from "./components/Move.vue"
import ContentTarif from "./components/ContentTarif.vue"
export default {
    components: { Nav, Endter, ContentTarif, Move},
}
</script>

<style lang="scss"></style>