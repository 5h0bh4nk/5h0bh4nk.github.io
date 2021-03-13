import React from 'react'
import { Jumbotron} from 'reactstrap'
import "../styles/SocialMedia.css";
import { socialMediaLinks } from "../portfolio";
import styled from "styled-components";
import shubhank from "../assets/shubhank.jpg"
import '../styles/Home.css'

function Home() {
    const IconWrapper = styled.span`
    i {
        background-color: ${(props) => props.backgroundColor};
    }
    &:hover i {
        background-color: black;
        transition: 0.3s ease-in;
    }
    `;


    return (
        <div>
            <Jumbotron style={{backgroundColor: '#152238',alignSelf: 'center'}}>
        <div className="col-12" style={{backgroundColor: '#f29f04',width: '400px',height: '400px',borderRadius: '200px',margin: '0 auto'}} >
        <img class="center" src={shubhank} style={{borderRadius: '150px',border: '2px solid blue'}} height='300px' width='300px' alt="my_img"></img>
        </div>
        <h1 className="display-2"
        style={{
            color: '#f29f04',
            fontFamily: 'Nightmare',
        }}
        >HELLO , WORLD !!</h1>
        <h2 className="lead"
                style={{
                    fontFamily: 'Computo',
                    fontWeight: '500',
                    color: '#f29f04',
                }} 
                    >This is Shubhank 😁, an undergrad at NITW
        </h2>
        <hr className="my-2" />

        <div className="social-media-div">
        { socialMediaLinks.map((media) => {
            return (
            <a
                href={media.link}
                className={`icon-button`}
                target="_blank"
                rel="noreferrer"
            >
                <IconWrapper {...media}>
                <i className={`fa ${media.fontAwesomeIcon}`}></i>
                </IconWrapper>
            </a>
            );
        })}
    <br></br><br></br>
        <a className="btn" href="https://drive.google.com/file/d/1eGgAaHTT-EDmfcqMFxbommQYOpcELBz6/view?usp=sharing"><i className="fa fa-download"></i><span> Resume Download </span></a>
        </div>    
        </Jumbotron>
    </div>
    )
}

export default Home
