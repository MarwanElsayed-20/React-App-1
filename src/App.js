import { Suspense, lazy } from "react";
import {
  RouterProvider,
  createBrowserRouter,
  createHashRouter,
} from "react-router-dom";
import "./App.css";
import "./media.css";
import Layout from "./components/Layout/Layout";
import Loading from "./components/Loading/Loading";

const Home = lazy(() => import("./components/Home/Home"));
const About = lazy(() => import("./components/About/About"));
const Portfolio = lazy(() => import("./components/Portfolio/Portfolio"));
const Contact = lazy(() => import("./components/Contact/Contact"));

function App() {
  const routes = createHashRouter([
    {
      path: "",
      element: <Layout />,
      children: [
        {
          index: true,
          element: (
            <Suspense fallback={<Loading />}>
              <Home />
            </Suspense>
          ),
        },
        {
          path: "/about",
          element: (
            <Suspense fallback={<Loading />}>
              <About />
            </Suspense>
          ),
        },
        {
          path: "/portfolio",
          element: (
            <Suspense fallback={<Loading />}>
              <Portfolio />
            </Suspense>
          ),
        },
        {
          path: "/contact",
          element: (
            <Suspense fallback={<Loading />}>
              <Contact />
            </Suspense>
          ),
        },
      ],
    },
  ]);

  return (
    <>
      <RouterProvider router={routes}></RouterProvider>
    </>
  );
}

export default App;
