window.setInterval(function () {

    (function () {

        //Remove influencers
        let useless = ["promoted", "influencer", "content creator", "motivation speaker"]
        nukePost("feed-shared-actor__description", useless);

    })();

    (function () {

        //Remove promoted ads
        nukePost("feed-shared-actor__sub-description", ["promoted"]);

    })();

    (function () {

        //hide single image
        replacePostMedia("feed-shared-image feed-shared-image--single-image feed-shared-update-v2__content", "See image...");

    })();

    (function () {

        //hide shared image
        replacePostMedia("feed-shared-image feed-shared-image--single-image feed-shared-mini-update-v2__reshared-content feed-shared-mini-update-v2__reshared-content--with-divider ", "See image...");

    })();

    (function () {

        //hide multi image
        replacePostMedia("feed-shared-image feed-shared-image--multi-image", "See image...");

    })();

    (function () {

        //hide video
        replacePostMedia("video-js media-player__player", "See video...");

    })();

    (function () {
        //remove celebration image
        let profileImgs = document.getElementsByClassName("feed-shared-celebration text-align-center feed-shared-update-v2__content");
        for (let element of profileImgs) {
            element.remove();
        }

    })();

    function replacePostMedia(postMediaClass, linkText) {

        let postMedia = document.getElementsByClassName(postMediaClass);
        for (let element of postMedia) {
            if (!element.hasAttribute('cAdded')) {
                let parent = element.parentNode;

                let wrapper = document.createElement('div');
                let newContent = document.createTextNode(linkText);

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

    }

    function nukePost(postMediaClass, searchTermArray) {

        const profileTitles = document.getElementsByClassName(postMediaClass);
        for (const pTitle of profileTitles) {
            const title = (pTitle.innerHTML.trim()).toLowerCase();

            if (searchTermArray.some(v => title.includes(v))) {
                const element = (pTitle.parentElement.parentElement.parentElement.parentElement.parentElement);
                element.remove();
            }
        }
    }

}, 1000);