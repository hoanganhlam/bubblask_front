<template>
    <div>
        <div class="hero is-light">
            <div class="hero-body">
                <div class="container pomodoro content">
                    <div class="image avatar is-96x96">
                        <img src="https://cdn.shopify.com/s/files/1/0257/1675/t/152/assets/merialdo-95x95_900x465_crop_center.png?v=7923425964918557276" alt="">
                    </div>
                    <h1 class="title is-4">PIERGIORGIO GROSSI</h1>
                </div>
            </div>
        </div>
        <div class="section">
            <div class="container">
                <div class="columns is-multiline">
                    <div class="column is-12">
                        <calendar-heat-map :values="[{ date: new Date('4/8/2020'), count: 16 },{ date: new Date('4/5/2020'), count: 1 }]" :end-date="new Date()"/>
                    </div>
                    <div class="column is-6">
                        <div class="card">
                            <div class="card-content">
                                <div class="media">
                                    <div class="media-content">
                                        <h4>AVG. Day focus</h4>
                                    </div>
                                    <div class="media-right">
                                        <span class="title is-1">1</span>
                                        <span>d</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="column is-6">
                        <div class="card">
                            <div class="card-content">
                                <div class="media">
                                    <div class="media-content">
                                        <h4>AVG. Delays/Interruptions</h4>
                                    </div>
                                    <div class="media-right">
                                        <span class="title is-1">8</span>
                                        <span>task</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="column is-6">
                        <div class="card">
                            <div class="card-content">
                                <div class="media">
                                    <div class="media-content">
                                        <h4>Accurate estimates</h4>
                                    </div>
                                    <div class="media-right">
                                        <span class="title is-1">100</span>
                                        <span>%</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="column is-6">
                        <div class="card">
                            <div class="card-content">
                                <div class="media">
                                    <div class="media-content">
                                        <h4>AVG. Hours of work</h4>
                                    </div>
                                    <div class="media-right">
                                        <span class="title is-1">8</span>
                                        <span>h/day</span>
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
    import CalendarHeatMap from "../../components/CalendarHeatMap/index.vue";
    export default {
        name: "index",
        components: {
            CalendarHeatMap
        }
    }
</script>

<style scoped>

</style>
