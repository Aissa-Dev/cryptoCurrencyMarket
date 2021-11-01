import {
  AppBar,
  Container,
  createTheme,
  makeStyles,
  MenuItem,
  ThemeProvider,
  Select,
  Toolbar,
  Typography
} from "@material-ui/core";
import React from "react";
import { useHistory } from "react-router-dom";
import { CryptoState } from "../CryptoContext";
import { mainStayles } from "../generalStyles";

const useStyles = makeStyles(() => ({
  title: {
    flex: 1,
    color: mainStayles.mainColor,
    fontFamily: "Montserrat",
    fontWeight: "bold",
    cursor: "pointer"
  }
}));

function Header() {
  const classes = useStyles();
  const history = useHistory();
  const { currency, setCurrency } = CryptoState();

  const darkTheme = createTheme({
    palette: {
      primary: {
        main: "#fff"
      },
      type: "dark"
    }
  });
  return (
    <ThemeProvider theme={darkTheme}>
      <AppBar color="transparent" position="static">
        <Container>
          <Toolbar>
            <Typography
              onClick={() => {
                history.push("/");
              }}
              className={classes.title}
              variant="h6"
            >
              Crypto Market
            </Typography>
            <Select
              variant="outlined"
              style={{ width: 100, height: 40, marginRight: 15 }}
              value={currency}
              onChange={(e) => setCurrency(e.target.value)}
            >
              <MenuItem value={"CAD"}>CAD</MenuItem>
              <MenuItem value={"EUR"}>EUR</MenuItem>
              <MenuItem value={"USD"}>USD</MenuItem>
            </Select>
          </Toolbar>
        </Container>
      </AppBar>
    </ThemeProvider>
  );
}

export default Header;