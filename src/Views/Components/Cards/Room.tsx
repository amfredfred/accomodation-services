import { IRoom } from "../../../Constants/Interfaces";
import { useWindowSize } from 'usehooks-ts'
import { FormControlLabel, Button, Tooltip,Rating } from '@mui/material'
import {
    Photo, Wifi, Abc, Settings,
    Drafts,
    Atm,
    Restaurant,
    Water,
    Spa
} from '@mui/icons-material'
import { mean } from "../../../Helpers";

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
                <div className="space-between">
                    <h2 className="headline-h2 capitalize padding-none margin-none">{title}</h2>
                    <div className="ratings">
                        <Rating
                            readOnly
                            value={mean(props?.rating as any)}
                        />
                    </div>
                </div>
                <p className="sub-headline capitalize space-between">{type}</p>
                <p className="paragraph">{description}</p>
                <div className="space-between">
                    <div className="space-between">
                        {props?.features?.wifi && <Tooltip placement='top' title='Free Wifi'><Wifi className='feature-icon' /></Tooltip>}
                        {props?.features?.bars && <Tooltip placement='top' title='Bar'><Drafts className='feature-icon' /></Tooltip>}
                        {props?.features?.atmMachine && <Tooltip placement='top' title='ATM'><Atm className='feature-icon' /></Tooltip>}
                        {props?.features?.restaurant && <Tooltip placement='top' title='Restaurant'><Restaurant className='feature-icon' /></Tooltip>}
                        {props?.features?.swimmingPool && <Tooltip placement='top' title='Swimming Pool'><Water className='feature-icon' /></Tooltip>}
                        {props?.features?.spar && <Tooltip placement='top' title='Spa - Beauty'><Spa className='feature-icon' /></Tooltip>}
                    </div>
                    <span></span>
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