import fetch from 'node-fetch';

fetch('https://deep-index.moralis.io/api/v2/ipfs/uploadFolder', {
    method: 'POST',
    headers: {
        'accept': 'application/json',
        'X-API-Key': 'cexNuIrndG6kpKifNZZDvMyw2wfJtMXB6DuPV8zTbL89FDOXiqoUYVBXlAwK8TaQ',
        'Content-Type': 'application/json'
    },
    body: JSON.stringify([
        {
            'path': 'https://texttosignlanguage.s3.jp-tok.cloud-object-storage.appdomain.cloud/hi.mp4',
        }
    ])
}).then(res => res.json())
    .then(jsonData => console.log(jsonData));