import styles from './style.module.scss';
import Login from "./pages/login";
import SignUp from "./pages/signUp";
import MainContent from "./components/main-content";
import {
    Route,
    createBrowserRouter,
    createRoutesFromElements,
    RouterProvider
} from "react-router-dom";



 const router = createBrowserRouter(createRoutesFromElements(
     <Route path="/" element={<MainContent/>}>
         <Route path="/sing-up" element={<SignUp />} />
         <Route path="/sign-in" element={<Login />} />
         {/*<Route path="/signUp" element={<SignUp />} />*/}
         {/*<Route path="/login" element={<Login />} />*/}
     </Route>
 ))


function App() {
  return (
      <div className={styles.app}>
       <RouterProvider router={router} />
      </div>
  );
}

export default App;
