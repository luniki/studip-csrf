await fetch(
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
