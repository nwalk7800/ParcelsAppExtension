searchPacelsApp = function(word){
  var query = word.selectionText;
  chrome.tabs.create({url: "https://parcelsapp.com/en/tracking/" + query});
};

chrome.contextMenus.create({
  title: "Search ParcelsApp",
  contexts:["selection"],
  onclick: searchPacelsApp
});