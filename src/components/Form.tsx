import { useFormik } from 'formik';
import { useNavigate } from 'react-router-dom';
import * as Yup from 'yup';

import Wrapper from './Wrapper';

const availableTimes = ['17:00', '17:30', '18:00', '18:30', '19:00', '19:30', '20:00'];

const Form = () => {
  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: {
      date: new Date().toISOString().split('T')[0],
      time: availableTimes[0],
      name: '',
      guests: 1,
      email: '',
      phone: '',
      specialNotes: '',
    },
    validationSchema: Yup.object({
      date: Yup.date().required('Please select a date'),
      time: Yup.string().required('Please select a time'),
      name: Yup.string().required('Please enter your name'),
      guests: Yup.number()
        .required('Please enter the number of guests')
        .min(1, 'Please enter at least 1 guest')
        .max(20, 'Please enter at most 20 guests'),
      email: Yup.string().email('Invalid email address').required('Please enter your email'),
      phone: Yup.string().required('Please enter your phone number'),
      specialNotes: Yup.string(),
    }),
    onSubmit: (values) => {
      localStorage.setItem('formData', JSON.stringify(values));
      navigate('/success');
    },
  });

  return (
    <div className={`bg-primary`}>
      <Wrapper>
        <h1 className={`font-serif text-3xl font-bold text-accent`}>Reserve a table</h1>
        <p className={`pb-4 text-lg text-base-200`}>Please fill the form below:</p>
        <form
          onSubmit={formik.handleSubmit}
          className={`flex w-full max-w-sm flex-col gap-4 px-4 text-neutral`}
        >
          <div className={`flex flex-col gap-1`}>
            <label
              htmlFor={`date`}
              className={`text-lg font-bold text-base-200`}
            >
              Date:
            </label>
            <input
              type={'date'}
              id={'date'}
              defaultValue={new Date().toISOString().split('T')[0]}
              className={`rounded-md bg-base-200 px-2 py-1 text-lg ${
                formik.touched.date && formik.errors.date ? 'border-2 border-red-500' : ''
              }`}
              aria-label={`Date`}
              aria-invalid={formik.touched.date && formik.errors.date ? 'true' : 'false'}
              aria-describedby={`date-description`}
              {...formik.getFieldProps('date')}
            />
            {formik.touched.date && formik.errors.date && (
              <span
                id={`date-description`}
                className={`text-sm font-bold text-red-500`}
              >
                {formik.errors.date}
              </span>
            )}
          </div>
          <div className={`flex flex-col gap-1`}>
            <label
              htmlFor={`time`}
              aria-label={`Time`}
              aria-invalid={formik.touched.time && formik.errors.time ? 'true' : 'false'}
              aria-describedby={`time-description`}
              className={`text-lg font-bold text-base-200`}
            >
              Time:
            </label>
            <select
              id={'time'}
              className={`rounded-md bg-base-200 px-2 py-1 text-lg ${
                formik.touched.time && formik.errors.time ? 'border-2 border-red-500' : ''
              }`}
              {...formik.getFieldProps('time')}
            >
              {availableTimes.map((time) => (
                <option
                  key={time}
                  value={time}
                >
                  {time}
                </option>
              ))}
            </select>
            {formik.touched.time && formik.errors.time && (
              <span
                id={`time-description`}
                className={`text-sm font-bold text-red-500`}
              >
                {formik.errors.time}
              </span>
            )}
          </div>
          <div className={`flex flex-col gap-1`}>
            <label
              htmlFor={`name`}
              className={`text-lg font-bold text-base-200`}
            >
              Name:
            </label>
            <input
              type={'text'}
              id={'name'}
              placeholder={`Your name`}
              className={`rounded-md bg-base-200 px-2 py-1 text-lg ${
                formik.touched.name && formik.errors.name ? 'border-2 border-red-500' : ''
              }`}
              aria-label={`Name`}
              aria-invalid={formik.touched.name && formik.errors.name ? 'true' : 'false'}
              aria-describedby={`name-description`}
              {...formik.getFieldProps('name')}
            />
            {formik.touched.name && formik.errors.name && (
              <span
                id={`name-description`}
                className={`text-sm font-bold text-red-500`}
              >
                {formik.errors.name}
              </span>
            )}
          </div>
          <div className={`flex flex-col gap-1`}>
            <label
              htmlFor={`guests`}
              className={`text-lg font-bold text-base-200`}
            >
              # Guests:
            </label>
            <input
              type={'number'}
              placeholder={`1`}
              id={'guests'}
              className={`rounded-md bg-base-200 px-2 py-1 text-lg ${
                formik.touched.guests && formik.errors.guests ? 'border-2 border-red-500' : ''
              }`}
              aria-label={`Guests`}
              aria-invalid={formik.touched.guests && formik.errors.guests ? 'true' : 'false'}
              aria-describedby={`guests-description`}
              {...formik.getFieldProps('guests')}
            />
            {formik.touched.guests && formik.errors.guests && (
              <span
                id={`guests-description`}
                className={`text-sm font-bold text-red-500`}
              >
                {formik.errors.guests}
              </span>
            )}
          </div>
          <div className={`flex flex-col gap-1`}>
            <label
              htmlFor={`email`}
              className={`text-lg font-bold text-base-200`}
            >
              Email:
            </label>
            <input
              type={'email'}
              id={'email'}
              placeholder={`your@email.com`}
              className={`rounded-md bg-base-200 px-2 py-1 text-lg ${
                formik.touched.email && formik.errors.email ? 'border-2 border-red-500' : ''
              }`}
              aria-label={`Email`}
              aria-invalid={formik.touched.email && formik.errors.email ? 'true' : 'false'}
              aria-describedby={`email-description`}
              {...formik.getFieldProps('email')}
            />
            {formik.touched.email && formik.errors.email && (
              <span
                id={`email-description`}
                className={`text-sm font-bold text-red-500`}
              >
                {formik.errors.email}
              </span>
            )}
          </div>
          <div className={`flex flex-col gap-1`}>
            <label
              htmlFor={`phone`}
              className={`text-lg font-bold text-base-200`}
            >
              Phone Number:
            </label>
            <input
              type={'text'}
              id={'phone'}
              className={`rounded-md bg-base-200 px-2 py-1 text-lg ${
                formik.touched.phone && formik.errors.phone ? 'border-2 border-red-500' : ''
              }`}
              aria-label={`Phone`}
              aria-invalid={formik.touched.phone && formik.errors.phone ? 'true' : 'false'}
              aria-describedby={`phone-description`}
              {...formik.getFieldProps('phone')}
            />
            {formik.touched.phone && formik.errors.phone && (
              <span
                id={`phone-description`}
                className={`text-sm font-bold text-red-500`}
              >
                {formik.errors.phone}
              </span>
            )}
          </div>
          <div className={`flex flex-col gap-1`}>
            <label
              htmlFor={`special-note`}
              className={`text-lg font-bold text-base-200`}
            >
              Special Notes:
            </label>
            <textarea
              id={'special-note'}
              placeholder={`Any special requests or notes?`}
              rows={4}
              className={`rounded-md bg-base-200 px-2 py-1 text-lg ${
                formik.touched.specialNotes && formik.errors.specialNotes
                  ? 'border-2 border-red-500'
                  : ''
              }`}
              {...formik.getFieldProps('specialNotes')}
              aria-label={`Special Notes`}
              aria-invalid={
                formik.touched.specialNotes && formik.errors.specialNotes ? 'true' : 'false'
              }
              aria-describedby={`special-note-description`}
            />
            {formik.touched.specialNotes && formik.errors.specialNotes && (
              <span
                id={`special-note-description`}
                className={`text-sm font-bold text-red-500`}
              >
                {formik.errors.specialNotes}
              </span>
            )}
          </div>
          <button
            type={'submit'}
            className={`btn btn-accent mt-4 w-full rounded-full text-lg font-bold`}
          >
            Confirm reservation
          </button>
        </form>
      </Wrapper>
    </div>
  );
};

export default Form;
