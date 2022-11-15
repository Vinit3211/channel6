import { PERMISSIONS, entryPointUriPath } from './src/constants';

/**
 * @type {import('@commercetools-frontend/application-config').ConfigOptions}
 */
const config = {
  name: 'Custom Applications',
  entryPointUriPath:'/global-new/channels',
  cloudIdentifier: 'gcp-eu',
  env: {
    development: {
      initialProjectKey: 'global-new', 
    },
    production: {
      applicationId: 'clah28vtp022nuv0159t7w73n',
      url: 'https://Gloabal-new.vercel.app',
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
