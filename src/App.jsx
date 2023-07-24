import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Feed from "./components/Feed";
import Layout from "./components/Layout";
import Customizer from "./pages/customizer";

function App() {
  // const navigate = useNavigate();
  return (
    <BrowserRouter>
      <Layout>
      <Routes>
          <Route  path="/" element={<Feed/>}/>
          <Route  path="/customizer" element={<Customizer/>}/>
          {/* <Route exact path="/upcoming/:user" element={<Upcoming/>}/>
          <Route exact path="/record/:user" element={<Record/>}/>
          <Route path="*" element={<NotFound/>}/> */}
        </Routes>
        {/* <Feed /> */}
      </Layout>
    </BrowserRouter>
  );
}

export default App;
