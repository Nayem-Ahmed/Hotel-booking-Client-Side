
import React, { useEffect, useState } from 'react';
import Roomcard from './Roomcard';
import Container from '../Shared/Container';
import { useSearchParams } from 'react-router-dom';
import Heading from './Heading';
import Loader from '../Shared/Loader';
 

const Rooms = () => {
    const [rooms, setRooms] = useState([])
    const [params, setParams] = useSearchParams()
    const[loading,setLoading] = useState(false)

    const category = params.get('category')

    useEffect(() => {
        setLoading(true)
        fetch('./rooms.json')
            .then(res => res.json())
            .then(data => {
                if (category) {
                    const filtered = data.filter(room => room.category === category)
                    setRooms(filtered)

                } else {
                    setRooms(data)
                }
                setLoading(false)
            })


    }, [category])

    if (loading)  return <Loader></Loader>
        
     
    return (
        <Container>
            {rooms && rooms.length > 0 ? <div className='grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4 xl:grid-cols-5 gap-5'>
                {
                    rooms.map(card => <Roomcard key={card._id} card={card}></Roomcard>)
                }
            </div> :<Heading  center= {true} title={'No rooms Available'} subtitle={'please select other catagories'}></Heading> }
        </Container>
    );
};

export default Rooms;