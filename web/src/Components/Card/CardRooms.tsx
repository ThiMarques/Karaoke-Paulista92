import React from 'react'
import Card from 'react-bootstrap/Card'

export function CardRooms() {
    return (
        <Card className="flex mr-0.5 items-end justify-center flex-wrap gap-6 content-center place-content-center grid-cols-2 ">
            <Card.Body className=" grid m-1.5 border-b-base-color border-4 px-12 p-[3.625rem 2rem] shadow-boxShadow rounded-borderCard text-center">
                <Card.Title className="text-title-color text-2xl mb-3">Sala 03</Card.Title>
                <Card.Text className="text-text-color">
                    Capacidade máxima: 30 pessoas. <br />
                    Com ar condicionado e iluminação personalizada.
                </Card.Text>
            </Card.Body>

            <Card.Body className=" grid m-1.5 border-b-base-color border-4 px-12 p-[3.625rem 2rem] shadow-boxShadow rounded-borderCard text-center">
                <Card.Title className="text-title-color text-2xl mb-3">Sala 04</Card.Title>
                <Card.Text className="text-text-color">
                    Capacidade máxima: 20 pessoas. <br />
                    Com ar condicionado e iluminação personalizada.
                </Card.Text>
            </Card.Body>

            <Card.Body className=" grid m-1.5 border-b-base-color border-4 px-12 p-[3.625rem 2rem] shadow-boxShadow rounded-borderCard text-center">
                <Card.Title className="text-title-color text-2xl mb-3">Sala 06</Card.Title>
                <Card.Text className="text-text-color">
                    Capacidade máxima: 17 pessoas. <br />
                    Com ar condicionado e iluminação personalizada.
                </Card.Text>
            </Card.Body>

            <Card.Body className=" grid m-1.5 border-b-base-color border-4 px-12 p-[3.625rem 2rem] shadow-boxShadow rounded-borderCard text-center">
                <Card.Title className="text-title-color text-2xl mb-3">Sala 07</Card.Title>
                <Card.Text className="text-text-color">
                    Capacidade máxima: 12 pessoas. <br />
                    Com ar condicionado e iluminação personalizada.
                </Card.Text>
            </Card.Body>
        </Card>
    );
}