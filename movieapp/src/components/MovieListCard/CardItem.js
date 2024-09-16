import React, { useState } from "react";
import { Card, CardContent, CardMedia, Typography } from "@mui/material";
import "./CardItem.css";

const CardItem = (props) => {
  const { index, itemName, imageURL } = { ...props };

  const [imageSrc, setImageSrc] = useState(
    `${window.appSettings.BASE_URL}${window.appSettings.IMAGE_URL}/${imageURL}`
  );
  const handleImgError = () => {
    setImageSrc(
      `${window.appSettings.BASE_URL}${window.appSettings.IMAGE_URL}${window.appSettings.MISSING_POSTER_URL}`
    );
  };

  return (
    <Card id="cardContainer">
      <CardMedia
        component="img"
        image={imageSrc}
        alt={`${itemName}-${index}`}
        loading="lazy"
        onError={handleImgError}
        id="cardMediaContent"
      />
      <CardContent>
        <Typography variant="subtitle2" id="cardTypography">
          {itemName}
        </Typography>
      </CardContent>
    </Card>
  );
};
export default CardItem;
