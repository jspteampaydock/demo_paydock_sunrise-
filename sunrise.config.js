const getEnv = (env) => {
  return typeof global?.Cypress?.env === 'function'
      ? global.Cypress.env(env)
      : process.env[env];
};
let localConfig = {};
if (getEnv('VUE_APP_LOCAL_SUNRISE_CONFIG')) {
  localConfig = require(process.env
      .VUE_APP_LOCAL_SUNRISE_CONFIG).default;
}
const config = {
  ct: {
    auth: {
      host: 'https://auth.europe-west1.gcp.commercetools.com',
      projectKey: 'demo-paydock',
      credentials: {
        clientId: 'PK9WaT4yeWzJX2f3Vs_RpAZp',
        clientSecret: 'bjQbof1-0sAjhGHRnmh-9tU1-cAVR90r',
      },
      scope: 'manage_project:demo-paydock view_audit_log:demo-paydock manage_api_clients:demo-paydock view_api_clients:demo-paydock'
    },
    api:
        'https://api.europe-west1.gcp.commercetools.com',
  },
  languages: {
    'DE-DE': 'Deutsch'
  },
  countries: {
    US: 'United States',
  },
  formats: {
    number: {
      US: {
        currency: {
          style: 'currency',
          currency: 'AUD',
        },
      },
    },
    datetime: {
      US: {
        short: {
          year: 'numeric',
          month: 'short',
          day: 'numeric',
        },
      },
    },
  },
  categories: {
    salesExternalId: '6',
  },
  facetSearches: [
    {
      name: 'size',
      type: 'text',
      label: {
        it: 'Size',
        de: 'Größe',
        en: 'Size',
      },
    },
    {
      name: 'color',
      type: 'lnum',
      component: 'colors',
      label: {
        de: 'Farbe',
        it: 'Color',
        en: 'Color',
      },
    },
    {
      name: 'designer',
      type: 'enum',
      component: 'designer',
      label: {
        it: 'Designer',
        de: 'Designer',
        en: 'Designer',
      },
    },
  ],
  detailAttributes: [
    {
      name: 'designer',
      label: {
        it: 'Designer',
        de: 'Designer',
        en: 'Designer',
      },
    },
    {
      name: 'colorFreeDefinition',
      label: {
        it: 'Color',
        de: 'Farbe',
        en: 'Color',
      },
    },
    {
      name: 'size',
      label: {
        it: 'Size',
        de: 'Grösse',
        en: 'Size',
      },
    },
    {
      name: 'style',
      label: {
        it: 'Style',
        de: 'Stil',
        en: 'Style',
      },
    },
    {
      name: 'gender',
      label: {
        it: 'Gender',
        de: 'Zielgruppe',
        en: 'Gender',
      },
    },
    {
      name: 'articleNumberManufacturer',
      label: {
        it: 'Manufacturer AID',
        de: 'Herstellernummer',
        en: 'Manufacturer AID',
      },
    },
  ],
  variantSelector: ['color', 'size'],
  variantInProductName: ['size'],
  ...localConfig,
};
// eslint-disable-next-line no-console
export default config;
