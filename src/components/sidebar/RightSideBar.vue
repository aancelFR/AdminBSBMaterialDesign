<template>
    <!-- Right Sidebar -->
    <aside id="rightsidebar" class="right-sidebar">
        <ul role="tablist" :class="['nav nav-tabs', 'tab-col-' + currentTheme]">
            <li role="presentation" class="nav-item">
                <a
                    href="#skins"
                    data-toggle="tab"
                    class="nav-link active"
                    aria-controls="skins"
                    aria-selected="true"
                    >SKINS</a
                >
            </li>
            <li role="presentation" class="nav-item">
                <a
                    href="#settings"
                    data-toggle="tab"
                    class="nav-link"
                    aria-controls="settings"
                    aria-selected="false"
                    >SETTINGS</a
                >
            </li>
        </ul>
        <div class="tab-content">
            <div
                id="skins"
                role="tabpanel"
                class="tab-pane fade show active"
                aria-labelledby="home-tab"
            >
                <ul class="choose-skin">
                    <li
                        v-for="(color, index) in this.$getColorsList"
                        :key="index"
                        :data-theme="index"
                        :class="[index == currentTheme ? 'active' : '']"
                        @click="skinChanger(index)"
                    >
                        <div :class="[index]" />
                        <span>{{ color.name }}</span>
                    </li>
                </ul>
            </div>
            <div
                id="settings"
                role="tabpanel"
                class="tab-pane fade"
                aria-labelledby="settings-tab"
            >
                <div class="settings">
                    <p>GENERAL SETTINGS</p>
                    <ul class="setting-list">
                        <li>
                            <span>Report Panel Usage</span>
                            <div class="switch">
                                <label
                                    ><input type="checkbox" checked /><span
                                        class="lever"
                                /></label>
                            </div>
                        </li>
                        <li>
                            <span>Email Redirect</span>
                            <div class="switch">
                                <label
                                    ><input type="checkbox" /><span
                                        class="lever"
                                /></label>
                            </div>
                        </li>
                    </ul>
                    <p>SYSTEM SETTINGS</p>
                    <ul class="setting-list">
                        <li>
                            <span>Notifications</span>
                            <div class="switch">
                                <label
                                    ><input type="checkbox" checked /><span
                                        class="lever"
                                /></label>
                            </div>
                        </li>
                        <li>
                            <span>Auto Updates</span>
                            <div class="switch">
                                <label
                                    ><input type="checkbox" checked /><span
                                        class="lever"
                                /></label>
                            </div>
                        </li>
                    </ul>
                    <p>ACCOUNT SETTINGS</p>
                    <ul class="setting-list">
                        <li>
                            <span>Offline</span>
                            <div class="switch">
                                <label
                                    ><input type="checkbox" /><span
                                        class="lever"
                                /></label>
                            </div>
                        </li>
                        <li>
                            <span>Location Permission</span>
                            <div class="switch">
                                <label
                                    ><input type="checkbox" checked /><span
                                        class="lever"
                                /></label>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </aside>
    <!-- #END# Right Sidebar -->
</template>

<script>
export default {
    name: "RightSideBar",
    computed: {
        currentTheme() {
            return this.$store.getters.currentTheme;
        },
    },
    mounted: function () {
        this.$store.dispatch("changeTheme", this.$store.getters.currentTheme);
        this.activate();
        this.activateNotificationAndTasksScroll();
    },
    methods: {
        activate: function () {
            var _this = this;
            var $sidebar = $("#rightsidebar");
            var $overlay = $(".overlay");

            // Close sidebar
            $(window).click(function (e) {
                var $target = $(e.target);
                if (e.target.nodeName.toLowerCase() === "i") {
                    $target = $target.parent();
                }

                if (
                    !$target.hasClass("js-right-sidebar") &&
                    _this.isOpen() &&
                    $target.parents("#rightsidebar").length === 0
                ) {
                    if (!$target.hasClass("bars")) $overlay.fadeOut();
                    $sidebar.removeClass("open");
                }
            });
            // Close sidebar if dropdown toggle buttons are pushed (since they stopPropagation)
            $("a.dropdown-toggle").click(function () {
                $overlay.fadeOut();
                $(".waves-ripple").remove();
                $sidebar.removeClass("open");
            });
        },
        isOpen: function () {
            return $(".right-sidebar").hasClass("open");
        },
        // Skin changer
        skinChanger: function (index) {
            console.log(index);
            this.$store.dispatch("changeTheme", index);
        },
        // Activate notification and task dropdown on top right menu
        activateNotificationAndTasksScroll: function () {
            $(".navbar-right .dropdown-menu .body .menu").slimscroll({
                height: "254px",
                color: "rgba(0,0,0,0.5)",
                size: "4px",
                alwaysVisible: false,
                borderRadius: "0",
                railBorderRadius: "0",
            });
        },
    },
};
</script>
