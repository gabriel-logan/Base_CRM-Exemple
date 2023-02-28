/* eslint-disable no-tabs */
/* eslint-disable import/prefer-default-export */
import styled from 'styled-components';

export const HeaderStyle = styled.header`

	position: relative;
	width: 100%;
	height: 100px;
	background-color: #3a6ac6;
	svg{
		color: #f7f7f7;
		cursor: pointer;
	}
	#menu{
		position: absolute;
		left: 20px;
		top: 35px;
		z-index: 1;
		line{
			z-index: 0;
		}
	}
	#homeIco{
		position: absolute;
		right: 20px;
		top: 35px;
	}
	#circleLog{
		width: 100%;
		margin: 0 auto;
		position: relative;
		top: 35px;
	}
	.cicleLogLogged{
		color: #099d09;
		animation: identifier 2s;
		animation-timing-function: linear;
	}
	@keyframes identifier {
		0%{
			color: #099d09;
		}
		10%{
			color: #aaf7aa;
		}
		25%{
			color: #099d09;
		}
		35%{
			color: #aaf7aa;
		}
		55%{
			color: #099d09;
		}
		75%{
			color: #aaf7aa;
		}
		85%{
			color: #099d09;
		}
		100%{
			color: #aaf7aa;

		}
	};
	.cicleLogNotLogged{
		color: black;
	}
	@media (max-width: 460px) {
		h1{
			top: 15px;
		}
	}
	@media (max-width: 350px) {
		h1{
			top: 25px;
			font-size: 1.2rem;
		}
	}
`;
