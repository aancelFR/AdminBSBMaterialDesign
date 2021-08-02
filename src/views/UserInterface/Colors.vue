<style>
.demo-color-box {
    padding: 15px 0;
    text-align: center;
    margin-bottom: 20px;
    -webkit-border-radius: 3px;
    -moz-border-radius: 3px;
    -ms-border-radius: 3px;
    border-radius: 3px;
}
.demo-color-box .color-name {
    font-size: 16px;
    margin-bottom: 5px;
}
.demo-color-box .color-code,
.demo-color-box .color-class-name {
    font-size: 13px;
}
</style>
<template>
    <div class="container-fluid">
        <header-content title="Colors" />
        <component-card
            :header="{
                class: '',
                title: 'MATERIAL DESIGN COLORS',
                titleClass: '',
                description: description,
            }"
            :with-reduce-button="true"
            :with-remove-button="true"
        >
            <template v-slot:body>
                <div class="row clearfix">
                    <div
                        v-for="(color, index) in $getColorsList"
                        :key="index"
                        class="col-xs-6 col-sm-4 col-md-3 col-lg-3"
                    >
                        <div :class="['demo-color-box ' + color.class]">
                            <div class="color-name">{{ color.name }}</div>
                            <div class="color-code">{{ color.code }}</div>
                            <div class="color-class-name">
                                {{ color.class }}
                            </div>
                        </div>
                    </div>
                </div>
            </template>
        </component-card>
    </div>
</template>

<script>
export default {
    name: "UserInterfaceColors",
    data: function () {
        return {
            description:
                "Taken by Google's Material Design Color page which link is <a href='https://material.google.com/style/color.html#color-color-palette' target='_blank' title=\"Google's Material Design Color\">material.google.com/style/color.html#color-color-palette</a>",
        };
    },
    mounted: function () {},
    methods: {},
};
</script>
