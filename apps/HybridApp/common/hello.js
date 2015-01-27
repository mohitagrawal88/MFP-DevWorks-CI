function invokeAdapterProcedure() {
    console.log("Invoking procedure...");
    WL.Client.invokeProcedure({
        adapter: "HelloWorld",
        procedure: "hello",
        parameters: []
    },{
        onSuccess: function(result) {
            console.log("Success callback", result);
            // The adapter returns an object.  This is mapped to result.invocationResult
            // Log the message property of it
            alert(result.invocationResult.result);

        },
        onFailure: function(error) {
            console.error("Failure callback", error);
            // Something went wrong.  Throw an alert
            alert("ERROR", error);
        }
    });
}

function logAnalytics() {
    console.log("Logging analytics...");
    // Log to analytics
    WL.Analytics.log("Hello World @ " + new Date().toString()).then(function() {
        // "Flush" the analytics log stack to the server - normally this is done lazily
        // In a production app, do this with full understanding of the server and client load implications
        // This must be done after the log() promise has resolved.  Otherwise, a race condition causes the log to be lost.
        WL.Analytics.send();
    });

    console.log("Analytics logged.");
}
