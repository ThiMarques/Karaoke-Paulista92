import React from "react";
import Card from 'react-bootstrap/Card';
import ListGroup from "react-bootstrap/esm/ListGroup";

import prato from './../../assets/prato.png';
import copo from './../../assets/copo.png';
import bebidas from './../../assets/bebidas.png';

export function CardService() {
    return (
        <Card className="mx-6 flex flex-wrap justify-center">
                <Card.Body className="text-text-color py-[3.625rem] px-8 m-1.5 border-transparent border-b-base-color border-4 shadow-boxShadow rounded-borderCard text-center grow shrink basis-[150px]">
                    <img src={prato} className="w-[20%] h-auto mx-auto" alt="" />
                    <Card.Title className="my-4 justify-items-center">Porções</Card.Title>
                    <Card.Text className="mx-6 text-center">
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

                <Card.Body className="text-text-color py-[3.625rem] px-8 m-1.5 border-transparent border-b-base-color border-4 shadow-boxShadow rounded-borderCard text-center grow shrink basis-[150px]">
                    <img src={copo} className="w-[20%] h-auto mx-auto" alt="" />
                    <Card.Title className="my-4">Bebidas</Card.Title>
                    <Card.Subtitle className="my-4">Sem álcool:</Card.Subtitle>
                    <Card.Text className="mx-6 text-center">
                        <ListGroup.Item>Água;</ListGroup.Item>
                        <ListGroup.Item>Água com gas;</ListGroup.Item>
                        <ListGroup.Item>H2O;</ListGroup.Item>
                        <ListGroup.Item>Ice tea;</ListGroup.Item>
                        <ListGroup.Item>Refrigerante;</ListGroup.Item>
                        <ListGroup.Item>Suco lata;</ListGroup.Item>
                    </Card.Text>
                </Card.Body>

                <Card.Body className="text-text-color py-[3.625rem] px-8 m-1.5 border-transparent border-b-base-color border-4 shadow-boxShadow rounded-borderCard text-center grow shrink basis-[150px]">
                    <img src={bebidas} className="w-[20%] h-auto mx-auto" alt="" />
                    <Card.Title className="my-4">Bebidas</Card.Title>
                    <Card.Subtitle className="my-4">Com álcool:</Card.Subtitle>
                    <Card.Text className="mx-6 text-center">
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