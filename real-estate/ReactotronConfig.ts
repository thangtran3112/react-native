import { NativeModules, Platform } from 'react-native';
import Reactotron from 'reactotron-react-native';

// Get the device IP for development
let scriptHostname;
if (__DEV__) {
    try {
        const scriptURL = NativeModules.SourceCode?.scriptURL;
        if (scriptURL && typeof scriptURL === 'string') {
            scriptHostname = scriptURL.split('://')[1].split(':')[0];
        }
    } catch (error) {
        console.log('Reactotron: Could not detect host from scriptURL');
    }

    // Platform-specific fallbacks
    if (!scriptHostname || scriptHostname === 'localhost' || scriptHostname === '127.0.0.1') {
        if (Platform.OS === 'android') {
            scriptHostname = '10.0.2.2'; // Android emulator default
        } else {
            scriptHostname = 'localhost'; // iOS simulator default
        }
    }
}

const reactotron = Reactotron
    .configure({
        name: 'Real Estate App',
        host: scriptHostname || 'localhost',
    })
    .useReactNative({
        asyncStorage: false, // there are more options to the async storage.
        networking: {
            // optionally, you can turn it off with false.
            ignoreUrls: /symbolicate/
        },
        editor: false, // there are more options to editor
        errors: { veto: (stackFrame) => false }, // or turn it off with false
        overlay: false, // just turning off overlay
    })
    .connect();

// Let's clear Reactotron on every time we load the app
if (__DEV__) {
    reactotron.clear!();
}

export default reactotron;
