import { withRouter } from "react-router-dom";
import SessionProvider from "./context/SessionProvider";
import Routes from "./components/Routes";
import { ToastContainer } from "react-toastify";
import Header from "./components/Header";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <div className="app">
      <SessionProvider>
        <div className="wrapper">
          <Header />
          <Routes />
        </div>
      </SessionProvider>
      <ToastContainer />
    </div>
  );
}

export default withRouter(App);
