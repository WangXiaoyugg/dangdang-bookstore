module.exports = {
    'root': true,
    'env': {
        'browser': true,
        'commonjs': true,
        'es2021': true
    },
    'globals': {
        defineProps: 'readonly',
        defineEmits: 'readonly',
        defineExpose: 'readonly',
        withDefaults: 'readonly',
    },
    'extends': [
        'eslint:recommended',
        'plugin:@typescript-eslint/recommended',
        'plugin:vue/vue3-essential'
    ],
    'parserOptions': {
        'ecmaVersion': 'latest',
        'parser': '@typescript-eslint/parser'
    },
    'plugins': [
        '@typescript-eslint',
        'vue'
    ],
    'rules': {
        // eslint-disable-next-line no-undef
        'no-console': process.env.NODE_ENV === 'production' ? 'on' : 'off',
        'space-before-function-paren': 0,
        'vue/no-multiple-template-root': 0,
        '@typescript-eslint/no-empty-function': 0,
        '@typescript-eslint/no-empty-any': [0],
        '@typescript-eslint/no-var-requires': 0,
        'semi': 0,
        'quotes': [2, 'single'],
        'prefer-const': 2,
        '@typescript-eslint/no-unused-vars': 2,
        '@typescript-eslint/no-inferrable-types': 0,
    }
}
