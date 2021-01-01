import { Form, Input } from 'antd'
function FormItem(props) {
	return (
		<>
			{props.formItem.map((formItem) => {
				return (
					<Form.Item
						name={formItem.name}
						label={formItem.label}
						key={formItem.key}
					>
						<Input />
					</Form.Item>
				)
			})}
		</>
	)
}

export default FormItem
