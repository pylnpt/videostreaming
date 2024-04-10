import { create } from 'zustand'

interface SideBarContent {
    collapsed : boolean,
    onExpand : () => void;
    onCollapse : () => void;
}

const useSideBar = create<SideBarContent>((set) => ({ 
    collapsed: false,
    onExpand: () => set(() => ({ collapsed: false })),
    onCollapse: () => set(() => ({ collapsed: true })),
}));

export default useSideBar;