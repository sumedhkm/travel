import { AppBar,Box, Avatar,styled,Toolbar, Typography } from '@mui/material'
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';
import MailIcon from '@mui/icons-material/Mail';
import Badge, { BadgeProps } from '@mui/material/Badge';

import React from 'react'
const StyledToolBar= styled(Toolbar)({
  display:"flex",
  justifyContent:"space-between"
})
const Navbar = () => {
    
  return (
  <AppBar position='sticky'>
<StyledToolBar>
   
    <Typography variant='h5'>Tours</Typography>
   <Box sx={{display:"flex",alignItems:"center",gap:"20px"}}>
   
    <Badge badgeContent={4} color="error">
  <NotificationsActiveIcon color="action" />
</Badge>

<Badge badgeContent={2} color="success">
  <MailIcon color="action" />
</Badge>

    <Avatar alt="Remy Sharp" src="https://i.pravatar.cc/300
" />

</Box>
</StyledToolBar>

    </AppBar>
  )
}

export default Navbar
