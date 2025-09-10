<script>
    let { data } = $props(); // rune die data doorgeeft tussen page.server.js en page.svelte ("magische property")

    const member = data.member; 
</script>

<h1>Dit is het visitekaartje van {member.name}</h1>
