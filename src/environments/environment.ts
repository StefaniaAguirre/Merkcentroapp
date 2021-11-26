// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  baseUrl: 'http://localhost:4200',
  production: false,
  // 2. Add your credentials from step 1
    firebase : {
    apiKey: "AIzaSyCvog0woL8bZZ5RQfAUWg1rbHSV--_JHO4",
    authDomain: "merkacentro-15916.firebaseapp.com",
    projectId: "merkacentro-15916",
    storageBucket: "merkacentro-15916.appspot.com",
    messagingSenderId: "639600754009",
    appId: "1:639600754009:web:01a3a2abdb2d29cba32048",
    measurementId: "G-Z9GWGDPSWK"
    }
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
