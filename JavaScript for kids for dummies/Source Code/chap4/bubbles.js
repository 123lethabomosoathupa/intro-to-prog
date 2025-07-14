// Load required YUI modules: node, animation, and animation plugin for nodes
YUI().use('node', 'anim', 'anim-node-plugin', function (Y) {

    // Get the element with ID 'o' and store its width and height
    var o = Y.one('#o'),
        oW = o.get('offsetWidth'),
        oH = o.get('offsetHeight'),
        max = 60,            // Max bubble size
        min = 8,             // Min bubble size
        bubbles = 150,      // Total number of bubbles to create
        timerDelay = 8000;     // Max time delay between bubbles (ms)

    // Function to create a bubble
    function makeBubble() {
        var b = Y.Node.create('<span class="bubble"></span>'); // Create a bubble element

        // Plug animation into the bubble using NodeFX plugin
        b.plug(Y.Plugin.NodeFX, {
            duration: 7,                    // Duration of the animation (seconds)
            easing: Y.Easing.easeOut,      // Easing function for smoother movement
            to: {
                top: 0,                    // Animate to top
                opacity: 0                 // Fade out
            },
            on: {
                end: function () {
                    // Restart the bubble animation after 10 seconds
                    Y.later(10000, this, function () {
                        animBubble(this.get('node'));
                    });
                }
            }
        });

        o.append(b);        // Add the bubble to the container
        animBubble(b);      // Start animating the bubble
    }

    // Function to randomly animate a bubble
    function animBubble(b) {
        var v = Math.floor(Math.random() * (max - min)) + min; // Random size

        // Set styles: size, position, and visibility
        b.setStyles({
            height: v + 'px',
            width: v + 'px',
            borderRadius: v + 'px',
            top: (oH + 2) + 'px',
            opacity: 1
        });

        // Random horizontal position within the container width
        b.setStyle('left', Math.floor(Math.random() * (oW - v)));

        // Randomize animation duration and vertical end position
        b.fx.set('duration', Math.floor(Math.random() * 2 + 3)); // 3–4 seconds
        b.fx.set('to.top', Math.floor(Math.random() * (oH / 2))); // Half the container height

        b.fx.run(); // Start the animation
    }

    // Create multiple bubbles with random delays
    for (i = 0; i < bubbles; i++) {
        Y.later(Math.random() * timerDelay, this, function () {
            makeBubble();
        });
    }

});
