import { useLocalStorage } from 'usehooks-ts'
import { IAccomodationServices, AccomodationServices } from '../../../Constants/Interfaces'
import { DatePicker } from '@mui/x-date-pickers/DatePicker';

export default function Booking() {
    const [app,] = useLocalStorage<IAccomodationServices>('@AccomodationServices', AccomodationServices)

    return (
        <section className="section-container booking relative ">
            <h2 className="h2-headline uppercase">Book Now</h2>
            <p className="paragraph">
                Greetings! You will be residing in {'__LOCATION__'} for a brief period of time.
                <br />It is vital that your accommodations become a comfortable and welcoming abode for you.
            </p>
            <div className="booking-calendar-contaner">
                <DatePicker
                    label="Controlled picker"
                    // value={}
                    // onChange={(newValue) => setValue(newValue)}
                />
            </div>
        </section>
    )
}