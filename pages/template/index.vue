<template>
    <div>
        <div class="gap">
            <div class="container">
                <div class="buttons">
                    <a v-for="tax in taxonomies" :key="tax.id" :href="`/template/?tag=${tax.id}`"
                       class="button is-rounded" @click="clickTag($event, tax)">{{tax.title}}</a>
                </div>
            </div>
        </div>
        <div class="section">
            <div class="container">
                <div class="columns is-multiline">
                    <div v-for="board in response.results" :key="board.id" class="column is-6">
                        <board :value="board"></board>
                    </div>
                </div>
            </div>
        </div>
        <div class="create">
            <div class="button is-rounded" @click="create">
                Create
            </div>
        </div>
    </div>
</template>

<script>
    import Board from "../../components/Board";
    export default {
        name: "Template",
        components: {Board},
        async asyncData({$axios, query}) {
            let tag = await $axios.$get(`/general/hash-tags/?for_model=board`);
            return {
                taxonomies: tag.results,
                query
            }
        },
        data() {
            return {
                response: {
                    results: [],
                    count: 0
                },
                taxonomies: [],
                tag: null
            }
        },
        methods: {
            async fetch() {
                this.response = await this.$axios.$get('/task/boards/', {
                    params: this.query
                });
            },
            create() {
                this.$axios.$post('/task/boards/', {
                    title: 'Untitled'
                }).then(res => {
                    this.$router.replace({path: `/template/${res.slug}/`})
                })
            },
            clickTag(e, tax) {
                e.preventDefault();
                if (this.tag && tax.id !== this.tag.id || this.tag === null) {
                    this.tag = tax;
                    this.query.tag = tax.id;
                    this.query.page = 1;
                    this.fetch();
                }

            }
        },
        async created() {
            await this.fetch();
        }
    }
</script>

<style lang="scss">
    .create {
        position: fixed;
        bottom: 1rem;
        left: 1rem;
    }
</style>
