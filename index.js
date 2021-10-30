import { AppRegistry } from 'react-native'

import './src/utils/config/reactotron'
import { name as appName } from './app.json'
import App from './src/App'

AppRegistry.registerComponent(appName, () => App)
