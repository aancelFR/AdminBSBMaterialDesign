<template>
    <div :class="[this.className]">
        <div :class="['card', openByDefault ? '' : 'collapsed-card']">
            <div
                v-if="header != undefined && header.title != undefined"
                :class="['card-header', header.class]"
            >
                <div :class="['col-xs-12', header.titleClass]">
                    <h2>
                        {{ header.title }}
                        <small
                            v-if="header.description != undefined"
                            v-html="header.description"
                        ></small>
                    </h2>
                </div>
                <ul
                    v-if="
                        (tools.li != undefined && tools.li.length > 0) ||
                        withRemoveButton ||
                        withReduceButton ||
                        (tools.dropdown != undefined &&
                            tools.dropdown.actions.length > 0)
                    "
                    :class="[
                        'card-tools',
                        tools.gap != undefined ? 'm-r-' + tools.gap : 'm-r-0',
                    ]"
                >
                    <li
                        v-for="(item, index) in tools.li"
                        :key="index"
                        class="nav-item"
                    >
                        <slot name="li">
                            <a
                                v-if="item.html == undefined && item.text"
                                @click="liClick(item, index)"
                                >{{ item.text }}</a
                            >
                            <a
                                v-else
                                @click="liClick(item, index)"
                                v-html="item.html"
                                >{{ item.text }}</a
                            >
                        </slot>
                    </li>
                    <li class="nav-item">
                        <slot name="tools"> </slot>
                    </li>
                    <component-dropdown
                        v-if="
                            tools != {} &&
                            tools != undefined &&
                            tools.dropdown != undefined &&
                            tools.dropdown.actions.length > 0
                        "
                        :items="tools.dropdown.actions"
                        :global="tools.dropdown.param"
                    ></component-dropdown>
                    <!--
                <li class="dropdown">
                    <a
                        href="javascript:void(0);"
                        class="dropdown-toggle no-caret"
                        data-toggle="dropdown"
                        role="button"
                        aria-haspopup="true"
                        aria-expanded="false"
                    >
                        <i :class="[config.options.materialClass]">{{
                            config.options.toolsIcon
                        }}</i>
                    </a>
                    <ul class="dropdown-menu pull-left">
                        <li>
                            <a href="javascript:void(0);">Action</a>
                        </li>
                        <li>
                            <a href="javascript:void(0);">Another action</a>
                        </li>
                        <li>
                            <a href="javascript:void(0);"
                                >Something else here</a
                            >
                        </li>
                    </ul>
                </li>
                -->
                    <li
                        v-if="withReduceButton || !openByDefault"
                        class="nav-item"
                    >
                        <a @click="toggle">
                            <i
                                v-if="openByDefault"
                                :class="[config.options.materialClass]"
                            >
                                {{ config.options.collapseIcon }}
                            </i>
                            <i v-else :class="[config.options.materialClass]">
                                {{ config.options.expandIcon }}
                            </i>
                        </a>
                    </li>
                    <li v-if="withRemoveButton" class="nav-item">
                        <a @click="remove">
                            <i :class="[config.options.materialClass]">
                                {{ config.options.removeIcon }}
                            </i>
                        </a>
                    </li>
                </ul>
            </div>
            <div
                :class="['card-body', body.class]"
                :style="[openByDefault ? '' : { display: 'none' }]"
            >
                <slot name="body"></slot>
            </div>
            <div
                v-if="
                    this.$slots.footer != undefined &&
                    this.$slots.footer != '' &&
                    !!this.$slots.footer
                "
                :class="['card-footer', footer.class]"
                :style="[openByDefault ? '' : { display: 'none' }]"
            >
                <slot name="footer"></slot>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "Card",
    props: {
        className: {
            type: String,
            default: "",
        },
        init: {
            type: Function,
            default: function () {
                return function () {};
            },
        },
        openByDefault: {
            type: Boolean,
            default: true,
        },
        withRemoveButton: {
            type: Boolean,
            default: false,
        },
        withReduceButton: {
            type: Boolean,
            default: false,
        },
        header: {
            type: Object,
            default: function () {
                return {
                    class: "",
                    titleClass: "",
                    title: "",
                    description: undefined,
                };
            },
        },
        body: {
            type: Object,
            default: function () {
                return {
                    class: "",
                };
            },
        },
        footer: {
            type: Object,
            default: function () {
                return {
                    class: "",
                };
            },
        },
        tools: {
            type: Object,
            default: function () {
                return {
                    li: [],
                    gap: "0",
                    dropdown: {
                        actions: [],
                        param: {},
                    },
                };
            },
        },
        loadingConfig: {
            type: Object,
            default: function () {
                return {
                    effect: "timer",
                    text: "Loading...",
                    bg: "rgba(255,255,255,0.9)",
                    color: "#555",
                };
            },
        },
        config: {
            type: Object,
            default: function () {
                return {
                    options: {
                        animationSpeed: 500,
                        collapseIcon: "remove",
                        expandIcon: "add",
                        removeIcon: "close",
                        materialClass: "material-icons",
                    },
                    Selector: {
                        data: ".card",
                        collapsed: ".collapsed-card",
                        header: ".card-header",
                        body: ".card-body",
                        footer: ".card-footer",
                        tools: ".card-tools",
                    },
                    ClassName: {
                        collapsed: "collapsed-card",
                    },
                    Event: {
                        collapsed: "collapsed.boxwidget",
                        expanded: "expanded.boxwidget",
                        removed: "removed.boxwidget",
                    },
                };
            },
        },
    },
    data: function () {
        return {
            loading: false,
        };
    },
    watch: {
        loading: function (val) {
            this.loading = val;
            if (this.loading) {
                $(this.$el)
                    .children(this.config.Selector.data)
                    .waitMe({
                        effect:
                            this.loadingConfig.effect != undefined
                                ? this.loadingConfig.effect
                                : "timer",
                        text:
                            this.loadingConfig.text != undefined
                                ? this.loadingConfig.text
                                : "Loading...",
                        bg:
                            this.loadingConfig.bg != undefined
                                ? this.loadingConfig.bg
                                : "rgba(255,255,255,0.9)",
                        color:
                            this.loadingConfig.color != undefined
                                ? this.loadingConfig.color
                                : "#555",
                    });
            } else {
                $(this.$el).children(this.config.Selector.data).waitMe("hide");
            }
        },
    },
    beforeMount: function () {
        this.loading = true;
    },
    mounted: function () {
        this.init();
        this.loading = false;
    },
    methods: {
        liClick: function (item, index) {
            if (
                item.action &&
                {}.toString.call(item.action) === "[object Function]"
            ) {
                item.action(index, this, item);
            }
        },
        remove() {
            var removedEvent = $.Event(this.config.Event.removed);
            $(this.$el).slideUp(
                this.config.options.animationSpeed,
                function () {
                    $(this.$el).trigger(removedEvent);
                    this.$destroy();
                    // remove the element from the DOM
                    this.$el.parentNode.removeChild(this.$el);
                }.bind(this)
            );
        },
        toggle() {
            var isOpen = !$(this.$el)
                .children(this.config.Selector.data)
                .is(this.config.Selector.collapsed);
            if (isOpen) {
                this.collapse();
            } else {
                this.expand();
            }
        },
        collapse() {
            var collapsedEvent = $.Event(this.config.Event.collapsed);
            var collapseIcon = this.config.options.collapseIcon;
            var expandIcon = this.config.options.expandIcon;
            var materialClass = this.config.options.materialClass;
            $(this.$el)
                .children(this.config.Selector.data)
                .children(
                    this.config.Selector.header +
                        ", " +
                        this.config.Selector.body +
                        ", " +
                        this.config.Selector.footer
                )
                .children(this.config.Selector.tools)
                .find("." + materialClass)
                .each(function (index, element) {
                    if ($(element).html().trim() === collapseIcon) {
                        $(element).html(expandIcon);
                    }
                });

            $(this.$el)
                .children(this.config.Selector.data)
                .children(
                    this.config.Selector.body +
                        ", " +
                        this.config.Selector.footer
                )
                .slideUp(
                    this.config.options.animationSpeed,
                    function () {
                        $(this.$el)
                            .children(this.config.Selector.data)
                            .addClass(this.config.ClassName.collapsed);
                        $(this.$el)
                            .children(this.config.Selector.data)
                            .trigger(collapsedEvent);
                    }.bind(this)
                );
        },
        expand() {
            var expandedEvent = $.Event(this.config.Event.expanded);
            var collapseIcon = this.config.options.collapseIcon;
            var expandIcon = this.config.options.expandIcon;
            var materialClass = this.config.options.materialClass;

            $(this.$el)
                .children(this.config.Selector.data)
                .removeClass(this.config.ClassName.collapsed);

            $(this.$el)
                .children(this.config.Selector.data)
                .children(
                    this.config.Selector.header +
                        ", " +
                        this.config.Selector.body +
                        ", " +
                        this.config.Selector.footer
                )
                .children(this.config.Selector.tools)
                .find("." + materialClass)
                .each(function (index, element) {
                    if ($(element).html().trim() === expandIcon) {
                        $(element).html(collapseIcon);
                    }
                });

            $(this.$el)
                .children(this.config.Selector.data)
                .children(
                    this.config.Selector.body +
                        ", " +
                        this.config.Selector.footer
                )
                .slideDown(
                    this.config.options.animationSpeed,
                    function () {
                        $(this.$el)
                            .children(this.config.Selector.data)
                            .trigger(expandedEvent);
                    }.bind(this)
                );
        },
    },
};
</script>
