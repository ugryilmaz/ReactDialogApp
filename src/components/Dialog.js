import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Button,
  ButtonGroup
} from "@mui/material";
import { useState } from "react";

export default function CompDialog(props) {
  /* console.log(props); */
  const [open, setOpen] = useState(false);

  const handleClose = () => {
    setOpen(false);
  };

  const handleOpen = () => {
    setOpen(true);
  };

  return (
    <div>
      <ButtonGroup variant="text" aria-label="text button group">
        <Button onClick={handleOpen}>{props.user.name}</Button>
      </ButtonGroup>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>{props.user.name}</DialogTitle>
        <DialogContent>
          <DialogContentText>{props.user.desc}</DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} variant="contained">
            Reddet
          </Button>
          <Button onClick={handleClose} variant="contained">
            Onayla
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
