<template>
    <div>
        <div class="hero is-fullheight is-warning">
            <div class="hero-body">
                <div class="container">
                    <h1 class="title">LeaderBoard</h1>
                    <div class="subtitle">See how others work</div>
                    <div class="box" v-for="i in 9" :key="i">
                        <div class="media">
                            <div class="media-left">
                                {{i}}
                            </div>
                            <div class="media-left">
                                <Avatar/>
                            </div>
                            <div class="media-content">
                                <div class="title is-6">
                                    <n-link :to="'lam_hoang'">Lam Hoang</n-link>
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
        components: {Avatar}
    }
</script>

<style scoped>

</style>
