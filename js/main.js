import React from 'react';
import ReactDOM from 'react-dom';
import ExampleWork from './example-work';

const myWork = [
    {
        'title': "Work Example 1",
        'href': "https://example.com",
        'desc': "Lorem ipsum dolor amet church-key authentic green juice umami chillwave meh pok pok keytar ennui pop-up helvetica organic. Kogi iceland affogato tofu. Actually vexillologist kickstarter succulents disrupt gastropub. Tacos fashion axe selvage microdosing edison bulb. Sartorial quinoa hell of tbh, typewriter health goth celiac tacos yuccie migas adaptogen intelligentsia meggings tote bag.",
        'image': {
            'desc': "example screenshot of a project involving code",
            'src': "images/example1.png",
            'comment': ""
        }
    },    
    {
        'title': "Work Example 2",
        'href': "https://example.com",
        'desc': "Kogi shabby chic chillwave gochujang celiac heirloom. 8-bit art party craft beer, gentrify flannel keytar hella. Marfa coloring book sriracha, master cleanse banh mi freegan four loko. Small batch cronut beard asymmetrical, meggings tbh ethical literally. Bitters plaid fam everyday carry pour-over before they sold out. Street art roof party knausgaard, listicle XOXO viral biodiesel cold-pressed etsy swag everyday carry. Sustainable before they sold out kinfolk, locavore hoodie mixtape semiotics cloud bread tumeric photo booth hella intelligentsia vexillologist try-hard.",
        'image': {
            'desc': "example screenshot of a project involving chemistry",
            'src': "images/example2.png",
            'comment': `“Chemistry” by Surian Soosay is licensed under CC BY 2.0
                    https://www.flickr.com/photos/ssoosay/4097410999`
        }
    },
    {
        'title': "Work Example 3",
        'href': "https://example.com",
        'desc': "Sartorial paleo kitsch bespoke, pok pok cray whatever gentrify stumptown vinyl marfa austin. Tilde brooklyn shabby chic sartorial af enamel pin, asymmetrical pabst bitters master cleanse readymade. Seitan gochujang microdosing swag lo-fi yr street art dreamcatcher la croix everyday carry vegan echo park vaporware. Sartorial biodiesel tattooed actually typewriter cloud bread tofu umami intelligentsia succulents. Biodiesel venmo kogi, hexagon tousled tote bag cronut keffiyeh shoreditch selvage scenester edison bulb ennui vinyl. Small batch tattooed cloud bread, bitters tacos messenger bag plaid la croix microdosing. Neutra godard tote bag cold-pressed, tilde austin iceland.",
        'image': {
            'desc': "example screenshot of a project involving cats",
            'src': "images/example3.png",
            'comment': `"Bengal cat” by roberto shabs is licensed under CC BY 2.0
                    https://www.flickr.com/photos/37287295@N00/2540855181`
        }
    }
]
ReactDOM.render(<ExampleWork work={myWork}/>, document.getElementById('example-work'));