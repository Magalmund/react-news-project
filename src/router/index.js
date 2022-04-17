import About from "../pages/About";
import Posts from "../pages/Posts";
import PostIdPage from "../pages/PostIdPage";
import Profile from "../pages/Profile";
import Login from "../pages/Login";


export const privateRoutes = [
    {name: '/about', component: <About/>, exact: true},
    {name: '/posts', component: <Posts/>, exact: true},
    {name: '/posts/:id', component: <PostIdPage/>, exact: true},
    {name: '/profile', component: <Profile/>, exact: true},
]

export const publicRoutes = [
    {name: '/login', component: <Login/>, exact: true},
]
