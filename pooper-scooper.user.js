// ==UserScript==
// @name        Pooper Scooper
// @description A Dog Online Utility
// @namespace   Violentmonkey Scripts
// @icon        data:image/x-icon;base64,AAABAAMAAAAAAAEAIABOAgAANgAAAAAAAAABACAAHAQAAIQCAAAAAAAAAQAgADMIAACgBgAAiVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAACFUlEQVQ4T6WRzW8SURTFDx8zQzsODENbManA0IKRakxx3WCMunBRXbozceVO/QOMxn/AGhcubeLe1KUxJlQXLhSbWE0sIHTSGqCUKZQ+cPga86byJMjG9GzmznlnfvfdOzYcUTZW/Ss7q4Aeq4Y0CqCKHHc/oLiviRznIe12bafeeFdpNJcArLLUHw0D1LAipxZmTnoFp5OZpmnibWazmqtU7wFYZgcjAA9uzMceul0CM/oyafusZqbL+kUAyb4/CLD53WJqcS46z5wh0Zu8Wk/nd0gjDqBKvUHAzctRdVn1yagbBiTh7y3oh8X9A5zwSNglDax82VjqAXQcBvBOe6Ts1disQl8o4JggIFPWQYw2ZidkSANjfdoqmJ+3i+cBrFkAkeMeL56J3B0M1Y0WvhUJ7ly4jWfvnyA+7WdnRqeDFx/Xn/eAWxRgP33cV14IB6zuh4Fuv8TqDw2JmQAqpAnB6YBPHLf8199za9peLU4BiStRNRn0ydD0KkKKbM2pkyaCigdvNvKY808iu6vjUlTFQasF3uHE10Kpm9ou8RTgnRTHM5KLt1dIs3b97KkQ7ZTaKqDV6SIypVhPycVbi01mNfpHUaqTXO2XEWFLBOABEAwr8suYf0LxiWPgHQ7YbIcROne6rJsfNn8+ArACQAOw1wcMisLO2YHEGM+FpiQxRM2dfZIn7fZTuvl+kGoU4L90ZMBvu8zBFJ3x9bEAAAAASUVORK5CYIKJUE5HDQoaCgAAAA1JSERSAAAAIAAAACAIBgAAAHN6evQAAAPjSURBVFhH7VffaxRXFP7uTENCMzvJi93Z2bXQxgcjmGiieai0SkPV2L/AB9G+hILPiljU1CJC+0dY+lT63hjTlv5EMCYxyYOmooGa/ZX0xeyuoqw7V767O8NkMjO7Wwqh0A/CsPfOPec75zvnzI3ANkNss///JgENgB7IXA2A4/1qA+1I0AngPIDDmsAH3io9S/wG4A9APX9ph0wrBN4A8JkALqRMo8vuMTBoJyEaRyUkFvNrcBw+12s1KUngCwC/Ns7HohkBOp+0TeOj/RkLtmlAiOgjrxwH39xdwitHkbgK4GdvMwLR1uq4ogsxcWZkALpG6Zuj5jiYWl5BbqNcBXACwI/eZgjiCHQAKA1nrK7hnSlvsRU4UuLmg8cuiWNxmYgj0KkJlD8ZGexoNXo/fCR+AnCcCnmbPsQRuGSbxtWP9+yK1T0OlOPrmSXUpJwA8Lm34UOUZRbf1IGd1uhQpr30B5F9WmImqjJCiigCbRcfIaXEQm4N+9JJL2tcm4yRIoxApwCejvX3dWV6TW8xXyqrp20mGitbEUaAiJMiSIDhTrHvg9qHEWChQdataE3qJEqK4KkPNSGmx/r79HRPdKR0fC9bxFL+b0WSkQ/YOzCUsSILlu98f/8R8qUKp+Rld93/tiq84Yw12qzv6Xx2tYDxQydx9v1TmHmyhE+/vYgzBwegaeEEiNxGGZP3H72QQC+Al1zzv63a7sSeXU3TyWho7IeHf2H8vZMYTPfj7HeXcHpkb+xZZu7GnUXWAjPATHgEqP10u21HEvPZItYrz3Fs9zvI9NSLNqxeXMw+yWM+t8ZCZEF6BFqaemGG51YLKiMH3rbVb1drfjXDgpnPFjC7WmRLHmVSXAJbph4NEf6iCjojGFGx/AyudKz26T9XcPpg+AxhS96YWaw6Et0Aqq71iaF08opr2J3jKbN7UxRM+a3lx57x7EYJt5ZXsKP7TeXcSnRjIb+O/ekk3EIm4Xu5IizTUJmLIqDa7/jud/WUabifUwylk5uipTFONT7pbDG/roYOzxRKFfUOE7YvbXnF2HAIK2GoLLGD5rLFFwBYMB4B5uqmAEaFgO5IUKPbmhAXgzOB2VnIFUGF6lHFX1Io21y2yDsjiepr5Wc1R0p2gJqI/pMkcQTAIQDX6YudYZvG6Fh/X6iezUCJph6skDQr/ndA3SU33RujqddxmAWqC3Fk0H5LZ6SMOpUw1CYDD0ZPefKlCgobZdZD1ZHyGgD+tX0fcOFmhuw5585RJm5YCaOD+vvBWiiUKpx2XzVm/pZPsB+tEAiCVzWCxHhND/sf4Ut31DbDPyHwr+J/AtuegdfaZb4w+6lZ9wAAAABJRU5ErkJggolQTkcNChoKAAAADUlIRFIAAAAwAAAAMAgGAAAAVwL5hwAAB/pJREFUaEPtWVtMHNcZ/s7Zhb1xcRfMPYEYDMbGNOA2dtLEMYmiSlUTU7WN+pCrqrh5jBKpVe/pS5/qh761ilo1TvrSlyauGqWtmsSXNnbqupGNA+YSAQbMYpbY7AVYdmeq7+zMeBh2lx2byLLkT0LsnnPmzP+f//tvZwVuc4jbXP47Ctxy3KGQDTwMn/VtPVYA6Na3TcLNWkACqAVQB6AdwGsCKLFmDejAKoAXAAwbSowASG6GQjeqAAXnab8C4IAUeAgQsq485K2vKLMWmbi8GMdsLJEGdF3XkdGBPwD4GNn/qZtR5EYU8AD4HoDvCqDbK6Vnf+vdotLvQ7C0BIGSdQbA0uoqkikaARiai2L4SlRPa3oCwCCApwFcNJa6hlsFKPw3BfB6ZcDnrwoGsL+1GV6PLHojTdexmtHwx/+eR1rT0wCeAfA/g16atbBIFPtegrR5EcDhhooy/4G2ZnXiUrjZIgsq8fF0BDPXYqRXWgdmaFEA77lVws3bAwBOCoHePU316Gmqc/WwEyR9YiWFd4fGsJBc5tdLAB4HcM5aVASKlYGn/0MAr1aHAt4nutrhlRy6eaQyGRwdGMZnyWUqFQPwIIDzxTq2GwV+JgV+en9Lk9xZWw1xA9TJh3gqhWOjk4pSOvAfgFFN5Y0NUawUdN5XPVL86NkvdUs67WaDSrw7qOjE6PQDAL8BkLEW5EGxCnwRwL/DQX/wG9074NnE07cjlc7gzWx0YpIjlRidCqJYSb4sBf51cFd7ydbykDW42WB0+nB8CoORaEbTdVqAibIglYpRgKn1pEeK7v6uDlEVYjD6/MAccWpiCkORKDP2n4w8wXyRExspwLR6XAB7exprxZ676jfFeRleFhJLCJR6EXRkbs4NRuZxemKayjBTfxXAVL6oVEgazvUBeCNUWtLAxNVYWW5NmqDZ3SazjMZMPIDd9TW4N0c+4Z6fROZxanxK03T8E8CzLKmsBTY4n7WDkefnHiF+3L+7Q4ZDgXWLry4t49jYBB5ubcaWgN8a3wiFLGAirWl448x5WoHF3n4Ap61JG5wymeD4twAcCQf9/nyRZyMFlM1Nw4v8L8uHaHJJhdZEajVvgsu3Jx13xiNEObPu1rKgNeFELgpxTJXQi3FrjL7T3VCjDqJYP2LtfXZqFmenZ6Hr+MhQIlvWGsi1k5e8FwJP7qytlnubG12VDSwN3vlkVCWmdOa6sKuZVYSDfnTWVmMHM7mxfiPEV1J4Z3AUV5dW2D88wOrcmsyhAL83AfhbdSjQ6bbm4ckfvTCMK7EkPNKDI08fxs66VsXnn/z1MP4+eAI9jbXobWI0sx4rCO75/sg4Po1eZdX6CwC/5LA579ymHsDrHike3dfc6LrmocnZsMwnkhi58hm+3ft1fP/RQyiVXsRTSez/9XfQVRd2pQDB3HDkzDk9o+kst9kAWRHJuU2PFDjV19ZSuq1qiyvhTdDD0hkNH01OY2huAe1bt6G/+zGcnRrAP4ZOorepznUpzrB75HpE2mcvMez78POTUog3+7vavdUFHLcY8KUfjE6oSBJbSUPXNbSEK9HX1gyPjZaMZESuKGZHJJbAXy4Mr2o69uZTgDvMNVSUlT+yvUV1W8WCPCVyRaNoPImjF0bQUVOF+1sa1whPJdkLkE8Hu9rXPW/HfDyJtwYuUoGvIFtyK9ifqBTAbG9Tnd8NRykkT5pgtnYKwRfTsZ/Y1Q67VakyS4ZT49MqOjFgOJ+1I5pYogL0A3Zs9xm3GZYCPO5jXin37WtpFAx1zq34QucYwVz/1kD2UqG/qwNS5laAyc7uV2bRNnJlAU/t2Y1SLxN/fjBAnLl0mb00+88vAFDcsytwuioU6Onval9jZoIxfWRuAR21VetSPy3w9sAwEqkU+tpa1tRLpMiH43TmeSU4c0pnTZU6DBZrQ5GootYD9zStOX0Ka6Zbc5wsPTt1mYmtgAJBf8/B3R1rYr/Zs15bXsFBBw1M0LxvD1xEd30NzIqVwr8/OoHxhWvoqAlj5lqcJQEqAz4lzcLSshKO3K8OraXWUGRe0YuObdJyIwusyb733Z3NvjxV49YAZAYpkkuBjK7jz+eGlJIHWpvBSy7mA/6R34/v2o4Tn16yIo4Jnr4z19hOWin7tc42lPlKVW6hpTPZbq3KqQCh6h8pRDlPjFRhPWPc2+gCkJ211R5nJDFhNuaR2PX6Z/vWsDrdHQZtLF4QRnHnzDW8wXtvZBwzi3E131BZjoe23YVzM3O0CpscdmovmU2O/Wl+ZgX6OwGwb5R6VsvnjcvYF4TAoW3hLaJve0vOiMGXm1eI3I0UoLLrV+bHXCyhwq6m66qVFICvwu/D4soK3Y0N/8P58gDB7xT+NR4ggN8D+K1RexwC8KstAV8ZzRryla57+GZA4ywkl5S/2XoAFm6UhT7KUMcbbiph2TKfDPQJzvFawyyceBt9QgA99RVlXpqW5bF1vuRYDqtsBJUEebe4GMOxsUk6OoX/AMBzAGYNWQgKva43dvNGruVvAPeq3wEEQuGAX5ocpuPyoteeBmQB+ihpMhqOj00o50+qG+w0G5fHAEwawtu9Jify7V8IfMakWYc5JoAuKYXl3RJCmNfuuUChj49N6mlNo2MOGJmVFPlc7kZzwaSZ+fllg6smHsz+8JH3Hbqm44RBl8MGPfi34anbkW/zG4Eztpo/PRUCaRKx+ZlrbKYCtwR3FLjVuGOBW43b3gL/B56WS17gRkhlAAAAAElFTkSuQmCC
//
// @author      FlockyChou
// @version     0.0.3
//
// @match       https://dogonline.net/*
// @grant       none
// ==/UserScript==

