/* eslint-disable no-unused-vars */
// eslint-disable-next-line
import "./assets/style.scss";
import "./assets/scss/BSBMaterialDesign/import_template.scss";
window.chartColors = {
    red: "rgb(255, 99, 132)",
    orange: "rgb(255, 159, 64)",
    yellow: "rgb(255, 205, 86)",
    green: "rgb(75, 192, 192)",
    blue: "rgb(54, 162, 235)",
    purple: "rgb(153, 102, 255)",
    grey: "rgb(231,233,237)",
};
import $ from "jquery";
window.$ = $;
window.jquery = $;
window.jQuery = $;
import moment from "moment";
window.moment = moment;
global.moment = moment;
import Bloodhound from "bloodhound-js";
window.Bloodhound = Bloodhound;
import _ from "lodash";
import Promise2 from "promise-polyfill";
window.Promise = Promise2;
import Papa from "papaparse";
window.Papa = Papa;
import math from "mathjs/dist/math";
window.math = math;
import Popper2 from "@popperjs/core";
import Popper from "popper.js";
window.Popper = Popper;
import sparkline from "jquery-sparkline/jquery.sparkline";

import bootstrap from "bootstrap/js/src/index";
import "materialize-css";
import autosize from "autosize";
window.autosize = autosize;
import "jquery-zoom/jquery.zoom";
import Chart from "chart.js";
import "chart.js/dist/Chart.bundle";
window.Chart = Chart;
import "chosen-js";
import Dropzone from "dropzone";
window.Dropzone = Dropzone;

import "flot-charts";
// import 'flot-charts/jquery.flot.resize'

import GMaps from "gmaps";
window.GMaps = GMaps;
import noUiSlider from "nouislider";
window.noUiSlider = noUiSlider;
import Cookie from "js-cookie";
window.Cookie = Cookie;
import "jquery-countto";
import Inputmask from "inputmask";
window.Inputmask = Inputmask;
import "jquery-knob/excanvas";
import "jquery-knob/dist/jquery.knob.min";
import "jquery-slimscroll";
import "jquery.spinner/js/jquery.spinner";
import "jquery-validation";
import Swal from "sweetalert2";
window.Swal = Swal;
import "nestable";

