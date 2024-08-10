import { RiInstagramLine, RiGithubFill, RiLinkedinBoxLine, RiDiscordLine } from 'react-icons/ri';
import { LiaSteam, LiaFlickr } from "react-icons/lia";
import { TbBrandDrupal } from "react-icons/tb";
import { SiDailydotdev } from "react-icons/si";

const socialsData = [
  {
    url: 'https://github.com/alextrandev',
    Icon: RiGithubFill,
    toolTip: ["GitHub", "@alextrandev"],
  },
  {
    url: 'https://www.linkedin.com/in/tduclong',
    Icon: RiLinkedinBoxLine,
    toolTip: ["LinkedIn", "@tduclong"],
  },
  {
    url: 'https://www.drupal.org/u/alextran',
    Icon: TbBrandDrupal,
    toolTip: ["Drupal.org", "@alextran"],
  },
  {
    url: 'https://app.daily.dev/alextran53',
    Icon: SiDailydotdev,
    toolTip: ["Daily.dev", "@alextran53"],
  },
  {
    url: 'https://www.instagram.com/dk10119/',
    Icon: RiInstagramLine,
    toolTip: ["Instagram", "@dk10119"],
  },
  {
    url: 'https://www.flickr.com/photos/longdk/',
    Icon: LiaFlickr,
    attr: "text-2xl max-sm:text-3xl",
    toolTip: ["Flickr", "@longdk"],
  },
  {
    url: 'http://discord.com/users/222010520813699072',
    Icon: RiDiscordLine,
    toolTip: ["Discord", "@kaxc"],
  },
  {
    url: 'https://steamcommunity.com/id/kaxc/',
    Icon: LiaSteam,
    toolTip: ["Steam", "@kaxc"],
  },
];

export default socialsData;