import { MongoClient } from 'mongodb';
import styles from '../../../styles/pages/projects/meetups/meetupsHomepage.module.css';
import MeetupList from '../../../components/meetups/meetups/MeetupList';
import Layout from '../../../components/meetups/layout/Layout';

// const DUMMY_MEETUPS = [
//   {
//     id: 'm1',
//     title: 'A First Meetup',
//     image: 'https://upload.wikimedia.org/wikipedia/commons/7/73/Rathaus_and_Marienplatz_from_Peterskirche_-_August_2006.jpg',
//     address: 'Some address 5, 12345 Some City',
//     description: 'This is a first meetup!'
//   },
//   {
//     id: 'm2',
//     title: 'A First Meetup',
//     image: 'https://upload.wikimedia.org/wikipedia/commons/7/73/Rathaus_and_Marienplatz_from_Peterskirche_-_August_2006.jpg',
//     address: 'Some address 5, 12345 Some City',
//     description: 'This is a second meetup!'
//   },
//   {
//     id: 'm3',
//     title: 'A First Meetup',
//     image: 'https://upload.wikimedia.org/wikipedia/commons/7/73/Rathaus_and_Marienplatz_from_Peterskirche_-_August_2006.jpg',
//     address: 'Some address 5, 12345 Some City',
//     description: 'This is a third meetup!'
//   },
// ]

export default function MeetupsHomepage(props) {

  return (
    <div className={styles.container}>
      <Layout>
        <MeetupList meetups={props.meetups}/>
      </Layout>
    </div>
  )
}

// export async function getServerSideProps(context){

//   const req = context.req;
//   const res = context.res;

//   // fetch data from API
//   return {
//     props: {
//       meetups: DUMMY_MEETUPS
//     }
//   }; 
// }

export async function getStaticProps(){
  // fetch data from API
  const client = await MongoClient.connect('mongodb+srv://jackshan111222333:jackshan111222333@meetup.po4jhff.mongodb.net/?retryWrites=true&w=majority');
  const db = client.db();

  const meetupsCollection = db.collection('meetups');

  const meetups = await meetupsCollection.find().toArray();

  client.close();

  return {
    props: {
      meetups: meetups.map(meetup => ({
        title: meetup.title,
        address: meetup.address,
        image: meetup.image,
        id: meetup._id.toString(),
      }))
    },
    revalidate: 1
  };
}