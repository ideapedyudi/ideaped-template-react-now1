import React from 'react';
import { Table, Container } from 'react-bootstrap';
import reduceSum from 'reduce-sum';
import formatCurrency from 'format-currency';

class TabelReportTransaksi extends React.Component {
    render() {

        return (
            <div>
                <center><p>Reconsile {this.props.dataall[0].airline}</p></center>
                <span className="printText"> {this.props.fromdate} / {this.props.todate}</span> <br />
                <Table bordered style={{ fontSize: "10px", padding: '20px' }}>
                    <thead className="text-center">
                        <tr style={{ backgroundColor: '#a7d4cd', fontWeight: 'bold' }}>
                            <td className="bbot" rowSpan="2">No</td>
                            <td rowSpan="2" style={{ width: '120px' }}>Tanggal</td>
                            <td rowSpan="2">BTB</td>
                            <td rowSpan="2">CSD</td>
                            <td rowSpan="2">SMU</td>
                            <td rowSpan="2" style={{ width: '40px' }}>Agent Name</td>
                            <td rowSpan="2" style={{ width: '40px' }}>Flight Name</td>
                            <td rowSpan="2">Destination</td>
                            <td rowSpan="2">Comodity</td>
                            <td rowSpan="2">Weight</td>
                            <td rowSpan="2">KOLI</td>
                        </tr>
                    </thead>
                    <tbody>
                        {this.props.dataall.map((alldata, index) => (
                            <tr>
                                <td>{index + 1}</td>
                                <td>{alldata.procdate}</td>
                                <td>{alldata.btbno}</td>
                                <td>{alldata.CSCNO}</td>
                                <td>{alldata.awbno}</td>
                                <td>{alldata.Agentnm}</td>
                                <td>{alldata.airline}</td>
                                <td>{alldata.dest}</td>
                                <td>{alldata.commodity}</td>
                                <td>{formatCurrency(alldata.weight)}</td>
                                <td>{formatCurrency(alldata.pcs)}</td>
                            </tr>
                        ))}
                        <tr style={{ backgroundColor: '#a7d4cd', fontWeight: 'bold' }}>
                            <th colSpan="9" className="text-center">TOTAL</th>
                            <th>{formatCurrency(reduceSum(this.props.dataall, 'weight'))}</th>
                            <th>{formatCurrency(reduceSum(this.props.dataall, 'pcs'))}</th>
                        </tr>
                    </tbody>
                </Table>
                <div className="cargoonfficer">
                    <p>{this.props.dataall[0].airline}</p>
                    <br />
                    <br />
                    <p>Cargo officer</p>
                </div>
                <div className="RA">
                    <p>Regulated Agent</p>
                    <br />
                    <br />
                    <p>Branch Manager</p>
                </div>
            </div >
        );
    }
}

export default TabelReportTransaksi;
