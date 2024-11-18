<template>
    <div class="wrapper">
        <div class="heading">
            <h2>Наши работы</h2>
            <a href="" class="link-more">ПОСМОТРЕТЬ БОЛЬШЕ</a>
        </div>
        <div class="courses">
            <div class="courses-item" v-for="el in courses" :key="el.title">
                <img :src="'img/' + el.img" :alt="el.title">
                <h2>{{ el.title }}</h2>
                <p>{{ el.cl }}</p>
                <div class="time">{{ el.time }}</div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: ['data'],
    created() {
        this.courses = this.data
    },
    data() {
        return {
            courses: []
        }
    }
}
</script>

<style lang="scss" scoped>
.wrapper {
    margin-top: 40px;

    @media(max-width:1500px) {
        margin-top: 10px;
    }
}

.heading {
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
    @media(min-width:1024px){
        margin-top: 120px;
    }

    @media(max-width:1024px) {
        margin-top: 30px;
    }

    h2 {
        font-size: 2.1em;
        margin-right: 30px;

        @media(max-width:471px) {
            margin-right: 0px;
        }
    }

    a {
        font-size: 0.8em;
        margin-top: 10px;
        // @media(max-width:320px) {
        //     width: 100%;
        // }
    }
}

.courses {
    margin-bottom: 100px;
    display: flex;
    flex-wrap: wrap;

    @media(min-width:950px) {
        justify-content: space-between;
    }

    @media(max-width:950px) {
        justify-content: center;
        flex-direction: column;
    }


    .courses-item {
        margin-top: 40px;

        cursor: pointer;
        position: relative;
        overflow: hidden;
        border-radius: 10px;

        @media(max-width:950px) and (min-width:440px) {
            width: 373px;
            margin-left: auto;
            margin-right: auto;
        }

        @media(max-width:440px) {
            width: 100%;
        }

        .time {
            position: absolute;
            right: 0;
            bottom: 65px;
            background: #000;
            padding: 5px;
            font-weight: 600;
            border-top-left-radius: 9px;
        }

        h2 {
            font-size: 2.2em;
            margin-left: 10px;
            position: relative;
            bottom: 35px;
        }

        p {
            color: #ABABAB;
            position: relative;
            bottom: 35px;
            font-size: 0.9em;
            margin-left: 10px;
        }

        img {
            opacity: 0.8;
            border-radius: 10px;
            transition: all 0.4s ease;

            @media(max-width:440px) {
                width: 100%;
            }

            &:hover {
                opacity: 1;
                transform: scale(1.1)
            }

        }
    }
}
</style>