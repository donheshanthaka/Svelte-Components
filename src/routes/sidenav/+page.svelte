<script>
    import SideNavigation from "$lib/components/SideNavigation.svelte";
    import {sideNavigationStyles} from "$lib/styles/sideNavigationStyles.js";

    const categories = [
        {
            name: 'Dashboard',
            icon: 'bx bx-home',
        },
        {
            name: 'Music',
            icon: 'bx bx-music',
        },
        {
            name: 'Drink',
            icon: 'bx bx-drink',
        },
        {
            name: 'Shopping',
            icon: 'bx bx-shopping-bag',
        },
        {
            name: 'Chat',
            icon: 'bx bx-chat',
        },
        {
            name: 'Profile',
            icon: 'bx bx-user',
        },
        {
            name: 'Logout',
            icon: 'bx bx-log-out',
        },
    ]

    const label = 'label';

    const CustomStyles = {
            hoverMenuColor: 'hover:bg-indigo-100',
            headingTextColor: 'text-indigo-500',
            hoverMenuTextColor: 'hover:text-gray-800',
            secondaryTextColor: 'text-gray-500',
            backgroundColor: 'bg-white',
            iconColor: 'text-gray-400'
        }

</script>

<SideNavigation {categories} {label} {...CustomStyles} {...sideNavigationStyles}/>