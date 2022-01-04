// ------------ react ---------
import { useContext, useEffect, useState } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { UserContext } from './components/contexts/userContext';

// ------------- style --------------
import { Spin } from 'antd';

// --------------- component ------------------s
import Auth from "./components/pages/Auth";
import PageAwbbook from './components/pages/PageAwbbook';
import PageInvoice from './components/pages/PageInvoice';
import Notfound from './components/pages/Notfound';
import PageReportTransaksi from './components/pages/PageReportTransaksi';

import { API, setAuthToken } from './components/config/api';

if (sessionStorage.token) {
  setAuthToken(sessionStorage.token)
}

function App() {
  const [state, dispatch] = useContext(UserContext)
  const [spin, setSpin] = useState(true);

  const checkUser = async () => {
    try {
      const response = await API.get('/check-auth')

      if (state.isLogin === false) {
        setSpin(false)
      }

      if (response.data.status === 'failed') {
        return dispatch({
          type: "LOGOUT"
        })
      }

      let payload = response.data.data.user
      payload.token = sessionStorage.token

      dispatch({
        type: "LOGIN_SUCCESS",
        payload
      })

      setSpin(false)

    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    checkUser()
  }, [])
  return (
    <Router>
      <Switch>
        {spin === true ?
          <Spin size="large" className="spinLoading" /> :
          <>
            {state.isLogin ?
              <Switch>
                {state.user.User_Lvl == "5" ?
                  <Switch>
                    <Route exact path="/" component={PageAwbbook} />
                    <Route exact path="/PageInvoice" component={PageInvoice} />
                    <Route exact path="/PageReportTransaksi" component={PageReportTransaksi} />
                    <Route exact component={Notfound} />
                  </Switch> :
                  <Switch>
                    <Route path="/" component={Auth} />
                  </Switch>
                }
              </Switch>
              :
              <Switch>
                <Route path="/" component={Auth} />
              </Switch>
            }
          </>
        }
      </Switch>
    </Router>
  );
}

export default App;