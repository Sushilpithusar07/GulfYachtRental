// App.js
import React from "react";
import YachtCard from "./YachtCard";
import "./ImageSlider.css";

//  <-----   feet 35 images ------->

import feet35_1 from "../../assets/feet35/feet35_1.jpg";
// import feet35_2 from '../../assets/feet35/feet35_2.jpg';
import feet35_3 from "../../assets/feet35/feet35_3.jpg";
import feet35_4 from "../../assets/feet35/feet35_4.jpg";
import feet35_5 from "../../assets/feet35/feet35_5.jpg";
import feet35_6 from "../../assets/feet35/feet35_6.jpg";
import feet35_7 from "../../assets/feet35/feet35_7.jpg";
// import feet35_8 from '../../assets/feet35/feet35_8.jpg';
// import feet35_9 from '../../assets/feet35/feet35_9.jpg';

//  <-----   feet 40 images ------->

import feet40_1 from "../../assets/40 feet/feet40_1.jpg";
// import feet40_2 from '../../assets/40 feet/feet40_2.jpg';
import feet40_3 from "../../assets/40 feet/feet40_3.jpg";
import feet40_4 from "../../assets/40 feet/feet40_4.jpg";
import feet40_5 from "../../assets/40 feet/feet40_5.jpg";
import feet40_6 from "../../assets/40 feet/feet40_6.jpg";
import feet40_8 from "../../assets/40 feet/feet40_8.jpg";
import feet40_9 from "../../assets/40 feet/feet40_9.jpg";

//  <-----   feet 42 images ------->
import feet42_1 from "../../assets/42 feet/feet42_1.jpg";
import feet42_2 from "../../assets/42 feet/feet42_2.jpg";
import feet42_3 from "../../assets/42 feet/feet42_3.jpg";
import feet42_4 from "../../assets/42 feet/feet42_4.jpg";
import feet42_5 from "../../assets/42 feet/feet42_5.jpg";
import feet42_6 from "../../assets/42 feet/feet42_6.jpg";
import feet42_7 from "../../assets/42 feet/feet42_7.jpg";
import feet42_8 from "../../assets/42 feet/feet42_8.jpg";
import feet42_9 from "../../assets/42 feet/feet42_9.jpg";
import feet42_10 from "../../assets/42 feet/feet42_10.jpg";
import feet42_11 from "../../assets/42 feet/feet42_11.jpg";
import feet42_12 from "../../assets/42 feet/feet42_12.jpg";
import feet42_13 from "../../assets/42 feet/feet42_13.jpg";

//  <-----   feet 45 images ------->
import feet45_1 from "../../assets/45 feet/feet45_1.jpg";
import feet45_2 from "../../assets/45 feet/feet45_2.jpg";
import feet45_3 from "../../assets/45 feet/feet45_3.jpg";
import feet45_4 from "../../assets/45 feet/feet45_4.jpg";
import feet45_5 from "../../assets/45 feet/feet45_5.jpg";
import feet45_6 from "../../assets/45 feet/feet45_6.jpg";
import feet45_7 from "../../assets/45 feet/feet45_7.jpg";
import feet45_8 from "../../assets/45 feet/feet45_8.jpg";
import feet45_9 from "../../assets/45 feet/feet45_9.jpg";
import feet45_10 from "../../assets/45 feet/feet45_10.jpg";
import feet45_11 from "../../assets/45 feet/feet45_11.jpg";
import feet45_12 from "../../assets/45 feet/feet45_12.jpg";
import feet45_13 from "../../assets/45 feet/feet45_13.jpg";
import feet45_14 from "../../assets/45 feet/feet45_14.jpg";
import feet45_16 from "../../assets/45 feet/feet45_16.jpg";
import feet45_17 from "../../assets/45 feet/feet45_17.jpg";
import feet45_18 from "../../assets/45 feet/feet45_18.jpg";
import feet45_19 from "../../assets/45 feet/feet45_19.jpg";
import feet45_20 from "../../assets/45 feet/feet45_20.jpg";
import feet45_21 from "../../assets/45 feet/feet45_21.jpg";
import feet45_22 from "../../assets/45 feet/feet45_22.jpg";

//  <-----   again feet 45 images ------->
import again_feet45_1 from "../../assets/again 45 feet/again feet45_1.jpg";
import again_feet45_2 from "../../assets/again 45 feet/again feet45_2.jpg";
import again_feet45_3 from "../../assets/again 45 feet/again feet45_3.jpg";
import again_feet45_4 from "../../assets/again 45 feet/again feet45_4.jpg";
import again_feet45_5 from "../../assets/again 45 feet/again feet45_5.jpg";
import again_feet45_6 from "../../assets/again 45 feet/again feet45_6.jpg";
import again_feet45_7 from "../../assets/again 45 feet/again feet45_7.jpg";
import again_feet45_8 from "../../assets/again 45 feet/again feet45_8.jpg";
import again_feet45_9 from "../../assets/again 45 feet/again feet45_9.jpg";
import again_feet45_10 from "../../assets/again 45 feet/again feet45_10.jpg";
import again_feet45_11 from "../../assets/again 45 feet/again feet45_11.jpg";
import again_feet45_12 from "../../assets/again 45 feet/again feet45_12.jpg";
import again_feet45_13 from "../../assets/again 45 feet/again feet45_13.jpg";
import again_feet45_14 from "../../assets/again 45 feet/again feet45_14.jpg";

//  <-----   feet 50 images ------->
import feet50_1 from "../../assets/50 feet/feet50_1.jpg";
import feet50_2 from "../../assets/50 feet/feet50_2.jpg";
import feet50_3 from "../../assets/50 feet/feet50_3.jpg";
import feet50_4 from "../../assets/50 feet/feet50_4.jpg";
import feet50_5 from "../../assets/50 feet/feet50_5.jpg";
import feet50_6 from "../../assets/50 feet/feet50_6.jpg";
import feet50_7 from "../../assets/50 feet/feet50_7.jpg";
import feet50_8 from "../../assets/50 feet/feet50_8.jpg";
import feet50_9 from "../../assets/50 feet/feet50_9.jpg";
import feet50_10 from "../../assets/50 feet/feet50_10.jpg";
import feet50_11 from "../../assets/50 feet/feet50_11.jpg";
import feet50_12 from "../../assets/50 feet/feet50_12.jpg";
import feet50_13 from "../../assets/50 feet/feet50_13.jpg";
import feet50_14 from "../../assets/50 feet/feet50_14.jpg";
import feet50_15 from "../../assets/50 feet/feet50_15.jpg";
import feet50_16 from "../../assets/50 feet/feet50_16.jpg";
import feet50_17 from "../../assets/50 feet/feet50_17.jpg";
import feet50_18 from "../../assets/50 feet/feet50_18.jpg";
import feet50_19 from "../../assets/50 feet/feet50_19.jpg";
import feet50_20 from "../../assets/50 feet/feet50_20.jpg";
import feet50_21 from "../../assets/50 feet/feet50_21.jpg";

//  <-----   feet 50 nova images ------->
import feet50_nova_1 from "../../assets/50 feet nova/feet50_1.jpg";
import feet50_nova_2 from "../../assets/50 feet nova/feet50_2.jpg";
import feet50_nova_3 from "../../assets/50 feet nova/feet50_3.jpg";
import feet50_nova_4 from "../../assets/50 feet nova/feet50_4.jpg";
import feet50_nova_5 from "../../assets/50 feet nova/feet50_5.jpg";
import feet50_nova_6 from "../../assets/50 feet nova/feet50_6.jpg";
import feet50_nova_7 from "../../assets/50 feet nova/feet50_7.jpg";
import feet50_nova_8 from "../../assets/50 feet nova/feet50_8.jpg";
import feet50_nova_9 from "../../assets/50 feet nova/feet50_9.jpg";
import feet50_nova_10 from "../../assets/50 feet nova/feet50_10.jpg";
import feet50_nova_11 from "../../assets/50 feet nova/feet50_11.jpg";
import feet50_nova_12 from "../../assets/50 feet nova/feet50_12.jpg";
import feet50_nova_13 from "../../assets/50 feet nova/feet50_13.jpg";
import feet50_nova_14 from "../../assets/50 feet nova/feet50_14.jpg";
import feet50_nova_15 from "../../assets/50 feet nova/feet50_15.jpg";
import feet50_nova_16 from "../../assets/50 feet nova/feet50_16.jpg";
import feet50_nova_17 from "../../assets/50 feet nova/feet50_17.jpg";
import feet50_nova_18 from "../../assets/50 feet nova/feet50_18.jpg";
import feet50_nova_19 from "../../assets/50 feet nova/feet50_19.jpg";
import feet50_nova_20 from "../../assets/50 feet nova/feet50_20.jpg";
import feet50_nova_21 from "../../assets/50 feet nova/feet50_21.jpg";
import feet50_nova_22 from "../../assets/50 feet nova/feet50_22.jpg";
import feet50_nova_23 from "../../assets/50 feet nova/feet50_23.jpg";
import feet50_nova_24 from "../../assets/50 feet nova/feet50_24.jpg";

