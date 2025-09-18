export async function load({ url }) {
    const memberId = 156; 
    const memberResponse = await fetch (`https://fdnd.directus.app/items/person?fields=*,squads.squad_id.name,squads.squad_id.cohort,squads.squad_id.tribe.name&filter[id][_eq]=${memberId}`);
    const memberData = await memberResponse.json();

    let member = memberData.data[0]; // haal eerste item op

    try { 
        if (typeof member.custom === "string") { // als string
            member.custom = JSON.parse(member.custom); // parse naar json data
        }
    } catch (error) { 
        member.custom = {}; 
    }

    return {member: memberData.data[0]};
}