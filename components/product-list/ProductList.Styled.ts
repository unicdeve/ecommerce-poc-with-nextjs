import styled from 'styled-components';

export const StyledProductList = styled.div`
	margin-top: 30px;

	.products-container {
		width: 100%;

		aside {
			width: 35%;
		}

		.product-list {
			width: 65%;
		}
	}

	@media (max-width: 414px) {
		.products-container {
			aside {
				display: none;
			}

			.product-list {
				width: 100%;
			}
		}
	}
`;
