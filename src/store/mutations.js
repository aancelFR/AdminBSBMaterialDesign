export default {
    CHANGE_THEME(state, newTheme) {
        $("body").removeClass("theme-" + state.theme);
        state.theme = newTheme;
        $("body").addClass("theme-" + state.theme);
    },
};
