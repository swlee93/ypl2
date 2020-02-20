import styled from 'styled-components'

export const Container = styled.div`
	width: 100%;
	height: 100%;
	display: grid;
	grid-template-columns: 1fr;
	grid-template-rows: 90vh; // 230px calc(100vh - 300px);
	flex-wrap: wrap;
	justify-items: center;
`
