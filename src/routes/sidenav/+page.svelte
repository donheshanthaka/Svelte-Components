<script>
    import SideNavigation from "$lib/components/SideNavigation.svelte";

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

    const name = 'name';

    const styles = {
            primaryColor: 'bg-indigo-100',
            secondaryColor: '',
            headingTextColor: 'text-indigo-500',
            primaryTextColor: 'text-gray-800',
            secondaryTextColor: 'text-gray-500',
            backgroundColor: 'bg-white',
            iconColor: 'text-gray-400'
        }

</script>

<SideNavigation {categories} {name} {styles}/>