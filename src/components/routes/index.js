import {
    BrowserRouter as Router, Routes, Route
} from "react-router-dom";
import NotFound from "../../containers/notfound";
import Home from '../../containers/home';
//import PrivateRoute from './route'
import Layout from "../layout"
import PrivateRoute from "./route"

const _Routes = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Layout><Home /></Layout>} />
                <Route path="*" element={<NotFound />} />
            </Routes>
        </Router>
    )
}

export default _Routes

{/* <Route path="launch" element={<Launch />}>
            <Route path="/" element={<LaunchIndex />} />
            <Route path=":slug" element={<LaunchShoe />} />
          </Route> */}