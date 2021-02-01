import React from 'react';
import { useHistory } from "react-router-dom";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { ThemeProvider } from '@material-ui/styles';
import { createMuiTheme } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import firebase from "firebase";

// 컴포넌트
// 로그인
import Login from "./component/Login";
// 로비
import Lobby from "./component/Lobby";
// 게임룸
import GameRoom from "./component/GameRoom";
// CSS
import './styles/App.css';

const colorTheme = createMuiTheme({
  palette: {
    primary: {
      main: '#2196f3',
    },
    secondary: {
      main: '#ff3d00',
    }
  },
});

const UserData = (auth, setAuthInfo) => {
  let db = firebase.database();
  let ref = db.ref("/users/" + auth.uid);

  ref
  .on("value", snapshot => {
    setAuthInfo({
      ...auth,
      name: snapshot.val().name,
      image: snapshot.val().image,
      user: true
    });
  });
}

function App() {
  const [myTheme, setMyTheme] = React.useState(colorTheme);
  const [authInfo, setAuthInfo] = React.useState({
    auth: false,
    uid: "",
    email: "",
    image: "",
    user: false
  });

  // 로그인 유무를 체크후 헤더에 넘겨주기
  const handleAuth = (e) => {
    setAuthInfo(e);
    if (e.auth && !authInfo.user) {
      UserData(e, setAuthInfo);
    }
  };

  return (
    <Router>
      <ThemeProvider theme={myTheme}>
        { authInfo.auth ? <CssBaseline /> : "" }
        <Switch>
        {
          authInfo.auth && authInfo.user ?
            <Route exact path="/" render={() => <Lobby>{authInfo}</Lobby>} /> :
            <Route exact path="/" render={() => <Login params={handleAuth} />} />
        }
        <Route path="/game/room" render={() => <GameRoom>{authInfo}</GameRoom>} />
        </Switch>
      </ThemeProvider>
    </Router>
  );
}

export default App;