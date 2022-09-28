import React from "react";
import Card from 'react-bootstrap/Card'
import ListGroup from "react-bootstrap/esm/ListGroup";

import { IoIosBeer, IoIosRestaurant, IoIosWine } from "react-icons/io"
import { ImCheckmark } from "react-icons/im";

export function CardPromotion() {
    return (
        <Card className="flex mr-0.5 items-end justify-center flex-wrap gap-6">
            <Card.Body className="flex m-1.5 px-12 shadow-boxShadow bg-background-color">
                <Card.Header className="text-text-color"> Minimo de 15 pessoas <br /> </Card.Header>
                <ListGroup variant="flush" className="text-text-color">
                    <ListGroup.Item><ImCheckmark />4 horas de permanencia no box</ListGroup.Item>
                    <ListGroup.Item><ImCheckmark />Sanduiche</ListGroup.Item>
                    <ListGroup.Item><ImCheckmark />Mini pizzas</ListGroup.Item>
                    <ListGroup.Item><ImCheckmark />Mini assados</ListGroup.Item>
                    <ListGroup.Item><ImCheckmark />Pasteis</ListGroup.Item>
                    <ListGroup.Item><ImCheckmark />Salgados</ListGroup.Item>
                    <ListGroup.Item><ImCheckmark />Água</ListGroup.Item>
                    <ListGroup.Item><ImCheckmark />Refrigerante</ListGroup.Item>
                    <ListGroup.Item><ImCheckmark />Cerveja (Bohemia e Original)</ListGroup.Item>  
                </ListGroup>   
            </Card.Body>
        </Card>
    );
} 

export function CardRooms() {
    return (
        <Card className="flex mr-0.5 items-end justify-center flex-wrap gap-6 content-center place-content-center grid-cols-2">
            <Card.Body className="flex m-1.5 px-12 shadow-boxShadow bg-background-color">
                <Card.Title className="text-title-color">Sala 03</Card.Title>
                <Card.Text className="text-text-color">
                    Capacidade máxima: 30 pessoas. <br />
                    Com ar condicionado e iluminação personalizada.
                </Card.Text>
            </Card.Body>

            <Card.Body className="flex m-1.5 px-12 shadow-boxShadow bg-background-color">
                <Card.Title className="text-title-color">Sala 04</Card.Title>
                <Card.Text className="text-text-color">
                    Capacidade máxima: 20 pessoas. <br />
                    Com ar condicionado e iluminação personalizada.
                </Card.Text>
            </Card.Body>

            <Card.Body className="flex m-1.5 px-12 shadow-boxShadow bg-background-color">
                <Card.Title className="text-title-color">Sala 06</Card.Title>
                <Card.Text className="text-text-color">
                    Capacidade máxima: 17 pessoas. <br />
                    Com ar condicionado e iluminação personalizada.
                </Card.Text>
            </Card.Body>

            <Card.Body className="flex m-1.5 px-12 shadow-boxShadow bg-background-color">
                <Card.Title className="text-title-color">Sala 07</Card.Title>
                <Card.Text className="text-text-color">
                    Capacidade máxima: 12 pessoas. <br />
                    Com ar condicionado e iluminação personalizada.
                </Card.Text>
            </Card.Body>
        </Card>
    );
}

export function CardService() {
    return (
        <Card className="flex mr-0.5 items-end justify-center flex-wrap gap-6 content-center place-content-center grid-cols-3">
            <Card.Body className="flex m-1.5 px-12 shadow-boxShadow bg-background-color">
                <IoIosRestaurant />
                <Card.Title className="text-title-color">Porções</Card.Title>
                <Card.Text className="text-text-color">
                    <ListGroup.Item>Mini esfihas (6 unidades);</ListGroup.Item>
                    <ListGroup.Item>Mini empadas (6 unidades);</ListGroup.Item>
                    <ListGroup.Item>Pastel (12 unidades);</ListGroup.Item>
                    <ListGroup.Item>Salgados (12 unidades);</ListGroup.Item>
                    <ListGroup.Item>Batata frita;</ListGroup.Item>
                    <ListGroup.Item>Calabresa acebolada;</ListGroup.Item>
                    <ListGroup.Item>Mandioca frita;</ListGroup.Item>
                    <ListGroup.Item>Pipoca;</ListGroup.Item>
                    <ListGroup.Item>Polenta frita;</ListGroup.Item>
                </Card.Text>
            </Card.Body>

            <Card.Body className="flex m-1.5 px-12 shadow-boxShadow bg-background-color">
                <IoIosWine />
                <Card.Title className="text-title-color">Bebidas</Card.Title>
                <Card.Subtitle className="text-text-color">Sem álcool:</Card.Subtitle>
                <Card.Text className="text-text-color">
                    <ListGroup.Item>Água;</ListGroup.Item>
                    <ListGroup.Item>Água com gas;</ListGroup.Item>
                    <ListGroup.Item>H2O;</ListGroup.Item>
                    <ListGroup.Item>Ice tea;</ListGroup.Item>
                    <ListGroup.Item>Refrigerante;</ListGroup.Item>
                    <ListGroup.Item>Suco lata;</ListGroup.Item>
                </Card.Text>
            </Card.Body>

            <Card.Body className="flex m-1.5 px-12 shadow-boxShadow bg-background-color">
                <IoIosBeer />
                <Card.Title className="text-title-color">Bebidas</Card.Title>
                <Card.Subtitle className="text-text-color">Com álcool:</Card.Subtitle>
                <Card.Text className="text-text-color">
                    <ListGroup.Item>Amarula;</ListGroup.Item>
                    <ListGroup.Item>Caipirinha;</ListGroup.Item>
                    <ListGroup.Item>Caipiroska;</ListGroup.Item>
                    <ListGroup.Item>Caipisake;</ListGroup.Item>
                    <ListGroup.Item>Cerveja (Bohemia e Original);</ListGroup.Item>
                    <ListGroup.Item>Compari;</ListGroup.Item>
                    <ListGroup.Item>Conhaque;</ListGroup.Item>
                    <ListGroup.Item>Flash Power;</ListGroup.Item>
                    <ListGroup.Item>Rum;</ListGroup.Item>
                    <ListGroup.Item>Sake;</ListGroup.Item>
                    <ListGroup.Item>Smirnoff Ice;</ListGroup.Item>
                    <ListGroup.Item>St Remy;</ListGroup.Item>
                    <ListGroup.Item>Tequila;</ListGroup.Item>
                    <ListGroup.Item>Vodka;</ListGroup.Item>
                    <ListGroup.Item>Whisky (Red Label, Black Label e Jack Daniel's);</ListGroup.Item>
                </Card.Text>
            </Card.Body>
        </Card>
    );
}