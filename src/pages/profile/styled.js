/* eslint-disable no-tabs */
import styled from 'styled-components';

export const ProfileStyles = styled.section`
	height: 100vh;
	z-index: 5;
	text-align: center;
	#dev{
		margin-bottom: 25px;
	}
	#div_foto-capa{
		width: 100%;
		div{
			width: 90%;
			margin: auto;
			img{
				width: 100%;
				height: 200px;
				border: 1px solid;
				border-radius: 0 0 50% 50%;
				@media (min-width: 600px) {
					height: 300px;
				}
			}

				label{
					cursor: pointer;
					input{
						display: none;
					}
				}

			svg{
				position: relative;
				bottom: 190px;
			}
		}
	}
	#div_foto-perfil{
		div{
			width: 150px;
			height: 150px;

			margin: auto;
			img{
				width: 100%;
				height: 100%;
				border: 1px dashed;
				border-radius: 100%;
			}

				label{
					cursor: pointer;
					input{
						display: none;
					}
				}

			svg{
				position: relative;
				bottom: 25px;
			}
		}
	}
`;
