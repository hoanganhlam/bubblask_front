<template>
    <b-upload v-model="dropFiles" :multiple="multiple" drag-drop @input="handleInput">
        <div class="content has-text-centered">
            <p>
                <x-icon name="upload" size="is-large"></x-icon>
            </p>
            <p v-if="text">{{text}}</p>
        </div>
    </b-upload>
</template>

<script>
    import Upload from "./upload/Upload";
    export default {
        components: {
            'b-upload': Upload
        },
        props: {
            text: {},
            multiple: {
                type: Boolean,
                default: false
            }
        },
        data() {
            return {
                dropFiles: [],
                isLoading: false,
            }
        },
        name: 'upload',
        methods: {
            async handleInput(data) {
                let results = [];
                this.isLoading = true;
                if (this.multiple) {
                    for (let i = 0; i < data.length; i++) {
                        let res = await this.beforeUpload(data[i]);
                        results.push(res);
                    }
                } else {
                    let res = await this.beforeUpload(data);
                    results.push(res);
                }
                this.$emit('done', results);
                this.dropFiles = [];
                this.isLoading = false;
            },
            async beforeUpload(file) {
                let formData = new FormData();
                formData.append('path', file);
                formData.append('title', file.name);
                return await this.$axios.$post('/media/medias/', formData);
            },
        }
    }
</script>
