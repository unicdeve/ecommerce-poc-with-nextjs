import styled from 'styled-components';

export const StyledHeader = styled.header`
	margin-bottom: 40px;
	position: fixed;
	top: 0;
	left: 0;
	width: 100%;
	background: #fff;
	z-index: 100;

	.content {
		display: flex;
		width: 100%;
		justify-content: space-between;
		padding-top: 20px;
		padding-bottom: 25px;
	}

	.hr-wrap {
		.hr {
			width: 100%;
			height: 0;
			padding: 0 92px;
			border: 2px solid #e4e4e4;
		}
	}

	&.container {
	}

	@media (max-width: 414px) {
		&.container {
			margin: 0;
		}
		.hr-wrap {
			padding: 0;
		}
	}
`;
