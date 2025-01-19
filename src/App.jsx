import "./App.css";
import CharterYachts from "./components/CharterYachts/CharterYachts.jsx";
import FixedBtn from "./components/fixedBtn/fixedBtn.jsx";
import Footer from "./components/footer/footer.jsx";
import Hero from "./components/hero/hero.jsx";
import Yachts from "./components/ImageSlider/Yachts.jsx";
import Navbar from "./components/Navbar/navbar.jsx";
import NewYear from "./components/newYear/newYear.jsx";
import Page2 from "./components/page2/page2.jsx";
import Page4 from "./components/page4/page4.jsx";
import { Routes, Route } from "react-router-dom";
import "./components/fixedBtn/fixedBtn.css";
import AllYachtsInfo from "./components/allYachtsInfo/allYachtsInfo.jsx";
import FAQ from "./components/FAQ.jsx/faq.jsx";
import FishingTrips from "./components/FishingTrips/fishingTrips.jsx";
import HeroContent from "./components/Contents/heroContent.jsx";
import Packages from "./components/Packages/Packages.jsx";
import AboutUs from "./components/About Us/aboutUs.jsx";
import HeroOther from "./components/hero/heroOther.jsx";
import Testimonial from "./components/Testimonial/Testimonial.jsx";
import { Helmet } from "react-helmet";
import Catering from "./components/Catering/Catering.jsx";
import BirthdayParty from "./components/Birthday Party/Birthday.jsx";
import Wedding from "./components/Wedding/WeddingCelebration.jsx";
import CorporateEvents from "./components/CorporateEvents/CorporateEvents.jsx";
import Feet35 from "./components/All Yachts/feet35.jsx";
import Feet40 from "./components/All Yachts/feet40.jsx";
import Feet42 from "./components/allYachtsInfo/ft42.jsx";
import Feet45 from "./components/allYachtsInfo/ft45.jsx";
import Feet50 from "./components/allYachtsInfo/ft50.jsx";
import LuxuryFeet50 from "./components/allYachtsInfo/Again_ft_50.jsx";
import AzimuthFeet50 from "./components/allYachtsInfo/Azimut_ft_50.jsx";
import Feet52 from "./components/allYachtsInfo/ft52.jsx";
import Feet55 from "./components/allYachtsInfo/ft55.jsx";
import Feet56 from "./components/allYachtsInfo/ft56.jsx";
import Feet60 from "./components/allYachtsInfo/ft60.jsx";
import Feet62 from "./components/allYachtsInfo/ft62.jsx";
import Again_Feet62 from "./components/allYachtsInfo/Again_ft62.jsx";
import PrincessFeet60 from "./components/allYachtsInfo/again ft60.jsx";
import Feet70 from "./components/allYachtsInfo/ft70.jsx";
import Again_Feet70 from "./components/allYachtsInfo/again_ft70.jsx";
import Feet85 from "./components/allYachtsInfo/ft85.jsx";
import Again_ft85 from "./components/allYachtsInfo/again_ft85.jsx";
import Feet88 from "./components/allYachtsInfo/ft88.jsx";
import Again_Feet88 from "./components/allYachtsInfo/again_ft88.jsx";
import Feet90 from "./components/allYachtsInfo/ft90.jsx";
import Feet95 from "./components/allYachtsInfo/ft95.jsx";
import Feet96 from "./components/allYachtsInfo/ft96.jsx";
import Feet100 from "./components/allYachtsInfo/ft100.jsx";
import Again_Feet100 from "./components/allYachtsInfo/again_ft100.jsx";
import Feet101 from "./components/allYachtsInfo/ft101.jsx";
import Feet110 from "./components/allYachtsInfo/ft110.jsx";
import Feet120 from "./components/allYachtsInfo/ft120.jsx";
import Feet135 from "./components/allYachtsInfo/ft135.jsx";
import Feet140 from "./components/allYachtsInfo/ft140.jsx";
import WaterSports from "./components/WaterSports/WaterSports.jsx";
import Jetski from "./components/Jetski/Jetski.jsx";
import DonutRides from "./components/DonutRides/DonutRides.jsx";
import BananaRides from "./components/BananaRides/BananaRides.jsx";
import WakeBoards from "./components/WakeBoards/WakeBoards.jsx";
import FlyBoards from "./components/FlyBoards/FlyBoards.jsx";
import Parasailing from "./components/Parasailing/Parasailing.jsx";
import Ft80 from "./components/allYachtsInfo/ft80.jsx";
import Feet164 from "./components/allYachtsInfo/ft164.jsx";
import Feet240 from "./components/allYachtsInfo/ft240.jsx";
import Feet155 from "./components/allYachtsInfo/ft155.jsx";
import Again_ft80 from "./components/allYachtsInfo/again_ft80.jsx";
import Ft80Premium from "./components/allYachtsInfo/ft80_premium.jsx";
import Again_Ft45 from "./components/allYachtsInfo/Again_Feet45.jsx";
import Ft75 from "./components/allYachtsInfo/ft75.jsx";
import Ft65 from "./components/allYachtsInfo/ft65.jsx";
import Again_ft75 from "./components/allYachtsInfo/again_ft75.jsx";
import Ft50Nova from "./components/allYachtsInfo/ft50nova.jsx";
import Ft56Majesty from "./components/allYachtsInfo/ft56majesty.jsx";

