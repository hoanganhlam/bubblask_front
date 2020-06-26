<template>
    <div>
        <div class="hero is-dark">
            <div class="hero-body">
                <div class="container small">
                    <h1 class="title">LeaderBoard</h1>
                    <div class="subtitle">See how others work</div>
                </div>
            </div>
        </div>
        <div class="hero">
            <div class="hero-body">
                <div class="container medium">
                    <div class="columns is-multiline">
                        <div class="column is-6" v-for="(u, i) in response.results" :key="i">
                            <div class="box user clickable" @click="navigate(`/${u.username}`)">
                                <div class="media">
                                    <div class="media-left">{{i + 1}}</div>
                                    <div class="media-left">
                                        <Avatar class="is-32x32" :value="u.profile.media"/>
                                    </div>
                                    <div class="media-content">
                                        <div class="">
                                            <n-link :to="`/${u.username}`">{{convertName(u)}}</n-link>
                                        </div>
                                    </div>
                                    <div v-if="u.profile.extra" class="media-right"><small>{{(u.profile.extra.temp_score / (60 * 60)).toFixed(2)}}h</small>
                                    </div>
                                </div>
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

<style lang="scss">
    .user {
        .media-content a {
            color: #333333;
            font-weight: bold;
        }
    }
</style>
