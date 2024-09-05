import { Route, Routes } from "react-router-dom";
import { Navbar } from "./components/Navbar";
import Homepage from "./Pages/Homepage";
import ShowProfileUsers from "./Pages/ShowProfileUsers";
import TodosList from "./Pages/TodosList";
import TodoOfDay from "./Pages/TodoOfDay";
import PageNotFound from "./Pages/PageNotFound";
import AboutThis from "./Pages/AboutThis";
import TodoApp from "./Pages/TodoApp";
import { AppContext } from "./contexs/AppContext";

function App() {
  return (
    <AppContext>
      <div className="body roboto-medium bg-indigo-950">
        <Routes>
          <Route index element={<Homepage />} />
          <Route path="profiles" element={<ShowProfileUsers />} />
          <Route path="todo" element={<TodoApp />} />
          <Route path="profiles/todos" element={<TodosList />}>
            <Route path=":id" element={<TodoOfDay />} />
          </Route>
          <Route path="about-us" element={<AboutThis />}></Route>
          <Route path="*" element={<PageNotFound />}></Route>
        </Routes>
      </div>
    </AppContext>
  );
}

export default App;
