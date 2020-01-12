function hasOneDayPassed(){
  var date = new Date().toLocaleDateString();

  if( localStorage.yourapp_date == date ) 
      return false;

  localStorage.yourapp_date = date;
  return true;
}

function runOncePerDay(){
  // if( !hasOneDayPassed() ) return false;
  var el = document.getElementById('review_message');
  el.style.display = "block";
}

runOncePerDay();

document.addEventListener("DOMContentLoaded", function(event) { 
  // chrome.management.get('oeejgihfkcomhponniinblpniigdbfih', function (e) {
  //   if (e) {
  //       renderBlockedAlert("Test Extension");
  //   }
  // });
  
  document.getElementById('setBrandName').addEventListener("click", function() {
    let brandName = document.getElementById('brandName').value;
    if (brandName !== "") {
      chrome.storage.sync.set({'brandName': brandName}, function() {
        // console.log('Settings saved');
      });
      // Set it to empty.
      document.getElementById('brandName').value = "";
    }
  });

  // Download AliExpress product images : jfdmndkebgjnoecndabpkfpafgdhfjck
  chrome.management.get('jfdmndkebgjnoecndabpkfpafgdhfjck', function (e) {
    if (e) {
        renderBlockedAlert("Download AliExpress product images");
    }
  });
  // ePacket identification : mjbenjfenckimeljabijmkcchnbdgako
  chrome.management.get('mjbenjfenckimeljabijmkcchnbdgako', function (e) {
    if (e) {
        renderBlockedAlert("ePacket identification");
    }
  });
  // Dropship Easy : gpechnilofhbibjfgidlimoffopdghha
  chrome.management.get('gpechnilofhbibjfgidlimoffopdghha', function (e) {
    if (e) {
        renderBlockedAlert("Dropship Easy");
    }
  });
  // FeedBackify : bfabkefidfbafamnbnpgehckmegpjjnn
  chrome.management.get('bfabkefidfbafamnbnpgehckmegpjjnn', function (e) {
    if (e) {
        renderBlockedAlert("FeedBackify");
    }
  });
});

function renderBlockedAlert(extensionName) {
  var main = document.getElementById('main');
  main.innerHTML = "";
  main.innerHTML = "<h2 class='warning'>" +
              "You can't use this extension unless you uninstall " + extensionName + " extension ." +
          "</h2>" +
          "<h2 class='info'>" +
              "<i>You can't use this extension if one of this extensions is installed : <b>Download AliExpress product images</b>, <b>ePacket identification</b>, <b>Dropship Easy</b>, and <b>FeedBackify</b> you can replace them with our extensions <a target='_blank' href='http://www.dropshipping-ebay.com'>here</a> </i>" + 
          "</h2>";
}