import partner from "../../assets/partnericon.png" ;
import service from "../../assets/service.png" ;
import trial from "../../assets/freetrial.png"

export const plansData = [
  {
   title : "We will your Tech partner",
   des : "Lorem ipsum dolor sit amet consectetur adipisicing elit. At incidunt vero corrupti. Dolorum, asperiores adipisci nam nemo distinctio corrupti maiores mollitia ducimus ab dignissimos saepe perspiciatis, ullam similique veniam illo?",
   icon : (<img src={partner} width="50" height="50"/>)
   
  },
  {
    title : "Request and Free trial",
    des : "Lorem ipsum dolor sit amet consectetur adipisicing elit. At incidunt vero corrupti. Dolorum, asperiores adipisci nam nemo distinctio corrupti maiores mollitia ducimus ab dignissimos saepe perspiciatis, ullam similique veniam illo?",
    icon : (<img src={trial} width="50" height="50"/>)
    
   }, {
    title : "24*7 Team support",
    des : "Lorem ipsum dolor sit amet consectetur adipisicing elit. At incidunt vero corrupti. Dolorum, asperiores adipisci nam nemo distinctio corrupti maiores mollitia ducimus ab dignissimos saepe perspiciatis, ullam similique veniam illo?",
    icon : (<img src={service} width="50" height="50"/>)
    
   }
];
