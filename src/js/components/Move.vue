<template>
    <h2>Отзывы наших клиенток</h2>
    <p>У наших работников 1,5 года опыта</p>
    <div class="blocks" :style="'left: ' + left + 'px'">
        <div class="item">
            <h3><i class="fa-solid fa-circle-user"></i>Полина</h3>
            <p>Цены доступные, а результат превосходный</p>
        </div>
        <div class="item">
            <h3><i class="fa-solid fa-circle-user second"></i>Марина</h3>
            <p> Маникюр просто идеален!</p>
        </div>
        <div class="item">
            <h3><i class="fa-solid fa-circle-user third"></i>Мария</h3>
            <p>Очень радует качество работы.</p>
        </div>
        <div class="item">
            <h3><i class="fa-solid fa-circle-user fourth"></i>Анна</h3>
            <p> У вас лучший курс совершенствования мастеров!</p>
        </div>
        <div class="item">
            <h3><i class="fa-solid fa-circle-user fifth"></i>Виктория</h3>
            <p>Девочки – настоящие профессионалы!  </p>
        </div>
        <div class="item">
            <h3><i class="fa-solid fa-circle-user sixth"></i>Елизавета</h3>
            <p>Спасибо за таких замечательных специалистов!</p>
        </div>
        <div class="item">
            <h3><i class="fa-solid fa-circle-user seventh"></i>Александра</h3>
            <p>Курс вашей компании действительно отличный.</p>
        </div>
        <div class="item">
            <h3><i class="fa-solid fa-circle-user seventh"></i>Анастасия</h3>
            <p>Все супер. Мастера очень доброжелательные!</p>
        </div>
    </div>
    <div class="arrows">
        <img src="img/arrow-next.svg" v-if="this.left !=0" @click="moveBlock('prev')" alt="">
        <img src="img/arrow-next.svg" v-if="this.left >= -2040" @click="moveBlock('next')" class="next" alt="">
    </div>
</template>

<script>
export default {
    data() {
        return {
            left: 0
        }
    },
    methods: {
        moveBlock(value) {
            let add = 320;
            if (value == 'next' && this.left >= -2040)
                this.left -= add
            else if (value == 'prev' && this.left !=0)
                this.left += add

        }
    }
}

</script>

<style lang="scss" scoped>
$colorText: #696868;

h2 {
    font-size: 2.4em;
    color: #ffffffe6;
}

p {
    margin-top: 15px;
}

.blocks {
    display: flex;
    margin-top: 35px;
    margin-bottom: 50px;
    width: 2500px;
    position: relative;
    transition: left 0.5s ease;

    .item {
        background: #fffffff4;
        padding: 30px 25px;
        border-radius: 12px;
        width: 250px;
        color: $colorText;

        &:not(:last-of-type) {
            margin-right: 45px;
        }

        h3 {
            display: flex;
            align-items: center;
            i{
                margin-right: 12px;
                font-size: 1.5em;
                color: red;

                &.second {
                    color: rgb(162, 255, 0);
                }
                &.third{
                    color: rgb(255, 0, 162);
                }
                &.fourth{
                    color: rgb(12, 254, 226);
                }
                &.fifth{
                    color: rgba(152, 184, 237, 0.949);
                }
                &.sixth{
                    color: rgba(236, 217, 5, 0.764);
                }
                &.seventh{
                    color: rgb(215, 40, 231);
                }
            }
        }
    }
}

.arrows {
    margin-bottom: 90px;

    img {
        cursor: pointer;
        transition: transform 500ms ease;
        margin-right: 30px; 

        &:hover {
            transform: scale(1.1);
        }

        &.next {
            transform: rotate(180deg);

            &:hover {
                transform: scale(1.1) rotate(180deg);
            }
        }
    }
}
</style>