import Waves from "node-waves/dist/waves";
window.Waves = Waves;
import Raphael from "raphael";
window.Raphael = Raphael;
import "bootstrap-notify";
import selectpicker from "bootstrap-select/js/bootstrap-select";
import "bootstrap-tagsinput/src/bootstrap-tagsinput";
import "daterangepicker/daterangepicker";
import FastClick from "fastclick";
window.FastClick = FastClick;
import "jqueryui";
import "select2";
import Prism from "prismjs";
import "prismjs/components";
import iconsTrumbowyg from "trumbowyg/dist/ui/icons.svg";
import "trumbowyg/dist/trumbowyg";
// $.trumbowyg.svgPath = iconsTrumbowyg
/*
import emojify from 'emojify.js/dist/js/emojify'
window.emojify = emojify
*/
import "rm-emoji-picker/sheets/sheet_apple_64_indexed_128.png";
import "rm-emoji-picker/sheets/sheet_google_64_indexed_128.png";
import "rm-emoji-picker/sheets/sheet_twitter_64_indexed_128.png";
import "rm-emoji-picker/sheets/sheet_emojione_64_indexed_128.png";
import EmojiPicker from "rm-emoji-picker";
window.EmojiPicker = EmojiPicker;
import "trumbowyg/dist/plugins/allowtagsfrompaste/trumbowyg.allowtagsfrompaste";
import "trumbowyg/dist/plugins/base64/trumbowyg.base64";
import "trumbowyg/dist/plugins/cleanpaste/trumbowyg.cleanpaste";
import "trumbowyg/dist/plugins/colors/trumbowyg.colors";
import "trumbowyg/dist/plugins/fontfamily/trumbowyg.fontfamily";
import "trumbowyg/dist/plugins/fontsize/trumbowyg.fontsize";
import "trumbowyg/dist/plugins/highlight/trumbowyg.highlight";
import "trumbowyg/dist/plugins/history/trumbowyg.history";
import "trumbowyg/dist/plugins/insertaudio/trumbowyg.insertaudio";
import "trumbowyg/dist/plugins/lineheight/trumbowyg.lineheight";
import "trumbowyg/dist/plugins/mathml/trumbowyg.mathml";
import "trumbowyg/dist/plugins/mention/trumbowyg.mention";
import "trumbowyg/dist/plugins/noembed/trumbowyg.noembed";
import "trumbowyg/dist/plugins/pasteembed/trumbowyg.pasteembed";
import "trumbowyg/dist/plugins/pasteimage/trumbowyg.pasteimage";
import "trumbowyg/dist/plugins/preformatted/trumbowyg.preformatted";
import "trumbowyg/dist/plugins/resizimg/trumbowyg.resizimg";
import "trumbowyg/dist/plugins/ruby/trumbowyg.ruby";
import "trumbowyg/dist/plugins/table/trumbowyg.table";
import "trumbowyg/dist/plugins/template/trumbowyg.template";
import "trumbowyg/dist/plugins/upload/trumbowyg.upload";
import ContentTools from "ContentTools";
import "bootstrap-confirmation2";
import "bootstrap-timepicker";
import "leaflet";
import "jquery-mapael/js/maps/france_departments";
import "jquery-mapael/js/maps/usa_states";
import "jquery-mapael/js/maps/world_countries";
import "jquery-mapael/js/maps/world_countries_mercator";
import "jquery-mapael/js/maps/world_countries_miller";
import "mapael-maps/france/france_departments";
import "mapael-maps/france/france_departments_domtom";
import "mapael-maps/france/france_regions";
import "mapael-maps/france/france_regions_2016";
import "mapael-maps/france/france_regions_domtom";
import Mapael from "jquery-mapael";
window.Mapael = Mapael;
import "bootstrap-table/dist/bootstrap-table";
import "bootstrap-table/dist/bootstrap-table-vue";
import "bootstrap-table/dist/themes/materialize/bootstrap-table-materialize";
import "bootstrap-table/dist/locale/bootstrap-table-fr-FR";
import "bootstrap-table/dist/extensions/accent-neutralise/bootstrap-table-accent-neutralise";
import "bootstrap-table/dist/extensions/addrbar/bootstrap-table-addrbar";
import "bootstrap-table/dist/extensions/auto-refresh/bootstrap-table-auto-refresh";
import "bootstrap-table/dist/extensions/cell-input/bootstrap-table-cell-input";
import "bootstrap-table/dist/extensions/cookie/bootstrap-table-cookie";
import "bootstrap-table/dist/extensions/copy-rows/bootstrap-table-copy-rows";
import "bootstrap-table/dist/extensions/defer-url/bootstrap-table-defer-url";
import "bootstrap-table/dist/extensions/editable/bootstrap-table-editable";
import "bootstrap-table/dist/extensions/export/bootstrap-table-export";
import "bootstrap-table/dist/extensions/filter-control/bootstrap-table-filter-control";
import "bootstrap-table/dist/extensions/fixed-columns/bootstrap-table-fixed-columns";
import "bootstrap-table/dist/extensions/group-by-v2/bootstrap-table-group-by";
import "bootstrap-table/dist/extensions/i18n-enhance/bootstrap-table-i18n-enhance";
import "bootstrap-table/dist/extensions/key-events/bootstrap-table-key-events";
import "bootstrap-table/dist/extensions/mobile/bootstrap-table-mobile";
import "bootstrap-table/dist/extensions/multiple-sort/bootstrap-table-multiple-sort";
import "bootstrap-table/dist/extensions/page-jump-to/bootstrap-table-page-jump-to";
import "bootstrap-table/dist/extensions/pipeline/bootstrap-table-pipeline";
import "bootstrap-table/dist/extensions/print/bootstrap-table-print";
// import 'bootstrap-table/dist/extensions/reorder-columns/bootstrap-table-reorder-columns'
import "bootstrap-table/dist/extensions/reorder-rows/bootstrap-table-reorder-rows";
import "bootstrap-table/dist/extensions/resizable/bootstrap-table-resizable";
import "bootstrap-table/dist/extensions/sticky-header/bootstrap-table-sticky-header";
import "bootstrap-table/dist/extensions/toolbar/bootstrap-table-toolbar";
import "bootstrap-table/dist/extensions/treegrid/bootstrap-table-treegrid";
import "blueimp-gallery/js/blueimp-gallery.min";
import Gallery from "blueimp-gallery/js/jquery.blueimp-gallery.min";
window.blueimp = { Gallery: Gallery };
window.Gallery = Gallery;
import "blueimp-gallery/img/error.svg";
import "blueimp-gallery/img/error.png";
import "blueimp-gallery/img/loading.gif";
import "blueimp-gallery/img/play-pause.png";
import "blueimp-gallery/img/play-pause.svg";
import "blueimp-gallery/img/video-play.png";
import "blueimp-gallery/img/video-play.svg";
import "jquery-bar-rating";
import "./assets/js/animate.css";
import "./assets/js/rating";
import "./assets/js/AdminLTEFunction/BoxRefresh";
import "./assets/js/AdminLTEFunction/DirectChat";
/*
import ControlSidebar from './assets/js/AdminLTEFunction/ControlSidebar'
window.ControlSidebar = ControlSidebar
import Layout from './assets/js/AdminLTEFunction/Layout'
window.Layout = Layout
import PushMenu from './assets/js/AdminLTEFunction/PushMenu'
window.PushMenu = PushMenu
*/
/*
import Tree from './assets/js/AdminLTEFunction/Tree'
window.Tree = Tree
*/

