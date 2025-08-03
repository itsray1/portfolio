
// import React from "react";
// import { createBrowserRouter, RouterProvider } from "react-router-dom";
// import { Home } from "./pages/Home";
// import { NotFound } from "./pages/NotFound";

// const router = createBrowserRouter([
//   {
//     path: "/:username",
//     element: <Home />,
//   },
//   {
//     path: "*",
//     element: <NotFound />,
//   },
// ]);

// export default function App() {
//   return <RouterProvider router={router} />;
// }
import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import UsernameGuard from "./Components/UsernameGuard";
import { NotFound } from "./pages/NotFound";

const router = createBrowserRouter([
  {
    path: "/:username",
    element: <UsernameGuard />,
  },
  {
    path: "*",
    element: <NotFound />,
  },
]);

export default function App() {
  return <RouterProvider router={router} />;
}
