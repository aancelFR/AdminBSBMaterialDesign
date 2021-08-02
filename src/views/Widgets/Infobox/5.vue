<template>
    <div class="container-fluid">
        <header-content title="Infobox-3" />
        <div v-for="(section, index) in infoboxs" :key="index">
            <header-div
                :title="section.title"
                :title-small="section.description"
            ></header-div>
            <div class="row clearfix">
                <div
                    v-for="(infobox, key) in section.items"
                    :key="key"
                    class="col-lg-3 col-md-6 col-sm-6 col-xs-12"
                >
                    <component-infobox
                        :icon-color="infobox.icon_color"
                        :background-color="infobox.background_color"
                        :background-type="infobox.background_type"
                        :icon="infobox.icon"
                        :text="infobox.text"
                        :type-detail="infobox.type"
                        :counto="infobox.counto"
                        :hover="infobox.hover"
                        :zoom="infobox.zoom"
                        :detail="infobox.detail"
                        :chart="infobox.chart"
                    ></component-infobox>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "WidgetsInfobox3",
    props: {
        infoboxs: {
            type: Array,
            default: function () {
                return [
                    {
                        title: "COUNTER ANIMATION",
                        description:
                            "Taken from <a href='https://github.com/mhuggins/jquery-countTo' target='_blank'>github.com/mhuggins/jquery-countTo</a>",
                        items: [
                            {
                                icon_color: "red",
                                background_type: "right",
                                icon: "shopping_cart",
                                text: "NEW ORDERS",
                                type: "countto",
                                counto: {
                                    to: 125,
                                },
                            },
                            {
                                icon_color: "indigo",
                                background_type: "right",
                                icon: "face",
                                text: "NEW MEMBERS",
                                type: "countto",
                                counto: {
                                    to: 257,
                                },
                            },
                            {
                                icon_color: "purple",
                                background_type: "right",
                                icon: "bookmark",
                                text: "BOOKMARKS",
                                type: "countto",
                                counto: {
                                    to: 117,
                                },
                            },
                            {
                                icon_color: "deep-purple",
                                background_type: "right",
                                icon: "favorite",
                                text: "LIKES",
                                type: "countto",
                                counto: {
                                    to: 1432,
                                    speed: 1500,
                                },
                            },
                        ],
                    },
                    {
                        title: "HOVER ZOOM EFFECT",
                        items: [
                            {
                                zoom: true,
                                icon_color: "pink",
                                background_type: "right",
                                icon: "email",
                                text: "MESSAGES",
                                detail: "15",
                            },
                            {
                                zoom: true,
                                icon_color: "blue",
                                background_type: "right",
                                icon: "devices",
                                text: "CPU USAGE",
                                detail: "92%",
                            },
                            {
                                zoom: true,
                                icon_color: "light-blue",
                                background_type: "right",
                                icon: "access_alarm",
                                text: "ALARM",
                                detail: "07:00 AM",
                            },
                            {
                                zoom: true,
                                icon_color: "cyan",
                                background_type: "right",
                                icon: "gps_fixed",
                                text: "LOCATION",
                                detail: "Turkey",
                            },
                        ],
                    },
                    {
                        title: "HOVER EXPAND EFFECT",
                        items: [
                            {
                                hover: true,
                                icon_color: "teal",
                                background_type: "right",
                                icon: "equalizer",
                                text: "BOUNCE RATE",
                                detail: "62%",
                            },
                            {
                                hover: true,
                                icon_color: "green",
                                background_type: "right",
                                icon: "flight_takeoff",
                                text: "FLIGHT",
                                detail: "02:59 PM",
                            },
                            {
                                hover: true,
                                icon_color: "light-green",
                                background_type: "right",
                                icon: "battery_charging_full",
                                text: "BATTERY",
                                detail: "Charging",
                            },
                            {
                                hover: true,
                                icon_color: "lime",
                                background_type: "right",
                                icon: "brightness_low",
                                text: "BRIGHTNESS RATE",
                                detail: "40%",
                            },
                        ],
                    },
                    {
                        title: "CHART SAMPLES",
                        items: [
                            {
                                chart: {
                                    value: "6,8,6,8,10",
                                    type: "bar",
                                    options: {
                                        barWidth: "8px",
                                        height: "34px",
                                    },
                                },
                                icon_color: "yellow",
                                background_type: "right",
                                icon: "chart",
                                text: "WEBSITE TRAFFICS",
                                detail: "127 526",
                            },
                            {
                                chart: {
                                    value: "6,8,6,8,10",
                                    type: "bar",
                                    options: {
                                        barWidth: "8px",
                                        height: "34px",
                                    },
                                },
                                icon_color: "amber",
                                background_type: "right",
                                icon: "chart",
                                text: "WEBSITE IMPRESSIONS",
                                detail: "457 512",
                            },
                            {
                                chart: {
                                    value: "30, 35, 25, 8",
                                    type: "pie",
                                    options: {
                                        height: "50px",
                                    },
                                },
                                icon_color: "orange",
                                background_type: "right",
                                icon: "chart",
                                text: "USAGE",
                                detail: "98%",
                            },
                            {
                                chart: {
                                    value: "30, 35, 25, 10",
                                    type: "pie",
                                    options: {
                                        height: "50px",
                                    },
                                },
                                icon_color: "deep-orange",
                                background_type: "right",
                                icon: "chart",
                                text: "USAGE",
                                detail: "100%",
                            },
                            {
                                chart: {
                                    value: "9,4,6,5,6,4,7,3",
                                    type: "line",
                                    options: {
                                        width: "60px",
                                        height: "45px",
                                        lineWidth: 1.3,
                                        fillColor: "rgba(0,0,0,0)",
                                        spotRadius: 3,
                                    },
                                },
                                icon_color: "brown",
                                background_type: "right",
                                icon: "chart",
                                text: "DAILY SALES",
                                detail: "$12 526",
                            },
                            {
                                chart: {
                                    value: "9,4,6,5,6,4,7,3",
                                    type: "line",
                                    options: {
                                        width: "60px",
                                        height: "45px",
                                        lineWidth: 1.3,
                                        fillColor: "rgba(0,0,0,0)",
                                        spotRadius: 3,
                                    },
                                },
                                icon_color: "grey",
                                background_type: "right",
                                icon: "chart",
                                text: "TOTAL SALES",
                                detail: "$125 543",
                            },
                            {
                                chart: {
                                    value: "4,6,-3,-1,2,-2,4,6",
                                    type: "bar",
                                    options: {
                                        barWidth: "8px",
                                        height: "34px",
                                    },
                                },
                                icon_color: "blue-grey",
                                background_type: "right",
                                icon: "chart",
                                text: "CURRENCY",
                                detail: "$1 063",
                            },
                            {
                                chart: {
                                    value: "4,6,-3,-1,2,-2,4,6",
                                    type: "bar",
                                    options: {
                                        barWidth: "8px",
                                        height: "34px",
                                    },
                                },
                                icon_color: "black",
                                background_type: "right",
                                icon: "chart",
                                text: "CURRENCY",
                                detail: "$1 125",
                            },
                        ],
                    },
                ];
            },
        },
    },
    methods: {},
};
</script>
