"use client";
import * as React from "react";
import { Container } from "@/components/layouts/container";
import { MotionWrapper } from "@/components/motion/motion-wrapper";
import { MotionTriggerWrapper } from "@/components/motion/motionTriggerWrapper";
import { Text } from "@/components/ui/text";
import { Heading } from "@/components/ui/heading";
import { TicTacToeGridLayout } from "@/components/layouts/tic-tac-toe-grid-layout";

import { teamMembersList } from "@/components/data-providers/team-members-provider";
import { TeamMemberCard } from "@/components/elements/team-member-card";

import { useMediaQuery } from "@/lib/use-media-querry";
import { Button } from "@/components/ui/button";
import { Icon } from "@/components/elements/icon";
import Link from "next/link";

export default function AboutTeamBlock() {
  const [isMobile, setIsMobile] = React.useState<boolean | null>(null);

  const isMobileQuery = useMediaQuery("(min-width: 1024px)");

  React.useEffect(() => {
    setIsMobile(isMobileQuery);
  }, [isMobileQuery]);

  return (
    <section id="about-team-block" className="py-20">
      {/**
       */}
       <MotionTriggerWrapper>
        <Container>
          <Heading
            as="h2"
            size="64"
            className="mb-5 ml-auto text-right"
          >
            Our Team
          </Heading>
          <TicTacToeGridLayout
            animated={false}
            maxRows={2}
            cols={isMobile ? 4 : 2}
          >
            {teamMembersList.map((teamMember) => (
              <TeamMemberCard key={teamMember.id} teamMember={teamMember} />
            ))}
          </TicTacToeGridLayout>
          <MotionWrapper>
            <div className="mt-10 grid grid-cols-1 lg:grid-cols-3 gap-2.5">
              <Heading as="h2" size="48" className="col-span-1 lg:col-span-2 max-w-[21ch]">
                Take a lead role in shaping the world of crypto payments
              </Heading>
              <div className="flex flex-col lg:items-end gap-2.5">
                <Text>Be a part of the future of payments today</Text>
                {/* TODO: Put correct link */}
                <Button size="sm" asChild className="max-w-min whitespace-nowrap">
                  <Link href="/">Join our team<Icon icon="ArrowUpRight"/></Link>
                </Button>
              </div>
            </div>
          </MotionWrapper>
        </Container>
        </MotionTriggerWrapper>
      {/**
       */}
    </section>
  );
}
