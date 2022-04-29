const start = `<!DOCTYPE html>
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
    <header class="has-text-centered has-background-danger py-4">My Team</header>
    <main class="columns is-centered mt-6">
        <section class="columns column is-three-fifths is-centered is-flex-direction-row is-flex-wrap-wrap">
            `;

const end = `        </section>
    </main>
</body>
</html>`;

module.exports = {start, end};