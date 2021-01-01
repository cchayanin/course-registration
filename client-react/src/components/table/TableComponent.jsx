import { Table } from 'antd'
import { useEffect } from 'react'

function TableComponent(props) {
	const { Column } = Table

	useEffect(() => {
		props.fetchRecord()
	}, [props])

	return (
		<Table bordered dataSource={props.dataSource} rowKey="id">
			{props.columns.map((column) => {
				return (
					<Column
						title={column.title}
						dataIndex={column.dataIndex}
						key={column.key}
						render={column.render}
						align={column.align}
					/>
				)
			})}
		</Table>
	)
}

export default TableComponent
