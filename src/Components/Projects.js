import React, { useState } from 'react';
import {
  Card, CardImg, CardText,Badge,Button,
  CardTitle, CardSubtitle
} from 'reactstrap';
import { projects } from '../portfolio';
import rick from '../assets/rick.jpg'

function Projects() {
    const [align, setAlign]=useState('left')
    return (
        <div>
           { projects.map((project) => {
                return(
                    <Card style={{border: '2px solid green',margin: '20px 20px 20px 20px',backgroundColor: 'cyan'}} class="col-12 col-md-6">
                       <CardImg src={rick} alt={project.name} style={{float: {align}}} />
                        <Card body inverse color="warning" >
                            <CardTitle tag='h4'>{project.name}</CardTitle>
                            <CardSubtitle tag='h5' className='mb-2 text-mutes'>{project.title}</CardSubtitle>
                            <h4>
                            {
                                project.badges.map((tech)=>{
                                    return(
                                        <span><Badge color="danger">{tech}</Badge>&nbsp;</span>
                                    );
                                })
                            }
                            </h4>
                            <CardText>{project.desc}</CardText>
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
