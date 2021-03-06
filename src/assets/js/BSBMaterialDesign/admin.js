if (typeof jQuery === "undefined") {
    throw new Error("jQuery plugins need to be before this file");
}

$.AdminBSB = {};
$.AdminBSB.options = {
    colors: {
        red: "#F44336",
        pink: "#E91E63",
        purple: "#9C27B0",
        deepPurple: "#673AB7",
        indigo: "#3F51B5",
        blue: "#2196F3",
        lightBlue: "#03A9F4",
        cyan: "#00BCD4",
        teal: "#009688",
        green: "#4CAF50",
        lightGreen: "#8BC34A",
        lime: "#CDDC39",
        yellow: "#ffe821",
        amber: "#FFC107",
        orange: "#FF9800",
        deepOrange: "#FF5722",
        brown: "#795548",
        grey: "#9E9E9E",
        blueGrey: "#607D8B",
        black: "#000000",
        white: "#ffffff",
    },
    leftSideBar: {
        scrollColor: "rgba(0,0,0,0.5)",
        scrollWidth: "6px",
        scrollAlwaysVisible: false,
        scrollBorderRadius: "5px",
        scrollRailBorderRadius: "0",
        scrollActiveItemWhenPageLoad: false,
        breakpointWidth: 1170,
    },
    dropdownMenu: {
        effectIn: "fadeIn",
        effectOut: "fadeOut",
    },
    size: {
        width: 0,
    },
};
//= =========================================================================================================================

/* Input - Function ========================================================================================================
 *  You can manage the inputs(also textareas) with name of class 'form-control'
 *
 */
$.AdminBSB.input = {
    activate: function ($parentSelectorArg) {
        var $parentSelector = $parentSelectorArg || $("body");

        // On focus event
        $parentSelector.find(".form-control").focus(function () {
            $(this).closest(".form-line").addClass("focused");
        });

        // On change event. This makes the app work well with Lastpass.
        $parentSelector.find(".form-control").change(function () {
            if ($(this).val() !== "") {
                $(this).trigger("focus");
            }
        });

        // On focusout event
        $parentSelector.find(".form-control").focusout(function () {
            var $this = $(this);
            if ($this.parents(".form-group").hasClass("form-float")) {
                if ($this.val() === "") {
                    $this.parents(".form-line").removeClass("focused");
                }
            } else {
                $this.parents(".form-line").removeClass("focused");
            }
        });

        // On label click
        $parentSelector.on(
            "click",
            ".form-float .form-line .form-label",
            function () {
                $(this).parent().find("input").focus();
            }
        );

        // Not blank form
        $parentSelector.find(".form-control").each(function () {
            if ($(this).val() !== "") {
                $(this).parents(".form-line").addClass("focused");
            }
        });
    },
};
//= =========================================================================================================================

/* Form - Select - Function ================================================================================================
 *  You can manage the 'select' of form elements
 *
 */
$.AdminBSB.select = {
    activate: function () {
        if ($.fn.selectpicker) {
            $("select:not(.ms)").selectpicker();
        }
    },
};
//= =========================================================================================================================

//= =========================================================================================================================

/* Browser - Function ======================================================================================================
 *  You can manage browser
 *
 */
var edge = "Microsoft Edge";
var ie10 = "Internet Explorer 10";
var ie11 = "Internet Explorer 11";
var opera = "Opera";
var firefox = "Mozilla Firefox";
var chrome = "Google Chrome";
var safari = "Safari";

$.AdminBSB.browser = {
    activate: function () {
        var _this = this;
        var className = _this.getClassName();

        if (className !== "") $("html").addClass(_this.getClassName());
    },
    getBrowser: function () {
        var userAgent = navigator.userAgent.toLowerCase();

        if (/edge/i.test(userAgent)) {
            return edge;
        } else if (/rv:11/i.test(userAgent)) {
            return ie11;
        } else if (/msie 10/i.test(userAgent)) {
            return ie10;
        } else if (/opr/i.test(userAgent)) {
            return opera;
        } else if (/chrome/i.test(userAgent)) {
            return chrome;
        } else if (/firefox/i.test(userAgent)) {
            return firefox;
        } else if (navigator.userAgent.match(/Version\/[\d.]+.*Safari/)) {
            return safari;
        }

        return undefined;
    },
    getClassName: function () {
        var browser = this.getBrowser();

        if (browser === edge) {
            return "edge";
        } else if (browser === ie11) {
            return "ie11";
        } else if (browser === ie10) {
            return "ie10";
        } else if (browser === opera) {
            return "opera";
        } else if (browser === chrome) {
            return "chrome";
        } else if (browser === firefox) {
            return "firefox";
        } else if (browser === safari) {
            return "safari";
        } else {
            return "";
        }
    },
};

// Skin tab content set height and show scroll
function setSkinListHeightAndScroll(isFirstTime) {
    var height =
        $(window).height() -
        ($(".navbar").innerHeight() +
            $(".right-sidebar .nav-tabs").outerHeight());
    var $el = $(".choose-skin");

    if (!isFirstTime) {
        $el.slimScroll({ destroy: true }).height("auto");
        $el.parent().find(".slimScrollBar, .slimScrollRail").remove();
        var $navbarCollapse = $(".navbar-collapse");
        $navbarCollapse
            .removeClass("in")
            .removeClass("show")
            .removeAttr("style");
        $navbarCollapse.closest(".navbar").removeClass("collapseShow");
    }

    $el.slimscroll({
        height: height + "px",
        color: "rgba(0,0,0,0.5)",
        size: "6px",
        alwaysVisible: false,
        borderRadius: "0",
        railBorderRadius: "0",
    });
}

// Setting tab content set height and show scroll
function setSettingListHeightAndScroll(isFirstTime) {
    var height =
        $(window).height() -
        ($(".navbar").innerHeight() +
            $(".right-sidebar .nav-tabs").outerHeight());
    var $el = $(".right-sidebar .settings");

    if (!isFirstTime) {
        $el.slimScroll({ destroy: true }).height("auto");
        $el.parent().find(".slimScrollBar, .slimScrollRail").remove();
    }

    $el.slimscroll({
        height: height + "px",
        color: "rgba(0,0,0,0.5)",
        size: "6px",
        alwaysVisible: false,
        borderRadius: "0",
        railBorderRadius: "0",
    });
}

// eslint-disable-next-line no-unused-vars
function addLoadEvent(func) {
    var oldonload = window.onload;
    if (typeof window.onload !== "function") {
        window.onload = func;
    } else {
        window.onload = function () {
            oldonload();
            func();
        };
    }
}

window.addEventListener("resize", () => {
    setSkinListHeightAndScroll(false);
    setSettingListHeightAndScroll(false);
});
//= =========================================================================================================================

$(function () {
    setSkinListHeightAndScroll(true);
    setSettingListHeightAndScroll(true);
});
