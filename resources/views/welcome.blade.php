<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    @vite(['resources/css/app.css' ,'resources/sass/Navbar.scss','resources/sass/profilio.scss' , 'resources/js/app.js'])
    <title>Navbar</title>
</head>
<body>
    @include('Navbar')
    @include('profilio')   
</body>
</html>