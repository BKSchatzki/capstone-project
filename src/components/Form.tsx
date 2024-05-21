import Wrapper from './Wrapper';

const availableTimes = ['17:00', '17:30', '18:00', '18:30', '19:00', '19:30', '20:00'];

const Form = () => {
  return (
    <div className={`bg-primary`}>
      <Wrapper>
        <h1 className={`text-accent font-serif text-3xl font-bold`}>Reserve a table</h1>
        <p className={`text-base-200 pb-4 text-lg`}>Please fill the form below:</p>
        <form className={`text-neutral flex w-full max-w-sm flex-col gap-4 px-4`}>
          <div className={`flex flex-col gap-1`}>
            <label
              htmlFor={`date`}
              className={`text-base-200 text-lg font-bold`}
            >
              Date:
            </label>
            <input
              type={'date'}
              id={'date'}
              defaultValue={new Date().toISOString().split('T')[0]}
              className={`bg-base-200 px-2 py-1 text-lg`}
            />
          </div>
          <div className={`flex flex-col gap-1`}>
            <label
              htmlFor={`time`}
              className={`text-base-200 text-lg font-bold`}
            >
              Time:
            </label>
            <select
              id={'time'}
              className={`bg-base-200 px-2 py-1 text-lg`}
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
          </div>
          <div className={`flex flex-col gap-1`}>
            <label
              htmlFor={`name`}
              className={`text-base-200 text-lg font-bold`}
            >
              Name:
            </label>
            <input
              type={'text'}
              id={'name'}
              placeholder={`Your name`}
              className={`bg-base-200 px-2 py-1 text-lg`}
            />
          </div>
          <div className={`flex flex-col gap-1`}>
            <label
              htmlFor={`guests`}
              className={`text-base-200 text-lg font-bold`}
            >
              # Guests:
            </label>
            <input
              type={'number'}
              placeholder={`1`}
              min="1"
              max="20"
              id={'guests'}
              className={`bg-base-200 px-2 py-1 text-lg`}
            />
          </div>
          <div className={`flex flex-col gap-1`}>
            <label
              htmlFor={`email`}
              className={`text-base-200 text-lg font-bold`}
            >
              Email:
            </label>
            <input
              type={'email'}
              id={'email'}
              placeholder={`your@email.com`}
              className={`bg-base-200 px-2 py-1 text-lg`}
            />
          </div>
          <div className={`flex flex-col gap-1`}>
            <label
              htmlFor={`phone`}
              className={`text-base-200 text-lg font-bold`}
            >
              Phone:
            </label>
            <input
              type={'tel'}
              id={'phone'}
              placeholder={`123-456-7890`}
              className={`bg-base-200 px-2 py-1 text-lg`}
            />
          </div>
          <div className={`flex flex-col gap-1`}>
            <label
              htmlFor={`special-note`}
              className={`text-base-200 text-lg font-bold`}
            >
              Special Notes:
            </label>
            <textarea
              id={'special-note'}
              placeholder={`Any special requests or notes?`}
              rows={4}
              className={`bg-base-200 px-2 py-1 text-lg`}
            />
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
