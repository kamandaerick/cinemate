import { AiFillHome } from "react-icons/ai";
import { BiSolidMoviePlay } from "react-icons/bi";
import { ImTv } from "react-icons/im";
 // Define an array of navigation items
const navigation = [
  {
    label: 'Home',
    href: '/',
    id: 0,
    icon: <AiFillHome />
  },
  {
    label: "Movies",
    href: "movies",
    id: 1,
    icon: <BiSolidMoviePlay />
  },
  {
    label: "TV Shows",
    href: "tv",
    id: 2,
    icon: <ImTv />
  }
];

export default navigation;