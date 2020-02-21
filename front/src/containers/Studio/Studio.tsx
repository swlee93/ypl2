import React, { useState, useEffect, useMemo, createRef } from 'react'
import { Container, Options, Contents } from '../../styles'
import { Switch } from 'antd'
import 'codemirror/lib/codemirror.css'
import 'tui-editor/dist/tui-editor.min.css'
import 'tui-editor/dist/tui-editor-contents.min.css'
import { Editor } from '@toast-ui/react-editor'
import TUIEditor from 'tui-editor'

import Icon from '../../components/Icon'
import { NEWS } from '../../api/queries'

import { useQuery } from 'react-apollo-hooks'

enum MODE {
	EDIT,
	VIEW,
}

function renderNews(wrapperId, url) {
	var el = document.querySelector('#' + wrapperId)
	el.innerHTML = `<div><a href="${url}">test: "${url}" </a></div>`
}

TUIEditor.defineExtension('news', () => {
	TUIEditor.codeBlockManager.setReplacer('news', function(youtubeId) {
		var wrapperId =
			'news' +
			Math.random()
				.toString(36)
				.substr(2, 10)
		setTimeout(renderNews.bind(null, wrapperId, youtubeId), 0)

		return '<div id="' + wrapperId + '"></div>'
	})
})


const useEditor = ({ ref }, updater = []) =>
	useMemo(() => {
		return (
			<Editor
				ref={ref}
				initialValue='hello react editor world!'
				previewStyle='tab' //'vertical'
				height='100%'
				width='100%'
				initialEditType='markdown'
				useCommandShortcut={true}
				exts={['chart', 'scrollSync', 'colorSyntax', 'uml', 'mark', 'table', 'news']}
				usageStatistics={false}
			/>
		)
	}, updater)

const Studio = (props) => {
	const [mode, setMode] = useState(MODE.EDIT)

	const editorRef = createRef()
	const data = useQuery(NEWS)

	return (
		<Container cols={['1fr']} rows={['50px', 'calc(100vh - 50px)']}>
			<Options>
				<Switch checkedChildren={<Icon type='eye' />} unCheckedChildren={<Icon type='tool' />} checked={mode === MODE.VIEW} onChange={(checked) => setMode(checked ? MODE.VIEW : MODE.EDIT)} />
			</Options>
			<Contents>{useEditor({ ref: editorRef }, [])}</Contents>
		</Container>
	)
}
export default Studio
