import { Layout } from 'antd'

function ContentTemplate(props) {
	const { Content } = Layout
	return <Content className="content-template">{props.content}</Content>
}

export default ContentTemplate
