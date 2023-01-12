import { useState, useEffect } from 'react';
import styles from '../../../../styles/pages/projects/meetups/meetupsHomepage.module.css';
import Layout from '../../../../components/meetups/layout/Layout';
import NewMeetupForm from '../../../../components/meetups/meetups/NewMeetupForm';
import { useRouter } from 'next/router';
export default function NewMeetupPage() {

  const router = useRouter();

  const addMeetupHandler = async (enteredMeetupData) => {

    const response = await fetch('/api/new-meetup', {
      method: 'POST',
      body: JSON.stringify(enteredMeetupData),
      headers: {
        'Content-Type': 'application/json'
      }
    });

    const data = await response.json();

    console.log(data);

    router.push('/projects/meetups')

  }

  return (
    <div className={styles.container}>
      <Layout>
        <NewMeetupForm onAddMeetup={addMeetupHandler}/>
      </Layout>
    </div>
  )
}