// App.js
import React from "react";
import YachtCard from "./YachtCard";
import "./CharterYachts.css";
import Page4 from "../page4/page4.jsx";

//  <-----   feet 80 images ------->
import ft80_1 from "../../assets/charter/80ft/80ft_1.jpg";
import ft80_2 from "../../assets/charter/80ft/80ft_2.jpg";
import ft80_3 from "../../assets/charter/80ft/80ft_3.jpg";
import ft80_4 from "../../assets/charter/80ft/80ft_4.jpg";
import ft80_5 from "../../assets/charter/80ft/80ft_5.jpg";
import ft80_6 from "../../assets/charter/80ft/80ft_6.jpg";
import ft80_7 from "../../assets/charter/80ft/80ft_7.jpg";
import ft80_8 from "../../assets/charter/80ft/80ft_8.jpg";
import ft80_9 from "../../assets/charter/80ft/80ft_9.jpg";
import ft80_10 from "../../assets/charter/80ft/80ft_10.jpg";
import ft80_11 from "../../assets/charter/80ft/80ft_11.jpg";
import ft80_12 from "../../assets/charter/80ft/80ft_12.jpg";
import ft80_13 from "../../assets/charter/80ft/80ft_13.jpg";
import ft80_14 from "../../assets/charter/80ft/80ft_14.jpg";
import ft80_15 from "../../assets/charter/80ft/80ft_15.jpg";

//  <-----   again feet 80 images ------->
import again_ft80_1 from "../../assets/charter/again 80ft/again 80ft_1.jpg";
import again_ft80_2 from "../../assets/charter/again 80ft/again 80ft_2.jpg";
import again_ft80_3 from "../../assets/charter/again 80ft/again 80ft_3.jpg";
import again_ft80_4 from "../../assets/charter/again 80ft/again 80ft_4.jpg";
import again_ft80_5 from "../../assets/charter/again 80ft/again 80ft_5.jpg";
import again_ft80_6 from "../../assets/charter/again 80ft/again 80ft_6.jpg";
import again_ft80_7 from "../../assets/charter/again 80ft/again 80ft_7.jpg";
import again_ft80_8 from "../../assets/charter/again 80ft/again 80ft_8.jpg";
import again_ft80_9 from "../../assets/charter/again 80ft/again 80ft_9.jpg";
import again_ft80_10 from "../../assets/charter/again 80ft/again 80ft_10.jpg";
import again_ft80_11 from "../../assets/charter/again 80ft/again 80ft_11.jpg";
import again_ft80_12 from "../../assets/charter/again 80ft/again 80ft_12.jpg";
import again_ft80_13 from "../../assets/charter/again 80ft/again 80ft_13.jpg";
import again_ft80_14 from "../../assets/charter/again 80ft/again 80ft_14.jpg";
import again_ft80_15 from "../../assets/charter/again 80ft/again 80ft_15.jpg";
import again_ft80_16 from "../../assets/charter/again 80ft/again 80ft_16.jpg";
import again_ft80_17 from "../../assets/charter/again 80ft/again 80ft_17.jpg";
import again_ft80_18 from "../../assets/charter/again 80ft/again 80ft_18.jpg";
import again_ft80_19 from "../../assets/charter/again 80ft/again 80ft_19.jpg";

//  <-----   premium feet 80 images ------->
import premium_ft80_1 from "../../assets/80 feet premium/80 feet premium_1.jpg";
import premium_ft80_2 from "../../assets/80 feet premium/80 feet premium_2.jpg";
import premium_ft80_3 from "../../assets/80 feet premium/80 feet premium_3.jpg";
import premium_ft80_4 from "../../assets/80 feet premium/80 feet premium_4.jpg";
import premium_ft80_5 from "../../assets/80 feet premium/80 feet premium_5.jpg";
import premium_ft80_6 from "../../assets/80 feet premium/80 feet premium_6.jpg";
import premium_ft80_7 from "../../assets/80 feet premium/80 feet premium_7.jpg";
import premium_ft80_8 from "../../assets/80 feet premium/80 feet premium_8.jpg";
import premium_ft80_9 from "../../assets/80 feet premium/80 feet premium_9.jpg";

//  <-----   feet 85 images ------->
import ft85_1 from "../../assets/charter/85ft/85ft_1.jpg";
import ft85_2 from "../../assets/charter/85ft/85ft_2.jpg";
import ft85_3 from "../../assets/charter/85ft/85ft_3.jpg";
import ft85_4 from "../../assets/charter/85ft/85ft_4.jpg";
import ft85_5 from "../../assets/charter/85ft/85ft_5.jpg";
import ft85_6 from "../../assets/charter/85ft/85ft_6.jpg";
import ft85_7 from "../../assets/charter/85ft/85ft_7.jpg";
import ft85_8 from "../../assets/charter/85ft/85ft_8.jpg";
import ft85_9 from "../../assets/charter/85ft/85ft_9.jpg";
import ft85_10 from "../../assets/charter/85ft/85ft_10.jpg";

//  <-----   again feet 85 images ------->
import feet85_1 from "../../assets/85 feet/feet85_1.jpg";
import feet85_2 from "../../assets/85 feet/feet85_2.jpg";
import feet85_3 from "../../assets/85 feet/feet85_3.jpg";
import feet85_4 from "../../assets/85 feet/feet85_4.jpg";
import feet85_5 from "../../assets/85 feet/feet85_5.jpg";
import feet85_6 from "../../assets/85 feet/feet85_6.jpg";
import feet85_7 from "../../assets/85 feet/feet85_7.jpg";
import feet85_8 from "../../assets/85 feet/feet85_8.jpg";
import feet85_9 from "../../assets/85 feet/feet85_9.jpg";
import feet85_10 from "../../assets/85 feet/feet85_10.jpg";
import feet85_11 from "../../assets/85 feet/feet85_11.jpg";
import feet85_12 from "../../assets/85 feet/feet85_12.jpg";
import feet85_13 from "../../assets/85 feet/feet85_13.jpg";
import feet85_14 from "../../assets/85 feet/feet85_14.jpg";
import feet85_15 from "../../assets/85 feet/feet85_15.jpg";
import feet85_16 from "../../assets/85 feet/feet85_16.jpg";
import feet85_17 from "../../assets/85 feet/feet85_17.jpg";
import feet85_18 from "../../assets/85 feet/feet85_18.jpg";
import feet85_19 from "../../assets/85 feet/feet85_19.jpg";
import feet85_20 from "../../assets/85 feet/feet85_20.jpg";
import feet85_21 from "../../assets/85 feet/feet85_21.jpg";
import feet85_22 from "../../assets/85 feet/feet85_22.jpg";
import feet85_23 from "../../assets/85 feet/feet85_23.jpg";
import feet85_24 from "../../assets/85 feet/feet85_24.jpg";
import feet85_25 from "../../assets/85 feet/feet85_25.jpg";

//  <-----   feet 88 images ------->
import ft88_1 from "../../assets/85 feet/feet85_1.jpg";
import ft88_2 from "../../assets/85 feet/feet85_2.jpg";
import ft88_3 from "../../assets/85 feet/feet85_3.jpg";
import ft88_4 from "../../assets/85 feet/feet85_4.jpg";
import ft88_5 from "../../assets/85 feet/feet85_5.jpg";
import ft88_6 from "../../assets/85 feet/feet85_6.jpg";
import ft88_7 from "../../assets/85 feet/feet85_7.jpg";
import ft88_8 from "../../assets/85 feet/feet85_8.jpg";
import ft88_9 from "../../assets/85 feet/feet85_9.jpg";
import ft88_10 from "../../assets/85 feet/feet85_10.jpg";
import ft88_11 from "../../assets/85 feet/feet85_11.jpg";
import ft88_12 from "../../assets/85 feet/feet85_12.jpg";
import ft88_13 from "../../assets/85 feet/feet85_13.jpg";
import ft88_14 from "../../assets/85 feet/feet85_14.jpg";
import ft88_15 from "../../assets/85 feet/feet85_15.jpg";
import ft88_16 from "../../assets/85 feet/feet85_16.jpg";
import ft88_17 from "../../assets/85 feet/feet85_17.jpg";
import ft88_18 from "../../assets/85 feet/feet85_18.jpg";
import ft88_19 from "../../assets/85 feet/feet85_19.jpg";
import ft88_20 from "../../assets/85 feet/feet85_20.jpg";

