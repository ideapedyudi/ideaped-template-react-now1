import { useState, useEffect } from 'react';

// ----------------- component --------
import TableAWB from '../molecules/TableAWB';
import { API } from '../../components/config/api';

// --------------- style ------------------
import '../styles/Weighing.css'
import { Row, Col, Form } from 'react-bootstrap';
import { Layout, Card, Modal, Button } from 'antd';
import { ReloadOutlined } from '@ant-design/icons';
const { Header, Content } = Layout;

const Awbbook = () => {

  const [transaksi, setTransaksi] = useState([])
  const [isModalVisible, setIsModalVisible] = useState(false);

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  // ---------------------- edit city ---------------------------
  const [form, setForm] = useState({
    nom: '',
    awbno: '',
    icode: '',
    status: ''
  })

  const { icode, status, awbno } = form

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
        nom: `${value.nom}`,
        awbno: `${value.awbno}`,
        icode: `${value.icode}`,
        status: `${value.status}`
      }
    )
  };

  const loadTransaksi = async () => {
    try {
      const response = await API.get(`getTransaksi`)
      setTransaksi(response.data.data.transaksis)
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
        "icode": form.icode,
        "status": form.status,
      })

      await API.patch(`/updatetransaksi/${form.nom}`, body, config)

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
        <TableAWB transaksi={transaksi} showModal={showModal} />
      </Card>

      <Modal title="Edit" visible={isModalVisible} onOk={handleOk} onCancel={handleCancel} zIndex={99999}>
        <Form.Group className="mb-1" controlId="formBasicEmail">
          <Form.Text className="text-muted">
            Airwaybill
          </Form.Text>
          <Form.Control className="InputGlobal" type="number" onChange={handleOnChange} name="awbno" value={awbno} placeholder="Enter Airwaybill" autoComplete='off' disabled />
        </Form.Group>

        <Form.Group className="mb-1" controlId="formBasicEmail">
          <Form.Text className="text-muted">
            Icode
          </Form.Text>
        </Form.Group>
        <select className='selectstyle' onChange={handleOnChange} name="icode" value={icode}>
          {/* <option value="I">I</option> */}
          <option value="V">V</option>
          <option value="O">O</option>
        </select>

        <Form.Group className="mb-1" controlId="formBasicEmail">
          <Form.Text className="text-muted">
            Status
          </Form.Text>
        </Form.Group>
        <select className='selectstyle' onChange={handleOnChange} name="status" value={status}>
          <option value="B">B</option>
          <option value="V">V</option>
          <option value="O">O</option>
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

export default Awbbook
