/* eslint-disable no-tabs */
/* eslint-disable import/prefer-default-export */
import styled from 'styled-components';

export const NotFoundStyles = styled.section`
	display: flex;
	flex-direction: column;
  align-items: center;
	a{
		text-decoration: none;
		&:hover{
			text-decoration: underline;
		}
	}
	#div_img{
		width: 80%;
		margin-top: 25px;
		img{
			width: 100%;
			border-radius: 4px;
		}
	}
`;
