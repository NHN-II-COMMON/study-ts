import DayList from "./component/DayList";
import Header from "./component/Header"
import Day from "./component/Day";
import {BrowserRouter, Route, Routes } from 'react-router-dom';
import EmptyPage from "./component/EmptyPage";


function App() {
  return (
    <BrowserRouter>
      <div className="App">
          <Header/>
          <Routes >
            <Route exact path="/" element={<Day/>}>
              <DayList/>
            </Route>
            <Route path="/day/:day" element={<Day/>}>
            <Day/>
            </Route>
            <Route>
              <EmptyPage/>
            </Route>
          </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
