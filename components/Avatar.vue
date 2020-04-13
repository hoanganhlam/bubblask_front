<template>
    <div class="image avatar relative" v-bind:class="{'initials': !isUpdating && !(data && data.sizes)}">
        <Upload v-if="isUpdating" class="upload" @done="handleUpload"></Upload>
        <img class="is-round" v-else-if="data && data.sizes"
             :src="cleanURI(data.sizes['thumb_270_270'] ? data.sizes['thumb_270_270'] : data.sizes['270_270'])" alt="">
        <span v-else-if="name">{{avatarName(name, 2)}}</span>
        <img v-else :src="`/avatar/${getRandomInt(4)}.png`" alt="">
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

<style lang="scss"></style>
