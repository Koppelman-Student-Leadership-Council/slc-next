import ReactCardFlip from 'react-card-flip';
import Card from 'react-bootstrap/Card';
import React from 'react'

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
            <><div className='portraits'>

                <Card className="no-border shadow">
                    <ReactCardFlip isFlipped={this.state.isFlipped} flipDirection="horizontal">
                        <button onClick={this.handleClick} className="portraits ">
                            <img class="rounded portraits-front" src="\assets\team-members\resized-members\elena.png" alt="${member.name}" />
                        </button>

                        <div onClick={this.handleClick} className='portraits rounded portraits-back'>
                            This is the back of the card.
                        </div>
                    </ReactCardFlip>
                    <Card.Body>
                        <Card.Title>

                            Elena Ivanov
                        </Card.Title> <Card.Text>
                            Strategist - Alumni Relations
                        </Card.Text>
                    </Card.Body>
                </Card>

            </div>

            </>
        )
    }
}