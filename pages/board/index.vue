<template>
    <div>
        <div class="section">
            <div class="container">
                <div class="level is-mobile">
                    <div class="level-left">
                        <h1 class="title is-spaced">Board</h1>
                    </div>
                    <div class="level-right">
                        <div v-if="currentUser" class="button is-light" @click="create">
                            <x-icon name="plus"></x-icon>
                            <span>Create</span>
                        </div>
                    </div>
                </div>
                <div class="subtitle">Get or sharing template to learn something by expert!</div>
                <div class="" v-if="query.page === 1">
                    <board-list v-if="currentUser"/>
                </div>
                <div class="subsection">
                    <h2 class="title has-text-centered">Template</h2>
                    <div class="field">
                        <div class="control">
                            <b-input type="search" placeholder="Learn something"></b-input>
                        </div>
                    </div>
                    <div class="buttons" v-if="taxonomies.length">
                        <a v-for="tax in taxonomies" :key="tax.id" :href="`/board/?tag=${tax.id}`"
                           v-bind:class="{'is-primary': tag && tag.id === tax.id}"
                           class="button is-small" @click="clickTag($event, tax)">{{tax.title}}</a>
                    </div>
                    <div class="level is-mobile">
                        <div class="level-left">
                            <h4 class="widget_title">List</h4>
                        </div>
                        <div class="level-right">
                            <div class="buttons">
                                <div class="button is-small" @click="paging(false)"
                                     v-bind:class="{'is-static': query.page === 1}">
                                    Previous
                                </div>
                                <div class="button is-small" @click="paging(true)"
                                     v-bind:class="{'is-static': response.count / query.page_size <= query.page}">Next
                                </div>
                            </div>
                        </div>
                    </div>
                    <div v-if="response.results.length" class="columns is-multiline">
                        <div v-for="board in response.results" :key="board.id" class="column is-4">
                            <div class="media box clickable template-board" @click="navigate(`/board/${board.slug}`)">
                                <div class="media-left">
                                    <avatar :value="board.media" class="is-48x48"></avatar>
                                </div>
                                <div class="media-content">
                                    <h4 class="widget-title">
                                        <n-link :to="`/board/${board.slug}`">{{board.title}}</n-link>
                                    </h4>
                                    <p>{{board.description}}</p>
                                    <small>3 Tasks</small>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div v-else class="columns is-multiline">
                        <div v-for="i in query.page_size" :key="i" class="column is-4">
                            <div class="box">
                                <div class="skeleton-board"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import Board from "../../components/Board";
    import Avatar from "../../components/Avatar";
    import BoardList from "../../components/BoardList";
    import BInput from "../../components/input/Input";

    export default {
        name: "Template",
        components: {BInput, BoardList, Avatar, Board},
        async asyncData({$axios, query}) {
            let tag = await $axios.$get(`/general/hash-tags/?for_model=board`);
            query.page_size = 9;
            query.page = query.page ? Number.parseInt(query.page) : 1;
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
                if (this.tag) {
                    this.query.tag = this.tag.id;
                } else {
                    this.query.tag = undefined;
                }
                this.query.page = 1;
                this.fetch();
            },
            async paging(flag) {
                if (flag) {
                    if (this.response.count / this.query.page_size > this.query.page) {
                        this.query.page++;
                    } else {
                        return;
                    }
                } else {
                    if (this.query.page > 1) {
                        this.query.page--;
                    } else {
                        return;
                    }
                }
                await this.fetch();
            }
        }
    }
</script>

<style lang="scss">
    .template-board {
        height: 100%;

        h4 {
            line-height: 1;
            font-weight: bold;
            margin-bottom: .25rem;
        }

        p {
            overflow: hidden;
            text-overflow: ellipsis;
            display: -webkit-box;
            -webkit-line-clamp: 2; /* number of lines to show */
            -webkit-box-orient: vertical;
        }
    }
</style>