//  <-----   brand feet 88 images ------->
import brand_ft88_1 from "../../assets/charter/brand 88ft/brand 88ft_1.jpg";
import brand_ft88_2 from "../../assets/charter/brand 88ft/brand 88ft_2.jpg";
import brand_ft88_3 from "../../assets/charter/brand 88ft/brand 88ft_3.jpg";
import brand_ft88_4 from "../../assets/charter/brand 88ft/brand 88ft_4.jpg";
import brand_ft88_5 from "../../assets/charter/brand 88ft/brand 88ft_5.jpg";
import brand_ft88_6 from "../../assets/charter/brand 88ft/brand 88ft_6.jpg";
import brand_ft88_7 from "../../assets/charter/brand 88ft/brand 88ft_7.jpg";
import brand_ft88_8 from "../../assets/charter/brand 88ft/brand 88ft_8.jpg";
import brand_ft88_9 from "../../assets/charter/brand 88ft/brand 88ft_9.jpg";
import brand_ft88_10 from "../../assets/charter/brand 88ft/brand 88ft_10.jpg";
import brand_ft88_11 from "../../assets/charter/brand 88ft/brand 88ft_11.jpg";
import brand_ft88_12 from "../../assets/charter/brand 88ft/brand 88ft_12.jpg";
import brand_ft88_13 from "../../assets/charter/brand 88ft/brand 88ft_13.jpg";

//  <-----  feet 90 images ------->
import ft90_1 from "../../assets/charter/90ft/90ft_1.jpg";
import ft90_2 from "../../assets/charter/90ft/90ft_2.jpg";
import ft90_3 from "../../assets/charter/90ft/90ft_3.jpg";
import ft90_4 from "../../assets/charter/90ft/90ft_4.jpg";
import ft90_5 from "../../assets/charter/90ft/90ft_5.jpg";
import ft90_6 from "../../assets/charter/90ft/90ft_6.jpg";
import ft90_7 from "../../assets/charter/90ft/90ft_7.jpg";
import ft90_8 from "../../assets/charter/90ft/90ft_8.jpg";
import ft90_9 from "../../assets/charter/90ft/90ft_9.jpg";

//  <-----  feet 95 images ------->
import ft95_1 from "../../assets/95 feet/feet95_1.jpg";
import ft95_2 from "../../assets/95 feet/feet95_2.jpg";
import ft95_3 from "../../assets/95 feet/feet95_3.jpg";
import ft95_4 from "../../assets/95 feet/feet95_4.jpg";
import ft95_5 from "../../assets/95 feet/feet95_5.jpg";
import ft95_6 from "../../assets/95 feet/feet95_6.jpg";
import ft95_7 from "../../assets/95 feet/feet95_7.jpg";
import ft95_8 from "../../assets/95 feet/feet95_8.jpg";
import ft95_9 from "../../assets/95 feet/feet95_9.jpg";
import ft95_10 from "../../assets/95 feet/feet95_10.jpg";
import ft95_11 from "../../assets/95 feet/feet95_11.jpg";
import ft95_12 from "../../assets/95 feet/feet95_12.jpg";
import ft95_13 from "../../assets/95 feet/feet95_13.jpg";
import ft95_14 from "../../assets/95 feet/feet95_14.jpg";
import ft95_15 from "../../assets/95 feet/feet95_15.jpg";
import ft95_16 from "../../assets/95 feet/feet95_16.jpg";
import ft95_17 from "../../assets/95 feet/feet95_17.jpg";
import ft95_18 from "../../assets/95 feet/feet95_18.jpg";
import ft95_19 from "../../assets/95 feet/feet95_19.jpg";

//  <-----   feet 96 images ------->
import feet96_1 from "../../assets/96 feet/feet96_1.jpg";
import feet96_2 from "../../assets/96 feet/feet96_2.jpg";
import feet96_3 from "../../assets/96 feet/feet96_3.jpg";
import feet96_4 from "../../assets/96 feet/feet96_4.jpg";
import feet96_5 from "../../assets/96 feet/feet96_5.jpg";
import feet96_6 from "../../assets/96 feet/feet96_6.jpg";
import feet96_7 from "../../assets/96 feet/feet96_7.jpg";
import feet96_8 from "../../assets/96 feet/feet96_8.jpg";
import feet96_9 from "../../assets/96 feet/feet96_9.jpg";
import feet96_10 from "../../assets/96 feet/feet96_10.jpg";
import feet96_11 from "../../assets/96 feet/feet96_11.jpg";
import feet96_12 from "../../assets/96 feet/feet96_12.jpg";
import feet96_13 from "../../assets/96 feet/feet96_13.jpg";
import feet96_14 from "../../assets/96 feet/feet96_14.jpg";
import feet96_15 from "../../assets/96 feet/feet96_15.jpg";
import feet96_16 from "../../assets/96 feet/feet96_16.jpg";

//  <-----  feet 100 images ------->
import ft100_1 from "../../assets/100 feet/feet100_1.jpg";
import ft100_2 from "../../assets/100 feet/feet100_2.jpg";
import ft100_3 from "../../assets/100 feet/feet100_3.jpg";
import ft100_4 from "../../assets/100 feet/feet100_4.jpg";
import ft100_5 from "../../assets/100 feet/feet100_5.jpg";
import ft100_6 from "../../assets/100 feet/feet100_6.jpg";
import ft100_7 from "../../assets/100 feet/feet100_7.jpg";
import ft100_8 from "../../assets/100 feet/feet100_8.jpg";
import ft100_9 from "../../assets/100 feet/feet100_9.jpg";
import ft100_10 from "../../assets/100 feet/feet100_10.jpg";
import ft100_11 from "../../assets/100 feet/feet100_11.jpg";
import ft100_12 from "../../assets/100 feet/feet100_12.jpg";
import ft100_13 from "../../assets/100 feet/feet100_13.jpg";
import ft100_14 from "../../assets/100 feet/feet100_14.jpg";
import ft100_15 from "../../assets/100 feet/feet100_15.jpg";
import ft100_16 from "../../assets/100 feet/feet100_16.jpg";
import ft100_17 from "../../assets/100 feet/feet100_17.jpg";
import ft100_18 from "../../assets/100 feet/feet100_18.jpg";

//  <-----  again feet 100 images ------->
import again_ft100_1 from "../../assets/charter/100ft/100ft_1.jpg";
import again_ft100_2 from "../../assets/charter/100ft/100ft_2.jpg";
import again_ft100_3 from "../../assets/charter/100ft/100ft_3.jpg";
import again_ft100_4 from "../../assets/charter/100ft/100ft_4.jpg";
import again_ft100_5 from "../../assets/charter/100ft/100ft_5.jpg";
import again_ft100_6 from "../../assets/charter/100ft/100ft_6.jpg";
import again_ft100_7 from "../../assets/charter/100ft/100ft_7.jpg";
import again_ft100_8 from "../../assets/charter/100ft/100ft_8.jpg";
import again_ft100_9 from "../../assets/charter/100ft/100ft_9.jpg";

//  <-----   feet 101 images ------->
import ft101_1 from "../../assets/charter/101ft/101ft_1.jpg";
import ft101_2 from "../../assets/charter/101ft/101ft_2.jpg";
import ft101_3 from "../../assets/charter/101ft/101ft_3.jpg";
import ft101_4 from "../../assets/charter/101ft/101ft_4.jpg";
import ft101_5 from "../../assets/charter/101ft/101ft_5.jpg";
import ft101_6 from "../../assets/charter/101ft/101ft_6.jpg";
import ft101_7 from "../../assets/charter/101ft/101ft_7.jpg";
import ft101_8 from "../../assets/charter/101ft/101ft_8.jpg";
import ft101_9 from "../../assets/charter/101ft/101ft_9.jpg";
import ft101_10 from "../../assets/charter/101ft/101ft_10.jpg";
import ft101_11 from "../../assets/charter/101ft/101ft_11.jpg";
import ft101_12 from "../../assets/charter/101ft/101ft_12.jpg";

//  <-----  feet 110 images ------->
import ft110_1 from "../../assets/110 feet/feet110_1.jpg";
import ft110_2 from "../../assets/110 feet/feet110_2.jpg";
import ft110_3 from "../../assets/110 feet/feet110_3.jpg";
import ft110_4 from "../../assets/110 feet/feet110_4.jpg";
import ft110_5 from "../../assets/110 feet/feet110_5.jpg";
import ft110_6 from "../../assets/110 feet/feet110_6.jpg";
import ft110_7 from "../../assets/110 feet/feet110_7.jpg";
import ft110_8 from "../../assets/110 feet/feet110_8.jpg";
import ft110_9 from "../../assets/110 feet/feet110_9.jpg";

