import { useState, useEffect } from 'react';

// ----------------- component --------
import TableInvoice from '../molecules/TableInvoice';
import { API } from '../../components/config/api';

// --------------- style ------------------
import '../styles/Weighing.css'
import { Row, Col, Form } from 'react-bootstrap';
import { Layout, Card, Modal, Button } from 'antd';
import { ReloadOutlined } from '@ant-design/icons';
const { Header, Content } = Layout;

const InvoiceBook = () => {

    const [invoice, setInvoice] = useState([])
    const [isModalVisible, setIsModalVisible] = useState(false);

    const handleOk = () => {
        setIsModalVisible(false);
    };

    const handleCancel = () => {
        setIsModalVisible(false);
    };

    // ---------------------- edit city ---------------------------
    const [form, setForm] = useState({
        btbno: '',
        awbno: '',
        status: ''
    })

    const { status, awbno } = form

    const handleOnChange = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        })
    }

    const showModal = (value) => {
        setIsModalVisible(true);
        setForm(
            {
                awbno: `${value.awbno}`,
                btbno: `${value.btbno}`,
                status: `${value.status}`
            }
        )
    };

    const loadTransaksi = async () => {
        try {
            const response = await API.get(`getInvoices`)
            setInvoice(response.data.data.invoices)
        } catch (error) {
            console.log(error)
        }
    }

    const savehandle = async () => {
        try {

            const config = {
                headers: {
                    "Content-type": "application/json"
                }
            }

            const body = JSON.stringify({
                ...form,
                "status": form.status,
            })

            await API.patch(`/updateinvoices/${form.btbno}`, body, config)

            handleCancel()

            loadTransaksi()

        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        loadTransaksi()
    }, [])


    return (
        <div>
            <ReloadOutlined style={{ position: 'absolute', marginLeft: '30px', marginTop: '30px' }} onClick={loadTransaksi} />
            <Card className="cardsearch">
                <TableInvoice invoice={invoice} showModal={showModal} />
            </Card>

            <Modal title="Edit" visible={isModalVisible} onOk={handleOk} onCancel={handleCancel} zIndex={99999}>
                <Form.Group className="mb-1" controlId="formBasicEmail">
                    <Form.Text className="text-muted">
                        Airwaybill
                    </Form.Text>
                    <Form.Control className="InputGlobal" type="text" onChange={handleOnChange} name="awbno" value={awbno} placeholder="Enter Airwaybill" autoComplete='off' disabled />
                </Form.Group>

                <Form.Group className="mb-1" controlId="formBasicEmail">
                    <Form.Text className="text-muted">
                        Status
                    </Form.Text>
                </Form.Group>
                <select className='selectstyle' onChange={handleOnChange} name="status" value={status}>
                    <option value="V">V</option>
                </select>
                <br />
                <br />
                <Button type="primary" block onClick={savehandle}>
                    Save
                </Button>
            </Modal>
        </div>
    )
}

export default InvoiceBook
