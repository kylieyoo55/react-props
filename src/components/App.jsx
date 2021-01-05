
import React from "react"
import Card from "./Card";
import contacts from "../contacts"


function CreateCard(contact){
   return (
      <Card 
      key={contact.id}
         name={contact.name}
          email={contact.email} 
          img={contact.imgURL} 
          alt="avatar_img" 
          tel={contact.phone}
          num={contact.id}
      />
   )

}


function App(){
    
   return (
       <div>
       <h1>My Contacts</h1>
       {contacts.map(CreateCard)}
        </div>
         
         )
}

export default App;