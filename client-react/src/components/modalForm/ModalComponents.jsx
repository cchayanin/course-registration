import { Modal, Form } from 'antd'
import FormItem from './FormItem'
import { connect } from 'react-redux'
import { useEffect } from 'react'

function ModalComponents(props) {
	useEffect(() => {
		const initialEdit = () => {
			props.form.setFieldsValue({ ...props.record })
		}
		initialEdit()
	}, [props.form, props.record])

	const onCancel = () => {
		props.toggleModal(props.visible)
		props.toggleEdit(false)
		props.passRecordToForm({})
		props.form.resetFields()
	}

	const onOk = () => {
		props.form
			.validateFields()
			.then(() =>
				props.isEdit
					? props.CRUD.updateRecord(props.form.getFieldValue('id'))
					: props.CRUD.createRecord(),
			)
			.catch((err) => {
				console.error(err)
			})

		props.toggleEdit(false)
	}

	const okText = () => {
		return props.isEdit ? 'แก้ไข' : 'สร้าง'
	}

	return (
		<Modal
			visible={props.visible}
			forceRender={true}
			title={props.title}
			okText={okText()}
			cancelText="ยกเลิก"
			onCancel={() => onCancel()}
			onOk={onOk}
		>
			<Form form={props.form} layout="vertical">
				<FormItem formItem={props.formItem} isEdit={props.isEdit} />
			</Form>
		</Modal>
	)
}

const mapStateToProps = (state) => {
	return {
		visible: state.modalReducer.visible,
		record: state.modalReducer.record,
		isEdit: state.modalReducer.isEdit,
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		toggleModal: (value) => {
			dispatch({ type: 'TOGGLE_MODAL', payload: value })
		},
		toggleEdit: (value) => {
			dispatch({ type: 'TOGGLE_EDIT', payload: value })
		},
		passRecordToForm: (value) => {
			dispatch({ type: 'PASS_RECORD', payload: value })
		},
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(ModalComponents)
