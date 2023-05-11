import { useLocalStorage } from "usehooks-ts"
import { AccomodationServices, IAccomodationServices, IRoom } from "../../../Constants/Interfaces"
import { Close, Shop2, KeyboardArrowDown, KeyboardArrowUp, ArrowLeft, DeleteForever, ArrowRight, Money, CurrencyExchange } from "@mui/icons-material"
import { motion } from 'framer-motion'
import * as React from 'react';
import {
    Collapse,
    IconButton,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Paper,
    FormControlLabel,
    Radio,
    Box,
    Button,
    Tooltip
} from '@mui/material';
import { fmtNumCompact, sum, timeFrom, timeLocal, timeLocalDate, toLocalTime } from "../../../Helpers";
import { useBooking } from "../../Sections/Booking";
import Checkout from "../../Sections/Checkout";

export const useHandleCartToggle = () => {
    const [app, setService] = useLocalStorage<IAccomodationServices>('@AccomodationServices', AccomodationServices)
    const toggleCart = () => setService(
        params => params = { ...params, cart: { ...params.cart, isShowing: !params?.cart?.isShowing } }
    )
    const checkout = () => setService(
        params => params = { ...params, cart: { ...params.cart, isCheckingout: !params?.cart?.isCheckingout } }
    )
    return { toggleCart, checkout }
}

export default function Cart() {
    const [app] = useLocalStorage<IAccomodationServices>('@AccomodationServices', AccomodationServices)
    const { toggleCart, checkout } = useHandleCartToggle()
    const { cartRoom } = useBooking()


    if (!app?.cart?.isShowing || !app?.cart?.selections?.length) return <div
        data-cart-item-count={app?.cart?.selections?.length}
        style={{ paddingBottom: app?.cart?.selections?.length ? '2rem' : '.7rem' }}
        className="cart-icon" onClick={toggleCart}>
        <Shop2 />
    </div>

    const createData = (props: IRoom) => ({ ...props })

    function Row(props: { row: ReturnType<typeof createData> }) {
        const { row } = props;
        const [open, setOpen] = React.useState(false);
        return (
            <React.Fragment>
                <TableRow sx={{ '& > *': { borderBottom: 'unset', border: 0, } }}>
                    <TableCell className="no-border ">
                        <IconButton
                            aria-label="expand row"
                            size="small"
                            onClick={() => setOpen(!open)}
                            className="link-color no-border"
                        >
                            {open ? <KeyboardArrowUp /> : <KeyboardArrowDown />}
                        </IconButton>
                    </TableCell>
                    <TableCell className="link-color no-border " component="th" scope="row">
                        {row.id}
                    </TableCell>
                    <TableCell align="center" className="link-color no-border ">{timeLocalDate(row.check_in as any)}</TableCell>
                    <TableCell align="center" className="link-color no-border ">{timeLocal(row.check_out as any)}</TableCell>
                    <TableCell align="center" className="link-color no-border ">${fmtNumCompact(row.price as any)}/{row.term}</TableCell>
                    <TableCell align="center" className="link-color no-border ">${fmtNumCompact(row.subTotal as any)}</TableCell>
                    <TableCell align="right" className="link-color no-border ">{timeFrom(row.bookedTill as any)}</TableCell>
                    <TableCell align="right" className="link-color no-border ">
                        {/* <Tooltip title='Edit Room Cart' placement="left">
                                <Edit onClick={() => { }} />
                            </Tooltip> */}
                        <Tooltip title='Remove From Cart' placement="right">
                            <DeleteForever onClick={() => cartRoom(row, row.id, true)} />
                        </Tooltip>
                    </TableCell>
                </TableRow>
                <TableRow>
                    <TableCell style={{
                        paddingBottom: 0,
                        paddingTop: 0,
                        border: 0,
                        background: 'var(--box-background-color)',
                    }} colSpan={8}>
                        <Collapse in={open} timeout="auto" unmountOnExit>
                            <Box sx={{ margin: 1 }}>
                                {[row?.features]?./*sort((a:any, b:any) => 1.5).*/map((feature: IRoom['features'], index: number) => (
                                    <div className="space-between" >
                                        {feature?.wifi && <FormControlLabel
                                            label='Wifi'
                                            className="link-color"
                                            labelPlacement="end"
                                            control=<Radio color='success' checked /> />}
                                        {feature?.bars && <FormControlLabel
                                            label='Bar'
                                            className="link-color"
                                            labelPlacement="end"
                                            control=<Radio color='success' checked /> />
                                        }
                                        {feature?.atmMachine && <FormControlLabel
                                            className="link-color"
                                            label='ATM'
                                            labelPlacement="end"
                                            control=<Radio color='success' checked /> />
                                        }
                                        {feature?.restaurant && <FormControlLabel
                                            label='Restaurant'
                                            className="link-color"
                                            control=<Radio color='success' checked /> />
                                        }
                                        {feature?.swimmingPool && <FormControlLabel
                                            label='Swimming'
                                            className="link-color"
                                            labelPlacement="end"
                                            control=<Radio color='success' checked /> />
                                        }
                                        {feature?.spar && <FormControlLabel
                                            label='Spar'
                                            className="link-color"
                                            labelPlacement="end"
                                            control=<Radio color='success' checked /> />
                                        }
                                    </div>
                                ))}
                            </Box>
                        </Collapse>
                    </TableCell>
                </TableRow>
            </React.Fragment>
        );
    }

    const Cart =
        <TableContainer component={Paper} style={{ background: 'transparent' }}>
            <Table aria-label="collapsible table">
                <TableHead>
                    <TableRow >
                        <TableCell />
                        <TableCell className="link-color">Room ID</TableCell>
                        <TableCell className="link-color" align="center">Check&nbsp;In</TableCell>
                        <TableCell className="link-color" align="center">Check&nbsp;Out</TableCell>
                        <TableCell className="link-color" align="center">Price/Term</TableCell>
                        <TableCell className="link-color" align="center">Sub. T</TableCell>
                        <TableCell className="link-color" align="center">Available</TableCell>
                        <TableCell className="link-color" align="right">Actions</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {
                        app?.cart?.selections?.map((room: IRoom, index: number) =>
                            <Row key={room?.id?.concat('-' + index)} row={room} />)
                    }
                </TableBody>
            </Table>
        </TableContainer>


    return (
        <motion.div
            initial={{ top: '100%' }}
            animate={{ top: '50%' }}
            exit={{ top: '-100%' }}
            className="cart-wrapper">
            <div className="cart-main">
                <div className="space-between cart-header" style={{ paddingInline: '1rem' }}>
                    <h3>{app?.cart?.isCheckingout ? 'Checkout' : "Cart"} </h3>
                    {/*  &bull;&nbsp;<span>{app?.cart?.selections?.length}Item`s`</span> */}
                    <Close onClick={toggleCart} />
                </div>
                <div className="cart-contents">
                    {app?.cart?.isCheckingout ? <Checkout /> : Cart}
                </div>
                <div className="space-between" style={{ width: '100%', padding: 10, paddingTop: 0 }}>
                    <FormControlLabel
                        className="primary-button"
                        control={app?.cart?.isCheckingout ? <ArrowLeft /> : <ArrowRight />}
                        onClick={checkout}
                        label={app?.cart?.isCheckingout ? 'Back To Cart' : 'Checkout'}
                    />
                    <div className="space-between">
                        <span>Total </span>
                        <span>${fmtNumCompact(sum(app?.cart?.selections?.map((sub: IRoom) => Number(sub?.subTotal))))}</span>
                    </div>
                </div>
            </div>
        </motion.div>
    )

}