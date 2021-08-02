<template>
    <div class="block-header">
        <h2>
            {{ title }}
            <small v-if="titleSmall != undefined" v-html="titleSmall"></small>
        </h2>
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
    computed: {},
    beforeCreate() {},
};
</script>
