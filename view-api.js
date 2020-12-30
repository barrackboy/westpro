const loadCharacters = async() => {
    try {
        const res = await fetch('http://uzoma.a2hosted.com/slavery/houses.json');
        hpCharacters = await res.json();

        displayCharacters(hpCharacters);

    } catch (err) {
        console.error(err);
    }
    console.log(hpCharacters.Apartments.Apartment);
};

const displayCharacters = (characters) => {
    const htmlString = hpCharacters.Apartments.Apartment
        .map((character) => {
            return `
            <li class="character">
                <h2 class="cityname">${character.City}</h2>
                <p>${character.HousingCompanyKey}</p>
                <p>${character.SupplementaryInformation}</p>
                <p>€${character.UnencumberedSalesPrice._}</p>
                <img src="${character.Picture1._}"></img> 
                





                <!--[if lte IE 8]>
                <script charset="utf-8" type="text/javascript" src="//js.hsforms.net/forms/v2-legacy.js"></script>
                <![endif]-->
                <script charset="utf-8" type="text/javascript" src="//js.hsforms.net/forms/v2.js"></script>
                <script>
                  hbspt.forms.create({
                    portalId: "5964221",
                    formId: "1bc688ef-fdc6-4d5a-8992-b9b7703d6c5f",
                    onFormReady: function ($form) {
                   $('input[name="web_url"]').text($('.cityname').text()).change();
                
                   }
                });



           

                </script>



            </li>
        `;
        })
        .join('');
    people.innerHTML = htmlString;
};

loadCharacters();