/** @type { import('@storybook/react-vite').StorybookConfig } */
const config = {
  stories: ["../src/**/*.mdx", "../src/**/*.stories.@(js|jsx|mjs|ts|tsx)"],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-onboarding",
    "@storybook/addon-interactions",
  ],
  framework: {
    name: "@storybook/react-vite",
    options: {},
  },
  docs: {
    autodocs: "tag",
  },
};
export default config;



//Storybook aapke UI components (jaise Button, Card, Modal) ko alag se develop, test, aur showcase karne ka ek tool hai — bina poori website ya app chalaye.  


// MUI ek React library hai jisme pre-designed UI components hote hain jo Google ke Material Design par based hote hain. Ye development fast, clean aur responsive banata hai