titles = [
"Top 10 Hidden Gems: Off-the-Beaten-Path Destinations You Need to Explore",
"A Guide to Sustainable Travel: How to Reduce Your Carbon Footprint While Exploring the World",
"Culinary Adventures: Must-Try Street Foods Around the Globe",
"Solo Travel Tips: Embracing Independence and Discovery",
"Bucket List Experiences: Skydiving, Hot Air Ballooning, and Other Thrilling Adventures",
"Voluntourism: How to Give Back While Traveling Abroad",
"The Ultimate Packing List: Essentials for Every Type of Trip",
"Exploring UNESCO World Heritage Sites: Historic Treasures and Cultural Wonders",
"Family-Friendly Destinations: Fun Activities and Attractions for All Ages",
"Wellness Travel: Retreats, Spas, and Serene Getaways for Relaxation and Rejuvenation",
"Photography Tips: Capturing the Beauty of Your Travels",
"Budget Travel Hacks: How to Explore the World on a Shoestring",
"Eco-Friendly Accommodations: Green Hotels, Eco Lodges, and Sustainable Stays",
"Adventure Sports Around the World: Surfing, Skiing, and More",
"Local Culture Immersion: Connecting with Communities Through Authentic Experiences"
]

descriptions = [
    "Dive into the world's best-kept secrets with our guide to off-the-beaten-path destinations. Discover breathtaking landscapes, untouched natural wonders, and charming local communities that are waiting to be explored.",
    "Explore the world responsibly with our comprehensive guide to sustainable travel. Learn practical tips and eco-friendly practices to minimize your environmental impact while still enjoying unforgettable adventures.",
    "Embark on a global gastronomic journey and tantalize your taste buds with our guide to must-try street foods. From savory snacks to sweet treats, discover the flavors of the world's vibrant street food scenes.",
    "Unlock the joys of solo travel with our expert tips and advice. Whether you're a seasoned solo adventurer or embarking on your first solo trip, learn how to embrace independence, meet new people, and discover yourself along the way.",
    "Get ready to tick off your bucket list with our guide to adrenaline-pumping experiences around the world. From skydiving over breathtaking landscapes to hot air ballooning at sunrise, embark on thrilling adventures that will leave you breathless.",
    "Make a positive impact while traveling with our guide to voluntourism. Discover meaningful volunteer opportunities, support local communities, and immerse yourself in rewarding experiences that go beyond typical tourist activities.",
    "Pack like a pro with our ultimate packing list. From versatile clothing to essential gadgets, streamline your packing process and ensure you have everything you need for a hassle-free journey, no matter where your adventures take you.",
    "Step back in time and uncover the world's most iconic UNESCO World Heritage Sites. Immerse yourself in the rich history and cultural significance of these treasured landmarks, from ancient ruins to architectural wonders.",
    "Plan the perfect family getaway with our guide to family-friendly destinations. Discover fun-filled activities, kid-friendly attractions, and unforgettable experiences that will create lasting memories for the whole family.",
    "Recharge your mind, body, and soul with our guide to wellness travel. From tranquil retreats to luxurious spas, embark on a journey of relaxation and rejuvenation as you prioritize self-care and well-being on your travels.",
    "Capture the essence of your travels with our photography tips and techniques. Whether you're a novice or seasoned photographer, learn how to frame the perfect shot, master composition, and immortalize the beauty of your adventures.",
    "Travel the world without breaking the bank with our budget travel hacks. Discover insider tips, money-saving strategies, and budget-friendly destinations that will help you stretch your travel budget further and experience more for less.",
    "Stay sustainably with our guide to eco-friendly accommodations. From green hotels to eco lodges, discover environmentally-conscious lodging options that prioritize sustainability without compromising on comfort or luxury.",
    "Get your adrenaline pumping with our guide to adventure sports around the world. From surfing epic waves to skiing down powdery slopes, embark on thrilling adventures and push your limits in some of the world's most exhilarating destinations.",
    "Immerse yourself in local culture with our guide to authentic travel experiences. From homestays with local families to cultural workshops, discover meaningful ways to connect with communities and gain a deeper understanding of diverse cultures around the world."
]


# def genBody(title, body):
#    return f"""
#    <!DOCTYPE html>
#    <html lang="en">
#       <head>
#          <title>Roam the Galaxy - {title}</title>
#          <meta charset="utf-8" />
#          <meta
#             name="viewport"
#             content="width=device-width, initial-scale=1, shrink-to-fit=no"
#          />

#          <link
#             href="https://fonts.googleapis.com/css?family=Work+Sans:400,700,900&display=swap"
#             rel="stylesheet"
#          />

