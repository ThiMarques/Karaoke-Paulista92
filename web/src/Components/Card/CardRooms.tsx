import React from 'react'
import Card from 'react-bootstrap/Card'

export function CardRooms() {
    return (
        <Card className="gap-6 grid">
            <Card.Body className="py-[3.625rem] px-8 m-1.5 border-transparent border-b-base-color border-4 shadow-boxShadow rounded-borderCard text-center">
                <Card.Title className="text-title-color font-bold text-title-font-size font-title-font subpixel-antialiased text-center mb-3">Sala 03</Card.Title>
                <Card.Text>
                    Capacidade máxima: 30 pessoas. <br />
                    Com ar condicionado e iluminação personalizada.
                </Card.Text>
            </Card.Body>

            <Card.Body className="py-[3.625rem] px-8 m-1.5 border-transparent border-b-base-color border-4 shadow-boxShadow rounded-borderCard text-center">
                <Card.Title className="text-title-color font-bold text-title-font-size font-title-font subpixel-antialiased text-center mb-3">Sala 04</Card.Title>
                <Card.Text>
                    Capacidade máxima: 20 pessoas. <br />
                    Com ar condicionado e iluminação personalizada.
                </Card.Text>
            </Card.Body>

            <Card.Body className="py-[3.625rem] px-8 m-1.5 border-transparent border-b-base-color border-4 shadow-boxShadow rounded-borderCard text-center">
                <Card.Title className="text-title-color font-bold text-title-font-size font-title-font subpixel-antialiased text-center mb-3">Sala 06</Card.Title>
                <Card.Text>
                    Capacidade máxima: 17 pessoas. <br />
                    Com ar condicionado e iluminação personalizada.
                </Card.Text>
            </Card.Body>

            <Card.Body className="py-[3.625rem] px-8 m-1.5 border-transparent border-b-base-color border-4 shadow-boxShadow rounded-borderCard text-center">
                <Card.Title className="text-title-color font-bold text-title-font-size font-title-font subpixel-antialiased text-center mb-3">Sala 07</Card.Title>
                <Card.Text>
                    Capacidade máxima: 12 pessoas. <br />
                    Com ar condicionado e iluminação personalizada.
                </Card.Text>
            </Card.Body>
        </Card>
    );
}