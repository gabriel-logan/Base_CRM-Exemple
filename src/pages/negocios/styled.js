import styled from 'styled-components';

const NegociosStyles = styled.section`
	background-color: #fdfdfc;
	#leads_form{
		transform: translateY(-200%);
		transition: .3s ease-in;
		position: fixed;
	}
	.separa_infos{
		display: flex;
		justify-content: space-between;
		.blocos{
			display: flex;
			flex-direction: column;
			align-items: center;
			.leads{
				width: 260px;
					border: 1px solid;
					border-radius: 5px;
					margin-left: 5px;
					margin-top: 15px;
					margin-bottom: 15px;
					padding: 5px;
					background-color: white;
					overflow: hidden;
					#openOcultoLead{
						z-index: 2;
						background-color: #d9cbcb;
						border-radius: 4x;
						defs{
							z-index: 0;
						}
						path{
							z-index: 0;
						}
					}
					.oculto_leads{
						height: 0;
						transition: .5s linear;
					}
			}
		}
		#div_leads{
			display: flex;
			flex-direction: column;
			align-items: center;
			div{
				.leads{
					width: 260px;
					border: 1px solid;
					border-radius: 5px;
					margin-left: 5px;
					margin-top: 15px;
					margin-bottom: 15px;
					padding: 5px;
					background-color: white;
					overflow: hidden;
					#openOcultoLead{
						z-index: 2;
						background-color: #d9cbcb;
						border-radius: 4x;
						defs{
							z-index: 0;
						}
						path{
							z-index: 0;
						}
					}
					.oculto_leads{
						height: 0;
						transition: .5s linear;
					}
				}
			}
		}
	}
	#abreLeads{
		height: 40px;
    width: 150px;
    font-size: 1rem;
    background: green;
    color: white;
    text-shadow: 1px 1px 1px black;
    border: 4px solid #d9cbcb;
    border-radius: 10px;
	}
`;

export default NegociosStyles;
