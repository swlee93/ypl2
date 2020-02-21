import styled from 'styled-components'
interface Container {
	cols: string[]
	rows: string[]
}
export const Container = styled.div`
	width: 100%;
	height: 100%;
	display: grid;
	${({ rows = ['1fr'], cols = ['90vh'] }: Container) => {
		return `
    grid-template-columns: ${cols.join(' ')};
    grid-template-rows: ${rows.join(' ')};
    `
	}}

	flex-wrap: wrap;
	justify-items: center;
`

export const Options = styled.div`
	display: flex;
	align-items: center;
`

export const Contents = styled.div`
  display: flex;
  flex-direction: column;
	width: 100%;
`
