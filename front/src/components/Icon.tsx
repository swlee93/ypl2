import React, { useMemo, useEffect, useState } from 'react'
import { Icon as AntIcon } from 'antd'
import { IconProps as AntIconProps } from 'antd/lib/icon'

interface IconProps extends AntIconProps {}
const Icon = ({ type }: IconProps) => {
	return <AntIcon type={type} />
}
export default Icon
