<template>
    <!-- Tasks -->
    <li v-if="global.type == 'li'" :class="global.class">
        <a
            v-if="!global.removeIfEmpty || items.length > 0"
            class="dropdown-toggle no-caret"
            data-toggle="dropdown"
            role="button"
            :aria-haspopup="global.haspopup"
            :aria-expanded="global.expanded"
        >
            <i class="material-icons">{{ global.icon }}</i>
            <span v-if="items.length > 0 && displayCount" class="label-count">{{
                items.length
            }}</span>
        </a>
        <ul :class="[global.ul.class]">
            <li v-if="global.header != undefined" class="header">
                {{ global.header }}
            </li>
            <li v-if="items.length > 0" class="body">
                <ul :class="['menu', global.body.class]">
                    <li
                        v-for="(item, index) in items"
                        :key="index"
                        :class="[index > global.number - 1 ? 'hide' : '']"
                    >
                        <a
                            class="waves-effect waves-block"
                            @click="liClick(item, index)"
                        >
                            <div
                                v-if="global.body.type == 'info'"
                                :class="['icon-circle', 'bg-' + item.color]"
                            >
                                <i class="material-icons">{{ item.icon }}</i>
                            </div>
                            <div
                                v-if="global.body.type == 'info'"
                                class="menu-info"
                            >
                                <h4>
                                    <b v-if="item.labelStrong != undefined">{{
                                        item.labelStrong
                                    }}</b>
                                    {{ item.label }}
                                </h4>
                                <p v-if="item.date != undefined">
                                    <i class="material-icons">access_time</i>
                                    {{ item.date | fromNow }}
                                </p>
                            </div>
                            <h4 v-if="global.body.type == 'task'">
                                {{ item.label }}
                                <small>{{ item.value + "%" }}</small>
                            </h4>
                            <div
                                v-if="global.body.type == 'task'"
                                class="progress"
                            >
                                <div
                                    :class="[
                                        'progress-bar',
                                        'bg-' + item.color,
                                    ]"
                                    role="progressbar"
                                    :aria-valuenow="item.value"
                                    :aria-valuemin="0"
                                    :aria-valuemax="100"
                                    :style="{ width: item.value + '%' }"
                                />
                            </div>
                            <span v-if="global.body.type == 'list'">{{
                                item.label
                            }}</span>
                        </a>
                    </li>
                </ul>
            </li>
            <li
                v-if="global.footer != undefined && items.length > 0"
                class="footer"
            >
                <a
                    :style="[
                        items.length > global.number
                            ? { 'border-top': '0px' }
                            : {},
                    ]"
                    @click="actionFooter(global.footer.callback)"
                    >{{ global.footer.label }}</a
                >
            </li>
        </ul>
    </li>
    <div v-else-if="global.type == 'div'" :class="global.class">
        <i
            data-toggle="dropdown"
            :aria-haspopup="global.haspopup"
            :aria-expanded="global.expanded"
            class="material-icons dropdown-toggle no-caret"
            >{{ global.icon }}</i
        >
        <ul :class="[global.ul.class]">
            <li
                v-for="(item, index) in items"
                :key="index"
                :role="item.type == 'separator' ? 'separator' : ''"
                :class="[
                    item.type == 'separator' ? 'divider' : '',
                    index > global.number - 1 ? 'hide' : '',
                ]"
            >
                <a
                    v-if="item.label != undefined"
                    class="waves-effect waves-block"
                    @click="liClick(item, index)"
                >
                    <i
                        v-if="item.icon != undefined"
                        :class="['material-icons', 'bg-' + item.color]"
                        >{{ item.icon }}</i
                    >
                    {{ item.label }}
                </a>
            </li>
        </ul>
    </div>
    <li v-else-if="global.type == 'liCard'" :class="global.class">
        <a
            v-if="!global.removeIfEmpty || items.length > 0"
            class="dropdown-toggle no-caret"
            data-toggle="dropdown"
            role="button"
            :aria-haspopup="global.haspopup"
            :aria-expanded="global.expanded"
        >
            <i class="material-icons">{{ global.icon }}</i>
        </a>
        <ul :class="[global.ul.class]">
            <li
                v-for="(item, index) in items"
                :key="index"
                :role="item.type == 'separator' ? 'separator' : ''"
                :class="[
                    item.type == 'separator' ? 'divider' : '',
                    index > global.number - 1 ? 'hide' : '',
                ]"
            >
                <a
                    v-if="item.label != undefined"
                    class="waves-effect waves-block"
                    @click="liClick(item, index)"
                >
                    <i
                        v-if="item.icon != undefined"
                        :class="['material-icons', 'bg-' + item.color]"
                        >{{ item.icon }}</i
                    >
                    {{ item.label }}
                </a>
            </li>
        </ul>
    </li>
