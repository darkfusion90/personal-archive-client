import HomePage from "./pages/HomePage"
import LoginPage from "./pages/LoginPage"

interface IRouteMap {
    home: IRoute
    login: IRoute
    //register: IRoute
    //createPost: IRoute
}

interface IRoute {
    path: string
    component: React.ComponentType
    exact: boolean
}

export const routeMap: IRouteMap = {
    home: {
        path: '/',
        component: HomePage,
        exact: true
    },
    login: {
        path: '/login',
        component: LoginPage,
        exact: true
    }
}

export default Object.values<IRoute>(routeMap as any)