import React from "react";
import Card from 'react-bootstrap/Card'
import ListGroup from "react-bootstrap/esm/ListGroup";

import { ImCheckmark } from "react-icons/im";

export function CardPromotion() {
    return (
        <Card className="mr-8 flex items-end justify-center flex-wrap">
            <Card.Body className="border-b-base-color grow shrink basis-[150%] border-transparent shadow-boxShadow border-4 text-center px-12 ">
                <Card.Header className="text-text-color"> Minimo de 15 pessoas <br /> </Card.Header>
                <ListGroup variant="flush" className="text-text-color">
                    <ListGroup.Item className="flex text-center items-center">
                        <ImCheckmark className="text-title-color w-4 mr-6" />
                        <p className="flex text-left">4 horas de permanencia no box</p>
                    </ListGroup.Item>

                    <ListGroup.Item className="flex text-center items-center">
                        <ImCheckmark className="text-title-color w-4 mr-6" />
                        <p className="flex text-left">Sanduiche</p>
                    </ListGroup.Item>

                    <ListGroup.Item className="flex text-center items-center">
                        <ImCheckmark className="text-title-color w-4 mr-6" />
                        <p className="flex text-left">Mini pizzas</p>
                    </ListGroup.Item>

                    <ListGroup.Item className="flex text-center items-center">
                        <ImCheckmark className="text-title-color w-4 mr-6" />
                        <p className="flex text-left">Mini assados</p>
                    </ListGroup.Item>

                    <ListGroup.Item className="flex text-center items-center">
                        <ImCheckmark className="text-title-color w-4 mr-6" />
                        <p className="flex text-left">Pasteis</p>
                    </ListGroup.Item>

                    <ListGroup.Item className="flex text-center items-center">
                        <ImCheckmark className="text-title-color w-4 mr-6" />
                        <p className="flex text-left">Salgados</p>
                    </ListGroup.Item>

                    <ListGroup.Item className="flex text-center items-center">
                        <ImCheckmark className="text-title-color w-4 mr-6" />
                        <p className="flex text-left">Água</p>
                    </ListGroup.Item>

                    <ListGroup.Item className="flex text-center items-center">
                        <ImCheckmark className="text-title-color w-4 mr-6" />
                        <p className="flex text-left">Refrigerante</p>
                    </ListGroup.Item>

                    <ListGroup.Item className="flex text-center items-center">
                        <ImCheckmark className="text-title-color w-4 mr-6" />
                        <p className="flex text-left">Cerveja (Bohemia e Original)</p>
                    </ListGroup.Item>  
                </ListGroup>   
            </Card.Body>
        </Card>
    );
}