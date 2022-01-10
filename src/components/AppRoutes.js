import { useRoutes } from 'react-router-dom';
import MainApp from "./MainApp";
import React from "react";
import ReactLogo from "../logo.svg"

export function AppRoutes() {
  const element = useRoutes([
    {
      path: '/',
      element: (
        <div className="row">
          <h2 className="text-center mt-5">
            Concurrent Rendering in React 18
          </h2>
          <img
            className="g-5"
            src={ReactLogo}
            alt="House of Parliament, London"
          />
        </div>
      ),
    },
    { path: '/users', element: <MainApp /> },
    // { path: '/primes', element: <PrimeNumbers /> },
  ]);

  return element;
}