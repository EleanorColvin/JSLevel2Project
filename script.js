

roomVisits = 0;
function initialize()
        {
            nav = document.getElementById("linkList");

            sessionStorage.script="Instead of listening to common sense, you decide it is a great idea to enter the bloody room. There is blood everywhere - splattered on the floors, the walls. Out of curiosity, you touch the walls and look at your hand in shock as you realize the blood is still wet. As you flee from the room, you see a trapdoor on the ground rattling.";
            visitsOut = document.getElementById("visits");
            scriptOut = document.getElementById("script");

            if(!sessionStorage.numVisits)
                sessionStorage.numVisits=1;
            else
                sessionStorage.numVisits++;
            roomVisits = sessionStorage.numVisits;
            if (roomVisits == 2){
                sessionStorage.script="You enter the bloody room for a second time. You should have known this was a bad idea. Nobody know what happened in that room, but you were never seen again.";
            }
            console.log(sessionStorage.script);
            display();
        }
        function display()
        {
            scriptOut.innerHTML=sessionStorage.script;
            if(roomVisits == 2)
                nav.style.display = "none";
        }




