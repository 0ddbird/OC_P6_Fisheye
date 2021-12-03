import { data, id, getPhotographer, getGalery } from '../components/query.js';
import { displayProfile, displayPrice, displayLikes } from '../components/display.js';
import { handleGalery } from '../components/handlegalery.js';
import { computeLikes } from "../components/widget.js";

function getSelectOption(e) {
    let selectOption = this.options[this.selectedIndex].text; 
    console.log(this.options[this.selectedIndex].text);
    //sortGalery(selectOption)
    //return this.options[this.selectedIndex];
}

/**
 * Main function of profile.html
 */
async function profileInit() {
    const photographer = await getPhotographer(data, id);
    const galery = await getGalery(data, id);
    let totalLikes = await computeLikes(galery);

    displayProfile(photographer);
    displayPrice(photographer);
    handleGalery(galery);
    displayLikes(totalLikes);
}

profileInit();