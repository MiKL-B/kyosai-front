<template>
  <div class="layout">
  <link rel='stylesheet' id='fa-fonts-css'  href='https://maxcdn.icons8.com/fonts/line-awesome/1.1/css/line-awesome-font-awesome.min.css?ver=5.2' type='text/css' media='all' />
    <header class="header">
        <!--<g-link to="/">{{ $static.metadata.siteName }}</g-link>-->
            <!--logo-->
                <g-link to="/" class=" nav_link logo flex flex-row h-62 lg:h-40  relative">
                    <span class="symbol"><img class="ml-42 h-full lg:ml-48 "
                            src="/logo.png" alt></span>
                    <span
                        class="title text-red-400 font-black text-6xl sm:text-4xl absolute sm:relative text-center ml-80 sm:ml-0 lg:absolute mt-32 lg:mt-0  lg:top-16 lg:left-96">KYOSAI</span>
                </g-link>
 
      <nav class="nav">


          <ul>
                        <li
                            class="top-7 right-20 sm:top-10 sm:right-20  text-7xl lg:text-5xl font-bold bg-gray-100 px-3 p-1 fixed rounded-lg  hover:text-pink-400 z-10">
                            <a href="#menu"><i class="fa fa-bars"></i></a></li>
                    </ul>
      </nav>
    </header>
    <slot />
 <!--footer-->
        <footer class="min-h-full px-10 py-24 md:px-0 bg-gray-100 flex flex-row justify-center relative " id="footer">
            <div class="inner mx-36  lg:mx-52   flex flex-col  lg:flex-row  ">


                <!--CONTACT-->
                <section class="mb-20 lg:mb-0">
                    <h2 class="text-4xl lg:text-xl font-bold uppercase tracking-widest  mb-10">Restons en contact</h2>
                    <form method="POST" action="#" class="mr-50">
                        <div class="fields flex flex-row flex-wrap">
                            <div class="fields half ">
                                <input type="text" name="name" id="name" placeholder="Name"
                                    class=" bg-transparent pl-0 w-screen md:w-96   h-20 border-b-2 focus:outline-none focus:border-pink-400 text-3xl lg:text-xl">
                            </div>
                            <div class="fields half">
                                <input type="emain" name="email" id="email" placeholder="Email"
                                    class="bg-transparent pl-0 w-screen md:w-96   h-20 border-b-2 focus:outline-none focus:border-pink-400 text-3xl lg:text-xl">
                            </div>

                            <div class="field">
                                <div class="textarea-wrapper">
                                    <textarea name="message" id="message" placeholder="Message" rows="1" cols="45"
                                        style="overflow: hidden; resize: none; height: 100px;"
                                        class="bg-transparent pl-0 w-screen md:w-96  h-20 border-b-2 focus:outline-none focus:border-pink-400 text-3xl lg:text-xl"></textarea>
                                </div>
                            </div>
                        </div>
                        <!--submit-->
                        <ul class="actions">
                            <li>
                                <input type="submit" value="Send"
                                    class="primary mt-8 py-7 px-10 lg:py-4 lg:px-7 w-full lg:w-32 bg-gray-600 text-white font-bold uppercase rounded-md hover:bg-pink-400 cursor-pointer text-4xl md:text-base">
                            </li>
                        </ul>
                    </form>
                </section>
                <!--FOLLOW-->
                <section>
                    <h2 class="text-4xl lg:text-xl font-bold uppercase tracking-widest  mb-10">Nous suivre</h2>
                    <ul class="icons mr-44 flex flex-row ">
                        <li
                            class="mr-3 p-2 text-4xl border-2 border-gray-400 text-gray-400 hover:border-pink-400 hover:text-pink-400 rounded-lg">
                            <a href="https://www.facebook.com/kyosai.asso"><i class="fa fa-facebook"
                                    aria-hidden="true"></i><span class="label"></span></a></li>
                        <li
                            class="mr-3 p-2 text-4xl border-2 border-gray-400 text-gray-400 hover:border-pink-400 hover:text-pink-400 rounded-lg">
                            <a
                                href="https://www.instagram.com/asso_kyosai/?fbclid=IwAR1IxNP1jUFVc7XRr0R-Adpen4RHWzgB1Yia9MIPNu5a0o5YW6RjLwvJ0zY"><i
                                    class="fa fa-instagram" aria-hidden="true"></i><span class="label"></span></a></li>
                        <li
                            class="mr-3 p-2 text-4xl border-2 border-gray-400 text-gray-400 hover:border-pink-400 hover:text-pink-400 rounded-lg">
                            <a href="https://twitter.com/AssoKyosai"><i class="fa fa-twitter"
                                    aria-hidden="true"></i><span class="label"></span></a></li>
                        <li
                            class="mr-3 p-2 text-4xl border-2 border-gray-400 text-gray-400 hover:border-pink-400 hover:text-pink-400 rounded-lg">
                            <a href="#"><i class="fa fa-phone" aria-hidden="true"></i><span class="label"></span></a>
                        </li>
                    </ul>
                </section>
                <!--COPYRIGHT-->
                <ul
                    class="copyright flex flex-row absolute mx-10: lg:mx-52 bottom-10 text-gray-300 text-2xl sm:text-lg">
                    <li>@ untitled all rights reserved | </li>

                    <li> design: <a>lien</a>|</li>

                    <li>demo image <a>lien</a></li>
                </ul>
            </div>
        </footer>
  </div>
</template>

<static-query>
query {
  metadata {
    siteName
  }
}
</static-query>

<style>

body {
  font-family: "Source sans pro";
  background-image: url("/background.webp");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
}
.title {
  font-family: "Papyrus";
}




</style>
