<template>
    <div class="block-header">
        <header-div :title="title" :title-small="titleSmall"></header-div>
        <ol class="breadcrumb">
            <li>
                <a href="#"> <i class="fa fa-dashboard" /> Home </a>
            </li>
            <li
                v-for="(route, index) in $route.matched"
                :key="index"
                :class="[$route.matched.length - 1 == index ? 'active' : '']"
            >
                <router-link
                    v-if="
                        !route.meta.bcDynamic &&
                        $route.matched.length - 1 != index
                    "
                    :to="{ name: route.name }"
                >
                    <i
                        v-if="
                            route.meta.icon &&
                            route.meta.icon.class &&
                            route.meta.icon.type
                        "
                        :class="[
                            route.meta.icon.type == 'fa'
                                ? 'fa fa-' + route.meta.icon.class
                                : 'material-icons',
                        ]"
                        >{{ route.meta.icon.text }}</i
                    >
                    {{ route.meta.bcLinkText }}
                </router-link>
                <router-link
                    v-if="
                        route.meta.bcDynamic &&
                        $route.matched.length - 1 != index
                    "
                    :to="{
                        name: route.name,
                        params: { id: $route.params.id },
                    }"
                >
                    <i
                        v-if="
                            route.meta.icon &&
                            route.meta.icon.class &&
                            route.meta.icon.type
                        "
                        :class="[
                            route.meta.icon.type == 'fa'
                                ? 'fa fa-' + route.meta.icon.class
                                : 'material-icons',
                        ]"
                        >{{ route.meta.icon.text }}</i
                    >
                    <template v-if="value">
                        {{ formattedValue }}
                    </template>
                    <template v-if="!value">
                        {{ loadingText }}
                    </template>
                </router-link>
                <span v-if="$route.matched.length - 1 == index">
                    <i
                        v-if="
                            route.meta.icon &&
                            route.meta.icon.class &&
                            route.meta.icon.type
                        "
                        :class="[
                            route.meta.icon.type == 'fa'
                                ? 'fa fa-' + route.meta.icon.class
                                : 'material-icons',
                        ]"
                        >{{ route.meta.icon.text }}</i
                    >
                    {{ route.meta.bcLinkText }}
                </span>
            </li>
        </ol>
    </div>
</template>

<script>
export default {
    name: "HeaderContent",
    props: {
        title: {
            type: String,
            default: "DASHBOARD",
            required: true,
        },
        titleSmall: {
            type: String,
            default: "",
            required: false,
        },
    },
    computed: {
        formattedValue() {
            return this.route.meta.bcLinkText(this.value);
        },
        loadingText() {
            const loadingText = this.route.meta.bcLoadingText;
            return loadingText ? loadingText : "Loading...";
        },
    },
    beforeCreate() {
        this.$options.computed.value = function () {
            if (this.route.meta.bcGetter) {
                return this.$store.getters[this.route.meta.bcGetter];
            } else {
                return null;
            }
        };
    },
};
</script>
