import Layout from "../../components/Layout";
import PostTitle from "../../components/post-title";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Map from '../../components/map'

function HomePage() {

    const mapUrl = "https://maps.googleapis.com/maps/api/js?v=3.exp&key=AIzaSyAHedcWWJ17w-V1js7ERyz3USvPosmjNKQ";
    return <>
        <Layout>
            <PostTitle breadcrumb>Contact</PostTitle>
            <p>
                Complete the form below or email us at <b>brooklynslcouncil@gmail.com</b>
            </p>

            <Form>

                <Form.Group>
                    <Form.Label>Name</Form.Label>
                    <Form.Control required className="dark-focus" type="text" placeholder="John Doe" />
                </Form.Group>
                <br />
                <Form.Group controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control required className="dark-focus" type="email" placeholder="johndoe@gmail.com" />

                </Form.Group>
                <br />
                <Form.Group>
                    <Form.Label>Phone Number</Form.Label>

                    <Form.Control required className="dark-focus" type="number" placeholder="Interview Request" />

                </Form.Group>
                <br />
                <Form.Group>
                    <Form.Label>Message</Form.Label>
                    <Form.Control className="dark-focus" as="textarea" rows={3} placeholder="Message." />
                </Form.Group>
                <br />
                <Button type="submit" className="black-text" >
                    SUBMIT
                </Button>
            </Form>

            <div className="mt-5 mb-3" align="center" >
                <b> Mailing Address</b> <br />
                2900 Bedford Ave. <br />
                Brooklyn, NY 11210 <br />
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
        </Layout>
    </>
}

export default HomePage