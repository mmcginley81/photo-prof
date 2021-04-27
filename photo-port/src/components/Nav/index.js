import React from 'react';



function Nav() {

    const categories = [
        {
            name: "commercial",
            description:
            "Photos of grocery stores, food trucks, and other commercial projects"
        },
        { name: "portraits", description: "Portraits of people in my life" },
        { name: "food", description: "delicious delicacies" },
        {
            name: "landscape",
            description: "Fields, farmhouses, waterfalls, and the beauty of nature",
        },
    ]

    function categorySelected(){
        console.log("hello")
    }

    return (
        <header data-testid="header" className="flex-row px-1">
            <h2>
                <a href="/">
                    <span role="img" aria-label="camera">📸 </span> Oh snap!
                </a>
            </h2>
            <nav>
                <ul className="flex-row">
                    <li className="mx-2">
                        <a href="#about">
                            About me
                        </a>
                    </li>
                    <li>
                        <span>Contact</span>
                    </li>
                    {categories.map((category) => (
                        <li
                        className="mx-1"
                        key={category.name}
                        >
                        <span onClick={categorySelected}>
                            {category.name}
                        </span>
                        </li>
                    ))}
                </ul>
            </nav>

        </header>
    )
}



export default Nav;