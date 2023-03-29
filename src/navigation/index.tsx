import { NavigationContainer } from '@react-navigation/native'
import {
	createNativeStackNavigator,
  } from '@react-navigation/native-stack'
import Home from '../screens/home'
import Details from '../screens/details'

const Stack = createNativeStackNavigator<RootStackParamList>()
import { RootStackParamList } from './types'

const RootNavigator = () => {

	return (
		<Stack.Navigator>
			 <Stack.Group>
            <Stack.Screen
              name='Home'
              component={Home}
              options={{
                headerShown: false,
              }}
			  
            />
            <Stack.Screen
              name='Details'
              component={Details}
              options={{
                headerShown: false,
              }}
			  
            />
			</Stack.Group>
			</Stack.Navigator>
  )
}

const navigation = () => {
	return (
		<NavigationContainer>
	    <RootNavigator />
    </NavigationContainer>
  )
}

export default navigation
