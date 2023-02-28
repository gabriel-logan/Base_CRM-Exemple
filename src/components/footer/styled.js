/* eslint-disable no-tabs */
/* eslint-disable import/prefer-default-export */
import styled from 'styled-components';

export const FooterStyles = styled.footer`
	height: 150px;
	width: 100%;
	background-color: #000000;
	display: flex;
  flex-direction: column;
  justify-content: center;
	align-items: center;
	clear: both;
	#div_icons{
		color: white;
		svg{
			margin-inline: 5px;
			margin-bottom: 5px;
		}
	}
	#div_quote{
		color: white;
	}
`;
