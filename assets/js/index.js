var currency = "MYR";
var url = "https://api.coinbase.com/v2/exchange-rates?currency=" + currency;
var twd = document.querySelector(".twd");

function makeRequest() {
  xhr = new XMLHttpRequest();

  xhr.onload = function() {
    var response = JSON.parse(this.responseText);
    twd.innerHTML = response.data.rates.TWD + " TWD";
  };
  xhr.open("GET", url, true);
  xhr.setRequestHeader("CB-VERSION", "2018-01-01");
  xhr.send();
}

makeRequest();