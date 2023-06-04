<!--<script>-->
<!--    import Accordion from "$lib/components/Accordion.svelte";-->
<!--</script>-->

<!--<Accordion/>-->

<script>
    // import faq from "../data/faq.json";
    import Accordion from "$lib/components/Accordion.svelte";
    let active = 0;
    function changeActive(event) {
        active = event.detail;
    }

    const faq = [
        {
            "question": "How many team members can I invite?",
            "answer": "You can invite up to 2 additional users on the Free plan. There is no limit on team members for the Premium plan.",
            "active": true
        },
        {
            "question": "What is the maximum file upload size?",
            "answer": "No more than 2GB. All files in your account must fit your allotted storage space.",
            "active": false
        },
        {
            "question": "How do I reset my password?",
            "answer": "Click “Forgot password” from the login page or “Change password” from your profile page. A reset link will be emailed to you.",
            "active": false
        },
        {
            "question": "Can I cancel my subscription?",
            "answer": "Yes! Send us a message and we'll process your request no questions asked.",
            "active": false
        },
        {
            "question": "Do you provide additional support?",
            "answer": "Chat and email support is available 24/7. Phone lines are open during normal business hours.",
            "active": false
        }
    ]
</script>

<div class="flex min-h-screen overflow-x-hidden justify-center items-center">
    <div class="w-full mx-8 sm:mx-20 max-w-2xl lg:max-w-7xl lg:flex justify-center relative">
        <div class="bg-theme-light-gray-blue rounded-3xl inset-shadow my-10 md:mb-20 md:mt-0 svg-background lg:flex relative">
            <div class="mx-auto py-12 px-8 lg:py-24 sm:px-16 xl:px-24">
                <div class="mx-auto lg:w-96 xl:w-128">
                    <h2 class="text-center lg:text-left text-5xl font-extrabold text-theme-dark-blue">
                        FAQ
                    </h2>
                    <dl class="mt-6 space-y-6 divide-y">
                        {#each faq as item, i}
                            <Accordion { item } { i } {active} on:activeState="{changeActive}"/>
                        {/each}
                    </dl>
                </div>
            </div>
        </div>
    </div>
</div>