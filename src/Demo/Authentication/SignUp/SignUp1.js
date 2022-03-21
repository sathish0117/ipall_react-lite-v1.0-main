import React from 'react';
import {NavLink} from 'react-router-dom';

import './../../../assets/scss/style.scss';
import Aux from "../../../hoc/_Aux";
import Breadcrumb from "../../../App/layout/AdminLayout/Breadcrumb";
import DEMO from "../../../store/constant";


import {Dropdown} from 'react-bootstrap';




class SignUp1 extends React.Component {
    render () {
        return(
            <Aux>
                <Breadcrumb/>
                <div className="auth-wrapper">
                    <div className="auth-content">
                        <div className="auth-bg">
                            <span className="r"/>
                            <span className="r s"/>
                            <span className="r s"/>
                            <span className="r"/>
                        </div>
                        <div className="card">
                            <div className="card-body text-center">
                                <div className="mb-4">
                                    <i className="feather icon-user-plus auth-icon"/>
                                </div>
                                <h3 className="mb-4">Sign up</h3>

                                <Aux>
            <ul className="navbar-nav mr-auto">
               <Dropdown>
                    
                        <Dropdown.Toggle variant={'link'} id="dropdown-basic">
                           Select User
                        </Dropdown.Toggle>
                        <ul>
                            <Dropdown.Menu>
                                <li><a className="dropdown-item" href={DEMO.BLANK_LINK}>MILK MAN</a></li>
                                <li><a className="dropdown-item" href={DEMO.BLANK_LINK}>BUYER</a></li>
                                <li><a className="dropdown-item" href={DEMO.BLANK_LINK}>SELLER</a></li>
                            </Dropdown.Menu>
                        </ul>
                    </Dropdown>
                
            </ul>
        </Aux>
                                <div className="input-group mb-3">
                                    <input type="text" className="form-control" placeholder="Name"/>
                                </div>
                                <div className="input-group mb-3">
                                    <input type="address" className="form-control" placeholder=" Door No & Street address "/>
                                </div>
                                <div className="input-group mb-3">
                                    <input type="address" className="form-control" placeholder="Area / Town"/>
                                </div>
                                <div className="input-group mb-3">
                                    <input type="address" className="form-control" placeholder="District / State"/>
                                </div>
                                <div className="input-group mb-4">
                                    <input type="pincode" className="form-control" placeholder="Pincode"/>
                                    
                                </div>
                                <div className="input-group mb-4">
                                    <input type="deviceid" className="form-control" placeholder="Device Id"/>
                                    
                                </div>
                                <br></br>
   
              



        
    







            
                                
                                  
                                <div className="input-group mb-3">
                                    <input type="mobileno" className="form-control" placeholder="MobileNo"/>
                                </div>
                                <button className="btn btn-primary shadow-2 mb-4">Getotp</button>
                                <div className="form-group text-left">
                                    {/* <div className="checkbox checkbox-fill d-inline">
                                        <input type="checkbox" name="checkbox-fill-2" id="checkbox-fill-2"/>
                                            <label htmlFor="checkbox-fill-2" className="cr">Send me the <a href={DEMO.BLANK_LINK}> Newsletter</a> weekly.</label>
                                    </div> */}
                                </div>
                                <button className="btn btn-primary shadow-2 mb-4">Sign up</button>
                                <p className="mb-0 text-muted">Allready have an account? <NavLink to="/auth/signin-1">Login</NavLink></p>
                            </div>
                        </div>
                    </div>
                </div>
            </Aux>
        );
    }
}

export default SignUp1;