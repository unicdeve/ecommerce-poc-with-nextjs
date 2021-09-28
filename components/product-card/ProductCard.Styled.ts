import styled from 'styled-components';

export const StyledProductCard = styled.div`
	width: 280px;
	height: auto;
	margin-bottom: 40px;

	.img-wrap {
		position: relative;
		width: 100%;
		height: 390px;

		span {
			position: absolute;
			top: 0;
			left: 0;
			display: block;
			background-color: #fff;
			padding: 7px 18px;
		}

		.add-to-cart-wrapper {
			visibility: hidden;
			position: absolute;
			bottom: 0;
			left: 0;
			width: 100%;

			button {
				width: 100%;
			}
		}

		&:hover {
			.add-to-cart-wrapper {
				visibility: visible;
			}
		}
	}

	.card-bottom {
		.category {
			padding-top: 5px;
			font-weight: bold;
			font-size: 22px;
			line-height: 24px;
			color: #656565;
			text-transform: capitalize;
		}

		h2 {
			font-weight: bold;
			font-size: 34px;
			margin-top: 8px;
			margin-bottom: 8px;
		}

		.price {
			font-weight: normal;
			font-size: 29px;
			color: #656565;
		}
	}

	@media (max-width: 1200px) {
		width: 240px;
	}

	@media (max-width: 414px) {
		width: 100%;

		.img-wrap {
			height: 502px;

			.add-to-cart-wrapper {
				visibility: visible;
			}
		}
	}
`;
