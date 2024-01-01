import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Loader from '../Shared/Loader';
import Container from '../Shared/Container';
import { Helmet } from 'react-helmet-async';
import Header from '../RoomDetails/Header';

const RoomsDetails = () => {
    const { id } = useParams()
    const [rooms, setRooms] = useState([])
    const [loading, setLoading] = useState(false)


    useEffect(() => {
        setLoading(true)
        fetch('/rooms.json')
            .then(res => res.json())
            .then(data => {
                const singledata = data.find(room => room._id === id)
                setRooms(singledata)
                setLoading(false)
            })


    }, [id])

    if (loading) return <Loader></Loader>
    return (

        <Container>
           <Helmet>
            <title>{rooms.title}</title>
            </Helmet>
            <div>
                <div className='flex flex-col gap-6'>
                    <Header roomData={rooms}></Header>
                </div>
            </div>
        </Container>
    );
};

export default RoomsDetails;