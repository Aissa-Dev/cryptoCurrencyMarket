import { makeStyles } from "@material-ui/core";
import React from "react";
import { mainStayles } from "../generalStyles";

function SelectButton({ children, selected, onClick }) {
  const useStyles = makeStyles(() => ({
    selectedButton: {
      border: `1px solid ${mainStayles.mainColor}`,
      borderRadius: 5,
      textAlign: "center",
      fontFamily: "Montserrat",
      paddingTop: 10,
      paddingBottom: 10,
      cursor: "pointer",
      backgroundColor: selected ? mainStayles.mainColor : "",
      color: selected ? "black" : "",
      fontWeight: selected ? 700 : 500,
      "&:hover": {
        backgroundColor: mainStayles.mainColor,
        color: "black"
      },
      width: "22%"
    }
  }));
  const classes = useStyles();
  return (
    <span className={classes.selectedButton} onClick={onClick}>
      {children}
    </span>
  );
}

export default SelectButton;
