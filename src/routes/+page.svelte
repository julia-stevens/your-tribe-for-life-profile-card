<script>
    let { data } = $props(); // rune die data doorgeeft tussen page.server.js en page.svelte ("magische property")

    const member = data.member; 
</script>

<main>
    <header>
        <button>
            [color mode]
            <img 
                src="icon-lightmode.svg" 
                alt="Change to darkmode"
                width="50"
                height="50"
                style="object-fit: cover;"
            >
        </button>
    </header>

    <section class="introduction">
        <h1>
            <span>Hello.</span>
            <span>I'm Julia.</span>
        </h1>
        <img 
            src="avatar-lightmode.svg" 
            alt="Avatar"
            width="100"
            height="100"
            style="object-fit: cover;"
        >
    </section>

    <section class="about">
        <h2>
            About
        </h2>
        <p>
            {member.custom.bioSem3}
        </p>
    </section>

    <section class="projects">
        <div class="projects_description">
            <h2>
                Projects
            </h2>
            <p>
                {member.custom.projectsSem3}
            </p>
        </div>
        <div class="projects_content">
            <a 
                href="{member.custom.projectLink1Sem3}"
            >
                <article>
                    <h3>{member.custom.projectName1Sem3}</h3>
                    <img 
                        src="arrow-link-lightmode.svg" 
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
                <article>
                    <h3>{member.custom.projectName2Sem3}</h3>
                    <img 
                        src="arrow-link-lightmode.svg" 
                        alt=""
                        width="20"
                        height="20"
                        style="object-fit: cover;"
                    >                    
                </article>
            </a>
        </div>
    </section>

    <section class="funfacts">
        <h2>Fun facts</h2>
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
    </section>

    <footer>
        <div class="to-top">
            <a 
                href=""
            >
                to top
            </a>
        </div>
        <div class="link">
            <a 
                href=""
            >
                github
                <img 
                    src="arrow-link-lightmode.svg" 
                    alt=""
                    width="20"
                    height="20"
                    style="object-fit: cover;"
                >
            </a>
        </div>
        <div class="copyright">
            <p>© Julia Stevens</p>
        </div>
        <div class="footer-image">
            <img 
                src="avatar-head-lightmode.svg" 
                alt="Avatar"
                width="50"
                height="50"
                style="object-fit: cover;"
            >
        </div>
    </footer>
</main>