import "./assets/js/AdminLTEFunction/TodoList";
import ionicon from "ionicons/dist/index";
window.ionicon = ionicon;

import fullcalendar from "fullcalendar";
window.fullcalendar = fullcalendar;
import waiteMe from "waitMe/waitMe";
window.waiteMe = waiteMe;
import Pace from "pace-progressbar";
window.Pace = Pace;
window.pace = Pace;
import "bootstrap-colorpicker";
import "bootstrap-typeahead/js/bootstrap-typeahead";
import multiSelect from "multiselect/js/jquery.multi-select";
window.multiSelect = multiSelect;
import BarcodeReader from "barcode-reader/src/BarcodeReader";
window.BarcodeReader = BarcodeReader;
import "barcode-reader/src/barcode-reader.jquery";
import twemoji from "twemoji";
window.twemoji = twemoji;
// import 'bootstrap-material-datetimepicker/js/bootstrap-material-datetimepicker'
// import 'bootstrap-colorpicker'
import "morris.js/morris";
// window.Morris = Morris
import tarteaucitron from "tarteaucitronjs/tarteaucitron";
window.tarteaucitron = tarteaucitron;
import "editable-table/mindmup-editabletable";
import Messenger from "messenger/build/js/messenger";
import "messenger/build/js/messenger-theme-flat";
Messenger.options = {
    extraClasses: "messenger-fixed messenger-on-bottom messenger-on-right",
    theme: "flat",
};
import "./assets/js/BSBMaterialDesign/admin";
/**
import './assets/js/BSBMaterialDesign/pages/cards/basic'
import './assets/js/BSBMaterialDesign/pages/cards/colored'
import './assets/js/BSBMaterialDesign/pages/charts/chartjs'
import './assets/js/BSBMaterialDesign/pages/charts/jquery-knob'
import './assets/js/BSBMaterialDesign/pages/charts/flot'
import './assets/js/BSBMaterialDesign/pages/examples/forgot-password'
import './assets/js/BSBMaterialDesign/pages/examples/sign-in'
import './assets/js/BSBMaterialDesign/pages/examples/sign-up'
import './assets/js/BSBMaterialDesign/pages/forms/advanced-form-elements'
// import './assets/js/BSBMaterialDesign/pages/forms/basic-form-elements'
// import './assets/js/BSBMaterialDesign/pages/forms/editors'
import './assets/js/BSBMaterialDesign/pages/forms/form-validation'
// import './assets/js/BSBMaterialDesign/pages/forms/form-wizard'
// import './assets/js/BSBMaterialDesign/pages/maps/google'
// import './assets/js/BSBMaterialDesign/pages/medias/image-gallery'
// import './assets/js/BSBMaterialDesign/pages/tables/jquery-datatable'
// import './assets/js/BSBMaterialDesign/pages/tables/editable-table'
import './assets/js/BSBMaterialDesign/pages/ui/animations'
import './assets/js/BSBMaterialDesign/pages/ui/dialogs'
import './assets/js/BSBMaterialDesign/pages/ui/modals'
import './assets/js/BSBMaterialDesign/pages/ui/notifications'
// import './assets/js/BSBMaterialDesign/pages/ui/range-sliders'
import './assets/js/BSBMaterialDesign/pages/ui/sortable-nestable'
import './assets/js/BSBMaterialDesign/pages/ui/tooltips-popovers'
// import './assets/js/BSBMaterialDesign/pages/widgets/infobox/infobox-1'
// import './assets/js/BSBMaterialDesign/pages/widgets/infobox/infobox-2'
// import './assets/js/BSBMaterialDesign/pages/widgets/infobox/infobox-3'
// import './assets/js/BSBMaterialDesign/pages/widgets/infobox/infobox-4'
// import './assets/js/BSBMaterialDesign/pages/widgets/infobox/infobox-5'
*/

