<template>
    <div class="container-fluid">
        <header-content title="TYPOGRAPHY" />
        <!-- Body Copy -->
        <component-card
            :header="{
                class: '',
                title: 'Body copy',
                titleClass: '',
            }"
            :with-reduce-button="true"
            :with-remove-button="true"
            :tools="{
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
                <p class="lead">
                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                    Aenean commodo ligula eget dolor. Aenean massa.
                </p>
                <p>
                    Donec pede justo, fringilla vel, aliquet nec, vulputate
                    eget, arcu. In enim justo, rhoncus ut, imperdiet a,
                    venenatis vitae, justo. Nullam dictum felis eu pede mollis
                    pretium. Integer tincidunt. Cras dapibus. Vivamus elementum
                    semper nisi. Aenean vulputate eleifend tellus. Aenean leo
                    ligula, porttitor eu, consequat vitae, eleifend ac, enim.
                    Aliquam lorem ante, dapibus in, viverra quis, feugiat a,
                    tellus. Phasellus viverra nulla ut metus varius laoreet.
                    Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel
                    augue. Curabitur ullamcorper ultricies nisi. Nam eget dui.
                    Etiam rhoncus. Maecenas tempus, tellus eget
                </p>
                <p>
                    Nam quam nunc, blandit vel, luctus pulvinar, hendrerit id,
                    lorem. Maecenas nec odio et ante tincidunt tempus. Donec
                    vitae sapien ut libero venenatis faucibus. Nullam quis ante.
                    Etiam sit amet orci eget eros faucibus tincidunt. Duis leo.
                    Sed fringilla mauris sit amet nibh. Donec sodales sagittis
                    magna. Sed consequat, leo eget bibendum sodales, augue velit
                    cursus nunc.
                </p>
            </template>
        </component-card>
        <!-- #END# Body Copy -->
        <!-- Headings -->
        <component-card
            :header="{
                class: '',
                title: 'HEADINGS',
                titleClass: '',
            }"
            :with-reduce-button="true"
            :with-remove-button="true"
            :tools="{
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
                <h1>h1. AdminBSB Heading</h1>
                <h1 class="h1">
                    h1. AdminBSB Heading <small>with class</small>
                </h1>
                <p class="m-b-30">
                    In enim justo, rhoncus ut, imperdiet a, venenatis vitae,
                    justo. Nullam dictum felis eu pede mollis pretium. Integer
                    tincidunt. Cras dapibus. Vivamus elementum semper nisi.
                    Aenean vulputate eleifend tellus. Aenean leo ligula,
                    porttitor eu, consequat vitae, eleifend ac, enim.
                </p>

                <h2>h2. AdminBSB Heading</h2>
                <h2 class="h2">
                    h2. AdminBSB Heading <small>with class</small>
                </h2>
                <p class="m-t-10 m-b-30">
                    In enim justo, rhoncus ut, imperdiet a, venenatis vitae,
                    justo. Nullam dictum felis eu pede mollis pretium. Integer
                    tincidunt. Cras dapibus. Vivamus elementum semper nisi.
                    Aenean vulputate eleifend tellus. Aenean leo ligula,
                    porttitor eu, consequat vitae, eleifend ac, enim.
                </p>

                <h3>h3. AdminBSB Heading</h3>
                <h3 class="h3">
                    h3. AdminBSB Heading <small>with class</small>
                </h3>
                <p class="m-t-15 m-b-30">
                    In enim justo, rhoncus ut, imperdiet a, venenatis vitae,
                    justo. Nullam dictum felis eu pede mollis pretium. Integer
                    tincidunt. Cras dapibus. Vivamus elementum semper nisi.
                    Aenean vulputate eleifend tellus. Aenean leo ligula,
                    porttitor eu, consequat vitae, eleifend ac, enim.
                </p>

                <h4>h4. AdminBSB Heading</h4>
                <h4 class="h4">
                    h4. AdminBSB Heading <small>with class</small>
                </h4>
                <p class="m-t-15 m-b-30">
                    In enim justo, rhoncus ut, imperdiet a, venenatis vitae,
                    justo. Nullam dictum felis eu pede mollis pretium. Integer
                    tincidunt. Cras dapibus. Vivamus elementum semper nisi.
                    Aenean vulputate eleifend tellus. Aenean leo ligula,
                    porttitor eu, consequat vitae, eleifend ac, enim.
                </p>

                <h5>h5. AdminBSB Heading</h5>
                <h5 class="h5">
                    h5. AdminBSB Heading <small>with class</small>
                </h5>
                <p class="m-t-15 m-b-30">
                    In enim justo, rhoncus ut, imperdiet a, venenatis vitae,
                    justo. Nullam dictum felis eu pede mollis pretium. Integer
                    tincidunt. Cras dapibus. Vivamus elementum semper nisi.
                    Aenean vulputate eleifend tellus. Aenean leo ligula,
                    porttitor eu, consequat vitae, eleifend ac, enim.
                </p>

                <h6>h6. AdminBSB Heading</h6>
                <h6 class="h6">
                    h6. AdminBSB Heading <small>with class</small>
                </h6>
                <p class="m-t-15">
                    In enim justo, rhoncus ut, imperdiet a, venenatis vitae,
                    justo. Nullam dictum felis eu pede mollis pretium. Integer
                    tincidunt. Cras dapibus. Vivamus elementum semper nisi.
                    Aenean vulputate eleifend tellus. Aenean leo ligula,
                    porttitor eu, consequat vitae, eleifend ac, enim.
                </p>
            </template>
        </component-card>
        <component-card
            :header="{
                class: '',
                title: 'Display headings',
                titleClass: '',
            }"
            :with-reduce-button="true"
            :with-remove-button="true"
            :tools="{
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
                <code>&lt;h1 class="display-1"&gt;Display 1&lt;/h1&gt;</code>
                <h1 class="display-1">Display 1</h1>
                <code>&lt;h1 class="display-2"&gt;Display 2&lt;/h1&gt;</code>
                <h1 class="display-2">Display 2</h1>
                <code>&lt;h1 class="display-3"&gt;Display 3&lt;/h1&gt;</code>
                <h1 class="display-3">Display 3</h1>
                <code>&lt;h1 class="display-4"&gt;Display 4&lt;/h1&gt;</code>
                <h1 class="display-4">Display 4</h1>
            </template>
        </component-card>
        <!-- #END# Headings -->
        <!-- Text Styles -->
        <component-card
            :header="{
                class: '',
                title: 'TEXT STYLES',
                titleClass: '',
                description:
                    'You can use classes which names are <code>.font-bold, .font-italic, .font-underline,.font-line-through, .font-overline</code>',
            }"
            :with-reduce-button="true"
            :with-remove-button="true"
            :tools="{
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
                <div class="row clearfix">
                    <div class="col-lg-2 col-md-2 col-sm-6 col-xs-6">
                        <p>
                            <b>Normal</b>
                        </p>
                        <p>Default text</p>
                        <p class="col-pink">Text pink color</p>
                        <p class="col-cyan">Text cyan color</p>
                        <p class="col-teal">Text teal color</p>
                        <p class="col-orange">Text orange color</p>
                        <p class="col-blue-grey">
                            Text blue grey color
                        </p>
                    </div>
                    <div class="col-lg-2 col-md-2 col-sm-6 col-xs-6">
                        <p>
                            <b>Bold</b>
                        </p>
                        <p class="font-bold">Default text</p>
                        <p class="font-bold col-pink">
                            Text pink color
                        </p>
                        <p class="font-bold col-cyan">
                            Text cyan color
                        </p>
                        <p class="font-bold col-teal">
                            Text teal color
                        </p>
                        <p class="font-bold col-orange">
                            Text orange color
                        </p>
                        <p class="font-bold col-blue-grey">
                            Text blue grey color
                        </p>
                    </div>
                    <div class="col-lg-2 col-md-2 col-sm-6 col-xs-6">
                        <p>
                            <b>Italic</b>
                        </p>
                        <p class="font-italic">Default text</p>
                        <p class="font-italic col-pink">
                            Text pink color
                        </p>
                        <p class="font-italic col-cyan">
                            Text cyan color
                        </p>
                        <p class="font-italic col-teal">
                            Text teal color
                        </p>
                        <p class="font-italic col-orange">
                            Text orange color
                        </p>
                        <p class="font-italic col-blue-grey">
                            Text blue grey color
                        </p>
                    </div>
                    <div class="col-lg-2 col-md-2 col-sm-6 col-xs-6">
                        <p>
                            <b>Underline</b>
                        </p>
                        <p class="font-underline">Default text</p>
                        <p class="font-underline col-pink">
                            Text pink color
                        </p>
                        <p class="font-underline col-cyan">
                            Text cyan color
                        </p>
                        <p class="font-underline col-teal">
                            Text teal color
                        </p>
                        <p class="font-underline col-orange">
                            Text orange color
                        </p>
                        <p class="font-underline col-blue-grey">
                            Text blue grey color
                        </p>
                    </div>
                    <div class="col-lg-2 col-md-2 col-sm-6 col-xs-6">
                        <p>
                            <b>Line Through</b>
                        </p>
                        <p class="font-line-through">Default text</p>
                        <p class="font-line-through col-pink">
                            Text pink color
                        </p>
                        <p class="font-line-through col-cyan">
                            Text cyan color
                        </p>
                        <p class="font-line-through col-teal">
                            Text teal color
                        </p>
                        <p class="font-line-through col-orange">
                            Text orange color
                        </p>
                        <p class="font-line-through col-blue-grey">
                            Text blue grey color
                        </p>
                    </div>
                    <div class="col-lg-2 col-md-2 col-sm-6 col-xs-6">
                        <p>
                            <b>Overline</b>
                        </p>
                        <p class="font-overline">Default text</p>
                        <p class="font-overline col-pink">
                            Text pink color
                        </p>
                        <p class="font-overline col-cyan">
                            Text cyan color
                        </p>
                        <p class="font-overline col-teal">
                            Text teal color
                        </p>
                        <p class="font-overline col-orange">
                            Text orange color
                        </p>
                        <p class="font-overline col-blue-grey">
                            Text blue grey color
                        </p>
                    </div>
                </div></template
            >
        </component-card>
        <!-- #END# Text Styles -->
        <!-- Blockquotes -->
        <component-card
            :header="{
                class: '',
                title: 'BLOCKQUOTES',
                titleClass: '',
            }"
            :with-reduce-button="true"
            :with-remove-button="true"
            :tools="{
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
                <blockquote class="blockquote m-b-25">
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Integer posuere erat a ante.
                    </p>
                </blockquote>
                <blockquote class="blockquote">
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Integer posuere erat a ante.
                    </p>
                    <footer class="blockquote-footer">
                        Someone famous in
                        <cite title="Source Title">Source Title</cite>
                    </footer>
                </blockquote>
                <blockquote class="blockquote text-right">
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Integer posuere erat a ante.
                    </p>
                    <footer class="blockquote-footer">
                        Someone famous in
                        <cite title="Source Title">Source Title</cite>
                    </footer>
                </blockquote>
            </template>
        </component-card>
        <!-- #END# Blockquotes -->
        <!-- Unordered List -->
        <div class="row clearfix">
            <div class="col-lg-4 col-md-4 col-sm-12 col-xs-12">
                <component-card
                    :header="{
                        class: '',
                        title: 'UNORDERED LIST',
                        titleClass: '',
                    }"
                    :with-reduce-button="true"
                    :with-remove-button="true"
                    :tools="{
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
                        <ul class="browser-default">
                            <li>Lorem ipsum dolor sit amet</li>
                            <li>Consectetur adipiscing elit</li>
                            <li>Integer molestie lorem at massa</li>
                            <li>Facilisis in pretium nisl aliquet</li>
                            <li>
                                Nulla volutpat aliquam velit
                                <ul class="browser-default">
                                    <li>Phasellus iaculis neque</li>
                                    <li>Purus sodales ultricies</li>
                                    <li>Vestibulum laoreet porttitor sem</li>
                                    <li>Ac tristique libero volutpat at</li>
                                </ul>
                            </li>
                            <li>Faucibus porta lacus fringilla vel</li>
                            <li>Aenean sit amet erat nunc</li>
                            <li>Eget porttitor lorem</li>
                        </ul>
                    </template>
                </component-card>
            </div>
            <div class="col-lg-4 col-md-4 col-sm-12 col-xs-12">
                <component-card
                    :header="{
                        class: '',
                        title: 'ORDERED LIST',
                        titleClass: '',
                    }"
                    :with-reduce-button="true"
                    :with-remove-button="true"
                    :tools="{
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
                        <ol>
                            <li>Lorem ipsum dolor sit amet</li>
                            <li>Consectetur adipiscing elit</li>
                            <li>Integer molestie lorem at massa</li>
                            <li>Facilisis in pretium nisl aliquet</li>
                            <li>
                                Nulla volutpat aliquam velit
                                <ol>
                                    <li>Phasellus iaculis neque</li>
                                    <li>Purus sodales ultricies</li>
                                    <li>Vestibulum laoreet porttitor sem</li>
                                    <li>Ac tristique libero volutpat at</li>
                                </ol>
                            </li>
                            <li>Faucibus porta lacus fringilla vel</li>
                            <li>Aenean sit amet erat nunc</li>
                            <li>Eget porttitor lorem</li>
                        </ol>
                    </template>
                </component-card>
            </div>
            <div class="col-lg-4 col-md-4 col-sm-12 col-xs-12">
                <component-card
                    :header="{
                        class: '',
                        title: 'UNSTYLED LIST',
                        titleClass: '',
                    }"
                    :with-reduce-button="true"
                    :with-remove-button="true"
                    :tools="{
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
                        <ul>
                            <li>Lorem ipsum dolor sit amet</li>
                            <li>Consectetur adipiscing elit</li>
                            <li>Integer molestie lorem at massa</li>
                            <li>Facilisis in pretium nisl aliquet</li>
                            <li>
                                Nulla volutpat aliquam velit
                                <ul class="browser-default">
                                    <li>Phasellus iaculis neque</li>
                                    <li>Purus sodales ultricies</li>
                                    <li>Vestibulum laoreet porttitor sem</li>
                                    <li>Ac tristique libero volutpat at</li>
                                </ul>
                            </li>
                            <li>Faucibus porta lacus fringilla vel</li>
                            <li>Aenean sit amet erat nunc</li>
                            <li>Eget porttitor lorem</li>
                        </ul>
                    </template>
                </component-card>
            </div>
        </div>
        <!-- #END# Unordered List -->
    </div>
</template>

<script>
export default {
    name: "Typography",
    data() {
        return {};
    },
};
</script>
