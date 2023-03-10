document.addEventListener('DOMContentLoaded', function(){
	InfoKasser();
});

function InfoKasser()
{
    for ( var i = 0; i < document.querySelectorAll('.info').length; i++ )
    {
        document.querySelectorAll('.info')[i].addEventListener('click',InfoKasseSkift);
    }
}


function InfoKasseSkift()
{
    console.log(document.querySelector('.y').style.display + "funk ok");

if (document.querySelector('.y').style.display != "block") {
    document.querySelector('.y').style.display = "block"

} else {
    this.querySelector('.y').style.display = "none";
}

}

