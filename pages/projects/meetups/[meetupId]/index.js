import Layout from '../../../../components/meetups/layout/Layout';
import styles from '../../../../styles/pages/projects/meetups/meetupsHomepage.module.css';
import MeetupDetail from '../../../../components/meetups/meetups/MeetupDetail';
import { MongoClient, ObjectId } from 'mongodb';

export default function MeetupDetails(props) {

  return (
    <div className={styles.container}>
      <Layout>
        <MeetupDetail image={props.meetupData.image} title={props.meetupData.title} address={props.meetupData.address} description={props.meetupData.description}/>
      </Layout>
    </div>
  )
}

export async function getStaticPaths() {

  // fetch data from API
  const client = await MongoClient.connect('mongodb+srv://jackshan111222333:jackshan111222333@meetup.po4jhff.mongodb.net/?retryWrites=true&w=majority');
  const db = client.db();

  const meetupsCollection = db.collection('meetups');

  const meetups = await meetupsCollection.find({}, {_id: 1}).toArray();

  client.close();

  return {
    fallback: 'blocking',
    paths: meetups.map(meetup => ({ 
      params: {meetupId: meetup._id.toString()}, 
    })),
    
  };
}

export async function getStaticProps(context){
  // fetch data for single meetup
  const meetupId = context.params.meetupId;

  console.log("meetupId: " + meetupId)

  // fetch data from API
  const client = await MongoClient.connect('mongodb+srv://jackshan111222333:jackshan111222333@meetup.po4jhff.mongodb.net/?retryWrites=true&w=majority');
  const db = client.db();

  const meetupsCollection = db.collection('meetups');
  console.log("meetupsCollection: " + meetupsCollection)
  let selectedMeetup = await meetupsCollection.findOne({_id: ObjectId(meetupId)});
  
  console.log("Single Meetup: " + selectedMeetup)
  console.log(selectedMeetup)

  selectedMeetup = {
    _id: selectedMeetup._id.toString(),
    title: selectedMeetup.title,
    image: selectedMeetup.image,
    address: selectedMeetup.address,
    description: selectedMeetup.description,
  }

  client.close();

  return {
    props: {
      meetupData: selectedMeetup
      // meetupData: "Hi"
    },
    revalidate: 3600
  };
}

