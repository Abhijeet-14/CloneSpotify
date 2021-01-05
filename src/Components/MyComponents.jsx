import React from "react";

//--- Components
import Center from "./Center/Center";
import Footer from "./Footer/Footer";
import Header from "./Header/Header";

function MyComponents(props) {
  return (
    <div className="container-fluid vh-100 m-0 p-0 bg-danger ">
      <div className="d-flex flex-md-row flex-column-reverse vh-100 m-0 p-0 bg-success">
        <Header />
        <div className="row bg-success m-0 p-0 w-100 col-md-10 col-12">
          <Center />
          <Footer />
        </div>
      </div>
    </div>
  );
}

export default MyComponents;
