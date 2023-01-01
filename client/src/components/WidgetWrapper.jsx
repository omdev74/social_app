const { Box } = require("@mui/material");
import { styled } from "@mui/system";

const WidgetWprapper = styled(Box)(({ theme }) => ({
  padding: "1.5rem 1.5rem 0.75rem 1.5rem",
  backgroundColor: theme.palette.background.alt,
  borderRadius:"0.75rem"
}));

export default WidgetWprapper;