//  <-----  again feet 50 images ------->
import again_feet50_1 from "../../assets/again 50 feet/again feet50_1.jpg";
import again_feet50_2 from "../../assets/again 50 feet/again feet50_2.jpg";
import again_feet50_3 from "../../assets/again 50 feet/again feet50_3.jpg";
import again_feet50_4 from "../../assets/again 50 feet/again feet50_4.jpg";
import again_feet50_5 from "../../assets/again 50 feet/again feet50_5.jpg";
import again_feet50_6 from "../../assets/again 50 feet/again feet50_6.jpg";
import again_feet50_7 from "../../assets/again 50 feet/again feet50_7.jpg";
import again_feet50_8 from "../../assets/again 50 feet/again feet50_8.jpg";
import again_feet50_9 from "../../assets/again 50 feet/again feet50_9.jpg";
import again_feet50_10 from "../../assets/again 50 feet/again feet50_10.jpg";
import again_feet50_11 from "../../assets/again 50 feet/again feet50_11.jpg";
import again_feet50_12 from "../../assets/again 50 feet/again feet50_12.jpg";

//  <-----  azimuth feet 50 images ------->
import azimuth_feet50_1 from "../../assets/Azimut 50 FT/Azimut feet50_1.jpg";
import azimuth_feet50_2 from "../../assets/Azimut 50 FT/Azimut feet50_2.jpg";
import azimuth_feet50_3 from "../../assets/Azimut 50 FT/Azimut feet50_3.jpg";
import azimuth_feet50_4 from "../../assets/Azimut 50 FT/Azimut feet50_4.jpg";
import azimuth_feet50_5 from "../../assets/Azimut 50 FT/Azimut feet50_5.jpg";
import azimuth_feet50_6 from "../../assets/Azimut 50 FT/Azimut feet50_6.jpg";
import azimuth_feet50_7 from "../../assets/Azimut 50 FT/Azimut feet50_7.jpg";
import azimuth_feet50_8 from "../../assets/Azimut 50 FT/Azimut feet50_8.jpg";
import azimuth_feet50_9 from "../../assets/Azimut 50 FT/Azimut feet50_9.jpg";
import azimuth_feet50_10 from "../../assets/Azimut 50 FT/Azimut feet50_10.jpg";

//  <-----   feet 52 images ------->
import feet52_1 from "../../assets/52 feet/feet52_1.jpg";
import feet52_4 from "../../assets/52 feet/feet52_4.jpg";
import feet52_5 from "../../assets/52 feet/feet52_5.jpg";
import feet52_6 from "../../assets/52 feet/feet52_6.jpg";
import feet52_7 from "../../assets/52 feet/feet52_7.jpg";
import feet52_8 from "../../assets/52 feet/feet52_8.jpg";
import feet52_9 from "../../assets/52 feet/feet52_9.jpg";

//  <-----   feet 55 images ------->
import feet55_1 from "../../assets/55 feet/feet55_1.jpg";
import feet55_2 from "../../assets/55 feet/feet55_2.jpg";
import feet55_3 from "../../assets/55 feet/feet55_3.jpg";
import feet55_4 from "../../assets/55 feet/feet55_4.jpg";
import feet55_5 from "../../assets/55 feet/feet55_5.jpg";
import feet55_6 from "../../assets/55 feet/feet55_6.jpg";
import feet55_7 from "../../assets/55 feet/feet55_7.jpg";
import feet55_8 from "../../assets/55 feet/feet55_8.jpg";
import feet55_9 from "../../assets/55 feet/feet55_9.jpg";
import feet55_10 from "../../assets/55 feet/feet55_10.jpg";
import feet55_11 from "../../assets/55 feet/feet55_11.jpg";
import feet55_12 from "../../assets/55 feet/feet55_12.jpg";

//  <-----   feet 56 images ------->
import feet56_1 from "../../assets/56 feet/feet56_1.jpg";
import feet56_2 from "../../assets/56 feet/feet56_2.jpg";
import feet56_3 from "../../assets/56 feet/feet56_3.jpg";
import feet56_4 from "../../assets/56 feet/feet56_4.jpg";
import feet56_5 from "../../assets/56 feet/feet56_5.jpg";
import feet56_6 from "../../assets/56 feet/feet56_6.jpg";
import feet56_7 from "../../assets/56 feet/feet56_7.jpg";
import feet56_8 from "../../assets/56 feet/feet56_8.jpg";
import feet56_9 from "../../assets/56 feet/feet56_9.jpg";
import feet56_10 from "../../assets/56 feet/feet56_10.jpg";
import feet56_11 from "../../assets/56 feet/feet56_11.jpg";
import feet56_12 from "../../assets/56 feet/feet56_12.jpg";
import feet56_13 from "../../assets/56 feet/feet56_13.jpg";
import feet56_14 from "../../assets/56 feet/feet56_14.jpg";
import feet56_15 from "../../assets/56 feet/feet56_15.jpg";
import feet56_16 from "../../assets/56 feet/feet56_16.jpg";
import feet56_17 from "../../assets/56 feet/feet56_17.jpg";
import feet56_18 from "../../assets/56 feet/feet56_18.jpg";
import feet56_19 from "../../assets/56 feet/feet56_19.jpg";
import feet56_20 from "../../assets/56 feet/feet56_20.jpg";
import feet56_21 from "../../assets/56 feet/feet56_21.jpg";

//  <-----   feet 56 images majesty------->
import feet56_majesty_1 from "../../assets/56 feet majesty/feet56_1.jpg";
import feet56_majesty_2 from "../../assets/56 feet majesty/feet56_2.jpg";
import feet56_majesty_3 from "../../assets/56 feet majesty/feet56_3.jpg";
import feet56_majesty_4 from "../../assets/56 feet majesty/feet56_4.jpg";
import feet56_majesty_5 from "../../assets/56 feet majesty/feet56_5.jpg";
import feet56_majesty_6 from "../../assets/56 feet majesty/feet56_6.jpg";
import feet56_majesty_7 from "../../assets/56 feet majesty/feet56_7.jpg";
import feet56_majesty_8 from "../../assets/56 feet majesty/feet56_8.jpg";
import feet56_majesty_9 from "../../assets/56 feet majesty/feet56_9.jpg";
import feet56_majesty_10 from "../../assets/56 feet majesty/feet56_10.jpg";

//  <-----   feet 60 images ------->
import feet60_1 from "../../assets/60 feet/feet60_1.jpg";
import feet60_2 from "../../assets/60 feet/feet60_2.jpg";
import feet60_3 from "../../assets/60 feet/feet60_3.jpg";
import feet60_4 from "../../assets/60 feet/feet60_4.jpg";
import feet60_5 from "../../assets/60 feet/feet60_5.jpg";
import feet60_6 from "../../assets/60 feet/feet60_6.jpg";
import feet60_7 from "../../assets/60 feet/feet60_7.jpg";
import feet60_8 from "../../assets/60 feet/feet60_8.jpg";
import feet60_9 from "../../assets/60 feet/feet60_9.jpg";
import feet60_10 from "../../assets/60 feet/feet60_10.jpg";
import feet60_11 from "../../assets/60 feet/feet60_11.jpg";
import feet60_12 from "../../assets/60 feet/feet60_12.jpg";

//  <-----   again feet 60 images ------->
import again_feet60_1 from "../../assets/again 60 feet/again feet60_1.jpg";
import again_feet60_2 from "../../assets/again 60 feet/again feet60_2.jpg";
import again_feet60_3 from "../../assets/again 60 feet/again feet60_3.jpg";

//  <-----    feet 62 images ------->
import feet62_1 from "../../assets/62 feet/feet62_1.jpg";
import feet62_2 from "../../assets/62 feet/feet62_2.jpg";
import feet62_3 from "../../assets/62 feet/feet62_3.jpg";
import feet62_4 from "../../assets/62 feet/feet62_4.jpg";
import feet62_5 from "../../assets/62 feet/feet62_5.jpg";
import feet62_6 from "../../assets/62 feet/feet62_6.jpg";
import feet62_7 from "../../assets/62 feet/feet62_7.jpg";
import feet62_8 from "../../assets/62 feet/feet62_8.jpg";

