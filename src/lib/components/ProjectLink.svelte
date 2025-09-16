<script>
    export let href = "#";
    export let name = "";
    import arrowLinkLight from "$lib/assets/arrow-link-lightmode.svg"; 
</script>

<a href={href}>
    <article class="row">
        <h3>{name}</h3>
        <img 
            src={arrowLinkLight} 
            alt="Arrow link"
            width="20"
            height="20"
            style="object-fit: cover;"
        >
    </article>
</a>

<style>
    article {
        justify-content: space-between;
        border: 2px solid var(--border-primary);
        width: 70vw;
        max-width: 20rem;
        padding: .5em 1em;
    }

    article img{
        width: 1rem;
        height: 1rem;
    }

    @media (prefers-color-scheme: dark) {
        article img {
            content: url("$lib/assets/arrow-link-darkmode.svg");
        }
    }
</style>
