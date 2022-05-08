window.setInterval(function () {

    (function () {

        //Remove influencers
        let useless = ["brand officer", "help you grow", "promoted", "influencer", "content creator", "motivation speaker", "linkedin followers"]
        nukePost("feed-shared-actor__description", useless);

    })();

    (function () {

        //Remove promoted ads
        nukePost("feed-shared-actor__sub-description", ["promoted"]);

    })();

    (function () {

        //Remove useless posts
        let useless = ["mother’s day", "elon musk", "first day in office", "humanitarian crisis", "gas station employee", "nfl", "mothers day", "great leader", "mothersday", "kill you makes you stronger", "#delta"];
        nukePost("feed-shared-text relative feed-shared-update-v2__commentary ", useless);

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

        //remove posts requiring translation
        var profileImgs = document.getElementsByClassName("feed-shared-see-translation-button");
        for (var element of profileImgs) {
            element.parentElement.parentElement.parentElement.parentElement.parentElement.remove();
        }

    })();

    (function () {

        //remove celebration image
        let profileImgs = document.getElementsByClassName("feed-shared-celebration text-align-center feed-shared-update-v2__content");
        for (let element of profileImgs) {
            element.remove();
        }

    })();

    (function () {

        //remove left and right sidebars and reset classes of main screen parents
        removeClassElement("scaffold-layout__aside");
        removeClassElement("scaffold-layout__sidebar");
        var mainScreen = document.getElementById("main");
        mainScreen.parentElement.className = "";
        mainScreen.parentElement.parentElement.className = "";

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

        const posts = document.getElementsByClassName(postMediaClass);
        for (const post of posts) {
            const text = (post.innerHTML.trim()).toLowerCase();
            if (searchTermArray.some(v => text.includes(v))) {
                const element = (post.parentElement.parentElement.parentElement.parentElement.parentElement);
                element.remove();
            }
        }

    }

    function removeClassElement(classText) {

        let elements = document.getElementsByClassName(classText);
        for (const element of elements) {
            element.remove();
        }

    }

}, 1000);