import React, { useState, useEffect } from 'react';
import './Tickets.css';
import Ticket from '../Ticket/Ticket';
import axios from 'axios';

const Tickets = ({sortMethod}) => {

  const sortTickets = (tickets) => {
    return sortMethod === "byPrice" ? (
      tickets && tickets.sort((a, b) => {
        if (a.price > b.price) {
          return 1;
        }
        if (a.price < b.price) {
          return -1;
        }
        return 0;
      })
    ) : (null);
  }

  const [searchId, setSearchId] = useState("");

  useEffect(() => {
    axios
      .get(
        "https://front-test.beta.aviasales.ru/search"
      ).then(({data}) => {
        setSearchId(data.searchId);
      });
      
  }, []);

  const [tickets, setTickets] = useState();

  useEffect(() => {
    axios
      .get(
        "https://front-test.beta.aviasales.ru/tickets", {
          params: {
            searchId
          }
        }
      )
      .then((data) => {
        if(data.data === "Server error"){
          window.location.reload();
        }
        let newData = data.data.tickets;
        let sortedData = sortTickets(newData);
        setTickets(sortedData && sortedData.slice(0,10));
        console.log(sortedData && sortedData.slice(0,10));
      });
  }, [searchId]);

  return(
    <div className="tickets">
      {tickets && tickets.map((ticket, index) => {
          return(
            <Ticket
              ticket={ticket}
              key={index}
            />
          );
        })}
    </div>
  );
}

export default Tickets;