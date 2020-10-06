import HomePage from "./pages/HomePage"
import LoginPage from "./pages/LoginPage"
import CreatePostPageFormConnector from "./pages/CreatePostPage/CreatePostPage-FormConnector"

interface IRouteMap {
    home: IRoute
    login: IRoute
    //register: IRoute
    createPost: IRoute
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
    },
    createPost: {
        path: '/new-post',
        component: CreatePostPageFormConnector,
        exact: true
    }
}

export default Object.values<IRoute>(routeMap as any)