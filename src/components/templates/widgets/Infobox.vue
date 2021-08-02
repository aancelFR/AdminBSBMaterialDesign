<template>
    <div
        :class="[
            backgroundType == 'global'
                ? 'info-box-2'
                : backgroundType == 'right'
                ? 'info-box-3'
                : 'info-box',
            zoom ? 'hover-zoom-effect' : '',
            hover ? 'hover-expand-effect' : '',
            backgroundColor ? 'bg-' + backgroundColor : '',
        ]"
    >
        <div
            :class="[
                'icon',
                iconColor && backgroundType != 'right' ? 'bg-' + iconColor : '',
            ]"
        >
            <i
                v-if="icon != 'chart'"
                :class="[
                    'material-icons',
                    iconColor && backgroundType == 'right'
                        ? 'col-' + iconColor
                        : '',
                ]"
                >{{ icon }}</i
            >
            <div
                v-if="icon == 'chart'"
                :class="['chart', 'chart-' + chart.type]"
            >
                {{ chart.value }}
            </div>
        </div>
        <div class="content">
            <div class="text">
                {{ text }}
            </div>
            <div
                :class="['number', typeDetail == 'countto' ? 'count-to' : '']"
                :data-from="[counto.from != undefined ? counto.from : 0]"
                :data-to="[counto.to != undefined ? counto.to : 100]"
                :data-speed="[counto.speed != undefined ? counto.speed : 1000]"
                :data-fresh-interval="[
                    counto.interval != undefined ? counto.interval : 20,
                ]"
                @load="$(this).countTo()"
            >
                {{ detail }}
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "Infobox",
    props: {
        init: {
            type: Function,
            default: function () {
                return function () {};
            },
        },
        chart: {
            type: Object,
            default: function () {
                return {
                    value: "",
                    type: "",
                    options: {},
                };
            },
        },
        backgroundType: {
            type: String,
            default: "",
        },
        hover: {
            type: Boolean,
            default: false,
        },
        zoom: {
            type: Boolean,
            default: false,
        },
        iconColor: {
            type: String,
            default: "",
        },
        backgroundColor: {
            type: String,
            default: "",
        },
        icon: {
            type: String,
            default: "",
        },
        text: {
            type: String,
            default: "",
        },
        detail: {
            type: String,
            default: "",
        },
        typeDetail: {
            type: String,
            default: "text",
        },
        counto: {
            type: Object,
            default: function () {
                return { from: 0, to: 100, speed: 1000, interval: 20 };
            },
        },
    },
    mounted: function () {
        this.init();
        this.activeCountTo();
        this.activeChart();
    },
    methods: {
        activeCountTo: function () {
            $(this.$el).find(".count-to").countTo();
        },
        activeChart: function () {
            var that = this;
            var options = {
                type: that.chart.type,
            };
            if (typeof this.chart.options === "object") {
                options = Object.assign(options, this.chart.options);
            }
            if (this.backgroundType == "right") {
                if (this.chart.type == "line") {
                    if (options.lineColor == undefined)
                        options.lineColor = this.$getColorsList[this.iconColor][
                            "code"
                        ];
                    if (options.spotColor == undefined)
                        options.spotColor = this.$getColorsList[this.iconColor][
                            "code"
                        ];
                    if (options.maxSpotColor == undefined)
                        options.maxSpotColor = this.$getColorsList[
                            this.iconColor
                        ]["code"];
                    if (options.minSpotColor == undefined)
                        options.minSpotColor = this.$getColorsList[
                            this.iconColor
                        ];
                    if (options.highlightSpotColor == undefined)
                        options.highlightSpotColor = this.$getColorsList[
                            this.iconColor
                        ]["code"];
                } else if (this.chart.type == "bar") {
                    if (options.barColor == undefined)
                        options.barColor = this.$getColorsList[this.iconColor][
                            "code"
                        ];
                    if (options.negBarColor == undefined)
                        options.negBarColor = this.$getColorsList[
                            this.iconColor
                        ]["code"];
                } else if (this.chart.type == "pie") {
                    if (options.sliceColors == undefined) {
                        options.sliceColors = [];
                        var nbValue = this.chart.value.split(",").length;
                        if (nbValue > 10) {
                            nbValue = 10;
                        }
                        while (nbValue-- > 0) {
                            options.sliceColors.push(
                                this.$hexToRgba(
                                    this.$getColorsList[this.iconColor]["code"],
                                    1 - nbValue / 10
                                )
                            );
                        }
                    }
                }
            }
            $(this.$el).find(".chart").sparkline(undefined, options);
        },
    },
};
</script>
