import { Routes, Route, Navigate, useParams } from "react-router-dom";
import { Navbar } from "@/widgets/layout";
import routes from "@/routes";
import userRoutes from "./userRoutes";
import { useSelector } from "react-redux";
import axios from "axios";
import { useEffect, useState } from "react";
import Activation from "@/components/Activation";

function App() {
  const user = useSelector((state) => state.user.userInfo);
  const getUser = async () => {
    try {
      const url = "http://localhost:5000/auth/login/success";
      const { data } = await axios.get(url);
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getUser();
  }, []);

  


  return (
    <>
      <div className="container absolute left-2/4 z-10 mx-auto -translate-x-2/4 p-4">
        <Navbar userRoutes={userRoutes} routes={routes}  />
      </div>
      <Routes>
        {user
          ? userRoutes.map(
              ({ path, element }, key) =>
                element && (
                  <Route key={key} exact path={path} element={element} />
                )
            )

          : routes.map(
              ({ path, element }, key) =>
                element && (
                  <Route key={key} exact path={path} element={element} />
                )
            )}

        <Route path="/activation/:activation_token" element={<Activation />} />
        <Route path="*" element={<Navigate to="/home" replace />} />
      </Routes>
    </>
  );
}

export default App;
