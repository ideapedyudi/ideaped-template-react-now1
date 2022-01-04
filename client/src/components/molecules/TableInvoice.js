import React from 'react';
import { Table, Input, Button, Space } from 'antd';
import Highlighter from 'react-highlight-words';
import { SearchOutlined } from '@ant-design/icons';

class TableAWB extends React.Component {
    state = {
        searchText: '',
        searchedColumn: '',
    };

    getColumnSearchProps = dataIndex => ({
        filterDropdown: ({ setSelectedKeys, selectedKeys, confirm, clearFilters }) => (
            <div style={{ padding: 8 }}>
                <Input
                    ref={node => {
                        this.searchInput = node;
                    }}
                    placeholder={`Search ${dataIndex}`}
                    value={selectedKeys[0]}
                    onChange={e => setSelectedKeys(e.target.value ? [e.target.value] : [])}
                    onPressEnter={() => this.handleSearch(selectedKeys, confirm, dataIndex)}
                    style={{ marginBottom: 8, display: 'block' }}
                />
                <Space>
                    <Button
                        type="primary"
                        onClick={() => this.handleSearch(selectedKeys, confirm, dataIndex)}
                        icon={<SearchOutlined />}
                        size="small"
                        style={{ width: 90 }}
                    >
                        Search
                    </Button>
                    <Button onClick={() => this.handleReset(clearFilters)} size="small" style={{ width: 90 }}>
                        Reset
                    </Button>
                    <Button
                        type="link"
                        size="small"
                        onClick={() => {
                            confirm({ closeDropdown: false });
                            this.setState({
                                searchText: selectedKeys[0],
                                searchedColumn: dataIndex,
                            });
                        }}
                    >
                        Filter
                    </Button>
                </Space>
            </div>
        ),
        filterIcon: filtered => <SearchOutlined style={{ color: filtered ? '#1890ff' : undefined }} />,
        onFilter: (value, record) =>
            record[dataIndex]
                ? record[dataIndex].toString().toLowerCase().includes(value.toLowerCase())
                : '',
        onFilterDropdownVisibleChange: visible => {
            if (visible) {
                setTimeout(() => this.searchInput.select(), 100);
            }
        },
        render: text =>
            this.state.searchedColumn === dataIndex ? (
                <Highlighter
                    highlightStyle={{ backgroundColor: '#ffc069', padding: 0 }}
                    searchWords={[this.state.searchText]}
                    autoEscape
                    textToHighlight={text ? text.toString() : ''}
                />
            ) : (
                text
            ),
    });

    handleSearch = (selectedKeys, confirm, dataIndex) => {
        confirm();
        this.setState({
            searchText: selectedKeys[0],
            searchedColumn: dataIndex,
        });
    };

    handleReset = clearFilters => {
        clearFilters();
        this.setState({ searchText: '' });
    };

    render() {
        const columns = [
            {
                title: 'action',
                key: 'action',
                render: (text, record) => (
                    <Space size="middle">
                        <Button type="primary" size="small" onClick={() => this.props.showModal(record)}>
                            Edit
                        </Button>
                    </Space>
                ),
            },
            {
                title: 'Date',
                dataIndex: 'procdate',
                key: 'procdate',
            },
            {
                title: 'Jam',
                dataIndex: 'procjam',
                key: 'procjam',
            },
            {
                title: 'No AWB',
                dataIndex: 'awbno',
                key: 'awbno',
                ...this.getColumnSearchProps('awbno'),
            },
            {
                title: 'no HWB',
                dataIndex: 'hawb',
                key: 'hawb',
            },
            {
                title: 'PCS',
                dataIndex: 'pcs',
                key: 'pcs',
            },
            {
                title: 'Weight',
                dataIndex: 'weight',
                key: 'weight',
            },
            {
                title: 'user',
                dataIndex: 'user',
                key: 'user',
            },
            {
                title: 'admin',
                dataIndex: 'admin',
                key: 'admin',
            },
            {
                title: 'customer',
                dataIndex: 'customer',
                key: 'customer',
            },
            {
                title: 'status',
                dataIndex: 'status',
                key: 'status',
            },
            {
                title: 'Agent',
                dataIndex: 'invto',
                key: 'invto',
            }
        ];
        return <Table size="small" columns={columns} dataSource={this.props.invoice} pagination={{ pageSize: 6 }} />;
    }
}

export default TableAWB