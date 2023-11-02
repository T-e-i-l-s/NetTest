
import NetTest from './Pages/NetTest/page'

import { createStackNavigator } from '@react-navigation/stack'
import { NavigationContainer } from '@react-navigation/native'

const Stack = createStackNavigator()

export default function Navigate () {

  return <NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen
        name="NetTest"
        component={ NetTest }
        options={ { headerShown: false, animationTypeForReplace: 'pop' } }
      />
    </Stack.Navigator>
  </NavigationContainer>

}
