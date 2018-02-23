// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  needMock: true,
  icmBaseURL: 'http://localhost:4000',
  icmServer: 'INTERSHOP/rest/WFS',
  icmApplication: 'inSPIRED-inTRONICS-Site',

  locales: [
    { lang: 'en_US', currency: 'USD', value: 'en', displayName: 'English' },
    { lang: 'de_DE', currency: 'EUR', value: 'de', displayName: 'German' },
    { lang: 'fr_FR', currency: 'EUR', value: 'fr', displayName: 'French' }
  ]
};