#          <link
#             rel="stylesheet"
#             href="fonts/icomoon/style.css"
#          />

#          <link
#             rel="stylesheet"
#             href="css/bootstrap.min.css"
#          />
#          <link
#             rel="stylesheet"
#             href="css/bootstrap-datepicker.css"
#          />
#          <link
#             rel="stylesheet"
#             href="css/jquery.fancybox.min.css"
#          />
#          <link
#             rel="stylesheet"
#             href="css/owl.carousel.min.css"
#          />
#          <link
#             rel="stylesheet"
#             href="css/owl.theme.default.min.css"
#          />
#          <link
#             rel="stylesheet"
#             href="fonts/flaticon/font/flaticon.css"
#          />
#          <link
#             rel="stylesheet"
#             href="css/aos.css"
#          />

#          <!-- MAIN CSS -->
#          <link
#             rel="stylesheet"
#             href="css/style.css"
#          />
#       </head>

#       <body
#          data-spy="scroll"
#          data-target=".site-navbar-target"
#          data-offset="300"
#       >
#          <div
#             class="site-wrap"
#             id="home-section"
#          >
#             <div class="site-mobile-menu site-navbar-target">
#                <div class="site-mobile-menu-header">
#                   <div class="site-mobile-menu-close mt-3">
#                      <span class="icon-close2 js-menu-toggle"></span>
#                   </div>
#                </div>
#                <div class="site-mobile-menu-body"></div>
#             </div>

#             <header
#                class="site-navbar site-navbar-target"
#                role="banner"
#             >
#                <div class="container">
#                   <div class="row align-items-center position-relative">
#                      <div class="col-3">
#                         <div class="site-logo">
#                            <a
#                               href="index.html"
#                               class="font-weight-bold"
#                            >
#                               <img
#                                  src="images/logo.png"
#                                  alt="Image"
#                                  class="img-fluid"
#                               />
#                            </a>
#                         </div>
#                      </div>

#                      <div class="col-9 text-right">
#                         <span class="d-inline-block d-lg-none"
#                            ><a
#                               href="#"
#                               class="site-menu-toggle js-menu-toggle py-5 text-white"
#                               ><span class="icon-menu h3 text-white"></span></a
#                         ></span>

#                         <nav
#                            class="site-navigation text-right ml-auto d-none d-lg-block"
#                            role="navigation"
#                         >
#                            <ul class="site-menu main-menu js-clone-nav ml-auto">
#                               <li>
#                                  <a
#                                     href="index.html"
#                                     class="nav-link"
#                                     >Home</a
#                                  >
#                               </li>
#                               <li>
#                                  <a
#                                     href="about.html"
#                                     class="nav-link"
#                                     >About</a
#                                  >
#                               </li>

#                               <li class="active">
#                                  <a
#                                     href="blog.html"
#                                     class="nav-link"
#                                     >Blog</a
#                                  >
#                               </li>
#                               <li>
#                                  <a
#                                     href="contact.html"
#                                     class="nav-link"
#                                     >Contact</a
#                                  >
#                               </li>
#                            </ul>
#                         </nav>
#                      </div>
#                   </div>
#                </div>
#             </header>

#             <div class="ftco-blocks-cover-1">
#                <div
#                   class="site-section-cover overlay"
#                   data-stellar-background-ratio="0.5"
#                   style="background-image: url('images/hero_1.jpg')"
#                >
#                   <div class="container">
#                      <div
#                         class="row align-items-center justify-content-center text-center"
#                      >
#                         <div class="col-md-7">
#                            <span
#                               class="d-block mb-3 text-white"
#                               data-aos="fade-up"
#                               >Sep 20, 2019
#                               <span class="mx-2 text-primary">&bullet;</span> by James
#                               Miller</span
#                            >
#                            <h1
#                               class="mb-4"
#                               data-aos="fade-up"
#                               data-aos-delay="100"
#                            >
#                            {title}
#                            </h1>
#                         </div>
#                      </div>
#                   </div>
#                </div>
#             </div>

#             <div class="site-section">
#                <div class="container">
#                   <div class="row">
#                      <div class="col-md-8 blog-content">
#                         {body}

#                         <div class="pt-5">
#                            <p>
#                               Categories: <a href="#">Design</a>,
#                               <a href="#">Events</a> Tags: <a href="#">#html</a>,
#                               <a href="#">#trends</a>
#                            </p>
#                         </div>

