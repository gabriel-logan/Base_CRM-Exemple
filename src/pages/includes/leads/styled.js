import styled from 'styled-components';

const LeadsStyles = styled.div`
	background: #24339d;
	border-radius: 3px;
	form{
		display: flex;
    flex-direction: column;
		width: 400px;
    align-items: flex-end;
    color: white;
    text-shadow: 1px 1px 1px #602901;
		h1{
			margin-right: 65px;
		}
		label{
			#companyName{
				border-radius: 10px 10px 0px 0px;
			}
			input{
				height: 40px;
				width: 240px;
				font-size: 1rem;
				padding-inline: 5px;
				outline: none;
				border: 1px solid #acacd5;
			}
		}
		button{
			height: 35px;
			border: 3px solid #ccd0e1;
			border-radius: 6px 2px;
			background-color: #279122cc;
			color: white;
			text-shadow: 1px 1px 1px #082c06;
			font-weight: bold;
		}
	}
`;

export default LeadsStyles;
