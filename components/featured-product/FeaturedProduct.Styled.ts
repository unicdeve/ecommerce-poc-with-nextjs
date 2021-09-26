import styled from 'styled-components';

export const StyledFeaturedProduct = styled.div`
	.header {
		width: 100%;
		display: flex;
		justify-content: space-between;
		align-items: center;
	}

	.add-to-cart-mb {
		display: none;
	}

	.img-wrapper {
		position: relative;
		width: 100%;
		height: 550px;
		z-index: -1;
		overflow: hidden;

		.img-tag {
			position: absolute;
			bottom: 0;
			left: 0;
			color: #000;
			background: #fff;
			font-size: 20px;
			padding: 20px 35px;
		}
	}

	.product-info {
		margin-top: 30px;
		width: 100%;
		display: flex;
		justify-content: space-between;

		h3 {
			margin-bottom: 10px;
		}

		.left {
			width: 55%;

			span {
				font-weight: bold;
				font-size: 22px;
				color: #656565;
			}
		}

		.right {
			text-align: right;
			width: 45%;

			.h-3 {
				margin-bottom: 30px;
			}

			.products {
				display: flex;
				justify-content: flex-end;
				margin-bottom: 40px;

				.img-wrap {
					position: relative;
					margin-left: 20px;
					width: 117px;
					height: 147px;
				}
			}

			.details {
				.h-3 {
					margin-bottom: 14px;
				}

				span {
					display: block;
					font-size: 16px;
					color: #656565;
					margin-bottom: 15px;
				}
			}
		}
	}

	@media (max-width: 414px) {
		.header {
			button {
				display: none;
			}
		}

		.add-to-cart-mb {
			display: block;
			margin-top: 30px;

			button {
				width: 100%;
			}
		}

		.img-wrapper {
			height: 239px;

			.img-tag {
				font-size: 15px;
				padding: 10px 25px;
				border-bottom: 1px solid #e4e4e4;
			}
		}

		.product-info {
			flex-direction: column;

			.right,
			.left {
				width: 100%;
			}

			.right {
				text-align: left;

				.products {
					justify-content: flex-start;

					.img-wrap {
						margin-left: 0;
						margin-right: 20px;
						width: 97px;
						height: 122px;
					}
				}
			}
		}
	}
`;
