<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>contact</title>
    @vite(['resources/sass/contact.scss','resources/js/contact.js'])
</head>
<body>
    <div class="pargraph12" id="pargraph_loop" data-aos="fade-right" data-aos="fade-down-left">Contact US</div>

    <div class="all">
        <form action="https://formsubmit.co/01091655479mohamed2002@gmail.com" method="POST">

    <div class="par_login">
        <div class="user" data-aos="fade-right">
            <i class="fa-solid fa-user"></i>
            <input type="username" name="username" placeholder="Username"  id="username">
        </div>

        <div class="pass" data-aos="fade-left">
            <i class="fa-solid fa-comment"></i>
            <textarea name="massage" name="Massage" cols="30" rows="10" placeholder="Massage" id="massage"></textarea>
        </div>

        <div class="comp" data-aos="fade-right">
            <i class="fa-solid fa-building"></i>
            <input type="text" name="text" placeholder="Company"  id="text">
        </div>

        <div class="field" data-aos="fade-left">
            <i class="fa-solid fa-globe"></i>
            <input type="text" name="text" placeholder="Field"  id="text">
        </div>

        <div class="login" data-aos="fade-down-left">
            <i class="fa-solid fa-paper-plane"></i>
            <input type="submit" id="submit">
        </div>
    
    </div>
</form>
</div>

    <script src = "all.min.js"></script>
    <script src="https://unpkg.com/aos@next/dist/aos.js"></script>
    <script>
      AOS.init();
    </script>
</body>
</html>

