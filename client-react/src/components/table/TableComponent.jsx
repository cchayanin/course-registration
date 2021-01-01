import { Table } from 'antd'

function TableComponent(props) {
	const { Column } = Table

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
						axiosPath={props.axiosPath}
					/>
				)
			})}
		</Table>
	)
}

export default TableComponent
