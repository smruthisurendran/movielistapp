import { Typography } from "@mui/material";

import { NO_CONTENT } from "../../core/utils/constant";
import "./NoContent.css";

const NoContent = () => {
  return (
    <div id="noContent">
      <Typography variant="subtitle2" id="noContentTypography">
        {NO_CONTENT}
      </Typography>
    </div>
  );
};
export default NoContent;