function App() {
  return (
    <>
      <div className="app">
        <div className="whatsapp-btn">
          <FixedBtn />
        </div>
        <Routes>
          {/* Define all your valid routes first */}
          <Route
            path="/"
            element={
              <>
                <Helmet>
                  <title>
                    Gulf Yachts Dubai - Yacht Rental Dubai, Luxury Yacht Charter
                  </title>
                  <meta
                    name="description"
                    content="Discover luxury yacht Charter & Yacht Rental in Dubai with Gulf Yachts Dubai. Offering exclusive charter experiences, fishing trips, and tailored events. Book your yacht today."
                  />
                </Helmet>
                <Navbar />
                <Hero />
                <Page2 />
                <Yachts />
                <Page4 />
                <HeroContent />
                <HeroOther />
                <Testimonial />
                <FAQ />
                <Footer />
              </>
            }
          />
          <Route
            path="/allyachts"
            element={
              <>
                <Helmet>
                  <title>
                    Rent a Yachts in Dubai - Best Yacht Rental Dubai
                  </title>
                  <meta
                    name="description"
                    content="Gulf Yachts Dubai, Best Yacht Rental Company in Dubai. Book Standard, Premium, and Super Yachts with us. Rent a yacht in Dubai for an unforgettable, memorable yacht trip experience."
                  />
                </Helmet>
                <Navbar />
                {/* <AllYachtsInfo /> */}
                <br />
                <br />
                <br />
                <br />
                <br />
                <Yachts />
                <FAQ />
                <Footer />
              </>
            }
          />
          <Route
            path="/fishingtrips"
            element={
              <>
                <Helmet>
                  <title>
                    Deep Sea Fishing Trips Dubai - Yacht Fishing in Dubai | Gulf
                    Yachts Dubai
                  </title>
                  <meta
                    name="description"
                    content="Deep Sea Fishing Trips Dubai, Yacht Fishing in Dubai. A wide range of yachts available with Gulf Yachts Dubai for your best fishing experience. Fully equipped fishing boats."
                  />
                </Helmet>
                <Navbar />
                <FishingTrips />
                <FAQ />
                <Footer />
              </>
            }
          />
          <Route
            path="/charter"
            element={
              <>
                <Helmet>
                  <title>
                    Best Charter Boat Dubai - Hire the Best Charter Yachts in
                    Dubai
                  </title>
                  <meta
                    name="description"
                    content="Best Charter Boat Dubai, Hire the best Charter Yachts in Dubai with Gulf Yachts. Book Charter Boat Rental in Dubai to enjoy birthday parties, weddings, and other events."
                  />
                </Helmet>
                <Navbar />
                <CharterYachts />
                <FAQ />
                <Footer />
              </>
            }
          />
          <Route
            path="/packages"
            element={
              <>
                <Helmet>
                  <title>
                    Exclusive Offers on Yacht Rental Dubai Packages - Gulf
                    Yachts
                  </title>
                  <meta
                    name="description"
                    content="Gulf Yachts provides exclusive offers on Yacht Rental Dubai packages. Best offers on Yacht Rental Dubai packages. Book now and get the best deals."
                  />
                </Helmet>
                <Navbar />
                <Packages />
                <FAQ />
                <Footer />
              </>
            }
          />
          <Route
            path="/newYear"
            element={
              <>
                <Helmet>
                  <title>
                    New Year Yacht Party Dubai | Best Offer on New Year Yacht
                    Party
                  </title>
                  <meta
                    name="description"
                    content="New Year Yacht Party Dubai. Book now for the best offer on New Year Yacht Party. Enjoy your New Year on our luxurious yachts. Book now for New Year Eve party celebrations."
                  />
                </Helmet>
                <Navbar />
                <NewYear />
                <FAQ />
                <Footer />
              </>
            }
          />
          <Route
            path="/about"
            element={
              <>
                <Helmet>
                  <title>
                    Luxury Boat & Yacht Rental in Dubai - Gulf Yachts Dubai
                  </title>
                  <meta
                    name="description"
                    content="Gulf Yachts Dubai, one of the best Luxury Boat & Yacht Rental Companies in Dubai. Gulf Yachts Dubai is an award-winning #1 Luxury Yacht Rental Company in Dubai Marina."
                  />
                </Helmet>
                <Navbar />
                <AboutUs />
                <FAQ />
                <Footer />
              </>
            }
          />

          <Route
            path="/Catering"
            element={
              <>
                <Helmet>
                  <title>
                    Yacht Rental Dubai with Food menu, Yacht Catering in dubai
                    ,Live BBQ
                  </title>
                  <meta
                    name="description"
                    content="Yacht catering in dubai , with live BBQ and our yacht with food buffet setups .Yacht Rentals in dubai with exclusive food menus."
                  />
                </Helmet>
                <Navbar />
                <Catering />
                <FAQ />
                <Footer />
              </>
            }
          />

          <Route
            path="/Package/BirthdayParty"
            element={
              <>
                <Helmet>
                  <title>
                    Birthday Party Yacht Dubai : Yacht Rental Dubai for Birthday
                  </title>
                  <meta
                    name="description"
                    content="Yacht Birthday Party Dubai Host a memorable birthday party on a luxurious yacht and create lasting memories. Book your birthday party yacht boat today."
                  />
                </Helmet>
                <Navbar />
                <BirthdayParty />
                <FAQ />
                <Footer />
              </>
            }
          />
          <Route
            path="/Wedding"
            element={
              <>
                <Helmet>
                  <title>
                    Yacht Rental for Wedding and Anniversary in Dubai
                  </title>
                  <meta
                    name="description"
                    content="Celebrate your special moments with our exclusive wedding and anniversary yacht rental packages in Dubai. Book now and create memories aboard our luxury yachts."
                  />
                </Helmet>
                <Navbar />
                <Wedding />
                <FAQ />
                <Footer />
              </>
            }
          />
          <Route
            path="/Package/CorporateEvents"
            element={
              <>
                <Helmet>
                  <title>
                    Corporate yacht charter, Dubai Event Yachts, Dubai Corporate
                    Yacht Party
                  </title>
                  <meta
                    name="description"
                    content="Book Your Corporate Yacht Charter With Our Dubai Event Yachts . Our Premium Yachts Service offers variety of Corporate Yacht  Party Services At Dubai Mairna. We have variety of luxurious Yachts at dubai."
                  />
                </Helmet>
                <Navbar />
                <CorporateEvents />
                <FAQ />
                <Footer />
              </>
            }
          />
          <Route
            path="/Package/WaterSports"
            element={
              <>
                <Helmet>
                  <title>
                    Yacht Rental with Water Sports Packages, Best Water sport in
                    dubai
                  </title>
                  <meta
                    name="description"
                    content="Gulf Yachts Provides Yacht Rental with Water Sports Packages in Dubai. Best Water Sports Activities in Dubai like Jetski ride Dubai , banana boat ride , Flyboarding, parasailing Dubai Mairna ."
                  />
                </Helmet>
                <Navbar />
                <WaterSports />
                <FAQ />
                <Footer />
              </>
            }
          />
          <Route
            path="/packages/watersports/jetski"
            element={
              <>
                <Helmet>
                  <title>
                    Luxury Boat & Yacht Rental in Dubai - Gulf Yachts Dubai
                  </title>
                  <meta
                    name="description"
                    content="Gulf Yachts Dubai, one of the best Luxury Boat & Yacht Rental Companies in Dubai. Gulf Yachts Dubai is an award-winning #1 Luxury Yacht Rental Company in Dubai Marina."
                  />
                </Helmet>
                <Navbar />
                <Jetski />
                <FAQ />
                <Footer />
              </>
            }
          />
          <Route
            path="/packages/watersports/donut-rides"
            element={
              <>
                <Helmet>
                  <title>
                    Luxury Boat & Yacht Rental in Dubai - Gulf Yachts Dubai
                  </title>
                  <meta
                    name="description"
                    content="Gulf Yachts Dubai, one of the best Luxury Boat & Yacht Rental Companies in Dubai. Gulf Yachts Dubai is an award-winning #1 Luxury Yacht Rental Company in Dubai Marina."
                  />
                </Helmet>
                <Navbar />
                <DonutRides />
                <FAQ />
                <Footer />
              </>
            }
          />
          <Route
            path="/packages/watersports/banana-rides"
            element={
              <>
                <Helmet>
                  <title>
                    Luxury Boat & Yacht Rental in Dubai - Gulf Yachts Dubai
                  </title>
                  <meta
                    name="description"
                    content="Gulf Yachts Dubai, one of the best Luxury Boat & Yacht Rental Companies in Dubai. Gulf Yachts Dubai is an award-winning #1 Luxury Yacht Rental Company in Dubai Marina."
                  />
                </Helmet>
                <Navbar />
                <BananaRides />
                <FAQ />
                <Footer />
              </>
            }
          />
          <Route
            path="/packages/watersports/wakeboards"
            element={
              <>
                <Helmet>
                  <title>
                    Luxury Boat & Yacht Rental in Dubai - Gulf Yachts Dubai
                  </title>
                  <meta
                    name="description"
                    content="Gulf Yachts Dubai, one of the best Luxury Boat & Yacht Rental Companies in Dubai. Gulf Yachts Dubai is an award-winning #1 Luxury Yacht Rental Company in Dubai Marina."
                  />
                </Helmet>
                <Navbar />
                <WakeBoards />
                <FAQ />
                <Footer />
              </>
            }
          />
          <Route
            path="/packages/watersports/flyboards"
            element={
              <>
                <Helmet>
                  <title>
                    Luxury Boat & Yacht Rental in Dubai - Gulf Yachts Dubai
                  </title>
                  <meta
                    name="description"
                    content="Gulf Yachts Dubai, one of the best Luxury Boat & Yacht Rental Companies in Dubai. Gulf Yachts Dubai is an award-winning #1 Luxury Yacht Rental Company in Dubai Marina."
                  />
                </Helmet>
                <Navbar />
                <FlyBoards />
                <FAQ />
                <Footer />
              </>
            }
          />
          <Route
            path="/packages/watersports/parasailing"
            element={
              <>
                <Helmet>
                  <title>
                    Luxury Boat & Yacht Rental in Dubai - Gulf Yachts Dubai
                  </title>
                  <meta
                    name="description"
                    content="Gulf Yachts Dubai, one of the best Luxury Boat & Yacht Rental Companies in Dubai. Gulf Yachts Dubai is an award-winning #1 Luxury Yacht Rental Company in Dubai Marina."
                  />
                </Helmet>
                <Navbar />
                <Parasailing />
                <FAQ />
                <Footer />
              </>
            }
          />

          <Route
            path="/35feet"
            element={
              <>
                <Helmet>
                  <title>
                    Luxury Boat & Yacht Rental in Dubai - Gulf Yachts Dubai
                  </title>
                  <meta
                    name="description"
                    content="Gulf Yachts Dubai, one of the best Luxury Boat & Yacht Rental Companies in Dubai. Gulf Yachts Dubai is an award-winning #1 Luxury Yacht Rental Company in Dubai Marina."
                  />
                </Helmet>
                <Navbar />
                <Feet35 />
                <FAQ />
                <Footer />
              </>
            }
          />
          <Route
            path="/Yachts/feet40"
            element={
              <>
                <Helmet>
                  <title>
                    Luxury Boat & Yacht Rental in Dubai - Gulf Yachts Dubai
                  </title>
                  <meta
                    name="description"
                    content="Gulf Yachts Dubai, one of the best Luxury Boat & Yacht Rental Companies in Dubai. Gulf Yachts Dubai is an award-winning #1 Luxury Yacht Rental Company in Dubai Marina."
                  />
                </Helmet>
                <Navbar />
                <Feet40 />
                <FAQ />
                <Footer />
              </>
            }
          />
          <Route
            path="/Yachts/feet42"
            element={
              <>
                <Helmet>
                  <title>
                    Luxury Boat & Yacht Rental in Dubai - Gulf Yachts Dubai
                  </title>
                  <meta
                    name="description"
                    content="Gulf Yachts Dubai, one of the best Luxury Boat & Yacht Rental Companies in Dubai. Gulf Yachts Dubai is an award-winning #1 Luxury Yacht Rental Company in Dubai Marina."
                  />
                </Helmet>
                <Navbar />
                <Feet42 />
                <FAQ />
                <Footer />
              </>
            }
          />

          <Route
            path="/Yachts/feet45"
            element={
              <>
                <Helmet>
                  <title>
                    Luxury Boat & Yacht Rental in Dubai - Gulf Yachts Dubai
                  </title>
                  <meta
                    name="description"
                    content="Gulf Yachts Dubai, one of the best Luxury Boat & Yacht Rental Companies in Dubai. Gulf Yachts Dubai is an award-winning #1 Luxury Yacht Rental Company in Dubai Marina."
                  />
                </Helmet>
                <Navbar />
                <Feet45 />
                <FAQ />
                <Footer />
              </>
            }
          />
          <Route
            path="/Yachts/feet45_"
            element={
              <>
                <Helmet>
                  <title>
                    Luxury Boat & Yacht Rental in Dubai - Gulf Yachts Dubai
                  </title>
                  <meta
                    name="description"
                    content="Gulf Yachts Dubai, one of the best Luxury Boat & Yacht Rental Companies in Dubai. Gulf Yachts Dubai is an award-winning #1 Luxury Yacht Rental Company in Dubai Marina."
                  />
                </Helmet>
                <Navbar />
                <Again_Ft45 />
                <FAQ />
                <Footer />
              </>
            }
          />
          <Route
            path="/Yachts/feet50"
            element={
              <>
                <Helmet>
                  <title>
                    Luxury Boat & Yacht Rental in Dubai - Gulf Yachts Dubai
                  </title>
                  <meta
                    name="description"
                    content="Gulf Yachts Dubai, one of the best Luxury Boat & Yacht Rental Companies in Dubai. Gulf Yachts Dubai is an award-winning #1 Luxury Yacht Rental Company in Dubai Marina."
                  />
                </Helmet>
                <Navbar />
                <Feet50 />
                <FAQ />
                <Footer />
              </>
            }
          />
          <Route
            path="/Yachts/50 feet yacht"
            element={
              <>
                <Helmet>
                  <title>
                    Luxury Boat & Yacht Rental in Dubai - Gulf Yachts Dubai
                  </title>
                  <meta
                    name="description"
                    content="Gulf Yachts Dubai, one of the best Luxury Boat & Yacht Rental Companies in Dubai. Gulf Yachts Dubai is an award-winning #1 Luxury Yacht Rental Company in Dubai Marina."
                  />
                </Helmet>
                <Navbar />
                <AzimuthFeet50 />
                <FAQ />
                <Footer />
              </>
            }
          />
          <Route
            path="/Yachts/feet50-nova"
            element={
              <>
                <Helmet>
                  <title>
                    Luxury Boat & Yacht Rental in Dubai - Gulf Yachts Dubai
                  </title>
                  <meta
                    name="description"
                    content="Gulf Yachts Dubai, one of the best Luxury Boat & Yacht Rental Companies in Dubai. Gulf Yachts Dubai is an award-winning #1 Luxury Yacht Rental Company in Dubai Marina."
                  />
                </Helmet>
                <Navbar />
                <Ft50Nova />
                <FAQ />
                <Footer />
              </>
            }
          />
          <Route
            path="/Yachts/feet yacht"
            element={
              <>
                <Helmet>
                  <title>
                    Luxury Boat & Yacht Rental in Dubai - Gulf Yachts Dubai
                  </title>
                  <meta
                    name="description"
                    content="Gulf Yachts Dubai, one of the best Luxury Boat & Yacht Rental Companies in Dubai. Gulf Yachts Dubai is an award-winning #1 Luxury Yacht Rental Company in Dubai Marina."
                  />
                </Helmet>
                <Navbar />
                <LuxuryFeet50 />
                <FAQ />
                <Footer />
              </>
            }
          />
          <Route
            path="/Yachts/feet52"
            element={
              <>
                <Helmet>
                  <title>
                    Luxury Boat & Yacht Rental in Dubai - Gulf Yachts Dubai
                  </title>
                  <meta
                    name="description"
                    content="Gulf Yachts Dubai, one of the best Luxury Boat & Yacht Rental Companies in Dubai. Gulf Yachts Dubai is an award-winning #1 Luxury Yacht Rental Company in Dubai Marina."
                  />
                </Helmet>
                <Navbar />
                <Feet52 />
                <FAQ />
                <Footer />
              </>
            }
          />
          <Route
            path="/Yachts/feet55"
            element={
              <>
                <Helmet>
                  <title>
                    Luxury Boat & Yacht Rental in Dubai - Gulf Yachts Dubai
                  </title>
                  <meta
                    name="description"
                    content="Gulf Yachts Dubai, one of the best Luxury Boat & Yacht Rental Companies in Dubai. Gulf Yachts Dubai is an award-winning #1 Luxury Yacht Rental Company in Dubai Marina."
                  />
                </Helmet>
                <Navbar />
                <Feet55 />
                <FAQ />
                <Footer />
              </>
            }
          />
          <Route
            path="/Yachts/feet56"
            element={
              <>
                <Helmet>
                  <title>
                    Luxury Boat & Yacht Rental in Dubai - Gulf Yachts Dubai
                  </title>
                  <meta
                    name="description"
                    content="Gulf Yachts Dubai, one of the best Luxury Boat & Yacht Rental Companies in Dubai. Gulf Yachts Dubai is an award-winning #1 Luxury Yacht Rental Company in Dubai Marina."
                  />
                </Helmet>
                <Navbar />
                <Feet56 />
                <FAQ />
                <Footer />
              </>
            }
          />
          <Route
            path="/Yachts/feet56-majesty"
            element={
              <>
                <Helmet>
                  <title>
                    Luxury Boat & Yacht Rental in Dubai - Gulf Yachts Dubai
                  </title>
                  <meta
                    name="description"
                    content="Gulf Yachts Dubai, one of the best Luxury Boat & Yacht Rental Companies in Dubai. Gulf Yachts Dubai is an award-winning #1 Luxury Yacht Rental Company in Dubai Marina."
                  />
                </Helmet>
                <Navbar />
                <Ft56Majesty />
                <FAQ />
                <Footer />
              </>
            }
          />
          <Route
            path="/Yachts/feet60"
            element={
              <>
                <Helmet>
                  <title>
                    Luxury Boat & Yacht Rental in Dubai - Gulf Yachts Dubai
                  </title>
                  <meta
                    name="description"
                    content="Gulf Yachts Dubai, one of the best Luxury Boat & Yacht Rental Companies in Dubai. Gulf Yachts Dubai is an award-winning #1 Luxury Yacht Rental Company in Dubai Marina."
                  />
                </Helmet>
                <Navbar />
                <Feet60 />
                <FAQ />
                <Footer />
              </>
            }
          />
          <Route
            path="/princessfeet60"
            element={
              <>
                <Helmet>
                  <title>
                    Luxury Boat & Yacht Rental in Dubai - Gulf Yachts Dubai
                  </title>
                  <meta
                    name="description"
                    content="Gulf Yachts Dubai, one of the best Luxury Boat & Yacht Rental Companies in Dubai. Gulf Yachts Dubai is an award-winning #1 Luxury Yacht Rental Company in Dubai Marina."
                  />
                </Helmet>
                <Navbar />
                <PrincessFeet60 />
                <FAQ />
                <Footer />
              </>
            }
          />
          <Route
            path="/Yachts/yacht feet62"
            element={
              <>
                <Helmet>
                  <title>
                    Luxury Boat & Yacht Rental in Dubai - Gulf Yachts Dubai
                  </title>
                  <meta
                    name="description"
                    content="Gulf Yachts Dubai, one of the best Luxury Boat & Yacht Rental Companies in Dubai. Gulf Yachts Dubai is an award-winning #1 Luxury Yacht Rental Company in Dubai Marina."
                  />
                </Helmet>
                <Navbar />
                <Feet62 />
                <FAQ />
                <Footer />
              </>
            }
          />
          <Route
            path="/Yachts/feet62_"
            element={
              <>
                <Helmet>
                  <title>
                    Luxury Boat & Yacht Rental in Dubai - Gulf Yachts Dubai
                  </title>
                  <meta
                    name="description"
                    content="Gulf Yachts Dubai, one of the best Luxury Boat & Yacht Rental Companies in Dubai. Gulf Yachts Dubai is an award-winning #1 Luxury Yacht Rental Company in Dubai Marina."
                  />
                </Helmet>
                <Navbar />
                <Again_Feet62 />
                <FAQ />
                <Footer />
              </>
            }
          />
          <Route
            path="/Yachts/feet65"
            element={
              <>
                <Helmet>
                  <title>
                    Luxury Boat & Yacht Rental in Dubai - Gulf Yachts Dubai
                  </title>
                  <meta
                    name="description"
                    content="Gulf Yachts Dubai, one of the best Luxury Boat & Yacht Rental Companies in Dubai. Gulf Yachts Dubai is an award-winning #1 Luxury Yacht Rental Company in Dubai Marina."
                  />
                </Helmet>
                <Navbar />
                <Ft65 />
                <FAQ />
                <Footer />
              </>
            }
          />
          <Route
            path="/Yachts/feet70"
            element={
              <>
                <Helmet>
                  <title>
                    Luxury Boat & Yacht Rental in Dubai - Gulf Yachts Dubai
                  </title>
                  <meta
                    name="description"
                    content="Gulf Yachts Dubai, one of the best Luxury Boat & Yacht Rental Companies in Dubai. Gulf Yachts Dubai is an award-winning #1 Luxury Yacht Rental Company in Dubai Marina."
                  />
                </Helmet>
                <Navbar />
                <Feet70 />
                <FAQ />
                <Footer />
              </>
            }
          />
          <Route
            path="/Yachts/70feetyacht"
            element={
              <>
                <Helmet>
                  <title>
                    Luxury Boat & Yacht Rental in Dubai - Gulf Yachts Dubai
                  </title>
                  <meta
                    name="description"
                    content="Gulf Yachts Dubai, one of the best Luxury Boat & Yacht Rental Companies in Dubai. Gulf Yachts Dubai is an award-winning #1 Luxury Yacht Rental Company in Dubai Marina."
                  />
                </Helmet>
                <Navbar />
                <Again_Feet70 />
                <FAQ />
                <Footer />
              </>
            }
          />
          <Route
            path="/Yachts/feet75 yacht"
            element={
              <>
                <Helmet>
                  <title>
                    Luxury Boat & Yacht Rental in Dubai - Gulf Yachts Dubai
                  </title>
                  <meta
                    name="description"
                    content="Gulf Yachts Dubai, one of the best Luxury Boat & Yacht Rental Companies in Dubai. Gulf Yachts Dubai is an award-winning #1 Luxury Yacht Rental Company in Dubai Marina."
                  />
                </Helmet>
                <Navbar />
                <Ft75 />
                <FAQ />
                <Footer />
              </>
            }
          />
          <Route
            path="/Yachts/_feet75"
            element={
              <>
                <Helmet>
                  <title>
                    Luxury Boat & Yacht Rental in Dubai - Gulf Yachts Dubai
                  </title>
                  <meta
                    name="description"
                    content="Gulf Yachts Dubai, one of the best Luxury Boat & Yacht Rental Companies in Dubai. Gulf Yachts Dubai is an award-winning #1 Luxury Yacht Rental Company in Dubai Marina."
                  />
                </Helmet>
                <Navbar />
                <Again_ft75 />
                <FAQ />
                <Footer />
              </>
            }
          />

          <Route
            path="/Yachts/feet80"
            element={
              <>
                <Helmet>
                  <title>
                    Luxury Boat & Yacht Rental in Dubai - Gulf Yachts Dubai
                  </title>
                  <meta
                    name="description"
                    content="Gulf Yachts Dubai, one of the best Luxury Boat & Yacht Rental Companies in Dubai. Gulf Yachts Dubai is an award-winning #1 Luxury Yacht Rental Company in Dubai Marina."
                  />
                </Helmet>
                <Navbar />
                <Ft80 />
                <FAQ />
                <Footer />
              </>
            }
          />
          <Route
            path="/Yachts/_feet80"
            element={
              <>
                <Helmet>
                  <title>
                    Luxury Boat & Yacht Rental in Dubai - Gulf Yachts Dubai
                  </title>
                  <meta
                    name="description"
                    content="Gulf Yachts Dubai, one of the best Luxury Boat & Yacht Rental Companies in Dubai. Gulf Yachts Dubai is an award-winning #1 Luxury Yacht Rental Company in Dubai Marina."
                  />
                </Helmet>
                <Navbar />
                <Again_ft80 />
                <FAQ />
                <Footer />
              </>
            }
          />
          <Route
            path="/Yachts/feet80_premium"
            element={
              <>
                <Helmet>
                  <title>
                    Luxury Boat & Yacht Rental in Dubai - Gulf Yachts Dubai
                  </title>
                  <meta
                    name="description"
                    content="Gulf Yachts Dubai, one of the best Luxury Boat & Yacht Rental Companies in Dubai. Gulf Yachts Dubai is an award-winning #1 Luxury Yacht Rental Company in Dubai Marina."
                  />
                </Helmet>
                <Navbar />
                <Ft80Premium />
                <FAQ />
                <Footer />
              </>
            }
          />
          <Route
            path="/Yachts/feet85"
            element={
              <>
                <Helmet>
                  <title>
                    Luxury Boat & Yacht Rental in Dubai - Gulf Yachts Dubai
                  </title>
                  <meta
                    name="description"
                    content="Gulf Yachts Dubai, one of the best Luxury Boat & Yacht Rental Companies in Dubai. Gulf Yachts Dubai is an award-winning #1 Luxury Yacht Rental Company in Dubai Marina."
                  />
                </Helmet>
                <Navbar />
                <Feet85 />
                <FAQ />
                <Footer />
              </>
            }
          />
          <Route
            path="/Yachts/_feet85"
            element={
              <>
                <Helmet>
                  <title>
                    Luxury Boat & Yacht Rental in Dubai - Gulf Yachts Dubai
                  </title>
                  <meta
                    name="description"
                    content="Gulf Yachts Dubai, one of the best Luxury Boat & Yacht Rental Companies in Dubai. Gulf Yachts Dubai is an award-winning #1 Luxury Yacht Rental Company in Dubai Marina."
                  />
                </Helmet>
                <Navbar />
                <Again_ft85 />
                <FAQ />
                <Footer />
              </>
            }
          />

          <Route
            path="/Yachts/_feet88"
            element={
              <>
                <Helmet>
                  <title>
                    Luxury Boat & Yacht Rental in Dubai - Gulf Yachts Dubai
                  </title>
                  <meta
                    name="description"
                    content="Gulf Yachts Dubai, one of the best Luxury Boat & Yacht Rental Companies in Dubai. Gulf Yachts Dubai is an award-winning #1 Luxury Yacht Rental Company in Dubai Marina."
                  />
                </Helmet>
                <Navbar />
                <Again_Feet88 />
                <FAQ />
                <Footer />
              </>
            }
          />
          <Route
            path="/Yachts/feet88"
            element={
              <>
                <Helmet>
                  <title>
                    Luxury Boat & Yacht Rental in Dubai - Gulf Yachts Dubai
                  </title>
                  <meta
                    name="description"
                    content="Gulf Yachts Dubai, one of the best Luxury Boat & Yacht Rental Companies in Dubai. Gulf Yachts Dubai is an award-winning #1 Luxury Yacht Rental Company in Dubai Marina."
                  />
                </Helmet>
                <Navbar />
                <Feet88 />
                <FAQ />
                <Footer />
              </>
            }
          />
          <Route
            path="/Yachts/feet90"
            element={
              <>
                <Helmet>
                  <title>
                    Luxury Boat & Yacht Rental in Dubai - Gulf Yachts Dubai
                  </title>
                  <meta
                    name="description"
                    content="Gulf Yachts Dubai, one of the best Luxury Boat & Yacht Rental Companies in Dubai. Gulf Yachts Dubai is an award-winning #1 Luxury Yacht Rental Company in Dubai Marina."
                  />
                </Helmet>
                <Navbar />
                <Feet90 />
                <FAQ />
                <Footer />
              </>
            }
          />
          <Route
            path="/Yachts/feet95"
            element={
              <>
                <Helmet>
                  <title>
                    Luxury Boat & Yacht Rental in Dubai - Gulf Yachts Dubai
                  </title>
                  <meta
                    name="description"
                    content="Gulf Yachts Dubai, one of the best Luxury Boat & Yacht Rental Companies in Dubai. Gulf Yachts Dubai is an award-winning #1 Luxury Yacht Rental Company in Dubai Marina."
                  />
                </Helmet>
                <Navbar />
                <Feet95 />
                <FAQ />
                <Footer />
              </>
            }
          />
          <Route
            path="/Yachts/feet96"
            element={
              <>
                <Helmet>
                  <title>
                    Luxury Boat & Yacht Rental in Dubai - Gulf Yachts Dubai
                  </title>
                  <meta
                    name="description"
                    content="Gulf Yachts Dubai, one of the best Luxury Boat & Yacht Rental Companies in Dubai. Gulf Yachts Dubai is an award-winning #1 Luxury Yacht Rental Company in Dubai Marina."
                  />
                </Helmet>
                <Navbar />
                <Feet96 />
                <FAQ />
                <Footer />
              </>
            }
          />
          <Route
            path="/Yachts/feet100"
            element={
              <>
                <Helmet>
                  <title>
                    Luxury Boat & Yacht Rental in Dubai - Gulf Yachts Dubai
                  </title>
                  <meta
                    name="description"
                    content="Gulf Yachts Dubai, one of the best Luxury Boat & Yacht Rental Companies in Dubai. Gulf Yachts Dubai is an award-winning #1 Luxury Yacht Rental Company in Dubai Marina."
                  />
                </Helmet>
                <Navbar />
                <Feet100 />
                <FAQ />
                <Footer />
              </>
            }
          />
          <Route
            path="/Yachts/_feet100"
            element={
              <>
                <Helmet>
                  <title>
                    Luxury Boat & Yacht Rental in Dubai - Gulf Yachts Dubai
                  </title>
                  <meta
                    name="description"
                    content="Gulf Yachts Dubai, one of the best Luxury Boat & Yacht Rental Companies in Dubai. Gulf Yachts Dubai is an award-winning #1 Luxury Yacht Rental Company in Dubai Marina."
                  />
                </Helmet>
                <Navbar />
                <Again_Feet100 />
                <FAQ />
                <Footer />
              </>
            }
          />
          <Route
            path="/Yachts/feet101"
            element={
              <>
                <Helmet>
                  <title>
                    Luxury Boat & Yacht Rental in Dubai - Gulf Yachts Dubai
                  </title>
                  <meta
                    name="description"
                    content="Gulf Yachts Dubai, one of the best Luxury Boat & Yacht Rental Companies in Dubai. Gulf Yachts Dubai is an award-winning #1 Luxury Yacht Rental Company in Dubai Marina."
                  />
                </Helmet>
                <Navbar />
                <Feet101 />
                <FAQ />
                <Footer />
              </>
            }
          />
          <Route
            path="/Yachts/110feet"
            element={
              <>
                <Helmet>
                  <title>
                    Luxury Boat & Yacht Rental in Dubai - Gulf Yachts Dubai
                  </title>
                  <meta
                    name="description"
                    content="Gulf Yachts Dubai, one of the best Luxury Boat & Yacht Rental Companies in Dubai. Gulf Yachts Dubai is an award-winning #1 Luxury Yacht Rental Company in Dubai Marina."
                  />
                </Helmet>
                <Navbar />
                <Feet110 />
                <FAQ />
                <Footer />
              </>
            }
          />
          <Route
            path="/Yachts/feet120"
            element={
              <>
                <Helmet>
                  <title>
                    Luxury Boat & Yacht Rental in Dubai - Gulf Yachts Dubai
                  </title>
                  <meta
                    name="description"
                    content="Gulf Yachts Dubai, one of the best Luxury Boat & Yacht Rental Companies in Dubai. Gulf Yachts Dubai is an award-winning #1 Luxury Yacht Rental Company in Dubai Marina."
                  />
                </Helmet>
                <Navbar />
                <Feet120 />
                <FAQ />
                <Footer />
              </>
            }
          />
          <Route
            path="/Yachts/feet135"
            element={
              <>
                <Helmet>
                  <title>
                    Luxury Boat & Yacht Rental in Dubai - Gulf Yachts Dubai
                  </title>
                  <meta
                    name="description"
                    content="Gulf Yachts Dubai, one of the best Luxury Boat & Yacht Rental Companies in Dubai. Gulf Yachts Dubai is an award-winning #1 Luxury Yacht Rental Company in Dubai Marina."
                  />
                </Helmet>
                <Navbar />
                <Feet135 />
                <FAQ />
                <Footer />
              </>
            }
          />
          <Route
            path="/Yachts/feet140"
            element={
              <>
                <Helmet>
                  <title>
                    Luxury Boat & Yacht Rental in Dubai - Gulf Yachts Dubai
                  </title>
                  <meta
                    name="description"
                    content="Gulf Yachts Dubai, one of the best Luxury Boat & Yacht Rental Companies in Dubai. Gulf Yachts Dubai is an award-winning #1 Luxury Yacht Rental Company in Dubai Marina."
                  />
                </Helmet>
                <Navbar />
                <Feet140 />
                <FAQ />
                <Footer />
              </>
            }
          />
          <Route
            path="/Yachts/feet155"
            element={
              <>
                <Helmet>
                  <title>
                    Luxury Boat & Yacht Rental in Dubai - Gulf Yachts Dubai
                  </title>
                  <meta
                    name="description"
                    content="Gulf Yachts Dubai, one of the best Luxury Boat & Yacht Rental Companies in Dubai. Gulf Yachts Dubai is an award-winning #1 Luxury Yacht Rental Company in Dubai Marina."
                  />
                </Helmet>
                <Navbar />
                <Feet155 />
                <FAQ />
                <Footer />
              </>
            }
          />
          <Route
            path="/Yachts/feet164 yacht"
            element={
              <>
                <Helmet>
                  <title>
                    Luxury Boat & Yacht Rental in Dubai - Gulf Yachts Dubai
                  </title>
                  <meta
                    name="description"
                    content="Gulf Yachts Dubai, one of the best Luxury Boat & Yacht Rental Companies in Dubai. Gulf Yachts Dubai is an award-winning #1 Luxury Yacht Rental Company in Dubai Marina."
                  />
                </Helmet>
                <Navbar />
                <Feet164 />
                <FAQ />
                <Footer />
              </>
            }
          />
          <Route
            path="/Yachts/feet240"
            element={
              <>
                <Helmet>
                  <title>
                    Luxury Boat & Yacht Rental in Dubai - Gulf Yachts Dubai
                  </title>
                  <meta
                    name="description"
                    content="Gulf Yachts Dubai, one of the best Luxury Boat & Yacht Rental Companies in Dubai. Gulf Yachts Dubai is an award-winning #1 Luxury Yacht Rental Company in Dubai Marina."
                  />
                </Helmet>
                <Navbar />
                <Feet240 />
                <FAQ />
                <Footer />
              </>
            }
          />
        </Routes>
      </div>
    </>
  );
}

export default App;
