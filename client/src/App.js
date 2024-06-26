import "./App.css";
import {
  Login,
  Register,
  Main,
  Home,
  TTT,
  TZFE,
  AeroChess,
  Admin,
  About,
  Statistics,
} from "./pages/index";
import React, { Suspense, useEffect, useState } from "react";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  useLocation,
  useNavigate,
} from "react-router-dom";

const fixedLayout = () => {
  return <div>I am a testing fixed Layout</div>;
};

// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <div>This is the router testing page.</div>,
//   },
//   {
//     path: "/page2",
//     element: <div>This works just like djano but in jsx!</div>,
//   },
//   {
//     path: "/testingFixedLayout/:id",
//     element: <fixedLayout />,
//     children: [
//       {
//         path: "/test1",
//         element: <div>Testing 1</div>,
//       },
//       {
//         path: "/test2",
//         element: <div>Testing 2</div>,
//       },
//       {
//         path: "/test3",
//         element: <div>Testing 3</div>,
//       },
//     ],
//   },
// ]);

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
  },
  {
    path: "/admin",
    element: <Admin />,
  },
  {
    path: "/register",
    element: <Register />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/home",
    element: <Home />,
  },
  {
    path: "/about",
    element: <About />,
  },
  {
    path: "/statistics",
    element: <Statistics />,
  },
  {
    path: "/ttt",
    element: <TTT />,
  },
  {
    path: "/tzfe",
    element: <TZFE />,
  },
  {
    path: "/aerochess",
    element: <AeroChess />,
  },
]);

function App() {
  return (
    <div className="App">
      <div className="h-screen w-screen overscroll-none">
        <RouterProvider router={router} />
      </div>
    </div>
  );
}

export default App;
