/* eslint-disable import/prefer-default-export */
/* eslint-disable no-tabs */
import styled from 'styled-components';

export const FormStyles = styled.section`
	display: flex;
	flex-direction: column;
    align-items: center;
	margin: 60px auto;
	#base{
		width: 300px;
		height: 50px;
		background-color: #f7f7f7;
		border-top: 1px solid #e0e0e0;
		border-right: 1px solid #e0e0e0;
		border-left: 1px solid #e0e0e0;
		border-radius: 4px 4px 0px 0px;
		color: #4f4f4f;
		h3{
			margin: 0;
			font-size: 1.5rem;
			position: relative;
			left: 10px;
			top: 10px;
			font-weight: 400;
			font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
		}
	}
	#div_form{
		position: relative;
		width: 300px;
		height: 300px;
		display: flex;
    justify-content: center;
		border: 1px solid #e0e0e0;
		border-radius: 0 0 4px 4px;
		form{
			width: 80%;
			height: 80%;
			display: flex;
    	flex-direction: column;
				label{
				margin-top: 25px;
				display: flex;
				flex-direction: column;
				color: #4f4f4f;
				font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
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
			}

			button{
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
		a{
			position: absolute;
    	bottom: 25px;
			right: 35px;
			color: blue;
			font-size: 1em;
			font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
			text-decoration: none;
			&:hover{
				color: #6c2121;
				text-decoration: underline;
			}
		}
	}
	@media (max-width: 500px) {
		#base{
			width: 285px;
		}
		#div_form{
			width: 285px;
		}
	}
	@media (max-width: 400px) {
		#base{
			width: 245px;
		}
		#div_form{
			width: 245px;
		}
	}
`;
