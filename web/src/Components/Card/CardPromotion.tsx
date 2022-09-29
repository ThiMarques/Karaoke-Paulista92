import React from "react";
import Card from 'react-bootstrap/Card'
import ListGroup from "react-bootstrap/esm/ListGroup";

import { ImCheckmark } from "react-icons/im";

export function CardPromotion() {
    return (
        <Card className="flex mr-8 items-end justify-center flex-wrap">
            <Card.Body className="grid m-1.5 shadow-boxShadow border-b-base-color border-4 text-center px-12 p-[3.625rem 2rem] grow shrink basis-[150%]">
                <Card.Header className="text-text-color"> Minimo de 15 pessoas <br /> </Card.Header>
                <ListGroup variant="flush" className="text-text-color">
                    <ListGroup.Item><ImCheckmark className="w-4 mr-6" />4 horas de permanencia no box</ListGroup.Item>
                    <ListGroup.Item><ImCheckmark className="w-4 mr-6" />Sanduiche</ListGroup.Item>
                    <ListGroup.Item><ImCheckmark className="w-4 mr-6" />Mini pizzas</ListGroup.Item>
                    <ListGroup.Item><ImCheckmark className="w-4 mr-6" />Mini assados</ListGroup.Item>
                    <ListGroup.Item><ImCheckmark className="w-4 mr-6" />Pasteis</ListGroup.Item>
                    <ListGroup.Item><ImCheckmark className="w-4 mr-6" />Salgados</ListGroup.Item>
                    <ListGroup.Item><ImCheckmark className="w-4 mr-6" />Água</ListGroup.Item>
                    <ListGroup.Item><ImCheckmark className="w-4 mr-6" />Refrigerante</ListGroup.Item>
                    <ListGroup.Item><ImCheckmark className="w-4 mr-6" />Cerveja (Bohemia e Original)</ListGroup.Item>  
                </ListGroup>   
            </Card.Body>
        </Card>
    );
}