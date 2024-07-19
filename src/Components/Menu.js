import { Box } from '@mui/material';
import React from 'react';
import FormatListBulletedRoundedIcon from '@mui/icons-material/FormatListBulletedRounded';
import List from '@mui/material/List';
import ExploreRoundedIcon from '@mui/icons-material/ExploreRounded';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import LocalActivityRoundedIcon from '@mui/icons-material/LocalActivityRounded';
import InfoRoundedIcon from '@mui/icons-material/InfoRounded';
import ListItemIcon from '@mui/material/ListItemIcon';
import EmojiPeopleRoundedIcon from '@mui/icons-material/EmojiPeopleRounded';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';
import InboxIcon from '@mui/icons-material/Inbox';
import AirplanemodeActiveRoundedIcon from '@mui/icons-material/AirplanemodeActiveRounded';
import DraftsIcon from '@mui/icons-material/Drafts';
import AirplanemodeActiveRounded from '@mui/icons-material/AirplanemodeActiveRounded';
import FmdGoodRoundedIcon from '@mui/icons-material/FmdGoodRounded';
const Menu = () => {
  return (
    <Box sx={{  flex: 1 }}>
       <List>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <AirplanemodeActiveRounded />
              </ListItemIcon>
              <ListItemText primary="planing for trip" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <FormatListBulletedRoundedIcon />
              </ListItemIcon>
              <ListItemText primary="things to do" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <ExploreRoundedIcon />
              </ListItemIcon>
              <ListItemText primary="Explore" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <EmojiPeopleRoundedIcon />
              </ListItemIcon>
              <ListItemText primary="Facts" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <FmdGoodRoundedIcon/>
              </ListItemIcon>
              <ListItemText primary="Places" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <LocalActivityRoundedIcon/>
              </ListItemIcon>
              <ListItemText primary="Tickets" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                < InfoRoundedIcon/>
              </ListItemIcon>
              <ListItemText primary="Help" />
            </ListItemButton>
          </ListItem>
          </List>
    </Box>
  );
}

export default Menu;
