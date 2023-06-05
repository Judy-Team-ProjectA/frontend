import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "@/reset.scss";
import { BrowserRouter, Route, Routes, useRoutes } from "react-router-dom";
import { routes } from "./Routes";

export default function App() {
  const elem = useRoutes(routes);

  return <>{elem}</>;
}
