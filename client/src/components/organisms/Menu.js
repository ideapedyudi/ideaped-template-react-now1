// ------------- react -----------------
import { useContext } from "react";

// -------------- router ---------------
import { Link } from "react-router-dom";

// ----------- config ----------------
import { UserContext } from "../contexts/userContext";

// ------------- fontawesome -----------
import { FileSearchOutlined, AuditOutlined } from '@ant-design/icons';

// --------------- style ------------------
import { Menu } from 'antd';
const { SubMenu } = Menu;

function MenuBar({ sKey }) {
    const [state, dispatch] = useContext(UserContext);

    return (
        <div>
            {state.user.User_Lvl == "5" ?
                <Menu theme="dark" defaultSelectedKeys={[`${sKey}`]} mode="inline" className="menu">
                    <center><h6 className="tEsi">
                        CKL Support System
                    </h6></center>
                    <Menu.Item key="1" icon={<FileSearchOutlined />}>
                        <Link to={`/`}>
                            Search Transaction
                        </Link>
                    </Menu.Item>
                    <Menu.Item key="3" icon={<AuditOutlined />}>
                        <Link to={`/PageInvoice`}>
                            Search Invoice
                        </Link>
                    </Menu.Item>
                </Menu> :
                <Menu theme="dark" defaultSelectedKeys={[`${sKey}`]} mode="inline" className="menu">
                    <center><h6 className="tEsi">
                        KHR Support System
                    </h6></center>
                    <Menu.Item key="1" icon={<FileSearchOutlined />} disabled>
                        <Link to={`/`}>
                            Search Transaction
                        </Link>
                    </Menu.Item>
                    <Menu.Item key="3" icon={<AuditOutlined />} disabled>
                        <Link to={`/PageInvoice`}>
                            Search Invoice
                        </Link>
                    </Menu.Item>
                </Menu>
            }
        </div>
    )
}

export default MenuBar
