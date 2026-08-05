import withNuxt from './.nuxt/eslint.config.mjs'

export default withNuxt(
  {
    name: 'word-panda/rules',
    files: ['**/*.{ts,mts,tsx,vue}'],
    rules: {
      'vue/component-name-in-template-casing': [
        'error',
        'PascalCase',
        {
          registeredComponentsOnly: false,
          ignores: []
        }
      ],
      'vue/attributes-order': [
        'error',
        {
          order: [
            'LIST_RENDERING',
            'CONDITIONALS',
            'RENDER_MODIFIERS',
            'GLOBAL',
            'UNIQUE',
            'TWO_WAY_BINDING',
            'DEFINITION',
            'OTHER_DIRECTIVES',
            'OTHER_ATTR',
            'EVENTS',
            'CONTENT'
          ]
        }
      ],
      'vue/prop-name-casing': ['error', 'camelCase'],
      'vue/custom-event-name-casing': ['error', 'kebab-case', { ignores: [] }],
      'vue/first-attribute-linebreak': [
        'error',
        {
          singleline: 'ignore',
          multiline: 'below'
        }
      ],
      'vue/camelcase': 'error'
    }
  },
  {
    name: 'word-panda/ignores',
    ignores: ['**/dist/**', '**/.output/**', '**/.netlify/**', '**/coverage/**']
  },
  {
    name: 'word-panda/relaxed-server',
    files: ['server/**/*.ts'],
    rules: {
      'no-console': 'off'
    }
  }
)
