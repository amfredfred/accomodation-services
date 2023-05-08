import { IRoom } from "../../../Constants/Interfaces";
import { useWindowSize } from 'usehooks-ts'
import { FormControlLabel, Button } from '@mui/material'
import { Photo, Wifi, Abc, Settings } from '@mui/icons-material'

export default function RoomCard(props: IRoom) {
    const { photos, title, description, type, term, price, } = props
    const { height, width } = useWindowSize()

    return (
        <div className="room-card-main">
            <div className="card-img-wrapper relative">
                <img src={photos?.[0]} alt="" loading="lazy" className="card-img" />
                <div className="floating-panel-top space-between">
                    <FormControlLabel
                        className="label-icon"
                        control={<Photo />}
                        label={(photos as any)?.length}
                    />
                </div>
            </div>
            <div className="card-text-contents">
                <h2 className="headline-h2 capitalize padding-none margin-none">{title}</h2>
                <p className="sub-headline capitalize space-between">{type}</p>
                <p className="paragraph">{description}</p>
                <div className="space-between">
                    <Wifi />
                </div>
                <hr className='hr-line' />
                <span className="price-display">
                    ${price}/{term}
                </span>
                <Button variant='contained' className='primary-button'>
                    BOOK NOW
                </Button>
            </div>
        </div>
    )
}