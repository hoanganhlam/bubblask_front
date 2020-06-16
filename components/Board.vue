<template>
    <div class="card">
        <div class="card-content">
            <div class="media">
                <div class="media-content">
                    <b><n-link :to="`/board/${board.slug}/`">{{board.title}}</n-link></b>
                </div>
                <div class="media-right"></div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Board",
        props: {
            value: {
                type: Object
            }
        },
        data() {
            return {
                board: this.value
            }
        }
    }
</script>

<style lang="scss">
</style>
