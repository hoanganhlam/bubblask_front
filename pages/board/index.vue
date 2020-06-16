<template>
    <div>
        <div class="section">
            <div class="container">
                <h1 class="title is-spaced">Board</h1>
                <div class="notification is-light subtitle">Get or sharing template to learn something by expert!</div>
                <board-list v-if="currentUser"/>
                <div class="subsection">
                    <h4 class="widget_title">Sample Board</h4>
                    <div class="buttons" v-if="taxonomies.length">
                        <a v-for="tax in taxonomies" :key="tax.id" :href="`/board/?tag=${tax.id}`"
                           v-bind:class="{'is-primary': tag && tag.id === tax.id}"
                           class="button is-rounded" @click="clickTag($event, tax)">{{tax.title}}</a>
                    </div>
                    <div v-if="response.results.length" class="columns is-multiline">
                        <div v-for="board in response.results" :key="board.id" class="column is-4">
                            <div class="media box template-board">
                                <div class="media-left">
                                    <avatar :value="board.media" class="is-48x48"></avatar>
                                </div>
                                <div class="media-content">
                                    <h4>
                                        <b>
                                            <n-link :to="`/board/${board.slug}`">{{board.title}}</n-link>
                                        </b>
                                    </h4>
                                    <small>3 Tasks</small>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div v-else class="columns is-multiline">
                        <div v-for="i in 9" :key="i" class="column is-4">
                            <div class="box">
                                <div class="skeleton-board"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="create" v-if="currentUser">
            <div class="button is-rounded" @click="create">Create</div>
        </div>
    </div>
</template>

<script>
    import Board from "../../components/Board";
    import Avatar from "../../components/Avatar";
    import BoardList from "../../components/BoardList";

    export default {
        name: "Template",
        components: {BoardList, Avatar, Board},
        async asyncData({$axios, query}) {
            let tag = await $axios.$get(`/general/hash-tags/?for_model=board`);
            query.page_size = 9;
            return {
                taxonomies: tag.results,
                query,
                response: await $axios.$get('/task/boards/', {
                    params: query,
                })
            }
        },
        data() {
            return {
                response: {
                    results: [],
                    count: 0
                },
                tag: null,
                selectedTax: []
            }
        },
        methods: {
            async fetch() {
                this.response.results = [];
                this.response = await this.$axios.$get('/task/boards/', {
                    params: this.query,
                });
            },
            create() {
                if (this.currentUser) {
                    this.$axios.$post('/task/boards/', {
                        title: 'Untitled'
                    }).then(res => {
                        this.$router.replace({path: `/board/${res.slug}/`})
                    })
                }
            },
            clickTag(e, tax) {
                this.selectedTax.push(tax.id);
                e.preventDefault();
                if (this.tag && tax.id !== this.tag.id || this.tag === null) {
                    this.tag = tax;
                } else {
                    this.tag = null;
                }
                this.query.page = 1;
                this.fetch();
            }
        }
    }
</script>

<style lang="scss">
    .create {
        position: fixed;
        bottom: 1rem;
        left: 1rem;
    }

    .template-board {
        h4 {
            line-height: 1;
        }
    }
</style>
