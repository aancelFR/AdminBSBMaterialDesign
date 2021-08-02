<template>
    <div class="container-fluid">
        <header-content title="NO HEADER CARDS" />
        <div class="row clearfix">
            <component-card
                v-for="(card, key) in cards"
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
                <template v-if="card.slot.tools != ''" v-slot:tools></template>
                <template v-if="card.slot.body != ''" v-slot:body
                    ><p>{{ card.slot.body }}</p>
                    <p
                /></template>
                <template v-if="card.slot.footer != ''" v-slot:footer
                    ><p>{{ card.slot.footer }}</p>
                </template>
            </component-card>
        </div>
    </div>
</template>

<script>
export default {
    name: "WidgetsCardColored",
    props: {
        cards: {
            type: Array,
            default: function () {
                return [
                    {
                        class: "col-lg-4 col-md-4 col-sm-6 col-xs-12",
                        header: {},
                        body: {
                            class: "bg-red",
                        },
                        footer: {
                            class: "bg-brown",
                        },
                        slot: {
                            body:
                                "Quis pharetra a pharetra fames blandit. Risus faucibus velit Risus imperdiet mattis neque volutpat, etiam lacinia netus dictum magnis per facilisi sociosqu. Volutpat. Ridiculus nostra.",
                            footer: "COLORED footer",
                            tools: "",
                        },
                    },
                    {
                        class: "col-lg-4 col-md-4 col-sm-6 col-xs-12",
                        header: {},
                        body: {
                            class: "bg-cyan",
                        },
                        slot: {
                            body:
                                "Quis pharetra a pharetra fames blandit. Risus faucibus velit Risus imperdiet mattis neque volutpat, etiam lacinia netus dictum magnis per facilisi sociosqu. Volutpat. Ridiculus nostra.",
                            tools: "",
                            footer: "",
                        },
                    },
                    {
                        class: "col-lg-4 col-md-4 col-sm-6 col-xs-12",
                        header: {},
                        body: {
                            class: "bg-green",
                        },
                        footer: {
                            class: "bg-lime",
                        },
                        slot: {
                            body:
                                "Quis pharetra a pharetra fames blandit. Risus faucibus velit Risus imperdiet mattis neque volutpat, etiam lacinia netus dictum magnis per facilisi sociosqu. Volutpat. Ridiculus nostra.",
                            tools: "",
                            footer: "",
                        },
                    },
                    {
                        class: "col-lg-4 col-md-4 col-sm-6 col-xs-12",
                        header: {},
                        body: {
                            class: "bg-orange",
                        },
                        footer: {
                            class: "bg-deep-orange",
                        },
                        slot: {
                            body:
                                "Quis pharetra a pharetra fames blandit. Risus faucibus velit Risus imperdiet mattis neque volutpat, etiam lacinia netus dictum magnis per facilisi sociosqu. Volutpat. Ridiculus nostra.",
                            footer: "COLORED footer",
                            tools: "",
                        },
                    },
                    {
                        class: "col-lg-4 col-md-4 col-sm-6 col-xs-12",
                        header: {},
                        body: {
                            class: "bg-blue-grey",
                        },
                        footer: {
                            class: "bg-grey",
                        },
                        slot: {
                            body:
                                "Quis pharetra a pharetra fames blandit. Risus faucibus velit Risus imperdiet mattis neque volutpat, etiam lacinia netus dictum magnis per facilisi sociosqu. Volutpat. Ridiculus nostra.",
                            tools: "",
                            footer: "",
                        },
                    },
                    {
                        class: "col-lg-4 col-md-4 col-sm-6 col-xs-12",
                        header: {},
                        body: {
                            class: "bg-pink",
                        },
                        footer: {
                            class: "bg-purple",
                        },
                        slot: {
                            body:
                                "Quis pharetra a pharetra fames blandit. Risus faucibus velit Risus imperdiet mattis neque volutpat, etiam lacinia netus dictum magnis per facilisi sociosqu. Volutpat. Ridiculus nostra.",
                            tools: "",
                            footer: "",
                        },
                    },
                    {
                        class: "col-lg-4 col-md-4 col-sm-6 col-xs-12",
                        header: {},
                        body: {
                            class: "bg-light-blue",
                        },
                        footer: {
                            class: "bg-blue",
                        },
                        slot: {
                            body:
                                "Quis pharetra a pharetra fames blandit. Risus faucibus velit Risus imperdiet mattis neque volutpat, etiam lacinia netus dictum magnis per facilisi sociosqu. Volutpat. Ridiculus nostra.",
                            footer: "COLORED footer",
                            tools: "",
                        },
                    },
                    {
                        class: "col-lg-4 col-md-4 col-sm-6 col-xs-12",
                        header: {},
                        body: {
                            class: "bg-light-green",
                        },
                        footer: {
                            class: "bg-lime",
                        },
                        slot: {
                            body:
                                "Quis pharetra a pharetra fames blandit. Risus faucibus velit Risus imperdiet mattis neque volutpat, etiam lacinia netus dictum magnis per facilisi sociosqu. Volutpat. Ridiculus nostra.",
                            tools: "",
                            footer: "COLORED footer",
                        },
                    },
                    {
                        class: "col-lg-4 col-md-4 col-sm-6 col-xs-12",
                        header: {},
                        body: {
                            class: "bg-amber",
                        },
                        footer: {
                            class: "bg-yellow",
                        },
                        slot: {
                            body:
                                "Quis pharetra a pharetra fames blandit. Risus faucibus velit Risus imperdiet mattis neque volutpat, etiam lacinia netus dictum magnis per facilisi sociosqu. Volutpat. Ridiculus nostra.",
                            tools: "",
                            footer: "",
                        },
                    },
                ];
            },
        },
    },
    methods: {},
};
</script>
