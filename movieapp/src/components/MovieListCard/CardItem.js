import React, { useState } from "react";
import {
  Card,
  CardContent,
  CardMedia,
  Popover,
  Typography,
} from "@mui/material";

import {
  BACKGROUND_COLOR,
  FONT_COLOR,
  FONT_SIZE,
} from "../../core/utils/constant";
import "./CardItem.css";

const CardItem = (props) => {
  const { index, itemName, imageURL } = { ...props };

  const [anchor, setAnchor] = useState(null);
  const [imageSrc, setImageSrc] = useState(
    `${window.appSettings.BASE_URL}${window.appSettings.IMAGE_URL}/${imageURL}`
  );

  //Function to handle when image is not found
  const handleImgError = () => {
    setImageSrc(
      `${window.appSettings.BASE_URL}${window.appSettings.IMAGE_URL}${window.appSettings.MISSING_POSTER_URL}`
    );
  };

  //Function to display the title while clicking the image name
  const handleTitleClick = (e) => {
    setAnchor(e.currentTarget);
  };

  //Function to hide the content title
  const handleClose = () => {
    setAnchor(null);
  };

  const open = Boolean(anchor);
  const anchorId = open ? "simple-popover" : undefined;

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
        <Typography
          variant="subtitle2"
          id="cardTypography"
          aria-describedby={anchorId}
          onClick={handleTitleClick}
        >
          {itemName}
        </Typography>
        <Popover
          id={anchorId}
          open={open}
          anchorEl={anchor}
          onClose={handleClose}
          anchorOrigin={{
            vertical: "bottom",
            horizontal: "left",
          }}
        >
          <Typography
            sx={{
              fontSize: FONT_SIZE,
              backgroundColor: BACKGROUND_COLOR,
              color: FONT_COLOR,
            }}
          >
            {itemName}
          </Typography>
        </Popover>
      </CardContent>
    </Card>
  );
};
export default CardItem;
