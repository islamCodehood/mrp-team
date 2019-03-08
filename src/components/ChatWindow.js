import React, { Component } from "react";
import firebase from "firebase";
import { withStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import Avatar from "@material-ui/core/Avatar";
import Typography from "@material-ui/core/Typography";
import AccountCircle from "@material-ui/icons/AccountCircle";
import Divider from "@material-ui/core/Divider";
import TextField from "@material-ui/core/TextField";
import IconButton from "@material-ui/core/IconButton";
import Send from "@material-ui/icons/Send";

import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import InputAdornment from "@material-ui/core/InputAdornment";
import "./img/him.jpg";
const styles = theme => ({
  wrapper: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
  },
  root: {
    width: "100%",
    maxWidth: 650,
    maxHeight: "60vh",
    overflowY: "auto",
    paddingBottom: 0,

    backgroundColor: theme.palette.background.paper
  },

  inline: {
    display: "inline"
  },
  greenAvatar: {
    background: "green",
    color: "red"
  },
  blueAvatar: {
    background: "blue",
    color: "green"
  },
  yellowAvatar: {
    background: "yellow",
    color: "green"
  },
  textField: {
    [`& .MuiFilledInput-root-233`]: {
      borderRadius: 0
    },
    width: "100%",
    maxWidth: 650,
    marginTop: 0
  },
  card: {
    width: "100%",
    maxWidth: 680,
    marginTop: 80,
    justifyContent: "center",
    alignItems: "center"
  },
  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)"
  },
  title: {
    fontSize: 14
  },
  pos: {
    marginBottom: 12
  }
});

class ChatWindow extends Component {
  handleSendBtnClick = () => {
    const messageInputElement = document.getElementById("message-textField");
    this.props.sendMessage(messageInputElement.value, messageInputElement);
  };

  handleChange = e => {
    this.props.handleChange(e.target.value);
  };

  handleKeyUp = e => {
    this.props.handleKeyUp(e.target.value);
  };

  render() {
    const { classes, messages } = this.props;
    return (
      <div className={classes.wrapper}>
        <Card className={classes.card}>
          <CardContent>
            <List className={classes.root}>
              {messages.reverse().map(msg => (
                <div key={msg.timestamp}>
                  <ListItem alignItems="flex-start">
                    <ListItemAvatar>
                      <Avatar src="https://randomuser.me/api/portraits/men/97.jpg" />
                    </ListItemAvatar>
                    <ListItemText primary={msg.name} secondary={msg.text} />
                  </ListItem>
                </div>
              ))}

              {/* <Divider style={{ backgroundColor: "#d6d6d6" }} /> */}

              {/*   <Divider style={{ backgroundColor: "#d6d6d6" }} />
              <ListItem alignItems="flex-start">
                <ListItemAvatar>
                  <Avatar src="https://randomuser.me/api/portraits/men/97.jpg" />
                </ListItemAvatar>
                <ListItemText
                  primary="Mohamed Ezatly"
                  secondary="Wish I could come, but I'm out of town this…"
                />
              </ListItem>
              <Divider style={{ backgroundColor: "#d6d6d6" }} />
              <ListItem alignItems="flex-start">
                <ListItemAvatar>
                  <Avatar src="https://randomuser.me/api/portraits/men/60.jpg" />
                </ListItemAvatar>
                <ListItemText
                  primary="Mohamed Ezatly"
                  secondary="Wish I could come, but I'm out of town this…"
                />
              </ListItem>
              <Divider style={{ backgroundColor: "#d6d6d6" }} />
              <ListItem alignItems="flex-start">
                <ListItemAvatar>
                  <Avatar src="https://randomuser.me/api/portraits/men/60.jpg" />
                </ListItemAvatar>
                <ListItemText
                  primary="Mohamed Ezatly"
                  secondary="Wish I could come, but I'm out of town this…"
                />
              </ListItem>
              <Divider style={{ backgroundColor: "#d6d6d6" }} />
              <ListItem alignItems="flex-start">
                <ListItemAvatar>
                  <Avatar src="https://pbs.twimg.com/profile_images/790582305064648704/ty5Armt_.jpg" />
                </ListItemAvatar>
                <ListItemText
                  primary="Mohamed Ezatly"
                  secondary="Wish I could come, but I'm out of town this…"
                />
              </ListItem>
              <Divider style={{ backgroundColor: "#d6d6d6" }} />
              <ListItem alignItems="flex-start">
                <ListItemAvatar>
                  <Avatar src="https://pbs.twimg.com/profile_images/790582305064648704/ty5Armt_.jpg" />
                </ListItemAvatar>
                <ListItemText
                  primary="Mohamed Ezatly"
                  secondary="Wish I could come, but I'm out of town this…"
                />
              </ListItem> */}
            </List>
            <TextField
              id="message-textField"
              label="message..."
              /* placeholder="message.." */
              multiline
              className={classes.textField}
              margin="normal"
              onChange={this.handleChange}
              onKeyUp={this.handleKeyUp}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <Button
                      id="submit-btn"
                      onClick={this.handleSendBtnClick}
                      disabled={this.props.btnDisableStatus}
                    >
                      <Send />
                    </Button>
                  </InputAdornment>
                )
              }}
            />
          </CardContent>
        </Card>
      </div>
    );
  }
}

export default withStyles(styles)(ChatWindow);