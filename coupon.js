
if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(showPosition);
} else {
    console.log("Geolocation is not supported by this browser.");
}


function showPosition(position) {
    let l = 13;
    var latitude = position.coords.latitude.toFixed(l);
    var longitude = position.coords.longitude.toFixed(l);
    console.log(latitude + " " + longitude);
    var url = `https://api.geoapify.com/v2/place-details?lat=12.964069144459927&lon=77.58636903572244&features=radius_500,radius_500.restaurant&apiKey=cc679a3ea0d04d2fa869f3ec7e273909`;
    console.log(url);
    fetch(url)
        .then(response => response.json())
        .then(result => xyz(result))
        .catch(error => console.log('error', error));
}

function callAPI() {
    var url = '';
    fetch(`https://api.unsplash.com/photos/random?client_id=v6fieI6ucUcziClZz7TdAOm_B-1cRTKUGvCBem_xzmw&query=food`)
        .then(response => response.json())
        .then(result => url = result)
        .catch(error => console.log('error', error));
    return url;
}
function xyz(data) {
    var x;
    x = data;
    console.log(data);
    let first = true;
    for (let i = 1; i < data.features.length; i++) {
        let url = '';

        first = false;
        console.log(data.features[i].properties);
        let name = data.features[i].properties.name;
        let temp = '';
        temp += '<br>';
        temp += 'Neighbourhood: ';
        temp += data.features[i].properties.neighbourhood;
        temp += '<br>';
        temp += 'street: ';
        temp += data.features[i].properties.street;
        temp += '<br>';
        temp += 'District: ';
        temp += data.features[i].properties.district;
        temp += '<br>';
        temp += 'PostCode: ';
        temp += data.features[i].properties.postcode;
        temp += '<br>';
        temp += 'Address: ';
        temp += data.features[i].properties.address_line2;
        temp += '<br>';
        temp += 'State_district: ';
        temp += data.features[i].properties.state_district;
        temp += '<br>';
        temp += '<br>';
        temp += '<br>';
        var no = Math.floor((Math.random() * 15) + 1);
        var elemDiv = document.createElement('div');
        var discount = Math.floor((Math.random() * 60) + 1);
        var amount = Math.floor((Math.random() * 500) + 1);
        elemDiv.className = 'col-lg-4 col-md-6 col-sm-12 mb-5';
        elemDiv.innerHTML = `<div class="card" >
                                <h2>${name}</h2>
                                <img src="Images-1/Food-${no}.jpg"
                                    class="card-img-top" alt="...">
                                <div class="card-body">
                                    <h3 class="card-title">${discount}% Off on above
                                    <span>&#8377;</span>${amount}</h3>
                                    <p class="card-text">${temp}</p>
                                    
                                </div>
                            </div>`;
        document.getElementById('parent').appendChild(elemDiv);
    }
}

var requestOptions = {
    method: 'GET',
};

