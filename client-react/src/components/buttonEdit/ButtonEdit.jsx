import { Button } from 'antd'
import { connect } from 'react-redux'

function ButtonEdit(props) {
	const onClick = () => {
		props.toggleModal(props.visible)
		props.passRecordToForm(props.record)
		props.toggleEdit(true)
	}

	return (
		<Button onClick={onClick} danger>
			แก้ไข
		</Button>
	)
}
//
//* map State & Dispatch to props
const mapStateToProps = (state) => {
	return {
		visible: state.modalReducer.visible,
		isEdit: state.modalReducer.isEdit,
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		toggleModal: (value) => {
			dispatch({ type: 'TOGGLE_MODAL', payload: value })
		},
		passRecordToForm: (value) => {
			dispatch({ type: 'PASS_RECORD', payload: value })
		},
		toggleEdit: (value) => {
			dispatch({ type: 'TOGGLE_EDIT', payload: value })
		},
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(ButtonEdit)