//  <-----    feet 62 images ------->
import Again_feet62_1 from "../../assets/again 62 feet/again feet62_1.jpg";
import Again_feet62_2 from "../../assets/again 62 feet/again feet62_2.jpg";
import Again_feet62_3 from "../../assets/again 62 feet/again feet62_3.jpg";
import Again_feet62_4 from "../../assets/again 62 feet/again feet62_4.jpg";
import Again_feet62_5 from "../../assets/again 62 feet/again feet62_5.jpg";
import Again_feet62_6 from "../../assets/again 62 feet/again feet62_6.jpg";

//  <-----    feet 65 images ------->
import feet65_1 from "../../assets/65 feet/feet65_1.jpg";
import feet65_2 from "../../assets/65 feet/feet65_2.jpg";
import feet65_3 from "../../assets/65 feet/feet65_3.jpg";
import feet65_4 from "../../assets/65 feet/feet65_4.jpg";
import feet65_5 from "../../assets/65 feet/feet65_5.jpg";
import feet65_6 from "../../assets/65 feet/feet65_6.jpg";
import feet65_7 from "../../assets/65 feet/feet65_7.jpg";
import feet65_8 from "../../assets/65 feet/feet65_8.jpg";
import feet65_9 from "../../assets/65 feet/feet65_9.jpg";
import feet65_10 from "../../assets/65 feet/feet65_10.jpg";
import feet65_11 from "../../assets/65 feet/feet65_11.jpg";

//  <-----   feet 70 images ------->
import feet70_1 from "../../assets/70 feet/feet70_1.jpg";
import feet70_2 from "../../assets/70 feet/feet70_2.jpg";
import feet70_3 from "../../assets/70 feet/feet70_3.jpg";
import feet70_4 from "../../assets/70 feet/feet70_4.jpg";
import feet70_5 from "../../assets/70 feet/feet70_5.jpg";
import feet70_6 from "../../assets/70 feet/feet70_6.jpg";
import feet70_7 from "../../assets/70 feet/feet70_7.jpg";

//  <-----   again feet 70 images ------->
import again_feet70_1 from "../../assets/again 70 feet/feet70_1.jpg";
import again_feet70_2 from "../../assets/again 70 feet/feet70_2.jpg";
import again_feet70_3 from "../../assets/again 70 feet/feet70_3.jpg";
import again_feet70_4 from "../../assets/again 70 feet/feet70_4.jpg";
import again_feet70_5 from "../../assets/again 70 feet/feet70_5.jpg";
import again_feet70_6 from "../../assets/again 70 feet/feet70_6.jpg";
import again_feet70_7 from "../../assets/again 70 feet/feet70_7.jpg";
import again_feet70_8 from "../../assets/again 70 feet/feet70_8.jpg";
import again_feet70_9 from "../../assets/again 70 feet/feet70_9.jpg";
import again_feet70_10 from "../../assets/again 70 feet/feet70_10.jpg";
import again_feet70_11 from "../../assets/again 70 feet/feet70_11.jpg";
import again_feet70_12 from "../../assets/again 70 feet/feet70_12.jpg";
import again_feet70_13 from "../../assets/again 70 feet/feet70_13.jpg";
import again_feet70_14 from "../../assets/again 70 feet/feet70_14.jpg";
import again_feet70_15 from "../../assets/again 70 feet/feet70_15.jpg";

//  <-----   feet 75 images ------->
import feet75_1 from "../../assets/75 feet/feet75_1.jpg";
import feet75_2 from "../../assets/75 feet/feet75_2.jpg";
import feet75_3 from "../../assets/75 feet/feet75_3.jpg";
import feet75_4 from "../../assets/75 feet/feet75_4.jpg";
import feet75_5 from "../../assets/75 feet/feet75_5.jpg";
import feet75_6 from "../../assets/75 feet/feet75_6.jpg";
import feet75_7 from "../../assets/75 feet/feet75_7.jpg";
import feet75_8 from "../../assets/75 feet/feet75_7.jpg";
import feet75_9 from "../../assets/75 feet/feet75_7.jpg";
import feet75_10 from "../../assets/75 feet/feet75_7.jpg";
import feet75_11 from "../../assets/75 feet/feet75_7.jpg";
import feet75_12 from "../../assets/75 feet/feet75_7.jpg";
import feet75_13 from "../../assets/75 feet/feet75_7.jpg";
import feet75_14 from "../../assets/75 feet/feet75_7.jpg";
import feet75_15 from "../../assets/75 feet/feet75_7.jpg";
import feet75_16 from "../../assets/75 feet/feet75_7.jpg";
import feet75_17 from "../../assets/75 feet/feet75_7.jpg";
import feet75_18 from "../../assets/75 feet/feet75_7.jpg";
import feet75_19 from "../../assets/75 feet/feet75_7.jpg";
import feet75_20 from "../../assets/75 feet/feet75_7.jpg";
import feet75_21 from "../../assets/75 feet/feet75_7.jpg";
import feet75_22 from "../../assets/75 feet/feet75_7.jpg";
import feet75_23 from "../../assets/75 feet/feet75_7.jpg";

//  <-----   again feet 75 images ------->
import again_ft75_1 from "../../assets/again 75 feet/again feet75_1.jpg";
import again_ft75_2 from "../../assets/again 75 feet/again feet75_2.jpg";
import again_ft75_3 from "../../assets/again 75 feet/again feet75_3.jpg";
import again_ft75_4 from "../../assets/again 75 feet/again feet75_4.jpg";
import again_ft75_5 from "../../assets/again 75 feet/again feet75_5.jpg";
import again_ft75_6 from "../../assets/again 75 feet/again feet75_6.jpg";
import again_ft75_7 from "../../assets/again 75 feet/again feet75_7.jpg";
import again_ft75_8 from "../../assets/again 75 feet/again feet75_8.jpg";
import again_ft75_9 from "../../assets/again 75 feet/again feet75_9.jpg";
import again_ft75_10 from "../../assets/again 75 feet/again feet75_10.jpg";
import again_ft75_11 from "../../assets/again 75 feet/again feet75_11.jpg";
import again_ft75_12 from "../../assets/again 75 feet/again feet75_12.jpg";
import again_ft75_13 from "../../assets/again 75 feet/again feet75_13.jpg";
import again_ft75_14 from "../../assets/again 75 feet/again feet75_14.jpg";
import again_ft75_15 from "../../assets/again 75 feet/again feet75_15.jpg";
import again_ft75_16 from "../../assets/again 75 feet/again feet75_16.jpg";
import again_ft75_17 from "../../assets/again 75 feet/again feet75_17.jpg";
import again_ft75_18 from "../../assets/again 75 feet/again feet75_18.jpg";
import again_ft75_19 from "../../assets/again 75 feet/again feet75_19.jpg";
import again_ft75_20 from "../../assets/again 75 feet/again feet75_20.jpg";
import again_ft75_21 from "../../assets/again 75 feet/again feet75_21.jpg";
import again_ft75_22 from "../../assets/again 75 feet/again feet75_22.jpg";
import again_ft75_23 from "../../assets/again 75 feet/again feet75_23.jpg";
import again_ft75_24 from "../../assets/again 75 feet/again feet75_24.jpg";

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

// //  <-----   feet 85 images ------->
// import ft85_1 from "../../assets/charter/85ft/85ft_1.jpg";
// import ft85_2 from "../../assets/charter/85ft/85ft_2.jpg";
// import ft85_3 from "../../assets/charter/85ft/85ft_3.jpg";
// import ft85_4 from "../../assets/charter/85ft/85ft_4.jpg";
// import ft85_5 from "../../assets/charter/85ft/85ft_5.jpg";
// import ft85_6 from "../../assets/charter/85ft/85ft_6.jpg";
// import ft85_7 from "../../assets/charter/85ft/85ft_7.jpg";
// import ft85_8 from "../../assets/charter/85ft/85ft_8.jpg";
// import ft85_9 from "../../assets/charter/85ft/85ft_9.jpg";
// import ft85_10 from "../../assets/charter/85ft/85ft_10.jpg";

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

//  <-----   again feet 88 images ------->
import feet88_1 from "../../assets/88 feet/feet88_1.jpg";
import feet88_2 from "../../assets/88 feet/feet88_2.jpg";
import feet88_3 from "../../assets/88 feet/feet88_3.jpg";
import feet88_4 from "../../assets/88 feet/feet88_4.jpg";
import feet88_5 from "../../assets/88 feet/feet88_5.jpg";
import feet88_6 from "../../assets/88 feet/feet88_6.jpg";
import feet88_7 from "../../assets/88 feet/feet88_7.jpg";
import feet88_8 from "../../assets/88 feet/feet88_8.jpg";
import feet88_9 from "../../assets/88 feet/feet88_9.jpg";
import feet88_10 from "../../assets/88 feet/feet88_10.jpg";
import feet88_11 from "../../assets/88 feet/feet88_11.jpg";
import feet88_12 from "../../assets/88 feet/feet88_12.jpg";

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

