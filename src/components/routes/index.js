import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
const Home = React.lazy(() => import('../body/index'))
const Galery = React.lazy(() => import('../galery/index'))
const Favorite = React.lazy(() => import('../favorite/index'))



export default function Rotas() {
    return (
        <Router>

            <Routes>

                <Route path="/"
                    element={
                        <React.Suspense fallback='Carregando...'>
                            <Home />
                        </React.Suspense>
                    } />

                <Route path="/galery"
                    element={
                        <React.Suspense fallback='Carregando...'>
                            <Galery />
                        </React.Suspense>
                    } />

                <Route path="/favorite"
                    element={
                        <React.Suspense fallback='Carregando...'>
                            <Favorite />
                        </React.Suspense>
                    } />


            </Routes>

        </Router >
    )
}