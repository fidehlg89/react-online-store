import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Layout from "../../components/layout";
import NotFound from "../../containers/notfound";
import Home from "../../containers/home";
import Product from "../../containers/product";
import ProductCreate from "../../containers/product/productcreate";
import ProductUpdate from "../../containers/product/productupdate";
import Department from "../../containers/department";
import DepartmentCreate from "../../containers/department/departmentcreate";
import DepartmentUpdate from "../../containers/department/departmentupdate";
import Category from "../../containers/category";
import CategoryCreate from "../../containers/category/categorycreate";
import CategoryUpdate from "../../containers/category/categoryupdate";

const AppRouter = () => {
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <Layout>
              <Home />
            </Layout>
          }
        />
        <Route
          path="/products"
          element={
            <Layout>
              <Product />
            </Layout>
          }
        />
        <Route
          path="/products/create"
          element={
            <Layout>
              <ProductCreate />
            </Layout>
          }
        />
        <Route
          path="/products/update/:id"
          element={
            <Layout>
              <ProductUpdate />
            </Layout>
          }
        />
        <Route
          path="/departments"
          element={
            <Layout>
              <Department />
            </Layout>
          }
        />
        <Route
          path="/departments/create"
          element={
            <Layout>
              <DepartmentCreate />
            </Layout>
          }
        />
        <Route
          path="/departments/update/:id"
          element={
            <Layout>
              <DepartmentUpdate />
            </Layout>
          }
        />
        <Route
          path="/categories"
          element={
            <Layout>
              <Category />
            </Layout>
          }
        />
        <Route
          path="/categories/create"
          element={
            <Layout>
              <CategoryCreate />
            </Layout>
          }
        />
        <Route
          path="/categories/update/:id"
          element={
            <Layout>
              <CategoryUpdate />
            </Layout>
          }
        />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
};

export default AppRouter;
