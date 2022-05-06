window.setInterval(function () {

    (function () {
        //Remove influencers
        const profileTitles = document.getElementsByClassName("feed-shared-actor__description");
        for (const pTitle of profileTitles) {
            const title = (pTitle.innerHTML.trim()).toLowerCase();
            if (title.includes("influencer") || title.includes("promoted") || title.includes("content creator") || title.includes("motivation speaker")) {
                const element = (pTitle.parentElement.parentElement.parentElement.parentElement.parentElement);
                element.remove();
            }
        }

    })();

    (function () {
        //Remove promoted
        const profileTitles = document.getElementsByClassName("feed-shared-actor__sub-description");
        for (const pTitle of profileTitles) {
            const title = (pTitle.innerHTML.trim()).toLowerCase();
            if (title.includes("promoted")) {
                const element = (pTitle.parentElement.parentElement.parentElement.parentElement.parentElement);
                element.remove();
            }
        }

    })();

    (function () {
        //hide single image
        let profileImgs = document.getElementsByClassName("feed-shared-image feed-shared-image--single-image feed-shared-update-v2__content");
        for (let element of profileImgs) {
            if (!element.hasAttribute('cAdded')) {
                let parent = element.parentNode;
                let wrapper = document.createElement('div');
                let newContent = document.createTextNode("See image...");

                wrapper.appendChild(newContent); // add the text node to the newly created div
                wrapper.onclick = function () {
                    this.children[0].style.display = 'block';
                };
                element.style.display = 'none';
                element.setAttribute('cAdded', 'true');

                parent.replaceChild(wrapper, element); // set the wrapper as child (instead of the element)
                wrapper.appendChild(element); // set element as child of wrapper
            }
        }

    })();

    (function () {
        //hide shared image
        let profileImgs = document.getElementsByClassName("feed-shared-image__container");
        for (let element of profileImgs) {
            if (!element.hasAttribute('cAdded')) {
                let parent = element.parentNode;
                let wrapper = document.createElement('div');
                let newContent = document.createTextNode("See image...");

                wrapper.appendChild(newContent); // add the text node to the newly created div
                wrapper.onclick = function () {
                    this.children[0].style.display = 'block';
                };
                element.style.display = 'none';
                element.setAttribute('cAdded', 'true');

                parent.replaceChild(wrapper, element); // set the wrapper as child (instead of the element)
                wrapper.appendChild(element); // set element as child of wrapper
            }
        }

    })();

    (function () {
        //hide multi image
        let profileImgs = document.getElementsByClassName("feed-shared-image feed-shared-image--multi-image");
        for (let element of profileImgs) {
            if (!element.hasAttribute('cAdded')) {
                let parent = element.parentNode;
                let wrapper = document.createElement('div');
                let newContent = document.createTextNode("See image...");

                wrapper.appendChild(newContent); // add the text node to the newly created div
                wrapper.onclick = function () {
                    this.children[0].style.display = 'block';
                };
                element.style.display = 'none';
                element.setAttribute('cAdded', 'true');

                parent.replaceChild(wrapper, element); // set the wrapper as child (instead of the element)
                wrapper.appendChild(element); // set element as child of wrapper
            }
        }

    })();

    (function () {
        //hide video
        let profileImgs = document.getElementsByClassName("video-js media-player__player");
        for (let element of profileImgs) {
            if (!element.hasAttribute('cAdded')) {
                let parent = element.parentNode;
                let wrapper = document.createElement('div');
                let newContent = document.createTextNode("See video...");

                wrapper.appendChild(newContent); // add the text node to the newly created div
                wrapper.onclick = function () {
                    this.children[0].style.display = 'block';
                };
                element.style.display = 'none';
                element.setAttribute('cAdded', 'true');

                parent.replaceChild(wrapper, element); // set the wrapper as child (instead of the element)
                wrapper.appendChild(element); // set element as child of wrapper
            }
        }

    })();

    (function () {
        //remove celebration image
        let profileImgs = document.getElementsByClassName("feed-shared-celebration text-align-center feed-shared-update-v2__content");
        for (let element of profileImgs) {
            element.remove();
        }

    })();

}, 1000);