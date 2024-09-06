import { Route, Routes } from "react-router-dom";
import Homepage from "./Pages/Homepage";
import TodosList from "./Pages/TodosList";
import TodoOfDay from "./Pages/TodoOfDay";
import PageNotFound from "./Pages/PageNotFound";
import AboutThis from "./Pages/AboutThis";
import { AppContext } from "./contexs/AppContext";
import Clans from "./Pages/Clans";
import Wars from "./Pages/Wars";
import ClanDeatail from "./Pages/ClanDeatail";
import { ClansDeatailInfos } from "./Pages/ClansDeatailInfos";

function App() {
  return (
    <AppContext>
      <div className="h-100 roboto-medium bg-sky-200 dark:bg-indigo-950">
        <Routes>
          <Route index element={<Homepage />} />
          <Route path="clans" element={<Clans />} />
          <Route path="clans/:id" element={<ClanDeatail />}>
            <Route path="data" element={<ClansDeatailInfos />} />
          </Route>
          <Route path="wars" element={<Wars />} />
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
