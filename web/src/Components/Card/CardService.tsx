import React from "react";
import Card from 'react-bootstrap/Card'
import ListGroup from "react-bootstrap/esm/ListGroup";

import { IoIosBeer, IoIosRestaurant, IoIosWine } from "react-icons/io"

export function CardService() {
    return (
        <Card className="flex mr-0.5 items-end justify-center flex-wrap gap-6 content-center place-content-center grid-cols-3">
            <div className="mx-6 flex flex-wrap justify-center">
                <Card.Body className="grid m-1.5 border-b-base-color border-4 px-12 p-[3.625rem 2rem] shadow-boxShadow rounded-borderCard text-center">
                    <IoIosRestaurant />
                    <Card.Title className="text-title-color my-4 text-2xl mb-3">Porções</Card.Title>
                    <Card.Text className="text-text-color mx-6 text-center">
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

                <Card.Body className="grid m-1.5 border-b-base-color border-4 px-12 p-[3.625rem 2rem] shadow-boxShadow rounded-borderCard text-center">
                    <IoIosWine />
                    <Card.Title className="text-title-color my-4 text-2xl mb-3">Bebidas</Card.Title>
                    <Card.Subtitle className="text-text-color my-4">Sem álcool:</Card.Subtitle>
                    <Card.Text className="text-text-color mx-6 text-center">
                        <ListGroup.Item>Água;</ListGroup.Item>
                        <ListGroup.Item>Água com gas;</ListGroup.Item>
                        <ListGroup.Item>H2O;</ListGroup.Item>
                        <ListGroup.Item>Ice tea;</ListGroup.Item>
                        <ListGroup.Item>Refrigerante;</ListGroup.Item>
                        <ListGroup.Item>Suco lata;</ListGroup.Item>
                    </Card.Text>
                </Card.Body>

                <Card.Body className="grid m-1.5 border-b-base-color border-4 px-12 p-[3.625rem 2rem] shadow-boxShadow rounded-borderCard text-center">
                    <IoIosBeer />
                    <Card.Title className="text-title-color my-4 text-2xl mb-3">Bebidas</Card.Title>
                    <Card.Subtitle className="text-text-color my-4">Com álcool:</Card.Subtitle>
                    <Card.Text className="text-text-color mx-6 text-center">
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
            </div>
        </Card>
    );
}