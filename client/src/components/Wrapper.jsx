import React from "react";
import "../style/wrapper.scss";

const Wrapper = ({children}) => {
  return(
      <section id="content">
        <div className="block">
          <div className="wrapper">
            <div className="switchpoint">
              {children}
            </div>
          </div>
        </div>
      </section>
  )
};

export default Wrapper;
