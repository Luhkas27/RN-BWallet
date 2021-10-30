import Reactotron from 'reactotron-react-native'

Reactotron.configure()
  .useReactNative({
    storybook: true
  })
  .connect()

console.tron = Reactotron

export default Reactotron
