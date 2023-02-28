/* eslint-disable no-tabs */
/* eslint-disable import/prefer-default-export */
import styled from 'styled-components';

export const NavMenuStyle = styled.nav`
	z-index: 2;
	background-color: #060a25;
	position: absolute;
	width: 25%;
	height: 100%;
	transform: translateX(-100%);
	#titulo_menu{
		height: 100px;
		#close_menu{
			position: relative;
			top: 20px;
			left: 20px;
			z-index: 1;
				#x{
					z-index: 0;
					cursor: pointer;
					color: white;
			}
		}
	}
	#menu_itens{
		display: flex;
    flex-direction: column;
		div{
			width: 90%;
			&:hover{
				border: 1px solid;
				border-radius: 4px;
				background-color: #1a83ff;
				.links{
					color: white;
				}
			}
				.links{
				display: flex;
				align-items: center;
				margin-left: 25px;
				color: #e5e5e5;
				text-decoration: none;
				svg{
					margin-right: 15px;
				}
			}
		}
		#copy_right-navVer{
			position: absolute;
			bottom: 0;
			border: none;
			background-color: #060a25;
			width: 100%;
			div{
				display: flex;
				background-color: #060a25;
				justify-content: center;
				align-items: center;
				color: #e5e5e5;
				width: 100%;
				border: none;
				svg{
					margin-right: 15px;
				}
				h3{
					&:hover + cite{
						transition: 1s ease;
						opacity: 1;
					}
				}
				cite{
					opacity: 0;
					position: absolute;
					position: absolute;
					left: 85px;
					bottom: 60px;
					border: 0.1px solid #9d9db161;
					border-radius: 3px;
					padding: 5px;
					text-align: center;
					svg{
						position: relative;
						left: -60px;
    				bottom: -20px;
					}
				}
			}
		}
	}
	@media (max-width: 600px) {
		width: 100%;
	#titulo_menu{
		#close_menu{
			position: relative;
			top: 20px;
			left: unset;
			right: 20px;
			float: right;
		}
	}
	#menu_itens{
		div{
				.links{
				margin-left: 25px;
				svg{
					margin-right: 15px;
				}
			}
		}
	}
	}
	h1{
		margin: 0;
	}
`;