#                         <div class="pt-5">
#                            <h3 class="mb-5">6 Comments</h3>
#                            <ul class="comment-list">
#                               <li class="comment">
#                                  <div class="vcard bio">
#                                     <img
#                                        src="images/person_2.jpg"
#                                        alt="Image"
#                                     />
#                                  </div>
#                                  <div class="comment-body">
#                                     <h3>Jacob Smith</h3>
#                                     <div class="meta">January 9, 2018 at 2:21pm</div>
#                                     <p>
#                                        When she reached the first hills of the Italic
#                                        Mountains, she had a last view back on the skyline of
#                                        her hometown Bookmarksgrove, the headline of Alphabet
#                                        Village and the subline of her own road, the Line Lane.
#                                        Pityful a rethoric question ran over her cheek, then she
#                                        continued her way.
#                                     </p>
#                                     <p>
#                                        <a
#                                           href="#"
#                                           class="reply"
#                                           >Reply</a
#                                        >
#                                     </p>
#                                  </div>
#                               </li>

#                               <li class="comment">
#                                  <ul class="children">
#                                     <li class="comment">
#                                        <div class="vcard bio">
#                                           <img
#                                              src="images/person_5.jpg"
#                                              alt="Image"
#                                           />
#                                        </div>
#                                        <div class="comment-body">
#                                           <h3>Chintan Patel</h3>
#                                           <div class="meta">January 9, 2018 at 2:21pm</div>
#                                           <p>
#                                              Far far away, behind the word mountains, far from
#                                              the countries Vokalia and Consonantia, there live
#                                              the blind texts. Separated they live in
#                                              Bookmarksgrove right at the coast of the Semantics,
#                                              a large language ocean.
#                                           </p>
#                                           <p>
#                                              <a
#                                                 href="#"
#                                                 class="reply"
#                                                 >Reply</a
#                                              >
#                                           </p>
#                                        </div>

#                                        <ul class="children">
#                                           <li class="comment">
#                                              <div class="vcard bio">
#                                                 <img
#                                                    src="images/person_1.jpg"
#                                                    alt="Image"
#                                                 />
#                                              </div>
#                                              <div class="comment-body">
#                                                 <h3>Jean Doe</h3>
#                                                 <div class="meta">January 9, 2018 at 2:21pm</div>
#                                                 <p>
#                                                    A small river named Duden flows by their place
#                                                    and supplies it with the necessary regelialia.
#                                                    It is a paradisematic country, in which roasted
#                                                    parts of sentences fly into your mouth.
#                                                 </p>
#                                                 <p>
#                                                    <a
#                                                       href="#"
#                                                       class="reply"
#                                                       >Reply</a
#                                                    >
#                                                 </p>
#                                              </div>

#                                              <ul class="children">
#                                                 <li class="comment">
#                                                    <div class="vcard bio">
#                                                       <img
#                                                          src="images/person_4.jpg"
#                                                          alt="Image"
#                                                       />
#                                                    </div>
#                                                    <div class="comment-body">
#                                                       <h3>Ben Afflick</h3>
#                                                       <div class="meta">
#                                                          January 9, 2018 at 2:21pm
#                                                       </div>
#                                                       <p>
#                                                          Even the all-powerful Pointing has no
#                                                          control about the blind texts it is an
#                                                          almost unorthographic life One day however a
#                                                          small line of blind text by the name of Jhon
#                                                          don decided to leave for the far World of
#                                                          Grammar.
#                                                       </p>
#                                                       <p>
#                                                          <a
#                                                             href="#"
#                                                             class="reply"
#                                                             >Reply</a
#                                                          >
#                                                       </p>
#                                                    </div>
#                                                 </li>
#                                              </ul>
#                                           </li>
#                                        </ul>
#                                     </li>
#                                  </ul>
#                               </li>

#                               <li class="comment">
#                                  <div class="vcard bio">
#                                     <img
#                                        src="images/person_1.jpg"
#                                        alt="Image"
#                                     />
#                                  </div>
#                                  <div class="comment-body">
#                                     <h3>Jean Doe</h3>
#                                     <div class="meta">January 9, 2018 at 2:21pm</div>
#                                     <p>
#                                        Even the all-powerful Pointing has no control about the
#                                        blind texts it is an almost unorthographic life One day
#                                        however a small line of blind text by the name of Hari
#                                        decided to leave for the far World of Grammar.
#                                     </p>
#                                     <p>
#                                        <a
#                                           href="#"
#                                           class="reply"
#                                           >Reply</a
#                                        >
#                                     </p>
#                                  </div>
#                               </li>
#                            </ul>
#                            <!-- END comment-list -->

