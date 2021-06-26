import Reactotron from 'reactotron-react-native';

const { REACTOTRON_HOST } = process.env;

Reactotron.configure({
  name: 'react-native',
  host: REACTOTRON_HOST,
  port: 9090,
})
  .useReactNative()
  .connect();