//  <-----  feet 120 images ------->
import ft120_1 from "../../assets/120 feet/feet120_1.jpg";
import ft120_2 from "../../assets/120 feet/feet120_2.jpg";
import ft120_3 from "../../assets/120 feet/feet120_3.jpg";
import ft120_4 from "../../assets/120 feet/feet120_4.jpg";
import ft120_5 from "../../assets/120 feet/feet120_5.jpg";
import ft120_6 from "../../assets/120 feet/feet120_6.jpg";
import ft120_7 from "../../assets/120 feet/feet120_7.jpg";
import ft120_8 from "../../assets/120 feet/feet120_8.jpg";
import ft120_9 from "../../assets/120 feet/feet120_9.jpg";
import ft120_10 from "../../assets/120 feet/feet120_10.jpg";
import ft120_11 from "../../assets/120 feet/feet120_12.jpg";
import ft120_12 from "../../assets/120 feet/feet120_12.jpg";
import ft120_13 from "../../assets/120 feet/feet120_13.jpg";
import ft120_14 from "../../assets/120 feet/feet120_14.jpg";
import ft120_15 from "../../assets/120 feet/feet120_15.jpg";
import ft120_16 from "../../assets/120 feet/feet120_16.jpg";
import ft120_17 from "../../assets/120 feet/feet120_17.jpg";
import ft120_18 from "../../assets/120 feet/feet120_18.jpg";
import ft120_19 from "../../assets/120 feet/feet120_19.jpg";

//  <-----  feet 135 images ------->
import ft135_1 from "../../assets/charter/135ft/135ft_1.jpg";
import ft135_2 from "../../assets/charter/135ft/135ft_2.jpg";
import ft135_3 from "../../assets/charter/135ft/135ft_3.jpg";
import ft135_4 from "../../assets/charter/135ft/135ft_4.jpg";
import ft135_5 from "../../assets/charter/135ft/135ft_5.jpg";
import ft135_6 from "../../assets/charter/135ft/135ft_6.jpg";
import ft135_7 from "../../assets/charter/135ft/135ft_7.jpg";
import ft135_8 from "../../assets/charter/135ft/135ft_8.jpg";
import ft135_9 from "../../assets/charter/135ft/135ft_9.jpg";
import ft135_10 from "../../assets/charter/135ft/135ft_10.jpg";
import ft135_11 from "../../assets/charter/135ft/135ft_11.jpg";
import ft135_12 from "../../assets/charter/135ft/135ft_12.jpg";
import ft135_13 from "../../assets/charter/135ft/135ft_13.jpg";
import ft135_14 from "../../assets/charter/135ft/135ft_14.jpg";
import ft135_15 from "../../assets/charter/135ft/135ft_15.jpg";

//  <-----    feet 140 images ------->
import feet140_1 from "../../assets/140 feet/feet140_1.jpg";
import feet140_2 from "../../assets/140 feet/feet140_2.jpg";
import feet140_3 from "../../assets/140 feet/feet140_3.jpg";
import feet140_4 from "../../assets/140 feet/feet140_4.jpg";
import feet140_5 from "../../assets/140 feet/feet140_5.jpg";
import feet140_6 from "../../assets/140 feet/feet140_6.jpg";
import feet140_7 from "../../assets/140 feet/feet140_7.jpg";
import feet140_8 from "../../assets/140 feet/feet140_8.jpg";
import feet140_9 from "../../assets/140 feet/feet140_9.jpg";
import feet140_10 from "../../assets/140 feet/feet140_10.jpg";
import feet140_11 from "../../assets/140 feet/feet140_11.jpg";
import feet140_12 from "../../assets/140 feet/feet140_12.jpg";
import feet140_13 from "../../assets/140 feet/feet140_13.jpg";
import feet140_14 from "../../assets/140 feet/feet140_14.jpg";
import feet140_15 from "../../assets/140 feet/feet140_15.jpg";
import feet140_16 from "../../assets/140 feet/feet140_16.jpg";
import feet140_17 from "../../assets/140 feet/feet140_17.jpg";
import feet140_18 from "../../assets/140 feet/feet140_18.jpg";
import feet140_19 from "../../assets/140 feet/feet140_19.jpg";
import feet140_20 from "../../assets/140 feet/feet140_20.jpg";
import feet140_21 from "../../assets/140 feet/feet140_21.jpg";
import feet140_22 from "../../assets/140 feet/feet140_22.jpg";
import feet140_23 from "../../assets/140 feet/feet140_23.jpg";

//  <-----    feet 155 images ------->
import feet155_1 from "../../assets/155 feet/feet155_1.jpg";
import feet155_2 from "../../assets/155 feet/feet155_2.jpg";
import feet155_3 from "../../assets/155 feet/feet155_3.jpg";
import feet155_4 from "../../assets/155 feet/feet155_4.jpg";
import feet155_5 from "../../assets/155 feet/feet155_5.jpg";
import feet155_6 from "../../assets/155 feet/feet155_6.jpg";

//  <-----    feet 164 images ------->
import feet164_1 from "../../assets/164 feet/feet164_1.jpg";
import feet164_2 from "../../assets/164 feet/feet164_2.jpg";
import feet164_3 from "../../assets/164 feet/feet164_3.jpg";
import feet164_4 from "../../assets/164 feet/feet164_4.jpg";
import feet164_5 from "../../assets/164 feet/feet164_5.jpg";
import feet164_6 from "../../assets/164 feet/feet164_6.jpg";
import feet164_7 from "../../assets/164 feet/feet164_7.jpg";
import feet164_8 from "../../assets/164 feet/feet164_8.jpg";
import feet164_9 from "../../assets/164 feet/feet164_9.jpg";

//  <-----    feet 240 images ------->
import feet240_1 from "../../assets/240 feet/feet240_1.jpg";
import feet240_2 from "../../assets/240 feet/feet240_2.jpg";
import feet240_3 from "../../assets/240 feet/feet240_3.jpg";
import feet240_4 from "../../assets/240 feet/feet240_4.jpg";
import feet240_5 from "../../assets/240 feet/feet240_5.jpg";
import feet240_6 from "../../assets/240 feet/feet240_6.jpg";
import feet240_7 from "../../assets/240 feet/feet240_7.jpg";
import feet240_8 from "../../assets/240 feet/feet240_8.jpg";

