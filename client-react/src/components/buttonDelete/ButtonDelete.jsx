import { Button } from 'antd'
import { DeleteOutlined } from '@ant-design/icons'

function ButtonDelete(props) {
	const onClick = () => {
		props.deleteRecord(props.id)
	}

	return (
		<Button icon={<DeleteOutlined />} onClick={onClick} danger>
			ลบ
		</Button>
	)
}

export default ButtonDelete
