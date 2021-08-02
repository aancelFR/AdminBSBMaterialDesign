<template>
    <!-- Left Sidebar -->
    <aside id="leftsidebar" class="sidebar">
        <!-- User Info -->
        <div class="user-info">
            <div class="image">
                <img
                    src="static/images/user.png"
                    width="48"
                    height="48"
                    alt="User"
                />
            </div>
            <div class="info-container">
                <div
                    class="name"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                >
                    John Doe
                </div>
                <div class="email">
                    john.doe@example.com
                </div>
                <div class="btn-group user-helper-dropdown dropleft mb-2">
                    <i
                        class="material-icons dropdown-toggle no-caret"
                        data-toggle="dropdown"
                        aria-haspopup="true"
                        aria-expanded="true"
                        >more_vert</i
                    >
                    <ul class="dropdown-menu pull-right">
                        <li>
                            <a><i class="material-icons">person</i>Profile</a>
                        </li>
                        <li role="separator" class="divider" />
                        <li>
                            <a><i class="material-icons">group</i>Followers</a>
                        </li>
                        <li>
                            <a
                                ><i class="material-icons">shopping_cart</i
                                >Sales</a
                            >
                        </li>
                        <li>
                            <a><i class="material-icons">favorite</i>Likes</a>
                        </li>
                        <li role="separator" class="divider" />
                        <li>
                            <a><i class="material-icons">input</i>Sign Out</a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
        <!-- #User Info -->
        <!-- Menu -->
        <div class="menu" data-widget="tree">
            <ul class="list tree">
                <navbar-link
                    v-for="(item, index) in items"
                    :key="index"
                    :item="item"
                ></navbar-link>
            </ul>
        </div>
        <!-- #Menu -->
        <!-- Footer -->
        <div class="legal">
            <div class="copyright">
                &copy; 2019 - 2020
                <a href="javascript:void(0);">AdminBSB - Material Design</a>.
            </div>
            <div class="version"><b>Version: </b> 2.0.0</div>
        </div>
        <!-- #Footer -->
    </aside>
    <!-- #END# Left Sidebar -->
</template>

