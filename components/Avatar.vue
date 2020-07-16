<template>
    <div class="image avatar relative" v-bind:class="{'initials': !isUpdating && !(data && data.sizes)}">
        <Upload v-if="isUpdating" class="upload" @done="handleUpload"></Upload>
        <img class="is-round" v-else-if="data && data.sizes"
             :src="cleanURI(data.sizes[imageSize] ? data.sizes[imageSize] : data.sizes[imageSize])" alt="">
        <span v-else-if="name">{{avatarName(name, 2)}}</span>
        <img v-else-if="!canUpdate" :src="`/avatar/${getRandomInt(4)}.png`" alt="">
        <div v-else class="image-blank"></div>
        <div v-if="canUpdate" class="medal" @click="isUpdating = !isUpdating">
            <x-icon size="is-small" :name="isUpdating ? 'close' : 'upload'"></x-icon>
        </div>
        <div v-if="canUpdate && data" class="delete" @click="data = null"></div>
    </div>
</template>

<script>
    import Upload from "./Upload";

    export default {
        name: "Avatar",
        components: {
            Upload
        },
        props: {
            canUpdate: {type: Boolean, default: false},
            value: {
                default: null,
                type: Object
            },
            name: {
                default: null
            },
            icon: {
                default: 'account-circle-outline',
                type: String
            },
            imageSize: {
                default: 'thumb_96_96',
                type: String
            }
        },
        data() {
            return {
                data: this.value,
                isUpdating: false
            }
        },
        methods: {
            handleUpload(files) {
                if (files.length) {
                    this.data = files[0]
                    this.isUpdating = false;
                }
            },
            getRandomInt(max) {
                return Math.floor(Math.random() * Math.floor(max));
            }
        },
        watch: {
            data() {
                this.$emit('input', this.data)
            },
            value() {
                this.data = this.value
            }
        }
    }
</script>

<style lang="scss">
    .avatar {
        position: relative;

        img {
            border-radius: 5px;
        }

        .medal,
        .delete {
            z-index: 1;
            position: absolute;
            right: .75rem;
        }

        .medal {
            top: .75rem;
            cursor: pointer;
        }

        .delete {
            bottom: .75rem;
        }

        .image-blank {
            min-height: 150px;
        }

        &:before {
            position: absolute;
            bottom: -.25rem;
            right: -.25rem;
            width: .65rem;
            height: .65rem;
            border-radius: 2px;
            content: ""
        }

        &.online:before {
            background: #d8ab34;
        }

        &.offline:before {
            background: #dddddd;
        }
    }
</style>
