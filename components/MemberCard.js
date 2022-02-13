import ReactCardFlip from 'react-card-flip';
import Card from 'react-bootstrap/Card';
import React from 'react'

import ReactTooltip from "react-tooltip";

const positionData = {
    "Strategist": "New Comers",
    "Director": "Department Leaders"
}

const departmentData = {
    "Alumni Relations": ""
}


export default class extends React.Component {
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
                                <img class="rounded portraits-front" src="\assets\team-members\resized-members\elena.png" alt="${member.name}" />
                            </div>

                            <div onClick={this.handleClick} className='portraits rounded portraits-back'>
                                This is the back of the card.
                            </div>
                        </ReactCardFlip>
                        <Card.Body>
                            <Card.Title>
                                Elena Ivanov
                            </Card.Title> <Card.Text><>

                                Strategist -
                                <span>Link</span></>
                            </Card.Text><span data-tip data-for="registerTip">
                                Register
                            </span>

                            <ReactTooltip id="registerTip" place="bottom" effect="solid">
                                Tooltip for the register button
                            </ReactTooltip>

                        </Card.Body>
                    </Card>
                </div>
            </div>

            </>
        )
    }
}