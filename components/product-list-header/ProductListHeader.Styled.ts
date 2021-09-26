import styled from 'styled-components';

export const StyledProductListHeader = styled.header`
	width: 100%;

	.h-2 {
		span {
			color: #9b9b9b;
			font-weight: normal;
		}
	}

	.filter-icon-wrapper {
		display: none;
	}

	.sort-action {
		font-weight: normal;
		font-size: 22px;
		line-height: 24px;
		color: #9b9b9b;

		label {
			span {
				padding-left: 10px;
				padding-right: 10px;
			}
		}

		select {
			font-size: 22px;
			border: none;
			width: fit-content;

			&:focus {
				outline: none;
			}
		}
	}

	@media (max-width: 414px) {
		.h-2 {
			font-size: 18px;
		}

		.filter-icon-wrapper {
			display: block;
		}

		.sort-action {
			display: none;
		}
	}
`;
