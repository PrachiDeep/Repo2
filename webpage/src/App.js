import React, { Component } from 'react';
import logo from"./logo.svg"
import pic from "./pic.jpg"
import './App.css'
class App extends React.Component {
  render() { 
    return<div>
      <div className="Container page">
      <div className="row title"><h1>Gone With The Wind</h1></div>
      <div className="row para ">
      <div className="col leftCol">
      <div className="row"><img src={logo}/></div>
      <div className= "row ">

       Scarlett O'Hara was not beautiful, but men seldom realized it when
       caught by her charm as the Tarleton twins were. In her face were
       too sharply blended the delicate features of her mother, a Coast
       aristocrat of French descent, and the heavy ones of her florid
       Irish father. But it was an arresting face, pointed of chin,
       square of jaw. Her eyes were pale green without a touch of hazel,
       starred with bristly black lashes and slightly tilted at the ends.
       Above them, her thick black brows slanted upward, cutting a
       startling oblique line in her magnolia-white skin--that skin so
       prized by Southern women and so carefully guarded with bonnets,
       veils and mittens against hot Georgia suns. 
     </div>
     </div>
     <div className= "col centerCol">
      <div className=" row "><img src={logo} /></div>
      <div className= "row  ">

      Seated with Stuart and Brent Tarleton in the cool shade of the
      porch of Tara, her father's plantation, that bright April
      afternoon of 1861, she made a pretty picture. Her new green
      flowered-muslin dress spread its twelve yards of billowing
      material over her hoops and exactly matched the flat-heeled green
      morocco slippers her father had recently brought her from Atlanta.
      The dress set off to perfection the seventeen-inch waist, the
      smallest in three counties, and the tightly fitting basque showed
      breasts well matured for her sixteen years. But for all the
      modesty of her spreading skirts, the demureness of hair netted
      smoothly into a chignon and the quietness of small white hands
      folded in her lap, her true self was poorly concealed. The green
      eyes in the carefully sweet face were turbulent, willful, lusty
      with life, distinctly at variance with her decorous demeanor.
      Her manners had been imposed upon her by her mother's gentle
      admonitions and the sterner discipline of her mammy; her eyes were
      her own. 
      </div>
    </div>
<div className= "col rightCol">
<div className="row"><img src={logo}/></div>
<div className= "row ">

    Seated with Stuart and Brent Tarleton in the cool shade of the
porch of Tara, her father's plantation, that bright April
afternoon of 1861, she made a pretty picture. Her new green
flowered-muslin dress spread its twelve yards of billowing
material over her hoops and exactly matched the flat-heeled green
morocco slippers her father had recently brought her from Atlanta.
The dress set off to perfection the seventeen-inch waist, the
smallest in three counties, and the tightly fitting basque showed
breasts well matured for her sixteen years. But for all the
modesty of her spreading skirts, the demureness of hair netted
smoothly into a chignon and the quietness of small white hands
folded in her lap, her true self was poorly concealed. The green
eyes in the carefully sweet face were turbulent, willful, lusty
with life, distinctly at variance with her decorous demeanor.
Her manners had been imposed upon her by her mother's gentle
admonitions and the sterner discipline of her mammy; her eyes were
her own.
</div>
</div>


</div>
</div>
</div>
  }
}
 
export default App;