(function () {
    'use strict';
    let force_push = true;
    let previous_url;
    let current_url;

    window.navigation.addEventListener('navigate', function(e) {
        // Need a wait period or else the code grabs the PREVIOUS URL
        setTimeout(function(){
            // Since logic is based on navigation changes, we need to force a nav change on the current page
            //   in the event something needs to be kicked off.
            let live_url = window.location.pathname.concat(window.location.search);
            if(force_push) {
                previous_url = live_url;
                current_url = live_url.concat('#');
                history.pushState({}, '', current_url);
                force_push = false;
            } else {
                if(previous_url == current_url) {
                    return;
                }
                
                previous_url = current_url;
                current_url = live_url;
            }

            /* [Start] Page: Tower */
            if (location.pathname == '/tower') {
                // Wait until content is loaded
                let content_poller = setInterval(function() {
                    // Prevent duplicate inserts
                    if(document.getElementById('pooper-scooper')){
                        clearInterval(content_poller);
                        return;
                    }

                    // Find equipment selector wrapper
                    let equipment_wrapper = document.querySelectorAll('[class^="tower_towerOptions__"]');
                    if(equipment_wrapper.length) {
                        // Stop retrying
                        clearInterval(content_poller);
                        console.log('Page Loaded: Tower');

                        /* [Start] Feature: Toggle Unused Equipment */
                        let checkbox_id = 'equipment_toggle';
                        let cache_key = 'TOWER:EQUIPMENT:TOGGLE';

                        // Insert "Hide Unused?" toggle
                        let equipment_toggle = create_checkbox(checkbox_id, 'Hide Unused?', cache_key);
                        equipment_wrapper[0].insertBefore(equipment_toggle, equipment_wrapper[0].firstChild);

                        let equipment_toggle_checkbox = document.getElementById(checkbox_id);
                        let card_class = 'ItemCard_card__';
                        let card_exclusion_class = 'ItemCard_selected__'
                        // Do initial toggle
                        toggle_visibility(equipment_toggle_checkbox.checked, card_class, card_exclusion_class);

                        equipment_toggle_checkbox.addEventListener('click', function() {
                        toggle_visibility(equipment_toggle_checkbox.checked, card_class, card_exclusion_class);
                        // Save checkbox state to local storage
                        save_to_storage(cache_key, this.checked);
                        });
                        console.log('Feature Loaded: Toggle Unused Equipment');
                        /* [End] Feature: Toggle Unused Equipment */
                    }
                }, 100);
            }
            /* [End] Page: Tower */

            /* [Start] Page: Collection */
            if (location.pathname.startsWith('/collection')) {
                // Wait until content is loaded
                let content_poller = setInterval(function() {
                    // Find collection wrapper
                    let collection_wrapper = document.querySelectorAll('[class^="ItemGrid_grid__"]');
                    if(collection_wrapper.length) {
                        // Stop retrying
                        clearInterval(content_poller);
                        console.log('Page Loaded: Collection');


                        /* [Start] Data Save: Collection for Dog */
                        // Get dog number and collection
                        let slice = location.pathname.split('/').slice(-2);
                        let dog_number = slice[0];
                        let collection = slice[1];

                        // Log collection for current dog
                        let read_books = []
                        for(let item of collection_wrapper[0].children) {
                            read_books.push(item.firstChild.firstChild.src.split('/').pop());
                        }

                        let cache_key = 'COLLECTION:'.concat(collection.toUpperCase(), ':DOG-', dog_number);
                        save_to_storage(cache_key, read_books);
                        console.log('Data Saved: Collection for Dog');
                        /* [End] Data Save: Collection for Dog */
                    }
                }, 100);
            }
            /* [End] Page: Collection */

            /* [Start] Page: Shop: Cozy */
            if (location.pathname.startsWith('/shop/cozy')) {
                // Wait until content is loaded
                let content_poller = setInterval(function() {
                    // Prevent duplicate inserts
                    if(document.getElementById('pooper-scooper')){
                        clearInterval(content_poller);
                        return;
                    }

                    // Find collection wrapper
                    let collection_wrapper = document.querySelectorAll('[class^="ItemGrid_grid__"]');
                    if(collection_wrapper.length) {
                        // Stop retrying
                        clearInterval(content_poller);
                        console.log('Page Loaded: Cozy');

                        /* [Start] Feature: Grey-out Read Books */
                        // Get cache of read books, if available. Requires visiting the collection page first.
                        let read_books = [];
                        [0, 1, 2].forEach(function(dog_number){
                            let cache_key = 'COLLECTION:BOOKS:DOG-'.concat(dog_number);
                            let cached_books = get_from_storage(cache_key);
                            if(cached_books){
                                cached_books = cached_books.split(',');
                            }

                            read_books = read_books.concat(cached_books);
                        });

                        // Check to see if the books on sale are in the read books list.
                        // Grey them out if have been read by ANY dog.
                        //
                        // TODO: Make this per-dog or show read state per dog.
                        for(let item of collection_wrapper[0].children) {
                            let book = item.firstChild.firstChild.src.split('/').pop();
                            if(read_books.includes(book)){
                                item.style.opacity = 0.25;
                            }
                        }

                        // Add the #pooper-scooper div so this does not re-process.
                        //
                        // TODO: Find a better way to prevent duplicate processing, which seems to happen a lot.
                        let container = document.createElement('div');
                        container.id = 'pooper-scooper';
                        collection_wrapper[0].appendChild(container);
                        /* [End] Feature: Grey-out Read Books */
                    }
                }, 100);
            }
            /* [End] Page: Shop: Cozy */
        });
    });
})();

