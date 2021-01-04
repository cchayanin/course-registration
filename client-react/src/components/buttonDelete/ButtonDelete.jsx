import { Button, notification, Popconfirm } from 'antd'
import { DeleteOutlined } from '@ant-design/icons'

function ButtonDelete(props) {
	const onConfirm = () => {
		props.deleteRecord(props.id)
		notification.success({ message: 'Record is deleted.' })
	}

	return (
		<Popconfirm
			title="Confirm delete?"
			onConfirm={onConfirm}
			okText="Yes"
			cancelText="No"
		>
			<Button icon={<DeleteOutlined />} danger>
				ลบ
			</Button>
		</Popconfirm>
	)
}

export default ButtonDelete
