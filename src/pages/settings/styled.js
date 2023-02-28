/* eslint-disable no-tabs */
import styled from 'styled-components';

const SettingsStyles = styled.section`
	text-align: center;
	#all_configs{
		display: flex;
    flex-wrap: wrap;
    justify-content: center;
		div{
			margin: 20px;
			div{
				background-color: #e9f6f7;
				padding: 5px;
				border-radius: 4px;
				&:hover{
					text-decoration: underline;
				}
				h3{
					margin: 5px;
					cursor: pointer;
				}
			}
			div{
				form{
					display: flex;
    			flex-direction: column;
					width: 300px;
    			margin: auto;
					label{
						margin-top: 15px;
						color: #4f4f4f;
						font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
							input{
							margin-top: 15px;
							width: 97%;
							border: 1px solid #ced4da;
							outline: none;
							border-radius: 3px;
							height: 35px;
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
						margin-block: 10px;
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
		}
	}
`;

export default SettingsStyles;
