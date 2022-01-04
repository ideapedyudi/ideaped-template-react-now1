// ------------- react -----------------
import { useContext, useEffect } from "react";

// -------------- router ---------------
import { Link } from "react-router-dom";

import { Menu } from 'antd';
import {
    LogoutOutlined,
} from '@ant-design/icons';

// ----------- config ----------------
import { UserContext } from "../contexts/userContext";

import { API } from '../../components/config/api';

function Logout() {

    // states
    const [state, dispatch] = useContext(UserContext);

    var tanggalWaktu = new Date();

    // logout
    const handleLogout = async () => {
        dispatch({
            type: "LOGOUT",
        })
        loadUpdateLogout()
    }

    const loadUpdateLogout = async () => {
        try {
            const configUpdate = {
                headers: {
                    "Content-type": "application/json"
                }
            }

            const bodyUpdate = JSON.stringify({
                "User_status": 0,
                "lastOff": `${tanggalWaktu}`
            })

            await API.patch(`/login/${state.user.id}`, bodyUpdate, configUpdate)
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        loadUpdateLogout()
    }, [])

    return (
        <Menu theme="dark" mode="inline">
            <Menu.Item key="9" icon={<LogoutOutlined />} onClick={handleLogout}>
                <Link to={`/`}>
                    <span>Logout</span>
                </Link>
            </Menu.Item>
        </Menu>
    )
}

export default Logout
