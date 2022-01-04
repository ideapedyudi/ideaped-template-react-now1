import { useState, useEffect, useRef } from 'react';

// ----------------- component --------
import TableAWB from '../molecules/TableAWB';
import { API } from '../../components/config/api';
import ReactToPrint from 'react-to-print';
import TabelReportTransaksi from '../molecules/TabelReportTransaksi';
import ReportExcel from '../molecules/ReportExcel';

// --------------- style ------------------
import '../styles/ReportTransaksi.css'
import { Row, Col, Form } from 'react-bootstrap';
import { Layout, Card, DatePicker, Select, Button, Spin, notification } from 'antd';
const { Header, Content } = Layout;
const { Option } = Select;

const ReportTransaksi = () => {

    const [fromdate, setfromdate] = useState()
    const [todate, settodate] = useState()
    const [typedata, settypedata] = useState("Real")
    const [airlinecode, setairlinecode] = useState()
    const [transaksi, setTransaksi] = useState([])
    const [airlineall, setairlineall] = useState([])
    const [dataall, setdataall] = useState([])
    const [ceklist, setceklist] = useState(false)

    const onChangefromdate = (date, dateString) => {
        setfromdate(dateString)
    }

    const onChangetodate = (date, dateString) => {
        settodate(dateString)
    }

    const btbtype = (value) => {
        settypedata(value)
    }

    const onChangeairlines = (value) => {
        setairlinecode(value)
        console.log(value)
    }

    const componentRef = useRef();

    const loadTransaksi = async () => {
        try {
            const response = await API.get(`getTransaksi`)
            setTransaksi(response.data.data.transaksis)

            setceklist(false)

        } catch (error) {
            console.log(error)
        }
    }


    const loadAirline = async () => {
        try {
            const response = await API.get(`getAirline`)
            setairlineall(response.data.data.airlines)

        } catch (error) {
            console.log(error)
        }
    }

    // -------------- proses all -----------------------
    const handleAll = async () => {

        if (typedata == "Dummy") {
            // -------------- data tampil ----------------
            let followFeed = []
            let transc = transaksi.map((transon, index) => {
                if (transon.procdate >= fromdate && transon.procdate <= todate) {
                    followFeed = [...followFeed, transon]
                }
            })

            let datetypes = []
            let transc2 = followFeed.map((transon, index) => {
                if (transon.btbno == "00000000") {
                    datetypes = [...datetypes, transon]
                }
            })


            let airlinescodes = []
            let transc3 = datetypes.map((transon, index) => {
                if (transon.fltno.substr(0, 2) == airlinecode) {
                    airlinescodes = [...airlinescodes, transon]
                }
            })

            if (airlinescodes.length == 0) {
                const arga1 = {
                    message: 'KHR SYSTEM NOTIFICATION',
                    description:
                        'data 0 / fill in the data correctly',
                    duration: 2,
                }
                notification.error(arga1);
            } else {
                setdataall(airlinescodes)
            }

        } else if (typedata == "Real") {
            // -------------- data tampil ----------------
            let followFeed = []
            let transc = transaksi.map((transon, index) => {
                if (transon.procdate >= fromdate && transon.procdate <= todate) {
                    followFeed = [...followFeed, transon]
                }
            })

            let datetypes = []
            let transc2 = followFeed.map((transon, index) => {
                if (transon.btbno !== "00000000") {
                    datetypes = [...datetypes, transon]
                }
            })


            let airlinescodes = []
            let transc3 = datetypes.map((transon, index) => {
                if (transon.fltno.substr(0, 2) == airlinecode) {
                    airlinescodes = [...airlinescodes, transon]
                }
            })
            if (airlinescodes.length == 0) {
                const arga1 = {
                    message: 'KHR SYSTEM NOTIFICATION',
                    description:
                        'data 0 / fill in the data correctly',
                    duration: 2,
                }
                notification.error(arga1);
            } else {
                setdataall(airlinescodes)
            }
        } else {
            // -------------- data tampil ----------------
            let followFeed = []
            let transc = transaksi.map((transon, index) => {
                if (transon.procdate >= fromdate && transon.procdate <= todate) {
                    followFeed = [...followFeed, transon]
                }
            })


            let airlinescodes = []
            let transc3 = followFeed.map((transon, index) => {
                if (transon.fltno.substr(0, 2) == airlinecode) {
                    airlinescodes = [...airlinescodes, transon]
                }
            })
            if (airlinescodes.length == 0) {
                const arga1 = {
                    message: 'KHR SYSTEM NOTIFICATION',
                    description:
                        'data 0 / fill in the data correctly',
                    duration: 2,
                }
                notification.error(arga1);
            } else {
                setdataall(airlinescodes)
            }
        }

    }

    // console.log(dataall)
    const handleClear = () => {
        setceklist(true)
        loadTransaksi()
        setfromdate()
        settodate()
        settypedata("All")
        setdataall([])
        setairlinecode()
    }


    useEffect(() => {
        loadTransaksi()
    }, [])

    useEffect(() => {
        loadAirline()
    }, [])

    return (
        <div>
            {ceklist == true ?
                <Spin /> :
                <Row style={{ marginLeft: '5px', marginTop: '50px' }}>
                    <Col lg={4}>
                        <Card>
                            <DatePicker onChange={onChangefromdate} placeholder="from date" />
                            <DatePicker onChange={onChangetodate} placeholder="to date" style={{ marginLeft: '15px' }} />
                            <Select
                                showSearch
                                defaultValue="Real"
                                style={{ width: '89%', marginTop: '15px' }}
                                placeholder="data type"
                                optionFilterProp="children"
                                onChange={btbtype}
                                filterOption={(input, option) =>
                                    option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
                                }
                            >
                                <Option value="All">Data All</Option>
                                <Option value="Dummy">Data Dummy</Option>
                                <Option value="Real">Data Real</Option>
                            </Select>

                            <Select
                                showSearch
                                style={{ width: '89%', marginTop: '15px' }}
                                placeholder="airlines"
                                optionFilterProp="children"
                                onChange={onChangeairlines}
                                filterOption={(input, option) =>
                                    option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
                                }
                            >
                                <>
                                    {airlineall.map((aireall, index) => (
                                        <>
                                            <Option value={aireall.kode_airline} className="sOption">{aireall.nama_airline}</Option>
                                        </>
                                    ))}
                                </>
                            </Select>
                            <br /><br />
                            <Button type="primary" onClick={handleAll} >
                                view
                            </Button>
                            <Button danger onClick={handleClear} style={{ marginLeft: '10px' }} >
                                Clear
                            </Button>
                        </Card>
                    </Col>
                    <Col lg={8}>
                        <Card className="cardright">
                            {dataall.length == 0 ?
                                <p>Preview</p> :
                                <>
                                    <ReactToPrint
                                        trigger={() => <Button type="primary">Print</Button>}
                                        content={() => componentRef.current}
                                    />
                                    <ReportExcel dataall={dataall} />
                                    <TabelReportTransaksi ref={componentRef} dataall={dataall} fromdate={fromdate} todate={todate} />
                                </>
                            }
                        </Card>
                    </Col>
                </Row>
            }
        </div>
    )
}

export default ReportTransaksi
