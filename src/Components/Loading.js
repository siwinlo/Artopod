import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import CircularProgress from "@material-ui/core/CircularProgress";

const useStyles = makeStyles(theme => ({
  progress: {
    margin: theme.spacing(2)
  }
}));

export function Loading() {
  const classes = useStyles();

  return (
    <div className="loading">
      <h3>Mapping exhibitions near you!</h3>
      <p>
        If nothing seems to be happening, please check that location is enabled!
      </p>
      <CircularProgress className={classes.progress} />
    </div>
  );
}
