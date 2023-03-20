import React, { useState, useEffect } from 'react';
import './Banner.css';

const AlumniBanner = () => {
  const [members, setMembers] = useState(0);
  const [events, setEvents] = useState(0);
  const [photos, setPhotos] = useState(0);
  const [awards, setAwards] = useState(0);

  useEffect(() => {
    const timer1 = setInterval(() => {
      setMembers(members => {
        if (members < 300) {
          return members + 1;
        }
        return members;
      });
    }, 10);
    return () => clearInterval(timer1);
  }, []);

  useEffect(() => {
    const timer2 = setInterval(() => {
      setEvents(events => {
        if (events < 800) {
          return events + 1;
        }
        return events;
      });
    }, 10);
    return () => clearInterval(timer2);
  }, []);

  useEffect(() => {
    const timer3 = setInterval(() => {
      setPhotos(photos => {
        if (photos < 800) {
          return photos + 1;
        }
        return photos;
      });
    }, 10);
    return () => clearInterval(timer3);
  }, []);

  useEffect(() => {
    const timer4 = setInterval(() => {
      setAwards(awards => {
        if (awards < 800) {
          return awards + 1;
        }
        return awards;
      });
    }, 10);
    return () => clearInterval(timer4);
  }, []);

  return (
    <div className="alumni-banner">
      <div className="banner-content">
        <div className="banner-stats">
          <div className="stat-item">
            <p className="stat-value">{members}+</p>
            <p className="stat-label">Total Members</p>
          </div>
          <div className="stat-item">
            <p className="stat-value">{events}+</p>
            <p className="stat-label">Total Events</p>
          </div>
          <div className="stat-item">
            <p className="stat-value">{photos}+</p>
            <p className="stat-label">Photos</p>
          </div>
          <div className="stat-item">
            <p className="stat-value">{awards}+</p>
            <p className="stat-label">Awards</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AlumniBanner;
