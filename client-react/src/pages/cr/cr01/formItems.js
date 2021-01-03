export const formItems = [
	{
		key: 1,
		name: 'type',
		label: 'รหัส',
		inputType: 'input',
		disabled: true,
		rules: [
			{ required: true, message: 'ต้องระบุรหัส' },
			{
				pattern: /^[A-Z]{1}$/,
				message: 'ต้องเป็นภาษาอังกฤษตัวพิมพ์ใหญ่และมี 1 หลัก เท่านั้น',
			},
		],
	},
	{
		key: 2,
		name: 'description',
		label: 'คำอธิบาย',
		inputType: 'input',
		disabled: false,
		rules: [{ required: true, message: 'ต้องระบุคำอธิบาย' }],
	},
]
