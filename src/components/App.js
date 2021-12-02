import store from './../redux/store';
import { Provider } from 'react-redux';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import NotFound from "./../containers/notfound";
import Layout from "./../components/layout"
import Home from '../containers/home';
import Product from '../containers/product';

const App = () => {
  return (
    <Provider store={store}>
      <Router>
        <Routes>
          <Route path="/"
            element={
              <Layout>
                <Home />
              </Layout>
            } />
          <Route path="/products"
            element={
              <Layout>
                <Product />
              </Layout>
            } />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
    </Provider >
  )
};

export default App;


/*<BrowserRouter>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/products/create" element={<ProductCreate />} />
        <Route path="/products/edit/:id" element={<ProductUpdate />} />
        <Route path="/departments" element={<Departments />} />
        <Route path="/departments/new" element={<DepartmentCreate />} />
        <Route path="/departments/edit/:id" element={<DepartmentUpdate />} />
        <Route path="/categories" element={<Categories />} />
        <Route path="/categories/new" element={<CategoryCreate />} />
        <Route path="/categories/edit/:id" element={<CategoryUpdate />} />
        <Route element={<NotFount />} />
      </BrowserRouter>*/