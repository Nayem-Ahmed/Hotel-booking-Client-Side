import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Loader from '../Shared/Loader';
import Container from '../Shared/Container';

const RoomsDetails = () => {
    const {id} = useParams()
    const [rooms, setRooms] = useState([])
    const[loading,setLoading] = useState(false)

    
    useEffect(() => {
        setLoading(true)
        fetch('https://raw.githubusercontent.com/Nayem-Ahmed/Hotelbooking-Client-Side/main/client/public/rooms.json')
            .then(res => res.json())
            .then(data => {
                 const singledata = data.find(room => room._id === id)
                 setRooms(singledata)
                setLoading(false)
            })


    }, [id])

    if (loading)  return <Loader></Loader>
    return (
         <Container>{rooms?.title}</Container>
    );
};

export default RoomsDetails;