#                            <div class="comment-form-wrap pt-5">
#                               <h3 class="mb-5">Leave a comment</h3>
#                               <form
#                                  action="#"
#                                  class=""
#                               >
#                                  <div class="form-group">
#                                     <label for="name">Name *</label>
#                                     <input
#                                        type="text"
#                                        class="form-control"
#                                        id="name"
#                                     />
#                                  </div>
#                                  <div class="form-group">
#                                     <label for="email">Email *</label>
#                                     <input
#                                        type="email"
#                                        class="form-control"
#                                        id="email"
#                                     />
#                                  </div>
#                                  <div class="form-group">
#                                     <label for="website">Website</label>
#                                     <input
#                                        type="url"
#                                        class="form-control"
#                                        id="website"
#                                     />
#                                  </div>

#                                  <div class="form-group">
#                                     <label for="message">Message</label>
#                                     <textarea
#                                        name=""
#                                        id="message"
#                                        cols="30"
#                                        rows="10"
#                                        class="form-control"
#                                     ></textarea>
#                                  </div>
#                                  <div class="form-group">
#                                     <input
#                                        type="submit"
#                                        value="Post Comment"
#                                        class="btn btn-primary btn-md text-white"
#                                     />
#                                  </div>
#                               </form>
#                            </div>
#                         </div>
#                      </div>
#                      <div class="col-md-4 sidebar">
#                         <div class="sidebar-box">
#                            <form
#                               action="#"
#                               class="search-form"
#                            >
#                               <div class="form-group">
#                                  <span class="icon fa fa-search"></span>
#                                  <input
#                                     type="text"
#                                     class="form-control"
#                                     placeholder="Type a keyword and hit enter"
#                                  />
#                               </div>
#                            </form>
#                         </div>
#                         <div class="sidebar-box">
#                            <div class="categories">
#                               <h3>Categories</h3>
#                               <li>
#                                  <a href="#">Creatives <span>(12)</span></a>
#                               </li>
#                               <li>
#                                  <a href="#">News <span>(22)</span></a>
#                               </li>
#                               <li>
#                                  <a href="#">Design <span>(37)</span></a>
#                               </li>
#                               <li>
#                                  <a href="#">HTML <span>(42)</span></a>
#                               </li>
#                               <li>
#                                  <a href="#">Web Development <span>(14)</span></a>
#                               </li>
#                            </div>
#                         </div>
#                         <div class="sidebar-box">
#                            <img
#                               src="images/person_1.jpg"
#                               alt="Image"
#                               class="img-fluid mb-4 w-50 rounded-circle"
#                            />
#                            <h3 class="text-black">About The Author</h3>
#                            <p>
#                               Even the all-powerful Pointing has no control about the blind
#                               texts it is an almost unorthographic life One day however a
#                               small line of blind text by the name of Jhon don decided to
#                               leave for the far World of Grammar.
#                            </p>
#                            <p>
#                               <a
#                                  href="#"
#                                  class="btn btn-primary btn-md text-white"
#                                  >Read More</a
#                               >
#                            </p>
#                         </div>

#                         <div class="sidebar-box">
#                            <h3 class="text-black">Paragraph</h3>
#                            <p>
#                               When she reached the first hills of the Italic Mountains, she
#                               had a last view back on the skyline of her hometown
#                               Bookmarksgrove, the headline of Alphabet Village and the
#                               subline of her own road, the Line Lane. Pityful a rethoric
#                               question ran over her cheek, then she continued her way.
#                            </p>
#                         </div>
#                      </div>
#                   </div>
#                </div>
#             </div>

