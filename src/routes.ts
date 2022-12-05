/**
 * 整合router
 */

import { Routes } from '@interfaces/routes.interface'
import IndexRoute from '@routes/index.route'
// import UserRoute from '@routes/users.route'
import AuthRoute from '@routes/auth.route'
import GrapglRoute from '@routes/graphql.route'
import SocketRoute from './routes/socket.route'

const RouteLists: {
    [key: string]: Routes
} = {
    index: new IndexRoute(),
    // users: new UserRoute(),
    auth: new AuthRoute(),
    graphql: new GrapglRoute(),
}

export const socketRoutes = new SocketRoute()

export default RouteLists
