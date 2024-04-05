/* eslint-env node */
require('@rushstack/eslint-patch/modern-module-resolution')

module.exports = {
  root: true,
  extends: [
    'eslint:recommended',
    'plugin:vue/vue3-essential',
    '@vue/eslint-config-typescript',
    '@vue/eslint-config-prettier',
    'prettier'
  ],
  parser: 'vue-eslint-parser',
  parserOptions: {
    parser: '@typescript-eslint/parser',
    project: 'tsconfig.app.json'
  },
  rules: {
    'vue/attribute-hyphenation': [
      'error',
      'always',
      {
        ignore: []
      }
    ],
    'vue/attributes-order': [
      'error',
      {
        order: [
          'DEFINITION',
          'LIST_RENDERING',
          'CONDITIONALS',
          'RENDER_MODIFIERS',
          'GLOBAL',
          ['UNIQUE', 'SLOT'],
          'TWO_WAY_BINDING',
          'OTHER_DIRECTIVES',
          'OTHER_ATTR',
          'EVENTS',
          'CONTENT'
        ],
        alphabetical: false
      }
    ],
    'vue/component-tags-order': [
      'error',
      {
        order: ['template', 'script', 'style']
      }
    ],
    'vue/block-lang': [
      'error',
      {
        script: { lang: 'ts' }
      }
    ],
    'vue/component-api-style': ['error', ['script-setup']],
    'vue/component-name-in-template-casing': [
      'error',
      'PascalCase',
      {
        registeredComponentsOnly: true,
        ignores: ['/^router-/'],
        globals: ['RouterView', 'RouterLink', 'Transition']
      }
    ],
    'vue/custom-event-name-casing': [
      'error',
      'kebab-case',
      {
        ignores: []
      }
    ],
    'vue/define-emits-declaration': ['error', 'type-based'],
    'vue/define-macros-order': [
      'error',
      {
        order: ['defineProps', 'defineEmits']
      }
    ],
    'vue/define-props-declaration': ['error', 'type-based'],
    'vue/no-ref-object-reactivity-loss': ['error'],
    'vue/no-undef-components': [
      'error',
      {
        ignorePatterns: ['router(\\-\\w+)+']
      }
    ],
    'vue/no-undef-properties': [
      'error',
      {
        ignores: ['/^\\$/']
      }
    ],
    'vue/no-unused-properties': [
      'error',
      {
        groups: ['props'],
        deepData: false,
        ignorePublicMembers: false,
        unreferencedOptions: []
      }
    ],
    'vue/no-unused-refs': ['error'],
    'vue/no-use-v-else-with-v-for': ['error'],
    'vue/no-useless-mustaches': [
      'error',
      {
        ignoreIncludesComment: true,
        ignoreStringEscape: true
      }
    ],
    'vue/no-useless-v-bind': [
      'error',
      {
        ignoreIncludesComment: false,
        ignoreStringEscape: false
      }
    ],
    'vue/no-v-text': ['error'],
    'vue/padding-line-between-blocks': ['error', 'always'],
    'vue/prop-name-casing': ['error', 'camelCase'],
    'vue/require-macro-variable-name': [
      'error',
      {
        defineProps: 'props',
        defineEmits: 'emit',
        defineSlots: 'slots',
        useSlots: 'slots',
        useAttrs: 'attrs'
      }
    ],
    'vue/prefer-separate-static-class': ['error'],
    'vue/prefer-true-attribute-shorthand': ['error', 'always'],
    'vue/require-explicit-emits': [
      'error',
      {
        allowProps: true
      }
    ],
    'vue/require-typed-object-prop': ['error'],
    'vue/require-typed-ref': ['error'],
    'vue/singleline-html-element-content-newline': [
      'error',
      {
        ignoreWhenNoAttributes: true,
        ignoreWhenEmpty: true,
        ignores: ['pre', 'textarea', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'span', 'p', 'a', 'li', 'article']
      }
    ],
    'vue/this-in-template': ['error', 'never'],
    'vue/v-for-delimiter-style': ['error', 'in'],
    'vue/v-on-handler-style': [
      'off',
      ['method', 'inline-function'],
      {
        ignoreIncludesComment: false
      }
    ],
    'vue/v-on-event-hyphenation': ['error', 'always'],
    'vue/v-on-style': ['error', 'shorthand'],
    'vue/v-slot-style': [
      'error',
      {
        atComponent: 'v-slot',
        default: 'v-slot',
        named: 'shorthand'
      }
    ],

    'vue/eqeqeq': ['error', 'always'],
    'vue/prefer-template': ['error'],
    'vue/no-useless-concat': ['error'],

    '@typescript-eslint/array-type': [
      'error',
      {
        default: 'array-simple',
        readonly: 'array-simple'
      }
    ],
    '@typescript-eslint/consistent-type-exports': 'off',
    '@typescript-eslint/consistent-type-imports': ['error', {}],
    '@typescript-eslint/explicit-function-return-type': 'error',
    '@typescript-eslint/explicit-member-accessibility': [
      'error',
      {
        accessibility: 'explicit',
        overrides: {
          accessors: 'explicit',
          constructors: 'no-public',
          methods: 'explicit',
          parameterProperties: 'explicit',
          properties: 'explicit'
        }
      }
    ],
    '@typescript-eslint/member-ordering': 'error',
    '@typescript-eslint/method-signature-style': ['error', 'method'],
    '@typescript-eslint/naming-convention': [
      'error',
      {
        format: ['UPPER_CASE', 'camelCase'],
        modifiers: ['const'],
        selector: 'variable',
        leadingUnderscore: 'allow'
      },
      {
        format: ['camelCase'],
        leadingUnderscore: 'allowSingleOrDouble',
        selector: ['parameter']
      },
      {
        format: ['UPPER_CASE', 'PascalCase'],
        selector: 'enum'
      },
      {
        format: ['camelCase'],
        selector: ['classMethod', 'classProperty', 'function', 'parameter', 'variable']
      },
      {
        format: ['PascalCase', 'camelCase'],
        types: ['function'],
        selector: ['variable']
      },
      {
        format: ['PascalCase'],
        selector: ['class', 'interface', 'enumMember']
      }
    ],
    '@typescript-eslint/no-base-to-string': 'off',
    '@typescript-eslint/no-duplicate-type-constituents': [
      'error',
      {
        ignoreUnions: true
      }
    ],
    '@typescript-eslint/no-empty-interface': [
      'error',
      {
        allowSingleExtends: true
      }
    ],
    '@typescript-eslint/no-explicit-any': 'error',
    '@typescript-eslint/no-extraneous-class': 'off',
    '@typescript-eslint/no-floating-promises': 'off',
    '@typescript-eslint/no-inferrable-types': [
      'error',
      {
        ignoreParameters: true
      }
    ],
    '@typescript-eslint/no-unused-vars': [
      'error',
      {
        varsIgnorePattern: '^_',
        argsIgnorePattern: '^_'
      }
    ],
    '@typescript-eslint/no-unsafe-argument': 'off',
    '@typescript-eslint/no-unsafe-assignment': 'off',
    '@typescript-eslint/no-unsafe-call': 'off',
    '@typescript-eslint/no-unsafe-member-access': 'off',
    '@typescript-eslint/no-unsafe-return': 'off',
    '@typescript-eslint/prefer-nullish-coalescing': 'off',
    '@typescript-eslint/restrict-template-expressions': 'off',
    '@typescript-eslint/unbound-method': 'off',
    'no-console': ['warn'],
    'prettier/prettier': [
      'error',
      {
        arrowParens: 'avoid',
        bracketSpacing: true,
        endOfLine: 'auto',
        printWidth: 120,
        proseWrap: 'preserve',
        quoteProps: 'as-needed',
        semi: false,
        singleQuote: true,
        tabWidth: 2,
        trailingComma: 'none',
        useTabs: false
      }
    ]
  }
}
