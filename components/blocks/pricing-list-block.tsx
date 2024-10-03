import * as React from 'react'

import { Container } from "../layouts/container";
import { MotionTriggerWrapper } from "../motion/motionTriggerWrapper";

import {
  pricingList,
  PricingItemType,
} from "../data-providers/pricing-provider";
import { Heading } from "../ui/heading";

import { Text } from "../ui/text";
import { Icon } from '../elements/icon';
import { Button } from '../ui/button';
import Link from 'next/link';
import { MotionWrapper } from '../motion/motion-wrapper';


//TODO: replace with table
export default function PricingListBlock() {

//const gridParams =" grid-rows-" + (Object.keys(pricingList.pricingItems[0]).length-1);

  return (
    <section id="POS-hero-block" className="py-20">
      {/*
            */}
            <MotionTriggerWrapper>
      <Container>
        <Heading as="h2" size={"64"} className="mx-auto mb-10">
          We keep it simple
        </Heading>
        <MotionWrapper>
          <div className={"grid grid-flow-col divide-y divide-border border-collapse max-w-screen-lg w-full mx-auto grid-rows-9"}>
            {/* Descriptions */}
            <div />
            {Object.values(pricingList.descriptions).map(
              (item: string, index) => (
                <p key={index} className='flex items-center px-2 text-xs sm:text-sm'>{item}</p>
              ),
            )}
            <div className='!border-0'/>
            {pricingList.pricingItems.map((item: PricingItemType, index) => (
              <React.Fragment key={index}>
                  <p className='text-xl flex items-center !border-0'>{item.title}</p>
                  <p className='flex items-center px-2 py-4'>{item.monthlyFee}%</p>
                  <p className='flex items-center px-2 py-4'>{item.withdrawFee}%</p>
                  <p className='flex items-center px-2 py-4'>{item.exchangeFee}%</p>
                  <p className='flex items-center px-2 py-4'>{item.invoicing ? <Icon icon='CheckCircle'/>:<Icon icon='XCicrcle'/>}</p>
                  <p className='flex items-center px-2 py-4'>{item.api ? <Icon icon='CheckCircle'/>:<Icon icon='XCicrcle'/>}</p>
                  <p className='flex items-center px-2 py-4'>{item.liveSupport ? <Icon icon='CheckCircle'/>:<Icon icon='XCicrcle'/>}</p>
                  <p className='flex items-center px-2 py-4'>{item.terminalPOS ? item.terminalPOS : "—"}</p>
                  <Button asChild size='sm' className='max-w-min whitespace-nowrap h-9'>
                      <Link href={item.link}>Get Started<Icon icon='ArrowUpRight'/></Link>
                  </Button>
              </React.Fragment>
            ))}

          </div>
        </MotionWrapper>
      </Container>
      </MotionTriggerWrapper>
      {/*
            */}
    </section>
  );
}
