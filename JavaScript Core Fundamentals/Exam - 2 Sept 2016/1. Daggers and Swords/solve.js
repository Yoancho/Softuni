function f(arr) {

    console.log(`<table border="1">
<thead>
<tr><th colspan="3">Blades</th></tr>
<tr><th>Length [cm]</th><th>Type</th><th>Application</th></tr>
</thead>`);
    console.log(`<tbody>`);

    for (let blade of arr) {
        if (blade > 10) {

            let type = 'dagger';
            if (blade > 40) {
                type = 'sword';
            }

            blade = Math.floor(blade);

            let fingerIndex = blade % 5;
            let bladeType;
            switch (fingerIndex) {
                case 0 : {
                    bladeType = '*rap-poker';
                    break
                }
                case 1 : {
                    bladeType = 'blade';
                    break
                }
                case 2 : {
                    bladeType = 'quite a blade';
                    break
                }
                case 3 : {
                    bladeType = 'pants-scraper';
                    break
                }
                case 4 : {
                    bladeType = 'frog-butcher';
                    break
                }

            }

            console.log(`<tr><td>${blade}</td><td>${type}</td><td>${bladeType}</td></tr>`);
        }
    }
    console.log(`</tbody>`);
    console.log(`</table>`);
}


f([17.8, 19.4, 13, 55.8, 126.96541651, 3]);