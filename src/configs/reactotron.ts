import AsyncStorage from '@react-native-async-storage/async-storage';

import Reactotron from 'reactotron-react-native';

const { REACTOTRON_HOST } = process.env;

if (__DEV__) {
  Reactotron.configure({
    name: 'react-native',
    host: REACTOTRON_HOST,
    port: 9090,
  })
    .setAsyncStorageHandler(AsyncStorage)
    .useReactNative()
    .connect();
}
