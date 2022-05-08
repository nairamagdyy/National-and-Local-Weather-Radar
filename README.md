# National-and-Local-Weather-Radar
Live wind, rain and temperature, detailed forecast for your place and you can search about any country's weather
<head>
    <link href="../css/bootstrap.min.css" rel="stylesheet">
    <link rel="stylesheet" href="../css/all.min.css">
    <link href="../css/index.css" rel="stylesheet">
</head>

<body>

    <nav class="navbar navbar-expand-lg navbar-light bg-ligh pt-3">
        <div class="container w-100 d-flex justify-content-between">
            <a class="fw-bold text-white navbar-brand" href="#"><i class="fas fa-cloud"></i> Weather</a>
            <ul class="navbar-nav mb-2">
                <li class="nav-item me-5">
                    <a class="nav-link fw-bold active" aria-current="page" href="#">Home</a>
                </li>
                <li class="nav-item me-5">
                    <a class="nav-link text-white" href="#">News</a>
                </li>
                <li class="nav-item me-5">
                    <a class="nav-link text-white" href="#">Live Cameras</a>
                </li>
                <li class="nav-item me-5">
                    <a class="nav-link text-white" href="#">Photos</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link text-white" href="#">Contact</a>
                </li>
            </ul>
        </div>
    </nav>

    <input class="w-75 m-auto mt-5 mb-1 search form-control" type="text" placeholder="Search For..."
        onkeyup="search(this.value)">
    <div class="card w-75 m-auto my-5 h-75 col-dark">
        <div class="h-100 card-body d-flex flex-column justify-content-between ">
            <div class="d-flex justify-content-between">
                <div><img id="weatherIcon" src="" alt="">
                    <h3 class="text-white" id="cityName"></h3>
                    <p class="text-white" id="countryName"></p>
                    <h1 id="degree"></h1>
                </div>
                <div class="p-3">
                    <p class="text-white p-0 m-0"><i class="fas fa-tint"></i> Humidity</p>
                    <h5 class="text-white mb-4">50%</h5>
                    <p class="text-white p-0 m-0"><i class="fab fa-mixcloud"></i> Air Pressure</p>
                    <h5 class="text-white mb-4">1009.483 PS</h5>
                    <p class="text-white p-0 m-0"><i class="fas fa-cloud-showers-heavy"></i> Chance Of Rain</p>
                    <h5 class="text-white mb-4">0%</h5>
                    <p class="text-white p-0 m-0"><i class="fas fa-wind"></i> Wind Speed</p>
                    <h5 class="text-white mb-4">1.4 km/h</h5>

                </div>
            </div>
            <div id="dayInfo" class="d-flex justify-content-between">
            </div>

        </div>
    </div>




    <script src="../js/main.js"></script>
</body>
