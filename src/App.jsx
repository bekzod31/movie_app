import React from "react";
import Movie from "./Component/Movie/Movie";
import { BrowserRouter} from "react-router-dom";

function App() {
  return (
    <div>
        <BrowserRouter>
          <Movie />
        </BrowserRouter>
    </div>
  );
}

export default App;
