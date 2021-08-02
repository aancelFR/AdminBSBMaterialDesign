<template>
    <!-- Top Bar -->
    <nav class="navbar navbar-expand-md">
        <div class="navbar-brand-button text-center">
            <a class="navbar-brand ml-0 ml-xl-0 text-center" href="/home"
                ><span class="navbar-brand-all fadeIn animated">{{
                    largeTitle
                }}</span
                ><span class="navbar-brand-min fadeIn animated">{{
                    smallTitle
                }}</span>
            </a>
        </div>
        <div class="container-fluid">
            <div class="position-relative">
                <a
                    class="bars bars-mobile"
                    data-close="true"
                    @click="toggleMobileBar"
                />
            </div>
            <div class="position-relative">
                <a
                    class="bars bars-reduce"
                    href="#"
                    data-toggle="control-sidebar"
                    @click="toggleBarReduce"
                />
            </div>
            <a
                class="navbar-toggler"
                type=""
                data-toggle="collapse"
                data-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
            >
                <span class="navbar-toggler-icon" />
            </a>

            <div id="navbarSupportedContent" class="collapse navbar-collapse">
                <ul class="navbar-nav ml-auto">
                    <!-- Call Search -->
                    <li v-if="showSearchBar" class="nav-item">
                        <a
                            class="nav-link js-search"
                            data-close="true"
                            @click="$parent.$refs.SearchBar.showSearchBar()"
                            ><i class="material-icons">search</i></a
                        >
                    </li>
                    <!-- #END# Call Search -->
                    <li
                        v-for="(item, index) in items"
                        :key="index"
                        class="nav-item ml-auto"
                    >
                        <a class="nav-link" :href="item.href"
                            >{{ item.label
                            }}<i
                                v-if="item.icon != undefined"
                                class="material-icons"
                                >{{ item.icon }}</i
                            ></a
                        >
                    </li>
                    <!-- Notifications -->
                    <component-dropdown
                        :items="notifications.items"
                        :global="notifications.param"
                        :display-count="true"
                    ></component-dropdown>
                    <!-- #END# Notifications -->
                    <!-- Tasks -->
                    <component-dropdown
                        :items="task.items"
                        :global="task.param"
                        :display-count="true"
                    ></component-dropdown>
                    <!-- #END# Tasks -->
                    <li v-if="showRightSideBar" class="nav-item ml-auto">
                        <a
                            class="nav-link js-right-sidebar"
                            data-close="true"
                            @click="toggleRightSidebar"
                            ><i class="material-icons">more_vert</i></a
                        >
                    </li>
                </ul>
            </div>
        </div>
    </nav>
    <!-- #Top Bar -->
</template>