/* Functions */

// Local browser storage access
function save_to_storage(cache_key, value) {
    localStorage.setItem('POOPER_SCOOPER::'.concat(cache_key), value);
}

function get_from_storage(cache_key) {
    return localStorage.getItem('POOPER_SCOOPER::'.concat(cache_key));
}

function create_checkbox(id_text, label_text, cache_key) {
    // Create Checkbox
    let checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.id = id_text;  
    checkbox.checked = get_from_storage(cache_key); 
    
    // Create Label
    let label_text_node = document.createTextNode(label_text);
    let label = document.createElement('label');
    label.htmlFor = id_text;
    label.appendChild(label_text_node); 
    
    // Append to container and return
    let container = document.createElement('div');
    container.id = 'pooper-scooper';
    container.appendChild(checkbox);
    container.appendChild(label);   
    
    // Add styles
    container.style.border = '2px dashed #aaaaaa';
    return container;
}

function get_by_class(element_class, exclusion_class = null) {
    if(exclusion_class) {
        return document.querySelectorAll('[class*="'.concat(element_class, '"]:not([class*="', exclusion_class,'"])'));
    } else {
        return document.querySelectorAll('[class*="'.concat(element_class, '"]'));
    }
}

function show_all(element_class, exclusion_class = null) {
    get_by_class(element_class, exclusion_class).forEach(function(item) {
        item.style.display = 'block';
    });
}

function hide_all(element_class, exclusion_class = null) {
    get_by_class(element_class, exclusion_class).forEach(function(item) {
        item.style.display = 'none';
    });
}

function toggle_visibility(hide_elements, element_class, exclusion_class = null) {
    if(hide_elements) {
        hide_all(element_class, exclusion_class);
    } else {
        show_all(element_class, exclusion_class);
    }
}