import React, {Component} from 'react';
import {
    Row,
    Col,
    Badge,
    Button
} from 'react-bootstrap';

import Aux from "../../../hoc/_Aux";
import Card from "../../../App/components/MainCard";
import UcFirst from "../../../App/components/UcFirst";

class Badges extends Component {
    render() {
        const buttonVariants = [
            'primary',
            'secondary',
            'success',
            'danger',
            'warning',
            'info',
            'light',
            'dark',
        ];

        const buttonBadges = buttonVariants.map((variant, idx) => (
            <Button key={idx} variant={variant}>
                <UcFirst text={variant} />
                <Badge variant="light" className="ml-1">4</Badge>
            </Button>
        ));

        return (
            <Aux>
                <Row>
                    <Col>
                        <Card title="Basic Badges">
                            <h1>
                                Example heading <Badge variant="secondary">New</Badge>
                            </h1>
                            <h2>
                                Example heading <Badge variant="secondary">New</Badge>
                            </h2>
                            <h3>
                                Example heading <Badge variant="secondary">New</Badge>
                            </h3>
                            <h4>
                                Example heading <Badge variant="secondary">New</Badge>
                            </h4>
                            <h5>
                                Example heading <Badge variant="secondary">New</Badge>
                            </h5>
                            <h6>
                                Example heading <Badge variant="secondary">New</Badge>
                            </h6>
                        </Card>
                        <Card title="Button Badges">
                            {buttonBadges}
                        </Card>
                    </Col>
                    <Col md={6} xl={4}>
                        <Card>
                            <Card.Body>
                                <h6 className='mb-4'>Daily Sales</h6>
                                <div className="row d-flex align-items-center">
                                    <div className="col-9">
                                        <h3 className="f-w-300 d-flex align-items-center m-b-0"><i className="feather icon-arrow-up text-c-green f-30 m-r-5"/> $249.95</h3>
                                    </div>

                                    <div className="col-3 text-right">
                                        <p className="m-b-0">50%</p>
                                    </div>
                                </div>
                                <div className="progress m-t-30" style={{height: '7px'}}>
                                    <div className="progress-bar progress-c-theme" role="progressbar" style={{width: '50%'}} aria-valuenow="50" aria-valuemin="0" aria-valuemax="100"/>
                                </div>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Aux>
        );
    }
}

export default Badges;