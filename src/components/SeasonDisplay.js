import React from "react";
import '/home/argahsuknesib/Code/React/seasons/src/styles/SeasonDisplay.css';

const seasonConfig = {
  summer: {
    text: "Lets hit the beach",
    iconName: "sun",
  },
  winter: {
    text: "It is cold",
    iconName: "snowflake",
  },
};

const getSeason = (lat, lon, month) => {
  if (month < 2 && month < 9) {
    return lat > 0 ? "summer" : "winter";
  } else {
    return lat < 0 ? "winter" : "summer";
  }
};

const SeasonDisplay = (props) => {
  const season = getSeason(props.lat, props.lon, new Date().getMonth());
  const { text, iconName } = seasonConfig[season];

  return (
    <div className={`season-display ${season}`}>
      <i className={`icon-left massive ${iconName} icon`} />
      <h1>{text}</h1>
      <i className={`icon-right massive ${iconName} icon`} />
    </div>
  );
};

export default SeasonDisplay;
