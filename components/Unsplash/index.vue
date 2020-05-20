<template>
    <div class="unsplash">
        <div class="field">
            <label>
                <input v-model="search" @input="handleInput" class="input" placeholder="Search"/>
            </label>
        </div>
        <div class="field">
            <div class="columns is-variable is-1 is-multiline">
                <div v-for="img in response.results" class="column is-6" :key="img.id">
                    <div class="image clickable is-3by1" @click="select(img)"
                         v-bind:class="{'selected': data && data.id === img.id}">
                        <img :src="img.urls.regular" :alt="img.alt_description">
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import {debounce} from 'lodash'

    export default {
        name: "index.vue",
        props: {
            value: {
                default: '',
                type: Object
            }
        },
        data() {
            return {
                search: 'working',
                response: {
                    total: 0,
                    results: []
                },
                data: this.value
            }
        },
        methods: {
            select(img) {
                if (this.data && img.id === this.data.id) {
                    this.data = null
                } else {
                    this.data = this.cleanData(img, ['id', 'urls', 'user', 'alt_description'])
                }
            },
            fetch() {
                this.$axios.$get('/general/unsplash/', {
                    params: {
                        search: this.search
                    }
                }).then(res => {
                    this.response = res
                })
            },
            handleInput: debounce(function () {
                this.fetch()
            }, 1000),
        },
        watch: {
            data() {
                this.$emit('input', this.data)
                this.$store.commit('config/SET_SETTING_BACKGROUND', this.data)
            }
        },
        created() {
            this.fetch()
        }
    }
</script>

<style lang="scss">
    .unsplash {
        min-width: 400px;
        padding: 1rem 0 0;

        .image img {
            object-fit: cover;
        }

        .image.selected {
            position: relative;

            &:after {
                z-index: 1;
                position: absolute;
                top: 0;
                left: 0;
                right: 0;
                bottom: 0;
                background: rgba(0, 0, 0, 0.3);
                content: "";
            }
        }

        .field:not(:last-child) {
            margin-bottom: 1.5rem;
        }

        .column {
            padding-top: var(--columnGap);
            padding-bottom: var(--columnGap);
        }
    }
</style>
