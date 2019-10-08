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
            return this.$store.state.orderToDelete || this.$store.state.productToDelete;
        },
        title () {
            if(this.$store.state.orderToDelete) {
                return this.$store.getters.getOrderTitleById(this.id)
            }
            else {
                return this.$store.getters.getProductTitleById(this.id);
            }
        }
    },
    methods: {
        closePopUp () {
            this.$store.commit('set', {type: 'showPopUp', item: false});
            this.$store.commit('set', {type: 'orderToDelete', item: null});
            this.$store.commit('set', {type: 'productToDelete', item: null});
        }
    }
}
</script>

<style scoped lang="scss">
    @import "../styles/_variables.scss";
    .pop-up-mask {
        background-color: rgba(0, 0, 0, 0.3);
        position: absolute;
        top: 0;
        left: 0;
        height: 100%;
        width: 100%;
        @extend %all-blocks;
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
        @extend %all-buttons;
        @extend %close-button;
    }
    .pop-up-body {
        @extend %all-blocks;
        flex-basis: 28%;
    }
    .pop-up-body-dot {
        width: 10px;
        height: 10px;
        background-color: $color;
        border-radius: 50%;
        align-self: center;
        margin: 0 20px 0 20px;
    }
    .pop-up-body-title {
        flex-basis: 85%;
        @extend %title-text;
    }
    .pop-up-footer {
        @extend %all-blocks;
        background-color: $color;
        flex-basis: 42%;
        justify-content: flex-end;
        padding-right: 4%;
    }
    .pop-up-cancel {
        @extend %all-buttons;
        flex-basis: 20%;
        height: 40%;
        background-color: $color;
        color: white;
    }
    .pop-up-cancel:hover {
        font-size: medium;
    }
    .pop-up-delete {
        @extend %all-buttons;
        flex-basis: 20%;
        height: 40%;
        background-color: white;
        color: red;
        box-shadow: 3px 3px 11px -4px rgba(0, 0, 0, 0.4);
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
