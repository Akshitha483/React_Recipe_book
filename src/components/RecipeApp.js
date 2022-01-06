import React from 'react'
import { useState } from 'react/cjs/react.production.min'

function RecipeApp() {
    const [displayList, setdisplayList] = useState([])
    const [recipe, setrecipe] = useState({

        
            id: 1,
            recipeName: "Gulab Jamun",
            details: `firstly, in a large bowl take ¾ cup milk powder, ½ cup maida and ½ tsp baking powder.
        mix well, homemade gulab jamun mix is ready,now add 2 tbsp ghee and mix well making the flour moist.
        further, add milk as required start to combine,combine well forming a soft dough. do not knead the dough.
        cover and rest for 10 minutes,meanwhile, prepare the sugar syrup by taking 2 cup sugar, 2 cup water, 2 cardamom 
        and ¼ tsp saffron,mix well and boil for 5 minutes or until the sugar syrup turns sticky, do not attain any
        string consistency,turn off the flame and add 1 tsp lemon juice and 1 tsp rose water, lemon juice is added to
        prevent sugar syrup from crystallizing,cover and keep the sugar syrup aside.`,
            img: "jamun.jpg"

        
})

    let getRecipeDetails=()=>{
    setrecipe([
        ...recipe
    ])
}
    return (
        <div className='container1' style={{ width: '75%' }}>
            <div className='card' style={{ width: '75%' }}>
                   <h5 className='card-header'>1</h5>
                   <div className='card-body' style={{ width: '75%' }}>
                       <h6 className='card-title'>Gulab Jamun</h6>
                      <img className='card-img-top' src="jamun.jpg" alt='card img'/>
                   </div>
                   </div>
        </div>
    )
}

export default RecipeApp