<script>
export default {
    name: "NavbarTop",
    props: {
        largeTitle: {
            type: String,
            default: "ADMINBSB - MATERIAL DESIGN",
        },
        smallTitle: {
            type: String,
            default: "A-MD",
        },
        showSearchBar: {
            type: Boolean,
            default: true,
        },
        showRightSideBar: {
            type: Boolean,
            default: true,
        },
        items: {
            type: Array,
            default: function () {
                //var that = this;
                return [
                    {
                        label: "test",
                        href: "https://google.fr",
                    },
                ];
            },
        },
        notifications: {
            type: Object,
            default: function () {
                //var that = this;
                return {
                    param: {
                        class: "dropdown nav-item",
                        haspopup: true,
                        expanded: true,
                        removeIfEmpty: true,
                        icon: "notifications",
                        type: "li",
                        header: "Notifications",
                        footer: {
                            label: "View All Notification",
                            callback: undefined,
                        },
                        ul: {
                            class: "dropdown-menu",
                        },
                        body: {
                            class: "",
                            type: "info",
                        },
                    },
                    items: [
                        {
                            type: undefined,
                            label: "12 new members joined",
                            icon: "person_add",
                            value: undefined,
                            date: window.moment().subtract(14, "minute"),
                            color: "light-green",
                        },
                        {
                            type: undefined,
                            color: "cyan",
                            icon: "add_shopping_cart",
                            label: "4 sales made",
                            date: window.moment().subtract(22, "minute"),
                            value: undefined,
                        },
                        {
                            type: undefined,
                            color: "red",
                            icon: "delete_forever",
                            labelStrong: "Nancy Doe",
                            label: "deleted account",
                            date: window.moment().subtract(3, "hour"),
                            value: undefined,
                        },
                        {
                            type: undefined,
                            color: "orange",
                            icon: "mode_edit",
                            labelStrong: "Nancy",
                            label: "changed name",
                            date: window.moment().subtract(2, "hour"),
                            value: undefined,
                        },
                        {
                            type: undefined,
                            color: "blue-grey",
                            icon: "comment",
                            labelStrong: "John",
                            label: "commented your post",
                            date: window.moment().subtract(4, "hour"),
                            value: undefined,
                        },
                        {
                            type: undefined,
                            color: "light-green",
                            icon: "cached",
                            labelStrong: "John",
                            label: "updated status",
                            date: window.moment().subtract(3, "hour"),
                            value: undefined,
                        },
                        {
                            type: undefined,
                            color: "purple",
                            icon: "settings",
                            label: "Settings updated",
                            date: window.moment().subtract(1, "days"),
                            value: undefined,
                        },
                    ],
                };
            },
        },
        task: {
            type: Object,
            default: function () {
                //var that = this;
                return {
                    param: {
                        class: "dropdown nav-item",
                        haspopup: true,
                        expanded: false,
                        icon: "flag",
                        number: 5,
                        type: "li",
                        header: "Task",
                        footer: {
                            label: "View All Tasks",
                            callback: undefined,
                        },
                        ul: {
                            class: "dropdown-menu",
                        },
                        body: {
                            class: "tasks",
                            type: "task",
                        },
                    },
                    items: [
                        {
                            type: undefined,
                            label: "Footer display issue",
                            icon: undefined,
                            value: 32,
                            date: undefined,
                            color: "pink",
                        },
                        {
                            type: undefined,
                            label: "Make new buttons",
                            icon: undefined,
                            value: 45,
                            date: undefined,
                            color: "cyan",
                        },
                        {
                            type: undefined,
                            label: "Create new dashboard",
                            icon: undefined,
                            value: 54,
                            date: undefined,
                            color: "teal",
                        },
                        {
                            type: undefined,
                            label: "Solve transition issue",
                            icon: undefined,
                            value: 65,
                            date: undefined,
                            color: "orange",
                        },
                        {
                            type: undefined,
                            label: "Answer Github questions",
                            icon: undefined,
                            value: 92,
                            date: undefined,
                            color: "purple",
                        },
                    ],
                };
            },
        },
    },
    mounted() {
        this.activate();
    },
    methods: {
        removeValue(prop, index) {
            this.$delete(eval("this." + prop + ".items"), index);
        },
        toggleBarReduce() {
            var $body = $("body");
            $body.toggleClass("ls-reduce").trigger("classChange");
            this.$root.$emit("LeftSideBar-setMenuHeight");
        },
        toggleMobileBar() {
            var $body = $("body");
            var $overlay = $(".overlay");
            if (
                $.AdminBSB.options.size.width <
                $.AdminBSB.options.leftSideBar.breakpointWidth
            ) {
                $body.toggleClass("overlay-open");
                if ($body.hasClass("overlay-open")) {
                    $overlay.fadeIn();
                } else {
                    $overlay.fadeOut();
                }
            }
        },
        toggleRightSidebar() {
            var $sidebar = $("#rightsidebar");
            var $overlay = $(".overlay");
            $sidebar.toggleClass("open");
            if ($(".right-sidebar").hasClass("open")) {
                $overlay.fadeIn();
            } else {
                $overlay.fadeOut();
            }
        },
        activate: function () {
            var $body = $("body");
            $.AdminBSB.options.size.width = $body.width();

            $(".navbar-collapse").on(
                "show.bs.collapse hide.bs.collapse",
                function (e) {
                    var $navbarCollapse = $(".navbar-collapse");
                    if (e.type === "hide") {
                        $navbarCollapse
                            .closest(".navbar")
                            .removeClass("collapseShow");
                    } else {
                        $navbarCollapse
                            .closest(".navbar")
                            .addClass("collapseShow");
                    }
                }
            );
            // Close collapse bar on click event
            $('.navbar [data-close="true"]').on("click", function () {
                var isVisible = $(".navbar-toggler").is(":visible");
                var $navbarCollapse = $(".navbar-collapse");

                if (isVisible) {
                    $navbarCollapse
                        .closest(".navbar")
                        .removeClass("collapseShow");
                    $navbarCollapse.slideUp(function () {
                        $navbarCollapse
                            .removeClass("in")
                            .removeClass("show")
                            .removeAttr("style");
                    });
                }
            });
        },
    },
};
</script>
