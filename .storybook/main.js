module.exports = {
  stories: ['../src/elements/public/**/*.stories.mdx'],
  addons: ['@storybook/addon-essentials'],
  webpackFinal: async (config, { configType }) => {
    const tsRule = config.module.rules.find(rule => String(rule.test).includes('ts'));
    const path = require('path');

    config.module.rules.push({
      ...tsRule,
      test: /themeable\.ts$/,
      use: [...tsRule.use, path.resolve(__dirname, `tailwind.${configType.toLowerCase()}.js`)],
    });

    return config;
  },
};
