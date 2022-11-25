import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "../common/components/layout/Layout";
import HomePage from "../features/home/views/HomePage";
import Movies from "../features/movies/views/Movies";
import Signin from "../features/auth/views/Signin";
import ProtectedRoutes from "./ProtectedRoutes";
import PublicRoute from "./PublicRoute";

const AppRoutes = () => {
  return (
    <BrowserRouter>
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
                <Route path="/" element={<HomePage />} />
                <Route exact path="movies" element={<Movies />} />
              </Routes>
            </Layout>
          </ProtectedRoutes>
        }/>

      </Routes>  
    </BrowserRouter>
  );
};

export default AppRoutes;
