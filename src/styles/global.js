/* eslint-disable no-tabs */
/* eslint-disable import/prefer-default-export */
import { createGlobalStyle } from 'styled-components';
import 'react-toastify/dist/ReactToastify.css';

export const GlobalStyleComponent = createGlobalStyle`
	body{
		margin: 0;
	}
	section{
		min-height: 100vh;
	}
	button{
		cursor: pointer;
	}
`;
