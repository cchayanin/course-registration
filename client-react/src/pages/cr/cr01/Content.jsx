import { useState, useEffect } from 'react'
import axios from '../../../configs/axios'
import components from '../../../components'
import { columns } from './columns'
import { formItem } from './formItem'
import { Button, Form, Row } from 'antd'
import { connect } from 'react-redux'
import { PlusOutlined } from '@ant-design/icons'

function Content(props) {
	const [form] = Form.useForm()
	const [dataSource, setDataSource] = useState([])
	const axiosPath = '/cr/types'

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

	const CRUD = { fetchRecord, createRecord, updateRecord }

	const onClick = () => {
		props.toggleModal(props.visible)
	}

	useEffect(() => {
		fetchRecord()
	}, [])

	return (
		<>
			<Row justify="end">
				<Button type="primary" size="large" shape="circle" onClick={onClick}>
					<PlusOutlined />
				</Button>
			</Row>

			<components.modal formItem={formItem} form={form} CRUD={CRUD} />
			<components.table
				fetchRecord={CRUD.fetchRecord}
				dataSource={dataSource}
				columns={columns}
				axiosPath={axiosPath}
			/>
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
