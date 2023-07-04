import HomeIcon from "@mui/icons-material/Home";
import PersonIcon from "@mui/icons-material/Person";
import CodeIcon from "@mui/icons-material/Code";
import WorkIcon from "@mui/icons-material/Work";
import BookIcon from "@mui/icons-material/Book";
import PermContactCalendarIcon from "@mui/icons-material/PermContactCalendar";

export const navBarLinks = [
  {
    linkName: "HOME",
    linkImage: <HomeIcon />,
    url: "/",
  },
  {
    linkName: " ABOUT US",
    linkImage: <PersonIcon />,
    url: "/about",
  },
  {
    linkName: " REVIEWS",
    linkImage: <CodeIcon />,
    url: "/skills",
  },
  {
    linkName: "REGISTRATION",
    linkImage: <WorkIcon />,
    url: "/services",
  },
  {
    linkName: " AFFILIATED UNITS",
    linkImage: <BookIcon />,
    url: "/blog",
  },
  {
    linkName: "    TEAM",
    linkImage: <PermContactCalendarIcon />,
    url: "/contact",
  },
  {
    linkName: "     STUDENT PREMIER LEAGUE",
    linkImage: <PermContactCalendarIcon />,
    url: "/contact",
  },
  {
    linkName: "     PLAYER RECORDS",
    linkImage: <PermContactCalendarIcon />,
    url: "/contact",
  },
];
