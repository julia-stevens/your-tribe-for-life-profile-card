<script>
    import arrowLinkLight from "$lib/assets/arrow-link-lightmode.svg";
	import avatarLight from "$lib/assets/avatar-lightmode.svg";
	import avatarHeadLight from "$lib/assets/avatar-head-lightmode.svg";
	import iconLight from "$lib/assets/icon-lightmode.svg";
    
    let { data } = $props(); 
    const member = data.member; 
</script>
    <section class="introduction">
        <h1 class="column">
            <span>Hello.</span>
            <span>I'm Julia.</span>
        </h1>
        <img 
            src={avatarLight} 
            alt="Avatar"
            width="100"
            height="100"
            style="object-fit: cover;"
        >
    </section>

    <section class="about column">
        <h2>
            About
        </h2>
        <p>
            {member.custom.bioSem3}
        </p>
    </section>

    <section class="projects column column">
        <div class="projects_description column">
            <h2>
                Projects
            </h2>
            <p>
                {member.custom.projectsSem3}
            </p>
        </div>
        <div class="projects_content column">
            <a 
                href="{member.custom.projectLink1Sem3}"
                
            >
                <article class="row">
                    <h3>{member.custom.projectName1Sem3}</h3>
                    <img 
                        src={arrowLinkLight} 
                        alt=""
                        width="20"
                        height="20"
                        style="object-fit: cover;"
                    >
                </article>
            </a>
            <a 
                href="{member.custom.projectLink2Sem3}"
                
            >
                <article class="row">
                    <h3>{member.custom.projectName2Sem3}</h3>
                    <img 
                        src={arrowLinkLight} 
                        alt=""
                        width="20"
                        height="20"
                        style="object-fit: cover;"
                    >                    
                </article>
            </a>
        </div>
    </section>

    <section class="funfacts column">
        <h2>Fun facts</h2>

        <div class="funfacts-inner">
            <dl>
                <dt>Favorite color</dt>
                <dd>{member.fav_color}</dd>
            </dl>
            <dl>
                <dt>Favorite Emoji</dt>
                <dd>{member.fav_emoji}</dd>
            </dl>
            <dl>
                <dt>Favorite tag</dt>
                <dd>{member.fav_tag}</dd>
            </dl>
            <dl>
                <dt>Favorite feature</dt>
                <dd>{member.fav_feature}</dd>
            </dl>
            <dl>
                <dt>Favorite attribute</dt>
                <dd>{member.fav_attribute}</dd>
            </dl>
        </div>
    </section>


<style>
    /* INTRODUCTION */
    .introduction {
        position: relative; 
    }
    
    .introduction img {
        width: 10rem;
        height: auto;
    }
    @media (prefers-color-scheme: dark) {
        .introduction img {
            content: url("$lib/assets/avatar-darkmode.svg");
        }
    }

    /* ABOUT */
    .about, .projects_description, .funfacts {
        gap: var(--gap-m);
    }

    .projects, .projects_content {
        gap: var(--gap-s);
    }

    .projects article {
        justify-content: space-between;
        border: 2px solid var(--border-primary);
        width: 70vw;
        max-width: 20rem;
        padding: .5em 1em;
    }

    .projects article img{
        width: 1rem;
        height: 1rem;
    }

    @media (prefers-color-scheme: dark) {
        .projects article img {
            content: url("$lib/assets/arrow-link-darkmode.svg");
        }
    }

    /* FUN FACTS */
    .funfacts {
        width: 100%;
        max-width: 30rem;
    }

    .funfacts dl {
        display: flex; 
        justify-content: space-between;
    }
    
    .funfacts dt {
        color: var(--highlight-primary);
        font-weight: 800;
    }
</style>