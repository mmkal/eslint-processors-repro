module.exports = {
    plugins: ["markdown", "codegen"],
    rules: {
        "semi": ["error", "always"],
        "quotes": ["error", "double"],
        "codegen/codegen": "warn",
    },
    overrides: [
        {
            files: ["**/*markdown*.md"],
            // processor: "markdown/markdown",
        },
        {
            files: ["**/*codegen*.md"],
        },
    ]
};
