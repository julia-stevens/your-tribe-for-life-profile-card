<script>
    // COMPONENTS
    import ProjectLink from "$lib/components/ProjectLink.svelte";

    // ASSETS
	import avatarLight from "$lib/assets/avatar-lightmode.svg";
	import avatarHeadLight from "$lib/assets/avatar-head-lightmode.svg";
	import iconLight from "$lib/assets/icon-lightmode.svg";
    
    // DATA
    let { data } = $props(); 
    const member = data.member; 

    // PROJECTS
    const projects = [
        {
            name: member.custom.projectName1Sem3,
            href: member.custom.projectLink1Sem3
        },
        {
            name: member.custom.projectName2Sem3,
            href: member.custom.projectLink2Sem3
        }
    ]
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
        {#each projects as project}
        <ProjectLink
            href={project.href}
            name={project.name}
        />
        {/each}
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