import React from "react";

import {
  ChevronDownIcon,
  ShoppingBagIcon,
  UserGroupIcon,
} from "@heroicons/react/outline";
import {
  CalendarIcon,
  ClockIcon,
  DesktopComputerIcon,
  UsersIcon,
} from "@heroicons/react/solid";

import SidebarRow from "../sidebar-row/SidebarRow";

function Sidebar() {
  return (
    <div className="p-2 mt-5 max-w-[600px] xl:min-w-[300px]">
      <SidebarRow
        src="https://static.frontendmasters.com/assets/teachers/simpson/thumb@2x.jpg"
        title="Rajesh Jha"
      />
      <SidebarRow
        src="https://static.xx.fbcdn.net/rsrc.php/v3/y8/r/S0U5ECzYUSu.png"
        title="Friends"
      />
      <SidebarRow
        src="https://static.xx.fbcdn.net/rsrc.php/v3/yI/r/k0tRiO8UGxF.png"
        title="Welcome"
      />
      <SidebarRow
        src="https://static.xx.fbcdn.net/rsrc.php/v3/y5/r/PrjLkDYpYbH.png"
        title="Groups"
      />
      <SidebarRow
        src="https://static.xx.fbcdn.net/rsrc.php/v3/yU/r/D2y-jJ2C_hO.png"
        title="Marketplace"
      />
      <SidebarRow
        src="https://static.xx.fbcdn.net/rsrc.php/v3/y5/r/duk32h44Y31.png"
        title="Watch"
      />
      <SidebarRow
        src="https://static.xx.fbcdn.net/rsrc.php/v3/ys/r/8wTx0Eu2vRq.png"
        title="Events"
      />
      <SidebarRow
        src="https://static.xx.fbcdn.net/rsrc.php/v3/y8/r/he-BkogidIc.png"
        title="Memories"
      />
      <SidebarRow Icon={ChevronDownIcon} title="See More" />
    </div>
  );
}

export default Sidebar;