const CharterYachts = () => {
  const yachts = [
    {
      name: "80 Feet Azimuth Yacht",
      btn: "/Yachts/feet80",
      detail:
        "80 feet / up to 35 people / cabin / fly deck / sundeck / saloon / kitchen / bedrooms",
      images: [
        { url: ft80_1, alt: "Explorer Goldeon Cigarette 31 Yacht" },
        { url: ft80_2, alt: "Explorer Goldeon Cigarette 31 Yacht" },
        { url: ft80_3, alt: "Explorer Goldeon Cigarette 31 Yacht" },
        { url: ft80_4, alt: "Explorer Goldeon Cigarette 31 Yacht" },
        { url: ft80_5, alt: "Explorer Goldeon Cigarette 31 Yacht" },
        { url: ft80_6, alt: "Explorer Goldeon Cigarette 31 Yacht" },
        { url: ft80_7, alt: "Explorer Goldeon Cigarette 31 Yacht" },
        { url: ft80_8, alt: "Explorer Goldeon Cigarette 31 Yacht" },
        { url: ft80_9, alt: "Explorer Goldeon Cigarette 31 Yacht" },
        { url: ft80_10, alt: "Explorer Goldeon Cigarette 31 Yacht" },
        { url: ft80_11, alt: "Explorer Goldeon Cigarette 31 Yacht" },
        { url: ft80_12, alt: "Explorer Goldeon Cigarette 31 Yacht" },
        { url: ft80_13, alt: "Explorer Goldeon Cigarette 31 Yacht" },
        { url: ft80_14, alt: "Explorer Goldeon Cigarette 31 Yacht" },
        { url: ft80_15, alt: "Explorer Goldeon Cigarette 31 Yacht" },
      ],
    },

    {
      name: "80 Feet Luxurious Imagine Yacht",
      btn: "/Yachts/feet80",
      detail:
        "80 feet / up to 35 people / cabin / fly deck / sundeck / saloon / kitchen / bedrooms",
      images: [
        { url: again_ft80_1, alt: "Explorer Goldeon Cigarette 31 Yacht" },
        { url: again_ft80_2, alt: "Explorer Goldeon Cigarette 31 Yacht" },
        { url: again_ft80_3, alt: "Explorer Goldeon Cigarette 31 Yacht" },
        { url: again_ft80_4, alt: "Explorer Goldeon Cigarette 31 Yacht" },
        { url: again_ft80_5, alt: "Explorer Goldeon Cigarette 31 Yacht" },
        { url: again_ft80_6, alt: "Explorer Goldeon Cigarette 31 Yacht" },
        { url: again_ft80_7, alt: "Explorer Goldeon Cigarette 31 Yacht" },
        { url: again_ft80_8, alt: "Explorer Goldeon Cigarette 31 Yacht" },
        { url: again_ft80_9, alt: "Explorer Goldeon Cigarette 31 Yacht" },
        { url: again_ft80_10, alt: "Explorer Goldeon Cigarette 31 Yacht" },
        { url: again_ft80_11, alt: "Explorer Goldeon Cigarette 31 Yacht" },
        { url: again_ft80_12, alt: "Explorer Goldeon Cigarette 31 Yacht" },
        { url: again_ft80_13, alt: "Explorer Goldeon Cigarette 31 Yacht" },
        { url: again_ft80_14, alt: "Explorer Goldeon Cigarette 31 Yacht" },
        { url: again_ft80_15, alt: "Explorer Goldeon Cigarette 31 Yacht" },
        { url: again_ft80_16, alt: "Explorer Goldeon Cigarette 31 Yacht" },
        { url: again_ft80_17, alt: "Explorer Goldeon Cigarette 31 Yacht" },
        { url: again_ft80_18, alt: "Explorer Goldeon Cigarette 31 Yacht" },
        { url: again_ft80_19, alt: "Explorer Goldeon Cigarette 31 Yacht" },
      ],
    },
    {
      name: "80 Feet Premium Yacht",
      btn: "/Yachts/feet80_premium",
      detail:
        "80 feet / up to 45 people / cabin / fly deck / sundeck / saloon / kitchen / bedrooms",
      images: [
        { url: premium_ft80_1, alt: "80 feet yacht" },
        { url: premium_ft80_2, alt: "80 feet yacht" },
        { url: premium_ft80_3, alt: "80 feet yacht" },
        { url: premium_ft80_4, alt: "80 feet yacht" },
        { url: premium_ft80_5, alt: "80 feet yacht" },
        { url: premium_ft80_6, alt: "80 feet yacht" },
        { url: premium_ft80_7, alt: "80 feet yacht" },
        { url: premium_ft80_8, alt: "80 feet yacht" },
        { url: premium_ft80_9, alt: "80 feet yacht" },
      ],
    },
    {
      name: "85 Feet Yacht",
      btn: "/Yachts/_feet85",
      detail:
        "85 feet / up to 35 people / cabin / fly deck / sundeck / saloon / kitchen / bedrooms",
      images: [
        { url: ft85_1, alt: "Explorer Goldeon Cigarette 31 Yacht" },
        { url: ft85_2, alt: "Explorer Goldeon Cigarette 31 Yacht" },
        { url: ft85_3, alt: "Explorer Goldeon Cigarette 31 Yacht" },
        { url: ft85_4, alt: "Explorer Goldeon Cigarette 31 Yacht" },
        { url: ft85_5, alt: "Explorer Goldeon Cigarette 31 Yacht" },
        { url: ft85_6, alt: "Explorer Goldeon Cigarette 31 Yacht" },
        { url: ft85_7, alt: "Explorer Goldeon Cigarette 31 Yacht" },
        { url: ft85_8, alt: "Explorer Goldeon Cigarette 31 Yacht" },
        { url: ft85_9, alt: "Explorer Goldeon Cigarette 31 Yacht" },
        { url: ft85_10, alt: "Explorer Goldeon Cigarette 31 Yacht" },
      ],
    },
    {
      name: "85 Feet Luxurious Yacht with Jaccuzi",
      btn: "/Yachts/_feet85",
      detail:
        "85 feet / up to 40 people / jacuzzi / cabin / fly deck / sundeck / saloon / kitchen / bedrooms",
      images: [
        { url: feet85_1, alt: "Explorer Goldeon Cigarette 31 Yacht" },
        { url: feet85_2, alt: "Explorer Goldeon Cigarette 31 Yacht" },
        { url: feet85_3, alt: "Explorer Goldeon Cigarette 31 Yacht" },
        { url: feet85_4, alt: "Explorer Goldeon Cigarette 31 Yacht" },
        { url: feet85_5, alt: "Explorer Goldeon Cigarette 31 Yacht" },
        { url: feet85_6, alt: "Explorer Goldeon Cigarette 31 Yacht" },
        { url: feet85_7, alt: "Explorer Goldeon Cigarette 31 Yacht" },
        { url: feet85_8, alt: "Explorer Goldeon Cigarette 31 Yacht" },
        { url: feet85_9, alt: "Explorer Goldeon Cigarette 31 Yacht" },
        { url: feet85_10, alt: "Explorer Goldeon Cigarette 31 Yacht" },
        { url: feet85_11, alt: "Explorer Goldeon Cigarette 31 Yacht" },
        { url: feet85_12, alt: "Explorer Goldeon Cigarette 31 Yacht" },
        { url: feet85_13, alt: "Explorer Goldeon Cigarette 31 Yacht" },
        { url: feet85_14, alt: "Explorer Goldeon Cigarette 31 Yacht" },
        { url: feet85_15, alt: "Explorer Goldeon Cigarette 31 Yacht" },
        { url: feet85_16, alt: "Explorer Goldeon Cigarette 31 Yacht" },
        { url: feet85_17, alt: "Explorer Goldeon Cigarette 31 Yacht" },
        { url: feet85_18, alt: "Explorer Goldeon Cigarette 31 Yacht" },
        { url: feet85_19, alt: "Explorer Goldeon Cigarette 31 Yacht" },
        { url: feet85_20, alt: "Explorer Goldeon Cigarette 31 Yacht" },
        { url: feet85_21, alt: "Explorer Goldeon Cigarette 31 Yacht" },
        { url: feet85_22, alt: "Explorer Goldeon Cigarette 31 Yacht" },
        { url: feet85_23, alt: "Explorer Goldeon Cigarette 31 Yacht" },
        { url: feet85_24, alt: "Explorer Goldeon Cigarette 31 Yacht" },
        { url: feet85_25, alt: "Explorer Goldeon Cigarette 31 Yacht" },
      ],
    },
    {
      name: "88 Feet Yacht With Jacuzzi",
      btn: "/Yachts/feet88",
      detail:
        "88 feet / up to 40 people / jacuzzi / cabin / fly deck / sundeck / saloon / kitchen / bedrooms",
      images: [
        { url: ft88_1, alt: "Explorer Goldeon Cigarette 31 Yacht" },
        { url: ft88_2, alt: "Explorer Goldeon Cigarette 31 Yacht" },
        { url: ft88_3, alt: "Explorer Goldeon Cigarette 31 Yacht" },
        { url: ft88_4, alt: "Explorer Goldeon Cigarette 31 Yacht" },
        { url: ft88_5, alt: "Explorer Goldeon Cigarette 31 Yacht" },
        { url: ft88_6, alt: "Explorer Goldeon Cigarette 31 Yacht" },
        { url: ft88_7, alt: "Explorer Goldeon Cigarette 31 Yacht" },
        { url: ft88_8, alt: "Explorer Goldeon Cigarette 31 Yacht" },
        { url: ft88_9, alt: "Explorer Goldeon Cigarette 31 Yacht" },
        { url: ft88_10, alt: "Explorer Goldeon Cigarette 31 Yacht" },
        { url: ft88_11, alt: "Explorer Goldeon Cigarette 31 Yacht" },
        { url: ft88_12, alt: "Explorer Goldeon Cigarette 31 Yacht" },
        { url: ft88_13, alt: "Explorer Goldeon Cigarette 31 Yacht" },
        { url: ft88_14, alt: "Explorer Goldeon Cigarette 31 Yacht" },
        { url: ft88_15, alt: "Explorer Goldeon Cigarette 31 Yacht" },
        { url: ft88_16, alt: "Explorer Goldeon Cigarette 31 Yacht" },
        { url: ft88_17, alt: "Explorer Goldeon Cigarette 31 Yacht" },
        { url: ft88_18, alt: "Explorer Goldeon Cigarette 31 Yacht" },
        { url: ft88_19, alt: "Explorer Goldeon Cigarette 31 Yacht" },
        { url: ft88_20, alt: "Explorer Goldeon Cigarette 31 Yacht" },
      ],
    },
    {
      name: "88 Feet Mejesty Brand Yacht",
      btn: "/Yachts/_feet88",
      detail:
        "88 feet / up to 40 people / cabin / fly deck / sundeck / saloon / kitchen / bedrooms",
      images: [
        { url: brand_ft88_1, alt: "Explorer Goldeon Cigarette 31 Yacht" },
        { url: brand_ft88_2, alt: "Explorer Goldeon Cigarette 31 Yacht" },
        { url: brand_ft88_3, alt: "Explorer Goldeon Cigarette 31 Yacht" },
        { url: brand_ft88_4, alt: "Explorer Goldeon Cigarette 31 Yacht" },
        { url: brand_ft88_5, alt: "Explorer Goldeon Cigarette 31 Yacht" },
        { url: brand_ft88_6, alt: "Explorer Goldeon Cigarette 31 Yacht" },
        { url: brand_ft88_7, alt: "Explorer Goldeon Cigarette 31 Yacht" },
        { url: brand_ft88_8, alt: "Explorer Goldeon Cigarette 31 Yacht" },
        { url: brand_ft88_9, alt: "Explorer Goldeon Cigarette 31 Yacht" },
        { url: brand_ft88_10, alt: "Explorer Goldeon Cigarette 31 Yacht" },
        { url: brand_ft88_11, alt: "Explorer Goldeon Cigarette 31 Yacht" },
        { url: brand_ft88_12, alt: "Explorer Goldeon Cigarette 31 Yacht" },
        { url: brand_ft88_13, alt: "Explorer Goldeon Cigarette 31 Yacht" },
      ],
    },
    {
      name: "90 Feet Party Yacht House Boat",
      btn: "/Yachts/feet90",
      detail:
        "90 feet / up to 55 people / cabin / fly deck / sundeck / saloon / kitchen / bedrooms",
      images: [
        { url: ft90_1, alt: "Explorer Goldeon Cigarette 31 Yacht" },
        { url: ft90_2, alt: "Explorer Goldeon Cigarette 31 Yacht" },
        { url: ft90_3, alt: "Explorer Goldeon Cigarette 31 Yacht" },
        { url: ft90_4, alt: "Explorer Goldeon Cigarette 31 Yacht" },
        { url: ft90_5, alt: "Explorer Goldeon Cigarette 31 Yacht" },
        { url: ft90_6, alt: "Explorer Goldeon Cigarette 31 Yacht" },
        { url: ft90_7, alt: "Explorer Goldeon Cigarette 31 Yacht" },
        { url: ft90_8, alt: "Explorer Goldeon Cigarette 31 Yacht" },
        { url: ft90_9, alt: "Explorer Goldeon Cigarette 31 Yacht" },
      ],
    },
    {
      name: "95 Feet Black Pearl Yacht",
      btn: "/Yachts/feet95",
      detail:
        "95 feet / up to 60 people / cabin / fly deck / sundeck / saloon / kitchen / bedrooms",
      images: [
        { url: ft95_1, alt: "Explorer Goldeon Cigarette 31 Yacht" },
        { url: ft95_2, alt: "Explorer Goldeon Cigarette 31 Yacht" },
        { url: ft95_3, alt: "Explorer Goldeon Cigarette 31 Yacht" },
        { url: ft95_4, alt: "Explorer Goldeon Cigarette 31 Yacht" },
        { url: ft95_5, alt: "Explorer Goldeon Cigarette 31 Yacht" },
        { url: ft95_6, alt: "Explorer Goldeon Cigarette 31 Yacht" },
        { url: ft95_7, alt: "Explorer Goldeon Cigarette 31 Yacht" },
        { url: ft95_8, alt: "Explorer Goldeon Cigarette 31 Yacht" },
        { url: ft95_9, alt: "Explorer Goldeon Cigarette 31 Yacht" },
        { url: ft95_10, alt: "Explorer Goldeon Cigarette 31 Yacht" },
        { url: ft95_11, alt: "Explorer Goldeon Cigarette 31 Yacht" },
        { url: ft95_12, alt: "Explorer Goldeon Cigarette 31 Yacht" },
        { url: ft95_13, alt: "Explorer Goldeon Cigarette 31 Yacht" },
        { url: ft95_14, alt: "Explorer Goldeon Cigarette 31 Yacht" },
        { url: ft95_15, alt: "Explorer Goldeon Cigarette 31 Yacht" },
        { url: ft95_16, alt: "Explorer Goldeon Cigarette 31 Yacht" },
        { url: ft95_17, alt: "Explorer Goldeon Cigarette 31 Yacht" },
        { url: ft95_18, alt: "Explorer Goldeon Cigarette 31 Yacht" },
        { url: ft95_19, alt: "Explorer Goldeon Cigarette 31 Yacht" },
      ],
    },
    {
      name: "96 Feet Super Yacht",
      btn: "/Yachts/feet96",
      detail:
        "96 feet / up to 25 people / cabin / fly deck / sundeck / saloon / kitchen / bedrooms",
      images: [
        { url: feet96_1, alt: "Explorer Goldeon Cigarette 31 Yacht" },
        { url: feet96_2, alt: "Explorer Goldeon Cigarette 31 Yacht" },
        { url: feet96_3, alt: "Explorer Goldeon Cigarette 31 Yacht" },
        { url: feet96_4, alt: "Explorer Goldeon Cigarette 31 Yacht" },
        { url: feet96_5, alt: "Explorer Goldeon Cigarette 31 Yacht" },
        { url: feet96_6, alt: "Explorer Goldeon Cigarette 31 Yacht" },
        { url: feet96_7, alt: "Explorer Goldeon Cigarette 31 Yacht" },
        { url: feet96_8, alt: "Explorer Goldeon Cigarette 31 Yacht" },
        { url: feet96_9, alt: "Explorer Goldeon Cigarette 31 Yacht" },
        { url: feet96_10, alt: "Explorer Goldeon Cigarette 31 Yacht" },
        { url: feet96_11, alt: "Explorer Goldeon Cigarette 31 Yacht" },
        { url: feet96_12, alt: "Explorer Goldeon Cigarette 31 Yacht" },
        { url: feet96_13, alt: "Explorer Goldeon Cigarette 31 Yacht" },
        { url: feet96_14, alt: "Explorer Goldeon Cigarette 31 Yacht" },
        { url: feet96_15, alt: "Explorer Goldeon Cigarette 31 Yacht" },
        { url: feet96_16, alt: "Explorer Goldeon Cigarette 31 Yacht" },
      ],
    },
    {
      name: "100 Feet Black Diamond Yacht",
      btn: "/Yachts/feet100",
      detail:
        "100 feet / up to 50 people / cabin / fly deck / sundeck / saloon / kitchen / bedrooms",
      images: [
        { url: ft100_1, alt: "Explorer Goldeon Cigarette 31 Yacht" },
        { url: ft100_2, alt: "Explorer Goldeon Cigarette 31 Yacht" },
        { url: ft100_3, alt: "Explorer Goldeon Cigarette 31 Yacht" },
        { url: ft100_4, alt: "Explorer Goldeon Cigarette 31 Yacht" },
        { url: ft100_5, alt: "Explorer Goldeon Cigarette 31 Yacht" },
        { url: ft100_6, alt: "Explorer Goldeon Cigarette 31 Yacht" },
        { url: ft100_7, alt: "Explorer Goldeon Cigarette 31 Yacht" },
        { url: ft100_8, alt: "Explorer Goldeon Cigarette 31 Yacht" },
        { url: ft100_9, alt: "Explorer Goldeon Cigarette 31 Yacht" },
        { url: ft100_10, alt: "Explorer Goldeon Cigarette 31 Yacht" },
        { url: ft100_11, alt: "Explorer Goldeon Cigarette 31 Yacht" },
        { url: ft100_12, alt: "Explorer Goldeon Cigarette 31 Yacht" },
        { url: ft100_13, alt: "Explorer Goldeon Cigarette 31 Yacht" },
        { url: ft100_14, alt: "Explorer Goldeon Cigarette 31 Yacht" },
        { url: ft100_15, alt: "Explorer Goldeon Cigarette 31 Yacht" },
        { url: ft100_16, alt: "Explorer Goldeon Cigarette 31 Yacht" },
        { url: ft100_17, alt: "Explorer Goldeon Cigarette 31 Yacht" },
        { url: ft100_18, alt: "Explorer Goldeon Cigarette 31 Yacht" },
      ],
    },
    {
      name: "100 Feet Brand Yacht",
      btn: "/Yachts/_feet100",
      detail:
        "100 feet / 100 pax capacity / cabin / fly deck / sundeck / saloon / kitchen / bedrooms",
      images: [
        { url: again_ft100_1, alt: "Explorer Goldeon Cigarette 31 Yacht" },
        { url: again_ft100_2, alt: "Explorer Goldeon Cigarette 31 Yacht" },
        { url: again_ft100_3, alt: "Explorer Goldeon Cigarette 31 Yacht" },
        { url: again_ft100_4, alt: "Explorer Goldeon Cigarette 31 Yacht" },
        { url: again_ft100_5, alt: "Explorer Goldeon Cigarette 31 Yacht" },
        { url: again_ft100_6, alt: "Explorer Goldeon Cigarette 31 Yacht" },
        { url: again_ft100_7, alt: "Explorer Goldeon Cigarette 31 Yacht" },
        { url: again_ft100_8, alt: "Explorer Goldeon Cigarette 31 Yacht" },
        { url: again_ft100_9, alt: "Explorer Goldeon Cigarette 31 Yacht" },
      ],
    },
    {
      name: "101 Feet Mejesty Brand Yacht",
      btn: "/Yachts/feet101",
      detail:
        "101 feet / up to 50 people / cabin / fly deck / sundeck / saloon / kitchen / bedrooms",
      images: [
        { url: ft101_1, alt: "Explorer Goldeon Cigarette 31 Yacht" },
        { url: ft101_2, alt: "Explorer Goldeon Cigarette 31 Yacht" },
        { url: ft101_3, alt: "Explorer Goldeon Cigarette 31 Yacht" },
        { url: ft101_4, alt: "Explorer Goldeon Cigarette 31 Yacht" },
        { url: ft101_5, alt: "Explorer Goldeon Cigarette 31 Yacht" },
        { url: ft101_6, alt: "Explorer Goldeon Cigarette 31 Yacht" },
        { url: ft101_7, alt: "Explorer Goldeon Cigarette 31 Yacht" },
        { url: ft101_8, alt: "Explorer Goldeon Cigarette 31 Yacht" },
        { url: ft101_9, alt: "Explorer Goldeon Cigarette 31 Yacht" },
        { url: ft101_10, alt: "Explorer Goldeon Cigarette 31 Yacht" },
        { url: ft101_11, alt: "Explorer Goldeon Cigarette 31 Yacht" },
        { url: ft101_12, alt: "Explorer Goldeon Cigarette 31 Yacht" },
      ],
    },
    {
      name: "110 Feet Premium Yacht",
      detail:
        "110 feet / up to 85 people / cabin/ fly deck/ sun deck / kitchen / saloon/ bedrooms / karaoke room / jacuzzi",
      btn: "/Yachts/feet110",
      images: [
        { url: ft110_1, alt: "110 feet yacht" },
        { url: ft110_2, alt: "110 feet yacht" },
        { url: ft110_3, alt: "110 feet yacht" },
        { url: ft110_4, alt: "110 feet yacht" },
        { url: ft110_5, alt: "110 feet yacht" },
        { url: ft110_6, alt: "110 feet yacht" },
        { url: ft110_7, alt: "110 feet yacht" },
        { url: ft110_8, alt: "110 feet yacht" },
        { url: ft110_9, alt: "110 feet yacht" },
      ],
    },
    {
      name: "120 Feet Luxurious Yacht with Jacuzzi ",
      btn: "/Yachts/feet120",
      detail:
        "120 feet / up to 80 people / cabin/ fly deck/ sun deck / kitchen / saloon/ bedrooms / karaoke room / jacuzzi",
      images: [
        { url: ft120_1, alt: "Explorer Goldeon Cigarette 31 Yacht" },
        { url: ft120_2, alt: "Explorer Goldeon Cigarette 31 Yacht" },
        { url: ft120_3, alt: "Explorer Goldeon Cigarette 31 Yacht" },
        { url: ft120_4, alt: "Explorer Goldeon Cigarette 31 Yacht" },
        { url: ft120_5, alt: "Explorer Goldeon Cigarette 31 Yacht" },
        { url: ft120_6, alt: "Explorer Goldeon Cigarette 31 Yacht" },
        { url: ft120_7, alt: "Explorer Goldeon Cigarette 31 Yacht" },
        { url: ft120_8, alt: "Explorer Goldeon Cigarette 31 Yacht" },
        { url: ft120_9, alt: "Explorer Goldeon Cigarette 31 Yacht" },
        { url: ft120_10, alt: "Explorer Goldeon Cigarette 31 Yacht" },
        { url: ft120_11, alt: "Explorer Goldeon Cigarette 31 Yacht" },
        { url: ft120_12, alt: "Explorer Goldeon Cigarette 31 Yacht" },
        { url: ft120_13, alt: "Explorer Goldeon Cigarette 31 Yacht" },
        { url: ft120_14, alt: "Explorer Goldeon Cigarette 31 Yacht" },
        { url: ft120_15, alt: "Explorer Goldeon Cigarette 31 Yacht" },
        { url: ft120_16, alt: "Explorer Goldeon Cigarette 31 Yacht" },
        { url: ft120_17, alt: "Explorer Goldeon Cigarette 31 Yacht" },
        { url: ft120_18, alt: "Explorer Goldeon Cigarette 31 Yacht" },
        { url: ft120_19, alt: "Explorer Goldeon Cigarette 31 Yacht" },
      ],
    },
    {
      name: "135 Feet Azimuth Yacht",
      btn: "/Yachts/feet135",
      detail:
        "135 feet / up to 130 people / cabin/ fly deck/ sun deck / kitchen / saloon/ bedrooms / karaoke room / jacuzzi",
      images: [
        { url: ft135_1, alt: "Explorer Goldeon Cigarette 31 Yacht" },
        { url: ft135_2, alt: "Explorer Goldeon Cigarette 31 Yacht" },
        { url: ft135_3, alt: "Explorer Goldeon Cigarette 31 Yacht" },
        { url: ft135_4, alt: "Explorer Goldeon Cigarette 31 Yacht" },
        { url: ft135_5, alt: "Explorer Goldeon Cigarette 31 Yacht" },
        { url: ft135_6, alt: "Explorer Goldeon Cigarette 31 Yacht" },
        { url: ft135_7, alt: "Explorer Goldeon Cigarette 31 Yacht" },
        { url: ft135_8, alt: "Explorer Goldeon Cigarette 31 Yacht" },
        { url: ft135_9, alt: "Explorer Goldeon Cigarette 31 Yacht" },
        { url: ft135_10, alt: "Explorer Goldeon Cigarette 31 Yacht" },
        { url: ft135_11, alt: "Explorer Goldeon Cigarette 31 Yacht" },
        { url: ft135_12, alt: "Explorer Goldeon Cigarette 31 Yacht" },
        { url: ft135_13, alt: "Explorer Goldeon Cigarette 31 Yacht" },
        { url: ft135_14, alt: "Explorer Goldeon Cigarette 31 Yacht" },
        { url: ft135_15, alt: "Explorer Goldeon Cigarette 31 Yacht" },
      ],
    },
    {
      name: "140 Feet Luxurious Yacht",
      detail:
        "140 feet / up to 150 people / cabin/ fly deck/ sun deck / kitchen / saloon/ bedrooms / karaoke room",
      btn: "/Yachts/feet140",
      images: [
        { url: feet140_1, alt: "Explorer Goldeon Cigarette 31 Yacht" },
        { url: feet140_2, alt: "Explorer Goldeon Cigarette 31 Yacht" },
        { url: feet140_3, alt: "Explorer Goldeon Cigarette 31 Yacht" },
        { url: feet140_4, alt: "Explorer Goldeon Cigarette 31 Yacht" },
        { url: feet140_5, alt: "Explorer Goldeon Cigarette 31 Yacht" },
        { url: feet140_6, alt: "Explorer Goldeon Cigarette 31 Yacht" },
        { url: feet140_7, alt: "Explorer Goldeon Cigarette 31 Yacht" },
        { url: feet140_8, alt: "Explorer Goldeon Cigarette 31 Yacht" },
        { url: feet140_9, alt: "Explorer Goldeon Cigarette 31 Yacht" },
        { url: feet140_10, alt: "Explorer Goldeon Cigarette 31 Yacht" },
        { url: feet140_11, alt: "Explorer Goldeon Cigarette 31 Yacht" },
        { url: feet140_12, alt: "Explorer Goldeon Cigarette 31 Yacht" },
        { url: feet140_13, alt: "Explorer Goldeon Cigarette 31 Yacht" },
        { url: feet140_14, alt: "Explorer Goldeon Cigarette 31 Yacht" },
        { url: feet140_15, alt: "Explorer Goldeon Cigarette 31 Yacht" },
        { url: feet140_16, alt: "Explorer Goldeon Cigarette 31 Yacht" },
        { url: feet140_17, alt: "Explorer Goldeon Cigarette 31 Yacht" },
        { url: feet140_18, alt: "Explorer Goldeon Cigarette 31 Yacht" },
        { url: feet140_19, alt: "Explorer Goldeon Cigarette 31 Yacht" },
        { url: feet140_20, alt: "Explorer Goldeon Cigarette 31 Yacht" },
        { url: feet140_21, alt: "Explorer Goldeon Cigarette 31 Yacht" },
        { url: feet140_22, alt: "Explorer Goldeon Cigarette 31 Yacht" },
        { url: feet140_23, alt: "Explorer Goldeon Cigarette 31 Yacht" },
      ],
    },
    {
      name: "155 Feet The Rose Yacht",
      detail:
        "155 feet / up to 250 people / cabin/ fly deck/ sun deck / kitchen / saloon/ bedrooms / karaoke room",
      btn: "/Yachts/feet155",
      images: [
        { url: feet155_1, alt: "155 feet yacht" },
        { url: feet155_2, alt: "155 feet yacht" },
        { url: feet155_3, alt: "155 feet yacht" },
        { url: feet155_4, alt: "155 feet yacht" },
        { url: feet155_5, alt: "155 feet yacht" },
        { url: feet155_6, alt: "155 feet yacht" },
      ],
    },
    {
      name: "164 Feet Super Yacht",
      detail:
        "164 feet / up to 135 people / cabin/ fly deck/ sun deck / kitchen / saloon/ bedrooms / karaoke room",
      btn: "/Yachts/feet164",
      images: [
        { url: feet164_1, alt: "164 Feet Yacht" },
        { url: feet164_2, alt: "164 Feet Yacht" },
        { url: feet164_3, alt: "164 Feet Yacht" },
        { url: feet164_4, alt: "164 Feet Yacht" },
        { url: feet164_5, alt: "164 Feet Yacht" },
        { url: feet164_6, alt: "164 Feet Yacht" },
        { url: feet164_7, alt: "164 Feet Yacht" },
        { url: feet164_8, alt: "164 Feet Yacht" },
        { url: feet164_9, alt: "164 Feet Yacht" },
      ],
    },
    {
      name: "240 Feet Mega Yacht",
      detail:
        "240 feet / up to 500 people / cabin/ fly deck/ sun deck / kitchen / saloon/ bedrooms / karaoke room",
      btn: "/Yachts/feet240",
      images: [
        { url: feet240_1, alt: "240 Feet Yacht" },
        { url: feet240_2, alt: "240 Feet Yacht" },
        { url: feet240_3, alt: "240 Feet Yacht" },
        { url: feet240_4, alt: "240 Feet Yacht" },
        { url: feet240_5, alt: "240 Feet Yacht" },
        { url: feet240_6, alt: "240 Feet Yacht" },
        { url: feet240_7, alt: "240 Feet Yacht" },
        { url: feet240_8, alt: "240 Feet Yacht" },
      ],
    },

    // {
    //   name: '150 FEET MEGA YACHT',
    //   detail: '150 feet / up to 130 people / cabin / ac saloon / barcounter / dj counter / music system / spacious dance floor / washrooms',
    //   images: [
    //     { url: feet40_1, alt: 'Explorer Goldeon Cigarette 31 Yacht' },
    //     { url: feet40_3, alt: 'Explorer Goldeon Cigarette 31 Yacht' },
    //     { url: feet40_4, alt: 'Explorer Goldeon Cigarette 31 Yacht' }
    //   ]
    // },
    // {
    //   name: '143FT PREMIUM YACHT',
    //   detail: '143 feet / up to 130 people / open upper deck / buffet area / kitchen / saloon/ bedrooms / jacuzzi',
    //   images: [
    //     { url: feet40_1, alt: 'Explorer Goldeon Cigarette 31 Yacht' },
    //     { url: feet40_3, alt: 'Explorer Goldeon Cigarette 31 Yacht' },
    //     { url: feet40_4, alt: 'Explorer Goldeon Cigarette 31 Yacht' }
    //   ]
    // },
    // {
    //   name: '240FT MEGAYACHT',
    //   detail: "240 feet / day guest capacity 500 / guest rooms / toilets / spacious pool / jacuzzi / saloon / multiple decks / large tv's / night club / cinema hall / av systems",
    //   images: [
    //     { url: feet40_1, alt: 'Explorer Goldeon Cigarette 31 Yacht' },
    //     { url: feet40_3, alt: 'Explorer Goldeon Cigarette 31 Yacht' },
    //     { url: feet40_4, alt: 'Explorer Goldeon Cigarette 31 Yacht' }
    //   ]
    // },
    // {
    //   name: 'PARTY BOAT DUBAI',
    //   detail: 'up to 100 people / dine setup / open upper deck / buffet area/ bar area / kitchen',
    //   images: [
    //     { url: feet40_1, alt: 'Explorer Goldeon Cigarette 31 Yacht' },
    //     { url: feet40_3, alt: 'Explorer Goldeon Cigarette 31 Yacht' },
    //     { url: feet40_4, alt: 'Explorer Goldeon Cigarette 31 Yacht' }
    //   ]
    // },
    // {
    //   name: 'EXCLUSIVE CUISINE',
    //   detail: 'live barbecue menu / international buffet menu / western / arabic / asian & light food menus / canape & beverage menus',
    //   images: [
    //     { url: feet40_1, alt: 'Explorer Goldeon Cigarette 31 Yacht' },
    //     { url: feet40_3, alt: 'Explorer Goldeon Cigarette 31 Yacht' },
    //     { url: feet40_4, alt: 'Explorer Goldeon Cigarette 31 Yacht' }
    //   ]
    // },
  ];

  return (
    <>
      <div className="space5"></div>
      <div className="charterYachts-content">
        <h1>Discover the Luxury of Charter Yachts with Gulf Yachts Dubai</h1>
        <p>
          Experience the ultimate luxury and freedom on the open waters with
          Gulf Yachts Dubai’s premier charter yacht services. Our fleet of
          state-of-the-art yachts offers unparalleled comfort, sophistication,
          and style, making your journey an unforgettable adventure. Whether you
          are planning a serene escape, a vibrant celebration, or a corporate
          gathering, our yachts are equipped to meet your every need.
        </p>
        <h1>Unmatched Comfort and Sophistication</h1>
        <p>
          Imagine cruising along the stunning Dubai coastline, basking in the
          sun on spacious decks, and indulging in gourmet cuisine prepared by
          our skilled chefs. Each yacht in our fleet is designed with luxurious
          interiors, modern amenities, and ample space to ensure your utmost
          comfort. From plush seating areas and elegant dining spaces to private
          cabins with en-suite bathrooms, every detail is crafted to provide a
          five-star experience on the water.
        </p>
        <h1>Personalized Service and Professional Crew</h1>
        <p>
          At Gulf Yachts Dubai, we pride ourselves on offering exceptional
          service tailored to your preferences. Each charter comes with a
          professional crew dedicated to providing outstanding hospitality,
          ensuring that you and your guests enjoy a seamless and memorable
          voyage. Our experienced captains and crew members are committed to
          your safety and satisfaction, attending to every detail so you can
          relax and savor the experience.
        </p>
        <h1>Customizable Charter Packages</h1>
        <p>
          Our customizable charter packages allow you to tailor your experience
          to suit your desires. Whether you want to engage in thrilling water
          sports, embark on a fishing expedition, enjoy a sunset cruise, or plan
          an overnight stay, we can create the perfect itinerary for you.
          Celebrate special occasions like weddings, birthdays, and
          anniversaries in style, or host a unique{" "}
          <a href="https://gulfyachtsdubai.com/Package/CorporateEvents">
            corporate event
          </a>{" "}
          that leaves a lasting impression on your clients and colleagues.
        </p>
      </div>
      <div className="all-yachts">
        <h1>Explore Our Charter Yachts in Dubai</h1>
        <div className="yacht-grid">
          {yachts.map((yacht, index) => (
            <YachtCard key={index} yacht={yacht} />
          ))}
        </div>
      </div>
      <div className="charterYachts-content">
        <h1>Gulf Yachts: Your Ultimate Luxury Yachting Experience in Dubai</h1>
        <p>
          Sailing on a luxury yacht is a dream for many, but owning one isn’t
          always practical. Luckily, hiring a yacht offers an ideal alternative,
          especially if you're exploring the stunning city of Dubai. Gulf Yachts
          is here to make that dream a reality.
        </p>
        <p>
          We offer a wide selection of luxury yachts in Dubai, each designed
          with premium features to meet your every need. With 13 years of
          expertise and 25 industry awards to our name, we’ve had the pleasure
          of serving over 1 million satisfied customers with our fleet of 32
          yachts.
        </p>
        <p>
          Browse through our diverse range of yacht and boat rental packages.
          Our knowledgeable team is ready to help you find the perfect yacht,
          whether you're looking for an exclusive experience or a unique boat
          rental in Dubai. Our goal is to ensure you find the right charter for
          your needs, making your time on the water truly memorable.
        </p>

        <h1>Luxury Yachting in Dubai Marina</h1>
        <p>
          Experience the height of luxury yachting with our boat rental services
          in Dubai. Whether you’re interested in a serene cruise around the
          picturesque Dubai Marina or a lavish journey across the Arabian Gulf,
          our well-maintained yachts are ready to impress. From intimate
          gatherings to grand celebrations, our experienced crew guarantees an
          exceptional experience. With our flexible booking options and
          customized service, you can start your dream voyage with confidence.
          Discover Dubai’s stunning coastline and skyline from your own private
          yacht with Gulf Yachts.
        </p>

        <h1>How to Reserve a Yacht Charter in Dubai</h1>
        <p>
          Reserving a yacht with Gulf Yachts is simple and straightforward. Just
          fill out our online form with your WhatsApp number, and one of our
          team members will get in touch with you. Alternatively, you can reach
          us directly via phone, WhatsApp, or chat for immediate assistance.
          Booking a private yacht for your next event has never been easier.
          Contact us today to secure your luxury yacht rental.
        </p>

        <h1>Our Additional Services</h1>
        <ul>
          <span>Gulf Yachts also provides: </span>
          <li>Luxury yachts in Dubai</li>
          <li>Boat rentals</li>
          <li>Exclusive yachts in Dubai</li>
          <li>Top yacht companies in Dubai</li>
          <li>Royal Star yachts</li>
          <li>Yacht charters</li>
          <li>Luxury boats</li>
          <li>Yacht boat rentals</li>
          <li>Yacht rentals for parties</li>
          <li>Luxury boat rentals in Dubai</li>
          <li>Mega yacht rentals</li>
          <li>Jet ski rentals</li>
          <li>Boat bookings in Dubai</li>
          <li>Boat hire services</li>
          <li>Home yacht charters</li>
          <li>Yacht rentals in Nice</li>
          <li>Yachts for hire in Dubai</li>
          <li>Yacht bookings at Dubai Marina</li>
        </ul>
        <p>
          Choose Gulf Yachts for the best yacht charter experience in Dubai and
          let us help you create unforgettable moments on the water.
        </p>
      </div>
      <Page4 />

      <div className="charterYachts-content">
        <h1>Experience Luxury Like Never Before</h1>
        <p>
          At Gulf Yacht Rentals, we invite you to experience the epitome of
          luxury and elegance with our exceptional yacht charter services.
          Nestled in the heart of Dubai’s spectacular waters, our fleet of
          premium charter yachts is designed to deliver an unparalleled level of
          sophistication, comfort, and style. Whether you’re seeking a serene
          escape from the hustle and bustle of city life or planning an
          extravagant celebration, our yachts offer a stunning backdrop for
          unforgettable moments that will leave a lasting impression.
        </p>
        <p>
          Our charter yachts are more than just vessels; they are floating
          paradises equipped with the finest amenities and features. Each yacht
          in our fleet has been meticulously selected and designed to offer a
          unique experience tailored to your specific needs. From sleek, modern
          yachts ideal for intimate gatherings to grand, luxurious vessels
          perfect for large-scale events, we have the ideal yacht to match every
          occasion and preference. Step aboard and immerse yourself in an
          environment where luxury meets tranquility, and every detail is
          crafted to perfection.
        </p>
        <h1>Tailored Yacht Charter Packages for Every Occasion</h1>
        <p>
          At Gulf Yacht Rentals, we understand that every event is distinct and
          requires a personalized approach. That’s why we offer customizable
          yacht charter packages that can be tailored to suit your exact
          requirements. Whether you are hosting a sophisticated corporate event,
          planning a romantic wedding, or celebrating a milestone birthday, our
          team of experts is dedicated to creating a bespoke charter experience
          that reflects your vision and exceeds your expectations.
        </p>
        <p>
          Our charter packages encompass a range of options, allowing you to
          choose the perfect combination of services and amenities. From gourmet
          catering and premium beverages to live entertainment and personalized
          decorations, we ensure that every aspect of your event is handled with
          the utmost care and attention to detail. Our goal is to provide you
          with a seamless and memorable experience that allows you to focus on
          enjoying your special occasion.
        </p>
        <h1>Professional Crew Dedicated to Your Comfort and Safety</h1>
        <p>
          The cornerstone of our yacht charter service is our exceptional crew,
          who are committed to providing an unparalleled level of service. Each
          member of our professional team, including experienced captains,
          attentive deckhands, and knowledgeable stewards, is trained to deliver
          a high standard of hospitality and care. With their expertise and
          dedication, you can relax and enjoy your journey knowing that every
          detail is being managed with precision and professionalism.
        </p>
        <p>
          Our crew’s intimate knowledge of the Arabian Gulf’s waters ensures
          that your voyage is both safe and enjoyable. Whether you’re cruising
          along the iconic Dubai coastline or exploring hidden gems in the
          surrounding waters, our team is here to guide you and ensure that your
          experience is nothing short of extraordinary.
        </p>
        <h1>Luxurious Amenities for an Indulgent Experience</h1>
        <p>
          A charter yacht with Gulf Yacht Rentals offers more than just a mode
          of transportation—it provides an opulent retreat on the water. Our
          yachts are equipped with a range of luxurious amenities designed to
          enhance your comfort and enjoyment. Spacious sun decks, elegant
          lounges, and well-appointed dining areas create the perfect setting
          for relaxation and entertainment. Enjoy breathtaking views of Dubai’s
          skyline and pristine waters from the comfort of your private yacht, or
          indulge in a gourmet meal prepared by top chefs in our
          state-of-the-art kitchens.
        </p>
        <p>
          Whether you’re looking to host a lavish party, enjoy a romantic sunset
          cruise, or simply unwind in style, our yachts provide an indulgent and
          refined environment where you can create unforgettable memories.
        </p>
        <h1>Explore Dubai’s Stunning Coastline and Iconic Landmarks</h1>
        <p>
          Chartering a yacht with Gulf Yacht Rentals offers the unique
          opportunity to explore Dubai’s stunning coastline and iconic landmarks
          from a truly exclusive vantage point. Cruise past the city’s famous
          landmarks, including the Burj Khalifa and Palm Jumeirah, and discover
          the hidden beauty of the Arabian Gulf’s crystal-clear waters. Our
          experienced captains are adept at navigating the best routes to ensure
          that you experience the most picturesque and captivating sights.
        </p>
        <h1>Book Your Charter Yacht Today with Gulf Yacht Rentals</h1>
        <p>
          Ready to embark on the ultimate yacht charter adventure? Contact Gulf
          Yacht Rentals today to book your luxury yacht and start planning your
          dream journey on the water. Our dedicated team is here to assist you
          with every detail, ensuring that your yacht charter experience is
          seamless, enjoyable, and truly unforgettable. Discover the
          unparalleled luxury and elegance of our charter yachts and create
          memories that will last a lifetime.
        </p>
      </div>
    </>
  );
};
export default CharterYachts;
