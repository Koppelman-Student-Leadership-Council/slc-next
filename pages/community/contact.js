import Layout from "../../components/Layout";
import PostTitle from "../../components/post-title";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Map from '../../components/map'
import emailjs from 'emailjs-com';

import JoinButton from '../../components/btn-join-slc'


function Contact() {

    const handleSubmission = async e => {
        event.preventDefault()

        emailjs.sendForm('service_3wgvjnc', 'template_cgpz9g9', e.target, 'user_bUjdCRqLeJSakqKuFlLB7')
            .then((result) => {
                window.location.reload()  //This is if you still want the page to reload (since e.preventDefault() cancelled that behavior) 
            }, (error) => {
                console.log(error.text);
            });

    }

    const mapUrl = "https://maps.googleapis.com/maps/api/js?v=3.exp&key=AIzaSyAHedcWWJ17w-V1js7ERyz3USvPosmjNKQ";
    return <>
        <Layout>
            <PostTitle breadcrumb >Contact  </PostTitle>
            <p className="pt-10 text-xl">
                Complete the form below or email us at <b>brooklynslcouncil@gmail.com</b>
            </p>
            <Form onSubmit={handleSubmission} action="https://brooklynslcouncil.com/mail/contact_me.php">
                <div className="text-xl grid">
                    <Form.Group>
                        <Form.Label>Name</Form.Label>
                        <Form.Control id="name" required className="dark-focus" type="text" placeholder="John Doe" />
                    </Form.Group>
                    <br />
                    <Form.Group controlId="formBasicEmail">
                        <Form.Label  >Email address</Form.Label>
                        <Form.Control id="email" required className="dark-focus" type="email" placeholder="johndoe@gmail.com" />

                    </Form.Group>
                    <br />
                    <Form.Group>
                        <Form.Label >Phone Number</Form.Label>

                        <Form.Control id="phone" required className="dark-focus" type="number" placeholder="Interview Request" />

                    </Form.Group>
                    <br />
                    <Form.Group>
                        <Form.Label  >Message</Form.Label>
                        <Form.Control id="message" className="dark-focus" as="textarea" rows={3} placeholder="Message." />
                    </Form.Group>
                    <br />
                    <Button type="submit" className="black-text text-2xl w-[90vw] justify-self-center ml:w-[30vw]" >
                        Send
                    </Button>
                </div>
            </Form>

            <div className="mt-5 mb-3 text-md ml:text-lg" align="center" >
                <b> Mailing Address</b> <br />
                2900 Bedford Ave. Brooklyn, NY 11210 <br />
            </div>

            <div className="mb-5 " >
                <Map
                    googleMapURL={mapUrl}
                    containerElement={<div style={{ height: `400px` }} />}
                    mapElement={<div style={{ height: `100%` }} />}
                    loadingElement={<div>Loading</div>}
                    isMarkerShown

                />
            </div>
            <div className="grid justify-items-center">
                <span className="float-right">< JoinButton /> </span><br />
            </div>
        </Layout>
    </>
}

export default Contact