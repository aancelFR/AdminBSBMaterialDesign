module.exports = {
    root: true,
    env: {
        browser: true,
        commonjs: true,
        es6: true,
        jquery: true,
        node: true,
    },
    parserOptions: {
        parser: "babel-eslint",
    },
    rules: {
        indent: ["error", 4],
        "no-console": "off",
        "no-debugger": "off",
        "prettier/prettier": [
            "error",
            {
                endOfLine: "auto",
            },
        ],
    },
    overrides: [
        {
            files: [
                "**/__tests__/*.{j,t}s?(x)",
                "**/tests/unit/**/*.spec.{j,t}s?(x)",
            ],
            env: {
                jest: true,
            },
        },
    ],
    globals: {
        Morris: true,
        Swal: true,
        GMaps: true,
        Dropzone: true,
        Chart: true,
        Waves: true,
        noUiSlider: true,
    },

    extends: ["plugin:vue/recommended", "@vue/prettier", "eslint:recommended"],
};
