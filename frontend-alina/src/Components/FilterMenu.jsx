import { Menu, MenuItem, Button, Typography } from "@material-ui/core";
import * as React from "react";

export default function BasicMenu({ handleGroupBy }) {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleDate = () => {
    handleGroupBy("event_date");
  };

  const handleVenue = () => {
    handleGroupBy("venue_id");
  };

  const handlePerformer = () => {
    handleGroupBy("performer_id");
  };

  return (
    <div>
      <Typography variant="p">Filter by:</Typography>
      <Button
        id="basic-button"
        aria-controls={open ? "basic-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
      >
        choose filter
      </Button>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
      >
        <MenuItem onClick={handleDate}>Date</MenuItem>
        <MenuItem onClick={handleVenue}>Venue</MenuItem>
        <MenuItem onClick={handlePerformer}>Performer</MenuItem>
      </Menu>
    </div>
  );
}
