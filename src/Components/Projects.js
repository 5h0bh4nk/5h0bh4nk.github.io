import React from 'react';
import {
  Card, CardImg, CardText,Badge,Button,
  CardTitle, CardSubtitle
} from 'reactstrap';
import { projects } from '../portfolio';


function Projects() {
    return (
        <div>
        <h1 style={{
            fontFamily: 'Nightmare',
            fontWeight: '500',
            fontSize: '100px'}}>Projects</h1>
           { projects.map((project) => {
                return(
                    <Card style={{border: '2px solid green',margin: '20px 20px 20px 20px',backgroundColor: '#152238',padding: '20px'}} class="col-12 col-md-6">
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
                            <Button onClick={project.repo_link} ><i class="fa fa-github"></i>&nbsp;Source Code</Button>
                            <br />
                            {
                                project.demo_link?
                                <Button><i class="fa fa-link"></i>&nbsp;Demo_Link</Button>:<div></div>
                            }
                        </Card>
                    </Card>
                );
            })}
        </div>
    )
}

export default Projects
