/* https://kapowaz.github.io/circle-flags/gallery */

//TODO: call the fs and to all other things automaticly

export type ISO3166_1_alpha_2_TwoLetterCountryCodes = 
| "af" | "ax" | "al" | "dz" | "as" | "ad" | "ao" | "ai" | "aq" | "ag" 
| "ar" | "am" | "aw" | "au" | "at" | "az" | "bs" | "bh" | "bd" | "bb" 
| "by" | "be" | "bz" | "bj" | "bm" | "bt" | "bo" | "bq" | "ba" | "bw" 
| "bv" | "br" | "io" | "bn" | "bg" | "bf" | "bi" | "cv" | "kh" | "cm" 
| "ca" | "ky" | "cf" | "td" | "cl" | "cn" | "cx" | "cc" | "co" | "km" 
| "cg" | "cd" | "ck" | "cr" | "ci" | "hr" | "cu" | "cw" | "cy" | "cz" 
| "dk" | "dj" | "dm" | "do" | "ec" | "eg" | "sv" | "gq" | "er" | "ee" 
| "sz" | "et" | "fk" | "fo" | "fj" | "fi" | "fr" | "gf" | "pf" | "tf" 
| "ga" | "gm" | "ge" | "de" | "gh" | "gi" | "gr" | "gl" | "gd" | "gp" 
| "gu" | "gt" | "gg" | "gn" | "gw" | "gy" | "ht" | "hm" | "va" | "hn" 
| "hk" | "hu" | "is" | "in" | "id" | "ir" | "iq" | "ie" | "im" | "il" 
| "it" | "jm" | "jp" | "je" | "jo" | "kz" | "ke" | "ki" | "kp" | "kr" 
| "kw" | "kg" | "la" | "lv" | "lb" | "ls" | "lr" | "ly" | "li" | "lt" 
| "lu" | "mo" | "mg" | "mw" | "my" | "mv" | "ml" | "mt" | "mh" | "mq" 
| "mr" | "mu" | "yt" | "mx" | "fm" | "md" | "mc" | "mn" | "me" | "ms" 
| "ma" | "mz" | "mm" | "na" | "nr" | "np" | "nl" | "nc" | "nz" | "ni" 
| "ne" | "ng" | "nu" | "nf" | "mp" | "no" | "om" | "pk" | "pw" | "ps" 
| "pa" | "pg" | "py" | "pe" | "ph" | "pn" | "pl" | "pt" | "pr" | "qa" 
| "mk" | "ro" | "ru" | "rw" | "re" | "bl" | "sh" | "kn" | "lc" | "mf" 
| "pm" | "vc" | "ws" | "sm" | "st" | "sa" | "sn" | "rs" | "sc" | "sl" 
| "sg" | "sx" | "sk" | "si" | "sb" | "so" | "za" | "gs" | "ss" | "es" 
| "lk" | "sd" | "sr" | "sj" | "se" | "ch" | "sy" | "tw" | "tj" | "tz" 
| "th" | "tl" | "tg" | "tk" | "to" | "tt" | "tn" | "tr" | "tm" | "tc" 
| "tv" | "ug" | "ua" | "ae" | "gb" | "us" | "um" | "uy" | "uz" | "vu" 
| "ve" | "vn" | "vg" | "vi" | "wf" | "eh" | "ye" | "zm" | "zw" | "eu";

import brIcon from '@/resources/countries/br.svg'
import esIcon from '@/resources/countries/es.svg'
import deIcon from '@/resources/countries/de.svg'
import gbIcon from '@/resources/countries/gb.svg'
import inIcon from '@/resources/countries/in.svg'
import ptIcon from '@/resources/countries/pt.svg'

export type CountryType = React.HTMLAttributes<HTMLDivElement> & {
    code: ISO3166_1_alpha_2_TwoLetterCountryCodes
    countryName: string;
    icon?: React.FC<React.SVGProps<SVGSVGElement>>
  };

export const countryData: CountryType[] = [
    { 
      code: "gb", 
      countryName: "UK", 
      icon: gbIcon
    },
    { 
      code: "es", 
      countryName: "Spain", 
      icon: esIcon
    },
    { 
      code: "br", 
      countryName: "Brazil", 
      icon: brIcon
    },
    { 
      code: "in", 
      countryName: "India", 
      icon: inIcon
    },
    { 
      code: "de", 
      countryName: "Germany", 
      icon: deIcon
    },
    { 
      code: "pt", 
      countryName: "Portugal", 
      icon: ptIcon
    },
  ] as const;

