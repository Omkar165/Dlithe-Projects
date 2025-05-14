import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './AppointmentConfirmation.css';

const AppointmentConfirmation = () => {
  const navigate = useNavigate();
  const [appointments, setAppointments] = useState([]);
  const [isCancelled, setIsCancelled] = useState(false);

  useEffect(() => {
    // Retrieve all appointments from localStorage
    const storedAppointments = JSON.parse(localStorage.getItem('appointments')) || [];
    setAppointments(storedAppointments);
  }, []);

  const handleCancelAppointment = (index) => {
    // Remove the cancelled appointment from the list
    const updatedAppointments = [...appointments];
    updatedAppointments.splice(index, 1);

    // Update localStorage with the new list
    localStorage.setItem('appointments', JSON.stringify(updatedAppointments));

    // Update state
    setAppointments(updatedAppointments);

    setIsCancelled(true);

    // Redirect to home page after 3 seconds
    setTimeout(() => {
      navigate('/');
    }, 3000);
  };

  if (appointments.length === 0) return <div>No appointments booked.</div>;

  return (
    <div className="appointment-confirmation">
      {isCancelled && (
        <div className="cancelled-notification">
          <p>Your appointment has been successfully cancelled.</p>
        </div>
      )}
      <h2>My Appointments</h2>
      {appointments.map((appointment, index) => {
        const { doctor, bookingDetails } = appointment;

        return (
          <div key={index} className="appointment-card">
            <div className="doctor-image-container">
              <img src={doctor.image} alt={doctor.name} />
            </div>
            <div className="appointment-info">
              <h3>{doctor.name}</h3>
              <p>{doctor.specialization} | {doctor.experience}</p>
              <p><strong>Address:</strong><br />
                24 Main street<br />
                10 Clause Road<br />
                Bengaluru
              </p>
              <p><strong>Registration fee:</strong> ₹ {doctor.fee}</p>
              <p><strong>Date & Time:</strong> {bookingDetails.date} | {bookingDetails.time}</p>
              <div className="btn-group">
                <button
                  className="cancel-btn"
                  onClick={() => handleCancelAppointment(index)}
                >
                  Cancel Appointment
                </button>
                <button className="pay-btn">Pay Online</button>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default AppointmentConfirmation;
