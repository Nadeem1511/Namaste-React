import React from "react";
import ReactDOM from "react-dom/client";


const Header = () => {
   return (
      <div className="header">
         <div className="logo-container">
            <img className="img" 
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS4_6i1zIkm4XFv1FZgO5jM8rlvxneEMyGg3w&usqp=CAU"/>
         </div>
         <div className="nav-items">
            <ul>
               <li>Home</li>
               <li>About Us</li>
               <li>Contact Us</li>
               <li>Cart</li>
            </ul>
         </div>
      </div>
   );
};


const RestaurentCard = (props) =>{
   const {resData} = (props);
   return(
      <div className="res-card">
         <img 
         className="img-1"
         alt="logo-hyd" 
         src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/"+ resData.info.cloudinaryImageId} />

         <h3>{resData.info.name}</h3>
         <h3>{resData.info.cuisines.join(", ")}</h3>
         <h3>{resData.info.avgRatingString}</h3>
         <h3>{resData.info.costForTwo}</h3>
         <h3>Delivered in {resData.info.sla.deliveryTime} minutes</h3>
      </div>
   );
};

const resObj = {
   
      "info": {
        "id": "648218",
        "name": "Soul Rasa",
        "cloudinaryImageId": "f3b00e9ef476a0b426872acd9c9c6337",
        "locality": "Peters Road",
        "areaName": "Royapettah",
        "costForTwo": "₹300 for two",
        "cuisines": [
          "Indian",
          "Healthy Food",
          "Home Food",
          "South Indian",
          "North Indian"
        ],
        "avgRating": 4.2,
        "feeDetails": {
          "restaurantId": "648218",
          "fees": [
            {
              "name": "BASE_DISTANCE",
              "fee": 4300
            },
            {
              "name": "BASE_TIME"
            },
            {
              "name": "ANCILLARY_SURGE_FEE"
            }
          ],
          "totalFee": 4300
        },
        "parentId": "239281",
        "avgRatingString": "4.2",
        "totalRatingsString": "1K+",
        "sla": {
          "deliveryTime": 32,
          "lastMileTravel": 4.3,
          "serviceability": "SERVICEABLE",
          "slaString": "32 mins",
          "lastMileTravelString": "4.3 km",
          "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
          "nextCloseTime": "2023-09-12 23:30:00",
          "opened": true
        },
        "badges": {
          "textExtendedBadges": [
            {
              "iconId": "guiltfree/GF_Logo_android_3x",
              "shortDescription": "brand",
              "fontColor": "#7E808C"
            }
          ]
        },
        "isOpen": true,
        "type": "F",
        "badgesV2": {
          "entityBadges": {
            "imageBased": {
              
            },
            "textBased": {
              
            },
            "textExtendedBadges": {
              "badgeObject": [
                {
                  "attributes": {
                    "description": "",
                    "fontColor": "#7E808C",
                    "iconId": "guiltfree/GF_Logo_android_3x",
                    "shortDescription": "brand"
                  }
                }
              ]
            }
          }
        },
        "aggregatedDiscountInfoV3": {
          "header": "60% OFF",
          "subHeader": "UPTO ₹120"
        },
        "orderabilityCommunication": {
          "title": {
            
          },
          "subTitle": {
            
          },
          "message": {
            
          },
          "customIcon": {
            
          }
        },
        "differentiatedUi": {
          "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          "differentiatedUiMediaDetails": {
            "mediaType": "ADS_MEDIA_ENUM_IMAGE",
            "lottie": {
              
            },
            "video": {
              
            }
          }
        },
        "reviewsSummary": {
          
        },
        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        "restaurantOfferPresentationInfo": {
          
        }
      },
      "analytics": {
        "context": "seo-data-58a3e9d0-996c-4061-adca-5aa7be0c25a4"
      },
      "cta": {
        "link": "https://www.swiggy.com/restaurants/soul-rasa-peters-road-royapettah-chennai-648218",
        "text": "RESTAURANT_MENU",
        "type": "WEBLINK"
      },
      "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
    
 };



const Body = () => {
   return(
      <div className="body">
         <div className="search-bar">Search</div>
         <div className="restro-container">
            <RestaurentCard resData = {resObj}/> 

         </div>
      </div>
   )
};

 const AppLayout = () =>{
   return <div className="app">
      <Header/>
      <Body/>
   </div>
 };

 const root = ReactDOM.createRoot(document.getElementById("root"));
 root.render(<AppLayout/>);


 


 