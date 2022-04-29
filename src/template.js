const front = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>My Team</title>
    <link rel="stylesheet" href="./bulma/css/bulma.css">
    <link rel="stylesheet" href="./style.css">
</head>
<body class="has-background-black has-text-white">
    <header class="has-text-centered has-background-link py-4 is-size-1">My Team</header>
    <main class="columns is-centered mt-6">
        <section class="columns column is-three-fifths is-centered is-flex-direction-row is-flex-wrap-wrap">
            `;

const cardFront = `<div class="card column is-one-third is-full-touch m-4">
                <header class="card-header has-background-info is-full">
                    `;

const titleFront = `<p class="card-header-title has-text-info-light">`;
const titleEnd = `</p>`

const headerEnd = `</p>
                </header>
            <div class="content mt-3 px-2">
`

const cardEnd = `
</div>
</div>`

const tail = `
</section>
</main>
</body>
</html>`;

module.exports = {front, cardFront, headerEnd, titleFront, titleEnd, cardEnd, tail};