</template>

<script>
export default {
    name: "Dropdown",
    props: {
        items: {
            type: Array,
            default: function () {
                return [];
            },
        },
        displayCount: {
            type: Boolean,
            default: false,
        },
        global: {
            type: Object,
            default: function () {
                return {
                    removeIfEmpty: false,
                    number: 9999,
                    class: "dropdown nav-item",
                    haspopup: true,
                    expanded: true,
                    icon: "notifications",
                    type: "li",
                    header: "List",
                    footer: {
                        label: "View All",
                        callback: undefined,
                    },
                    ul: {
                        class: "dropdown-menu",
                    },
                    body: {
                        class: "",
                        type: "info",
                    },
                };
            },
        },
    },
    mounted() {
        $('[data-toggle="dropdown"]').dropdown();
        this.activate();
    },
    methods: {
        actionFooter: function (callback) {
            if (
                callback &&
                {}.toString.call(callback) === "[object Function]"
            ) {
                callback();
            }
        },
        liClick: function (item, index) {
            if (
                item.action &&
                {}.toString.call(item.action) === "[object Function]"
            ) {
                item.action(index, this);
            }
        },

        activate: function () {
            var _this = this;

            $(".dropdown, .dropup, .btn-group").on({
                // eslint-disable-next-line no-unused-vars
                "show.bs.dropdown": function (e) {
                    var dropdown = _this.dropdownEffect(this);
                    if (dropdown.effectIn) {
                        _this.dropdownEffectStart(dropdown, dropdown.effectIn);
                        // e.preventDefault();
                    }
                },
                // eslint-disable-next-line no-unused-vars
                "shown.bs.dropdown": function (e) {
                    var dropdown = _this.dropdownEffect(this);
                    _this.dropdownEffectStart(dropdown, dropdown.effectIn);
                    if (dropdown.effectIn && dropdown.effectOut) {
                        _this.dropdownEffectEnd(dropdown, function () {});
                        // e.preventDefault();
                    }
                },
                "hide.bs.dropdown": function (e) {
                    var dropdown = _this.dropdownEffect(this);
                    if (dropdown.effectOut) {
                        e.preventDefault();
                        _this.dropdownEffectStart(dropdown, dropdown.effectOut);
                        _this.dropdownEffectEnd(dropdown, function () {
                            dropdown.dropdown.removeClass("show");
                            dropdown.dropdownMenu.removeClass("show");
                        });
                    }
                },
            });

            // Set Waves
            Waves.attach(".dropdown-menu li a", ["waves-block"]);
            Waves.init();
        },
        dropdownEffect: function (target) {
            var effectIn = $.AdminBSB.options.dropdownMenu.effectIn;
            var effectOut = $.AdminBSB.options.dropdownMenu.effectOut;
            var dropdown = $(target);
            var dropdownMenu = $(".dropdown-menu", target);
            if (dropdown.length > 0) {
                var udEffectIn = dropdown.data("effect-in");
                var udEffectOut = dropdown.data("effect-out");
                if (udEffectIn !== undefined) {
                    effectIn = udEffectIn;
                }
                if (udEffectOut !== undefined) {
                    effectOut = udEffectOut;
                }
            }

            return {
                target: target,
                dropdown: dropdown,
                dropdownMenu: dropdownMenu,
                effectIn: effectIn,
                effectOut: effectOut,
            };
        },
        dropdownEffectStart: function (data, effectToStart) {
            if (effectToStart) {
                data.dropdown.addClass("dropdown-animating");
                data.dropdownMenu.addClass("animated dropdown-animated");
                data.dropdownMenu.addClass(effectToStart);
            }
        },
        dropdownEffectEnd: function (data, callback) {
            var animationEnd =
                "webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend";
            data.dropdown.one(animationEnd, function () {
                data.dropdown.removeClass("dropdown-animating");
                data.dropdownMenu.removeClass("animated dropdown-animated");
                data.dropdownMenu.removeClass(data.effectIn);
                data.dropdownMenu.removeClass(data.effectOut);
                $(".waves-ripple").remove();

                if (typeof callback === "function") {
                    callback();
                }
            });
        },
    },
};
</script>
