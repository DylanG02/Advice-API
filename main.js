const advice = document.getElementById('advice');
const adviceId = document.getElementById('adviceId');



callApi = async () => {

    try {

        const response = (await fetch('https://api.adviceslip.com/advice'))

        if(response.ok) {
            const Response = await response.json();
             advice.innerHTML = `"${Response.slip.advice}"`;
             adviceId.innerHTML = `ADVICE #${Response.slip.id}`;
        }

    }  catch(error) {
            console.log(error)
    }
   
}

callApi();