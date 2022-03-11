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

function HomePage({ calendarPreData }) {
    const [data, setData] = useState(null)
    const [documentRendered, setDocumentRendered] = useState(false);
    const [events, setEvents] = useState([{
        // id: 2,
        // startAt: '2021-11-21T18:00:00.000Z',
        // endAt: '2021-11-21T19:00:00.000Z',
        // summary: 'test',
        // color: 'blue',
    }])
    let eventsMemory = []
    const [featuredEvents, setFeaturedEvents] = useState({});
    const [modalIsOpen, setIsOpen] = useState(false);
    const [modalTitle, setModalTitle] = useState("Title");
    const [modalLink, setModalLink] = useState("");
    const [modalDescription, setModalDescription] = useState("Description");

    let subtitle;
    // console.log(calendarPreData)
    function openModal(e) {
        // console.log(e)
        setIsOpen(true);
        // setModalTitle(e.summary)
        // console.log("testing featured events and matching with event summary")
        // console.log(featuredEvents)
        const featuredEventSelected = featuredEvents[e.summary]
        // console.log(featuredEventSelected)
        if (featuredEventSelected) {
            setModalDescription(featuredEventSelected.description)
            setModalTitle(featuredEventSelected.title)
            // console.log(featuredEventSelected.description)
            setModalLink(featuredEventSelected.item_link)
        }

    }


    function closeModal() {
        setIsOpen(false);
    }


    useEffect(() => {
        if (typeof window !== 'undefined') {
            setDocumentRendered(true)
        }
        appendEvents(events, calendarPreData)
        fetch('https://admin.brooklynslcouncil.com/public/api/events-calendar').then((res) => res.json()).then((data) => {
            setData(data);
            // console.log(data);
            appendEvents(events, data)


        })
        fetch('https://admin.brooklynslcouncil.com/public/api/events').then((res) => res.json()).then((data) => {
            // setData(data);
            // console.log(data);
            addInformationToEvents(data)
            setData(data)


        })

    }, [])

    function appendEvents(events, data) {
        data.forEach(
            event => {
                if (!eventMemoryHasEventWithID(events, event.calendar_id)) {
                    eventsMemory.push(event.calendar_id)
                    events.push({
                        id: event.calendar_id,
                        startAt: event.event_date_starts,
                        endAt: event.event_date_ends,
                        summary: event.title,
                        description: ""
                    });
                    events = removeDuplicateEvents(events);
                    // console.log(events)
                }
            }
        )
        setEvents(events)
    }

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

    function eventMemoryHasEventWithID(events, calendarID) {
        const filteredArr = events.filter(el => {
            el.id == calendarID
        });
        return (filteredArr.length > 0)
    }

    function removeDuplicateEvents(events) {

        const seen = new Set();
        const filteredArr = events.filter(el => {
            const duplicate = seen.has(el.id);
            seen.add(el.id);
            return !duplicate;
        });
        // console.log(filteredArr)
        return (filteredArr)
    } function createMarkup(markup) {
        return {
            __html: markup
        };
    };


    return <>
        <Layout>
            <PostTitle breadcrumb>Calendar</PostTitle>
            <div className="">

                {documentRendered && <div className="h-[500px]">
                    <Kalend
                        initialView={CalendarView.MONTH}
                        events={events}
                        onEventClick={(eventInfo) => openModal(eventInfo)}
                    />
                </div>}

                {!documentRendered &&
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
                {modalLink && <a target="_blank" rel="noopener noreferrer"  href={modalLink}>RSVP/More Info</a>}
                
                </div>
            </Modal>
    </>
}

export async function getStaticProps() {
    const res = await fetch('https://admin.brooklynslcouncil.com/public/api/events-calendar')
    const calendarPreData = await res.json()
    return {
        props: {
            calendarPreData,
        },
    }
}

export default HomePage