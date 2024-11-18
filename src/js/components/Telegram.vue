<template>
    <div class="reg">
        <div class="content">
            <div class="head">
                <img src="img/telegram-1.svg" alt="">
                <h2>Вход с Telegram</h2>
                <p>Введите свой номер телефона</p>
            </div>
            <div class="form">
                <div class="field">
                    <input type="text" class="field-input" placeholder id="number" v-model="this.info" value="+7">
                    <label for="number" class="field-label">Номер</label>
                    <p>{{ this.info }}</p>
                </div>
                <router-link to="/code"><button @click="Base(this.info)" :style="{ display: this.display }">Далее</button></router-link>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            info: "",
            display: "none",
            input: ""
            
        }
    },
    mounted() {
        this.openBut()
    },
    methods: {
        Base(value) {
            if(value== ""){
                this.info= "Введите корректнный номер"
            } else {
                localStorage.setItem("Number", this.info)
                const number = this.info
                this.info= ""
            }
        },
        openBut(){
            this.info.addEventListener("change", ()=> {
                if(this.info ==""){
                    this.display = "none"
                } else {
                    this.display = "block"
                }
            })
        }
    }
}
</script>

<style lang="scss" scoped>
@import url('https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100..900;1,100..900&family=Playwrite+GB+S:ital,wght@0,100..400;1,100..400&family=Poppins:ital,wght@0,300;0,400;0,500;1,300&family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap');

.reg {
    font-family: "Roboto", sans-serif;
    color: #000;
    text-align: center;
    margin-top: 70px;
    background: white;
    padding: 3em;
    border-radius: 12px;
    margin-bottom: 90px;

    .content {
        width: 40%;
        margin: 0 auto;

        @media (max-width:1024px) {
            width: 80%;
        }

        @media (max-width:570px) {
            width: 100%;
        }
    }

    .head {
        img {
            width: 100px;
        }

        h2 {
            margin-top: 25px;
            margin-bottom: 0.5em;
            font-weight: 500;
        }

        p {
            font-family: "Roboto", sans-serif;
            font-weight: 400;
            color: grey;
        }

    }

    .form {
        margin-top: 30px;

        button {
            font-family: "Roboto", sans-serif;
            text-transform: uppercase;
            font-weight: 400;
            width: 100%;
            margin-top: 12px;
            padding: 12px;
            border-radius: 12px;
            border: none;
            background: rgb(51, 144, 236);
            color: #fff;
            transition: all 0.3s ease;
            cursor: pointer;

            &:hover {
                opacity: 0.8;
            }
        }

        .field {
            position: relative;

            .field-label {
                position: absolute;
                top: 11px;
                left: 0.9em;
                font-size: 17px;
                color: darkgray;
                transition-duration: 0.2s;
                background: #fff;
                border-radius: 4px;
                padding: 0px 3px;

                @media(max-width: 420px){
                    left: 0.5em;
                }
            }

            .field-input:not(:placeholder-shown)+.field-label {
                color: blue;
                scale: 0.9;
                translate: -0.3em -1.35em;
            }

            input {
                border: 2px solid grey;
                padding: 12px 2.4%;
                border-radius: 12px;
                outline: none;
                width: 95%;
                transition: all 0.3s ease;

                &:hover {
                    border-color: blue;
                }

                &:focus {
                    border-color: blue;
                }
            }
        }

    }
}
</style>