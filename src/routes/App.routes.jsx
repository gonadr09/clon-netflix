import React from "react";
import { BrowserRouter, Routes, Route, HashRouter } from "react-router-dom";
import Layout from "../common/components/layout/Layout";
import HomePage from "../features/home/views/HomePage";
import Movies from "../features/movies/views/Movies";
import Series from "../features/series/views/Series";
import Signin from "../features/auth/views/Signin";
import ProtectedRoutes from "./ProtectedRoutes";
import PublicRoute from "./PublicRoute";
import Error404 from "../common/error404/Error404";

const AppRoutes = () => {
  return (
    <HashRouter>
      <Routes>

        <Route exact path="/signin" element={
          <PublicRoute preventUrl="/movies">
            <Layout>
              <Signin />
            </Layout>
          </PublicRoute>
        }/>
        
        <Route path="/" element={
          <Layout>
            <HomePage />
          </Layout>
        } />


        <Route path="*" element={
          <ProtectedRoutes preventUrl={"/signin"}>
            <Layout>
              <Routes>
                <Route exact path="/movies" element={<Movies />} />
                <Route exact path="/tv" element={<Series />} />
                <Route exact path="*" element={<Error404 />} />
              </Routes>
            </Layout>
          </ProtectedRoutes>
        }/>

      </Routes>  
    </HashRouter>
  );
};

export default AppRoutes;
