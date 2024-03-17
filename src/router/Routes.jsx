import {
    createBrowserRouter,
    createRoutesFromElements,
    RouterProvider,
    Route,
    useParams
} from "react-router-dom";

import Layout from "../layout/Layout.jsx";
import Home from "../pages/Home.jsx";
import Project from "../pages/Project.jsx";
import NotFound from "../pages/NotFound.jsx";

function Routes() {
    const router = createBrowserRouter(
        createRoutesFromElements(
            <Route path="/" element={<Layout />}>
                <Route index element={<Home />} />
                <Route path="projects" element={<Project />}/>
                    
                <Route path="*" element={<NotFound />} />
            </Route>
        )
    );

    return <RouterProvider router={router} />;
}
export default Routes;