//  <-----   again feet 95 images ------->
import feet95_1 from "../../assets/95 feet/feet95_1.jpg";
import feet95_2 from "../../assets/95 feet/feet95_2.jpg";
import feet95_3 from "../../assets/95 feet/feet95_3.jpg";
import feet95_4 from "../../assets/95 feet/feet95_4.jpg";
import feet95_5 from "../../assets/95 feet/feet95_5.jpg";
import feet95_6 from "../../assets/95 feet/feet95_6.jpg";
import feet95_7 from "../../assets/95 feet/feet95_7.jpg";
import feet95_8 from "../../assets/95 feet/feet95_8.jpg";
import feet95_9 from "../../assets/95 feet/feet95_9.jpg";
import feet95_10 from "../../assets/95 feet/feet95_10.jpg";
import feet95_11 from "../../assets/95 feet/feet95_11.jpg";
import feet95_12 from "../../assets/95 feet/feet95_12.jpg";
import feet95_13 from "../../assets/95 feet/feet95_13.jpg";
import feet95_14 from "../../assets/95 feet/feet95_14.jpg";
import feet95_15 from "../../assets/95 feet/feet95_15.jpg";
import feet95_16 from "../../assets/95 feet/feet95_16.jpg";
import feet95_17 from "../../assets/95 feet/feet95_17.jpg";
import feet95_18 from "../../assets/95 feet/feet95_18.jpg";
import feet95_19 from "../../assets/95 feet/feet95_19.jpg";
import feet95_20 from "../../assets/95 feet/feet95_20.jpg";
import feet95_21 from "../../assets/95 feet/feet95_21.jpg";
import feet95_22 from "../../assets/95 feet/feet95_22.jpg";

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

//  <-----   again feet 100 images ------->
import feet100_1 from "../../assets/100 feet/feet100_1.jpg";
import feet100_2 from "../../assets/100 feet/feet100_2.jpg";
import feet100_3 from "../../assets/100 feet/feet100_3.jpg";
import feet100_4 from "../../assets/100 feet/feet100_4.jpg";
import feet100_5 from "../../assets/100 feet/feet100_5.jpg";
import feet100_6 from "../../assets/100 feet/feet100_6.jpg";
import feet100_7 from "../../assets/100 feet/feet100_7.jpg";
import feet100_8 from "../../assets/100 feet/feet100_8.jpg";
import feet100_9 from "../../assets/100 feet/feet100_9.jpg";
import feet100_10 from "../../assets/100 feet/feet100_10.jpg";
import feet100_11 from "../../assets/100 feet/feet100_11.jpg";
import feet100_12 from "../../assets/100 feet/feet100_12.jpg";
import feet100_13 from "../../assets/100 feet/feet100_13.jpg";
import feet100_14 from "../../assets/100 feet/feet100_14.jpg";
import feet100_15 from "../../assets/100 feet/feet100_15.jpg";

//  <-----   feet 101 images ------->
import feet101_1 from "../../assets/charter/101ft/101ft_1.jpg";
import feet101_2 from "../../assets/charter/101ft/101ft_2.jpg";
import feet101_3 from "../../assets/charter/101ft/101ft_3.jpg";
import feet101_4 from "../../assets/charter/101ft/101ft_4.jpg";
import feet101_5 from "../../assets/charter/101ft/101ft_5.jpg";
import feet101_6 from "../../assets/charter/101ft/101ft_6.jpg";
import feet101_7 from "../../assets/charter/101ft/101ft_7.jpg";
import feet101_8 from "../../assets/charter/101ft/101ft_8.jpg";
import feet101_9 from "../../assets/charter/101ft/101ft_9.jpg";
import feet101_10 from "../../assets/charter/101ft/101ft_10.jpg";
import feet101_11 from "../../assets/charter/101ft/101ft_11.jpg";

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

//  <-----   again feet 120 images ------->
import feet120_1 from "../../assets/120 feet/feet120_1.jpg";
import feet120_2 from "../../assets/120 feet/feet120_2.jpg";
import feet120_3 from "../../assets/120 feet/feet120_3.jpg";
import feet120_4 from "../../assets/120 feet/feet120_4.jpg";
import feet120_5 from "../../assets/120 feet/feet120_5.jpg";
import feet120_6 from "../../assets/120 feet/feet120_6.jpg";
import feet120_7 from "../../assets/120 feet/feet120_7.jpg";
import feet120_8 from "../../assets/120 feet/feet120_8.jpg";
import feet120_9 from "../../assets/120 feet/feet120_9.jpg";
import feet120_10 from "../../assets/120 feet/feet120_10.jpg";
import feet120_11 from "../../assets/120 feet/feet120_11.jpg";
import feet120_12 from "../../assets/120 feet/feet120_12.jpg";
import feet120_13 from "../../assets/120 feet/feet120_13.jpg";
import feet120_14 from "../../assets/120 feet/feet120_14.jpg";
import feet120_15 from "../../assets/120 feet/feet120_15.jpg";
import feet120_16 from "../../assets/120 feet/feet120_16.jpg";
import feet120_17 from "../../assets/120 feet/feet120_17.jpg";
import feet120_18 from "../../assets/120 feet/feet120_18.jpg";
import feet120_19 from "../../assets/120 feet/feet120_19.jpg";
import feet120_20 from "../../assets/120 feet/feet120_20.jpg";
import feet120_21 from "../../assets/120 feet/feet120_21.jpg";
import feet120_22 from "../../assets/120 feet/feet120_22.jpg";
import feet120_23 from "../../assets/120 feet/feet120_23.jpg";
import feet120_24 from "../../assets/120 feet/feet120_24.jpg";
import feet120_25 from "../../assets/120 feet/feet120_25.jpg";
import feet120_26 from "../../assets/120 feet/feet120_26.jpg";

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

