fetch(
    "https://studip-test.uos.de/api.php/user",
    {
        method: "GET",
        credentials: "include"
    }
)

fetch(
    "https://studip-test.uos.de/api.php/blubber/postings",
    {
        method: "POST",
        credentials: "include",
        headers: new Headers({
            "Content-Type": "application/json;charset=utf-8"
        }),
        body: JSON.stringify({"content":"blubbi","context_type":"public"})
    }
)

fetch(
    "https://studip-test.uos.de/plugins.php/argonautsplugin/blubber-postings/e6017903d6cb0e212613a614e5939d92",
    {
        method: "GET",
        credentials: "include"
    }
).then(function(response) { console.log("fetch posting", response) }).catch(function (error) { console.log("error", error) })

fetch(
    "https://studip-test.uos.de/plugins.php/argonautsplugin/blubber-postings/e6017903d6cb0e212613a614e5939d92/comments",
    {
        method: "POST",
        credentials: "include",
        headers: new Headers({
            "Content-Type": "application/vnd.api+json"
        }),
        body: JSON.stringify({ data: { type: "blubber-postings", attributes: { content: "a comment blubb" } } })
    }
).then(function(response) { console.log("post comment", response) }).catch(function (error) { console.log("error", error) })
