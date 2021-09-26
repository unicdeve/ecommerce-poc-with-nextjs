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
			flex-wrap: wrap;
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
