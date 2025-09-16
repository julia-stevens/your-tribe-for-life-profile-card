export async function load({ url }) {
    const memberId = 156; 
    const memberResponse = await fetch (`https://fdnd.directus.app/items/person?fields=*,squads.squad_id.name,squads.squad_id.cohort,squads.squad_id.tribe.name&filter[id][_eq]=${memberId}`);
    const memberData = await memberResponse.json();

    let member = memberData.data[0];

    try { 
        if (typeof member.custom === "string") {
            member.custom = JSON.parse(member.custom);
        }
    } catch (error) { 
        member.custom = {}; 
    }

    return {member: memberData.data[0]};
}