export default function Checkout() {
    return (
        <div className="container mt-4 p-0">
            <nav className="navbar navbar-expand-lg navbar-light bg-white pt-3 px-md-4 px-2">
                <div className="container-fluid"> <a className="navbar-brand" href="#">clothing</a> <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#nav" aria-controls="nav" aria-expanded="false" aria-label="Toggle navigation"> <span className="navbar-toggler-icon"></span> </button>
                    <div className="collapse navbar-collapse" id="nav">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item"> <a className="nav-link active" href="#">New</a> </li>
                            <li className="nav-item"> <a className="nav-link" href="#">Men</a> </li>
                            <li className="nav-item"> <a className="nav-link" href="#">Women</a> </li>
                            <li className="nav-item"> <a className="nav-link" href="#">Kids</a> </li>
                            <li className="nav-item"> <a className="nav-link" href="#">Special Offers</a> </li>
                        </ul>
                        <ul className="d-flex mb-0">
                            <li className="nav-item pe-3">
                                <div className="d-flex align-items-center">
                                    <div className="icon me-3"> <span className="fas fa-shopping-cart"></span> </div>
                                    <div className="cart">
                                        <p className="">My cart</p> <small className="">3 items</small>
                                    </div>
                                </div>
                            </li>
                            <li className="nav-item me-3">
                                <div className="btn btn-outline-primary">Sign Up</div>
                            </li>
                            <li className="nav-item">
                                <div className="btn btn-primary">Login</div>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
            <div className="row px-md-4 px-2 pt-4">
                <div className="col-lg-8">
                    <p className="pb-2 fw-bold">Order</p>
                    <div className="card">
                        <div className="ribbon ribbon-top-right"><span>SALE TIME!</span></div>
                        <div>
                            <div className="table-responsive px-md-4 px-2 pt-3">
                                <table className="table table-borderless">
                                    <tbody>
                                        <tr className="border-bottom">
                                            <td>
                                                <div className="d-flex align-items-center">
                                                    <div> <img className="pic" src="https://images.pexels.com/photos/7322083/pexels-photo-7322083.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" alt="" /> </div>
                                                    <div className="ps-3 d-flex flex-column justify-content">
                                                        <p className="fw-bold">Air<span className="ps-1">Red</span><span className="ps-1">Pants</span></p> <small className=" d-flex"> <span className=" text-muted">Color:</span> <span className=" fw-bold">Red/White</span> </small> <small className=""> <span className=" text-muted">Size:</span> <span className=" fw-bold">L</span> </small>
                                                    </div>
                                                </div>
                                            </td>
                                            <td>
                                                <div className="d-flex">
                                                    <p className="pe-3"><span className="red">$45.00</span></p>
                                                    <p className="text-muted text-decoration-line-through">$55.00</p>
                                                </div>
                                            </td>
                                            <td>
                                                <div className="d-flex align-items-center"> <span className="pe-3 text-muted">Quantity</span> <span className="pe-3"> <input className="ps-2" type="number" value="2" /></span>
                                                    <div className="round"> <span className=""> L </span> </div>
                                                </div>
                                            </td>
                                        </tr>
                                        <tr className="border-bottom">
                                            <td>
                                                <div className="d-flex align-items-center">
                                                    <div> <img className="pic" src="https://images.pexels.com/photos/7322083/pexels-photo-7322083.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" alt="" /> </div>
                                                    <div className="ps-3 d-flex flex-column">
                                                        <p className="fw-bold">Court<span className="ps-1">Dri-FIT</span></p> <small className=" d-flex"> <span className=" text-muted">Color:</span> <span className="fw-bold">Dark Blue</span> </small> <small className=""> <span className=" text-muted">Size:</span> <span className="fw-bold">L</span> </small>
                                                    </div>
                                                </div>
                                            </td>
                                            <td>
                                                <div className="d-flex">
                                                    <p className="pe-3"><span className="red">$45.00</span></p>
                                                    <p className="text-muted text-decoration-line-through">$55.00</p>
                                                </div>
                                            </td>
                                            <td>
                                                <div className="d-flex align-items-center"> <span className="pe-3 text-muted">Quantity</span> <span className="pe-3"> <input className="ps-2" type="number" value="2" /></span>
                                                    <div className="round"> <span className=""> L </span> </div>
                                                </div>
                                            </td>
                                        </tr>
                                        <tr className="">
                                            <td>
                                                <div className="d-flex align-items-center">
                                                    <div> <img className="pic" src="https://images.pexels.com/photos/7322083/pexels-photo-7322083.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" alt="" /> </div>
                                                    <div className="ps-3 d-flex flex-column">
                                                        <p className="fw-bold"> Sportswear<span className="ps-1">Heritage</span><span className="ps-1">Windrunner</span></p> <small className=""> <span className=" text-muted">Color:</span> <span className="fw-bold">Blue/White</span> </small> <small className=""> <span className=" text-muted">Size:</span> <span className="fw-bold">L</span> </small>
                                                    </div>
                                                </div>
                                            </td>
                                            <td>
                                                <div className="d-flex">
                                                    <p className="pe-3"><span className="red">$45.00</span></p>
                                                    <p className="text-muted text-decoration-line-through">$55.00</p>
                                                </div>
                                            </td>
                                            <td>
                                                <div className="d-flex align-items-center"> <span className="pe-3 text-muted">Quantity</span> <span className="pe-3"> <input className="ps-2" type="number" value="2" /></span>
                                                    <div className="round"> <span className=""> L </span> </div>
                                                </div>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 payment-summary">
                    <p className="fw-bold pt-lg-0 pt-4 pb-2">Payment Summary</p>
                    <div className="card px-md-3 px-2 pt-4">
                        <div className="unregistered mb-4"> <span className="py-1">unregistered account</span> </div>
                        <div className="d-flex justify-content-between pb-3"> <small className="text-muted">Transaction code</small>
                            <p className="">VC115665</p>
                        </div>
                        <div className="d-flex justify-content-between b-bottom"> <input type="text" className="ps-2" placeholder="COUPON CODE" />
                            <div className="btn btn-primary">Apply</div>
                        </div>
                        <div className="d-flex flex-column b-bottom">
                            <div className="d-flex justify-content-between py-3"> <small className="text-muted">Order Summary</small>
                                <p>$122</p>
                            </div>
                            <div className="d-flex justify-content-between pb-3"> <small className="text-muted">Additional Service</small>
                                <p>$22</p>
                            </div>
                            <div className="d-flex justify-content-between"> <small className="text-muted">Total Amount</small>
                                <p>$132</p>
                            </div>
                        </div>
                        <div className="sale my-3"> <span>sale<span className="px-1">expiring</span><span>in</span>:</span><span className="red">21<span className="ps-1">hours</span>,31<span className="ps-1 ">minutes</span></span> </div>
                    </div>
                </div>
                <div className="col-lg-8 delivery px-md-3 px-1">
                    <p className="pt-4 fw-bold pb-3 ps-2">Delivery</p>
                    <div className="d-md-flex justify-content-between align-items-center pb-4">
                        <div className="size d-flex ps-4"> <label className="option d-flex align-items-center"> <input type="radio" name="radio" />
                            <div className="card">
                                <div className="d-flex align-items-center">
                                    <div className="d-flex align-items-center justify-content-center"> <img className="del" src="https://www.freepnglogos.com/uploads/ups-logo-transparent/ups-airlines-aviation-22.png" alt="" />
                                        <p className="ps-2">DPD</p>
                                    </div>
                                    <div className=" d-flex flex-column px-3">
                                        <p className="fw-bold pb-1">DPD<span>Deliveries</span></p> <small className="text-muted pb-1">Expected<span className="ps-1">delivery:</span></small> <small className="text-muted pb-1">Friday:28</small>
                                    </div>
                                    <p className="fw-bold">$5.25</p>
                                </div>
                            </div> <span className="checkmark"></span>
                        </label> </div>
                        <div className="size d-flex pt-md-0 pt-3 ps-md-0 ps-4"> <label className="option d-flex align-items-center"> <input type="radio" name="radio" />
                            <div className="card">
                                <div className="d-flex align-items-center">
                                    <div className="d-flex align-items-center justify-content-center"> <img className="del" src="https://www.freepnglogos.com/uploads/ups-logo-transparent/ups-airlines-aviation-22.png" alt="" />
                                        <p className="ps-2">DPD</p>
                                    </div>
                                    <div className=" d-flex flex-column px-3">
                                        <p className="fw-bold pb-1">DPD<span>Deliveries</span></p> <small className="text-muted pb-1">Expected<span className="ps-1">delivery:</span></small> <small className="text-muted pb-1">Friday:28</small>
                                    </div>
                                    <p className="fw-bold">$5.25</p>
                                </div>
                            </div> <span className="checkmark"></span>
                        </label> </div>
                    </div>
                    <div className="d-md-flex justify-content-between align-items-center pb-4">
                        <div className="size d-flex ps-4"> <label className="option d-flex align-items-center"> <input type="radio" name="radio" />
                            <div className="card">
                                <div className="d-flex align-items-center">
                                    <div className="d-flex align-items-center justify-content-center"> <img className="del" src="https://www.freepnglogos.com/uploads/ups-logo-transparent/ups-airlines-aviation-22.png" alt="" />
                                        <p className="ps-2">DPD</p>
                                    </div>
                                    <div className=" d-flex flex-column px-3">
                                        <p className="fw-bold pb-1">DPD<span>Deliveries</span></p> <small className="text-muted pb-1">Expected<span className="ps-1">delivery:</span></small> <small className="text-muted pb-1">Friday:28</small>
                                    </div>
                                    <p className="fw-bold">$5.25</p>
                                </div>
                            </div> <span className="checkmark"></span>
                        </label> </div>
                        <div className="size d-flex pt-md-0 pt-3 ps-md-0 ps-4"> <label className="option d-flex align-items-center"> <input type="radio" name="radio" />
                            <div className="card">
                                <div className="d-flex align-items-center">
                                    <div className="d-flex align-items-center justify-content-center"> <img className="del" src="https://www.freepnglogos.com/uploads/ups-logo-transparent/ups-airlines-aviation-22.png" alt="" />
                                        <p className="ps-2">DPD</p>
                                    </div>
                                    <div className=" d-flex flex-column px-3">
                                        <p className="fw-bold pb-1">DPD<span>Deliveries</span></p> <small className="text-muted pb-1">Expected<span className="ps-1">delivery:</span></small> <small className="text-muted pb-1">Friday:28</small>
                                    </div>
                                    <p className="fw-bold">$5.25</p>
                                </div>
                            </div> <span className="checkmark"></span>
                        </label> </div>
                    </div>
                </div>
                <div className="col-lg-4">
                    <p className="pt-4 fw-bold pb-3">Additional Service</p>
                    <div className="card p-3 mb-2">
                        <div className="d-flex align-items-center justify-content-between">
                            <div>
                                <p className="fw-bold">Care + package</p> <small className="text-muted">One year of additional Care</small>
                            </div>
                            <div className="d-flex align-items-center">
                                <p className="pe-3">$10.00</p>
                                <div className="form-check form-switch"> <input className="form-check-input" type="checkbox" id="SwitchCheck" /> </div>
                            </div>
                        </div>
                    </div>
                    <div className="card p-3 mb-2">
                        <div className="d-flex align-items-center justify-content-between">
                            <div>
                                <p className="fw-bold">Environment Friendly</p> <small className="text-muted">Add some tip for earth care</small>
                            </div>
                            <div className="d-flex align-items-center">
                                <p className="pe-3">$2.00</p>
                                <div className="form-check form-switch"> <input className="form-check-input" type="checkbox" id="SwitchCheck" /> </div>
                            </div>
                        </div>
                    </div>
                    <div className="card p-3 mb-2">
                        <div className="d-flex align-items-center justify-content-between">
                            <div>
                                <p className="fw-bold">Golden Guard</p> <small className="text-muted">30 days more for return</small>
                            </div>
                            <div className="d-flex align-items-center">
                                <p className="pe-3">$5.00</p>
                                <div className="form-check form-switch"> <input className="form-check-input" type="checkbox" id="SwitchCheck" /> </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}