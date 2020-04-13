<template>
    <div></div>
</template>

<script>
    export default {
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
                let results = []
                this.isLoading = true
                if (this.multiple) {
                    for (let i = 0; i < data.length; i++) {
                        let res = await this.beforeUpload(data[i])
                        results.push(res)
                    }
                } else {
                    let res = await this.beforeUpload(data)
                    results.push(res)
                }
                this.$emit('done', results)
                this.dropFiles = []
                this.isLoading = false
            },
            async beforeUpload(file) {
                let formData = new FormData()
                formData.append('path', file)
                formData.append('title', file.name)
                return await this.$api.media.post(formData)
            },
        }
    }
</script>
