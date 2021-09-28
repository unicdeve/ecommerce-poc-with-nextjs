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

	.cart-items {
		display: none;
		padding-top: 20px;
		background: #ffffff;
		border: 4px solid #e4e4e4;
		z-index: 101;
		position: absolute;
		top: 99px;
		right: 77px;
		height: fit-content;
		max-height: 500px;
		width: fit-content;
		overflow-y: scroll;

		&.open {
			display: block;
		}

		.cancel-icon-wrap {
			width: 100%;
			display: flex;
			justify-content: flex-end;
			padding: 0 20px;
		}

		.btn-wrap {
			width: 100%;
			min-width: 200px;
			margin: auto;
			text-align: center;

			button {
				background: #ffffff;
				border: 3px solid #000000;
				width: 90%;
				height: 55px;
				margin: 10px;
			}
		}

		.hr-1 {
			width: 91%;
		}

		.item {
			padding: 20px;
			display: flex;
			width: 100%;
			justify-content: space-between;

			.title {
				margin-right: 30px;

				h5 {
					font-weight: bold;
					font-size: 20px;
					margin: 10px 0 5px 0;
				}

				small {
					font-weight: normal;
					font-size: 29px;
					color: #656565;
				}
			}
		}

		p {
			text-align: center;
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
