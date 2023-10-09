import { applicationConfig, type Preview } from "@storybook/angular";
import { setCompodocJson } from "@storybook/addon-docs/angular";
import { initialize, mswLoader } from 'msw-storybook-addon';
import docJson from "../documentation.json";
import { importProvidersFrom } from "@angular/core";
import { HttpClientModule } from "@angular/common/http";
setCompodocJson(docJson);

initialize();

const decorators = [
  applicationConfig({
    providers: [importProvidersFrom(HttpClientModule)]
  })
];

const preview: Preview = {
  decorators: decorators,
  loaders: [mswLoader],
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  },
};

export default preview;
