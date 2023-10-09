# Exercise 0.4

``` mermaid

sequenceDiagram
    participant browser
    participant server

    browser->>server: POST https://studies.cs.helsinki.fi/exampleapp/new_note
    activate server
    server-->>browser: HTTP Status Code: 302
    deactivate server

    browser->>server: GET https://studies.cs.helsinki.fi/exampleapp/notes
    activate server
    server-->>browser: HTML File
    deactivate server

    browser->>server: GET https://studies.cs.helsinki.fi/exampleapp/main.css
    activate server
    server-->>browser: the css file
    deactivate server

    browser->>server: GET https://studies.cs.helsinki.fi/exampleapp/main.js
    activate server
    server-->>browser: the JavaScript file
    deactivate server

    Note right of browser: The browser starts executing the JavaScript code that fetches the JSON from the server

    browser->>server: GET https://studies.cs.helsinki.fi/exampleapp/data.json
    activate server
    server-->>browser: [{ "content": "HTML is easy", "date": "2023-1-1" }, ... ]
    deactivate server

    Note right of browser: The browser executes the callback function that renders the notes

```

# Exercise 0.5

``` mermaid

sequenceDiagram
    participant SPA
    participant server

    SPA->>server: GET https://studies.cs.helsinki.fi/exampleapp/spa
    activate server
    server-->>SPA: HTML File
    deactivate server

    SPA->>server: GET https://studies.cs.helsinki.fi/exampleapp/main.css
    activate server
    server-->>SPA: CSS File
    deactivate server

    SPA->>server: GET https://studies.cs.helsinki.fi/exampleapp/spa.js
    activate server
    server-->>SPA: JAVASCRIPT File
    deactivate server

    Note right of SPA: The browser starts executing the JavaScript code that fetches the JSON from the server

    SPA->>server: GET https://studies.cs.helsinki.fi/exampleapp/data.json
    activate server
    server-->>SPA: [{ "content": "HTML is easy", "date": "2023-1-1" }, ... ]
    deactivate server

    Note right of SPA: The browser executes the callback function that renders the notes

```

# Exercise 0.6

``` mermaid

sequenceDiagram
    participant SPA
    participant server

    Note right of SPA: Default form action disabled.
    Note right of SPA: JavaScript creates a new note and appends to notes collection.
    Note right of SPA: JavaScript then redraws the notes on the Browser
    SPA->>SPA:  New note
    activate server

    SPA->>server: POST https://studies.cs.helsinki.fi/exampleapp/new_note_spa
    activate server
    server-->>SPA: Status 201 Created
    deactivate server

    Note right of SPA: The JavaScript file creates a post request.


```