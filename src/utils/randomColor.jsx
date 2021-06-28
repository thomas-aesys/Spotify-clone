export function randomColors() {
    let random1 = Math.floor(Math.random()*200) ;
    let random2 = Math.floor(Math.random()*200) ;
    let random3 = Math.floor(Math.random()*200) ;

    return "rgb(" + random1 + "," + random2 + "," + random3 + ")";
}