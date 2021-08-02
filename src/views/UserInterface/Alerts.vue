<template>
    <div class="container-fluid">
        <header-content title="Alerts" />
        <div class="row clearfix">
            <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                <component-card
                    :header="{
                        class: '',
                        title: 'MATERIAL DESIGN ALERTS',
                        titleClass: '',
                        description:
                            'You can use material design color with<code>.bg-red, .bg-pink</code> class',
                    }"
                    :with-reduce-button="true"
                    :with-remove-button="true"
                    :tools="{
                        gap: '-5',
                        dropdown: {
                            actions: [
                                {
                                    label: 'Action',
                                },
                                {
                                    label: 'Another action',
                                },
                                {
                                    label: 'Something else here',
                                },
                            ],
                            param: {
                                class: 'dropdown',
                                haspopup: true,
                                expanded: true,
                                removeIfEmpty: true,
                                icon: 'more_vert',
                                type: 'liCard',
                                ul: {
                                    class: 'dropdown-menu pull-left',
                                },
                            },
                        },
                    }"
                >
                    <template v-slot:body>
                        <div class="alert bg-pink">
                            Lorem ipsum dolor sit amet, id fugit tollit pro,
                            illud nostrud aliquando ad est, quo esse dolorum id
                        </div>
                        <div class="alert bg-orange">
                            Lorem ipsum dolor sit amet, id fugit tollit pro,
                            illud nostrud aliquando ad est, quo esse dolorum id
                        </div>
                        <div class="alert bg-teal">
                            Lorem ipsum dolor sit amet, id fugit tollit pro,
                            illud nostrud aliquando ad est, quo esse dolorum id
                        </div>
                        <div class="alert bg-green">
                            Lorem ipsum dolor sit amet, id fugit tollit pro,
                            illud nostrud aliquando ad est, quo esse dolorum id
                        </div>
                        <div class="alert bg-red">
                            Lorem ipsum dolor sit amet, id fugit tollit pro,
                            illud nostrud aliquando ad est, quo esse dolorum id
                        </div>
                    </template>
                </component-card>
            </div>
        </div>
        <!-- #END# Material Design Alerts -->
        <!-- Dismissible Alerts -->
        <div class="row clearfix">
            <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                <component-card
                    :header="{
                        class: '',
                        title: 'DISMISSIBLE ALERTS',
                        titleClass: '',
                        description:
                            'Build on any alert by adding an optional <code>.alert-dismissible</code> and close button.',
                    }"
                    :with-reduce-button="true"
                    :with-remove-button="true"
                    :tools="{
                        gap: '-5',
                        dropdown: {
                            actions: [
                                {
                                    label: 'Action',
                                },
                                {
                                    label: 'Another action',
                                },
                                {
                                    label: 'Something else here',
                                },
                            ],
                            param: {
                                class: 'dropdown',
                                haspopup: true,
                                expanded: true,
                                removeIfEmpty: true,
                                icon: 'more_vert',
                                type: 'liCard',
                                ul: {
                                    class: 'dropdown-menu pull-left',
                                },
                            },
                        },
                    }"
                >
                    <template v-slot:body>
                        <div
                            class="alert alert-warning alert-dismissible"
                            role="alert"
                        >
                            <button
                                type="button"
                                class="close"
                                data-dismiss="alert"
                                aria-label="Close"
                            >
                                <span aria-hidden="true">&times;</span>
                            </button>
                            Lorem ipsum dolor sit amet, id fugit tollit pro,
                            illud nostrud aliquando ad est, quo esse dolorum id
                        </div>
                        <div
                            class="alert bg-pink alert-dismissible"
                            role="alert"
                        >
                            <button
                                type="button"
                                class="close"
                                data-dismiss="alert"
                                aria-label="Close"
                            >
                                <span aria-hidden="true">&times;</span>
                            </button>
                            Lorem ipsum dolor sit amet, id fugit tollit pro,
                            illud nostrud aliquando ad est, quo esse dolorum id
                        </div>
                        <div
                            class="alert bg-teal alert-dismissible"
                            role="alert"
                        >
                            <button
                                type="button"
                                class="close"
                                data-dismiss="alert"
                                aria-label="Close"
                            >
                                <span aria-hidden="true">&times;</span>
                            </button>
                            Lorem ipsum dolor sit amet, id fugit tollit pro,
                            illud nostrud aliquando ad est, quo esse dolorum id
                        </div>
                        <div
                            class="alert bg-green alert-dismissible"
                            role="alert"
                        >
                            <button
                                type="button"
                                class="close"
                                data-dismiss="alert"
                                aria-label="Close"
                            >
                                <span aria-hidden="true">&times;</span>
                            </button>
                            Lorem ipsum dolor sit amet, id fugit tollit pro,
                            illud nostrud aliquando ad est, quo esse dolorum id
                        </div>
                    </template>
                </component-card>
            </div>
        </div>
        <!-- #END# Dismissible Alerts -->
        <!-- Links In Alerts -->
        <div class="row clearfix">
            <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                <component-card
                    :header="{
                        class: '',
                        title: 'LINKS IN ALERTS',
                        titleClass: '',
                        description:
                            'Use the <code>.alert-link</code> utility class to quickly provide matching colored links within any alert.',
                    }"
                    :with-reduce-button="true"
                    :with-remove-button="true"
                    :tools="{
                        gap: '-5',
                        dropdown: {
                            actions: [
                                {
                                    label: 'Action',
                                },
                                {
                                    label: 'Another action',
                                },
                                {
                                    label: 'Something else here',
                                },
                            ],
                            param: {
                                class: 'dropdown',
                                haspopup: true,
                                expanded: true,
                                removeIfEmpty: true,
                                icon: 'more_vert',
                                type: 'liCard',
                                ul: {
                                    class: 'dropdown-menu pull-left',
                                },
                            },
                        },
                    }"
                >
                    <template v-slot:body>
                        <div class="alert alert-success">
                            <strong>Well done!</strong> You successfully read
                            <a href="javascript:void(0);" class="alert-link"
                                >this important alert message</a
                            >.
                        </div>
                        <div class="alert alert-info">
                            <strong>Heads up!</strong> This
                            <a href="javascript:void(0);" class="alert-link"
                                >alert needs your attention</a
                            >, but it's not super important.
                        </div>
                        <div class="alert alert-warning">
                            <strong>Warning!</strong> Better check yourself,
                            you're
                            <a href="javascript:void(0);" class="alert-link"
                                >not looking too good</a
                            >.
                        </div>
                        <div class="alert alert-danger">
                            <strong>Oh snap!</strong>
                            <a href="javascript:void(0);" class="alert-link"
                                >Change a few things up</a
                            >
                            and try submitting again.
                        </div>
                        <div class="alert bg-pink">
                            Lorem ipsum dolor sit amet, id fugit tollit pro,
                            illud nostrud aliquando ad est, quo esse dolorum id
                            <a href="javascript:void(0);" class="alert-link"
                                >alert link</a
                            >.
                        </div>
                    </template>
                </component-card>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "UserInterfaceAlerts",
    methods: {},
};
</script>
