import ReactCardFlip from 'react-card-flip';
import Card from 'react-bootstrap/Card';
import React from 'react'

import ReactTooltip from "react-tooltip";

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
        " development of the current members and for the alumni to stay better connected and engaged with the progress of SLC"
}


export default class MemberCard extends React.Component {
    constructor() {
        super();
        this.state = {
            isFlipped: false

        };
        this.handleClick = this.handleClick.bind(this);
    }


    handleClick(e) {
        e.preventDefault();
        this.setState(prevState => ({ isFlipped: !prevState.isFlipped }));
    }

    render() {
        return (
            <><div className='shadow p-2 wrap-content rounded'>
                <div className='portraits'>

                    <Card className="no-border ">
                        <ReactCardFlip isFlipped={this.state.isFlipped} flipDirection="horizontal">
                            <div onClick={this.handleClick} className="portraits ">
                                <img className="rounded portraits-front" src="\assets\team-members\resized-members\elena.png" alt="${member.name}" />
                            </div>

                            <div onClick={this.handleClick} className='portraits rounded portraits-back'>
                                This is the back of the card.
                            </div>
                        </ReactCardFlip>
                        <Card.Body>
                            <Card.Title>
                                Elena Ivanov
                            </Card.Title> <Card.Text>

                                Strategist -<span data-tip data-for="registerTip">
                                    Alumni Relations
                                </span>
                            </Card.Text>

                            <ReactTooltip id="registerTip" place="bottom" effect="solid" multiline="true" >
                                <p dangerouslySetInnerHTML={{ __html: departmentData["Alumni Relations"] }}></p>
                            </ReactTooltip>

                        </Card.Body>
                    </Card>
                </div>
            </div>

            </>
        )
    }
}