import * as React from "react";
import { TeamMemberType } from "@/components/data-providers/team-members-provider";
import { Heading } from "@/components/ui/heading";
import { Text } from "@/components/ui/text";
import { cn } from "@/lib/utils";

import RenderImage from "@/components/elements/image";

type TeamMemberCardProps = React.HTMLAttributes<HTMLDivElement> & {
  teamMember: TeamMemberType;
};

const TeamMemberCard = React.forwardRef<HTMLDivElement, TeamMemberCardProps>(
  ({ className, teamMember, ...props }, ref) => {
    return (
      <div className={cn("p-5 pb-0", className)} ref={ref} {...props}>
        <Heading as="h3" size="32">
          {teamMember.name}
          <span>&nbsp;</span>
          {teamMember.surname}
        </Heading>
        <Text>{teamMember.title}</Text>
        <div className="mt-5 aspect-square w-full relative">
          { teamMember.portrait.src && (
            <RenderImage
              alt={teamMember.name + " " + teamMember.surname}
              src={teamMember.portrait.src}
            />
          )}
        </div>
      </div>
    );
  },
);
TeamMemberCard.displayName = "TeamMemberCard";

export { TeamMemberCard };
