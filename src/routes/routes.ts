import HomePage from "./pages/HomePage"
import LoginPage from "./pages/LoginPage"
import CreatePostPageForm from "./pages/CreatePostPage"
import RegisterPage from "./pages/RegisterPage"
import EditPostPage from './pages/EditPostPage'

interface IRouteMap {
    home: IRoute
    login: IRoute
    register: IRoute
    createPost: IRoute
    editPost: IRoute
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
    register: {
        path: '/register',
        component: RegisterPage,
        exact: true
    },
    createPost: {
        path: '/posts/new',
        component: CreatePostPageForm,
        exact: true
    },
    editPost: {
        path: '/posts/:postId/edit',
        component: EditPostPage,
        exact: true
    }
}

export default Object.values<IRoute>(routeMap as any)