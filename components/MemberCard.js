import ReactCardFlip from 'react-card-flip';
import Card from 'react-bootstrap/Card';
import React from 'react'

import ReactTooltip from "react-tooltip";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faLinkedin,
} from "@fortawesome/free-brands-svg-icons";

// import {faLinkedin} from '@fortawesome/free-brands-svg-icons'

const positionData = {
    "Strategist": "New Comers",
    "Director": "Department Leaders"
}

const departmentData = {
    "Alumni Relations": "The Alumni Relations Department is responsible for fostering relationships with SLC’s <br />" +
        "alumni network and creating an engaged and supportive connection between former and current SLC members. <br />" +
        "SLC’s alumni network consists of diverse members in terms of experience, industries and exposure. The department  <br />" +
        "is responsible for keeping the alumni aware about the successes and current events hosted by SLC through newsletters.  <br />" +
        "Buddy System is a mentorship program within SLC that pairs a current member with an alumni for the professional <br />" +
        " development of the current members and for the alumni to stay better connected and engaged with the progress of SLC",
    "Club & Faculty Relations": "The Club Relations department aims to act as an intermediary between all of the active KSB  <br />" +
        "clubs. This department takes great pride in developing intimate connections with clubs in order to establish a larger  <br />" +
        "network where those clubs can then interact and collaborate with each other. Our chief purpose is to be the bridge that  <br />" +
        "tethers to all KSB clubs and brings them closer together!",
    "Technology": "In the Tech department, students from technical backgrounds get to connect with the business students. <br />" +
        " Over the past few years, CS and CIS students have been heavily envolved in the council.  <br />" +
        "They have created the official website of the SLC and are currently maintaining it. Apart from these, the tech department  <br />" +
        "plays a key role helping members of the council with tech support and helps to create a bridge between the tech and business students.",
    "Marketing": "The marketing department is intended to use creativity to enhance the efforts of our SLC peers by  <br />" +
        "promoting and advertising events on our social media. Behind the scenes, the department is responsible for creating content,  <br />" +
        "making flyers, interacting with KBS students online and being the brand ambassadors for SLC. There’s always something <br />" +
        " new to do in marketing, with creativity and invitation the marketing team is always searching for new ways to improve and advance <br />" +
        " the student outreach strategy.",
    "Executive Team": ""
}


export default class MemberCard extends React.Component {
    constructor() {
        super();
        this.state = {
            isFlipped: false

        };
        this.handleClick = this.handleClick.bind(this);
        this.handleHover = this.handleHover.bind(this);
        // addDots = this.props.description.length > 350 ? "...": "";
    }



    handleClick(e) {
        e.preventDefault();
        this.setState(prevState => ({ isFlipped: !prevState.isFlipped }));
    }

    handleHover(doHover){
        console.log(`handle hover ${doHover}`)
        // this.setState(prevState => ({ isFlipped: !prevState.isFlipped }));
        this.setState({isFlipped: doHover})
    }
    render() {
        return (
            <><div className='shadow p-2 wrap-content rounded'>
                <div className='portraits'>

                    <Card onMouseEnter={() => this.handleHover(true)}
                            onMouseLeave={() => this.handleHover(false)} className="no-border ">
                        <ReactCardFlip isFlipped={this.state.isFlipped} flipDirection="horizontal"
>
                            <div 
                             className="portraits ">
                                <img className="rounded portraits-front" src={this.props.image} alt="${member.name}" />
                            </div>

                            <div className='portraits rounded portraits-back'>
                                {this.props.description.substring(0, 569)}{this.props.description.length > 569 ? "..." : ""}
                            </div>
                        </ReactCardFlip>
                        <Card.Body>
                            <Card.Title>
                                {this.props.name}
                            </Card.Title> <Card.Text className='card-subtitle' >
                                <div className="row">
                                    <div className="col-10">

                                        {this.props.title} <br /> <span data-tip data-for={this.props.name}>
                                            {this.props.department}
                                        </span>
                                    </div>
                                    <div className="col-2 card-icon-div align-self-end">
                                        <a href={this.props.linkedin} rel="noopener noreferrer" target="_blank" ><FontAwesomeIcon size="2x" icon={faLinkedin} /></a>
                                    </div>
                                </div>
                            </Card.Text>
                            <ReactTooltip id={this.props.name} place="bottom" effect="solid" multiline="true" >
                                <p dangerouslySetInnerHTML={{ __html: departmentData[this.props.department] }}></p>
                            </ReactTooltip>

                        </Card.Body>
                    </Card>
                </div>
            </div>

            </>
        )
    }
}