<script>
    // IMPORT ASSETS
	import "$lib/assets/style.css";
	import favicon from "$lib/assets/avatar-head-lightmode.svg";
	import arrowLinkLight from "$lib/assets/arrow-link-lightmode.svg";
	import avatarLight from "$lib/assets/avatar-lightmode.svg";
	import avatarHeadLight from "$lib/assets/avatar-head-lightmode.svg";
	import iconLight from "$lib/assets/icon-lightmode.svg";

    // DATA
	let { data, children } = $props();
	const member = data.member; 
</script>

<!-- HEAD -->
<svelte:head>
	<title>{member.name}</title>
	<link rel="icon" href={favicon} />

    <!-- FONT -->
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Baloo+Thambi+2:wght@400..800&display=swap" rel="stylesheet">

    <style>
        body {
            font-family: var(--font-primary);
            color: var(--text-primary);
            background-color: var(--bg-primary);
        }
    </style>
</svelte:head>

<!-- HEADER -->
<header>
	<button class="column">
		Change theme
		<img  
			src={iconLight} 
			alt="Change to darkmode"
			width="50"
			height="50"
			style="object-fit: cover;"
		>
	</button>
</header>

<!-- CHILDREN -->
<main class="column">
	{@render children?.()}
</main>

<!-- FOOTER -->
<footer class="column">
	<div class="footer-inner row">
		<div class="to-top row">
			<a 
				href="/"
			>
				to top
			</a>
		</div>
		<div class="link row">
			<a 
				href="{member.github_handle}"
				class="row"
			>
				github
				<img 
					src={arrowLinkLight} 
					alt=""
					width="20"
					height="20"
					style="object-fit: cover;"
				>
			</a>
		</div>
		<div class="copyright row">
			<p>© Julia Stevens</p>
		</div>
	</div>
	<div class="footer-image row">
		<img 
			src={avatarHeadLight} 
			alt="Avatar"
			width="50"
			height="50"
			style="object-fit: cover;"
		>
	</div>
</footer>

<style>
	/* MAIN */
	main {
        gap: var(--gap-xl);
        margin: 0 auto;
    }

	/* HEADER */
	button {
        font-family: inherit;
        align-items: center;
        gap: var(--gap-xs);
    }

    button img {
        order: -1;
        width: 3rem;
        height: 3rem;
    }
    @media (prefers-color-scheme: dark) {
        button img {
            content: url("$lib/assets/icon-darkmode.svg");
        }
    }

	/* FOOTER */
    footer {
        --border: 2px solid var(--border-primary);

        width: 100%;
        gap: var(--gap-xl);
        position: relative; 
    }

    .footer-image {
        order: -1;
        width: 100%;
        max-width: 38rem;
        justify-content: center;
    }

    .footer-image img {
        width: 20vw;
        min-width: 3rem;
        max-width: 5rem;
        min-height: 3rem;
        height: 20vw;
        max-height: 5rem;
    }
    @media (prefers-color-scheme: dark) {
        .footer-image img {
            content: url("$lib/assets/avatar-head-darkmode.svg");
        }
    }
	
	footer .link a img {
		width: 1rem;
		height: 1rem;
	}

    footer .link a img {
        @media (prefers-color-scheme: dark) {
            content: url($lib/assets/arrow-link-darkmode.svg);
        }
    }

    .footer-inner {
        width: 100%;
        max-width: 38rem;
        justify-content: space-between;
        border-top: var(--border);
        border-left: var(--border);
        border-right: var(--border);
        position: relative; 
    }

    .footer-inner div {
        padding: .5em 1em;
        flex-grow: 1;
        align-items: center;
        justify-content: center;
    }

    footer .link a {
        gap: var(--gap-xs);
    }

    .to-top, .link {
        border-right: var(--border);
    }
</style>
