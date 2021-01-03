import { useState, useEffect } from 'react'
import axios from '../../../configs/axios'
import components from '../../../components'
import { fields } from './fields'
import { formItems } from './formItems'
import { Button, Form, Row, Table } from 'antd'
import { connect } from 'react-redux'
import { PlusOutlined } from '@ant-design/icons'

function Content(props) {
	const [form] = Form.useForm()
	const [dataSource, setDataSource] = useState([])
	const [select, setSelect] = useState([])
	const axiosPath = '/cr/courses'
	const selectPath = '/cr/types'

	const fetchOptions = async () => {
		const httpResponse = await axios.get(selectPath)
		console.log(httpResponse.data)
		setSelect(httpResponse.data)
	}

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

	useEffect(() => {
		fetchOptions()
	}, [])

	const fetchRecord = async () => {
		const httpResponse = await axios.get(axiosPath)
		setDataSource(httpResponse.data)
	}

	const createRecord = async () => {
		console.log([...select])
		// console.log(form.getFieldValue('type_id'))
		// console.log(
		// 	select.find((item) => (item.id = form.getFieldValue('type_id'))),
		// )
		await axios.post(axiosPath, {
			...form.getFieldsValue(),
			name: `${
				select.find((item) => (item.id = form.getFieldValue('type_id')))
					.description
			} รุ่นที่ ${form.getFieldValue('round')}`,
		})
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

			<components.modal
				formItems={formItems}
				form={form}
				CRUD={CRUD}
				options={select}
			/>
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
