import { Container } from "../layouts/container";
import { MotionTriggerWrapper } from "@/components/motion/motionTriggerWrapper";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import { Heading } from "@/components/ui/heading";
import { thousandsSeparator } from "@/components/elements/thousandsSeparator";
import { MotionWrapper } from "@/components/motion/motion-wrapper";


export type DistributionItemType = {
    title: string
    percent: number
    amount: number
    price: number | undefined
    raise: number
    vesting: string | undefined
    ics: number | undefined
}

export type DistributionListType = {
    items: DistributionItemType[]
    get total(): number
    get maxSupply(): number 
    get totalDiluted(): number
    get initailCap(): number
}

export const DistributionList: DistributionListType = {
  items: [
    {
      title: "Private 1",
      percent: 7.5,
      amount: 75000000,
      price: 0.02,
      raise: 1500000,
      ics: 75000,
      vesting:
        "5% on TGE followed by 3 month cliff, then in equal installments every month for 9 months",
    },
    {
      title: "Private 2",
      percent: 6.8,
      amount: 68000000,
      price: 0.025,
      raise: 1700000,
      ics: 170000,
      vesting:
        "10% on TGE followed by 1 month cliff, then in equal installments every month for 9 months",
    },
    {
      title: "Influence Round",
      percent: 4.0,
      amount: 40000000,
      price: 0.025,
      raise: 1000000,
      ics: 150000,
      vesting:
        "15% on TGE followed by 1 month cliff, then in equal installments every month for 9 months",
    },
    {
      title: "Public sale",
      percent: 5.0,
      amount: 50000000,
      price: 0.03,
      raise: 1500000,
      ics: 450000,
      vesting: "30% on TGE, then in equal installments every day for 2 months",
    },
    {
      title: "Liquidity CEX/DEX",
      percent: 2.5,
      amount: 25000000,
      price: undefined,
      raise: 0,
      ics: undefined,
      vesting: "—",
    },
    {
      title: "Team",
      percent: 15,
      amount: 150000000,
      price: undefined,
      raise: 0,
      ics: undefined,
      vesting: "Cliff 14 months 100% at 24 month",
    },
    {
      title: "Advisors",
      percent: 2,
      amount: 20000000,
      price: undefined,
      raise: 0,
      ics: undefined,
      vesting: "Cliff 12 months 100% at 12 month",
    },
    {
      title: "Listing",
      percent: 1.2,
      amount: 12000000,
      price: undefined,
      raise: 0,
      ics: undefined,
      vesting: "Cliff 1 months 100% at 3 month",
    },
    {
      title: "Marketing",
      percent: 20,
      amount: 200000000,
      price: undefined,
      raise: 0,
      ics: undefined,
      vesting: "Cliff 1 months 100% at 12 month",
    },
    {
      title: "Ecosystem Fund",
      percent: 36,
      amount: 360000000,
      price: undefined,
      raise: 0,
      ics: undefined,
      vesting: "Cliff 1 months 100% at 48 month",
    },
  ],
  get total() {
    return this.items.reduce((sum, item) => sum + item.percent, 0);
  },
  get maxSupply() {
    return this.items.reduce((sum, item) => sum + item.amount, 0);
  },
  get totalDiluted() {
    return this.items.reduce((sum, item) => sum + item.raise, 0);
  },
  get initailCap() {
    return this.items.reduce((sum, item) => sum + (item.ics ? item.ics : 0), 0);
  },
};


export default function EcosystemTockenDistributionBlock(){

    return (
      <section id="tockenomics-block" className="py-20">
        {/*
         */}
         <MotionTriggerWrapper>
        <Container className="overflow-auto">
          <Heading as="h2" size="64" className="mb-2 lg:mb-0">
            Token Distribution
          </Heading>
          <ScrollArea>
            <MotionWrapper>
            <table className="text-sm mt-5 whitespace-nowrap border-collapse divide-y divide-border">
            <thead className="border-collapse divide-y divide-border">
                <tr className="text-accent divide-x divide-border text-left">
                    <th scope="col"className="px-5 py-5">Distribution</th>
                    <th scope="col"className="px-5 py-5">%</th>
                    <th scope="col"className="px-5 py-5">Amount</th>
                    <th scope="col"className="px-5 py-5">Price ($)</th>
                    <th scope="col"className="px-5 py-5">Raise ($)</th>
                    <th scope="col"className="px-5 py-5">Vesting</th>
                    <th scope="col"className="px-5 py-5">ICS</th>
                </tr>
              </thead>
              <tbody className="border-collapse divide-y divide-border">
              {DistributionList.items.map((item:DistributionItemType) => (
                <tr key={item.title} className="divide-x divide-border">
                    <td className="px-5 py-5">{item.title}</td>
                    <td className="px-5 py-5">{thousandsSeparator({number:item.percent})}%</td>
                    <td className="px-5 py-5">{thousandsSeparator({number:item.amount})}</td>
                    <td className="px-5 py-5">{item.price? '$' : null}{item.price && thousandsSeparator({number:item.price})}</td>
                    <td className="px-5 py-5">{item.raise === 0 ? null : "$ "}{thousandsSeparator({number:item.raise})}</td>
                    <td className="px-5 py-5 min-w-[36ch] max-w-[36ch] whitespace-normal">{item.vesting}</td>
                    <td className="px-5 py-5">{item.ics? "$": null}{item.ics? thousandsSeparator({number:item.ics}) : "—"}</td>
                </tr>
              ))}
              <tr className="border-t border-accent divide-x divide-border text-center">
                <td/>
                <td className="px-5 py-5">Total</td>
                <td className="px-5 py-5">Max Supply</td>
                <td/>
                <td className="px-5 py-5">Total Diluted</td>
                <td/>
                <td className="px-5 py-5">Day 1 Initial Cap</td>
              </tr>
              <tr className="text-accent divide-x divide-border">
                <td/>
                <td className="px-5 py-5">{thousandsSeparator({number:DistributionList.total})}%</td>
                <td className="px-5 py-5">{thousandsSeparator({number:DistributionList.maxSupply})}</td>
                <td/>
                <td className="px-5 py-5">$ {thousandsSeparator({number:DistributionList.totalDiluted})}</td>
                <td/>
                <td className="px-5 py-5">$ {thousandsSeparator({number:DistributionList.initailCap})}</td>
              </tr>
              </tbody>
            </table>
            </MotionWrapper>
            <ScrollBar orientation="horizontal" />
          </ScrollArea>
        </Container>
        </MotionTriggerWrapper>
        {/*
             */}
      </section>
    );
}