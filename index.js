const map = L.map("iiif-map", {
    center: [0, 0],
    crs: L.CRS.Simple,
    zoom: 0,
});

const chamizalLayer = new L.tileLayer.iiif(
    "https://iiif.digitalcommonwealth.org/iiif/2/commonwealth:0r96fm23j/info.json"
).addTo(map);

map.on("moveend", () => {
    // returns 'southwest_lng,southwest_lat,northeast_lng,northeast_lat' of current view
    const currentBounds = map.getBounds().toBBoxString();

    // output current bounds to screen
    document.getElementById("current-bounds").innerText = currentBounds;
});

// document
//     .getElementById("zoom-to-legend")
//     .addEventListener("click", () => {
//         map.flyToBounds([
//             [-584, 12],
//             [-284, 312],
//         ]);
//     });

let bounds = [{
    name: "Minsk",
    desc: `German forces occupied Minsk, capital of the Belorussian Soviet Socialist 
    Republic (SSR) in the Soviet Union, shortly after the German invasion of the 
    Soviet Union in June 1941. During the German occupation, the western portion of 
    the Belorussian SSR became General Commissariat White Russia (Generalkommissariat 
        Weissruthenian), part of the Reich Commissariat Ostland View This Term in the 
        Glossary (Reichskommissariat Ostland), with Minsk as its capital.
        <br>
        <br>
    You can see here that the cartographer is equating the captial of Belarus with that
    of America. Utilizing the image of the White House on fire is a particularely powerful
    imagery. As Tyner puts it: <em>persuasion implied an appeal based on logic or
    inducement rather than false assersion</em>.`,
    loc: [
        [-334.75, 595.7243161679722],
        [-215.25, 762.9743161679722]
    ],
    img: 'images/minsk.jpeg'
}, {
    name: "Maikop",
    desc: `The German plan to launch another great summer offensive crystallized 
    in the early months of 1942. Hitler’s decision was influenced by his economists, 
    who mistakenly told him that Germany could not continue the war unless it obtained 
    petroleum supplies from the Caucasus. Hitler was the more responsive to such 
    arguments because they coincided with his belief that another German offensive 
    would so drain the Soviet Union’s manpower that the U.S.S.R. would be unable to 
    continue the war. His thinking was shared by his generals, who had been awed by 
    the prodigality with which the Soviets squandered their troops in the fighting 
    of 1941 and the spring of 1942. By this time at least 4,000,000 Soviet troops 
    had been killed, wounded, or captured, while German casualties totaled only 
    1,150,000.`,
    loc: [
        [-336.125, 352.25747895676943],
        [-216.625, 519.5074789567694]
    ],
    img: 'images/maikop.jpg'
}, {
    name: "Kaunas",
    desc: `Between 1920 and 1939, Kovno (Kaunas), located in central Lithuania, 
    was the country's capital and largest city. In 1939, it had a Jewish population 
    of approximately 32,000. This was about one-fourth of the city's total population. 
    Jews were concentrated in the city's commercial, artisan, and professional sectors.
    <br>
    <br>
    As the cartographer is highliting the baltic verion os the occupation, he is cleverly
    comparing Lithuania's largest city to that of the US. It is also a distance of 281km
    which is roughly the distance between DC and NY.`,
    loc: [
        [-310.625,654.6224097271677],
        [-191.125,821.8724097271677]
    ],
    img: 'images/kaunas.jpg'
}]

let currentSlide = 0;

$('#nbutton').click(function () {
    $('#pbutton').removeClass('hide')
    if (currentSlide > 0 && currentSlide <= bounds.length) {
        if (currentSlide === bounds.length) {
            currentSlide = 0
        }
        console.log(currentSlide)
        $('#current-text').html(bounds[currentSlide].desc)
        $('#current-image').attr('src', bounds[currentSlide].img)
        map.flyToBounds(bounds[currentSlide].loc)
        currentSlide = currentSlide + 1
    } else {
        currentSlide = currentSlide + 1
        console.log(currentSlide)
        $('#current-text').html(bounds[0].desc)
        $('#current-image').attr('src', bounds[0].img)
        map.flyToBounds(bounds[0].loc)
    }
})

$('#pbutton').click(function () {
    if (currentSlide === 0 || currentSlide <= bounds.length) {

    }
    currentSlide = currentSlide - 1
    console.log(currentSlide)
    $('#current-text').html(bounds[currentSlide].desc)
    $('#current-image').attr('src', bounds[currentSlide].img)
    map.flyToBounds(bounds[currentSlide].loc)
})