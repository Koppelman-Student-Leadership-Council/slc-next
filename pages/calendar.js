import Layout from "../components/Layout";
import PostTitle from "../components/post-title";
import Kalend, { CalendarView } from 'kalend'
import 'kalend/dist/styles/index.css'; // import styles
import { useEffect, useState } from "react";

import Modal from 'react-modal';


const customStyles = {
    content: {
        top: '25%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
        backgroundColor: "white"
    },
};


const EVENTS_API = "https://admin.brooklynslcouncil.com/public/api/events-calendar"
const EVENTS_API2 = "https://admin.brooklynslcouncil.com/public/api/events"


function HomePage() {
    const [calendarLoaded, setCalendarLoaded] = useState(false);
    const [events, setEvents] = useState([{
    }])
    const [featuredEvents, setFeaturedEvents] = useState([]);
    const [modalIsOpen, setIsOpen] = useState(false);
    const [modalTitle, setModalTitle] = useState("Title");
    const [modalLink, setModalLink] = useState("");
    const [modalDescription, setModalDescription] = useState("Description");

    function openModal(e) {
        // console.log(e)
        setIsOpen(true);
        const featuredEventSelected = featuredEvents[e.summary]
        if (featuredEventSelected) {
            setModalDescription(featuredEventSelected.description)
            setModalTitle(featuredEventSelected.title)
            setModalLink(featuredEventSelected.item_link)
        }

    }


    function closeModal() {
        setIsOpen(false);
    }


    useEffect(() => {

        const SAMPLE_DATA = [
            {
                "calendar_id": 1,
                "event_date_starts": "2023-10-15T10:00:00Z",
                "event_date_ends": "2023-10-15T12:00:00Z",
                "title": "Sample Event 1",
                "description": "Description for Sample Event 1"
            },
            {
                "calendar_id": 2,
                "event_date_starts": "2023-10-20T14:00:00Z",
                "event_date_ends": "2023-10-20T16:00:00Z",
                "title": "Sample Event 2",
                "description": "Description for Sample Event 2"
            },
            {
                "calendar_id": 3,
                "event_date_starts": "2023-10-25T09:30:00Z",
                "event_date_ends": "2023-10-25T11:30:00Z",
                "title": "Sample Event 3",
                "description": "Description for Sample Event 3"
            }
        ]

        appendEvents([...events], SAMPLE_DATA)

        setCalendarLoaded(true)


    }, [])

    function appendEvents(events, calendarStartSummaryTimeData) {
        calendarStartSummaryTimeData.forEach(
            event => {
                events.push({
                    id: event.calendar_id ?? 0,
                    startAt: event.event_date_starts ?? 0,
                    endAt: event.event_date_ends ?? 0,
                    summary: event.title ?? "",
                    description: ""
                });
            }
        )
        console.log("adding events", [...events])
        setEvents([...events])
    }

    /**
     * Here the detailed descriptions of each for the modals
        
    * @param {*} data 
     */
    function addInformationToEvents(data) {
        let featuedEventsFetch = featuredEvents
        data.forEach(
            event => {
                featuedEventsFetch[event.title] = {
                    title: event.title,
                    description: event.description,
                    item_link: event.item_link
                }
            }
        )
        setFeaturedEvents(featuedEventsFetch)

    }

    function createMarkup(markup) {
        return {
            __html: markup
        };
    };


    return <>
        <Layout>
            <PostTitle breadcrumb>Calendar</PostTitle>
            <div className="pt-10">

                {calendarLoaded && <div className="h-[500px]">
                    <Kalend
                        initialView={CalendarView.AGENDA}
                        events={events}
                        onEventClick={(eventInfo) => openModal(eventInfo)}
                    />
                </div>}

                {!calendarLoaded &&
                    <div className="h-[500px] content-center center-content" ><div>Retrieving Calendar Events...</div>
                    </div>}

            </div>
        </Layout>
        <Modal
            isOpen={modalIsOpen}

            onRequestClose={closeModal}
            style={customStyles}
            contentLabel="Example Modal"
        >
            <button className="float-right" onClick={closeModal}>Close</button><h2 ref={(_subtitle) => (subtitle = _subtitle)}>{modalTitle}</h2>
            <br />
            <div><div dangerouslySetInnerHTML={createMarkup(modalDescription)}></div>
                {modalLink && <a target="_blank" rel="noopener noreferrer" href={modalLink}>RSVP/More Info</a>}

            </div>
        </Modal>
    </>
}


export default HomePage