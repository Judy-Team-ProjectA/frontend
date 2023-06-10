import { lazy } from "react";
// import { Route, Routes } from "react-router-dom";
// import react from "@/assets/react.svg";

// eslint-disable-next-line react-refresh/only-export-components
const MainPage = lazy(() => import("@/pages/main"));
const Matching = lazy(() => import("@/pages/match"));
// eslint-disable-next-line react-refresh/only-export-components
const MatchList = lazy(() => import("@/pages/matchResult"));
//   return (
//     <Suspense fallback={<div>....laoding</div>}>
//       <Routes>
//         <Route path="/main" element={<MainPage />}></Route>
//         <Route path="*" element={<div>Error</div>}></Route>
//       </Routes>
//     </Suspense>
//   );
// };
//
export const routes = [
  {
    path: "/",
    //elements:
    children: [
      { path: "/main", element: <MainPage /> },
      { path: "/match", element: <Matching /> },
      { path: "/matchResult", element: <MatchList /> },
    ],
  },
];
