<script>
    export let textColor,
        color,
        width,
        height;

    export let iconClass, labelText, labelSize;
    export let container;
</script>

<link rel="stylesheet" href="https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css"/>

<div
        class="{container}
                {labelSize ? labelSize : 'text-xs '}
                {width ? width : 'px-3'}
                {height ? height : 'py-1'}
                {color ? color : 'bg-blue-200'}
                {textColor ? textColor : 'text-blue-700'}">

    <i class="{`${iconClass ? 'mr-1 ' + iconClass : ''}`}" ></i>
    {labelText}
</div>
