import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Header from "./components/Header";
import HomePage from "./Pages/HomePage";
import CoinPage from "./Pages/CoinPage";
import { makeStyles } from "@material-ui/core";
import { mainStayles } from "./generalStyles";

function App() {
  const useStyles = makeStyles(() => ({
    App: {
      backgroundColor: mainStayles.bgPrimaryColor,
      color: "white",
      minHeight: "100vh"
    }
  }));

  const classes = useStyles();
  return (
    <Router>
      <div className={classes.App}>
        <Header />
        <Route path="/" component={HomePage} exact />
        <Route path="/coins/:id" component={CoinPage} />
      </div>
    </Router>
  );
}

export default App;
