import { SplashScreen } from '@geogirafe/lib-geoportal/tools';
import { GeoGirafeApp } from '@geogirafe/lib-geoportal/core';

// Display the splash-screen
const splash = new SplashScreen();
splash.begin();

// Create the new GeoGirafe Application
const girafeApp = new GeoGirafeApp();

// Wait until the application is ready
girafeApp.isReady().then(() => {

    // Remove the splash-screen
    splash.end();
});
