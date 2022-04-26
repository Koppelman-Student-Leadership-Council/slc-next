import Layout from "../../components/Layout";
import PostTitle from "../../components/post-title";
import MemberCard from '../../components/MemberCard';

function HomePage({ membersData }) {
    console.log(membersData)
    return <>
        <Layout>
            <PostTitle breadcrumb>Our Team</PostTitle>
            <div className="grid justify-items-center pt-10 px-0 sm:mx-30 lg:px-0 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-y-10">
                {membersData.map((member) => {
                    return <div key={member.name} className="mt-1 mb-1">
                        <MemberCard image={member.image_link} name={member.name} description={member.description} title={member.title} department={member.department} linkedin={member.linkedin} /></div>
                })}
            </div>
        </Layout>
    </>
}

export async function getStaticProps() {
    const res = await fetch('https://admin.brooklynslcouncil.com/public/api/team/active')
    const membersData = await res.json()
    return {
        props: {
            membersData,
        },
    }
}

export default HomePage