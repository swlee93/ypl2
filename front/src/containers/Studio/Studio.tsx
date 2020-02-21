import React, { useState } from 'react'
import { Container, Options, Contents } from '../../styles'
import { Switch } from 'antd'

import Icon from '../../components/Icon'

enum MODE {
	EDIT,
	VIEW,
}
const Studio = (props) => {
	const [mode, setMode] = useState(MODE.EDIT)

	return (
		<Container>
			<Options>
        <Switch 
          checkedChildren={<Icon type='eye' />}
          unCheckedChildren={<Icon type='tool' />}
          checked={mode === MODE.VIEW}
          onChange={(checked) => setMode(checked ? MODE.VIEW : MODE.EDIT)} />
			</Options>
			<Contents>studio</Contents>
		</Container>
	)
}
export default Studio
