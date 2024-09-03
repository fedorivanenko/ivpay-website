import * as React from "react";

import {
  SocialType,
  SocialNamesType,
  getSocialByName,
} from "@/components/data-providers/socials-provider";
import { cn } from "@/lib/utils";

type SocialIconListProps = {
  socialsList: SocialNamesType[];
} & React.HTMLAttributes<HTMLUListElement>;

const SocialIconList = React.forwardRef<HTMLUListElement, SocialIconListProps>(
  ({ socialsList, ...props }, forwardRef) => {
    return (
      <ul ref={forwardRef} {...props} className="flex gap-5">
        {socialsList.map((value, index) => (
          <SocialIcon key={index} name={value}/>
        ))}
      </ul>
    );
  },
);
SocialIconList.displayName = "SocialIconList";

export type SocialIconProps = React.HTMLAttributes<HTMLLIElement> & {
  name: SocialNamesType;
}

const SocialIcon = React.forwardRef<HTMLLIElement, SocialIconProps>(
  ({ name, className, ...props }, forwardedRef) => {

    const social : SocialType | undefined = getSocialByName(name)
    if (social === undefined) {
      console.error(name, 'such a social doesnt exist')
      return null
    } 
    const IconComponent = social.icon;
    return (
      <li ref={forwardedRef} {...props}>
        <a
          target="_blank"
          href={social.link}
          className={cn("h-4 w-4 block", className)}
        >
          <IconComponent className="h-full w-full hover:fill-foreground/80"/>
        </a>
      </li>
    );
  },
);
SocialIcon.displayName = "SocialIcon";

export { SocialIconList, SocialIcon };
