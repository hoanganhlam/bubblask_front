<template>
    <div :style="style">
        <canvas ref="myChart"></canvas>
    </div>
</template>

<script>
    const Chart = require('chart.js');
    export default {
        name: "Chart",
        props: {
            width: {
                type: String,
                default: '100%'
            },
            height: {
                type: String,
                default: '250px'
            },
            data: {
                default: () => [],
                type: Array
            }
        },
        computed: {
            style() {
                return {
                    width: this.width,
                    height: this.height
                }
            }
        },
        methods: {
            init() {
                const ctx = this.$refs.myChart.getContext('2d');
                Chart.defaults.global.defaultColor = '#333333';
                Chart.defaults.global.defaultFontColor = '#333333';
                Chart.defaults.global.defaultFontSize = 14;
                new Chart(ctx, {
                    type: 'line',
                    data: {
                        labels: ['0H', '1H', '2H', '3H', '4H', '5H', '6H', '7H', '8H', '9H', '10H', '11H', '12H', '13H', '14H', '15H', '16H', '17H', '18H', '19H', '20H', '21H', '22H', '23H'],
                        datasets: [{
                            label: "",
                            data: this.data,
                            borderWidth: 0
                        }]
                    },
                    options: {
                        responsive: true,
                        maintainAspectRatio: false,
                    }
                });
            }
        },
        mounted() {
            this.init();
        },
        watch: {
            data() {
                this.init()
            }
        }
    }
</script>

<style scoped>

</style>