import anime from "animejs/lib/anime.es";
window.anime = anime;

if ($.trumbowyg) {
    $.configurationsTrumbowyg = {
        //  svgPath: $.trumbowyg.svgPath,
        btnsDef: {
            // Customizables dropdowns
            image: {
                dropdown: ["insertImage", "upload", "base64"],
                ico: "insertImage",
            },
        },
        btns: [
            ["viewHTML"],
            ["undo", "redo"],
            ["formatting"],
            ["strong", "em", "del", "underline"],
            ["fontfamily", "fontsize"],
            ["link"],
            ["highlight", "mathml", "lineheight"],
            ["image"],
            ["ruby"],
            ["table"],
            ["insertAudio", "noembed"],
            ["justifyLeft", "justifyCenter", "justifyRight", "justifyFull"],
            ["unorderedList", "orderedList"],
            ["foreColor", "backColor"],
            ["preformatted"],
            ["horizontalRule"],
            ["fullscreen"],
        ],
        plugins: {
            // Add imagur parameters to upload plugin
            /**
                        upload: {
                             serverPath: 'https://api.imgur.com/3/image',
                             fileFieldName: 'image',
                             headers: {
                                 'Authorization': 'Client-ID 9e57cb1c4791cea'
                             },
                             urlPropertyName: 'data.link'
                         },
                         */
            resizimg: {
                minSize: 64,
                step: 16,
            },
        },
    };
}
/**
$('[data-toggle=confirmation]').confirmation({
  rootSelector: '[data-toggle=confirmation]',
  // other options
})
*/
// eslint-disable-next-line
$(function () {
    FastClick.attach(document.body);
});

import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

import HeaderContent from "@/components/templates/HeaderContent";
import HeaderDiv from "@/components/templates/HeaderDiv";
import SearchBar from "@/components/navbar/SearchBar";
import NavbarTop from "@/components/navbar/NavbarTop";
import LeftSideBar from "@/components/sidebar/LeftSideBar";
import RightSideBar from "@/components/sidebar/RightSideBar";
import Dropdown from "@/components/templates/Dropdown";
import Card from "@/components/templates/widgets/Card";
import Infobox from "@/components/templates/widgets/Infobox";

Vue.component("ComponentsSearchBar", SearchBar);
Vue.component("ComponentsNavbarTop", NavbarTop);
Vue.component("ComponentsLeftSideBar", LeftSideBar);
Vue.component("ComponentsRightSideBar", RightSideBar);
Vue.component("HeaderContent", HeaderContent);
Vue.component("HeaderDiv", HeaderDiv);
Vue.component("ComponentDropdown", Dropdown);
Vue.component("ComponentCard", Card);
Vue.component("ComponentInfobox", Infobox);
Vue.config.productionTip = false;

/* import component vuejs */
import SvgFiller from "vue-svg-filler";
Vue.component("svg-filler", SvgFiller);

import VueChatScroll from "vue-chat-scroll";
Vue.use(VueChatScroll);

