<template>
    <div class="container-fluid">
        <header-content title="Cards" />
        <div v-for="(section, index) in cards" :key="index">
            <header-div
                :title="section.title"
                :title-small="section.description"
            ></header-div>
            <div class="row clearfix">
                <component-card
                    v-for="(card, key) in section.items"
                    :key="key"
                    :open-by-default="card.openByDefault"
                    :header="card.header"
                    :body="card.body"
                    :footer="card.footer"
                    :with-reduce-button="card.reduce_button"
                    :with-remove-button="card.remove_button"
                    :tools="card.tools"
                    :class-name="card.class"
                    :loading-config="card.loadingConfig"
                >
                    <template
                        v-if="card.slot.tools != ''"
                        v-slot:tools
                    ></template>
                    <template v-if="card.slot.body != ''" v-slot:body
                        ><p>{{ card.slot.body }}</p>
                        <p
                    /></template>
                    <template v-if="card.slot.footer != ''" v-slot:footer
                        ><p>{{ card.slot.footer }}</p></template
                    >
                </component-card>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "WidgetsCardBasic",
    props: {
        cards: {
            type: Array,
            default: function () {
                return [
                    {
                        title: "BASIC CARD",
                        items: [
                            {
                                class: "col-lg-4 col-md-4 col-sm-6 col-xs-12",
                                reduce_button: true,
                                remove_button: true,
                                header: {
                                    class: "",
                                    title: "Basic Card Title",
                                    description: "Description text here...",
                                    titleClass: "",
                                },
                                body: {
                                    class: "",
                                },
                                slot: {
                                    body:
                                        "Quis pharetra a pharetra fames blandit. Risus faucibus velit Risus imperdiet mattis neque volutpat, etiam lacinia netus dictum magnis per facilisi sociosqu. Volutpat. Ridiculus nostra.",
                                    footer: "Basic footer",
                                    tools: "",
                                },
                                tools: {
                                    dropdown: {
                                        actions: [
                                            {
                                                label: "Action",
                                            },
                                            {
                                                label: "Another action",
                                            },
                                            {
                                                label: "Something else here",
                                                action: function () {
                                                    $.notify(
                                                        {
                                                            // options
                                                            message:
                                                                "Hello World",
                                                        },
                                                        {
                                                            // settings
                                                            type: "info",
                                                        }
                                                    );
                                                },
                                            },
                                        ],
                                        param: {
                                            class: "dropdown",
                                            haspopup: true,
                                            expanded: true,
                                            removeIfEmpty: true,
                                            icon: "more_vert",
                                            type: "liCard",
                                            ul: {
                                                class:
                                                    "dropdown-menu pull-left",
                                            },
                                        },
                                    },
                                },
                            },
                            {
                                class: "col-lg-4 col-md-4 col-sm-6 col-xs-12",
                                reduce_button: true,
                                remove_button: true,
                                header: {
                                    class: "",
                                    title: "Basic Card Title",
                                    description: "Description text here...",
                                    titleClass: "",
                                },
                                body: {
                                    class: "",
                                },
                                slot: {
                                    body:
                                        "Quis pharetra a pharetra fames blandit. Risus faucibus velit Risus imperdiet mattis neque volutpat, etiam lacinia netus dictum magnis per facilisi sociosqu. Volutpat. Ridiculus nostra.",
                                    footer: "",
                                    tools: "",
                                },
                                tools: {
                                    li: [
                                        {
                                            html:
                                                "<i class='material-icons'>mic</i>",
                                            action: function (
                                                index,
                                                that,
                                                item
                                            ) {
                                                console.log(item.html);
                                                if (
                                                    item.html ==
                                                    "<i class='material-icons'>mic</i>"
                                                ) {
                                                    item.html =
                                                        "<i class='material-icons'>mic_off</i>";
                                                    $.notify(
                                                        {
                                                            // options
                                                            message:
                                                                "I hear you :)",
                                                        },
                                                        {
                                                            // settings
                                                        }
                                                    );
                                                } else {
                                                    item.html =
                                                        "<i class='material-icons'>mic</i>";
                                                    $.notify(
                                                        {
                                                            // options
                                                            message:
                                                                "I not hear you :)",
                                                        },
                                                        {
                                                            // settings
                                                            type: "success",
                                                        }
                                                    );
                                                }
                                            },
                                        },
                                    ],
                                },
                            },
                            {
                                class: "col-lg-4 col-md-4 col-sm-6 col-xs-12",
                                reduce_button: false,
                                remove_button: false,
                                header: {
                                    class: "",
                                    title: "Basic Card Title",
                                    description: "Description text here...",
                                    titleClass: "",
                                },
                                body: {
                                    class: "",
                                },
                                footer: {
                                    class: "",
                                },
                                slot: {
                                    body:
                                        "Quis pharetra a pharetra fames blandit. Risus faucibus velit Risus imperdiet mattis neque volutpat, etiam lacinia netus dictum magnis per facilisi sociosqu. Volutpat. Ridiculus nostra.",
                                    footer: "Basic footer",
                                    tools: "",
                                },
                                tools: {
                                    li: [
                                        {
                                            html:
                                                "<i class='material-icons'>info_outline</i>",
                                        },
                                        {
                                            html:
                                                "<i class='material-icons'>help_outline</i>",
                                        },
                                    ],
                                },
                            },
                        ],
                    },
                    {
                        title: "BASIC CARD COLLAPSED",
                        items: [
                            {
                                openByDefault: false,
                                class: "col-lg-4 col-md-4 col-sm-6 col-xs-12",
                                reduce_button: true,
                                remove_button: true,
                                header: {
                                    class: "",
                                    title: "Basic Card Title",
                                    description: "Description text here...",
                                    titleClass: "",
                                },
                                body: {
                                    class: "",
                                },
                                slot: {
                                    body:
                                        "Quis pharetra a pharetra fames blandit. Risus faucibus velit Risus imperdiet mattis neque volutpat, etiam lacinia netus dictum magnis per facilisi sociosqu. Volutpat. Ridiculus nostra.",
                                    footer: "Basic footer",
                                    tools: "",
                                },
                                tools: {
                                    dropdown: {
                                        actions: [
                                            {
                                                label: "Action",
                                            },
                                            {
                                                label: "Another action",
                                            },
                                            {
                                                label: "Something else here",
                                                action: function () {
                                                    $.notify(
                                                        {
                                                            // options
                                                            message:
                                                                "Hello World",
                                                        },
                                                        {
                                                            // settings
                                                            type: "info",
                                                        }
                                                    );
                                                },
                                            },
                                        ],
                                        param: {
                                            class: "dropdown",
                                            haspopup: true,
                                            expanded: true,
                                            removeIfEmpty: true,
                                            icon: "more_vert",
                                            type: "liCard",
                                            ul: {
                                                class:
                                                    "dropdown-menu pull-left",
                                            },
                                        },
                                    },
                                },
                            },
                            {
                                openByDefault: false,
                                class: "col-lg-4 col-md-4 col-sm-6 col-xs-12",
                                reduce_button: true,
                                remove_button: true,
                                header: {
                                    class: "",
                                    title: "Basic Card Title",
                                    description: "Description text here...",
                                    titleClass: "",
                                },
                                body: {
                                    class: "",
                                },
                                slot: {
                                    body:
                                        "Quis pharetra a pharetra fames blandit. Risus faucibus velit Risus imperdiet mattis neque volutpat, etiam lacinia netus dictum magnis per facilisi sociosqu. Volutpat. Ridiculus nostra.",
                                    footer: "",
                                    tools: "",
                                },
                                tools: {
                                    li: [
                                        {
                                            html:
                                                "<i class='material-icons'>mic</i>",
                                            action: function (
                                                index,
                                                that,
                                                item
                                            ) {
                                                console.log(item.html);
                                                if (
                                                    item.html ==
                                                    "<i class='material-icons'>mic</i>"
                                                ) {
                                                    item.html =
                                                        "<i class='material-icons'>mic_off</i>";
                                                    $.notify(
                                                        {
                                                            // options
                                                            message:
                                                                "I hear you :)",
                                                        },
                                                        {
                                                            // settings
                                                        }
                                                    );
                                                } else {
                                                    item.html =
                                                        "<i class='material-icons'>mic</i>";
                                                    $.notify(
                                                        {
                                                            // options
                                                            message:
                                                                "I not hear you :)",
                                                        },
                                                        {
                                                            // settings
                                                            type: "success",
                                                        }
                                                    );
                                                }
                                            },
                                        },
                                    ],
                                },
                            },
                            {
                                openByDefault: false,
                                class: "col-lg-4 col-md-4 col-sm-6 col-xs-12",
                                reduce_button: true,
                                remove_button: false,
                                header: {
                                    class: "",
                                    title: "Basic Card Title",
                                    description: "Description text here...",
                                    titleClass: "",
                                },
                                body: {
                                    class: "",
                                },
                                footer: {
                                    class: "",
                                },
                                slot: {
                                    body:
                                        "Quis pharetra a pharetra fames blandit. Risus faucibus velit Risus imperdiet mattis neque volutpat, etiam lacinia netus dictum magnis per facilisi sociosqu. Volutpat. Ridiculus nostra.",
                                    footer: "Basic footer",
                                    tools: "",
                                },
                                tools: {
                                    li: [
                                        {
                                            html:
                                                "<i class='material-icons'>info_outline</i>",
                                        },
                                        {
                                            html:
                                                "<i class='material-icons'>help_outline</i>",
                                        },
                                    ],
                                },
                            },
                        ],
                    },
                    {
                        title: "BASIC CARD - WITH LOADING",
                        description:
                            "Please click the refresh button right top of cards you want to activate loading. Taken from <a href='https://github.com/vadimsva/waitMe' target='_blank'>https://github.com/vadimsva/waitMe</a>",
                        items: [
                            {
                                class: "col-lg-4 col-md-4 col-sm-6 col-xs-12",
                                reduce_button: true,
                                remove_button: true,
                                header: {
                                    class: "",
                                    title: "Basic Card Title",
                                    description: "Description text here...",
                                    titleClass: "",
                                },
                                body: {
                                    class: "",
                                },
                                slot: {
                                    body:
                                        "Quis pharetra a pharetra fames blandit. Risus faucibus velit Risus imperdiet mattis neque volutpat, etiam lacinia netus dictum magnis per facilisi sociosqu. Volutpat. Ridiculus nostra.",
                                    footer: "Basic footer",
                                    tools: "",
                                },
                                tools: {
                                    li: [
                                        {
                                            html:
                                                "<i class='material-icons'>loop</i>",
                                            action: function (index, that) {
                                                that.loading = true;
                                                setTimeout(function () {
                                                    that.loading = false;
                                                }, 3200);
                                            },
                                        },
                                    ],
                                    dropdown: {
                                        actions: [
                                            {
                                                label: "Action",
                                            },
                                            {
                                                label: "Another action",
                                                action: function (index, that) {
                                                    that.$parent.loading = true;
                                                    setTimeout(function () {
                                                        that.$parent.loading = false;
                                                    }, 3200);
                                                },
                                            },
                                            {
                                                label: "Something else here",
                                                action: function () {
                                                    $.notify(
                                                        {
                                                            // options
                                                            message:
                                                                "Hello World",
                                                        },
                                                        {
                                                            // settings
                                                            type: "info",
                                                        }
                                                    );
                                                },
                                            },
                                        ],
                                        param: {
                                            class: "dropdown",
                                            haspopup: true,
                                            expanded: true,
                                            removeIfEmpty: true,
                                            icon: "more_vert",
                                            type: "liCard",
                                            ul: {
                                                class:
                                                    "dropdown-menu pull-left",
                                            },
                                        },
                                    },
                                },
                            },
                            {
                                class: "col-lg-4 col-md-4 col-sm-6 col-xs-12",
                                reduce_button: true,
                                remove_button: true,
                                header: {
                                    class: "",
                                    title: "Basic Card Title",
                                    description: "Description text here...",
                                    titleClass: "",
                                },
                                body: {
                                    class: "",
                                },
                                slot: {
                                    body:
                                        "Quis pharetra a pharetra fames blandit. Risus faucibus velit Risus imperdiet mattis neque volutpat, etiam lacinia netus dictum magnis per facilisi sociosqu. Volutpat. Ridiculus nostra.",
                                    footer: "",
                                    tools: "",
                                },
                                loadingConfig: {
                                    effect: "ios",
                                    text: "Content loading...",
                                    bg: "rgba(255,255,255,0.9)",
                                    color: "#0FF",
                                },
                                tools: {
                                    li: [
                                        {
                                            html:
                                                "<i class='material-icons'>loop</i>",
                                            action: function (index, that) {
                                                that.loading = true;
                                                setTimeout(function () {
                                                    that.loading = false;
                                                }, 3200);
                                            },
                                        },
                                    ],
                                },
                            },
                            {
                                class: "col-lg-4 col-md-4 col-sm-6 col-xs-12",
                                reduce_button: false,
                                remove_button: false,
                                header: {
                                    class: "",
                                    title: "Basic Card Title",
                                    description: "Description text here...",
                                    titleClass: "",
                                },
                                body: {
                                    class: "",
                                },
                                footer: {
                                    class: "",
                                },
                                slot: {
                                    body:
                                        "Quis pharetra a pharetra fames blandit. Risus faucibus velit Risus imperdiet mattis neque volutpat, etiam lacinia netus dictum magnis per facilisi sociosqu. Volutpat. Ridiculus nostra.",
                                    footer: "Basic footer",
                                    tools: "",
                                },
                                loadingConfig: {
                                    effect: "pulse",
                                    text: "Time Travel in time...",
                                    bg: "rgba(255,255,255,0.9)",
                                    color: "#F00",
                                },
                                tools: {
                                    li: [
                                        {
                                            html:
                                                "<i class='material-icons'>loop</i>",
                                            action: function (index, that) {
                                                that.loading = true;
                                                setTimeout(function () {
                                                    that.loading = false;
                                                }, 3200);
                                            },
                                        },
                                    ],
                                },
                            },
                        ],
                    },
                ];
            },
        },
    },
    methods: {},
};
</script>
