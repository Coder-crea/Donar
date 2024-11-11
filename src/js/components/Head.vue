<template>
    <div class="head">
        <div class="promotion">
            <span>NEW</span>
            Бесплатное повышение квалификации
        </div>
        <div class="lead">
            <div>
                <h1>Современный <br>Маникюр:<br> Повышаем Уровень</h1>
                <p><b>Этот курс идеально подойдёт для : </b><br>
                    - Мастеров маникюра, желающих обновить свои навыки и повысить квалификацию <br>
                    - Начинающих специалистов, стремящихся быстро освоить новые техники <br>
                    - Всех, кто хочет научиться создавать модные и стильные образы на ногтях</p>
                <div class="lead-buttons">
                    <button>Начать</button>
                    <button>Детальнее</button>
                </div>
            </div>
            <div>
                <div class="lead-info">
                    <div class="lead-info-time">
                        <span>{{ showTime }}</span>
                        ВРЕМЯ ДО СТАРТА
                    </div>
                    <div class="lead-info-cl">
                        <span>12</span>
                        ВИДЕО УРОКОВ
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            showTime: "39:00",
            timerCount: 38 * 60
        }
    },
    watch: {
        timerCount: {
            handler() {
                setTimeout(() => {
                    if (this.timerCount <= 0) return

                    this.timerCount--
                    const minutes = Math.ceil(this.timerCount / 60)
                    const seconds = this.timerCount - minutes * 60 + 60
                    let txtSeconds = 0

                    if (seconds == 60)
                        txtSeconds = "00"
                    else if (seconds < 10 && seconds > 0)
                        txtSeconds = "0" + seconds
                    else
                        txtSeconds = seconds

                    this.showTime = (txtSeconds == "00" ? minutes + 1 : minutes) + ":" + txtSeconds

                }, 1000)
            },
            immediate: true
        }
    },
    methods: {

    }
}
</script>

<style lang="scss" scoped>
// @import url('https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100..900;1,100..900&family=Playwrite+GB+S:ital,wght@0,100..400;1,100..400&family=Poppins:ital,wght@0,400;0,500;1,300&display=swap');

.head {
    margin-top: 50px;
    margin-bottom: 33px;

    .promotion {
        background: #191919;
        border-radius: 200px;
        padding: 10px 5px;
        color: #D1D1D1;
        text-align: center;
        display: flex;
        align-items: center;


        animation: pulse infinite ease-in-out 1.5s alternate;

        @media(min-width:450px) {
            width: 330px;
        }

        @media(max-width:450px) {
            width: 270px;
            font-size: 0.84em;
        }

        span {
            background: rgb(245, 67, 97);
            border-radius: 200px;
            padding: 5px 10px;
            color: #fff;
            margin-right: 4px;
            margin-left: 7px;
            font-weight: 600;
            letter-spacing: 1.5px;
        }
    }

    .lead {
        margin-top: 20px;
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;

        h1 {
            letter-spacing: -2px;

            @media(min-width: 1500px) {
                font-size: 6em;
                line-height: 120px;
            }

            @media(max-width: 1500px) and (min-width:770px) {
                font-size: 5em;
                line-height: 90px;
            }

            @media(max-width: 770px) and (min-width:450px) {
                font-size: 3.5em;
                line-height: 70px;
            }

            @media(max-width: 460px) {
                font-size: 2.7em;
                line-height: 60px;
            }

        }

        p {
            color: #868686;
            margin: 25px 0;
            font-weight: 500;
            font-size: 1.2em;

            @media(min-width: 650px) {
                width: 600px;
            }

            b {
                color: #d9d3d3;
            }
        }

        .lead-buttons>button {
            background: #25AB75;
            padding: 20px;
            width: 160px;
            font-weight: 600;
            border-radius: 10px;
            font-size: 1.02em;
            color: #fff;
            border: 0;
            cursor: pointer;
            margin-top: 30px;
            transition: all .5s ease;

            &:first-of-type {
                margin-right: 35px;
            }

            &:last-of-type {
                background: #191919;
            }

            &:hover {
                transform: translateY(-7px);
            }
        }

        >div:last-of-type {

            .lead-info {
                @media(max-width:1179px) {
                    display: flex;
                    justify-content: space-between;
                    margin-top: 40px;
                    flex-wrap: wrap;;
                }


                @mixin info-block {
                    background: #191919;
                    border-radius: 20px;
                    padding: 20px 30px;
                    width: 110px;
                    font-size: 0.7em;
                    margin-bottom: 25px;

                    span {
                        font-weight: 600;
                        font-size: 3em;
                        display: block;
                    }
                }

                .lead-info-time {
                    @include info-block;

                    @media(max-width:1179px) {
                        margin-right: 25px;
                    }

                    span {
                        color: #FFE642;
                    }
                }

                .lead-info-cl {
                    @include info-block;

                    span {
                        color: #FB1351;
                    }
                }
            }
        }
    }
}

@keyframes pulse {
    0% {
        transform: scale(0.95);
    }

    100% {
        transform: scale(1);
    }
}
</style>