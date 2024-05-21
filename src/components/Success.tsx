import {
  useEffect,
  useState,
} from 'react';

import Wrapper from './Wrapper';

const Success = () => {
  const [booking, setBooking] = useState({
    date: '',
    time: '',
    name: '',
    guests: 1,
    email: '',
    phone: '',
    specialNotes: '',
  });

  useEffect(() => {
    const formData = localStorage.getItem('formData');
    if (formData) {
      setBooking(JSON.parse(formData));
    }
  }, []);

  return (
    <div className={`bg-primary`}>
      <Wrapper>
        <section className={`card bg-secondary flex flex-col items-center justify-center`}>
          <div className={`card-body gap-4`}>
            <div className={`flex flex-col gap-2`}>
              <h1 className={`text-priamry font-serif text-4xl font-bold`}>You're all set!</h1>
              <p className={`text-neutral font-serif text-3xl`}>Looking forward to seeing you!</p>
            </div>
            <div className={`flex flex-col gap-1`}>
              <span className={`text-neutral text-lg font-bold`}>Date:</span>
              <span className={`text-neutral`}>{booking.date}</span>
            </div>
            <div className={`flex flex-col gap-1`}>
              <span className={`text-neutral text-lg font-bold`}>Time:</span>
              <span className={`text-neutral`}>{booking.time}</span>
            </div>
            <div className={`flex flex-col gap-1`}>
              <span className={`text-neutral text-lg font-bold`}>Name:</span>
              <span className={`text-neutral`}>{booking.name}</span>
            </div>
            <div className={`flex flex-col gap-1`}>
              <span className={`text-neutral text-lg font-bold`}># Guests:</span>
              <span className={`text-neutral`}>{booking.guests}</span>
            </div>
            <div className={`flex flex-col gap-1`}>
              <span className={`text-neutral text-lg font-bold`}>Email:</span>
              <span className={`text-neutral`}>{booking.email}</span>
            </div>
            <div className={`flex flex-col gap-1`}>
              <span className={`text-neutral text-lg font-bold`}>Phone:</span>
              <span className={`text-neutral`}>{booking.phone}</span>
            </div>
            <div className={`flex flex-col gap-1`}>
              <span className={`text-neutral text-lg font-bold`}>Special Notes:</span>
              <span className={`text-neutral`}>{booking.specialNotes || 'N/A'}</span>
            </div>
          </div>
        </section>
      </Wrapper>
    </div>
  );
};

export default Success;
