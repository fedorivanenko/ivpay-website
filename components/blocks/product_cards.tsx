import Image from "next/image";

import { Button } from "../ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardImageWrapper, CardTitle } from "../ui/card";

import { MotionTriggerWrapper } from "../layouts/motionTriggerWrapper";

import { ArrowRightIcon } from "@radix-ui/react-icons";
import Container from "../layouts/container";

export default function ProductCards() {

    return (
        <section className="flex flex-col py-24 bg-soft">
            <MotionTriggerWrapper>
                <Container>
                    <h2 className="text-60 uppercase mx-auto leading-none">
                        Our Products
                    </h2>
                    <p className="uppercase mx-16 sm:mx-auto mt-8 mb-14 text-center">
                        Fast access to crypto payments for your business with powerful tools
                    </p>
                    <div
                        className="w-full px-5 gap-5 grid grid-cols-1 md:grid-cols-6"
                    >
                        <Card className="aspect-16/9 md:col-span-3 flex flex-col">
                            <CardHeader><CardTitle>POS</CardTitle></CardHeader>
                            <CardContent className="flex flex-col justify-between flex-1">
                                <p>Everything you need in one</p>
                            </CardContent>
                            <CardFooter>
                                <Button variant="secondary" size="icon"><ArrowRightIcon height="20" width="20" /></Button>
                            </CardFooter>
                            <CardImageWrapper>
                                <Image src="/pos_example.png" alt="pos" fill />
                            </CardImageWrapper>
                        </Card>
                        <Card className="aspect-16/9 md:col-span-3 flex flex-col">
                            <CardHeader><CardTitle>Mobile App</CardTitle></CardHeader>
                            <CardContent className="flex flex-col justify-between flex-1">
                                <p>Everything you need in one</p>
                            </CardContent>
                            <CardFooter>
                                <Button variant="secondary" size="icon"><ArrowRightIcon height="20" width="20" /></Button>
                            </CardFooter>
                        </Card>
                        <Card className="aspect-16/9 md:aspect-5/4 md:col-span-2 flex flex-col">
                            <CardHeader><CardTitle>E-commerce</CardTitle></CardHeader>
                            <CardContent className="flex flex-col justify-between flex-1">
                                <p>Everything you need in one</p>
                            </CardContent>
                            <CardFooter>
                                <Button variant="secondary" size="icon"><ArrowRightIcon height="20" width="20" /></Button>
                            </CardFooter>
                        </Card>
                        <Card className="aspect-16/9 md:aspect-5/4 md:col-span-2 flex flex-col">
                            <CardHeader><CardTitle>Vending machine</CardTitle></CardHeader>
                            <CardContent className="flex flex-col justify-between flex-1">
                                <p>Everything you need in one</p>
                            </CardContent>
                            <CardFooter>
                                <Button variant="secondary" size="icon"><ArrowRightIcon height="20" width="20" /></Button>
                            </CardFooter>
                        </Card>
                        <Card className="aspect-16/9 md:aspect-5/4 md:col-span-2 flex flex-col">
                            <CardHeader><CardTitle>API</CardTitle></CardHeader>
                            <CardContent className="flex flex-col justify-between flex-1">
                                <p>Everything you need in one</p>
                            </CardContent>
                            <CardFooter>
                                <Button variant="secondary" size="icon"><ArrowRightIcon height="20" width="20" /></Button>
                            </CardFooter>
                        </Card>
                    </div>
                </Container>
            </MotionTriggerWrapper>
        </section>
    )
}