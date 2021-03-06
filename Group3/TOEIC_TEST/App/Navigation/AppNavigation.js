import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import MainBody from '../Components/MainBody'
import Search from '../Components/Search'
const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

const AppNavigation = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator
                initialRouteName="MainBody"
                headerMode={null}
            >
                <Stack.Screen name="MainBody" component={MainBody} />
                <Stack.Screen name="Search" component={Search} />
            </Stack.Navigator>
        </NavigationContainer >
    );
}

export default AppNavigation