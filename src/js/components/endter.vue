<template>
    <footer>
        <div class="line"></div>
        <div class="content">
            <div class="txt">Все права защищены </div>
            <div class="rules">&copy;</div>
        </div>
    </footer>
</template>

<script>


</script>


<style lang="scss" scoped>
.line {
    height: 2px;
    width: 100%;
    background: #fff;
}

.content {
    display: flex;
    justify-content: center;
    padding: 3em;
    align-items: center;
    .txt {
        margin-right: 7px;
    }
    .rules {
        font-size: 1.2em;
    }
}
</style>