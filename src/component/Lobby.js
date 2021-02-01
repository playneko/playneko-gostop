import React from 'react';
import { useHistory } from "react-router-dom";
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';

// 컴포넌트
// 로그인 체크
import CheckLogin from "./CheckLogin";

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
  },
}));

const Lobby = (props) => {
  const classes = useStyles();
  const history = useHistory();
  const auth = props.children;

  const handleOnGameRoom = () => {
    history.push("/game/room");
  };

  // 로그인 체크
  CheckLogin(props);

  return (
    <>
      <List dense className={classes.root}>
        <ListItemAvatar className="Lobby-avatar">
          <Avatar
            alt={auth.name}
            src={auth.image}
          />
        </ListItemAvatar>
        <div className="Lobby-name">
          <p>{auth.name}</p>
        </div>
      </List>
      <div className="Lobby-form">
        <Button variant="contained" color="primary" type="button" className="Lobby-button_start" onClick={() => handleOnGameRoom()}>
          참가하기
        </Button>
      </div>
    </>
  );
}

export default Lobby;