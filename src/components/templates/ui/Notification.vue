<template>
                <div data-notify="container" class="bootstrap-notify-container alert alert-dismissible {0} ' +
                (allowDismiss ? "p-r-35" : "") +
                '" role="alert">' +
                '<button type="button" aria-hidden="true" class="close" data-notify="dismiss">×</button>' +
                '<span data-notify="icon"></span> ' +
                '<span data-notify="title">{1}</span> ' +
                '<span data-notify="message">{2}</span>' +
                '<div class="progress" data-notify="progressbar">' +
                '<div class="progress-bar progress-bar-{0}" role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100" style="width: 0%;"></div>' +
                "</div>" +
                '<a href="{3}" target="{4}" data-notify="url"></a>' +
                "</div>"
</template>

<script>

function showNotification(
    colorName,
    text,
    placementFrom,
    placementAlign,
    animateEnter,
    animateExit
) {
    // eslint-disable-next-line
    if (colorName === null || colorName === '') { colorName = 'bg-black'; }
    // eslint-disable-next-line
    if (text === null || text === '') { text = 'Turning standard Bootstrap alerts'; }
    // eslint-disable-next-line
    if (animateEnter === null || animateEnter === '') { animateEnter = 'animated fadeInDown'; }
    // eslint-disable-next-line
    if (animateExit === null || animateExit === '') { animateExit = 'animated fadeOutUp'; }

    var allowDismiss = true;

    $.notify(
        {
            message: text
        },
        {
            type: colorName,
            allow_dismiss: allowDismiss,
            newest_on_top: true,
            timer: 1000,
            placement: {
                from: placementFrom,
                align: placementAlign
            },
            animate: {
                enter: animateEnter,
                exit: animateExit
            },
            template:
                '<div data-notify="container" class="bootstrap-notify-container alert alert-dismissible {0} ' +
                (allowDismiss ? "p-r-35" : "") +
                '" role="alert">' +
                '<button type="button" aria-hidden="true" class="close" data-notify="dismiss">×</button>' +
                '<span data-notify="icon"></span> ' +
                '<span data-notify="title">{1}</span> ' +
                '<span data-notify="message">{2}</span>' +
                '<div class="progress" data-notify="progressbar">' +
                '<div class="progress-bar progress-bar-{0}" role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100" style="width: 0%;"></div>' +
                "</div>" +
                '<a href="{3}" target="{4}" data-notify="url"></a>' +
                "</div>"
        }
    );
}

export default {
    name: "Card",
    props: {
        init: {
            type: Function,
            default: function() {
                return function() {};
            }
        },
        openByDdefault: {
            type: Boolean,
            default: true
        },
        withRemoveButton: {
            type: Boolean,
            default: false
        },
        withReduceButton: {
            type: Boolean,
            default: false
        },
        header: {
            type: Object,
            default: function() {
                return {
                    class: "",
                    titleClass: "",
                    title: "",
                    description: undefined
                };
            }
        },
        body: {
            type: Object,
            default: function() {
                return {
                    class: ""
                };
            }
        },
        footer: {
            type: Object,
            default: function() {
                return {
                    class: ""
                };
            }
        },
        tools: {
            type: Object,
            default: function() {
                return {
                    li: [],
                    gap: "0",
                    dropdown: {
                        actions: [],
                        param: {}
                    }
                };
            }
        },
        config: {
            type: Object,
            default: function() {
                return {
                    options: {
                        animationSpeed: 500,
                        collapseIcon: "remove",
                        expandIcon: "add",
                        removeIcon: "close",
                        materialClass: "material-icons"
                    },
                    Selector: {
                        data: ".card",
                        collapsed: ".collapsed-card",
                        header: ".card-header",
                        body: ".card-body",
                        footer: ".card-footer",
                        tools: ".card-tools"
                    },
                    ClassName: {
                        collapsed: "collapsed-card"
                    },
                    Event: {
                        collapsed: "collapsed.boxwidget",
                        expanded: "expanded.boxwidget",
                        removed: "removed.boxwidget"
                    }
                };
            }
        }
    },
    mounted: function() {
        this.init();
    },
    methods: {
        remove() {
            var removedEvent = $.Event(this.config.Event.removed);
            $(this.$el).slideUp(
                this.config.options.animationSpeed,
                function() {
                    $(this.$el).trigger(removedEvent);
                    this.$destroy();
                    // remove the element from the DOM
                    this.$el.parentNode.removeChild(this.$el);
                }.bind(this)
            );
        },
        toggle() {
            var isOpen = !$(this.$el).is(this.config.Selector.collapsed);

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
                .children(
                    this.config.Selector.header +
                        ", " +
                        this.config.Selector.body +
                        ", " +
                        this.config.Selector.footer
                )
                .children(this.config.Selector.tools)
                .find("." + materialClass)
                .each(function(index, element) {
                    if (
                        $(element)
                            .html()
                            .trim() === collapseIcon
                    ) {
                        $(element).html(expandIcon);
                    }
                });

            $(this.$el)
                .children(
                    this.config.Selector.body +
                        ", " +
                        this.config.Selector.footer
                )
                .slideUp(
                    this.config.options.animationSpeed,
                    function() {
                        $(this.$el).addClass(this.config.ClassName.collapsed);
                        $(this.$el).trigger(collapsedEvent);
                    }.bind(this)
                );
        },
        expand() {
            var expandedEvent = $.Event(this.config.Event.expanded);
            var collapseIcon = this.config.options.collapseIcon;
            var expandIcon = this.config.options.expandIcon;
            var materialClass = this.config.options.materialClass;

            $(this.$el).removeClass(this.config.ClassName.collapsed);

            $(this.$el)
                .children(
                    this.config.Selector.header +
                        ", " +
                        this.config.Selector.body +
                        ", " +
                        this.config.Selector.footer
                )
                .children(this.config.Selector.tools)
                .find("." + materialClass)
                .each(function(index, element) {
                    if (
                        $(element)
                            .html()
                            .trim() === expandIcon
                    ) {
                        $(element).html(collapseIcon);
                    }
                });

            $(this.$el)
                .children(
                    this.config.Selector.body +
                        ", " +
                        this.config.Selector.footer
                )
                .slideDown(
                    this.config.options.animationSpeed,
                    function() {
                        $(this.$el).trigger(expandedEvent);
                    }.bind(this)
                );
        }
    }
};
</script>
