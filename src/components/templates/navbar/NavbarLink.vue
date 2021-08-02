<template>
    <router-link
        v-if="item.type != 'treeview'"
        v-slot="{ href, route, navigate, isActive, isExactActive }"
        :to="{ name: item.name }"
    >
        <li
            :class="[
                (isExactActive ||
                    (item.children != undefined &&
                        item.children.length &&
                        isActive) ||
                    childrenIsActive(item.children)) &&
                item.type !== 'header' &&
                item.name != undefined
                    ? 'active'
                    : '',
                item.class,
            ]"
        >
            <a
                v-if="item.type == 'link'"
                class="waves-effect waves-block"
                :class="[
                    isActive && 'router-link-active',
                    (isExactActive || childrenIsActive(item.children)) &&
                        'router-link-exact-active',
                    item.classHref,
                ]"
                @click="navigate"
            >
                <i
                    v-if="item.icon != ''"
                    :class="['material-icons', item.colorIcon]"
                    >{{ item.icon }}</i
                >
                <span v-if="item.label">{{ item.label }}</span>
            </a>
            <span v-if="item.type == 'header' && item.label != ''">
                {{ item.label }}
            </span>
        </li>
    </router-link>
    <li
        v-else
        :class="[
            (isExactActive || childrenIsActive(item.children)) &&
            item.type !== 'header'
                ? 'active'
                : '',
            item.class,
            'treeview',
        ]"
    >
        <a
            :class="[
                childrenIsActive(item.children) ? 'toggled' : '',
                'menu-toggle waves-effect waves-block',
            ]"
            @click="toggleMenu($event)"
        >
            <i
                v-if="item.icon != ''"
                :class="['material-icons', item.colorIcon]"
                >{{ item.icon }}</i
            >
            <span v-if="item.label">{{ item.label }}</span>
        </a>
        <ul :class="['ml-menu treeview-menu']">
            <navbar-link
                v-for="element in item.children"
                :key="element.name"
                :item="element"
            ></navbar-link>
        </ul>
    </li>
</template>
<script>
export default {
    name: "NavbarLink",
    props: {
        isActive: {
            type: Boolean,
            default: false,
        },
        isExactActive: {
            type: Boolean,
            default: false,
        },
        item: {
            type: Object,
            required: true,
            default: function () {
                return {
                    type: "header",
                    class: "",
                    classHref: "",
                    name: "",
                    icon: "",
                    colorIcon: "",
                    label: "",
                    children: [],
                };
            },
        },
    },
    data: function () {
        return {
            isChildrenActive: false,
        };
    },
    watch: {
        isChildrenActive: function () {
            if (!this.isChildrenActive) {
                $.each($(this.$el).find("ul.treeview-menu"), function (
                    key,
                    item
                ) {
                    if ($(item).is(":visible")) {
                        $(item).slideUp();
                    }
                });
            }
        },
    },
    methods: {
        toggleMenu: function (e) {
            var $this = $(e.target);
            if (!$this.hasClass("menu-toggle")) {
                $this = $this.parent();
            }
            var $content = $this.next();
            if ($($this.parents("ul")[0]).hasClass("list")) {
                var $not = $this.hasClass("menu-toggle")
                    ? $this
                    : $this.parents(".menu-toggle");
                $.each($(".menu-toggle.toggled").not($not).next(), function (
                    i,
                    val
                ) {
                    if ($(val).is(":visible")) {
                        $(val).prev().toggleClass("toggled");
                        $(val).slideUp();
                    }
                });
            }
            $this.toggleClass("toggled");
            $content.slideToggle(320);
        },
        childrenIsActive: function (children) {
            var route = this.$route;
            var res = false;
            var that = this;
            $.each(children, function (index, child) {
                if (child.children != undefined) {
                    res = res || that.childrenIsActive(child.children);
                } else if (child.name == route.name) {
                    res = true;
                }
            });
            this.isChildrenActive = res;
            return res;
        },
        haveChildrenUl: function (children) {
            var res = false;
            $.each(children, function (child) {
                if (Array.isArray(child.children)) {
                    res = true;
                }
            });
            return res;
        },
    },
};
</script>
