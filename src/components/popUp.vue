<template>
    <transition name="modal">
        <div class="pop-up-mask">
            <div class="pop-up">
                <button class="pop-up-close" @click="closePopUp">x</button>
                <div  class="pop-up-question">
                    <slot></slot>
                </div>
                <div class="pop-up-body">
                    <div class="pop-up-body-dot"></div>
                    <p class="pop-up-body-title">{{ title }}</p>
                </div>
                <div class="pop-up-footer">
                    <button class="pop-up-cancel" @click="closePopUp">ОТМЕНИТЬ</button>
                    <button class="pop-up-delete">УДАЛИТЬ</button>
                </div>
            </div>
        </div>
    </transition>
</template>

<script>
export default {
    name: "popUp",
    computed: {
        id () {
            return this.$store.state.idToDelete;
        },
        title () {
            return this.$store.getters.getOrderTitleById(this.id);
        }
    },
    methods: {
        closePopUp () {
            this.$store.commit('set', {type: 'showPopUp', item: false});
        }
    }
}
</script>

<style scoped>
    .pop-up-mask {
        background-color: rgba(0, 0, 0, 0.3);
        position: absolute;
        top: 0;
        left: 0;
        height: 100%;
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        transition: opacity .6s ease;
    }
    .pop-up {
        background-color: white;
        height: 30%;
        width: 50%;
        position: relative;
        border-radius: 5px;
        display: flex;
        flex-direction: column;
    }
    .pop-up-question {
        color: lightslategrey;
        text-align: center;
        border-bottom: solid 1px lightgrey;
        flex-basis: 30%;
    }
    .pop-up-close {
        position: absolute;
        top: -7%;
        left: 97%;
        width: 38px;
        height: 38px;
        background-color: white;
        font-size: medium;
        color: lightgrey;
        font-weight: 600;
        outline: none;
        border: none;
        border-radius: 50%;
        box-shadow: 3px 3px 11px -4px rgba(0, 0, 0, 0.4);
        cursor: pointer;
    }
    .pop-up-body {
        flex-basis: 28%;
        display: flex;
        align-items: center;
    }
    .pop-up-body-dot {
        width: 10px;
        height: 10px;
        background-color: rgb(72, 176, 44);
        border-radius: 50%;
        align-self: center;
        margin: 0 20px 0 20px;
    }
    .pop-up-body-title {
        flex-basis: 85%;
        color: rgb(86, 94, 99);
        font-size: 20px;
        text-decoration: underline lightgrey;
    }
    .pop-up-footer {
        background-color: rgb(72, 176, 44);
        flex-basis: 42%;
        display: flex;
        justify-content: flex-end;
        align-items: center;
        padding-right: 4%;
    }
    .pop-up-cancel {
        flex-basis: 20%;
        height: 40%;
        outline: none;
        border: none;
        background-color: rgb(72, 176, 44);
        color: white;
        font-weight: 600;
        cursor: pointer;
    }
    .pop-up-cancel:hover {
        font-size: medium;
    }
    .pop-up-delete {
        flex-basis: 20%;
        height: 40%;
        outline: none;
        border: none;
        background-color: white;
        color: red;
        font-weight: 600;
        box-shadow: 3px 3px 11px -4px rgba(0, 0, 0, 0.4);
        cursor: pointer;
        border-radius: 30px;
    }
    .pop-up-delete:hover {
        box-shadow: 4px 4px 15px 3px rgba(0, 0, 0, 0.4);
    }

    .modal-enter {
        opacity: 0;
    }

    .modal-leave-active {
        opacity: 0;
    }

    .modal-enter .modal-container,
    .modal-leave-active .modal-container {
        -webkit-transform: scale(1.1);
        transform: scale(1.1);
    }
</style>
