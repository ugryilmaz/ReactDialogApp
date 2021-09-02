import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle
} from "@material-ui/core";
import { useState } from "react";

function aa() {
  const [open, setOpen] = useState(true);

  const handleClose = () => {
    setOpen(false);
  };

  const handleOpen = () => {
    setOpen(true);
  };

  const setUserDialog = (id) => {
    const detectedUser = props.user.find((user) => user.id === id);
    /* console.log(detectedUser); */
    return (
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>{detectedUser.name}</DialogTitle>
        <DialogContent>
          <DialogContentText>Buraya biraz yazı gelecek</DialogContentText>
        </DialogContent>
        <DialogActions>
          <button>Reddet</button>
          <button>Onayla</button>
        </DialogActions>
      </Dialog>
    );
  };
}

export default function CompDialog(props) {
  /* console.log(props); */

  return (
    <div>
      {props.user.map((user) => (
        <button onClick={aa(user.id)}>{user.id}</button>
      ))}
    </div>
  );
}
