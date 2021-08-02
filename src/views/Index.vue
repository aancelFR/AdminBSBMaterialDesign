<template>
    <div class="container-fluid">
        <header-content title="DASHBOARD" title-small="Version 2.0.0" />
        <!-- Widgets -->
        <div class="row clearfix">
            <div class="col-lg-3 col-md-6 col-sm-6 col-xs-12">
                <div class="info-box bg-pink hover-expand-effect">
                    <div class="icon">
                        <i class="material-icons">playlist_add_check</i>
                    </div>
                    <div class="content">
                        <div class="text">NEW TASKS</div>
                        <div
                            class="number count-to"
                            data-from="0"
                            data-to="125"
                            data-speed="15"
                            data-fresh-interval="20"
                        />
                    </div>
                </div>
            </div>
            <div class="col-lg-3 col-md-6 col-sm-6 col-xs-12">
                <div class="info-box bg-cyan hover-expand-effect">
                    <div class="icon">
                        <i class="material-icons">help</i>
                    </div>
                    <div class="content">
                        <div class="text">NEW TICKETS</div>
                        <div
                            class="number count-to"
                            data-from="0"
                            data-to="257"
                            data-speed="1000"
                            data-fresh-interval="20"
                        />
                    </div>
                </div>
            </div>
            <div class="col-lg-3 col-md-6 col-sm-6 col-xs-12">
                <div class="info-box bg-light-green hover-expand-effect">
                    <div class="icon">
                        <i class="material-icons">forum</i>
                    </div>
                    <div class="content">
                        <div class="text">NEW COMMENTS</div>
                        <div
                            class="number count-to"
                            data-from="0"
                            data-to="243"
                            data-speed="1000"
                            data-fresh-interval="20"
                        />
                    </div>
                </div>
            </div>
            <div class="col-lg-3 col-md-6 col-sm-6 col-xs-12">
                <div class="info-box bg-orange hover-expand-effect">
                    <div class="icon">
                        <i class="material-icons">person_add</i>
                    </div>
                    <div class="content">
                        <div class="text">NEW VISITORS</div>
                        <div
                            class="number count-to"
                            data-from="0"
                            data-to="1225"
                            data-speed="1000"
                            data-fresh-interval="20"
                        />
                    </div>
                </div>
            </div>
        </div>
        <!-- #END# Widgets -->
        <!-- CPU Usage -->
        <component-card
            :header="{
                class: '',
                title: 'CPU USAGE (%)',
                titleClass: 'col-sm-6',
            }"
            :with-reduce-button="true"
            :with-remove-button="true"
            :init="initRealTimeChart"
            :tools="{
                dropdown: {
                    actions: [
                        {
                            label: 'Action',
                        },
                        {
                            label: 'Another action',
                        },
                        {
                            label: 'Something else here',
                            action: function (that) {
                                $.notify(
                                    {
                                        // options
                                        message: 'Hello World',
                                    },
                                    {
                                        // settings
                                        type: 'danger',
                                    }
                                );
                            },
                        },
                    ],
                    param: {
                        class: 'dropdown',
                        haspopup: true,
                        expanded: true,
                        removeIfEmpty: true,
                        icon: 'more_vert',
                        type: 'liCard',
                        ul: {
                            class: 'dropdown-menu pull-left',
                        },
                    },
                },
            }"
        >
            <template v-slot:tools>
                <div class="switch panel-switch-btn">
                    <span class="m-r-10 font-12">REAL TIME</span>
                    <label>
                        OFF
                        <input id="realtime" type="checkbox" checked />
                        <span class="lever switch-col-cyan" />ON
                    </label>
                </div>
            </template>
            <template v-slot:body>
                <div
                    id="real_time_chart"
                    class="dashboard-flot-chart flot-chart-reponsive"
                />
            </template>
            <template v-slot:footer>test de body</template>
        </component-card>
        <!-- #END# CPU Usage -->
        <div class="row clearfix">
            <!-- Visitors -->
            <div class="col-xs-12 col-sm-12 col-md-4 col-lg-4">
                <component-card
                    :header="{
                        class: '',
                        title: undefined,
                        titleClass: '',
                    }"
                    :body="{
                        class: 'bg-pink',
                    }"
                    :init="initSparkline"
                    :tools="{}"
                >
                    <template v-slot:body>
                        <div
                            class="sparkline"
                            data-type="line"
                            data-spot-radius="4"
                            data-highlight-spot-color="rgb(233, 30, 99)"
                            data-highlight-line-color="#fff"
                            data-min-spot-color="rgb(255,255,255)"
                            data-max-spot-color="rgb(255,255,255)"
                            data-spot-color="rgb(255,255,255)"
                            data-offset="90"
                            data-width="100%"
                            data-height="92px"
                            data-line-width="2"
                            data-line-color="rgba(255,255,255,0.7)"
                            data-fill-color="rgba(0, 188, 212, 0)"
                        >
                            12,10,9,6,5,6,10,5,7,5,12,13,7,12,11
                        </div>
                        <ul class="dashboard-stat-list">
                            <li>
                                TODAY
                                <span class="pull-right">
                                    <b>1 200</b>
                                    <small>USERS</small>
                                </span>
                            </li>
                            <li>
                                YESTERDAY
                                <span class="pull-right">
                                    <b>3 872</b>
                                    <small>USERS</small>
                                </span>
                            </li>
                            <li>
                                LAST WEEK
                                <span class="pull-right">
                                    <b>26 582</b>
                                    <small>USERS</small>
                                </span>
                            </li>
                        </ul>
                    </template>
                </component-card>
            </div>
            <!-- #END# Visitors -->
            <!-- Latest Social Trends -->
            <div class="col-xs-12 col-sm-12 col-md-4 col-lg-4">
                <component-card
                    :header="{
                        class: '',
                        title: undefined,
                        titleClass: '',
                    }"
                    :body="{
                        class: 'bg-cyan',
                    }"
                    :tools="{}"
                >
                    <template v-slot:body>
                        <div class="m-b--35 font-bold">
                            LATEST SOCIAL TRENDS
                        </div>
                        <ul class="dashboard-stat-list">
                            <li>
                                #socialtrends
                                <span class="pull-right">
                                    <i class="material-icons">trending_up</i>
                                </span>
                            </li>
                            <li>
                                #materialdesign
                                <span class="pull-right">
                                    <i class="material-icons">trending_up</i>
                                </span>
                            </li>
                            <li>#adminbsb</li>
                            <li>#freeadmintemplate</li>
                            <li>#bootstraptemplate</li>
                            <li>
                                #freehtmltemplate
                                <span class="pull-right">
                                    <i class="material-icons">trending_up</i>
                                </span>
                            </li>
                        </ul>
                    </template>
                </component-card>
            </div>
            <!-- #END# Latest Social Trends -->
            <!-- Answered Tickets -->
            <div class="col-xs-12 col-sm-12 col-md-4 col-lg-4">
                <component-card
                    :header="{
                        class: '',
                        title: undefined,
                        titleClass: '',
                    }"
                    :body="{
                        class: 'bg-teal',
                    }"
                    :tools="{}"
                >
                    <template v-slot:body>
                        <div class="font-bold m-b--35">ANSWERED TICKETS</div>
                        <ul class="dashboard-stat-list">
                            <li>
                                TODAY
                                <span class="pull-right">
                                    <b>12</b>
                                    <small>TICKETS</small>
                                </span>
                            </li>
                            <li>
                                YESTERDAY
                                <span class="pull-right">
                                    <b>15</b>
                                    <small>TICKETS</small>
                                </span>
                            </li>
                            <li>
                                LAST WEEK
                                <span class="pull-right">
                                    <b>90</b>
                                    <small>TICKETS</small>
                                </span>
                            </li>
                            <li>
                                LAST MONTH
                                <span class="pull-right">
                                    <b>342</b>
                                    <small>TICKETS</small>
                                </span>
                            </li>
                            <li>
                                LAST YEAR
                                <span class="pull-right">
                                    <b>4 225</b>
                                    <small>TICKETS</small>
                                </span>
                            </li>
                            <li>
                                ALL
                                <span class="pull-right">
                                    <b>8 752</b>
                                    <small>TICKETS</small>
                                </span>
                            </li>
                        </ul>
                    </template>
                </component-card>
            </div>
            <!-- #END# Answered Tickets -->
        </div>

        <div class="row clearfix">
            <!-- Task Info -->
            <div class="col-xs-12 col-sm-12 col-md-8 col-lg-8">
                <component-card
                    :header="{
                        class: '',
                        title: 'TASK INFOS',
                        titleClass: '',
                    }"
                    :tools="{
                        gap: '-5',
                        dropdown: {
                            actions: [
                                {
                                    label: 'Action',
                                },
                                {
                                    label: 'Another action',
                                },
                                {
                                    label: 'Something else here',
                                },
                            ],
                            param: {
                                class: 'dropdown',
                                haspopup: true,
                                expanded: true,
                                removeIfEmpty: true,
                                icon: 'more_vert',
                                type: 'liCard',
                                ul: {
                                    class: 'dropdown-menu pull-left',
                                },
                            },
                        },
                    }"
                >
                    <template v-slot:body>
                        <div class="table-responsive">
                            <table
                                class="table table-hover dashboard-task-infos"
                            >
                                <thead>
                                    <tr>
                                        <th>#</th>
                                        <th>Task</th>
                                        <th>Status</th>
                                        <th>Manager</th>
                                        <th>Progress</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>1</td>
                                        <td>Task A</td>
                                        <td>
                                            <span class="badge bg-green"
                                                >Doing</span
                                            >
                                        </td>
                                        <td>John Doe</td>
                                        <td>
                                            <div class="progress">
                                                <div
                                                    class="progress-bar bg-green"
                                                    role="progressbar"
                                                    aria-valuenow="62"
                                                    aria-valuemin="0"
                                                    aria-valuemax="100"
                                                    style="width: 62%;"
                                                />
                                            </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>2</td>
                                        <td>Task B</td>
                                        <td>
                                            <span class="badge bg-blue"
                                                >To Do</span
                                            >
                                        </td>
                                        <td>John Doe</td>
                                        <td>
                                            <div class="progress">
                                                <div
                                                    class="progress-bar bg-blue"
                                                    role="progressbar"
                                                    aria-valuenow="40"
                                                    aria-valuemin="0"
                                                    aria-valuemax="100"
                                                    style="width: 40%;"
                                                />
                                            </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>3</td>
                                        <td>Task C</td>
                                        <td>
                                            <span class="badge bg-light-blue"
                                                >On Hold</span
                                            >
                                        </td>
                                        <td>John Doe</td>
                                        <td>
                                            <div class="progress">
                                                <div
                                                    class="progress-bar bg-light-blue"
                                                    role="progressbar"
                                                    aria-valuenow="72"
                                                    aria-valuemin="0"
                                                    aria-valuemax="100"
                                                    style="width: 72%;"
                                                />
                                            </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>4</td>
                                        <td>Task D</td>
                                        <td>
                                            <span class="badge bg-orange"
                                                >Wait Approvel</span
                                            >
                                        </td>
                                        <td>John Doe</td>
                                        <td>
                                            <div class="progress">
                                                <div
                                                    class="progress-bar bg-orange"
                                                    role="progressbar"
                                                    aria-valuenow="95"
                                                    aria-valuemin="0"
                                                    aria-valuemax="100"
                                                    style="width: 95%;"
                                                />
                                            </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>5</td>
                                        <td>Task E</td>
                                        <td>
                                            <span class="badge bg-red"
                                                >Suspended</span
                                            >
                                        </td>
                                        <td>John Doe</td>
                                        <td>
                                            <div class="progress">
                                                <div
                                                    class="progress-bar bg-red"
                                                    role="progressbar"
                                                    aria-valuenow="87"
                                                    aria-valuemin="0"
                                                    aria-valuemax="100"
                                                    style="width: 87%;"
                                                />
                                            </div>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </template>
                </component-card>
            </div>
            <!-- #END# Task Info -->
            <!-- Browser Usage -->
            <div class="col-xs-12 col-sm-12 col-md-4 col-lg-4">
                <component-card
                    :header="{
                        class: '',
                        title: 'BROWSER USAGE',
                        titleClass: '',
                    }"
                    :init="initDonutChart"
                    :tools="{
                        dropdown: {
                            actions: [
                                {
                                    label: 'Action',
                                },
                                {
                                    label: 'Another action',
                                },
                                {
                                    label: 'Something else here',
                                },
                            ],
                            param: {
                                class: 'dropdown',
                                haspopup: true,
                                expanded: true,
                                removeIfEmpty: true,
                                icon: 'more_vert',
                                type: 'liCard',
                                ul: {
                                    class: 'dropdown-menu pull-left',
                                },
                            },
                        },
                    }"
                >
                    <template v-slot:body>
                        <div
                            id="donut_chart"
                            class="dashboard-donut-chart flot-chart-reponsive"
                        />
                    </template>
                </component-card>
            </div>
            <!-- #END# Browser Usage -->
        </div>
    </div>
