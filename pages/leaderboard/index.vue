<template>
    <div>
        <div class="hero is-primary">
            <div class="hero-body">
                <div class="container small">
                    <h1 class="title">LeaderBoard</h1>
                    <div class="subtitle">See how others work</div>
                </div>
            </div>
        </div>
        <div class="hero">
            <div class="hero-body">
                <div class="container small">

                    <div class="box" v-for="(u, i) in response.results" :key="i">
                        <div class="media">
                            <div class="media-left">
                                {{i + 1}}
                            </div>
                            <div class="media-left">
                                <Avatar class="is-48x48"/>
                            </div>
                            <div class="media-content">
                                <div class="title is-6">
                                    <n-link :to="`/${u.username}`">{{convertName(u)}}</n-link>
                                </div>
                            </div>
                            <div class="media-right"><small>67 hours</small>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import Avatar from "../../components/Avatar";

    export default {
        name: "LeaderBoard",
        components: {Avatar},
        async asyncData({$axios}) {
            return {
                response: await $axios.$get('/auth/users/')
            }
        }
    }
</script>

<style scoped>

</style>
