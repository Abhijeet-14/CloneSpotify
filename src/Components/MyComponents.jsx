import React from "react";

//--- Components
import Center from "./Center/Center";
import Footer from "./Footer/Footer";
import Header from "./Header/Header";

function MyComponents(props) {
  return (
    <div className="container-fluid m-0 p-0 bg-danger ">
      <div className="d-flex flex-md-row flex-column-reverse m-0 p-0 bg-success vh-100">
        <Header />
        <div className="row bg-danger m-0 p-0 col-md-10 col-12 h-100" >
          <Center />
          <Footer />
        </div>
      </div>
    </div>
  );
}

export default MyComponents;
