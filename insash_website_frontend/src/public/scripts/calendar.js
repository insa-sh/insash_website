// TODO : 
// - Create a calendar for the Club Info 
// - Sync the website with it


// FONCTIONS EN ATTENDANT

// obtenir numero du jour actuel
function getDate() {
    let date = new Date();
    return date.getDate();
}

// obtenir les trois premieres lettres du mois
function getMonth() {
    let date = new Date();
    let month = date.getMonth();
    let months = ["JAN", "FEV", "MAR", "AVR", "MAI", "JUIN", "JUIL", "AOUT", "SEP", "OCT", "NOV", "DEC"];
    return months[month];
}