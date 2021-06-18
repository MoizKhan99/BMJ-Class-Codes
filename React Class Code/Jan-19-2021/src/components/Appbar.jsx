import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Drawer from "@material-ui/core/Drawer";
import Dialog from "@material-ui/core/Dialog"
const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        flexGrow: 1,
    },
}));

export default function ButtonAppBar() {
    const [ open, setOpen ] = useState(false)
    const [ openLoginDialog, setOpenLoginDialog ] = useState(false)
    const classes = useStyles();
    const onOpen = () => {
        setOpen(true)
    }
   
    const onClose = () => {
        setOpen(false)
    }

    const onDialogClose = () => {
        setOpenLoginDialog(false)
    }
    return (
        <div className={classes.root}>
            <AppBar position="static">
                <Toolbar>
                    <IconButton edge="start" className={classes.menuButton} color="inherit" onClick={onOpen}>
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" className={classes.title}>
                        News
                    </Typography>
                    <Button color="inherit" onClick={() => setOpenLoginDialog(true)}>Login</Button>
                </Toolbar>
            </AppBar>

            <Drawer open={open} onClose={onClose} anchor="right">
                <h1>Hello World</h1>
            </Drawer>

            <Dialog open={openLoginDialog} onClick={onDialogClose}>
                <h1>You are logged in</h1>
            </Dialog>
        </div>
    );
}