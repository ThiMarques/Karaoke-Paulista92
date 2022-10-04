import React from 'react'
import Card from 'react-bootstrap/Card'

export function CardRooms() {
    return (
        <Card className="gap-6 grid desktop:grid-cols-2">
            <Card.Body className="px-[3.625rem] py-8 border-transparent border-b-base-color border-4 shadow-boxShadow rounded-borderCard text-center desktop:px-12">
                <Card.Title className="text-title-color font-bold text-title-font-size font-title-font subpixel-antialiased text-center mb-3"><h3>Sala 03</h3></Card.Title>
                <Card.Text>
                    Capacidade máxima: 30 pessoas. <br />
                    Com ar condicionado e iluminação personalizada.
                </Card.Text>
            </Card.Body>

            <Card.Body className="px-[3.625rem] py-8 border-transparent border-b-base-color border-4 shadow-boxShadow rounded-borderCard text-center desktop:px-12">
                <Card.Title className="text-title-color font-bold text-title-font-size font-title-font subpixel-antialiased text-center mb-3"><h3>Sala 04</h3></Card.Title>
                <Card.Text>
                    Capacidade máxima: 20 pessoas. <br />
                    Com ar condicionado e iluminação personalizada.
                </Card.Text>
            </Card.Body>

            <Card.Body className="px-[3.625rem] py-8 border-transparent border-b-base-color border-4 shadow-boxShadow rounded-borderCard text-center desktop:px-12">
                <Card.Title className="text-title-color font-bold text-title-font-size font-title-font subpixel-antialiased text-center mb-3"><h3>Sala 06</h3></Card.Title>
                <Card.Text>
                    Capacidade máxima: 17 pessoas. <br />
                    Com ar condicionado e iluminação personalizada.
                </Card.Text>
            </Card.Body>

            <Card.Body className="px-[3.625rem] py-8 border-transparent border-b-base-color border-4 shadow-boxShadow rounded-borderCard text-center desktop:px-12">
                <Card.Title className="text-title-color font-bold text-title-font-size font-title-font subpixel-antialiased text-center mb-3"><h3>Sala 07</h3></Card.Title>
                <Card.Text>
                    Capacidade máxima: 12 pessoas. <br />
                    Com ar condicionado e iluminação personalizada.
                </Card.Text>
            </Card.Body>
        </Card>
    );
}