import React, { useState } from 'react'

function RecipeList(props) {

    const [recipes, setRecipes] = useState([
        {
            id: 1,
            name: "Gulab Jamun",
            details: `firstly, in a large bowl take ¾ cup milk powder, ½ cup maida and ½ tsp baking powder.
        mix well, homemade gulab jamun mix is ready,now add 2 tbsp ghee and mix well making the flour moist.
        further, add milk as required start to combine,combine well forming a soft dough. do not knead the dough.
        cover and rest for 10 minutes,meanwhile, prepare the sugar syrup by taking 2 cup sugar, 2 cup water, 2 cardamom 
        and ¼ tsp saffron,mix well and boil for 5 minutes or until the sugar syrup turns sticky, do not attain any
        string consistency,turn off the flame and add 1 tsp lemon juice and 1 tsp rose water, lemon juice is added to
        prevent sugar syrup from crystallizing,cover and keep the sugar syrup aside.`,
            image: 'jamun.jpg'
        },
        {
            id: 2,
            name: 'Paneer Tikka',
            details: `Whisk the yogurt in a large bowl until smooth. I have used greek yogurt here, you can use regular
            yogurt just make sure to strain it for several hours until you have thick yogurt left and then use in the recipe.
            Add all the ingredients for marinade to the yogurt- ginger garlic paste, mustard oil, coriander powder, chaat masala,
            kashmiri red chili powder, garam masala, red chili powder, kasuri methi and salt.Whisk to combine everything together.
            Add in juice of 1 lemon along with chopped cilantro and mint. Mix well.Stir in the paneer cubes, onion and bell peppers.
            Mix until all the paneer pieces and veggies are well coated with the marinade. Cover the bowl and refrigerate for minimum 
            for 1 hour or up to 4 hours. Overnight also works! After 1-2 hours, take the marinated paneer and veggies out of the refrigerator. 
            Take a skewer and arrange paneer, onion and peppers on a skewer, alternating with each other.Make all skewers similarly. 
            Meanwhile pre-heat oven to 450 F degrees. Make sure you pre-heat the oven for good 15-20 minutes.
            Arrange all the prepared skewers on a baking sheet lined with parchment paper. Spray the tikka with a oil spray. This is
             important so that the veggies don’t dry out.`,
            image: 'paneer.jpg'
        },
        {
            id: 3,
            name: 'Choco Cake',
            details: `Whisk the cocoa powder and 1 1/2 cups boiling water in a medium bowl until smooth; set aside. Whisk 
            the flour, sugar, baking powder, baking soda and salt in a large bowl until combined. Add the eggs, vegetable oil, 
            sour cream and vanilla and beat with a mixer on medium speed until smooth, about 1 minute. Reduce the mixer speed to
             low; beat in the cocoa mixture in a steady stream until just combined, then finish mixing with a rubber spatula. 
             (The batter will be thin.)Divide the batter between the prepared pans and tap the pans against the counter to help 
             the batter settle. Bake until a toothpick inserted into the middle comes out clean, 30 to 40 minutes. Transfer to 
             racks and let cool 10 minutes,`,
            image: 'cake.jpg'
        }
    ])
    let showData = (index) => {
        let recipeShow = recipes[index];
        props.getRecipe(recipeShow);
    }
    return (
        <div>
            <div className='card' style={{ float: 'left' }}>
                
                {recipes.map((value, idx) => {
                    return <div key={idx}>
                        <div className="card mb-4" onClick={() => showData(idx)} style={{ width: '18rem' }}>
                            <div>{value.id}</div>
                            <div className="card-body mb-1">
                                <h3 className="card-text">{value.name}</h3>
                            </div>
                            <img src={value.image} className="card-img-top" alt="" style={{height:"250px", width:"220px"}} />
                            
                        </div>
                    </div>
                })}
            </div>
        </div>
    )
}

export default RecipeList