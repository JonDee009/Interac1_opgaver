document.addEventListener('DOMContentLoaded', function(){
    MenuPunktAktiv();
    });

    function MenuPunktAktiv()
 
let current = "" + window.location; 
let nav = document.querySelector('#HovedMenu');
let anchors = nav.querySelector('a');
 
if( current.search( ".html" ) == -1 )
{
current = current + "index.html";
}
 
for ( let i = 0; i < anchor.length; i++ )
{
if( current.toLowerCase() == anchor[i].href.toLowerCase() )
{
anchor[i].className = "active";
}
}