#             <footer class="site-footer bg-light">
#                <div class="container">
#                   <div class="row">
#                      <div class="col-lg-3">
#                         <h2 class="footer-heading mb-3">Instagram</h2>
#                         <div class="row">
#                            <div class="col-4 gal_col">
#                               <a href="#"
#                                  ><img
#                                     src="images/insta_1.jpg"
#                                     alt="Image"
#                                     class="img-fluid"
#                               /></a>
#                            </div>
#                            <div class="col-4 gal_col">
#                               <a href="#"
#                                  ><img
#                                     src="images/insta_2.jpg"
#                                     alt="Image"
#                                     class="img-fluid"
#                               /></a>
#                            </div>
#                            <div class="col-4 gal_col">
#                               <a href="#"
#                                  ><img
#                                     src="images/insta_3.jpg"
#                                     alt="Image"
#                                     class="img-fluid"
#                               /></a>
#                            </div>
#                            <div class="col-4 gal_col">
#                               <a href="#"
#                                  ><img
#                                     src="images/insta_4.jpg"
#                                     alt="Image"
#                                     class="img-fluid"
#                               /></a>
#                            </div>
#                            <div class="col-4 gal_col">
#                               <a href="#"
#                                  ><img
#                                     src="images/insta_5.jpg"
#                                     alt="Image"
#                                     class="img-fluid"
#                               /></a>
#                            </div>
#                            <div class="col-4 gal_col">
#                               <a href="#"
#                                  ><img
#                                     src="images/insta_6.jpg"
#                                     alt="Image"
#                                     class="img-fluid"
#                               /></a>
#                            </div>
#                         </div>
#                      </div>
#                      <div class="col-lg-8 ml-auto">
#                         <div class="row">
#                            <div class="col-lg-6 ml-auto">
#                               <h2 class="footer-heading mb-4">Quick Links</h2>
#                               <ul class="list-unstyled">
#                                  <li><a href="#">About Us</a></li>
#                                  <li><a href="#">Testimonials</a></li>
#                                  <li><a href="#">Terms of Service</a></li>
#                                  <li><a href="#">Privacy</a></li>
#                                  <li><a href="#">Contact Us</a></li>
#                               </ul>
#                            </div>
#                            <div class="col-lg-6">
#                               <h2 class="footer-heading mb-4">Newsletter</h2>
#                               <p>
#                                  Join us as we traverse the globe, uncovering hidden gems,
#                                  sharing travel tips, and immersing ourselves in diverse
#                                  landscapes and traditions.
#                               </p>
#                               <form
#                                  action="#"
#                                  class="d-flex"
#                                  class="subscribe"
#                               >
#                                  <input
#                                     type="text"
#                                     class="form-control mr-3"
#                                     placeholder="Email"
#                                  />
#                                  <input
#                                     type="submit"
#                                     value="Send"
#                                     class="btn btn-primary"
#                                  />
#                               </form>
#                            </div>
#                         </div>
#                      </div>
#                   </div>
#                   <div class="row pt-5 mt-5 text-center">
#                      <div class="col-md-12">
#                         <div class="border-top pt-5">
#                            <p>
#                               Copyright &copy;
#                               <script>
#                                  document.write(new Date().getFullYear());
#                               </script>
#                               All rights reserved | Wrote with
#                               <i
#                                  class="icon-heart text-danger"
#                                  aria-hidden="true"
#                               ></i>
#                               by
#                               <a
#                                  href="https://www.github.com/marvelxcodes"
#                                  target="_blank"
#                                  >MarvelXCodes</a
#                               >
#                            </p>
#                         </div>
#                      </div>
#                   </div>
#                </div>
#             </footer>
#          </div>

#          <script src="js/jquery-3.3.1.min.js"></script>
#          <script src="js/jquery-migrate-3.0.0.js"></script>
#          <script src="js/popper.min.js"></script>
#          <script src="js/bootstrap.min.js"></script>
#          <script src="js/owl.carousel.min.js"></script>
#          <script src="js/jquery.sticky.js"></script>
#          <script src="js/jquery.waypoints.min.js"></script>
#          <script src="js/jquery.animateNumber.min.js"></script>
#          <script src="js/jquery.fancybox.min.js"></script>
#          <script src="js/jquery.stellar.min.js"></script>
#          <script src="js/jquery.easing.1.3.js"></script>
#          <script src="js/bootstrap-datepicker.min.js"></script>
#          <script src="js/isotope.pkgd.min.js"></script>
#          <script src="js/aos.js"></script>

#          <script src="js/main.js"></script>
#       </body>
#    </html>

#    """

# for i in titles:
#    new_filename = '-'.join(i.replace(":", "").split()).lower() + '.html'
#    f = open(new_filename ,"w")

#    ch = input(f'y to read: {i}: ')
#    fin = open("test.html")
#    body = fin.read()
#    f.write(genBody(i, body))
#    fin.close()
#    f.close()

result = ""

for i in range(15):
   name =  '-'.join(titles[i].replace(":", "").split()).lower()
   desc = descriptions[i]
   result += f"""
   <div class="col-lg-4 col-md-6 mb-4">
                        <div class="post-entry-1 h-100">
                           <a href="{name}.html">
                              <img
                                 src="images/{i+1}.jpg"
                                 alt="Image"
                                 class="img-fluid"
                              />
                           </a>
                           <div class="post-entry-1-contents">
                              <h2><a href="{name}.html">{titles[i]}</a></h2>
                              <span class="meta d-inline-block mb-3"
                                 >July 17, 2019 <span class="mx-2">by</span>
                                 <a href="about.html">Admin</a></span
                              >
                              <p>
                                 {desc}
                              </p>
                           </div>
                        </div>
                     </div>
   """

print(result)