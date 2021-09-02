import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Button
} from "@material-ui/core";
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
      <Button variant="outlined" onClick={handleOpen}>
        {props.user.name}
      </Button>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>{props.user.name}</DialogTitle>
        <DialogContent>
          <DialogContentText>Buraya biraz yazı gelecek</DialogContentText>
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