<script>
import NavbarLink from "@/components/templates/navbar/NavbarLink";
export default {
    name: "LeftSideBar",
    components: {
        NavbarLink: NavbarLink,
    },
    props: {
        items: {
            type: Array,
            default: function () {
                return [
                    {
                        type: "header",
                        class: "header",
                        name: "",
                        icon: "",
                        label: "Main Navigation",
                    },
                    {
                        type: "link",
                        class: "",
                        name: "Home",
                        icon: "home",
                        label: "Home",
                    },
                    {
                        type: "link",
                        class: "",
                        name: "Typography",
                        icon: "text_fields",
                        label: "Typography",
                    },
                    {
                        type: "link",
                        class: "",
                        name: "HelperClasses",
                        icon: "layers",
                        label: "Helper Classes",
                    },
                    {
                        type: "treeview",
                        classHref: "menu-toggle",
                        icon: "widgets",
                        label: "Widgets",
                        children: [
                            {
                                type: "treeview",
                                classHref: "menu-toggle",
                                label: "Cards",
                                name: "Widgets_Cards",
                                children: [
                                    {
                                        type: "link",
                                        label: "Basic",
                                        name: "Widgets_Cards_Basic",
                                    },
                                    {
                                        type: "link",
                                        label: "Colored",
                                        name: "Widgets_Cards_Colored",
                                    },
                                    {
                                        type: "link",
                                        label: "No header",
                                        name: "Widgets_Cards_NoHeader",
                                    },
                                ],
                            },
                            {
                                type: "treeview",
                                classHref: "menu-toggle",
                                label: "Infobox",
                                name: "Widgets_Infobox",
                                children: [
                                    {
                                        type: "link",
                                        label: "Infobox-1",
                                        name: "Widgets_Infobox_1",
                                    },
                                    {
                                        type: "link",
                                        label: "Infobox-2",
                                        name: "Widgets_Infobox_2",
                                    },
                                    {
                                        type: "link",
                                        label: "Infobox-3",
                                        name: "Widgets_Infobox_3",
                                    },
                                    {
                                        type: "link",
                                        label: "Infobox-4",
                                        name: "Widgets_Infobox_4",
                                    },
                                    {
                                        type: "link",
                                        label: "Infobox-5",
                                        name: "Widgets_Infobox_5",
                                    },
                                ],
                            },
                        ],
                    },
                    {
                        type: "treeview",
                        classHref: "menu-toggle",
                        icon: "swap_calls",
                        label: "User Interface (UI)",
                        children: [
                            {
                                type: "link",
                                label: "Alert",
                                name: "UserInterface_Alerts",
                            },
                            {
                                type: "link",
                                label: "Animations",
                                name: "UserInterface_Animations",
                            },
                            {
                                type: "link",
                                label: "Colors",
                                name: "UserInterface_Colors",
                            },
                        ],
                    },
                    {
                        type: "treeview",
                        classHref: "menu-toggle",
                        icon: "trending_down",
                        label: "Multi Level Menu",
                        children: [
                            {
                                type: "link",
                                label: "Menu Item",
                            },
                            {
                                type: "link",
                                label: "Menu Item-2",
                            },
                            {
                                type: "treeview",
                                classHref: "menu-toggle",
                                label: "Level-2",
                                children: [
                                    {
                                        type: "link",
                                        label: "Menu Item",
                                    },
                                    {
                                        type: "treeview",
                                        classHref: "menu-toggle",
                                        label: "Level-3",
                                        children: [
                                            {
                                                type: "link",
                                                label: "Level-4",
                                            },
                                        ],
                                    },
                                ],
                            },
                        ],
                    },
                    {
                        type: "link",
                        class: "",
                        name: "Changelogs",
                        icon: "update",
                        label: "Changelogs",
                    },
                    {
                        type: "header",
                        class: "header",
                        name: "",
                        icon: "",
                        label: "LABELS",
                    },
                    {
                        type: "link",
                        class: "",
                        name: "Important",
                        icon: "donut_large",
                        colorIcon: "col-red",
                        label: "Important",
                    },
                    {
                        type: "link",
                        class: "",
                        name: "Warning",
                        icon: "donut_large",
                        colorIcon: "col-amber",
                        label: "Warning",
                    },
                    {
                        type: "link",
                        class: "",
                        name: "Information",
                        icon: "donut_large",
                        colorIcon: "col-light-blue",
                        label: "Information",
                    },
                ];
            },
        },
    },
    mounted: function () {
        this.activate();
        this.$root.$on("LeftSideBar-setMenuHeight", () => {
            this.setMenuHeight(false);
        });
    },
    methods: {
        activate: function () {
            var _this = this;
            var $body = $("body");
            var $overlay = $(".overlay");
            $.AdminBSB.options.size.width = $body.width();

            // Close sidebar
            $(window).click(function (e) {
                var $target = $(e.target);
                if (e.target.nodeName.toLowerCase() === "i") {
                    $target = $(e.target).parent();
                }

                if (
                    !$target.hasClass("bars") &&
                    _this.isOpen() &&
                    $target.parents("#leftsidebar").length === 0
                ) {
                    if (!$target.hasClass("js-right-sidebar"))
                        $overlay.fadeOut();
                    if (
                        $.AdminBSB.options.size.width <
                        $.AdminBSB.options.leftSideBar.breakpointWidth
                    ) {
                        $body.removeClass("overlay-open");
                    }
                }
            });

            $.each($(".menu-toggle.toggled"), function (i, val) {
                $(val).next().slideToggle(0);
            });

            // When page load
            $.each($(".menu .list li.active"), function (i, val) {
                var $activeAnchors = $(val).find("a:eq(0)");
                if ($(val).hasClass("treeview"))
                    $activeAnchors.addClass("toggled");
                $activeAnchors.next().show();
            });

            $(".sidebar .menu .list > li.treeview").mouseleave(function () {
                $(".ls-reduce .treeview-menu").css("display", "none");
                $(".ls-reduce .toggled").removeClass("toggled");
            });

            // Set menu height
            _this.setMenuHeight(true);
            _this.checkStatusForResize(true);
            window.addEventListener("resize", () => {
                _this.setMenuHeight(false);
                _this.checkStatusForResize(false);
            });

            $body.on("classChanged", function () {
                _this.setMenuHeight(false);
            });

            // Set Waves
            Waves.attach(".menu .list a", ["waves-block"]);
            Waves.init();
        },
        setMenuHeight: function (isFirstTime) {
            if (typeof $.fn.slimScroll !== "undefined") {
                var configs = $.AdminBSB.options.leftSideBar;
                var height =
                    $(window).height() -
                    ($(".legal").outerHeight() +
                        $(".user-info").outerHeight() +
                        $(".navbar").innerHeight());
                var $el = $(".list");

                if (!isFirstTime) {
                    $el.slimscroll({
                        destroy: true,
                    });
                }
                var $body = $("body");
                var positionScroll = "right";
                if ($body.hasClass("ls-reduce")) {
                    positionScroll = "left";
                }
                $el.slimscroll({
                    height: height + "px",
                    color: configs.scrollColor,
                    size: configs.scrollWidth,
                    position: positionScroll,
                    alwaysVisible: configs.scrollAlwaysVisible,
                    borderRadius: configs.scrollBorderRadius,
                    railBorderRadius: configs.scrollRailBorderRadius,
                });

                // Scroll active menu item when page load, if option set = true
                if (
                    $.AdminBSB.options.leftSideBar.scrollActiveItemWhenPageLoad
                ) {
                    var item = $(".menu .list li.active")[0];
                    if (item) {
                        var activeItemOffsetTop = item.offsetTop;
                        if (activeItemOffsetTop > 150)
                            $el.slimscroll({
                                scrollTo: activeItemOffsetTop + "px",
                            });
                    }
                }
            }
        },
        checkStatusForResize: function (firstTime) {
            var $body = $("body");
            $.AdminBSB.options.size.width = $body.width();
            var $openCloseBar = $(".navbar .bars-mobile");
            var $openReduceBar = $(".navbar .bars-reduce");
            var $overlay = $(".overlay");

            if (firstTime) {
                $body
                    .find(".content, .sidebar")
                    .addClass("no-animate")
                    .delay(1000)
                    .queue(function () {
                        $(this).removeClass("no-animate").dequeue();
                    });
            }

            if (
                $.AdminBSB.options.size.width <
                $.AdminBSB.options.leftSideBar.breakpointWidth
            ) {
                $body.addClass("ls-closed");
                $openCloseBar.fadeIn();
                $openReduceBar.fadeOut();
                $(".waves-ripple").remove();
            } else {
                $body.removeClass("ls-closed");
                $openCloseBar.fadeOut();
                $openReduceBar.fadeIn();
                $overlay.fadeOut();
                $(".waves-ripple").remove();
                $body.removeClass("overlay-open");
            }
        },
        isOpen: function () {
            return $("body").hasClass("overlay-open");
        },
    },
};
</script>
