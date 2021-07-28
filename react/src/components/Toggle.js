import React, { useState } from 'react';
import styled from 'styled-components'
import { IoIosArrowForward } from 'react-icons/io'
import { AiOutlinePlusCircle, AiOutlineMinusCircle } from 'react-icons/ai';
import { Link } from 'react-router'
import Modal from '../components/Modal'

/*this js file is for the products page acordian style */

const Toggle = (props) => {
    console.log(props);
    const [toggle, setToggle] = useState(false);

    /*components for toggle with some icons*/
    return (
        <Container >
            <div layout className="question" onClick={() => setToggle(!toggle)}>
                <h4 layout>{props.data.name}</h4>
                <p><IoIosArrowForward id="arrow" /></p>
                <p>Documents Expired</p>
                <p>Version <span>{props.data.version}</span></p>
                <Link to="/FormAddDetails"><AiOutlinePlusCircle id="plus" /> Add Document</Link>
                <a><AiOutlineMinusCircle id="minus" />Delete</a>
                <div className={`${toggle ? 'answer-open' : 'answer'}`} >
                    <div className="title">
                        <div className="first">
                            <p>Certificate Name</p>
                            <button id="expired">Expired</button>
                        </div>
                        <div className="second">
                            <button id="one">Submit Request</button>
                            <button id="two">⋮</button>
                        </div>
                    </div>
                    <div className="parent">
                        <div className="country">
                            <p>Country</p>
                            <p>Issuing Body</p>
                        </div>
                        <div className="exp">
                            <p>Issued On:</p>
                            <p>Renewal Start On:</p>
                            <p>Exp Date:</p>
                        </div>
                    </div>
                </div>
            </div>
        </Container >
    )
}

/*styled for toggle*/

const Container = styled.div`
    .question{
        display: grid;
        grid-template-columns: 1vw 10vw 15vw 15vw 8vw 6.5vw;
        margin-top: 1rem;
        margin-left: 5rem;
        p{
            span{
                font-size: 15px;
            }
        }
        #button{
            &:hover{
                background: yellow;
            }
        }
        #plus{
            color: #2196f3;
        }
        #minus{
            color: #ff0000;
        }
        h4{
            /* font-size: 20px;
            font-weight: bold; */
            .arrow{
                font-size: 25px;                
            }
        }
        .title{
        .first, .second{
            display: flex;
            align-items: center;
        }
        .first{
            display: flex;
            justify-content: flex-start;
            p{
                margin-right: 35px;
                margin-left: 10px;
            }
            #expired{
                background: red;
                height: 1rem;
                width: 3rem;
                border: none;
                color: white;
                border-radius: 20px;
                font-size: 10px;
            }
        }
        .second{
            display: flex;
            justify-content: flex-end;
            #one{
                background-color: #2196f3;
                border: none;
                margin-right: 20px;
                border-radius: 5px;
                width: 8vw;
                color: white;
                height: 40px;
                cursor: pointer;
            }
            #two{
                background: #d1d1d1;
                color: black;
                font-size: 25px;
                font-weight: bold;
                margin-right: 10px;
                width: 30px;
                height: 30px;
                border: none;
                border-radius: 5px;
                cursor: pointer;
            }
        }
    }
    .parent{
        display: grid;
        grid-template-columns: 297px 297px 297px;
    }
    .country{
        display: flex;
        width: 15vw;
        justify-content: space-evenly;
        align-items: flex-start;
    }
    .exp{
        display: flex;
        width: 25vw;
        height: 70px;
        justify-content: space-evenly;
        background-color: #FFECEC;
        border-radius: 8px;
        align-items: flex-start;
    }

    .answer-open{
        background-color: #f7f7f7;
        transform: scaleY(100%);
        transition: 0.4s transform ease-in-out;
    }

    .answer{
        background-color: #f7f7f7;
        transform: scaleY(0);
        transition: 0.4s transform ease-in-out;
        p{
            padding: 1rem 0rem;
        }
    }
    }
`


export default Toggle;