</template>

<script>
export default {
    name: "Index",
    props: {
        realtime: {
            type: String,
            default: "on",
        },
        totalPoints: {
            type: Number,
            default: 110,
        },
    },
    data() {
        return {
            dataRandom: [],
            msg: "Welcome to Your Vue.js App",
        };
    },
    mounted() {
        // Widgets count
        $(".count-to").countTo();

        // Sales count to
        $(".sales-count-to").countTo({
            // eslint-disable-next-line no-unused-vars
            formatter: function (value, options) {
                return (
                    "$" +
                    value
                        .toFixed(2)
                        .replace(/(\d)(?=(\d\d\d)+(?!\d))/g, " ")
                        .replace(".", ",")
                );
            },
        });
    },
    methods: {
        getRandomData: function () {
            if (this.dataRandom.length > 0)
                this.dataRandom = this.dataRandom.slice(1);

            while (this.dataRandom.length < this.totalPoints) {
                var prev =
                    this.dataRandom.length > 0
                        ? this.dataRandom[this.dataRandom.length - 1]
                        : 50;
                var y = prev + Math.random() * 10 - 5;
                if (y < 0) {
                    y = 0;
                } else if (y > 100) {
                    y = 100;
                }

                this.dataRandom.push(y);
            }

            var res = [];
            for (var i = 0; i < this.dataRandom.length; ++i) {
                res.push([i, this.dataRandom[i]]);
            }

            return res;
        },
        initRealTimeChart: function () {
            // Real time ==========================================================================================
            var plot = $.plot("#real_time_chart", [this.getRandomData()], {
                series: {
                    shadowSize: 0,
                    color: "rgb(0, 188, 212)",
                },
                grid: {
                    borderColor: "#f3f3f3",
                    borderWidth: 1,
                    tickColor: "#f3f3f3",
                },
                lines: {
                    fill: true,
                },
                yaxis: {
                    min: 0,
                    max: 100,
                },
                xaxis: {
                    min: 0,
                    max: 100,
                },
            });
            window.addEventListener("resize", () => {
                plot.resize();
                plot.setupGrid();
                plot.draw();
            });
            var that = this;

            function updateRealTime() {
                plot.setData([that.getRandomData()]);
                plot.draw();

                var timeout;
                if (that.realtime === "on") {
                    timeout = setTimeout(updateRealTime, 320);
                } else {
                    clearTimeout(timeout);
                }
            }

            updateRealTime();

            $("#realtime").on("change", function () {
                that.realtime = this.checked ? "on" : "off";
                updateRealTime();
            });
            //= ===================================================================================================
        },

        initSparkline: function () {
            $(".sparkline").each(function () {
                var $this = $(this);
                $this.sparkline("html", $this.data());
            });
        },

        initDonutChart: function () {
            Morris.Donut({
                element: "donut_chart",
                data: [
                    {
                        label: "Chrome",
                        value: 37,
                    },
                    {
                        label: "Firefox",
                        value: 30,
                    },
                    {
                        label: "Safari",
                        value: 18,
                    },
                    {
                        label: "Opera",
                        value: 12,
                    },
                    {
                        label: "Other",
                        value: 3,
                    },
                ],
                colors: [
                    "rgb(233, 30, 99)",
                    "rgb(0, 188, 212)",
                    "rgb(255, 152, 0)",
                    "rgb(0, 150, 136)",
                    "rgb(96, 125, 139)",
                ],
                formatter: function (y) {
                    return y + "%";
                },
            });
        },
    },
};
</script>
