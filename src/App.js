import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

import UploadFiles from "./components/upload-files.component";
import JWPlayerComponent from "./components/JWPlayer";

function App() {
  return (
    <div className="container" style={{ width: "600px" }}>
      <div style={{ margin: "20px" }}></div>
      {/* <JWPlayerComponent /> */}
      <UploadFiles />
    </div>
  );
}

export default App;
