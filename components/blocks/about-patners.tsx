import { Container } from "@/components/layouts/container";
import { MotionWrapper } from "@/components/motion/motion-wrapper";
import { MotionTriggerWrapper } from "@/components/motion/motionTriggerWrapper";
import { Separator } from "@/components/ui/separator";
import { Heading } from "@/components/ui/heading";

import { cardAppearing } from "@/components/motion/motion_utils";

import * as React from 'react'
import { IconType } from "../data-providers/icons-provider";
import { Icon } from "../elements/icon";
import { MotionWrapperProps } from "@/components/motion/motion-wrapper";

const partnersList : PartnerType[] = [
  {name:'1 Inch Exchange', icon:"OneInch"},
  {name:'Fintech House Lisboa', icon:'FintechHouse' },
  {name:'Trust Wallet', icon:'TrustWallet'},
  {name:'Dash Network', icon:'Dash'},
  {name:'TON Network', icon:'TONfullLogo'},
]

type PartnerType = {
  name:string
  icon:IconType['icon']
}

const PartnerLogo = React.forwardRef<HTMLDivElement, MotionWrapperProps & PartnerType>(({name, icon, className, ...props}, ref)=>{
  return(
    <MotionWrapper variants={cardAppearing} {...props} ref={ref}>
    <div className="flex w-full flex-col items-center justify-center py-4 h-40">
      <span className="sr-only">{name}</span>
      <div className="h-16">
        <Icon icon={icon} className="h-full w-auto aspect-auto"/>
      </div>
    </div>
  </MotionWrapper>
  )
})
PartnerLogo.displayName='PartnerLogo'

export default function AboutPartnersBlock() {

  const elementsInRow = 3
  const rowNumber = Math.ceil(partnersList.length/elementsInRow)

  return (
    <section id="about-partners-block" className="py-20">
      {/**
       */}
      <MotionTriggerWrapper>
        <Container>
          <Heading as="h2" size="64" className="mb-5 ml-auto text-right">
            Key Partners
          </Heading>
          <div className="flex w-full flex-col">
            {Array.from({ length: rowNumber }).map((_, index) => (
              <div key={index} className="mb-4 flex flex-col lg:flex-row">
                {partnersList
                  .slice(index * elementsInRow, (index + 1) * elementsInRow)
                  .map((partner, i) => (
                    <React.Fragment key={i}>
                      {i > 0 && i < elementsInRow && (
                        <Separator
                          decorative
                          orientation="vertical"
                          className="hidden h-40 lg:block"
                        />
                      )}
                      <Separator
                        decorative
                        orientation="horizontal"
                        className="block w-full lg:hidden"
                      />
                      <PartnerLogo
                        name={partner.name}
                        icon={partner.icon}
                        key={partner.name}
                      />
                    </React.Fragment>
                  ))}
              </div>
            ))}
          </div>
        </Container>
      </MotionTriggerWrapper>
      {/**
       */}
    </section>
  );
}
