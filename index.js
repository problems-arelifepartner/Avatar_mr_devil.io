<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no, viewport-fit=cover"/>
    <!-- start meta copy -->
    <title>Virtual Pandoran Ocean Creature Creator</title>
    <meta name="description" content="Build your own unique Avatar-inspired ocean creature and release it into the Virtual Pandoran Ocean! For every creature released, Disney will make a donation to The Nature Conservancy (in approved countries)."/>
    <meta name="keywords" content="Avatar: The Way of Water, Avatar, Virtual Pandoran Ocean, Virtual Pandoran Ocean Creature Builder"/>

    <meta property="og:title" content="Virtual Pandoran Ocean Creature Creator"/>
    <meta property="og:description" content="Build your own unique Avatar-inspired ocean creature and release it into the Virtual Pandoran Ocean! For every creature released, Disney will make a donation to The Nature Conservancy (in approved countries)."/>
    <meta property="og:image" name="thumb" content="https://www.avatar.com/keepouroceansamazing/creaturecreator/share.png"/>

    <meta name="twitter:card" content="summary_large_image"/>
    <meta name="twitter:title" content="Virtual Pandoran Ocean Creature Creator"/>
    <meta name="twitter:description" content="Build your own unique Avatar-inspired ocean creature and release it into the Virtual Pandoran Ocean! For every creature released, Disney will make a donation to The Nature Conservancy (in approved countries)."/>
    <meta name="twitter:image" content="https://www.avatar.com/keepouroceansamazing/creaturecreator/share.png"/>
    <!-- end meta copy -->

    <link rel="apple-touch-icon" href="https://lumiere-a.akamaihd.net/v1/images/apple-icon-180x180_25e12c79.png?region=0%2C0%2C180%2C180">
    <link rel="shortcut icon" href="https://www.virtualpandoranocean.com/assets/favicon.png">

    <link rel="stylesheet" type="text/css" href="bundle.css">

    <link rel="stylesheet" href="hooper.css">

    <link rel="preload" href="./assets/imgs/loading-spinner-lg.png" as="image">
    <link rel="preload" href="./assets/imgs/loading-spinner-sm.png" as="image">
    <link rel="preload" href="./assets/imgs/background.png" as="image">

    <!--PLAY CANVAS-->
    <script src="playcanvas-stable.min.js"></script>
    <script src="__settings__.js"></script>
</head>
<body>
<script src="__modules__.js"></script>
<h1 class="hidden-header">Virtual Pandoran Ocean Creature Creator</h1>
<div id="app" >
    <template v-if="$store.getters['language/isLoaded']">
        <div>
            <router-view />
        </div>
    </template>
</div>
<script type="text/javascript" src="bundle.js"></script>
</body>

</html>
