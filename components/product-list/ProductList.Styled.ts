import styled from 'styled-components';

export const StyledProductList = styled.div`
	margin-top: 30px;

	.products-container {
		width: 100%;

		aside {
			width: 23%;
		}

		.product-list {
			width: 72%;
			display: flex;
			justify-content: space-between;
			align-items: center;
			flex-wrap: wrap;
		}
	}

	.pagination {
		display: flex;
		width: 100%;
		justify-content: center;
		align-items: center;
		padding: 40px 0;

		.page {
			padding: 0 10px;
		}
	}

	@media (max-width: 414px) {
		.products-container {
			aside {
				display: none;
			}

			.product-list {
				width: 100%;
				flex-direction: column;
			}
		}
	}
`;

export const PageNumber = styled.div<{
	highlight: boolean;
}>`
	color: ${({ highlight }) => (highlight ? '#000000' : '#B4B4B4')};
	font-size: 29px;
	font-weight: ${({ highlight }) => (highlight ? 900 : 400)};
	cursor: pointer;
	text-align: center;
`;
