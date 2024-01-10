import React, { useState } from "react";
import axios from 'axios'
import EventList from "./EventList";
import '../CSS/SearchBar.css'

function SearchBar() {
    const [searchTerm, setSearchTerm] = useState('');
    const [events, setEvents] = useState([]);
    const apiKey = process.env.REACT_APP_TICKETMASTER_API_KEY;
    const apiSecret = process.env

    const fetchEvents = async () => {
        try {
            const response = await axios.get(`https://app.ticketmaster.com/discovery/v2/events`, {
                params: {
                    apikey: apiKey,
                    keyword: searchTerm,
                    secret: apiSecret,
                    // postalCode: '',
                    // latlong: '',
                    // radius: '',
                    // unit: '',
                },
            });
            if (response.data && response.data._embedded && response.data._embedded.events) {
                setEvents(response.data._embedded.events);
            } else {
                setEvents([]);
            console.log(response.data);
            }
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

    const handleSearch = (event) => {
        event.preventDefault();
        fetchEvents();
    };

    return (
        <div>
            <form onSubmit={handleSearch}>
                <input
                    type="text"
                    placeholder="Search for events"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                />
                <button type="submit">Search</button>
            </form>
            <EventList events={events} />
        </div>
    );
}

export default SearchBar;