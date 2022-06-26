import React from 'react'
import {
    Drawer,
    AppBar,
    Box,
    Divider,
    List,
    ListItem,
    ListItemButton,
    ListItemText,
    Toolbar,
    Typography,
    CssBaseline,
} from "@mui/material";
import { Outlet } from 'react-router';
const drawerWidth =240;

const AdminLayout = () => {

    return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{ width: `calc(100% - ${drawerWidth}px)`, ml: `${drawerWidth}px` }}
      >
        <Toolbar>
          <Typography variant="h6" noWrap component="div">
            Khoa movie
          </Typography>
        </Toolbar>
      </AppBar>
        <Drawer
            sx={{
                width: drawerWidth,
                flexShrink: 0,
                '& .MuiDrawer-paper': {
                width: drawerWidth,
                boxSizing: 'border-box',
                },
            }}
            variant="permanent"
            anchor="left"
        >
            <Toolbar>
                <Typography variant="h6" noWrap component="div">
                    Menu
                </Typography>
            </Toolbar>
                <Divider />
                    <List>
                        {['Movies', 'User'].map((text, index) => (
                        <ListItem key={text} disablePadding>
                            <ListItemButton>
                                <ListItemText primary={text} />
                            </ListItemButton>
                        </ListItem>
                        ))}
                    </List>
                <Divider />
       
                </Drawer>
                <Box
                    component="main"
                    sx={{ flexGrow: 1, bgcolor: 'background.default', p: 3 }}
                >
                    <Toolbar />  
                    <Outlet/>
                </Box>
    </Box>
    );
};

export default AdminLayout;


