module.exports = {
    "root": true,
    "env": {
        // "browser": true,
        // "commonjs": true,
        // "es2020": true
        "es6": true,
    },
    // 让vue中全局函数可以使用
    "globals": {
        defineProps: 'readonly',
        defineEmits: 'readonly',
        defineExpose: 'readonly',
        withDefaults: 'readonly',
    },
    "extends": [
        // "eslint:recommended",
        // "plugin:vue/essential",
        // "plugin:@typescript-eslint/eslint-recommended",
        "plugin:@typescript-eslint/recommended"
    ],
    "parser": "vue-eslint-parser",
    "parserOptions": {
        "ecmaVersion": 12,
        "parser": "@typescript-eslint/parser"
    },
    "plugins": [
        "vue",
        // "@typescript-eslint"
    ],
    "rules": {
        "no-console": process.env.NODE_ENV === 'production' ? 'warn': 'off',
        'space-before-function-paren': 0,
        'vue/no-multiple-template-root': 0,
        '@typescript-eslint/no-empty-function': 0,
        '@typescript-eslint/no-empty-any': [0],
        '@typescript-eslint/no-var-requires': 0,
        "semi": 0,
        "quotes": [2, 'single'],
        "prefer-const": 2,
        "@typescript-eslint/no-unused-vars": 0,
        '@typescript-eslint/no-inferrable-types': 0,
    }
};
