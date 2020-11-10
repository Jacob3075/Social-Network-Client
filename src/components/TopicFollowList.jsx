import React, { useState } from "react";
import { Button } from "@material-ui/core";
import { makeStyles } from '@material-ui/core/styles';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import Paper from '@material-ui/core/Paper';
import Draggable from 'react-draggable';
import Typography from '@material-ui/core/Typography';
import AppBar from '@material-ui/core/AppBar';
import CssBaseline from '@material-ui/core/CssBaseline';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Fab from '@material-ui/core/Fab';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import ListItemText from '@material-ui/core/ListItemText';
import Avatar from '@material-ui/core/Avatar';
import MenuIcon from '@material-ui/icons/Menu';
import AddIcon from '@material-ui/icons/Add';
import SearchIcon from '@material-ui/icons/Search';
import MoreIcon from '@material-ui/icons/MoreVert';

const TopicFollowList = () => {
    const oneStyles = makeStyles({
        root: {
            width: 500,
        },
    });
    const [value, setValue] = React.useState(0);
    const [open1, setOpen1] = React.useState(false);
    const [open2, setOpen2] = React.useState(false);
    const [open3, setOpen3] = React.useState(false);
    const handleClickOpen1 = () => {
        setOpen1(true);
    };
    const handleClickOpen2 = () => {
        setOpen2(true);
    };
    const handleClose1 = () => {
        setOpen1(false);
    };
    const handleClose2 = () => {
        setOpen2(false);
    };
    const handleClickOpen3 = () => {
        setOpen3(true);
    };
    const handleClose3 = () => {
        setOpen3(false);
    };
    const messages = [
        {
            id: 1,
            primary: 'Matt Steffanina',
        },
        {
            id: 2,
            primary: 'Erika Klein',
        },
        {
            id: 3,
            primary: 'Sportsssssss',
        },
        {
            id: 4,
            primary: 'CookCook',
            person: '/static/images/avatar/2.jpg',
        }]
    const twoStyles = makeStyles((theme) => ({
        text: {
            padding: theme.spacing(2, 2, 0),
        },
        paper: {
            paddingBottom: 50,
        },
        list: {
            marginBottom: theme.spacing(2),
        },
        subheader: {
            backgroundColor: theme.palette.background.paper,
        },
        appBar: {
            top: 'auto',
            bottom: 0,
        },
        grow: {
            flexGrow: 1,
        },
        fabButton: {
            position: 'absolute',
            zIndex: 1,
            top: -30,
            left: 0,
            right: 0,
            margin: '0 auto',
        },
    }));
    const classes = twoStyles();
    function PaperComponent(props) {
        return (
            <Draggable handle="#draggable-dialog-title" cancel={'[class*="MuiDialogContent-root"]'}>
                <Paper {...props} />
            </Draggable>
        );
    }
    function ImageUpload() {
        const [caption, setCaption] = useState('');
        const [image, setImage] = useState(null);
        const [url, setUrl] = useState('');
        const [progress, setProgress] = useState(0);
        const handleChange = (e) => {
            if (e.target.files[0]) {
                setImage(e.target.files[0]);
            }
        }
        const handleUpload = () => {

        }

        return (
            <div>
                <input
                    type="text"
                    style={{
                        width: '80%', height: '56px',
                        padding: '10px 10px 10px 10px',
                        marginTop: '50px',
                        marginBottom: '10px',
                        marginLeft: '10%',
                        marginRight: '10% ',
                        borderRadius: '10px',
                        border: 'gray',
                        backgroundColor: 'lavender',
                        position: 'relative',

                    }}
                    placeholder="Enter Caption"
                    onChange={event => setCaption(event.target.value)} />
                <br />
                <input type="file" onChange={handleChange}
                    style={{
                        width: '30%',
                        marginBottom: '2%',
                        marginLeft: '33%',
                        marginRight: '35%',
                    }} />
                <Button onClick={handleUpload}
                    style={{
                        width: '25%', height: '40px',
                        marginLeft: '35%',
                        marginRight: '35% ',
                        backgroundColor: 'lavender',
                        position: 'relative',
                    }}>
                    Upload
                </Button>
                <Button onClick={handleClose3} open={open3}
                    style={{
                        width: '25%', height: '40px',
                        marginLeft: '35%',
                        marginRight: '35%',
                        backgroundColor: 'lavender',
                        marginTop: '2%',
                        marginBottom: '50px',
                        position: 'relative',
                    }}>
                    Cancel
                </Button>
            </div>
        )
    }

    return (
        <div>
            <Button variant="contained" color="primary" style={{ float: 'right', width: '3.7cm' }} onClick={handleClickOpen1}>
                Topics
            </Button>
            <Dialog
                open={open1}
                onClose={handleClose1}
                PaperComponent={PaperComponent}
                aria-labelledby="draggable-dialog-title"
            >
                <DialogContent>
                    <DialogContentText>
                        <React.Fragment>
                            <CssBaseline />
                            <Paper square className={classes.paper}>
                                <Typography className={classes.text} variant="h5" gutterBottom>
                                    Topics
                                </Typography>
                                <List className={classes.list}>
                                    {messages.map(({ id, primary, person }) => (
                                        <React.Fragment key={id}>
                                            <ListItem button>
                                                <ListItemAvatar>
                                                    <Avatar alt="Profile Picture" src={person} />
                                                </ListItemAvatar>
                                                <ListItemText primary={primary} />
                                                <Button variant="contained" style={{ float: 'right', width: '2.5cm', height: '0.8cm' }} onClick={handleClickOpen2}>
                                                    Following
                                                </Button>
                                                <Dialog onClose={handleClose2} open={open2} aria-labelledby="form-dialog-title">
                                                    {/*<DialogTitle id="form-dialog-title">Subscribe</DialogTitle>*/}
                                                    <DialogContent>
                                                        <DialogContentText>
                                                            By unfollowing this topic, you won't receive any updates in future from this Topic.
                                                        </DialogContentText>
                                                    </DialogContent>
                                                    <DialogActions>
                                                        <Button onClick={handleClose2} color="primary">
                                                            Cancel
                                                        </Button>
                                                        <Button onClick={handleClose2} color="primary">
                                                            Unfollow
                                                        </Button>
                                                    </DialogActions>
                                                </Dialog>
                                            </ListItem>
                                        </React.Fragment>
                                    ))}
                                </List>
                            </Paper>
                            <AppBar position="fixed" color="primary" className={classes.appBar}>
                                <Toolbar>
                                    {/*
                                                        <IconButton edge="start" color="inherit" aria-label="open drawer">
                                                            <MenuIcon />
                                                        </IconButton>
                                                        <IconButton color="inherit">
                                                            <SearchIcon />
                                                        </IconButton>
                                                        */}
                                    <Fab color="secondary" aria-label="add" className={classes.fabButton} onClick={handleClickOpen3}>
                                        <AddIcon />
                                        <Dialog onClose={handleClose3} open={open3} aria-labelledby="form-dialog-title" fullWidth={true} style={{ overflow: "hidden" }}>
                                            <ImageUpload />
                                        </Dialog>
                                    </Fab>
                                    <div className={classes.grow} />
                                    <IconButton edge="end" color="inherit">
                                        <MoreIcon />
                                    </IconButton>
                                </Toolbar>
                            </AppBar>
                        </React.Fragment>
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button autoFocus onClick={handleClose1} color="primary">
                        Cancel
                    </Button>
                    <Button onClick={handleClose1} color="primary">
                        Subscribe
                    </Button>
                </DialogActions>
            </Dialog>

        </div>

    );
};

export default TopicFollowList;