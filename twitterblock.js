CmdUtils.CreateCommand({
       name: "twitter-block",
       takes: {"username": noun_arb_text},

execute: function( name ) {
       var baseUrl = "http://twitter.com/blocks/confirm/";
       var url = name.text;

       var urlString = baseUrl + url;
       Utils.openUrlInBrowser(urlString);

 }
})