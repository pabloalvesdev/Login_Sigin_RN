import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer, TabRouter } from "react-navigation";
import Login from "../Pages/Login/login";
import Sigin from "../Pages/Sigin/sigin";
import Details from "../Pages/Details/details";

const AppNavigator = createStackNavigator({
    Login: {
        screen: Login,
        navigationOptions: {
            headerShown: false
        }
    },
    Sigin: {
        screen: Sigin,
        navigationOptions: {
            headerShown: false
        }
    },
    Details: {
        screen: Details,
        navigationOptions: {
            headerShown: false
        }
    }
});

export default Rota = createAppContainer(AppNavigator);