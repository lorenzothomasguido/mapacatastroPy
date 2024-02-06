'use client';
import * as React from 'react';
import { styled, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import CssBaseline from '@mui/material/CssBaseline';
import MuiAppBar, { AppBarProps as MuiAppBarProps } from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import Avatar from '@mui/material/Avatar';
import { blueGrey } from '@mui/material/colors';
import { useSelector } from 'react-redux';
import { makeStyles } from '@mui/material/styles';
import SerchParcel from '../Tools/SerchParcel';
 // Importa el archivo de estilos CSS



const drawerWidth = 340;

const Main = styled('main', { shouldForwardProp: (prop) => prop !== 'open' })<{
  open?: boolean;
}>(({ theme, open }) => ({
  flexGrow: 1,
  padding: theme.spacing(3),
  transition: theme.transitions.create('margin', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  marginLeft: `-${drawerWidth}px`,
  backgroundColor: 'white',
  overflowX: 'hidden',
  ...(open && {
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginLeft: 0,
  }),
}));

interface AppBarProps extends MuiAppBarProps {
  open?: boolean;
}

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})<AppBarProps>(({ theme, open }) => ({
  transition: theme.transitions.create(['margin', 'width'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: `${drawerWidth}px`,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  padding: theme.spacing(0, 1),
  ...theme.mixins.toolbar,
  justifyContent: 'flex-end',
  // Agrega la clase de estilo personalizada
  '&.drawer-header': {
    backgroundColor: '#4CAF50',
    color: '#ffffff',
    fontSize: '1.5rem',
    padding: '15px',
  },
}));

export default function NavDrawer() {
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);
  const menuActive = useSelector((state: any) => state.globalApp.menuActive)

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <Box sx={{ display: 'flex', overflow: 'hidden' }}>
      <CssBaseline />
      <AppBar position="fixed" open={open}>
        <Toolbar sx={{ backgroundColor: blueGrey[50], display: 'flex', justifyContent: 'space-between' }}>
          <Box sx={{ display: 'flex', alignItems: 'center' }}>

            <IconButton
              color="inherit"
              aria-label="open drawer"
              onClick={handleDrawerOpen}
              edge="start"
              sx={{ mr: 2, ...(open && { display: 'none' }) }}>
              <MenuIcon />
            </IconButton>
            <Avatar
              alt="Logo"
              src="https://catastro.adevcom.cl/config/obtener_logo"
              sx={{
                width: 90,
                height: 70,
                mr: 2,
                borderRadius: 0,
                boxShadow: 'none',
                overflow: 'hidden'
              }}>
              <img
                src="https://catastro.adevcom.cl/config/obtener_logo"
                alt="Logo"
                style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
            </Avatar>
            <Typography variant="h6" noWrap component="div" sx={{ color: 'black' }}>
              Catastro Paraguay
            </Typography>
          </Box>
        </Toolbar>
      </AppBar>
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: drawerWidth,
            boxSizing: 'border-box',
            backgroundColor: 'white',
          },
        }}
        variant="persistent"
        anchor="left"
        open={open}
      >
        <DrawerHeader>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
          </IconButton>
          Filtros {menuActive}
        </DrawerHeader>

        {/* Integra tu componente SerchParcel aquí */}
        <SerchParcel />
      </Drawer>

      {/* Ajusta el Main para dejar espacio para el Drawer */}
      <Main open={open}>
        <DrawerHeader className="drawer-header" />
        {/* ... (resto del contenido de tu aplicación) */}
      </Main>
    </Box>
  );
}