const Yachts = () => {
  const yachts = [
    {
      name: "35 Feet Sightseeing Boat",
      price: 300,
      capacity: "10 People",
      btn: "/35feet",
      images: [
        { url: feet35_1, alt: "35 Feet Yacht" },
        // { url: feet35_2, alt: '35 Feet Yacht' },
        { url: feet35_3, alt: "35 Feet Yacht" },
        { url: feet35_4, alt: "35 Feet Yacht" },
        { url: feet35_5, alt: "35 Feet Yacht" },
        { url: feet35_6, alt: "35 Feet Yacht" },
        { url: feet35_7, alt: "35 Feet Yacht" },
        // { url: feet35_8, alt: '35 Feet Yacht' },
        // { url: feet35_9, alt: '35 Feet Yacht' }
      ],
    },
    {
      name: "40 Feet Luxury Mini Yacht",
      price: 350,
      capacity: "12 People",
      btn: "/Yachts/feet40",
      images: [
        { url: feet40_1, alt: "40 Feet Yacht" },
        // { url: feet40_2, alt: '40 Feet Yacht' },
        { url: feet40_3, alt: "40 Feet Yacht" },
        { url: feet40_4, alt: "40 Feet Yacht" },
        { url: feet40_5, alt: "40 Feet Yacht" },
        { url: feet40_6, alt: "40 Feet Yacht" },
        { url: feet40_8, alt: "40 Feet Yacht" },
        { url: feet40_9, alt: "40 Feet Yacht" },
      ],
    },
    {
      name: "42 Feet Azimuth Brand Yacht",
      price: 450,
      capacity: "12 People",
      btn: "/Yachts/feet42",
      images: [
        { url: feet42_1, alt: "42 Feet Yacht" },
        { url: feet42_2, alt: "42 Feet Yacht" },
        { url: feet42_3, alt: "42 Feet Yacht" },
        { url: feet42_4, alt: "42 Feet Yacht" },
        { url: feet42_5, alt: "42 Feet Yacht" },
        { url: feet42_6, alt: "42 Feet Yacht" },
        { url: feet42_7, alt: "42 Feet Yacht" },
        { url: feet42_8, alt: "42 Feet Yacht" },
        { url: feet42_9, alt: "42 Feet Yacht" },
        { url: feet42_10, alt: "42 Feet Yacht" },
        { url: feet42_11, alt: "42 Feet Yacht" },
        { url: feet42_12, alt: "42 Feet Yacht" },
        { url: feet42_13, alt: "42 Feet Yacht" },
      ],
    },
    {
      name: "45 Feet Mejesty Brand Yacht",
      price: 450,
      capacity: "12 People",
      btn: "/Yachts/feet45",
      images: [
        { url: feet45_1, alt: "45 Feet Yacht" },
        { url: feet45_2, alt: "45 Feet Yacht" },
        { url: feet45_3, alt: "45 Feet Yacht" },
        { url: feet45_4, alt: "45 Feet Yacht" },
        { url: feet45_5, alt: "45 Feet Yacht" },
        { url: feet45_6, alt: "45 Feet Yacht" },
        { url: feet45_7, alt: "45 Feet Yacht" },
        { url: feet45_8, alt: "45 Feet Yacht" },
        { url: feet45_9, alt: "45 Feet Yacht" },
        { url: feet45_10, alt: "45 Feet Yacht" },
        { url: feet45_11, alt: "45 Feet Yacht" },
        { url: feet45_12, alt: "45 Feet Yacht" },
        { url: feet45_13, alt: "45 Feet Yacht" },
        { url: feet45_14, alt: "45 Feet Yacht" },
        { url: feet45_16, alt: "45 Feet Yacht" },
        { url: feet45_17, alt: "45 Feet Yacht" },
        { url: feet45_18, alt: "45 Feet Yacht" },
        { url: feet45_19, alt: "45 Feet Yacht" },
        { url: feet45_20, alt: "45 Feet Yacht" },
        { url: feet45_21, alt: "45 Feet Yacht" },
        { url: feet45_22, alt: "45 Feet Yacht" },
      ],
    },
    {
      name: "45 Feet Yacht",
      price: 399,
      capacity: "14 People",
      btn: "/Yachts/feet45_",
      images: [
        { url: again_feet45_1, alt: "45 Feet Yacht" },
        { url: again_feet45_2, alt: "45 Feet Yacht" },
        { url: again_feet45_3, alt: "45 Feet Yacht" },
        { url: again_feet45_4, alt: "45 Feet Yacht" },
        { url: again_feet45_5, alt: "45 Feet Yacht" },
        { url: again_feet45_6, alt: "45 Feet Yacht" },
        { url: again_feet45_7, alt: "45 Feet Yacht" },
        { url: again_feet45_8, alt: "45 Feet Yacht" },
        { url: again_feet45_9, alt: "45 Feet Yacht" },
        { url: again_feet45_10, alt: "45 Feet Yacht" },
        { url: again_feet45_11, alt: "45 Feet Yacht" },
        { url: again_feet45_12, alt: "45 Feet Yacht" },
        { url: again_feet45_13, alt: "45 Feet Yacht" },
        { url: again_feet45_14, alt: "45 Feet Yacht" },
      ],
    },
    {
      name: "50 Feet Mejesty Brand Yacht",
      price: 500,
      capacity: "20 People",
      btn: "/Yachts/feet50",
      images: [
        { url: feet50_1, alt: "50 Feet Yacht" },
        { url: feet50_2, alt: "50 Feet Yacht" },
        { url: feet50_3, alt: "50 Feet Yacht" },
        { url: feet50_4, alt: "50 Feet Yacht" },
        { url: feet50_5, alt: "50 Feet Yacht" },
        { url: feet50_6, alt: "50 Feet Yacht" },
        { url: feet50_7, alt: "50 Feet Yacht" },
        { url: feet50_8, alt: "50 Feet Yacht" },
        { url: feet50_9, alt: "50 Feet Yacht" },
        { url: feet50_10, alt: "50 Feet Yacht" },
        { url: feet50_11, alt: "50 Feet Yacht" },
        { url: feet50_12, alt: "50 Feet Yacht" },
        { url: feet50_13, alt: "50 Feet Yacht" },
        { url: feet50_14, alt: "50 Feet Yacht" },
        { url: feet50_15, alt: "50 Feet Yacht" },
        { url: feet50_16, alt: "50 Feet Yacht" },
        { url: feet50_17, alt: "50 Feet Yacht" },
        { url: feet50_18, alt: "50 Feet Yacht" },
        { url: feet50_19, alt: "50 Feet Yacht" },
        { url: feet50_20, alt: "50 Feet Yacht" },
        { url: feet50_21, alt: "50 Feet Yacht" },
      ],
    },
    {
      name: "50 Feet Brand New Nova ",
      price: 550,
      capacity: "14 People",
      btn: "/Yachts/feet50-nova",
      images: [
        { url: feet50_nova_1, alt: "50 Feet Yacht" },
        { url: feet50_nova_2, alt: "50 Feet Yacht" },
        { url: feet50_nova_3, alt: "50 Feet Yacht" },
        { url: feet50_nova_4, alt: "50 Feet Yacht" },
        { url: feet50_nova_5, alt: "50 Feet Yacht" },
        { url: feet50_nova_6, alt: "50 Feet Yacht" },
        { url: feet50_nova_7, alt: "50 Feet Yacht" },
        { url: feet50_nova_8, alt: "50 Feet Yacht" },
        { url: feet50_nova_9, alt: "50 Feet Yacht" },
        { url: feet50_nova_10, alt: "50 Feet Yacht" },
        { url: feet50_nova_11, alt: "50 Feet Yacht" },
        { url: feet50_nova_12, alt: "50 Feet Yacht" },
        { url: feet50_nova_13, alt: "50 Feet Yacht" },
        { url: feet50_nova_14, alt: "50 Feet Yacht" },
        { url: feet50_nova_15, alt: "50 Feet Yacht" },
        { url: feet50_nova_16, alt: "50 Feet Yacht" },
        { url: feet50_nova_17, alt: "50 Feet Yacht" },
        { url: feet50_nova_18, alt: "50 Feet Yacht" },
        { url: feet50_nova_19, alt: "50 Feet Yacht" },
        { url: feet50_nova_20, alt: "50 Feet Yacht" },
        { url: feet50_nova_21, alt: "50 Feet Yacht" },
        { url: feet50_nova_22, alt: "50 Feet Yacht" },
        { url: feet50_nova_23, alt: "50 Feet Yacht" },
        { url: feet50_nova_24, alt: "50 Feet Yacht" },
      ],
    },
    {
      name: "50 Feet Luxury Yacht",
      price: 500,
      capacity: "20 People",
      btn: "/Yachts/50 feet yacht",
      images: [
        { url: again_feet50_1, alt: "50 Feet Yacht" },
        { url: again_feet50_2, alt: "50 Feet Yacht" },
        { url: again_feet50_3, alt: "50 Feet Yacht" },
        { url: again_feet50_4, alt: "50 Feet Yacht" },
        { url: again_feet50_5, alt: "50 Feet Yacht" },
        { url: again_feet50_6, alt: "50 Feet Yacht" },
        { url: again_feet50_7, alt: "50 Feet Yacht" },
        { url: again_feet50_8, alt: "50 Feet Yacht" },
        { url: again_feet50_9, alt: "50 Feet Yacht" },
        { url: again_feet50_10, alt: "50 Feet Yacht" },
        { url: again_feet50_11, alt: "50 Feet Yacht" },
        { url: again_feet50_12, alt: "50 Feet Yacht" },
      ],
    },
    {
      name: "50 Feet Azimuth Brand Yacht",
      price: 600,
      capacity: "17 People",
      btn: "/Yachts/feet yacht",
      images: [
        { url: azimuth_feet50_1, alt: "50 Feet Yacht" },
        { url: azimuth_feet50_2, alt: "50 Feet Yacht" },
        { url: azimuth_feet50_3, alt: "50 Feet Yacht" },
        { url: azimuth_feet50_4, alt: "50 Feet Yacht" },
        { url: azimuth_feet50_5, alt: "50 Feet Yacht" },
        { url: azimuth_feet50_6, alt: "50 Feet Yacht" },
        { url: azimuth_feet50_7, alt: "50 Feet Yacht" },
        { url: azimuth_feet50_8, alt: "50 Feet Yacht" },
        { url: azimuth_feet50_9, alt: "50 Feet Yacht" },
        { url: azimuth_feet50_10, alt: "50 Feet Yacht" },
      ],
    },
    {
      name: "52 Feet Luxurious Yacht",
      price: 500,
      capacity: "20 People",
      btn: "/Yachts/feet52",
      images: [
        { url: feet52_1, alt: "52 Feet Yacht" },
        // { url: feet52_2, alt: "52 Feet Yacht" },
        // { url: feet52_3, alt: "52 Feet Yacht" },
        { url: feet52_4, alt: "52 Feet Yacht" },
        { url: feet52_5, alt: "52 Feet Yacht" },
        { url: feet52_6, alt: "52 Feet Yacht" },
        { url: feet52_7, alt: "52 Feet Yacht" },
        { url: feet52_8, alt: "52 Feet Yacht" },
        { url: feet52_9, alt: "52 Feet Yacht" },
        // { url: feet52_10, alt: "52 Feet Yacht" },
        // { url: feet52_11, alt: "52 Feet Yacht" },
        // { url: feet52_12, alt: "52 Feet Yacht" },
      ],
    },

    {
      name: "56 Feet Azimuth Yacht ",
      price: 700,
      capacity: "20 People",
      btn: "/Yachts/feet56",
      images: [
        { url: feet56_1, alt: "Explorer Goldeon Cigarette 31 Yacht" },
        { url: feet56_2, alt: "Explorer Goldeon Cigarette 31 Yacht" },
        { url: feet56_3, alt: "Explorer Goldeon Cigarette 31 Yacht" },
        { url: feet56_4, alt: "Explorer Goldeon Cigarette 31 Yacht" },
        { url: feet56_5, alt: "Explorer Goldeon Cigarette 31 Yacht" },
        { url: feet56_6, alt: "Explorer Goldeon Cigarette 31 Yacht" },
        { url: feet56_7, alt: "Explorer Goldeon Cigarette 31 Yacht" },
        { url: feet56_8, alt: "Explorer Goldeon Cigarette 31 Yacht" },
        { url: feet56_9, alt: "Explorer Goldeon Cigarette 31 Yacht" },
        { url: feet56_10, alt: "Explorer Goldeon Cigarette 31 Yacht" },
        { url: feet56_11, alt: "Explorer Goldeon Cigarette 31 Yacht" },
        { url: feet56_12, alt: "Explorer Goldeon Cigarette 31 Yacht" },
        { url: feet56_13, alt: "Explorer Goldeon Cigarette 31 Yacht" },
        { url: feet56_14, alt: "Explorer Goldeon Cigarette 31 Yacht" },
        { url: feet56_15, alt: "Explorer Goldeon Cigarette 31 Yacht" },
        { url: feet56_16, alt: "Explorer Goldeon Cigarette 31 Yacht" },
        { url: feet56_17, alt: "Explorer Goldeon Cigarette 31 Yacht" },
        { url: feet56_18, alt: "Explorer Goldeon Cigarette 31 Yacht" },
        { url: feet56_19, alt: "Explorer Goldeon Cigarette 31 Yacht" },
        { url: feet56_20, alt: "Explorer Goldeon Cigarette 31 Yacht" },
        { url: feet56_21, alt: "Explorer Goldeon Cigarette 31 Yacht" },
      ],
    },
    {
      name: "Mejesty 56 Feet Yacht ",
      price: 750,
      capacity: "25 People",
      btn: "/Yachts/feet56-majesty",
      images: [
        { url: feet56_majesty_1, alt: "Explorer Goldeon Cigarette 31 Yacht" },
        { url: feet56_majesty_2, alt: "Explorer Goldeon Cigarette 31 Yacht" },
        { url: feet56_majesty_3, alt: "Explorer Goldeon Cigarette 31 Yacht" },
        { url: feet56_majesty_4, alt: "Explorer Goldeon Cigarette 31 Yacht" },
        { url: feet56_majesty_5, alt: "Explorer Goldeon Cigarette 31 Yacht" },
        { url: feet56_majesty_6, alt: "Explorer Goldeon Cigarette 31 Yacht" },
        { url: feet56_majesty_7, alt: "Explorer Goldeon Cigarette 31 Yacht" },
        { url: feet56_majesty_8, alt: "Explorer Goldeon Cigarette 31 Yacht" },
        { url: feet56_majesty_9, alt: "Explorer Goldeon Cigarette 31 Yacht" },
        { url: feet56_majesty_10, alt: "Explorer Goldeon Cigarette 31 Yacht" },
      ],
    },
    {
      name: "60 Feet Yacht Domintor  ",
      price: 750,
      capacity: "25 People",
      btn: "/Yachts/feet60",
      images: [
        { url: feet60_1, alt: "Explorer Goldeon Cigarette 31 Yacht" },
        { url: feet60_2, alt: "Explorer Goldeon Cigarette 31 Yacht" },
        { url: feet60_3, alt: "Explorer Goldeon Cigarette 31 Yacht" },
        { url: feet60_4, alt: "Explorer Goldeon Cigarette 31 Yacht" },
        { url: feet60_5, alt: "Explorer Goldeon Cigarette 31 Yacht" },
        { url: feet60_6, alt: "Explorer Goldeon Cigarette 31 Yacht" },
        { url: feet60_7, alt: "Explorer Goldeon Cigarette 31 Yacht" },
        { url: feet60_8, alt: "Explorer Goldeon Cigarette 31 Yacht" },
        { url: feet60_9, alt: "Explorer Goldeon Cigarette 31 Yacht" },
        { url: feet60_10, alt: "Explorer Goldeon Cigarette 31 Yacht" },
        { url: feet60_11, alt: "Explorer Goldeon Cigarette 31 Yacht" },
        { url: feet60_12, alt: "Explorer Goldeon Cigarette 31 Yacht" },
      ],
    },
    {
      name: "60 Feet Princess Yacht ",
      price: 600,
      capacity: "22 People",
      btn: "/princessfeet60",
      images: [
        { url: again_feet60_1, alt: "Explorer Goldeon Cigarette 31 Yacht" },
        { url: again_feet60_2, alt: "Explorer Goldeon Cigarette 31 Yacht" },
        { url: again_feet60_3, alt: "Explorer Goldeon Cigarette 31 Yacht" },
      ],
    },
    {
      name: "62 Feet Lana Yacht ",
      price: 999,
      capacity: "20 People",
      btn: "/Yachts/yacht feet62",
      images: [
        { url: feet62_1, alt: "62 feet yacht" },
        { url: feet62_2, alt: "62 feet yacht" },
        { url: feet62_3, alt: "62 feet yacht" },
        { url: feet62_4, alt: "62 feet yacht" },
        { url: feet62_5, alt: "62 feet yacht" },
        { url: feet62_6, alt: "62 feet yacht" },
        { url: feet62_7, alt: "62 feet yacht" },
        { url: feet62_8, alt: "62 feet yacht" },
      ],
    },
    {
      name: "62 Feet Fibo Yacht ",
      price: 1499,
      capacity: "25 People",
      btn: "/Yachts/feet62_",
      images: [
        { url: Again_feet62_1, alt: "62 feet yacht" },
        { url: Again_feet62_2, alt: "62 feet yacht" },
        { url: Again_feet62_3, alt: "62 feet yacht" },
        { url: Again_feet62_4, alt: "62 feet yacht" },
        { url: Again_feet62_5, alt: "62 feet yacht" },
        { url: Again_feet62_6, alt: "62 feet yacht" },
      ],
    },
    {
      name: "65 Feet Party House Yacht",
      price: 999,
      capacity: "50 People",
      btn: "/Yachts/feet65",
      images: [
        { url: feet65_1, alt: "65 feet yacht" },
        { url: feet65_2, alt: "65 feet yacht" },
        { url: feet65_3, alt: "65 feet yacht" },
        { url: feet65_4, alt: "65 feet yacht" },
        { url: feet65_5, alt: "65 feet yacht" },
        { url: feet65_6, alt: "65 feet yacht" },
        { url: feet65_7, alt: "65 feet yacht" },
        { url: feet65_8, alt: "65 feet yacht" },
        { url: feet65_9, alt: "65 feet yacht" },
        { url: feet65_10, alt: "65 feet yacht" },
        { url: feet65_11, alt: "65 feet yacht" },
      ],
    },
    {
      name: "70 Feet Luxurious Yacht",
      price: 700,
      btn: "/Yachts/feet70",
      capacity: "30 People",
      images: [
        { url: feet70_1, alt: "Explorer Goldeon Cigarette 31 Yacht" },
        { url: feet70_2, alt: "Explorer Goldeon Cigarette 31 Yacht" },
        { url: feet70_3, alt: "Explorer Goldeon Cigarette 31 Yacht" },
        { url: feet70_4, alt: "Explorer Goldeon Cigarette 31 Yacht" },
        { url: feet70_5, alt: "Explorer Goldeon Cigarette 31 Yacht" },
        { url: feet70_6, alt: "Explorer Goldeon Cigarette 31 Yacht" },
        { url: feet70_7, alt: "Explorer Goldeon Cigarette 31 Yacht" },
      ],
    },
    {
      name: "70 Feet Luxurious Yacht",
      price: 700,
      capacity: "30 People",
      btn: "/Yachts/70feetyacht",
      images: [
        { url: again_feet70_1, alt: "Explorer Goldeon Cigarette 31 Yacht" },
        { url: again_feet70_2, alt: "Explorer Goldeon Cigarette 31 Yacht" },
        { url: again_feet70_3, alt: "Explorer Goldeon Cigarette 31 Yacht" },
        { url: again_feet70_4, alt: "Explorer Goldeon Cigarette 31 Yacht" },
        { url: again_feet70_5, alt: "Explorer Goldeon Cigarette 31 Yacht" },
        { url: again_feet70_6, alt: "Explorer Goldeon Cigarette 31 Yacht" },
        { url: again_feet70_7, alt: "Explorer Goldeon Cigarette 31 Yacht" },
        { url: again_feet70_8, alt: "Explorer Goldeon Cigarette 31 Yacht" },
        { url: again_feet70_9, alt: "Explorer Goldeon Cigarette 31 Yacht" },
        { url: again_feet70_10, alt: "Explorer Goldeon Cigarette 31 Yacht" },
        { url: again_feet70_11, alt: "Explorer Goldeon Cigarette 31 Yacht" },
        { url: again_feet70_12, alt: "Explorer Goldeon Cigarette 31 Yacht" },
        { url: again_feet70_13, alt: "Explorer Goldeon Cigarette 31 Yacht" },
        { url: again_feet70_14, alt: "Explorer Goldeon Cigarette 31 Yacht" },
        { url: again_feet70_15, alt: "Explorer Goldeon Cigarette 31 Yacht" },
      ],
    },
    {
      name: "75 Feet Yacht",
      price: 799,
      capacity: "40 People",
      btn: "/Yachts/feet75 yacht",
      images: [
        { url: feet75_1, alt: "75 feet yacht" },
        { url: feet75_2, alt: "75 feet yacht" },
        { url: feet75_3, alt: "75 feet yacht" },
        { url: feet75_4, alt: "75 feet yacht" },
        { url: feet75_5, alt: "75 feet yacht" },
        { url: feet75_6, alt: "75 feet yacht" },
        { url: feet75_7, alt: "75 feet yacht" },
        { url: feet75_8, alt: "75 feet yacht" },
        { url: feet75_9, alt: "75 feet yacht" },
        { url: feet75_10, alt: "75 feet yacht" },
        { url: feet75_11, alt: "75 feet yacht" },
        { url: feet75_12, alt: "75 feet yacht" },
        { url: feet75_13, alt: "75 feet yacht" },
        { url: feet75_14, alt: "75 feet yacht" },
        { url: feet75_15, alt: "75 feet yacht" },
        { url: feet75_16, alt: "75 feet yacht" },
        { url: feet75_17, alt: "75 feet yacht" },
        { url: feet75_18, alt: "75 feet yacht" },
        { url: feet75_19, alt: "75 feet yacht" },
        { url: feet75_20, alt: "75 feet yacht" },
        { url: feet75_21, alt: "75 feet yacht" },
        { url: feet75_22, alt: "75 feet yacht" },
        { url: feet75_23, alt: "75 feet yacht" },
      ],
    },
    {
      name: "75 Feet Brand New Ghost",
      btn: "/Yachts/_feet75",
      price: "1099",
      capacity: "30 people",
      images: [
        { url: again_ft75_1, alt: "Explorer Goldeon Cigarette 31 Yacht" },
        { url: again_ft75_2, alt: "Explorer Goldeon Cigarette 31 Yacht" },
        { url: again_ft75_3, alt: "Explorer Goldeon Cigarette 31 Yacht" },
        { url: again_ft75_4, alt: "Explorer Goldeon Cigarette 31 Yacht" },
        { url: again_ft75_5, alt: "Explorer Goldeon Cigarette 31 Yacht" },
        { url: again_ft75_6, alt: "Explorer Goldeon Cigarette 31 Yacht" },
        { url: again_ft75_7, alt: "Explorer Goldeon Cigarette 31 Yacht" },
        { url: again_ft75_8, alt: "Explorer Goldeon Cigarette 31 Yacht" },
        { url: again_ft75_9, alt: "Explorer Goldeon Cigarette 31 Yacht" },
        { url: again_ft75_10, alt: "Explorer Goldeon Cigarette 31 Yacht" },
        { url: again_ft75_11, alt: "Explorer Goldeon Cigarette 31 Yacht" },
        { url: again_ft75_12, alt: "Explorer Goldeon Cigarette 31 Yacht" },
        { url: again_ft75_13, alt: "Explorer Goldeon Cigarette 31 Yacht" },
        { url: again_ft75_14, alt: "Explorer Goldeon Cigarette 31 Yacht" },
        { url: again_ft75_15, alt: "Explorer Goldeon Cigarette 31 Yacht" },
        { url: again_ft75_16, alt: "Explorer Goldeon Cigarette 31 Yacht" },
        { url: again_ft75_17, alt: "Explorer Goldeon Cigarette 31 Yacht" },
        { url: again_ft75_18, alt: "Explorer Goldeon Cigarette 31 Yacht" },
        { url: again_ft75_19, alt: "Explorer Goldeon Cigarette 31 Yacht" },
        { url: again_ft75_20, alt: "Explorer Goldeon Cigarette 31 Yacht" },
        { url: again_ft75_21, alt: "Explorer Goldeon Cigarette 31 Yacht" },
        { url: again_ft75_22, alt: "Explorer Goldeon Cigarette 31 Yacht" },
        { url: again_ft75_23, alt: "Explorer Goldeon Cigarette 31 Yacht" },
        { url: again_ft75_24, alt: "Explorer Goldeon Cigarette 31 Yacht" },
      ],
    },
    {
      name: "80 Feet Azimuth Yacht",
      price: "950",
      capacity: "up to 35 people",
      btn: "/Yachts/feet80",
      // detail:
      //   "80 feet / up to 35 people / cabin / fly deck / sundeck / saloon / kitchen / bedrooms",
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
      btn: "/Yachts/_feet80",
      price: "",
      capacity: "35 people",
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
      price: "1999",
      capacity: "45 people",
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
      name: "85 Feet Luxurious Yacht with Jaccuzi",
      price: 1000,
      btn: "/Yachts/_feet85",
      capacity: "40 People",
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
    // {
    //   name: "85 Feet Yacht",
    //   btn: "/Yachts/feet85",
    //   price: "Contact",
    //   detail: "up to 35 people",
    //   images: [
    //     { url: ft85_1, alt: "Explorer Goldeon Cigarette 31 Yacht" },
    //     { url: ft85_2, alt: "Explorer Goldeon Cigarette 31 Yacht" },
    //     { url: ft85_3, alt: "Explorer Goldeon Cigarette 31 Yacht" },
    //     { url: ft85_4, alt: "Explorer Goldeon Cigarette 31 Yacht" },
    //     { url: ft85_5, alt: "Explorer Goldeon Cigarette 31 Yacht" },
    //     { url: ft85_6, alt: "Explorer Goldeon Cigarette 31 Yacht" },
    //     { url: ft85_7, alt: "Explorer Goldeon Cigarette 31 Yacht" },
    //     { url: ft85_8, alt: "Explorer Goldeon Cigarette 31 Yacht" },
    //     { url: ft85_9, alt: "Explorer Goldeon Cigarette 31 Yacht" },
    //     { url: ft85_10, alt: "Explorer Goldeon Cigarette 31 Yacht" },
    //   ],
    // },
    {
      name: "88 Feet Mejesty Brand Yacht",
      price: 1399,
      capacity: "60 People",
      btn: "/Yachts/_feet88",
      images: [
        { url: feet88_1, alt: "Explorer Goldeon Cigarette 31 Yacht" },
        { url: feet88_2, alt: "Explorer Goldeon Cigarette 31 Yacht" },
        { url: feet88_3, alt: "Explorer Goldeon Cigarette 31 Yacht" },
        { url: feet88_4, alt: "Explorer Goldeon Cigarette 31 Yacht" },
        { url: feet88_5, alt: "Explorer Goldeon Cigarette 31 Yacht" },
        { url: feet88_6, alt: "Explorer Goldeon Cigarette 31 Yacht" },
        { url: feet88_7, alt: "Explorer Goldeon Cigarette 31 Yacht" },
        { url: feet88_8, alt: "Explorer Goldeon Cigarette 31 Yacht" },
        { url: feet88_9, alt: "Explorer Goldeon Cigarette 31 Yacht" },
        { url: feet88_10, alt: "Explorer Goldeon Cigarette 31 Yacht" },
        { url: feet88_11, alt: "Explorer Goldeon Cigarette 31 Yacht" },
        { url: feet88_12, alt: "Explorer Goldeon Cigarette 31 Yacht" },
      ],
    },
    {
      name: "88 Feet Yacht With Jacuzzi",
      price: "Contact",
      detail: "up to 40 people",
      btn: "/Yachts/feet88",
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
      name: "90 Feet Party Yacht House Boat",
      price: "1499",
      capacity: "70 People",
      btn: "/Yachts/feet90",
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
      name: "95 Feet Luxurious Yacht With Jaccuzi Black Pearl",
      price: 1400,
      capacity: "60 People",
      btn: "/Yachts/feet95",
      images: [
        { url: feet95_1, alt: "Explorer Goldeon Cigarette 31 Yacht" },
        { url: feet95_2, alt: "Explorer Goldeon Cigarette 31 Yacht" },
        { url: feet95_3, alt: "Explorer Goldeon Cigarette 31 Yacht" },
        { url: feet95_4, alt: "Explorer Goldeon Cigarette 31 Yacht" },
        { url: feet95_5, alt: "Explorer Goldeon Cigarette 31 Yacht" },
        { url: feet95_6, alt: "Explorer Goldeon Cigarette 31 Yacht" },
        { url: feet95_7, alt: "Explorer Goldeon Cigarette 31 Yacht" },
        { url: feet95_8, alt: "Explorer Goldeon Cigarette 31 Yacht" },
        { url: feet95_9, alt: "Explorer Goldeon Cigarette 31 Yacht" },
        { url: feet95_10, alt: "Explorer Goldeon Cigarette 31 Yacht" },
        { url: feet95_11, alt: "Explorer Goldeon Cigarette 31 Yacht" },
        { url: feet95_12, alt: "Explorer Goldeon Cigarette 31 Yacht" },
        { url: feet95_13, alt: "Explorer Goldeon Cigarette 31 Yacht" },
        { url: feet95_14, alt: "Explorer Goldeon Cigarette 31 Yacht" },
        { url: feet95_15, alt: "Explorer Goldeon Cigarette 31 Yacht" },
        { url: feet95_16, alt: "Explorer Goldeon Cigarette 31 Yacht" },
        { url: feet95_17, alt: "Explorer Goldeon Cigarette 31 Yacht" },
        { url: feet95_18, alt: "Explorer Goldeon Cigarette 31 Yacht" },
        { url: feet95_19, alt: "Explorer Goldeon Cigarette 31 Yacht" },
        { url: feet95_20, alt: "Explorer Goldeon Cigarette 31 Yacht" },
        { url: feet95_21, alt: "Explorer Goldeon Cigarette 31 Yacht" },
        { url: feet95_22, alt: "Explorer Goldeon Cigarette 31 Yacht" },
      ],
    },
    {
      name: "96 Feet Super Yacht",
      price: "9000",
      btn: "/Yachts/feet96",
      capacity: "25 People",
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
      name: "100 Feet Yacht with Jacuzzi Black Diamond",
      price: 2000,
      btn: "/Yachts/feet100",
      capacity: "50 People",
      images: [
        { url: feet100_1, alt: "Explorer Goldeon Cigarette 31 Yacht" },
        { url: feet100_2, alt: "Explorer Goldeon Cigarette 31 Yacht" },
        { url: feet100_3, alt: "Explorer Goldeon Cigarette 31 Yacht" },
        { url: feet100_4, alt: "Explorer Goldeon Cigarette 31 Yacht" },
        { url: feet100_5, alt: "Explorer Goldeon Cigarette 31 Yacht" },
        { url: feet100_6, alt: "Explorer Goldeon Cigarette 31 Yacht" },
        { url: feet100_7, alt: "Explorer Goldeon Cigarette 31 Yacht" },
        { url: feet100_8, alt: "Explorer Goldeon Cigarette 31 Yacht" },
        { url: feet100_9, alt: "Explorer Goldeon Cigarette 31 Yacht" },
        { url: feet100_10, alt: "Explorer Goldeon Cigarette 31 Yacht" },
        { url: feet100_11, alt: "Explorer Goldeon Cigarette 31 Yacht" },
        { url: feet100_12, alt: "Explorer Goldeon Cigarette 31 Yacht" },
        { url: feet100_13, alt: "Explorer Goldeon Cigarette 31 Yacht" },
        { url: feet100_14, alt: "Explorer Goldeon Cigarette 31 Yacht" },
        { url: feet100_15, alt: "Explorer Goldeon Cigarette 31 Yacht" },
      ],
    },
    {
      name: "100 Feet Brand Yacht",
      price: "Contact",
      detail: " 100 pax capacity",
      btn: "/Yachts/_feet100",
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
      name: "Majesty 101 Feet Yacht",
      price: "",
      capacity: "50 People",
      btn: "/Yachts/feet101",
      images: [
        { url: feet101_1, alt: "Explorer Goldeon Cigarette 31 Yacht" },
        { url: feet101_2, alt: "Explorer Goldeon Cigarette 31 Yacht" },
        { url: feet101_3, alt: "Explorer Goldeon Cigarette 31 Yacht" },
        { url: feet101_4, alt: "Explorer Goldeon Cigarette 31 Yacht" },
        { url: feet101_5, alt: "Explorer Goldeon Cigarette 31 Yacht" },
        { url: feet101_6, alt: "Explorer Goldeon Cigarette 31 Yacht" },
        { url: feet101_7, alt: "Explorer Goldeon Cigarette 31 Yacht" },
        { url: feet101_8, alt: "Explorer Goldeon Cigarette 31 Yacht" },
        { url: feet101_9, alt: "Explorer Goldeon Cigarette 31 Yacht" },
        { url: feet101_10, alt: "Explorer Goldeon Cigarette 31 Yacht" },
        { url: feet101_11, alt: "Explorer Goldeon Cigarette 31 Yacht" },
      ],
    },
    {
      name: "110 Feet Premium Yacht",
      price: "4499",
      capacity: "85 People",
      btn: "/Yachts/110feet",
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
      name: "120 Feet Luxurious Yacht with Pool",
      price: 2500,
      capacity: "100 People",
      btn: "/Yachts/feet120",
      images: [
        { url: feet120_1, alt: "Explorer Goldeon Cigarette 31 Yacht" },
        { url: feet120_2, alt: "Explorer Goldeon Cigarette 31 Yacht" },
        { url: feet120_3, alt: "Explorer Goldeon Cigarette 31 Yacht" },
        { url: feet120_4, alt: "Explorer Goldeon Cigarette 31 Yacht" },
        { url: feet120_5, alt: "Explorer Goldeon Cigarette 31 Yacht" },
        { url: feet120_6, alt: "Explorer Goldeon Cigarette 31 Yacht" },
        { url: feet120_7, alt: "Explorer Goldeon Cigarette 31 Yacht" },
        { url: feet120_8, alt: "Explorer Goldeon Cigarette 31 Yacht" },
        { url: feet120_9, alt: "Explorer Goldeon Cigarette 31 Yacht" },
        { url: feet120_10, alt: "Explorer Goldeon Cigarette 31 Yacht" },
        { url: feet120_11, alt: "Explorer Goldeon Cigarette 31 Yacht" },
        { url: feet120_12, alt: "Explorer Goldeon Cigarette 31 Yacht" },
        { url: feet120_13, alt: "Explorer Goldeon Cigarette 31 Yacht" },
        { url: feet120_14, alt: "Explorer Goldeon Cigarette 31 Yacht" },
        { url: feet120_15, alt: "Explorer Goldeon Cigarette 31 Yacht" },
        { url: feet120_16, alt: "Explorer Goldeon Cigarette 31 Yacht" },
        { url: feet120_17, alt: "Explorer Goldeon Cigarette 31 Yacht" },
        { url: feet120_18, alt: "Explorer Goldeon Cigarette 31 Yacht" },
        { url: feet120_19, alt: "Explorer Goldeon Cigarette 31 Yacht" },
        { url: feet120_20, alt: "Explorer Goldeon Cigarette 31 Yacht" },
        { url: feet120_21, alt: "Explorer Goldeon Cigarette 31 Yacht" },
        { url: feet120_22, alt: "Explorer Goldeon Cigarette 31 Yacht" },
        { url: feet120_23, alt: "Explorer Goldeon Cigarette 31 Yacht" },
        { url: feet120_24, alt: "Explorer Goldeon Cigarette 31 Yacht" },
        { url: feet120_25, alt: "Explorer Goldeon Cigarette 31 Yacht" },
        { url: feet120_26, alt: "Explorer Goldeon Cigarette 31 Yacht" },
      ],
    },
    {
      name: "135 Feet Azimuth Yacht",
      price: "-",
      capacity: "135 People",
      btn: "/Yachts/feet135",
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
        { url: ft135_12, alt: "Explorer Goldeon Cigarette 31 Yacht" },
        { url: ft135_13, alt: "Explorer Goldeon Cigarette 31 Yacht" },
        { url: ft135_14, alt: "Explorer Goldeon Cigarette 31 Yacht" },
        { url: ft135_15, alt: "Explorer Goldeon Cigarette 31 Yacht" },
      ],
    },
    {
      name: "140 Feet Luxurious Yacht",
      price: 2500,
      capacity: "150 People",
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
      price: 7999,
      capacity: "250 People",
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
      price: 24999,
      capacity: "135 People",
      btn: "/Yachts/feet164 yacht",
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
      price: 19999,
      capacity: "500 People",
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
  ];

  return (
    <>
      <div className="all-yachts">
        <h1>Explore Our Yacht Rental Options in Dubai</h1>
        <div className="yacht-grid">
          {yachts.map((yacht, index) => (
            <YachtCard key={index} yacht={yacht} />
          ))}
        </div>
      </div>
    </>
  );
};

export default Yachts;
