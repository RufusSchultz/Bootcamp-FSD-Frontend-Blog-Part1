import './App.css';
import logo from './assets/logo-white.png';
import {Link, NavLink, Route, Routes} from "react-router-dom";
import HomePage from "../src/pages/home/HomePage.jsx";
import CreateNewBlogPost from "../src/pages/createNewBlogPost/CreateNewBlogPost.jsx";
import OverviewPage from "../src/pages/overview/OverviewPage.jsx";
import BlogPost from "../src/pages/blogPost/BlogPost.jsx";
import PageNotFound from "../src/pages/pageNotFound/PageNotFound.jsx";

function App() {
    return (
        <>
            {/*<div className="page-container">*/}
            {/*    <img src={logo} alt="Company logo"/>*/}
            {/*    <h1>Begin hier met het maken van jouw blog-applicatie!</h1>*/}
            {/*</div>*/}
            <nav>
                <ul>
                    <li><NavLink className={({ isActive }) => isActive ? 'active-menu-link' : 'default-menu-link'} to="/">Home</NavLink></li>
                    <li><NavLink className={({ isActive }) => isActive ? 'active-menu-link' : 'default-menu-link'} to="/overview">Alle posts</NavLink></li>
                    <li><NavLink className={({ isActive }) => isActive ? 'active-menu-link' : 'default-menu-link'} to="/newPost">Nieuwe post</NavLink></li>
                </ul>
            </nav>
            <Routes>
                <Route path="/" element={<HomePage/>}/>
                <Route path="newPost" element={<CreateNewBlogPost/>}/>
                <Route path="overview" element={<OverviewPage/>}/>
                <Route path="posts/:id" element={<BlogPost/>}/>
                <Route path="*" element={<PageNotFound/>}/>
            </Routes>
        </>

    )
}

export default App
