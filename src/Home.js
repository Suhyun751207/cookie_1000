import React from "react";

import Event from "./content/event.js";
import Indu from "./content/indu.js";
import Information from "./content/information";
import Rank from "./content/rank.js";

function Home() {
    return (
        <div>
            <Event />
            <Information />
            <Rank />
            <Indu />
        </div>
    );
}

export default Home;
