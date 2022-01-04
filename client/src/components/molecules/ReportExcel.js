import React from "react";
import ReactExport from "react-export-excel";
import { Button } from 'antd';

const ExcelFile = ReactExport.ExcelFile;
const ExcelSheet = ReactExport.ExcelFile.ExcelSheet;
const ExcelColumn = ReactExport.ExcelFile.ExcelColumn;

class ReportExcel extends React.Component {
    render() {
        return (
            <ExcelFile element={<Button type="primary" style={{ marginLeft: '10px', backgroundColor: '#19bf5c', border: 'none' }}>Export Excel</Button>} name="Employees" filename="export trans">
                <ExcelSheet data={this.props.dataall} name="Employees">
                    <ExcelColumn label="Tanggal" value="procdate" />
                    <ExcelColumn label="BTB" value="btbno" />
                    <ExcelColumn label="CSD" value="CSCNO" />
                    <ExcelColumn label="SMU" value="awbno" />
                    <ExcelColumn label="Agent Name" value="Agentnm" />
                    <ExcelColumn label="Flight Name" value="airline" />
                    <ExcelColumn label="Destination" value="dest" />
                    <ExcelColumn label="Comodity" value="commodity" />
                    <ExcelColumn label="Weight" value="weight" />
                    <ExcelColumn label="Koli" value="pcs" />
                </ExcelSheet>
            </ExcelFile>
        );
    }
}

export default ReportExcel;