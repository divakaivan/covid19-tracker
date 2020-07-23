import React from "react";
import PropTypes from "prop-types";
import { Card, CardContent, Typography } from "@material-ui/core";

import "./styles/InfoBox.css";

function InfoBox({ active, isRed, title, cases, total, ...props }) {
  return (
    <Card
      onClick={props.onClick}
      className={`infoBox ${active && "infoBox--selected"} ${
        isRed && "infoBox--red"
      }`}
    >
      <CardContent>
        <Typography className="infoBox__title" color="textSecondary">
          {title}
        </Typography>
        <h2 className={`infoBox__cases ${!isRed && "infoBox__cases--green"}`}>
          {cases}
        </h2>
        <Typography className="infoBox__total" color="textSecondary">
          Total {total}
        </Typography>
      </CardContent>
    </Card>
  );
}

InfoBox.propTypes = {
  /**
   * When the specific InfoBox is active, additional css styling is added.
   */
  active: PropTypes.bool,
  /**
   * Signifies if the InfoBox component is for good/bad info and adds css if isRed.
   */
  isRed: PropTypes.bool,
  /**
   * Title of the InfoBox.
   */
  title: PropTypes.string.isRequired,
  /**
   * The number of cases for deaths/recovered/corona cases. (comes as str from the formatting)
   */
  cases: PropTypes.string.isRequired,
  /**
   * The number of total cases for deaths/recovered/corona cases. (comes as str from the formatting)
   */
  total: PropTypes.string.isRequired,
  /**
   * Functition to change the active InfoBox upon user click.
   */
  onClick: PropTypes.func.isRequired,
};

export default InfoBox;
