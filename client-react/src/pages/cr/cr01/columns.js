import { Button } from 'antd'
import components from '../../../components'
import axios from '../../../configs/axios'

const axiosPath = '/cr/types'

export const columns = [
	{
		title: 'รหัส',
		dataIndex: 'type',
		key: 1,
		align: 'center',
	},
	{
		title: 'คำอธิบาย',
		dataIndex: 'description',
		key: 2,
		align: 'center',
	},
	{
		title: 'แก้ไข',
		dataIndex: '',
		key: 3,
		align: 'center',
		render: (record) => {
			return <components.buttonEdit record={record} />
		},
	},
	{
		title: 'ลบ',
		dataIndex: '',
		key: 4,
		align: 'center',
		render: (record) => {
			const deleteRecord = async (id) => {
				await axios.delete(`${axiosPath}/${id}`)
			}

			const onClick = () => {
				deleteRecord(record.id)
			}
			return (
				<Button onClick={onClick} danger>
					ลบ
				</Button>
			)
		},
	},
]