import VueMaterial from "vue-material";
Vue.use(VueMaterial);
import { BootstrapVue, BootstrapVueIcons } from "bootstrap-vue";
Vue.use(BootstrapVue);
Vue.use(BootstrapVueIcons);
//filter
Vue.filter("formatDate", function (parmval, format = "DD/MM/YYYY hh:mm") {
    if (parmval) {
        return moment(parmval).format(format);
    }
});
Vue.filter("fromNow", function (parmval) {
    if (parmval) {
        return moment(parmval).fromNow();
    }
});
Vue.filter("formatDateFromNow", function (parmval) {
    if (parmval) {
        return moment(parmval).fromNow();
    }
});

var vueColorHex = {
    install: function (Vue) {
        // eslint-disable-next-line
        Vue.prototype.$hexToRgb = function (hexCode) {
            var patt = /^#([\da-fA-F]{2})([\da-fA-F]{2})([\da-fA-F]{2})$/;
            var matches = patt.exec(hexCode);
            var rgb =
                "rgb(" +
                parseInt(matches[1], 16) +
                "," +
                parseInt(matches[2], 16) +
                "," +
                parseInt(matches[3], 16) +
                ")";
            return rgb;
        };
        // eslint-disable-next-line
        Vue.prototype.$hexToRgba = function (hexCode, opacity) {
            var patt = /^#([\da-fA-F]{2})([\da-fA-F]{2})([\da-fA-F]{2})$/;
            var matches = patt.exec(hexCode);
            var rgb =
                "rgba(" +
                parseInt(matches[1], 16) +
                "," +
                parseInt(matches[2], 16) +
                "," +
                parseInt(matches[3], 16) +
                "," +
                opacity +
                ")";
            return rgb;
        };
    },
};
var vueTools = {
    install: function (Vue) {
        Vue.prototype.$animateCss = function (animationName) {
            console.log(this);
            return;
            /*
            var animationEnd =
                "webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend";
            $(this)
                .addClass("animated " + animationName)
                .one(animationEnd, function () {
                    $(this).removeClass("animated " + animationName);
                });
                */
        };
    },
};
// using it to get a collection of elements
Vue.use(vueTools);
//mixin
Vue.mixin({
    computed: {
        $getColorsList() {
            return {
                red: { name: "RED", code: "#F44336", class: "bg-red" },
                pink: { name: "PINK", code: "#E91E63", class: "bg-pink" },
                purple: { name: "PURPLE", code: "#9C27B0", class: "bg-purple" },
                "deep-purple": {
                    name: "DEEP PURPLE",
                    code: "#673AB7",
                    class: "bg-deep-purple",
                },
                indigo: { name: "INDIGO", code: "#3F51B5", class: "bg-indigo" },
                blue: { name: "BLUE", code: "#2196F3", class: "bg-blue" },
                "light-blue": {
                    name: "LIGHT BLUE",
                    code: "#03A9F4",
                    class: "bg-light-blue",
                },
                cyan: { name: "CYAN", code: "#00BCD4", class: "bg-cyan" },
                teal: { name: "TEAL", code: "#009688", class: "bg-teal" },
                green: { name: "GREEN", code: "#4CAF50", class: "bg-green" },
                "light-green": {
                    name: "LIGHT GREEN",
                    code: "#8BC34A",
                    class: "bg-light-green",
                },
                lime: { name: "LIME", code: "#CDDC39", class: "bg-lime" },
                yellow: { name: "YELLOW", code: "#FFEB3B", class: "bg-yellow" },
                amber: { name: "AMBER", code: "#FFC107", class: "bg-amber" },
                orange: { name: "ORANGE", code: "#FF9800", class: "bg-orange" },
                "deep-orange": {
                    name: "DEEP ORANGE",
                    code: "#FF5722",
                    class: "bg-deep-orange",
                },
                brown: { name: "BROWN", code: "#795548", class: "bg-brown" },
                grey: { name: "GREY", code: "#9E9E9E", class: "bg-grey" },
                "blue-grey": {
                    name: "BLUE GREY",
                    code: "#607D8B",
                    class: "bg-blue-grey",
                },
                black: { name: "BLACK", code: "#000000", class: "bg-black" },
            };
        },
    },
});
Vue.config.devtools = process.env.NODE_ENV === "development";
Vue.config.ignoredElements = [/^ion-/];

new Vue({
    router,
    store,
    render: (h) => h(App),
}).$mount("#app");
