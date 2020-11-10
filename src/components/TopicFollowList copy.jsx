import React from "react";
import { Button } from "@material-ui/core";
import { Grid } from "@material-ui/core";
import { makeStyles } from '@material-ui/core/styles';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Paper from '@material-ui/core/Paper';
import Draggable from 'react-draggable';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import Typography from '@material-ui/core/Typography';
import RestoreIcon from '@material-ui/icons/Restore';
import FavoriteIcon from '@material-ui/icons/Favorite';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import AppBar from '@material-ui/core/AppBar';
import CssBaseline from '@material-ui/core/CssBaseline';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Fab from '@material-ui/core/Fab';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import ListItemText from '@material-ui/core/ListItemText';
import ListSubheader from '@material-ui/core/ListSubheader';
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
    const [open, setOpen] = React.useState(false);
    const handleClickOpen = () => {
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
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

    return (
        <div>
            <Grid container direction="column">
                <Grid box container>
                    <Grid box xs={3} />
                    <Grid box xs={6}>
                        <Grid smallb container>
                            <Grid smallb xs={2} />
                            <Grid smallb xs={8}>
                                <br />
                                {/*<Button variant="contained" style={{ float: 'right' }} >Following</Button>
                                <Typography className={classes.text} variant="h5" gutterBottom>
                                    Following
                                </Typography>
                                */}
                                <BottomNavigation
                                    value={value}
                                    onChange={(event, newValue) => {
                                        setValue(newValue);
                                    }}
                                    showLabels
                                    className={classes.root}
                                >
                                </BottomNavigation>
                                <Button variant="contained" color="primary" style={{ float: 'right' }} onClick={handleClickOpen}>
                                    Topics
                                </Button>
                                <Dialog
                                    open={open}
                                    onClose={handleClose}
                                    PaperComponent={PaperComponent}
                                >
                                    <DialogContent>
                                        <DialogContentText>
                                            <React.Fragment>
                                                <CssBaseline />
                                                <Paper square className={classes.paper}>
                                                    <Typography className={classes.text} variant="h4" gutterBottom>
                                                        Following
                                                    </Typography>
                                                    <List className={classes.list}>
                                                        {messages.map(({ id, primary, person }) => (
                                                            <React.Fragment key={id}>
                                                                <ListItem button>
                                                                    <ListItemAvatar>
                                                                        <Avatar alt="Profile Picture" src={person} />
                                                                    </ListItemAvatar>
                                                                    <ListItemText primary={primary} />
                                                                    <Button variant="contained" color="primary" style={{ float: 'right', width: '3cm' }} onClick={handleClickOpen}>
                                                                        Following
                                                                    </Button>
                                                                    <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
                                                                        <DialogTitle id="form-dialog-title">Subscribe</DialogTitle>
                                                                        <DialogContent>
                                                                            <DialogContentText>
                                                                                To subscribe to this website, please enter your email address here. We will send updates
                                                                                occasionally.
                                                                            </DialogContentText>
                                                                        </DialogContent>
                                                                        <DialogActions>
                                                                            <Button onClick={handleClose} color="primary">
                                                                                Cancel
                                                                            </Button>
                                                                            <Button onClick={handleClose} color="primary">
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
                                                        <IconButton edge="start" color="inherit" aria-label="open drawer">
                                                            <MenuIcon />
                                                        </IconButton>
                                                        <Fab color="secondary" aria-label="add" className={classes.fabButton}>
                                                            <AddIcon />
                                                        </Fab>
                                                        <div className={classes.grow} />
                                                        <IconButton color="inherit">
                                                            <SearchIcon />
                                                        </IconButton>
                                                        <IconButton edge="end" color="inherit">
                                                            <MoreIcon />
                                                        </IconButton>
                                                    </Toolbar>
                                                </AppBar>
                                            </React.Fragment>
                                        </DialogContentText>
                                    </DialogContent>
                                    <DialogActions>
                                        <Button autoFocus onClick={handleClose} color="primary">
                                            Cancel
                                    </Button>
                                        <Button onClick={handleClose} color="primary">
                                            Subscribe
                                    </Button>
                                    </DialogActions>
                                </Dialog>
                            </Grid>
                            <Grid smallb xs={2} />
                        </Grid>
                    </Grid>
                    <Grid box xs={3} />
                </Grid>
            </Grid>]
        </div>

    );
};

export default TopicFollowList;