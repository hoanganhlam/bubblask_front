<template>
    <b-field class="selector">
        <div v-if="label" class="level is-mobile" slot="label">
            <div class="level-left">{{ label }}</div>
            <div class="level-right">
                <slot></slot>
            </div>
        </div>
        <b-dropdown class="is-fullwidth">
            <div slot="trigger" class="card is-clickable">
                <div class="card-content">
                    <div class="media">
                        <div class="media-left">
                            <avatar :value="value ? value.profile.media : null" class="is-16x16"/>
                        </div>
                        <div class="media-content">{{ value ? convertName(value) : `Find collaborator` }}</div>
                    </div>
                </div>
            </div>
            <b-dropdown-item v-if="!disabled" custom>
                <b-field>
                    <b-input @input="handle_input" icon="search" placeholder="Search"/>
                </b-field>
            </b-dropdown-item>
            <b-dropdown-item custom v-for="p in response.results" :key="p.id"
                             class="media is-clickable" @click.native="select(p)">
                <div class="media-left">
                    <avatar :value="p.profile.media" class="is-32x32"/>
                </div>
                <div class="media-content">{{ convertName(p) }}</div>
                <div class="media-right">
                    <b-icon :icon="value && value.id === p.id ? 'square' : 'square-outline'"></b-icon>
                </div>
            </b-dropdown-item>
        </b-dropdown>
    </b-field>
</template>

<script>
import {debounce} from "lodash";
import Avatar from "@/components/Avatar";
import BInput from "@/components/input/Input";

export default {
    name: "PostSelector",
    components: {Avatar, BInput},
    props: {
        label: String,
        query: {
            default: () => {
                return {}
            },
            type: Object
        },
        value: {},
        type: {
            default: 'plant',
            type: String
        },
        disabled: {
            type: Boolean,
            default: false
        }
    },
    data() {
        return {
            response: {
                results: [],
                count: 0
            },
            page: 1
        }
    },
    methods: {
        async fetch(text) {
            this.response = await this.$axios.$get('/auth/users/', {
                search: text,
                ...this.query,
                page_size: 5,
                type: this.type,
                page: this.page
            })
        },
        handle_input: debounce(function (text) {
            if (!this.disabled) {
                this.fetch(text);
            }
        }, 800),
        select(p) {
            if (this.disabled) return;
            let data = p;
            if (this.value && p.id === this.value.id) {
                data = null;
            }
            this.$emit('input', data);
        }
    },
    watch: {
        "query.taxonomies": {
            deep: true,
            handler: function () {
                this.page = 1;
                this.fetch(null);
            }
        }
    }
}
</script>

<style lang="scss">
.selector {
    .media {
        align-items: center;

        &:not(:last-child) {
            margin-bottom: 0;
        }

        & + .media {
            margin-top: 0;
            padding-top: .5rem;
        }
    }

    .card {
        position: unset;
        box-shadow: unset;
    }

    .dropdown-content {
        min-width: 350px;
    }

    .card-content {
        padding: .25rem .75rem !important;
    }
}
</style>
