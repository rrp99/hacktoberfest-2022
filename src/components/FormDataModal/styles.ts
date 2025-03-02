import { SxProps } from "@mui/material";

const styles: {
  [key: string]: SxProps;
} = {
  modal: {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    bgcolor: "#ADD8E6",
    border: "2px solid #000",
    boxShadow: 24,
    p: 4,
  },
};
export default styles;
