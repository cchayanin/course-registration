import { useState, useEffect } from 'react'
import axios from '../../../configs/axios'
import components from '../../../components'
import { fields } from './fields'
import { formItem } from './formItem'
import { Button, Form, Row, Table } from 'antd'
import { connect } from 'react-redux'
import { PlusOutlined } from '@ant-design/icons'

function Content(props) {
	const [form] = Form.useForm()
	const [dataSource, setDataSource] = useState([])
	const axiosPath = '/cr/types'

	const columns = [
		...fields,
		{
			title: 'แก้ไข',
			dataIndex: '',
			key: 'edit',
			align: 'center',
			render: (record) => {
				return <components.buttonEdit record={record} />
			},
		},
		{
			title: 'ลบ',
			dataIndex: '',
			key: 'delete',
			align: 'center',
			render: (record) => {
				return (
					<components.buttonDelete id={record.id} deleteRecord={deleteRecord} />
				)
			},
		},
	]

	useEffect(() => {
		fetchRecord()
	}, [])

	const fetchRecord = async () => {
		const httpResponse = await axios.get(axiosPath)
		setDataSource(httpResponse.data)
	}

	const createRecord = async () => {
		await axios.post(axiosPath, form.getFieldsValue())
		form.resetFields()
		props.toggleModal(props.visible)
		fetchRecord()
	}
	const updateRecord = async (id) => {
		await axios.patch(`${axiosPath}/${id}`, form.getFieldsValue())
		form.resetFields()
		props.toggleModal(props.visible)
		fetchRecord()
	}

	const deleteRecord = async (id) => {
		await axios.delete(`${axiosPath}/${id}`)
		fetchRecord()
	}

	const CRUD = { fetchRecord, createRecord, updateRecord }

	const onClick = () => {
		props.toggleModal(props.visible)
	}

	return (
		<>
			<Row justify="end">
				<Button type="primary" size="large" shape="circle" onClick={onClick}>
					<PlusOutlined />
				</Button>
			</Row>

			<components.modal formItem={formItem} form={form} CRUD={CRUD} />
			<Table bordered dataSource={dataSource} columns={columns} rowKey="id" />
		</>
	)
}

const mapStateToProps = (state) => {
	return {
		visible: state.modalReducer.visible,
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		toggleModal: (value) => {
			dispatch({ type: 'TOGGLE_MODAL', payload: value })
		},
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(Content)
