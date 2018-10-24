
import winner from '../../images/winner.jpg';
import flyingknee from '../../images/action-activity-adult-260447.jpg';
import corner from '../../images/action-adult-athlete-598665.jpg';
import woman from '../../images/boxing-female-fitness-161017.jpg';
import beach from '../../images/beach-daylight-dust-1352849.jpg';

const data = {
      "Cards": [
          {
            "id": 0,
            "Trainer":"Anne Eschen", 
            "Time":1540291678,
            "Title": "Børn",
            "overlay": "rgba(33,150,243,0.7)",
            "image": `${winner}`,
            "btnText": "see more...",
            "mon":"Mandag 18-19",
            "weds": "Onsdag 18-19"
            },
        {
            "id": 1,
            "Trainer":"Mads Roloff", 
            "Time":1540291678,
            "Title": "Begynder ",
            "overlay": "rgba(208,64,129,0.7)",
            "image": `${flyingknee}`,
            "btnText": "see more...",
            "mon":"Mandag 19-21",
            "weds": "Onsdag 19-21"
          },
     
        {
            "id": 2,
            "Trainer":"Jones Anissi", 
            "Time":1540291678,
            "Title": "Advanceret ",
            "overlay": "rgba(0,150,136, 0.7)",
            "image": `${corner}`,
            "btnText": "see more...",
            "mon":"Mandag 19-21",
            "weds": "Onsdag 19-21"
          },
    
        {
            "id": 3,
            "Trainer":"Jones Anissi", 
            "Time":1540291678,
            "Title": "Fri-Sparring",
            "overlay": "rgba(244,67,54,0.7)",
            "image": `${woman}`,
            "btnText": "see more...",
            "fri": "Fredag 19-21",
            "sat": "Lørdag 12-15",
            "sun": "Søndag 12-15",
          },
   
        {
            "id": 4,
            "Time":1540291678,
            "street": "Lange Müllers vej 18",
            "city": "9200 Aalborg, Denmark",
            "Title": "Information",
            "overlay": "rgba(44,56,126,0.7)",
            "image": `${beach}`,
            "btnText": "see more..."
          }
      ]
  }

  export default data;