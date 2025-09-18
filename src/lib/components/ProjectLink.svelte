<script>
    export let href = "#";
    export let name = "";
    export let even = true; 
    import arrowLinkLight from "$lib/assets/arrow-link-lightmode.svg"; 
</script>

<a 
    href={href} 
    class:even={even} 
    class:odd={!even}>
        <article class="row">
            <h3>{name}</h3>
            <img 
                src={arrowLinkLight} 
                alt="Arrow link"
                width="20"
                height="20"
            >
        </article>
</a>

<style>
    article {
        justify-content: space-between;
        border: 2px solid var(--border-primary);
        width: 70vw;
        max-width: 15rem;
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

    a.even article {
        --border-radius: 350px 50px 400px 30px / 40px 300px 60px 420px; 
        border-radius: var(--border-radius);
    }

    a.odd article {
        --border-radius: 500px 30px 250px 90px / 70px 420px 60px 350px; 
        border-radius: var(--border-radius);
    }
</style>

