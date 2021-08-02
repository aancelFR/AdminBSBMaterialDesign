<template>
    <div id="app">
        <!-- Page Loader -->
        <div class="page-loader-wrapper">
            <div class="loader">
                <div class="preloader">
                    <div class="spinner-layer pl-red">
                        <div class="circle-clipper left">
                            <div class="circle" />
                        </div>
                        <div class="circle-clipper right">
                            <div class="circle" />
                        </div>
                    </div>
                </div>
                <p>Please wait...</p>
            </div>
        </div>
        <!-- #END# Page Loader -->
        <!-- Overlay For Sidebars -->
        <div class="overlay" />
        <!-- #END# Overlay For Sidebars -->
        <components-search-bar ref="SearchBar" />
        <components-navbar-top ref="NavbarTop" />
        <section>
            <components-left-side-bar ref="LeftSideBar" />
            <components-right-side-bar ref="RightSideBar" />
        </section>

        <section class="content">
            <router-view />
        </section>
    </div>
</template>

<script>
export default {
    name: "App",
    props: {
        trackingId: {
            type: String,
            default: "",
        },
    },
    watch: {
        // eslint-disable-next-line no-unused-vars
        $route(to, from) {
            this.$root.$emit("App-initElement");
        },
    },
    mounted: function () {
        this.initElement();
        if (this.trackingId != "") {
            this.loadTracking();
        }
        this.$root.$on("App-initElement", () => {
            this.initElement();
        });
    },
    methods: {
        initElement: function () {
            $.AdminBSB.browser.activate();
            $.AdminBSB.input.activate();
            $.AdminBSB.select.activate();

            setTimeout(function () {
                $(".page-loader-wrapper").fadeOut();
            }, 50);
        },
        // eslint-disable-next-line no-unused-vars
        loadTracking: function () {
            (function (i, s, o, g, r, a, m) {
                i["GoogleAnalyticsObject"] = r;
                i[r] =
                    i[r] ||
                    function () {
                        (i[r].q = i[r].q || []).push(arguments);
                    };
                // eslint-disable-next-line
                (i[r].l = 1 * new Date());
                (a = s.createElement(o)), (m = s.getElementsByTagName(o)[0]);
                a.async = 1;
                a.src = g;
                m.parentNode.insertBefore(a, m);
            })(
                window,
                document,
                "script",
                "https://www.google-analytics.com/analytics.js",
                "ga"
            );

            // eslint-disable-next-line no-undef
            ga("create", this.trackingId, "auto");
            // eslint-disable-next-line no-undef
            ga("send", "pageview");
        },
    },
};
</script>
