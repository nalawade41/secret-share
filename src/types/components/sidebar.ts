interface SidebarProps {
    open: boolean;
    setOpen: (state: boolean) => void;
    data: string;
    reShare?: boolean;
    title: string;
    subTitle: string;
    isPersisted: boolean;
}

