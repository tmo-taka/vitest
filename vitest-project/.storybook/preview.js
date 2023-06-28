/** @type { import('@storybook/vue3').Preview } */

import { withScreenshot } from 'storycap';

export const decorators = [
  withScreenshot, // Registration the decorator is required
];

export const preview = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
    screenshot: {
      delay: 500
    }
  },
};
