import { Route } from 'react-router-dom'
import Layout from "../layout"

const PrivateRoute = (props) => {
    const { element: Element, ...rest } = props;
    console.log(props)
    return (
        <Route {...rest} render={(props) =>
            <Layout {...props}>
                <Element {...props} />
            </Layout>
        } />
    )
}

export default PrivateRoute