import React from "react";
import Movie from "./Component/Movie/Movie";
import { BrowserRouter} from "react-router-dom";
import {Provider} from 'react-redux';
import { createStore} from "redux";
import PlaylistReducer from "./Reducer/PlaylistReducer";

const store = createStore(PlaylistReducer);
function App() {
  return (
    <div>
      <Provider store={store}>
        <BrowserRouter>
          <Movie />
        </BrowserRouter>
      </Provider>
    </div>
  );
}

export default App;
