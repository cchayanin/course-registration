import { Form, Input, InputNumber, DatePicker, Select } from 'antd'
function FormItem(props) {
	const { RangePicker } = DatePicker
	const options = [...props.options]?.map((option) => (
		<Select.Option value={option.id} key={option.id}>
			{option.description}
		</Select.Option>
	))
	return (
		<>
			{props.formItems.map((item) => {
				let content
				switch (item.inputType) {
					case 'input':
						content = (
							<Form.Item
								name={item.name}
								label={item.label}
								rules={item.rules}
								key={item.key}
							>
								<Input disabled={item.editDisabled && props.isEdit} />
							</Form.Item>
						)
						break
					case 'number':
						content = (
							<Form.Item
								name={item.name}
								label={item.label}
								rules={item.rules}
								key={item.key}
							>
								<InputNumber disabled={item.editDisabled && props.isEdit} />
							</Form.Item>
						)
						break
					case 'range':
						content = (
							<Form.Item
								name={item.name}
								label={item.label}
								rules={item.rules}
								key={item.key}
							>
								<RangePicker disabled={item.editDisabled && props.isEdit} />
							</Form.Item>
						)
						break
					case 'select':
						content = (
							<Form.Item
								name={item.name}
								label={item.label}
								rules={item.rules}
								key={item.key}
							>
								<Select disabled={item.editDisabled && props.isEdit}>
									{options}
								</Select>
							</Form.Item>
						)
						break
					default:
						break
				}
				return content
			})}
		</>
	)
}

export default FormItem
