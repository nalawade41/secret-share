import styled from "@emotion/styled";
import { Box } from "@mui/material";

export const BlurOverlay = styled(Box)`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(255, 255, 255, 0.8);
  backdrop-filter: blur(8px);
  z-index: 100;
  display: block;
`;