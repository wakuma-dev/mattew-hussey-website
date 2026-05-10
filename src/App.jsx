import React, { Suspense, lazy } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainLayout from "./layout/MainLayout";
const Home = lazy(() => import("./pages/Home"));
const Coaching = lazy(() => import("./pages/GetCoaching"));
const Resource = lazy(() => import("./pages/Resources"));
const Story = lazy(() => import("./pages/Story"));
const Blog = lazy(() => import("./pages/Blog"));

const App = () => {
  return (
    <BrowserRouter>
      <Suspense fallback={<p>Loading...</p>}>
        <Routes>
          <Route path="/" element={<MainLayout />}>
            <Route index element={<Home />} />
            <Route path="/getcoaching" element={<Coaching />} />
            <Route path="/freeresources" element={<Resource />} />
            <Route path="/successstory" element={<Story />} />
            <Route path="/blog" element={<Blog />} />
          </Route>
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
};

export default App;
