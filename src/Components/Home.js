import React from 'react'
import { Jumbotron } from 'reactstrap'
import "../styles/SocialMedia.css";
import { socialMediaLinks } from "../portfolio";
import styled from "styled-components";
import Rick from "../assets/rick.jpg"

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
            <Jumbotron class="col-12"style={{backgroundColor: 'cyan',justifyContent: 'center'}}>
        <div style={{backgroundColor: 'red',width: '400px',height: '400px',borderRadius: '200px',margin: '0 auto'}} >
        <img class="center" src={Rick} style={{borderRadius: '150px'}} height='300px' width='300px'></img>
        </div>
        <h1 className="display-2">Hello, peeps! 👐</h1>
        <h3 className="lead">This is Shubhank 😁, an undergrad at NITW</h3>
        <hr className="my-2" />


        <div className="social-media-div">
        { socialMediaLinks.map((media) => {
            return (
            <a
                href={media.link}
                className={`icon-button`}
                target="_blank"
            >
                <IconWrapper {...media}>
                <i className={`fa ${media.fontAwesomeIcon}`}></i>
                </IconWrapper>
            </a>
            );
        })}
        </div>    
        </Jumbotron>
    </div>
    )
}

export default Home
