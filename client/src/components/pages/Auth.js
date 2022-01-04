import { useEffect, useState, useContext } from 'react';

// ----------- config ---------------
import { UserContext } from "../../components/contexts/userContext";
import { API, setAuthToken } from '../../components/config/api';
import { Helmet } from "react-helmet";

// -------------- router ---------------
import { Link } from "react-router-dom";

// --------------- style ------------------
import { Card, Container, Row, Col, Navbar, Form, Button } from 'react-bootstrap';
import { Modal, notification } from 'antd';
import { SmileOutlined } from '@ant-design/icons';
import '../styles/auth.css';

// ------------------ asset --------------
import dash from '../asset/cargo.svg';

// ---------=----- Aos -----------------
import Aos from "aos";
import "aos/dist/aos.css";

export default function Auth() {

    const [year, setYear] = useState()

    // time year
    const time = () => {
        var date = new Date();
        setYear(date.getFullYear());
    }

    // modal
    const [isModalVisible, setIsModalVisible] = useState(false);

    const showModal = () => {
        setIsModalVisible(true);
    };

    const handleOk = () => {
        setIsModalVisible(false);
    };

    const handleCancel = () => {
        setIsModalVisible(false);
    };

    // =========================== login =========================
    const [state, dispatch] = useContext(UserContext);
    const [messages, setMessage] = useState('')
    const [form, setForm] = useState({
        User: '',
        Psw: ''
    })

    const { User, Psw } = form;

    const onChange = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = async (e) => {
        try {
            e.preventDefault();

            const config = {
                headers: {
                    "Content-type": "application/json"
                }
            }

            const body = JSON.stringify({
                User,
                Psw
            })

            const response = await API.post("/login", body, config)

            setMessage(response.data.message)

            console.log(response.data.data.user.User_status)
            setAuthToken(response.data.data.user.token)

            if (response.data.data.user.User_status === 1) {
                setMessage("someone already logged in with this account")
            } else {
                // =========================== update login =============================
                const configUpdate = {
                    headers: {
                        "Content-type": "application/json"
                    }
                }

                dispatch({
                    type: "LOGIN_SUCCESS",
                    payload: response.data.data.user
                })

                if (state.user.User_Lvl == "5") {
                    notification.open({
                        message: 'NOTIFIKASI AWARES SISTEM',
                        description:
                            'Demi keamanan, jangan simpan username dan password pada browser',
                        icon: <SmileOutlined style={{ color: '#ff774d' }} />,
                    });
                } else {
                    notification.open({
                        message: 'NOTIFIKASI AWARES SISTEM',
                        description:
                            'maaf, hanya user admin untuk login sistem',
                        icon: <SmileOutlined style={{ color: '#ff774d' }} />,
                    });
                }


                // var tanggalWaktu = new Date();

                // const bodyUpdate = JSON.stringify({
                //     "User_status": 1,
                //     "lastOn": `${tanggalWaktu}`
                // })

                // const responseUpdate = await API.patch(`/login/${response.data.data.user.id}`, bodyUpdate, configUpdate)

            }

        } catch (error) {
            console.log(error)
        }

    }


    // aos duration
    useEffect(() => {
        Aos.init({ duration: 1000 });
    }, [])

    useEffect(() => {
        time()
    }, [])

    return (
        <div>
            {/*============================== title ===========================*/}
            <Helmet>
                <meta charSet="utf-8" />
                <title>CKL Support System</title>
            </Helmet>
            {/* =============================== navbar ================================ */}
            <div className="bglogin">
            </div>
            <Container>
                <br />
                <br />
                <br />
                <br />
                <br />
                <Card data-aos="zoom-in" className="cardlogin">
                    <Card.Body>
                        <Form onSubmit={handleSubmit}>
                            {messages &&
                                <div class="alert alert-danger" role="alert">
                                    {messages}
                                </div>
                            }
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label className="tLogin" style={{ textAlign: 'center' }}> CKL Support System</Form.Label>
                                <Form.Control
                                    className="lInput"
                                    onChange={onChange}
                                    value={User}
                                    name="User"
                                    type="text"
                                    placeholder=" "
                                    autoComplete="off"
                                    autoFocus="true"
                                    required
                                />
                                <Form.Label className="form__label">Username</Form.Label>
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formBasicPassword">
                                <Form.Control
                                    className="lInput"
                                    onChange={onChange}
                                    value={Psw}
                                    name="Psw"
                                    type="password"
                                    autoComplete="off"
                                    placeholder=" " />
                                <Form.Label className="form__label">Password</Form.Label>
                            </Form.Group>
                            <div className="d-grid gap-2">
                                <Button size="sm" className="sButtonPrimery" type="submit">
                                    Login
                                </Button>
                            </div>
                        </Form>
                    </Card.Body>
                </Card>
                {/* ==================== modal ================== */}
                {/* <Modal title="Contact" visible={isModalVisible} onOk={handleOk} onCancel={handleCancel} className="modalInfo">
                    <p className="tInfo">Helpdesk : +62 21-2210-7871</p>
                    <p className="tInfo">Email : sales@edifly-si.com</p>
                </Modal>
                <p className="tCopy" onClick={showModal}>&copy; Developer ESI {year}</p> */}
            </Container>
        </div>
    )
}
