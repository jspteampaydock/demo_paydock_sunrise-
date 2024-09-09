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
      projectKey: 'demo2-paydock',
      credentials: {
        clientId: 'VAcpYpCl1Xft4VXUBDiGqpz7',
        clientSecret: 'fEUEzWFvUA1G496YZ7kxriJyjm23gGvO',
      },
      scope: 'manage_payments:demo2-paydock view_quotes:demo2-paydock manage_order_edits:demo2-paydock manage_import_containers:demo2-paydock manage_associate_roles:demo2-paydock manage_orders:demo2-paydock manage_customer_groups:demo2-paydock view_api_clients:demo2-paydock manage_product_selections:demo2-paydock view_audit_log:demo2-paydock view_shipping_methods:demo2-paydock manage_project:demo2-paydock manage_api_clients:demo2-paydock manage_connectors:demo2-paydock view_product_selections:demo2-paydock manage_customers:demo2-paydock manage_discount_codes:demo2-paydock manage_audit_log:demo2-paydock manage_approval_rules:demo2-paydock view_project_settings:demo2-paydock manage_cart_discounts:demo2-paydock manage_products:demo2-paydock manage_business_units:demo2-paydock view_messages:demo2-paydock view_shopping_lists:demo2-paydock manage_categories:demo2-paydock manage_checkout_payment_intents:demo2-paydock manage_approval_flows:demo2-paydock manage_attribute_groups:demo2-paydock manage_connectors_deployments:demo2-paydock view_products:demo2-paydock manage_sessions:demo2-paydock view_quote_requests:demo2-paydock manage_extensions:demo2-paydock'
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
