import styled from 'styled-components';

export const StyledFeaturedProduct = styled.div`
	.header {
		width: 100%;
		display: flex;
		justify-content: space-between;
		align-items: center;

		h1 {
			font-weight: bold;
			font-size: 32px;
		}
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
			font-size: 22px;
		}

		.left {
			width: 55%;

			span {
				font-weight: bold;
				font-size: 22px;
				color: #656565;
			}

			p {
				font-weight: normal;
				font-size: 18px;
				line-height: 27px;
				color: #656565;
			}
		}

		.right {
			text-align: right;
			width: 45%;

			.products {
				display: flex;
				justify-content: flex-end;

				.img-wrap {
					position: relative;
					margin-left: 20px;
					width: 117px;
					height: 147px;
				}
			}
		}
	}
`;
