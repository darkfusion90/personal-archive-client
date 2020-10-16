import accountStateMiddlewares from './states/account-state/middlewares';
import postsMiddlewares from './states/posts-state/middlewares'

export default [...accountStateMiddlewares, ...postsMiddlewares]

