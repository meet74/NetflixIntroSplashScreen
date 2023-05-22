import  React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack'
import SplashScreen from '../pages/SplashScreen';
import LoginScreen from '../pages/LoginScreen';

const Navigation = () => {
  const MainStack = createNativeStackNavigator();
  const AuthStack = createNativeStackNavigator();
  const HomeStack = createNativeStackNavigator();

  const AuthStackNav = () =>{
    return(
        <AuthStack.Navigator screenOptions={{headerShown:false, animation:"fade"}}>
        <AuthStack.Screen  name='Splash' component={SplashScreen}/>
        <AuthStack.Screen name='Login' component={LoginScreen}/>
    </AuthStack.Navigator>
    )
  }
  return (
    <NavigationContainer>
        <MainStack.Navigator  screenOptions={{headerShown:false}}>
            <MainStack.Screen name='Auth' component={AuthStackNav}/>
        </MainStack.Navigator>
    </NavigationContainer>
  );
}

export default Navigation