<template>
    <div class="card board">
        <div class="card-body">
            <div class="task">
                <div class="notification">
                    <n-link :to="`/template/${board.slug}/`">{{board.title}}</n-link>
                </div>
            </div>
            <div class="line"></div>
        </div>
        <footer class="card-footer">
            <div class="card-footer-item">
                <n-link :to="`/template/${board.slug}`">Preview</n-link>
            </div>
            <div class="card-footer-item">
                <div>Use</div>
            </div>
        </footer>
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
    .board {
        .card-body {
            min-height: 150px;
            background-image: linear-gradient(#F5F5F5 1px, transparent 1px), linear-gradient(90deg, #F5F5F5 1px, transparent 1px);
            background-size: 16px 16px;
            display: flex;
            align-items: center;
            justify-items: center;
            justify-content: center;
            position: relative;

            .task {
                max-width: 75%;
                z-index: 2;

                a {
                    text-decoration: none;
                }
            }

            .line {
                height: 1px;
                background-image: linear-gradient(90deg, #CCC, #CCC 75%, transparent 75%, transparent 100%);
                background-size: 20px 1px;
                position: absolute;
                top: 50%;
                right: 0;
                left: 0;
                z-index: 1;
            }
        }
    }
</style>
