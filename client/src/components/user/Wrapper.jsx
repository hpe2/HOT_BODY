import React from "react";
import "../../style/user/wrapper.scss";
import { Outlet } from "react-router-dom";

const Wrapper = () => {
  return(
      <section id="content">
        <div className="block">
          <div className="wrapper">
            <div className="switchpoint">
              <Outlet />
            </div>
          </div>
        </div>
      </section>
  )
};

export default Wrapper;
