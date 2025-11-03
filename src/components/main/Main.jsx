// MyComponent.js
import React from 'react';
import './Main.css'

function Main() {
    return (
        <div className="paragraph">
                <div className="paragraph_header">Contact</div>
                <div className="paragraph_content">
                    Email: <a href="mailto:fcovillegast@gmail.com" >fcovillegast@gmail.com</a>
                </div>
                <div className="paragraph_header">Summary</div>
                <div className="paragraph_content">
                    Software engineer with experience in building and integrating enterprise applications.
                    He was a programmer, mainly in Java, for twelve years, after that he started to work
                    four years ago and a half as Site Reliability Engineer first in AWS and lastly in GCP.<br/>
                    In AWS he has worked with IAM, ECS, EC2, S3, DynamodDB, and load balancers. <br/>
                    In GCP he has worked with IAM, services Accounts, GKE, GCS, cloud functions, and PubSub.

                </div>
                <div className="paragraph_header">Experience</div>
                <div className="paragraph_header2">
                    <div className="paragraph_header2_left">Equifax. (Site Reliability Engineer)</div>
                    <div className="paragraph_header2_right">June 2021 – current</div>
                </div>
                <div className="paragraph_content">
                    Responsible for managing cloud resources, initially AWS and eventually GCP, performed observability with Datadog and Grafana.<br/>
                    He worked using jenkins, github actions, terraform, javascript, python, virtual machines, linux, centos, ecs, and gke, bash
                </div>
                <div className="paragraph_header2">
                    <div className="paragraph_header2_left">23people. (Mid Level Software Engineer)</div>
                    <div className="paragraph_header2_right">Sept 2019 – May 2021</div>
                </div>
                <div className="paragraph_content">
                    He started working at AWS, developed microservices with Spring framework on SQL Server and Oracle databases, and began working on deployment pipelines at Jenkins.
                </div>
                <div className="paragraph_header2">
                    <div className="paragraph_header2_left">Ejedigital. (Startup)</div>
                    <div className="paragraph_header2_right">Apr 2007  – Aug 2019</div>
                </div>
                <div className="paragraph_content">
                    He started working at Ejedigital at the end of the first quarter of 2017. He began as a developer,
                    creating Java applications with CSS and SQL Server databases, all in monolithic applications.
                    It wasn't until seven years later that he was promoted to technical lead. In this role,
                    he primarily worked on process workflows using internal tools programmed by the development team.
                    During this same period as technical lead, he had to connect payroll calculation systems with
                    Ejedigital's tools. After four years, in July 2016, he began representing the company directly
                    to clients, providing his technical perspective on integration and development issues.<br/>
                    This all ended in September 2019.
                </div>
                <div className="paragraph_header">Education</div>
                <div className="paragraph_header2">
                    <div className="paragraph_header2_left">MBA (Graduate)</div>
                    <div className="paragraph_header2_right">2013 – 2016</div>
                </div>
                <div className="paragraph_content">Universidad de Chile. </div>
                <div className="paragraph_header2">
                    <div className="paragraph_header2_left">Grade</div>
                    <div className="paragraph_header2_right">2001 – 2005</div>
                </div>
                <div className="paragraph_content">Universidad del Mar, La Serena </div>
                <div className="paragraph_header2">
                    <div className="paragraph_header2_left">High School</div>
                    <div className="paragraph_header2_right">1997 - 2000</div>
                </div>
                <div className="paragraph_content">Colegio Gerónimo Rendic, La Serena </div>

                <div className="paragraph_header">Links</div>
                <div className="paragraph_header2">
                    <div className="paragraph_header2_left">Git:</div>
                    <div className="paragraph_header2_right"><a href="https://github.com/fcovillegast">https://github.com/fcovillegast</a></div>
                </div>
                <div className="paragraph_header2">
                    <div className="paragraph_header2_left">Blogger:</div>
                    <div className="paragraph_header2_right"><a href="https://journey-to-be-a-real-business.blogspot.com/">https://journey-to-be-a-real-business.blogspot.com/</a></div>
                </div>

        </div>
    );
}

export default Main;