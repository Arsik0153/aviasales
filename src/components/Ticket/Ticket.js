import React from 'react';
import './Ticket.css';

const Ticket = (props) => {
  
  return(
    <div className="ticket">
      <div className="price flex-33"><span>{props.ticket.price.toString().replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, '$1 ')}</span> Р</div>
      <div className="flex-33"></div>
      <div className="air-logo flex-33"><img src={`//pics.avs.io/99/36/${props.ticket.carrier}.png`} alt=""/></div>
      { props.ticket.segments.map((segment, index) => {
        
        let durationHour = Math.floor(segment.duration / 60);
        let durationMinutes = segment.duration - durationHour * 60;
        let duration = `${durationHour}ч ${durationMinutes}м`;

        let stops = segment.stops.length > 1 ? `${segment.stops.length} пересадки` : (segment.stops.length > 0 ? `${segment.stops.length} пересадка` : `${segment.stops.length} пересадок`);

        let startTime = new Date(segment.date);
        let lastTime = new Date(segment.date);
        lastTime.setSeconds(startTime.getSeconds() + segment.duration);


          return(
            <div className="ticket-item" key={index}>
              <div className="ticket-route">
                <div className="ticket-route__title">{segment.origin} – {segment.destination}</div>
                <div className="ticket-route__content">{`${("0" + startTime.getHours()).slice(-2)}:${("0" + startTime.getMinutes()).slice(-2)}`} – {`${("0" + lastTime.getHours()).slice(-2)}:${("0" + lastTime.getMinutes()).slice(-2)}`}</div>
              </div>
              <div className="ticket-route">
                <div className="ticket-route__title">В пути</div>
                <div className="ticket-route__content tt-none">{duration}</div>
              </div>
              <div className="ticket-route">
                <div className="ticket-route__title">{stops}</div>
                <div className="ticket-route__content">{segment.stops.join(", ")}</div>
              </div>
            </div>
          );
      })}
    </div>
  );
}

export default Ticket;