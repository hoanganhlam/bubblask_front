<template>
    <div class="subsection">
        <div class="level is-mobile">
            <div class="level-left">
                <h4 class="widget_title">Your Board</h4>
            </div>
            <div class="level-right">
                <div class="buttons">
                    <div class="button is-small previous" @click="clickFetch(false)" v-if="page > 1">
                        <x-icon name="chevron-left"></x-icon>
                    </div>
                    <div class="button is-small next" @click="clickFetch(true)" v-if="page < total">
                        <x-icon name="chevron-right"></x-icon>
                    </div>
                </div>
            </div>
        </div>
        <div class="columns is-multiline" v-if="response.results.length">
            <div v-for="board in response.results" :key="board.id" class="column is-3">
                <board :value="board"></board>
            </div>
        </div>
        <div v-if="loading" class="columns is-multiline">
            <div v-for="i in 4" :key="i" class="column is-3">
                <div class="card">
                    <div class="card-content">
                        <div class="skeleton-line"></div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>

import Board from "./Board";

export default {
    name: "BoardList",
    components: {Board},
    data() {
        return {
            response: {
                results: [],
                count: 0
            },
            loading: false,
            page: 1
        }
    },
    methods: {
        async fetch() {
            this.loading = true;
            this.response.results = [];
            this.response = await this.$axios.$get('/task/boards/', {
                params: {
                    user: this.currentUser.id,
                    page_size: 4,
                    is_interface: false,
                    page: this.page
                }
            });
            this.loading = false;
        },
        async clickFetch(flag) {
            if (flag) {
                this.page = this.page + 1;
            } else {
                this.page = this.page - 1;
            }
            await this.fetch();
        }
    },
    computed: {
        total() {
            return this.response.count / 4;
        }
    },
    created() {
        this.fetch();
    }
}
</script>
