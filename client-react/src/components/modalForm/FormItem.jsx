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
						rules={formItem.rules}
					>
						<Input disabled={formItem.disabled && props.isEdit} />
					</Form.Item>
				)
			})}
		</>
	)
}

export default FormItem
