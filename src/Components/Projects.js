import React from 'react';
import {
  Card, CardImg, CardText,Badge,Button,
  CardTitle, CardSubtitle
} from 'reactstrap';
import { projects } from '../portfolio';
import '../styles/Home.css';


function Projects() {
    return (
        <div id="project">
        <h1 style={{
            fontFamily: 'Nightmare',
            fontWeight: '500',
            fontSize: '100px',
            color: '#f29f04'}}>Projects</h1>
           { projects.map((project) => {
                return(
                    <Card style={{border: '2px solid green',margin: '20px auto',backgroundColor: '#152238',padding: '20px'}} className="col-12 col-sm-8">
                       <CardImg src={project.img} alt={project.name}/>
                        <Card body inverse color="warning" >
                            <CardTitle tag='h4'  style={{color: 'black'}}>{project.name}</CardTitle>
                            <CardSubtitle tag='h5' className='mb-2 text-mutes'  style={{color: 'black'}}>{project.title}</CardSubtitle>
                            <h4>
                            {
                                project.badges.map((tech)=>{
                                    return(
                                        <span><Badge color="danger">{tech}</Badge>&nbsp;</span>
                                    );
                                })
                            }
                            </h4>
                            <CardText  style={{color: 'black'}}>{project.desc}</CardText>
                            <Button className="btn" onClick={()=>{
                                window.location=project.repo_link;
                            }} ><i class="fa fa-github"></i><span>&nbsp;Source Code</span></Button>
                            <br />
                            {
                                project.demo_link?
                                <Button onClick={()=>{
                                    window.location=project.demo_link;
                                }} ><i class="fa fa-link"></i><span>&nbsp;Demo_Link</span></Button>:<div></div>
                            }
                        </Card>
                    </Card>
                );
            })}
        </div>
    )
}

export default Projects
