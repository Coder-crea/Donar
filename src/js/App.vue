<template>
    <div class="wrapper">
        <div class="container">
            <router-view></router-view>
        </div>
    </div>
</template>

<script>

</script>

<style lang="scss">
$mainColor: #000000;
$textColor: #fff;
$additionColor: pink;
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600&display=swap');

::selection {
    background: pink;
}

* {
    margin: 0;
    padding: 0;
}

body {
    background: $mainColor;
    color: $textColor;
    font-family: "Poppins", serif;
    font-weight: 400;
    font-size: 1em;
}
.wrapper {
    overflow: hidden;
}
a {
    color: #ABABAB;
    text-decoration: none;
    transition: all 0.4s ease;

    &:hover {
        color: #fff;
    }
}

.container {
    @media(min-width:1500px) {
        width: 1300px;
        margin: 0 auto;
    }

    @media(max-width:1500px) and (min-width:900px) {
        width: 80%;
        margin: 0 10%;
    }

    @media(max-width:900px) {
        width: 90%;
        margin: 0 5%;
    }
}
</style>