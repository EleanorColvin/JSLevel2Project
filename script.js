exitKey = false;
function initialize()
        {
            nav = document.getElementById("linkList");
            links1 = document.getElementById("links1");
            links2 = document.getElementById("links2");
            exit1 = document.getElementById("exit1");
            exit2 = document.getElementById("exit2");

            sessionStorage.script="Instead of listening to common sense, you decide it is a great idea to enter the bloody room. There is blood everywhere - splattered on the floors, the walls. Out of curiosity, you touch the walls and look at your hand in shock as you realize the blood is still wet. As you flee from the room, you see a trapdoor on the ground rattling.";
            scriptOut = sessionStorage.script;
            keyScript = document.getElementById("keyScript");
            exitScript = document.getElementById("exitScript");
            sessionStorage.exitKey = false;

            if(!sessionStorage.numVisits)
                sessionStorage.numVisits=1;
            else
                sessionStorage.numVisits++;
            roomVisits = sessionStorage.numVisits;
            if (roomVisits == 2){
                sessionStorage.script="You enter the bloody room for a second time. You should have known this was a bad idea. Nobody know what happened in that room, but you were never seen again.";
            }
            console.log("INITIALIZED")
            display();
        }
        function display()
        {
            scriptOut.innerHTML=sessionStorage.script;
            if(roomVisits == 2)
                nav.style.display = "none";
        }
        function pickUpKey()
        {
            sessionStorage.exitKey = true;
            console.log("PICKED UP KEYY");
        }
        function atticKeyAction()
        {
            if (sessionStorage.exitKey === "true")
            {
                keyScript.innerHTML = "You have already looked around in here. Remember? - you have the key.";
                links1.style.display = "none";
                links2.style.display = "block";
            }
            console.log("i checked for a key and got " + sessionStorage.exitKey);
        }
        function checkIfKey()
        {
            if (sessionStorage.exitKey === "true")
            {
                console.log("yayy u escapeed");
                exitScript.innerHTML = "Finally! The exit. You try your key in the doorway and turn it. You sigh with relief, feeling the door swing open. You escape from the Haunted House and decide not to enter any random creepy buildings anytime soon";
                exit1.style.display = "none";
                exit2.style.display = "block";
            }
            else{
                console.log("not again bro");
                exitScript.innerHTML ="Hmmm... It looks like you need a key. Maybe you should try looking around some more. Are there any good hiding places here?";
            }
        }




