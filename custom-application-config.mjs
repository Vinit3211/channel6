import { PERMISSIONS, entryPointUriPath } from './src/constants';

/**
 * @type {import('@commercetools-frontend/application-config').ConfigOptions}
 */
const config = {
  name: 'Custom Applications',
  entryPointUriPath,
  cloudIdentifier: 'gcp-eu', 
  env: {
    development: {
      initialProjectKey: 'global-new',  
    },
    production: {
      applicationId: 'clah28vtp022nuv0159t7w73n',
      url: 'https://mc.europe-west1.gcp.commercetools.com/account/organizations/7ac994ab-4c27-47e7-96d1-f6a58aa9af5c/custom-applications/owned/clah28vtp022nuv0159t7w73n', 
    },
  },
  oAuthScopes: {
    view: ['view_products'], 
    manage: ['manage_products'],
  },
  icon: '${path:@commercetools-frontend/assets/application-icons/rocket.svg}',
  mainMenuLink: {
    defaultLabel: 'Template starter',
    labelAllLocales: [],
    permissions: [PERMISSIONS.View],
  },
  submenuLinks: [ 
    {
      uriPath: 'channels',
      defaultLabel: 'Channels',
      labelAllLocales: [],
      permissions: [PERMISSIONS.View],
    },
  ],
};

export default config;
