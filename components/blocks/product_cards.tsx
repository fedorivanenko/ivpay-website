import Image from "next/image";

import { Button } from "../ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardImageWrapper, CardTitle } from "../ui/card";

import { MotionTriggerWrapper } from "../motion/motionTriggerWrapper";

import { ArrowRightIcon } from "@radix-ui/react-icons";
import Container from "../layouts/container";
import { Heading } from "../ui/heading";
import { Text } from "../ui/text";
import { AnimatedTextWrapper } from "../motion/animatedTextWrapper";

export default function ProductCards() {

    return (
        <section className="flex flex-col bg-soft">
            <MotionTriggerWrapper>
                <Container>
                    <Heading as="h2" size="60" className="text-center">Our Products</Heading>
                    <Text className="mt-8 mb-12 mx-5 md:mx-auto text-center uppercase">
                        Fast access to crypto payments for your business with powerful tools
                    </Text>
                    <div
                        className="w-full px-5 gap-5 grid grid-cols-1 md:grid-cols-6"
                    >
                        <Card className="aspect-16/9 md:col-span-3 flex flex-col">
                            <CardHeader>
                                <Heading as="h3" size='32'>POS</Heading>
                            </CardHeader>
                            <CardContent className="flex flex-col justify-between flex-1">
                                <Text>Everything you need in one</Text>
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
                                <Text>
                                    <AnimatedTextWrapper>
                                        Download a simple and user-friendly app to accept payments in more than 40 cryptocurrencies.
                                    </AnimatedTextWrapper>
                                </Text>
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