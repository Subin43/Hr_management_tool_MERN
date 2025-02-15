// SideMenuBar Component
interface SideMenuBarProps {
    icons?: string;
    label: string;
    path?: string;
    subMenu?: SideMenuBarProps[];
  }
  
  export const SideMenuBar: SideMenuBarProps[] = [
    {
      icons: "/home.svg",
      label: "Home",
      path: "/",
    },
    {
      icons: "/wifi-tethering.svg",
      label: "Engage",
      path: "/engage",
    },
    {
      icons: "/workflow.svg",
      label: "My Worklife",
      subMenu: [
        {
          label: "Kudos",
          path: "/kudos",
        },
        {
          label: "Feedback",
          path: "/feedback",
        },
      ],
    },
    {
      icons: "/task.svg",
      label: "To-do",
      subMenu: [
        {
          label: "Tasks",
          path: "/tasks",
        },
        {
          label: "Review",
          path: "/reviews",
        },
      ],
    },
    {
      icons: "/document.svg",
      label: "Document Center",
      path: "/documents",
    },
    {
      icons: "/people.svg",
      label: "People",
      path: "/people",
    },
    {
      icons: "/request.svg",
      label: "Request Hub",
      path: "/hub-request",
    },
    {
      icons: "/workflow.svg",
      label: "Workflow Delegates",
      path: "/workflow",
    },
  ];