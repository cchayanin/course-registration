import './layout.css'
import { Layout } from 'antd'
import ContentTemplate from './ContentTemplate'
import HeaderTemplate from './HeaderTemplate'
import SiderTemplate from './SiderTemplate'

function LayoutTemplate(props) {
	return (
		<Layout className="layout-template">
			<SiderTemplate />
			<Layout>
				<HeaderTemplate />
				<ContentTemplate content={props.content} />
			</Layout>
		</Layout>
	)
}

export default LayoutTemplate
