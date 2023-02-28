/* eslint-disable no-tabs */
/* eslint-disable import/prefer-default-export */
import styled from 'styled-components';

export const ContatoStyles = styled.section`
	#div_form{
		h1{
			text-align: center;
		}
		margin: 20px auto;
		width: 700px;
		border: 1px solid #cdcddd;
		border-radius: 4px;
		form{
			display: flex;
			flex-direction: column;
			width: 90%;
			margin: auto;
			label{
				display: flex;
				flex-direction: column;
				margin-top: 5px;
				input{
					margin-top: 5px;
					border: 1px solid #ced4da;
					outline: none;
					border-radius: 3px;
					height: 35px;
					background-color: #ffffff;
					padding: 0 5px;
					font-size: 1rem;
					font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
					&:hover{
						border: 1px solid #5b91c7;
					}
					&:focus{
						border: 1px solid #c75b5b;
					}
				}
				textarea{
					margin-top: 5px;
					outline: none;
					resize: none;
					border: 1px solid #ced4da;
					padding: 5px 5px;
					max-width: 100%;
					height: 75px;
					font-size: 1rem;
					border-radius: 3px;
					background-color: #ffffff;
					font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
					&:hover{
						border: 1px solid #5b91c7;
					}
					&:focus{
						border: 1px solid #c75b5b;
					}
				}
			}
			#div_contador{
				width: 100%;
				h4{
					float: right;
					span{
						margin-right: 5px;
					}
				}
			}
			button{
				margin-block: 15px;
				margin-bottom: 15px;
				margin-top: 15px;
				border: 1px solid #59a9ff;
				border-radius: 3px;
				background-color: #59a9ff;
				height: 40px;
				color: #eff7ff;
				font-weight: bold;
				font-size: 1rem;
				cursor: pointer;
				&:hover{
					font-size: 1.1rem;
				}
				&:active{
					font-size: 1.2rem;
				}
			}
		}
	}
	@media (max-width: 750px) {
		#div_form{
			width: 600px;
		}
	}
	@media (max-width: 700px) {
		#div_form{
			width: 500px;
		}
	}
	@media (max-width: 600px) {
		#div_form{
			width: 450px;
		}
	}
	@media (max-width: 500px) {
		#div_form{
			width: 400px;
		}
	}
	@media (max-width: 450px) {
		#div_form{
			width: 350px;
		}
	}
	@media (max-width: 400px) {
		#div_form{
			width: 300px;
		}
	}
	@media (max-width: 350px) {
		#div_form{
			width: 250px;
		}
	}
`;
